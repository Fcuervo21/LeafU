import express, { Router } from "express";
import { getNews } from "../controllers/news.js";

const router = Router();

//We added the prefix of users

router.get('/', getNews);


export default router;