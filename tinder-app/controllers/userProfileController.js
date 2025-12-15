const { userModal } = require('../models/userModel')

const userViewProfile = async (req, res) => {
    try {
        const { id } = req.user;
        const userDetails = await userModal.findById(id);
        if (userDetails) {
            return res.status(200).json({ message: "User details are fetched successfully", result: userDetails })
        } else {
            return res.status(400).json({ message: "User not found" })
        }
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const editUserDetails = async (req, res) => { }

module.exports = {
    userViewProfile,
    editUserDetails
}