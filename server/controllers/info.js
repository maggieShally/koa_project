

const infoServices = require('./../services/info-table')

module.exports = {
	async indexPage (ctx) {
		const title = 'info';
		await ctx.render('info', {
			title,
		})
	},

	async getList(ctx) {
		
		let result = {
			code: '',
			success: '',
			data: '',
			message: ''
		}
		result.code = '200';
		result.message = 'ok';
		let data = await infoServices.getInfoList(ctx.request.body);
		console.log(data)
		result.data  = data;
		result.success = true;
		ctx.body = result;
	},

	async addInfo(ctx) {
		let result = {
			code: '',
			message: '',
			success: '',
			data: [],
		}
		
		let data = await infoServices.addInfoSubmit(ctx.request.body);
		result.code = data  ? '200' : '201';
		result.message = data ? 'ok' : '已存在';
		result.data = data;
		result.success = data ? true : false;
		ctx.body = result;
	}
}
