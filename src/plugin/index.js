/**
 * 当含有列出的权限集合时渲染；
 */
export const hasPermissions = {
    install: (Vue) => {
        Vue.directive('hasPermissions', {
            bind:(el, binding, vnode) => {
                const permissions = vnode.context.$store.state.permissions
                let value = binding.value
                if (!Array.isArray(value)) {
                    throw new Error(`the value should be an Array binding directive hasPermissions,not a ${ typeof value }`)
                }
                let flag = true
                for (const v of value) {
                    if (!permissions.includes(v)) {
                        flag = false
                    }
                }
                if (!flag) {
                    if (!el.parentNode) {
                        el.style.display = 'none'
                    } else {
                        el.parentNode.removeChild(el)
                    }
                }
            }
        })
    }
}
/**
 * 当不含列出的权限时渲染
 */
export const hasNoPermissions = {
    install: (Vue) => {
        Vue.directive('hasNoPermissions', {
            bind: (el, binding, vnode) => {
                const permissions = vnode.context.$store.state.permissions
                let value = binding.value
                if (!Array.isArray(value)) {
                    throw new Error(`the value should be an Array binding directive hasNoPermissions,not a ${ typeof value }`)
                }
                let flag = true
                for (const v of value) {
                    if (permissions.includes(v)) {
                        flag = false
                    }
                }
                if (!flag) {
                    if (!el.parentNode) {
                        el.style.display = 'none'
                    } else {
                        el.parentNode.removeChild(el)
                    }
                }
            }
        })
    }
}
/**
 * 当有列出的权限中任意一项时渲染
 */
export const hasAnyPermissions = {
    install: (Vue) => {
        Vue.directive('hasAnyPermissions', {
            bind: (el, binding, vnode) => {
                const permissions = vnode.context.$store.state.permissions
                let value = binding.value
                if (!Array.isArray(value)) {
                    throw new Error(`the value should be an Array binding directive hasAnyPermissions,not a ${ typeof value }`)
                }
                let flag = false
                for (const v of value) {
                    if (permissions.includes(v)) {
                        flag = true
                    }
                }
                if (!flag) {
                    if (!el.parentNode) {
                        el.style.display = 'none'
                    } else {
                        el.parentNode.removeChild(el)
                    }
                }
            }
        })
    }
}
/**
 * 当包含列出的角色时渲染
 */
export const hasRoles = {
    install: (Vue) => {
        Vue.directive('hasRoles', {
            bind: (el, binding, vnode) => {
                const roles = vnode.context.$store.state.roles
                let value = binding.value
                if (!Array.isArray(value)) {
                    throw new Error(`the value should be an Array binding directive hasRoles,not a ${ typeof value }`)
                }
                let flag = true
                for (const r of roles) {
                    if (!roles.includes(r)) {
                        flag = false
                    }
                }
                if (!flag) {
                    if (!el.parentNode) {
                        el.style.display = 'none'
                    } else {
                        el.parentNode.removeChild(el)
                    }
                }
            }
        })
    }
}
/**
 * 当不包含列出的角色时渲染
 */
export const hasNoRoles = {
    install: (Vue) => {
        Vue.directive('hasNoRoles', {
            bind: (el, binding, vnode) => {
                const roles = vnode.context.$store.state.roles
                let value = binding.value
                if (!Array.isArray(value)) {
                    throw new Error(`the value should be an Array binding directive hasNoRoles,not a ${ typeof value }`)
                }
                let flag = true
                for (const r of roles) {
                    if (roles.includes(r)) {
                        flag = false
                    }
                }
                if (!flag) {
                    if (!el.parentNode) {
                        el.style.display = 'none'
                    } else {
                        el.parentNode.removeChild(el)
                    }
                }
            }
        })
    }
}
/**
 * 当包含任意一项角色时渲染
 */
export const hasAnyRoles = {
    install: (Vue) => {
        Vue.directive('hasAnyRoles', {
            bind: (el, binding, vnode) => {
                const roles = vnode.context.$store.state.roles
                let value = binding.value
                if (!Array.isArray(value)) {
                    throw new Error(`the value should be an Array binding directive hasAnyRoles,not a ${ typeof value }`)
                }
                let flag = false
                for (const r of roles) {
                    if (roles.includes(r)) {
                        flag = true
                    }
                }
                if (!flag) {
                    if (!el.parentNode) {
                        el.style.display = 'none'
                    } else {
                        el.parentNode.removeChild(el)
                    }
                }
            }
        })
    }
}