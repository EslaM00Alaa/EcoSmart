import axios from 'axios';



const URL= import.meta.env.VITE_API_BASE_URL ||"http://localhost:3232/";
const baseURL = axios.create({
  baseURL:`${URL}/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export  {baseURL,URL};
