const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const awarenessSchema = new Schema({
    ftopic:{
        type: String,
        //required: true,
    },
    fdescription:{
        type: String,
        //required: true,
    },
    flinks:{
        type: String,
        //required: true,
    },
    fimage:{
        type:String,
        //required:true,
    },
    fvideo:{
        type:String,
       // required:true,
    }
});

module.exports = mongoose.model("Awareness" , awarenessSchema);