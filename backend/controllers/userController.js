import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js'

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// ROUTE FOR USER LOGIN
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email })
        // if user doesn't exist
        if (!user) {
            res.json({ success: false, message: "User doesn't exists" })
        }
        // if password is correct
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "invalid credentials" })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// ROUTE FOR USER REGISTRATION
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // checking if user exists or not
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: 'user alredy exists' });
        }

        // validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'PLease Enter a valid Email' });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: 'PLease Enter a strong password' });
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()

        // Token generation jwt
        const token = createToken(user._id)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message });
    }
}

// ROUTE FOR ADMIN LOGIN
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invaild credentials" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message });
    }
}

export { loginUser, registerUser, adminLogin }