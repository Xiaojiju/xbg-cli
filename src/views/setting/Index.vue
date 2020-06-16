<template>
    <el-container>
        <el-main>
            <el-row class="__page-content">
                <el-col :span="6" class="__padding-right">
                    <nav class="__nav margin-bottom">
                        <div class="__menu-heading __flex flex-row align-center">
                            <el-image
                                class="__avatar"
                                style="width: 32px; height: 32px"
                                :src="url"
                                :fit="fit">
                            </el-image>
                            <div class="__1h-condensed">
                                <div class="text-overflow __text-truncate text-mid text-bold text-black">小饼干</div>
                                <div class="__under-text text-df text-light">个人设置</div>
                            </div>
                        </div>
                        <a class="text-mid text-blue __menu-item __menu-item-selected" aria-selected="true">基本信息</a>
                        <a class="text-mid text-blue __menu-item __menu-item-selected">账号</a>
                        <a class="text-mid text-blue __menu-item __menu-item-selected">隐私安全</a>
                        <a class="text-mid text-blue __menu-item __menu-item-selected">手机号码</a>
                        <a class="text-mid text-blue __menu-item __menu-item-selected">邮箱</a>
                        <a class="text-mid text-blue __menu-item __menu-item-selected">通知</a>
                        <a class="text-mid text-blue __menu-item __menu-item-selected">消息</a>
                    </nav>
                    <nav class="__nav">
                        <a class="text-mid text-blue __menu-item">关于</a>
                        <a class="text-mid text-blue __menu-item">仓库</a>
                        <a class="text-mid text-blue __menu-item">退出登录</a>
                    </nav>
                </el-col>
                <el-col :span="18">
                    <router-view/>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
export default {
    name: 'Settings',
    data () {
        return {
            url: 'https://avatars2.githubusercontent.com/u/34998646?s=60&v=4',
            fit: 'fill',
        }
    },
    methods: {
        
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
    .__nav {
        list-style: none;
        background-color: #fff;
        border: 1px solid #d1d5da;
        border-radius: 3px;
        :last-child {
            border-bottom: none;
        }
        a {
            list-style: none;
            text-decoration: none;
        }
    }

    .__padding-right {
        padding-right: 24px !important;
    }
    .__menu-item {
        cursor: pointer;
        position: relative;
        display: block;
        padding: 8px 10px;
        border-bottom: 1px solid #e1e4e8;
    }
    .__menu-item:hover {
        background-color: cyan;
    }
    .__flex {
        display: flex !important;
    }
    .__menu-heading {
        display: block;
        padding: 8px 10px;
        margin-top: 0;
        margin-bottom: 0;
        font-size: 13px;
        font-weight: 600;
        line-height: 20px;
        color: #586069;
        background-color: #f3f5f8;
        border-bottom: 1px solid #e1e4e8;
        :first-child {
            border-top-left-radius: 2px;
            border-top-right-radius: 2px;
        }
        .__avatar {
            border-radius: 2px;
            margin-right: 8px !important;
        }
        .__1h-condensed {
            flex: 1;
            line-height: 1.25 !important;
            .__text-truncate {
                display: inline-block;
                max-width: 125px;
                vertical-align: top;
            }
            .__under-text {
                color: #586069 !important;
            }
        }
    }
    .__menu-item-selected[aria-selected=true]::before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 2px;
        content: "";
        background-color: #e36209;
    }
</style>