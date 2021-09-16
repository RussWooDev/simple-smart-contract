//injected by truffle. represemtws all the compiled smart contract in buiild foler. 
// with require methid we can pass in teh name of teh smart contract
// it will return an object which is a contract artifact
// can use contract artificat to actaully? do the migration of your smart contract and deploy it to the blockchain

const SimpleSmartContract = artifacts.require("SimpleSmartContract");

// each migration needs to export a function. It will be given a deployer object 
// it has a deploy method it can deploy contrtact artifact
module.exports = function(deployer) {
  deployer.deploy(SimpleSmartContract);
};
