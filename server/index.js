import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';


dotenv.config()

import newsRoutes from './routes/news.js';


const app = express();

//database
// import { db } from './database/firebase.js';


//General Setup
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Express middleware to connect to our app(Set up starting paths of all news.js)
//Cada ruta dentro de userRoutes va a comenzar con /users
app.use('/news', newsRoutes);
//Settings
const PORT = process.env.PORT || 5000;

//TEST--------------------------------------------
const firebaseApp = initializeApp({
    credential: applicationDefault(),
});

const db = getFirestore(firebaseApp);


app.get('/test', async (req, res) => {
    console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS)
    const querySnapshot = await db.collection('userData').get();

    console.log(querySnapshot.docs[0].data());
    res.send('Hello');
});
//TEST--------------------------------------------

//Start Server
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});