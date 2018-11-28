
const diaryListModels  = require('./../../models/diary/diary-list')
const commonModels  = require('./../../models/diary/common')


const diaryListService = {
  async getDiaryList(params) {
    const result = await diaryListModels.getDiaryList(params);
    return result
  },

  async submitDiary(params) {
    const result = await diaryListModels.submitDiary(params);
    return result;
  },

  async getDiaryDetails(params) {
    const result = await diaryListModels.getDiaryDetails(params);
    return result;
  },

  async getToken(params) {
    const result = await commonModels.getToken(params)
    return result
  }
}

module.exports = diaryListService;