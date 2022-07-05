<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入小区或地址"
        @cancel="$router.push('/rent')"
        background="#f6f5f6"
      />
    </form>
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
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">

</style>
