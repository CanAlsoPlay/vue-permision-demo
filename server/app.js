const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const koajwt = require('koa-jwt')
const index = require('./routes/index')

// error handler
onerror(app)
app.use(cors({
  origin: function (ctx) {
    return 'http://localhost:8080'
  }
}))
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))
// 错误处理
app.use((ctx, next) => {
  return next().catch((err) => {
    if (err.status == 401){
        ctx.status = 401
        ctx.body = 'Protected resource, use Authorization header to get access\n';
    } else {
        throw err
    }
  })
})
// 通过 koa-jwt 中间件来进行验证
app.use(koajwt({
  secret: 'login_token'
}).unless({ // unless 可以指定哪些 URL不需要进行 token 验证
  path: [/\/login/]
}))
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
