import { Link } from "react-router-dom";
import blogData from "../../../data/blog-data";

const Blog = () => {
  const blogItem = blogData.slice(0, 3);
  return (
    <div className="blog__one section-padding-two pt-0">
      <div className="container">
        <div className="row mb-55">
          <div className="col-xl-12">
            <div className="blog__one-title t-center">
              <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">
                News & Blog
              </span>
              <h2 className="wow fadeInRight" data-wow-delay=".6s">
                Our Projects
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogItem?.map((data, id) => (
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay={`${data.delay}s`}
              key={id}
            >
              <div className="blog__one-item">
                <div className="blog__one-item-image">
                  <img src={data.image} alt="blog" />

                  {/* <div className="blog__one-item-image-date">
                    <h6>
                      <i className="fa-regular fa-calendar"></i>22 Dec
                    </h6>
                  </div> */}
                </div>
                <div className="blog__one-item-content">
                  <h4>{data.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
