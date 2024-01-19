import { baseUrl } from "../constants";

export const getAllLogoImages = async () => {
    const res = await fetch(baseUrl + "/logo/getAllLogoImages", {
      method: "GET", // Use GET method for a GET request
    });
    const data = await res.json();
    return data;
  };
  