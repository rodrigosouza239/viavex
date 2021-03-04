import axios from "axios";

const api = axios.create({
  baseURL: "https://vex.facility-cloud.com.br/facilityapi",
});

export default api;
