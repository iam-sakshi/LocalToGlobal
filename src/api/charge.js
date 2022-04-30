import Stripe from "stripe";
const stripe = new Stripe("sk_test_51I7w5kLA2y1TfdSXs79K2m7bsYkO148ELzZWkG1UBY22ZGVZpMiojdm3v456ZwmLqr6WnmEFEEADAEe3OmLwwhEt00lJ66eB2K");

export default async (req, res) => {
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "INR",
      description: "Global for Local",
      payment_method: id,
      confirm: true
    });

    console.log(payment);

    return res.status(200).json({
      confirm: "abc123"
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message
    });
  }
};