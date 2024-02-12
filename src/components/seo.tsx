import * as React from "react";

const Seo = ({ title }) => {
  console.log("seo ", title);
  return (
    <>
      <title>{title}</title>
    </>
  );
};

export default Seo;
