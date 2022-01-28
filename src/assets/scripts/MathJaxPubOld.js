{/* <script type="text/javascript">
  MathJax.Hub.Config({
      inlineMath: [['$', '$'] ],
      displayMath: [['$$', '$$'] ],
      processEscapes: true,
      processEnvironments: true,
      skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
      jax: ["input/TeX","input/MathML","input/AsciiMath","output/CommonHTML"],
      extensions: ["tex2jax.js","mml2jax.js","asciimath2jax.js","MathMenu.js","MathZoom.js","AssistiveMML.js", "a11y/accessibility-menu.js"],
      TeX: {
        extensions: ["AMSmath.js","AMSsymbols.js","noErrors.js","noUndefined.js"]
      }
  });
</script> */}
// window.MathJax = {
//   tex: {
//     inlineMath: [['$', '$'], ['\\(', '\\)']]
//   },
//   svg: {
//     fontCache: 'global'
//   }
// };
window.MathJax = {
  tex2jax: {
    inlineMath: [['$', '$'] ],
    displayMath: [['$$', '$$'] ],
    processEscapes: true,
    processEnvironments: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    TeX: {
      equationNumbers: {autoNumber: 'AMS'},
      extensions: ['AMSmath.js', 'AMSsymbols.js', 'color.js'],
    },
  }
};

(function () {
  var script = document.createElement('script');
  // script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
  // script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js';
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML'
  script.async = true;
  document.head.appendChild(script);
})();