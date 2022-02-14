<template>
	<scroll-view class="page-view" scroll-y>
		<view class="in-step">
			<view class="title">- Mint详情 -</view>
			<view class="ins-box">
				<view>
					<image src="../../static/logos.png" mode="widthFix"></image>
					<label for="">质押节点总数：120</label>
				</view>
			</view>
		</view>
		<view class="ple-box">
			<view class="ple-one" v-for="(item,index) in nftlist" :key="index">
				<view class="po-num">
					<label>节点地址：</br>16UwLL9Risc3QfPqBUvKofHmBQ7wMtjvM</label>
				</view>
				<view class="more-btn" @click="moreBtn">
					<text class="iconfont icon-gengduo"></text>
				</view>
			</view>
		</view>
		<u-action-sheet :actions="list" @select="selectClick" title="选择操作" closeOnClickOverlay @close="show = false"
			:show="show"></u-action-sheet>
		<u-modal :show="ploshow" title="提示" content="确认取消质押？" showCancelButton @cancel="ploshow = false"
			@confirm="confirm" closeOnClickOverlay></u-modal>
		<u-modal :show="ploshows" title="提示" content="确认提取收益？" showCancelButton @cancel="ploshows = false"
			@confirm="confirms" closeOnClickOverlay></u-modal>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				ploshow: false,
				ploshows: false,
				show: false,
				list: [{
						name: '取消质押',
					}
				],
				nftlist: [{
						id: 0,
					},
					{
						id: 1,
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			moreBtn() {
				this.show = true
			},
			selectClick(index) {
				if (index.name == '取消质押') {
					this.ploshow = true
				} else {
					this.ploshows = true
				}
			},
			confirm() {
				this.ploshow = false
				this.$u.toast('取消成功')
			},
			confirms() {
				this.ploshows = false
				this.$u.toast('提取成功')
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

	.in-step {
		width: 90%;
		height: auto;
		margin: auto;
		background: #23295D;
		border: solid 1px #2F3F72;
		border-radius: 10px;
		margin-top: 5vw;
	}

	.wallet-address {
		width: 84%;
		height: auto;
		margin: auto;
		background: #2F3F72;
		margin: auto;
		padding: 3%;
		border: solid 1px #2F3F72;
		font-size: 12px;
		border-radius: 0 0 10px 10px;
	}

	.wallet-address text {
		color: #516fc7
	}

	.wallet-address label {
		float: right;
		color: #516fc7;
	}

	.title {
		width: 100%;
		height: auto;
		overflow: hidden;
		text-align: center;
		padding: 15px 0 0 0;
		color: #3b5090
	}

	.small-wallet {
		width: 90%;
		height: auto;
		overflow: hidden;
		margin: auto;
		margin-top: 30px;
	}

	.s-title {
		font-size: 14px;
		font-weight: bold;
		color: #516fc7
	}

	.s-box {
		width: 94%;
		height: auto;
		overflow: hidden;
		background: #23295D;
		border-radius: 10px;
		padding: 5% 3%;
		margin-top: 10px;
		font-size: 12px;
		color: #516fc7
	}

	.s-box label {
		padding-left: 5px;
	}

	.s-box b {
		float: right
	}

	.ple-box {
		width: 90%;
		height: auto;
		overflow: hidden;
		padding: 5%;
	}

	.ins-box {
		width: 100%;
		height: auto;
		display: flex;
		overflow: hidden;
		padding-top: 10px;
	}

	.ins-box>view {
		flex: 1;
		padding: 12px 0;
		text-align: center;
	}

	.ins-box>view image {
		display: block;
		width: 7vw;
		height: 7vw;
		margin: auto;
		margin-top: 0.5vw;
		margin-bottom: 1vw;
	}

	.ins-box>view text {
		display: block;
		font-size: 32px;
		color: #8EE0F6
	}

	.ins-box>view label {
		display: block;
		font-size: 10px;
		color: rgba(255, 255, 255, .7);
		padding-top: 10px;
	}

	.c-image {
		width: 80%;
		height: auto;
		position: absolute;
		left: 10%;
		bottom: 15%;
	}

	.cm-title {
		font-weight: bold;
		text-shadow: 0px 1px 2px rgba(0, 0, 0, .1);
		padding-top: 10px;
	}

	.cm-title image {
		width: 4vw;
		height: 4vw;
		display: block;
		margin: auto;
		margin-top: 4px;
		margin-bottom: 5px;
	}

	.cm-apr {
		font-weight: bold;
		text-shadow: 0px 1px 2px rgba(0, 0, 0, .1);
		font-size: 12px;
	}

	.c-image image {
		width: 100%;
		height: auto;
	}

	.biank text {
		display: block;
		font-size: 20px;
		color: rgba(255, 255, 255, .8);
		line-height: 5vw;
		text-shadow: 0px 1px 2px rgba(0, 0, 0, .5);
	}

	.b-image {
		width: 90%;
		height: auto;
		overflow: hidden;
		position: absolute;
		left: 5%;
		top: -35px;
	}

	.b-image image {
		display: block;
		width: 100%;
		height: auto
	}

	.ple-one {
		width: 94%;
		height: auto;
		overflow: hidden;
		background: #23295D;
		border: solid 1px #2F3F72;
		border-radius: 10px;
		margin-bottom: 5vw;
		padding: 3%;
	}

	.po-style {
		width: 12vw;
		height: 16vw;
		border-radius: 6px;
		float: left;
		position: relative;
		overflow: hidden;
		text-align: center;
	}

	.po-num {
		float: left;
		padding-left: 10px;
	}

	.po-num text {
		display: block;
		font-size: 12px;
		color: rgba(255, 255, 255, .6);
	}

	.po-num label {
		display: block;
		font-size: 12px;
		color: rgba(255, 255, 255, .6);
		padding: 4px 0;
	}

	.po-num b {
		display: block;
		font-size: 12px;
		color: rgba(255, 255, 255, .6);
	}

	.more-btn {
		float: right
	}

	.more-btn text {
		color: rgba(255, 255, 255, .7);
		font-size: 26px;
		padding-top: 6px;
		display: block;
		padding-right: 5px;
	}

	.s1 {
		background: linear-gradient(170deg, rgba(9, 9, 9, 0.79) 9.75%, rgba(255, 0, 0, 0.79) 95.05%), rgb(204, 39, 39);
		/* background-image: url(../../static/j1.png) !important; */
	}

	.s1 text {
		color: rgba(255, 0, 0, 0.79);
		position: relative;
		z-index: 10;
	}

	.s2 {
		background: linear-gradient(170deg, rgba(9, 9, 9, 0.79) 9.75%, rgba(86, 18, 91, 0.79) 95.05%), #DC27F4;
		/* background-image: url(../../static/j2.png) !important; */
	}

	.s2 text {
		color: rgba(86, 18, 91, 0.79);
		position: relative;
		z-index: 10;
	}

	.s3 text {
		color: #f3b013;
		position: relative;
		z-index: 10;
	}

	.s3 {
		background: linear-gradient(170deg, rgba(9, 9, 9, 0.79) 9.75%, #f3b013 95.05%), #F5EE3E;
		/* background-image: url(../../static/j3.png) !important; */
	}

	.s4 {
		background: linear-gradient(170deg, rgba(9, 9, 9, 0.79) 9.75%, rgba(60, 83, 95, 0.8) 55.05%), #eee;
		/* background-image: url(../../static/j4.png) !important; */
	}

	.s5 {
		background: linear-gradient(170deg, rgba(9, 9, 9, 0.79) 9.75%, rgba(85, 9, 9, .5) 95.05%), rgb(255, 201, 63);
		/* background-image: url(../../static/j5.png) !important; */
	}

	.s4 text {
		color: #ddd;
		position: relative;
		z-index: 10;
	}

	.s5 text {
		color: rgba(85, 9, 9, .7);
		position: relative;
		z-index: 10;
	}

	.s6 {
		background: linear-gradient(170deg, rgba(9, 9, 9, 0.79) 9.75%, #666 95.05%), #333;
		/* background-image: url(../../static/j6.png) !important; */
	}

	.s6 text {
		color: #666;
		position: relative;
		z-index: 10;
	}

	.xz {
		-webkit-animation: xuanzhuan 12s infinite ease-in-out;
	}

	@keyframes xuanzhuan {
		0% {

			transform: rotateY(0deg);
		}

		100% {
			transform: rotateY(360deg);
		}
	}

	.get-hde {
		width: 50%;
		height: auto;
		overflow: hidden;
		text-align: center;
		margin: 20px auto;
		background: none !important;
		border: solid .5px rgba(37,151,224,.5);
		padding: 12px 0;
		border-radius: 15px;
		color:#81C9F4
	}
</style>
