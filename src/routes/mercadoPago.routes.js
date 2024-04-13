const mercadopagoRouter = require("express").Router();

const mercadopago = require("mercadopago");
const handlerPostMercadopago = require("../handlers/handlerPostMercadopago");

mercadopagoRouter.post("/", handlerPostMercadopago);

mercadopagoRouter.get("/", (req, res) => {
  mercadopago.preferences.get();
  res.json();
});

module.exports = mercadopagoRouter;
