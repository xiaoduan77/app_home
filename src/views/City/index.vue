<template>
  <div>
    <van-sticky>
      <van-nav-bar title="城市列表" left-arrow @click-left="onClickLeft" />
    </van-sticky>
    <van-index-bar :index-list="IndexData">
      <van-index-anchor index="">当前城市</van-index-anchor>
      <van-cell :title="CurrentCity" />
      <!-- <div v-for="(item,index) in CityHot" :key="index"> -->
      <van-index-anchor index="">热门城市</van-index-anchor>
      <van-cell
        :title="item.label"
        v-for="(item, index) in CityHot"
        :key="index"
        @click="getCityMsg(item.label)"
      />
      <div v-for="(value, index) in Cityname" :key="index">
        <van-index-anchor :index="index"></van-index-anchor>
        <!-- {{value}} -->
        <van-cell
          :title="item.label"
          v-for="(item, index) in value"
          :key="index"
          @click="getCityMsg(item.label)"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getCity, getHotCity, getCityMsg } from '@/api/city'
import { mapState, mapActions } from '@/store/index'
export default {
  created() {
    this.getData()
    this.getHot()
    // this.getCityMsg()
  },
  data() {
    return {
      FirstCity: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'],
      // 用来存放get过来的数据
      CityData: [],
      // 用于存放格式化后的数据
      Cityname: {},
      IndexData: [],
      // 用于存放热门城市数据
      CityHot: [],
      CurrentCity: ''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    async getData() {
      try {
        const res = await getCity(1)
        // console.log(res)
        this.CityData = res.data.body
        // console.log(this.CityData)
        this.CityName()
      } catch (error) {
        console.log(error)
      }
    },
    // 获取热门城市数据
    async getHot() {
      try {
        const res = await getHotCity()
        // console.log(res)
        this.CityHot = res.data.body
        // console.log(this.CityHot)
      } catch (error) {
        console.log(error)
      }
    },
    // 获取城市房源信息
    async getCityMsg(city) {
      try {
        const res = await getCityMsg(city)
        // console.log(res)
        console.log(res.data.body.value)
        this.$store.commit('setCityId', res.data.body.value)
        if (res.data.body.label === city) {
          this.$router.push({ path: '/home', query: { city: city } })
        } else {
          this.$toast('该城市暂无房源')
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 格式化数据
    CityName() {
      // 循环26个字母的数组
      this.FirstCity.forEach(item => {
        this.Cityname[item] = []
        this.CityData.forEach(el => {
          const firstName = el.short.substring(0, 1).toUpperCase()
          // eslint-disable-next-line eqeqeq
          if (firstName == item) {
            this.Cityname[item].push(el)
            // this.IndexData.push(item)
            this.IndexData[this.IndexData.length] = item
          }
        })
      })
      // 去重索引数组
      this.IndexData = [...new Set(this.IndexData)]
      this.IndexData.unshift('#', '热')
      // 过滤空数组
      for (const item in this.Cityname) {
        if (this.Cityname[item].length === 0) {
          // this.IndexData.splice(item, 1)
          delete this.Cityname[item]
        }
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
/deep/ .van-index-anchor {
  color: #999;
  font-size: 28px;
}
.van-cell {
  font-size: 30px;
}
/deep/ .van-index-bar {
  highlight-color: green;
}
</style>
