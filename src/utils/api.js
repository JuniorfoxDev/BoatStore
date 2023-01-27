import axios from "axios";
const params = {
    headers : {
        Authorization : "Bearer" +  process.env.REACT_APP_API_TOKEN,
    },
};
export const fetchData  =  async (url) => {
    try {
        const data  = await axios.get(process.env.REACT_APP_API_URL + url, params);
        return data;
    }
    catch(e){
        console.log(e);
        return e;
    }
}