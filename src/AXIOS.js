import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-35df3/us-central1/api", // THE API url
});
export default instance;
