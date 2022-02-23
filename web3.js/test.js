let Web3 = require("web3");
// import testABI from "@/abi/test.json";
const testABI = require("../../abi/test.json").default;
let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
console.log(testABI);
// const web3 = new Web3(window.ethereum)
web3.eth.getAccounts().then(console.log);

// var myContractInstance = new web3.eth.Contract(contractABI, adderss, {
//     from: '0x23FCB0E1DDbC821Bd26D5429BA13B7D5c96C0DE0',
//     gasPrice: '100',
// 	...
// });
