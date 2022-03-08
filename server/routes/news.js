import express from "express";
import { getNews } from "../controllers/news.js";

const router = express.Router();

//We added the prefix of users

router.get('/', getNews);


export default router;