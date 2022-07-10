<template>
  <div class="details">
    <van-nav-bar :title="list.community" left-arrow @click-left="onClickLeft" />
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="#888"
    >
      <van-swipe-item v-for="(item, index) in list.houseImg" :key="index">
        <img :src="'http://liufusong.top:8080' + item" class="lunbotu" />
      </van-swipe-item>
    </van-swipe>
    <div class="container-house">
      <p>{{ list.title }}</p>
      <van-tag v-for="(item, index) in list.tags" :key="index">{{
        item
      }}</van-tag>
      <van-divider />
      <div class="details-house">
        <van-row>
          <van-col span="8">
            <p class="money">{{ list.price }}/月</p>
            <p class="txt">租金</p>
          </van-col>
          <van-col span="8">
            <p class="money">{{ list.roomType }}</p>
            <p class="txt">房型</p>
          </van-col>
          <van-col span="8">
            <p class="money">{{ list.size }}平米</p>
            <p class="txt">面积</p>
          </van-col>
        </van-row>
      </div>
      <van-divider />
      <div class="details-chaoxiang">
        <span>装修：</span><i>精装</i>
        <span class="kongge chaoxiang">朝向：</span
        ><i v-for="(item, index) in list.oriented" :key="index">{{ item }}</i
        ><br />
        <span>楼层：</span><i>{{ list.floor }}</i>
        <span class="kongge">类型：</span><i>普通住宅</i>
      </div>
    </div>
    <div class="details-address">
      <p>小区：{{ list.community }}</p>

      <img src="" alt="" />
      <van-cell title="房屋配置" />
      <van-grid :column-num="5" :border="false">
        <van-grid-item class="iconfont icon-armoire" text="衣柜" />
        <van-grid-item class="iconfont icon-xiyiji" text="洗衣机" />
        <van-grid-item class="iconfont icon-kongtiao" text="空调" />
        <van-grid-item class="iconfont icon-meiqitianranqi" text="天然气" />
        <van-grid-item class="iconfont icon-bingxiang" text="冰箱" />
        <van-grid-item class="iconfont icon-nuanqi" text="暖气" />
        <van-grid-item class="iconfont icon-dianshiji" text="电视" />
        <van-grid-item
          class="iconfont icon-haofangtuo400iconfont2reshuiqi"
          text="热水器"
        />
        <van-grid-item class="iconfont icon-kuandai" text="宽带" />
        <van-grid-item class="iconfont icon-shafa" text="沙发" />
      </van-grid>
    </div>
    <div class="details-gaikuang">
      <h5>房源概况</h5>
      <van-divider />
      <div class="fangzhu-msg">
        <van-image
          fit="fill"
          round
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <span class="fangzhu">王女士</span><br />
        <span class="renzheng">
          <van-icon name="medal-o" />
          已认证房主</span
        >
        <van-button plain type="primary" size="small">发消息</van-button>
      </div>
      <div class="container">
        <p>{{ list.description }}</p>
      </div>
    </div>
    <div class="details-like">
      <h5>猜你喜欢</h5>
      <van-divider />
      <van-card
        price="4500元/月"
        desc="72.32㎡/南 北/低楼层"
        title="安贞西里 3室1厅"
        thumb="http://liufusong.top:8080/img/message/1.png"
      >
        <template #tags>
          <van-tag>近地铁</van-tag>
        </template>
      </van-card>
      <van-card
        price="7200元/月"
        desc="83㎡/南/高楼层"
        title="天居园 2室1厅"
        thumb="http://liufusong.top:8080/img/message/2.png"
      >
        <template #tags>
          <van-tag>近地铁</van-tag>
        </template>
      </van-card>
      <van-card
        price="4300元/月"
        desc="52㎡/西南/低楼层"
        title="角门甲4号院 1室1厅"
        thumb="http://liufusong.top:8080/img/message/3.png"
      >
        <template #tags>
          <van-tag>近地铁</van-tag>
        </template>
      </van-card>
    </div>
    <div class="footer">
      <van-button plain type="default" icon="star-o">收藏</van-button>
      <van-button plain type="default">在线咨询</van-button>
      <van-button type="primary">电话预约</van-button>
    </div>
  </div>
