//2,调用model获取数据，返回给controller

const infoModels = require("./../models/info-table.js");

const infoServices = {
  async getInfoList(params) {
    let resultData = await infoModels.getInfoList(params);
    return resultData;
  },

  async addInfoSubmit(params) {
    let resultData = await infoModels.addInfoSubmit(params);
    return resultData;
  },
};

module.exports = infoServices;
