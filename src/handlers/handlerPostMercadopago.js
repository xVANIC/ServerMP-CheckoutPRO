const postPaymentOrder = require("../controllers/controllerPostMercadopago");

const handlerPostMercadopago = async (req, res) => {
  console.log(req.body);
  const { cart, userData } = req.body;
  try {
    const response = await postPaymentOrder({ cart, userData });
    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostMercadopago;
