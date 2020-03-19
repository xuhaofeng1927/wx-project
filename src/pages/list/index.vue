<template>
  <view>
    <!-- 筛选 -->
    <view class="filter">
      <text class="active">综合</text>
      <text>销量</text>
      <text>价格</text>
    </view>
    <!-- 商品列表 -->
    <scroll-view class="goods" scroll-y @scrolltolower="getBottom"> 
      <view class="item" @click="goDetail(item.goods_id)" v-for="(item) in goodsList" :key="item.goods_id">
        <!-- 商品图片 -->
        <image class="pic" :src="item.goods_small_logo"></image>
        <!-- 商品信息 -->
        <view class="meta">
          <view class="name">{{item.goods_name}}</view>
          <view class="price">
            <text>￥</text>{{item.goods_price}}<text>.00</text>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  export default {
    data (){
      return {
        // 传递参数
        query:'',
        // 页面索引
        pagenum:1,
        // 每页长度
        pagesize:10,
        // 根据参数获取到的数据
        goodsList:[],
        // 总条数
        tolal:''
      }
    },
    methods: {
      goDetail (id) {
        // 非tabBar跳转
        uni.navigateTo({
          url: `/pages/goods/index?id=${id}`
        })
      },
      // 获取搜索到数据
      async getList() {
        const {message} = await this.request({
          url:'/api/public/v1/goods/search',
          data:{
            query:this.query,
            pagenum:this.pagenum,
            pagesize:this.pagesize
          }
        })
        console.log(message.total);
        
        this.goodsList= this.goodsList.concat(message.goods)
        this.tolal = message.total
      },
      // 列表触底事件
       async getBottom(){
        if (this.goodsList.length!==this.tolal) {
          // 分页查讯
          this.pagenum++;
          // 再次请求的时候；异步
          await this.getList();
        }else {
          return 
        }      
      },
       
    },
    onLoad (params) {
      this.query = params.query
      this.getList()
    }
  }
</script>

<style scoped lang="less">
  .filter {
    display: flex;
    height: 96rpx;
    line-height: 96rpx;
    border-bottom: 1rpx solid #ddd;

    /* #ifdef H5 */
    position: relative;
    z-index: 99;
    /* #endif */

    text {
      flex: 1;
      text-align: center;
      font-size: 30rpx;
      color: #333;

      &.active {
        color: #ea4451;
      }
    }
  }
  
  .goods {
    position: absolute;
    width: 100%;
    top: 97rpx;
    bottom: 0;
  }

  .item {
    display: flex;
    padding: 30rpx 20rpx 30rpx 0;
    margin-left: 20rpx;
    border-bottom: 1rpx solid #eee;

    &:last-child {
      border-bottom: none;
    }

    .pic {
      width: 200rpx;
      height: 200rpx;
      margin-right: 30rpx;
    }

    .meta {
      flex: 1;
      font-size: 27rpx;
      color: #333;
      position: relative;
    }

    .name {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      position: absolute;
      bottom: 0;

      color: #ea4451;
      font-size: 33rpx;

      text {
        font-size: 22rpx;
      }
    }
  }
</style>
