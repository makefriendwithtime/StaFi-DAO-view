<template>
	<scroll-view class="page-view" scroll-y>
		<!--邀请流程-->
		<view class="in-step">
			<view class="title">充值</view>
			<view class="t-main">
				<view :class="ctype==item.id?'cz-one active':'cz-one'" @click="choosetype(item)"
					v-for="(item,index) in rtype" :key="index">
					{{item.name}}
				</view>
			</view>
		</view>
		<view class="w-address">
			<text>钱包地址 <b @click="copy">复制</b> </text>
			<label for="">0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2</label>
		</view><!-- 
		<view class="w-address" style="margin-bottom: 20vw;">
			<text>上账账户</text>
			<label @click="show = true" for="" v-if="!usercount">请选择</label>
			<label @click="show = true" for="" v-else>{{usercount}}</label>
		</view> -->
		<!-- <u-action-sheet :actions="list" title="请选择入账账户" :show="show" @select="selectClick" closeOnClickOverlay @close="show = false"></u-action-sheet> -->
		<view class="exchang-btn" @click="pay">充 值</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				list: [{
						name: '主账户',
					},
					{
						name: '子账户',
					}
				],
				rtype: [{
						id: 0,
						name: 'USDT'
					}
				],
				wadress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
				ctype: 0,
				cname:'USDT',
				usercount:''
			}
		},
		onLoad() {

		},
		methods: {
			choosetype(item) {
				this.ctype = item.id
				this.cname = item.name
			},
			chooseNetwork() {
				this.$u.toast('暂无其他可用网络')
			},
			copy() {
				this.$u.toast('复制成功')
			},
			selectClick(index){
				this.usercount = index.name
			},
			pay(){
				uni.navigateTo({
					url:'/pages/index/pay?name='+this.cname
				})
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
		width: 80%;
		height: auto;
		margin: auto;
		padding: 5%;
		background: #243158;
		border-radius: 10px;
		color: rgba(255, 255, 255, .8);
		font-size: 14px;
		margin-top:5vw;
		margin-bottom: 5vw;
	}

	.w-address text b {
		float: right
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
		padding: 5% 5% 5% 5%;
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
		padding: 5%;
		background: #243158;
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
		font-size: 28px;
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
</style>
