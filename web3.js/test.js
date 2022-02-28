let Web3 = require("web3");
const testABI = require("../abi/test.json");
let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
let address = "0x6aB9b18785C465a097a2178475B5a1b584d74c52"; //合约地址
// let account_one = web3.eth.accounts[0];//第一位账户
// web3.eth.getAccounts(console.log);
var myContract = new web3.eth.Contract(testABI, address, {
  from: "0xe14D8CADAA998afe013B9831f7019516B493aEc1",
  gasPrice: "20000000000",
});

async function getNum(contractObj, fromAddr) {
  // var name = await myContract.methods
  //   .getRoleAdmin(
  //     "0x7465737400000000000000000000000000000000000000000000000000000000"
  //   )
  //   .call();
  // console.log(name);
  web3.eth.getAccounts(function (err, accounts) {
    console.log(accounts);
    myContract.methods
      .getRoleAdmin(
        "0x7465737400000000000000000000000000000000000000000000000000000000"
      )
      .send({ from: accounts[0], gas: 300000 }, function (error, res) {
        console.log(res);
      });
  });
}
getNum();

console.log(myContract.methods);
