function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,p=function(){return l.Date.now()};function g(e,t,n){var r,i,o,a,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function T(e){return c=e,u=setTimeout(j,t),l?y(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function j(){var e=p();if(h(e))return S(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?d(n,o-(e-c)):n}(e))}function S(e){return u=void 0,g&&r?y(e):(r=i=void 0,a)}function w(){var e=p(),n=h(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return T(f);if(s)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=b(t)||0,v(n)&&(l=!!n.leading,o=(s="maxWait"in n)?m(b(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=i=u=void 0},w.flush=function(){return void 0===u?a:S(p())},w}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const y={inputForm:document.querySelector(".feedback-form"),inputEmail:document.querySelector('.feedback-form [name="email"]'),inputText:document.querySelector('.feedback-form [name="message"]')};let T={};y.inputForm.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),y.inputForm.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),function(){const e=localStorage.getItem("feedback-form-state");if(!e)return;try{T=JSON.parse(e)}catch(e){console.log("Parsing error: ",e.message)}y.inputEmail.value=T.email?T.email:"",y.inputText.value=T.message?T.message:""}();
//# sourceMappingURL=03-feedback.469e8cab.js.map
