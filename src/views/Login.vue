<template>
    <div class="flex justify-center align-center opacity-black __bg-danger">
        <div class="__lang">
            <el-switch
            v-model="lang"
            active-text="中文"
            inactive-text="English"
            active-color="#13ce66"
            inactive-color="#ff4949"
            >
            </el-switch>
        </div>
        <div class="form-wrapper">
            <el-row class="__row">
                <el-col :span="16" class="__row flex flex-row justify-center align-center __disabled">
                    <div class="text-wrapper">
                        <div class="__padding flex flex-column justify-start align-start">
                            <h1 class="font-title text-white margin-bottom">{{ $t('locale.common.topicTitle') }}</h1>
                            <p class="text-max text-weight-mid">{{ $t('locale.common.topicContent') }}</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8" class="__row flex flex-row justify-center align-center __center">
                    <router-view />
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data () {
        return {
            lang: true
        }
    },
    methods: {
        
    },
    watch: {
        lang (change) {
            this.$i18n.locale = change ? 'zh' : 'en'
        }
    }
}
</script>
<style lang="scss" scoped>
    .__lang {
        position: absolute;
        top: 30px;
        right: 30px;
    }
    .__bg-danger {
        position: relative;
        width: 100%;
        height: 100vh;
        background: url(https://github.githubassets.com/images/modules/site/heroes/simple-codelines.svg),#2b3137;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .form-wrapper {
        max-width: 1200px;
        min-height: 600px;
        color: hsla(0,0%,100%,.6);
        font-weight: 500;
        .__row {
            height: 100%;
            min-height: 600px;
        }
    }
    @media (max-width: 768px) {
        .__disabled {
            display: none;
        }
        .__center {
            width: 100%;
        }
    }
    .text-wrapper {
        width: 100%;
        height: 100%;
        .__padding {
            padding: 0 100px 0 100px;
            .font-title {
                font-size: 48px;
                @media (max-width: 768px) {
                    font-size: 64px !important;
                }
            }
        }
    }
</style>