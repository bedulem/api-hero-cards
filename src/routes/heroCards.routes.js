import { Router } from "express";
import {
  getOneHeroCard,
  getHeroCards,
  getHeroCardsByName,
} from "../controller/herocards.controller.js";

const router = Router();

router.get("/herocards", getHeroCards);

router.get("/herocards/:findParam", (req, res) => {
  const { findParam } = req.params;
  if (!isNaN(findParam)) {
    console.log("en el if");
    getOneHeroCard(req, res);
  } else {
    getHeroCardsByName(req, res);
  }
});

export default router;
