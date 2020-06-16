/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('./../controllers/user-info')
const infoController = require('./../controllers/info');
const diaryListController = require('./../controllers/diary/diary-list');
const diaryListCommonController = require('./../controllers/diary/common');

const routers = router
  .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
  .post('/user/signIn.json', userInfoController.signIn)
  .post('/user/signUp.json', userInfoController.signUp)
  .post('/info/getList', infoController.getList)
  .post('/info/addSubmit', infoController.addInfo)


  .post('/diary/getDiary', diaryListController.getDiaryList)
  .post('/diary/add', diaryListController.submitDiary)
  .post('/diary/update', diaryListController.updateDiary)
  .get('/diary/getDiaryDetails', diaryListController.getDiaryDetails)
  .post('/commom/getToken', diaryListCommonController.getToken)
  .post('/diary/getDiaryDetails/delete', diaryListController.delDiaryDetails)
 
  
module.exports = routers
