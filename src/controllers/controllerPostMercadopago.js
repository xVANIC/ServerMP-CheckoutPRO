const { mercadopago } = require("../utils/mercadoPago");

const controllerPostMercadopago = async ({ cart, userData }) => {
  const items = cart.map((item) => ({
    title: item.title,
    description: item.description || "",
    picture_url: item.picture_url,
    currency_id: "PEN",
    quantity: item.quantity,
    unit_price: Number(item.unit_price),
  }));
  const response = await mercadopago.preferences.create({
    items,
    payer: {
      name: userData.fullName,
      surname: userData.fullName,
      email: userData.email,
    },
    back_urls: {
      success: "http://localhost:3000/success",
      failure: "http://localhost:3000/failed",
      pending: "",
    },
    auto_return: "approved",
    payment_methods: {
      excluded_payment_methods: [
        { id: "pagoefectivo_atm" },
        { id: "bancaInternet" },
      ],
      excluded_payment_types: [
        { id: "ticket" },
      ],
      installments: 1,
    },
  });

  if (!response) throw new Error("Error al crear orden");

  return response.body;
};

module.exports = controllerPostMercadopago;
