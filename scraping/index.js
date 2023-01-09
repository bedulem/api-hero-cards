import fetch from "node-fetch";
import * as cheerio from "cheerio";
import { writeDBFile } from "../db/index.js";
import { logInfo, logError, logSuccess } from "./log.js";

export const SCRAPINGS = {
  hero_cards: {
    url: "https://www.herorealms.com/card-gallery/",
    scraper: getHeroCards,
  },
};

export async function scrape(url) {
  const res = await fetch(url);
  const html = await res.text();
  return cheerio.load(html);
}

async function getHeroCards() {
  const $ = await scrape(SCRAPINGS.hero_cards.url);
  const $row = $("table tbody tr");

  const HEROCARDS_SELECTORS = {
    set: { selector: ".column-2", typeOf: "string" },
    name: { selector: ".column-4", typeOf: "string" },
    text: { selector: ".column-5", typeOf: "string" },
    type: { selector: ".column-6", typeOf: "string" },
    factionOrColor: { selector: ".column-7", typeOf: "string" },
    cost: { selector: ".column-8", typeOf: "number" },
    defense: { selector: ".column-9", typeOf: "number" },
    other: { selector: ".column-10", typeOf: "string" },
    role: { selector: ".column-11", typeOf: "string" },
    notes: { selector: ".column-12", typeOf: "string" },
    artist: { selector: ".column-13", typeOf: "string" },
  };

  const cleanText = (text) => {
    return text.replace(/\n|◆/g, "");
  };

  const cleanDefense = (text) => {
    return text.replace(/Guard/, "");
  };

  const heroCardsSelectorsEntries = Object.entries(HEROCARDS_SELECTORS);

  const heroCards = [];
  $row.each((index, el) => {
    const heroCardsEntries = heroCardsSelectorsEntries.map(
      ([key, { selector, typeOf }]) => {
        const rawValue = $(el).find(selector).text();

        if (key === "defense") {
          const cleanedValue = cleanDefense(rawValue);
          const value =
            typeOf === "number" ? Number(cleanedValue) : cleanedValue;
          return [key, value];
        }

        const cleanedValue = cleanText(rawValue);
        const value = typeOf === "number" ? Number(cleanedValue) : cleanedValue;
        return [key, value];
      }
    );
    const rawImageFront = $(el)
      .find(".column-1 .cardfront")
      .children("img")
      .attr("src");
    const rawImageBack = $(el)
      .find(".column-1 .cardback")
      .children("img")
      .attr("src");
    heroCardsEntries.push(["imageFront", rawImageFront]);
    heroCardsEntries.push(["imageBack", rawImageBack]);

    heroCards.push(Object.fromEntries(heroCardsEntries));
  });
  return heroCards;
}

export async function scrapeAndSave(name) {
  const start = performance.now();

  try {
    const { scraper, url } = SCRAPINGS[name];

    logInfo(`Scraping [${name}]...`);
    const $ = url ? await scraper(url) : null;
    const content = await scraper($);
    logSuccess(`[${name}] scraped succesfully`);

    logInfo(`Writing [${name}] to database...`);
    await writeDBFile(name, content);
    logSuccess(`[${name}] writtem successfully`);
  } catch (e) {
    logError(`Error scraping [${name}]`);
    logError(e);
  } finally {
    const end = performance.now();
    const time = (end - start) / 1000;
    logInfo(`[${name}] scraped in ${time} seconds`);
  }
}

scrapeAndSave("hero_cards");
