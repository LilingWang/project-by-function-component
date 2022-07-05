import react, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from "../actions/index";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUserPage = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [sex, setSex] = useState();
    const [age, setAge] = useState();
    const [password, setPassword] = useState(" ");
    const [repeatPW, setRepeatPW] = useState();
    const { index } = useParams();
    const dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() =>{
        
        const fetchData = async () => {
            const result = await axios(`http://localhost:3002/users/get_user/${index}`);
           // console.log(result,"rest.......")
            setFirstName(result.data.FirstName);
            setLastName(result.data.LastName);
            setSex(result.data.Sex);
            setAge(result.data.Age);
          };
          fetchData();
        
    },[]);
    
    const handleEditUser = () =>{

        const newUser = {
            FirstName:firstName,
            LastName:lastName,
            Sex:sex,
            Age:age,
            Password:password,
            _id:index
        }

        updateUser(dispatch)(newUser);
        window.alert("You are successful update user info!");
        navigate("/");
    }

    return (
        <>
            <form className="create_new_user_form" onSubmit={handleEditUser}>
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
                value="Save Changes" />

            </form>
        </>
    )

}

export default EditUserPage;