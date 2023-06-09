import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL,
  timeout: 15000,
  responseType: "json",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json; charset=UTF-8",
  },
});

const request = (method: string, url: string, data: any) => {
  if (method === "GET")
    return axiosInstance.request({
      url,
      method,
      params: data,
    });

  return axiosInstance.request({
    url,
    method,
    data,
  });
};

const Request = {
  Get: (url: string, data?: any) => {
    return request("GET", url, data);
  },
  Post: (url: string, data?: any) => {
    return request("POST", url, data);
  },
  Put: (url: string, data?: any) => {
    return request("PUT", url, data);
  },
  Delete: (url: string, data?: any) => {
    return request("DELETE", url, data);
  },
};

export default Request;
