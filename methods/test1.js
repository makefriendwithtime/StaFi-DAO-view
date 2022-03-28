import Web3 from "./web3.min.js";
import $store from "@/store/index";
import Web3_, {
    providers
} from "web3";
import adou from "../contracts/AdouCollator.json";
let web3 ;
let web3_= new Web3(new providers.HttpProvider("https://rpc.testnet.moonbeam.network"));
let myContract = new web3_.eth.Contract(adou.abi, "0x531a48659Cf2AF1067E8D03e9d14c5DA2d19D9EB")
export async function addStake(val) {
	if (window.ethereum) {
		try {
			window.ethereum.enable();
		} catch (error) {
			console.error("User denied account access");
		}
		web3 = new Web3(window.ethereum);
	} else if (window.web3) {
		web3 = new Web3(window.ethereum);
	} else {
		alert("Please install wallet");
	}
    const contract = new web3.eth.Contract(adou.abi, "0x531a48659Cf2AF1067E8D03e9d14c5DA2d19D9EB")
	web3.eth.getBalance($store.state.accs)
		.then(console.log);
	var chainId = await web3.eth.getChainId();
	var amount = 1+"";
	var transferData = contract.methods.addStake().encodeABI();
	console.log(transferData)
	console.log("1")
	// var estimateGasRes=await web3.eth.estimateGas({from:$store.state.accs, to: "0x531a48659Cf2AF1067E8D03e9d14c5DA2d19D9EB", value: web3.utils.toWei("1")})
	// console.log(estimateGasRes)

	console.log("2")
	var gasPrice = await web3.eth.getGasPrice();
	console.log("3", gasPrice)

	//计算交易手续费TxFee
	// let fee = estimateGasRes*gasPrice
	// let gass=parseInt(fee) + parseInt(web3.utils.toWei("1","ether"))
	// console.log(gass)
	let nonce = await web3.eth.getTransactionCount('0x531a48659Cf2AF1067E8D03e9d14c5DA2d19D9EB');
	console.log("4", nonce)
	var estimateGasRes = await web3.eth.estimateGas({
		to: '0x531a48659Cf2AF1067E8D03e9d14c5DA2d19D9EB',
		data: transferData,
		from: $store.state.accs,
		// value: amount
		value: web3.utils.toWei(amount)
	});
	let rawTransaction = {
		from: $store.state.accs,
		to: "0x531a48659Cf2AF1067E8D03e9d14c5DA2d19D9EB",
		nonce: web3.utils.toHex(nonce),
		gasPrice: gasPrice,
		// gas: estimateGasRes * 2,
		gas: 2000000 * 2,
		value: web3.utils.toWei(amount),
		data: transferData,
		// chainId: 1287
	}
	
	web3.eth.sendTransaction(rawTransaction).on("transactionHash", function(hash) {
		console.log(hash)
	}).on('error', console.error);
	
	
	
	// const txObject = {
	// 		nonce: web3.utils.toHex(nonce*10),
	// 		to: $store.state.accs,
	// 		gas: 100000*2,
	// 		gasPrice: gasPrice,
	// 		// gasLimit: '0x420710',
	// 		//链ID，这里我填的是BSC测试网的链ID
	// 		chainId: 1287,
	// 		// //这里调用的方法是代币合约里的授权转账方法
	// 		data: contract.methods.addStake().encodeABI()
	// 	}
	// 	console.log(txObject)
	// 	let tx = await web3.eth.accounts.signTransaction(txObject,
	// 		"0x38d785e7eb849e732521be8c1c8e5c52d88524dd183cb8f14687eb9496c384f6")
	// 	console.log(tx)
	// 	web3.eth.sendSignedTransaction(tx.rawTransaction, (err, txHash) => {
	// 		console.log('err:', err, 'txHash:', txHash)
	// 	})
	// 50000000000000000000
	// 1000022317000000000
	


	console.log("5")
}








export async function getBalance() {
	console.log(myContract)
	//获取账户余额
	let res = await myContract.methods.getBalance().call({
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
export async function getTotalReward() {
	//查看节点总奖励
	let res = await myContract.methods.getTotalReward().call({
		from: $store.state.accs,
		gas: 3141592
	})
	return res

}


export async function getStake() {
	//查看抵押
	let res = await myContract.methods.getStake().call({
		from: $store.state.accs,
		gas: 3141592
	})
	return res

}
export async function getStakeProportion() {
	//查看抵押所占比例
	let res = await myContract.methods.getStakeProportion().call({
		from: $store.state.accs,
		gas: 3141592
	})
	return res

}
// 查看节点总抵押
export async function getTotalStake() {
	//查看节点总抵押
	let res = await myContract.methods.getTotalStake().call({
		from: $store.state.accs,
		gas: 3141592
	})
	return res

}
