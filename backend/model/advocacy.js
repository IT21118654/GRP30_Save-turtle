const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const advocacySchema = new Schema({
    eventname:{
        type: String,
        //required: true,
    },
    description:{
        type: String,
        //required: true,
    },
    place:{
        type: String,
        //required: true,
    },
    contact:{
        type:String,
        //required:true,
    },
    image:{
        type:String,
       // required:true,
    }
});

module.exports = mongoose.model("Advocacy" , advocacySchema);