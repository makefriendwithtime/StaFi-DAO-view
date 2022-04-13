<template>
	<scroll-view class="page-view" scroll-y>
	
	
	<view class="">
		<view class="title">
			技术服务比例:<input type="text" value="" v-model="params.techProportion" />
				<!-- fundsDownLimit; -->
		</view> 
	<view class="title">
		节点投资抵押最低下限:<input type="text" value="" v-model="params.fundsDownLimit" />
		<!-- perInvestDownLimit; -->
	</view> 
		<view class="title">
		每人次投资抵押下限:<input type="text" value="" v-model="params.perInvestDownLimit" />
		<!-- nodeStartDate -->
		</view> 
		<view class="title">
		nodeStartDate:<input type="text" value="" v-model="params.nodeStartDate" />
		<!-- rewardDownLimit; -->
		</view> 
		<view class="title">
		最低分配奖励额度:<input type="text" value="" v-model="params.rewardDownLimit" />
		<!-- _techRewardAddr -->
		</view> 
		<view class="title">
	techRewardAddr:<input type="text" value="" v-model="params.techRewardAddr" />
	<!-- scheduleTime -->
		</view> 
		<view class="title">
	网络解绑时长<input type="text" value="" v-model="params.scheduleTime" />
	<!-- authorMappingLimit; -->
			</view> 
		<view class="title">
			authorid映射绑定额度<input type="text" value="" v-model="params.authorMappingLimit" />
				</view> 
	
		<view class="exchang-btn" @click="sudoSubmit">
			确定
		</view>
		
	</view>
	</scroll-view>
</template>

<script>
	import {
		sudo
	} from "@/methods/index.js";
	export default {
		data() {
			return {
				params: {
					techProportion: "",
					fundsDownLimit: "",
					perInvestDownLimit: "",
					nodeStartDate: "",
					rewardDownLimit: "",
					techRewardAddr: "",
					scheduleTime: "",
					authorMappingLimit: ""
				}
			}
		},
		methods: {
			sudoSubmit() {
				let responseData = sudo(this.params);
				responseData
					.then((res) => {
						// this.responseData = res;
                       if(res){
						   uni.showToast({
						       title: "交易成功！",
						       duration: 2000
						   });
						   for (let index in this.params) {
						     this.params[index] = "";
						   }
					   }
						console.log(res);
					})
					.catch((err) => {
						console.log(err);
					});
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
	.title {
		width: 100%;
		height: auto;
		overflow: hidden;
		color: #3b5090;
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
	  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
	  position: fixed;
	  left: 5%;
	  bottom: 3%;
	  background: rgba(35, 41, 93, 0.95);
	  border: solid 0.5px rgba(37, 151, 224, 0.5);
	  padding: 15px 0 12px 0;
	  font-weight: bold;
	  color: #ffeceb;
	  z-index: 99;
	}
	input {
		float:right; font-size:24px; display: block; color:rgba(255,255,255,.3)
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
	.btn {
		width: 70%;
		height: 80rpx;
		margin: 30rpx auto;
		background-color: #8EE0F6;
		color: #fff;
		text-align: center;
		line-height: 80rpx;
	}
</style>
