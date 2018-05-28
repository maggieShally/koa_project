const dbUtils = require('./../utils/db-util')



const info = {
	async getInfoList(params) {

		const { pageNo, pageSize } = params;
		let totalResult = await dbUtils.query( 'SELECT count(*) as count FROM info_list' );
		console.log(totalResult)

		let result = await dbUtils.findDataByPage( 'info_list', ['id', 'name','age','address'],  (pageNo - 1)*pageSize, pageSize );
		return {
			itemList: result,
			pageNo: pageNo,
			pageSize: pageSize,
			totalRecord: totalResult[0].count
		};
	},

	async addInfoSubmit(params) {
		let _sql = `
	    SELECT * from info_list
	      where name="${params.name}"`
	    let result = await dbUtils.query( _sql );
		
		if (Array.isArray(result) && result.length > 0) {
			result =  null;
		} else {
			result = await dbUtils.insertData('info_list', params);
		}
		return result;
	}
}

module.exports = info