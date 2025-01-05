import express from "express";
import routers from "./routers/index.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
router.use(`/api`, routers);

export default router;
