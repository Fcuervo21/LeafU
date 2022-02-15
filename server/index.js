import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
dotenv.config()

import newsRoutes from './routes/news.js';

const app = express();



//General Setup
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Express middleware to connect to our app(Set up starting paths of all news.js)
//Cada ruta dentro de userRoutes va a comenzar con /users
app.use('/news', newsRoutes);
//Settings
const PORT = process.env.PORT || 5000;


//Start Server
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});
