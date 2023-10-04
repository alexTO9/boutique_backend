const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Product = require("./productSchema");
const cors = require("cors");

// Setup firebase
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBfD-b8u1SMbzAhAK-LTn2mmQ71Jmuhacw",
//   authDomain: "arlekin-bebe.firebaseapp.com",
//   databaseURL: "https://arlekin-bebe.firebaseio.com",
//   projectId: "arlekin-bebe",
//   storageBucket: "arlekin-bebe.appspot.com",
//   messagingSenderId: "132838440535",
//   appId: "1:132838440535:web:630302c47a1110a0d92d12",
//   measurementId: "G-GY7BWBQME5"
// };

// const analytics = getAnalytics(app);

// Set up express app
const app = express();

// Initialize Firebase
// app.initializeApp(firebaseConfig);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://mra9393:ddl31fKqA42sgxMH@cluster0.ea69kat.mongodb.net/arlekindb",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(`Error connecting to MongoDB: ${err}`);
  });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a POST route for creating new products
app.post("/", (req, res) => {
  // Create a new Product instance with data from the request body
  const newProduct = new Product({
    sku: req.body.sku,
    title: req.body.title,
    stock: req.body.stock,
    colors: req.body.colors,
    sex: req.body.sex,
    size: req.body.size,
    line: req.body.line,
    category: req.body.category,
    regPrice: req.body.regPrice,
    season: req.body.season,
    salePrice: req.body.salePrice,
    saleInitialDate: req.body.saleInitialDate,
    saleFinalDate: req.body.saleFinalDate,
    images: req.body.images,
  });
  // Save the new product to the database
  newProduct
    .save()
    .then(() => {
      console.log("New product saved");
      res.status(201).send();
    })
    .catch((err) => {
      console.log(`Error saving product: ${err}`);
      res.status(500).send();
    });
});

app.get("/products", (req, res) => {
  // res.send("Hello World!");
  Product.find({})
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      console.log(`Error retrieving products: ${err}`);
      res.status(500).send();
    });
});

app.get("/products/:sku", (req, res) => {
  const { sku } = req.params;
  // const regex = new RegExp(`.*${sku}.*`, "i");
  Product.find({ sku })
    .then((products) => {
      if (products.length === 0) {
        res.status(404).json({ message: "NO EXISTE ESE CÓDIGO EN EL INVENTARIO." });
      } else {
        res.status(200).json(products);
      }
    })
    .catch((err) => {
      console.log(`Error retrieving products: ${err}`);
      res.status(500).send();
    });
});

app.delete("/products/:sku", (req, res) => {
  const { sku } = req.params;
  Product.deleteOne({ sku })
    .then((result) => {
      if (result.deletedCount === 0) {
        res.status(404).json({ message: "NO EXISTE ESE CÓDIGO EN EL INVENTARIO." });
      } else {
        res.status(200).json({ message: "El producto se ha eliminado correctamente." });
      }
    })
    .catch((err) => {
      console.log(`Error deleting product: ${err}`);
      res.status(500).send();
    });
});


// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
