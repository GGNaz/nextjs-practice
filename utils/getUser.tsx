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


// const selectedMethod = ({api , method, params}:FetchProps) => {
//   switch (method) {
//     case "POST":
//         return axios.post(api, params)
//         case "PUT":
//           return axios.put(api, params)
//           case "GET":
//             return axios.get(api)
//             case "DELETE":
//               return axios.delete(api)
    
//   }
// }

interface FetchProps{
  api: string,
  method:string,
  params?: object
}

export default async function getUser(data:any) {

 return axios.get(data).then((response) => {
   console.log("🚀 ~ file: getUser.tsx:36 ~ returnaxios.get ~ response:", response)
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
