<template>
    <nav class="__nav margin-bottom">
        <div :class="head || '__head-display'">
            <div class="__menu-heading __flex flex-row align-center">
                <el-image
                    class="__avatar"
                    style="width: 32px; height: 32px"
                    :src="src"
                    fit="fill">
                </el-image>
                <div class="__1h-condensed">
                    <div class="text-overflow __text-truncate text-mid text-bold text-black">{{ name }}</div>
                    <div class="__under-text text-df text-light">个人设置</div>
                </div>
            </div>
        </div>
        <a 
            class="text-mid text-blue __menu-item __menu-item-selected"
            v-for="item in tabs"
            :key="item.index"
            @click="handleClick(item)"
            :aria-selected="item.selected"
        >{{ item.value }}</a>
    </nav>
</template>
<script>
export default {
    name: 'MyNav',
    data() {
        return {
        }
    },
    props: {
        src: {
            type: String,
            value: 'https://avatars2.githubusercontent.com/u/34998646?s=60&v=4'
        },
        name: {
            type: String,
            value: '小饼干'
        },
        tabs: {
            type: Array,
            value: []
        },
        head: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        handleClick(item) {
            this.$emit('navClick', item)
        }
    }
}
</script>
<style lang="scss" scoped>
    .__head-display {
        display: none;
    }
    .__nav {
        max-width: 400px;
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

    .__menu-item {
        cursor: pointer;
        position: relative;
        display: block;
        padding: 8px 10px;
        border-bottom: 1px solid #e1e4e8;
    }
    .__menu-item[aria-selected=true] {
        cursor: default;
        background-color: cyan;
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
</style>