<template>
  <el-container>
    <el-header class="__header">
        <head-widget title="小饼干"/>
    </el-header>
  </el-container>
</template>
<script>
import HeadWidget from '../components/common/HeadWidget'
export default {
  name: 'Index',
  data () {
    return {
      msg: '小饼干的平底锅',
      isCollapse: false
    }
  },
  components: {HeadWidget},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss" scoped>
    .__header {
        padding: 0;
    }
</style>