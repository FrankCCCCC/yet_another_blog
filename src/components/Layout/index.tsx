import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { motion, AnimatePresence } from 'framer-motion';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Newsletter from 'components/Newsletter';

import 'assets/styles/global.css';
import GlobalStyles from 'assets/styles/globalStyles';
import * as Styled from './styles';

import useScript from 'components/hook/useScript'

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  // const MathJaxConfig = `
  //   window.MathJax = {
  //     tex2jax: {
  //       inlineMath: [['$', '$'] ],
  //       displayMath: [['$$', '$$'] ],
  //       processEscapes: true,
  //       processEnvironments: true,
  //       skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
  //       TeX: {
  //         equationNumbers: {autoNumber: 'AMS'},
  //         extensions: ['AMSmath.js', 'AMSsymbols.js', 'color.js'],
  //       },
  //     }
  //   };
  //   `;
  
  // const url = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"
  // useScript(url)

  return (
    <html>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Styled.Layout>
          <Header siteTitle={data.site.siteMetadata.title} />
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            {children}
            <Newsletter />
            <Footer />
          </motion.div>
        </Styled.Layout>
      </AnimatePresence>
    </html>
  );
};

export default Layout;
