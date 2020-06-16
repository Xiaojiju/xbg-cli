<template>
    <div class="__account-box">
        <div class="__sub-head">
            <h2 class="__sub-heading">修改用户名</h2>
        </div>
        <p class="text-mid text-black">如果您当前的用户名不方便您的记忆，可以进行修改</p>
        <el-form ref="form" :rules="rules" :model="user">
            <el-form-item prop="username" class="margin-top">
                <el-input style="width: 400px;" v-model="user.username" placeholder="请输入用户名" maxlength="12" show-word-limit></el-input>
            </el-form-item>
            <div class="padding-bottom-mid">
                <el-button>修改</el-button>
            </div>
        </el-form>
        <p class="text-mid text-black">
            <i class="el-icon-info"></i>注意，每个月只能修改一次，切勿频繁操作。
        </p>
        <div class="__sub-head margin-top">
            <h2 class="__sub-heading">注销账号</h2>
        </div>
        <p class="text-mid text-black">如果您现在已经离职，或者不想让自己的信息继续留在这里，可以直接注销该账号。</p>
        <div class="padding-vertical">
            <el-button>注销</el-button>
        </div>
        <p class="text-mid text-black">
            <i class="el-icon-info"></i>如果您错误的操作导致账号被注销，请联系您的上级，进行恢复；
        </p>
    </div>
</template>
<script>
export default {
    name: 'Account',
    data() {
        return {
            user: {
                username: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur'},
                    { min: 4, max: 12, message: '请至少4位', trigger: 'blur' }
                ]
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    @import './setting-common.scss';
</style>