(function(window){var svgSprite='<svg><symbol id="icon-03f" viewBox="0 0 1024 1024"><path d="M1003.442802 167.945013c-9.960863-11.328-23.089881-17.323551-37.997406-17.323551l-752.437048 0C202.701608 92.595908 150.935618 47.89073 91.855034 47.89073L24.385387 47.89073c-12.900821 0-23.340591 10.43977-23.340591 23.340591s10.43977 23.340591 23.340591 23.340591l67.469648 0c38.08848 0 71.549569 29.860075 76.381621 69.156056l33.232892 191.808514 58.921971 414.867776c3.418866 28.514427 28.560476 51.696406 56.04955 51.696406l609.366561 0c12.900821 0 23.340591-10.43977 23.340591-23.340591 0-12.900821-10.43977-23.340591-23.340591-23.340591L316.441069 775.419482c-3.327792 0-9.003048-4.740978-9.756201-11.07729l-11.478426-80.802304 112.454188-9.484002 485.847363-35.877115c31.888268-0.182149 59.833737-24.52558 63.434751-54.248531l62.751183-359.251084C1022.202051 203.822129 1015.95579 182.054359 1003.442802 167.945013z"  ></path><path d="M849.442382 894.790196c-34.740222 0-63.005986 28.265764-63.005986 63.001893 0 34.716686 28.28009 62.977333 63.005986 62.977333 34.69622 0 62.972217-28.266787 62.972217-62.977333C912.414599 923.05596 884.152928 894.790196 849.442382 894.790196z"  ></path><path d="M355.396289 894.790196c-34.740222 0-63.004963 28.265764-63.004963 63.001893 0 34.716686 28.28009 62.977333 63.004963 62.977333 34.69622 0 62.972217-28.266787 62.972217-62.977333C418.368506 923.05596 390.108882 894.790196 355.396289 894.790196z"  ></path></symbol><symbol id="icon-shouji" viewBox="0 0 1024 1024"><path d="M716.798 0.006H307.202c-79.049 0-143.358 64.309-143.358 143.358v737.271c0 79.049 64.309 143.357 143.358 143.357h409.596c79.049 0 143.357-64.309 143.357-143.357V143.364C860.155 64.315 795.847 0.006 716.798 0.006z m61.438 880.63c0 33.879-27.56 61.438-61.438 61.438H307.202c-33.879 0-61.438-27.56-61.438-61.438V143.364c0-33.879 27.56-61.439 61.438-61.439h409.596c33.879 0 61.438 27.56 61.438 61.439v737.272z" fill="#040000" ></path><path d="M378.882 133.125h266.236v81.919H378.882z" fill="#040000" ></path><path d="M512 839.676m-51.199 0a51.199 51.199 0 1 0 102.398 0 51.199 51.199 0 1 0-102.398 0Z" fill="#040000" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)