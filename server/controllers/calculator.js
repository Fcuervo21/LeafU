import dotenv from 'dotenv';
import fetch from 'node-fetch';
import express, { response } from 'express';

//database
import { db } from '../database/firebase.js';


export const getCalculatorData = async (req, res) => {
    try {
        console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS)
        const querySnapshot = await db.collection('userData').get();

        console.log(querySnapshot.docs[0].data());
        res.send('Hello');
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const postCalculatorData = async (req, res) => {
    const { energy, water, gas } = req.body;
    try {
        const data = await db.collection('userInfo').add({
            energy,
            water,
            gas
        })
        console.log(data);
        res.status(201).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
