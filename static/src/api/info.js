import Request from './../utils/request'

const getInfoList = async (params) => {
	let result = await Request.post({
		url: '/api/info/getList',
		data: params
	})
	return result;
}

const addInfo = async (params) => {
	console.log(params);
	let result =  await Request.post({
		url: '/api/info/addSubmit',
		data: params
	})
	return result
}

export {
	getInfoList,
	addInfo,
}