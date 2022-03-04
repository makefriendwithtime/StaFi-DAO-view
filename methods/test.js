import { default as web3 } from "web3";
import { default as contract } from "truffle-contract";

// Import our contract artifacts and turn them into usable abstractions.
import AdouCollator from "../contracts/AdouCollator.json";
let adou = contract(AdouCollator);
adou.setProvider(web3.currentProvider);

export function getBalance() {
  //获取账户余额
  adou
    .deployed()
    .then(function (instance) {
      meta = instance;
      return meta.getBalance.call();
    })
    .then(function (value) {
      console.log(value);
    })
    .catch(function (e) {
      console.log(e);
    });
}
