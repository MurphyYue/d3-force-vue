const Koa = require("koa");
const router = require("koa-router")();
const app = new Koa();
const datas = require("./relations")
router.get("/", async(ctx, next) => {
    ctx.response.body = `<h1>Hello,go to '/api/getRelations'</h1>`
    // ctx.response = datas
})
router.get("/api/getRelations", async(ctx, next) => {
    ctx.response.type = 'json'
    ctx.response.body = {
        status: 200,
        data: datas
    }
    console.log('hello relations')
})
app.use(router.routes())
app.listen(9000)
console.log("app started at port 9000")
