import Web3, {
	providers
} from "web3";
import $store from "@/store/index";

import adou from "../contracts/AdouCollator.json";
let web3 = new Web3(new providers.HttpProvider("https://rpc.testnet.moonbeam.network"));
const contract = new web3.eth.Contract(adou.abi, "0x6aB9b18785C465a097a2178475B5a1b584d74c52")


export async function getBalance() {
	//获取账户余额
	let res = await contract.methods.getBalance().call({
		from: $store.state.accs,
		gas: 3141592
	})
	return res
	// await contract.methods.getBalance().call({
	// 	from: $store.state.accs,
	// 	gas: 3141592
	// }, function(error, result) {
	// 	console.log(result)
	// 	console.log(error)
	// 	return result
		
	// });
}



