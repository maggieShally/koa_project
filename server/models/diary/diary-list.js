
const dbUtils = require('./../../utils/db-util')
const datatime = require('./../../utils/datetime');

const diaryInfo = {
  async getDiaryList(params) {
    const { pageNo, pageSize } = params;
    let totalResult = await dbUtils.query('SELECT count(*) as count FROM diary_list');
    let result = await dbUtils.findDataByPage( 'diary_list', ['id', 'content','date'],  (pageNo - 1)*pageSize, pageSize );
    return {
      itemList: result,
			pageNo: pageNo,
			pageSize: pageSize,
			totalRecord: totalResult[0].count
    }
  },
  async submitDiary(params) {
    const { content, date, location, color, weather, fontSize  } = params;
    let result = await dbUtils.insertData('diary_list', {
      content,      
      color, 
      location, 
      weather,
      fontSize,
      date: datatime.parseStampToFormat(date, 'YYYY-MM-DD hh:mm')
    });

    return result;
  },

  async getDiaryDetails(params) {
    const  { id } = params;
    let result =  await dbUtils.findDataById('diary_list', id);
    
    return {
      info: result[0]
    };
  },

  async delDiaryDetails(params) {
    const { id } = params
    const data = await dbUtils.deleteDataById('diary_list', id);
  },
  
  async updateDiary(params) {
    const { id } = params
    const data = await dbUtils.updateData('diary_list',params, id);
  }
}

module.exports = diaryInfo;
