(()=>{function e(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,f=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){f=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(f)throw i}}}}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function t(){var n=document.getElementsByClassName("feed__container")[0];n&&(o(n),r(n)),function(n){new MutationObserver((function(n){var t,i=e(n);try{for(i.s();!(t=i.n()).done;){var l=t.value;if(l.addedNodes.length>0){var f=a(l.addedNodes);f&&(o(f),r(f))}}}catch(e){i.e(e)}finally{i.f()}})).observe(n,{childList:!0})}(document.getElementById("page_wrapper"))}function r(n){new MutationObserver((function(n){var t,r=e(n);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(a.addedNodes.length>0){var o,l=e(a.addedNodes[0].children);try{for(l.s();!(o=l.n()).done;){i(o.value)}}catch(e){l.e(e)}finally{l.f()}}}}catch(e){r.e(e)}finally{r.f()}})).observe(n,{childList:!0})}function a(n){var t,r=null,a=e(n);try{for(a.s();!(t=a.n()).done;){var o=t.value;"DIV"===o.tagName&&(r=o.getElementsByClassName("feed__container")[0])}}catch(e){a.e(e)}finally{a.f()}return r}function o(n){var t,r=e(n.children);try{for(r.s();!(t=r.n()).done;){var a,o=e(t.value.children);try{for(o.s();!(a=o.n()).done;){i(a.value)}}catch(e){o.e(e)}finally{o.f()}}}catch(e){r.e(e)}finally{r.f()}}function i(n){var t,r=e(n.getElementsByClassName("content-image"));try{for(r.s();!(t=r.n()).done;){var a=t.value;a.classList.contains("content-image--thin_feed")&&0===a.getElementsByClassName("andropov_video").length&&(l(a),f(a))}}catch(e){r.e(e)}finally{r.f()}}function l(e){e.classList.remove("content-image--thin_feed"),e.getElementsByClassName("andropov_image")[0].setAttribute("style","")}function f(n){var t=n.getElementsByClassName("andropov_image__inner")[0];new MutationObserver((function(n,t){var r,a=e(n);try{for(a.s();!(r=a.n()).done;){var o=r.value;if(o.addedNodes.length>0){var i,l=e(o.addedNodes);try{for(l.s();!(i=l.n()).done;){var f=i.value;if("IMG"===f.tagName){f.setAttribute("src",f.src.replace(/\/preview\/\d{1,3}\//,"/preview/800/")),t.disconnect()}}}catch(e){l.e(e)}finally{l.f()}}}}catch(e){a.e(e)}finally{a.f()}})).observe(t,{childList:!0})}t()})();