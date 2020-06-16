<template>
    <div class="__header-section">
        <div class="padding-horizontal">
            <el-row type="flex" class="row-bg" justify="space-between" align="center">
                <el-col :span="6">
                    <div class="__logo flex flex-row align-center">
                        <img :src="logo"/>
                    </div>
                </el-col>
                <el-col :span="6">
                    <ul class="__mine flex flex-row justify-end">
                        <li class="__sub-menu-box flex justify-center align-center padding-horizontal">
                            <div class="__menu-item">
                                <el-badge :value="notify.value" :max="notify.max">
                                    <el-button icon="el-icon-s-flag" circle size="small"></el-button>
                                </el-badge>
                            </div>
                        </li>
                        <li class="__sub-menu-box flex justify-center align-center padding-horizontal">
                            <div class="__menu-item">
                                <el-badge :value="message.value" :max="message.max">
                                    <el-button icon="el-icon-s-comment" circle size="small"></el-button>
                                </el-badge>
                            </div>
                        </li>
                        <li class="__sub-menu-box flex justify-center align-center padding-horizontal">
                            <el-dropdown @command="handleCommand">
                                <div class="flex flex-row">
                                    <el-avatar style="width: 32px; height: 32px;" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                                </div>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item v-for="item in dropItems" v-bind:key="item.index" :command="item.command">{{ item.value }}</el-dropdown-item>
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
        return {
            notify: {
                value: 129,
                max: 99
            },
            message: {
                value: 111,
                max: 99
            }
        }
    },
    props: {
        logo: {
            type: String,
            value: ''
        },
        dropItems: {
            type: Array,
            value: []
        }
    },
    methods: {
        handleCommand (command) {
            console.log(command)
            this.$emit(command)
        }
    }
}
</script>
<style lang="scss" scoped>
    .__header-section {
        width: 100%;
        height: 60px;
        background-color: #24292e;
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