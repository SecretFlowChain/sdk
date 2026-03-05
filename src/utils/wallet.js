import { Keypair } from "@solana/web3.js"

export const createWallet = () => {
  const wallet = Keypair.generate()

  return {
    publicKey: wallet.publicKey.toString(),
    secretKey: Array.from(wallet.secretKey)
  }
}
