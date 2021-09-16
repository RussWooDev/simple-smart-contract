//web3 needs this to connect: abi and address of smart contract. make sure to put the address as a string
var contractABI = [];
var contractAddress = '0xb58801f175094f636020336821e16BCa2da4d28E';

// need a web3 instance. new to use the new keyword. the lowercase is the instance, the caps is the library itself
var web3 = new Web3('http://localhost:9545');
//need something more specific to interact with the smart contract.
//this will allow web3 to build smart contract and interact
var SimpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(SimpleSmartContract);
// this method returns a promise, therefore need to use ".then"
web3.eth.getAccounts()
.then(console.log);