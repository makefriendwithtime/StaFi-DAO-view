<template>
	<scroll-view class="page-view" scroll-y>
		<div class="night">
			<div class="shooting_star"></div>
			<div class="shooting_star"></div>
			<div class="shooting_star"></div>
			<div class="shooting_star"></div>
		</div>
		<!--跳过登录-->
		<!-- <view class="turn-login" @click="toHome">跳过登录</view> -->
		<!--用户登录-->
		<view class="user-login">
			<view class="ul-title"><image src="../../static/logoss.png" mode="widthFix"></image></view>
			<view v-if="isLogin">
				<view class="ul-one">
					<text>输入邮箱</text>
					<input type="text" v-model="param.uemail" placeholder-style="color: #fff" placeholder="请输入注册邮箱">
				</view>
				<view class="ul-one">
					<text>登录密码</text>
					<input type="text" placeholder-style="color: #fff" placeholder="请输入登录密码">
				</view>
				<view class="other-btn">
					<text @click="toReg">没有账号，立即注册</text>
					<label for="">忘记密码?</label>
				</view>
				<view class="user-login-btn" style="margin-top: 40px;" @click="loginNow">立即登录</view>
			</view>
			<view v-else>
				<view class="ul-one">
					<text>输入邮箱</text>
					<input type="text" placeholder-style="color: #fff" placeholder="请输入邮箱">
				</view>
				<view class="ul-one">
					<text>验证码</text>
					<view>
						<input style="width: 60%;" type="text" placeholder-style="color: #fff" placeholder="输入邮件内验证码">
						<label for="">发送邮件</label>
					</view>
				</view>
				<view class="ul-ones">
					<text>确认密码</text>
					<input type="text" placeholder-style="color: #fff" placeholder="请输入确认密码">
				</view>
				<view class="ul-ones">
					<text>输入密码</text>
					<input type="text" placeholder-style="color: #fff" placeholder="请输入密码">
				</view>
				<view class="other-btn">
					<text @click="toLogin">已有账号，返回登录</text>
				</view>
				<view class="user-login-btn">立即注册</view>
			</view>
		</view>
		<view class="user-agree">登录/注册即表示同意《用户协议》</view>
		<!--特效-->
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				isLogin: true,
				param:{
					uemail:''
				}
			}
		},
		onLoad() {

		},
		methods: {
			toReg() {
				this.isLogin = false
			},
			toLogin() {
				this.isLogin = true
			},
			toHome() {
				uni.showLoading({
					title: '正在进入主页'
				})
				setTimeout(() => {
					uni.hideLoading()
					uni.navigateTo({
						url: '/pages/index/index'
					})
				}, 1000)
			},
			loginNow() {
				if(!this.param.uemail){
					this.$u.toast('用户方账号：123456 需求方账号：654321')
				}else{
					uni.showLoading({
						title: '登录成功'
					})
					setTimeout(() => {
						uni.hideLoading()
						uni.setStorageSync('usertype',this.param.uemail)
						uni.navigateTo({
							url: '/pages/index/index'
						})
					}, 1000)
				}
			}
		}
	}
</script>

