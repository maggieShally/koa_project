const diaryListModels = require("./../../models/diary/diary-list");
const commonModels = require("./../../models/diary/common");

const diaryListService = {
  async updateDiary(params) {
    await diaryListModels.updateDiary(params);
    return true;
  },

  async delDiaryDetails(params) {
    await diaryListModels.delDiaryDetails(params);
    return true;
  },

  async getDiaryList(params) {
    return await diaryListModels.getDiaryList(params);
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
    const result = await commonModels.getToken(params);
    
    return result;
  },
};

module.exports = diaryListService;
