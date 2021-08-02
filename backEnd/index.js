const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { v4: uuidv4 } = require("uuid");
// API

// - App config
const app = express();
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// - API routes
app.get("/", (request, response) => {
  response.status(200).send("hello world");
});
app.post("/payments/create", async (request, response) => {
    try{
      const total = Math.ceil(request.query.total);
      console.log("Payment Request Recieved for this amount", total);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
      });
      console.log(paymentIntent);
      response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
    }catch(e){
      console.log(e);
      return response.send({error:e.message});
  }
  
});
// - Listen command
app.listen(8282, () => console.log("LISTENING ON PORT 8282"));
