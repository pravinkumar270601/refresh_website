import React from "react";
import { blog_data } from "../Components/Assets/blog_page";
import Item2 from "../Components/Item/Item2";
import "../Pages/Css/Blog.css";

const Blog = () => {
  return (
    <div className="Blog">
      <h3 className="Blog-h1">Bathroom reading</h3>
      <div className="Blog-item container-fluid">
        <div className="row Blog-row">
          {blog_data.map((item, i) => {
            return (
              <div className="col-lg-6 col-sm-12 ">
                <Item2
                  key={i}
                  id={item.id}
                  image1={item.src1}
                  heading={item.heading}
                  paragraph_1={item.paragraph_1}
                  paragraph_2={item.paragraph_2}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
