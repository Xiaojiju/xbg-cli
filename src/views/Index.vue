<template>
  <!-- <div>
    <span class="site-name">{{ msg }}</span>
  </div> -->
  <el-container>
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
  </el-container>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: '小饼干的平底锅',
      isCollapse: false
    }
  },
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
<style scoped>
  .logo {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .el-header {
    border-bottom: 1px solid #eaecef;
  }
  .el-row {
    height: 100%;
  }
  .el-col {
    height: 100%;
  }
  .site-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2c3e50;
  }
</style>