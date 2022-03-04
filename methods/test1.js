import Web3, { providers } from "web3";

//@ts-ignore
import adou from "../contracts/AdouCollator.json";
let web3 = new Web3(new providers.HttpProvider("http://127.0.0.1:9545"));
//@ts-ignore
// const web3 = new Web3(window.ethereum);
// const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(
  adou.abi,
  "0x6aB9b18785C465a097a2178475B5a1b584d74c52"
);
export function getBalance() {
  //获取账户余额
  return contract.methods.getBalance().call();
}