</template>

<script>
import { getHouseCity } from '@/api/details'
export default {
  created() {
    this.HouseCode = this.$store.state.HouseCode
    this.getHouseCity()
  },
  data() {
    return {
      HouseCode: '',
      list: []
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    async getHouseCity() {
      try {
        const res = await getHouseCity(this.HouseCode)
        console.log(res)
        this.list = res.data.body
        console.log(this.list)
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
.details {
  background-color: #f6f5f6;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 0.33333rem;
  text-align: center;
  background-color: #fff;
}
.van-swipe__indicator {
  color: #ccc;
}
.container-house {
  padding-top: 80px;
  padding-left: 30px;
  height: 520px;
  background-color: #fff;
  p {
    margin-top: -10px;
    font-size: 32px;
    margin-bottom: 20px;
  }
  /deep/.van-tag {
    margin-top: -90px;
    background-color: #e1f5f8;
    color: #39becd;
    border-radius: 3px;
  }
  .details-house {
    /deep/.van-col {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-content: center;
      align-items: center;
      justify-content: center;
      .money {
        color: #fa5741;
        font-size: 36px;
        font-weight: bolder;
      }
      .txt {
        font-size: 30px;
        color: #999;
      }
    }
  }
  .details-chaoxiang {
    span,
    i {
      font-size: 24px !important;
      color: #999;
    }
    .kongge {
      margin-left: 200px;
    }
    .chaoxiang {
      margin-left: 230px;
    }
    i {
      color: #333;
    }
  }
}
.details-address {
  height: 600px;
  background-color: #fff;
  margin-top: 20px;
  p {
    font-size: 28px;
    color: #666;
    padding: 20px 30px;
  }
}
.icon-shafa {
  color: black;
}
.van-grid {
  margin-top: 15px;
}
/deep/ .van-grid-item__text {
  margin-top: -50px;
}
.iconfont {
  margin-top: 20px;
  font-size: 50px;
  text-align: center;
  color: black;
}
.details-gaikuang {
  // height: 520px;
  background-color: #fff;
  margin-top: 40px;
  .fangzhu-msg {
    position: relative;
    height: 124px;
  }
  .container {
    color: #333;
    font-size: 28px;
    margin-top: 20px;
    padding: 0px 20px;
  }
  h5 {
    font-size: 30px;
    font-weight: 600;
    padding-top: 30px;
    padding-left: 30px;
    margin-bottom: 20px;
  }
  /deep/ .van-image {
    width: 104px;
    height: 104px;
    padding-left: 20px;
  }
  .fangzhu {
    position: absolute;
    left: 160px;
    top: 15px;
    font-size: 30px;
    color: #333;
  }
  .renzheng {
    position: absolute;
    left: 160px;
    top: 60px;
    font-size: 26px;
    color: #fa5741;
  }
  .van-button {
    position: absolute;
    right: 20px;
    margin-top: -100px;
  }
}
.details-like {
  h5 {
    font-size: 30px;
    font-weight: 600;
    padding-top: 30px;
    padding-left: 30px;
    margin-bottom: 20px;
  }
  background-color: #fff;
  margin-top: 40px;
  .van-card {
    height: 240px;
  }
  .van-divider {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  /deep/ .van-tag {
    margin-left: 10px;
    background-color: #e1f5f8;
    color: #39becd;
    margin-top: 14px;
    border-radius: 3px;
  }
  /deep/ .van-tag--danger:nth-child(2) {
    background-color: #e1f5ed;
  }
  /deep/.van-card__title {
    display: -webkit-box;
    overflow: hidden;
    /*! autoprefixer: off; */
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    font-size: 30px;
    font-weight: 600;
    font-family: "Microsoft YaHei";
  }
  .van-card__desc {
    margin-top: 15px;
    color: #afb2b3;
  }
  .van-card__price-currency {
    display: none;
  }
  .van-card__price-integer {
    color: #fa5741;
    font-weight: 700;
  }
}
.footer {
  height: 88px;
  display: flex;
  .van-button {
    flex: 1;
  }
}
.lunbotu {
  width: 100%;
  height: 500px;
  position: relative;
}
</style>
