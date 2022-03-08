import dotenv from 'dotenv';
import fetch from 'node-fetch';
import express, { response } from 'express';

dotenv.config();

const router = express.Router();
//Al handlers from our routes

export const getNews = async (req, res) => {
    try {
        const data = await fetch(process.env.URLAPI).then(response => response.json())
        // return res.status(200).json(data); 
        res.status(200).json(data.articles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};