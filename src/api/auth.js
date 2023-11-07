import axios from "axios"

const API = "http://localhost:8081/api"

export const contactRequest = async (contact) => {
    try {
        const response = await axios.post(`${API}/contacto`, contact);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const registerRequest = (register) => axios.post(`${API}/register/registro`, register);


export const loginRequest = async(login) => {
    try{
        const response = await axios.post(`${API}/register/login`, login);
        return response
    }
    catch(error){
        throw error
    }
   }


export const logoutRequest =  (logout) => axios.post(`${API}/register/logout`, logout);


export const allNewsRequest = async () => {
    try {
        const response = await axios.get(`${API}/noticias`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const oneNewsRequest = async (id) => {
    try {
        const response = await axios.get(`${API}/noticias/${id}`);
        return response.data; 
    } catch (error) {
        throw error;
    }
};

export const twoNewsRequest= async()=>{
    try{
        const response= await axios.get(`${API}/`)
        return response.data
    }
    catch(e){
        throw(e)
    }
}