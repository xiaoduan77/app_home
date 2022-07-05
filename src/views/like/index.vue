<template>
  <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="onClickLeft" />
    <van-card
      :price="item.price + '元/月'"
      :desc="item.desc"
      :title="item.title"
      :thumb="'http://liufusong.top:8080' + item.houseImg"
      v-for="(item, index) in LikeMsg"
      :key="index"
    >
      <template #tags>
        <van-tag
          type="danger"
          v-for="(item1, index1) in item.tags"
          :key="index1"
          >{{ item1 }}</van-tag
        >
      </template>
    </van-card>
  </div>
</template>

<script>
import { myLike } from '@/api/my'
export default {
  created() {
    this.getLike()
    this.loadingMsg()
  },
  data() {
    return {
      LikeMsg: []
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    async getLike() {
      try {
        const res = await myLike()
        console.log(res)
        this.LikeMsg = res.data.body
        console.log(this.LikeMsg)
      } catch (error) {
        console.log(error)
      }
    },
    loadingMsg() {
      this.$toast.loading('加载中')
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
.van-card {
  margin-top: 0px;
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
</style>
