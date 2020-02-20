<template>
	<!-- 容器 -->
	<view class="continer">
		<!-- 搜索框 -->
		<view class="serch">
			<input type="text" placeholder="搜索" >
		</view>
		<!-- 轮播图 -->
		<swiper indicator-dots>
			<swiper-item>
				<navigator src="">
					<image src="/static/uploads/banner1.png"/>
				</navigator>
			</swiper-item>
			<swiper-item>
				<navigator src="">
					<image src="/static/uploads/banner2.png"/>
				</navigator>
			</swiper-item>
			<swiper-item>
				<navigator src="">
					<image src="/static/uploads/banner3.png"/>
				</navigator>
			</swiper-item>
		</swiper>
		<!-- 导航区 -->
		<view class="nav">
			<navigator class="item" src="">
				<image src="/static/uploads/icon_index_nav_1@2x.png"/>
			</navigator>
			<navigator class="item" src="">
				<image src="/static/uploads/icon_index_nav_2@2x.png"/>
			</navigator>
			<navigator class="item" src="">
				<image src="/static/uploads/icon_index_nav_3@2x.png"/>
			</navigator>
			<navigator class="item" src="">
				<image src="/static/uploads/icon_index_nav_4@2x.png"/>
			</navigator>
		</view>
		<!-- 楼层 -->
		<!-- floor 1 -->
		<view class="floor floor_1">
			<view class="title">
				<image src="/static/uploads/pic_floor01_title.png"/>
			</view>

			<view class="imgs">
				<navigator class="item">
					<image src="/static/uploads/pic_floor01_1@2x.png"/>
				</navigator>
				<navigator class="item">
					<image src="/static/uploads/pic_floor01_2@2x.png"/>
				</navigator>
				<navigator class="item">
					<image src="/static/uploads/pic_floor01_3@2x.png"/>
				</navigator>
				<navigator class="item">
					<image src="/static/uploads/pic_floor01_4@2x.png"/>
				</navigator>
				<navigator class="item">
					<image src="/static/uploads/pic_floor01_5@2x.png"/>
				</navigator>
			</view>
		</view>
		<!-- floor 2 -->
		<view class="floor">
			<view class="title">
				<image src="/static/uploads/pic_floor02_title.png"/>
			</view>

			<view class="imgs">
				<navigator class="item">
					<image src="/static/uploads/pic_floor02_1@2x.png"/>
				</navigator>
				<navigator class="item">
					<image src="/static/uploads/pic_floor02_2@2x.png"/>
				</navigator>
				<navigator class="item">
					<image src="/static/uploads/pic_floor02_3@2x.png"/>
				</navigator>
				<navigator class="item">
					<image src="/static/uploads/pic_floor02_4@2x.png"/>
				</navigator>
				<navigator class="item">
					<image src="/static/uploads/pic_floor02_5@2x.png"/>
				</navigator>
			</view>
		</view>
		<!-- floor 3 -->
		<view class="floor">
			<view class="title">
				<image src="/static/uploads/pic_floor03_title.png"/>
			</view>

			<view class="imgs">
				<navigator class="item">
					<image src="/static/uploads/pic_floor03_1@2x.png"/>
				</navigator>
				<navigator class="item">
					<image src="/static/uploads/pic_floor03_2@2x.png"/>
				</navigator>
				<navigator class="item">
					<image src="/static/uploads/pic_floor03_3@2x.png"/>
				</navigator>
				<navigator class="item">
					<image src="/static/uploads/pic_floor03_4@2x.png"/>
				</navigator>
				<navigator class="item">
					<image src="/static/uploads/pic_floor03_5@2x.png"/>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {
  
		},
		methods: {

		}
	}
</script>

<style lang="less">
.continer {
	//搜索框样式
	.serch {
		display: flex;
		box-sizing: border-box;
		padding: 20rpx 16rpx;
		background-color:#ff2d4a;
		input {
			width: 100%;
			height: 60rpx;
			border-radius: 5rpx;
			background-color: white;
		}
	}
	//轮播图样式
	swiper {
		height: 340rpx;
		image {
			width: 750rpx;
			height: 340rpx;
		} 
	}
	//导航
	.nav {
		display: flex;
		height: 200rpx;
		background-color: white;
		.item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			image {
				width: 128rpx;
				height: 140rpx;
			}
		}
	}
	// 楼层
	.floor {
		// 标题
		.title {
			background-color: pink;
			padding-top: 30rpx;
			padding-left: 20rpx;
			box-sizing: border-box;
			image {
				width: 100%;
				height: 60rpx;
			}
		} 
		//图像
		.imgs {
			padding:20rpx 16rpx;
			box-sizing: border-box;
			overflow: hidden;
			.item {
				float: left;
				margin-right: 10rpx;
				image {
					display: block;
				}
			}
			.item:nth-child(1) {
				image {
					width: 232rpx;
					height: 386rpx;
				}
			}
			.item:nth-child(2),
			.item:nth-child(3) {
				margin-bottom: 10rpx;
			}
			.item:nth-child(2),
			.item:nth-child(5) {
				image {
					width: 273rpx;
					height: 188rpx;
				}
			}
			.item:nth-child(3),
			.item:nth-child(4) {
				image {
					width: 203rpx;
					height: 188rpx;
				}
			}
			.item:nth-child(3),
			.item:nth-child(5) {
				margin-right: 0rpx;
			}
		}
	} 
	.floor_1 {
		.imgs {
			.item:nth-child(n+2) {
				image {
					width: 238rpx;
					height: 188rpx;
				}
			}
		}
	}
}
</style>
