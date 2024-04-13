const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const routerMercadopago = require("./routes/mercadoPago.routes");

const app = express();

/* Middlewares */
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/mercado-pago", routerMercadopago);

module.exports = app;

