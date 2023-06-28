import axios, { Axios } from 'axios';

const API="http://localhost:3000/api/"

export const registerRequest=user=>{
    return axios.post(API+"register",user)
}