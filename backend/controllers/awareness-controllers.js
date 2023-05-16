const Awareness = require("../model/Awareness");

const getAllAwareness = async(req, res, next) => {
    let awareness;
    try{
        awareness = await Awareness.find();
    }catch (err){
        console.log(err);
    }
    if (!awareness){
        return res.status(404).jason({message: "Not found"});
    }
    return res.status(200).json(awareness);
};

const getById = async(req, res, next) => {
    const id = req.params.id;
    let awareness;
    try{
        awareness = await Awareness.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!awareness){
        return res.status(404).json({message: "Not Found"});
    }
    return res.status(200).json(awareness);
};

const addAwareness = async (req, res, next) => {
    const {ftopic,fdescription, flinks, fimage, fvideo} = 
    req.body;
    let awareness;
    try{
        awareness = new Awareness({
            ftopic,
            fdescription,
            flinks,
            fimage,
            fvideo,
        });
        await awareness.save();
    }catch(err){
        console.log(err);
    }
    if(!awareness){
        return res.status(500).jason({message: "unable to add"});
    }
    return res.status(201).json(awareness);
};

const updateAwareness = async (req, res, next) => {
    const id = req.params.id;
    const {ftopic,fdescription, flinks, fimage, fvideo} = 
    req.body;
    let awareness;
    try{
        awareness = await Awareness.findByIdAndUpdate(id, {
            ftopic,
            fdescription,
            flinks,
            fimage,
            fvideo,
        });
        awareness = await awareness.save();
    }catch(err){
        console.log(err);
    }
    if(!awareness){
        return res.status(404).jason({message: "unable to by this ID"});
    }
    return res.status(200).json(awareness);
};

const deleteAwareness = async (req, res, next) => {
    const id = req.params.id;
    let awareness;
    try{
        awareness = await Awareness.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }
    if(!awareness){
        return res.status(404).jason({message: "unable to deletee by this ID"})
    }
    return res.status(200).json({message: "sucessfuly deleted"});
};

exports.getAllAwareness = getAllAwareness;
exports.addAwareness = addAwareness;
exports.getById = getById;
exports.updateAwareness = updateAwareness;
exports.deleteAwareness = deleteAwareness;



