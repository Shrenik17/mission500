import { baseUrl } from "../constants";

export const getAllProjects = async () => {
    const res = await fetch(baseUrl + "/projects/getAllProjects", {
      method: "GET", // Use GET method for a GET request
    });
    const data = await res.json();
    return data;
  };
  