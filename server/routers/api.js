/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('./../controllers/user-info')
const infoController = require('./../controllers/info');

const routers = router
  .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
  .post('/user/signIn.json', userInfoController.signIn)
  .post('/user/signUp.json', userInfoController.signUp)
  .post('/info/getList', infoController.getList)
  .post('/info/addSubmit', infoController.addInfo)
 
  
module.exports = routers
