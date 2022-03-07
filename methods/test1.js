import Web3, {
	providers
} from "web3";
import $store from "@/store/index";
//@ts-ignore
import adou from "../contracts/AdouCollator.json";
let web3 = new Web3(new providers.HttpProvider("http://127.0.0.1:9545"));
const contract = new web3.eth.Contract(
	adou.abi,
	"0x6aB9b18785C465a097a2178475B5a1b584d74c52"
);
export function getBalance() {
	//获取账户余额
	web3.eth.getGasPrice()
	.then(console.log);
	web3.eth.getAccounts().then(console.log);
	// console.log($store.state.accs)
	contract.methods.getBalance().call({
		// from: $store.state.accs,
		gas: 20// 以 wei 为单位的默认 gas 价格，当前价格为 20 gwei
	}, function(error, result) {
		// console.log(result)
		console.log(error)
	});
}
