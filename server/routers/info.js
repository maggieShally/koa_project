
const router = require('koa-router')();
const info = require('./../controllers/info');

const routers = router.get('/', info.indexPage)


module.exports = routers