<style>
	.page-view {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background-image: url(../../static/lbg.jpg);
		background-size: 100%;
		background-repeat: no-repeat;
		position: relative;
		background-color: #000;
	}

	.user-agree {
		width: 100%;
		height: auto;
		overflow: hidden;
		position: relative;
		z-index: 9;
		color: rgba(255, 255, 255, .7);
		font-size: 12px;
		text-align: center;
		padding-top: 25px;
		padding-bottom: 25px;
		text-decoration: underline;
	}

	.turn-login {
		display: inline-block;
		background: rgba(255, 255, 255, .2);
		border: solid .5px rgba(255, 255, 255, .2);
		position: absolute;
		right: 15px;
		top: 15px;
		border-radius: 100px;
		color: #fff;
		padding: 3px 10px;
		font-size: 12px;
		z-index: 999;
	}

	.ul-title {
		width: 100%;
		height: auto;
		overflow: hidden;
		text-align: center;
		color: #fff;
		font-size: 36px;
		font-weight: bold;
		text-shadow: 0px 1px 1px rgba(0, 0, 0, .1);
		padding-bottom: 20px;
	}
	.ul-title image{display: block;width: 60%; height: auto; overflow: hidden; margin: auto; margin-top: 10px;}
	.ul-one {
		width: 100%;
		height: auto;
		overflow: hidden;
		margin-bottom: 20px;
	}

	.ul-one label {
		background: rgba(255, 255, 255, .8);
		float: right;
		font-size: 14px;
		margin-top: -40px;
		border-radius: 8px;
		padding: 10px 15px;
		font-size: 12px;
		font-weight: bold;
	}

	.ul-one text {
		display: block;
		font-size: 12px;
		font-weight: bold;
		color: rgba(255, 255, 255, .8);
		text-shadow: 0px 1px 1px rgba(0, 0, 0, .1);
	}

	.ul-one input {
		display: block;
		background: rgba(255, 255, 255, .3);
		border-radius: 6px;
		padding: 12px 3%;
		height: auto;
		overflow: hidden;
		margin-top: 5px;
		font-size: 12px;
	}

	.ul-ones {
		width: 48%;
		height: auto;
		overflow: hidden;
		margin-bottom: 20px;
		float: left
	}

	.ul-ones:nth-child(2n) {
		float: right
	}

	.ul-ones text {
		display: block;
		font-size: 12px;
		font-weight: bold;
		color: rgba(255, 255, 255, .8);
		text-shadow: 0px 1px 1px rgba(0, 0, 0, .1);
	}

	.ul-ones input {
		display: block;
		background: rgba(255, 255, 255, .3);
		border-radius: 6px;
		padding: 12px 3%;
		height: auto;
		overflow: hidden;
		margin-top: 5px;
		font-size: 12px;
	}

	.user-login {
		width: 72%;
		height: auto;
		overflow: hidden;
		background: rgba(255, 255, 255, .2);
		position: relative;
		z-index: 10;
		margin: auto;
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, .3);
		padding:6% 5%;
		border: solid .5px rgba(255, 255, 255, .2);
		margin-top: 80px;
	}


	.other-btn {
		width: 100%;
		height: auto;
		overflow: hidden;
		font-size: 12px;
		color: #fff
	}

	.other-btn label {
		float: right
	}

	.user-login-btn {
		width: 100%;
		height: auto;
		background: rgba(255, 255, 255, .8);
		box-shadow: 0px 5px 10px rgba(0, 0, 0, .1);
		text-align: center;
		padding: 12px 0;
		border-radius: 10px;
		margin: 20px 0;
		color:#011246;
		font-weight: bold;
	}

	.night {
		position: relative;
		width: 100%;
		height: 100vh;
		position: fixed;
		z-index: 3;
		left: 0;
		top: -20vh;
		-webkit-transform: rotateZ(45deg);
		transform: rotateZ(45deg);
	}

	.shooting_star {
		position: absolute;
		left: 50%;
		top: 50%;
		height: 1px;
		opacity: .7;
		background: linear-gradient(-45deg, rgba(255, 255, 255, .8), rgba(0, 0, 255, 0));
		border-radius: 999px;
		-webkit-filter: drop-shadow(0 0 6px #fff);
		filter: drop-shadow(0 0 6px #fff);
		-webkit-animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
		animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
	}

	.shooting_star::before,
	.shooting_star::after {
		content: '';
		position: absolute;
		top: calc(50% - 1px);
		right: 0;
		height: 1px;
		opacity: .7;
		background: linear-gradient(-45deg, rgba(0, 0, 255, 0), rgba(255, 255, 255, .8), rgba(0, 0, 255, 0));
		-webkit-transform: translateX(50%) rotateZ(45deg);
		transform: translateX(50%) rotateZ(45deg);
		border-radius: 100%;
		-webkit-animation: shining 3000ms ease-in-out infinite;
		animation: shining 3000ms ease-in-out infinite;
	}

	.shooting_star::after {
		-webkit-transform: translateX(50%) rotateZ(-45deg);
		transform: translateX(50%) rotateZ(-45deg);
	}

	.shooting_star:nth-child(1) {
		top: calc(50% - 185px);
		left: calc(50% - 150px);
		-webkit-animation-delay: 8971ms;
		animation-delay: 8971ms;
	}

	.shooting_star:nth-child(1)::before,
	.shooting_star:nth-child(1)::after,
	.shooting_star:nth-child(1)::after {
		-webkit-animation-delay: 8971ms;
		animation-delay: 8971ms;
	}

	.shooting_star:nth-child(2) {
		top: calc(50% - 50px);
		left: calc(50% - 179px);
		-webkit-animation-delay: 9256ms;
		animation-delay: 9256ms;
	}

	.shooting_star:nth-child(2)::before,
	.shooting_star:nth-child(2)::after,
	.shooting_star:nth-child(2)::after {
		-webkit-animation-delay: 9256ms;
		animation-delay: 9256ms;
	}

	.shooting_star:nth-child(3) {
		top: calc(50% - -146px);
		left: calc(50% - 135px);
		-webkit-animation-delay: 8700ms;
		animation-delay: 8700ms;
	}

	.shooting_star:nth-child(3)::before,
	.shooting_star:nth-child(3)::after,
	.shooting_star:nth-child(3)::after {
		-webkit-animation-delay: 8700ms;
		animation-delay: 8700ms;
	}

	.shooting_star:nth-child(4) {
		top: calc(50% - -77px);
		left: calc(50% - 157px);
		-webkit-animation-delay: 3147ms;
		animation-delay: 3147ms;
	}

	.shooting_star:nth-child(4)::before,
	.shooting_star:nth-child(4)::after,
	.shooting_star:nth-child(4)::after {
		-webkit-animation-delay: 3147ms;
		animation-delay: 3147ms;
	}

	@-webkit-keyframes tail {
		0% {
			width: 0;
		}

		30% {
			width: 100px;
		}

		100% {
			width: 0;
		}
	}

	@keyframes tail {
		0% {
			width: 0;
		}

		30% {
			width: 100px;
		}

		100% {
			width: 0;
		}
	}

	@-webkit-keyframes shining {
		0% {
			width: 0;
		}

		50% {
			width: 30px;
		}

		100% {
			width: 0;
		}
	}

	@keyframes shining {
		0% {
			width: 0;
		}

		50% {
			width: 30px;
		}

		100% {
			width: 0;
		}
	}

	@-webkit-keyframes shooting {
		0% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}

		100% {
			-webkit-transform: translateX(300px);
			transform: translateX(300px);
		}
	}

	@keyframes shooting {
		0% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}

		100% {
			-webkit-transform: translateX(300px);
			transform: translateX(300px);
		}
	}

	@keyframes sky {
		0% {
			-webkit-transform: rotate(45deg);
			transform: rotate(45deg);
		}

		100% {
			-webkit-transform: rotate(405deg);
			transform: rotate(405deg);
		}
	}
</style>
