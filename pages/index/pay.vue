<template>
	<scroll-view class="page-view" scroll-y>
		<view class="in-step">
			<view class="title">充值{{name}}</view>
		</view>
		<view class="paycode">
			<image src="../../static/ewm.png" mode="widthFix"></image>
		</view>
		<view class="w-address" style="margin-bottom: 10vw;">
			<text>钱包地址 <b @click="copy">复制</b> </text>
			<label for="">0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2</label>
		</view>
		<view class="more-btn">
			<view>保存图片</view>
			<view>分享地址</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				usercount:'',
				name:''
			}
		},
		onLoad({name}) {
			if(name){
				this.name = name
			}
		},
		methods: {
			copy() {
				this.$u.toast('复制成功')
			},
			selectClick(index){
				this.usercount = index.name
			}
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
	.ewm{width: 44%; height: auto; margin: auto; margin-top: 8vw; margin-bottom: 5vw;}
	.ewm image{display: block;width: 100%; height: auto;}
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

	.t-main {
		width: 90%;
		height: auto;
		overflow: hidden;
		border-radius: 10px;
		padding: 3% 0;
		margin-top: 10px;
		position: relative;
	}
	.more-btn{width: 90%; height: auto; margin:auto; overflow: hidden; margin-bottom: 10vw;}
	.more-btn>view{
		position: relative;
		display: inline-block;
		height: auto;
		padding: 15px 0;
		width: 48%;
		font-size: 18px;
		border-radius: 10px;
		text-align: center;
		overflow: hidden;
		float: left;
		color: rgba(255,255,255,.6);
		font-weight: 400;
		border: solid .5px rgba(37,151,224,.5);
	}
	.more-btn>view:last-child{ float:right;border: solid .5px rgba(255,255,255,.3);}
	.cz-one {
		width: 30%;
		height: auto;
		overflow: hidden;
		background: rgba(35, 41, 93, .95);
		border: solid .5px rgba(37, 151, 224, .5);
		float: left;
		margin-right: 20px;
		text-align: center;
		padding: 12px 0;
		border-radius: 10px;
		color: #88D4FF;
	}

	.w-address {
		width: 70%;
		height: auto;
		margin: auto;
		padding:3% 0 0 0;
		border-radius: 10px;
		color: rgba(255, 255, 255, .8);
		font-size: 14px;
		margin-bottom: 10px;
	}
	.w-address text{
		font-weight: bold;
		font-size: 12px;
	}
	.w-address text b {
		float: right;
		font-size: 12px;
		color: rgba(255, 255, 255, .4);
	}

	.w-address label {
		color: rgba(255, 255, 255, .5);
		display: block;
		padding-top: 10px;
		word-break: break-all;
	}

	.active {
		background: #88D4FF;
		color: #1A285F
	}

	.in-step {
		width: 90%;
		height: auto;
		padding:3% 5%;
		background: #23295D;
	}

	.change {
		width: auto;
		height: auto;
		position: absolute;
		right: 20px;
		top: 40px;
	}

	.change text {
		font-size: 28px;
		color: rgba(255, 255, 255, .7)
	}

	.tm-one {
		width: 75%;
		height: auto;
		overflow: hidden;
		padding: 12px 0;
		border-bottom: solid 1px rgba(255, 255, 255, .1);
	}

	.tm-one label {
		color: rgba(255, 255, 255, .9)
	}

	.tm-one b {
		color: rgba(255, 255, 255, .6);
		font-weight: normal;
		padding-left: 30%;
	}

	.tm-one text {
		float: right;
		color: rgba(255, 255, 255, .3);
		font-size: 12px;
		padding-top: 5px;
	}

	.tm-one:last-child {
		border-bottom: 0 !important;
	}

	.wallet-address {
		width: 90%;
		height: auto;
		margin: auto;
		padding: 0 5%;
		font-size: 12px;
		border-radius: 10px;
		margin-top: 5vw;
		overflow: hidden;
	}

	.wallet-address>view {
		width: 90%;
		padding: 5% 0;
		height: auto;
		overflow: hidden;
		margin-bottom: 5vw;
		border-radius: 10px;
	}


	.wallet-address>view text {
		font-size: 12px;
		color: rgba(255, 255, 255, .7);
		display: block;
		float: right;
	}

	.wallet-address>view label {
		color: rgba(255, 255, 255, .9);
		float: left;
		font-size: 14px;
	}


	.title {
		width: 100%;
		height: auto;
		overflow: hidden;
		color: #3b5090;
		font-weight: 400;
		font-size: 18px;
	}

	.wallet-address text {
		font-size: 14px;
		color: rgba(255, 255, 255, .7);
		padding-top: 3px;
	}

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
		padding: 5%;
		margin-top: 10px;
		font-size: 16px;
		color: #516fc7
	}

	.s-box text {
		margin-right: 30px;
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
		background: none !important;
		border: solid .5px rgba(37, 151, 224, .5);
		color: #fff
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
	.paycode{width: 50%; height:auto; overflow: hidden;  margin: 50px auto;}
	.paycode image{display: block;width: 100%; height:auto}
</style>
