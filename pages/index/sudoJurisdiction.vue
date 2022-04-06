<template>
	<view class="">
		技术服务比例:<input type="text" value="" v-model="params.techProportion" />
		<!-- fundsDownLimit; -->
		节点投资抵押最低下限:<input type="text" value="" v-model="params.fundsDownLimit" />
		<!-- perInvestDownLimit; -->
		每人次投资抵押下限:<input type="text" value="" v-model="params.perInvestDownLimit" />
		<!-- nodeStartDate -->
		nodeStartDate:<input type="text" value="" v-model="params.nodeStartDate" />
		<!-- rewardDownLimit; -->
		最低分配奖励额度:<input type="text" value="" v-model="params.rewardDownLimit" />
		<!-- _techRewardAddr -->
		techRewardAddr:<input type="text" value="" v-model="params.techRewardAddr" />
		<!-- scheduleTime -->
		网络解绑时长<input type="text" value="" v-model="params.scheduleTime" />
		<!-- authorMappingLimit; -->
		authorid映射绑定额度<input type="text" value="" v-model="params.authorMappingLimit" />
		<view class="btn" @click="sudoSubmit">
			确定
		</view>
		
	</view>
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
	input {
		background-color: #007AFF
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
