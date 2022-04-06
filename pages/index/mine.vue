<template>
	<scroll-view class="page-view" scroll-y>
		<!--邀请流程-->
		<view class="in-step">
			<view class="title">总抵押</view>
			<view class="ins-box">
				<!-- <text class="iconfont icon-USDT"></text> -->
				<label for="">{{zdyData}}</label>
				<!-- <b @click="recharge">充值USDT</b> -->
			</view>
		</view>
		<!--钱包地址-->
		<view class="wallet-address">
			<view>
				<!-- <text class="iconfont icon-USDT"></text> -->
				<label for="">节点总抵押</label>
				<b>{{jdzdyData}}</b>
			</view>
			<view>
				<!-- <image src="../../static/logos.png" mode="widthFix"></image> -->
				<label for="">抵押所占比例</label>
				<b>{{dyzzbData}}</b>
			</view>
			
		<!-- 	<view>
				<image src="../../static/logos.png" mode="widthFix"></image>
				<label for="">ECToken</label>
				<b>802.66</b>
			</view> -->
		</view>
		<view class="in-step">
			<view class="title">节点总奖励</view>
			<view class="ins-box">
				<!-- <text class="iconfont icon-USDT"></text> -->
				<label for="">{{jdzjlData}}</label>
				<!-- <b @click="recharge">充值USDT</b> -->
			</view>
		</view>
		<view class="wallet-address">
			<view>
				<!-- <text class="iconfont icon-USDT"></text> -->
				<label for="">节点待领取奖励</label>
				<b>{{jddlqjlData}}</b>
			</view>
			<view>
				<!-- <image src="../../static/logos.png" mode="widthFix"></image> -->
				<label for="">年化奖励</label>
				<b>{{nhjlData}}</b>
			</view>
			
		<!-- 	<view>
				<image src="../../static/logos.png" mode="widthFix"></image>
				<label for="">ECToken</label>
				<b>802.66</b>
			</view> -->
		</view>
		<view class="in-step">
			<view class="title">节点成员人数</view>
			<view class="ins-box">
				<!-- <text class="iconfont icon-USDT"></text> -->
				<label for="">{{jdcyrsData}}</label>
				<!-- <b @click="recharge">充值USDT</b> -->
			</view>
		</view>
		<view class="wallet-address">
			<view>
				<!-- <text class="iconfont icon-USDT"></text> -->
				<label for="">节点历史成员总人数</label>
				<b>{{jdlscyzsData}}</b>
			</view>
		
			
		<!-- 	<view>
				<image src="../../static/logos.png" mode="widthFix"></image>
				<label for="">ECToken</label>
				<b>802.66</b>
			</view> -->
		</view>
	</scroll-view>
</template>

