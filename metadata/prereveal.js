const fs = require('fs').promises;

// Prereveal Image CID: Qmf8BJxrNjmViULjLep4X4mfXNrAUhBEVeU7mGmZm2Pt7F
// Prereveal JSON files CID: bafybeiao5zdrevbxhrbhja3smo44geom67znynvdcklvwzvixww3agnwma

class NftMetadata {
  constructor(tokenId) {
    this.name = `PussyDAO OG #${tokenId}`;
    this.description = `Our pre-mint token that guarantees you'll be 1 of 1,000 holders of the Panty Drop – our genesis collection that allows you to redeem your NFT for IRL panties that cum in their very own collector's box`;
    this.image = 'ipfs://Qmf8BJxrNjmViULjLep4X4mfXNrAUhBEVeU7mGmZm2Pt7F';
    this.attributes = [{ trait_type: 'Highly', value: 'Liquid' }];
    this.external_url = 'https://highlyliquid.xyz/';
  }
}

const arr = [];

for (let i = 1; i <= 900; i++) {
  arr.push(i);
}

Promise.all(
  arr.map(async i => {
    fs.appendFile(
      `./prereveal/${i}.json`,
      JSON.stringify(new NftMetadata(i)),
      err => {
        if (err) throw err;
        console.log('done');
      }
    );
  })
);
