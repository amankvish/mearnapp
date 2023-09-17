const express = require("express");
const app = express();
const port = 5000;

const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://asdf2rocky:Icon1234@cluster0.xfsf72v.mongodb.net/gofoodmern?retryWrites=true&w=majority";
// const uri ="mongodb+srv://asdf2rocky:Icon@123@cluster0.xfsf72v.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    // You can perform database operations here
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  } finally {
    // Close the MongoDB connection when done
    await client.close();
  }
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

main();
