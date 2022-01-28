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
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML'
    script.async = true;
    document.head.appendChild(script);
  })();