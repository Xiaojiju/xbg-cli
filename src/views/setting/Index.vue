<template>
    <el-container>
        <el-main>
            <el-row class="__page-content">
                <el-col :span="6" class="__padding-right">
                    <my-nav :src="url" :tabs="tabs" name="xiaojiju" head @navClick="next"/>
                    <!-- <nav class="__nav">
                        <a class="text-mid text-blue __menu-item" @click="about">关于</a>
                        <a class="text-mid text-blue __menu-item" @click="repository">仓库</a>
                        <a class="text-mid text-blue __menu-item" @click="signout">退出登录</a>
                    </nav> -->
                    <my-nav :tabs="footer" @navClick="redirect"/>
                </el-col>
                <el-col :span="18">
                    <router-view/>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
import MyNav from '../../components/common/MyNav'
export default {
    name: 'Settings',
    data () {
        return {
            url: 'https://avatars2.githubusercontent.com/u/34998646?s=60&v=4',
            tabs: [
                { index: 0, name: 'profile', value: '个人简介', selected: false },
                { index: 1, name: 'account', value: '账号', selected: false },
                { index: 2, name: 'security', value: '隐私安全', selected: false },
                { index: 3, name: 'notify', value: '通知', selected: false },
                { index: 4, name: 'message', value: '消息', selected: false }
            ],
            footer: [
                { index: 0, name: 'about', value: '关于', selected: false },
                { index: 1, name: 'repository', value: '仓库', selected: false },
                { index: 2, name: 'signout', value: '退出登录', selected: false }
            ]
        }
    },
    components: { MyNav },
    mounted() {
        this.selected()
    },
    methods: {
        /**
         * 选中当前栏
         */
        selected() {
            let pathName = this.$route.name
            this.tabs.map( item => {
                item.selected = item.name === pathName
            })
        },
        next(item) {
            this.$router.push(item.name)
            // 由于mounted函数只能执行一次，所以在路由发生变化后再次调用
            // 后续进行优化
            this.selected()
        },
        redirect(item) {
            console.log(item)
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
    .__page-content {
        padding-top: 20px;
        width: 980px;
        margin-left: auto;
        margin-right: auto;
    }

    .__padding-right {
        padding-right: 24px !important;
    }
</style>