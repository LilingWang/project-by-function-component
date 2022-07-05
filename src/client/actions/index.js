import {INIT, ADD, DEL, GETINFO} from "../helper/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const initUser = (dispatch) => async() => {
   
    try {

        const result = await axios("http://localhost:3002/users/getAll");
       // const result = await response.json();
        dispatch({
            type:INIT,
            payload:result.data,
        });

    }catch(e) {
        console.log(e);
    }
}

export const addNewUser = (dispatch) => (value) =>{
   
    axios({
        method:"post",
        url:"http://localhost:3002/users/add_user",
        data:value,
    })
    .then(()=>{
        dispatch({
            type:ADD,
            payload:value

        });
        window.location.href = "/"
        
    })
    .catch((e)=>{
        console.log(e)
    })
}

export const deleteUser = (dispatch) => (index) =>{
    
    axios({
        method:"post",
        url:`http://localhost:3002/users/delete_user`,
        params:{
            id:index,
        },
        
    })
    .then((res)=> {
        dispatch({
            type:DEL,
            payload:index,
        });
        window.location.href = "/"

    })
    .catch((e) => {
        console.log("error")
    })
}

export const updateUser = (dispatch) => (value) =>{
    console.log(value, "83jjrwe")
    const newUser = {
        FirstName:value.FirstName,
        LastName:value.LastName,
        Sex:value.Sex,
        Age:value.Age,
        Password:value.Password,
    }

    const index = value._id
    axios({
        method:"post",
        url:`http://localhost:3002/users/update_user/${index}`,
        data:newUser,
        
    })
    .then((res)=> {
        console.log(res,"test res data")
        dispatch({
            type:GETINFO,
            payload:res.data,
        });
    })
    .catch((e) => {
        console.log("error")
    })
}