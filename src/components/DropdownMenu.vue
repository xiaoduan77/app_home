<template>
  <div>
    <!-- 下拉列表 -->
    <van-tree-select
      :items="items"
      :active-id.sync="activeIds"
      :main-active-index.sync="activeIndex"
    />
  </div>
</template>

<script>
export default {
  created() { },
  data() {
    return {
      items: '',
      activeIds: [1, 2],
      activeIndex: 0
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
</style>
