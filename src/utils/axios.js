// import axios from "axios";

import origin from "axios";

export const DOMAIN = "https://www.example.com/";
export const baseURL = DOMAIN + "api/";

export const axios = origin.create({
  baseURL,
});

axios.interceptors.request.use(async (config) => {
  // start loader
  // add authorization to ther headers
  return config;
});

axios.interceptors.response.use(
  async (res) => {
    // stop loader
    return res;
  },
  async (err) => {
    // stop loader
    return err;
  }
);

export default axios;
