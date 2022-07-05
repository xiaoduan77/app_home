<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" class="nav">
    </van-nav-bar>
    <div class="search">
      <a href="http://localhost:8080/city#/city" class="address"
        ><span>北京</span>
        <van-icon name="arrow-down" size="12px" />
      </a>
      <van-search
        v-model="value"
        placeholder="请输入小区或地址"
        left-icon=" "
      />
    </div>
    <a href=""><i class="iconfont icon-ditu ditu"></i></a>
  </div>
</template>

<script>
export default {
  created() { },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
.nav {
  width: 100%;
  position: relative;
}
.search {
  position: absolute;
  top: 0.2rem;
  left: 80px;
  height: 60px;
  width: 600px;
  border-radius: 3px;
  background-color: #fff;
  z-index: 2;
  border-radius: 9px;

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
</style>
