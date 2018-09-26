/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('./../controllers/user-info')
const infoController = require('./../controllers/info');
const diaryListController = require('./../controllers/diary/diary-list');

const routers = router
  .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
  .post('/user/signIn.json', userInfoController.signIn)
  .post('/user/signUp.json', userInfoController.signUp)
  .post('/info/getList', infoController.getList)
  .post('/info/addSubmit', infoController.addInfo)
  .post('/diary/getDiary', diaryListController.getDiaryList)
  .post('/diary/submitDiary', diaryListController.submitDiary)
  .post('/diary/getDiaryDetails', diaryListController.getDiaryDetails)
 
  
module.exports = routers
