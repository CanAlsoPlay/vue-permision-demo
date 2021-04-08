const router = require('koa-router')()
const users = require('../data/user')
const routers = require('../data/router')
router.post('/user_router_auth', async (ctx, next) => {
  const { uid } = ctx.request.body
  if (uid) {
    const authRouterInfo = []
    const userInfo = users.filter(user => user.id === uid)[0]
    userInfo.auth.map(authid => {
      routers.map(router => {
        if (router.id === authid) {
          authRouterInfo.push(router)
        }
      })
    })
    ctx.body = authRouterInfo
  } else {
    next()
  }
})

module.exports = router
