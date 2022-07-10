<template>
  <div>
    <img
      src="http://liufusong.top:8080/img/avatar.png"
      alt=""
      v-if="$store.state.user && $store.state.user.token"
      class="bg"
    />
    <img
      src="http://liufusong.top:8080/img/profile/bg.png"
      alt=""
      class="bg"
      v-else
    />
    <div class="user">
      <div class="cricle"></div>
      <van-image
        src="http://liufusong.top:8080/img/profile/avatar.png"
        lazy-load
        fit="fill"
        round
      />
      <div class="user-msg" v-if="$store.state.user && $store.state.user.token">
        <span>{{this.userMsg.nickname}}</span>
        <van-button type="primary" @click="quit">退出</van-button>
        <a href="javascript:;"
          >编辑个人资料
          <van-icon name="play" />
        </a>
      </div>
      <div class="user-msg" v-else>
        <span>游客</span>
        <van-button type="primary" @click="tolLogin">去登录</van-button>
      </div>
    </div>
    <div class="list" v-if="$store.state.user && $store.state.user.token">
      <van-row gutter="20">
        <van-col span="8" @click="$router.push('/like')">
          <i class="iconfont icon-shoucang"></i>
          <span>我的收藏</span>
        </van-col>
        <van-col span="8" @click="$router.push('/myhouse')">
          <i class="iconfont icon-home"></i>
          <span>我的出租</span>
        </van-col>
        <van-col span="8">
          <i class="iconfont icon-lishijilu_huaban"></i>
          <span>看房记录</span>
        </van-col>
        <van-col span="8">
          <i class="iconfont icon-xinyongqia1"></i>
          <span>成为房主</span>
        </van-col>
        <van-col span="8">
          <i class="iconfont icon-gerenziliao"></i>
          <span>个人资料</span>
        </van-col>
        <van-col span="8">
          <i class="iconfont icon-lianxiwomen"></i>
          <span>联系我们</span>
        </van-col>
      </van-row>
    </div>
    <div class="list1" v-else>
      <van-row gutter="20">
        <van-col span="8" @click="$router.push('/login')">
          <i class="iconfont icon-shoucang"></i>
          <span>我的收藏</span>
        </van-col>
        <van-col span="8" @click="$router.push('/login')">
          <i class="iconfont icon-home"></i>
          <span>我的出租</span>
        </van-col>
        <van-col span="8">
          <i class="iconfont icon-lishijilu_huaban"></i>
          <span>看房记录</span>
        </van-col>
        <van-col span="8">
          <i class="iconfont icon-xinyongqia1"></i>
          <span>成为房主</span>
        </van-col>
        <van-col span="8">
          <i class="iconfont icon-gerenziliao"></i>
          <span>个人资料</span>
        </van-col>
        <van-col span="8">
          <i class="iconfont icon-lianxiwomen"></i>
          <span>联系我们</span>
        </van-col>
      </van-row>
    </div>
    <img
      src="http://liufusong.top:8080/img/profile/join.png"
      alt=""
      class="gg"
    />
  </div>
</template>

<script>
import { myMsg } from '@/api/my'
export default {
  async created() {
    if (this.$store.state.user && this.$store.state.user.token) {
      try {
        const res = await myMsg(this.$store.state.user.token)
        console.log(res)
        this.userMsg = res.data.body
        console.log(this.userMsg)
      } catch (error) {
        console.log(error)
      }
    }
  },
  data() {
    return {
      userMsg: []
    }
  },
  methods: {
    tolLogin() {
      this.$router.push('/login')
    },
    async quit() {
      try {
        await this.$dialog.confirm({ message: '确认退出吗' })
        this.$store.commit('setUser', {})
      } catch (error) {
        console.log(error)
      }
    }
    // async userMsg() {
    //   try {
    //     const res = await myMsg()
    //     console.log(res)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
.bg {
  width: 100%;
  height: 500px;
}
.user {
  position: relative;
  width: 319 * 2px;
  height: 165 * 2px;
  background-color: #fff;
  margin: -250px 55px;
  box-shadow: 0 0 10px 3px #ddd;
  .cricle {
    width: 80 * 2px;
    height: 80 * 2px;
    background-color: #fff;
    border-radius: 50%;
    margin-left: 165px + 70px;
    position: relative;
    top: -60px;
    box-shadow: 0 2px 2px #bdbdbd;
  }
  .van-image {
    width: 70 * 2px;
    height: 70 * 2px;
    margin-left: 165px + 80px;
    margin-top: -150px;
    position: absolute;
    top: 100px;
  }
  .user-msg {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -40px;
    a {
      font-size: 22px;
      color: #333;
      margin-top: 20px;
    }
    span {
      font-size: 22px;
    }
    /deep/ .van-button {
      width: 150px;
      height: 60px;
      border-radius: 10px;
      position: absolute;
      top: 220px;
    }
  }
}
.list {
  margin-top: 240px;
  .van-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    i {
      font-size: 40px;
    }
    span {
      font-size: 28px;
      padding-top: 20px;
    }
  }
}
.list1 {
  margin-top: 240px;
  .van-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    i {
      font-size: 40px;
    }
    span {
      font-size: 28px;
      padding-top: 20px;
    }
  }
}
.gg {
  width: 345 * 2px;
  height: 84 * 2px;
  margin-left: 30px;
  margin-top: 60px;
}
</style>
