<template>
    <el-menu 
        mode="vertical" 
        :collapse="collapse"
        @open="handleOpen"
        >
        <el-submenu
            v-for="item in menus"
            :key="item.index"
            :index="item.index"
        >
            <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
            </template>
            <el-menu-item-group
                v-for="child in item.subs"
                :key="child.index"
            >
                <el-menu-item :index="child.index" @click="next(child)">{{ child.title }}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>
<script>
export default {
    name: 'MyAside',
    data () {
        return {
            
        }
    },
    props: {
        collapse: {
            type: Boolean,
            value: false
        },
        menus: {
            type: Array,
            value: []
        }
    },
    methods: {
        handleOpen(index,indexPath) {
            console.log(index, indexPath)
            this.$emit('handleOpen', {
                index: index,
                indexPath: indexPath
            })
        },
        next(item) {
            console.log(item)
            this.$emit('next', item)
        }
    }
}
</script>
<style lang="scss" scoped>
    .el-menu {
        height: 100% !important;
        font-weight: 400;
    }
</style>