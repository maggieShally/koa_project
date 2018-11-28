

const diaryListService = require('./../../services/diary/diary-list');


module.exports = {
  async getToken(ctx){
    const result = {
      data: {},
      meta: {
        code: '00000',
        message: 'success',
        success: false
      },
    }
    let data = await diaryListService.getToken(ctx.request.body)
    result.data = {
      ...data,
      token: '333333333333'
    }
    result.meta.success = true;
    ctx.body = result
  }
}