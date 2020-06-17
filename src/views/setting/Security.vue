<template>
    <div class="__security-box">
        <div class="__sub-head">
            <h2 class="__sub-heading">修改密码</h2>
        </div>
        <el-row>
            <el-col :span="16">
                <p class="__note text-black margin-bottom">
                    <i class="el-icon-info"></i>
                    请谨慎保管自己的密码，修改的新密码尽量别与原密码太相似，如果您在后面的时间忘记了密码，可以通过<span class="text-blue">忘记密码</span>进行找回密码，也可以向公司账号管理员申请修改密码；
                </p>
                <el-form ref="pwd" :model="board" :rules="rules">
                    <dl class="__form-group">
                        <dt>
                            <label for="oldPwd" class="text-bold">老密码</label>
                        </dt>
                        <dd class="margin-top-min">
                            <el-form-item prop="oldPwd">
                                <el-input v-model="board.oldPwd" placeholder="请输入原密码" maxlength="20"></el-input>
                            </el-form-item>
                        </dd>
                    </dl>
                    <dl class="__form-group">
                        <dt>
                            <label for="checkOldPwd" class="text-bold">老密码</label>
                        </dt>
                        <dd class="margin-top-min">
                            <el-form-item prop="checkOldPwd">
                                <el-input v-model="board.checkOldPwd" placeholder="请再次输入原密码" maxlength="20"></el-input>
                            </el-form-item>
                        </dd>
                    </dl>
                    <dl class="__form-group">
                        <dt>
                            <label for="newPwd" class="text-bold">老密码</label>
                        </dt>
                        <dd class="margin-top-min">
                            <el-form-item prop="newPwd">
                                <el-input v-model="board.newPwd" placeholder="请输入新密码" maxlength="20"></el-input>
                            </el-form-item>
                        </dd>
                    </dl>
                    <el-button type="primary" :loading="loading" @click="submit('pwd')">修改</el-button>
                    <el-button @click="reset('pwd')">重置</el-button>
                </el-form>
            </el-col>
        </el-row>
        <div class="__sub-head margin-top-max">
            <h2 class="__sub-heading">认证</h2>
        </div>
        <div class="__auth-box">
            <span>
                <i :class="false ? 'el-icon-success' : 'el-icon-warning'" class="text-blue"></i>
                认证手机：{{ phone }}
            </span>
            <div>
                <el-button size="small" :type="phonePass ? 'primary' : 'warning'">认证手机</el-button>
                <el-button size="small" type="primary">更换手机</el-button>
            </div>
        </div>
        <p class="__note text-black margin-top margin-bottom">
            <i class="el-icon-info"></i>
            手机号码不仅可以让同事更好的联系您，还可以用于找回密码的方式，如果您<span class="text-blue">手机号码已经停用</span>，可以向公司账号管理员申请修改手机；更换
            手机号码会向您的手机发送验证码，请妥善保管验证码，防止别他人窃取；
        </p>
        <div class="__auth-box margin-top">
            <span>
                <i :class="true ? 'el-icon-success' : 'el-icon-warning'" class="text-blue"></i>
                认证邮箱：{{ email }}
            </span>
            <div>
                <el-button size="small" :type="phonePass ? 'primary' : 'warning'">认证邮箱</el-button>
                <el-button size="small" type="primary">更换邮箱</el-button>
            </div>
        </div>
        <p class="__note text-black margin-top margin-bottom">
            <i class="el-icon-info"></i>
            邮箱可以让同事向您发送文档等小型文件，还可以用于找回密码的方式，如果您<span class="text-blue">邮箱已经停用</span>，请及时更换，避免出现文件漏查。
        </p>
    </div>
</template>
<script>
export default {
    name: 'Security',
    data () {
        return {
            board: {
                oldPwd: '',
                checkOldPwd: '',
                newPwd: ''
            },
            phone: '17790271060',
            email: 'xiaojiju0811@163.com',
            phonePass: false,
            rules: {
                oldPwd: [
                    { required: true, message: '请输入旧密码', trigger: 'blur' }
                ],
                checkOldPwd: [
                    { required: true, message: '请再次输入旧密码', trigger: 'blur' }
                ],
                newPwd: [
                    { required: true, message: '请输入新密码', trigger: 'blur' }
                ]
            },
            loading: false
        }
    },
    methods: {
        submit(name) {
            console.log(name)
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$notify({
                        title: '成功',
                        message: '修改成功',
                        type: 'success'
                    });
                } else {
                    this.$notify({
                        title: '警告',
                        message: '修改失败',
                        type: 'warning'
                    });
                    return false;
                }
            });
        },
        reset(name) {
            this.$refs[name].resetFields()
        }
    }
}
</script>
<style lang="scss" scoped>
    @import './setting-common.scss';
    .__auth-box {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>