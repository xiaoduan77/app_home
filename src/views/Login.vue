<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit" class="form">
      <van-field
        class="inp"
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
      />
      <van-field
        class="inp"
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          class="loginBtn"
          >登 录</van-button
        >
      </div>
    </van-form>
    <a href="" class="register">还没有账号，去注册~</a>
  </div>
</template>

<script>
import { Login } from '@/api/user'
import store from '@/store'
export default {
  created() { },
  data() {
    return {
      username: '',
      password: ''

    }
  },
  methods: {
    // onSubmit(values) {
    //   console.log('submit', values)
    // }
    async onSubmit(values) {
      console.log('submit', values)
      try {
        const res = await Login(values)
        console.log(res)
        this.$store.commit('setUser', res.data.body)
        if (res.data.status === 200) {
          this.$toast.success('登录成功')
          this.$router.push('/home')
        } else {
          this.$toast.fail('账号或密码错误')
        }
      } catch (err) {
        console.log(err)
      }
    },
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
.loginBtn {
  color: #fff;
  background-color: #1cb676;
  border: 1px solid #1cb676;
  border-radius: 2px;
  margin-top: 60px;
  height: 90px;
}
.inp {
  height: 120px;
}
.form {
  margin-top: 40px;
}

.register {
  text-decoration: none;
  font-size: 24px;
  color: #666;
  text-align: center;
  margin-left: 240px;
}
</style>
