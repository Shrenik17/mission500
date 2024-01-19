import { baseUrl } from "../constants";

export const getBlog = async () => {
  const res = await fetch(baseUrl + "/blog/getAllBlogs", {
    method: "GET", // Use GET method for a GET request
  });
  const data = await res.json();
  return data;
};
export const getSingleBlog = async (props) => {
  console.log(props);
  const res = await fetch(baseUrl + `/blog/getSingleBlog/${props}`, {
    method: "GET", // Use GET method for a GET request
  });
  const data = await res.json();
  return data;
};
