import types from './mutation-type';
const actions = {
    updateCliName({commit}, payload) {
        commit([types.SET_CLI_NAME], payload);
    },
    updatePermissions({commit}, payload) {
        commit([types.SET_PERMISSIONS], payload);
    },
    updateRoles({commit}, payload) {
        commit([types.SET_ROLES], payload);
    },
    updatePlayer({commit}, payload) {
        commit([types.SET_PLAYER], payload);
    },
    updateToken({commit}, payload) {
        commit([types.SET_TOKEN], payload);
    }
}

export default actions;