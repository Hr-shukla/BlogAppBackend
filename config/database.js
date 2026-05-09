const mongoose= require("mongoose");
require("dotenv").config();

const connectWithDb=() =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB Connected Succesfully"))
    .catch((error) => {
        console.log("issue in Db");
        console.log(error);
        process.exit(1);
    })
};

module.exports =connectWithDb;