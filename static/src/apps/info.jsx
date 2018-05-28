import React from 'react'
import ReactDOM from 'react-dom'
import { Layout, Menu, Breadcrumb, Table, Button, message } from 'antd'
import HeadeNav from './../components/header-nav.jsx'
import FooterCommon from './../components/footer-common.jsx'
import InfoTable from './../components/info-table.jsx'
import InfoAddModal from './../components/form-modal.jsx'

import { addInfo } from './../api/info.js'

import 'antd/lib/layout/style/css'
const { Header, Content, Footer  } = Layout

class App extends React.Component {
	constructor(props){
		super(props)
		this.toggleModal = this.toggleModal.bind(this)
		this.submitInfo = this.submitInfo.bind(this)
		this.state = {
			visible: false
		}

	}
	toggleModal() {
		const self = this;
		this.setState({
			visible: !self.state.visible
		})
	}
	async submitInfo(params) {
		const result = await addInfo(params);
		if(result && result.success === true) {
			message.success('添加成功')
			this.toggleModal();
		}else if(result && result.message) {
			message.error(result.message)
		}else {
			message.error( '系统繁忙，稍后再试！' )
		}
	}
  	render() {
  		const { visible } = this.state;
  		const { toggleModal, submitInfo } = this;
	    return (
	      	<Layout className="layout">
	        	<HeadeNav/>
		        <Content style={{ padding: '0 50px' }}>
			        <Breadcrumb style={{ margin: '12px 0' }}>
			        	<Breadcrumb.Item>Info</Breadcrumb.Item>
			        </Breadcrumb>
		          	<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
		            	<div>
				            <Button type="primary" onClick={this.toggleModal.bind(this)}>添加信息</Button>
				            <InfoTable />
				            <InfoAddModal {...{visible, toggleModal, submitInfo}} />
		            	</div>
		          	</div>
		        </Content>
	        <FooterCommon />
	      </Layout>
	    )
  	}
}

export default App