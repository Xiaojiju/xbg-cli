import storage from '../utils/storage';
import cacheTypes from '../common/constants';
console.log(storage.get(cacheTypes.AUTH_TOKEN))
const state = {
    cliName: '小饼干的平底锅',
    copyright: `${ new Date().getFullYear() } power by xiaojiju`,
    email: 'xiaojiju0811@163.com',
    token: storage.get(cacheTypes.AUTH_TOKEN) || null,
    player: storage.get(cacheTypes.PLAYER_CACHE) || {},
    permissions: storage.get(cacheTypes.PPERMISSIONS) || [1],
    dyncRouter: storage.get(cacheTypes.DYNC_ROUTERS) || {},
    expiredTime: storage.get(cacheTypes.EXPIRED_TIME) || '',
    roles: storage.get(cacheTypes.ROLES) || [] 
}

export default state;