import axios from 'axios';
import React from 'react'
const headerAuth = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
};

export default async function getUser(url:any , method) {

 return axios.get(url)
 .then((response) => {
   return response;
 })
 .catch((err) => {
   const status = err.response === undefined ? 12023 : err.response.status;
   const message = err.response.data.message;
  //  apiErrorAlert(status, message);
   const response = {
     data: {},
     status: err.response.status,
   };
   return response;
 });
}
