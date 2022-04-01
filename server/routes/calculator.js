import express from "express";
import { getCalculatorData, postCalculatorData } from "../controllers/calculator.js";
import auth from "../middleware/auth.js";

const router = express.Router();

//We added the prefix of users

router.get('/', auth, getCalculatorData);
router.post('/', auth, postCalculatorData);


export default router;