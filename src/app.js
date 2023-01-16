import express from "express";
import inedexRoutes from "./routes/index.routes.js";
import heroCardsRoutes from "./routes/heroCards.routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use(inedexRoutes);
app.use("/api", heroCardsRoutes);
app.get("/", (req, res) => {
  res.send(`
  <h1>Hero Cards</h1>
  <p>----------------------<p>
  <p>Get information from Hero Realms cards with this API</p>
  <h3>GET -  api/herocards</h3>
  <h3>GET -  api/herocards/:id</h3>
  <h3>GET - /ping`);
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app;
