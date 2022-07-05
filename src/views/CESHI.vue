<template>
  <div class="content">
    <van-sticky>
      <van-nav-bar title="选择城市" left-arrow />
      <van-search v-model="search" placeholder="请输入搜索关键词" />
    </van-sticky>
    <van-index-bar :sticky="false">
      <van-index-anchor
        :index="name"
        v-for="(item, name) in cities"
        :key="name"
      >
        <b>{{ name }}</b>
      </van-index-anchor>
    </van-index-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      FirstPin: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'M',
        'N',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'W',
        'X',
        'Y',
        'Z'
      ],
      cities: {},
      search: ''
    }
  },
  mounted() {
    this.$axios({
      url: '请求地址'
    }).then(res => {
      const cities = '请求得到的数据'
      console.log(cities)
      const cityName = {}
      // 循环26个字母的数组
      this.FirstPin.forEach(item => {
        cityName[item] = []
        cities.forEach(el => {
          // 对比开头字母是否对应
          const first = el.pinyin.substring(0, 1).toUpperCase()
          // eslint-disable-next-line eqeqeq
          if (first == item) {
            cityName[item].push(el)
          }
        })
      })
      console.log(cityName)
      this.$nextTick(() => {
        this.cities = cityName
      })
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss" scoped>
.content {
  background: #eee;
}
::v-deep .van-index-anchor {
  padding: 0;
  b {
    padding-left: 10px;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
