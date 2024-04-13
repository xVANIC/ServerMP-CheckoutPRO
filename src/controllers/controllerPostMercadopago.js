const { mercadopago } = require("../utils/mercadoPago");

const controllerPostMercadopago = async ({ cart, userData }) => {
  const items = cart.map((item) => ({
    title: item.title,
    description: item.description || "",
    picture_url: item.picture_url,
    currency_id: "PEN",
    quantity: item.quantity /*  Number(item.count), */,
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
      // success: "https://cine-go-ten.vercel.app/payment_success",
      // failure: "https://cine-go-ten.vercel.app/payment_failure",
      success: "http://localhost:3000/success",
      failure: "http://localhost:3000/failed",
      pending: "",
    },
    auto_return: "approved",
  });

  if (!response) throw new Error("Error al crear orden");

  return response.body;
};

module.exports = controllerPostMercadopago;
