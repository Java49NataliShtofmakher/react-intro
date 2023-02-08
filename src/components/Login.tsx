import { authActions } from "../redux/authSlice";
import { useDispatch } from 'react-redux'
import { Input } from "./Input";
import React from "react";

export const Login: React.FC = () => {
    const dispatch = useDispatch();
    return <div>
        <h3>Log In</h3>
        <Input placeHolder={"Type user name"} inputProcess={function (value: string): string {
            dispatch(authActions.login(value))
            return '';
        }}></Input>

    </div>

}