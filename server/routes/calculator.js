import express from "express";
import { getCalculatorData, postCalculatorData } from "../controllers/calculator.js";

const router = express.Router();

//We added the prefix of users

router.get('/', getCalculatorData);
router.post('/', postCalculatorData);


export default router;