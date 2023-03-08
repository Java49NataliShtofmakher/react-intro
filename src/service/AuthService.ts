import React from "react";
import { LoginData } from "../model/LoginData";

export class AuthService {
    private users: LoginData[] = [
        {
            userName: 'user@gmail.com',
            password: 'user1234'
        },
        {
            userName: 'admin@gmail.com',
            password: 'admin1234'
        }
    ];
    login(loginData: LoginData) {
        const user = this.users.find((u) => u.userName === loginData.userName);

        if (!user || user.password !== loginData.password) {
            throw new Error('Invalid username or password');
        }

    }

}