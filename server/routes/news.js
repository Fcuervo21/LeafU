import express from "express";
import { getNews } from "../controllers/news.js";
import auth from "../middleware/auth.js";

const router = express.Router();

//We added the prefix of users

router.get('/', auth, getNews);


export default router;