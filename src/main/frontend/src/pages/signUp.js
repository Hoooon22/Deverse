import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function SignUp() {

    const dispatch = useDispatch();

    const [Id, setId] = useState('');
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [Email, setEmail] = useState('');
    const [RegDate, setRegDate] = useState('');
    const [Fk_TeamID, setFk_TeamID] = useState('');

    const [ConfirmPassword, setConfirmPassword] = useState('');

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onRegDateHandler = (event) => {
        setRegDate(event.currentTarget.value);
    }
    const onFkTeamIDHandler = (event) => {
        setFk_TeamID(event.currentTarget.value);
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert('its not a same password')
        }

        let body = {
            id: Id,
            name: Name,
            password: Password,
            email: Email,
            regDate: RegDate,
            fk_teamID: Fk_TeamID,
        }

    }

    return (
        <div>
            <h1>Sign Up</h1>
            <div className="infoTextFrame">
                <p className="userinfoText">User Information</p>
                <label>Id</label>
                <input type="text" value={Id} onChange={onIdHandler}/>
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler}/>

            </div>
        </div>
    )
}