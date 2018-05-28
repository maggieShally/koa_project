import React, { Component } from 'react'

import { Modal, Form, Input } from 'antd'
const FormItem = Form.Item;

class InfoAddModal extends Component {
	constructor(props) {
		super(props)
		this.submitHandler = this.submitHandler.bind(this);
	}

	submitHandler(){

		const self = this;
		const { form, submitInfo } = this.props;
		this.props.form.validateFields( (err, values) => {
			if(!err) {
				const formData = form.getFieldsValue();
				submitInfo(formData)
			}
		})
	}
	render(){
		const { visible, toggleModal, submitInfo } = this.props;
		const { getFieldDecorator } = this.props.form;
		const formlayout = {
			labelCol: {span: 4},
			wrapperCol: {span: 20}
		};
		return(
			<Modal
				visible={visible}
				title="添加信息"
				onCancel={toggleModal}
				onOk={this.submitHandler}

			>
				<Form layout="horizontal" onSubmit={this.submitHandler}>
					<FormItem formlayout>
						{
							getFieldDecorator('name',{
								rules:[
								{
									required: true,
									message: '请填入姓名'
								}]
							})(
								<Input type="text" placeholder="姓名" />
							)

						}
						
					</FormItem>
					<FormItem formlayout>
						{
							getFieldDecorator('age',{
								rules:[
								{
									required: true,
									message: '请填年龄'
								}]
							})(
								<Input type="text" placeholder="年龄" />
							)

						}
						
					</FormItem>
					<FormItem formlayout>
						{
							getFieldDecorator('address',{
								rules:[
								{
									required: true,
									message: '请填入地址'
								}]
							})(
								<Input type="text" placeholder="地址" />
							)
						}
					</FormItem>
				</Form>
			</Modal>
		)
	}
}


InfoAddModal = Form.create()(InfoAddModal)


export default InfoAddModal;