<template>
    <div class="__form-box padding-horizontal-max">
        <div class="flex flex-column justify-start align-start padding bg-white round-mid">
            <div class="flex justify-center align-center text-black text-lg text-bold __box-title">
                {{ $t('locale.form.resetPassword') }}
            </div>
            <div class="flex justify-center align-center text-black text-df text-bold __box-title">
                {{ $t('locale.form.resetContent') }}
            </div>
            <el-form class="text-black text-bold text-mid __form padding-vertical" :model="models" :rules="rules" ref="ruleForm">
                <el-form-item prop="phoneNumber">
                    <el-input type="text" maxlength="25" minlength="8" v-model="models.phoneNumber" :placeholder="$t('locale.form.phone')">
                        <el-button style="min-width: 80px;" :disabled="disabled" slot="append" :icon="icon" @click="sendMessage"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="verify" class="margin-top-max">
                    <el-input type="text" maxlength="25" minlength="8" v-model="models.phoneNumber" :placeholder="$t('locale.form.verify')"></el-input>
                </el-form-item>
                <el-form-item class="margin-top-max">
                    <el-button :loading="loading" type="primary" @click="submit('ruleForm')">{{ $t('locale.form.resetButton') }}</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="margin-top text-left bg-white text-black text-df round-mid padding">
            <span>{{ $t('locale.form.doNotReset') }},</span>
            <span class="__under-click text-blue" @click="login">{{ $t('locale.form.doNotResetClick') }}!</span>
            <span>{{ $t('locale.form.doNotAccount') }},</span>
            <span class="__under-click text-blue" @click="apply">{{ $t('locale.form.doNotAccountClick') }}!</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Reset',
    data() {
        return {
            models: {
                phoneNumber: '',
                verify: ''
            },
            icon: 'el-icon-s-promotion',
            btnType: 'primary',
            disabled: false,
            loading: false,
            rules: {}
        }
    },
    methods: {
        login () {
            this.$router.push('/account/login');
        },
        submit(formName) {
            console.log(formName);
        },
        sendMessage() {

        },
        apply() {
            this.$router.push('/account/apply');
        }
    }
}
</script>
<style lang="scss" scoped>
</style>