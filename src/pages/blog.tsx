import * as React from "react";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export const Head = () => <Seo title="My Blog Posts" />;

const BlogPage = ({ data }) => {
  return (
    <>
      <Layout pageTitle="My Blog Posts">
        <ul>
          {data?.allFile?.nodes.map((node) => (
            <li key={node.name}>{node.name}</li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
