import React from "react";
import blog1 from "../../images/blog1.png";

const index = () => {
  return (
    <div className="blog">
      <h1
        style={{
          margin: "30px 0 30px 0",
        }}
      >
        My Blogs
      </h1>
      <a
        className="blog__link"
        href="https://dev.to/jagdishsaini90/how-to-use-material-ui-media-queries-with-reactjs-4e4p"
      >
        <img src={blog1} alt="Blog" style={{ width: "100%", height: "100%" }} />
      </a>
    </div>
  );
};

export default index;
