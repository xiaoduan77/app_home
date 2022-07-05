<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/home">
        <template #icon>
          <i class="iconfont icon-shouye"></i>
        </template>
        首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/find">
        <template #icon>
          <i class="iconfont icon-chazhao"></i>
        </template>
        找房</van-tabbar-item
      >
      <van-tabbar-item replace to="/zixun" >
        <template #icon>
          <i class="iconfont icon-zixun"></i>
        </template>
        资讯</van-tabbar-item
      >
      <van-tabbar-item replace to="/my" >
        <template #icon>
          <i class="iconfont icon-wode"></i>
        </template>
        我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created() { },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
i{
  font-size: 45px;
}
</style>
