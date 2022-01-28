import React from 'react';
import {useEffect, useState} from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import * as Styled from './styles';
import useScript from 'components/hook/useScript'
// require(`gatsby-remark-mathjax-ssr/mathjax.css`)

interface Post {
  html: React.ReactNode;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
  };
}

interface Props {
  data: {
    markdownRemark: Post;
  };
  pageContext: {
    slug: string;
    next: Post;
    previous: Post;
  };
}

// function useScript(url: string){
//   useEffect(() => {
//     const script = document.createElement('script');

//     script.src = url;
//     script.async = true;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     }
//   }, [url]);
// }

const BlogPost: React.FC<Props> = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  // useScript('https://use.typekit.net/foobar.js');

  // const url = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"
  // const url2 = "https://raw.githubusercontent.com/FrankCCCCC/MathJaxTest/main/MathJax.js"
  const url2 = "/MathJaxPub.js"
  // const url = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML,https://raw.githubusercontent.com/FrankCCCCC/MathJaxTest/main/MathJax.js"
  useScript(url2)
  // useScript(url)

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container section>
        <TitleSection title={post.frontmatter.date} subtitle={post.frontmatter.title} />
        <FormatHtml content={post.html} />
        <Styled.Links>
          <span>
            {previous && (
              <Link to={previous.fields.slug} rel="previous">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </span>
          <span>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </span>
        </Styled.Links>
      </Container>
    </Layout>
  );
};

// interface useScript {
//   src: string,
//   script: any
// }

// // Hook
// function useScript(src) {
//   // Keep track of script status ("idle", "loading", "ready", "error")
//   const [status, setStatus] = useState(src ? "loading" : "idle");
//   useEffect(
//     () => {
//       // Allow falsy src value if waiting on other data needed for
//       // constructing the script URL passed to this hook.
//       if (!src) {
//         setStatus("idle");
//         return;
//       }
//       // Fetch existing script element by src
//       // It may have been added by another intance of this hook
//       let script = document.querySelector(`script[src="${src}"]`);
//       if (!script) {
//         // Create script
//         script = document.createElement("script");
//         script.src = src;
//         script.async = true;
//         script.setAttribute("data-status", "loading");
//         // Add script to document body
//         document.body.appendChild(script);
//         // Store status in attribute on script
//         // This can be read by other instances of this hook
//         const setAttributeFromEvent = (event) => {
//           script.setAttribute(
//             "data-status",
//             event.type === "load" ? "ready" : "error"
//           );
//         };
//         script.addEventListener("load", setAttributeFromEvent);
//         script.addEventListener("error", setAttributeFromEvent);
//       } else {
//         // Grab existing script status from attribute and set to state.
//         setStatus(script.getAttribute("data-status"));
//       }
//       // Script event handler to update status in state
//       // Note: Even if the script already exists we still need to add
//       // event handlers to update the state for *this* hook instance.
//       const setStateFromEvent = (event) => {
//         setStatus(event.type === "load" ? "ready" : "error");
//       };
//       // Add event listeners
//       script.addEventListener("load", setStateFromEvent);
//       script.addEventListener("error", setStateFromEvent);
//       // Remove event listeners on cleanup
//       return () => {
//         if (script) {
//           script.removeEventListener("load", setStateFromEvent);
//           script.removeEventListener("error", setStateFromEvent);
//         }
//       };
//     },
//     [src] // Only re-run effect if script src changes
//   );
//   return status;
// }

export default BlogPost;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`;
