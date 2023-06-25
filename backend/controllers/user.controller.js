const { userModel } = require("../models/user.model");

const userData = [
    {
        name: "Akshat Bharadwaj",
        email: "bharadwaj_akshat@kub-pouros.test",
        gender: "male",
        status: "active",
    },
    {
        name: "Achalesvara Panicker",
        email: "achalesvara_panicker@weber.example",
        gender: "male",
        status: "active",
    },
    {
        name: "Lai Deshpande DVM",
        email: "lai_deshpande_dvm@wisoky-rowe.example",
        gender: "female",
        status: "inactive",
    },
    {
        name: "Dr. Daevika Johar",
        email: "daevika_dr_johar@jacobson-runolfsdottir.test",
        gender: "female",
        status: "inactive",
    },
    {
        name: "Gandharva Gill JD",
        email: "gandharva_jd_gill@hand-mclaughlin.example",
        gender: "female",
        status: "active",
    },
    {
        name: "Anwesha Mukhopadhyay",
        email: "anwesha_mukhopadhyay@beatty-nienow.example",
        gender: "male",
        status: "inactive",
    },
    {
        name: "Bhadra Banerjee",
        email: "bhadra_banerjee@hirthe-miller.example",
        gender: "male",
        status: "inactive",
    },
    {
        name: "Puneet Joshi",
        email: "joshi_puneet@lubowitz-runolfsson.example",
        gender: "female",
        status: "active",
    },
    {
        name: "Kanak Prajapat",
        email: "prajapat_kanak@morissette.example",
        gender: "male",
        status: "inactive",
    },
    {
        name: "Shreya Rana",
        email: "shreya_rana@kemmer-prohaska.example",
        gender: "male",
        status: "active",
    },
]


/*------------------------ All user post Route ---------------------*/
exports.postUser = async (req, res) => {
    try {
        const users = await userModel.insertMany(userData);
        res.status(200).send(users);
    } catch (error) {
        console.error("Error fetching users check again:", error);
        res.status(400).send({ "msg": error.message, "error": error });
    }
}


/*---------------------- All user get route  -------------------------*/
exports.getUser = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).send(users);
    } catch (error) {
        console.error("Error fetching users check again:", error);
        res.status(404).send({ "msg": error.message, "error":error });
    }
}



/*----------------------- User update route -------------------------*/
exports.updateUser = async (req, res) => {

    const id = req.params.id;
    const { name, email, gender, status } = req.body;

    if (!req.body) {
        res.status(401).send({ message: 'Please provide update inputs or try again' })
        return;
    };
   
    try {
        const userData = await userModel.findById(id);
        if(userData){
            const result = await userModel.findByIdAndUpdate({ _id: id }, req.body);
            res.status(200).send({ message: "User data updated successfully", user: result });
        }else{
            res.status(404).send({ message: "User Not found try again with different credentials"});
        }
    } catch (error) {
        console.error("Error updating user data:", error);
        res.status(400).send({"msg":error.message, "error": `An error:(${error}) occurred while updating user data` });
    }
}