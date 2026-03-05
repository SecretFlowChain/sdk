import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import flowRoutes from "./routes/flowRoutes.js"
import logger from "./middleware/logger.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)

app.use("/api/flow", flowRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`SecretFlow API running on port ${PORT}`)
})
