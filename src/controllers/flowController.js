import { executeFlow } from "../services/flowService.js"

export const routeCapital = async (req, res) => {
  try {
    const { from, to, amount } = req.body

    const result = await executeFlow(from, to, amount)

    res.json({
      success: true,
      result
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}
