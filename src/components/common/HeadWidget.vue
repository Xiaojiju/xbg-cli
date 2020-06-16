<template>
    <div class="__header-section">
        <div class="padding-horizontal">
            <!-- <div class="flex flex-row justify-around align-center">
                <div class="__logo">
                    <img src="../../assets/logo.png"/>
                </div>
                <div></div>
            </div> -->
            <el-row type="flex" class="row-bg" justify="space-between" align="center">
                <el-col :span="6">
                    <div class="__logo flex flex-row align-center">
                        <img src="../../assets/logo.png"/>
                        <span class="text-lg text-bold text-black">小饼干</span>
                    </div>
                </el-col>
                <el-col :span="6">
                    <ul class="__mine flex flex-row justify-end">
                        <li class="__sub-menu-box flex justify-center align-center padding-horizontal-max">
                            <div class="__menu-item">
                                <el-badge value="99" max="99">
                                    <i class="el-icon-s-flag"/>通知
                                </el-badge>
                            </div>
                        </li>
                        <li class="__sub-menu-box flex justify-center align-center padding-horizontal-max">
                            <div class="__menu-item">
                                <el-badge value="200" max="99">
                                    <i class="el-icon-s-comment"/>消息
                                </el-badge>
                            </div>
                        </li>
                        <li class="__sub-menu-box flex justify-center align-center padding-horizontal-max">
                            <el-dropdown>
                                <div class="flex flex-row">
                                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                    <i class="el-icon-caret-bottom"></i>
                                </div>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>基本信息</el-dropdown-item>
                                    <el-dropdown-item>修改密码</el-dropdown-item>
                                    <el-dropdown-item>退出</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                    </ul>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HeadWidget',
    data () {
        return {}
    },
    props: {
        title: {
            type: String,
            value: ''
        }
    }
}
</script>
<style lang="scss" scoped>
    .__header-section {
        width: 100%;
        height: 60px;
        background-color: dimgray;
        outline: none;
    }
    .__logo {
        padding: 12px;
        img {
            width: 36px;
            height: 36px;
            display: block;
            margin-right: 6px;
        }
    }
    .__mine {
        list-style: none;
        overflow: visible;
        width:auto;
        height: 100%;
        .__sub-menu-box {
            .__menu-item {
                cursor: pointer;
            }
        }
    }
</style>