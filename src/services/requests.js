import axios from "axios";
axios.defaults.baseURL = "https://addis-software-backend.onrender.com/";
export const Requests = {
    getSongs:()=>axios.get("/api"),
    getStats:()=>axios.get("/api/stats"),
    getGeners:()=>axios.get("/api/geners"),
    addSong:(body)=>  axios.post(`/api`,body),
    updateSong:(id,body)=>  axios.put(`/api/${id}`,body),
    deleteSong:(id)=>  axios.delete(`/api/${id}`)
}