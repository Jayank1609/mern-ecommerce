// backend/routes/paymentRoute.js
const express = require("express");
const router = express.Router();
const instance = require("../utils/razorpay");

router.post("/create-order", async (req, res) => {
  const options = {
    amount: req.body.amount * 100, // Razorpay uses paisa
    currency: "INR",
    receipt: "order_rcptid_11",
  };

  try {
    const order = await instance.orders.create(options);
    res.status(200).json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
