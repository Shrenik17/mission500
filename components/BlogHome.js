import { getBlog, getSingleBlog } from "@/api/blogAPI";
import React, { useState, useEffect, use } from "react";

const BlogHome = () => {
  const [blogData, setBlogData] = useState([]);
  const [responseType, setResponseType] = useState("");
  const [otherBlogData, setOtherBlogData] = useState({});
  const [latestBlog, setLatestBlog] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await getBlog();
      if (response.type) {
        setResponseType("true");
      }

      // Sort the blogData array by postedDate in descending order
      const sortedData = response.data.sort((a, b) => {
        return new Date(b.postedDate) - new Date(a.postedDate);
      });

      // Get the latest blog
      const latestBlog = sortedData[0];

      // Filter the rest of the blogs
      const otherBlogs = sortedData.slice(1); // Exclude the latest blog

      setBlogData(latestBlog);
      setLatestBlog(latestBlog);

      // Create an array of objects containing date and blogHeading for other blogs
      const otherBlogData = otherBlogs.map((blog) => ({
        date: blog.postedDate,
        blogHeading: blog.blogHeading,
        blog_id: blog.blog_id,
      }));

      // Set other blog data to a state variable
      setOtherBlogData(otherBlogData);
    };
    getData();
  }, []);

  const getSingleLatestBlogdata = async (id) => {
    const res = await getSingleBlog(id);
    setFlag(false);
    setBlogData(res);
  };
  const getSingleBlogdata = async (id) => {
    const res = await getSingleBlog(id);
    setFlag(true);
    setBlogData(res);
  };

  console.log("blogData", blogData);
  console.log("latestBlog", latestBlog);
  return (
    <>
      {blogData && otherBlogData ? (
        <div className="row" style={{ position: "relative", fontWeight:"400" }}>
          {responseType == "true" && (
            <div className="col-md-8">
              <div className="d-flex flex-column container pt-4">
                <div style={{ borderBottom: "2px solid #e36955" }}>
                  <h2
                    style={{
                      paddingBottom: "1rem",
                      color: "#e36955",
                      lineHeight: "40px",
                      fontWeight:"400"
                    }}
                  >
                    {(blogData && blogData.blogHeading) ||
                      blogData.data.blogHeading}
                  </h2>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h6 style={{ padding: "0 2rem", color: "black" , fontWeight:"400"}}>
                      Date -{" "}
                      {(blogData && blogData.postedDate) ||
                        blogData.data.postedDate}
                    </h6>
                    <h6 style={{ padding: "0 2rem", color: "black" , fontWeight:"400" }}>
                      Written By -{" "}
                      {(blogData && blogData.writtenBy) ||
                        blogData.data.writtenBy}
                    </h6>
                  </div>
                </div>

                <div className="blog_content">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        (blogData && blogData.htmlContent) ||
                        blogData.data.htmlContent,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          {otherBlogData && (
            <div className="col-md-4" style={{ position: "relative" }}>
              {flag ? (
                <div
                  className="d-flex flex-column py-4 px-1"
                  style={{ position: "sticky", top: "0" }}
                >
                  <div className="border-bottom-1">
                    <h2 style={{ color: "black", fontWeight: "400" }}>
                      Latest Blogs
                    </h2>
                  </div>
                  <div style={{ cursor: "pointer" }}>
                    <div
                      className="previous_blog_section"
                      onClick={() => {
                        getSingleLatestBlogdata(
                          latestBlog.blog_id
                            ? latestBlog.blog_id
                            : latestBlog.data.blog_id
                        );
                      }}
                    >
                      <p style={{ fontWeight: "400" }}>
                        {latestBlog.postedDate
                          ? latestBlog.postedDate
                          : latestBlog.data.postedDate}
                      </p>
                      <h4 style={{ color: "black" ,fontWeight: "400"}}>
                        {latestBlog.blogHeading
                          ? latestBlog.blogHeading
                          : latestBlog.data.blogHeading}
                      </h4>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div
                className="d-flex flex-column py-4 px-1"
                style={{ position: "sticky", top: "0" }}
              >
                {otherBlogData && (
                  <div className="border-bottom-1">
                    <h2 style={{ color: "black", fontWeight: "400" }}>
                      Previous Blogs
                    </h2>
                  </div>
                )}
                <div>
                  {responseType == "true" && blogData ? (
                    otherBlogData.map((item, index) => {
                      return (
                        <div
                          style={{ cursor: "pointer" }}
                          className="previous_blog_section"
                          key={index}
                          onClick={() => getSingleBlogdata(item.blog_id)}
                        >
                           <p style={{ fontWeight: "400" }}>{item.date}</p>
                          <h4 style={{ color: "black" , fontWeight:"400" }}>{item.blogHeading}</h4>
                        </div>
                      );
                    })
                  ) : (
                    <div className="d-flex justify-content-center align-items-center">
                    <p style={{ fontWeight: "400" }}>No Data</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center m-4">
        <p style={{ fontWeight: "400" }}>No Data</p>
        </div>
      )}
    </>
  );
};

export default BlogHome;
