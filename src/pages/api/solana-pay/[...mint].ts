const anchor = require('@project-serum/anchor');
const idl = require('../../../../easy_mint.json');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    var { account } = req.body;
    console.log('begin', account);
    account = new anchor.web3.PublicKey(account);
    var { mint } = req.query;
    mint = mint[0];

    var mintAddress;
    var mintDefinitionAccount;
    switch (mint) {
      case 'usdc':
        //mintAddress = new anchor.web3.PublicKey("4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU");
        mintAddress = new anchor.web3.PublicKey(
          'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
        );
        mintDefinitionAccount = new anchor.web3.PublicKey(
          'EeGYjjLXY4TSY8ANYLQ4PxJ1NreXQSinvn7uy83s6Nav'
        );
        break;
      case 'sol':
        mintAddress = new anchor.web3.PublicKey(
          'So11111111111111111111111111111111111111112'
        );
        //TBD mintDefinitionAccount = new anchor.web3.PublicKey("8g2xD1pmwEHiUV9nj2XPF2uwUyA6ziVSrbd4WpYfu2j8");
        return res.status(500).json({ error: 'invalid mint' });
        break;
      default:
        return res.status(500).json({ error: 'invalid mint' });
    }

    //var con = new anchor.web3.Connection("https://api.devnet.solana.com");
    var con = new anchor.web3.Connection(
      'https://step.rpcpool.com/a0eb8274f7b14e9f33730913efc9'
    );
    var wallet = new anchor.Wallet(new anchor.web3.Keypair());
    var provider = new anchor.AnchorProvider(con, wallet);
    var program = new anchor.Program(
      idl,
      'ezMY4T9fFpdqHTGXn36TA5RBSZRi4Dr7GBEP7AqSWPQ',
      provider
    );

    var programFee = anchor.utils.publicKey.findProgramAddressSync(
      [Buffer.from('fee')],
      program.programId
    )[0];

    var mintDefinition = await program.account.mintDefinition.fetch(
      mintDefinitionAccount
    );
    var mintDefinitionOwner = mintDefinition.owner;
    var payToAccount = mintDefinition.payToAccount;

    /* yeah, can't assume this.
    var payFromTokenAcct = await anchor.utils.token.associatedAddress({
      mint: mintAddress,
      owner: account
    });
    */
    var allTokenAccounts = await con.getParsedTokenAccountsByOwner(account, {
      mint: mintAddress,
    });
    allTokenAccounts.value.sort((a, b) =>
      a.account.data.parsed.info.tokenAmount.uiAmount >
      a.account.data.parsed.info.tokenAmount.uiAmount
        ? 1
        : -1
    );
    var payFromTokenAcct = allTokenAccounts.value[0].pubkey;
    console.log('pay from', payFromTokenAcct.toBase58());

    var payToTokenAcct = await anchor.utils.token.associatedAddress({
      mint: mintAddress,
      owner: payToAccount,
    });

    var nftMint = anchor.utils.publicKey.findProgramAddressSync(
      [mintDefinitionAccount.toBuffer()],
      program.programId
    )[0];

    var deliveryTokenAcct = await anchor.utils.token.associatedAddress({
      mint: nftMint,
      owner: account,
    });

    var ix = await program.methods
      .pleaseMintToken()
      .accounts({
        payer: account,
        programFee,
        mintDefinition: mintDefinitionAccount,
        payWithMint: mintAddress,
        payFromTokenAcct,
        mintDefinitionOwner,
        payToAccount,
        payToTokenAcct,
        recipientWallet: account,
        mint: nftMint,
        deliveryTokenAcct,
      })
      .instruction();

    var tx = new anchor.web3.Transaction();
    tx.instructions.push(ix);
    tx.feePayer = account;
    tx.recentBlockhash = (await con.getLatestBlockhash()).blockhash;

    var txSer = tx.serialize({
      requireAllSignatures: false,
      verifySignatures: false,
    });
    var txSerEnc = txSer.toString('base64');

    res.status(200).json({
      message: 'Purchased PussyDAO OG List Token',
      transaction: txSerEnc,
    });
  } else {
    res.status(200).json({
      label: 'Purchase PussyDAO OG List Token for 225 USDC',
      icon: 'https://zpfbjw3hqjn42lq3l4ankh37mk57kizg6mkyoaa2i5rfkco4h5ia.arweave.net/y8oU22eCW80uG18A1R9_Yrv1IybzFYcAGkdiVQncP1A?ext=jpg',
    });
  }
}
