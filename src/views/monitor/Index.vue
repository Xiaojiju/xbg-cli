<template>
    <el-container>
        <el-aside>
            <my-aside :menus="menus" @next="next" @handleOpen="handleOpen"></my-aside>
        </el-aside>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>
<script>
import MyAside from '../../components/common/MyAside'
export default {
    name: 'Admin',
    data () {
        return {
            menus: [
                { index: '0', icon: 'el-icon-location', title: '角色管理', subs: [
                    { index: '0-1', title: '角色管理' },
                    { index: '0-2', title: '角色管理' },
                    { index: '0-3', title: '角色管理' },
                    { index: '0-4', title: '角色管理' },
                    { index: '0-5', title: '角色管理' },
                    { index: '0-6', title: '角色管理' },
                ] },
                { index: '1', icon: 'el-icon-location', title: '角色管理', subs: [
                    { index: '1-1', title: '角色管理' },
                    { index: '1-2', title: '角色管理' },
                    { index: '1-3', title: '角色管理' },
                    { index: '1-4', title: '角色管理' },
                    { index: '1-5', title: '角色管理' },
                    { index: '1-6', title: '角色管理' },
                ] },
                { index: '2', icon: 'el-icon-location', title: '角色管理', subs: [
                    { index: '2-1', title: '角色管理' },
                    { index: '2-2', title: '角色管理' },
                    { index: '2-3', title: '角色管理' },
                    { index: '2-4', title: '角色管理' },
                    { index: '2-5', title: '角色管理' },
                    { index: '2-6', title: '角色管理' },
                ] },
                { index: '3', icon: 'el-icon-location', title: '角色管理', subs: [
                    { index: '3-1', title: '角色管理' },
                    { index: '3-2', title: '角色管理' },
                    { index: '3-3', title: '角色管理' },
                    { index: '3-4', title: '角色管理' },
                    { index: '3-5', title: '角色管理' },
                    { index: '3-6', title: '角色管理' },
                ] }
            ]
        }
    },
    components: {MyAside},
    methods: {
        next(item) {
            console.log(item)
            this.$notify({
                title: '警告',
                message: '暂时还没有开发此页面',
                type: 'warning'
            });
        },
        handleOpen(data) {
            console.log(data)
            this.$notify({
                title: '警告',
                message: '暂时还没有开发此页面',
                type: 'warning'
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    .el-aside {
        display: block;
        position: absolute;
        left: 0;
        top: 60px;
        bottom: 0;
        overflow-y: scroll;
        width: 220px !important;
    }
    .el-aside::-webkit-scrollbar {
        display: none;
    }
    .el-main {
        display: block;
        position: absolute;
        left: 220px;
        right: 0;
        top: 60px;
        bottom: 0;
        overflow-y: scroll;
    }
    .el-main::-webkit-scrollbar {
        display: none;
    }
</style>