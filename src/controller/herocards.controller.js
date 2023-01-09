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
  try {
    return res.send("not now");
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
