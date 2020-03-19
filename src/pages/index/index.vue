<template>
  <view :style="{height: pageHeight, overflow: 'hidden'}">
    <search @search="disableScroll" />
    <!-- 焦点图 -->
    <swiper class="banner" indicator-dots indicator-color="rgba(255, 255, 255, 0.6)" indicator-active-color="#fff">
      <swiper-item v-for="item in bannerList" :key="item.goods_id">
        <navigator url="'/pages/goods/index/id='+item.goods_id">
          <image :src="item.image_src"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 导航条 -->
    <view class="navs">
      <navigator open-type="switchTab" url="/pages/category/index" v-for="item in navList" :key="item.name">
        <image :src="item.image_src"></image>
      </navigator>
    </view>
    <!-- 楼层 -->
    <view class="floors">
      <view class="floor" v-for="(item,index) in floorList" :key="index">

        <view class="title">
          <image :src="item.floor_title.image_src"></image>
        </view>

        <view class="items">
          <navigator url="/pages/list/index" v-for="product in item.product_list" :key="product.image_width">
            <image :src="product.image_src" alt="product.name"></image>
          </navigator>
        </view>
      </view>
    </view>
    <!-- 回到顶部 -->
    <view class="goTop icon-top" @click="onTop" v-if="isgoTop"></view>
  </view>
</template>

<script>
  import search from '@/components/search';

  export default {

    data () {
      return {
        pageHeight: 'auto',
        bannerList:[],
        navList:[],
        floorList:[],
        // 控制回到顶部的显隐
        isgoTop:false

      }
    },

    components: {
      search
    },
    
    methods: {
      disableScroll (ev) {
        this.pageHeight = ev.pageHeight + 'px';
      },
      // 获取轮播图
      async getSwiperList () {
       const {message}= await this.request ({
          url: "/api/public/v1/home/swiperdata"
        })
        this.bannerList = message      
      },
      //获取导航菜单
       async getNavList () {
       const {message}= await this.request ({
          url: "/api/public/v1/home/catitems"
        })
        this.navList = message            
      },
      //获取楼层
       async getFloorList () {
       const {message}= await this.request ({
          url: "/api/public/v1/home/floordata"
        })
        this.floorList = message            
      },
      //回到顶部
      onTop() {
        uni.pageScrollTo({
          scrollTop:0,
          duration:1000
        })
      }
    },
    onLoad () {
      this.getSwiperList()
      this.getNavList()
      this.getFloorList ()
    },
     //下拉刷新
      async onPullDownRefresh() {
        // 重新获取数据
        await this.getSwiperList()
        await this.getNavList()
        await this.getFloorList ()
        // api：结束下拉效果
        uni.stopPullDownRefresh()
      },
      // 页面滚动时
      onPageScroll (event) {
        // console.log(event);
        // 判断滚动的距离
        if (event.scrollTop>200) {
          this.isgoTop = true
        }else {
          this.isgoTop = false
        }
      }
  }
</script>

<style scoped lang="less">
  .banner {
    width: 100%;
    height: 340rpx;

    image {
      width: 100%;
      height: 340rpx;
    }
  }

  .navs {
    display: flex;
    justify-content: space-between;
    padding: 30rpx 44rpx;

    image {
      width: 128rpx;
      height: 140rpx;
    }
  }

  .floor {

    .title {
      width: 750rpx;
      height: 60rpx;
      padding: 20rpx 0 0 8rpx;
      background-color: #f4f4f4;
    }

    .items {
      padding: 20rpx 16rpx;
      overflow: hidden;

      navigator {
        width: 193rpx;
        height: 188rpx;
        margin-left: 10rpx;
        margin-bottom: 10rpx;
        float: left;
      }

      navigator:first-child {
        width: 232rpx;
        height: 386rpx;
        margin-left: 0rpx;
      }

      navigator:nth-child(2),
      navigator:nth-child(5) {
        width: 273rpx;
      }
    }

    &:first-child {

      .items {

        navigator {
          width: 233rpx;
        }
      }
    }
  }

  .goTop {
    position: fixed;
    bottom: 30rpx;
    /* #ifdef H5 */
    bottom: 65px;
    /* #endif */
    right: 30rpx;
  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100rpx;
    height: 100rpx;
    font-size: 48rpx;
    color: #666;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
  }
</style>