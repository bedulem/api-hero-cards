import { Router } from "express";
import {
  getOneHeroCard,
  getHeroCards,
} from "../controller/herocards.controller.js";

const router = Router();

router.get("/herocards", getHeroCards);

router.get("/herocards/:id", getOneHeroCard);

export default router;
