<template>
	<scroll-view class="page-view" scroll-y>
		<view class="in-step">
			<view class="r-btn">
				<text>质押后即可产生收益</text>
				<label for="" @click="toMy">Mint记录</label>
			</view>
			<view class="ins-box">
				<text @click="get">您的USDT</text>
				<label for="">
					<u-count-to :startVal="0" :endVal="responseData" :decimals="4" color="rgba(255,255,255,.9)"
						fontSize="38"></u-count-to>
				</label>
			</view>
		</view>
		<view class="exchang-btn" @click="exBtn">一键Mint</view>
		<u-popup :show="mmshow" @close="mmshow = false" :round="10">
			<view class="mms-main">
				<text>- 请输入Mint数量 -</text>
				<input type="text" placeholder="输入数量">
				<view class="mint-btn" @click="mintNow">立即Mint</view>
			</view>
		</u-popup>
		<u-modal :show="shows" title="提示" :content="content" showCancelButton @cancel="shows = false" @confirm="confirm"
			closeOnClickOverlay></u-modal>
	</scroll-view>
</template>

<script>
	import Web3 from 'web3'
	import adou from "@/contracts/AdouCollator.json";
	import {
		getStake,addStake
	} from "../../methods/index.js";
	export default {
		data() {
			return {
				myAccount:null,
				mmshow: false,
				numshow: false,
				shows: false,
				content: '',
				chooseid: null,
				nftnum: null,
				cardnum: '1',
				max: null,
				value: null,
				responseData: '',
			}
		},
		async onLoad() {
			// new Promise((resolve, reject) => {
   //              if (window.ethereum) {
   //                      const web3 = new Web3(window.ethereum);
   //                      try {
   //                        // Request account access if needed
   //                        window.ethereum.enable();
   //                        // Acccounts now exposed
   //                        resolve(web3);
   //                      } catch (error) {
   //                        reject(error);
   //                      }
   //                    }
   //                    // Legacy dapp browsers...
   //                    else if (window.web3) {
   //                      // Use Mist/MetaMask's provider.
   //                      const web3 = window.web3;
   //                      console.log("Injected web3 detected.");
   //                      resolve(web3);
   //                    }
   //                    // Fallback to localhost; use dev console port by default...
   //                    else {
   //                      const provider = new Web3.providers.HttpProvider(
   //                        "http://127.0.0.1:9545"
   //                      );
   //                      const web3 = new Web3(provider);
   //                      console.log("No web3 instance injected, using Local web3.");
   //                      resolve(web3);
   //              }
			// });	
			// window.web3 = new Web3(ethereum);
			//     var web3 = window.web3;
			//     // 请求用户授权 解决web3js无法直接唤起Meta Mask获取用户身份
			//     const enable = await ethereum.enable();
			//     console.log(enable,11)
		},
		methods: {
			async get() {
				
				   				
				   				//    web3.eth.sendTransaction({
				   				//        from: this.myAccount,
				   				//        to: account,
				   				//        value,
									  //  data:adou.abi
				   				//    })
				   				//    .then(function(res){
				   				//        console.log(res)
				   				//    }).catch(function(err){
									  //  console.log(err)
								   // });
			},

			chooseNft(item) {
				this.chooseid = item.id
				this.nftnum = item.num
				this.max = item.num
			},
			confirm() {
				let responseData = addStake();
				responseData.then((res) => {
					this.responseData = res;
					console.log(res);
				}).catch((err) => {
					console.log(err);
				});
				this.shows = false
				this.$u.toast('Mint成功')
			},
			exBtn() {
				this.mmshow = true
			},
			mintNow() {
				this.shows = true
				this.content = '是否Mint输入的USDT，Mint期限为365天，中途不可取回，同意请确认'
			},
			toMy() {
				uni.navigateTo({
					url: '/pages/index/pledgelist'
				})
			},
			async onShow() {
				this.get()
				// let responseData = getStake();
				// responseData.then((res) => {
				// 	this.responseData = res;
				// 	console.log(res);
				// }).catch((err) => {
				// 	console.log(err);
				// });


				if (uni.getStorageSync("usertype")) {
					this.usertype = uni.getStorageSync("usertype");
					console.log(typeof this.usertype);
				}
			},
		}
	}
</script>

