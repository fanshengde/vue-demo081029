import Vue from 'vue'
import Router from 'vue-router'

// const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
// 代表那些不需要动态判断权限的路由，如登录页、404、等通用页面。
export const constantRouterMap = [
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/login',
  //   name: 'login',
  //   hidden: true
  // },
  {
    path: '',
    component: Layout,
    redirect: '/dashboard/dashboard'
  },
  { path: '/login', component: () => import('@/views/login'), name: '登录ITSM', hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },

  // 报表
  {
    path: '/dashboard',
    component: Layout,
    meta: { title: 'dashboard', icon: 'dashboard' },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/dashboard'),
        meta: { title: 'dashboard', icon: 'dashboard' }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
// 代表那些需求动态判断权限并通过 addRouters 动态添加的页面。
export const asyncRouterMap = [
  // 系统管理
  {
    path: '/sysManagement',
    component: Layout,
    redirect: '/',
    name: 'sysManagement',
    alwaysShow: true,
    meta: {
      title: 'sysManagement',
      icon: 'lock'
    },
    children: [
      {
        path: 'sysUser',
        component: () => import('./../views/sysManagement/sysUser'),
        name: 'sysUser',
        meta: {
          title: 'sysUser'
        }
      },
      {
        path: 'sysRole',
        component: () => import('./../views/sysManagement/sysRole'),
        name: 'sysRole',
        meta: {
          title: 'sysRole'
        }
      },
      {
        path: 'sysPermission',
        component: () => import('./../views/sysManagement/sysPermission'),
        name: 'sysPermission',
        meta: {
          title: 'sysPermission'
        }
      },
      {
        path: 'sysDept',
        component: () => import('./../views/sysManagement/sysDept'),
        name: 'sysDept',
        meta: {
          title: 'sysDept'
        }
      }
    ]
  },
  // 权限测试页
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: 'permission',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [{
      path: 'page',
      component: () => import('./../views/permission/page'),
      name: 'pagePermission',
      meta: {
        title: 'pagePermission',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }, {
      path: 'directive',
      component: () => import('./../views/permission/directive'),
      name: 'directivePermission',
      meta: {
        title: 'directivePermission'
        // if do not set roles, means: this page does not require permission
      }
    }]
  },
  // 表格
  {
    path: '/table',
    component: Layout,
    redirect: '/table/complex-table',
    name: 'table',
    alwaysShow: true,
    meta: {
      title: 'Table',
      icon: 'table',
      roles: ['admin', 'editor'],
      permission: ['admin']
    },
    children: [
      {
        path: 'complex-table',
        name: 'complex-table',
        component: () => import('./../views/table/complex-table'),
        meta: {
          title: 'complexTable',
          roles: ['admin', 'editor']
        }
      },
      {
        path: 'TreeTable',
        name: 'TreeTable',
        component: () => import('./../views/table/tree-table/index'),
        meta: {
          title: 'treeTable',
          roles: ['admin']
        }
      }
    ]
  },
  // 表单
  {
    path: '/form',
    component: Layout,
    redirect: '/table/BaseForm',
    name: 'form',
    meta: {
      title: 'form',
      icon: 'form'
    },
    children: [
      {
        path: 'BaseForm',
        name: 'BaseForm',
        component: () => import('@/views/form/BaseForm'),
        meta: {
          title: 'BaseForm',
          roles: ['admin', 'editor']
        }
      },
      {
        path: 'VueEditor',
        name: 'VueEditor',
        component: () => import('@/views/form/VueEditor'),
        meta: {
          title: 'VueEditor',
          roles: ['admin']
        }
      },
      {
        path: 'Upload',
        name: 'Upload',
        component: () => import('@/views/form/Upload'),
        meta: { title: 'Upload' }
      }
    ]
  },
  // 实战
  {
    path: '/vueActual',
    component: Layout,
    redirect: '/vueActual/Pos',
    name: 'vueActual',
    meta: {
      title: 'vueActual',
      icon: 'shizhan'
    },
    children: [
      {
        path: 'Pos',
        name: 'Pos',
        component: () => import('@/views/vueActual/Pos'),
        meta: { title: 'vueActual', icon: 'shizhan' }
      }
    ]
  },
  //  如果这里有一个需要非常注意的地方就是 404 页面一定要最后加载，如果放在 constantRouterMap 一同声明了 404 ，后面的所以页面都会被拦截到404
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'errorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      { path: '401', component: () => import('@/views/errorPage/401'), name: 'page401', meta: { title: 'page401', noCache: true }},
      { path: '404', component: () => import('@/views/errorPage/404'), name: 'page404', meta: { title: 'page404', noCache: true }}
    ]
  },
  { path: '*', redirect: '/404', hidden: true }]
