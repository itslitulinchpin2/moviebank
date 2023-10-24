import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key:"79bfaf83ceafd050c6f4c482b2c64c3b",
        language:"ko-KR"
    }
});

export default instance;