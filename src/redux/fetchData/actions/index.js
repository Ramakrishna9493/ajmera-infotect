import axios from "axios"
import {FETCH_DATA} from "./types"
import { message } from "antd"

export const fetchData = () =>{
    return dispatch =>{

        axios.get("https://reqres.in/api/users")
        .then((response)=>{
            console.log(response.data)
            dispatch({
                type: FETCH_DATA,
                payload: response.data.data
            })
        })
    }
}

export const addUser = (data) => {
    return dispatch =>{

        axios.post("https://reqres.in/api/users", data)
        .then((response)=>{
            message.success("Successfully inserted data")
        })
        .catch((err)=>{
            message.error("failed to insert data")
        })
    }
}