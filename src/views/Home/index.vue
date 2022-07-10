<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in lunboImg" :key="item.id">
        <img
          :src="'http://liufusong.top:8080' + item.imgSrc"
          alt=""
          class="lunbotu"
        />
      </van-swipe-item>
    </van-swipe>
    <div class="search">
      <a href="http://localhost:8080/city#/city" class="address"
        ><span>{{ city }}</span>
        <van-icon name="arrow-down" size="12px" />
      </a>
      <van-search
        v-model="value"
        placeholder="请输入小区或地址"
        left-icon=" "
      />
    </div>
    <a href=""><i class="iconfont icon-ditu ditu"></i></a>
    <div class="NavList">
      <van-grid :border="false">
        <van-grid-item icon="photo-o" text="整租" to="/find" :border="false">
          <van-image src="/img/下载.png" />
          <span>整租</span>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="合租" to="/find"
          ><van-image src="/img/下载 (1).png" alt="" /><span
            >合租</span
          ></van-grid-item
        >
        <van-grid-item icon="photo-o" text="整租" to="/address"
          ><van-image src="/img/下载 (2).png" alt="" /><span
            >地图找房</span
          ></van-grid-item
        >
        <van-grid-item
          icon="photo-o"
          text="整租"
          to="/rent"
          v-if="$store.state.user && $store.state.user.token"
          ><van-image src="/img/下载 (3).png" alt="" /><span
            >去出租</span
          ></van-grid-item
        >
        <van-grid-item icon="photo-o" text="整租" to="/login" v-else
          ><van-image src="/img/下载 (3).png" alt="" /><span
            >去出租</span
          ></van-grid-item
        >
      </van-grid>
    </div>
    <div class="house-group">
      <div class="list">
        <span>租房小组</span>
        <a href="" class="more">更多</a>
      </div>
      <div class="more-House">
        <van-row>
          <van-col span="10" v-for="item in GroupData" :key="item.id"
            ><van-image :src="'http://liufusong.top:8080' + item.imgSrc" />
            <div class="text">
              <span class="group-text">{{ item.desc }}</span>
              <span class="group-text">{{ item.title }}</span>
            </div>
          </van-col>

          <!-- <van-col span="10">span: 8</van-col> -->
        </van-row>
        <!-- <van-row>
          <van-col span="10">span: 8</van-col>
          <van-col span="10">span: 8</van-col>
        </van-row> -->
      </div>
    </div>
  </div>
</template>

<script>
import { getImg, getNav } from '@/api/home'
export default {
  created() {
    this.getLunbo()
    this.getGroup()
    this.city = this.$route.query.city
    this.$store.commit('setCity', this.city)
  },
  data() {
    return {
      lunboImg: [],
      value: '',
      GroupData: [],
      city: '北京'
    }
  },
  methods: {
    async getLunbo() {
      try {
        const res = await getImg()
        this.lunboImg = res.data.body
        // console.log(this.lunboImg)
      } catch (error) {
        console.log(error)
      }
    },
    async getGroup() {
      try {
        const res = await getNav()
        console.log(res)
        if (res.status === 200) {
          this.GroupData = res.data.body
          console.log(this.GroupData)
        }
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
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  height: 400px;
}
.lunbotu {
  width: 100%;
  height: 400px;
  position: relative;
}
.search {
  position: absolute;
  left: 40px;
  height: 80px;
  width: 620px;
  border-radius: 3px;
  background-color: #fff;

  // position: relative;
  top: 40px;
  .address {
    margin-left: 40px;
    text-align: center;
    line-height: 70px;
    span {
      font-size: 28px;
      color: #333;
    }
  }
  .van-search {
    height: 80px;
    width: 500px;
    position: absolute;
    top: 0px;
    left: 120px;
  }
}
.ditu {
  font-size: 35px;
  color: #fff;
  position: absolute;
  right: 30px;
  top: 59px;
}
.NavList {
  width: 100%;
  height: 244px;
  background-color: pink;
  .van-grid {
    height: 244px;
    .van-image {
      margin-bottom: 80px;
    }
  }
}
.van-image {
  width: 120px;
  height: 120px;
}
.van-grid {
  span {
    margin-top: -60px;
    font-size: 30px;
  }
}
.house-group {
  width: 100%;
  height: 350px;
  background-color: #f6f5f6;
  .list {
    padding: 20px 40px;
  }
  span {
    font-size: 32px;
    font-weight: 600;
  }
  .more {
    position: absolute;
    font-size: 30px;
    color: rgb(94, 91, 91);
    right: 10px;
    margin-top: 9px;
  }
}
.more-House {
  padding: 0px 40px;
}
.van-col {
  margin-left: 15px;
  margin-top: 15px;
  width: 320px;
  height: 100px;
  background-color: #fff;
  display: flex;
  border-radius: 10px;
  .van-image {
    width: 110px;
    height: 100px;
  }
  .text {
    padding: 15px 30px;
  }
  .group-text {
    font-size: 26px;
    display: block;
    font-weight: 400;
  }
}
</style>
