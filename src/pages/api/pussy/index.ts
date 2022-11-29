// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as web3 from "@solana/web3.js";
import BigNumber from "bignumber.js";
import {
  createTransferCheckedInstruction,
  getAccount,
  getAssociatedTokenAddress,
  getMint,
} from "@solana/spl-token";
import { useConnection } from "@solana/wallet-adapter-react";

const splToken = new web3.Keypair().publicKey;
const MERCHANT_WALLET = new web3.Keypair().publicKey;

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") return get(req, res);
  if (req.method === "POST") return post(req, res);
}

const get = async (request: NextApiRequest, response: NextApiResponse) => {
  const label = "Pussy Dao";
  const icon =
    "https://pbs.twimg.com/media/Fc9gZQHaMAE7nWt?format=png&name=900x900";

  response.status(200).send({
    label,
    icon,
  });
};

const post = async (
  request: NextApiRequest,
  response: NextApiResponse<any>
) => {
  // Account provided in the transaction request body by the wallet.
  const accountField = request.body?.account;
  if (!accountField) throw new Error("missing account");

  const sender = new web3.PublicKey(accountField);

  // create spl transfer instruction
  const { connection } = useConnection();
  const splTransferIx = await createSplTransferIx(sender, connection);

  // create the transaction
  const transaction = new web3.Transaction();

  // add the instruction to the transaction
  transaction.add(splTransferIx);

  // Serialize and return the unsigned transaction.
  const serializedTransaction = transaction.serialize({
    verifySignatures: false,
    requireAllSignatures: false,
  });

  const base64Transaction = serializedTransaction.toString("base64");
  const message = "Thank you for your purchase of ExiledApe #518";

  response.status(200).send({ transaction: base64Transaction, message });
};

async function createSplTransferIx(sender, connection) {
  const senderInfo = await connection.getAccountInfo(sender);
  if (!senderInfo) throw new Error("sender not found");

  // Get the sender's ATA and check that the account exists and can send tokens
  const senderATA = await getAssociatedTokenAddress(splToken, sender);
  const senderAccount = await getAccount(connection, senderATA);
  if (!senderAccount.isInitialized) throw new Error("sender not initialized");
  if (senderAccount.isFrozen) throw new Error("sender frozen");

  // Get the merchant's ATA and check that the account exists and can receive tokens
  const merchantATA = await getAssociatedTokenAddress(
    splToken,
    MERCHANT_WALLET
  );
  const merchantAccount = await getAccount(connection, merchantATA);
  if (!merchantAccount.isInitialized)
    throw new Error("merchant not initialized");
  if (merchantAccount.isFrozen) throw new Error("merchant frozen");

  // Check that the token provided is an initialized mint
  const mint = await getMint(connection, splToken);
  if (!mint.isInitialized) throw new Error("mint not initialized");

  // You should always calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  // let amount = calculateCheckoutAmount();
  // let amount = amount.times(TEN.pow(mint.decimals)).integerValue(BigNumber.ROUND_FLOOR);
  let amount = "1O";

  // Check that the sender has enough tokens
  const tokens = BigInt(String(amount));
  if (tokens > senderAccount.amount) throw new Error("insufficient funds");

  // Create an instruction to transfer SPL tokens, asserting the mint and decimals match
  const splTransferIx = createTransferCheckedInstruction(
    senderATA,
    splToken,
    merchantATA,
    sender,
    tokens,
    mint.decimals
  );

  // Create a reference that is unique to each checkout session
  const references = [new web3.Keypair().publicKey];

  // add references to the instruction
  for (const pubkey of references) {
    splTransferIx.keys.push({ pubkey, isWritable: false, isSigner: false });
  }

  return splTransferIx;
}
