import { baseUrl } from "../constants";

export const getAllGalleryImages = async () => {
    const res = await fetch(baseUrl + "/gallery/getAllGalleryImages", {
      method: "GET", // Use GET method for a GET request
    });
    const data = await res.json();
    return data;
  };
  