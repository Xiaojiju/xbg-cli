<template>
    <div class="__profile-box">
        <div class="__sub-head">
            <h2 class="__sub-heading">基本信息</h2>
        </div>
        <el-row>
            <el-col :span="16">
                <el-form label-position="top" label-width="80px" :model="formMsg" :rules="rules" ref="ruleForm">
                    <dl class="__form-group">
                        <dt>
                            <label for="nickname">昵称</label>
                        </dt>
                        <dd class="margin-top-min">
                            <el-form-item prop="nickname">
                                <el-input v-model="formMsg.nickname" placeholder="请输入用户名" maxlength="12" show-word-limit></el-input>
                            </el-form-item>
                            <div class="__note">这个用户名可以用来登录，也可以被其他同事搜索。</div>
                        </dd>
                    </dl>
                    <dl class="__form-group">
                        <dt>
                            <label for="birthday">生日</label>
                        </dt>
                        <dd class="margin-top-min">
                            <!-- <input class="__form-control __form-select" type="text" :model="formMsg.birthday"/> -->
                            <el-form-item prop="birthday">
                                <el-date-picker
                                    v-model="formMsg.birthday"
                                    type="date"
                                    placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>
                            <div class="__note">在生日当天，全部同事都会收到推送，准备收礼物吧！另外，小饼干也会发送贺卡和动画，生日当天界面会自动为生日主题。</div>
                        </dd>
                    </dl>
                    <dl class="__form-group">
                        <dt>
                            <label for="username">性别</label>
                        </dt>
                        <dd class="margin-top-min">
                            <div class="padding-vertical">
                                <el-form-item prop="sex">
                                    <el-radio v-model="formMsg.sex" label="0">帅哥</el-radio>
                                    <el-radio v-model="formMsg.sex" label="1">美女</el-radio>
                                </el-form-item>
                            </div>
                            <div class="__note">只有两种选项，没有第三种。</div>
                        </dd>
                    </dl>
                    <dl class="__form-group">
                        <dt>
                            <label for="username">个人简介</label>
                        </dt>
                        <dd class="margin-top-min">
                            <el-form-item prop="description">
                                <el-input
                                    type="textarea"
                                    :rows="2"
                                    placeholder="请输入内容"
                                    maxlength="150"
                                    show-word-limit
                                    v-model="formMsg.description">
                                </el-input>
                            </el-form-item>
                            <div class="__note">“★☆伱吥紾惜莪菂AI，请滚诎涐菂丗堺◇◆。oK？∝╬══” 来自一个杀马特贵族。</div>
                        </dd>
                    </dl>
                    <el-button type="primary" :loading="loading" @click="submit('ruleForm')" class="margin-top-max">修改</el-button>
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
    </div>
</template>
<script>
    export default {
        name: 'Profile',
        data () {
            return {
                formMsg: {
                    nickname: '',
                    birthday: '',
                    sex: 0,
                    description:''
                },
                rules: {
                    nickname: [
                        { required: true, message: '请填写用户名', trigger: 'blur'},
                        { min: 4, max: 12, message: '请至少输入4位', trigger: 'blur' }
                    ],
                    birthday: [{ required: true, message: '请选择生日', trigger: 'blur'}],
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
                        vm.$notify({
                            title: '修改成功',
                            message: '修改基本信息成功',
                            type: 'success'
                        })
                    } else {
                        return false
                    }
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import './setting-common.scss';
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
</style>