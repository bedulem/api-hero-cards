import express from "express";
import inedexRoutes from "./routes/index.routes.js";
import heroCardsRoutes from "./routes/heroCards.routes.js";

const app = express();

app.use(express.json());

app.use(inedexRoutes);
app.use("/api", heroCardsRoutes);
app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app;
