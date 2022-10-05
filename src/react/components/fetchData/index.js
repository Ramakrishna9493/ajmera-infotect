import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "../../../redux/fetchData/actions"

const FetchAndDisplayData = () => {
    const dispatch = useDispatch()
    const data = useSelector(({ testApp }) => testApp.data)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((user)=>{
                        return(<tr key={user.email}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>)
                    })}  
                </tbody>        
            </table>        
        </div>
    );
}
export default FetchAndDisplayData;