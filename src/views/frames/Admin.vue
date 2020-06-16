<template>
    <el-container>
      <el-aside>
        <el-menu @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main></el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
</template>
<script>
export default {
    name: 'Admin',
    data () {
        return {}
    }
}
</script>
<style lang="scss" scoped>

</style>