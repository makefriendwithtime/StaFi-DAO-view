<template>
	<scroll-view class="page-view" scroll-y>
		<view class="in-step">
			<view class="ins-box">
				<text>您的ECToken</text>
				<label for="">
					<u-count-to :startVal="0" :endVal="500.5323" :decimals="4" color="rgba(255,255,255,.9)"
						fontSize="38"></u-count-to>
				</label>
			</view>
		</view>

		<view class="ex-input" style="margin-top: 5vw;">
			<view style="width: 100%; height: auto; overflow: hidden;">
				<view class="ex-left">
					<image src="../../static/logos.png" mode="widthFix"></image>
					<label for="">ECToken</label>
				</view>
				<view class="ex-right">
					<text>余额：500.5323</text>
					<input type="text" placeholder="输入数量" v-model="num" placeholder-style="color:rgba(255,255,255,.6);">
				</view>
			</view>

			<!--箭头-->
			<view class="downjian"><text class="iconfont icon-jiantou1"></text></view>
		</view>
		<view class="ex-input">
			<view style="width: 100%; height: auto; overflow: hidden;">
				<view class="ex-left">
					<text class="iconfont icon-USDT"></text>
					<label for="">USDT</label>
				</view>
				<view class="ex-right">
					<text>预计接收数量</text>
					<input type="text" v-model="num" disabled>
				</view>
			</view>

		</view>
		<view class="exchang-btn">
			<label for="" @click="exBtn">提取Token</label>
			<label for="" @click="toBLockmint">节点质押</label>
		</view>
		<u-modal :show="shows" title="提示" :content="content" showCancelButton @cancel="shows = false" @confirm="confirm"
			closeOnClickOverlay></u-modal>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				mmshow: false,
				numshow: false,
				shows: false,
				content: '',
				chooseid: null,
				nftnum: null,
				cardnum: '1',
				max: null,
				value: null,
				num: '',
			}
		},
		onLoad() {

		},
		methods: {
			chooseNft(item) {
				this.chooseid = item.id
				this.nftnum = item.num
				this.max = item.num
			},
			confirm() {
				this.shows = false
				this.$u.toast('Mint成功')
			},
			exBtn() {
				if (!this.num) {
					this.$u.toast('请输入兑换数量')
				} else {
					this.content = '确认用' + this.num + 'ECToken兑换USDT?'
					this.shows = true
				}
			},
			confirm() {
				this.shows = false
				this.$u.toast('兑换成功')
			},
			toBLockmint(){
				uni.navigateTo({
					url:'/pages/index/blockmint'
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
		height: auto
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

	.r-btns {
		width: 84%;
		height: auto;
		overflow: hidden;
		background: #23295D;
		border: solid 1px #2F3F72;
		font-size: 12px;
		margin: auto;
		padding: 3%;
		border-radius: 10px;
		color: #ADEAFB;
		margin-top: 20px;
	}

	.block-one {
		width: 100%;
		height: auto;
		padding: 20px 0;
		border-bottom: solid .5px rgba(255, 255, 255, .1);
		overflow: hidden;
	}

	.block-one:last-child {
		border: 0 !important;
	}

	.block-one text {
		float: left;
		text-align: left !important;
		width: auto !important;
		padding: 0 !important;
		color: rgba(255, 255, 255, .9)
	}

	.block-one label {
		float: right
	}

	.r-btn text {
		padding-top: 3px;
		display: inline-block;
	}

	.r-btns text {
		padding-top: 3px;
		display: inline-block;
		display: block;
		width: 100%;
		text-align: center;
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
		padding: 6% 0 0 0;
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

	.ex-input {
		width: 80%;
		height: auto;
		margin: auto;
		margin-bottom: 10px;
		background: #23295D;
		border: solid 1px #2F3F72;
		padding: 5%;
		border-radius: 10px;
		position: relative;
	}

	.ex-left {
		width: 50%;
		height: auto;
		overflow: hidden;
		float: left;
		padding-top: 10px;
	}

	.ex-left image {
		display: block;
		float: left;
		width: 8vw;
		height: 8vw;
		margin-top: 5px;
		margin-left: 2px;
	}

	.ex-left text {
		display: block;
		float: left;
		font-size: 37px;
		color: #8EE0F6
	}

	.ex-left label {
		display: block;
		font-size: 18px;
		color: #5574cf;
		float: left;
		font-weight: bold;
		padding-left: 10px;
		padding-top: 9px;
	}

	.ex-right {
		width: 50%;
		float: left;
		text-align: right;
	}

	.ex-right text {
		display: block;
		font-size: 14px;
		color: #5574cf
	}

	.ex-right input {
		display: block;
		width: 100%;
		height: auto;
		padding: 15px 0 0 0;
		overflow: hidden;
		font-size: 18px;
		color: rgba(255, 255, 255, .8);
		text-align: right;

	}

	.exchang-btn {
		width: 94%;
		height: auto;
		overflow: hidden;
		position: relative;
		text-align: center;
		overflow: hidden;
		position: fixed;
		left: 3%;
		bottom: 3%;
		font-weight: bold;
		color: rgba(255, 255, 255, .8)
	}

	.exchang-btn label {
		display: block;
		width: 60%;
		height: auto;
		overflow: hidden;
		background: none !important;
		border: solid .5px rgba(37, 151, 224, .5);
		padding: 15px 0 12px 0;
		float:left;
		border-radius: 10px;
	}
	.exchang-btn label:last-child{float:right;width: 32%; background: rgba(0,93,148,.2) !important; color:rgba(255,255,255,.8); font-weight:normal !important;}
	.downjian {
		width: 12vw;
		height: 12vw;
		position: absolute;
		left: 39vw;
		bottom: -8vw;
		background: #23295D;
		border: solid 1px #2F3F72;
		border-radius: 100px;
		text-align: center;
		line-height: 12vw;
		z-index: 99;
		box-shadow: 0px 1px 6px rgba(0, 0, 0, .2);
	}

	.downjian text {
		color: #3e5496
	}
</style>
