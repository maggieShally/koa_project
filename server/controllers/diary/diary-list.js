
const diaryListService = require('./../../services/diary/diary-list');

module.exports = {
  async getDiaryList(ctx) {
    const result = {
      data: {},
      meta: {
        code: '00000',
        message: 'success',
        success: false
      },
    };

    let data = await diaryListService.getDiaryList(ctx.request.body);
    result.data  = data;
		result.meta.success = true;
		ctx.body = result;
  },

  async submitDiary(ctx) {
    const result = {
      data: {},
      meta: {
        code: '00000',
        message: 'success',
        success: false
      },
    };
    await diaryListService.submitDiary(ctx.request.body);
    result.meta.success = true;
		ctx.body = result;
  },

  async getDiaryDetails(ctx) {
    const result = {
      data: {},
      meta: {
        code: '00000',
        message: 'success',
        success: false,
      }
    }

    const data = await diaryListService.getDiaryDetails(ctx.request.body);
    result.data = data;
    result.meta.success = true;
    ctx.body = result;
  }
}