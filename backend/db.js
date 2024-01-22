// db.js
const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://asdf2rocky:asdf2rocky@cluster1.cxfhhom.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const connectToDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // const fetched_data = await mongoose.connection.db.collection("food_items");
    // fetched_data.find({}).toArray(function(err, data){})
    // if(err) console.log(err);
    // else console.log(data);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToDB;
