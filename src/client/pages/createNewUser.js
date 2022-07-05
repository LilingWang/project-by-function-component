import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addNewUser } from "../actions/index";
import { useParams, useNavigate } from "react-router-dom";
import { MdOutlineSaveAlt } from "react-icons/md";
import styled from '@emotion/styled';
import useForm from "./useForm";

const InputContainer = styled.div`
    background-color:lightgreen;
    border:1px solid lightgray;
    margin-top:10px;
    width:100px;
    button {
        border:none;
        background-color:lightgreen;
        padding-bottom:5px;
        
    }
`;

const FormContainer = styled.div`
    
.error {
  color: red;
  font-size: 13px;
}
`;

const CreateNewUser = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
 // Define your state schema
 const stateSchema = {
    firstName: { value: "", error: "" },
    lastName: { value: "", error: "" },
    tags: { value: "", error: "" },
    sex: { value: "", error: "" },
    age: { value: "", error: "" },
    password: { value: "", error: "" },
    repeatPW: { value: "", error: "" }
  };

  // Create your own validationStateSchema
  // stateSchema property should be the same in validationStateSchema
  // in-order a validation to works in your input.
  const stateValidatorSchema = {
    firstName: {
      required: true,
      validator: {
        func: value => /^[a-zA-Z]+$/.test(value),
        error: "Invalid first name format."
      }
    },
    lastName: {
      required: true,
      validator: {
        func: value => /^[a-zA-Z]+$/.test(value),
        error: "Invalid last name format."
      }
    },
    sex: {
      required: true,
      validator: {
        func: value => /^Female$/.test(value) || /^Male$/.test(value) ,
        error: "Invalid sex format."
      }
    },
    age: {
        required: true,
        validator: {
          func: value => (value > 10 && value < 100)? true : false,
          error: "Invalid age format."
        }
      },
      password: {
        required: true,
        validator: {
          func: value => value.length > 3,
          error: "Invalid password format."
        }
      },
      repeatPW: {
        required: true,
        validator: {
          func: value => password !== value? false : true,
          error: "Pass Word does`t match!."
        }
      }
  };
    function onSubmitForm(state) {
        const newUser = {
            FirstName: firstName,
            LastName: lastName,
            Sex: sex,
            Age: age,
            Password: password
        }

        //window.alert("You are successful add new user!");
        addNewUser(dispatch)(newUser);
        //navigate("/");
      }

      const {
        values,
        errors,
        dirty,
        handleOnChange,
        handleOnSubmit,
        disable
      } = useForm(stateSchema, stateValidatorSchema, onSubmitForm);
    
      const { firstName, lastName, sex, age, password, repeatPW } = values;
    

    return (
        <><FormContainer>
            <form className="create_new_user_form" onSubmit={handleOnSubmit}>
                <div><label>First Name: </label>
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        placeholder="Fist Name"
                        onChange={ handleOnChange}
                    ></input>
                    {errors.firstName && dirty.firstName && (
            <p className="error">{errors.firstName}</p>
          )}
                </div>
                <div><label>Last Name: </label>
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        placeholder="Last Name"
                        onChange={handleOnChange}
                    ></input>
                    {errors.lastName && dirty.lastName && (
            <p className="error">{errors.lastName}</p>
          )}
                </div>
                <div><label>Sex: </label>
                    <input
                        type="text"
                        name="sex"
                        value={sex}
                        placeholder="Sex"
                        onChange={handleOnChange}
                    ></input>
                    {errors.sex && dirty.sex && (
            <p className="error">{errors.sex}</p>
          )}
                </div>
                <div><label>Age: </label>
                    <input
                        type="text"
                        name="age"
                        value={age}
                        placeholder="Age"
                        onChange={handleOnChange}
                    ></input>
                    {errors.age && dirty.age && (
            <p className="error">{errors.age}</p>
          )}
                </div>
                <div><label>Password: </label>
                    <input
                        type="text"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={ handleOnChange}
                    ></input>
                    {errors.password && dirty.password && (
            <p className="error">{errors.password}</p>
          )}
                </div>
                <div><label>Repeat: </label>
                    <input
                        type="text"
                        name="repeatPW"
                        value={repeatPW}
                        placeholder="Repeat Password"
                        onChange={handleOnChange}
                    ></input>
                    {errors.repeatPW && dirty.repeatPW && (
            <p className="error">{errors.repeatPW}</p>
          )}
                </div>
               
                <InputContainer >
                    <MdOutlineSaveAlt />
                    <button htmlType="submit" type="primary" disabled={disable}>
            Add User
          </button>
                    
                </InputContainer>
            </form>
            </FormContainer>
        </>
    )

}

export default CreateNewUser;