<template>
  <div>
    <van-nav-bar title="房屋管理" left-arrow @click-left="onClickLeft" />
    <!-- 搜索提示 -->
    <van-empty image="search" description="" v-if="HouseData.length === 0">
      <p>您还没有房源，<a href="javascrispt:;">去发布房源</a>吧~</p>
    </van-empty>
    <van-card
      :price="item.price + '元/月'"
      :desc="item.desc"
      :title="item.title"
      :thumb="'http://liufusong.top:8080' + item.houseImg"
      v-for="(item, index) in HouseData"
      :key="index"
      v-else
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
import { MyHouse } from '@/api/myhouse'
export default {
  created() {
    this.loadingMsg()
    this.getHouseMsg()
  },
  data() {
    return {
      HouseData: []
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    loadingMsg() {
      this.$toast.loading('加载中')
    },
    async getHouseMsg() {
      try {
        const res = await MyHouse()
        console.log(res)
        this.HouseData = res.data.body
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
.van-empty {
  p {
    font-size: 28px;
    margin-top: -0px;
    a {
      color: green;
    }
  }
}
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
