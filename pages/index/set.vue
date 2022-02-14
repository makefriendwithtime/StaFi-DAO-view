<template>
	<scroll-view class="page-view" scroll-y>
		<view class="ex-input" style="margin-top: 5vw;">
			<view class="set-one">
				<text>收集人地址：</text>
				<input type="text" placeholder="请输入收集人地址">
			</view>
		</view>
		<view class="ex-input" style="margin-top: 5vw;">
			<view class="set-one">
				<text>抵押时限：</text>
				<input type="text" placeholder="请输入时限，单位(天)">
			</view>
		</view>
		<view class="exchang-btn" @click="exBtn">保存</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				hshow: false,
				ctype: 'HDE',
				ctyped: 'USDT',
				shows: false,
				num: '',
				content: '',
				choosec: null
			}
		},
		onLoad() {

		},
		methods: {
			exBtn() {
				this.$u.toast('保存成功')
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
	.set-one text{ font-size: 14px; color:rgba(255,255,255,.7)}
	.set-one input{display: block; background: rgba(255,255,255,.1); font-size: 14px; padding: 4% 3%; margin-top: 10px; border-radius: 10px;}
	.in-step {
		width: 90%;
		height: auto;
		margin: auto;
		background: rgba(99, 41, 124, .3);
		border: solid 1px #7A318E;
		box-shadow: 0px 5px 12px rgba(0, 0, 0, .4);
		border-radius: 10px;
		margin-top: 5vw;
	}

	.c-text {
		width: 100%;
		height: auto;
		overflow: hidden;
		text-align: center;
	}

	.c-text text {
		color: #7A318E;
		font-size: 36px;
		padding-top: 30px;
		display: block;
	}

	.tishi {
		padding: 0 5% 3% 5%;
		color: #516fc7;
		font-size: 12px;
	}

	.r-title {
		width: 100%;
		height: auto;
		overflow: hidden;
		text-align: center;
		color: #7A318E;
		padding: 15px 0;
	}

	.ins-box {
		width: 100%;
		height: auto;
		overflow: hidden;
		display: flex;
	}

	.ins-box>view {
		flex: 1;
		text-align: center;
		padding: 12px 0;
	}

	.ins-box>view text {
		display: block;
		font-size: 28px;
		color: rgba(255, 255, 255, .7)
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

	.exchang-btn {
		width: 93.5%;
		height: auto;
		overflow: hidden;
		position: relative;
		text-align: center;
		overflow: hidden;
		border-radius: 10px;
		position: fixed;
		left: 3%;
		bottom: 3%;
		background: none !important;
		border: solid .5px rgba(37, 151, 224, .5);
		padding: 15px 0 12px 0;
		font-weight: bold;
		color: rgba(255, 255, 255, .8)
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
	}

	.ex-left image {
		display: block;
		float: left;
		width: 8vw;
		height: 8vw;
		margin-left: 2px;
		margin-top: 5px;
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
		padding-top: 12px;
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
		box-shadow: 0px 1px 6px rgba(0,0,0,.2);
	}
	.downjian text{ color:#3e5496}
</style>
