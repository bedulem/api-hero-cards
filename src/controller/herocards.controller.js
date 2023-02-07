import heroCards from "../../db/hero_cards.json" assert { type: "json" };

export const getHeroCards = (req, res) => {
  try {
    res.contentType("application/json");
    return res.json(heroCards);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const getOneHeroCard = (req, res) => {
  const { findParam } = req.params;
  const result = heroCards.find((el) => el.id == findParam);
  try {
    return res.send(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const getHeroCardsByName = (req, res) => {
  const { findParam } = req.params;
  const result = heroCards.filter((el) => el.name.includes(findParam));
  try {
    return res.send(result);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
