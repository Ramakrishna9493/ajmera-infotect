import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "../../../redux/fetchData/actions"
import { Table } from "antd";

const User = (props) => {

    const dataColumns = [
        {
            title: '',
            dataIndex: 'avatar',
            key: 'avatar',
            fixed: 'left',
            render: (text, data) => <img src={text} alt="img"></img>,
        },
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        }
    ]
    const dispatch = useDispatch()
    const data = useSelector(({ testApp }) => testApp.data)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    
    
    return (
        <div>
            <Table columns={dataColumns} dataSource={data.data}></Table>
        </div>
    );
}
export default User;