<template>
  <el-container>
    <el-header class="__header">
        <head-widget src="https://avatars3.githubusercontent.com/u/34998646?s=400&u=dc87fc4954c4e546513c9ed194ca3c93fdc24607&v=4" :drop-items="dropItems" @pushSetting="handleSetting"/>
    </el-header>
    <router-view/>
  </el-container>
</template>
<script>
import HeadWidget from '../components/common/HeadWidget'
export default {
  name: 'Index',
  data () {
    return {
      msg: '小饼干的平底锅',
      isCollapse: false,
      dropItems: [
        {
          index: 0,
          value: '设置',
          command: 'pushSetting'
        },
        {
          index: 1,
          value: '退出登录',
          command: 'loginOut'
        }
      ]
    }
  },
  components: {HeadWidget},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSetting() {
      this.$router.go('settings/profile')
    }
  }
}
</script>
<style lang="scss" scoped>
    .__header {
        padding: 0;
    }
</style>