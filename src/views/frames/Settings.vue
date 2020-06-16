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
                    <div class="__sub-head">
                        <h2 class="__sub-heading">基本信息</h2>
                    </div>
                    <el-row>
                        <el-col :span="16">
                            <el-form label-position="top" label-width="80px" :model="formMsg" :rules="rules" ref="ruleForm">
                                <dl class="__form-group">
                                    <dt>
                                        <label for="username">用户名</label>
                                    </dt>
                                    <dd class="margin-top-min">
                                        <!-- <input class="__form-control __form-select" type="text" :model="formMsg.username"/> -->
                                        <el-input v-model="formMsg.username" placeholder="请输入内容" maxlength="12" show-word-limit></el-input>
                                        <div class="__note">这个用户名可以用来登录，也可以被其他同事搜索。</div>
                                    </dd>
                                </dl>
                                <dl class="__form-group">
                                    <dt>
                                        <label for="username">生日</label>
                                    </dt>
                                    <dd class="margin-top-min">
                                        <!-- <input class="__form-control __form-select" type="text" :model="formMsg.birthday"/> -->
                                        <el-date-picker
                                            v-model="formMsg.birthday"
                                            type="date"
                                            placeholder="选择日期">
                                        </el-date-picker>
                                        <div class="__note">在生日当天，全部同事都会收到推送，准备收礼物吧！另外，小饼干也会发送贺卡和动画，生日当天界面会自动为生日主题。</div>
                                    </dd>
                                </dl>
                                <dl class="__form-group">
                                    <dt>
                                        <label for="username">性别</label>
                                    </dt>
                                    <dd class="margin-top-min">
                                        <div class="padding-vertical">
                                            <el-radio v-model="formMsg.sex" label="0">帅哥</el-radio>
                                            <el-radio v-model="formMsg.sex" label="1">美女</el-radio>
                                        </div>
                                        <div class="__note">只有两种选项，没有第三种。</div>
                                    </dd>
                                </dl>
                                <dl class="__form-group">
                                    <dt>
                                        <label for="username">个人简介</label>
                                    </dt>
                                    <dd class="margin-top-min">
                                        <el-input
                                            type="textarea"
                                            :rows="2"
                                            placeholder="请输入内容"
                                            maxlength="150"
                                            show-word-limit
                                            v-model="formMsg.description">
                                        </el-input>
                                        <div class="__note">“★☆伱吥紾惜莪菂AI，请滚诎涐菂丗堺◇◆。oK？∝╬══” 来自一个杀马特贵族。</div>
                                    </dd>
                                </dl>
                                <el-button type="primary" :loading="loading" @click="submit('ruleForm')">主要按钮</el-button>
                            </el-form>
                        </el-col>
                        <el-col :span="8" class="__gutter __box-inline">
                            <dl>
                                <dt>
                                    <label class="margin-bottom-min text-mid text-black">个人头像</label>
                                </dt>
                                <dd>
                                    <div class="margin-top-min position-relative">
                                        <img class="__edit-img" width="200" height="200" src="https://avatars3.githubusercontent.com/u/34998646?s=400&u=dc87fc4954c4e546513c9ed194ca3c93fdc24607&v=4"/>
                                        <div class="padding-left-min padding-right-min __padding-d-m round-df text-white text-df position-absolute">
                                            <el-dropdown :hide-on-click="false">
                                                <span class="el-dropdown-link" style="color: white !important;">
                                                    <i class="el-icon-edit"></i>编辑
                                                </span>
                                                <el-dropdown-menu slot="dropdown">
                                                    <el-dropdown-item>上传照片</el-dropdown-item>
                                                    <el-dropdown-item>移除照片</el-dropdown-item>
                                                </el-dropdown-menu>
                                            </el-dropdown>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </el-col>
                    </el-row>
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
            formMsg: {
                username: '',
                birthday: '',
                sex: 0,
                description:''
            },
            rules: {
                username: {},
                birthday: {},
                sex: {},
                description: {}
            },
            loading: false
        }
    },
    methods: {
        submit (form) {
            console.log(form)
            const vm = this
            vm.$refs[form].validate((valid) => {
                if (valid) {
                    console.log(vm.formMsg)
                } else {
                    return false
                }
            })
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
    .__sub-head {
        display: flex;
        padding-bottom: 8px;
        margin-bottom: 16px;
        border-bottom: 1px solid #e1e4e8;
        flex-flow: row wrap;
        .__sub-heading {
            font-size: 24px;
            font-weight: 400;
            flex: 1 1 auto;
            margin-top: 0;
            margin-bottom: 0;
        }
    }
    .__gutter {
        padding-left: 16px;
        padding-right: 16px;
    }
    .__box-inline {
        display: inline-block;
    }
    .__edit-img {
        display: inline-block;
        overflow: hidden;
        line-height: 1;
        vertical-align: middle;
        border-radius: 6px;
    }
    .__padding-d-m {
        cursor: pointer;
        padding-bottom: 4px;
        padding-top: 4px;
        bottom: 10px;
        left: 10px;
        background-color: #24292e;
    }
    .__form-group {
        margin-bottom: 15px !important;
        font-size: 14px;
    }
    .__form-control {
            width: 440px;
            max-width: 100%;
            margin-right: 5px;
            background-color: #fafbfc;
        }
        .__form-select {
                min-height: 34px;
                padding: 6px 8px;
                font-size: 14px;
                line-height: 20px;
                color: #24292e;
                vertical-align: middle;
                background-color: #fff;
                background-repeat: no-repeat;
                background-position: right 8px center;
                border: 1px solid #d1d5da;
                border-radius: 3px;
                outline: none;
                box-shadow: inset 0 1px 2px rgba(27,31,35,.075);
            }
        .__note {
            min-height: 17px;
            margin: 4px 0 2px;
            font-size: 12px;
            color: #586069;
        }
</style>