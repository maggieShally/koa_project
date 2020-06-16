const diaryListService = require("./../../services/diary/diary-list");

const defaultResult = {
  data: {},
  meta: {
    code: "00000",
    message: "success",
    success: false,
  },
};

module.exports = {
  async getDiaryList(ctx) {
    const result = {
      ...defaultResult,
    };
    const params = ctx.request.body
    const postData = {
      ...params,
      pageNo: params.pageNo || 1,
      pageSize: params.pageSize || 10
      
    }

    let data = await diaryListService.getDiaryList(postData);
    result.data = data;
    result.meta.success = true;
    ctx.body = result;
  },

  async submitDiary(ctx) {
    const result = {
      ...defaultResult,
    };
    await diaryListService.submitDiary(ctx.request.body);
    result.meta.success = true;
    ctx.body = result;
  },

  async getDiaryDetails(ctx) {
    const result = {
      ...defaultResult,
    };
    const data = await diaryListService.getDiaryDetails(ctx.request.query);
    result.data = data;
    result.meta.success = true;
    ctx.body = result;
  },

  async delDiaryDetails(ctx) {
    const result = {
      ...defaultResult,
    };
    await diaryListService.delDiaryDetails(ctx.request.body );
    result.meta.success = true;
    ctx.body = result;
  },

  async updateDiary(ctx) {
    const result = {
      ...defaultResult,
    };
    console.log(ctx.request.body)
    await diaryListService.updateDiary(ctx.request.body );
    result.meta.success = true;
    ctx.body = result;
  },
};
