import react, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addNewUser } from "../actions/index";
import { useParams, useNavigate } from "react-router-dom";
import { MdOutlineSaveAlt } from "react-icons/md";
import styled from '@emotion/styled';

const InputContainer = styled.div`
    background-color:lightgreen;
    border:1px solid lightgray;
    margin-top:10px;
    width:100px;
    input {
        border:none;
        background-color:lightgreen;
        padding-bottom:5px;
        
    }

`;

const CreateNewUser = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [sex, setSex] = useState("");
    const [age, setAge] = useState();
    const [password, setPassword] = useState("");
    const [repeatPW, setRepeatPW] = useState("");
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [invalid, setInvalid] = useState()

    const handleAddNewUser = (e)=> {
        e.preventDefault();
       // console.log(firstName.length,"test length")
        if(firstName.length < 1){
            //console.log("test")
             setInvalid('Invalid First Name!');
             return;
        }else if(lastName.length < 1){
            setInvalid('Invalid Last Name!');
            return;
        }else if(isNaN(age) || age < 1 || age > 120){
            setInvalid('Invalid age');
            return;
        }else if(password !== repeatPW){
              setInvalid('password are not match!')
              return;
        }else{
            const newUser = {
                FirstName: firstName,
                LastName: lastName,
                Sex: sex,
                Age: age,
                Password: password
            }
    
            window.alert("You are successful add new user!");
            addNewUser(dispatch)(newUser);
            navigate("/");
        }
        

    }


    return (
        <>
            <form className="create_new_user_form" onSubmit={handleAddNewUser}>
                <div><label>First Name: </label>
                    <input
                        type="text"
                        value={firstName}
                        placeholder= "Fist Name"
                        onChange={(e) => setFirstName(e.target.value)}
                    ></input>
                </div>
                <div><label>Last Name: </label>
                    <input
                        type="text"
                        value={lastName}
                        placeholder= "Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                    ></input>
                </div>
                <div><label>Sex: </label>
                    <input
                        type="text"
                        value={sex}
                        placeholder= "Sex"
                        onChange={(e) => setSex(e.target.value)}
                    ></input>
                </div>
                <div><label>Age: </label>
                    <input
                        type="text"
                        value={age}
                        placeholder= "Age"
                        onChange={(e) => setAge(e.target.value)}
                    ></input>
                </div>
                <div><label>Password: </label>
                    <input
                        type="text"
                        value={password}
                        placeholder= "Password"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div><label>Repeat: </label>
                    <input
                        type="text"
                        value={repeatPW}
                        placeholder= "Repeat Password"
                        onChange={(e) => setRepeatPW(e.target.value)}
                    ></input>
                </div>
                {invalid? <div style={{color:'red'}}>{invalid}</div> : null }
                <InputContainer >
                <MdOutlineSaveAlt />
                    <input
                        type="submit"
                        value="Add User" />
                </InputContainer>
            </form>
        </>
    )

}

export default CreateNewUser;