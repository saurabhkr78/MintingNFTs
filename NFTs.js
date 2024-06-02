let nftCollection = [];


function mintNFT(name, party) {
  const nft = { name: name,party: party};
nftCollection.push(nft);
}


function listNFTs() {
  //use the forEach method to loop through each element (NFT) in the nftCollection array.
  nftCollection.forEach((nft, index) => 
  {
    console.log(`NFT ${index + 1}:`); //to give each NFTs a number and index=0(base)
    console.log(`  Name: ${nft.name}`);
    console.log(`  Party: ${nft.party}`);
  });
}


function getTotalSupply() {
  return nftCollection.length; 
}

mintNFT("Narendra Modi","BJP");
mintNFT("Rahul Gandhi", "INC");
mintNFT("Mamata Banerjee","TMC");

console.log("The below following NFTs are minted:");
listNFTs();

console.log(`Total NFTs minted: ${getTotalSupply()}`);
