import express from "express"
import { routeCapital } from "../controllers/flowController.js"

const router = express.Router()

router.post("/route", routeCapital)

export default router
