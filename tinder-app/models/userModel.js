const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName: {
            required: true,
            type: String,
            minLength: 3,
            maxLength: 50
        },
        lastName: {
            type: String,
            required: true
        },
        emailId: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            validate: {
                validator: function (v) {
                    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    return regex.test(v);
                },
                message: (props) => `${props.value} is not a valid email!`,
            }
        },
        password: {
            type: String,
            required: true,
            validate: {
                validator: function (value) {
                    // Min 6 chars, at least one uppercase letter, one number
                    const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
                    return regex.test(value);
                },
                message: "Password must be at least 6 characters long, contain one uppercase letter and one number."
            }
        },
        gender: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return ["male", "female", "others"].includes(v.toLowerCase())
                },
                message: "Gender must be Male, Female or Others"
            }
        },
        age: {
            type: Number,
            required: true,
            min: 18
        },
        about: {
            type: String,
        },
        skills: {
            type: [String]
        }
    },
    { timestamps: true }
);

// Exclude the password from the response when the user document is converted to JSON
userSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.password; // This removes the password from the returned object
    return ret;
  },
});

const userModal = mongoose.model('tindusers', userSchema);

module.exports = {
    userModal
}