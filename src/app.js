import Koa from 'koa'
import KoaBody from 'koa-body'
import serve from 'koa-static'
import KoaLogger from 'koa-logger'
import cors from 'koa-cors'
import path from 'path'
import render from 'koa-ejs'
// import cookie from 'koa-cookie'
// import session from 'koa-session'
import koa2Common from 'koa2-common'
import KoaBodyParse from 'koa-bodyparser';
import {
    SYSTEM
} from './config'
import {
    front,login
} from './routes'

const app = new Koa()
const env = process.env.NODE_ENV || 'development'

// 打印日志
app.on('error', (err, ctx) => {
    console.log(err)
});

render(app, {
    root: path.join(__dirname, 'view'),
    layout: 'template',
    viewExt: 'html',
    cache: true,
    debug: SYSTEM.DEBUG
});

app
    // .use(cookie())
    // .use(session(app))
    .use(KoaBody({
        multipart: true
        // 下边的这段代码、是一个错误的代码，把dirname写死了！！！！
        // formidable: {
        //     uploadDir: path.join(__dirname, '/upload')
        // } 
    }))
    .use(KoaBodyParse())
    .use(serve(__dirname + "/assets",{
        maxage: 365 * 24 * 60 * 60
    }))
    .use(koa2Common())
    .use(cors({
        origin: SYSTEM.ORIGIN,
        headers: 'Origin, X-Requested-With, Content-Type, Accept',
        methods: ['GET', 'PUT', 'POST'],
        credentials: true,
    }))
    .use(front.routes())
    .use(front.allowedMethods())
    .use(login.routes())
    .use(login.allowedMethods())
    .use((ctx, next) => {
        const start = new Date()
        return next().then(() => {
            const ms = new Date() - start
            console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
        })
    })

app.listen(SYSTEM.PROT);

console.log(`服务启动了：路径为：127.0.0.1:${SYSTEM.PROT}`)

export default app