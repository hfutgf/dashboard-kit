import axios from "axios";

export const items = async () => {
  const api = await axios
    .get("https://63638f548a3337d9a2e0dad3.mockapi.io/users")
    .then((res) => res.data);
  return api;
};



