import React, {useState} from "react";
import { Button, Modal, Form, Input } from "antd";
import { useDispatch } from 'react-redux';
import { addUser } from "../../../redux/fetchData/actions";

const AddUser = () =>{
    
    const dispatch = useDispatch()
    const [modalVisible, setModalVisible] = useState(false)
    const onFinish = (values) => {
        dispatch(addUser(values))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <>
        <Button onClick={()=> setModalVisible(true)}>Add User</Button>
        <Modal title="Add User" visible={modalVisible} onCancel={()=>setModalVisible(false)} footer={false}>
            <Form
                name="User Data"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="First Name"
                    name="first_name"
                    rules={[{ required: true, message: 'Please input your First Name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="last_name"
                    rules={[{ required: true, message: 'Please input your Last Name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    </>
    )
}
export default AddUser