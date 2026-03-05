import { connection } from "../config/solana.js"
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js"

export const executeFlow = async (from, to, amount) => {

  const sender = new PublicKey(from)
  const receiver = new PublicKey(to)

  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: sender,
      toPubkey: receiver,
      lamports: amount
    })
  )

  return {
    status: "flow prepared",
    from,
    to,
    amount
  }
}
