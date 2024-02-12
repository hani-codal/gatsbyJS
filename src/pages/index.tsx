// Step 1: Import React
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
// Step 2: Define your component

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);
  return (
    <div>
      <h1>Welcome to my Gatsby site!{data.site.siteMetadata.title}</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src="https://cdn11.bigcommerce.com/s-bdswytx2s5/product_images/attribute_rule_images/7526_source_1697132284.png" />
    </div>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page test</title>;

// Step 3: Export your component
export default IndexPage;
