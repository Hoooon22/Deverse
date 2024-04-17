import React from "react";
//import NoLogin from "../components/login/NoLogin"
//import RequestLogin from "../components/login/RequestLogin"

export default function Main(){
    return (
        <div className="Main">
            <h1>Main</h1>
            {/* <RequestLogin /> */}
            <div className="Blog">
                <a href="https://hoooon22.github.io">Hoooon22 Github Blog</a>
            </div>
            <div className="Workspace">
                <a href="/workspace">Workspace</a>
            </div>
        </div>
    )
}