import axios from "axios";

const api = axios.create({
    baseURL:"https://dummyjson.com",
    headers: {
        "Content-Type": "application/json",
      },
}) 

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("accessToken");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},(error)=>{
    return Promise.reject(error);
})

api.interceptors.response.use((response)=>response,(error)=>{
    if(error.response.status === 401){
        console.log("Unauthorized");
        localStorage.clear();
        window.location.href = "/login";
    }
    return Promise.reject(error);
})

export default api