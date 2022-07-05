<template>
  <div>
    <van-nav-bar title="发布房源" left-arrow @click-left="onClickLeft" />
    <van-cell title="房源信息" class="rentHouse" />
    <!-- <van-divider /> -->
    <van-cell
      title="小区名称"
      is-link
      @click="$router.push('/search')"
      value="请输入小区名称"
      class="house"
    />
    <van-field v-model="money" label="租金" placeholder="请输入租金/月">
      <template #extra>
        <i>￥/月</i>
      </template>
    </van-field>
    <van-field v-model="square" label="建筑面积" placeholder="请输入建筑面积">
      <template #extra>
        <i>㎡</i>
      </template>
    </van-field>
    <van-field
      readonly
      clickable
      label="户型"
      :value="value"
      @click="showPicker = true"
      placeholder="请选择"
      class="select"
      is-link
    />
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <van-field
      readonly
      clickable
      label="所在楼层"
      :value="floor"
      @click="showPicker1 = true"
      placeholder="请选择"
      class="select"
      is-link
    />
    <van-popup v-model="showPicker1" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns1"
        @cancel="showPicker1 = false"
        @confirm="onConfirm1"
      />
    </van-popup>
    <van-field
      readonly
      clickable
      label="朝向"
      :value="chaoxiang"
      @click="showPicker2 = true"
      placeholder="请选择"
      class="select"
      is-link
    />
    <van-popup v-model="showPicker2" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns2"
        @cancel="showPicker2 = false"
        @confirm="onConfirm2"
      />
    </van-popup>
    <van-cell title="房屋标题" />
    <van-field
      v-model="message"
      rows="2"
      autosize
      type="textarea"
      maxlength="50"
      placeholder="请输入标题（例如：整租 小区名 2室 5000元）"
      show-word-limit
    />
    <van-cell title="房屋图像" />
    <van-uploader v-model="fileList" multiple />
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
    <div class="maisu">
      <div class="maiosihouse">
        <van-cell title="房屋描述" />
        <van-field
          v-model="message"
          rows="4"
          type="textarea"
          maxlength="500"
          placeholder="请输入房屋描述信息"
        />
      </div>
    </div>

    <div class="btn">
      <van-button type="default" class="quxiao">取消</van-button>
      <van-button type="primary" class="submit">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  created() { },
  data() {
    return {
      fileList: [

      ],
      columns: ['一室', '二室', '三室', '四室', '四室+'],
      columns1: ['高楼层', '中楼层', '低楼层'],
      columns2: ['东', '西', '南', '北', '东南', '东北', '西南', '西北'],
      money: '',
      square: '',
      value: '',
      message: '',
      floor: '',
      chaoxiang: '',
      showPicker: false,
      showPicker1: false,
      showPicker2: false
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push('/home')
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    },
    onConfirm(value) {
      this.value = value
      this.showPicker = false
    },
    onConfirm1(value) {
      this.floor = value
      this.showPicker1 = false
    },
    onConfirm2(value) {
      this.chaoxiang = value
      this.showPicker2 = false
    },
    isChange(txt) {
      console.log(txt)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
/deep/ .rentHouse {
  color: #21b97a !important;
}
.van-divider {
  margin-top: -10px;
}
.van-cell {
  position: relative;
  color: #666;
  height: 88px;
  input {
    position: absolute;
    // margin-right: 0px;
  }
}
.house {
  height: 88px;
}
.van-cell__value {
  color: #666;
  font-size: 28px;
}
.van-field i {
  font-family: "Microsoft YaHei";
}
.img {
  height: 200px;
}
.van-uploader {
  margin-top: 20px;
  margin-left: 40px;
}
.iconfont {
  margin-top: 20px;
  font-size: 50px;
  text-align: center;
  color: black;
}
.van-grid {
  margin-top: 15px;
}
/deep/ .van-grid-item__text {
  margin-top: -50px;
}
.icon-shafa {
  color: black;
}

.maisu {
  position: relative;
  width: 100%;
  background-color: #f6f5f6;
  min-height: 600px;
  .maiosihouse {
    position: absolute;
    top: 50px;
    width: 100%;
    margin-bottom: 30px;
    min-height: 400px;
    background-color: #fff;
  }
  /deep/ .van-field {
    min-height: 300px;
  }
}
/deep/ .HouseMsg {
  width: 100%;
  height: 500px;
}
.van-button {
  width: 375px;
  font-size: 30px;
}
.quxiao {
  color: #21b97a;
}
.btn {
  position: fixed;
  bottom: 0;
}
.select {
  /deep/ .van-field__control {
    text-align: right;
  }
}
.green {
  color: #21b97a;
}
.black {
  color: black;
}
</style>
