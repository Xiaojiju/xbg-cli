<template>
    <div class="__security-box">
        <div class="__sub-head">
            <h2 class="__sub-heading">修改密码</h2>
        </div>
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
            rules: {
                
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    @import './setting-common.scss';
</style>