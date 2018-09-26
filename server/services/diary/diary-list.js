
const diaryListModels  = require('./../../models/diary/diary-list')


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
  }
}

module.exports = diaryListService;