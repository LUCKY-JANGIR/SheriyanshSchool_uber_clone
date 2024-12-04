const mongoose = require("mongoose");

const dbConnect =async()=>{
    await mongoose.connect(process.env.MONGO_URI).then(console.log("Connection to database is successfull [callfrom db/dbconnect file]"))
    .catch((error)=>console.error())
}
module.exports=dbConnect;