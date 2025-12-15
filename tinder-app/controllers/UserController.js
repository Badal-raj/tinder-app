const { userModal } = require("../models/userModel");

const bcrypt = require('bcrypt');
const {GenerateToken} = require('../middlewares/AuthToken');

const SignUpUser = async (req, res) => {
    let { firstName, lastName, emailId, password, gender, age, about, skills } = req.body;
    try {
        const existUser = await userModal.findOne({ emailId: emailId });
        if (existUser) {
            return res.status(400).json({ message: "User already exist" });
        }
        // Convert comma-separated skills string into array
        if (typeof skills === "string") {
            skills = skills.split(",").map((s) => s.trim()).filter((d) => d.length > 0);
        } else if (!skills) {
            // If skills is undefined/null, set empty array
            skills = [];
        }

        const salt = await bcrypt.genSalt(10); // generate salt
        const hashPassword = await bcrypt.hash(password, salt);

        // --- Create user ---
        const newUser = await userModal.create({
            firstName: firstName,
            lastName: lastName,
            emailId: emailId,
            password: hashPassword,
            gender: gender,
            age: age,
            about: about,
            skills: skills,
        });

        const token = GenerateToken({ emailId: newUser.emailId, id: newUser._id })

        return res.status(201).json({
            message: "User registered successfully",
            result: newUser,
            token: token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: `Error!! ${error}`,
        });
    }
};

const SignInUser = async (req, res) => {
    const { emailId, password } = req.body;
    try {
        const user_data = await userModal.findOne({ emailId: emailId });
        if (!user_data) {
            return res.status(400).json({ message: "User not found!!" })
        }
        const isMatchPass = await bcrypt.compare(password, user_data.password);
        if (!isMatchPass) {
            return res.status(400).json({ message: "Invalid credential!!" })
        }
        
        const token = GenerateToken({ emailId: user_data.emailId, id: user_data._id })

        return res.status(200).json({ message: "Login successfully", token: token, user: user_data })

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: `Error!! ${error}`,
        });
    }
};

module.exports = {
    SignUpUser,
    SignInUser,
};
