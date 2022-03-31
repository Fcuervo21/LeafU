import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config()
//database
import { db } from '../database/firebase.js';

//const data = await db.collection('userInfo')
const secret = process.env.SECRET;

export const signin = async (req, res) => {
    const data = db.collection('userData')
    const { email, password } = req.body;
    try {
        //Check if user exists
        const existingUser = await data.where("email", "in", email).get()
        
        if(!existingUser) return res.status(404).json({ message: "User doesnt exist" });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const signup =  async (req, res) => {
    const data = db.collection('userData')
    const { email, password, firstName, lastName } = req.body;
    try {
        const oldUser = await data.where("email", "in", email).get()
    
        if (oldUser) return res.status(400).json({ message: "User already exists" });
    
        const hashedPassword = await bcrypt.hash(password, 12);
        const completeName = `${firstName} ${lastName}`;
        const result = await data.add({
            email,
            hashedPassword,
            completeName
        });
        
        const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
    
        res.status(201).json({ result, token });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
      }
};