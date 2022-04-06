<script>
	import Web3 from 'web3'
	import $store from "@/store/index";
	export default {
		async onLaunch() {
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
			if (typeof web3 !== 'undefined') {
			    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
			    // Use Mist/MetaMask's provider
			    window.web3 = new Web3(web3.currentProvider);
			  } else {
			    console.warn("No web3 detected. Falling back to http://127.0.0.1:9545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
			    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
			    window.web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.testnet.moonbeam.network5"));
			  }
			  web3.eth.getAccounts(function(err, accs) {
			    if (err != null) {
			      alert("There was an error fetching your accounts.");
			      return;
			    }
			    if (accs.length == 0) {
			      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
			      return;
			    }
			    // accounts = accs;
				$store.commit('updateAccs',accs[0])
			    ;//第一位账户
			  });
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "./common/iconfont.css";
	/*每个页面公共css */
	@import 'uview-ui/theme.scss';
	@import './common/zwyCss.css';
</style>
