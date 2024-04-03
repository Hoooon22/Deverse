import React from "react";
import NoLogin from "../components/login/NoLogin"
import RequestLogin from "../components/login/RequestLogin"

export default function Main(){
    return (
        <div>
            <RequestLogin />
            <h2>This is Main?</h2>
        </div>
    )
}