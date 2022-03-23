<template>
	<scroll-view class="page-view" scroll-y>
		<!--顶部-->
		<view class="page-top">
			<view class="pt-left">
				<image src="../../static/logoss.png" mode="widthFix"></image>
			</view>
			<view class="pt-right" @click="showMenu"><text class="iconfont icon-gengduo"></text></view>
		</view>
		<!--更多操作-->
		<view v-if="usertype == '123456'" :class="menushow ? 'more-menu showm' : 'more-menu'">
			<view class="mm-one" @click="toZhi">Mint</view>
			<view class="mm-one" @click="toUser">钱包</view>
			<view class="mm-one" @click="toDui">Swap</view>
			<view class="mm-one" @click="toGover">社区治理</view>
			<view class="mm-one" @click="loginOut">退出</view>
		</view>
		<view v-else-if="usertype == '654321'" :class="menushow ? 'more-menu showm' : 'more-menu'">
			<view class="mm-one" @click="toSwap">Swap</view>
			<view class="mm-one" @click="toFaucet">Faucet</view>
			<view class="mm-one" @click="toSet">Set</view>
			<view class="mm-one" @click="loginOut">退出</view>
		</view>
		<!--卡片-->
		<view class="main-card">
			<view class="m-bg">
				<image class="zwyRotate" src="../../static/mainbg.png" mode="widthFix"></image>
			</view>
			<view class="card-text">
				<image src="../../static/logos.png" class="xzs"></image>
			</view>
		</view>
		<!--按钮-->
		<view class="btn-box" v-if="usertype == '123456'">
			<div class="light-btn" @click="toZhi">Mint To DAO Pool</div>
		</view>
		<!--数据统计-->
		<view class="data-count">
			<view class="dc-one">
				<text>节点总奖励</text>
				<label for="">{{zongsuData}}USDT</label>
			</view>
			<view class="dc-one">
				<text>账户余额</text>
				<label for="">{{responseData}}USDT</label>
			</view>
			<view class="dc-one">
				<text>抵押所占比例</text>
				<label for="">{{dyzzbData}}</label>
			</view>
			<view class="dc-one">
				<text>节点总抵押</text>
				<label for="">{{jdzdyData}}USDT</label>
			</view>
		</view>
		<!--合作伙伴-->
		<view class="partners">
			<view class="p-title">合作伙伴</view>
			<view class="p-box">
				<view class="p-one">
					<image src="../../static/p1.png" mode="widthFix"></image>
				</view>
				<view class="p-one">
					<image src="../../static/p2.png" mode="widthFix"></image>
				</view>
				<view class="p-one">
					<image src="../../static/p3.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<view class="other-info">
			<view class="oi-image">
				<image src="../../static/xiushi.png" mode="widthFix"></image>
			</view>
			<view class="oi-main">
				<view class="pi-title">关于我们</view>
				<view class="oi-box">
					<text>项目介绍</text>
				</view>
				<view class="pi-title">联系我们</view>
				<view class="oi-boxs">
					<view>
						<label for=""><text class="iconfont icon-youxiang"></text></label>
						<b>Email</b>
					</view>
					<view>
						<label for=""><text class="iconfont icon-Send"></text></label>
						<b>Telegram</b>
					</view>
				</view>
				<!--底部LOGO-->
				<view class="f-logo">
					<image src="../../static/logo.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import {
		getBalance,
		getTotalReward,
		getStakeProportion,
		getTotalStake
	} from "../../methods/test1.js";
	export default {
		data() {
			return {
				menushow: false,
				show: false,
				usertype: "",
				zongsuData: '',
				responseData: '',
				dyzzbData: '',
				jdzdyData: '',
			};
		},
		onLoad() {
			this.menushow = false;
		},
		methods: {
			showMenu() {
				if (!this.menushow) {
					this.menushow = true;
				} else {
					this.menushow = false;
				}
				console.log(this.menushow);
			},
			toUser() {
				uni.navigateTo({
					url: "/pages/index/user",
				});
				this.menushow = false;
			},
			toDui() {
				uni.navigateTo({
					url: "/pages/index/exchange",
				});
				this.menushow = false;
			},
			toZhi() {
				uni.navigateTo({
					url: "/pages/index/pledge",
				});
				this.menushow = false;
			},
			loginOut() {
				uni.clearStorageSync();
				this.$u.toast("退出成功");
				setTimeout(() => {
					uni.navigateTo({
						url: "/pages/index/login",
					});
				}, 1000);
			},
			toGover() {
				uni.navigateTo({
					url: "/pages/index/government",
				});
				this.menushow = false;
			},
			toFaucet() {
				uni.navigateTo({
					url: "/pages/index/faucet",
				});
				this.menushow = false;
			},
			toSwap() {
				uni.navigateTo({
					url: "/pages/index/swap",
				});
				this.menushow = false;
			},
			toSet() {
				uni.navigateTo({
					url: "/pages/index/set",
				});
				this.menushow = false;
			},
			getBalance() {
				let responseData = getBalance();
				responseData.then((res) => {
					this.responseData = res;
					console.log(res);
				}).catch((err) => {
					console.log(err);
				});
			},
			getTotalReward() {
				let zongsuData = getTotalReward();
				zongsuData.then((res) => {
					this.zongsuData = res;
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
			getTotalStake() {
				let jdzdyData = getTotalStake();
				jdzdyData.then((res) => {
					this.jdzdyData = res;
					console.log(res);
				}).catch((err) => {
					console.log(err);
				});
			}
		},
		async onShow() {
			Promise.all([
				this.getBalance(),
				this.getTotalReward(),
				this.getStakeProportion(),
				this.getTotalStake(),
			])
			if (uni.getStorageSync("usertype")) {
				this.usertype = uni.getStorageSync("usertype");
				console.log(typeof this.usertype);
			}
		},
	};
</script>

<style>
	.page-view {
		width: 100%;
		min-height: 100vh;
		overflow: hidden;
		background: linear-gradient(to bottom, #181354, #1a285f);
	}

	.page-top {
		width: 90%;
		height: auto;
		overflow: hidden;
		padding: 5%;
		position: relative;
		z-index: 9;
	}

	.pt-left {
		width: 40%;
		height: auto;
		float: left;
		padding-top: 10px;
	}

	.pt-left image {
		display: block;
		width: 100%;
		height: auto;
	}

	.pt-left label {
		font-size: 14px;
		font-weight: bold;
		padding-left: 5px;
		color: #a950c2;
	}

	.pt-right {
		width: auto;
		float: right;
		background: rgba(0, 93, 148, 0.2);
		display: inline-block;
		border-radius: 10px;
		padding: 8px 28px;
		border: solid 0.5px rgba(255, 255, 255, 0.1);
		opacity: 0.78;
	}

	.pt-right text {
		color: rgba(255, 255, 255, 0.9);
		font-size: 22px;
	}

	.main-card {
		width: 100%;
		height: 90vw;
		overflow: hidden;
		position: relative;
		margin-top: 25px;
	}

	.m-bg {
		width: 80vw;
		height: auto;
		overflow: hidden;
		position: absolute;
		left: 10vw;
		top: 0;
	}

	.m-bg image {
		display: block;
		width: 100%;
		height: auto;
	}

	.show-main {
		width: 60vw;
		height: 100vh;
		background: rgba(66, 24, 74, 0.95);
	}

	.show-main text {
		color: #fff;
		display: block;
		padding-top: 10px;
	}

	.btn-box {
		width: 90%;
		height: auto;
		overflow: hidden;
		z-index: 9;
		padding: 5%;
		margin: auto;
		position: relative;
	}

	.light-btn {
		position: relative;
		display: inline-block;
		height: auto;
		padding: 15px 0;
		width: 100%;
		font-size: 18px;
		border-radius: 10px;
		text-align: center;
		background: none !important;
		border: solid 0.5px rgba(37, 151, 224, 0.5);
		overflow: hidden;
		float: left;
		color: #81c9f4;
		font-weight: 400;
	}

	.light-btn:nth-child(2n) {
		background: none !important;
		border: solid 0.5px rgba(37, 151, 224, 0.5);
		padding: 14.5px 0 !important;
	}

	.card-one {
		width: 54vw;
		height: 78vw;
		background: rgba(187, 188, 198, 0.5);
		margin: auto;
		border-radius: 10px;
		box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.5);
		border: solid 1px #00426f;
		position: relative;
		z-index: 9;
		overflow: hidden;
	}

	.more-menu {
		display: none;
		width: 22vw;
		height: auto;
		position: absolute;
		right: 5%;
		top: 100px;
		z-index: 99;
	}

	.mm-one {
		display: inline-block;
		width: 22vw;
		text-align: center;
		margin-bottom: 10px;
		background: linear-gradient(130deg, #00e3ff 0%, #00aeff 34%, #008bff 100%);
		display: inline-block;
		border-radius: 10px;
		padding: 8px 0;
		color: rgba(255, 255, 255, 0.9);
	}

	.tou {
		width: 50%;
		height: auto;
		overflow: hidden;
		position: absolute;
		left: 0;
		top: 0;
	}

	.tou image {
		display: block;
		width: 100%;
		height: auto;
	}

	.card-text {
		width: 100%;
		height: auto;
		overflow: hidden;
		text-align: center;
		position: relative;
		z-index: 10;
	}

	.card-text image {
		width: 60vw;
		height: 60vw;
		opacity: 0.79;
		display: block;
		margin: auto;
		margin-top: 6%;
	}

	.child {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		letter-spacing: -5px;
		mix-blend-mode: overlay;
		text-shadow: 0 0 5px #fff;
		color: #fff6;
	}

	svg {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	.i-btns {
		display: block;
		position: absolute;
		width: 56%;
		height: auto;
		left: 22%;
		overflow: hidden;
		top: 16px;
	}

	.i-btn {
		display: block;
		position: absolute;
		width: 68%;
		height: auto;
		left: 16%;
		overflow: hidden;
		top: 17.5px;
	}

	.light-btn:nth-child(2) {
		float: right;
		background: rgba(0, 0, 0, 0.3);
	}

	.bg-image {
		width: 70%;
		height: auto;
		overflow: hidden;
		margin: auto;
		position: absolute;
		z-index: 9;
		left: 15%;
		top: 12%;
	}

	.bg-image image {
		display: block;
		width: 100%;
		height: auto;
		overflow: hidden;
	}

	.bg-images {
		width: 70%;
		height: auto;
		overflow: hidden;
		margin: auto;
		position: absolute;
		z-index: 9;
		left: 15%;
		top: 12%;
	}

	.bg-images image {
		display: block;
		width: 100%;
		height: auto;
		overflow: hidden;
	}

	.bg-imagee {
		width: 70%;
		height: auto;
		overflow: hidden;
		margin: auto;
		position: absolute;
		z-index: 9;
		left: 15%;
		top: 10%;
	}

	.bg-imagee image {
		display: block;
		width: 100%;
		height: auto;
		overflow: hidden;
	}

	.bg-imageee {
		width: 70%;
		height: auto;
		overflow: hidden;
		margin: auto;
		position: absolute;
		z-index: 9;
		left: 15%;
		top: 10%;
	}

	.bg-imageee image {
		display: block;
		width: 100%;
		height: auto;
		overflow: hidden;
	}

	.bg-imagess {
		width: 100%;
		height: auto;
		overflow: hidden;
		margin: auto;
		position: absolute;
		z-index: 9;
		left: 0;
		bottom: 0;
	}

	.bg-imagess image {
		display: block;
		width: 100%;
		height: auto;
		overflow: hidden;
		opacity: 0.5;
	}

	.card-change {
		width: 64%;
		height: auto;
		overflow: hidden;
		position: absolute;
		left: 18%;
		top: 30%;
		z-index: 10;
	}

	.swiper-one {
		width: 36vw;
		height: 50vw;
		overflow: auto;
		background: #ffcc00;
		border-radius: 10px;
		text-align: center;
		position: relative;
		overflow: hidden;
		display: inline-block;
		margin-right: 35.29rpx;
	}

	.rabot {
		width: 80%;
		height: auto;
		overflow: hidden;
		position: absolute;
		left: 10%;
		bottom: 0%;
		z-index: 9;
		z-index: 5;
	}

	.rabot image {
		width: 100%;
		height: auto;
	}

	.biank text {
		display: block;
		font-size: 68px;
		color: rgba(255, 255, 255, 0.8);
		line-height: 36vw;
		text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
	}

	.level {
		width: 85%;
		height: auto;
		overflow: hidden;
		position: absolute;
		left: 3vw;
		top: 3vw;
		z-index: 10;
		padding-top: 3px;
		text-align: center;
		text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
	}

	.level text {
		display: block;
		width: 15%;
		height: auto;
		overflow: hidden;
		float: left;
	}

	.level text image {
		display: block;
		width: 100%;
		height: auto;
	}

	.level i {
		display: block;
		font-size: 12px;
		color: #fff;
		float: right;
		padding-right: 2px;
		padding-top: 2px;
	}

	.level label {
		display: block;
		float: left;
		font-size: 14px;
		font-weight: bold;
		color: #fff;
		padding-left: 3px;
	}

	.swiper {
		height: 50vh;
	}

	.biank {
		width: 88%;
		height: 35vw;
		position: absolute;
		left: 6%;
		top: 12vw;
		border: solid 1px rgba(255, 255, 255, 0.3);
		border-radius: 15px;
	}

	.b-image {
		width: 80%;
		height: auto;
		overflow: hidden;
		position: absolute;
		left: 10%;
		top: -70px;
	}

	.b-image image {
		display: block;
		width: 100%;
		height: auto;
	}

	.s-one {
		background: linear-gradient(170deg,
				rgba(9, 9, 9, 0.79) 9.75%,
				rgba(255, 0, 0, 0.79) 95.05%),
			rgb(204, 39, 39);
		/* background-image: url(../../static/j1.png) !important; */
	}

	.s-one text {
		color: rgba(255, 0, 0, 0.79);
		position: relative;
		z-index: 10;
	}

	.s-two {
		background: linear-gradient(170deg,
				rgba(9, 9, 9, 0.79) 9.75%,
				rgba(86, 18, 91, 0.79) 95.05%),
			#dc27f4;
		/* background-image: url(../../static/j2.png) !important; */
	}

	.s-two text {
		color: rgba(86, 18, 91, 0.79);
		position: relative;
		z-index: 10;
	}

	.s-three text {
		color: #f3b013;
		position: relative;
		z-index: 10;
	}

	.s-three {
		background: linear-gradient(170deg, rgba(9, 9, 9, 0.79) 9.75%, #f3b013 95.05%),
			#f5ee3e;
		/* background-image: url(../../static/j3.png) !important; */
	}

	.s-four {
		background: linear-gradient(170deg,
				rgba(9, 9, 9, 0.79) 9.75%,
				rgba(60, 83, 95, 0.8) 55.05%),
			#eee;
		/* background-image: url(../../static/j4.png) !important; */
	}

	.s-five {
		background: linear-gradient(170deg,
				rgba(9, 9, 9, 0.79) 9.75%,
				rgba(85, 9, 9, 0.5) 95.05%),
			rgb(255, 201, 63);
		/* background-image: url(../../static/j5.png) !important; */
	}

	.s-four text {
		color: #ddd;
		position: relative;
		z-index: 10;
	}

	.s-five text {
		color: rgba(85, 9, 9, 0.7);
		position: relative;
		z-index: 10;
	}

	.s-six {
		background: linear-gradient(170deg, rgba(9, 9, 9, 0.79) 9.75%, #666 95.05%),
			#333;
		/* background-image: url(../../static/j6.png) !important; */
	}

	.s-six text {
		color: #666;
		position: relative;
		z-index: 10;
	}

	.leftjian {
		width: auto;
		height: auto;
		overflow: hidden;
		position: absolute;
		left: 6%;
		top: 50%;
	}

	.leftjian text {
		color: #a950c2;
		font-size: 24px;
	}

	.rightjian {
		width: auto;
		height: auto;
		overflow: hidden;
		position: absolute;
		right: 6%;
		top: 50%;
	}

	.rightjian text {
		color: #a950c2;
		font-size: 24px;
	}

	/*闪烁*/
	@-webkit-keyframes shanshuo {
		0% {
			opacity: 0;
			/*透明度为0*/
		}

		100% {
			opacity: 1;
			/*透明度为1*/
		}
	}

	.shanshan {
		-webkit-animation: shanshuo 1s infinite ease-in-out;
	}

	.touying {
		width: 80%;
		height: auto;
		overflow: hidden;
		position: absolute;
		left: 10%;
		bottom: 19%;
		z-index: 8;
	}

	.touying image {
		display: block;
		width: 100%;
		height: auto;
	}

	.more-card {
		width: 90%;
		height: auto;
		overflow: hidden;
		padding: 3% 5%;
	}

	.tags {
		width: 100%;
		height: auto;
		padding-bottom: 38rpx;
		overflow: hidden;
		position: relative;
		z-index: 10;

		.u-tag {
			margin-right: 18.82rpx;
		}
	}

	.sv-box {
		-webkit-flex-basis: 100%;
		flex-basis: 100%;
		width: 100%;
		z-index: 1;
		padding-top: 23.52rpx;
		white-space: nowrap;
		scrollbar-width: none;
		/* firefox */
		-ms-overflow-style: none;
		/* IE 10+ */
		overflow-x: hidden;
		overflow-y: auto;
	}

	.tags-item {
		width: 60vw;
		display: inline-block;
		margin-right: 35.29rpx;
		height: 180rpx;
		background: #f2f2f2;
		border-radius: 23.52rpx;
	}

	.showm {
		animation: upup 0.5s ease-in 0s 1 alternate forwards;
		-webkit-animation: upup 0.5s ease-in 0s 1 alternate forwards;
		display: block;
	}

	@keyframes upup {
		0% {
			display: none;
			top: 100px;
		}

		100% {
			display: block;
			top: 80px;
		}
	}

	.showms {
		animation: dodo 0.5s ease-in 0s 1 alternate forwards;
		-webkit-animation: dodo 0.5s ease-in 0s 1 alternate forwards;
	}

	@keyframes dodo {
		0% {
			opacity: 1;
			top: 10.5%;
		}

		100% {
			opacity: 0;
			top: 13%;
		}
	}

	.xz-main {
		-webkit-animation: xuanzhuans 16s infinite ease-in-out;
	}

	@keyframes xuanzhuans {
		0% {
			transform: rotateY(0deg);
		}

		/* 		25% {
			transform: rotateY(-30deg);
		}

		50% {
			transform: rotateY(0deg);
		}

		75% {
			transform: rotateY(30deg);
		}
 */
		100% {
			transform: rotateY(360deg);
		}
	}

	.xz {
		-webkit-animation: xuanzhuan 8s infinite ease-in-out;
	}

	@keyframes xuanzhuan {
		0% {
			transform: rotateY(0deg);
		}

		100% {
			transform: rotateY(360deg);
		}
	}

	.xzs {
		-webkit-animation: xuanzhuanss 12s infinite ease-in-out;
	}

	@keyframes xuanzhuanss {
		0% {
			transform: rotateY(0deg);
		}

		100% {
			transform: rotateY(360deg);
		}
	}

	.sm-user {
		width: 14vw;
		height: 14vw;
		border-radius: 100px;
		border: solid 1px #7a318e;
		text-align: center;
		line-height: 8vw;
		background: rgba(99, 41, 124, 0.3);
		margin: 20px auto;
		box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.1);
	}

	.sm-user text {
		font-size: 28px;
		color: #fde173;
	}

	.user-address {
		width: 100%;
		height: auto;
		overflow: hidden;
		text-align: center;
		font-size: 14px;
		color: #fde173;
	}

	.other-main {
		width: 90%;
		height: auto;
		overflow: hidden;
		border-top: solid 0.5px #7a318e;
		margin: auto;
		margin-top: 20px;
		padding-top: 15px;
	}

	.other-main>view {
		width: 33.33%;
		float: left;
		text-align: center;
		margin-bottom: 10px;
	}

	.other-main>view label {
		font-size: 12px;
		color: #a950c2;
		padding-top: 5px;
	}

	.other-main>view text {
		font-size: 28px;
		color: #fde173;
		text-shadow: 0px 5px 12px rgba(0, 0, 0, 0.1);
	}

	.foot-menu {
		width: 90%;
		font-size: 14px;
		height: auto;
		overflow: hidden;
		position: absolute;
		left: 0;
		bottom: 0;
		background: #652876;
		padding: 8% 5%;
	}

	.foot-menu text {
		float: left;
		display: block;
		padding: 0 !important;
		color: #a950c2;
	}

	.foot-menu label {
		float: right;
		display: block;
		color: #a950c2;
	}

	.data-count {
		width: 90%;
		height: auto;
		overflow: hidden;
		margin-top: 30px;
		padding: 0 5%;
	}

	.dc-one {
		display: block;
		background: #23295d;
		border: solid 1px #2f3f72;
		width: 35%;
		height: auto;
		overflow: hidden;
		float: left;
		padding: 15px 20px;
		border-radius: 10px;
		margin-bottom: 20px;
	}

	.dc-one:nth-child(2n) {
		float: right;
	}

	.dc-one text {
		display: block;
		font-size: 16px;
		color: #adeafb;
	}

	.dc-one label {
		display: block;
		color: #fff;
		font-size: 18px;
		font-weight: bold;
		padding-top: 5px;
	}

	.partners {
		width: 90%;
		height: auto;
		overflow: hidden;
		padding: 5%;
		margin-top: 30px;
	}

	.p-title {
		font-size: 20px;
		line-height: 1.2em;
		letter-spacing: 0.05em;
		font-weight: 400;
		text-align: center;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		color: #fff;
		font-weight: 500;
	}

	.p-title:after,
	.p-title:before {
		content: "";
		background: -o-linear-gradient(351.28deg, #01bfff 13.3%, #db00ff 113.3%);
		background: linear-gradient(98.72deg, #01bfff 13.3%, #db00ff 113.3%);
		margin: 0 30px;
		display: inline-block;
		width: 60px;
		height: 1px;
		-webkit-transform: translateY(0);
		-ms-transform: translateY(0);
		transform: translateY(0);
	}

	.p-box {
		width: 100%;
		height: auto;
		overflow: hidden;
		margin-top: 30px;
	}

	.p-one {
		width: 48%;
		height: auto;
		overflow: hidden;
		border: solid 1px #2e467b;
		border-radius: 10px;
		margin-top: 15px;
		padding: 15px 0;
		float: left;
	}

	.p-one:nth-child(2n) {
		float: right;
	}

	.p-one image {
		display: block;
		width: 80%;
		height: auto;
		margin: auto;
	}

	.other-info {
		width: 100%;
		height: auto;
		overflow: hidden;
		margin-top: 50px;
	}

	.oi-image {
		width: 100%;
		height: auto;
		overflow: hidden;
	}

	.oi-image image {
		display: block;
		width: 100%;
		height: auto;
	}

	.oi-main {
		width: 80%;
		height: auto;
		overflow: hidden;
		background: #151142;
		padding: 0 10% 10% 10%;
		position: relative;
		margin-top: -0.5px;
	}

	.pi-title {
		font-size: 20px;
		font-weight: 500;
		color: #fff;
		line-height: 1.2em;
		font-weight: 400;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		position: relative;
		margin: 2.5rem 0;
	}

	.pi-title:after {
		content: "";
		height: 1px;
		width: 3rem;
		background: -o-linear-gradient(351.28deg, #01bfff 13.3%, #db00ff 113.3%);
		background: linear-gradient(98.72deg, #01bfff 13.3%, #db00ff 113.3%);
		position: absolute;
		bottom: -1rem;
		left: 0;
	}

	.oi-box {
		width: 100%;
		height: auto;
		overflow: hidden;
	}

	.oi-box text {
		font-size: 14px;
		font-weight: bold;
		color: #88d4ff;
		margin-bottom: 15px;
	}

	.oi-boxs {
		width: 100%;
		height: auto;
		overflow: hidden;
	}

	.oi-boxs>view {
		width: 50%;
		float: left;
		padding: 12px 0;
	}

	.oi-boxs>view label {
		display: block;
		width: 10vw;
		height: 10vw;
		border-radius: 10px;
		background: #132154;
		border: solid 0.5px rgba(255, 255, 255, 0.1);
		text-align: center;
		line-height: 10vw;
		float: left;
	}

	.oi-boxs>view label text {
		color: rgba(255, 255, 255, 0.8);
		font-size: 20px;
	}

	.oi-boxs>view b {
		display: block;
		float: left;
		font-weight: normal;
		color: #88d4ff;
		line-height: 10vw;
		padding-left: 5px;
	}

	.f-logo {
		width: 100%;
		height: auto;
		overflow: hidden;
	}

	.f-logo image {
		display: block;
		width: 50%;
		height: auto;
		margin: auto;
		margin-top: 60px;
	}
</style>
