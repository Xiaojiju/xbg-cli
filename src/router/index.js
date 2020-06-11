import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/Index';
import Login from '../views/Login';
import storage from '../utils/storage';
import cacheTypes from '../common/constants';
import LoginForm from '../components/form/LoginForm';
import Reset from '../components/form/Reset';
import ResetPwd from '../components/form/ResetPwd';
import Apply from '../components/form/Apply';

Vue.use(Router);

const routerView = [
    {
        path: '/index',
        name: 'index',
        component: Index
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

const whitePath = ['/account/login', '/account/reset', '/account/reset-pwd', '/account/apply'];

let asynRouters = {}

/**
 * 检查本地是否需要登录
 */
router.beforeEach((to, from, next) => {
    const token = storage.get(cacheTypes.AUTH_TOKEN);
    if (!token) {
        if (whitePath.indexOf(to.path) !== -1) {
            next();
        } else {
            next('/account/login');
        }
    }
    const dyncRouters = storage.get(cacheTypes.DYNC_ROUTERS);
    if (!asynRouters) {
        if (!dyncRouters) {
            console.log('路由不存在')
        } else {
            asynRouters = dyncRouters;
            next();
        }
    } else {
        next();
    }
})

export default router;