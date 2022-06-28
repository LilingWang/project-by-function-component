import react, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {addNewUser} from "../actions/index";
import { useParams, useNavigate } from "react-router-dom";


const CreateNewUser = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [sex, setSex] = useState();
    const [age, setAge] = useState();
    const [password, setPassword] = useState(" ");
    const [repeatPW, setRepeatPW] = useState();
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const handleAddNewUser = () =>{
        
        
        const newUser = {
            FirstName:firstName,
            LastName:lastName,
            Sex:sex,
            Age:age,
            Password:password
        }
        
        window.alert("You are successful add new user!");
        addNewUser(dispatch)(newUser);
        navigate("/");

    }


    return (
        <>
            <form className="create_new_user_form" onSubmit={handleAddNewUser}>
                <div><label>First Name: </label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    ></input>
                </div>
                <div><label>Last Name: </label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    ></input>
                </div>
                <div><label>Sex: </label>
                    <input
                        type="text"
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                    ></input>
                </div>
                <div><label>Age: </label>
                    <input
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    ></input>
                </div>
                <div><label>Password: </label>
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div><label>Repeat: </label>
                    <input
                        type="text"
                        value={repeatPW}
                        onChange={(e) => setRepeatPW(e.target.value)}
                    ></input>
                </div>

                <input 
                type="submit"
                value="Add User" />

            </form>
        </>
    )

}

export default CreateNewUser;