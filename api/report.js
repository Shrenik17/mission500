import { baseUrl } from "../constants";


  export const getReport = async () => {
    const res = await fetch(baseUrl + "/report/getReport", {
      method: "GET", // Use GET method for a GET request
    });
    const data = await res.json();
    return data;
  };
  