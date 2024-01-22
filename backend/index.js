// index.js
const express = require("express");
const app = express();
const port = 5000;
const connectToDB = require("./db");

// Initialize MongoDB connection
connectToDB();

// Enable CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Parse JSON requests
app.use(express.json());

// Use the CreateUser routes
app.use("/api", require("./Routes/CreateUser"));

// Uncomment the following block if you want to handle a default route
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
