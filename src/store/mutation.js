import types from './mutation-type';
import storage from '../utils/storage';
import cacheTypes from '../common/constants';

const mutations = {
    [types.SET_CLI_NAME] (state, payload) {
        state.cliName = payload.cliName;
    },
    [types.SET_PLAYER] (state, payload) {
        state.player = payload.player;
        storage.set(cacheTypes.PLAYER_CACHE, payload.player);
    },
    [types.SET_ROLES] (state, payload) {
        state.roles = payload.roles;
        storage.set(cacheTypes.ROLES, payload.roles);
    },
    [types.SET_PERMISSIONS] (state, payload) {
        state.permisssions = payload.permissions;
        storage.set(cacheTypes.PPERMISSIONS, payload.permissions);
    },
    [types.SET_TOKEN] (state, payload) {
        state.token = payload.token;
        storage.set(cacheTypes.AUTH_TOKEN, payload.token);
    }
}

export default mutations;