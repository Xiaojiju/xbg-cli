import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Login from '../views/Login'
import storage from '../utils/storage'
import cacheTypes from '../common/constants'
import LoginForm from '../components/form/LoginForm'
import Reset from '../components/form/Reset'
import ResetPwd from '../components/form/ResetPwd'
import Apply from '../components/form/Apply'
import Admin from '../views/monitor/Index'
import Settings from '../views/setting/Index'
import Profile from '../views/setting/Profile'
import Account from '../views/setting/Account'
import Security from '../views/setting/Security'
import Notify from '../views/setting/Notify'
import Message from '../views/setting/Message'
import Record from '../views/monitor/Record'

Vue.use(Router)

const routerView = [
    {
        path: '/index',
        name: 'index',
        component: Index,
        children: [
            {
                path: 'admin',
                component: Admin,
                children: [
                    {
                        path: 'record',
                        component: Record,
                        name: 'record'
                    }
                ]
            },
            {
                path: 'settings',
                component: Settings,
                children: [
                    {
                        path: 'profile',
                        name: 'profile',
                        component: Profile
                    },
                    {
                        path: 'account',
                        name: 'account',
                        component: Account
                    },
                    {
                        path: 'security',
                        name: 'security',
                        component: Security
                    },
                    {
                        path: 'notify',
                        name: 'notify',
                        component: Notify
                    },
                    {
                        path: 'message',
                        name: 'message',
                        component: Message
                    }
                ]
            }
        ]
    },
    {
        path: '/account',
        name: 'Login',
        component: Login,
        children: [
            {
                path: 'login',
                component: LoginForm
            },
            {
                path: 'reset',
                component: Reset
            },
            {
                path: 'reset-pwd',
                component: ResetPwd
            },
            {
                path: 'apply',
                component: Apply
            }
        ]
    }
]

let router = new Router({
    routes: routerView
})
// '/account/login', '/account/reset', '/account/reset-pwd', '/account/apply'
const whitePath = []

let asynRouters = {}

/**
 * 检查本地是否需要登录
 */
router.beforeEach((to, from, next) => {
    const token = storage.get(cacheTypes.AUTH_TOKEN)
    if (!token) {
        if (whitePath.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/account/login')
        }
    }
    const dyncRouters = storage.get(cacheTypes.DYNC_ROUTERS)
    if (!asynRouters) {
        if (!dyncRouters) {
            console.log('路由不存在')
        } else {
            asynRouters = dyncRouters
            next()
        }
    } else {
        next()
    }
})

export default router