const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://asdf2rocky:Icon@123@cluster0.xfsf72v.mongodb.net/?retryWrites=true&w=majority'
const mongDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result)=> {
    if (err) console.log("--", err)
    else {
        console.log("connected");
    }
});
}

module.exports = mongDB;