import { baseURL } from "./baseurl";

async function sendMessage( name, mail, phone,address,msg) {
    try {
        await baseURL.post("/send-email",{name, mail, msg,phone,address})
        return true;
    } catch (error) {
       console.log(error);
       return false;
    }
}


export  {sendMessage} ;
