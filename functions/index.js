const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const { PagesRounded } = require("@material-ui/icons");
const stripe = require("stripe")(
  "sk_test_51HuiTEF9hRq4WaYbJ5cOSUNo0NuELzz3eBhf5iKleSUBtr2499KwlBz62OnkUqKPMe3zI2aGClXfs4oEB08BAlf100hPNuBs2i"
);
// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => {
  response.status(200).send("Hello World");
});

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  
  console.log("Payment Req received >> ", total);
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// firebase emulators used to test beforw deploy
