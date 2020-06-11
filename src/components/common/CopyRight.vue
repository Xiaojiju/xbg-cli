<template>
    <div class="text-center __footer-wrapper margin-bottom">
        <span class="text-white text-lg">{{ content }}</span>
    </div>
</template>
<script>
export default {
    name: 'CopyRight',
    data () {
        return {
            content: '2019-2020 copyright@ 小饼干'
        }
    }
}
</script>
<style lang="scss" scoped>
    .__footer-wrapper {
        z-index: 99;
        width: 100%;
        position: absolute;
        bottom: 0;
    }
</style>