const getters = {
    getCliName: (state) => {
        return state.CliName;
    },
    getPermissions: (state) => {
        return state.permissions;
    },
    getRoles: (state) => {
        return state.roles;
    },
    getToken: (state) => {
        return state.token;
    },
    getPlayer: (state) => {
        return state.player;
    }
}

export default getters;