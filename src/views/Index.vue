<template>
  <el-container>
<<<<<<< HEAD
    <el-header class="__header">
        <head-widget title="小饼干"/>
    </el-header>
=======
    <el-header>
      <el-row>
        <el-col :span="12">
          <div class="logo">
            <span class="site-name">{{ msg }}</span>
          </div>
        </el-col>
        <el-col :span="12">
          
        </el-col>
      </el-row>
    </el-header>
    <router-view/>
>>>>>>> 3e01d222d88ec801f60b74cfde0f830def9b72c7
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