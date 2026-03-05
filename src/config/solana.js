import { Connection } from "@solana/web3.js"

const RPC = process.env.SOLANA_RPC

export const connection = new Connection(RPC, "confirmed")
