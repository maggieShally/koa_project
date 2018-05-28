import React, { Component } from 'react';
import { getInfoList } from './../api/info.js' 

import { Table } from 'antd'


class InfoTable extends Component {
	constructor(props) {
		super(props);
		this.getInfoList = this.getInfoList.bind(this);
		this.state = {
			dataSource: [],
			pageNo: 1,
			pageSize: 5,
			total: 0,
		}
	}
	componentDidMount() {
		this.getInfoList();
		
	}

	async getInfoList(){
		const { pageNo, pageSize } = this.state;
		let result = await getInfoList({ pageNo, pageSize })
		console.log(result);
		this.setState({
			dataSource: result.data.itemList,
			total: result.data.totalRecord
		})
	}

	getCurrent(page) {
		this.setState({
			pageNo: page
		},()=>{
			this.getInfoList();
		})
	}
	
	render(){
		const { dataSource, pageNo, total } = this.state;
		const columns = [
		{
			title: '操作',
			key: 'operate',
			render: function(text, record, index){
				return ([
						<span key="edit">编辑</span>,
						<span className="ant-divider" key={record.id-1} />,
						<span key="del">删除</span>
					])
			}
		},{
		  title: '姓名',
		  dataIndex: 'name',
		  key: 'name',
		}, {
		  title: '年龄',
		  dataIndex: 'age',
		  key: 'age',
		}, {
		  title: '住址',
		  dataIndex: 'address',
		  key: 'address',
		}];
		return (
			<Table 
				rowKey={'id'}
				dataSource={dataSource} 
				columns={columns} 
				pagination={{
					pageSize: 5,
					current: pageNo,
					total: total,
					onChange: this.getCurrent.bind(this)

				}}
			/>
		)

	}
}


export default InfoTable;