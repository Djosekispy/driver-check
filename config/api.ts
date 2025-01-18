import axios from "axios";


export const api = axios.create({
    baseURL: "http://192.168.1.103:3080",
   // baseURL : `${process.env.EXPO_PUBLIC_API_UR}`,
    });