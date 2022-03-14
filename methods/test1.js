import Web3, {
	providers
} from "web3";
import $store from "@/store/index";
// //@ts-ignore
// // import ganache from "ganache";
// //  const options = { gasLimit: 8000000 };
// //  const provider = ganache.provider(options);
import adou from "../contracts/AdouCollator.json";
let web3 = new Web3(new providers.HttpProvider("https://rpc.testnet.moonbeam.network"));
// var myContract = new web3.eth.Contract(adou.abi, "0x6aB9b18785C465a097a2178475B5a1b584d74c52", {
// 	from: $store.state.accs,
// 	gasLimit: web3.utils.toHex(8000000),
// 	gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
// })
const contract = new web3.eth.Contract(adou.abi, "0x6aB9b18785C465a097a2178475B5a1b584d74c52")

// 读取val值
// contract.methods.get().call((err, val) => {
//   console.log({ err, val })
// })
export async function getBalance() {
	//获取账户余额
	// let res = await myContract.methods.getBalance().call()
	contract.methods.getBalance().call({
		from: $store.state.accs,
		gas: 3141592
	}, function(error, result) {
		console.log(result)
		console.log(error)
	});
}



