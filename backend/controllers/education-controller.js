const Education = require("../model/Education");

//get all Education Details

const getAllEducation = async (req, res, next) => {
    let education;
    try{
        education = await Education.find();

    }catch (err) {
        console.log(err);

    }

    if (!education){
        return res.status(404).json({ message: "Nothing found" });
    }
    return res.status(200).json(education);
};

// Add Education 
const addEducation = async (req, res, next) => {
    const {type, Age, Status, Specialists, Reports} = 
    req.body;
    let education;
    try {
        education = new Education({
            type,
            Age,
            Status,
            Specialists,
            Reports

        });
        await education.save();
    } catch (err) {
        console.log(err);
      }
    if (!education) {
      return res.status(500).json({ message: "Unable to add" });
    }
    return res.status(201).json(education);
};

//Get Education Details by ID

const getEduById = async (req, res, next) => {
    const eduid = req.params.id;
    let education;
    try{
        education = await Education.findById(eduid);

    }catch (err) {
        console.log(err);

    }
    if (!education) {
        return res.status(404).json({ message: "No education details found" });
      }
      return res.status(200).json(education);
};

//Update Education Details

const updateEducation = async (req, res, next) => {
    const eduid = req.params.id;
    const {type, Age, Status, Specialists, Reports} = req.body;
    let education;
    try {
        education = await Education.findByIdAndUpdate(eduid, {
            type,
            Age,
            Status,
            Specialists,
            Reports

        });
        education = await education.save();
    } catch (err) {
        console.log(err);
      }
    if (!education) {
      return res.status(500).json({ message: "Unable to add" });
    }
    return res.status(201).json(education);

};

//Delete Education Details

const deleteEducation = async (req, res, next) => {
    const eduid = req.params.id;
    let education;
    try {
        education = await Education.findByIdAndRemove(eduid)
      } catch (err) {
        console.log(err);
      }
      if (!education) {
        return res.status(404).json({ message: "Unable to Delete by id" });
      }
      return res.status(200).json({ message: "Education Successfully Deleted" });
};

exports.addEducation = addEducation;
exports.getAllEducation = getAllEducation;
exports.getEduById = getEduById;
exports.updateEducation = updateEducation;
exports.deleteEducation = deleteEducation;