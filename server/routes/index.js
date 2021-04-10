const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const users = require('../data/user')
const userlogin = require('../data/user_login')
const routers = require('../data/router')
router.post('/login', (ctx, next) => {
  const data = ctx.request.body
  if (!data.account || !data.password) {
    return ctx.body = {
      code: '400',
      data: null,
      msg: '参数不合法'
    }
  }
  const result = userlogin.filter(user => {
    return ((user.account == data.account) && (user.password == data.password))
  })
  // 返回数组不为空
  if (result.length != 0) {
    const token = jwt.sign({
      account: result[0].account
    }, 'login_token', {
      expiresIn: '1h'
    })
    return ctx.body = {
      code: '200',
      token: token,
      msg: '登录成功'
    }
  } else {
    return ctx.body = {
      code: '400',
      data: null,
      msg: '用户名或密码错误'
    }
  }
})
router.post('/user_router_auth', async (ctx, next) => {
  const { uid } = ctx.request.body
  if (uid) {
    const authRouterInfo = []
    const userInfo = users.filter(user => user.id == uid)[0]
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
