const mongoose = require("mongoose")


exports.connectDatabase = async()=>{
    // connecting  to database 
   await mongoose.connect("mongodb+srv://milanbhandari440:hello@cluster0.tdwg6qm.mongodb.net/?retryWrites=true&w=majority")
   console.log("Database connected successfully")
    
    
}


