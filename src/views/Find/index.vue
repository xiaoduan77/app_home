<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" class="nav">
    </van-nav-bar>
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
    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item title="区域"
          ><van-area
            :area-list="areaList"
            confirm-button-text=" "
            cancel-button-text=" "
          />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button block type="primary">确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="方式">
          <van-area
            :area-list="areaList"
            confirm-button-text=" "
            cancel-button-text=" "
          />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button block type="primary">确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="租金">
          <van-area
            :area-list="areaList"
            confirm-button-text=" "
            cancel-button-text=" "
          />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button block type="primary">确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="筛选">
          <van-area
            :area-list="areaList"
            confirm-button-text=" "
            cancel-button-text=" "
          />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button block type="primary">确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
      </van-dropdown-menu>
    </van-sticky>

    <div class="house">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-card
          :price="item.price + '元/月'"
          :desc="item.desc"
          :title="item.title"
          :thumb="'http://liufusong.top:8080' + item.houseImg"
          v-for="(item, index) in LikeMsg"
          :key="index"
          @click="toDetails(item.houseCode)"
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
      </van-list>
    </div>
  </div>
</template>

<script>
import { getHouses, getMsgCity } from '@/api/find'
export default {
  created() {
    this.city = this.$store.state.city
    this.id = this.$store.state.Cityid
    this.getHouses()
    // this.getMsgCity()
  },
  data() {
    return {
      value: '',
      isShow: false,
      show: '',
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市'
        },
        city_list: {
          110100: '北京市',
          120100: '天津市'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区'
          // ....
        }
      },
      city: '',
      quyu: '',
      fangshi: '',
      money: '',
      filter: '',
      id: '',
      start: 1,
      end: 20,
      LikeMsg: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    showPopup() {
      this.show = true
    },
    async getHouses() {
      console.log(this.id)
      try {
        const res = await getHouses(this.id, this.start, this.end)
        this.LikeMsg = res.data.body.list
        console.log(this.LikeMsg)
        if (res.data.body.list.length === 0) {
          this.finished = true
          return
        }
        this.LikeMsg.push(...res.data.body.list)
        this.loading = false
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
    onLoad() {
      this.start = this.start + 5
      this.end = this.end + 5
      this.getHouses()
    },
    toDetails(houseCode) {
      this.$router.push('/details')
      this.$store.commit('setCityHouseCode', houseCode)
    }

  },
  computed: {},
  watch: {},
  filters: {},
  components: {
  }
}
</script>

<style scoped lang="less">
.nav {
  width: 100%;
  position: relative;
}
.search {
  display: flex;
  position: absolute;
  margin-top: -85px;
  margin-left: 80px;
  top: 100px !important;
  height: 60px;
  width: 600px;
  border-radius: 3px;
  background-color: #fff;
  z-index: 2;
  border-radius: 9px;
  .address {
    display: flex;
    align-items: center;
    margin-left: 40px;
    text-align: center;
    line-height: 70px;
    span {
      font-size: 28px;
      color: #333;
    }
  }
  /deep/ .van-search {
    height: 40px;
    width: 400px;
    position: absolute;
    top: -0px;
    left: 130px;
  }
  /deep/.van-cell {
    height: 50px;
    margin-top: -16px;
  }
  /deep/ .van-search__content {
    width: 40px;
    margin-top: 15px;
  }
}
.ditu {
  font-size: 35px;
  color: #fff;
  position: absolute;
  right: 20px;
  top: 25px;
  z-index: 2;
}
.option {
  height: 80px;
  background-color: pink;
}
.van-popup {
  margin-top: 160px;
}
/deep/.van-picker__columns {
  height: 300px;
}
.van-card {
  margin-top: 0px;
  height: 220px;
  padding-bottom: 80px;
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
.house {
  padding-bottom: 95px;
}
</style>
