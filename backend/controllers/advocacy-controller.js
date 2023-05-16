const Advocacy = require("../model/advocacy");

const getAllAdvocacy = async(req, res, next) => {
    let advocacy;
    try{
        advocacy = await Advocacy.find();
    }catch (err){
        console.log(err);
    }
    if (!advocacy){
        return res.status(404).json({message: "Not found"});
    }
    return res.status(200).json(advocacy);
};

const getById = async(req, res, next) => {
    const id = req.params.id;
    let advocacy;
    try{
        advocacy = await Advocacy.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!advocacy){
        return res.status(404).json({message: "Not Found"});
    }
    return res.status(200).json(advocacy);
};

const addAdvocacy = async (req, res, next) => {
    const {eventname,description, place, contact, image} = 
    req.body;
    let advocacy;
    try{
        advocacy = new Advocacy({
            eventname,
            description,
            place,
            contact,
            image,
        });
        await advocacy.save();
    }catch(err){
        console.log(err);
    }
    if(!advocacy){
        return res.status(500).json({message: "unable to add"});
    }
    return res.status(201).json(advocacy);
};

const updateAdvocacy = async (req, res, next) => {
    const id = req.params.id;
    const {eventname,description, place, contact, image} = 
    req.body;
    let advocacy;
    try{
        advocacy = await Advocacy.findByIdAndUpdate(id, {
            eventname,
            description,
            place,
            contact,
            image,
        });
        advocacy = await advocacy.save();
    }catch(err){
        console.log(err);
    }
    if(!advocacy){
        return res.status(404).json({message: "unable to by this ID"});
    }
    return res.status(200).json(advocacy);
};

const deleteAdvocacy = async (req, res, next) => {
    const id = req.params.id;
    let advocacy;
    try{
        advocacy = await Advocacy.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }
    if(!advocacy){
        return res.status(404).json({message: "unable to delete by this ID"})
    }
    return res.status(200).json({message: "sucessfuly deleted"});
};

exports.getAllAdvocacy = getAllAdvocacy;
exports.addAdvocacy = addAdvocacy;
exports.getById = getById;
exports.updateAdvocacy = updateAdvocacy;
exports.deleteAdvocacy = deleteAdvocacy;