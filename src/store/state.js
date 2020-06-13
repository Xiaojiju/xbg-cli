import storage from '../utils/storage'
import cacheTypes from '../common/constants'
import common from '../utils/common'

const state = {
    // 客户端名字
    cliName: '小饼干的平底锅',
    // 版权
    copyright: `${ new Date().getFullYear() } power by xiaojiju`,
    // 邮箱
    email: 'xiaojiju0811@163.com',
    // 令牌
    token: storage.get(cacheTypes.AUTH_TOKEN) || null,
    // 用户信息
    player: storage.get(cacheTypes.PLAYER_CACHE) || {},
    // 权限
    permissions: storage.get(cacheTypes.PPERMISSIONS) || [1],
    // 动态路由
    dyncRouter: storage.get(cacheTypes.DYNC_ROUTERS) || {},
    // 过期时间
    expiredTime: storage.get(cacheTypes.EXPIRED_TIME) || '',
    // 角色
    roles: storage.get(cacheTypes.ROLES) || [],
    // 语言
    locale: common.defaultLocale() || 'zh'
}

export default state