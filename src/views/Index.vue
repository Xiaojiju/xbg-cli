<template>
  <el-container>
    <el-header class="__header">
        <head-widget :drop-items="dropItems" @pushSetting="handleSetting"/>
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
      ],
      headLogo: '../../assets/logo-cat.png'
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