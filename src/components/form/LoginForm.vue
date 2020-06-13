<template>
    <div class="__form-box padding-horizontal-max">
        <div class="flex flex-column justify-start align-start padding bg-white round-mid">
            <div class="flex justify-center align-center text-black text-lg text-bold __box-title">
                {{ $t('locale.form.login') }}
            </div>
            <el-form class="text-black text-bold text-mid __form padding-vertical" :model="models" :rules="rules" ref="ruleForm">
                <dl>
                    <dt>{{ $t('locale.form.username') }}</dt>
                    <dd>
                        <el-form-item prop="username">
                            <el-input type="text" maxlength="25" minlength="8" v-model="models.username" :placeholder="$t('locale.form.placeholder')"></el-input>
                        </el-form-item>
                    </dd>
                    <dt>{{ $t('locale.form.password') }}</dt>
                    <dd>
                        <el-form-item prop="password">
                            <el-input type="password" maxlength="25" minlength="8" v-model="models.password" :placeholder="$t('locale.form.pwdInput')"></el-input>
                        </el-form-item>
                    </dd>
                </dl>
                <div class="text-right" @click="forgotPassword">
                    <span class="__under-click text-df text-blue">{{ $t('locale.form.forgetPassword') }}</span>
                </div>
                <el-form-item class="margin-top-max">
                    <el-button :loading="loading" type="primary" @click="submit('ruleForm')">{{ $t('locale.form.login') }}</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="margin-top text-center bg-white text-black text-df round-mid padding">
            <span>{{ $t('locale.common.account') }}</span>
            <span class="__under-click text-blue" @click="applyAccount">{{ $t('locale.common.apply') }}</span>
        </div>
    </div>
</template>
<script>
import { login } from '../../request/api';
import { mapMutations } from 'vuex';
import types from '../../store/mutation-type';
export default {
    name: 'LoginForm',
    data() {
        return {
            models: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    {
                        required: true, message: this.$t('locale.form.usernameMiss'), trigger: 'blur'
                    },
                    {
                        min: 4, max: 25, message: this.$t('locale.form.usernameLength'), trigger: 'blur'
                    }
                ],
                password: [
                    {
                        required: true, message: this.$t('locale.form.passwordMiss'), trigger: 'blur'
                    },
                    {
                        min: 8, max: 25, message: this.$t('locale.form.passwordLength'), trigger: 'blur'
                    }
                ]
            }
        }
    },
    props: {
        loading: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        submit (formName) {
            console.log(formName)
            const vm = this
            vm.$refs[formName].validate((valid) => {
                if (valid) {
                    vm.login(vm.models)
                } else {
                    return false
                }
            })
        },
        forgotPassword() {
            this.$router.push('/account/reset')
        },
        login(params) {
            const vm = this;
            this.loading = true;
            login(params.username, params.password).then(res => {
                if (res.body) {
                    let body =  res.body
                    console.log(body)
                    vm.putStates(body, body.permissions, body.roles)
                    vm.$router.push("/")
                } else {
                    vm.loading = false
                }
            })
        },
        ...mapMutations({
            setPlayer: types.SET_PLAYER,
            setRoles: types.SET_ROLES,
            setPermissions: types.SET_PERMISSIONS
        }),
        putStates(player, permissions, roles) {
            this.setPlayer({player: player})
            this.setRoles({roles: roles})
            this.setPermissions({permissions: permissions})
        },
        applyAccount () {
            this.$router.push('/account/apply')
        }
    }
}
</script>
<style lang="scss">
    .__box-title {
        width: 100%;
        height: 50px;
    }
    .__form-box {
        width: 100%;
        max-width: 400px;
        height: auto;
    }
    .__form {
            width: 100%;
            dt {
            margin-bottom: 8px;
            }
            dd {
                margin-bottom: 20px;
            }
            .el-form-item {
                margin-bottom: 0 !important;
            }
            .el-button {
                width: 100%;
            }
        }
    .__under-click {
        cursor: pointer;
    }
</style>