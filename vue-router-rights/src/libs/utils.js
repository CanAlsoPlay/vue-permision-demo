function formateRouterTree (data) {
  const parents = data.filter(p => p.pid === 0)
  const children = data.filter(c => c.pid !== 0)
  dataToTree(parents, children)
  function dataToTree (parents, children) {
    parents.map(p => {
      children.map((c, index) => {
        if (p.id === c.pid) {
          const _c = JSON.parse(JSON.stringify(children))
          _c.splice(index, 1)
          // 以当前c为parent，对其他children进行转换
          dataToTree([c], _c)
          if (p.children) {
            p.children.push(c)
          } else {
            p.children = [c]
          }
        }
      })
    })
  }
  return parents
}
function genetateRouter (userRouters) {
  const newRouters = userRouters.map(r => {
    const routes = {
      path: r.path,
      name: r.name,
      // component: () => import(`@/views/${r.name}`)
      component: resolve => require([`@/views/${r.name}`], resolve)
    }
    if (r.children) {
      routes.children = genetateRouter(r.children)
    }
    return routes
  })
  return newRouters
}
export {
  formateRouterTree,
  genetateRouter
}