<script>
	import Web3 from 'web3'
	import adou from "@/contracts/AdouCollator.json";
	import {
		getStake,getTotalStake,getStakeProportion,getTotalReward,getPendingReward,
		getAnnualReward,getMemberReal,getMemberTotal,
	} from "../../methods/index.js";
	export default {
		data() {
			return {
					zdyData: '',
				jdzdyData: '',
				dyzzbData:'',
				jdzjlData:'',
				jddlqjlData:'',
				nhjlData:'',
				jdcyrsData:'',
				jdlscyzsData:'',
			}
		},
		onLoad() {

		},
		methods: {
			recharge(){
				uni.navigateTo({
					url:'/pages/index/recharge'
				})
			},
			getStake() {
				let zdyData = getStake();
				zdyData.then((res) => {
					this.zdyData = res;
					console.log(res);
				}).catch((err) => {
					console.log(err);
				});
			},
			getTotalStake() {
				let jdzdyData = getTotalStake();
				jdzdyData.then((res) => {
					this.jdzdyData = res;
					console.log(res);
				}).catch((err) => {
					console.log(err);
				});
			},
			getStakeProportion() {
				let dyzzbData = getStakeProportion();
				dyzzbData.then((res) => {
					this.dyzzbData = res;
					console.log(res);
				}).catch((err) => {
					console.log(err);
				});
			},
			getTotalReward() {
				let jdzjlData = getTotalReward();
				jdzjlData.then((res) => {
					this.jdzjlData = res;
					console.log(res);
				}).catch((err) => {
					console.log(err);
				});
			},
			getPendingReward() {
				let jddlqjlData = getPendingReward();
				jddlqjlData.then((res) => {
					this.jddlqjlData = res;
					console.log(res);
				}).catch((err) => {
					console.log(err);
				});
			},
			getAnnualReward() {
				let nhjlData = getAnnualReward();
				nhjlData.then((res) => {
					this.nhjlData = res;
					console.log(res);
				}).catch((err) => {
					console.log(err);
				});
			},
			getMemberReal() {
				let jdcyrsData = getMemberReal();
				jdcyrsData.then((res) => {
					this.jdcyrsData = res;
					console.log(res);
				}).catch((err) => {
					console.log(err);
				});
			},
			getMemberTotal() {
				let jdlscyzsData = getMemberTotal();
				jdlscyzsData.then((res) => {
					this.jdlscyzsData = res;
					console.log(res);
				}).catch((err) => {
					console.log(err);
				});
			},
			async onShow() {
				Promise.all([
				this.getStake(),
				this.getTotalStake(),
				this.getStakeProportion(),
					this.getTotalReward(),
					this.getPendingReward(),
						this.getAnnualReward(),
						this.getMemberReal(),
						this.getMemberTotal(),
				])
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

	.in-title {
		width: 100%;
		height: auto;
		overflow: hidden;
		text-align: center;
		padding: 20px 0;
	}

	.in-title text {
		display: block;
		font-size: 50px;
		color: rgba(255, 255, 255, .9);
		font-weight: bold;
	}

	.in-title label {
		display: block;
		font-size: 28px;
		color: rgba(255, 255, 255, .9);
		font-weight: bold;
	}

	.in-title label b {
		font-size: 28px;
		color: #FDE173;
		font-weight: bold;
	}

	.sm-user {
		width: 14vw;
		height: 14vw;
		border-radius: 100px;
		border: solid 1px #7A318E;
		text-align: center;
		line-height: 14vw;
		background: rgba(99, 41, 124, .3);
		margin: auto;
		box-shadow: 0px 5px 12px rgba(0, 0, 0, .1);
		margin-top: 20px;
	}

	.sm-user text {
		font-size: 28px;
		color: #FDE173
	}

	.user-id {
		width: 100%;
		height: auto;
		overflow: hidden;
		text-align: center;
		font-size: 14px;
		color: #7A318E;
		padding: 12px 0;
	}

	.user-address {
		width: 100%;
		height: auto;
		overflow: hidden;
		text-align: center;
		font-size: 14px;
		color: #7A318E;
		padding: 0 0 12px 0;
	}

	.user-address label {
		display: block;
		width: 34%;
		height: auto;
		overflow: hidden;
		margin: auto;
		margin-top: 10px;
		margin-bottom: 30px;
		border: solid 1px #7A318E;
		background: rgba(99, 41, 124, .3);
		border-radius: 10px;
		padding: 3px 0;
	}

	.in-step {
		width: 90%;
		height: auto;
		padding: 5%;
		background: #23295D;
	}

	.wallet-address {
		width: 90%;
		height: auto;
		margin: auto;
		background: #243158;
		margin: auto;
		padding:2% 5%;
		font-size: 12px;
	}

	.wallet-address>view {
		width: 100%;
		height: auto;
		overflow: hidden;
		padding: 12px 0;
	}

	.wallet-address>view text {
		font-size: 30px;
		color: rgba(255, 255, 255, .7);
		display: block;
		float: left;
	}
	.wallet-address>view label{color:rgba(255,255,255,.9);display: block; float:left; padding-top: 8px; font-size: 16px; padding-left: 10px;}
	.wallet-address>view b{display: block; float:right; font-weight: normal; color:rgba(255,255,255,.9); font-size: 16px; padding-top: 8px;}
	.wallet-address>view image{display: block;width: 8vw; height: 8vw; float:left; margin-top: 2px;}
	
	.s-box>view {
		width: 100%;
		height: auto;
		overflow: hidden;
		padding: 12px 0;
	}
	
	.s-box>view text {
		font-size: 30px;
		color: rgba(255, 255, 255, .7);
		display: block;
		float: left;
	}
	.s-box>view label{color:rgba(255,255,255,.9);display: block; float:left; padding-top: 8px; font-size: 16px; padding-left: 10px;}
	.s-box>view b{display: block; float:right; font-weight: normal; color:rgba(255,255,255,.9); font-size: 16px; padding-top: 8px;}
	.s-box>view image{display: block;width: 8vw; height: 8vw; float:left}
	
	.title {
		width: 100%;
		height: auto;
		overflow: hidden;
		color: #3b5090;
		font-weight: bold;
	}
	.title text{ float:right; font-size:24px; display: block; color:rgba(255,255,255,.3)}
	.small-wallet {
		width: 100%;
		height: auto;
		overflow: hidden;
		margin: auto;
		margin-top: 30px;
	}

	.s-title {
		padding: 3% 5% 0 5%;
		font-size: 14px;
		font-weight: bold;
		color: #516fc7
	}

	.s-box {
		width: 90%;
		height: auto;
		overflow: hidden;
		background: #23295D;
		padding:2% 5%;
		margin-top: 10px;
		font-size: 16px;
		color: #516fc7
	}
	.s-box b {
		float: right
	}

	.ins-box {
		width: 100%;
		height: auto;
		overflow: hidden;
		font-size: 30px;
		color: rgba(255, 255, 255, .8);
		padding-top: 20px;
	}

	.ins-box text {
		font-size: 30px;
		color: rgba(255, 255, 255, .8);
		padding-right: 10px;
	}
	.ins-box b{display: block;float:right; font-size: 14px; font-weight: normal; background: rgba(255,255,255,.8); color:#333; padding: 5px 10px; border-radius: 6px; margin-top:6px;}
	.w-btn {
		width: 100%;
		height: auto;
		overflow: hidden;
		margin: 20px 0 10px 0;
	}

	.w-btn>view {
		width: 30%;
		height: auto;
		overflow: hidden;
		float: left;
		text-align: center;
		background: rgba(255, 255, 255, .8);
		border-radius: 10px;
		font-size: 14px;
		font-weight: bold;
		padding: 10px 0;
	}

	.w-btn>view:nth-child(3n) {
		width: 30%;
		height: auto;
		overflow: hidden;
		float: right;
	}

	.w-btn>view:nth-child(3n-1) {
		width: 30%;
		height: auto;
		overflow: hidden;
		float: left;
		margin-left: 5%;
	}

	.ins-box>view {
		width: 50%;
		float: left;
		padding: 12px 0;
		text-align: center;
	}

	.ins-box>view image {
		display: block;
		width: 7vw;
		height: 7vw;
		margin: auto;
		margin-top: 1.5vw;
	}

	.ins-box>view text {
		display: block;
		font-size: 28px;
		color: #8EE0F6
	}

	.ins-box>view label {
		display: block;
		font-size: 18px;
		color: rgba(255, 255, 255, .7);
		padding-top: 10px;
		font-weight: bold;
	}

	.copy {
		width: 70%;
		height: auto;
		overflow: hidden;
		background: rgba(255, 255, 255, .9);
		text-align: center;
		padding: 12px 0;
		border-radius: 100px;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, .2);
		margin: 10px auto
	}

	.rank {
		width: 90%;
		height: auto;
		overflow: hidden;
		margin: auto;
		margin-top: 20px;
	}

	.r-title {
		width: 100%;
		height: auto;
		overflow: hidden;
		text-align: center;
		color: #7A318E;
		padding-bottom: 15px;
	}

	.r-box {
		width: 100%;
		height: auto;
		overflow: hidden;
		background: rgba(99, 41, 124, .3);
		border-radius: 10px;
		margin-bottom: 50px;
	}

	.rb-one {
		width: 94%;
		height: auto;
		overflow: hidden;
		padding: 12px 3%;
		font-size: 12px;
	}

	.rb-one text {
		color: rgba(255, 255, 255, .8)
	}

	.rb-one label {
		float: right;
		color: #FDE173
	}

	.rb-one:nth-child(2n) {
		background: #7A318E;
	}
</style>
