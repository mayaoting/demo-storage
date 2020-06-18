ROUTER_PATH = [
  {
    // 宝尊微智系统：
    path: '/',
    alias: '/index',
    file: 'index/layout',
    children: [
      {
        path: '', // 首页
        file: 'index/index'
      },
      {
        path: '/log', // 系统日志页
        file: 'log'
      },
      {
        path: '/test',
        file: 'test'
      },
      {
        path: '/authorityManage', // 权限管理-配置
        file: 'authorityManage'
      },
      {
        path: '/roleManage', // 角色管理
        file: 'roleManage'
      },
    ]
  },

  {
    file: 'overview/Overview',
    path: '/overview'
  },
  {
    file: 'manageNums/ManageNums',
    path: '/manageNums'
  },
]
let routerArr = (function routerMap (data) {
  let routerArr = []
  data.forEach((item) => {
    let router = {
      path: item.path,
      component: (resolve) => {
        import(`pages/${item.file}`).then((module) => {
          resolve(module)
        })
      },
      name: item.name,
      alias: item.alias
    }
    if (item.children && item.children.length > 0) {
      Object.assign(router, { children: routerMap(item.children) })
    }
    routerArr.push(router)
  })
  return routerArr
})(ROUTER_PATH)

console.log(routerArr);