import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + " - Simetmark (Pvt) Ltd";
  }, []);
};

export default SEO;
