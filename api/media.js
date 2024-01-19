import { baseUrl } from "../constants";

export const getAllEventsNews = async () => {
  const res = await fetch(baseUrl + "/events/getAllEventsNews", {
    method: "GET", // Use GET method for a GET request
  });
  const data = await res.json();
  return data;
};
export const getYearBYEvent = async (props) => {
  const res = await fetch(baseUrl + `/events/getYears/${props}`, {
    method: "GET", // Use GET method for a GET request
  });
  const data = await res.json();
  return data;
};
export const getInfoByYearAndEvent = async (year, eventType) => {
  const res = await fetch(
    baseUrl + `/events/getEventsByYear/${year}/${eventType}`,
    {
      method: "GET", // Use GET method for a GET request
    }
  );
  const data = await res.json();
  return data;
};