<style>
	.page-view {
		width: 100%;
		min-height: 100vh;
		overflow: hidden;
		background: linear-gradient(to bottom, #171145, #1A285F);
	}

	.in-step {
		width: 90%;
		height: auto;
		margin: auto;
		padding: 0 5%;
		border-radius: 10px;
		margin-top: 5vw;
	}

	.tishi {
		padding: 3% 5%;
		color: #7A318E;
		font-size: 12px;
	}

	.r-title {
		width: 100%;
		height: auto;
		overflow: hidden;
		text-align: center;
		color: #7A318E;
		padding: 5px 0 15px 0;
	}

	.mms-main {
		width: 90%;
		height: auto;
		overflow: hidden;
		padding: 8% 5%;
		text-align: center;
	}

	.mms-main text {
		display: block;
		font-size: 14px;
		color: #999
	}

	.mms-main input {
		width: 60%;
		height: auto;
		overflow: hidden;
		background: #eee;
		padding: 10px 0;
		text-align: center;
		border-radius: 5px;
		margin: 20px auto;
	}

	.mint-btn {
		width: 100%;
		height: auto;
		overflow: hidden;
		background: #333;
		color: #fff;
		border-radius: 10px;
		padding: 12px 0;
	}

	.num-main {
		width: 90%;
		height: auto;
		overflow: hidden;
		padding: 5%;
	}

	.num-snum {
		padding: 15px 0;
	}

	.num-snum label {
		float: right
	}

	.c-num {
		display: inline-block;
		position: absolute;
		right: 0;
		top: 0;
		background: rgba(0, 0, 0, .6);
		color: rgba(255, 255, 255, .7);
		font-size: 12px;
		padding: 1px 10px;
		border-radius: 0px 10px 0px 10px;
	}

	.showselect {
		position: absolute;
		right: 1vw;
		bottom: 1vw;
		opacity: 0;
	}

	.showselect text {
		font-size: 24px;
	}

	.active {
		opacity: 1;
		color: rgba(255, 255, 255, .3) !important;
		text-shadow: 0px 1px 2px rgba(0, 0, 0, .2);
	}

	.active text {
		color: rgba(255, 255, 255, .3) !important;
	}

	.c-image {
		width: 80%;
		height: auto;
		position: absolute;
		left: 10%;
		bottom: 3px;
	}

	.c-image image {
		width: 100%;
		height: auto;
	}

	.biank text {
		display: block;
		font-size: 38px;
		color: rgba(255, 255, 255, .8);
		line-height: 15vw;
		text-shadow: 0px 1px 2px rgba(0, 0, 0, .5);
	}

	.b-image {
		width: 80%;
		height: auto;
		overflow: hidden;
		position: absolute;
		left: 10%;
		top: -70px;
	}

	.cm-title {
		font-weight: bold;
		text-shadow: 0px 1px 2px rgba(0, 0, 0, .1);
		padding-top: 10px;
	}

	.cm-title image {
		width: 7vw;
		height: 7vw;
		display: block;
		margin: auto;
		margin-top: 15px;
		margin-bottom: 5px;
	}

	.cm-apr {
		font-weight: bold;
		text-shadow: 0px 1px 2px rgba(0, 0, 0, .1);
		font-size: 12px;
	}

	.b-image image {
		display: block;
		width: 100%;
		height: auto;
	}

	.r-btn {
		width: 94%;
		height: auto;
		overflow: hidden;
		background: #23295D;
		border: solid 1px #2F3F72;
		font-size: 12px;
		margin: auto;
		padding: 3%;
		border-radius: 10px;
		color: #ADEAFB
	}

	.r-btn text {
		padding-top: 3px;
		display: inline-block;
	}

	.r-btn text b {
		padding-right: 5px;
	}

	.r-btn text b:last-child {
		padding-left: 5px;
	}

	.r-btn label {
		float: right;
		font-weight: bold;
		background: #ADEAFB;
		color: #2F3F72;
		border-radius: 6px;
		padding: 2px 10px;
	}

	.ins-box {
		width: 100%;
		height: auto;
		overflow: hidden;
		padding: 15% 0 0 0;
		text-align: center;
	}

	.ins-box text {
		display: block;
		color: rgba(255, 255, 255, .7)
	}

	.ins-box label {
		display: block;
		font-size: 34px;
		font-weight: bold;
		padding-top: 10px;
	}

	.ins-box>view {
		width: 28vw;
		height: 40vw;
		float: left;
		text-align: center;
		color: #fff;
		margin-bottom: 3vw;
		border-radius: 10px;
		position: relative;
		overflow: hidden;
	}



	.exchang-btn {
		width: 90%;
		height: auto;
		overflow: hidden;
		position: relative;
		text-align: center;
		overflow: hidden;
		border-radius: 10px;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
		position: fixed;
		left: 5%;
		bottom: 3%;
		background: rgba(35, 41, 93, .95);
		border: solid .5px rgba(37, 151, 224, .5);
		padding: 15px 0 12px 0;
		font-weight: bold;
		color: #FFECEB;
		z-index: 99
	}

	.exchang-btns {
		width: 100%;
		height: auto;
		overflow: hidden;
		position: relative;
		text-align: center;
		overflow: hidden;
		border-radius: 10px;
		box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
		background: rgba(35, 41, 93, .95);
		border: solid .5px rgba(37, 151, 224, .5);
		padding: 15px 0 12px 0;
		font-weight: bold;
		color: #FFECEB;
		margin: auto;
		margin-top: 20px;
	}

	.ex-input {
		width: 90%;
		height: auto;
		overflow: auto;
		margin: auto;
		margin-top: 30px;
	}

	.ex-input input {
		display: block;
		text-align: center;
		border-bottom: solid 1px #7A318E;
		height: auto;
		padding: 15px 0;
		overflow: hidden;
		font-size: 24px;
		color: #7A318E;
		font-weight: bold;
	}
</style>
