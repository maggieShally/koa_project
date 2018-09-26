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

// const getDiaryList = async () => {
// 	let result =  await Request.post({
// 		url: '/api/diary/getDiary',
// 		data: {
//       pageNo: 1,
//       pageSize: 10,
//     }
// 	})
// 	return result
// }

export {
	getInfoList,
  addInfo,
  // getDiaryList
}