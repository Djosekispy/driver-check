import axios from "axios";

const url = "http://192.168.8.5:3080";

const api = axios.create({
    //baseURL: "http://192.168.1.103:3080",
     // baseURL: "http://192.168.56.1:3080",
     // baseURL : "http://192.168.25.3:3080";
     // baseUrl : "http://192.168.232.3:3080";
     baseURL : url,
   // baseURL : `${process.env.EXPO_PUBLIC_API_UR}`,
    });

    export { api, url}