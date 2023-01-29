# Hero Cards

Web application about Hero Realms, a deck building game in which we must get the best champions and defeat our enemies by reducing their life points to 0 to achieve victory. A game that I personally like a lot.

## The project

This project aims to create an API and website to show the Hero Realms game universe for educational purposes, that is, to put into practice my knowledge in different technologies. This project is non-profit.

## Technologies used

The data shown in the API is obtained from Web Scraping using the [Cheerio](https://github.com/cheeriojs/cheerio) library. [Express](https://expressjs.com/) the most popular backend framework for Node.js is used.

Using Github Action web scraping is performed every Sunday at 01:00 am.
The API is deployed in [Railway](https://railway.app/).

The website is developed with [React](https://es.reactjs.org/), using [Tailwind](https://tailwindcss.com/) to style the user interface.

## API

URL: https://hero-cards-production.up.railway.app/

### Endpoint

- GET - api/herocards: Returns all the cards in the Hero Realms game
- GET - api/herocards/:id Returns a card
- GET - /ping Check the API response

<br>

## Upcoming Features

- [x] Card search engine by DNI
- [ ] Card search by name, faction and others
- [ ] Characteristics
- [ ] Save the Scraping data in the MongoDB database
- [ ] Home page and extras

<br>

## What is Web Scraping?

Web scraping or web scraping, is a technique used by software programs to extract information from websites. Usually, these programs simulate human browsing on the World Wide Web either by using the HTTP protocol manually, or by embedding a browser in an application. [Wikipedia](https://es.wikipedia.org/wiki/Web_scraping)

## Description

Build your deck in EPIC's fantasy universe with all the intensity of Star Realms space battles.

Hero Realms, the pocket-sized deck-building game that pits two to four heroes against each other.

For a millennium, the Empire was at war. Driven by military rigor and an unprecedented alliance with the dragons, the Imperial Armies celebrated countless victories and suffered few defeats. The Empire grew so large that its greatest enemy was no longer one of the barbarian nations to the East, but its own ungovernable size. On its borders, victories and expansion were replaced by an endless cycle of rebellion and reconquest.

## Aim

Leave the rest of the players with no points on their scoreboard, and be the last survivor.

Learn more about [Hero Realms](https://www.herorealms.com/)
