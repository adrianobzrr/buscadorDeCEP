import axios from "axios";

const Api = axios.create({
  baseURL: "http://viacep.com.br/ws/",
});

export default Api;
