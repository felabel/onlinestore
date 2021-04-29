// This would define the model which would store the data of our users. We will start by creating a User.js file in the ‘models’ folder we created earlier.

// So, we will start by first requiring mongoose in our file. We will also require an isEmail validator from the ‘validator’ dependency we installed in the first part.


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

// creating the UserSchema which would be from the Schema  defined above.
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true,'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a valid password'],
        minlength: [6, 'Minimum password length must be 6 characters']
    },
    register_date: {
        type: Date,
        default: Date.now
    }
})

// exporting the user model
module.exports = User = mongoose.model('user',UserSchema);