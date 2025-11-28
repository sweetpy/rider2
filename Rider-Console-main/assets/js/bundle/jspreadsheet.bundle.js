if(!jSuites&&"function"==typeof require)var jSuites=require("jsuites");!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.jspreadsheet=t():e.jspreadsheet=t()}(self,(function(){return function(){var __webpack_modules__={243:function(e){var t;e.exports=(function(){var e={765:function(e,t){var o;o=function(e){e.version="1.0.2";var t=Math;function o(e,t){for(var o=0,n=0;o<e.length;++o)n=t*n+e[o];return n}function n(e,t,o,n,r){if(0===t)return o;if(1===t)return n;for(var l=2/e,i=n,s=1;s<t;++s)i=n*s*l+r*o,o=n,n=i;return i}function r(e,t,o,r,l){return function(o,i){if(r){if(0===o)return 1==r?-1/0:1/0;if(o<0)return NaN}return 0===i?e(o):1===i?t(o):i<0?NaN:n(o,i|=0,e(o),t(o),l)}}var l,i,s,a,u,c,f,d,p,b,j,h,g,m=function(){var e=.636619772,r=[57568490574,-13362590354,651619640.7,-11214424.18,77392.33017,-184.9052456].reverse(),l=[57568490411,1029532985,9494680.718,59272.64853,267.8532712,1].reverse(),i=[1,-.001098628627,2734510407e-14,-2073370639e-15,2.093887211e-7].reverse(),s=[-.01562499995,.0001430488765,-6911147651e-15,7.621095161e-7,-9.34935152e-8].reverse();function a(n){var a=0,u=0,c=0,f=n*n;if(n<8)a=(u=o(r,f))/(c=o(l,f));else{var d=n-.785398164;u=o(i,f=64/f),c=o(s,f),a=t.sqrt(e/n)*(t.cos(d)*u-t.sin(d)*c*8/n)}return a}var u=[72362614232,-7895059235,242396853.1,-2972611.439,15704.4826,-30.16036606].reverse(),c=[144725228442,2300535178,18583304.74,99447.43394,376.9991397,1].reverse(),f=[1,.00183105,-3516396496e-14,2457520174e-15,-2.40337019e-7].reverse(),d=[.04687499995,-.0002002690873,8449199096e-15,-8.8228987e-7,1.05787412e-7].reverse();function p(n){var r=0,l=0,i=0,s=n*n,a=t.abs(n)-2.356194491;return Math.abs(n)<8?r=(l=n*o(u,s))/(i=o(c,s)):(l=o(f,s=64/s),i=o(d,s),r=t.sqrt(e/t.abs(n))*(t.cos(a)*l-t.sin(a)*i*8/t.abs(n)),n<0&&(r=-r)),r}return function e(o,r){if(r=Math.round(r),!isFinite(o))return isNaN(o)?o:0;if(r<0)return(r%2?-1:1)*e(o,-r);if(o<0)return(r%2?-1:1)*e(-o,r);if(0===r)return a(o);if(1===r)return p(o);if(0===o)return 0;var l=0;if(o>r)l=n(o,r,a(o),p(o),-1);else{for(var i=!1,s=0,u=0,c=1,f=0,d=2/o,b=2*t.floor((r+t.floor(t.sqrt(40*r)))/2);b>0;b--)f=b*d*c-s,s=c,c=f,t.abs(c)>1e10&&(c*=1e-10,s*=1e-10,l*=1e-10,u*=1e-10),i&&(u+=c),i=!i,b==r&&(l=s);l/=u=2*u-c}return l}}(),v=(l=.636619772,i=[-2957821389,7062834065,-512359803.6,10879881.29,-86327.92757,228.4622733].reverse(),s=[40076544269,745249964.8,7189466.438,47447.2647,226.1030244,1].reverse(),a=[1,-.001098628627,2734510407e-14,-2073370639e-15,2.093887211e-7].reverse(),u=[-.01562499995,.0001430488765,-6911147651e-15,7.621095161e-7,-9.34945152e-8].reverse(),c=[-4900604943e3,127527439e4,-51534381390,734926455.1,-4237922.726,8511.937935].reverse(),f=[249958057e5,424441966400,3733650367,22459040.02,102042.605,354.9632885,1].reverse(),d=[1,.00183105,-3516396496e-14,2457520174e-15,-2.40337019e-7].reverse(),p=[.04687499995,-.0002002690873,8449199096e-15,-8.8228987e-7,1.05787412e-7].reverse(),r((function(e){var n=0,r=0,c=0,f=e*e,d=e-.785398164;return e<8?n=(r=o(i,f))/(c=o(s,f))+l*m(e,0)*t.log(e):(r=o(a,f=64/f),c=o(u,f),n=t.sqrt(l/e)*(t.sin(d)*r+t.cos(d)*c*8/e)),n}),(function(e){var n=0,r=0,i=0,s=e*e,a=e-2.356194491;return e<8?n=(r=e*o(c,s))/(i=o(f,s))+l*(m(e,1)*t.log(e)-1/e):(r=o(d,s=64/s),i=o(p,s),n=t.sqrt(l/e)*(t.sin(a)*r+t.cos(a)*i*8/e)),n}),0,1,-1)),y=(b=[1,3.5156229,3.0899424,1.2067492,.2659732,.0360768,.0045813].reverse(),j=[.39894228,.01328592,.00225319,-.00157565,.00916281,-.02057706,.02635537,-.01647633,.00392377].reverse(),h=[.5,.87890594,.51498869,.15084934,.02658733,.00301532,32411e-8].reverse(),g=[.39894228,-.03988024,-.00362018,.00163801,-.01031555,.02282967,-.02895312,.01787654,-.00420059].reverse(),function e(n,r){if(0===(r=Math.round(r)))return function(e){return e<=3.75?o(b,e*e/14.0625):t.exp(t.abs(e))/t.sqrt(t.abs(e))*o(j,3.75/t.abs(e))}(n);if(1===r)return function(e){return e<3.75?e*o(h,e*e/14.0625):(e<0?-1:1)*t.exp(t.abs(e))/t.sqrt(t.abs(e))*o(g,3.75/t.abs(e))}(n);if(r<0)return NaN;if(0===t.abs(n))return 0;if(n==1/0)return 1/0;var l,i=0,s=2/t.abs(n),a=0,u=1,c=0;for(l=2*t.round((r+t.round(t.sqrt(40*r)))/2);l>0;l--)c=l*s*u+a,a=u,u=c,t.abs(u)>1e10&&(u*=1e-10,a*=1e-10,i*=1e-10),l==r&&(i=a);return i*=e(n,0)/u,n<0&&r%2?-i:i}),C=function(){var e=[-.57721566,.4227842,.23069756,.0348859,.00262698,1075e-7,74e-7].reverse(),n=[1.25331414,-.07832358,.02189568,-.01062446,.00587872,-.0025154,53208e-8].reverse(),l=[1,.15443144,-.67278579,-.18156897,-.01919402,-.00110404,-4686e-8].reverse(),i=[1.25331414,.23498619,-.0365562,.01504268,-.00780353,.00325614,-68245e-8].reverse();return r((function(r){return r<=2?-t.log(r/2)*y(r,0)+o(e,r*r/4):t.exp(-r)/t.sqrt(r)*o(n,2/r)}),(function(e){return e<=2?t.log(e/2)*y(e,1)+1/e*o(l,e*e/4):t.exp(-e)/t.sqrt(e)*o(i,2/e)}),0,2,1)}();e.besselj=m,e.bessely=v,e.besseli=y,e.besselk=C},"undefined"==typeof DO_NOT_EXPORT_BESSEL?o(t):o({})},162:function(e){var t;e.exports=(t=function(e,t){var o=Array.prototype.concat,n=Array.prototype.slice,r=Object.prototype.toString;function l(t,o){var n=t>o?t:o;return e.pow(10,17-~~(e.log(n>0?n:-n)*e.LOG10E))}var i=Array.isArray||function(e){return"[object Array]"===r.call(e)};function s(e){return"[object Function]"===r.call(e)}function a(e){return"number"==typeof e&&e-e==0}function u(){return new u._init(arguments)}function c(){return 0}function f(){return 1}function d(e,t){return e===t?1:0}u.fn=u.prototype,u._init=function(e){if(i(e[0]))if(i(e[0][0])){s(e[1])&&(e[0]=u.map(e[0],e[1]));for(var t=0;t<e[0].length;t++)this[t]=e[0][t];this.length=e[0].length}else this[0]=s(e[1])?u.map(e[0],e[1]):e[0],this.length=1;else if(a(e[0]))this[0]=u.seq.apply(null,e),this.length=1;else{if(e[0]instanceof u)return u(e[0].toArray());this[0]=[],this.length=1}return this},u._init.prototype=u.prototype,u._init.constructor=u,u.utils={calcRdx:l,isArray:i,isFunction:s,isNumber:a,toVector:function(e){return o.apply([],e)}},u._random_fn=e.random,u.setRandom=function(e){if("function"!=typeof e)throw new TypeError("fn is not a function");u._random_fn=e},u.extend=function(e){var t,o;if(1===arguments.length){for(o in e)u[o]=e[o];return this}for(t=1;t<arguments.length;t++)for(o in arguments[t])e[o]=arguments[t][o];return e},u.rows=function(e){return e.length||1},u.cols=function(e){return e[0].length||1},u.dimensions=function(e){return{rows:u.rows(e),cols:u.cols(e)}},u.row=function(e,t){return i(t)?t.map((function(t){return u.row(e,t)})):e[t]},u.rowa=function(e,t){return u.row(e,t)},u.col=function(e,t){if(i(t)){var o=u.arange(e.length).map((function(){return new Array(t.length)}));return t.forEach((function(t,n){u.arange(e.length).forEach((function(r){o[r][n]=e[r][t]}))})),o}for(var n=new Array(e.length),r=0;r<e.length;r++)n[r]=[e[r][t]];return n},u.cola=function(e,t){return u.col(e,t).map((function(e){return e[0]}))},u.diag=function(e){for(var t=u.rows(e),o=new Array(t),n=0;n<t;n++)o[n]=[e[n][n]];return o},u.antidiag=function(e){for(var t=u.rows(e)-1,o=new Array(t),n=0;t>=0;t--,n++)o[n]=[e[n][t]];return o},u.transpose=function(e){var t,o,n,r,l,s=[];for(i(e[0])||(e=[e]),o=e.length,n=e[0].length,l=0;l<n;l++){for(t=new Array(o),r=0;r<o;r++)t[r]=e[r][l];s.push(t)}return 1===s.length?s[0]:s},u.map=function(e,t,o){var n,r,l,s,a;for(i(e[0])||(e=[e]),r=e.length,l=e[0].length,s=o?e:new Array(r),n=0;n<r;n++)for(s[n]||(s[n]=new Array(l)),a=0;a<l;a++)s[n][a]=t(e[n][a],n,a);return 1===s.length?s[0]:s},u.cumreduce=function(e,t,o){var n,r,l,s,a;for(i(e[0])||(e=[e]),r=e.length,l=e[0].length,s=o?e:new Array(r),n=0;n<r;n++)for(s[n]||(s[n]=new Array(l)),l>0&&(s[n][0]=e[n][0]),a=1;a<l;a++)s[n][a]=t(s[n][a-1],e[n][a]);return 1===s.length?s[0]:s},u.alter=function(e,t){return u.map(e,t,!0)},u.create=function(e,t,o){var n,r,l=new Array(e);for(s(t)&&(o=t,t=e),n=0;n<e;n++)for(l[n]=new Array(t),r=0;r<t;r++)l[n][r]=o(n,r);return l},u.zeros=function(e,t){return a(t)||(t=e),u.create(e,t,c)},u.ones=function(e,t){return a(t)||(t=e),u.create(e,t,f)},u.rand=function(e,t){return a(t)||(t=e),u.create(e,t,u._random_fn)},u.identity=function(e,t){return a(t)||(t=e),u.create(e,t,d)},u.symmetric=function(e){var t,o,n=e.length;if(e.length!==e[0].length)return!1;for(t=0;t<n;t++)for(o=0;o<n;o++)if(e[o][t]!==e[t][o])return!1;return!0},u.clear=function(e){return u.alter(e,c)},u.seq=function(e,t,o,n){s(n)||(n=!1);var r,i=[],a=l(e,t),u=(t*a-e*a)/((o-1)*a),c=e;for(r=0;c<=t&&r<o;c=(e*a+u*a*++r)/a)i.push(n?n(c,r):c);return i},u.arange=function(e,o,n){var r,l=[];if(n=n||1,o===t&&(o=e,e=0),e===o||0===n)return[];if(e<o&&n<0)return[];if(e>o&&n>0)return[];if(n>0)for(r=e;r<o;r+=n)l.push(r);else for(r=e;r>o;r+=n)l.push(r);return l},u.slice=function(){function e(e,o,n,r){var l,i=[],s=e.length;if(o===t&&n===t&&r===t)return u.copy(e);if(r=r||1,(o=(o=o||0)>=0?o:s+o)===(n=(n=n||e.length)>=0?n:s+n)||0===r)return[];if(o<n&&r<0)return[];if(o>n&&r>0)return[];if(r>0)for(l=o;l<n;l+=r)i.push(e[l]);else for(l=o;l>n;l+=r)i.push(e[l]);return i}return function(t,o){var n,r;return a((o=o||{}).row)?a(o.col)?t[o.row][o.col]:e(u.rowa(t,o.row),(n=o.col||{}).start,n.end,n.step):a(o.col)?e(u.cola(t,o.col),(r=o.row||{}).start,r.end,r.step):(r=o.row||{},n=o.col||{},e(t,r.start,r.end,r.step).map((function(t){return e(t,n.start,n.end,n.step)})))}}(),u.sliceAssign=function(o,n,r){var l,i;if(a(n.row)){if(a(n.col))return o[n.row][n.col]=r;n.col=n.col||{},n.col.start=n.col.start||0,n.col.end=n.col.end||o[0].length,n.col.step=n.col.step||1,l=u.arange(n.col.start,e.min(o.length,n.col.end),n.col.step);var s=n.row;return l.forEach((function(e,t){o[s][e]=r[t]})),o}if(a(n.col)){n.row=n.row||{},n.row.start=n.row.start||0,n.row.end=n.row.end||o.length,n.row.step=n.row.step||1,i=u.arange(n.row.start,e.min(o[0].length,n.row.end),n.row.step);var c=n.col;return i.forEach((function(e,t){o[e][c]=r[t]})),o}return r[0].length===t&&(r=[r]),n.row.start=n.row.start||0,n.row.end=n.row.end||o.length,n.row.step=n.row.step||1,n.col.start=n.col.start||0,n.col.end=n.col.end||o[0].length,n.col.step=n.col.step||1,i=u.arange(n.row.start,e.min(o.length,n.row.end),n.row.step),l=u.arange(n.col.start,e.min(o[0].length,n.col.end),n.col.step),i.forEach((function(e,t){l.forEach((function(n,l){o[e][n]=r[t][l]}))})),o},u.diagonal=function(e){var t=u.zeros(e.length,e.length);return e.forEach((function(e,o){t[o][o]=e})),t},u.copy=function(e){return e.map((function(e){return a(e)?e:e.map((function(e){return e}))}))};var p=u.prototype;return p.length=0,p.push=Array.prototype.push,p.sort=Array.prototype.sort,p.splice=Array.prototype.splice,p.slice=Array.prototype.slice,p.toArray=function(){return this.length>1?n.call(this):n.call(this)[0]},p.map=function(e,t){return u(u.map(this,e,t))},p.cumreduce=function(e,t){return u(u.cumreduce(this,e,t))},p.alter=function(e){return u.alter(this,e),this},function(e){for(var t=0;t<e.length;t++)!function(e){p[e]=function(t){var o,n=this;return t?(setTimeout((function(){t.call(n,p[e].call(n))})),this):(o=u[e](this),i(o)?u(o):o)}}(e[t])}("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),function(e){for(var t=0;t<e.length;t++)!function(e){p[e]=function(t,o){var n=this;return o?(setTimeout((function(){o.call(n,p[e].call(n,t))})),this):u(u[e](this,t))}}(e[t])}("row col".split(" ")),function(e){for(var t=0;t<e.length;t++)!function(e){p[e]=function(){return u(u[e].apply(null,arguments))}}(e[t])}("create zeros ones rand identity".split(" ")),u}(Math),function(e,t){var o=e.utils.isFunction;function n(e,t){return e-t}function r(e,o,n){return t.max(o,t.min(e,n))}e.sum=function(e){for(var t=0,o=e.length;--o>=0;)t+=e[o];return t},e.sumsqrd=function(e){for(var t=0,o=e.length;--o>=0;)t+=e[o]*e[o];return t},e.sumsqerr=function(t){for(var o,n=e.mean(t),r=0,l=t.length;--l>=0;)r+=(o=t[l]-n)*o;return r},e.sumrow=function(e){for(var t=0,o=e.length;--o>=0;)t+=e[o];return t},e.product=function(e){for(var t=1,o=e.length;--o>=0;)t*=e[o];return t},e.min=function(e){for(var t=e[0],o=0;++o<e.length;)e[o]<t&&(t=e[o]);return t},e.max=function(e){for(var t=e[0],o=0;++o<e.length;)e[o]>t&&(t=e[o]);return t},e.unique=function(e){for(var t={},o=[],n=0;n<e.length;n++)t[e[n]]||(t[e[n]]=!0,o.push(e[n]));return o},e.mean=function(t){return e.sum(t)/t.length},e.meansqerr=function(t){return e.sumsqerr(t)/t.length},e.geomean=function(o){var n=o.map(t.log),r=e.mean(n);return t.exp(r)},e.median=function(e){var t=e.length,o=e.slice().sort(n);return 1&t?o[t/2|0]:(o[t/2-1]+o[t/2])/2},e.cumsum=function(t){return e.cumreduce(t,(function(e,t){return e+t}))},e.cumprod=function(t){return e.cumreduce(t,(function(e,t){return e*t}))},e.diff=function(e){var t,o=[],n=e.length;for(t=1;t<n;t++)o.push(e[t]-e[t-1]);return o},e.rank=function(e){var t,o=[],r={};for(t=0;t<e.length;t++)r[a=e[t]]?r[a]++:(r[a]=1,o.push(a));var l=o.sort(n),i={},s=1;for(t=0;t<l.length;t++){var a,u=r[a=l[t]],c=(s+(s+u-1))/2;i[a]=c,s+=u}return e.map((function(e){return i[e]}))},e.mode=function(e){var t,o=e.length,r=e.slice().sort(n),l=1,i=0,s=0,a=[];for(t=0;t<o;t++)r[t]===r[t+1]?l++:(l>i?(a=[r[t]],i=l,s=0):l===i&&(a.push(r[t]),s++),l=1);return 0===s?a[0]:a},e.range=function(t){return e.max(t)-e.min(t)},e.variance=function(t,o){return e.sumsqerr(t)/(t.length-(o?1:0))},e.pooledvariance=function(t){return t.reduce((function(t,o){return t+e.sumsqerr(o)}),0)/(t.reduce((function(e,t){return e+t.length}),0)-t.length)},e.deviation=function(t){for(var o=e.mean(t),n=t.length,r=new Array(n),l=0;l<n;l++)r[l]=t[l]-o;return r},e.stdev=function(o,n){return t.sqrt(e.variance(o,n))},e.pooledstdev=function(o){return t.sqrt(e.pooledvariance(o))},e.meandev=function(o){for(var n=e.mean(o),r=[],l=o.length-1;l>=0;l--)r.push(t.abs(o[l]-n));return e.mean(r)},e.meddev=function(o){for(var n=e.median(o),r=[],l=o.length-1;l>=0;l--)r.push(t.abs(o[l]-n));return e.median(r)},e.coeffvar=function(t){return e.stdev(t)/e.mean(t)},e.quartiles=function(e){var o=e.length,r=e.slice().sort(n);return[r[t.round(o/4)-1],r[t.round(o/2)-1],r[t.round(3*o/4)-1]]},e.quantiles=function(e,o,l,i){var s,a,u,c,f,d=e.slice().sort(n),p=[o.length],b=e.length;for(void 0===l&&(l=3/8),void 0===i&&(i=3/8),s=0;s<o.length;s++)u=b*(a=o[s])+(l+a*(1-l-i)),c=t.floor(r(u,1,b-1)),f=r(u-c,0,1),p[s]=(1-f)*d[c-1]+f*d[c];return p},e.percentile=function(e,t,o){var r=e.slice().sort(n),l=t*(r.length+(o?1:-1))+(o?0:1),i=parseInt(l),s=l-i;return i+1<r.length?r[i-1]+s*(r[i]-r[i-1]):r[i-1]},e.percentileOfScore=function(e,t,o){var n,r,l=0,i=e.length,s=!1;for("strict"===o&&(s=!0),r=0;r<i;r++)n=e[r],(s&&n<t||!s&&n<=t)&&l++;return l/i},e.histogram=function(o,n){n=n||4;var r,l=e.min(o),i=(e.max(o)-l)/n,s=o.length,a=[];for(r=0;r<n;r++)a[r]=0;for(r=0;r<s;r++)a[t.min(t.floor((o[r]-l)/i),n-1)]+=1;return a},e.covariance=function(t,o){var n,r=e.mean(t),l=e.mean(o),i=t.length,s=new Array(i);for(n=0;n<i;n++)s[n]=(t[n]-r)*(o[n]-l);return e.sum(s)/(i-1)},e.corrcoeff=function(t,o){return e.covariance(t,o)/e.stdev(t,1)/e.stdev(o,1)},e.spearmancoeff=function(t,o){return t=e.rank(t),o=e.rank(o),e.corrcoeff(t,o)},e.stanMoment=function(o,n){for(var r=e.mean(o),l=e.stdev(o),i=o.length,s=0,a=0;a<i;a++)s+=t.pow((o[a]-r)/l,n);return s/o.length},e.skewness=function(t){return e.stanMoment(t,3)},e.kurtosis=function(t){return e.stanMoment(t,4)-3};var l=e.prototype;!function(t){for(var n=0;n<t.length;n++)!function(t){l[t]=function(n,r){var i=[],s=0,a=this;if(o(n)&&(r=n,n=!1),r)return setTimeout((function(){r.call(a,l[t].call(a,n))})),this;if(this.length>1){for(a=!0===n?this:this.transpose();s<a.length;s++)i[s]=e[t](a[s]);return i}return e[t](this[0],n)}}(t[n])}("cumsum cumprod".split(" ")),function(t){for(var n=0;n<t.length;n++)!function(t){l[t]=function(n,r){var i=[],s=0,a=this;if(o(n)&&(r=n,n=!1),r)return setTimeout((function(){r.call(a,l[t].call(a,n))})),this;if(this.length>1){for("sumrow"!==t&&(a=!0===n?this:this.transpose());s<a.length;s++)i[s]=e[t](a[s]);return!0===n?e[t](e.utils.toVector(i)):i}return e[t](this[0],n)}}(t[n])}("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),function(t){for(var n=0;n<t.length;n++)!function(t){l[t]=function(){var n,r=[],i=0,s=this,a=Array.prototype.slice.call(arguments);if(o(a[a.length-1])){n=a[a.length-1];var u=a.slice(0,a.length-1);return setTimeout((function(){n.call(s,l[t].apply(s,u))})),this}n=void 0;var c=function(o){return e[t].apply(s,[o].concat(a))};if(this.length>1){for(s=s.transpose();i<s.length;i++)r[i]=c(s[i]);return r}return c(this[0])}}(t[n])}("quantiles percentileOfScore".split(" "))}(t,Math),function(e,t){e.gammaln=function(e){var o,n,r,l=0,i=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],s=1.000000000190015;for(r=(n=o=e)+5.5,r-=(o+.5)*t.log(r);l<6;l++)s+=i[l]/++n;return t.log(2.5066282746310007*s/o)-r},e.loggam=function(e){var o,n,r,l,i,s,a,u=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(o=e,a=0,1==e||2==e)return 0;for(e<=7&&(o=e+(a=t.floor(7-e))),n=1/(o*o),r=2*t.PI,i=u[9],s=8;s>=0;s--)i*=n,i+=u[s];if(l=i/o+.5*t.log(r)+(o-.5)*t.log(o)-o,e<=7)for(s=1;s<=a;s++)l-=t.log(o-1),o-=1;return l},e.gammafn=function(e){var o,n,r,l,i=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],s=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],a=!1,u=0,c=0,f=0,d=e;if(e>171.6243769536076)return 1/0;if(d<=0){if(!(l=d%1+36e-17))return 1/0;a=(1&d?-1:1)*t.PI/t.sin(t.PI*l),d=1-d}for(r=d,n=d<1?d++:(d-=u=(0|d)-1)-1,o=0;o<8;++o)f=(f+i[o])*n,c=c*n+s[o];if(l=f/c+1,r<d)l/=r;else if(r>d)for(o=0;o<u;++o)l*=d,d++;return a&&(l=a/l),l},e.gammap=function(t,o){return e.lowRegGamma(t,o)*e.gammafn(t)},e.lowRegGamma=function(o,n){var r,l=e.gammaln(o),i=o,s=1/o,a=s,u=n+1-o,c=1/1e-30,f=1/u,d=f,p=1,b=-~(8.5*t.log(o>=1?o:1/o)+.4*o+17);if(n<0||o<=0)return NaN;if(n<o+1){for(;p<=b;p++)s+=a*=n/++i;return s*t.exp(-n+o*t.log(n)-l)}for(;p<=b;p++)d*=(f=1/(f=(r=-p*(p-o))*f+(u+=2)))*(c=u+r/c);return 1-d*t.exp(-n+o*t.log(n)-l)},e.factorialln=function(t){return t<0?NaN:e.gammaln(t+1)},e.factorial=function(t){return t<0?NaN:e.gammafn(t+1)},e.combination=function(o,n){return o>170||n>170?t.exp(e.combinationln(o,n)):e.factorial(o)/e.factorial(n)/e.factorial(o-n)},e.combinationln=function(t,o){return e.factorialln(t)-e.factorialln(o)-e.factorialln(t-o)},e.permutation=function(t,o){return e.factorial(t)/e.factorial(t-o)},e.betafn=function(o,n){if(!(o<=0||n<=0))return o+n>170?t.exp(e.betaln(o,n)):e.gammafn(o)*e.gammafn(n)/e.gammafn(o+n)},e.betaln=function(t,o){return e.gammaln(t)+e.gammaln(o)-e.gammaln(t+o)},e.betacf=function(e,o,n){var r,l,i,s,a=1e-30,u=1,c=o+n,f=o+1,d=o-1,p=1,b=1-c*e/f;for(t.abs(b)<a&&(b=a),s=b=1/b;u<=100&&(b=1+(l=u*(n-u)*e/((d+(r=2*u))*(o+r)))*b,t.abs(b)<a&&(b=a),p=1+l/p,t.abs(p)<a&&(p=a),s*=(b=1/b)*p,b=1+(l=-(o+u)*(c+u)*e/((o+r)*(f+r)))*b,t.abs(b)<a&&(b=a),p=1+l/p,t.abs(p)<a&&(p=a),s*=i=(b=1/b)*p,!(t.abs(i-1)<3e-7));u++);return s},e.gammapinv=function(o,n){var r,l,i,s,a,u,c=0,f=n-1,d=e.gammaln(n);if(o>=1)return t.max(100,n+100*t.sqrt(n));if(o<=0)return 0;for(n>1?(a=t.log(f),u=t.exp(f*(a-1)-d),s=o<.5?o:1-o,r=(2.30753+.27061*(l=t.sqrt(-2*t.log(s))))/(1+l*(.99229+.04481*l))-l,o<.5&&(r=-r),r=t.max(.001,n*t.pow(1-1/(9*n)-r/(3*t.sqrt(n)),3))):r=o<(l=1-n*(.253+.12*n))?t.pow(o/l,1/n):1-t.log(1-(o-l)/(1-l));c<12;c++){if(r<=0)return 0;if((r-=l=(i=(e.lowRegGamma(n,r)-o)/(l=n>1?u*t.exp(-(r-f)+f*(t.log(r)-a)):t.exp(-r+f*t.log(r)-d)))/(1-.5*t.min(1,i*((n-1)/r-1))))<=0&&(r=.5*(r+l)),t.abs(l)<1e-8*r)break}return r},e.erf=function(e){var o,n,r,l,i=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,1.5626441722e-8,-8.5238095915e-8,6.529054439e-9,5.059343495e-9,-9.91364156e-10,-2.27365122e-10,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],s=i.length-1,a=!1,u=0,c=0;for(e<0&&(e=-e,a=!0),n=4*(o=2/(2+e))-2;s>0;s--)r=u,u=n*u-c+i[s],c=r;return l=o*t.exp(-e*e+.5*(i[0]+n*u)-c),a?l-1:1-l},e.erfc=function(t){return 1-e.erf(t)},e.erfcinv=function(o){var n,r,l,i,s=0;if(o>=2)return-100;if(o<=0)return 100;for(i=o<1?o:2-o,n=-.70711*((2.30753+.27061*(l=t.sqrt(-2*t.log(i/2))))/(1+l*(.99229+.04481*l))-l);s<2;s++)n+=(r=e.erfc(n)-i)/(1.1283791670955126*t.exp(-n*n)-n*r);return o<1?n:-n},e.ibetainv=function(o,n,r){var l,i,s,a,u,c,f,d,p,b,j=n-1,h=r-1,g=0;if(o<=0)return 0;if(o>=1)return 1;for(n>=1&&r>=1?(s=o<.5?o:1-o,c=(2.30753+.27061*(a=t.sqrt(-2*t.log(s))))/(1+a*(.99229+.04481*a))-a,o<.5&&(c=-c),f=(c*c-3)/6,d=2/(1/(2*n-1)+1/(2*r-1)),p=c*t.sqrt(f+d)/d-(1/(2*r-1)-1/(2*n-1))*(f+5/6-2/(3*d)),c=n/(n+r*t.exp(2*p))):(l=t.log(n/(n+r)),i=t.log(r/(n+r)),c=o<(a=t.exp(n*l)/n)/(p=a+(u=t.exp(r*i)/r))?t.pow(n*p*o,1/n):1-t.pow(r*p*(1-o),1/r)),b=-e.gammaln(n)-e.gammaln(r)+e.gammaln(n+r);g<10;g++){if(0===c||1===c)return c;if((c-=a=(u=(e.ibeta(c,n,r)-o)/(a=t.exp(j*t.log(c)+h*t.log(1-c)+b)))/(1-.5*t.min(1,u*(j/c-h/(1-c)))))<=0&&(c=.5*(c+a)),c>=1&&(c=.5*(c+a+1)),t.abs(a)<1e-8*c&&g>0)break}return c},e.ibeta=function(o,n,r){var l=0===o||1===o?0:t.exp(e.gammaln(n+r)-e.gammaln(n)-e.gammaln(r)+n*t.log(o)+r*t.log(1-o));return!(o<0||o>1)&&(o<(n+1)/(n+r+2)?l*e.betacf(o,n,r)/n:1-l*e.betacf(1-o,r,n)/r)},e.randn=function(o,n){var r,l,i,s,a;if(n||(n=o),o)return e.create(o,n,(function(){return e.randn()}));do{r=e._random_fn(),l=1.7156*(e._random_fn()-.5),a=(i=r-.449871)*i+(s=t.abs(l)+.386595)*(.196*s-.25472*i)}while(a>.27597&&(a>.27846||l*l>-4*t.log(r)*r*r));return l/r},e.randg=function(o,n,r){var l,i,s,a,u,c,f=o;if(r||(r=n),o||(o=1),n)return(c=e.zeros(n,r)).alter((function(){return e.randg(o)})),c;o<1&&(o+=1),l=o-1/3,i=1/t.sqrt(9*l);do{do{a=1+i*(u=e.randn())}while(a<=0);a*=a*a,s=e._random_fn()}while(s>1-.331*t.pow(u,4)&&t.log(s)>.5*u*u+l*(1-a+t.log(a)));if(o==f)return l*a;do{s=e._random_fn()}while(0===s);return t.pow(s,1/f)*l*a},function(t){for(var o=0;o<t.length;o++)!function(t){e.fn[t]=function(){return e(e.map(this,(function(o){return e[t](o)})))}}(t[o])}("gammaln gammafn factorial factorialln".split(" ")),function(t){for(var o=0;o<t.length;o++)!function(t){e.fn[t]=function(){return e(e[t].apply(null,arguments))}}(t[o])}("randn".split(" "))}(t,Math),function(e,t){function o(e,o,n,r){for(var l,i=0,s=1,a=1,u=1,c=0,f=0;t.abs((a-f)/a)>r;)f=a,s=u+(l=-(o+c)*(o+n+c)*e/(o+2*c)/(o+2*c+1))*s,a=(i=a+l*i)+(l=(c+=1)*(n-c)*e/(o+2*c-1)/(o+2*c))*a,i/=u=s+l*u,s/=u,a/=u,u=1;return a/o}function n(o,n,r){var l=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],i=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],s=.5*o;if(s>=8)return 1;var a,u=2*e.normal.cdf(s,0,1,1,0)-1;u=u>=t.exp(-50/r)?t.pow(u,r):0;for(var c=s,f=(8-s)/(a=o>3?2:3),d=c+f,p=0,b=r-1,j=1;j<=a;j++){for(var h=0,g=.5*(d+c),m=.5*(d-c),v=1;v<=12;v++){var y,C=g+m*(6<v?l[(y=12-v+1)-1]:-l[(y=v)-1]),x=C*C;if(x>60)break;var w=2*e.normal.cdf(C,0,1,1,0)*.5-2*e.normal.cdf(C,o,1,1,0)*.5;w>=t.exp(-30/b)&&(h+=w=i[y-1]*t.exp(-.5*x)*t.pow(w,b))}p+=h*=2*m*r/t.sqrt(2*t.PI),c=d,d+=f}return(u+=p)<=t.exp(-30/n)?0:(u=t.pow(u,n))>=1?1:u}!function(t){for(var o=0;o<t.length;o++)!function(t){e[t]=function e(t,o,n){return this instanceof e?(this._a=t,this._b=o,this._c=n,this):new e(t,o,n)},e.fn[t]=function(o,n,r){var l=e[t](o,n,r);return l.data=this,l},e[t].prototype.sample=function(o){var n=this._a,r=this._b,l=this._c;return o?e.alter(o,(function(){return e[t].sample(n,r,l)})):e[t].sample(n,r,l)},function(o){for(var n=0;n<o.length;n++)!function(o){e[t].prototype[o]=function(n){var r=this._a,l=this._b,i=this._c;return n||0===n||(n=this.data),"number"!=typeof n?e.fn.map.call(n,(function(n){return e[t][o](n,r,l,i)})):e[t][o](n,r,l,i)}}(o[n])}("pdf cdf inv".split(" ")),function(o){for(var n=0;n<o.length;n++)!function(o){e[t].prototype[o]=function(){return e[t][o](this._a,this._b,this._c)}}(o[n])}("mean median mode variance".split(" "))}(t[o])}("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),e.extend(e.beta,{pdf:function(o,n,r){return o>1||o<0?0:1==n&&1==r?1:n<512&&r<512?t.pow(o,n-1)*t.pow(1-o,r-1)/e.betafn(n,r):t.exp((n-1)*t.log(o)+(r-1)*t.log(1-o)-e.betaln(n,r))},cdf:function(t,o,n){return t>1||t<0?1*(t>1):e.ibeta(t,o,n)},inv:function(t,o,n){return e.ibetainv(t,o,n)},mean:function(e,t){return e/(e+t)},median:function(t,o){return e.ibetainv(.5,t,o)},mode:function(e,t){return(e-1)/(e+t-2)},sample:function(t,o){var n=e.randg(t);return n/(n+e.randg(o))},variance:function(e,o){return e*o/(t.pow(e+o,2)*(e+o+1))}}),e.extend(e.centralF,{pdf:function(o,n,r){var l;return o<0?0:n<=2?0===o&&n<2?1/0:0===o&&2===n?1:1/e.betafn(n/2,r/2)*t.pow(n/r,n/2)*t.pow(o,n/2-1)*t.pow(1+n/r*o,-(n+r)/2):(l=n*o/(r+o*n),n*(r/(r+o*n))/2*e.binomial.pdf((n-2)/2,(n+r-2)/2,l))},cdf:function(t,o,n){return t<0?0:e.ibeta(o*t/(o*t+n),o/2,n/2)},inv:function(t,o,n){return n/(o*(1/e.ibetainv(t,o/2,n/2)-1))},mean:function(e,t){return t>2?t/(t-2):void 0},mode:function(e,t){return e>2?t*(e-2)/(e*(t+2)):void 0},sample:function(t,o){return 2*e.randg(t/2)/t/(2*e.randg(o/2)/o)},variance:function(e,t){if(!(t<=4))return 2*t*t*(e+t-2)/(e*(t-2)*(t-2)*(t-4))}}),e.extend(e.cauchy,{pdf:function(e,o,n){return n<0?0:n/(t.pow(e-o,2)+t.pow(n,2))/t.PI},cdf:function(e,o,n){return t.atan((e-o)/n)/t.PI+.5},inv:function(e,o,n){return o+n*t.tan(t.PI*(e-.5))},median:function(e){return e},mode:function(e){return e},sample:function(o,n){return e.randn()*t.sqrt(1/(2*e.randg(.5)))*n+o}}),e.extend(e.chisquare,{pdf:function(o,n){return o<0?0:0===o&&2===n?.5:t.exp((n/2-1)*t.log(o)-o/2-n/2*t.log(2)-e.gammaln(n/2))},cdf:function(t,o){return t<0?0:e.lowRegGamma(o/2,t/2)},inv:function(t,o){return 2*e.gammapinv(t,.5*o)},mean:function(e){return e},median:function(e){return e*t.pow(1-2/(9*e),3)},mode:function(e){return e-2>0?e-2:0},sample:function(t){return 2*e.randg(t/2)},variance:function(e){return 2*e}}),e.extend(e.exponential,{pdf:function(e,o){return e<0?0:o*t.exp(-o*e)},cdf:function(e,o){return e<0?0:1-t.exp(-o*e)},inv:function(e,o){return-t.log(1-e)/o},mean:function(e){return 1/e},median:function(e){return 1/e*t.log(2)},mode:function(){return 0},sample:function(o){return-1/o*t.log(e._random_fn())},variance:function(e){return t.pow(e,-2)}}),e.extend(e.gamma,{pdf:function(o,n,r){return o<0?0:0===o&&1===n?1/r:t.exp((n-1)*t.log(o)-o/r-e.gammaln(n)-n*t.log(r))},cdf:function(t,o,n){return t<0?0:e.lowRegGamma(o,t/n)},inv:function(t,o,n){return e.gammapinv(t,o)*n},mean:function(e,t){return e*t},mode:function(e,t){if(e>1)return(e-1)*t},sample:function(t,o){return e.randg(t)*o},variance:function(e,t){return e*t*t}}),e.extend(e.invgamma,{pdf:function(o,n,r){return o<=0?0:t.exp(-(n+1)*t.log(o)-r/o-e.gammaln(n)+n*t.log(r))},cdf:function(t,o,n){return t<=0?0:1-e.lowRegGamma(o,n/t)},inv:function(t,o,n){return n/e.gammapinv(1-t,o)},mean:function(e,t){return e>1?t/(e-1):void 0},mode:function(e,t){return t/(e+1)},sample:function(t,o){return o/e.randg(t)},variance:function(e,t){if(!(e<=2))return t*t/((e-1)*(e-1)*(e-2))}}),e.extend(e.kumaraswamy,{pdf:function(e,o,n){return 0===e&&1===o?n:1===e&&1===n?o:t.exp(t.log(o)+t.log(n)+(o-1)*t.log(e)+(n-1)*t.log(1-t.pow(e,o)))},cdf:function(e,o,n){return e<0?0:e>1?1:1-t.pow(1-t.pow(e,o),n)},inv:function(e,o,n){return t.pow(1-t.pow(1-e,1/n),1/o)},mean:function(t,o){return o*e.gammafn(1+1/t)*e.gammafn(o)/e.gammafn(1+1/t+o)},median:function(e,o){return t.pow(1-t.pow(2,-1/o),1/e)},mode:function(e,o){if(e>=1&&o>=1&&1!==e&&1!==o)return t.pow((e-1)/(e*o-1),1/e)},variance:function(){throw new Error("variance not yet implemented")}}),e.extend(e.lognormal,{pdf:function(e,o,n){return e<=0?0:t.exp(-t.log(e)-.5*t.log(2*t.PI)-t.log(n)-t.pow(t.log(e)-o,2)/(2*n*n))},cdf:function(o,n,r){return o<0?0:.5+.5*e.erf((t.log(o)-n)/t.sqrt(2*r*r))},inv:function(o,n,r){return t.exp(-1.4142135623730951*r*e.erfcinv(2*o)+n)},mean:function(e,o){return t.exp(e+o*o/2)},median:function(e){return t.exp(e)},mode:function(e,o){return t.exp(e-o*o)},sample:function(o,n){return t.exp(e.randn()*n+o)},variance:function(e,o){return(t.exp(o*o)-1)*t.exp(2*e+o*o)}}),e.extend(e.noncentralt,{pdf:function(o,n,r){return t.abs(r)<1e-14?e.studentt.pdf(o,n):t.abs(o)<1e-14?t.exp(e.gammaln((n+1)/2)-r*r/2-.5*t.log(t.PI*n)-e.gammaln(n/2)):n/o*(e.noncentralt.cdf(o*t.sqrt(1+2/n),n+2,r)-e.noncentralt.cdf(o,n,r))},cdf:function(o,n,r){var l=1e-14;if(t.abs(r)<l)return e.studentt.cdf(o,n);var i=!1;o<0&&(i=!0,r=-r);for(var s=e.normal.cdf(-r,0,1),a=l+1,u=a,c=o*o/(o*o+n),f=0,d=t.exp(-r*r/2),p=t.exp(-r*r/2-.5*t.log(2)-e.gammaln(1.5))*r;f<200||u>l||a>l;)u=a,f>0&&(d*=r*r/(2*f),p*=r*r/(2*(f+.5))),s+=.5*(a=d*e.beta.cdf(c,f+.5,n/2)+p*e.beta.cdf(c,f+1,n/2)),f++;return i?1-s:s}}),e.extend(e.normal,{pdf:function(e,o,n){return t.exp(-.5*t.log(2*t.PI)-t.log(n)-t.pow(e-o,2)/(2*n*n))},cdf:function(o,n,r){return.5*(1+e.erf((o-n)/t.sqrt(2*r*r)))},inv:function(t,o,n){return-1.4142135623730951*n*e.erfcinv(2*t)+o},mean:function(e){return e},median:function(e){return e},mode:function(e){return e},sample:function(t,o){return e.randn()*o+t},variance:function(e,t){return t*t}}),e.extend(e.pareto,{pdf:function(e,o,n){return e<o?0:n*t.pow(o,n)/t.pow(e,n+1)},cdf:function(e,o,n){return e<o?0:1-t.pow(o/e,n)},inv:function(e,o,n){return o/t.pow(1-e,1/n)},mean:function(e,o){if(!(o<=1))return o*t.pow(e,o)/(o-1)},median:function(e,o){return e*(o*t.SQRT2)},mode:function(e){return e},variance:function(e,o){if(!(o<=2))return e*e*o/(t.pow(o-1,2)*(o-2))}}),e.extend(e.studentt,{pdf:function(o,n){return n=n>1e100?1e100:n,1/(t.sqrt(n)*e.betafn(.5,n/2))*t.pow(1+o*o/n,-(n+1)/2)},cdf:function(o,n){var r=n/2;return e.ibeta((o+t.sqrt(o*o+n))/(2*t.sqrt(o*o+n)),r,r)},inv:function(o,n){var r=e.ibetainv(2*t.min(o,1-o),.5*n,.5);return r=t.sqrt(n*(1-r)/r),o>.5?r:-r},mean:function(e){return e>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(o){return e.randn()*t.sqrt(o/(2*e.randg(o/2)))},variance:function(e){return e>2?e/(e-2):e>1?1/0:void 0}}),e.extend(e.weibull,{pdf:function(e,o,n){return e<0||o<0||n<0?0:n/o*t.pow(e/o,n-1)*t.exp(-t.pow(e/o,n))},cdf:function(e,o,n){return e<0?0:1-t.exp(-t.pow(e/o,n))},inv:function(e,o,n){return o*t.pow(-t.log(1-e),1/n)},mean:function(t,o){return t*e.gammafn(1+1/o)},median:function(e,o){return e*t.pow(t.log(2),1/o)},mode:function(e,o){return o<=1?0:e*t.pow((o-1)/o,1/o)},sample:function(o,n){return o*t.pow(-t.log(e._random_fn()),1/n)},variance:function(o,n){return o*o*e.gammafn(1+2/n)-t.pow(e.weibull.mean(o,n),2)}}),e.extend(e.uniform,{pdf:function(e,t,o){return e<t||e>o?0:1/(o-t)},cdf:function(e,t,o){return e<t?0:e<o?(e-t)/(o-t):1},inv:function(e,t,o){return t+e*(o-t)},mean:function(e,t){return.5*(e+t)},median:function(t,o){return e.mean(t,o)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(t,o){return t/2+o/2+(o/2-t/2)*(2*e._random_fn()-1)},variance:function(e,o){return t.pow(o-e,2)/12}}),e.extend(e.binomial,{pdf:function(o,n,r){return 0===r||1===r?n*r===o?1:0:e.combination(n,o)*t.pow(r,o)*t.pow(1-r,n-o)},cdf:function(n,r,l){var i,s=1e-10;if(n<0)return 0;if(n>=r)return 1;if(l<0||l>1||r<=0)return NaN;var a=l,u=(n=t.floor(n))+1,c=r-n,f=u+c,d=t.exp(e.gammaln(f)-e.gammaln(c)-e.gammaln(u)+u*t.log(a)+c*t.log(1-a));return i=a<(u+1)/(f+2)?d*o(a,u,c,s):1-d*o(1-a,c,u,s),t.round(1/s*(1-i))/(1/s)}}),e.extend(e.negbin,{pdf:function(o,n,r){return o===o>>>0&&(o<0?0:e.combination(o+n-1,n-1)*t.pow(1-r,o)*t.pow(r,n))},cdf:function(t,o,n){var r=0,l=0;if(t<0)return 0;for(;l<=t;l++)r+=e.negbin.pdf(l,o,n);return r}}),e.extend(e.hypgeom,{pdf:function(o,n,r,l){if(o!=o|0)return!1;if(o<0||o<r-(n-l))return 0;if(o>l||o>r)return 0;if(2*r>n)return 2*l>n?e.hypgeom.pdf(n-r-l+o,n,n-r,n-l):e.hypgeom.pdf(l-o,n,n-r,l);if(2*l>n)return e.hypgeom.pdf(r-o,n,r,n-l);if(r<l)return e.hypgeom.pdf(o,n,l,r);for(var i=1,s=0,a=0;a<o;a++){for(;i>1&&s<l;)i*=1-r/(n-s),s++;i*=(l-a)*(r-a)/((a+1)*(n-r-l+a+1))}for(;s<l;s++)i*=1-r/(n-s);return t.min(1,t.max(0,i))},cdf:function(o,n,r,l){if(o<0||o<r-(n-l))return 0;if(o>=l||o>=r)return 1;if(2*r>n)return 2*l>n?e.hypgeom.cdf(n-r-l+o,n,n-r,n-l):1-e.hypgeom.cdf(l-o-1,n,n-r,l);if(2*l>n)return 1-e.hypgeom.cdf(r-o-1,n,r,n-l);if(r<l)return e.hypgeom.cdf(o,n,l,r);for(var i=1,s=1,a=0,u=0;u<o;u++){for(;i>1&&a<l;){var c=1-r/(n-a);s*=c,i*=c,a++}i+=s*=(l-u)*(r-u)/((u+1)*(n-r-l+u+1))}for(;a<l;a++)i*=1-r/(n-a);return t.min(1,t.max(0,i))}}),e.extend(e.poisson,{pdf:function(o,n){return n<0||o%1!=0||o<0?0:t.pow(n,o)*t.exp(-n)/e.factorial(o)},cdf:function(t,o){var n=[],r=0;if(t<0)return 0;for(;r<=t;r++)n.push(e.poisson.pdf(r,o));return e.sum(n)},mean:function(e){return e},variance:function(e){return e},sampleSmall:function(o){var n=1,r=0,l=t.exp(-o);do{r++,n*=e._random_fn()}while(n>l);return r-1},sampleLarge:function(o){var n,r,l,i,s,a,u,c,f,d,p=o;for(i=t.sqrt(p),s=t.log(p),a=.02483*(u=.931+2.53*i)-.059,c=1.1239+1.1328/(u-3.4),f=.9277-3.6224/(u-2);;){if(r=t.random()-.5,l=t.random(),d=.5-t.abs(r),n=t.floor((2*a/d+u)*r+p+.43),d>=.07&&l<=f)return n;if(!(n<0||d<.013&&l>d)&&t.log(l)+t.log(c)-t.log(a/(d*d)+u)<=n*s-p-e.loggam(n+1))return n}},sample:function(e){return e<10?this.sampleSmall(e):this.sampleLarge(e)}}),e.extend(e.triangular,{pdf:function(e,t,o,n){return o<=t||n<t||n>o?NaN:e<t||e>o?0:e<n?2*(e-t)/((o-t)*(n-t)):e===n?2/(o-t):2*(o-e)/((o-t)*(o-n))},cdf:function(e,o,n,r){return n<=o||r<o||r>n?NaN:e<=o?0:e>=n?1:e<=r?t.pow(e-o,2)/((n-o)*(r-o)):1-t.pow(n-e,2)/((n-o)*(n-r))},inv:function(e,o,n,r){return n<=o||r<o||r>n?NaN:e<=(r-o)/(n-o)?o+(n-o)*t.sqrt(e*((r-o)/(n-o))):o+(n-o)*(1-t.sqrt((1-e)*(1-(r-o)/(n-o))))},mean:function(e,t,o){return(e+t+o)/3},median:function(e,o,n){return n<=(e+o)/2?o-t.sqrt((o-e)*(o-n))/t.sqrt(2):n>(e+o)/2?e+t.sqrt((o-e)*(n-e))/t.sqrt(2):void 0},mode:function(e,t,o){return o},sample:function(o,n,r){var l=e._random_fn();return l<(r-o)/(n-o)?o+t.sqrt(l*(n-o)*(r-o)):n-t.sqrt((1-l)*(n-o)*(n-r))},variance:function(e,t,o){return(e*e+t*t+o*o-e*t-e*o-t*o)/18}}),e.extend(e.arcsine,{pdf:function(e,o,n){return n<=o?NaN:e<=o||e>=n?0:2/t.PI*t.pow(t.pow(n-o,2)-t.pow(2*e-o-n,2),-.5)},cdf:function(e,o,n){return e<o?0:e<n?2/t.PI*t.asin(t.sqrt((e-o)/(n-o))):1},inv:function(e,o,n){return o+(.5-.5*t.cos(t.PI*e))*(n-o)},mean:function(e,t){return t<=e?NaN:(e+t)/2},median:function(e,t){return t<=e?NaN:(e+t)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(o,n){return(o+n)/2+(n-o)/2*t.sin(2*t.PI*e.uniform.sample(0,1))},variance:function(e,o){return o<=e?NaN:t.pow(o-e,2)/8}}),e.extend(e.laplace,{pdf:function(e,o,n){return n<=0?0:t.exp(-t.abs(e-o)/n)/(2*n)},cdf:function(e,o,n){return n<=0?0:e<o?.5*t.exp((e-o)/n):1-.5*t.exp(-(e-o)/n)},mean:function(e){return e},median:function(e){return e},mode:function(e){return e},variance:function(e,t){return 2*t*t},sample:function(o,n){var r,l=e._random_fn()-.5;return o-n*((r=l)/t.abs(r))*t.log(1-2*t.abs(l))}}),e.extend(e.tukey,{cdf:function(o,r,l){var i=r,s=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],a=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(o<=0)return 0;if(l<2||i<2)return NaN;if(!Number.isFinite(o))return 1;if(l>25e3)return n(o,1,i);var u,c=.5*l,f=c*t.log(l)-l*t.log(2)-e.gammaln(c),d=c-1,p=.25*l;u=l<=100?1:l<=800?.5:l<=5e3?.25:.125,f+=t.log(u);for(var b=0,j=1;j<=50;j++){for(var h=0,g=(2*j-1)*u,m=1;m<=16;m++){var v,y;8<m?(v=m-8-1,y=f+d*t.log(g+s[v]*u)-(s[v]*u+g)*p):(v=m-1,y=f+d*t.log(g-s[v]*u)+(s[v]*u-g)*p),y>=-30&&(h+=n(8<m?o*t.sqrt(.5*(s[v]*u+g)):o*t.sqrt(.5*(-s[v]*u+g)),1,i)*a[v]*t.exp(y))}if(j*u>=1&&h<=1e-14)break;b+=h}if(h>1e-14)throw new Error("tukey.cdf failed to converge");return b>1&&(b=1),b},inv:function(o,n,r){if(r<2||n<2)return NaN;if(o<0||o>1)return NaN;if(0===o)return 0;if(1===o)return 1/0;var l,i=function(e,o,n){var r=.5-.5*e,l=t.sqrt(t.log(1/(r*r))),i=l+((((-453642210148e-16*l-.204231210125)*l-.342242088547)*l-1)*l+.322232421088)/((((.0038560700634*l+.10353775285)*l+.531103462366)*l+.588581570495)*l+.099348462606);n<120&&(i+=(i*i*i+i)/n/4);var s=.8832-.2368*i;return n<120&&(s+=-1.214/n+1.208*i/n),i*(s*t.log(o-1)+1.4142)}(o,n,r),s=e.tukey.cdf(i,n,r)-o;l=s>0?t.max(0,i-1):i+1;for(var a,u=e.tukey.cdf(l,n,r)-o,c=1;c<50;c++)if(a=l-u*(l-i)/(u-s),s=u,i=l,a<0&&(a=0,u=-o),u=e.tukey.cdf(a,n,r)-o,l=a,t.abs(l-i)<1e-4)return a;throw new Error("tukey.inv failed to converge")}})}(t,Math),function(e,t){var o,n,r=Array.prototype.push,l=e.utils.isArray;function i(t){return l(t)||t instanceof e}e.extend({add:function(t,o){return i(o)?(i(o[0])||(o=[o]),e.map(t,(function(e,t,n){return e+o[t][n]}))):e.map(t,(function(e){return e+o}))},subtract:function(t,o){return i(o)?(i(o[0])||(o=[o]),e.map(t,(function(e,t,n){return e-o[t][n]||0}))):e.map(t,(function(e){return e-o}))},divide:function(t,o){return i(o)?(i(o[0])||(o=[o]),e.multiply(t,e.inv(o))):e.map(t,(function(e){return e/o}))},multiply:function(t,o){var n,r,l,s,a,u,c,f;if(void 0===t.length&&void 0===o.length)return t*o;if(a=t.length,u=t[0].length,c=e.zeros(a,l=i(o)?o[0].length:u),f=0,i(o)){for(;f<l;f++)for(n=0;n<a;n++){for(s=0,r=0;r<u;r++)s+=t[n][r]*o[r][f];c[n][f]=s}return 1===a&&1===f?c[0][0]:c}return e.map(t,(function(e){return e*o}))},outer:function(t,o){return e.multiply(t.map((function(e){return[e]})),[o])},dot:function(t,o){i(t[0])||(t=[t]),i(o[0])||(o=[o]);for(var n,r,l=1===t[0].length&&1!==t.length?e.transpose(t):t,s=1===o[0].length&&1!==o.length?e.transpose(o):o,a=[],u=0,c=l.length,f=l[0].length;u<c;u++){for(a[u]=[],n=0,r=0;r<f;r++)n+=l[u][r]*s[u][r];a[u]=n}return 1===a.length?a[0]:a},pow:function(o,n){return e.map(o,(function(e){return t.pow(e,n)}))},exp:function(o){return e.map(o,(function(e){return t.exp(e)}))},log:function(o){return e.map(o,(function(e){return t.log(e)}))},abs:function(o){return e.map(o,(function(e){return t.abs(e)}))},norm:function(e,o){var n=0,r=0;for(isNaN(o)&&(o=2),i(e[0])&&(e=e[0]);r<e.length;r++)n+=t.pow(t.abs(e[r]),o);return t.pow(n,1/o)},angle:function(o,n){return t.acos(e.dot(o,n)/(e.norm(o)*e.norm(n)))},aug:function(e,t){var o,n=[];for(o=0;o<e.length;o++)n.push(e[o].slice());for(o=0;o<n.length;o++)r.apply(n[o],t[o]);return n},inv:function(t){for(var o,n=t.length,r=t[0].length,l=e.identity(n,r),i=e.gauss_jordan(t,l),s=[],a=0;a<n;a++)for(s[a]=[],o=r;o<i[0].length;o++)s[a][o-r]=i[a][o];return s},det:function e(t){if(2===t.length)return t[0][0]*t[1][1]-t[0][1]*t[1][0];for(var o=0,n=0;n<t.length;n++){for(var r=[],l=1;l<t.length;l++){r[l-1]=[];for(var i=0;i<t.length;i++)i<n?r[l-1][i]=t[l][i]:i>n&&(r[l-1][i-1]=t[l][i])}var s=n%2?-1:1;o+=e(r)*t[0][n]*s}return o},gauss_elimination:function(o,n){var r,l,i,s,a=0,u=0,c=o.length,f=o[0].length,d=1,p=0,b=[];for(r=(o=e.aug(o,n))[0].length,a=0;a<c;a++){for(l=o[a][a],u=a,s=a+1;s<f;s++)l<t.abs(o[s][a])&&(l=o[s][a],u=s);if(u!=a)for(s=0;s<r;s++)i=o[a][s],o[a][s]=o[u][s],o[u][s]=i;for(u=a+1;u<c;u++)for(d=o[u][a]/o[a][a],s=a;s<r;s++)o[u][s]=o[u][s]-d*o[a][s]}for(a=c-1;a>=0;a--){for(p=0,u=a+1;u<=c-1;u++)p+=b[u]*o[a][u];b[a]=(o[a][r-1]-p)/o[a][a]}return b},gauss_jordan:function(o,n){var r,l,i,s=e.aug(o,n),a=s.length,u=s[0].length,c=0;for(l=0;l<a;l++){var f=l;for(i=l+1;i<a;i++)t.abs(s[i][l])>t.abs(s[f][l])&&(f=i);var d=s[l];for(s[l]=s[f],s[f]=d,i=l+1;i<a;i++)for(c=s[i][l]/s[l][l],r=l;r<u;r++)s[i][r]-=s[l][r]*c}for(l=a-1;l>=0;l--){for(c=s[l][l],i=0;i<l;i++)for(r=u-1;r>l-1;r--)s[i][r]-=s[l][r]*s[i][l]/c;for(s[l][l]/=c,r=a;r<u;r++)s[l][r]/=c}return s},triaUpSolve:function(t,o){var n,r=t[0].length,l=e.zeros(1,r)[0],i=!1;return null!=o[0].length&&(o=o.map((function(e){return e[0]})),i=!0),e.arange(r-1,-1,-1).forEach((function(i){n=e.arange(i+1,r).map((function(e){return l[e]*t[i][e]})),l[i]=(o[i]-e.sum(n))/t[i][i]})),i?l.map((function(e){return[e]})):l},triaLowSolve:function(t,o){var n,r=t[0].length,l=e.zeros(1,r)[0],i=!1;return null!=o[0].length&&(o=o.map((function(e){return e[0]})),i=!0),e.arange(r).forEach((function(r){n=e.arange(r).map((function(e){return t[r][e]*l[e]})),l[r]=(o[r]-e.sum(n))/t[r][r]})),i?l.map((function(e){return[e]})):l},lu:function(t){var o,n=t.length,r=e.identity(n),l=e.zeros(t.length,t[0].length);return e.arange(n).forEach((function(e){l[0][e]=t[0][e]})),e.arange(1,n).forEach((function(i){e.arange(i).forEach((function(n){o=e.arange(n).map((function(e){return r[i][e]*l[e][n]})),r[i][n]=(t[i][n]-e.sum(o))/l[n][n]})),e.arange(i,n).forEach((function(n){o=e.arange(i).map((function(e){return r[i][e]*l[e][n]})),l[i][n]=t[o.length][n]-e.sum(o)}))})),[r,l]},cholesky:function(o){var n,r=o.length,l=e.zeros(o.length,o[0].length);return e.arange(r).forEach((function(i){n=e.arange(i).map((function(e){return t.pow(l[i][e],2)})),l[i][i]=t.sqrt(o[i][i]-e.sum(n)),e.arange(i+1,r).forEach((function(t){n=e.arange(i).map((function(e){return l[i][e]*l[t][e]})),l[t][i]=(o[i][t]-e.sum(n))/l[i][i]}))})),l},gauss_jacobi:function(o,n,r,l){for(var i,s,a,u,c=0,f=0,d=o.length,p=[],b=[],j=[];c<d;c++)for(p[c]=[],b[c]=[],j[c]=[],f=0;f<d;f++)c>f?(p[c][f]=o[c][f],b[c][f]=j[c][f]=0):c<f?(b[c][f]=o[c][f],p[c][f]=j[c][f]=0):(j[c][f]=o[c][f],p[c][f]=b[c][f]=0);for(a=e.multiply(e.multiply(e.inv(j),e.add(p,b)),-1),s=e.multiply(e.inv(j),n),i=r,u=e.add(e.multiply(a,r),s),c=2;t.abs(e.norm(e.subtract(u,i)))>l;)i=u,u=e.add(e.multiply(a,i),s),c++;return u},gauss_seidel:function(o,n,r,l){for(var i,s,a,u,c,f=0,d=o.length,p=[],b=[],j=[];f<d;f++)for(p[f]=[],b[f]=[],j[f]=[],i=0;i<d;i++)f>i?(p[f][i]=o[f][i],b[f][i]=j[f][i]=0):f<i?(b[f][i]=o[f][i],p[f][i]=j[f][i]=0):(j[f][i]=o[f][i],p[f][i]=b[f][i]=0);for(u=e.multiply(e.multiply(e.inv(e.add(j,p)),b),-1),a=e.multiply(e.inv(e.add(j,p)),n),s=r,c=e.add(e.multiply(u,r),a),f=2;t.abs(e.norm(e.subtract(c,s)))>l;)s=c,c=e.add(e.multiply(u,s),a),f+=1;return c},SOR:function(o,n,r,l,i){for(var s,a,u,c,f,d=0,p=o.length,b=[],j=[],h=[];d<p;d++)for(b[d]=[],j[d]=[],h[d]=[],s=0;s<p;s++)d>s?(b[d][s]=o[d][s],j[d][s]=h[d][s]=0):d<s?(j[d][s]=o[d][s],b[d][s]=h[d][s]=0):(h[d][s]=o[d][s],b[d][s]=j[d][s]=0);for(c=e.multiply(e.inv(e.add(h,e.multiply(b,i))),e.subtract(e.multiply(h,1-i),e.multiply(j,i))),u=e.multiply(e.multiply(e.inv(e.add(h,e.multiply(b,i))),n),i),a=r,f=e.add(e.multiply(c,r),u),d=2;t.abs(e.norm(e.subtract(f,a)))>l;)a=f,f=e.add(e.multiply(c,a),u),d++;return f},householder:function(o){for(var n,r,l,i,s=o.length,a=o[0].length,u=0,c=[],f=[];u<s-1;u++){for(n=0,i=u+1;i<a;i++)n+=o[i][u]*o[i][u];for(n=(o[u+1][u]>0?-1:1)*t.sqrt(n),r=t.sqrt((n*n-o[u+1][u]*n)/2),(c=e.zeros(s,1))[u+1][0]=(o[u+1][u]-n)/(2*r),l=u+2;l<s;l++)c[l][0]=o[l][u]/(2*r);f=e.subtract(e.identity(s,a),e.multiply(e.multiply(c,e.transpose(c)),2)),o=e.multiply(f,e.multiply(o,f))}return o},QR:(o=e.sum,n=e.arange,function(r){var l,i,s,a=r.length,u=r[0].length,c=e.zeros(u,u);for(r=e.copy(r),i=0;i<u;i++){for(c[i][i]=t.sqrt(o(n(a).map((function(e){return r[e][i]*r[e][i]})))),l=0;l<a;l++)r[l][i]=r[l][i]/c[i][i];for(s=i+1;s<u;s++)for(c[i][s]=o(n(a).map((function(e){return r[e][i]*r[e][s]}))),l=0;l<a;l++)r[l][s]=r[l][s]-r[l][i]*c[i][s]}return[r,c]}),lstsq:function(t,o){var n=!1;void 0===o[0].length&&(o=o.map((function(e){return[e]})),n=!0);var r=e.QR(t),l=r[0],i=r[1],s=t[0].length,a=e.slice(l,{col:{end:s}}),u=function(t){var o=(t=e.copy(t)).length,n=e.identity(o);return e.arange(o-1,-1,-1).forEach((function(o){e.sliceAssign(n,{row:o},e.divide(e.slice(n,{row:o}),t[o][o])),e.sliceAssign(t,{row:o},e.divide(e.slice(t,{row:o}),t[o][o])),e.arange(o).forEach((function(r){var l=e.multiply(t[r][o],-1),i=e.slice(t,{row:r}),s=e.multiply(e.slice(t,{row:o}),l);e.sliceAssign(t,{row:r},e.add(i,s));var a=e.slice(n,{row:r}),u=e.multiply(e.slice(n,{row:o}),l);e.sliceAssign(n,{row:r},e.add(a,u))}))})),n}(e.slice(i,{row:{end:s}})),c=e.transpose(a);void 0===c[0].length&&(c=[c]);var f=e.multiply(e.multiply(u,c),o);return void 0===f.length&&(f=[[f]]),n?f.map((function(e){return e[0]})):f},jacobi:function(o){for(var n,r,l,i,s,a,u,c=1,f=o.length,d=e.identity(f,f),p=[];1===c;){for(s=o[0][1],l=0,i=1,n=0;n<f;n++)for(r=0;r<f;r++)n!=r&&s<t.abs(o[n][r])&&(s=t.abs(o[n][r]),l=n,i=r);for(a=o[l][l]===o[i][i]?o[l][i]>0?t.PI/4:-t.PI/4:t.atan(2*o[l][i]/(o[l][l]-o[i][i]))/2,(u=e.identity(f,f))[l][l]=t.cos(a),u[l][i]=-t.sin(a),u[i][l]=t.sin(a),u[i][i]=t.cos(a),d=e.multiply(d,u),o=e.multiply(e.multiply(e.inv(u),o),u),c=0,n=1;n<f;n++)for(r=1;r<f;r++)n!=r&&t.abs(o[n][r])>.001&&(c=1)}for(n=0;n<f;n++)p.push(o[n][n]);return[d,p]},rungekutta:function(e,t,o,n,r,l){var i,s,a;if(2===l)for(;n<=o;)r+=((i=t*e(n,r))+(s=t*e(n+t,r+i)))/2,n+=t;if(4===l)for(;n<=o;)r+=((i=t*e(n,r))+2*(s=t*e(n+t/2,r+i/2))+2*(a=t*e(n+t/2,r+s/2))+t*e(n+t,r+a))/6,n+=t;return r},romberg:function(e,o,n,r){for(var l,i,s,a,u,c=0,f=(n-o)/2,d=[],p=[],b=[];c<r/2;){for(u=e(o),s=o,a=0;s<=n;s+=f,a++)d[a]=s;for(l=d.length,s=1;s<l-1;s++)u+=(s%2!=0?4:2)*e(d[s]);u=f/3*(u+e(n)),b[c]=u,f/=2,c++}for(i=b.length,l=1;1!==i;){for(s=0;s<i-1;s++)p[s]=(t.pow(4,l)*b[s+1]-b[s])/(t.pow(4,l)-1);i=p.length,b=p,p=[],l++}return b},richardson:function(e,o,n,r){function l(e,t){for(var o,n=0,r=e.length;n<r;n++)e[n]===t&&(o=n);return o}for(var i,s,a,u,c,f=t.abs(n-e[l(e,n)+1]),d=0,p=[],b=[];r>=f;)i=l(e,n+r),s=l(e,n),p[d]=(o[i]-2*o[s]+o[2*s-i])/(r*r),r/=2,d++;for(u=p.length,a=1;1!=u;){for(c=0;c<u-1;c++)b[c]=(t.pow(4,a)*p[c+1]-p[c])/(t.pow(4,a)-1);u=b.length,p=b,b=[],a++}return p},simpson:function(e,t,o,n){for(var r,l=(o-t)/n,i=e(t),s=[],a=t,u=0,c=1;a<=o;a+=l,u++)s[u]=a;for(r=s.length;c<r-1;c++)i+=(c%2!=0?4:2)*e(s[c]);return l/3*(i+e(o))},hermite:function(e,t,o,n){for(var r,l=e.length,i=0,s=0,a=[],u=[],c=[],f=[];s<l;s++){for(a[s]=1,r=0;r<l;r++)s!=r&&(a[s]*=(n-e[r])/(e[s]-e[r]));for(u[s]=0,r=0;r<l;r++)s!=r&&(u[s]+=1/(e[s]-e[r]));c[s]=(1-2*(n-e[s])*u[s])*(a[s]*a[s]),f[s]=(n-e[s])*(a[s]*a[s]),i+=c[s]*t[s]+f[s]*o[s]}return i},lagrange:function(e,t,o){for(var n,r,l=0,i=0,s=e.length;i<s;i++){for(r=t[i],n=0;n<s;n++)i!=n&&(r*=(o-e[n])/(e[i]-e[n]));l+=r}return l},cubic_spline:function(t,o,n){for(var r,l,i=t.length,s=0,a=[],u=[],c=[],f=[],d=[],p=[];s<i-1;s++)f[s]=t[s+1]-t[s];for(c[0]=0,s=1;s<i-1;s++)c[s]=3/f[s]*(o[s+1]-o[s])-3/f[s-1]*(o[s]-o[s-1]);for(s=1;s<i-1;s++)a[s]=[],u[s]=[],a[s][s-1]=f[s-1],a[s][s]=2*(f[s-1]+f[s]),a[s][s+1]=f[s],u[s][0]=c[s];for(l=e.multiply(e.inv(a),u),r=0;r<i-1;r++)d[r]=(o[r+1]-o[r])/f[r]-f[r]*(l[r+1][0]+2*l[r][0])/3,p[r]=(l[r+1][0]-l[r][0])/(3*f[r]);for(r=0;r<i&&!(t[r]>n);r++);return o[r-=1]+(n-t[r])*d[r]+e.sq(n-t[r])*l[r]+(n-t[r])*e.sq(n-t[r])*p[r]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(t){var o,n,r,l,i,s=t.length,a=t[0].length,u=0,c=[],f=[],d=[],p=[],b=[],j=[],h=[];for(u=0;u<s;u++)c[u]=e.sum(t[u])/a;for(u=0;u<a;u++)for(b[u]=[],o=0;o<s;o++)b[u][o]=t[o][u]-c[o];for(b=e.transpose(b),u=0;u<s;u++)for(j[u]=[],o=0;o<s;o++)j[u][o]=e.dot([b[u]],[b[o]])/(a-1);for(i=(r=e.jacobi(j))[0],f=r[1],h=e.transpose(i),u=0;u<f.length;u++)for(o=u;o<f.length;o++)f[u]<f[o]&&(n=f[u],f[u]=f[o],f[o]=n,d=h[u],h[u]=h[o],h[o]=d);for(l=e.transpose(b),u=0;u<s;u++)for(p[u]=[],o=0;o<l.length;o++)p[u][o]=e.dot([h[u]],[l[o]]);return[t,f,h,p]}}),function(t){for(var o=0;o<t.length;o++)!function(t){e.fn[t]=function(o,n){var r=this;return n?(setTimeout((function(){n.call(r,e.fn[t].call(r,o))}),15),this):"number"==typeof e[t](this,o)?e[t](this,o):e(e[t](this,o))}}(t[o])}("add divide multiply subtract dot pow exp log abs norm angle".split(" "))}(t,Math),function(e,t){var o=[].slice,n=e.utils.isNumber,r=e.utils.isArray;function l(e,o,n,r){if(e>1||n>1||e<=0||n<=0)throw new Error("Proportions should be greater than 0 and less than 1");var l=(e*o+n*r)/(o+r);return(e-n)/t.sqrt(l*(1-l)*(1/o+1/r))}e.extend({zscore:function(){var t=o.call(arguments);return n(t[1])?(t[0]-t[1])/t[2]:(t[0]-e.mean(t[1]))/e.stdev(t[1],t[2])},ztest:function(){var n,l=o.call(arguments);return r(l[1])?(n=e.zscore(l[0],l[1],l[3]),1===l[2]?e.normal.cdf(-t.abs(n),0,1):2*e.normal.cdf(-t.abs(n),0,1)):l.length>2?(n=e.zscore(l[0],l[1],l[2]),1===l[3]?e.normal.cdf(-t.abs(n),0,1):2*e.normal.cdf(-t.abs(n),0,1)):(n=l[0],1===l[1]?e.normal.cdf(-t.abs(n),0,1):2*e.normal.cdf(-t.abs(n),0,1))}}),e.extend(e.fn,{zscore:function(e,t){return(e-this.mean())/this.stdev(t)},ztest:function(o,n,r){var l=t.abs(this.zscore(o,r));return 1===n?e.normal.cdf(-l,0,1):2*e.normal.cdf(-l,0,1)}}),e.extend({tscore:function(){var n=o.call(arguments);return 4===n.length?(n[0]-n[1])/(n[2]/t.sqrt(n[3])):(n[0]-e.mean(n[1]))/(e.stdev(n[1],!0)/t.sqrt(n[1].length))},ttest:function(){var r,l=o.call(arguments);return 5===l.length?(r=t.abs(e.tscore(l[0],l[1],l[2],l[3])),1===l[4]?e.studentt.cdf(-r,l[3]-1):2*e.studentt.cdf(-r,l[3]-1)):n(l[1])?(r=t.abs(l[0]),1==l[2]?e.studentt.cdf(-r,l[1]-1):2*e.studentt.cdf(-r,l[1]-1)):(r=t.abs(e.tscore(l[0],l[1])),1==l[2]?e.studentt.cdf(-r,l[1].length-1):2*e.studentt.cdf(-r,l[1].length-1))}}),e.extend(e.fn,{tscore:function(e){return(e-this.mean())/(this.stdev(!0)/t.sqrt(this.cols()))},ttest:function(o,n){return 1===n?1-e.studentt.cdf(t.abs(this.tscore(o)),this.cols()-1):2*e.studentt.cdf(-t.abs(this.tscore(o)),this.cols()-1)}}),e.extend({anovafscore:function(){var n,r,l,i,s,a,u,c,f=o.call(arguments);if(1===f.length){for(s=new Array(f[0].length),u=0;u<f[0].length;u++)s[u]=f[0][u];f=s}for(r=new Array,u=0;u<f.length;u++)r=r.concat(f[u]);for(l=e.mean(r),n=0,u=0;u<f.length;u++)n+=f[u].length*t.pow(e.mean(f[u])-l,2);for(n/=f.length-1,a=0,u=0;u<f.length;u++)for(i=e.mean(f[u]),c=0;c<f[u].length;c++)a+=t.pow(f[u][c]-i,2);return n/(a/(r.length-f.length))},anovaftest:function(){var t,r,l,i,s=o.call(arguments);if(n(s[0]))return 1-e.centralF.cdf(s[0],s[1],s[2]);var a=e.anovafscore(s);for(t=s.length-1,l=0,i=0;i<s.length;i++)l+=s[i].length;return r=l-t-1,1-e.centralF.cdf(a,t,r)},ftest:function(t,o,n){return 1-e.centralF.cdf(t,o,n)}}),e.extend(e.fn,{anovafscore:function(){return e.anovafscore(this.toArray())},anovaftes:function(){var t,o=0;for(t=0;t<this.length;t++)o+=this[t].length;return e.ftest(this.anovafscore(),this.length-1,o-this.length)}}),e.extend({qscore:function(){var r,l,i,s,a,u=o.call(arguments);return n(u[0])?(r=u[0],l=u[1],i=u[2],s=u[3],a=u[4]):(r=e.mean(u[0]),l=e.mean(u[1]),i=u[0].length,s=u[1].length,a=u[2]),t.abs(r-l)/(a*t.sqrt((1/i+1/s)/2))},qtest:function(){var t,n=o.call(arguments);3===n.length?(t=n[0],n=n.slice(1)):7===n.length?(t=e.qscore(n[0],n[1],n[2],n[3],n[4]),n=n.slice(5)):(t=e.qscore(n[0],n[1],n[2]),n=n.slice(3));var r=n[0],l=n[1];return 1-e.tukey.cdf(t,l,r-l)},tukeyhsd:function(t){for(var o=e.pooledstdev(t),n=t.map((function(t){return e.mean(t)})),r=t.reduce((function(e,t){return e+t.length}),0),l=[],i=0;i<t.length;++i)for(var s=i+1;s<t.length;++s){var a=e.qtest(n[i],n[s],t[i].length,t[s].length,o,r,t.length);l.push([[i,s],a])}return l}}),e.extend({normalci:function(){var n,r=o.call(arguments),l=new Array(2);return n=4===r.length?t.abs(e.normal.inv(r[1]/2,0,1)*r[2]/t.sqrt(r[3])):t.abs(e.normal.inv(r[1]/2,0,1)*e.stdev(r[2])/t.sqrt(r[2].length)),l[0]=r[0]-n,l[1]=r[0]+n,l},tci:function(){var n,r=o.call(arguments),l=new Array(2);return n=4===r.length?t.abs(e.studentt.inv(r[1]/2,r[3]-1)*r[2]/t.sqrt(r[3])):t.abs(e.studentt.inv(r[1]/2,r[2].length-1)*e.stdev(r[2],!0)/t.sqrt(r[2].length)),l[0]=r[0]-n,l[1]=r[0]+n,l},significant:function(e,t){return e<t}}),e.extend(e.fn,{normalci:function(t,o){return e.normalci(t,o,this.toArray())},tci:function(t,o){return e.tci(t,o,this.toArray())}}),e.extend(e.fn,{oneSidedDifferenceOfProportions:function(t,o,n,r){var i=l(t,o,n,r);return e.ztest(i,1)},twoSidedDifferenceOfProportions:function(t,o,n,r){var i=l(t,o,n,r);return e.ztest(i,2)}})}(t,Math),t.models=function(){function e(e,o){var n=e.length,r=o[0].length-1,l=n-r-1,i=t.lstsq(o,e),s=t.multiply(o,i.map((function(e){return[e]}))).map((function(e){return e[0]})),a=t.subtract(e,s),u=t.mean(e),c=t.sum(s.map((function(e){return Math.pow(e-u,2)}))),f=t.sum(e.map((function(e,t){return Math.pow(e-s[t],2)}))),d=c+f;return{exog:o,endog:e,nobs:n,df_model:r,df_resid:l,coef:i,predict:s,resid:a,ybar:u,SST:d,SSE:c,SSR:f,R2:c/d}}return{ols:function(o,n){var r=e(o,n),l=function(o){var n,r,l=(n=o.exog,r=n[0].length,t.arange(r).map((function(o){var l=t.arange(r).filter((function(e){return e!==o}));return e(t.col(n,o).map((function(e){return e[0]})),t.col(n,l))}))),i=Math.sqrt(o.SSR/o.df_resid),s=l.map((function(e){var t=e.SST,o=e.R2;return i/Math.sqrt(t*(1-o))})),a=o.coef.map((function(e,t){return(e-0)/s[t]})),u=a.map((function(e){var n=t.studentt.cdf(e,o.df_resid);return 2*(n>.5?1-n:n)})),c=t.studentt.inv(.975,o.df_resid),f=o.coef.map((function(e,t){var o=c*s[t];return[e-o,e+o]}));return{se:s,t:a,p:u,sigmaHat:i,interval95:f}}(r),i=function(e){var o,n,r,l=e.R2/e.df_model/((1-e.R2)/e.df_resid);return{F_statistic:l,pvalue:1-(o=l,n=e.df_model,r=e.df_resid,t.beta.cdf(o/(r/n+o),n/2,r/2))}}(r),s=1-(1-r.R2)*((r.nobs-1)/r.df_resid);return r.t=l,r.f=i,r.adjust_R2=s,r}}}(),t.extend({buildxmatrix:function(){for(var e=new Array(arguments.length),o=0;o<arguments.length;o++)e[o]=[1].concat(arguments[o]);return t(e)},builddxmatrix:function(){for(var e=new Array(arguments[0].length),o=0;o<arguments[0].length;o++)e[o]=[1].concat(arguments[0][o]);return t(e)},buildjxmatrix:function(e){for(var o=new Array(e.length),n=0;n<e.length;n++)o[n]=e[n];return t.builddxmatrix(o)},buildymatrix:function(e){return t(e).transpose()},buildjymatrix:function(e){return e.transpose()},matrixmult:function(e,o){var n,r,l,i,s;if(e.cols()==o.rows()){if(o.rows()>1){for(i=[],n=0;n<e.rows();n++)for(i[n]=[],r=0;r<o.cols();r++){for(s=0,l=0;l<e.cols();l++)s+=e.toArray()[n][l]*o.toArray()[l][r];i[n][r]=s}return t(i)}for(i=[],n=0;n<e.rows();n++)for(i[n]=[],r=0;r<o.cols();r++){for(s=0,l=0;l<e.cols();l++)s+=e.toArray()[n][l]*o.toArray()[r];i[n][r]=s}return t(i)}},regress:function(e,o){var n=t.xtranspxinv(e),r=e.transpose(),l=t.matrixmult(t(n),r);return t.matrixmult(l,o)},regresst:function(e,o,n){var r=t.regress(e,o),l={anova:{}},i=t.jMatYBar(e,r);l.yBar=i;var s=o.mean();l.anova.residuals=t.residuals(o,i),l.anova.ssr=t.ssr(i,s),l.anova.msr=l.anova.ssr/(e[0].length-1),l.anova.sse=t.sse(o,i),l.anova.mse=l.anova.sse/(o.length-(e[0].length-1)-1),l.anova.sst=t.sst(o,s),l.anova.mst=l.anova.sst/(o.length-1),l.anova.r2=1-l.anova.sse/l.anova.sst,l.anova.r2<0&&(l.anova.r2=0),l.anova.fratio=l.anova.msr/l.anova.mse,l.anova.pvalue=t.anovaftest(l.anova.fratio,e[0].length-1,o.length-(e[0].length-1)-1),l.anova.rmse=Math.sqrt(l.anova.mse),l.anova.r2adj=1-l.anova.mse/l.anova.mst,l.anova.r2adj<0&&(l.anova.r2adj=0),l.stats=new Array(e[0].length);for(var a,u,c,f=t.xtranspxinv(e),d=0;d<r.length;d++)a=Math.sqrt(l.anova.mse*Math.abs(f[d][d])),u=Math.abs(r[d]/a),c=t.ttest(u,o.length-e[0].length-1,n),l.stats[d]=[r[d],a,u,c];return l.regress=r,l},xtranspx:function(e){return t.matrixmult(e.transpose(),e)},xtranspxinv:function(e){var o=t.matrixmult(e.transpose(),e);return t.inv(o)},jMatYBar:function(e,o){var n=t.matrixmult(e,o);return new t(n)},residuals:function(e,o){return t.matrixsubtract(e,o)},ssr:function(e,t){for(var o=0,n=0;n<e.length;n++)o+=Math.pow(e[n]-t,2);return o},sse:function(e,t){for(var o=0,n=0;n<e.length;n++)o+=Math.pow(e[n]-t[n],2);return o},sst:function(e,t){for(var o=0,n=0;n<e.length;n++)o+=Math.pow(e[n]-t,2);return o},matrixsubtract:function(e,o){for(var n=new Array(e.length),r=0;r<e.length;r++){n[r]=new Array(e[r].length);for(var l=0;l<e[r].length;l++)n[r][l]=e[r][l]-o[r][l]}return t(n)}}),t.jStat=t,t)},960:function(e,t,o){const n=o(592);e.exports=function(e){function t(e,t){const o=t.split(".");let n=e;for(const e of o){if(null==n)return;n=n[e]}return n}for(let o=0;o<Object.keys(n).length;o++){let r,l=Object.keys(n)[o],i=[];if("object"==typeof n[l]){i=Object.keys(n[l]),r=Object.values(n[l]);for(let e=0;e<r.length;e++)if("object"==typeof r[e]){let t=i[e];n[l][t]&&(i=[...i,...Object.keys(n[l][t]).map((e=>t+"."+e))],i.splice(i.indexOf(t),1))}}if(i.length<1)e[l]=n[l];else for(let o=0;o<i.length;o++)"function"==typeof t(n[l],i[o])&&(e[l]=t(n[l],i[o]))}let o=function(e){return"number"==typeof e&&(e=parseInt(e)),e},r=null,l=null,i=null;e.TABLE=function(){return i},e.COLUMN=e.COL=function(){return i.tracking&&i.tracking.push(u.getColumnNameFromCoords(o(r),o(l))),o(r)+1},e.ROW=function(){return i.tracking&&i.tracking.push(u.getColumnNameFromCoords(o(r),o(l))),o(l)+1},e.CELL=function(){return u.getColumnNameFromCoords(r,l)},e.VALUE=function(e,t,n){return i.getValueFromCoords(o(e)-1,o(t)-1,n)},e.THISROWCELL=function(e){return i.getValueFromCoords(o(e)-1,o(l))};const s=function(e,t){for(let o=0;o<e.length;o++){let n=u.getTokensFromRange(e[o]);t=t.replace(e[o],"["+n.join(",")+"]")}return t},a=function(e){return"string"==typeof e&&(e=e.trim()),!isNaN(e)&&null!==e&&""!==e},u=function(e,t,o,n,u){i=u,r=o,l=n;let c="",f={};if(t)if(t.size){let e,o=null;t.forEach((function(t,o){e=o.replace(/!/g,"."),-1!==e.indexOf(".")&&(e=e.split("."),f[e[0]]=!0)})),e=Object.keys(f);for(let t=0;t<e.length;t++)c+="var "+e[t]+" = {};";t.forEach((function(n,r){e=r.replace(/!/g,"."),null===n||a(n)||(o=n.match(/(('.*?'!)|(\w*!))?(\$?[A-Z]+\$?[0-9]*):(\$?[A-Z]+\$?[0-9]*)?/g),o&&o.length&&(n=updateRanges(o,n))),e.indexOf(".")>0?c+=e+" = "+t.get(r)+";\n":c+="var "+e+" = "+n+";\n"}))}else{let e=Object.keys(t);if(e.length){let o,n={};for(let t=0;t<e.length;t++)if(o=e[t].replace(/\!/g,"."),o.indexOf(".")>0){let e=e.split(".");n[e[0]]={}}o=Object.keys(n);for(let e=0;e<o.length;e++)c+="var "+o[e]+" = {};";for(let n=0;n<e.length;n++){if(o=e[n].replace(/!/g,"."),null!==t[e[n]]&&!a(t[e[n]])){let o=t[e[n]].match(/(('.*?'!)|(\w*!))?(\$?[A-Z]+\$?[0-9]*):(\$?[A-Z]+\$?[0-9]*)?/g);o&&o.length&&(t[e[n]]=s(o,t[e[n]]))}o.indexOf(".")>0?c+=o+" = "+t[e[n]]+";\n":c+="var "+o+" = "+t[e[n]]+";\n"}}}let d=(e=function(e,t){let o="",n=0,r=["=","!",">","<"];for(let t=0;t<e.length;t++)'"'===e[t]&&(n=0===n?1:0),1===n?o+=e[t]:(o+=e[t].toUpperCase(),t>0&&"="===e[t]&&-1===r.indexOf(e[t-1])&&-1===r.indexOf(e[t+1])&&(o+="="));return o=o.replace(/\^/g,"**"),o=o.replace(/<>/g,"!="),o=o.replace(/&/g,"+"),o=o.replace(/\$/g,""),o}(e=(e=e.replace(/\$/g,"")).replace(/!/g,"."))).match(/(('.*?'!)|(\w*!))?(\$?[A-Z]+\$?[0-9]*):(\$?[A-Z]+\$?[0-9]*)?/g);d&&d.length&&(e=s(d,e));let p=new Function(c+"; return "+e)();return null===p&&(p=0),p};return u.getColumnNameFromCoords=function(e,t){return n="",(o=parseInt(e))>701?(n+=String.fromCharCode(64+parseInt(o/676)),n+=String.fromCharCode(64+parseInt(o%676/26))):o>25&&(n+=String.fromCharCode(64+parseInt(o/26))),n+String.fromCharCode(65+o%26)+(parseInt(t)+1);var o,n},u.getCoordsFromColumnName=function(e){var t=/^[a-zA-Z]+/.exec(e);if(t){for(var o=0,n=0;n<t[0].length;n++)o+=parseInt(t[0].charCodeAt(n)-64)*Math.pow(26,t[0].length-1-n);--o<0&&(o=0);var r=parseInt(/[0-9]+$/.exec(e))||null;return r>0&&r--,[o,r]}},u.getRangeFromTokens=function(e){e=e.filter((function(e){return"#REF!"!=e}));for(var t="",o="",n=0;n<e.length;n++)e[n].indexOf(".")>=0?t=".":e[n].indexOf("!")>=0&&(t="!"),t&&(o=e[n].split(t),e[n]=o[1],o=o[0]+t);return e.sort((function(e,t){var o=Helpers.getCoordsFromColumnName(e),n=Helpers.getCoordsFromColumnName(t);return o[1]>n[1]?1:o[1]<n[1]?-1:o[0]>n[0]?1:o[0]<n[0]?-1:0})),e.length?o+(e[0]+":")+e[e.length-1]:"#REF!"},u.getTokensFromRange=function(e){if(e.indexOf(".")>0){var t=e.split(".");e=t[1],t=t[0]+"."}else e.indexOf("!")>0?(t=e.split("!"),e=t[1],t=t[0]+"!"):t="";e=e.split(":");var o=u.getCoordsFromColumnName(e[0]),n=u.getCoordsFromColumnName(e[1]);if(o[0]<=n[0])var r=o[0],l=n[0];else r=n[0],l=o[0];if(null===o[1]&&null==n[1])for(var i=null,s=null,a=Object.keys(vars),c=0;c<a.length;c++){var f=u.getCoordsFromColumnName(a[c]);f[0]===o[0]&&(null===i||f[1]<i)&&(i=f[1]),f[0]===n[0]&&(null===s||f[1]>s)&&(s=f[1])}else o[1]<=n[1]?(i=o[1],s=n[1]):(i=n[1],s=o[1]);for(var d=[],p=i;p<=s;p++){var b=[];for(c=r;c<=l;c++)b.push(t+u.getColumnNameFromCoords(c,p));d.push(b)}return d},u.setFormula=function(t){let o=Object.keys(t);for(let n=0;n<o.length;n++)"function"==typeof t[o[n]]&&(e[o[n]]=t[o[n]])},u.basic=!0,u}("undefined"==typeof window?o.g:window)},592:function(e,t,o){"use strict";var n=o(162),r=o(765);const l=new Error("#NULL!"),i=new Error("#DIV/0!"),s=new Error("#VALUE!"),a=new Error("#REF!"),u=new Error("#NAME?"),c=new Error("#NUM!"),f=new Error("#N/A"),d=new Error("#ERROR!"),p=new Error("#GETTING_DATA");var b=Object.freeze({__proto__:null,data:p,div0:i,error:d,na:f,name:u,nil:l,num:c,ref:a,value:s});function j(e){const t=[];return h(e,(e=>{t.push(e)})),t}function h(e,t){let o=-1;const n=e.length;for(;++o<n&&!1!==t(e[o],o,e););return e}function g(e){let t,o=e.length;for(;o--;)if(t=e[o],"number"!=typeof t)if(!0!==t)if(!1!==t){if("string"==typeof t){const n=F(t);e[o]=n instanceof Error?0:n}}else e[o]=0;else e[o]=1;return e}function m(e,t){if(!e)return s;e.every((e=>Array.isArray(e)))&&0!==e.length||(e=[[...e]]),e.map(((t,o)=>{t.map(((t,n)=>{t||(e[o][n]=0)}))}));const o=e.reduce(((t,o,n)=>o.length>e[t].length?n:t),0),n=e[o].length;return e.map((e=>[...e,...Array(n-e.length).fill(t||0)]))}function v(){let e;if(1===arguments.length){const o=arguments[0];e=null!=(t=o)&&"number"==typeof t.length&&"string"!=typeof t?j.apply(null,arguments):[o]}else e=Array.from(arguments);for(var t;!C(e);)e=y(e);return e}function y(e){return e&&e.reduce?e.reduce(((e,t)=>{const o=Array.isArray(e),n=Array.isArray(t);return o&&n?e.concat(t):o?(e.push(t),e):n?[e].concat(t):[e,t]})):[e]}function C(e){if(!e)return!1;for(let t=0;t<e.length;++t)if(Array.isArray(e[t]))return!1;return!0}function x(e,t){return t=t||1,e&&"function"==typeof e.slice?e.slice(t):e}function w(e){return e?e[0].map(((t,o)=>e.map((e=>e[o])))):s}function A(e,t){let o=null;return h(e,((e,n)=>{if(e[0]===t)return o=n,!1})),null==o?s:o}function E(){for(let e=0;e<arguments.length;e++)if(arguments[e]instanceof Error)return arguments[e]}function M(){let e=arguments.length;for(;e--;)if(arguments[e]instanceof Error)return!0;return!1}function I(e){const t=1e14;return Math.round(e*t)/t}function N(){return v.apply(null,arguments).filter((e=>"number"==typeof e))}function S(e){if("boolean"==typeof e)return e;if(e instanceof Error)return e;if("number"==typeof e)return 0!==e;if("string"==typeof e){const t=e.toUpperCase();if("TRUE"===t)return!0;if("FALSE"===t)return!1}return e instanceof Date&&!isNaN(e)||s}function D(e){if(!isNaN(e)){if(e instanceof Date)return new Date(e);const t=parseFloat(e);return t<0||t>=2958466?c:function(e){e<60&&(e+=1);const t=Math.floor(e-25569),o=new Date(86400*t*1e3),n=e-Math.floor(e)+1e-7;let r=Math.floor(86400*n);const l=r%60;r-=l;const i=Math.floor(r/3600),s=Math.floor(r/60)%60;let a=o.getUTCDate(),u=o.getUTCMonth();return e>=60&&e<61&&(a=29,u=1),new Date(o.getUTCFullYear(),u,a,i,s,l)}(t)}return"string"!=typeof e||(e=/(\d{4})-(\d\d?)-(\d\d?)$/.test(e)?new Date(e+"T00:00:00.000"):new Date(e),isNaN(e))?s:e}function T(e){let t,o=e.length;for(;o--;){if(t=D(e[o]),t===s)return t;e[o]=t}return e}function F(e){return e instanceof Error?e:null==e?0:("boolean"==typeof e&&(e=+e),isNaN(e)||""===e?s:parseFloat(e))}function L(e){let t,o;if(!e||0===(t=e.length))return s;for(;t--;){if(e[t]instanceof Error)return e[t];if(o=F(e[t]),o instanceof Error)return o;e[t]=o}return e}function R(e){return e instanceof Error?e:null==e?"":e.toString()}function O(){let e=arguments.length;for(;e--;)if("string"==typeof arguments[e])return!0;return!1}function k(e){return null!=e}const H="=",B=[">",">=","<","<=","=","<>"],P="operator",_="literal",V=[P,_],q=P,U=_;function z(e,t){if(-1===V.indexOf(t))throw new Error("Unsupported token type: "+t);return{value:e,type:t}}function Y(e){return function(e){let t="";const o=[];for(let n=0;n<e.length;n++){const r=e[n];0===n&&B.indexOf(r)>=0?o.push(z(r,q)):t+=r}return t.length>0&&o.push(z(function(e){return"string"!=typeof e||/^\d+(\.\d+)?$/.test(e)&&(e=-1===e.indexOf(".")?parseInt(e,10):parseFloat(e)),e}(t),U)),o.length>0&&o[0].type!==q&&o.unshift(z(H,q)),o}(function(e){const t=e.length,o=[];let n=0,r="",l="";for(;n<t;){const t=e.charAt(n);switch(t){case">":case"<":case"=":l+=t,r.length>0&&(o.push(r),r="");break;default:l.length>0&&(o.push(l),l=""),r+=t}n++}return r.length>0&&o.push(r),l.length>0&&o.push(l),o}(e))}const W=function(e){const t=[];let o;for(let n=0;n<e.length;n++){const r=e[n];switch(r.type){case q:o=r.value;break;case U:t.push(r.value)}}return function(e,t){let o=!1;switch(t){case">":o=e[0]>e[1];break;case">=":o=e[0]>=e[1];break;case"<":o=e[0]<e[1];break;case"<=":o=e[0]<=e[1];break;case"=":o=e[0]==e[1];break;case"<>":o=e[0]!=e[1]}return o}(t,o)},X={};function G(e){return[s,a,i,c,u,l].indexOf(e)>=0||"number"==typeof e&&(isNaN(e)||!isFinite(e))}function K(e){return G(e)||e===f}function $(e){return!0===e||!1===e}function J(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function Q(e){return"string"==typeof e}function Z(){const e=[];for(let t=0;t<arguments.length;++t){let o=!1;const n=arguments[t];for(let t=0;t<e.length&&(o=e[t]===n,!o);++t);o||e.push(n)}return e}function ee(e,t,o,n){if(!t||!o)return f;n=!(0===n||!1===n);let r=f;const l="number"==typeof e;let i=!1;for(let s=0;s<t.length;s++){const u=t[s];if(u[0]===e){r=o<u.length+1?u[o-1]:a;break}!i&&(l&&n&&u[0]<=e||n&&"string"==typeof u[0]&&u[0].localeCompare(e)<0)&&(r=o<u.length+1?u[o-1]:a),l&&u[0]>e&&(i=!0)}return r}function te(){const e=v(arguments).filter(k);if(0===e.length)return i;const t=E.apply(void 0,e);if(t)return t;const o=N(e),n=o.length;let r,l=0,s=0;for(let e=0;e<n;e++)l+=o[e],s+=1;return r=l/s,isNaN(r)&&(r=c),r}function oe(){const e=v(arguments).filter(k);if(0===e.length)return i;const t=E.apply(void 0,e);if(t)return t;const o=e,n=o.length;let r,l=0,s=0;for(let e=0;e<n;e++){const t=o[e];"number"==typeof t&&(l+=t),!0===t&&l++,null!==t&&s++}return r=l/s,isNaN(r)&&(r=c),r}X.TYPE=e=>{switch(e){case l:return 1;case i:return 2;case s:return 3;case a:return 4;case u:return 5;case c:return 6;case f:return 7;case p:return 8}return f};const ne={DIST:function(e,t,o,r,l,i){return arguments.length<4?s:(l=void 0===l?0:l,i=void 0===i?1:i,M(e=F(e),t=F(t),o=F(o),l=F(l),i=F(i))?s:(e=(e-l)/(i-l),r?n.beta.cdf(e,t,o):n.beta.pdf(e,t,o)))},INV:(e,t,o,r,l)=>(r=void 0===r?0:r,l=void 0===l?1:l,M(e=F(e),t=F(t),o=F(o),r=F(r),l=F(l))?s:n.beta.inv(e,t,o)*(l-r)+r)},re={DIST:(e,t,o,r)=>M(e=F(e),t=F(t),o=F(o),r=F(r))?s:r?n.binomial.cdf(e,t,o):n.binomial.pdf(e,t,o)};re.DIST.RANGE=(e,t,o,n)=>{if(n=void 0===n?o:n,M(e=F(e),t=F(t),o=F(o),n=F(n)))return s;let r=0;for(let l=o;l<=n;l++)r+=qe(e,l)*Math.pow(t,l)*Math.pow(1-t,e-l);return r},re.INV=(e,t,o)=>{if(M(e=F(e),t=F(t),o=F(o)))return s;let r=0;for(;r<=e;){if(n.binomial.cdf(r,e,t)>=o)return r;r++}};const le={DIST:(e,t,o)=>M(e=F(e),t=F(t))?s:o?n.chisquare.cdf(e,t):n.chisquare.pdf(e,t)};le.DIST.RT=(e,t)=>!e|!t?f:e<1||t>Math.pow(10,10)?c:"number"!=typeof e||"number"!=typeof t?s:1-n.chisquare.cdf(e,t),le.INV=(e,t)=>M(e=F(e),t=F(t))?s:n.chisquare.inv(e,t),le.INV.RT=(e,t)=>!e|!t?f:e<0||e>1||t<1||t>Math.pow(10,10)?c:"number"!=typeof e||"number"!=typeof t?s:n.chisquare.inv(1-e,t),le.TEST=function(e,t){if(2!==arguments.length)return f;if(!(e instanceof Array&&t instanceof Array))return s;if(e.length!==t.length)return s;if(e[0]&&t[0]&&e[0].length!==t[0].length)return s;const o=e.length;let n,r,l;for(r=0;r<o;r++)e[r]instanceof Array||(n=e[r],e[r]=[],e[r].push(n)),t[r]instanceof Array||(n=t[r],t[r]=[],t[r].push(n));const i=e[0].length,a=1===i?o-1:(o-1)*(i-1);let u=0;const c=Math.PI;for(r=0;r<o;r++)for(l=0;l<i;l++)u+=Math.pow(e[r][l]-t[r][l],2)/t[r][l];return Math.round(1e6*function(e,t){let o=Math.exp(-.5*e);t%2==1&&(o*=Math.sqrt(2*e/c));let n=t;for(;n>=2;)o=o*e/n,n-=2;let r=o,l=t;for(;r>1e-10*o;)l+=2,r=r*e/l,o+=r;return 1-o}(u,a))/1e6};const ie={};function se(){return N(v(arguments)).length}function ae(){const e=v(arguments);return e.length-ue(e)}function ue(){const e=v(arguments);let t,o=0;for(let n=0;n<e.length;n++)t=e[n],null!=t&&""!==t||o++;return o}ie.NORM=(e,t,o)=>M(e=F(e),t=F(t),o=F(o))?s:n.normalci(1,e,t,o)[1]-1,ie.T=(e,t,o)=>M(e=F(e),t=F(t),o=F(o))?s:n.tci(1,e,t,o)[1]-1;const ce={P:(e,t)=>{if(M(e=L(v(e)),t=L(v(t))))return s;const o=n.mean(e),r=n.mean(t);let l=0;const i=e.length;for(let n=0;n<i;n++)l+=(e[n]-o)*(t[n]-r);return l/i},S:(e,t)=>M(e=L(v(e)),t=L(v(t)))?s:n.covariance(e,t)},fe={DIST:(e,t,o)=>M(e=F(e),t=F(t))?s:o?n.exponential.cdf(e,t):n.exponential.pdf(e,t)},de={};function pe(e,t,o){if(M(e=F(e),t=L(v(t)),o=L(v(o))))return s;const r=n.mean(o),l=n.mean(t),i=o.length;let a=0,u=0;for(let e=0;e<i;e++)a+=(o[e]-r)*(t[e]-l),u+=Math.pow(o[e]-r,2);const c=a/u;return l-c*r+c*e}function be(e){return(e=F(e))instanceof Error?e:0===e||parseInt(e,10)===e&&e<0?c:n.gammafn(e)}function je(e){return(e=F(e))instanceof Error?e:n.gammaln(e)}de.DIST=(e,t,o,r)=>M(e=F(e),t=F(t),o=F(o))?s:r?n.centralF.cdf(e,t,o):n.centralF.pdf(e,t,o),de.DIST.RT=function(e,t,o){return 3!==arguments.length?f:e<0||t<1||o<1?c:"number"!=typeof e||"number"!=typeof t||"number"!=typeof o?s:1-n.centralF.cdf(e,t,o)},de.INV=(e,t,o)=>M(e=F(e),t=F(t),o=F(o))?s:e<=0||e>1?c:n.centralF.inv(e,t,o),de.INV.RT=function(e,t,o){return 3!==arguments.length?f:e<0||e>1||t<1||t>Math.pow(10,10)||o<1||o>Math.pow(10,10)?c:"number"!=typeof e||"number"!=typeof t||"number"!=typeof o?s:n.centralF.inv(1-e,t,o)},de.TEST=(e,t)=>{if(!e||!t)return f;if(!(e instanceof Array&&t instanceof Array))return f;if(e.length<2||t.length<2)return i;const o=(e,t)=>{let o=0;for(let n=0;n<e.length;n++)o+=Math.pow(e[n]-t,2);return o},n=$e(e)/e.length,r=$e(t)/t.length;return o(e,n)/(e.length-1)/(o(t,r)/(t.length-1))},be.DIST=function(e,t,o,r){return 4!==arguments.length?f:e<0||t<=0||o<=0||"number"!=typeof e||"number"!=typeof t||"number"!=typeof o?s:r?n.gamma.cdf(e,t,o,!0):n.gamma.pdf(e,t,o,!1)},be.INV=function(e,t,o){return 3!==arguments.length?f:e<0||e>1||t<=0||o<=0?c:"number"!=typeof e||"number"!=typeof t||"number"!=typeof o?s:n.gamma.inv(e,t,o)},je.PRECISE=function(e){return 1!==arguments.length?f:e<=0?c:"number"!=typeof e?s:n.gammaln(e)};const he={};function ge(e,t){return M(e=L(v(e)),t=F(t))?e:t<0||e.length<t?s:e.sort(((e,t)=>t-e))[t-1]}function me(e,t){if(M(e=L(v(e)),t=L(v(t))))return s;const o=n.mean(e),r=n.mean(t),l=t.length;let i=0,a=0;for(let n=0;n<l;n++)i+=(t[n]-r)*(e[n]-o),a+=Math.pow(t[n]-r,2);const u=i/a;return[u,o-u*r]}he.DIST=(e,t,o,n,r)=>{if(M(e=F(e),t=F(t),o=F(o),n=F(n)))return s;function l(e,t,o,n){return qe(o,e)*qe(n-o,t-e)/qe(n,t)}return r?function(e,t,o,n){let r=0;for(let i=0;i<=e;i++)r+=l(i,t,o,n);return r}(e,t,o,n):l(e,t,o,n)};const ve={};function ye(){const e=v(arguments),t=E.apply(void 0,e);if(t)return t;const o=N(e);return 0===o.length?0:Math.max.apply(Math,o)}function Ce(){const e=v(arguments),t=E.apply(void 0,e);if(t)return t;const o=g(e);let r=n.median(o);return isNaN(r)&&(r=c),r}function xe(){const e=v(arguments),t=E.apply(void 0,e);if(t)return t;const o=N(e);return 0===o.length?0:Math.min.apply(Math,o)}ve.DIST=(e,t,o,r)=>M(e=F(e),t=F(t),o=F(o))?s:r?n.lognormal.cdf(e,t,o):n.lognormal.pdf(e,t,o),ve.INV=(e,t,o)=>M(e=F(e),t=F(t),o=F(o))?s:n.lognormal.inv(e,t,o);const we={MULT:function(){const e=L(v(arguments));if(e instanceof Error)return e;const t=e.length,o={};let n,r=[],l=0;for(let i=0;i<t;i++)n=e[i],o[n]=o[n]?o[n]+1:1,o[n]>l&&(l=o[n],r=[]),o[n]===l&&(r[r.length]=n);return r},SNGL:function(){const e=L(v(arguments));return e instanceof Error?e:we.MULT(e).sort(((e,t)=>e-t))[0]}},Ae={DIST:(e,t,o,r)=>M(e=F(e),t=F(t),o=F(o))?s:r?n.negbin.cdf(e,t,o):n.negbin.pdf(e,t,o)},Ee={};function Me(e,t){if(M(t=L(v(t)),e=L(v(e))))return s;const o=n.mean(e),r=n.mean(t),l=e.length;let i=0,a=0,u=0;for(let n=0;n<l;n++)i+=(e[n]-o)*(t[n]-r),a+=Math.pow(e[n]-o,2),u+=Math.pow(t[n]-r,2);return i/Math.sqrt(a*u)}Ee.DIST=(e,t,o,r)=>M(e=F(e),t=F(t),o=F(o))?s:o<=0?c:r?n.normal.cdf(e,t,o):n.normal.pdf(e,t,o),Ee.INV=(e,t,o)=>M(e=F(e),t=F(t),o=F(o))?s:n.normal.inv(e,t,o),Ee.S={},Ee.S.DIST=(e,t)=>(e=F(e))instanceof Error?s:t?n.normal.cdf(e,0,1):n.normal.pdf(e,0,1),Ee.S.INV=e=>(e=F(e))instanceof Error?s:n.normal.inv(e,0,1);const Ie={EXC:(e,t)=>{if(M(e=L(v(e)),t=F(t)))return s;const o=(e=e.sort(((e,t)=>e-t))).length;if(t<1/(o+1)||t>1-1/(o+1))return c;const n=t*(o+1)-1,r=Math.floor(n);return I(n===r?e[n]:e[r]+(n-r)*(e[r+1]-e[r]))},INC:(e,t)=>{if(M(e=L(v(e)),t=F(t)))return s;const o=t*((e=e.sort(((e,t)=>e-t))).length-1),n=Math.floor(o);return I(o===n?e[o]:e[n]+(o-n)*(e[n+1]-e[n]))}},Ne={EXC:(e,t,o)=>{if(o=void 0===o?3:o,M(e=L(v(e)),t=F(t),o=F(o)))return s;e=e.sort(((e,t)=>e-t));const n=Z.apply(null,e),r=e.length,l=n.length,i=Math.pow(10,o);let a=0,u=!1,c=0;for(;!u&&c<l;)t===n[c]?(a=(e.indexOf(n[c])+1)/(r+1),u=!0):t>=n[c]&&(t<n[c+1]||c===l-1)&&(a=(e.indexOf(n[c])+1+(t-n[c])/(n[c+1]-n[c]))/(r+1),u=!0),c++;return Math.floor(a*i)/i},INC:(e,t,o)=>{if(o=void 0===o?3:o,M(e=L(v(e)),t=F(t),o=F(o)))return s;e=e.sort(((e,t)=>e-t));const n=Z.apply(null,e),r=e.length,l=n.length,i=Math.pow(10,o);let a=0,u=!1,c=0;for(;!u&&c<l;)t===n[c]?(a=e.indexOf(n[c])/(r-1),u=!0):t>=n[c]&&(t<n[c+1]||c===l-1)&&(a=(e.indexOf(n[c])+(t-n[c])/(n[c+1]-n[c]))/(r-1),u=!0),c++;return Math.floor(a*i)/i}},Se={DIST:(e,t,o)=>M(e=F(e),t=F(t))?s:o?n.poisson.cdf(e,t):n.poisson.pdf(e,t)},De={EXC:(e,t)=>{if(M(e=L(v(e)),t=F(t)))return s;switch(t){case 1:return Ie.EXC(e,.25);case 2:return Ie.EXC(e,.5);case 3:return Ie.EXC(e,.75);default:return c}},INC:(e,t)=>{if(M(e=L(v(e)),t=F(t)))return s;switch(t){case 1:return Ie.INC(e,.25);case 2:return Ie.INC(e,.5);case 3:return Ie.INC(e,.75);default:return c}}},Te={};function Fe(){const e=L(v(arguments));if(e instanceof Error)return e;const t=n.mean(e),o=e.length;let r=0;for(let n=0;n<o;n++)r+=Math.pow(e[n]-t,3);return o*r/((o-1)*(o-2)*Math.pow(n.stdev(e,!0),3))}function Le(e,t){return M(e=L(v(e)),t=F(t))?e:e.sort(((e,t)=>e-t))[t-1]}Te.AVG=(e,t,o)=>{if(M(e=F(e),t=L(v(t))))return s;const n=(o=o||!1)?(e,t)=>e-t:(e,t)=>t-e,r=(t=(t=v(t)).sort(n)).length;let l=0;for(let o=0;o<r;o++)t[o]===e&&l++;return l>1?(2*t.indexOf(e)+l+1)/2:t.indexOf(e)+1},Te.EQ=(e,t,o)=>{if(M(e=F(e),t=L(v(t))))return s;const n=(o=o||!1)?(e,t)=>e-t:(e,t)=>t-e;return(t=t.sort(n)).indexOf(e)+1},Fe.P=function(){const e=L(v(arguments));if(e instanceof Error)return e;const t=n.mean(e),o=e.length;let r=0,l=0;for(let n=0;n<o;n++)l+=Math.pow(e[n]-t,3),r+=Math.pow(e[n]-t,2);return l/=o,r/=o,l/Math.pow(r,1.5)};const Re={P:function(){const e=ke.P.apply(this,arguments);let t=Math.sqrt(e);return isNaN(t)&&(t=c),t},S:function(){const e=ke.S.apply(this,arguments);return Math.sqrt(e)}},Oe={DIST:(e,t,o)=>1!==o&&2!==o?c:1===o?Oe.DIST.RT(e,t):Oe.DIST["2T"](e,t)};Oe.DIST["2T"]=function(e,t){return 2!==arguments.length?f:e<0||t<1?c:"number"!=typeof e||"number"!=typeof t?s:2*(1-n.studentt.cdf(e,t))},Oe.DIST.RT=function(e,t){return 2!==arguments.length?f:e<0||t<1?c:"number"!=typeof e||"number"!=typeof t?s:1-n.studentt.cdf(e,t)},Oe.INV=(e,t)=>M(e=F(e),t=F(t))?s:n.studentt.inv(e,t),Oe.INV["2T"]=(e,t)=>(e=F(e),t=F(t),e<=0||e>1||t<1?c:M(e,t)?s:Math.abs(n.studentt.inv(e/2,t))),Oe.TEST=(e,t)=>{if(M(e=L(v(e)),t=L(v(t))))return s;const o=n.mean(e),r=n.mean(t);let l,i=0,a=0;for(l=0;l<e.length;l++)i+=Math.pow(e[l]-o,2);for(l=0;l<t.length;l++)a+=Math.pow(t[l]-r,2);i/=e.length-1,a/=t.length-1;const u=Math.abs(o-r)/Math.sqrt(i/e.length+a/t.length);return Oe.DIST["2T"](u,e.length+t.length-2)};const ke={};function He(){const e=v(arguments),t=e.length;let o=0,n=0;const r=oe(e);for(let l=0;l<t;l++){const t=e[l];o+="number"==typeof t?Math.pow(t-r,2):!0===t?Math.pow(1-r,2):Math.pow(0-r,2),null!==t&&n++}return o/(n-1)}function Be(){const e=v(arguments),t=e.length;let o=0,n=0;const r=oe(e);let l;for(let l=0;l<t;l++){const t=e[l];o+="number"==typeof t?Math.pow(t-r,2):!0===t?Math.pow(1-r,2):Math.pow(0-r,2),null!==t&&n++}return l=o/n,isNaN(l)&&(l=c),l}ke.P=function(){const e=N(v(arguments)),t=e.length;let o=0;const n=te(e);let r;for(let r=0;r<t;r++)o+=Math.pow(e[r]-n,2);return r=o/t,isNaN(r)&&(r=c),r},ke.S=function(){const e=N(v(arguments)),t=e.length;let o=0;const n=te(e);for(let r=0;r<t;r++)o+=Math.pow(e[r]-n,2);return o/(t-1)};const Pe={DIST:(e,t,o,n)=>M(e=F(e),t=F(t),o=F(o))?s:n?1-Math.exp(-Math.pow(e/o,t)):Math.pow(e,t-1)*Math.exp(-Math.pow(e/o,t))*t/Math.pow(o,t)},_e={};function Ve(e,t,o){const n=E(e=F(e),t=F(t),o=F(o));if(n)return n;if(0===t)return 0;t=Math.abs(t);const r=-Math.floor(Math.log(t)/Math.log(10));return e>=0?Ke(Math.ceil(e/t)*t,r):0===o?-Ke(Math.floor(Math.abs(e)/t)*t,r):-Ke(Math.ceil(Math.abs(e)/t)*t,r)}function qe(e,t){return E(e=F(e),t=F(t))||(e<t?c:ze(e)/(ze(t)*ze(e-t)))}_e.TEST=(e,t,o)=>{if(M(e=L(v(e)),t=F(t)))return s;o=o||Re.S(e);const n=e.length;return 1-Ee.S.DIST((te(e)-t)/(o/Math.sqrt(n)),!0)},Ve.MATH=Ve,Ve.PRECISE=Ve;const Ue=[];function ze(e){if((e=F(e))instanceof Error)return e;const t=Math.floor(e);return 0===t||1===t?1:(Ue[t]>0||(Ue[t]=ze(t-1)*t),Ue[t])}function Ye(e,t){const o=E(e=F(e),t=F(t));if(o)return o;if(0===t)return 0;if(!(e>=0&&t>0||e<=0&&t<0))return c;t=Math.abs(t);const n=-Math.floor(Math.log(t)/Math.log(10));return e>=0?Ke(Math.floor(e/t)*t,n):-Ke(Math.ceil(Math.abs(e)/t),n)}Ye.MATH=(e,t,o)=>{if(t instanceof Error)return t;t=void 0===t?0:t;const n=E(e=F(e),t=F(t),o=F(o));if(n)return n;if(0===t)return 0;t=t?Math.abs(t):1;const r=-Math.floor(Math.log(t)/Math.log(10));return e>=0?Ke(Math.floor(e/t)*t,r):0===o||void 0===o?-Ke(Math.ceil(Math.abs(e)/t)*t,r):-Ke(Math.floor(Math.abs(e)/t)*t,r)},Ye.PRECISE=Ye.MATH;const We={CEILING:Ve};function Xe(e,t){const o=E(e=F(e),t=F(t));if(o)return o;if(0===e&&0===t)return c;const n=Math.pow(e,t);return isNaN(n)?c:n}function Ge(){const e=v(arguments).filter((e=>null!=e));if(0===e.length)return 0;const t=L(e);if(t instanceof Error)return t;let o=1;for(let e=0;e<t.length;e++)o*=t[e];return o}function Ke(e,t){return E(e=F(e),t=F(t))||Number(Math.round(Number(e+"e"+t))+"e"+-1*t)}function $e(){let e=0;return h(j(arguments),(t=>{if(e instanceof Error)return!1;if(t instanceof Error)e=t;else if("number"==typeof t)e+=t;else if("string"==typeof t){const o=parseFloat(t);!isNaN(o)&&(e+=o)}else if(Array.isArray(t)){const o=$e.apply(null,t);o instanceof Error?e=o:e+=o}})),e}var Je=Object.freeze({__proto__:null,ADD:function(e,t){return 2!==arguments.length?f:E(e=F(e),t=F(t))||e+t},DIVIDE:function(e,t){return 2!==arguments.length?f:E(e=F(e),t=F(t))||(0===t?i:e/t)},EQ:function(e,t){return 2!==arguments.length?f:e instanceof Error?e:t instanceof Error?t:(null===e&&(e=void 0),null===t&&(t=void 0),e===t)},GT:function(e,t){return 2!==arguments.length?f:e instanceof Error?e:t instanceof Error?t:(O(e,t)?(e=R(e),t=R(t)):(e=F(e),t=F(t)),E(e,t)||e>t)},GTE:function(e,t){return 2!==arguments.length?f:(O(e,t)?(e=R(e),t=R(t)):(e=F(e),t=F(t)),E(e,t)||e>=t)},LT:function(e,t){return 2!==arguments.length?f:(O(e,t)?(e=R(e),t=R(t)):(e=F(e),t=F(t)),E(e,t)||e<t)},LTE:function(e,t){return 2!==arguments.length?f:(O(e,t)?(e=R(e),t=R(t)):(e=F(e),t=F(t)),E(e,t)||e<=t)},MINUS:function(e,t){return 2!==arguments.length?f:E(e=F(e),t=F(t))||e-t},MULTIPLY:function(e,t){return 2!==arguments.length?f:E(e=F(e),t=F(t))||e*t},NE:function(e,t){return 2!==arguments.length?f:e instanceof Error?e:t instanceof Error?t:(null===e&&(e=void 0),null===t&&(t=void 0),e!==t)},POW:function(e,t){return 2!==arguments.length?f:Xe(e,t)}});const Qe=new Date(Date.UTC(1900,0,1)),Ze=[void 0,0,1,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,1,2,3,4,5,6,0],et=[[],[1,2,3,4,5,6,7],[7,1,2,3,4,5,6],[6,0,1,2,3,4,5],[],[],[],[],[],[],[],[7,1,2,3,4,5,6],[6,7,1,2,3,4,5],[5,6,7,1,2,3,4],[4,5,6,7,1,2,3],[3,4,5,6,7,1,2],[2,3,4,5,6,7,1],[1,2,3,4,5,6,7]],tt=[[],[6,0],[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],void 0,void 0,void 0,[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6]];function ot(e,t,o){o=o.toUpperCase(),e=D(e),t=D(t);const n=e.getFullYear(),r=e.getMonth(),l=e.getDate(),i=t.getFullYear(),s=t.getMonth(),a=t.getDate();let u;switch(o){case"Y":u=Math.floor(ft(e,t));break;case"D":u=rt(t,e);break;case"M":u=s-r+12*(i-n),a<l&&u--;break;case"MD":l<=a?u=a-l:(0===s?(e.setFullYear(i-1),e.setMonth(12)):(e.setFullYear(i),e.setMonth(s-1)),u=rt(t,e));break;case"YM":u=s-r+12*(i-n),a<l&&u--,u%=12;break;case"YD":s>r||s===r&&a<l?e.setFullYear(i):e.setFullYear(i-1),u=rt(t,e)}return u}function nt(e){const t=new Date(e);return t.setHours(0,0,0,0),t}function rt(e,t){return e=D(e),t=D(t),e instanceof Error?e:t instanceof Error?t:dt(nt(e))-dt(nt(t))}function lt(e,t,o){if(o=S(o||"false"),e=D(e),t=D(t),e instanceof Error)return e;if(t instanceof Error)return t;if(o instanceof Error)return o;const n=e.getMonth();let r,l,i=t.getMonth();if(o)r=31===e.getDate()?30:e.getDate(),l=31===t.getDate()?30:t.getDate();else{const o=new Date(e.getFullYear(),n+1,0).getDate(),s=new Date(t.getFullYear(),i+1,0).getDate();r=e.getDate()===o?30:e.getDate(),t.getDate()===s?r<30?(i++,l=1):l=30:l=t.getDate()}return 360*(t.getFullYear()-e.getFullYear())+30*(i-n)+(l-r)}function it(e){if((e=D(e))instanceof Error)return e;(e=nt(e)).setDate(e.getDate()+4-(e.getDay()||7));const t=new Date(e.getFullYear(),0,1);return Math.ceil(((e-t)/864e5+1)/7)}function st(e,t,o){return st.INTL(e,t,1,o)}function at(e,t,o){return at.INTL(e,t,1,o)}function ut(e){return 1===new Date(e,1,29).getMonth()}function ct(e,t){return Math.ceil((t-e)/1e3/60/60/24)}function ft(e,t,o){if((e=D(e))instanceof Error)return e;if((t=D(t))instanceof Error)return t;o=o||0;let n=e.getDate();const r=e.getMonth()+1,l=e.getFullYear();let i=t.getDate();const s=t.getMonth()+1,a=t.getFullYear();switch(o){case 0:return 31===n&&31===i?(n=30,i=30):31===n?n=30:30===n&&31===i&&(i=30),(i+30*s+360*a-(n+30*r+360*l))/360;case 1:{const o=(e,t)=>{const o=e.getFullYear(),n=new Date(o,2,1);if(ut(o)&&e<n&&t>=n)return!0;const r=t.getFullYear(),l=new Date(r,2,1);return ut(r)&&t>=l&&e<l};let u=365;if(l===a||l+1===a&&(r>s||r===s&&n>=i))return(l===a&&ut(l)||o(e,t)||1===s&&29===i)&&(u=366),ct(e,t)/u;const c=a-l+1,f=(new Date(a+1,0,1)-new Date(l,0,1))/1e3/60/60/24/c;return ct(e,t)/f}case 2:return ct(e,t)/360;case 3:return ct(e,t)/365;case 4:return(i+30*s+360*a-(n+30*r+360*l))/360}}function dt(e){const t=e>-22038912e5?2:1;return Math.ceil((e-Qe)/864e5)+t}function pt(e){return 0===(e=F(e))?s:e instanceof Error?e:String.fromCharCode(e)}function bt(e){if(M(e))return e;let t=(e=e||"").charCodeAt(0);return isNaN(t)&&(t=s),t}function jt(){const e=v(arguments),t=E.apply(void 0,e);if(t)return t;let o=0;for(;(o=e.indexOf(!0))>-1;)e[o]="TRUE";let n=0;for(;(n=e.indexOf(!1))>-1;)e[n]="FALSE";return e.join("")}st.INTL=(e,t,o,n)=>{if((e=D(e))instanceof Error)return e;if((t=D(t))instanceof Error)return t;let r=!1;const l=[],i=[1,2,3,4,5,6,0],a=new RegExp("^[0|1]{7}$");if(void 0===o)o=tt[1];else if("string"==typeof o&&a.test(o)){r=!0,o=o.split("");for(let e=0;e<o.length;e++)"1"===o[e]&&l.push(i[e])}else o=tt[o];if(!(o instanceof Array))return s;void 0===n?n=[]:n instanceof Array||(n=[n]);for(let e=0;e<n.length;e++){const t=D(n[e]);if(t instanceof Error)return t;n[e]=t}const u=Math.round((t-e)/864e5)+1;let c=u;const f=e;for(let e=0;e<u;e++){const e=(new Date).getTimezoneOffset()>0?f.getUTCDay():f.getDay();let t=r?l.includes(e):e===o[0]||e===o[1];for(let e=0;e<n.length;e++){const o=n[e];if(o.getDate()===f.getDate()&&o.getMonth()===f.getMonth()&&o.getFullYear()===f.getFullYear()){t=!0;break}}t&&c--,f.setDate(f.getDate()+1)}return c},at.INTL=(e,t,o,n)=>{if((e=D(e))instanceof Error)return e;if((t=F(t))instanceof Error)return t;if(t<0)return c;if(!((o=void 0===o?tt[1]:tt[o])instanceof Array))return s;void 0===n?n=[]:n instanceof Array||(n=[n]);for(let e=0;e<n.length;e++){const t=D(n[e]);if(t instanceof Error)return t;n[e]=t}let r=0;for(;r<t;){e.setDate(e.getDate()+1);const t=e.getDay();if(t!==o[0]&&t!==o[1]){for(let t=0;t<n.length;t++){const o=n[t];if(o.getDate()===e.getDate()&&o.getMonth()===e.getMonth()&&o.getFullYear()===e.getFullYear()){r--;break}}r++}}return e};const ht=jt;function gt(e,t=2,o=!1){if(e=F(e),isNaN(e))return s;if(t=F(t),isNaN(t))return s;if(t<0){const o=Math.pow(10,-t);e=Math.round(e/o)*o}else e=e.toFixed(t);if(o)e=e.toString().replace(/,/g,"");else{const t=e.toString().split(".");t[0]=t[0].replace(/\B(?=(\d{3})+$)/g,","),e=t.join(".")}return e}function mt(e,t){return E(e,t)||(e=R(e),(t=F(t))instanceof Error?t:new Array(t+1).join(e))}const vt=pt,yt=bt;function Ct(e){return/^[01]{1,10}$/.test(e)}function xt(e,t,o){if(M(e=F(e),t=F(t)))return e;if("i"!==(o=void 0===o?"i":o)&&"j"!==o)return s;if(0===e&&0===t)return 0;if(0===e)return 1===t?o:t.toString()+o;if(0===t)return e.toString();{const n=t>0?"+":"";return e.toString()+n+(1===t?o:t.toString()+o)}}function wt(e,t){return t=void 0===t?0:t,M(e=F(e),t=F(t))?s:n.erf(e)}function At(e){return isNaN(e)?s:n.erfc(e)}function Et(e){const t=Tt(e),o=Mt(e);return M(t,o)?s:Math.sqrt(Math.pow(t,2)+Math.pow(o,2))}function Mt(e){if(void 0===e||!0===e||!1===e)return s;if(0===e||"0"===e)return 0;if(["i","j"].indexOf(e)>=0)return 1;let t=(e=(e+="").replace("+i","+1i").replace("-i","-1i").replace("+j","+1j").replace("-j","-1j")).indexOf("+"),o=e.indexOf("-");0===t&&(t=e.indexOf("+",1)),0===o&&(o=e.indexOf("-",1));const n=e.substring(e.length-1,e.length),r="i"===n||"j"===n;return t>=0||o>=0?r?t>=0?isNaN(e.substring(0,t))||isNaN(e.substring(t+1,e.length-1))?c:Number(e.substring(t+1,e.length-1)):isNaN(e.substring(0,o))||isNaN(e.substring(o+1,e.length-1))?c:-Number(e.substring(o+1,e.length-1)):c:r?isNaN(e.substring(0,e.length-1))?c:e.substring(0,e.length-1):isNaN(e)?c:0}function It(e){const t=Tt(e),o=Mt(e);return M(t,o)?s:0===t&&0===o?i:0===t&&o>0?Math.PI/2:0===t&&o<0?-Math.PI/2:0===o&&t>0?0:0===o&&t<0?-Math.PI:t>0?Math.atan(o/t):t<0&&o>=0?Math.atan(o/t)+Math.PI:Math.atan(o/t)-Math.PI}function Nt(e){const t=Tt(e),o=Mt(e);if(M(t,o))return s;let n=e.substring(e.length-1);return n="i"===n||"j"===n?n:"i",xt(Math.cos(t)*(Math.exp(o)+Math.exp(-o))/2,-Math.sin(t)*(Math.exp(o)-Math.exp(-o))/2,n)}function St(e){const t=Tt(e),o=Mt(e);if(M(t,o))return s;let n=e.substring(e.length-1);return n="i"===n||"j"===n?n:"i",xt(Math.cos(o)*(Math.exp(t)+Math.exp(-t))/2,Math.sin(o)*(Math.exp(t)-Math.exp(-t))/2,n)}function Dt(e,t){const o=Tt(e),n=Mt(e),r=Tt(t),l=Mt(t);if(M(o,n,r,l))return s;const i=e.substring(e.length-1),a=t.substring(t.length-1);let u="i";if(("j"===i||"j"===a)&&(u="j"),0===r&&0===l)return c;const f=r*r+l*l;return xt((o*r+n*l)/f,(n*r-o*l)/f,u)}function Tt(e){if(void 0===e||!0===e||!1===e)return s;if(0===e||"0"===e)return 0;if(["i","+i","1i","+1i","-i","-1i","j","+j","1j","+1j","-j","-1j"].indexOf(e)>=0)return 0;let t=(e+="").indexOf("+"),o=e.indexOf("-");0===t&&(t=e.indexOf("+",1)),0===o&&(o=e.indexOf("-",1));const n=e.substring(e.length-1,e.length),r="i"===n||"j"===n;return t>=0||o>=0?r?t>=0?isNaN(e.substring(0,t))||isNaN(e.substring(t+1,e.length-1))?c:Number(e.substring(0,t)):isNaN(e.substring(0,o))||isNaN(e.substring(o+1,e.length-1))?c:Number(e.substring(0,o)):c:r?isNaN(e.substring(0,e.length-1))?c:0:isNaN(e)?c:e}function Ft(e){const t=Tt(e),o=Mt(e);if(M(t,o))return s;let n=e.substring(e.length-1);return n="i"===n||"j"===n?n:"i",xt(Math.sin(t)*(Math.exp(o)+Math.exp(-o))/2,Math.cos(t)*(Math.exp(o)-Math.exp(-o))/2,n)}function Lt(e){const t=Tt(e),o=Mt(e);if(M(t,o))return s;let n=e.substring(e.length-1);return n="i"===n||"j"===n?n:"i",xt(Math.cos(o)*(Math.exp(t)-Math.exp(-t))/2,Math.sin(o)*(Math.exp(t)+Math.exp(-t))/2,n)}wt.PRECISE=()=>{throw new Error("ERF.PRECISE is not implemented")},At.PRECISE=()=>{throw new Error("ERFC.PRECISE is not implemented")};const Rt=ne.DIST,Ot=ne.INV,kt=re.DIST,Ht=Ve.MATH,Bt=Ve.PRECISE,Pt=le.DIST,_t=le.DIST.RT,Vt=le.INV,qt=le.INV.RT,Ut=le.TEST,zt=ce.P,Yt=ce.P,Wt=ce.S,Xt=re.INV,Gt=At.PRECISE,Kt=wt.PRECISE,$t=fe.DIST,Jt=de.DIST,Qt=de.DIST.RT,Zt=de.INV,eo=de.INV.RT,to=Ye.MATH,oo=Ye.PRECISE,no=de.TEST,ro=be.DIST,lo=be.INV,io=je.PRECISE,so=he.DIST,ao=ve.INV,uo=ve.DIST,co=ve.INV,fo=we.MULT,po=we.SNGL,bo=Ae.DIST,jo=st.INTL,ho=Ee.DIST,go=Ee.INV,mo=Ee.S.DIST,vo=Ee.S.INV,yo=Ie.EXC,Co=Ie.INC,xo=Ne.EXC,wo=Ne.INC,Ao=Se.DIST,Eo=De.EXC,Mo=De.INC,Io=Te.AVG,No=Te.EQ,So=Fe.P,Do=Re.P,To=Re.S,Fo=Oe.DIST,Lo=Oe.DIST.RT,Ro=Oe.INV,Oo=Oe.TEST,ko=ke.P,Ho=ke.S,Bo=Pe.DIST,Po=at.INTL,_o=_e.TEST;function Vo(e){const t=[];return h(e,(e=>{e&&t.push(e)})),t}function qo(e,t){const o={};for(let t=1;t<e[0].length;++t)o[t]=!0;let n=t[0].length;for(let e=1;e<t.length;++e)t[e].length>n&&(n=t[e].length);for(let r=1;r<e.length;++r)for(let l=1;l<e[r].length;++l){let i=!1,s=!1;for(let o=0;o<t.length;++o){const a=t[o];if(a.length<n)continue;const u=a[0];if(e[r][0]===u){s=!0;for(let t=1;t<a.length;++t)if(!i)if(void 0===a[t]||"*"===a[t])i=!0;else{const o=Y(a[t]+""),n=[z(e[r][l],U)].concat(o);i=W(n)}}}s&&(o[l]=o[l]&&i)}const r=[];for(let t=0;t<e[0].length;++t)o[t]&&r.push(t-1);return r}function Uo(e){return e&&e.getTime&&!isNaN(e.getTime())}function zo(e){return e instanceof Date?e:new Date(e)}function Yo(e,t,o,n,r){if(n=n||0,r=r||0,M(e=F(e),t=F(t),o=F(o),n=F(n),r=F(r)))return s;let l;if(0===e)l=n+o*t;else{const i=Math.pow(1+e,t);l=1===r?n*i+o*(1+e)*(i-1)/e:n*i+o*(i-1)/e}return-l}function Wo(e,t,o,n,r,l){if(r=r||0,l=l||0,M(e=F(e),t=F(t),o=F(o),n=F(n),r=F(r),l=F(l)))return s;const i=Go(e,o,n,r,l);return(1===t?1===l?0:-n:1===l?Yo(e,t-2,i,n,1)-i:Yo(e,t-1,i,n,0))*e}function Xo(){const e=L(v(arguments));if(e instanceof Error)return e;const t=e[0];let o=0;for(let n=1;n<e.length;n++)o+=e[n]/Math.pow(1+t,n);return o}function Go(e,t,o,n,r){if(n=n||0,r=r||0,M(e=F(e),t=F(t),o=F(o),n=F(n),r=F(r)))return s;let l;if(0===e)l=(o+n)/t;else{const i=Math.pow(1+e,t);l=1===r?(n*e/(i-1)+o*e/(1-1/i))/(1+e):n*e/(i-1)+o*e/(1-1/i)}return-l}const Ko={errors:b,symbols:Je};t.ABS=function(e){return(e=F(e))instanceof Error?e:Math.abs(e)},t.ACCRINT=function(e,t,o,n,r,l,i){return e=zo(e),t=zo(t),o=zo(o),Uo(e)&&Uo(t)&&Uo(o)?n<=0||r<=0||-1===[1,2,4].indexOf(l)||-1===[0,1,2,3,4].indexOf(i)||o<=e?c:(r=r||0)*n*ft(e,o,i=i||0):s},t.ACCRINTM=function(){throw new Error("ACCRINTM is not implemented")},t.ACOS=function(e){if((e=F(e))instanceof Error)return e;let t=Math.acos(e);return isNaN(t)&&(t=c),t},t.ACOSH=function(e){if((e=F(e))instanceof Error)return e;let t=Math.log(e+Math.sqrt(e*e-1));return isNaN(t)&&(t=c),t},t.ACOT=function(e){return(e=F(e))instanceof Error?e:Math.atan(1/e)},t.ACOTH=function(e){if((e=F(e))instanceof Error)return e;let t=.5*Math.log((e+1)/(e-1));return isNaN(t)&&(t=c),t},t.AGGREGATE=function(e,t,o,n){if(M(e=F(e),F(e)))return s;switch(e){case 1:return te(o);case 2:return se(o);case 3:return ae(o);case 4:return ye(o);case 5:return xe(o);case 6:return Ge(o);case 7:return Re.S(o);case 8:return Re.P(o);case 9:return $e(o);case 10:return ke.S(o);case 11:return ke.P(o);case 12:return Ce(o);case 13:return we.SNGL(o);case 14:return ge(o,n);case 15:return Le(o,n);case 16:return Ie.INC(o,n);case 17:return De.INC(o,n);case 18:return Ie.EXC(o,n);case 19:return De.EXC(o,n)}},t.AMORDEGRC=function(){throw new Error("AMORDEGRC is not implemented")},t.AMORLINC=function(){throw new Error("AMORLINC is not implemented")},t.AND=function(){const e=v(arguments);let t=s;for(let o=0;o<e.length;o++){if(e[o]instanceof Error)return e[o];void 0!==e[o]&&null!==e[o]&&"string"!=typeof e[o]&&(t===s&&(t=!0),e[o]||(t=!1))}return t},t.ARABIC=function(e){if(null==e)return 0;if(e instanceof Error)return e;if(!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(e))return s;let t=0;return e.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,(e=>{t+={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}[e]})),t},t.ASC=function(){throw new Error("ASC is not implemented")},t.ASIN=function(e){if((e=F(e))instanceof Error)return e;let t=Math.asin(e);return isNaN(t)&&(t=c),t},t.ASINH=function(e){return(e=F(e))instanceof Error?e:Math.log(e+Math.sqrt(e*e+1))},t.ATAN=function(e){return(e=F(e))instanceof Error?e:Math.atan(e)},t.ATAN2=function(e,t){return E(e=F(e),t=F(t))||Math.atan2(e,t)},t.ATANH=function(e){if((e=F(e))instanceof Error)return e;let t=Math.log((1+e)/(1-e))/2;return isNaN(t)&&(t=c),t},t.AVEDEV=function(){const e=v(arguments).filter(k);if(0===e.length)return c;const t=L(e);return t instanceof Error?t:n.sum(n(t).subtract(n.mean(t)).abs()[0])/t.length},t.AVERAGE=te,t.AVERAGEA=oe,t.AVERAGEIF=function(e,t,o){if(arguments.length<=1)return f;if(o=L(v(o=o||e).filter(k)),e=v(e),o instanceof Error)return o;let n=0,r=0;const l=void 0===t||"*"===t,i=l?null:Y(t+"");for(let t=0;t<e.length;t++){const s=e[t];if(l)r+=o[t],n++;else{const e=[z(s,U)].concat(i);W(e)&&(r+=o[t],n++)}}return r/n},t.AVERAGEIFS=function(){const e=j(arguments),t=(e.length-1)/2,o=v(e[0]);let n=0,r=0;for(let l=0;l<o.length;l++){let i=!1;for(let o=0;o<t;o++){const t=e[2*o+1][l],n=e[2*o+2];let r=!1;if(void 0===n||"*"===n)r=!0;else{const e=Y(n+""),o=[z(t,U)].concat(e);r=W(o)}if(!r){i=!1;break}i=!0}i&&(r+=o[l],n++)}const l=r/n;return isNaN(l)?0:l},t.BAHTTEXT=function(){throw new Error("BAHTTEXT is not implemented")},t.BASE=function(e,t,o){const n=E(e=F(e),t=F(t),o=F(o));if(n)return n;if(0===t)return c;const r=e.toString(t);return new Array(Math.max(o+1-r.length,0)).join("0")+r},t.BESSELI=function(e,t){return M(e=F(e),t=F(t))?s:r.besseli(e,t)},t.BESSELJ=function(e,t){return M(e=F(e),t=F(t))?s:r.besselj(e,t)},t.BESSELK=function(e,t){return M(e=F(e),t=F(t))?s:r.besselk(e,t)},t.BESSELY=function(e,t){return M(e=F(e),t=F(t))?s:r.bessely(e,t)},t.BETA=ne,t.BETADIST=Rt,t.BETAINV=Ot,t.BIN2DEC=function(e){if(!Ct(e))return c;const t=parseInt(e,2),o=e.toString();return 10===o.length&&"1"===o.substring(0,1)?parseInt(o.substring(1),2)-512:t},t.BIN2HEX=function(e,t){if(!Ct(e))return c;const o=e.toString();if(10===o.length&&"1"===o.substring(0,1))return(0xfffffffe00+parseInt(o.substring(1),2)).toString(16);const n=parseInt(e,2).toString(16);return void 0===t?n:isNaN(t)?s:t<0?c:(t=Math.floor(t))>=n.length?mt("0",t-n.length)+n:c},t.BIN2OCT=function(e,t){if(!Ct(e))return c;const o=e.toString();if(10===o.length&&"1"===o.substring(0,1))return(1073741312+parseInt(o.substring(1),2)).toString(8);const n=parseInt(e,2).toString(8);return void 0===t?n:isNaN(t)?s:t<0?c:(t=Math.floor(t))>=n.length?mt("0",t-n.length)+n:c},t.BINOM=re,t.BINOMDIST=kt,t.BITAND=function(e,t){return M(e=F(e),t=F(t))?s:e<0||t<0||Math.floor(e)!==e||Math.floor(t)!==t||e>0xffffffffffff||t>0xffffffffffff?c:e&t},t.BITLSHIFT=function(e,t){return M(e=F(e),t=F(t))?s:e<0||Math.floor(e)!==e||e>0xffffffffffff||Math.abs(t)>53?c:t>=0?e<<t:e>>-t},t.BITOR=function(e,t){return M(e=F(e),t=F(t))?s:e<0||t<0||Math.floor(e)!==e||Math.floor(t)!==t||e>0xffffffffffff||t>0xffffffffffff?c:e|t},t.BITRSHIFT=function(e,t){return M(e=F(e),t=F(t))?s:e<0||Math.floor(e)!==e||e>0xffffffffffff||Math.abs(t)>53?c:t>=0?e>>t:e<<-t},t.BITXOR=function(e,t){return M(e=F(e),t=F(t))?s:e<0||t<0||Math.floor(e)!==e||Math.floor(t)!==t||e>0xffffffffffff||t>0xffffffffffff?c:e^t},t.CEILING=Ve,t.CEILINGMATH=Ht,t.CEILINGPRECISE=Bt,t.CELL=function(){throw new Error("CELL is not implemented")},t.CHAR=pt,t.CHIDIST=Pt,t.CHIDISTRT=_t,t.CHIINV=Vt,t.CHIINVRT=qt,t.CHISQ=le,t.CHITEST=Ut,t.CHOOSE=function(){if(arguments.length<2)return f;const e=arguments[0];return e<1||e>254||arguments.length<e+1?s:arguments[e]},t.CLEAN=function(e){return M(e)?e:(e=e||"").replace(/[\0-\x1F]/g,"")},t.CODE=bt,t.COLUMN=function(e,t){return 2!==arguments.length?f:t<0?c:e instanceof Array&&"number"==typeof t?0!==e.length?n.col(e,t):void 0:s},t.COLUMNS=function(e){return 1!==arguments.length?f:e instanceof Array?0===e.length?0:n.cols(e):s},t.COMBIN=qe,t.COMBINA=function(e,t){return E(e=F(e),t=F(t))||(e<t?c:0===e&&0===t?1:qe(e+t-1,e-1))},t.COMPLEX=xt,t.CONCAT=ht,t.CONCATENATE=jt,t.CONFIDENCE=ie,t.CONVERT=function(e,t,o){if((e=F(e))instanceof Error)return e;const n=[["a.u. of action","?",null,"action",!1,!1,105457168181818e-48],["a.u. of charge","e",null,"electric_charge",!1,!1,160217653141414e-33],["a.u. of energy","Eh",null,"energy",!1,!1,435974417757576e-32],["a.u. of length","a?",null,"length",!1,!1,529177210818182e-25],["a.u. of mass","m?",null,"mass",!1,!1,910938261616162e-45],["a.u. of time","?/Eh",null,"time",!1,!1,241888432650516e-31],["admiralty knot","admkn",null,"speed",!1,!0,.514773333],["ampere","A",null,"electric_current",!0,!1,1],["ampere per meter","A/m",null,"magnetic_field_intensity",!0,!1,1],["ångström","Å",["ang"],"length",!1,!0,1e-10],["are","ar",null,"area",!1,!0,100],["astronomical unit","ua",null,"length",!1,!1,149597870691667e-25],["bar","bar",null,"pressure",!1,!1,1e5],["barn","b",null,"area",!1,!1,1e-28],["becquerel","Bq",null,"radioactivity",!0,!1,1],["bit","bit",["b"],"information",!1,!0,1],["btu","BTU",["btu"],"energy",!1,!0,1055.05585262],["byte","byte",null,"information",!1,!0,8],["candela","cd",null,"luminous_intensity",!0,!1,1],["candela per square metre","cd/m?",null,"luminance",!0,!1,1],["coulomb","C",null,"electric_charge",!0,!1,1],["cubic ångström","ang3",["ang^3"],"volume",!1,!0,1e-30],["cubic foot","ft3",["ft^3"],"volume",!1,!0,.028316846592],["cubic inch","in3",["in^3"],"volume",!1,!0,16387064e-12],["cubic light-year","ly3",["ly^3"],"volume",!1,!0,846786664623715e-61],["cubic metre","m?",null,"volume",!0,!0,1],["cubic mile","mi3",["mi^3"],"volume",!1,!0,4168181825.44058],["cubic nautical mile","Nmi3",["Nmi^3"],"volume",!1,!0,6352182208],["cubic Pica","Pica3",["Picapt3","Pica^3","Picapt^3"],"volume",!1,!0,7.58660370370369e-8],["cubic yard","yd3",["yd^3"],"volume",!1,!0,.764554857984],["cup","cup",null,"volume",!1,!0,.0002365882365],["dalton","Da",["u"],"mass",!1,!1,166053886282828e-41],["day","d",["day"],"time",!1,!0,86400],["degree","°",null,"angle",!1,!1,.0174532925199433],["degrees Rankine","Rank",null,"temperature",!1,!0,.555555555555556],["dyne","dyn",["dy"],"force",!1,!0,1e-5],["electronvolt","eV",["ev"],"energy",!1,!0,1.60217656514141],["ell","ell",null,"length",!1,!0,1.143],["erg","erg",["e"],"energy",!1,!0,1e-7],["farad","F",null,"electric_capacitance",!0,!1,1],["fluid ounce","oz",null,"volume",!1,!0,295735295625e-16],["foot","ft",null,"length",!1,!0,.3048],["foot-pound","flb",null,"energy",!1,!0,1.3558179483314],["gal","Gal",null,"acceleration",!1,!1,.01],["gallon","gal",null,"volume",!1,!0,.003785411784],["gauss","G",["ga"],"magnetic_flux_density",!1,!0,1],["grain","grain",null,"mass",!1,!0,647989e-10],["gram","g",null,"mass",!1,!0,.001],["gray","Gy",null,"absorbed_dose",!0,!1,1],["gross registered ton","GRT",["regton"],"volume",!1,!0,2.8316846592],["hectare","ha",null,"area",!1,!0,1e4],["henry","H",null,"inductance",!0,!1,1],["hertz","Hz",null,"frequency",!0,!1,1],["horsepower","HP",["h"],"power",!1,!0,745.69987158227],["horsepower-hour","HPh",["hh","hph"],"energy",!1,!0,2684519.538],["hour","h",["hr"],"time",!1,!0,3600],["imperial gallon (U.K.)","uk_gal",null,"volume",!1,!0,.00454609],["imperial hundredweight","lcwt",["uk_cwt","hweight"],"mass",!1,!0,50.802345],["imperial quart (U.K)","uk_qt",null,"volume",!1,!0,.0011365225],["imperial ton","brton",["uk_ton","LTON"],"mass",!1,!0,1016.046909],["inch","in",null,"length",!1,!0,.0254],["international acre","uk_acre",null,"area",!1,!0,4046.8564224],["IT calorie","cal",null,"energy",!1,!0,4.1868],["joule","J",null,"energy",!0,!0,1],["katal","kat",null,"catalytic_activity",!0,!1,1],["kelvin","K",["kel"],"temperature",!0,!0,1],["kilogram","kg",null,"mass",!0,!0,1],["knot","kn",null,"speed",!1,!0,.514444444444444],["light-year","ly",null,"length",!1,!0,9460730472580800],["litre","L",["l","lt"],"volume",!1,!0,.001],["lumen","lm",null,"luminous_flux",!0,!1,1],["lux","lx",null,"illuminance",!0,!1,1],["maxwell","Mx",null,"magnetic_flux",!1,!1,1e-18],["measurement ton","MTON",null,"volume",!1,!0,1.13267386368],["meter per hour","m/h",["m/hr"],"speed",!1,!0,.00027777777777778],["meter per second","m/s",["m/sec"],"speed",!0,!0,1],["meter per second squared","m?s??",null,"acceleration",!0,!1,1],["parsec","pc",["parsec"],"length",!1,!0,0x6da012f958ee1c],["meter squared per second","m?/s",null,"kinematic_viscosity",!0,!1,1],["metre","m",null,"length",!0,!0,1],["miles per hour","mph",null,"speed",!1,!0,.44704],["millimetre of mercury","mmHg",null,"pressure",!1,!1,133.322],["minute","?",null,"angle",!1,!1,.000290888208665722],["minute","min",["mn"],"time",!1,!0,60],["modern teaspoon","tspm",null,"volume",!1,!0,5e-6],["mole","mol",null,"amount_of_substance",!0,!1,1],["morgen","Morgen",null,"area",!1,!0,2500],["n.u. of action","?",null,"action",!1,!1,105457168181818e-48],["n.u. of mass","m?",null,"mass",!1,!1,910938261616162e-45],["n.u. of speed","c?",null,"speed",!1,!1,299792458],["n.u. of time","?/(me?c??)",null,"time",!1,!1,128808866778687e-35],["nautical mile","M",["Nmi"],"length",!1,!0,1852],["newton","N",null,"force",!0,!0,1],["œrsted","Oe ",null,"magnetic_field_intensity",!1,!1,79.5774715459477],["ohm","Ω",null,"electric_resistance",!0,!1,1],["ounce mass","ozm",null,"mass",!1,!0,.028349523125],["pascal","Pa",null,"pressure",!0,!1,1],["pascal second","Pa?s",null,"dynamic_viscosity",!0,!1,1],["pferdestärke","PS",null,"power",!1,!0,735.49875],["phot","ph",null,"illuminance",!1,!1,1e-4],["pica (1/6 inch)","pica",null,"length",!1,!0,.00035277777777778],["pica (1/72 inch)","Pica",["Picapt"],"length",!1,!0,.00423333333333333],["poise","P",null,"dynamic_viscosity",!1,!1,.1],["pond","pond",null,"force",!1,!0,.00980665],["pound force","lbf",null,"force",!1,!0,4.4482216152605],["pound mass","lbm",null,"mass",!1,!0,.45359237],["quart","qt",null,"volume",!1,!0,.000946352946],["radian","rad",null,"angle",!0,!1,1],["second","?",null,"angle",!1,!1,484813681109536e-20],["second","s",["sec"],"time",!0,!0,1],["short hundredweight","cwt",["shweight"],"mass",!1,!0,45.359237],["siemens","S",null,"electrical_conductance",!0,!1,1],["sievert","Sv",null,"equivalent_dose",!0,!1,1],["slug","sg",null,"mass",!1,!0,14.59390294],["square ångström","ang2",["ang^2"],"area",!1,!0,1e-20],["square foot","ft2",["ft^2"],"area",!1,!0,.09290304],["square inch","in2",["in^2"],"area",!1,!0,64516e-8],["square light-year","ly2",["ly^2"],"area",!1,!0,895054210748189e17],["square meter","m?",null,"area",!0,!0,1],["square mile","mi2",["mi^2"],"area",!1,!0,2589988.110336],["square nautical mile","Nmi2",["Nmi^2"],"area",!1,!0,3429904],["square Pica","Pica2",["Picapt2","Pica^2","Picapt^2"],"area",!1,!0,1792111111111e-17],["square yard","yd2",["yd^2"],"area",!1,!0,.83612736],["statute mile","mi",null,"length",!1,!0,1609.344],["steradian","sr",null,"solid_angle",!0,!1,1],["stilb","sb",null,"luminance",!1,!1,1e-4],["stokes","St",null,"kinematic_viscosity",!1,!1,1e-4],["stone","stone",null,"mass",!1,!0,6.35029318],["tablespoon","tbs",null,"volume",!1,!0,147868e-10],["teaspoon","tsp",null,"volume",!1,!0,492892e-11],["tesla","T",null,"magnetic_flux_density",!0,!0,1],["thermodynamic calorie","c",null,"energy",!1,!0,4.184],["ton","ton",null,"mass",!1,!0,907.18474],["tonne","t",null,"mass",!1,!1,1e3],["U.K. pint","uk_pt",null,"volume",!1,!0,.00056826125],["U.S. bushel","bushel",null,"volume",!1,!0,.03523907],["U.S. oil barrel","barrel",null,"volume",!1,!0,.158987295],["U.S. pint","pt",["us_pt"],"volume",!1,!0,.000473176473],["U.S. survey mile","survey_mi",null,"length",!1,!0,1609.347219],["U.S. survey/statute acre","us_acre",null,"area",!1,!0,4046.87261],["volt","V",null,"voltage",!0,!1,1],["watt","W",null,"power",!0,!0,1],["watt-hour","Wh",["wh"],"energy",!1,!0,3600],["weber","Wb",null,"magnetic_flux",!0,!1,1],["yard","yd",null,"length",!1,!0,.9144],["year","yr",null,"time",!1,!0,31557600]],r={Yi:["yobi",80,12089258196146292e8,"Yi","yotta"],Zi:["zebi",70,11805916207174113e5,"Zi","zetta"],Ei:["exbi",60,0x1000000000000000,"Ei","exa"],Pi:["pebi",50,0x4000000000000,"Pi","peta"],Ti:["tebi",40,1099511627776,"Ti","tera"],Gi:["gibi",30,1073741824,"Gi","giga"],Mi:["mebi",20,1048576,"Mi","mega"],ki:["kibi",10,1024,"ki","kilo"]},l={Y:["yotta",1e24,"Y"],Z:["zetta",1e21,"Z"],E:["exa",1e18,"E"],P:["peta",1e15,"P"],T:["tera",1e12,"T"],G:["giga",1e9,"G"],M:["mega",1e6,"M"],k:["kilo",1e3,"k"],h:["hecto",100,"h"],e:["dekao",10,"e"],d:["deci",.1,"d"],c:["centi",.01,"c"],m:["milli",.001,"m"],u:["micro",1e-6,"u"],n:["nano",1e-9,"n"],p:["pico",1e-12,"p"],f:["femto",1e-15,"f"],a:["atto",1e-18,"a"],z:["zepto",1e-21,"z"],y:["yocto",1e-24,"y"]};let i,s=null,a=null,u=t,c=o,d=1,p=1;for(let e=0;e<n.length;e++)i=null===n[e][2]?[]:n[e][2],(n[e][1]===u||i.indexOf(u)>=0)&&(s=n[e]),(n[e][1]===c||i.indexOf(c)>=0)&&(a=n[e]);if(null===s){const e=r[t.substring(0,2)];let o=l[t.substring(0,1)];"da"===t.substring(0,2)&&(o=["dekao",10,"da"]),e?(d=e[2],u=t.substring(2)):o&&(d=o[1],u=t.substring(o[2].length));for(let e=0;e<n.length;e++)i=null===n[e][2]?[]:n[e][2],(n[e][1]===u||i.indexOf(u)>=0)&&(s=n[e])}if(null===a){const e=r[o.substring(0,2)];let t=l[o.substring(0,1)];"da"===o.substring(0,2)&&(t=["dekao",10,"da"]),e?(p=e[2],c=o.substring(2)):t&&(p=t[1],c=o.substring(t[2].length));for(let e=0;e<n.length;e++)i=null===n[e][2]?[]:n[e][2],(n[e][1]===c||i.indexOf(c)>=0)&&(a=n[e])}return null===s||null===a||s[3]!==a[3]?f:e*s[6]*d/(a[6]*p)},t.CORREL=function(e,t){return M(e=L(v(e)),t=L(v(t)))?s:n.corrcoeff(e,t)},t.COS=function(e){return(e=F(e))instanceof Error?e:Math.cos(e)},t.COSH=function(e){return(e=F(e))instanceof Error?e:(Math.exp(e)+Math.exp(-e))/2},t.COT=function(e){return(e=F(e))instanceof Error?e:0===e?i:1/Math.tan(e)},t.COTH=function(e){if((e=F(e))instanceof Error)return e;if(0===e)return i;const t=Math.exp(2*e);return(t+1)/(t-1)},t.COUNT=se,t.COUNTA=ae,t.COUNTBLANK=ue,t.COUNTIF=function(e,t){if(e=v(e),void 0===t||"*"===t)return e.length;let o=0;const n=Y(t+"");for(let t=0;t<e.length;t++){const r=[z(e[t],U)].concat(n);W(r)&&o++}return o},t.COUNTIFS=function(){const e=j(arguments),t=new Array(v(e[0]).length);for(let e=0;e<t.length;e++)t[e]=!0;for(let o=0;o<e.length;o+=2){const n=v(e[o]),r=e[o+1];if(void 0!==r&&"*"!==r){const e=Y(r+"");for(let o=0;o<n.length;o++){const r=[z(n[o],U)].concat(e);t[o]=t[o]&&W(r)}}}let o=0;for(let e=0;e<t.length;e++)t[e]&&o++;return o},t.COUPDAYBS=function(){throw new Error("COUPDAYBS is not implemented")},t.COUPDAYS=function(){throw new Error("COUPDAYS is not implemented")},t.COUPDAYSNC=function(){throw new Error("COUPDAYSNC is not implemented")},t.COUPNCD=function(){throw new Error("COUPNCD is not implemented")},t.COUPNUM=function(){throw new Error("COUPNUM is not implemented")},t.COUPPCD=function(){throw new Error("COUPPCD is not implemented")},t.COVAR=zt,t.COVARIANCE=ce,t.COVARIANCEP=Yt,t.COVARIANCES=Wt,t.CRITBINOM=Xt,t.CSC=function(e){return(e=F(e))instanceof Error?e:0===e?i:1/Math.sin(e)},t.CSCH=function(e){return(e=F(e))instanceof Error?e:0===e?i:2/(Math.exp(e)-Math.exp(-e))},t.CUMIPMT=function(e,t,o,n,r,l){if(M(e=F(e),t=F(t),o=F(o)))return s;if(e<=0||t<=0||o<=0)return c;if(n<1||r<1||n>r)return c;if(0!==l&&1!==l)return c;const i=Go(e,t,o,0,l);let a=0;1===n&&(0===l&&(a=-o),n++);for(let t=n;t<=r;t++)a+=1===l?Yo(e,t-2,i,o,1)-i:Yo(e,t-1,i,o,0);return a*=e,a},t.CUMPRINC=function(e,t,o,n,r,l){if(M(e=F(e),t=F(t),o=F(o)))return s;if(e<=0||t<=0||o<=0)return c;if(n<1||r<1||n>r)return c;if(0!==l&&1!==l)return c;const i=Go(e,t,o,0,l);let a=0;1===n&&(a=0===l?i+o*e:i,n++);for(let t=n;t<=r;t++)a+=l>0?i-(Yo(e,t-2,i,o,1)-i)*e:i-Yo(e,t-1,i,o,0)*e;return a},t.DATE=function(e,t,o){let n;return M(e=F(e),t=F(t),o=F(o))?n=s:(n=new Date(e,t-1,o),n.getFullYear()<0&&(n=c)),n},t.DATEDIF=ot,t.DATEVALUE=function(e){if("string"!=typeof e)return s;const t=Date.parse(e);return isNaN(t)?s:new Date(e)},t.DAVERAGE=function(e,t,o){if(isNaN(t)&&"string"!=typeof t)return s;const n=qo(e,o);let r=[];if("string"==typeof t){const o=A(e,t);r=x(e[o])}else r=x(e[t]);let l=0;return h(n,(e=>{l+=r[e]})),0===n.length?i:l/n.length},t.DAY=function(e){const t=D(e);return t instanceof Error?t:t.getDate()},t.DAYS=rt,t.DAYS360=lt,t.DB=function(e,t,o,n,r){if(r=void 0===r?12:r,M(e=F(e),t=F(t),o=F(o),n=F(n),r=F(r)))return s;if(e<0||t<0||o<0||n<0)return c;if(-1===[1,2,3,4,5,6,7,8,9,10,11,12].indexOf(r))return c;if(n>o)return c;if(t>=e)return 0;const l=(1-Math.pow(t/e,1/o)).toFixed(3),i=e*l*r/12;let a=i,u=0;const f=n===o?o-1:n;for(let t=2;t<=f;t++)u=(e-a)*l,a+=u;return 1===n?i:n===o?(e-a)*l:u},t.DBCS=function(){throw new Error("DBCS is not implemented")},t.DCOUNT=function(e,t,o){if(isNaN(t)&&"string"!=typeof t)return s;const n=qo(e,o);let r=[];if("string"==typeof t){const o=A(e,t);r=x(e[o])}else r=x(e[t]);const l=[];return h(n,(e=>{l.push(r[e])})),se(l)},t.DCOUNTA=function(e,t,o){if(isNaN(t)&&"string"!=typeof t)return s;const n=qo(e,o);let r=[];if("string"==typeof t){const o=A(e,t);r=x(e[o])}else r=x(e[t]);const l=[];return h(n,(e=>{l.push(r[e])})),ae(l)},t.DDB=function(e,t,o,n,r){if(r=void 0===r?2:r,M(e=F(e),t=F(t),o=F(o),n=F(n),r=F(r)))return s;if(e<0||t<0||o<0||n<0||r<=0)return c;if(n>o)return c;if(t>=e)return 0;let l=0,i=0;for(let s=1;s<=n;s++)i=Math.min(r/o*(e-l),e-t-l),l+=i;return i},t.DEC2BIN=function(e,t){if((e=F(e))instanceof Error)return e;if(!/^-?[0-9]{1,3}$/.test(e)||e<-512||e>511)return c;if(e<0)return"1"+mt("0",9-(512+e).toString(2).length)+(512+e).toString(2);const o=parseInt(e,10).toString(2);return void 0===t?o:isNaN(t)?s:t<0?c:(t=Math.floor(t))>=o.length?mt("0",t-o.length)+o:c},t.DEC2HEX=function(e,t){if((e=F(e))instanceof Error)return e;if(!/^-?[0-9]{1,12}$/.test(e)||e<-549755813888||e>549755813887)return c;if(e<0)return(1099511627776+e).toString(16);const o=parseInt(e,10).toString(16);return void 0===t?o:isNaN(t)?s:t<0?c:(t=Math.floor(t))>=o.length?mt("0",t-o.length)+o:c},t.DEC2OCT=function(e,t){if((e=F(e))instanceof Error)return e;if(!/^-?[0-9]{1,9}$/.test(e)||e<-536870912||e>536870911)return c;if(e<0)return(1073741824+e).toString(8);const o=parseInt(e,10).toString(8);return void 0===t?o:isNaN(t)?s:t<0?c:(t=Math.floor(t))>=o.length?mt("0",t-o.length)+o:c},t.DECIMAL=function(e,t){return arguments.length<1?s:E(e=F(e),t=F(t))||(0===t?c:parseInt(e,t))},t.DEGREES=function(e){return(e=F(e))instanceof Error?e:180*e/Math.PI},t.DELTA=function(e,t){return t=void 0===t?0:t,M(e=F(e),t=F(t))?s:e===t?1:0},t.DEVSQ=function(){const e=L(v(arguments));if(e instanceof Error)return e;const t=n.mean(e);let o=0;for(let n=0;n<e.length;n++)o+=Math.pow(e[n]-t,2);return o},t.DGET=function(e,t,o){if(isNaN(t)&&"string"!=typeof t)return s;const n=qo(e,o);let r=[];return r=x("string"==typeof t?e[A(e,t)]:e[t]),0===n.length?s:n.length>1?c:r[n[0]]},t.DISC=function(e,t,o,n,r){if(M(e=D(e),t=D(t),o=F(o),n=F(n),r=(r=F(r))||0))return s;if(o<=0||n<=0)return c;if(e>=t)return s;let l,i;switch(r){case 0:l=360,i=lt(e,t,!1);break;case 1:case 3:l=365,i=ot(e,t,"D");break;case 2:l=360,i=ot(e,t,"D");break;case 4:l=360,i=lt(e,t,!0);break;default:return c}return(n-o)/n*l/i},t.DMAX=function(e,t,o){if(isNaN(t)&&"string"!=typeof t)return s;const n=qo(e,o);let r=[];if("string"==typeof t){const o=A(e,t);r=x(e[o])}else r=x(e[t]);let l=r[n[0]];return h(n,(e=>{l<r[e]&&(l=r[e])})),l},t.DMIN=function(e,t,o){if(isNaN(t)&&"string"!=typeof t)return s;const n=qo(e,o);let r=[];if("string"==typeof t){const o=A(e,t);r=x(e[o])}else r=x(e[t]);let l=r[n[0]];return h(n,(e=>{l>r[e]&&(l=r[e])})),l},t.DOLLAR=function(e,t=2){if(e=F(e),isNaN(e))return s;const o={style:"currency",currency:"USD",minimumFractionDigits:t>=0?t:0,maximumFractionDigits:t>=0?t:0},n=(e=Ke(e,t)).toLocaleString("en-US",o);return e<0?"$("+n.slice(2)+")":n},t.DOLLARDE=function(e,t){if(M(e=F(e),t=F(t)))return s;if(t<0)return c;if(t>=0&&t<1)return i;t=parseInt(t,10);let o=parseInt(e,10);o+=e%1*Math.pow(10,Math.ceil(Math.log(t)/Math.LN10))/t;const n=Math.pow(10,Math.ceil(Math.log(t)/Math.LN2)+1);return o=Math.round(o*n)/n,o},t.DOLLARFR=function(e,t){if(M(e=F(e),t=F(t)))return s;if(t<0)return c;if(t>=0&&t<1)return i;t=parseInt(t,10);let o=parseInt(e,10);return o+=e%1*Math.pow(10,-Math.ceil(Math.log(t)/Math.LN10))*t,o},t.DPRODUCT=function(e,t,o){if(isNaN(t)&&"string"!=typeof t)return s;const n=qo(e,o);let r=[];if("string"==typeof t){const o=A(e,t);r=x(e[o])}else r=x(e[t]);let l=[];h(n,(e=>{l.push(r[e])})),l=Vo(l);let i=1;return h(l,(e=>{i*=e})),i},t.DSTDEV=function(e,t,o){if(isNaN(t)&&"string"!=typeof t)return s;const n=qo(e,o);let r=[];if("string"==typeof t){const o=A(e,t);r=x(e[o])}else r=x(e[t]);let l=[];return h(n,(e=>{l.push(r[e])})),l=Vo(l),Re.S(l)},t.DSTDEVP=function(e,t,o){if(isNaN(t)&&"string"!=typeof t)return s;const n=qo(e,o);let r=[];if("string"==typeof t){const o=A(e,t);r=x(e[o])}else r=x(e[t]);let l=[];return h(n,(e=>{l.push(r[e])})),l=Vo(l),Re.P(l)},t.DSUM=function(e,t,o){if(isNaN(t)&&"string"!=typeof t)return s;const n=qo(e,o);let r=[];if("string"==typeof t){const o=A(e,t);r=x(e[o])}else r=x(e[t]);const l=[];return h(n,(e=>{l.push(r[e])})),$e(l)},t.DURATION=function(){throw new Error("DURATION is not implemented")},t.DVAR=function(e,t,o){if(isNaN(t)&&"string"!=typeof t)return s;const n=qo(e,o);let r=[];if("string"==typeof t){const o=A(e,t);r=x(e[o])}else r=x(e[t]);const l=[];return h(n,(e=>{l.push(r[e])})),ke.S(l)},t.DVARP=function(e,t,o){if(isNaN(t)&&"string"!=typeof t)return s;const n=qo(e,o);let r=[];if("string"==typeof t){const o=A(e,t);r=x(e[o])}else r=x(e[t]);const l=[];return h(n,(e=>{l.push(r[e])})),ke.P(l)},t.EDATE=function(e,t){return(e=D(e))instanceof Error?e:isNaN(t)?s:(t=parseInt(t,10),e.setMonth(e.getMonth()+t),e)},t.EFFECT=function(e,t){return M(e=F(e),t=F(t))?s:e<=0||t<1?c:(t=parseInt(t,10),Math.pow(1+e/t,t)-1)},t.EOMONTH=function(e,t){return(e=D(e))instanceof Error?e:isNaN(t)?s:(t=parseInt(t,10),new Date(e.getFullYear(),e.getMonth()+t+1,0))},t.ERF=wt,t.ERFC=At,t.ERFCPRECISE=Gt,t.ERFPRECISE=Kt,t.ERROR=X,t.EVEN=function(e){return(e=F(e))instanceof Error?e:Ve(e,-2,-1)},t.EXACT=function(e,t){return 2!==arguments.length?f:E(e,t)||(e=R(e))===R(t)},t.EXP=function(e){return arguments.length<1?f:arguments.length>1?d:(e=F(e))instanceof Error?e:e=Math.exp(e)},t.EXPON=fe,t.EXPONDIST=$t,t.F=de,t.FACT=ze,t.FACTDOUBLE=function e(t){if((t=F(t))instanceof Error)return t;const o=Math.floor(t);return o<=0?1:o*e(o-2)},t.FALSE=function(){return!1},t.FDIST=Jt,t.FDISTRT=Qt,t.FIND=function(e,t,o){if(arguments.length<2)return f;e=R(e),o=void 0===o?0:o;const n=(t=R(t)).indexOf(e,o-1);return-1===n?s:n+1},t.FINV=Zt,t.FINVRT=eo,t.FISHER=function(e){return(e=F(e))instanceof Error?e:Math.log((1+e)/(1-e))/2},t.FISHERINV=function(e){if((e=F(e))instanceof Error)return e;const t=Math.exp(2*e);return(t-1)/(t+1)},t.FIXED=gt,t.FLOOR=Ye,t.FLOORMATH=to,t.FLOORPRECISE=oo,t.FORECAST=pe,t.FREQUENCY=function(e,t){if(M(e=L(v(e)),t=L(v(t))))return s;const o=e.length,n=t.length,r=[];for(let l=0;l<=n;l++){r[l]=0;for(let i=0;i<o;i++)0===l?e[i]<=t[0]&&(r[0]+=1):l<n?e[i]>t[l-1]&&e[i]<=t[l]&&(r[l]+=1):l===n&&e[i]>t[n-1]&&(r[n]+=1)}return r},t.FTEST=no,t.FV=Yo,t.FVSCHEDULE=function(e,t){if(M(e=F(e),t=L(v(t))))return s;const o=t.length;let n=e;for(let e=0;e<o;e++)n*=1+t[e];return n},t.GAMMA=be,t.GAMMADIST=ro,t.GAMMAINV=lo,t.GAMMALN=je,t.GAMMALNPRECISE=io,t.GAUSS=function(e){return(e=F(e))instanceof Error?e:n.normal.cdf(e,0,1)-.5},t.GCD=function(){const e=L(v(arguments));if(e instanceof Error)return e;const t=e.length,o=e[0];let n=o<0?-o:o;for(let o=1;o<t;o++){const t=e[o];let r=t<0?-t:t;for(;n&&r;)n>r?n%=r:r%=n;n+=r}return n},t.GEOMEAN=function(){const e=L(v(arguments));return e instanceof Error?e:n.geomean(e)},t.GESTEP=function(e,t){return M(t=t||0,e=F(e))?e:e>=t?1:0},t.GROWTH=function(e,t,o,n){if((e=L(e))instanceof Error)return e;let r;if(void 0===t)for(t=[],r=1;r<=e.length;r++)t.push(r);if(void 0===o)for(o=[],r=1;r<=e.length;r++)o.push(r);if(M(t=L(t),o=L(o)))return s;void 0===n&&(n=!0);const l=e.length;let i,a,u=0,c=0,f=0,d=0;for(r=0;r<l;r++){const o=t[r],n=Math.log(e[r]);u+=o,c+=n,f+=o*n,d+=o*o}u/=l,c/=l,f/=l,d/=l,n?(i=(f-u*c)/(d-u*u),a=c-i*u):(i=f/d,a=0);const p=[];for(r=0;r<o.length;r++)p.push(Math.exp(a+i*o[r]));return p},t.HARMEAN=function(){const e=L(v(arguments));if(e instanceof Error)return e;const t=e.length;let o=0;for(let n=0;n<t;n++)o+=1/e[n];return t/o},t.HEX2BIN=function(e,t){if(!/^[0-9A-Fa-f]{1,10}$/.test(e))return c;const o=!(10!==e.length||"f"!==e.substring(0,1).toLowerCase()),n=o?parseInt(e,16)-1099511627776:parseInt(e,16);if(n<-512||n>511)return c;if(o)return"1"+mt("0",9-(512+n).toString(2).length)+(512+n).toString(2);const r=n.toString(2);return void 0===t?r:isNaN(t)?s:t<0?c:(t=Math.floor(t))>=r.length?mt("0",t-r.length)+r:c},t.HEX2DEC=function(e){if(!/^[0-9A-Fa-f]{1,10}$/.test(e))return c;const t=parseInt(e,16);return t>=549755813888?t-1099511627776:t},t.HEX2OCT=function(e,t){if(!/^[0-9A-Fa-f]{1,10}$/.test(e))return c;const o=parseInt(e,16);if(o>536870911&&o<0xffe0000000)return c;if(o>=0xffe0000000)return(o-0xffc0000000).toString(8);const n=o.toString(8);return void 0===t?n:isNaN(t)?s:t<0?c:(t=Math.floor(t))>=n.length?mt("0",t-n.length)+n:c},t.HLOOKUP=function(e,t,o,n){return ee(e,w(t),o,n)},t.HOUR=function(e){return(e=D(e))instanceof Error?e:e.getHours()},t.HYPGEOM=he,t.HYPGEOMDIST=so,t.IF=function(e,t,o){return e instanceof Error?e:(null==(t=!(arguments.length>=2)||t)&&(t=0),null==(o=3===arguments.length&&o)&&(o=0),e?t:o)},t.IFERROR=function(e,t){return K(e)?t:e},t.IFNA=function(e,t){return e===f?t:e},t.IFS=function(){for(let e=0;e<arguments.length/2;e++)if(arguments[2*e])return arguments[2*e+1];return f},t.IMABS=Et,t.IMAGINARY=Mt,t.IMARGUMENT=It,t.IMCONJUGATE=function(e){const t=Tt(e),o=Mt(e);if(M(t,o))return s;let n=e.substring(e.length-1);return n="i"===n||"j"===n?n:"i",0!==o?xt(t,-o,n):e},t.IMCOS=Nt,t.IMCOSH=St,t.IMCOT=function(e){return M(Tt(e),Mt(e))?s:Dt(Nt(e),Ft(e))},t.IMCSC=function(e){return!0===e||!1===e?s:M(Tt(e),Mt(e))?c:Dt("1",Ft(e))},t.IMCSCH=function(e){return!0===e||!1===e?s:M(Tt(e),Mt(e))?c:Dt("1",Lt(e))},t.IMDIV=Dt,t.IMEXP=function(e){const t=Tt(e),o=Mt(e);if(M(t,o))return s;let n=e.substring(e.length-1);n="i"===n||"j"===n?n:"i";const r=Math.exp(t);return xt(r*Math.cos(o),r*Math.sin(o),n)},t.IMLN=function(e){const t=Tt(e),o=Mt(e);if(M(t,o))return s;let n=e.substring(e.length-1);return n="i"===n||"j"===n?n:"i",xt(Math.log(Math.sqrt(t*t+o*o)),Math.atan(o/t),n)},t.IMLOG10=function(e){const t=Tt(e),o=Mt(e);if(M(t,o))return s;let n=e.substring(e.length-1);return n="i"===n||"j"===n?n:"i",xt(Math.log(Math.sqrt(t*t+o*o))/Math.log(10),Math.atan(o/t)/Math.log(10),n)},t.IMLOG2=function(e){const t=Tt(e),o=Mt(e);if(M(t,o))return s;let n=e.substring(e.length-1);return n="i"===n||"j"===n?n:"i",xt(Math.log(Math.sqrt(t*t+o*o))/Math.log(2),Math.atan(o/t)/Math.log(2),n)},t.IMPOWER=function(e,t){if(M(t=F(t),Tt(e),Mt(e)))return s;let o=e.substring(e.length-1);o="i"===o||"j"===o?o:"i";const n=Math.pow(Et(e),t),r=It(e);return xt(n*Math.cos(t*r),n*Math.sin(t*r),o)},t.IMPRODUCT=function(){let e=arguments[0];if(!arguments.length)return s;for(let t=1;t<arguments.length;t++){const o=Tt(e),n=Mt(e),r=Tt(arguments[t]),l=Mt(arguments[t]);if(M(o,n,r,l))return s;e=xt(o*r-n*l,o*l+n*r)}return e},t.IMREAL=Tt,t.IMSEC=function(e){return!0===e||!1===e||M(Tt(e),Mt(e))?s:Dt("1",Nt(e))},t.IMSECH=function(e){return M(Tt(e),Mt(e))?s:Dt("1",St(e))},t.IMSIN=Ft,t.IMSINH=Lt,t.IMSQRT=function(e){if(M(Tt(e),Mt(e)))return s;let t=e.substring(e.length-1);t="i"===t||"j"===t?t:"i";const o=Math.sqrt(Et(e)),n=It(e);return xt(o*Math.cos(n/2),o*Math.sin(n/2),t)},t.IMSUB=function(e,t){const o=Tt(e),n=Mt(e),r=Tt(t),l=Mt(t);if(M(o,n,r,l))return s;const i=e.substring(e.length-1),a=t.substring(t.length-1);let u="i";return("j"===i||"j"===a)&&(u="j"),xt(o-r,n-l,u)},t.IMSUM=function(){if(!arguments.length)return s;const e=v(arguments);let t=e[0];for(let o=1;o<e.length;o++){const n=Tt(t),r=Mt(t),l=Tt(e[o]),i=Mt(e[o]);if(M(n,r,l,i))return s;t=xt(n+l,r+i)}return t},t.IMTAN=function(e){return!0===e||!1===e||M(Tt(e),Mt(e))?s:Dt(Ft(e),Nt(e))},t.INDEX=function(e,t,o){const n=E(e,t,o);if(n)return n;if(!Array.isArray(e))return s;const r=e.length>0&&!Array.isArray(e[0]);return r&&!o?(o=t,t=1):(o=o||1,t=t||1),o<0||t<0?s:r&&1===t&&o<=e.length?e[o-1]:t<=e.length&&o<=e[t-1].length?e[t-1][o-1]:a},t.INFO=function(){throw new Error("INFO is not implemented")},t.INT=function(e){return(e=F(e))instanceof Error?e:Math.floor(e)},t.INTERCEPT=function(e,t){return M(e=L(e),t=L(t))?s:e.length!==t.length?f:pe(0,e,t)},t.INTRATE=function(){throw new Error("INTRATE is not implemented")},t.IPMT=Wo,t.IRR=function(e,t){if(t=t||0,M(e=L(v(e)),t=F(t)))return s;const o=(e,t,o)=>{const n=o+1;let r=e[0];for(let o=1;o<e.length;o++)r+=e[o]/Math.pow(n,(t[o]-t[0])/365);return r},n=(e,t,o)=>{const n=o+1;let r=0;for(let o=1;o<e.length;o++){const l=(t[o]-t[0])/365;r-=l*e[o]/Math.pow(n,l+1)}return r},r=[];let l=!1,i=!1;for(let t=0;t<e.length;t++)r[t]=0===t?0:r[t-1]+365,e[t]>0&&(l=!0),e[t]<0&&(i=!0);if(!l||!i)return c;let a,u,f,d=t=void 0===t?.1:t,p=!0;do{f=o(e,r,d),a=d-f/n(e,r,d),u=Math.abs(a-d),d=a,p=u>1e-10&&Math.abs(f)>1e-10}while(p);return d},t.ISBLANK=function(e){return null===e},t.ISERR=G,t.ISERROR=K,t.ISEVEN=function(e){return!(1&Math.floor(Math.abs(e)))},t.ISFORMULA=function(){throw new Error("ISFORMULA is not implemented")},t.ISLOGICAL=$,t.ISNA=function(e){return e===f},t.ISNONTEXT=function(e){return"string"!=typeof e},t.ISNUMBER=J,t.ISO=We,t.ISODD=function(e){return!!(1&Math.floor(Math.abs(e)))},t.ISOWEEKNUM=it,t.ISPMT=function(e,t,o,n){return M(e=F(e),t=F(t),o=F(o),n=F(n))?s:n*e*(t/o-1)},t.ISREF=function(){throw new Error("ISREF is not implemented")},t.ISTEXT=Q,t.KURT=function(){const e=L(v(arguments));if(e instanceof Error)return e;const t=n.mean(e),o=e.length;let r=0;for(let n=0;n<o;n++)r+=Math.pow(e[n]-t,4);return r/=Math.pow(n.stdev(e,!0),4),o*(o+1)/((o-1)*(o-2)*(o-3))*r-3*(o-1)*(o-1)/((o-2)*(o-3))},t.LARGE=ge,t.LCM=function(){const e=L(v(arguments));if(e instanceof Error)return e;for(var t,o,n,r,l=1;void 0!==(n=e.pop());){if(0===n)return 0;for(;n>1;){if(n%2){for(t=3,o=Math.floor(Math.sqrt(n));t<=o&&n%t;t+=2);r=t<=o?t:n}else r=2;for(n/=r,l*=r,t=e.length;t;e[--t]%r==0&&1==(e[t]/=r)&&e.splice(t,1));}}return l},t.LEFT=function(e,t){return E(e,t)||(e=R(e),(t=F(t=void 0===t?1:t))instanceof Error||"string"!=typeof e?s:e.substring(0,t))},t.LEN=function(e){return 0===arguments.length?d:e instanceof Error?e:Array.isArray(e)?s:R(e).length},t.LINEST=me,t.LN=function(e){return(e=F(e))instanceof Error?e:0===e?c:Math.log(e)},t.LOG=function(e,t){return E(e=F(e),t=F(t))||(0===e||0===t?c:Math.log(e)/Math.log(t))},t.LOG10=function(e){return(e=F(e))instanceof Error?e:0===e?c:Math.log(e)/Math.log(10)},t.LOGEST=function(e,t){if(M(e=L(v(e)),t=L(v(t))))return s;if(e.length!==t.length)return s;for(let t=0;t<e.length;t++)e[t]=Math.log(e[t]);const o=me(e,t);return o[0]=Math.round(1e6*Math.exp(o[0]))/1e6,o[1]=Math.round(1e6*Math.exp(o[1]))/1e6,o},t.LOGINV=ao,t.LOGNORM=ve,t.LOGNORMDIST=uo,t.LOGNORMINV=co,t.LOOKUP=function(e,t,o){t=v(t),o=o?v(o):t;const n="number"==typeof e;let r=f;for(let l=0;l<t.length;l++){if(t[l]===e)return o[l];if(n&&t[l]<=e||"string"==typeof t[l]&&t[l].localeCompare(e)<0)r=o[l];else if(n&&t[l]>e)return r}return r},t.LOWER=function(e){return 1!==arguments.length?s:M(e=R(e))?e:e.toLowerCase()},t.MATCH=function(e,t,o){if(!e||!t)return f;if(2===arguments.length&&(o=1),!((t=v(t))instanceof Array))return f;if(-1!==o&&0!==o&&1!==o)return f;let n,r;for(let l=0;l<t.length;l++)if(1===o){if(t[l]===e)return l+1;t[l]<e&&(r?t[l]>r&&(n=l+1,r=t[l]):(n=l+1,r=t[l]))}else if(0===o){if("string"==typeof e&&"string"==typeof t[l]){const o=e.toLowerCase().replace(/\?/g,".").replace(/\*/g,".*").replace(/~/g,"\\");if(new RegExp("^"+o+"$").test(t[l].toLowerCase()))return l+1}else if(t[l]===e)return l+1}else if(-1===o){if(t[l]===e)return l+1;t[l]>e&&(r?t[l]<r&&(n=l+1,r=t[l]):(n=l+1,r=t[l]))}return n||f},t.MAX=ye,t.MAXA=function(){const e=v(arguments),t=E.apply(void 0,e);if(t)return t;let o=g(e);return o=o.map((e=>null==e?0:e)),0===o.length?0:Math.max.apply(Math,o)},t.MDURATION=function(){throw new Error("MDURATION is not implemented")},t.MEDIAN=Ce,t.MID=function(e,t,o){if(null==t)return s;if(M(t=F(t),o=F(o))||"string"!=typeof e)return o;const n=t-1,r=n+o;return e.substring(n,r)},t.MIN=xe,t.MINA=function(){const e=v(arguments),t=E.apply(void 0,e);if(t)return t;let o=g(e);return o=o.map((e=>null==e?0:e)),0===o.length?0:Math.min.apply(Math,o)},t.MINUTE=function(e){return(e=D(e))instanceof Error?e:e.getMinutes()},t.MIRR=function(e,t,o){if(M(e=L(v(e)),t=F(t),o=F(o)))return s;const n=e.length,r=[],l=[];for(let t=0;t<n;t++)e[t]<0?r.push(e[t]):l.push(e[t]);const i=-Xo(o,l)*Math.pow(1+o,n-1),a=Xo(t,r)*(1+t);return Math.pow(i/a,1/(n-1))-1},t.MMULT=function(e,t){return!Array.isArray(e)||!Array.isArray(t)||e.some((e=>!e.length))||t.some((e=>!e.length))||y(e).some((e=>"number"!=typeof e))||y(t).some((e=>"number"!=typeof e))||e[0].length!==t.length?s:Array(e.length).fill(0).map((()=>Array(t[0].length).fill(0))).map(((o,n)=>o.map(((o,r)=>e[n].reduce(((e,o,n)=>e+o*t[n][r]),0)))))},t.MOD=function(e,t){const o=E(e=F(e),t=F(t));if(o)return o;if(0===t)return i;let n=Math.abs(e%t);return n=e<0?t-n:n,t>0?n:-n},t.MODE=we,t.MODEMULT=fo,t.MODESNGL=po,t.MONTH=function(e){return(e=D(e))instanceof Error?e:e.getMonth()+1},t.MROUND=function(e,t){return E(e=F(e),t=F(t))||(e*t==0?0:e*t<0?c:Math.round(e/t)*t)},t.MULTINOMIAL=function(){const e=L(v(arguments));if(e instanceof Error)return e;let t=0,o=1;for(let n=0;n<e.length;n++)t+=e[n],o*=ze(e[n]);return ze(t)/o},t.MUNIT=function(e){return arguments.length>1?f:!(e=parseInt(e))||e<=0?s:Array(e).fill(0).map((()=>Array(e).fill(0))).map(((e,t)=>(e[t]=1,e)))},t.N=function(e){return J(e)?e:e instanceof Date?e.getTime():!0===e?1:!1===e?0:K(e)?e:0},t.NA=function(){return f},t.NEGBINOM=Ae,t.NEGBINOMDIST=bo,t.NETWORKDAYS=st,t.NETWORKDAYSINTL=jo,t.NOMINAL=function(e,t){return M(e=F(e),t=F(t))?s:e<=0||t<1?c:(t=parseInt(t,10),(Math.pow(e+1,1/t)-1)*t)},t.NORM=Ee,t.NORMDIST=ho,t.NORMINV=go,t.NORMSDIST=mo,t.NORMSINV=vo,t.NOT=function(e){return"string"==typeof e?s:e instanceof Error?e:!e},t.NOW=function(){return new Date},t.NPER=function(e,t,o,n,r){if(r=void 0===r?0:r,n=void 0===n?0:n,M(e=F(e),t=F(t),o=F(o),n=F(n),r=F(r)))return s;if(0===e)return-(o+n)/t;{const l=t*(1+e*r)-n*e,i=o*e+t*(1+e*r);return Math.log(l/i)/Math.log(1+e)}},t.NPV=Xo,t.NUMBERVALUE=function(e,t,o){return"number"==typeof(e=k(e)?e:"")?e:"string"!=typeof e?f:(t=void 0===t?".":t,o=void 0===o?",":o,Number(e.replace(t,".").replace(o,"")))},t.OCT2BIN=function(e,t){if(!/^[0-7]{1,10}$/.test(e))return c;const o=!(10!==e.length||"7"!==e.substring(0,1)),n=o?parseInt(e,8)-1073741824:parseInt(e,8);if(n<-512||n>511)return c;if(o)return"1"+mt("0",9-(512+n).toString(2).length)+(512+n).toString(2);const r=n.toString(2);return void 0===t?r:isNaN(t)?s:t<0?c:(t=Math.floor(t))>=r.length?mt("0",t-r.length)+r:c},t.OCT2DEC=function(e){if(!/^[0-7]{1,10}$/.test(e))return c;const t=parseInt(e,8);return t>=536870912?t-1073741824:t},t.OCT2HEX=function(e,t){if(!/^[0-7]{1,10}$/.test(e))return c;const o=parseInt(e,8);if(o>=536870912)return"ff"+(o+3221225472).toString(16);const n=o.toString(16);return void 0===t?n:isNaN(t)?s:t<0?c:(t=Math.floor(t))>=n.length?mt("0",t-n.length)+n:c},t.ODD=function(e){if((e=F(e))instanceof Error)return e;let t=Math.ceil(Math.abs(e));return t=1&t?t:t+1,e>=0?t:-t},t.ODDFPRICE=function(){throw new Error("ODDFPRICE is not implemented")},t.ODDFYIELD=function(){throw new Error("ODDFYIELD is not implemented")},t.ODDLPRICE=function(){throw new Error("ODDLPRICE is not implemented")},t.ODDLYIELD=function(){throw new Error("ODDLYIELD is not implemented")},t.OR=function(){const e=v(arguments);let t=s;for(let o=0;o<e.length;o++){if(e[o]instanceof Error)return e[o];void 0!==e[o]&&null!==e[o]&&"string"!=typeof e[o]&&(t===s&&(t=!1),e[o]&&(t=!0))}return t},t.PDURATION=function(e,t,o){return M(e=F(e),t=F(t),o=F(o))?s:e<=0?c:(Math.log(o)-Math.log(t))/Math.log(1+e)},t.PEARSON=Me,t.PERCENTILE=Ie,t.PERCENTILEEXC=yo,t.PERCENTILEINC=Co,t.PERCENTRANK=Ne,t.PERCENTRANKEXC=xo,t.PERCENTRANKINC=wo,t.PERMUT=function(e,t){return M(e=F(e),t=F(t))?s:ze(e)/ze(e-t)},t.PERMUTATIONA=function(e,t){return M(e=F(e),t=F(t))?s:Math.pow(e,t)},t.PHI=function(e){return(e=F(e))instanceof Error?s:Math.exp(-.5*e*e)/2.5066282746310002},t.PI=function(){return Math.PI},t.PMT=Go,t.POISSON=Se,t.POISSONDIST=Ao,t.POWER=Xe,t.PPMT=function(e,t,o,n,r,l){return r=r||0,l=l||0,M(e=F(e),o=F(o),n=F(n),r=F(r),l=F(l))?s:Go(e,o,n,r,l)-Wo(e,t,o,n,r,l)},t.PRICE=function(){throw new Error("PRICE is not implemented")},t.PRICEDISC=function(e,t,o,n,r){if(M(e=D(e),t=D(t),o=F(o),n=F(n),r=(r=F(r))||0))return s;if(o<=0||n<=0)return c;if(e>=t)return s;let l,i;switch(r){case 0:l=360,i=lt(e,t,!1);break;case 1:case 3:l=365,i=ot(e,t,"D");break;case 2:l=360,i=ot(e,t,"D");break;case 4:l=360,i=lt(e,t,!0);break;default:return c}return n-o*n*i/l},t.PRICEMAT=function(){throw new Error("PRICEMAT is not implemented")},t.PROB=function(e,t,o,n){if(void 0===o)return 0;if(n=void 0===n?o:n,M(e=L(v(e)),t=L(v(t)),o=F(o),n=F(n)))return s;if(o===n)return e.indexOf(o)>=0?t[e.indexOf(o)]:0;const r=e.sort(((e,t)=>e-t)),l=r.length;let i=0;for(let s=0;s<l;s++)r[s]>=o&&r[s]<=n&&(i+=t[e.indexOf(r[s])]);return i},t.PRODUCT=Ge,t.PRONETIC=function(){throw new Error("PRONETIC is not implemented")},t.PROPER=function(e){return M(e)?e:isNaN(e)&&"number"==typeof e?s:(e=R(e)).replace(/\w\S*/g,(e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()))},t.PV=function(e,t,o,n,r){return n=n||0,r=r||0,M(e=F(e),t=F(t),o=F(o),n=F(n),r=F(r))?s:0===e?-o*t-n:((1-Math.pow(1+e,t))/e*o*(1+e*r)-n)/Math.pow(1+e,t)},t.QUARTILE=De,t.QUARTILEEXC=Eo,t.QUARTILEINC=Mo,t.QUOTIENT=function(e,t){return E(e=F(e),t=F(t))||parseInt(e/t,10)},t.RADIANS=function(e){return(e=F(e))instanceof Error?e:e*Math.PI/180},t.RAND=function(){return Math.random()},t.RANDBETWEEN=function(e,t){return E(e=F(e),t=F(t))||e+Math.ceil((t-e+1)*Math.random())-1},t.RANK=Te,t.RANKAVG=Io,t.RANKEQ=No,t.RATE=function(e,t,o,n,r,l){if(l=void 0===l?.01:l,n=void 0===n?0:n,r=void 0===r?0:r,M(e=F(e),t=F(t),o=F(o),n=F(n),r=F(r),l=F(l)))return s;const i=1e-10;let a=l;r=r?1:0;for(let l=0;l<20;l++){if(a<=-1)return c;let l,s,u;if(Math.abs(a)<i?l=o*(1+e*a)+t*(1+a*r)*e+n:(s=Math.pow(1+a,e),l=o*s+t*(1/a+r)*(s-1)+n),Math.abs(l)<i)return a;if(Math.abs(a)<i)u=o*e+t*r*e;else{s=Math.pow(1+a,e);const n=e*Math.pow(1+a,e-1);u=o*n+t*(1/a+r)*n+t*(-1/(a*a))*(s-1)}a-=l/u}return a},t.RECEIVED=function(){throw new Error("RECEIVED is not implemented")},t.REPLACE=function(e,t,o,n){return M(t=F(t),o=F(o))||"string"!=typeof e||"string"!=typeof n?s:e.substr(0,t-1)+n+e.substr(t-1+o)},t.REPT=mt,t.RIGHT=function(e,t){return E(e,t)||(e=R(e),(t=F(t=void 0===t?1:t))instanceof Error?t:e.substring(e.length-t))},t.ROMAN=function(e){if((e=F(e))instanceof Error)return e;const t=String(e).split(""),o=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"];let n="",r=3;for(;r--;)n=(o[+t.pop()+10*r]||"")+n;return new Array(+t.join("")+1).join("M")+n},t.ROUND=Ke,t.ROUNDDOWN=function(e,t){return E(e=F(e),t=F(t))||(e>0?1:-1)*Math.floor(Math.abs(e)*Math.pow(10,t))/Math.pow(10,t)},t.ROUNDUP=function(e,t){return E(e=F(e),t=F(t))||(e>0?1:-1)*Math.ceil(Math.abs(e)*Math.pow(10,t))/Math.pow(10,t)},t.ROW=function(e,t){return 2!==arguments.length?f:t<0?c:e instanceof Array&&"number"==typeof t?0!==e.length?n.row(e,t):void 0:s},t.ROWS=function(e){return 1!==arguments.length?f:e instanceof Array?0===e.length?0:n.rows(e):s},t.RRI=function(e,t,o){return M(e=F(e),t=F(t),o=F(o))?s:0===e||0===t?c:Math.pow(o/t,1/e)-1},t.RSQ=function(e,t){return M(e=L(v(e)),t=L(v(t)))?s:Math.pow(Me(e,t),2)},t.SEARCH=function(e,t,o){let n;return"string"!=typeof e||"string"!=typeof t?s:(o=void 0===o?0:o,n=t.toLowerCase().indexOf(e.toLowerCase(),o-1)+1,0===n?s:n)},t.SEC=function(e){return(e=F(e))instanceof Error?e:1/Math.cos(e)},t.SECH=function(e){return(e=F(e))instanceof Error?e:2/(Math.exp(e)+Math.exp(-e))},t.SECOND=function(e){return(e=D(e))instanceof Error?e:e.getSeconds()},t.SERIESSUM=function(e,t,o,n){if(M(e=F(e),t=F(t),o=F(o),n=L(n)))return s;let r=n[0]*Math.pow(e,t);for(let l=1;l<n.length;l++)r+=n[l]*Math.pow(e,t+l*o);return r},t.SHEET=function(){throw new Error("SHEET is not implemented")},t.SHEETS=function(){throw new Error("SHEETS is not implemented")},t.SIGN=function(e){return(e=F(e))instanceof Error?e:e<0?-1:0===e?0:1},t.SIN=function(e){return(e=F(e))instanceof Error?e:Math.sin(e)},t.SINH=function(e){return(e=F(e))instanceof Error?e:(Math.exp(e)-Math.exp(-e))/2},t.SKEW=Fe,t.SKEWP=So,t.SLN=function(e,t,o){return M(e=F(e),t=F(t),o=F(o))?s:0===o?c:(e-t)/o},t.SLOPE=function(e,t){if(M(e=L(v(e)),t=L(v(t))))return s;const o=n.mean(t),r=n.mean(e),l=t.length;let i=0,a=0;for(let n=0;n<l;n++)i+=(t[n]-o)*(e[n]-r),a+=Math.pow(t[n]-o,2);return i/a},t.SMALL=Le,t.SORT=function(e,t=1,o=1,n=!1){if(!e||!Array.isArray(e))return f;if(0===e.length)return 0;if(!(t=F(t))||t<1)return s;if(1!==(o=F(o))&&-1!==o)return s;if("boolean"!=typeof(n=S(n)))return u;const r=e=>e.sort(((e,n)=>(e=R(e[t-1]),n=R(n[t-1]),1===o?e<n?-1*o:o:e>n?o:-1*o))),l=m(e),i=n?w(l):l;return t>=1&&t<=i[0].length?n?w(r(i)):r(i):s},t.SQRT=function(e){return(e=F(e))instanceof Error?e:e<0?c:Math.sqrt(e)},t.SQRTPI=function(e){return(e=F(e))instanceof Error?e:Math.sqrt(e*Math.PI)},t.STANDARDIZE=function(e,t,o){return M(e=F(e),t=F(t),o=F(o))?s:(e-t)/o},t.STDEV=Re,t.STDEVA=function(){const e=He.apply(this,arguments);return Math.sqrt(e)},t.STDEVP=Do,t.STDEVPA=function(){const e=Be.apply(this,arguments);let t=Math.sqrt(e);return isNaN(t)&&(t=c),t},t.STDEVS=To,t.STEYX=function(e,t){if(M(e=L(v(e)),t=L(v(t))))return s;const o=n.mean(t),r=n.mean(e),l=t.length;let i=0,a=0,u=0;for(let n=0;n<l;n++)i+=Math.pow(e[n]-r,2),a+=(t[n]-o)*(e[n]-r),u+=Math.pow(t[n]-o,2);return Math.sqrt((i-a*a/u)/(l-2))},t.SUBSTITUTE=function(e,t,o,n){if(arguments.length<3)return f;if(e&&t){if(void 0===n)return e.split(t).join(o);{if(n=Math.floor(Number(n)),Number.isNaN(n)||n<=0)return s;let r=0,l=0;for(;r>-1&&e.indexOf(t,r)>-1;)if(r=e.indexOf(t,r+1),l++,r>-1&&l===n)return e.substring(0,r)+o+e.substring(r+t.length);return e}}return e},t.SUBTOTAL=function(e,t){if((e=F(e))instanceof Error)return e;switch(e){case 1:case 101:return te(t);case 2:case 102:return se(t);case 3:case 103:return ae(t);case 4:case 104:return ye(t);case 5:case 105:return xe(t);case 6:case 106:return Ge(t);case 7:case 107:return Re.S(t);case 8:case 108:return Re.P(t);case 9:case 109:return $e(t);case 10:case 110:return ke.S(t);case 11:case 111:return ke.P(t)}},t.SUM=$e,t.SUMIF=function(e,t,o){if(e=v(e),o=o?v(o):e,e instanceof Error)return e;if(null==t||t instanceof Error)return 0;let n=0;const r="*"===t,l=r?null:Y(t+"");for(let t=0;t<e.length;t++){const i=e[t],s=o[t];if(r)n+=i;else{const e=[z(i,U)].concat(l);n+=W(e)?s:0}}return n},t.SUMIFS=function(){const e=j(arguments),t=L(v(e.shift()));if(t instanceof Error)return t;const o=e,n=o.length/2;for(let e=0;e<n;e++)o[2*e]=v(o[2*e]);let r=0;for(let e=0;e<t.length;e++){let l=!1;for(let t=0;t<n;t++){const n=o[2*t][e],r=o[2*t+1];let i=!1;if(void 0===r||"*"===r)i=!0;else{const e=Y(r+""),t=[z(n,U)].concat(e);i=W(t)}if(!i){l=!1;break}l=!0}l&&(r+=t[e])}return r},t.SUMPRODUCT=function(){if(!arguments||0===arguments.length)return s;const e=arguments.length+1;let t,o,n,r,l=0;for(let i=0;i<arguments[0].length;i++)if(arguments[0][i]instanceof Array)for(let n=0;n<arguments[0][i].length;n++){for(t=1,o=1;o<e;o++){const e=arguments[o-1][i][n];if(e instanceof Error)return e;if(r=F(e),r instanceof Error)return r;t*=r}l+=t}else{for(t=1,o=1;o<e;o++){const e=arguments[o-1][i];if(e instanceof Error)return e;if(n=F(e),n instanceof Error)return n;t*=n}l+=t}return l},t.SUMSQ=function(){const e=L(v(arguments));if(e instanceof Error)return e;let t=0;const o=e.length;for(let n=0;n<o;n++)t+=J(e[n])?e[n]*e[n]:0;return t},t.SUMX2MY2=function(e,t){if(M(e=L(v(e)),t=L(v(t))))return s;let o=0;for(let n=0;n<e.length;n++)o+=e[n]*e[n]-t[n]*t[n];return o},t.SUMX2PY2=function(e,t){if(M(e=L(v(e)),t=L(v(t))))return s;let o=0;e=L(v(e)),t=L(v(t));for(let n=0;n<e.length;n++)o+=e[n]*e[n]+t[n]*t[n];return o},t.SUMXMY2=function(e,t){if(M(e=L(v(e)),t=L(v(t))))return s;let o=0;e=v(e),t=v(t);for(let n=0;n<e.length;n++)o+=Math.pow(e[n]-t[n],2);return o},t.SWITCH=function(){let e;if(arguments.length>0){const t=arguments[0],o=arguments.length-1,n=Math.floor(o/2);let r=!1;const l=o%2!=0,i=o%2==0?null:arguments[arguments.length-1];if(n)for(let o=0;o<n;o++)if(t===arguments[2*o+1]){e=arguments[2*o+2],r=!0;break}r||(e=l?i:f)}else e=s;return e},t.SYD=function(e,t,o,n){return M(e=F(e),t=F(t),o=F(o),n=F(n))?s:0===o||n<1||n>o?c:(e-t)*(o-(n=parseInt(n,10))+1)*2/(o*(o+1))},t.T=function(e){return e instanceof Error||"string"==typeof e?e:""},t.TAN=function(e){return(e=F(e))instanceof Error?e:Math.tan(e)},t.TANH=function(e){if((e=F(e))instanceof Error)return e;const t=Math.exp(2*e);return(t-1)/(t+1)},t.TBILLEQ=function(e,t,o){return M(e=D(e),t=D(t),o=F(o))?s:o<=0||e>t||t-e>31536e6?c:365*o/(360-o*lt(e,t,!1))},t.TBILLPRICE=function(e,t,o){return M(e=D(e),t=D(t),o=F(o))?s:o<=0||e>t||t-e>31536e6?c:100*(1-o*lt(e,t,!1)/360)},t.TBILLYIELD=function(e,t,o){return M(e=D(e),t=D(t),o=F(o))?s:o<=0||e>t||t-e>31536e6?c:360*(100-o)/(o*lt(e,t,!1))},t.TDIST=Fo,t.TDISTRT=Lo,t.TEXT=function(e,t){if(void 0===e||e instanceof Error||t instanceof Error)return f;if(null==t)return"";if("number"==typeof t)return String(t);if("string"!=typeof t)return s;const o=t.startsWith("$")?"$":"",n=t.endsWith("%");return n&&(e*=100),e=(e=gt(e,(t=t.replace(/%/g,"").replace(/\$/g,"")).split(".")[1].match(/0/g).length,!t.includes(","))).startsWith("-")?"-"+o+(e=e.replace("-","")):o+e,n&&(e+="%"),e},t.TEXTJOIN=function(e,t,...o){if("boolean"!=typeof t&&(t=S(t)),arguments.length<3)return f;e=null!=e?e:"";let n=v(o),r=t?n.filter((e=>e)):n;if(Array.isArray(e)){e=v(e);let t=r.map((e=>[e])),o=0;for(let n=0;n<t.length-1;n++)t[n].push(e[o]),o++,o===e.length&&(o=0);return r=v(t),r.join("")}return r.join(e)},t.TIME=function(e,t,o){return M(e=F(e),t=F(t),o=F(o))?s:e<0||t<0||o<0?c:(3600*e+60*t+o)/86400},t.TIMEVALUE=function(e){return(e=D(e))instanceof Error?e:(3600*e.getHours()+60*e.getMinutes()+e.getSeconds())/86400},t.TINV=Ro,t.TODAY=function(){return nt(new Date)},t.TRANSPOSE=function(e){return e?w(m(e)):f},t.TREND=function(e,t,o){if(M(e=L(v(e)),t=L(v(t)),o=L(v(o))))return s;const n=me(e,t),r=n[0],l=n[1],i=[];return o.forEach((e=>{i.push(r*e+l)})),i},t.TRIM=function(e){return(e=R(e))instanceof Error?e:e.replace(/\s+/g," ").trim()},t.TRIMMEAN=function(e,t){if(M(e=L(v(e)),t=F(t)))return s;const o=Ye(e.length*t,2)/2;return n.mean((l=(l=o)||1,(r=x(e.sort(((e,t)=>e-t)),o))&&"function"==typeof r.slice?r.slice(0,r.length-l):r));var r,l},t.TRUE=function(){return!0},t.TRUNC=function(e,t){return E(e=F(e),t=F(t))||(e>0?1:-1)*Math.floor(Math.abs(e)*Math.pow(10,t))/Math.pow(10,t)},t.TTEST=Oo,t.TYPE=function(e){return J(e)?1:Q(e)?2:$(e)?4:K(e)?16:Array.isArray(e)?64:void 0},t.UNICHAR=vt,t.UNICODE=yt,t.UNIQUE=Z,t.UPPER=function(e){return(e=R(e))instanceof Error?e:e.toUpperCase()},t.VALUE=function(e){const t=E(e);if(t)return t;if("number"==typeof e)return e;if(k(e)||(e=""),"string"!=typeof e)return s;const o=/(%)$/.test(e)||/^(%)/.test(e);if(""===(e=(e=(e=e.replace(/^[^0-9-]{0,3}/,"")).replace(/[^0-9]{0,3}$/,"")).replace(/[ ,]/g,"")))return 0;let n=Number(e);return isNaN(n)?s:(n=n||0,o&&(n*=.01),n)},t.VAR=ke,t.VARA=He,t.VARP=ko,t.VARPA=Be,t.VARS=Ho,t.VDB=function(){throw new Error("VDB is not implemented")},t.VLOOKUP=ee,t.WEEKDAY=function(e,t){if((e=D(e))instanceof Error)return e;void 0===t&&(t=1);const o=e.getDay();return et[t][o]},t.WEEKNUM=function(e,t){if((e=D(e))instanceof Error)return e;if(void 0===t&&(t=1),21===t)return it(e);const o=Ze[t];let n=new Date(e.getFullYear(),0,1);const r=n.getDay()<o?1:0;return n-=24*Math.abs(n.getDay()-o)*60*60*1e3,Math.floor((e-n)/864e5/7+1)+r},t.WEIBULL=Pe,t.WEIBULLDIST=Bo,t.WORKDAY=at,t.WORKDAYINTL=Po,t.XIRR=function(e,t,o){if(M(e=L(v(e)),t=T(v(t)),o=F(o)))return s;const n=(e,t,o)=>{const n=o+1;let r=e[0];for(let o=1;o<e.length;o++)r+=e[o]/Math.pow(n,rt(t[o],t[0])/365);return r},r=(e,t,o)=>{const n=o+1;let r=0;for(let o=1;o<e.length;o++){const l=rt(t[o],t[0])/365;r-=l*e[o]/Math.pow(n,l+1)}return r};let l=!1,i=!1;for(let t=0;t<e.length;t++)e[t]>0&&(l=!0),e[t]<0&&(i=!0);if(!l||!i)return c;let a,u,f,d=o=o||.1,p=!0;do{f=n(e,t,d),a=d-f/r(e,t,d),u=Math.abs(a-d),d=a,p=u>1e-10&&Math.abs(f)>1e-10}while(p);return d},t.XNPV=function(e,t,o){if(M(e=F(e),t=L(v(t)),o=T(v(o))))return s;let n=0;for(let r=0;r<t.length;r++)n+=t[r]/Math.pow(1+e,rt(o[r],o[0])/365);return n},t.XOR=function(){const e=v(arguments);let t=s;for(let o=0;o<e.length;o++){if(e[o]instanceof Error)return e[o];void 0!==e[o]&&null!==e[o]&&"string"!=typeof e[o]&&(t===s&&(t=0),e[o]&&t++)}return t===s?t:!!(1&Math.floor(Math.abs(t)))},t.YEAR=function(e){return(e=D(e))instanceof Error?e:e.getFullYear()},t.YEARFRAC=ft,t.YIELD=function(){throw new Error("YIELD is not implemented")},t.YIELDDISC=function(){throw new Error("YIELDDISC is not implemented")},t.YIELDMAT=function(){throw new Error("YIELDMAT is not implemented")},t.Z=_e,t.ZTEST=_o,t.utils=Ko}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var l=o[t]={exports:{}};return e[t].call(l.exports,l,l.exports,n),l.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var r=n(960);t=r}(),t)},138:function(module,__unused_webpack_exports,__webpack_require__){if(!formula)var formula=__webpack_require__(243);var factory;factory=function(){"use strict";var Version=(info={title:"Jspreadsheet",version:"4.13.2",type:"CE",host:"https://bossanova.uk/jspreadsheet",license:"MIT",print:function(){return[this.title+" "+this.type+" "+this.version,this.host,this.license].join("\r\n")}},function(){return info}),info,isFormula=function(e){var t=(""+e)[0];return"="==t||"#"==t},getMask=function(e){if(e.format||e.mask||e.locale){var t={};return e.mask?t.mask=e.mask:e.format?t.mask=e.format:(t.locale=e.locale,t.options=e.options),e.decimal&&(t.options||(t.options={}),t.options={decimal:e.decimal}),t}return null},jexcel=function(el,options){var obj={options:{}};if(!(el instanceof Element||el instanceof HTMLDocument))return console.error("Jspreadsheet: el is not a valid DOM element"),!1;if("TABLE"==el.tagName){if(!(options=jexcel.createFromTable(el,options)))return console.error("Jspreadsheet: el is not a valid DOM element"),!1;var div=document.createElement("div");el.parentNode.insertBefore(div,el),el.remove(),el=div}var defaults={url:null,method:"GET",requestVariables:null,data:null,sorting:null,copyCompatibility:!1,root:null,rows:[],columns:[],colHeaders:[],colWidths:[],colAlignments:[],nestedHeaders:null,defaultColWidth:50,defaultColAlign:"center",defaultRowHeight:null,minSpareRows:0,minSpareCols:0,minDimensions:[0,0],allowExport:!0,includeHeadersOnDownload:!1,includeHeadersOnCopy:!1,columnSorting:!0,columnDrag:!1,columnResize:!0,rowResize:!1,rowDrag:!0,editable:!0,allowInsertRow:!0,allowManualInsertRow:!0,allowInsertColumn:!0,allowManualInsertColumn:!0,allowDeleteRow:!0,allowDeletingAllRows:!1,allowDeleteColumn:!0,allowRenameColumn:!0,allowComments:!1,wordWrap:!1,imageOptions:null,csv:null,csvFileName:"jspreadsheet",csvHeaders:!0,csvDelimiter:",",parseTableFirstRowAsHeader:!1,parseTableAutoCellType:!1,selectionCopy:!0,mergeCells:{},toolbar:null,search:!1,pagination:!1,paginationOptions:null,fullscreen:!1,lazyLoading:!1,loadingSpin:!1,tableOverflow:!1,tableHeight:"300px",tableWidth:null,textOverflow:!1,meta:null,style:null,classes:null,parseFormulas:!0,autoIncrement:!0,autoCasting:!0,secureFormulas:!0,stripHTML:!0,stripHTMLOnCopy:!1,filters:!1,footers:null,onundo:null,onredo:null,onload:null,onchange:null,oncomments:null,onbeforechange:null,onafterchanges:null,onbeforeinsertrow:null,oninsertrow:null,onbeforeinsertcolumn:null,oninsertcolumn:null,onbeforedeleterow:null,ondeleterow:null,onbeforedeletecolumn:null,ondeletecolumn:null,onmoverow:null,onmovecolumn:null,onresizerow:null,onresizecolumn:null,onsort:null,onselection:null,oncopy:null,onpaste:null,onbeforepaste:null,onmerge:null,onfocus:null,onblur:null,onchangeheader:null,oncreateeditor:null,oneditionstart:null,oneditionend:null,onchangestyle:null,onchangemeta:null,onchangepage:null,onbeforesave:null,onsave:null,onevent:null,persistance:!1,updateTable:null,detachForUpdates:!1,freezeColumns:null,text:{noRecordsFound:"No records found",showingPage:"Showing page {0} of {1} entries",show:"Show ",search:"Search",entries:" entries",columnName:"Column name",insertANewColumnBefore:"Insert a new column before",insertANewColumnAfter:"Insert a new column after",deleteSelectedColumns:"Delete selected columns",renameThisColumn:"Rename this column",orderAscending:"Order ascending",orderDescending:"Order descending",insertANewRowBefore:"Insert a new row before",insertANewRowAfter:"Insert a new row after",deleteSelectedRows:"Delete selected rows",editComments:"Edit comments",addComments:"Add comments",comments:"Comments",clearComments:"Clear comments",copy:"Copy...",paste:"Paste...",saveAs:"Save as...",about:"About",areYouSureToDeleteTheSelectedRows:"Are you sure to delete the selected rows?",areYouSureToDeleteTheSelectedColumns:"Are you sure to delete the selected columns?",thisActionWillDestroyAnyExistingMergedCellsAreYouSure:"This action will destroy any existing merged cells. Are you sure?",thisActionWillClearYourSearchResultsAreYouSure:"This action will clear your search results. Are you sure?",thereIsAConflictWithAnotherMergedCell:"There is a conflict with another merged cell",invalidMergeProperties:"Invalid merged properties",cellAlreadyMerged:"Cell already merged",noCellsSelected:"No cells selected"},about:!0};for(var property in defaults)if(options&&options.hasOwnProperty(property))if("text"===property)for(var textKey in obj.options[property]=defaults[property],options[property])options[property].hasOwnProperty(textKey)&&(obj.options[property][textKey]=options[property][textKey]);else obj.options[property]=options[property];else obj.options[property]=defaults[property];obj.el=el,obj.corner=null,obj.contextMenu=null,obj.textarea=null,obj.ads=null,obj.content=null,obj.table=null,obj.thead=null,obj.tbody=null,obj.rows=[],obj.results=null,obj.searchInput=null,obj.toolbar=null,obj.pagination=null,obj.pageNumber=null,obj.headerContainer=null,obj.colgroupContainer=null,obj.headers=[],obj.records=[],obj.history=[],obj.formula=[],obj.colgroup=[],obj.selection=[],obj.highlighted=[],obj.selectedCell=null,obj.selectedContainer=null,obj.style=[],obj.data=null,obj.filter=null,obj.filters=[],obj.cursor=null,obj.historyIndex=-1,obj.ignoreEvents=!1,obj.ignoreHistory=!1,obj.edition=null,obj.hashString=null,obj.resizing=null,obj.dragging=null,1==obj.options.lazyLoading&&0==obj.options.tableOverflow&&0==obj.options.fullscreen&&(console.error("Jspreadsheet: The lazyloading only works when tableOverflow = yes or fullscreen = yes"),obj.options.lazyLoading=!1),obj.fullscreen=function(e){null==e&&(e=!obj.options.fullscreen),obj.options.fullscreen!=e&&(obj.options.fullscreen=e,1==e?el.classList.add("fullscreen"):el.classList.remove("fullscreen"))},obj.dispatch=function(e){if(!obj.ignoreEvents){if("function"==typeof obj.options.onevent)var t=obj.options.onevent.apply(this,arguments);"function"==typeof obj.options[e]&&(t=obj.options[e].apply(this,Array.prototype.slice.call(arguments,1)))}if("onafterchanges"==e&&obj.options.persistance){var o=1==obj.options.persistance?obj.options.url:obj.options.persistance,n=obj.prepareJson(arguments[2]);obj.save(o,n)}return t},obj.prepareTable=function(){var e=obj.options.columns.length;if(obj.options.data&&void 0!==obj.options.data[0]){var t=Object.keys(obj.options.data[0]);t.length>e&&(e=t.length)}obj.options.minDimensions[0]>e&&(e=obj.options.minDimensions[0]);for(var o=[],n=0;n<e;n++)obj.options.colHeaders[n]||(obj.options.colHeaders[n]=""),obj.options.colWidths[n]||(obj.options.colWidths[n]=obj.options.defaultColWidth),obj.options.colAlignments[n]||(obj.options.colAlignments[n]=obj.options.defaultColAlign),obj.options.columns[n]?obj.options.columns[n].type||(obj.options.columns[n].type="text"):obj.options.columns[n]={type:"text"},obj.options.columns[n].name||(obj.options.columns[n].name=t&&t[n]?t[n]:n),obj.options.columns[n].source||(obj.options.columns[n].source=[]),obj.options.columns[n].options||(obj.options.columns[n].options=[]),obj.options.columns[n].editor||(obj.options.columns[n].editor=null),obj.options.columns[n].allowEmpty||(obj.options.columns[n].allowEmpty=!1),obj.options.columns[n].title||(obj.options.columns[n].title=obj.options.colHeaders[n]?obj.options.colHeaders[n]:""),obj.options.columns[n].width||(obj.options.columns[n].width=obj.options.colWidths[n]?obj.options.colWidths[n]:obj.options.defaultColWidth),obj.options.columns[n].align||(obj.options.columns[n].align=obj.options.colAlignments[n]?obj.options.colAlignments[n]:"center"),"autocomplete"==obj.options.columns[n].type||"dropdown"==obj.options.columns[n].type?obj.options.columns[n].url&&o.push({url:obj.options.columns[n].url,index:n,method:"GET",dataType:"json",success:function(e){for(var t=0;t<e.length;t++)obj.options.columns[this.index].source.push(e[t])}}):"calendar"==obj.options.columns[n].type&&(obj.options.columns[n].options.format||(obj.options.columns[n].options.format="DD/MM/YYYY"));o.length?jSuites.ajax(o,(function(){obj.createTable()})):obj.createTable()},obj.createTable=function(){obj.table=document.createElement("table"),obj.thead=document.createElement("thead"),obj.tbody=document.createElement("tbody"),obj.headers=[],obj.colgroup=[],obj.content=document.createElement("div"),obj.content.classList.add("jexcel_content"),obj.content.onscroll=function(e){obj.scrollControls(e)},obj.content.onwheel=function(e){obj.wheelControls(e)},obj.toolbar=document.createElement("div"),obj.toolbar.classList.add("jexcel_toolbar");var e=document.createElement("div"),t=document.createTextNode(obj.options.text.search+": ");obj.searchInput=document.createElement("input"),obj.searchInput.classList.add("jexcel_search"),e.appendChild(t),e.appendChild(obj.searchInput),obj.searchInput.onfocus=function(){obj.resetSelection()};var o=document.createElement("div");if(obj.options.pagination>0&&obj.options.paginationOptions&&obj.options.paginationOptions.length>0){obj.paginationDropdown=document.createElement("select"),obj.paginationDropdown.classList.add("jexcel_pagination_dropdown"),obj.paginationDropdown.onchange=function(){obj.options.pagination=parseInt(this.value),obj.page(0)};for(var n=0;n<obj.options.paginationOptions.length;n++){var r=document.createElement("option");r.value=obj.options.paginationOptions[n],r.innerHTML=obj.options.paginationOptions[n],obj.paginationDropdown.appendChild(r)}obj.paginationDropdown.value=obj.options.pagination,o.appendChild(document.createTextNode(obj.options.text.show)),o.appendChild(obj.paginationDropdown),o.appendChild(document.createTextNode(obj.options.text.entries))}var l,i=document.createElement("div");if(i.classList.add("jexcel_filter"),i.appendChild(o),i.appendChild(e),obj.colgroupContainer=document.createElement("colgroup"),(l=document.createElement("col")).setAttribute("width","50"),obj.colgroupContainer.appendChild(l),obj.options.nestedHeaders&&obj.options.nestedHeaders.length>0)if(obj.options.nestedHeaders[0]&&obj.options.nestedHeaders[0][0])for(var s=0;s<obj.options.nestedHeaders.length;s++)obj.thead.appendChild(obj.createNestedHeader(obj.options.nestedHeaders[s]));else obj.thead.appendChild(obj.createNestedHeader(obj.options.nestedHeaders));for(obj.headerContainer=document.createElement("tr"),(l=document.createElement("td")).classList.add("jexcel_selectall"),obj.headerContainer.appendChild(l),n=0;n<obj.options.columns.length;n++)obj.createCellHeader(n),obj.headerContainer.appendChild(obj.headers[n]),obj.colgroupContainer.appendChild(obj.colgroup[n]);if(obj.thead.appendChild(obj.headerContainer),1==obj.options.filters){obj.filter=document.createElement("tr");var a=document.createElement("td");for(obj.filter.appendChild(a),n=0;n<obj.options.columns.length;n++)(a=document.createElement("td")).innerHTML="&nbsp;",a.setAttribute("data-x",n),a.className="jexcel_column_filter","hidden"==obj.options.columns[n].type&&(a.style.display="none"),obj.filter.appendChild(a);obj.thead.appendChild(obj.filter)}obj.table=document.createElement("table"),obj.table.classList.add("jexcel"),obj.table.setAttribute("cellpadding","0"),obj.table.setAttribute("cellspacing","0"),obj.table.setAttribute("unselectable","yes"),obj.table.appendChild(obj.colgroupContainer),obj.table.appendChild(obj.thead),obj.table.appendChild(obj.tbody),obj.options.textOverflow||obj.table.classList.add("jexcel_overflow"),obj.corner=document.createElement("div"),obj.corner.className="jexcel_corner",obj.corner.setAttribute("unselectable","on"),obj.corner.setAttribute("onselectstart","return false"),0==obj.options.selectionCopy&&(obj.corner.style.display="none"),obj.textarea=document.createElement("textarea"),obj.textarea.className="jexcel_textarea",obj.textarea.id="jexcel_textarea",obj.textarea.tabIndex="-1",obj.contextMenu=document.createElement("div"),obj.contextMenu.className="jexcel_contextmenu",jSuites.contextmenu(obj.contextMenu,{onclick:function(){obj.contextMenu.contextmenu.close(!1)}});var u=document.createElement("a");u.setAttribute("href","https://bossanova.uk/jspreadsheet/"),obj.ads=document.createElement("div"),obj.ads.className="jexcel_about";try{if("undefined"!=typeof sessionStorage&&!sessionStorage.getItem("jexcel")){sessionStorage.setItem("jexcel",!0);var c=document.createElement("img");c.src="//bossanova.uk/jspreadsheet/logo.png",u.appendChild(c)}}catch(e){}var f=document.createElement("span");f.innerHTML="Jspreadsheet CE",u.appendChild(f),obj.ads.appendChild(u),document.createElement("div").classList.add("jexcel_table"),obj.pagination=document.createElement("div"),obj.pagination.classList.add("jexcel_pagination");var d=document.createElement("div"),p=document.createElement("div");if(obj.pagination.appendChild(d),obj.pagination.appendChild(p),obj.options.pagination||(obj.pagination.style.display="none"),1==obj.options.search&&el.appendChild(i),obj.content.appendChild(obj.table),obj.content.appendChild(obj.corner),obj.content.appendChild(obj.textarea),el.appendChild(obj.toolbar),el.appendChild(obj.content),el.appendChild(obj.pagination),el.appendChild(obj.contextMenu),el.appendChild(obj.ads),el.classList.add("jexcel_container"),obj.options.toolbar&&obj.options.toolbar.length&&obj.createToolbar(),1==obj.options.fullscreen?el.classList.add("fullscreen"):1==obj.options.tableOverflow&&(obj.options.tableHeight&&(obj.content.style["overflow-y"]="auto",obj.content.style["box-shadow"]="rgb(221 221 221) 2px 2px 5px 0.1px",obj.content.style.maxHeight=obj.options.tableHeight),obj.options.tableWidth&&(obj.content.style["overflow-x"]="auto",obj.content.style.width=obj.options.tableWidth)),1!=obj.options.tableOverflow&&obj.options.toolbar&&el.classList.add("with-toolbar"),1==obj.options.columnDrag&&obj.thead.classList.add("draggable"),1==obj.options.columnResize&&obj.thead.classList.add("resizable"),1==obj.options.rowDrag&&obj.tbody.classList.add("draggable"),1==obj.options.rowResize&&obj.tbody.classList.add("resizable"),obj.setData(),obj.options.style&&obj.setStyle(obj.options.style,null,null,1,1),obj.options.classes){var b=Object.keys(obj.options.classes);for(n=0;n<b.length;n++){var j=jexcel.getIdFromColumnName(b[n],!0);obj.records[j[1]][j[0]].classList.add(obj.options.classes[b[n]])}}},obj.refresh=function(){obj.options.url?(1==obj.options.loadingSpin&&jSuites.loading.show(),jSuites.ajax({url:obj.options.url,method:obj.options.method,data:obj.options.requestVariables,dataType:"json",success:function(e){obj.options.data=e.data?e.data:e,obj.setData(),1==obj.options.loadingSpin&&jSuites.loading.hide()}})):obj.setData()},obj.setData=function(e){if(e&&("string"==typeof e&&(e=JSON.parse(e)),obj.options.data=e),obj.options.data||(obj.options.data=[]),obj.options.data&&obj.options.data[0]&&!Array.isArray(obj.options.data[0])){e=[];for(var t=0;t<obj.options.data.length;t++){for(var o=[],n=0;n<obj.options.columns.length;n++)o[n]=obj.options.data[t][obj.options.columns[n].name];e.push(o)}obj.options.data=e}t=0,n=0;var r=obj.options.columns.length,l=obj.options.data.length,i=obj.options.minDimensions[0],s=obj.options.minDimensions[1],a=i>r?i:r,u=s>l?s:l;for(t=0;t<u;t++)for(n=0;n<a;n++)null==obj.options.data[t]&&(obj.options.data[t]=[]),null==obj.options.data[t][n]&&(obj.options.data[t][n]="");if(obj.rows=[],obj.results=null,obj.records=[],obj.history=[],obj.historyIndex=-1,obj.tbody.innerHTML="",1==obj.options.lazyLoading){var c=0,f=obj.options.data.length<100?obj.options.data.length:100;obj.options.pagination&&(obj.options.pagination=!1,console.error("Jspreadsheet: Pagination will be disable due the lazyLoading"))}else obj.options.pagination?(obj.pageNumber||(obj.pageNumber=0),obj.options.pagination,c=obj.options.pagination*obj.pageNumber,f=obj.options.pagination*obj.pageNumber+obj.options.pagination,obj.options.data.length<f&&(f=obj.options.data.length)):(c=0,f=obj.options.data.length);for(t=0;t<obj.options.data.length;t++){var d=obj.createRow(t,obj.options.data[t]);t>=c&&t<f&&obj.tbody.appendChild(d)}if(1==obj.options.lazyLoading||obj.options.pagination&&obj.updatePagination(),obj.options.mergeCells){var p=Object.keys(obj.options.mergeCells);for(n=0;n<p.length;n++){var b=obj.options.mergeCells[p[n]];obj.setMerge(p[n],b[0],b[1],1)}}obj.updateTable(),obj.dispatch("onload",el,obj)},obj.getData=function(e,t){for(var o=[],n=0,r=0,l=1==t||0==obj.options.copyCompatibility,i=obj.options.columns.length,s=obj.options.data.length,a=0;a<s;a++){n=0;for(var u=0;u<i;u++)e&&!obj.records[a][u].classList.contains("highlight")||(o[r]||(o[r]=[]),o[r][n]=l?obj.options.data[a][u]:obj.records[a][u].innerHTML,n++);n>0&&r++}return o},obj.getJsonRow=function(e){for(var t=obj.options.data[e],o=obj.options.columns.length,n={},r=0;r<o;r++)obj.options.columns[r].name||(obj.options.columns[r].name=r),n[obj.options.columns[r].name]=t[r];return n},obj.getJson=function(e){for(var t=[],o=obj.options.columns.length,n=obj.options.data.length,r=0;r<n;r++){for(var l=null,i=0;i<o;i++)e&&!obj.records[r][i].classList.contains("highlight")||(null==l&&(l={}),obj.options.columns[i].name||(obj.options.columns[i].name=i),l[obj.options.columns[i].name]=obj.options.data[r][i]);null!=l&&t.push(l)}return t},obj.prepareJson=function(e){for(var t=[],o=0;o<e.length;o++){var n=e[o].x,r=e[o].y,l=obj.options.columns[n].name?obj.options.columns[n].name:n;t[r]||(t[r]={row:r,data:{}}),t[r].data[l]=e[o].newValue}return t.filter((function(e){return null!=e}))},obj.save=function(e,t){var o=obj.dispatch("onbeforesave",el,obj,t);if(o)t=o;else if(!1===o)return!1;jSuites.ajax({url:e,method:"POST",dataType:"json",data:{data:JSON.stringify(t)},success:function(e){obj.dispatch("onsave",el,obj,t)}})},obj.getRowData=function(e){return obj.options.data[e]},obj.setRowData=function(e,t){for(var o=0;o<obj.headers.length;o++){var n=jexcel.getColumnNameFromId([o,e]);null!=t[o]&&obj.setValue(n,t[o])}},obj.getColumnData=function(e){for(var t=[],o=0;o<obj.options.data.length;o++)t.push(obj.options.data[o][e]);return t},obj.setColumnData=function(e,t){for(var o=0;o<obj.rows.length;o++){var n=jexcel.getColumnNameFromId([e,o]);null!=t[o]&&obj.setValue(n,t[o])}},obj.createRow=function(e,t){obj.records[e]||(obj.records[e]=[]),t||(t=obj.options.data[e]),obj.rows[e]=document.createElement("tr"),obj.rows[e].setAttribute("data-y",e);var o=null;obj.options.defaultRowHeight&&(obj.rows[e].style.height=obj.options.defaultRowHeight+"px"),obj.options.rows[e]&&(obj.options.rows[e].height&&(obj.rows[e].style.height=obj.options.rows[e].height),obj.options.rows[e].title&&(o=obj.options.rows[e].title)),o||(o=parseInt(e+1));var n=document.createElement("td");n.innerHTML=o,n.setAttribute("data-y",e),n.className="jexcel_row",obj.rows[e].appendChild(n);for(var r=0;r<obj.options.columns.length;r++)obj.records[e][r]=obj.createCell(r,e,t[r]),obj.rows[e].appendChild(obj.records[e][r]);return obj.rows[e]},obj.parseValue=function(e,t,o,n){"="==(""+o).substr(0,1)&&1==obj.options.parseFormulas&&(o=obj.executeFormula(o,e,t));var r=obj.options.columns[e];if(r&&!isFormula(o)){var l=null;if(l=getMask(r)){o&&o==Number(o)&&(o=Number(o));var i=jSuites.mask.render(o,l,!0);if(n&&l.mask){var s=l.mask.split(";");s[1]&&(s[1].match(new RegExp("\\[Red\\]","gi"))&&(o<0?n.classList.add("red"):n.classList.remove("red")),s[1].match(new RegExp("\\(","gi"))&&o<0&&(i="("+i+")"))}i&&(o=i)}}return o};var validDate=function(e){return"-"==(e=""+e).substr(4,1)&&"-"==e.substr(7,1)||4==(e=e.split("-"))[0].length&&e[0]==Number(e[0])&&2==e[1].length&&e[1]==Number(e[1])};obj.createCell=function(e,t,o){var n=document.createElement("td");if(n.setAttribute("data-x",e),n.setAttribute("data-y",t),"="==(""+o).substr(0,1)&&1==obj.options.secureFormulas){var r=secureFormula(o);r!=o&&(o=r)}if(obj.options.columns[e].editor)!1===obj.options.stripHTML||!1===obj.options.columns[e].stripHTML?n.innerHTML=o:n.textContent=o,"function"==typeof obj.options.columns[e].editor.createCell&&(n=obj.options.columns[e].editor.createCell(n));else if("hidden"==obj.options.columns[e].type)n.style.display="none",n.textContent=o;else if("checkbox"==obj.options.columns[e].type||"radio"==obj.options.columns[e].type){var l=document.createElement("input");l.type=obj.options.columns[e].type,l.name="c"+e,l.checked=1==o||1==o||"true"==o,l.onclick=function(){obj.setValue(n,this.checked)},1!=obj.options.columns[e].readOnly&&0!=obj.options.editable||l.setAttribute("disabled","disabled"),n.appendChild(l),obj.options.data[t][e]=l.checked}else if("calendar"==obj.options.columns[e].type){var i=null;if(!validDate(o)){var s=jSuites.calendar.extractDateFromString(o,obj.options.columns[e].options.format);s&&(i=s)}n.textContent=jSuites.calendar.getDateString(i||o,obj.options.columns[e].options.format)}else if("dropdown"==obj.options.columns[e].type||"autocomplete"==obj.options.columns[e].type)n.classList.add("jexcel_dropdown"),n.textContent=obj.getDropDownValue(e,o);else if("color"==obj.options.columns[e].type)if("square"==obj.options.columns[e].render){var a=document.createElement("div");a.className="color",a.style.backgroundColor=o,n.appendChild(a)}else n.style.color=o,n.textContent=o;else if("image"==obj.options.columns[e].type){if(o&&"data:image"==o.substr(0,10)){var u=document.createElement("img");u.src=o,n.appendChild(u)}}else"html"==obj.options.columns[e].type||!1===obj.options.stripHTML||!1===obj.options.columns[e].stripHTML?n.innerHTML=stripScript(obj.parseValue(e,t,o,n)):n.textContent=obj.parseValue(e,t,o,n);1==obj.options.columns[e].readOnly&&(n.className="readonly");var c=obj.options.columns[e].align?obj.options.columns[e].align:"center";return n.style.textAlign=c,0!=obj.options.columns[e].wordWrap&&(1==obj.options.wordWrap||1==obj.options.columns[e].wordWrap||n.innerHTML.length>200)&&(n.style.whiteSpace="pre-wrap"),e>0&&1==this.options.textOverflow&&(o||n.innerHTML?obj.records[t][e-1].style.overflow="hidden":e==obj.options.columns.length-1&&(n.style.overflow="hidden")),n},obj.createCellHeader=function(e){var t=obj.options.columns[e].width?obj.options.columns[e].width:obj.options.defaultColWidth,o=obj.options.columns[e].align?obj.options.columns[e].align:obj.options.defaultColAlign;obj.headers[e]=document.createElement("td"),obj.options.stripHTML?obj.headers[e].textContent=obj.options.columns[e].title?obj.options.columns[e].title:jexcel.getColumnName(e):obj.headers[e].innerHTML=obj.options.columns[e].title?obj.options.columns[e].title:jexcel.getColumnName(e),obj.headers[e].setAttribute("data-x",e),obj.headers[e].style.textAlign=o,obj.options.columns[e].title&&obj.headers[e].setAttribute("title",obj.headers[e].innerText),obj.options.columns[e].id&&obj.headers[e].setAttribute("id",obj.options.columns[e].id),obj.colgroup[e]=document.createElement("col"),obj.colgroup[e].setAttribute("width",t),"hidden"==obj.options.columns[e].type&&(obj.headers[e].style.display="none",obj.colgroup[e].style.display="none")},obj.updateNestedHeader=function(e,t,o){obj.options.nestedHeaders[t][e].title&&(obj.options.nestedHeaders[t][e].title=o,obj.options.nestedHeaders[t].element.children[e+1].textContent=o)},obj.createNestedHeader=function(e){var t=document.createElement("tr");t.classList.add("jexcel_nested");var o=document.createElement("td");t.appendChild(o),e.element=t;for(var n=0,r=0;r<e.length;r++){e[r].colspan||(e[r].colspan=1),e[r].align||(e[r].align="center"),e[r].title||(e[r].title=""),e[r].id||(e[r].id="");for(var l=e[r].colspan,i=[],s=0;s<l;s++)obj.options.columns[n]&&"hidden"==obj.options.columns[n].type&&l++,i.push(n),n++;(o=document.createElement("td")).setAttribute("data-column",i.join(",")),o.setAttribute("colspan",e[r].colspan),o.setAttribute("align",e[r].align),o.setAttribute("id",e[r].id),o.textContent=e[r].title,t.appendChild(o)}return t},obj.createToolbar=function(e){e?obj.options.toolbar=e:e=obj.options.toolbar;for(var t=0;t<e.length;t++)if("i"==e[t].type)(l=document.createElement("i")).classList.add("jexcel_toolbar_item"),l.classList.add("material-icons"),l.setAttribute("data-k",e[t].k),l.setAttribute("data-v",e[t].v),l.setAttribute("id",e[t].id),e[t].tooltip&&l.setAttribute("title",e[t].tooltip),e[t].onclick&&(e[t].onclick,1)?l.onclick=function(t){var o=t;return function(){e[o].onclick(el,obj,this)}}(t):l.onclick=function(){var e=this.getAttribute("data-k"),t=this.getAttribute("data-v");obj.setStyle(obj.highlighted,e,t)},l.textContent=e[t].content,obj.toolbar.appendChild(l);else if("select"==e[t].type){var o=!1;(l=document.createElement("select")).classList.add("jexcel_toolbar_item"),l.setAttribute("data-k",e[t].k),e[t].tooltip&&l.setAttribute("title",e[t].tooltip),e[t].onchange&&(e[t].onchange,1)?(l.onchange=e[t].onchange,o=!0):l.onchange=function(){var e=this.getAttribute("data-k");obj.setStyle(obj.highlighted,e,this.value)};for(var n=0;n<e[t].v.length;n++){var r=document.createElement("option");r.value=e[t].v[n],r.textContent=e[t].v[n],e[t].selectedValue&&r.value===e[t].selectedValue&&(r.selected=!0),l.appendChild(r)}o&&l.dispatchEvent(new Event("change")),obj.toolbar.appendChild(l)}else if("color"==e[t].type){var l;(l=document.createElement("i")).classList.add("jexcel_toolbar_item"),l.classList.add("material-icons"),l.setAttribute("data-k",e[t].k),l.setAttribute("data-v",""),e[t].tooltip&&l.setAttribute("title",e[t].tooltip),obj.toolbar.appendChild(l),l.textContent=e[t].content,jSuites.color(l,{onchange:function(e,t){var o=e.getAttribute("data-k");obj.setStyle(obj.highlighted,o,t)}})}},obj.setMerge=function(e,t,o,n){var r=!1;if(!e){if(!obj.highlighted.length)return alert(obj.options.text.noCellsSelected),null;var l=parseInt(obj.highlighted[0].getAttribute("data-x")),i=parseInt(obj.highlighted[0].getAttribute("data-y")),s=parseInt(obj.highlighted[obj.highlighted.length-1].getAttribute("data-x")),a=parseInt(obj.highlighted[obj.highlighted.length-1].getAttribute("data-y"));e=jexcel.getColumnNameFromId([l,i]),t=s-l+1,o=a-i+1}var u=jexcel.getIdFromColumnName(e,!0);if(obj.options.mergeCells[e])obj.records[u[1]][u[0]].getAttribute("data-merged")&&(r=obj.options.text.cellAlreadyMerged);else if((!t||t<2)&&(!o||o<2))r=obj.options.text.invalidMergeProperties;else for(var c=u[1];c<u[1]+o;c++)for(var f=u[0];f<u[0]+t;f++)jexcel.getColumnNameFromId([f,c]),obj.records[c][f].getAttribute("data-merged")&&(r=obj.options.text.thereIsAConflictWithAnotherMergedCell);if(r)alert(r);else{t>1?obj.records[u[1]][u[0]].setAttribute("colspan",t):t=1,o>1?obj.records[u[1]][u[0]].setAttribute("rowspan",o):o=1,obj.options.mergeCells[e]=[t,o,[]],obj.records[u[1]][u[0]].setAttribute("data-merged","true"),obj.records[u[1]][u[0]].style.overflow="hidden";for(var d=[],p=u[1];p<u[1]+o;p++)for(var b=u[0];b<u[0]+t;b++)u[0]==b&&u[1]==p||(d.push(obj.options.data[p][b]),obj.updateCell(b,p,"",!0),obj.options.mergeCells[e][2].push(obj.records[p][b]),obj.records[p][b].style.display="none",obj.records[p][b]=obj.records[u[1]][u[0]]);obj.updateSelection(obj.records[u[1]][u[0]]),n||(obj.setHistory({action:"setMerge",column:e,colspan:t,rowspan:o,data:d}),obj.dispatch("onmerge",el,e,t,o))}},obj.getMerge=function(e){var t={};if(e)t=obj.options.mergeCells[e]?[obj.options.mergeCells[e][0],obj.options.mergeCells[e][1]]:null;else if(obj.options.mergeCells){obj.options.mergeCells;for(var o=Object.keys(obj.options.mergeCells),n=0;n<o.length;n++)t[o[n]]=[obj.options.mergeCells[o[n]][0],obj.options.mergeCells[o[n]][1]]}return t},obj.removeMerge=function(e,t,o){if(obj.options.mergeCells[e]){var n=jexcel.getIdFromColumnName(e,!0);obj.records[n[1]][n[0]].removeAttribute("colspan"),obj.records[n[1]][n[0]].removeAttribute("rowspan"),obj.records[n[1]][n[0]].removeAttribute("data-merged");for(var r=obj.options.mergeCells[e],l=0,i=0;i<r[1];i++)for(var s=0;s<r[0];s++)(i>0||s>0)&&(obj.records[n[1]+i][n[0]+s]=r[2][l],obj.records[n[1]+i][n[0]+s].style.display="",t&&t[l]&&obj.updateCell(n[0]+s,n[1]+i,t[l]),l++);obj.updateSelection(obj.records[n[1]][n[0]],obj.records[n[1]+i-1][n[0]+s-1]),o||delete obj.options.mergeCells[e]}},obj.destroyMerged=function(e){if(obj.options.mergeCells){obj.options.mergeCells;for(var t=Object.keys(obj.options.mergeCells),o=0;o<t.length;o++)obj.removeMerge(t[o],null,e)}},obj.isColMerged=function(e,t){var o=[];if(obj.options.mergeCells)for(var n=Object.keys(obj.options.mergeCells),r=0;r<n.length;r++){var l=jexcel.getIdFromColumnName(n[r],!0),i=obj.options.mergeCells[n[r]][0],s=l[0],a=l[0]+(i>1?i-1:0);null==t?s<=e&&a>=e&&o.push(n[r]):t?s<e&&a>=e&&o.push(n[r]):s<=e&&a>e&&o.push(n[r])}return o},obj.isRowMerged=function(e,t){var o=[];if(obj.options.mergeCells)for(var n=Object.keys(obj.options.mergeCells),r=0;r<n.length;r++){var l=jexcel.getIdFromColumnName(n[r],!0),i=obj.options.mergeCells[n[r]][1],s=l[1],a=l[1]+(i>1?i-1:0);null==t?s<=e&&a>=e&&o.push(n[r]):t?s<e&&a>=e&&o.push(n[r]):s<=e&&a>e&&o.push(n[r])}return o},obj.openFilter=function(e){if(obj.options.filters){e=parseInt(e),obj.resetSelection();var t=[];if("checkbox"==obj.options.columns[e].type)t.push({id:"true",name:"True"}),t.push({id:"false",name:"False"});else{for(var o=[],n=!1,r=0;r<obj.options.data.length;r++){var l=obj.options.data[r][e],i=obj.records[r][e].innerHTML;l&&i?o[l]=i:n=!0}var s=Object.keys(o);for(t=[],r=0;r<s.length;r++)t.push({id:s[r],name:o[s[r]]});n&&t.push({value:"",id:"",name:"(Blanks)"})}var a=document.createElement("div");obj.filter.children[e+1].innerHTML="",obj.filter.children[e+1].appendChild(a),obj.filter.children[e+1].style.paddingLeft="0px",obj.filter.children[e+1].style.paddingRight="0px",obj.filter.children[e+1].style.overflow="initial";var u={data:t,multiple:!0,autocomplete:!0,opened:!0,value:void 0!==obj.filters[e]?obj.filters[e]:null,width:"100%",position:1==obj.options.tableOverflow||1==obj.options.fullscreen,onclose:function(t){obj.resetFilters(),obj.filters[e]=t.dropdown.getValue(!0),obj.filter.children[e+1].innerHTML=t.dropdown.getText(),obj.filter.children[e+1].style.paddingLeft="",obj.filter.children[e+1].style.paddingRight="",obj.filter.children[e+1].style.overflow="",obj.closeFilter(e),obj.refreshSelection()}};jSuites.dropdown(a,u)}else console.log("Jspreadsheet: filters not enabled.")},obj.resetFilters=function(){if(obj.options.filters)for(var e=0;e<obj.filter.children.length;e++)obj.filter.children[e].innerHTML="&nbsp;",obj.filters[e]=null;obj.results=null,obj.updateResult()},obj.closeFilter=function(e){if(!e)for(var t=0;t<obj.filter.children.length;t++)obj.filters[t]&&(e=t);var o=function(e,t,o){for(var n=0;n<e.length;n++){var r=""+obj.options.data[o][t],l=""+obj.records[o][t].innerHTML;if(e[n]==r||e[n]==l)return!0}return!1},n=obj.filters[e];obj.results=[];for(var r=0;r<obj.options.data.length;r++)o(n,e,r)&&obj.results.push(r);obj.results.length||(obj.results=null),obj.updateResult()},obj.openEditor=function(e,t,o){var n=e.getAttribute("data-y"),r=e.getAttribute("data-x");obj.dispatch("oneditionstart",el,e,r,n),r>0&&(obj.records[n][r-1].style.overflow="hidden");var l=function(t){var o=e.getBoundingClientRect(),l=document.createElement(t);return l.style.width=o.width+"px",l.style.height=o.height-2+"px",l.style.minHeight=o.height-2+"px",e.classList.add("editor"),e.innerHTML="",e.appendChild(l),obj.dispatch("oncreateeditor",el,e,r,n,l),l};if(1==e.classList.contains("readonly"));else if(obj.edition=[obj.records[n][r],obj.records[n][r].innerHTML,r,n],obj.options.columns[r].editor)obj.options.columns[r].editor.openEditor(e,el,t,o);else if("hidden"==obj.options.columns[r].type);else if("checkbox"==obj.options.columns[r].type||"radio"==obj.options.columns[r].type){var i=!e.children[0].checked;obj.setValue(e,i),obj.edition=null}else if("dropdown"==obj.options.columns[r].type||"autocomplete"==obj.options.columns[r].type){if(i=obj.options.data[n][r],obj.options.columns[r].multiple&&!Array.isArray(i)&&(i=i.split(";")),"function"==typeof obj.options.columns[r].filter)var s=obj.options.columns[r].filter(el,e,r,n,obj.options.columns[r].source);else s=obj.options.columns[r].source;for(var a=[],u=0;u<s.length;u++)a.push(s[u]);var c=l("div"),f={data:a,multiple:!!obj.options.columns[r].multiple,autocomplete:!(!obj.options.columns[r].autocomplete&&"autocomplete"!=obj.options.columns[r].type),opened:!0,value:i,width:"100%",height:c.style.minHeight,position:1==obj.options.tableOverflow||1==obj.options.fullscreen,onclose:function(){obj.closeEditor(e,!0)}};obj.options.columns[r].options&&obj.options.columns[r].options.type&&(f.type=obj.options.columns[r].options.type),jSuites.dropdown(c,f)}else if("calendar"==obj.options.columns[r].type||"color"==obj.options.columns[r].type)i=obj.options.data[n][r],(c=l("input")).value=i,1!=obj.options.tableOverflow&&1!=obj.options.fullscreen||(obj.options.columns[r].options.position=!0),obj.options.columns[r].options.value=obj.options.data[n][r],obj.options.columns[r].options.opened=!0,obj.options.columns[r].options.onclose=function(t,o){obj.closeEditor(e,!0)},"color"==obj.options.columns[r].type?jSuites.color(c,obj.options.columns[r].options):jSuites.calendar(c,obj.options.columns[r].options),c.focus();else if("html"==obj.options.columns[r].type){i=obj.options.data[n][r],(c=l("div")).style.position="relative",(b=document.createElement("div")).classList.add("jexcel_richtext"),c.appendChild(b),jSuites.editor(b,{focus:!0,value:i});var d=e.getBoundingClientRect(),p=b.getBoundingClientRect();window.innerHeight<d.bottom+p.height?b.style.top=d.top-(p.height+2)+"px":b.style.top=d.top+"px"}else if("image"==obj.options.columns[r].type){var b,j=e.children[0];(c=l("div")).style.position="relative",(b=document.createElement("div")).classList.add("jclose"),j&&j.src&&b.appendChild(j),c.appendChild(b),jSuites.image(b,obj.options.imageOptions),d=e.getBoundingClientRect(),p=b.getBoundingClientRect(),window.innerHeight<d.bottom+p.height?b.style.top=d.top-(p.height+2)+"px":b.style.top=d.top+"px"}else{if(i=1==t?"":obj.options.data[n][r],0==obj.options.columns[r].wordWrap||1!=obj.options.wordWrap&&1!=obj.options.columns[r].wordWrap)c=l("input");else c=l("textarea");c.focus(),c.value=i,f=obj.options.columns[r];var h=null;if(!isFormula(i)&&(h=getMask(f))){if(!f.disabledMaskOnEdition)if(f.mask){var g=f.mask.split(";");c.setAttribute("data-mask",g[0])}else f.locale&&c.setAttribute("data-locale",f.locale);h.input=c,c.mask=h,jSuites.mask.render(i,h,!1)}c.onblur=function(){obj.closeEditor(e,!0)},c.scrollLeft=c.scrollWidth}},obj.closeEditor=function(e,t){var o=parseInt(e.getAttribute("data-x")),n=parseInt(e.getAttribute("data-y"));if(1==t){if(obj.options.columns[o].editor)var r=obj.options.columns[o].editor.closeEditor(e,t);else if("checkbox"==obj.options.columns[o].type||"radio"==obj.options.columns[o].type||"hidden"==obj.options.columns[o].type);else if("dropdown"==obj.options.columns[o].type||"autocomplete"==obj.options.columns[o].type)r=e.children[0].dropdown.close(!0);else if("calendar"==obj.options.columns[o].type)r=e.children[0].calendar.close(!0);else if("color"==obj.options.columns[o].type)r=e.children[0].color.close(!0);else if("html"==obj.options.columns[o].type)r=e.children[0].children[0].editor.getData();else if("image"==obj.options.columns[o].type){var l=e.children[0].children[0].children[0];r=l&&"IMG"==l.tagName?l.src:""}else if("numeric"==obj.options.columns[o].type)"="!=(""+(r=e.children[0].value)).substr(0,1)&&""==r&&(r=obj.options.columns[o].allowEmpty?"":0),e.children[0].onblur=null;else{r=e.children[0].value,e.children[0].onblur=null;var i,s=obj.options.columns[o];if((i=getMask(s))&&""!==r&&!isFormula(r)&&"number"!=typeof r){var a=jSuites.mask.extract(r,i,!0);a&&""!==a.value&&(r=a.value)}}obj.options.data[n][o]==r?e.innerHTML=obj.edition[1]:obj.setValue(e,r)}else obj.options.columns[o].editor?obj.options.columns[o].editor.closeEditor(e,t):"dropdown"==obj.options.columns[o].type||"autocomplete"==obj.options.columns[o].type?e.children[0].dropdown.close(!0):"calendar"==obj.options.columns[o].type?e.children[0].calendar.close(!0):"color"==obj.options.columns[o].type?e.children[0].color.close(!0):e.children[0].onblur=null,e.innerHTML=obj.edition&&obj.edition[1]?obj.edition[1]:"";obj.dispatch("oneditionend",el,e,o,n,r,t),e.classList.remove("editor"),obj.edition=null},obj.getCell=function(e){var t=(e=jexcel.getIdFromColumnName(e,!0))[0],o=e[1];return obj.records[o][t]},obj.getColumnOptions=function(e,t){var o=obj.options.columns[e];return o||(o={type:"text"}),o},obj.getCellFromCoords=function(e,t){return obj.records[t][e]},obj.getLabel=function(e){var t=(e=jexcel.getIdFromColumnName(e,!0))[0],o=e[1];return obj.records[o][t].innerHTML},obj.getLabelFromCoords=function(e,t){return obj.records[t][e].innerHTML},obj.getValue=function(e,t){if("object"==typeof e)var o=e.getAttribute("data-x"),n=e.getAttribute("data-y");else o=(e=jexcel.getIdFromColumnName(e,!0))[0],n=e[1];var r=null;return null!=o&&null!=n&&(obj.records[n]&&obj.records[n][o]&&(t||1==obj.options.copyCompatibility)?r=obj.records[n][o].innerHTML:obj.options.data[n]&&"undefined"!=obj.options.data[n][o]&&(r=obj.options.data[n][o])),r},obj.getValueFromCoords=function(e,t,o){var n=null;return null!=e&&null!=t&&(obj.records[t]&&obj.records[t][e]&&o||1==obj.options.copyCompatibility?n=obj.records[t][e].innerHTML:obj.options.data[t]&&"undefined"!=obj.options.data[t][e]&&(n=obj.options.data[t][e])),n},obj.setValue=function(e,t,o){var n=[];if("string"==typeof e){var r=(a=jexcel.getIdFromColumnName(e,!0))[0],l=a[1];n.push(obj.updateCell(r,l,t,o)),obj.updateFormulaChain(r,l,n)}else if(r=null,l=null,e&&e.getAttribute&&(r=e.getAttribute("data-x"),l=e.getAttribute("data-y")),null!=r&&null!=l)n.push(obj.updateCell(r,l,t,o)),obj.updateFormulaChain(r,l,n);else{var i=Object.keys(e);if(i.length>0)for(var s=0;s<i.length;s++){var a;"string"==typeof e[s]?(r=(a=jexcel.getIdFromColumnName(e[s],!0))[0],l=a[1]):null!=e[s].x&&null!=e[s].y?(r=e[s].x,l=e[s].y,null!=e[s].newValue?t=e[s].newValue:null!=e[s].value&&(t=e[s].value)):(r=e[s].getAttribute("data-x"),l=e[s].getAttribute("data-y")),null!=r&&null!=l&&(n.push(obj.updateCell(r,l,t,o)),obj.updateFormulaChain(r,l,n))}}obj.setHistory({action:"setValue",records:n,selection:obj.selectedCell}),obj.updateTable(),obj.onafterchanges(el,n)},obj.setValueFromCoords=function(e,t,o,n){var r=[];r.push(obj.updateCell(e,t,o,n)),obj.updateFormulaChain(e,t,r),obj.setHistory({action:"setValue",records:r,selection:obj.selectedCell}),obj.updateTable(),obj.onafterchanges(el,r)},obj.setCheckRadioValue=function(){for(var e=[],t=Object.keys(obj.highlighted),o=0;o<t.length;o++){var n=obj.highlighted[o].getAttribute("data-x"),r=obj.highlighted[o].getAttribute("data-y");"checkbox"!=obj.options.columns[n].type&&"radio"!=obj.options.columns[n].type||e.push(obj.updateCell(n,r,!obj.options.data[r][n]))}e.length&&(obj.setHistory({action:"setValue",records:e,selection:obj.selectedCell}),obj.onafterchanges(el,e))};var stripScript=function(e){var t=new Option;t.innerHTML=e;var o=null;for(e=t.getElementsByTagName("script");o=e[0];)o.parentNode.removeChild(o);return t.innerHTML};obj.updateCell=function(e,t,o,n){if(1!=obj.records[t][e].classList.contains("readonly")||n){var r;"="==(""+o).substr(0,1)&&1==obj.options.secureFormulas&&(r=secureFormula(o))!=o&&(o=r),null!=(r=obj.dispatch("onbeforechange",el,obj.records[t][e],e,t,o))&&(o=r),obj.options.columns[e].editor&&"function"==typeof obj.options.columns[e].editor.updateCell&&(o=obj.options.columns[e].editor.updateCell(obj.records[t][e],o,n)),c={x:e,y:t,col:e,row:t,newValue:o,oldValue:obj.options.data[t][e]};let f=obj.options.columns[e].editor;if(f)obj.options.data[t][e]=o,"function"==typeof f.setValue&&f.setValue(obj.records[t][e],o);else if("checkbox"==obj.options.columns[e].type||"radio"==obj.options.columns[e].type){if("radio"==obj.options.columns[e].type)for(var l=0;l<obj.options.data.length;l++)obj.options.data[l][e]=!1;obj.records[t][e].children[0].checked=1==o||1==o||"true"==o||"TRUE"==o,obj.options.data[t][e]=obj.records[t][e].children[0].checked}else if("dropdown"==obj.options.columns[e].type||"autocomplete"==obj.options.columns[e].type)obj.options.data[t][e]=o,obj.records[t][e].textContent=obj.getDropDownValue(e,o);else if("calendar"==obj.options.columns[e].type){var i=null;if(!validDate(o)){var s=jSuites.calendar.extractDateFromString(o,obj.options.columns[e].options.format);s&&(i=s)}obj.options.data[t][e]=o,obj.records[t][e].textContent=jSuites.calendar.getDateString(i||o,obj.options.columns[e].options.format)}else if("color"==obj.options.columns[e].type)if(obj.options.data[t][e]=o,"square"==obj.options.columns[e].render){var a=document.createElement("div");a.className="color",a.style.backgroundColor=o,obj.records[t][e].textContent="",obj.records[t][e].appendChild(a)}else obj.records[t][e].style.color=o,obj.records[t][e].textContent=o;else if("image"==obj.options.columns[e].type){if(o=""+o,obj.options.data[t][e]=o,obj.records[t][e].innerHTML="",o&&"data:image"==o.substr(0,10)){var u=document.createElement("img");u.src=o,obj.records[t][e].appendChild(u)}}else obj.options.data[t][e]=o,"html"==obj.options.columns[e].type?obj.records[t][e].innerHTML=stripScript(obj.parseValue(e,t,o)):!1===obj.options.stripHTML||!1===obj.options.columns[e].stripHTML?obj.records[t][e].innerHTML=stripScript(obj.parseValue(e,t,o,obj.records[t][e])):obj.records[t][e].textContent=obj.parseValue(e,t,o,obj.records[t][e]),0!=obj.options.columns[e].wordWrap&&(1==obj.options.wordWrap||1==obj.options.columns[e].wordWrap||obj.records[t][e].innerHTML.length>200)?obj.records[t][e].style.whiteSpace="pre-wrap":obj.records[t][e].style.whiteSpace="";e>0&&(obj.records[t][e-1].style.overflow=o?"hidden":""),obj.dispatch("onchange",el,obj.records[t]&&obj.records[t][e]?obj.records[t][e]:null,e,t,o,c.oldValue)}else var c={x:e,y:t,col:e,row:t};return c},obj.copyData=function(e,t){var o=obj.getData(!0,!0),n=obj.selectedContainer,r=parseInt(e.getAttribute("data-x")),l=parseInt(e.getAttribute("data-y")),i=parseInt(t.getAttribute("data-x")),s=parseInt(t.getAttribute("data-y")),a=[],u=!1;if(n[0]==r){if(l<n[1])var c=l-n[1];else c=1;var f=0}else f=r<n[0]?r-n[0]:1,c=0;for(var d=0,p=0,b=l;b<=s;b++)if(!obj.rows[b]||"none"!=obj.rows[b].style.display){null==o[p]&&(p=0),d=0,n[0]!=r&&(f=r<n[0]?r-n[0]:1);for(var j=r;j<=i;j++){if(obj.records[b][j]&&!obj.records[b][j].classList.contains("readonly")&&"none"!=obj.records[b][j].style.display&&0==u){if(!obj.selection.length&&""!=obj.options.data[b][j]){u=!0;continue}(null==o[p]||null==o[p][d])&&(d=0);var h=o[p][d];if(h&&!o[1]&&1==obj.options.autoIncrement)if("text"==obj.options.columns[j].type||"number"==obj.options.columns[j].type)if("="==(""+h).substr(0,1)){var g=h.match(/([A-Z]+[0-9]+)/g);if(g){for(var m=[],v=0;v<g.length;v++){var y=jexcel.getIdFromColumnName(g[v],1);y[0]+=f,y[1]+=c,y[1]<0&&(y[1]=0);var C=jexcel.getColumnNameFromId([y[0],y[1]]);C!=g[v]&&(m[g[v]]=C)}m&&(h=obj.updateFormula(h,m))}}else h==Number(h)&&(h=Number(h)+c);else if("calendar"==obj.options.columns[j].type){var x=new Date(h);x.setDate(x.getDate()+c),h=x.getFullYear()+"-"+jexcel.doubleDigitFormat(parseInt(x.getMonth()+1))+"-"+jexcel.doubleDigitFormat(x.getDate())+" 00:00:00"}a.push(obj.updateCell(j,b,h)),obj.updateFormulaChain(j,b,a)}d++,n[0]!=r&&f++}p++,c++}obj.setHistory({action:"setValue",records:a,selection:obj.selectedCell}),obj.updateTable(),obj.onafterchanges(el,a)},obj.refreshSelection=function(){obj.selectedCell&&obj.updateSelectionFromCoords(obj.selectedCell[0],obj.selectedCell[1],obj.selectedCell[2],obj.selectedCell[3])},obj.conditionalSelectionUpdate=function(e,t,o){if(1==e){if(obj.selectedCell&&(t>=obj.selectedCell[1]&&t<=obj.selectedCell[3]||o>=obj.selectedCell[1]&&o<=obj.selectedCell[3]))return void obj.resetSelection()}else if(obj.selectedCell&&(t>=obj.selectedCell[0]&&t<=obj.selectedCell[2]||o>=obj.selectedCell[0]&&o<=obj.selectedCell[2]))return void obj.resetSelection()},obj.resetSelection=function(e){if(obj.highlighted.length){u=1;for(var t=0;t<obj.highlighted.length;t++){obj.highlighted[t].classList.remove("highlight"),obj.highlighted[t].classList.remove("highlight-left"),obj.highlighted[t].classList.remove("highlight-right"),obj.highlighted[t].classList.remove("highlight-top"),obj.highlighted[t].classList.remove("highlight-bottom"),obj.highlighted[t].classList.remove("highlight-selected");var o=parseInt(obj.highlighted[t].getAttribute("data-x")),n=parseInt(obj.highlighted[t].getAttribute("data-y"));if(obj.highlighted[t].getAttribute("data-merged"))var r=parseInt(obj.highlighted[t].getAttribute("colspan")),l=parseInt(obj.highlighted[t].getAttribute("rowspan")),i=r>0?o+(r-1):o,s=l>0?n+(l-1):n;else i=o,s=n;for(var a=o;a<=i;a++)obj.headers[a]&&obj.headers[a].classList.remove("selected");for(a=n;a<=s;a++)obj.rows[a]&&obj.rows[a].classList.remove("selected")}}else var u=0;return obj.highlighted=[],obj.selectedCell=null,obj.corner.style.top="-2000px",obj.corner.style.left="-2000px",1==e&&1==u&&obj.dispatch("onblur",el),u},obj.updateSelection=function(e,t,o){var n=e.getAttribute("data-x"),r=e.getAttribute("data-y");if(t)var l=t.getAttribute("data-x"),i=t.getAttribute("data-y");else l=n,i=r;obj.updateSelectionFromCoords(n,r,l,i,o)},obj.updateSelectionFromCoords=function(e,t,o,n,r){var l=obj.resetSelection();if(null==t&&(t=0,n=obj.rows.length-1),null==o&&(o=e),null==n&&(n=t),e>=obj.headers.length&&(e=obj.headers.length-1),t>=obj.rows.length&&(t=obj.rows.length-1),o>=obj.headers.length&&(o=obj.headers.length-1),n>=obj.rows.length&&(n=obj.rows.length-1),obj.selectedCell=[e,t,o,n],null!=e){if(obj.records[t][e]&&obj.records[t][e].classList.add("highlight-selected"),parseInt(e)<parseInt(o))var i=parseInt(e),s=parseInt(o);else i=parseInt(o),s=parseInt(e);if(parseInt(t)<parseInt(n))var a=parseInt(t),u=parseInt(n);else a=parseInt(n),u=parseInt(t);for(var c=i;c<=s;c++)for(var f=a;f<=u;f++)if(obj.records[f][c]&&obj.records[f][c].getAttribute("data-merged")){var d=parseInt(obj.records[f][c].getAttribute("data-x")),p=parseInt(obj.records[f][c].getAttribute("data-y")),b=parseInt(obj.records[f][c].getAttribute("colspan")),j=parseInt(obj.records[f][c].getAttribute("rowspan"));b>1&&(d<i&&(i=d),d+b>s&&(s=d+b-1)),j&&(p<a&&(a=p),p+j>u&&(u=p+j-1))}var h=null,g=null,m=null,v=null;for(f=a;f<=u;f++)"none"!=obj.rows[f].style.display&&(null==m&&(m=f),v=f);for(c=i;c<=s;c++){for(f=a;f<=u;f++)"none"!=obj.rows[f].style.display&&"none"!=obj.records[f][c].style.display&&(obj.records[f][c].classList.add("highlight"),obj.highlighted.push(obj.records[f][c]));"hidden"!=obj.options.columns[c].type&&(null==h&&(h=c),g=c)}for(h||(h=0),g||(g=0),c=h;c<=g;c++)"hidden"!=obj.options.columns[c].type&&(obj.records[m]&&obj.records[m][c]&&obj.records[m][c].classList.add("highlight-top"),obj.records[v]&&obj.records[v][c]&&obj.records[v][c].classList.add("highlight-bottom"),obj.headers[c].classList.add("selected"));for(f=m;f<=v;f++)obj.rows[f]&&"none"!=obj.rows[f].style.display&&(obj.records[f][h].classList.add("highlight-left"),obj.records[f][g].classList.add("highlight-right"),obj.rows[f].classList.add("selected"));obj.selectedContainer=[h,m,g,v]}0==l&&(obj.dispatch("onfocus",el),obj.removeCopyingSelection()),obj.dispatch("onselection",el,h,m,g,v,r),obj.updateCornerPosition()},obj.removeCopySelection=function(){for(var e=0;e<obj.selection.length;e++)obj.selection[e].classList.remove("selection"),obj.selection[e].classList.remove("selection-left"),obj.selection[e].classList.remove("selection-right"),obj.selection[e].classList.remove("selection-top"),obj.selection[e].classList.remove("selection-bottom");obj.selection=[]},obj.updateCopySelection=function(e,t){obj.removeCopySelection();var o=obj.selectedContainer[0],n=obj.selectedContainer[1],r=obj.selectedContainer[2],l=obj.selectedContainer[3];if(null!=e&&null!=t){if(e-r>0)var i=parseInt(r)+1,s=parseInt(e);else i=parseInt(e),s=parseInt(o)-1;if(t-l>0)var a=parseInt(l)+1,u=parseInt(t);else a=parseInt(t),u=parseInt(n)-1;s-i<=u-a?(i=parseInt(o),s=parseInt(r)):(a=parseInt(n),u=parseInt(l));for(var c=a;c<=u;c++)for(var f=i;f<=s;f++)obj.records[c][f]&&"none"!=obj.rows[c].style.display&&"none"!=obj.records[c][f].style.display&&(obj.records[c][f].classList.add("selection"),obj.records[a][f].classList.add("selection-top"),obj.records[u][f].classList.add("selection-bottom"),obj.records[c][i].classList.add("selection-left"),obj.records[c][s].classList.add("selection-right"),obj.selection.push(obj.records[c][f]))}},obj.updateCornerPosition=function(){if(obj.highlighted.length){var e=obj.highlighted[obj.highlighted.length-1],t=e.getAttribute("data-x"),o=obj.content.getBoundingClientRect(),n=o.left,r=o.top,l=e.getBoundingClientRect(),i=l.left,s=l.top,a=l.width,u=l.height,c=i-n+obj.content.scrollLeft+a-4,f=s-r+obj.content.scrollTop+u-4;if(obj.corner.style.top=f+"px",obj.corner.style.left=c+"px",obj.options.freezeColumns){var d=obj.getFreezeWidth();t>obj.options.freezeColumns-1&&i-n+a<d?obj.corner.style.display="none":1==obj.options.selectionCopy&&(obj.corner.style.display="")}else 1==obj.options.selectionCopy&&(obj.corner.style.display="")}else obj.corner.style.top="-2000px",obj.corner.style.left="-2000px"},obj.updateScroll=function(e){var t=obj.content.getBoundingClientRect(),o=t.left,n=t.top,r=t.width,l=t.height,i=obj.records[obj.selectedCell[3]][obj.selectedCell[2]].getBoundingClientRect(),s=i.left,a=i.top,u=i.width,c=i.height;if(0==e||1==e)var f=s-o+obj.content.scrollLeft,d=a-n+obj.content.scrollTop-2;else f=s-o+obj.content.scrollLeft+u,d=a-n+obj.content.scrollTop+c;d>obj.content.scrollTop+30&&d<obj.content.scrollTop+l||(d<obj.content.scrollTop+30?obj.content.scrollTop=d-c:obj.content.scrollTop=d-(l-2));var p=obj.getFreezeWidth();f>obj.content.scrollLeft+p&&f<obj.content.scrollLeft+r||(f<obj.content.scrollLeft+30?(obj.content.scrollLeft=f,obj.content.scrollLeft<50&&(obj.content.scrollLeft=0)):f<obj.content.scrollLeft+p?obj.content.scrollLeft=f-p-1:obj.content.scrollLeft=f-(r-20))},obj.getWidth=function(e){if(void 0===e)for(var t=[],o=0;o<obj.headers.length;o++)t.push(obj.options.columns[o].width);else"object"==typeof e&&(e=e.getAttribute("data-x")),t=obj.colgroup[e].getAttribute("width");return t},obj.setWidth=function(e,t,o){if(t){if(Array.isArray(e)){o||(o=[]);for(var n=0;n<e.length;n++){o[n]||(o[n]=obj.colgroup[e[n]].getAttribute("width"));var r=Array.isArray(t)&&t[n]?t[n]:t;obj.colgroup[e[n]].setAttribute("width",r),obj.options.columns[e[n]].width=r}}else o||(o=obj.colgroup[e].getAttribute("width")),obj.colgroup[e].setAttribute("width",t),obj.options.columns[e].width=t;obj.setHistory({action:"setWidth",column:e,oldValue:o,newValue:t}),obj.dispatch("onresizecolumn",el,e,t,o),obj.updateCornerPosition()}},obj.setHeight=function(e,t,o){t>0&&("object"==typeof e&&(e=e.getAttribute("data-y")),o||(o=obj.rows[e].getAttribute("height"))||(o=obj.rows[e].getBoundingClientRect().height),t=parseInt(t),obj.rows[e].style.height=t+"px",obj.options.rows[e]||(obj.options.rows[e]={}),obj.options.rows[e].height=t,obj.setHistory({action:"setHeight",row:e,oldValue:o,newValue:t}),obj.dispatch("onresizerow",el,e,t,o),obj.updateCornerPosition())},obj.getHeight=function(e){if(void 0===e)for(var t=[],o=0;o<obj.rows.length;o++){var n=obj.rows[o].style.height;n&&(t[o]=n)}else"object"==typeof e&&(e=$(e).getAttribute("data-y")),t=obj.rows[e].style.height;return t},obj.setFooter=function(e){if(e&&(obj.options.footers=e),obj.options.footers){obj.tfoot||(obj.tfoot=document.createElement("tfoot"),obj.table.appendChild(obj.tfoot));for(var t=0;t<obj.options.footers.length;t++){if(obj.tfoot.children[t])var o=obj.tfoot.children[t];else{o=document.createElement("tr");var n=document.createElement("td");o.appendChild(n),obj.tfoot.appendChild(o)}for(var r=0;r<obj.headers.length;r++){if(obj.options.footers[t][r]||(obj.options.footers[t][r]=""),obj.tfoot.children[t].children[r+1])n=obj.tfoot.children[t].children[r+1];else{n=document.createElement("td"),o.appendChild(n);var l=obj.options.columns[r].align?obj.options.columns[r].align:"center";n.style.textAlign=l}n.textContent=obj.parseValue(+obj.records.length+r,t,obj.options.footers[t][r]),n.style.display=obj.colgroup[r].style.display}}}},obj.getHeader=function(e){return obj.headers[e].textContent},obj.setHeader=function(e,t){if(obj.headers[e]){var o=obj.headers[e].textContent;t||(t=prompt(obj.options.text.columnName,o)),t&&(obj.headers[e].textContent=t,obj.headers[e].setAttribute("title",t),obj.options.columns[e].title=t),obj.setHistory({action:"setHeader",column:e,oldValue:o,newValue:t}),obj.dispatch("onchangeheader",el,e,o,t)}},obj.getHeaders=function(e){for(var t=[],o=0;o<obj.headers.length;o++)t.push(obj.getHeader(o));return e?t:t.join(obj.options.csvDelimiter)},obj.getMeta=function(e,t){return e?t?obj.options.meta[e]&&obj.options.meta[e][t]?obj.options.meta[e][t]:null:obj.options.meta[e]?obj.options.meta[e]:null:obj.options.meta},obj.setMeta=function(e,t,o){if(obj.options.meta||(obj.options.meta={}),t&&o)obj.options.meta[e]||(obj.options.meta[e]={}),obj.options.meta[e][t]=o;else for(var n=Object.keys(e),r=0;r<n.length;r++){obj.options.meta[n[r]]||(obj.options.meta[n[r]]={});for(var l=Object.keys(e[n[r]]),i=0;i<l.length;i++)obj.options.meta[n[r]][l[i]]=e[n[r]][l[i]]}obj.dispatch("onchangemeta",el,e,t,o)},obj.updateMeta=function(e){if(obj.options.meta){for(var t={},o=Object.keys(obj.options.meta),n=0;n<o.length;n++)e[o[n]]?t[e[o[n]]]=obj.options.meta[o[n]]:t[o[n]]=obj.options.meta[o[n]];obj.options.meta=t}},obj.getStyle=function(e,t){if(e)return e=jexcel.getIdFromColumnName(e,!0),t?obj.records[e[1]][e[0]].style[t]:obj.records[e[1]][e[0]].getAttribute("style");for(var o={},n=obj.options.data[0].length,r=obj.options.data.length,l=0;l<r;l++)for(var i=0;i<n;i++){var s=t?obj.records[l][i].style[t]:obj.records[l][i].getAttribute("style");s&&(o[jexcel.getColumnNameFromId([i,l])]=s)}return o},obj.resetStyle=function(e,t){for(var o=Object.keys(e),n=0;n<o.length;n++){var r=jexcel.getIdFromColumnName(o[n],!0);obj.records[r[1]]&&obj.records[r[1]][r[0]]&&obj.records[r[1]][r[0]].setAttribute("style","")}obj.setStyle(e,null,null,null,t)},obj.setStyle=function(e,t,o,n,r){var l={},i={},s=function(e,t,o){var r=jexcel.getIdFromColumnName(e,!0);if(obj.records[r[1]]&&obj.records[r[1]][r[0]]&&(0==obj.records[r[1]][r[0]].classList.contains("readonly")||n)){var s=obj.records[r[1]][r[0]].style[t];s!=o||n?obj.records[r[1]][r[0]].style[t]=o:(o="",obj.records[r[1]][r[0]].style[t]=""),i[e]||(i[e]=[]),l[e]||(l[e]=[]),i[e].push([t+":"+s]),l[e].push([t+":"+o])}};if(t&&o)if("string"==typeof e)s(e,t,o);else for(var a=[],u=0;u<e.length;u++){var c=e[u].getAttribute("data-x"),f=e[u].getAttribute("data-y"),d=jexcel.getColumnNameFromId([c,f]);a[d]||(s(d,t,o),a[d]=!0)}else{var p=Object.keys(e);for(u=0;u<p.length;u++){var b=e[p[u]];"string"==typeof b&&(b=b.split(";"));for(var j=0;j<b.length;j++)"string"==typeof b[j]&&(b[j]=b[j].split(":")),b[j][0].trim()&&s(p[u],b[j][0].trim(),b[j][1])}}for(p=Object.keys(i),u=0;u<p.length;u++)i[p[u]]=i[p[u]].join(";");for(p=Object.keys(l),u=0;u<p.length;u++)l[p[u]]=l[p[u]].join(";");r||obj.setHistory({action:"setStyle",oldValue:i,newValue:l}),obj.dispatch("onchangestyle",el,e,t,o)},obj.getComments=function(e,t){if(e)return"string"==typeof e&&(e=jexcel.getIdFromColumnName(e,!0)),t?[obj.records[e[1]][e[0]].getAttribute("title"),obj.records[e[1]][e[0]].getAttribute("author")]:obj.records[e[1]][e[0]].getAttribute("title")||"";for(var o={},n=0;n<obj.options.data.length;n++)for(var r=0;r<obj.options.columns.length;r++){var l=obj.records[n][r].getAttribute("title");l&&(o[e=jexcel.getColumnNameFromId([r,n])]=l)}return o},obj.setComments=function(e,t,o){if("string"==typeof e)var n=jexcel.getIdFromColumnName(e,!0);else n=e;var r=obj.records[n[1]][n[0]].getAttribute("title"),l=[r,o=obj.records[n[1]][n[0]].getAttribute("data-author")];obj.records[n[1]][n[0]].setAttribute("title",t||""),obj.records[n[1]][n[0]].setAttribute("data-author",o||""),t?obj.records[n[1]][n[0]].classList.add("jexcel_comments"):obj.records[n[1]][n[0]].classList.remove("jexcel_comments"),obj.setHistory({action:"setComments",column:e,newValue:[t,o],oldValue:l}),obj.dispatch("oncomments",el,t,r,n,n[0],n[1])},obj.getConfig=function(){var e=obj.options;return e.style=obj.getStyle(),e.mergeCells=obj.getMerge(),e.comments=obj.getComments(),e},obj.orderBy=function(e,t){if(e>=0){if(Object.keys(obj.options.mergeCells).length>0){if(!confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure))return!1;obj.destroyMerged()}t=null==t?obj.headers[e].classList.contains("arrow-down")?1:0:t?1:0;var o=[];if("number"==obj.options.columns[e].type||"numeric"==obj.options.columns[e].type||"percentage"==obj.options.columns[e].type||"autonumber"==obj.options.columns[e].type||"color"==obj.options.columns[e].type)for(var n=0;n<obj.options.data.length;n++)o[n]=[n,Number(obj.options.data[n][e])];else if("calendar"==obj.options.columns[e].type||"checkbox"==obj.options.columns[e].type||"radio"==obj.options.columns[e].type)for(n=0;n<obj.options.data.length;n++)o[n]=[n,obj.options.data[n][e]];else for(n=0;n<obj.options.data.length;n++)o[n]=[n,obj.records[n][e].textContent.toLowerCase()];"function"!=typeof obj.options.sorting&&(obj.options.sorting=function(e){return function(t,o){var n=t[1],r=o[1];return e?""===n&&""!==r?1:""!==n&&""===r||n>r?-1:n<r?1:0:""===n&&""!==r?1:""!==n&&""===r?-1:n>r?1:n<r?-1:0}}),o=o.sort(obj.options.sorting(t));var r=[];for(n=0;n<o.length;n++)r[n]=o[n][0];return obj.setHistory({action:"orderBy",rows:r,column:e,order:t}),obj.updateOrderArrow(e,t),obj.updateOrder(r),obj.dispatch("onsort",el,e,t),!0}},obj.updateOrderArrow=function(e,t){for(var o=0;o<obj.headers.length;o++)obj.headers[o].classList.remove("arrow-up"),obj.headers[o].classList.remove("arrow-down");t?obj.headers[e].classList.add("arrow-up"):obj.headers[e].classList.add("arrow-down")},obj.updateOrder=function(e){for(var t=[],o=0;o<e.length;o++)t[o]=obj.options.data[e[o]];for(obj.options.data=t,t=[],o=0;o<e.length;o++)t[o]=obj.records[e[o]];for(obj.records=t,t=[],o=0;o<e.length;o++)t[o]=obj.rows[e[o]];if(obj.rows=t,obj.updateTableReferences(),obj.results&&obj.results.length)obj.searchInput.value?obj.search(obj.searchInput.value):obj.closeFilter();else if(obj.results=null,obj.pageNumber=0,obj.options.pagination>0)obj.page(0);else if(1==obj.options.lazyLoading)obj.loadPage(0);else for(o=0;o<obj.rows.length;o++)obj.tbody.appendChild(obj.rows[o])},obj.moveRow=function(e,t,o){if(Object.keys(obj.options.mergeCells).length>0){if(e>t)var n=1;else n=0;if(obj.isRowMerged(e).length||obj.isRowMerged(t,n).length){if(!confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure))return!1;obj.destroyMerged()}}if(1==obj.options.search){if(obj.results&&obj.results.length!=obj.rows.length){if(!confirm(obj.options.text.thisActionWillClearYourSearchResultsAreYouSure))return!1;obj.resetSearch()}obj.results=null}o||(Array.prototype.indexOf.call(obj.tbody.children,obj.rows[t])>=0?e>t?obj.tbody.insertBefore(obj.rows[e],obj.rows[t]):obj.tbody.insertBefore(obj.rows[e],obj.rows[t].nextSibling):obj.tbody.removeChild(obj.rows[e])),obj.rows.splice(t,0,obj.rows.splice(e,1)[0]),obj.records.splice(t,0,obj.records.splice(e,1)[0]),obj.options.data.splice(t,0,obj.options.data.splice(e,1)[0]),obj.options.pagination>0&&obj.tbody.children.length!=obj.options.pagination&&obj.page(obj.pageNumber),obj.setHistory({action:"moveRow",oldValue:e,newValue:t}),obj.updateTableReferences(),obj.dispatch("onmoverow",el,e,t)},obj.insertRow=function(e,t,o){if(1==obj.options.allowInsertRow){var n=[];if(e>0)var r=e;else r=1,e&&(n=e);o=!!o;var l=obj.options.data.length-1;if((null==t||t>=parseInt(l)||t<0)&&(t=l),!1===obj.dispatch("onbeforeinsertrow",el,t,r,o))return!1;if(Object.keys(obj.options.mergeCells).length>0&&obj.isRowMerged(t,o).length){if(!confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure))return!1;obj.destroyMerged()}if(1==obj.options.search){if(obj.results&&obj.results.length!=obj.rows.length){if(!confirm(obj.options.text.thisActionWillClearYourSearchResultsAreYouSure))return!1;obj.resetSearch()}obj.results=null}for(var i=o?t:t+1,s=obj.records.splice(i),a=obj.options.data.splice(i),u=obj.rows.splice(i),c=[],f=[],d=[],p=i;p<r+i;p++){obj.options.data[p]=[];for(var b=0;b<obj.options.columns.length;b++)obj.options.data[p][b]=n[b]?n[b]:"";var j=obj.createRow(p,obj.options.data[p]);u[0]?Array.prototype.indexOf.call(obj.tbody.children,u[0])>=0&&obj.tbody.insertBefore(j,u[0]):Array.prototype.indexOf.call(obj.tbody.children,obj.rows[t])>=0&&obj.tbody.appendChild(j),c.push(obj.records[p]),f.push(obj.options.data[p]),d.push(j)}Array.prototype.push.apply(obj.records,s),Array.prototype.push.apply(obj.options.data,a),Array.prototype.push.apply(obj.rows,u),obj.options.pagination>0&&obj.page(obj.pageNumber),obj.setHistory({action:"insertRow",rowNumber:t,numOfRows:r,insertBefore:o,rowRecords:c,rowData:f,rowNode:d}),obj.updateTableReferences(),obj.dispatch("oninsertrow",el,t,r,c,o)}},obj.deleteRow=function(e,t){if(1==obj.options.allowDeleteRow)if(1==obj.options.allowDeletingAllRows||obj.options.data.length>1){if(null==e){var o=obj.getSelectedRows();o[0]?(e=parseInt(o[0].getAttribute("data-y")),t=o.length):(e=obj.options.data.length-1,t=1)}var n=obj.options.data.length-1;if((null==e||e>n||e<0)&&(e=n),t||(t=1),e+t>=obj.options.data.length&&(t=obj.options.data.length-e),!1===obj.dispatch("onbeforedeleterow",el,e,t))return!1;if(parseInt(e)>-1){var r=!1;if(Object.keys(obj.options.mergeCells).length>0)for(var l=e;l<e+t;l++)obj.isRowMerged(l,!1).length&&(r=!0);if(r){if(!confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure))return!1;obj.destroyMerged()}if(1==obj.options.search){if(obj.results&&obj.results.length!=obj.rows.length){if(!confirm(obj.options.text.thisActionWillClearYourSearchResultsAreYouSure))return!1;obj.resetSearch()}obj.results=null}for(0==obj.options.allowDeletingAllRows&&n+1===t&&(t--,console.error("Jspreadsheet: It is not possible to delete the last row")),l=e;l<e+t;l++)Array.prototype.indexOf.call(obj.tbody.children,obj.rows[l])>=0&&(obj.rows[l].className="",obj.rows[l].parentNode.removeChild(obj.rows[l]));var i=obj.records.splice(e,t),s=obj.options.data.splice(e,t),a=obj.rows.splice(e,t);obj.options.pagination>0&&obj.tbody.children.length!=obj.options.pagination&&obj.page(obj.pageNumber),obj.conditionalSelectionUpdate(1,e,e+t-1),obj.setHistory({action:"deleteRow",rowNumber:e,numOfRows:t,insertBefore:1,rowRecords:i,rowData:s,rowNode:a}),obj.updateTableReferences(),obj.dispatch("ondeleterow",el,e,t,i)}}else console.error("Jspreadsheet: It is not possible to delete the last row")},obj.moveColumn=function(e,t){if(Object.keys(obj.options.mergeCells).length>0){if(e>t)var o=1;else o=0;if(obj.isColMerged(e).length||obj.isColMerged(t,o).length){if(!confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure))return!1;obj.destroyMerged()}}if((e=parseInt(e))>(t=parseInt(t))){obj.headerContainer.insertBefore(obj.headers[e],obj.headers[t]),obj.colgroupContainer.insertBefore(obj.colgroup[e],obj.colgroup[t]);for(var n=0;n<obj.rows.length;n++)obj.rows[n].insertBefore(obj.records[n][e],obj.records[n][t])}else for(obj.headerContainer.insertBefore(obj.headers[e],obj.headers[t].nextSibling),obj.colgroupContainer.insertBefore(obj.colgroup[e],obj.colgroup[t].nextSibling),n=0;n<obj.rows.length;n++)obj.rows[n].insertBefore(obj.records[n][e],obj.records[n][t].nextSibling);for(obj.options.columns.splice(t,0,obj.options.columns.splice(e,1)[0]),obj.headers.splice(t,0,obj.headers.splice(e,1)[0]),obj.colgroup.splice(t,0,obj.colgroup.splice(e,1)[0]),n=0;n<obj.rows.length;n++)obj.options.data[n].splice(t,0,obj.options.data[n].splice(e,1)[0]),obj.records[n].splice(t,0,obj.records[n].splice(e,1)[0]);if(obj.options.footers)for(n=0;n<obj.options.footers.length;n++)obj.options.footers[n].splice(t,0,obj.options.footers[n].splice(e,1)[0]);obj.setHistory({action:"moveColumn",oldValue:e,newValue:t}),obj.updateTableReferences(),obj.dispatch("onmovecolumn",el,e,t)},obj.insertColumn=function(e,t,o,n){if(1==obj.options.allowInsertColumn){var r=[];if(e>0)var l=e;else l=1,e&&(r=e);o=!!o;var i=obj.options.columns.length-1;if((null==t||t>=parseInt(i)||t<0)&&(t=i),!1===obj.dispatch("onbeforeinsertcolumn",el,t,l,o))return!1;if(Object.keys(obj.options.mergeCells).length>0&&obj.isColMerged(t,o).length){if(!confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure))return!1;obj.destroyMerged()}n||(n=[]);for(var s=0;s<l;s++)n[s]||(n[s]={type:"text",source:[],options:[],width:obj.options.defaultColWidth,align:obj.options.defaultColAlign});var a=o?t:t+1;obj.options.columns=jexcel.injectArray(obj.options.columns,a,n);for(var u=obj.headers.splice(a),c=obj.colgroup.splice(a),f=[],d=[],p=[],b=[],j=[],h=a;h<l+a;h++)obj.createCellHeader(h),obj.headerContainer.insertBefore(obj.headers[h],obj.headerContainer.children[h+1]),obj.colgroupContainer.insertBefore(obj.colgroup[h],obj.colgroupContainer.children[h+1]),f.push(obj.headers[h]),d.push(obj.colgroup[h]);if(obj.options.footers)for(var g=0;g<obj.options.footers.length;g++){for(j[g]=[],s=0;s<l;s++)j[g].push("");obj.options.footers[g].splice(a,0,j[g])}for(var m=0;m<obj.options.data.length;m++){var v=obj.options.data[m].splice(a),y=obj.records[m].splice(a);for(b[m]=[],p[m]=[],h=a;h<l+a;h++){var C=r[m]?r[m]:"";obj.options.data[m][h]=C;var x=obj.createCell(h,m,obj.options.data[m][h]);obj.records[m][h]=x,obj.rows[m]&&obj.rows[m].insertBefore(x,obj.rows[m].children[h+1]),b[m].push(C),p[m].push(x)}Array.prototype.push.apply(obj.options.data[m],v),Array.prototype.push.apply(obj.records[m],y)}if(Array.prototype.push.apply(obj.headers,u),Array.prototype.push.apply(obj.colgroup,c),obj.options.nestedHeaders&&obj.options.nestedHeaders.length>0)if(obj.options.nestedHeaders[0]&&obj.options.nestedHeaders[0][0])for(g=0;g<obj.options.nestedHeaders.length;g++){var w=parseInt(obj.options.nestedHeaders[g][obj.options.nestedHeaders[g].length-1].colspan)+l;obj.options.nestedHeaders[g][obj.options.nestedHeaders[g].length-1].colspan=w,obj.thead.children[g].children[obj.thead.children[g].children.length-1].setAttribute("colspan",w);var A=obj.thead.children[g].children[obj.thead.children[g].children.length-1].getAttribute("data-column");for(A=A.split(","),h=a;h<l+a;h++)A.push(h);obj.thead.children[g].children[obj.thead.children[g].children.length-1].setAttribute("data-column",A)}else w=parseInt(obj.options.nestedHeaders[0].colspan)+l,obj.options.nestedHeaders[0].colspan=w,obj.thead.children[0].children[obj.thead.children[0].children.length-1].setAttribute("colspan",w);obj.setHistory({action:"insertColumn",columnNumber:t,numOfColumns:l,insertBefore:o,columns:n,headers:f,colgroup:d,records:p,footers:j,data:b}),obj.updateTableReferences(),obj.dispatch("oninsertcolumn",el,t,l,p,o)}},obj.deleteColumn=function(e,t){if(1==obj.options.allowDeleteColumn)if(obj.headers.length>1){if(null==e){var o=obj.getSelectedColumns(!0);o.length?(e=parseInt(o[0]),t=parseInt(o.length)):(e=obj.headers.length-1,t=1)}var n=obj.options.data[0].length-1;if((null==e||e>n||e<0)&&(e=n),t||(t=1),t>obj.options.data[0].length-e&&(t=obj.options.data[0].length-e),!1===obj.dispatch("onbeforedeletecolumn",el,e,t))return!1;if(parseInt(e)>-1){var r=!1;if(Object.keys(obj.options.mergeCells).length>0)for(var l=e;l<e+t;l++)obj.isColMerged(l,!1).length&&(r=!0);if(r){if(!confirm(obj.options.text.thisActionWillDestroyAnyExistingMergedCellsAreYouSure))return!1;obj.destroyMerged()}var i=obj.options.columns.splice(e,t);for(l=e;l<e+t;l++)obj.colgroup[l].className="",obj.headers[l].className="",obj.colgroup[l].parentNode.removeChild(obj.colgroup[l]),obj.headers[l].parentNode.removeChild(obj.headers[l]);for(var s=obj.headers.splice(e,t),a=obj.colgroup.splice(e,t),u=[],c=[],f=[],d=0;d<obj.options.data.length;d++)for(l=e;l<e+t;l++)obj.records[d][l].className="",obj.records[d][l].parentNode.removeChild(obj.records[d][l]);for(d=0;d<obj.options.data.length;d++)c[d]=obj.options.data[d].splice(e,t),u[d]=obj.records[d].splice(e,t);if(obj.options.footers)for(d=0;d<obj.options.footers.length;d++)f[d]=obj.options.footers[d].splice(e,t);if(obj.conditionalSelectionUpdate(0,e,e+t-1),obj.options.nestedHeaders&&obj.options.nestedHeaders.length>0)if(obj.options.nestedHeaders[0]&&obj.options.nestedHeaders[0][0])for(var p=0;p<obj.options.nestedHeaders.length;p++){var b=parseInt(obj.options.nestedHeaders[p][obj.options.nestedHeaders[p].length-1].colspan)-t;obj.options.nestedHeaders[p][obj.options.nestedHeaders[p].length-1].colspan=b,obj.thead.children[p].children[obj.thead.children[p].children.length-1].setAttribute("colspan",b)}else b=parseInt(obj.options.nestedHeaders[0].colspan)-t,obj.options.nestedHeaders[0].colspan=b,obj.thead.children[0].children[obj.thead.children[0].children.length-1].setAttribute("colspan",b);obj.setHistory({action:"deleteColumn",columnNumber:e,numOfColumns:t,insertBefore:1,columns:i,headers:s,colgroup:a,records:u,footers:f,data:c}),obj.updateTableReferences(),obj.dispatch("ondeletecolumn",el,e,t,u)}}else console.error("Jspreadsheet: It is not possible to delete the last column")},obj.getSelectedRows=function(e){for(var t=[],o=0;o<obj.rows.length;o++)obj.rows[o].classList.contains("selected")&&(e?t.push(o):t.push(obj.rows[o]));return t},obj.getSelectedColumns=function(){for(var e=[],t=0;t<obj.headers.length;t++)obj.headers[t].classList.contains("selected")&&e.push(t);return e},obj.getHighlighted=function(){return obj.highlighted},obj.updateTableReferences=function(){for(var e=0;e<obj.headers.length;e++)(l=obj.headers[e].getAttribute("data-x"))!=e&&(obj.headers[e].setAttribute("data-x",e),obj.headers[e].getAttribute("title")||(obj.headers[e].innerHTML=jexcel.getColumnName(e)));for(var t=0;t<obj.rows.length;t++)obj.rows[t]&&(i=obj.rows[t].getAttribute("data-y"))!=t&&(obj.rows[t].setAttribute("data-y",t),obj.rows[t].children[0].setAttribute("data-y",t),obj.rows[t].children[0].innerHTML=t+1);var o=[],n=[],r=function(e,t,n,r){if(e!=n&&obj.records[r][n].setAttribute("data-x",n),t!=r&&obj.records[r][n].setAttribute("data-y",r),e!=n||t!=r){var l=jexcel.getColumnNameFromId([e,t]),i=jexcel.getColumnNameFromId([n,r]);o[l]=i}};for(t=0;t<obj.records.length;t++)for(e=0;e<obj.records[0].length;e++)if(obj.records[t][e]){var l=obj.records[t][e].getAttribute("data-x"),i=obj.records[t][e].getAttribute("data-y");if(obj.records[t][e].getAttribute("data-merged")){var s=jexcel.getColumnNameFromId([l,i]),a=jexcel.getColumnNameFromId([e,t]);if(null==n[s])if(s==a)n[s]=!1;else{var u=parseInt(e-l),c=parseInt(t-i);n[s]=[a,u,c]}}else r(l,i,e,t)}var f=Object.keys(n);if(f.length)for(e=0;e<f.length;e++)if(n[f[e]]){var d=jexcel.getIdFromColumnName(f[e],!0);for(r(l=d[0],i=d[1],l+n[f[e]][1],i+n[f[e]][2]),s=f[e],a=n[f[e]][0],t=0;t<obj.options.mergeCells[s][2].length;t++)l=parseInt(obj.options.mergeCells[s][2][t].getAttribute("data-x")),i=parseInt(obj.options.mergeCells[s][2][t].getAttribute("data-y")),obj.options.mergeCells[s][2][t].setAttribute("data-x",l+n[f[e]][1]),obj.options.mergeCells[s][2][t].setAttribute("data-y",i+n[f[e]][2]);obj.options.mergeCells[a]=obj.options.mergeCells[s],delete obj.options.mergeCells[s]}obj.updateFormulas(o),obj.updateMeta(o),obj.refreshSelection(),obj.updateTable()},obj.updateTable=function(){if(obj.options.minSpareRows>0){for(var e=0,t=obj.rows.length-1;t>=0;t--){for(var o=!1,n=0;n<obj.headers.length;n++)obj.options.data[t][n]&&(o=!0);if(o)break;e++}obj.options.minSpareRows-e>0&&obj.insertRow(obj.options.minSpareRows-e)}if(obj.options.minSpareCols>0){var r=0;for(n=obj.headers.length-1;n>=0;n--){for(o=!1,t=0;t<obj.rows.length;t++)obj.options.data[t][n]&&(o=!0);if(o)break;r++}obj.options.minSpareCols-r>0&&obj.insertColumn(obj.options.minSpareCols-r)}if("function"==typeof obj.options.updateTable){for(obj.options.detachForUpdates&&el.removeChild(obj.content),t=0;t<obj.rows.length;t++)for(n=0;n<obj.headers.length;n++)obj.options.updateTable(el,obj.records[t][n],n,t,obj.options.data[t][n],obj.records[t][n].textContent,jexcel.getColumnNameFromId([n,t]));obj.options.detachForUpdates&&el.insertBefore(obj.content,obj.pagination)}obj.options.footers&&obj.setFooter(),setTimeout((function(){obj.updateCornerPosition()}),0)},obj.isReadOnly=function(e){if(e=obj.getCell(e))return!!e.classList.contains("readonly")},obj.setReadOnly=function(e,t){(e=obj.getCell(e))&&(t?e.classList.add("readonly"):e.classList.remove("readonly"))},obj.showRow=function(e){obj.rows[e].style.display=""},obj.hideRow=function(e){obj.rows[e].style.display="none"},obj.showColumn=function(e){obj.headers[e].style.display="",obj.colgroup[e].style.display="",obj.filter&&obj.filter.children.length>e+1&&(obj.filter.children[e+1].style.display="");for(var t=0;t<obj.options.data.length;t++)obj.records[t][e].style.display="";obj.options.footers&&obj.setFooter(),obj.resetSelection()},obj.hideColumn=function(e){obj.headers[e].style.display="none",obj.colgroup[e].style.display="none",obj.filter&&obj.filter.children.length>e+1&&(obj.filter.children[e+1].style.display="none");for(var t=0;t<obj.options.data.length;t++)obj.records[t][e].style.display="none";obj.options.footers&&obj.setFooter(),obj.resetSelection()},obj.showIndex=function(){obj.table.classList.remove("jexcel_hidden_index")},obj.hideIndex=function(){obj.table.classList.add("jexcel_hidden_index")};var chainLoopProtection=[];obj.updateFormulaChain=function(e,t,o){var n=jexcel.getColumnNameFromId([e,t]);if(obj.formula[n]&&obj.formula[n].length>0)if(chainLoopProtection[n])obj.records[t][e].innerHTML="#ERROR",obj.formula[n]="";else{chainLoopProtection[n]=!0;for(var r=0;r<obj.formula[n].length;r++){var l=jexcel.getIdFromColumnName(obj.formula[n][r],!0),i=""+obj.options.data[l[1]][l[0]];"="==i.substr(0,1)?o.push(obj.updateCell(l[0],l[1],i,!0)):Object.keys(obj.formula)[r]=null,obj.updateFormulaChain(l[0],l[1],o)}}chainLoopProtection=[]},obj.updateFormulas=function(e){for(var t=0;t<obj.options.data.length;t++)for(var o=0;o<obj.options.data[0].length;o++)if("="==(s=""+obj.options.data[t][o]).substr(0,1)){var n=obj.updateFormula(s,e);n!=s&&(obj.options.data[t][o]=n)}var r=[],l=Object.keys(obj.formula);for(t=0;t<l.length;t++){var i=l[t],s=obj.formula[i];for(e[i]&&(i=e[i]),r[i]=[],o=0;o<s.length;o++){var a=s[o];e[a]&&(a=e[a]),r[i].push(a)}}obj.formula=r},obj.updateFormula=function(e,t){for(var o=/[A-Z]/,n=/[0-9]/,r="",l=null,i=null,s="",a=0;a<e.length;a++)o.exec(e[a])?(l=1,i=0,s+=e[a]):n.exec(e[a])?(i=l?1:0,s+=e[a]):(l&&i&&(s=t[s]?t[s]:s),r+=s,r+=e[a],l=0,i=0,s="");return s&&(l&&i&&(s=t[s]?t[s]:s),r+=s),r};var secureFormula=function(e){for(var t="",o=0,n=0;n<e.length;n++)'"'==e[n]&&(o=0==o?1:0),t+=1==o?e[n]:e[n].toUpperCase();return t};obj.executeFormula=function(expression,x,y){var formulaResults=[],formulaLoopProtection=[],execute=function(expression,x,y){var parentId=jexcel.getColumnNameFromId([x,y]);if(formulaLoopProtection[parentId])return console.error("Reference loop detected"),"#ERROR";formulaLoopProtection[parentId]=!0;var tokensUpdate=function(e){for(var t=0;t<e.length;t++){var o=[],n=e[t].split(":"),r=jexcel.getIdFromColumnName(n[0],!0),l=jexcel.getIdFromColumnName(n[1],!0);if(r[0]<=l[0])var i=r[0],s=l[0];else i=l[0],s=r[0];if(r[1]<=l[1])var a=r[1],u=l[1];else a=l[1],u=r[1];for(var c=a;c<=u;c++)for(var f=i;f<=s;f++)o.push(jexcel.getColumnNameFromId([f,c]));expression=expression.replace(e[t],o.join(","))}};expression=expression.replace(/\$?([A-Z]+)\$?([0-9]+)/g,"$1$2");var tokens=expression.match(/([A-Z]+[0-9]+)\:([A-Z]+[0-9]+)/g);tokens&&tokens.length&&tokensUpdate(tokens);var tokens=expression.match(/([A-Z]+[0-9]+)/g);if(tokens&&tokens.indexOf(parentId)>-1)return console.error("Self Reference detected"),"#ERROR";var formulaExpressions={};if(tokens)for(var i=0;i<tokens.length;i++)if(obj.formula[tokens[i]]||(obj.formula[tokens[i]]=[]),obj.formula[tokens[i]].indexOf(parentId)<0&&obj.formula[tokens[i]].push(parentId),eval("typeof("+tokens[i]+') == "undefined"')){var position=jexcel.getIdFromColumnName(tokens[i],1);if(void 0!==obj.options.data[position[1]]&&void 0!==obj.options.data[position[1]][position[0]])var value=obj.options.data[position[1]][position[0]];else var value="";if("="==(""+value).substr(0,1)&&(void 0!==formulaResults[tokens[i]]?value=formulaResults[tokens[i]]:(value=execute(value,position[0],position[1]),formulaResults[tokens[i]]=value)),""==(""+value).trim())formulaExpressions[tokens[i]]=null;else if(value==Number(value)&&1==obj.options.autoCasting)formulaExpressions[tokens[i]]=Number(value);else{var number=obj.parseNumber(value,position[0]);1==obj.options.autoCasting&&number?formulaExpressions[tokens[i]]=number:formulaExpressions[tokens[i]]='"'+value+'"'}}try{var res=jexcel.formula(expression.substr(1),formulaExpressions,x,y,obj)}catch(e){var res="#ERROR";console.log(e)}return res};return execute(expression,x,y)},obj.parseNumber=function(e,t){var o=t&&obj.options.columns[t].decimal?obj.options.columns[t].decimal:".",n=""+e;if((n=n.split(o))[0]=n[0].match(/[+-]?[0-9]/g),n[0]&&(n[0]=n[0].join("")),n[1]&&(n[1]=n[1].match(/[0-9]*/g).join("")),n[0]&&Number.isInteger(Number(n[0])))if(n[1])e=Number(n[0]+"."+n[1]);else e=Number(n[0]+".00");else e=null;return e},obj.row=function(e){},obj.col=function(e){},obj.up=function(e,t){if(e?obj.selectedCell[3]>0&&obj.up.visible(1,t?0:1):(obj.selectedCell[1]>0&&obj.up.visible(0,t?0:1),obj.selectedCell[2]=obj.selectedCell[0],obj.selectedCell[3]=obj.selectedCell[1]),obj.updateSelectionFromCoords(obj.selectedCell[0],obj.selectedCell[1],obj.selectedCell[2],obj.selectedCell[3]),1==obj.options.lazyLoading)if(0==obj.selectedCell[1]||0==obj.selectedCell[3])obj.loadPage(0),obj.updateSelectionFromCoords(obj.selectedCell[0],obj.selectedCell[1],obj.selectedCell[2],obj.selectedCell[3]);else if(obj.loadValidation())obj.updateSelectionFromCoords(obj.selectedCell[0],obj.selectedCell[1],obj.selectedCell[2],obj.selectedCell[3]);else{var o=parseInt(obj.tbody.firstChild.getAttribute("data-y"));obj.selectedCell[1]-o<30&&(obj.loadUp(),obj.updateSelectionFromCoords(obj.selectedCell[0],obj.selectedCell[1],obj.selectedCell[2],obj.selectedCell[3]))}else if(obj.options.pagination>0){var n=obj.whichPage(obj.selectedCell[3]);n!=obj.pageNumber&&obj.page(n)}obj.updateScroll(1)},obj.up.visible=function(e,t){if(0==e)var o=parseInt(obj.selectedCell[0]),n=parseInt(obj.selectedCell[1]);else o=parseInt(obj.selectedCell[2]),n=parseInt(obj.selectedCell[3]);if(0==t){for(var r=0;r<n;r++)if("none"!=obj.records[r][o].style.display&&"none"!=obj.rows[r].style.display){n=r;break}}else n=obj.up.get(o,n);0==e?(obj.selectedCell[0]=o,obj.selectedCell[1]=n):(obj.selectedCell[2]=o,obj.selectedCell[3]=n)},obj.up.get=function(e,t){e=parseInt(e);for(var o=(t=parseInt(t))-1;o>=0;o--)if("none"!=obj.records[o][e].style.display&&"none"!=obj.rows[o].style.display){if(obj.records[o][e].getAttribute("data-merged")&&obj.records[o][e]==obj.records[t][e])continue;t=o;break}return t},obj.down=function(e,t){if(e?obj.selectedCell[3]<obj.records.length-1&&obj.down.visible(1,t?0:1):(obj.selectedCell[1]<obj.records.length-1&&obj.down.visible(0,t?0:1),obj.selectedCell[2]=obj.selectedCell[0],obj.selectedCell[3]=obj.selectedCell[1]),obj.updateSelectionFromCoords(obj.selectedCell[0],obj.selectedCell[1],obj.selectedCell[2],obj.selectedCell[3]),1==obj.options.lazyLoading)obj.selectedCell[1]==obj.records.length-1||obj.selectedCell[3]==obj.records.length-1?(obj.loadPage(-1),obj.updateSelectionFromCoords(obj.selectedCell[0],obj.selectedCell[1],obj.selectedCell[2],obj.selectedCell[3])):obj.loadValidation()?obj.updateSelectionFromCoords(obj.selectedCell[0],obj.selectedCell[1],obj.selectedCell[2],obj.selectedCell[3]):parseInt(obj.tbody.lastChild.getAttribute("data-y"))-obj.selectedCell[3]<30&&(obj.loadDown(),obj.updateSelectionFromCoords(obj.selectedCell[0],obj.selectedCell[1],obj.selectedCell[2],obj.selectedCell[3]));else if(obj.options.pagination>0){var o=obj.whichPage(obj.selectedCell[3]);o!=obj.pageNumber&&obj.page(o)}obj.updateScroll(3)},obj.down.visible=function(e,t){if(0==e)var o=parseInt(obj.selectedCell[0]),n=parseInt(obj.selectedCell[1]);else o=parseInt(obj.selectedCell[2]),n=parseInt(obj.selectedCell[3]);if(0==t){for(var r=obj.rows.length-1;r>n;r--)if("none"!=obj.records[r][o].style.display&&"none"!=obj.rows[r].style.display){n=r;break}}else n=obj.down.get(o,n);0==e?(obj.selectedCell[0]=o,obj.selectedCell[1]=n):(obj.selectedCell[2]=o,obj.selectedCell[3]=n)},obj.down.get=function(e,t){e=parseInt(e);for(var o=(t=parseInt(t))+1;o<obj.rows.length;o++)if("none"!=obj.records[o][e].style.display&&"none"!=obj.rows[o].style.display){if(obj.records[o][e].getAttribute("data-merged")&&obj.records[o][e]==obj.records[t][e])continue;t=o;break}return t},obj.right=function(e,t){e?obj.selectedCell[2]<obj.headers.length-1&&obj.right.visible(1,t?0:1):(obj.selectedCell[0]<obj.headers.length-1&&obj.right.visible(0,t?0:1),obj.selectedCell[2]=obj.selectedCell[0],obj.selectedCell[3]=obj.selectedCell[1]),obj.updateSelectionFromCoords(obj.selectedCell[0],obj.selectedCell[1],obj.selectedCell[2],obj.selectedCell[3]),obj.updateScroll(2)},obj.right.visible=function(e,t){if(0==e)var o=parseInt(obj.selectedCell[0]),n=parseInt(obj.selectedCell[1]);else o=parseInt(obj.selectedCell[2]),n=parseInt(obj.selectedCell[3]);if(0==t){for(var r=obj.headers.length-1;r>o;r--)if("none"!=obj.records[n][r].style.display){o=r;break}}else o=obj.right.get(o,n);0==e?(obj.selectedCell[0]=o,obj.selectedCell[1]=n):(obj.selectedCell[2]=o,obj.selectedCell[3]=n)},obj.right.get=function(e,t){e=parseInt(e),t=parseInt(t);for(var o=e+1;o<obj.headers.length;o++)if("none"!=obj.records[t][o].style.display){if(obj.records[t][o].getAttribute("data-merged")&&obj.records[t][o]==obj.records[t][e])continue;e=o;break}return e},obj.left=function(e,t){e?obj.selectedCell[2]>0&&obj.left.visible(1,t?0:1):(obj.selectedCell[0]>0&&obj.left.visible(0,t?0:1),obj.selectedCell[2]=obj.selectedCell[0],obj.selectedCell[3]=obj.selectedCell[1]),obj.updateSelectionFromCoords(obj.selectedCell[0],obj.selectedCell[1],obj.selectedCell[2],obj.selectedCell[3]),obj.updateScroll(0)},obj.left.visible=function(e,t){if(0==e)var o=parseInt(obj.selectedCell[0]),n=parseInt(obj.selectedCell[1]);else o=parseInt(obj.selectedCell[2]),n=parseInt(obj.selectedCell[3]);if(0==t){for(var r=0;r<o;r++)if("none"!=obj.records[n][r].style.display){o=r;break}}else o=obj.left.get(o,n);0==e?(obj.selectedCell[0]=o,obj.selectedCell[1]=n):(obj.selectedCell[2]=o,obj.selectedCell[3]=n)},obj.left.get=function(e,t){e=parseInt(e),t=parseInt(t);for(var o=e-1;o>=0;o--)if("none"!=obj.records[t][o].style.display){if(obj.records[t][o].getAttribute("data-merged")&&obj.records[t][o]==obj.records[t][e])continue;e=o;break}return e},obj.first=function(e,t){if(e?t?obj.selectedCell[3]=0:obj.left.visible(1,0):(t?obj.selectedCell[1]=0:obj.left.visible(0,0),obj.selectedCell[2]=obj.selectedCell[0],obj.selectedCell[3]=obj.selectedCell[1]),1!=obj.options.lazyLoading||0!=obj.selectedCell[1]&&0!=obj.selectedCell[3]){if(obj.options.pagination>0){var o=obj.whichPage(obj.selectedCell[3]);o!=obj.pageNumber&&obj.page(o)}}else obj.loadPage(0);obj.updateSelectionFromCoords(obj.selectedCell[0],obj.selectedCell[1],obj.selectedCell[2],obj.selectedCell[3]),obj.updateScroll(1)},obj.last=function(e,t){if(e?t?obj.selectedCell[3]=obj.records.length-1:obj.right.visible(1,0):(t?obj.selectedCell[1]=obj.records.length-1:obj.right.visible(0,0),obj.selectedCell[2]=obj.selectedCell[0],obj.selectedCell[3]=obj.selectedCell[1]),1!=obj.options.lazyLoading||obj.selectedCell[1]!=obj.records.length-1&&obj.selectedCell[3]!=obj.records.length-1){if(obj.options.pagination>0){var o=obj.whichPage(obj.selectedCell[3]);o!=obj.pageNumber&&obj.page(o)}}else obj.loadPage(-1);obj.updateSelectionFromCoords(obj.selectedCell[0],obj.selectedCell[1],obj.selectedCell[2],obj.selectedCell[3]),obj.updateScroll(3)},obj.selectAll=function(){obj.selectedCell||(obj.selectedCell=[]),obj.selectedCell[0]=0,obj.selectedCell[1]=0,obj.selectedCell[2]=obj.headers.length-1,obj.selectedCell[3]=obj.records.length-1,obj.updateSelectionFromCoords(obj.selectedCell[0],obj.selectedCell[1],obj.selectedCell[2],obj.selectedCell[3])},obj.loadPage=function(e){if(1!=obj.options.search&&1!=obj.options.filters||!obj.results)t=obj.rows;else var t=obj.results;var o=100;null!=e&&-1!=e||(e=Math.ceil(t.length/o)-1);var n=e*o,r=e*o+o;r>t.length&&(r=t.length),(n=r-100)<0&&(n=0);for(var l=n;l<r;l++)1!=obj.options.search&&1!=obj.options.filters||!obj.results?obj.tbody.appendChild(obj.rows[l]):obj.tbody.appendChild(obj.rows[t[l]]),obj.tbody.children.length>o&&obj.tbody.removeChild(obj.tbody.firstChild)},obj.loadUp=function(){if(1!=obj.options.search&&1!=obj.options.filters||!obj.results)e=obj.rows;else var e=obj.results;var t=0;if(e.length>100){var o=parseInt(obj.tbody.firstChild.getAttribute("data-y"));if(1!=obj.options.search&&1!=obj.options.filters||!obj.results||(o=e.indexOf(o)),o>0)for(var n=0;n<30;n++)(o-=1)>-1&&(1!=obj.options.search&&1!=obj.options.filters||!obj.results?obj.tbody.insertBefore(obj.rows[o],obj.tbody.firstChild):obj.tbody.insertBefore(obj.rows[e[o]],obj.tbody.firstChild),obj.tbody.children.length>100&&(obj.tbody.removeChild(obj.tbody.lastChild),t=1))}return t},obj.loadDown=function(){if(1!=obj.options.search&&1!=obj.options.filters||!obj.results)e=obj.rows;else var e=obj.results;var t=0;if(e.length>100){var o=parseInt(obj.tbody.lastChild.getAttribute("data-y"));if(1!=obj.options.search&&1!=obj.options.filters||!obj.results||(o=e.indexOf(o)),o<obj.rows.length-1)for(var n=0;n<=30;n++)o<e.length&&(1!=obj.options.search&&1!=obj.options.filters||!obj.results?obj.tbody.appendChild(obj.rows[o]):obj.tbody.appendChild(obj.rows[e[o]]),obj.tbody.children.length>100&&(obj.tbody.removeChild(obj.tbody.firstChild),t=1)),o+=1}return t},obj.loadValidation=function(){if(obj.selectedCell){var e=parseInt(obj.tbody.firstChild.getAttribute("data-y"))/100,t=parseInt(obj.selectedCell[3]/100),o=parseInt(obj.rows.length/100);if(e!=t&&t<=o&&!Array.prototype.indexOf.call(obj.tbody.children,obj.rows[obj.selectedCell[3]]))return obj.loadPage(t),!0}return!1},obj.resetSearch=function(){obj.searchInput.value="",obj.search(""),obj.results=null},obj.search=function(e){if(obj.options.filters&&obj.resetFilters(),obj.resetSelection(),obj.pageNumber=0,obj.results=[],e){var t=function(e){-1==obj.results.indexOf(e)&&obj.results.push(e)},o=e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");o=new RegExp(o,"i"),obj.options.data.forEach((function(e,n){if(function(e,t,o){for(var n=0;n<e.length;n++)if((""+e[n]).toLowerCase().search(t)>=0||(""+obj.records[o][n].innerHTML).toLowerCase().search(t)>=0)return!0;return!1}(e,o,n)){var r=obj.isRowMerged(n);if(r.length)for(var l=0;l<r.length;l++)for(var i=jexcel.getIdFromColumnName(r[l],!0),s=0;s<obj.options.mergeCells[r[l]][1];s++)t(i[1]+s);else t(n)}}))}else obj.results=null;return obj.updateResult()},obj.updateResult=function(){var e,t=0;for(e=1==obj.options.lazyLoading?100:obj.options.pagination>0?obj.options.pagination:obj.results?obj.results.length:obj.rows.length;obj.tbody.firstChild;)obj.tbody.removeChild(obj.tbody.firstChild);for(var o=0;o<obj.rows.length;o++)!obj.results||obj.results.indexOf(o)>-1?(t<e&&(obj.tbody.appendChild(obj.rows[o]),t++),obj.rows[o].style.display=""):obj.rows[o].style.display="none";return obj.options.pagination>0&&obj.updatePagination(),obj.updateCornerPosition(),e},obj.whichPage=function(e){return 1!=obj.options.search&&1!=obj.options.filters||!obj.results||(e=obj.results.indexOf(e)),Math.ceil((parseInt(e)+1)/parseInt(obj.options.pagination))-1},obj.page=function(e){var t=obj.pageNumber;if(1!=obj.options.search&&1!=obj.options.filters||!obj.results)o=obj.rows;else var o=obj.results;var n=parseInt(obj.options.pagination);null!=e&&-1!=e||(e=Math.ceil(o.length/n)-1),obj.pageNumber=e;var r=e*n,l=e*n+n;for(l>o.length&&(l=o.length),r<0&&(r=0);obj.tbody.firstChild;)obj.tbody.removeChild(obj.tbody.firstChild);for(var i=r;i<l;i++)1!=obj.options.search&&1!=obj.options.filters||!obj.results?obj.tbody.appendChild(obj.rows[i]):obj.tbody.appendChild(obj.rows[o[i]]);obj.options.pagination>0&&obj.updatePagination(),obj.updateCornerPosition(),obj.dispatch("onchangepage",el,e,t)},obj.updatePagination=function(){if(obj.pagination.children[0].innerHTML="",obj.pagination.children[1].innerHTML="",obj.options.pagination){if(1!=obj.options.search&&1!=obj.options.filters||!obj.results)e=obj.rows.length;else var e=obj.results.length;if(e){var t=Math.ceil(e/obj.options.pagination);if(obj.pageNumber<6)var o=1,n=t<10?t:10;else t-obj.pageNumber<5?(n=t,(o=t-9)<1&&(o=1)):(o=obj.pageNumber-4,n=obj.pageNumber+5);o>1&&((l=document.createElement("div")).className="jexcel_page",l.innerHTML="<",l.title=1,obj.pagination.children[1].appendChild(l));for(var r=o;r<=n;r++){var l;(l=document.createElement("div")).className="jexcel_page",l.innerHTML=r,obj.pagination.children[1].appendChild(l),obj.pageNumber==r-1&&l.classList.add("jexcel_page_selected")}n<t&&((l=document.createElement("div")).className="jexcel_page",l.innerHTML=">",l.title=t,obj.pagination.children[1].appendChild(l)),obj.pagination.children[0].innerHTML=function(e){var t=Array.prototype.slice.call(arguments,1);return e.replace(/{(\d+)}/g,(function(e,o){return void 0!==t[o]?t[o]:e}))}(obj.options.text.showingPage,obj.pageNumber+1,t)}else obj.pagination.children[0].innerHTML=obj.options.text.noRecordsFound}},obj.download=function(e){if(0==obj.options.allowExport)console.error("Export not allowed");else{var t="";t+=obj.copy(!1,obj.options.csvDelimiter,!0,e,!0);var o=new Blob(["\ufeff"+t],{type:"text/csv;charset=utf-8;"});if(window.navigator&&window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(o,obj.options.csvFileName+".csv");else{var n=document.createElement("a"),r=URL.createObjectURL(o);n.href=r,n.setAttribute("download",obj.options.csvFileName+".csv"),document.body.appendChild(n),n.click(),n.parentNode.removeChild(n)}}},obj.setHistory=function(e){if(1!=obj.ignoreHistory){var t=++obj.historyIndex;obj.history=obj.history=obj.history.slice(0,t+1),obj.history[t]=e}},obj.copy=function(e,t,o,n,r){t||(t="\t");for(var l=new RegExp(t,"ig"),i=[],s=[],a=[],u=[],c=[],f=obj.options.data[0].length,d=obj.options.data.length,p="",b=!1,j="",h="",g=0,m=0,v=0,y=0,C=!0,x=0;x<d;x++)for(var w=0;w<f;w++)e&&!obj.records[x][w].classList.contains("highlight")||(v<=w&&(v=w),y<=x&&(y=x));if(f===v+1&&d===y+1&&(C=!1),r&&1==obj.options.includeHeadersOnDownload||!r&&1==obj.options.includeHeadersOnCopy&&!C||n){if(obj.options.nestedHeaders&&obj.options.nestedHeaders.length>0)for(p=obj.options.nestedHeaders[0]&&obj.options.nestedHeaders[0][0]?obj.options.nestedHeaders:[obj.options.nestedHeaders],x=0;x<p.length;x++){var A=[];for(w=0;w<p[x].length;w++){var E=parseInt(p[x][w].colspan);A.push(p[x][w].title);for(var M=0;M<E-1;M++)A.push("")}h+=A.join(t)+"\r\n"}b=!0}for(obj.style=[],x=0;x<d;x++){for(s=[],a=[],w=0;w<f;w++)if(!e||obj.records[x][w].classList.contains("highlight")){1==b&&i.push(obj.headers[w].textContent);var I=obj.options.data[x][w];if(I.match&&(I.match(l)||I.match(/,/g)||I.match(/\n/)||I.match(/\"/))&&(I='"'+(I=I.replace(new RegExp('"',"g"),'""'))+'"'),s.push(I),"checkbox"==obj.options.columns[w].type||"radio"==obj.options.columns[w].type)var N=I;else(N=1==obj.options.stripHTMLOnCopy?obj.records[x][w].textContent:obj.records[x][w].innerHTML).match&&(N.match(l)||N.match(/,/g)||N.match(/\n/)||N.match(/\"/))&&(N='"'+(N=N.replace(new RegExp('"',"g"),'""'))+'"');a.push(N),p=(p=obj.records[x][w].getAttribute("style")).replace("display: none;",""),obj.style.push(p||"")}s.length&&(b&&(g=s.length,u.push(i.join(t))),u.push(s.join(t))),a.length&&(m++,b&&(c.push(i.join(t)),b=!1),c.push(a.join(t)))}f==g&&d==m&&(j=h);var S=j+u.join("\r\n"),D=j+c.join("\r\n");if(o||(1==obj.options.copyCompatibility?obj.textarea.value=D:obj.textarea.value=S,obj.textarea.select(),document.execCommand("copy")),1==obj.options.copyCompatibility?obj.data=D:obj.data=S,obj.hashString=obj.hash(obj.data),!o){if(obj.removeCopyingSelection(),obj.highlighted)for(w=0;w<obj.highlighted.length;w++)obj.highlighted[w].classList.add("copying"),obj.highlighted[w].classList.contains("highlight-left")&&obj.highlighted[w].classList.add("copying-left"),obj.highlighted[w].classList.contains("highlight-right")&&obj.highlighted[w].classList.add("copying-right"),obj.highlighted[w].classList.contains("highlight-top")&&obj.highlighted[w].classList.add("copying-top"),obj.highlighted[w].classList.contains("highlight-bottom")&&obj.highlighted[w].classList.add("copying-bottom");obj.dispatch("oncopy",el,1==obj.options.copyCompatibility?c:u,obj.hashString)}return obj.data},obj.paste=function(e,t,o){var n=obj.dispatch("onbeforepaste",el,o,e,t);if(!1===n)return!1;n&&(o=n);var r=obj.hash(o),l=r==obj.hashString?obj.style:null;if(1==obj.options.copyCompatibility&&r==obj.hashString&&(o=obj.data),o=obj.parseCSV(o,"\t"),null!=e&&null!=t&&o){for(var i=0,s=0,a=[],u={},c={},f=0,d=parseInt(e),p=parseInt(t),b=null;b=o[s];){for(i=0,d=parseInt(e);null!=b[i];){var j=obj.updateCell(d,p,b[i]);if(a.push(j),obj.updateFormulaChain(d,p,a),l&&l[f]){var h=jexcel.getColumnNameFromId([d,p]);u[h]=l[f],c[h]=obj.getStyle(h),obj.records[p][d].setAttribute("style",l[f]),f++}if(null!=b[++i]){if(d>=obj.headers.length-1){if(1!=obj.options.allowInsertColumn)break;obj.insertColumn()}d=obj.right.get(d,p)}}if(o[++s]){if(p>=obj.rows.length-1){if(1!=obj.options.allowInsertRow)break;obj.insertRow()}p=obj.down.get(e,p)}}obj.updateSelectionFromCoords(e,t,d,p),obj.setHistory({action:"setValue",records:a,selection:obj.selectedCell,newStyle:u,oldStyle:c}),obj.updateTable(),obj.dispatch("onpaste",el,o),obj.onafterchanges(el,a)}obj.removeCopyingSelection()},obj.removeCopyingSelection=function(){for(var e=document.querySelectorAll(".jexcel .copying"),t=0;t<e.length;t++)e[t].classList.remove("copying"),e[t].classList.remove("copying-left"),e[t].classList.remove("copying-right"),e[t].classList.remove("copying-top"),e[t].classList.remove("copying-bottom")},obj.historyProcessRow=function(e,t){var o=t.insertBefore?+t.rowNumber:t.rowNumber+1;if(1==obj.options.search&&obj.results&&obj.results.length!=obj.rows.length&&obj.resetSearch(),1==e){for(var n=t.numOfRows,r=o;r<n+o;r++)obj.rows[r].parentNode.removeChild(obj.rows[r]);obj.records.splice(o,n),obj.options.data.splice(o,n),obj.rows.splice(o,n),obj.conditionalSelectionUpdate(1,o,n+o-1)}else{obj.records=jexcel.injectArray(obj.records,o,t.rowRecords),obj.options.data=jexcel.injectArray(obj.options.data,o,t.rowData),obj.rows=jexcel.injectArray(obj.rows,o,t.rowNode);var l=0;for(r=o;r<t.numOfRows+o;r++)obj.tbody.insertBefore(t.rowNode[l],obj.tbody.children[r]),l++}obj.options.pagination>0&&obj.page(obj.pageNumber),obj.updateTableReferences()},obj.historyProcessColumn=function(e,t){var o=t.insertBefore?t.columnNumber:t.columnNumber+1;if(1==e){var n=t.numOfColumns;obj.options.columns.splice(o,n);for(var r=o;r<n+o;r++)obj.headers[r].parentNode.removeChild(obj.headers[r]),obj.colgroup[r].parentNode.removeChild(obj.colgroup[r]);obj.headers.splice(o,n),obj.colgroup.splice(o,n);for(var l=0;l<t.data.length;l++){for(r=o;r<n+o;r++)obj.records[l][r].parentNode.removeChild(obj.records[l][r]);obj.records[l].splice(o,n),obj.options.data[l].splice(o,n)}if(obj.options.footers)for(l=0;l<obj.options.footers.length;l++)obj.options.footers[l].splice(o,n)}else{obj.options.columns=jexcel.injectArray(obj.options.columns,o,t.columns),obj.headers=jexcel.injectArray(obj.headers,o,t.headers),obj.colgroup=jexcel.injectArray(obj.colgroup,o,t.colgroup);var i=0;for(r=o;r<t.numOfColumns+o;r++)obj.headerContainer.insertBefore(t.headers[i],obj.headerContainer.children[r+1]),obj.colgroupContainer.insertBefore(t.colgroup[i],obj.colgroupContainer.children[r+1]),i++;for(l=0;l<t.data.length;l++)for(obj.options.data[l]=jexcel.injectArray(obj.options.data[l],o,t.data[l]),obj.records[l]=jexcel.injectArray(obj.records[l],o,t.records[l]),i=0,r=o;r<t.numOfColumns+o;r++)obj.rows[l].insertBefore(t.records[l][i],obj.rows[l].children[r+1]),i++;if(obj.options.footers)for(l=0;l<obj.options.footers.length;l++)obj.options.footers[l]=jexcel.injectArray(obj.options.footers[l],o,t.footers[l])}if(obj.options.nestedHeaders&&obj.options.nestedHeaders.length>0)if(obj.options.nestedHeaders[0]&&obj.options.nestedHeaders[0][0])for(l=0;l<obj.options.nestedHeaders.length;l++){if(1==e)var s=parseInt(obj.options.nestedHeaders[l][obj.options.nestedHeaders[l].length-1].colspan)-t.numOfColumns;else s=parseInt(obj.options.nestedHeaders[l][obj.options.nestedHeaders[l].length-1].colspan)+t.numOfColumns;obj.options.nestedHeaders[l][obj.options.nestedHeaders[l].length-1].colspan=s,obj.thead.children[l].children[obj.thead.children[l].children.length-1].setAttribute("colspan",s)}else s=1==e?parseInt(obj.options.nestedHeaders[0].colspan)-t.numOfColumns:parseInt(obj.options.nestedHeaders[0].colspan)+t.numOfColumns,obj.options.nestedHeaders[0].colspan=s,obj.thead.children[0].children[obj.thead.children[0].children.length-1].setAttribute("colspan",s);obj.updateTableReferences()},obj.undo=function(){var e=!!obj.ignoreEvents,t=!!obj.ignoreHistory;obj.ignoreEvents=!0,obj.ignoreHistory=!0;var o=[];if(obj.historyIndex>=0){var n=obj.history[obj.historyIndex--];if("insertRow"==n.action)obj.historyProcessRow(1,n);else if("deleteRow"==n.action)obj.historyProcessRow(0,n);else if("insertColumn"==n.action)obj.historyProcessColumn(1,n);else if("deleteColumn"==n.action)obj.historyProcessColumn(0,n);else if("moveRow"==n.action)obj.moveRow(n.newValue,n.oldValue);else if("moveColumn"==n.action)obj.moveColumn(n.newValue,n.oldValue);else if("setMerge"==n.action)obj.removeMerge(n.column,n.data);else if("setStyle"==n.action)obj.setStyle(n.oldValue,null,null,1);else if("setWidth"==n.action)obj.setWidth(n.column,n.oldValue);else if("setHeight"==n.action)obj.setHeight(n.row,n.oldValue);else if("setHeader"==n.action)obj.setHeader(n.column,n.oldValue);else if("setComments"==n.action)obj.setComments(n.column,n.oldValue[0],n.oldValue[1]);else if("orderBy"==n.action){for(var r=[],l=0;l<n.rows.length;l++)r[n.rows[l]]=l;obj.updateOrderArrow(n.column,n.order?0:1),obj.updateOrder(r)}else if("setValue"==n.action){for(var i=0;i<n.records.length;i++)o.push({x:n.records[i].x,y:n.records[i].y,newValue:n.records[i].oldValue}),n.oldStyle&&obj.resetStyle(n.oldStyle);obj.setValue(o),n.selection&&obj.updateSelectionFromCoords(n.selection[0],n.selection[1],n.selection[2],n.selection[3])}}obj.ignoreEvents=e,obj.ignoreHistory=t,obj.dispatch("onundo",el,n)},obj.redo=function(){var e=!!obj.ignoreEvents,t=!!obj.ignoreHistory;if(obj.ignoreEvents=!0,obj.ignoreHistory=!0,obj.historyIndex<obj.history.length-1){var o=obj.history[++obj.historyIndex];if("insertRow"==o.action)obj.historyProcessRow(0,o);else if("deleteRow"==o.action)obj.historyProcessRow(1,o);else if("insertColumn"==o.action)obj.historyProcessColumn(0,o);else if("deleteColumn"==o.action)obj.historyProcessColumn(1,o);else if("moveRow"==o.action)obj.moveRow(o.oldValue,o.newValue);else if("moveColumn"==o.action)obj.moveColumn(o.oldValue,o.newValue);else if("setMerge"==o.action)obj.setMerge(o.column,o.colspan,o.rowspan,1);else if("setStyle"==o.action)obj.setStyle(o.newValue,null,null,1);else if("setWidth"==o.action)obj.setWidth(o.column,o.newValue);else if("setHeight"==o.action)obj.setHeight(o.row,o.newValue);else if("setHeader"==o.action)obj.setHeader(o.column,o.newValue);else if("setComments"==o.action)obj.setComments(o.column,o.newValue[0],o.newValue[1]);else if("orderBy"==o.action)obj.updateOrderArrow(o.column,o.order),obj.updateOrder(o.rows);else if("setValue"==o.action){obj.setValue(o.records);for(var n=0;n<o.records.length;n++)o.oldStyle&&obj.resetStyle(o.newStyle);o.selection&&obj.updateSelectionFromCoords(o.selection[0],o.selection[1],o.selection[2],o.selection[3])}}obj.ignoreEvents=e,obj.ignoreHistory=t,obj.dispatch("onredo",el,o)},obj.getDropDownValue=function(e,t){var o=[];if(obj.options.columns[e]&&obj.options.columns[e].source){for(var n=[],r=obj.options.columns[e].source,l=0;l<r.length;l++)"object"==typeof r[l]?n[r[l].id]=r[l].name:n[r[l]]=r[l];var i=Array.isArray(t)?t:(""+t).split(";");for(l=0;l<i.length;l++)"object"==typeof i[l]?o.push(n[i[l].id]):n[i[l]]&&o.push(n[i[l]])}else console.error("Invalid column");return o.length>0?o.join("; "):""},obj.parseCSV=function(e,t){9==(e=e.replace(/\r?\n$|\r$|\n$/g,"")).charCodeAt(e.length-1)&&(e+="\0"),t=t||",";for(var o=[],n=!1,r=0,l=0,i=0;i<e.length;i++){var s=e[i],a=e[i+1];o[r]=o[r]||[],o[r][l]=o[r][l]||"",'"'==s&&n&&'"'==a?(o[r][l]+=s,++i):'"'!=s?s!=t||n?"\r"!=s||"\n"!=a||n?"\n"==s&&!n||"\r"==s&&!n?(++r,l=0):o[r][l]+=s:(++r,l=0,++i):++l:n=!n}return o},obj.hash=function(e){var t,o=0;if(0===e.length)return o;for(t=0;t<e.length;t++)o=(o<<5)-o+e.charCodeAt(t),o|=0;return o},obj.onafterchanges=function(e,t){obj.dispatch("onafterchanges",e,t)},obj.destroy=function(){jexcel.destroy(el)},obj.init=function(){jexcel.current=obj,"function"==typeof jexcel.build&&(obj.options.root?jexcel.build(obj.options.root):(jexcel.build(document),jexcel.build=null)),el.setAttribute("tabindex",1),el.addEventListener("focus",(function(e){jexcel.current&&!obj.selectedCell&&(obj.updateSelectionFromCoords(0,0,0,0),obj.left())})),obj.options.csv?(1==obj.options.loadingSpin&&jSuites.loading.show(),jSuites.ajax({url:obj.options.csv,method:obj.options.method,data:obj.options.requestVariables,dataType:"text",success:function(e){var t=obj.parseCSV(e,obj.options.csvDelimiter);if(1==obj.options.csvHeaders&&t.length>0)for(var o=t.shift(),n=0;n<o.length;n++)obj.options.columns[n]||(obj.options.columns[n]={type:"text",align:obj.options.defaultColAlign,width:obj.options.defaultColWidth}),void 0===obj.options.columns[n].title&&(obj.options.columns[n].title=o[n]);obj.options.data=t,obj.prepareTable(),1==obj.options.loadingSpin&&jSuites.loading.hide()}})):obj.options.url?(1==obj.options.loadingSpin&&jSuites.loading.show(),jSuites.ajax({url:obj.options.url,method:obj.options.method,data:obj.options.requestVariables,dataType:"json",success:function(e){obj.options.data=e.data?e.data:e,obj.prepareTable(),1==obj.options.loadingSpin&&jSuites.loading.hide()}})):obj.prepareTable()},options&&null!=options.contextMenu?obj.options.contextMenu=options.contextMenu:obj.options.contextMenu=function(e,t,o,n){var r=[];if(null==o)1==obj.options.allowInsertColumn&&r.push({title:obj.options.text.insertANewColumnBefore,onclick:function(){obj.insertColumn(1,parseInt(t),1)}}),1==obj.options.allowInsertColumn&&r.push({title:obj.options.text.insertANewColumnAfter,onclick:function(){obj.insertColumn(1,parseInt(t),0)}}),1==obj.options.allowDeleteColumn&&r.push({title:obj.options.text.deleteSelectedColumns,onclick:function(){obj.deleteColumn(obj.getSelectedColumns().length?void 0:parseInt(t))}}),1==obj.options.allowRenameColumn&&r.push({title:obj.options.text.renameThisColumn,onclick:function(){obj.setHeader(t)}}),1==obj.options.columnSorting&&(r.push({type:"line"}),r.push({title:obj.options.text.orderAscending,onclick:function(){obj.orderBy(t,0)}}),r.push({title:obj.options.text.orderDescending,onclick:function(){obj.orderBy(t,1)}}));else if(1==obj.options.allowInsertRow&&(r.push({title:obj.options.text.insertANewRowBefore,onclick:function(){obj.insertRow(1,parseInt(o),1)}}),r.push({title:obj.options.text.insertANewRowAfter,onclick:function(){obj.insertRow(1,parseInt(o))}})),1==obj.options.allowDeleteRow&&r.push({title:obj.options.text.deleteSelectedRows,onclick:function(){obj.deleteRow(obj.getSelectedRows().length?void 0:parseInt(o))}}),t&&1==obj.options.allowComments){r.push({type:"line"});var l=obj.records[o][t].getAttribute("title")||"";r.push({title:l?obj.options.text.editComments:obj.options.text.addComments,onclick:function(){var e=prompt(obj.options.text.comments,l);e&&obj.setComments([t,o],e)}}),l&&r.push({title:obj.options.text.clearComments,onclick:function(){obj.setComments([t,o],"")}})}return r.push({type:"line"}),r.push({title:obj.options.text.copy,shortcut:"Ctrl + C",onclick:function(){obj.copy(!0)}}),navigator&&navigator.clipboard&&r.push({title:obj.options.text.paste,shortcut:"Ctrl + V",onclick:function(){obj.selectedCell&&navigator.clipboard.readText().then((function(e){e&&jexcel.current.paste(obj.selectedCell[0],obj.selectedCell[1],e)}))}}),obj.options.allowExport&&r.push({title:obj.options.text.saveAs,shortcut:"Ctrl + S",onclick:function(){obj.download()}}),obj.options.about&&r.push({title:obj.options.text.about,onclick:function(){!0===obj.options.about?alert(Version().print()):alert(obj.options.about)}}),r},obj.scrollControls=function(e){obj.wheelControls(),obj.options.freezeColumns>0&&obj.content.scrollLeft!=scrollLeft&&obj.updateFreezePosition(),1!=obj.options.lazyLoading&&1!=obj.options.tableOverflow||obj.edition&&"jdropdown"!=e.target.className.substr(0,9)&&obj.closeEditor(obj.edition[0],!0)},obj.wheelControls=function(e){1==obj.options.lazyLoading&&null==jexcel.timeControlLoading&&(jexcel.timeControlLoading=setTimeout((function(){obj.content.scrollTop+obj.content.clientHeight>=obj.content.scrollHeight-10?obj.loadDown()&&(obj.content.scrollTop+obj.content.clientHeight>obj.content.scrollHeight-10&&(obj.content.scrollTop=obj.content.scrollTop-obj.content.clientHeight),obj.updateCornerPosition()):obj.content.scrollTop<=obj.content.clientHeight&&obj.loadUp()&&(obj.content.scrollTop<10&&(obj.content.scrollTop=obj.content.scrollTop+obj.content.clientHeight),obj.updateCornerPosition()),jexcel.timeControlLoading=null}),100))},obj.getFreezeWidth=function(){var e=0;if(obj.options.freezeColumns>0)for(var t=0;t<obj.options.freezeColumns;t++)e+=parseInt(obj.options.columns[t].width);return e};var scrollLeft=0;return obj.updateFreezePosition=function(){var e=0;if((scrollLeft=obj.content.scrollLeft)>50)for(var t=0;t<obj.options.freezeColumns;t++){t>0&&"hidden"!==obj.options.columns[t-1].type&&(e+=parseInt(obj.options.columns[t-1].width)),obj.headers[t].classList.add("jexcel_freezed"),obj.headers[t].style.left=e+"px";for(var o=0;o<obj.rows.length;o++)if(obj.rows[o]&&obj.records[o][t]){var n=scrollLeft+(t>0?obj.records[o][t-1].style.width:0)-51+"px";obj.records[o][t].classList.add("jexcel_freezed"),obj.records[o][t].style.left=n}}else for(t=0;t<obj.options.freezeColumns;t++)for(obj.headers[t].classList.remove("jexcel_freezed"),obj.headers[t].style.left="",o=0;o<obj.rows.length;o++)obj.records[o][t]&&(obj.records[o][t].classList.remove("jexcel_freezed"),obj.records[o][t].style.left="");obj.updateCornerPosition()},el.addEventListener("DOMMouseScroll",obj.wheelControls),el.addEventListener("mousewheel",obj.wheelControls),el.jexcel=obj,el.jspreadsheet=obj,obj.init(),obj};jexcel.setDictionary=function(e){jSuites.setDictionary(e)},jexcel.setExtensions=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)"function"==typeof e[t[o]]&&(jexcel[t[o]]=e[t[o]],jexcel.license&&"function"==typeof e[t[o]].license&&e[t[o]].license(jexcel.license))},void 0!==formula&&(jexcel.formula=formula),jexcel.version=Version,jexcel.current=null,jexcel.timeControl=null,jexcel.timeControlLoading=null;const destroyEvents=function(e){e.removeEventListener("mouseup",jexcel.mouseUpControls),e.removeEventListener("mousedown",jexcel.mouseDownControls),e.removeEventListener("mousemove",jexcel.mouseMoveControls),e.removeEventListener("mouseover",jexcel.mouseOverControls),e.removeEventListener("dblclick",jexcel.doubleClickControls),e.removeEventListener("paste",jexcel.pasteControls),e.removeEventListener("contextmenu",jexcel.contextMenuControls),e.removeEventListener("touchstart",jexcel.touchStartControls),e.removeEventListener("touchend",jexcel.touchEndControls),e.removeEventListener("touchcancel",jexcel.touchEndControls),document.removeEventListener("keydown",jexcel.keyDownControls)};var component;return jexcel.destroy=function(e,t){if(e.jexcel){var o=e.jexcel.options.root?e.jexcel.options.root:document;e.removeEventListener("DOMMouseScroll",e.jexcel.scrollControls),e.removeEventListener("mousewheel",e.jexcel.scrollControls),e.jexcel=null,e.innerHTML="",t&&(destroyEvents(o),jexcel=null)}},jexcel.build=function(e){destroyEvents(e),e.addEventListener("mouseup",jexcel.mouseUpControls),e.addEventListener("mousedown",jexcel.mouseDownControls),e.addEventListener("mousemove",jexcel.mouseMoveControls),e.addEventListener("mouseover",jexcel.mouseOverControls),e.addEventListener("dblclick",jexcel.doubleClickControls),e.addEventListener("paste",jexcel.pasteControls),e.addEventListener("contextmenu",jexcel.contextMenuControls),e.addEventListener("touchstart",jexcel.touchStartControls),e.addEventListener("touchend",jexcel.touchEndControls),e.addEventListener("touchcancel",jexcel.touchEndControls),e.addEventListener("touchmove",jexcel.touchEndControls),document.addEventListener("keydown",jexcel.keyDownControls)},jexcel.keyDownControls=function(e){if(jexcel.current){if(jexcel.current.edition)if(27==e.which)jexcel.current.edition&&jexcel.current.closeEditor(jexcel.current.edition[0],!1),e.preventDefault();else if(13==e.which)if("calendar"==jexcel.current.options.columns[jexcel.current.edition[2]].type)jexcel.current.closeEditor(jexcel.current.edition[0],!0);else if("dropdown"==jexcel.current.options.columns[jexcel.current.edition[2]].type||"autocomplete"==jexcel.current.options.columns[jexcel.current.edition[2]].type);else if((1==jexcel.current.options.wordWrap||1==jexcel.current.options.columns[jexcel.current.edition[2]].wordWrap||jexcel.current.options.data[jexcel.current.edition[3]][jexcel.current.edition[2]].length>200)&&e.altKey){var t=jexcel.current.edition[0].children[0],o=jexcel.current.edition[0].children[0].value,n=t.selectionStart;o=o.slice(0,n)+"\n"+o.slice(n),t.value=o,t.focus(),t.selectionStart=n+1,t.selectionEnd=n+1}else jexcel.current.edition[0].children[0].blur();else 9==e.which&&(["calendar","html"].includes(jexcel.current.options.columns[jexcel.current.edition[2]].type)?jexcel.current.closeEditor(jexcel.current.edition[0],!0):jexcel.current.edition[0].children[0].blur());if(!jexcel.current.edition&&jexcel.current.selectedCell)if(37==e.which)jexcel.current.left(e.shiftKey,e.ctrlKey),e.preventDefault();else if(39==e.which)jexcel.current.right(e.shiftKey,e.ctrlKey),e.preventDefault();else if(38==e.which)jexcel.current.up(e.shiftKey,e.ctrlKey),e.preventDefault();else if(40==e.which)jexcel.current.down(e.shiftKey,e.ctrlKey),e.preventDefault();else if(36==e.which)jexcel.current.first(e.shiftKey,e.ctrlKey),e.preventDefault();else if(35==e.which)jexcel.current.last(e.shiftKey,e.ctrlKey),e.preventDefault();else if(46==e.which)1==jexcel.current.options.editable&&(jexcel.current.selectedRow?1==jexcel.current.options.allowDeleteRow&&confirm(jexcel.current.options.text.areYouSureToDeleteTheSelectedRows)&&jexcel.current.deleteRow():jexcel.current.selectedHeader?1==jexcel.current.options.allowDeleteColumn&&confirm(jexcel.current.options.text.areYouSureToDeleteTheSelectedColumns)&&jexcel.current.deleteColumn():jexcel.current.setValue(jexcel.current.highlighted,""));else if(13==e.which)e.shiftKey?jexcel.current.up():(1==jexcel.current.options.allowInsertRow&&1==jexcel.current.options.allowManualInsertRow&&jexcel.current.selectedCell[1]==jexcel.current.options.data.length-1&&jexcel.current.insertRow(),jexcel.current.down()),e.preventDefault();else if(9==e.which)e.shiftKey?jexcel.current.left():(1==jexcel.current.options.allowInsertColumn&&1==jexcel.current.options.allowManualInsertColumn&&jexcel.current.selectedCell[0]==jexcel.current.options.data[0].length-1&&jexcel.current.insertColumn(),jexcel.current.right()),e.preventDefault();else if(!e.ctrlKey&&!e.metaKey||e.shiftKey){if(jexcel.current.selectedCell&&1==jexcel.current.options.editable){var r=jexcel.current.selectedCell[1],l=jexcel.current.selectedCell[0];"readonly"!=jexcel.current.options.columns[l].type&&(32==e.keyCode?(e.preventDefault(),"checkbox"==jexcel.current.options.columns[l].type||"radio"==jexcel.current.options.columns[l].type?jexcel.current.setCheckRadioValue():jexcel.current.openEditor(jexcel.current.records[r][l],!0)):113==e.keyCode?jexcel.current.openEditor(jexcel.current.records[r][l],!1):(8==e.keyCode||e.keyCode>=48&&e.keyCode<=57||e.keyCode>=96&&e.keyCode<=111||e.keyCode>=187&&e.keyCode<=190||(String.fromCharCode(e.keyCode)==e.key||String.fromCharCode(e.keyCode).toLowerCase()==e.key.toLowerCase())&&jexcel.validLetter(String.fromCharCode(e.keyCode)))&&(jexcel.current.openEditor(jexcel.current.records[r][l],!0),"calendar"==jexcel.current.options.columns[l].type&&e.preventDefault()))}}else 65==e.which?(jexcel.current.selectAll(),e.preventDefault()):83==e.which?(jexcel.current.download(),e.preventDefault()):89==e.which?(jexcel.current.redo(),e.preventDefault()):90==e.which?(jexcel.current.undo(),e.preventDefault()):67==e.which?(jexcel.current.copy(!0),e.preventDefault()):88==e.which?(1==jexcel.current.options.editable?jexcel.cutControls():jexcel.copyControls(),e.preventDefault()):86==e.which&&jexcel.pasteControls();else e.target.classList.contains("jexcel_search")&&(jexcel.timeControl&&clearTimeout(jexcel.timeControl),jexcel.timeControl=setTimeout((function(){jexcel.current.search(e.target.value)}),200))}},jexcel.isMouseAction=!1,jexcel.mouseDownControls=function(e){if((e=e||window.event).buttons)var t=e.buttons;else t=e.button?e.button:e.which;var o=jexcel.getElement(e.target);if(o[0]?jexcel.current!=o[0].jexcel&&(jexcel.current&&(jexcel.current.edition&&jexcel.current.closeEditor(jexcel.current.edition[0],!0),jexcel.current.resetSelection()),jexcel.current=o[0].jexcel):jexcel.current&&(jexcel.current.edition&&jexcel.current.closeEditor(jexcel.current.edition[0],!0),jexcel.current.resetSelection(!0),jexcel.current=null),jexcel.current&&1==t){if(e.target.classList.contains("jexcel_selectall"))jexcel.current&&jexcel.current.selectAll();else if(e.target.classList.contains("jexcel_corner"))1==jexcel.current.options.editable&&(jexcel.current.selectedCorner=!0);else{if(1==o[1]){if(p=e.target.getAttribute("data-x")){var n=e.target.getBoundingClientRect();if(1==jexcel.current.options.columnResize&&n.width-e.offsetX<6){jexcel.current.resizing={mousePosition:e.pageX,column:p,width:n.width},jexcel.current.headers[p].classList.add("resizing");for(var r=0;r<jexcel.current.records.length;r++)jexcel.current.records[r][p]&&jexcel.current.records[r][p].classList.add("resizing")}else if(1==jexcel.current.options.columnDrag&&n.height-e.offsetY<6)if(jexcel.current.isColMerged(p).length)console.error("Jspreadsheet: This column is part of a merged cell.");else for(jexcel.current.resetSelection(),jexcel.current.dragging={element:e.target,column:p,destination:p},jexcel.current.headers[p].classList.add("dragging"),r=0;r<jexcel.current.records.length;r++)jexcel.current.records[r][p]&&jexcel.current.records[r][p].classList.add("dragging");else{if(jexcel.current.selectedHeader&&(e.shiftKey||e.ctrlKey))var l=jexcel.current.selectedHeader,i=p;else jexcel.current.selectedHeader==p&&1==jexcel.current.options.allowRenameColumn&&(jexcel.timeControl=setTimeout((function(){jexcel.current.setHeader(p)}),800)),jexcel.current.selectedHeader=p,l=p,i=p;jexcel.current.updateSelectionFromCoords(l,0,i,jexcel.current.options.data.length-1)}}else if(e.target.parentNode.classList.contains("jexcel_nested")){if(e.target.getAttribute("data-column"))var s=e.target.getAttribute("data-column").split(","),a=parseInt(s[0]),u=parseInt(s[s.length-1]);else a=0,u=jexcel.current.options.columns.length-1;jexcel.current.updateSelectionFromCoords(a,0,u,jexcel.current.options.data.length-1)}}else jexcel.current.selectedHeader=!1;if(2==o[1]){var c=e.target.getAttribute("data-y");if(e.target.classList.contains("jexcel_row"))n=e.target.getBoundingClientRect(),1==jexcel.current.options.rowResize&&n.height-e.offsetY<6?(jexcel.current.resizing={element:e.target.parentNode,mousePosition:e.pageY,row:c,height:n.height},e.target.parentNode.classList.add("resizing")):1==jexcel.current.options.rowDrag&&n.width-e.offsetX<6?jexcel.current.isRowMerged(c).length?console.error("Jspreadsheet: This row is part of a merged cell"):1==jexcel.current.options.search&&jexcel.current.results?console.error("Jspreadsheet: Please clear your search before perform this action"):(jexcel.current.resetSelection(),jexcel.current.dragging={element:e.target.parentNode,row:c,destination:c},e.target.parentNode.classList.add("dragging")):(jexcel.current.selectedRow&&(e.shiftKey||e.ctrlKey)?(l=jexcel.current.selectedRow,i=c):(jexcel.current.selectedRow=c,l=c,i=c),jexcel.current.updateSelectionFromCoords(0,l,jexcel.current.options.data[0].length-1,i));else if(e.target.classList.contains("jclose")&&e.target.clientWidth-e.offsetX<50&&e.offsetY<50)jexcel.current.closeEditor(jexcel.current.edition[0],!0);else{var f=function(e){var t=e.getAttribute("data-x"),o=e.getAttribute("data-y");return t&&o?[t,o]:e.parentNode?f(e.parentNode):void 0},d=f(e.target);if(d){var p=d[0];c=d[1],jexcel.current.edition&&(jexcel.current.edition[2]==p&&jexcel.current.edition[3]==c||jexcel.current.closeEditor(jexcel.current.edition[0],!0)),jexcel.current.edition||(e.shiftKey?jexcel.current.updateSelectionFromCoords(jexcel.current.selectedCell[0],jexcel.current.selectedCell[1],p,c):jexcel.current.updateSelectionFromCoords(p,c)),jexcel.current.selectedHeader=null,jexcel.current.selectedRow=null}}}else jexcel.current.selectedRow=!1;e.target.classList.contains("jexcel_page")&&("<"==e.target.textContent?jexcel.current.page(0):">"==e.target.textContent?jexcel.current.page(e.target.getAttribute("title")-1):jexcel.current.page(e.target.textContent-1))}jexcel.current.edition?jexcel.isMouseAction=!1:jexcel.isMouseAction=!0}else jexcel.isMouseAction=!1},jexcel.mouseUpControls=function(e){if(jexcel.current)if(jexcel.current.resizing){if(jexcel.current.resizing.column){var t=jexcel.current.colgroup[jexcel.current.resizing.column].getAttribute("width"),o=jexcel.current.getSelectedColumns();if(o.length>1){for(var n=[],r=0;r<o.length;r++)n.push(parseInt(jexcel.current.colgroup[o[r]].getAttribute("width")));n[o.indexOf(parseInt(jexcel.current.resizing.column))]=jexcel.current.resizing.width,jexcel.current.setWidth(o,t,n)}else jexcel.current.setWidth(jexcel.current.resizing.column,t,jexcel.current.resizing.width);jexcel.current.headers[jexcel.current.resizing.column].classList.remove("resizing");for(var l=0;l<jexcel.current.records.length;l++)jexcel.current.records[l][jexcel.current.resizing.column]&&jexcel.current.records[l][jexcel.current.resizing.column].classList.remove("resizing")}else{jexcel.current.rows[jexcel.current.resizing.row].children[0].classList.remove("resizing");var i=jexcel.current.rows[jexcel.current.resizing.row].getAttribute("height");jexcel.current.setHeight(jexcel.current.resizing.row,i,jexcel.current.resizing.height),jexcel.current.resizing.element.classList.remove("resizing")}jexcel.current.resizing=null}else if(jexcel.current.dragging){if(jexcel.current.dragging){if(jexcel.current.dragging.column){var s=e.target.getAttribute("data-x");for(jexcel.current.headers[jexcel.current.dragging.column].classList.remove("dragging"),l=0;l<jexcel.current.rows.length;l++)jexcel.current.records[l][jexcel.current.dragging.column]&&jexcel.current.records[l][jexcel.current.dragging.column].classList.remove("dragging");for(r=0;r<jexcel.current.headers.length;r++)jexcel.current.headers[r].classList.remove("dragging-left"),jexcel.current.headers[r].classList.remove("dragging-right");s&&jexcel.current.dragging.column!=jexcel.current.dragging.destination&&jexcel.current.moveColumn(jexcel.current.dragging.column,jexcel.current.dragging.destination)}else{if(jexcel.current.dragging.element.nextSibling){var a=parseInt(jexcel.current.dragging.element.nextSibling.getAttribute("data-y"));jexcel.current.dragging.row<a&&(a-=1)}else a=parseInt(jexcel.current.dragging.element.previousSibling.getAttribute("data-y"));jexcel.current.dragging.row!=jexcel.current.dragging.destination&&jexcel.current.moveRow(jexcel.current.dragging.row,a,!0),jexcel.current.dragging.element.classList.remove("dragging")}jexcel.current.dragging=null}}else jexcel.current.selectedCorner&&(jexcel.current.selectedCorner=!1,jexcel.current.selection.length>0&&(jexcel.current.copyData(jexcel.current.selection[0],jexcel.current.selection[jexcel.current.selection.length-1]),jexcel.current.removeCopySelection()));jexcel.timeControl&&(clearTimeout(jexcel.timeControl),jexcel.timeControl=null),jexcel.isMouseAction=!1},jexcel.mouseMoveControls=function(e){if((e=e||window.event).buttons)var t=e.buttons;else t=e.button?e.button:e.which;if(t||(jexcel.isMouseAction=!1),jexcel.current)if(1==jexcel.isMouseAction){if(jexcel.current.resizing)if(jexcel.current.resizing.column){var o=e.pageX-jexcel.current.resizing.mousePosition;if(jexcel.current.resizing.width+o>0){var n=jexcel.current.resizing.width+o;jexcel.current.colgroup[jexcel.current.resizing.column].setAttribute("width",n),jexcel.current.updateCornerPosition()}}else{var r=e.pageY-jexcel.current.resizing.mousePosition;if(jexcel.current.resizing.height+r>0){var l=jexcel.current.resizing.height+r;jexcel.current.rows[jexcel.current.resizing.row].setAttribute("height",l),jexcel.current.updateCornerPosition()}}else if(jexcel.current.dragging)if(jexcel.current.dragging.column){var i=e.target.getAttribute("data-x");if(i)if(jexcel.current.isColMerged(i).length)console.error("Jspreadsheet: This column is part of a merged cell.");else{for(var s=0;s<jexcel.current.headers.length;s++)jexcel.current.headers[s].classList.remove("dragging-left"),jexcel.current.headers[s].classList.remove("dragging-right");jexcel.current.dragging.column==i?jexcel.current.dragging.destination=parseInt(i):e.target.clientWidth/2>e.offsetX?(jexcel.current.dragging.column<i?jexcel.current.dragging.destination=parseInt(i)-1:jexcel.current.dragging.destination=parseInt(i),jexcel.current.headers[i].classList.add("dragging-left")):(jexcel.current.dragging.column<i?jexcel.current.dragging.destination=parseInt(i):jexcel.current.dragging.destination=parseInt(i)+1,jexcel.current.headers[i].classList.add("dragging-right"))}}else{var a=e.target.getAttribute("data-y");if(a)if(jexcel.current.isRowMerged(a).length)console.error("Jspreadsheet: This row is part of a merged cell.");else{var u=e.target.clientHeight/2>e.offsetY?e.target.parentNode.nextSibling:e.target.parentNode;jexcel.current.dragging.element!=u&&(e.target.parentNode.parentNode.insertBefore(jexcel.current.dragging.element,u),jexcel.current.dragging.destination=Array.prototype.indexOf.call(jexcel.current.dragging.element.parentNode.children,jexcel.current.dragging.element))}}}else{var c=e.target.getAttribute("data-x"),f=e.target.getAttribute("data-y"),d=e.target.getBoundingClientRect();jexcel.current.cursor&&(jexcel.current.cursor.style.cursor="",jexcel.current.cursor=null),e.target.parentNode.parentNode&&e.target.parentNode.parentNode.className&&(e.target.parentNode.parentNode.classList.contains("resizable")&&(e.target&&c&&!f&&d.width-(e.clientX-d.left)<6?(jexcel.current.cursor=e.target,jexcel.current.cursor.style.cursor="col-resize"):e.target&&!c&&f&&d.height-(e.clientY-d.top)<6&&(jexcel.current.cursor=e.target,jexcel.current.cursor.style.cursor="row-resize")),e.target.parentNode.parentNode.classList.contains("draggable")&&(e.target&&!c&&f&&d.width-(e.clientX-d.left)<6||e.target&&c&&!f&&d.height-(e.clientY-d.top)<6)&&(jexcel.current.cursor=e.target,jexcel.current.cursor.style.cursor="move"))}},jexcel.mouseOverControls=function(e){if((e=e||window.event).buttons)var t=e.buttons;else t=e.button?e.button:e.which;if(t||(jexcel.isMouseAction=!1),jexcel.current&&1==jexcel.isMouseAction){var o=jexcel.getElement(e.target);if(o[0]){if(jexcel.current!=o[0].jexcel&&jexcel.current)return!1;var n=e.target.getAttribute("data-x"),r=e.target.getAttribute("data-y");if(jexcel.current.resizing||jexcel.current.dragging);else{if(1==o[1]&&jexcel.current.selectedHeader){n=e.target.getAttribute("data-x");var l=jexcel.current.selectedHeader,i=n;jexcel.current.updateSelectionFromCoords(l,0,i,jexcel.current.options.data.length-1)}2==o[1]&&(e.target.classList.contains("jexcel_row")?jexcel.current.selectedRow&&(l=jexcel.current.selectedRow,i=r,jexcel.current.updateSelectionFromCoords(0,l,jexcel.current.options.data[0].length-1,i)):jexcel.current.edition||n&&r&&(jexcel.current.selectedCorner?jexcel.current.updateCopySelection(n,r):jexcel.current.selectedCell&&jexcel.current.updateSelectionFromCoords(jexcel.current.selectedCell[0],jexcel.current.selectedCell[1],n,r)))}}}jexcel.timeControl&&(clearTimeout(jexcel.timeControl),jexcel.timeControl=null)},jexcel.doubleClickControls=function(e){if(jexcel.current)if(e.target.classList.contains("jexcel_corner")){if(jexcel.current.highlighted.length>0){var t=jexcel.current.highlighted[0].getAttribute("data-x"),o=parseInt(jexcel.current.highlighted[jexcel.current.highlighted.length-1].getAttribute("data-y"))+1,n=jexcel.current.highlighted[jexcel.current.highlighted.length-1].getAttribute("data-x"),r=jexcel.current.records.length-1;jexcel.current.copyData(jexcel.current.records[o][t],jexcel.current.records[r][n])}}else if(e.target.classList.contains("jexcel_column_filter")){var l=e.target.getAttribute("data-x");jexcel.current.openFilter(l)}else{var i=jexcel.getElement(e.target);if(1==i[1]&&1==jexcel.current.options.columnSorting&&(l=e.target.getAttribute("data-x"))&&jexcel.current.orderBy(l),2==i[1]&&1==jexcel.current.options.editable&&!jexcel.current.edition){var s=function(e){if(e.parentNode){var t=e.getAttribute("data-x"),o=e.getAttribute("data-y");return t&&o?e:s(e.parentNode)}},a=s(e.target);a&&a.classList.contains("highlight")&&jexcel.current.openEditor(a)}}},jexcel.copyControls=function(e){jexcel.current&&jexcel.copyControls.enabled&&(jexcel.current.edition||jexcel.current.copy(!0))},jexcel.cutControls=function(e){jexcel.current&&(jexcel.current.edition||(jexcel.current.copy(!0),1==jexcel.current.options.editable&&jexcel.current.setValue(jexcel.current.highlighted,"")))},jexcel.pasteControls=function(e){jexcel.current&&jexcel.current.selectedCell&&(jexcel.current.edition||1==jexcel.current.options.editable&&(e&&e.clipboardData?(jexcel.current.paste(jexcel.current.selectedCell[0],jexcel.current.selectedCell[1],e.clipboardData.getData("text")),e.preventDefault()):window.clipboardData&&jexcel.current.paste(jexcel.current.selectedCell[0],jexcel.current.selectedCell[1],window.clipboardData.getData("text"))))},jexcel.contextMenuControls=function(e){if("buttons"in(e=e||window.event)?e.buttons:e.which||e.button,jexcel.current)if(jexcel.current.edition)e.preventDefault();else if(jexcel.current.options.contextMenu&&(jexcel.current.contextMenu.contextmenu.close(),jexcel.current)){var t=e.target.getAttribute("data-x"),o=e.target.getAttribute("data-y");if(t||o){(t<parseInt(jexcel.current.selectedCell[0])||t>parseInt(jexcel.current.selectedCell[2])||o<parseInt(jexcel.current.selectedCell[1])||o>parseInt(jexcel.current.selectedCell[3]))&&jexcel.current.updateSelectionFromCoords(t,o,t,o);var n=jexcel.current.options.contextMenu(jexcel.current,t,o,e);jexcel.current.contextMenu.contextmenu.open(e,n),e.preventDefault()}}},jexcel.touchStartControls=function(e){var t=jexcel.getElement(e.target);if(t[0]?jexcel.current!=t[0].jexcel&&(jexcel.current&&jexcel.current.resetSelection(),jexcel.current=t[0].jexcel):jexcel.current&&(jexcel.current.resetSelection(),jexcel.current=null),jexcel.current&&!jexcel.current.edition){var o=e.target.getAttribute("data-x"),n=e.target.getAttribute("data-y");o&&n&&(jexcel.current.updateSelectionFromCoords(o,n),jexcel.timeControl=setTimeout((function(){"color"==jexcel.current.options.columns[o].type?jexcel.tmpElement=null:jexcel.tmpElement=e.target,jexcel.current.openEditor(e.target,!1,e)}),500))}},jexcel.touchEndControls=function(e){jexcel.timeControl&&(clearTimeout(jexcel.timeControl),jexcel.timeControl=null,jexcel.tmpElement&&"INPUT"==jexcel.tmpElement.children[0].tagName&&jexcel.tmpElement.children[0].focus(),jexcel.tmpElement=null)},jexcel.tabs=function(e,t){var o=[];if(e.classList.contains("jexcel_tabs"))r=e.children[0],l=e.children[1];else{e.innerHTML="",e.classList.add("jexcel_tabs"),e.jexcel=[];var n=document.createElement("div"),r=e.appendChild(n),l=(n=document.createElement("div"),e.appendChild(n))}for(var i=[],s=[],a=0;a<t.length;a++){i[a]=document.createElement("div"),i[a].classList.add("jexcel_tab");var u=jexcel(i[a],t[a]);l.appendChild(i[a]),o[a]=e.jexcel.push(u),s[a]=document.createElement("div"),s[a].classList.add("jexcel_tab_link"),s[a].setAttribute("data-spreadsheet",e.jexcel.length-1),s[a].innerHTML=t[a].sheetName,s[a].onclick=function(){for(var e=0;e<r.children.length;e++)r.children[e].classList.remove("selected"),l.children[e].style.display="none";var t=this.getAttribute("data-spreadsheet");l.children[t].style.display="block",r.children[t].classList.add("selected")},r.appendChild(s[a])}for(var c=0;c<r.children.length;c++)r.children[c].classList.remove("selected"),l.children[c].style.display="none";return r.children[r.children.length-1].classList.add("selected"),l.children[r.children.length-1].style.display="block",o},jexcel.createTabs=jexcel.tabs,jexcel.fromSpreadsheet=function(e,t){var o,n=function(e){var t=[];return e.SheetNames.forEach((function(o){var n={rows:[],columns:[],data:[],style:{}};if(n.sheetName=o,(d=e.Sheets[o]["!cols"])&&d.length)for(var r=0;r<d.length;r++)n.columns[r]={},d[r]&&d[r].wpx&&(n.columns[r].width=d[r].wpx+"px");if((d=e.Sheets[o]["!rows"])&&d.length)for(r=0;r<d.length;r++)d[r]&&d[r].hpx&&(n.rows[r]={},n.rows[r].height=d[r].hpx+"px");if((d=e.Sheets[o]["!merges"])&&d.length>0)for(n.mergeCells=[],r=0;r<d.length;r++){var l=d[r].s.c,i=d[r].s.r,s=d[r].e.c,a=d[r].e.r,u=jexcel.getColumnNameFromId([l,i]);n.mergeCells[u]=[s-l+1,a-i+1]}var c=0,f=0,d=Object.keys(e.Sheets[o]);for(r=0;r<d.length;r++)if("!"!=d[r].substr(0,1)){var p=e.Sheets[o][d[r]],b=jexcel.getIdFromColumnName(d[r],!0);n.data[b[1]]||(n.data[b[1]]=[]),n.data[b[1]][b[0]]=p.f?"="+p.f:p.w,c<b[0]&&(c=b[0]),f<b[1]&&(f=b[1]),p.style&&Object.keys(p.style).length>0&&(n.style[d[r]]=p.style),p.s&&p.s.fgColor&&(n.style[d[r]]&&(n.style[d[r]]+=";"),n.style[d[r]]+="background-color:#"+p.s.fgColor.rgb)}for(var j=n.columns,h=0;h<=f;h++)for(r=0;r<=c;r++)n.data[h]||(n.data[h]=[]),n.data[h][r]||j<r&&(n.data[h][r]="");t.push(n)})),t};(o=new XMLHttpRequest).open("GET",e,!0),"undefined"!=typeof Uint8Array?(o.responseType="arraybuffer",o.onload=function(e){var r=o.response,l=new Uint8Array(r),i=XLSX.read(l,{type:"array",cellFormula:!0,cellStyles:!0});t(n(i))}):(o.setRequestHeader("Accept-Charset","x-user-defined"),o.onreadystatechange=function(){if(4==o.readyState&&200==o.status){var e=convertResponseBodyToText(o.responseBody),r=XLSX.read(e,{type:"binary",cellFormula:!0,cellStyles:!0});t(n(r))}}),o.send()},jexcel.validLetter=function(e){return e.match(/([\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC-\u0400-\u04FF']+)/g)?1:0},jexcel.injectArray=function(e,t,o){return e.slice(0,t).concat(o).concat(e.slice(t))},jexcel.getColumnName=function(e){var t="";return e>701?(t+=String.fromCharCode(64+parseInt(e/676)),t+=String.fromCharCode(64+parseInt(e%676/26))):e>25&&(t+=String.fromCharCode(64+parseInt(e/26))),t+String.fromCharCode(65+e%26)},jexcel.getIdFromColumnName=function(e,t){var o=/^[a-zA-Z]+/.exec(e);if(o){for(var n=0,r=0;r<o[0].length;r++)n+=parseInt(o[0].charCodeAt(r)-64)*Math.pow(26,o[0].length-1-r);--n<0&&(n=0);var l=parseInt(/[0-9]+$/.exec(e));l>0&&l--,e=1==t?[n,l]:n+"-"+l}return e},jexcel.getColumnNameFromId=function(e){return Array.isArray(e)||(e=e.split("-")),jexcel.getColumnName(parseInt(e[0]))+(parseInt(e[1])+1)},jexcel.getElement=function(e){var t=0,o=0;return function e(n){n.className&&n.classList.contains("jexcel_container")&&(o=n),"THEAD"==n.tagName?t=1:"TBODY"==n.tagName&&(t=2),n.parentNode&&(o||e(n.parentNode))}(e),[o,t]},jexcel.doubleDigitFormat=function(e){return 1==(e=""+e).length&&(e="0"+e),e},jexcel.createFromTable=function(e,t){if("TABLE"==e.tagName){t||(t={}),t.columns=[],t.data=[];var o=e.querySelectorAll("colgroup > col");if(o.length)for(var n=0;n<o.length;n++){if(!(r=o[n].style.width))var r=o[n].getAttribute("width");r&&(t.columns[n]||(t.columns[n]={}),t.columns[n].width=r)}var l=function(e){var o=e.getBoundingClientRect(),r=o.width>50?o.width:50;t.columns[n]||(t.columns[n]={}),e.getAttribute("data-celltype")?t.columns[n].type=e.getAttribute("data-celltype"):t.columns[n].type="text",t.columns[n].width=r+"px",t.columns[n].title=e.innerHTML,t.columns[n].align=e.style.textAlign||"center",(o=e.getAttribute("name"))&&(t.columns[n].name=o),(o=e.getAttribute("id"))&&(t.columns[n].id=o),(o=e.getAttribute("data-mask"))&&(t.columns[n].mask=o)},i=[],s=e.querySelectorAll(":scope > thead > tr");if(s.length){for(var a=0;a<s.length-1;a++){var u=[];for(n=0;n<s[a].children.length;n++){var c={title:s[a].children[n].textContent,colspan:s[a].children[n].getAttribute("colspan")||1};u.push(c)}i.push(u)}for(s=s[s.length-1].children,n=0;n<s.length;n++)l(s[n])}var f=0,d={},p={},b={},j={},h=e.querySelectorAll(":scope > tr, :scope > tbody > tr");for(a=0;a<h.length;a++)if(t.data[f]=[],1!=t.parseTableFirstRowAsHeader||s.length||0!=a){for(n=0;n<h[a].children.length;n++){if(g=h[a].children[n].getAttribute("data-formula"))"="!=g.substr(0,1)&&(g="="+g);else var g=h[a].children[n].innerHTML;t.data[f].push(g);var m=jexcel.getColumnNameFromId([n,a]),v=h[a].children[n].getAttribute("class");v&&(j[m]=v);var y=parseInt(h[a].children[n].getAttribute("colspan"))||0,C=parseInt(h[a].children[n].getAttribute("rowspan"))||0;(y||C)&&(d[m]=[y||1,C||1]),h[a].children[n].style&&"none"==h[a].children[n].style.display&&(h[a].children[n].style.display="");var x=h[a].children[n].getAttribute("style");x&&(b[m]=x),h[a].children[n].classList.contains("styleBold")&&(b[m]?b[m]+="; font-weight:bold;":b[m]="font-weight:bold;")}h[a].style&&h[a].style.height&&(p[a]={height:h[a].style.height}),f++}else for(n=0;n<h[a].children.length;n++)l(h[a].children[n]);if(Object.keys(i).length>0&&(t.nestedHeaders=i),Object.keys(b).length>0&&(t.style=b),Object.keys(d).length>0&&(t.mergeCells=d),Object.keys(p).length>0&&(t.rows=p),Object.keys(j).length>0&&(t.classes=j),(h=e.querySelectorAll("tfoot tr")).length){var w=[];for(a=0;a<h.length;a++){var A=[];for(n=0;n<h[a].children.length;n++)A.push(h[a].children[n].textContent);w.push(A)}Object.keys(w).length>0&&(t.footers=w)}if(1==t.parseTableAutoCellType){var E=[];for(n=0;n<t.columns.length;n++){var M=!0,I=!0;for(E[n]=[],a=0;a<t.data.length;a++)g=t.data[a][n],E[n][g]||(E[n][g]=0),E[n][g]++,g.length>25&&(M=!1),10==g.length&&"-"==g.substr(4,1)&&"-"==g.substr(7,1)||(I=!1);var N=Object.keys(E[n]).length;I?t.columns[n].type="calendar":1==M&&N>1&&N<=parseInt(.1*t.data.length)&&(t.columns[n].type="dropdown",t.columns[n].source=Object.keys(E[n]))}}return t}console.log("Element is not a table")},jexcel.helpers=(component={getCaretIndex:function(e){if(this.config.root)var t=this.config.root;else t=window;var o=0,n=t.getSelection();if(n&&0!==n.rangeCount){var r=n.getRangeAt(0),l=r.cloneRange();l.selectNodeContents(e),l.setEnd(r.endContainer,r.endOffset),o=l.toString().length}return o},invert:function(e){for(var t=[],o=Object.keys(e),n=0;n<o.length;n++)t[e[o[n]]]=o[n];return t},getColumnName:function(e){var t="";return e>701?(t+=String.fromCharCode(64+parseInt(e/676)),t+=String.fromCharCode(64+parseInt(e%676/26))):e>25&&(t+=String.fromCharCode(64+parseInt(e/26))),t+String.fromCharCode(65+e%26)},getColumnNameFromCoords:function(e,t){return component.getColumnName(parseInt(e))+(parseInt(t)+1)},getCoordsFromColumnName:function(e){var t=/^[a-zA-Z]+/.exec(e);if(t){for(var o=0,n=0;n<t[0].length;n++)o+=parseInt(t[0].charCodeAt(n)-64)*Math.pow(26,t[0].length-1-n);--o<0&&(o=0);var r=parseInt(/[0-9]+$/.exec(e))||null;return r>0&&r--,[o,r]}},createFromTable:function(){},injectArray:function(e,t,o){return e.slice(0,t).concat(o).concat(e.slice(t))},parseCSV:function(e,t){t=t||",";for(var o=0,n=0,r=[[]],l=0,i=null,s=!1,a=!1,u=0;u<e.length;u++)if(r[n]||(r[n]=[]),r[n][o]||(r[n][o]=""),"\r"!=e[u])if("\n"!=e[u]&&e[u]!=t||0!=s&&1!=a&&i){if('"'==e[u]&&(s=!s),null===i){if(1==(i=s))continue}else if(!0===i&&!a&&'"'==e[u]){'"'==e[u+1]?(s=!0,r[n][o]+=e[u],u++):a=!0;continue}r[n][o]+=e[u]}else{if(i=null,s=!1,a=!1,'"'==r[n][o][0]){var c=r[n][o].trim();'"'==c[c.length-1]&&(r[n][o]=c.substr(1,c.length-2))}"\n"==e[u]?(o=0,n++):++o>l&&(l=o)}for(var f=0;f<r.length;f++)for(u=0;u<=l;u++)void 0===r[f][u]&&(r[f][u]="");return r}},component),"undefined"!=typeof jQuery&&function(e){e.fn.jspreadsheet=e.fn.jexcel=function(t){var o=e(this).get(0);return o.jexcel?Array.isArray(o.jexcel)?o.jexcel[t][arguments[1]].apply(this,Array.prototype.slice.call(arguments,2)):o.jexcel[t].apply(this,Array.prototype.slice.call(arguments,1)):jexcel(e(this).get(0),arguments[0])}}(jQuery),jexcel},module.exports=factory()}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var o=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(o.exports,o,o.exports,__webpack_require__),o.exports}var __webpack_exports__=__webpack_require__(138);return __webpack_exports__}()}));

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.jSuites = factory();
}(this, (function () {

var jSuites;
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 195:
/***/ (function(module) {

/**
 * (c) jSuites Javascript Plugins and Web Components (v4)
 *
 * Website: https://jsuites.net
 * Description: Create amazing web based applications.
 * Plugin: Organogram
 *
 * MIT License
 */

;(function (global, factory) {
     true ? module.exports = factory() :
    0;
}(this, (function () {

    return (function(str) {
        function int64(msint_32, lsint_32) {
            this.highOrder = msint_32;
            this.lowOrder = lsint_32;
        }

        var H = [new int64(0x6a09e667, 0xf3bcc908), new int64(0xbb67ae85, 0x84caa73b),
            new int64(0x3c6ef372, 0xfe94f82b), new int64(0xa54ff53a, 0x5f1d36f1),
            new int64(0x510e527f, 0xade682d1), new int64(0x9b05688c, 0x2b3e6c1f),
            new int64(0x1f83d9ab, 0xfb41bd6b), new int64(0x5be0cd19, 0x137e2179)];

        var K = [new int64(0x428a2f98, 0xd728ae22), new int64(0x71374491, 0x23ef65cd),
            new int64(0xb5c0fbcf, 0xec4d3b2f), new int64(0xe9b5dba5, 0x8189dbbc),
            new int64(0x3956c25b, 0xf348b538), new int64(0x59f111f1, 0xb605d019),
            new int64(0x923f82a4, 0xaf194f9b), new int64(0xab1c5ed5, 0xda6d8118),
            new int64(0xd807aa98, 0xa3030242), new int64(0x12835b01, 0x45706fbe),
            new int64(0x243185be, 0x4ee4b28c), new int64(0x550c7dc3, 0xd5ffb4e2),
            new int64(0x72be5d74, 0xf27b896f), new int64(0x80deb1fe, 0x3b1696b1),
            new int64(0x9bdc06a7, 0x25c71235), new int64(0xc19bf174, 0xcf692694),
            new int64(0xe49b69c1, 0x9ef14ad2), new int64(0xefbe4786, 0x384f25e3),
            new int64(0x0fc19dc6, 0x8b8cd5b5), new int64(0x240ca1cc, 0x77ac9c65),
            new int64(0x2de92c6f, 0x592b0275), new int64(0x4a7484aa, 0x6ea6e483),
            new int64(0x5cb0a9dc, 0xbd41fbd4), new int64(0x76f988da, 0x831153b5),
            new int64(0x983e5152, 0xee66dfab), new int64(0xa831c66d, 0x2db43210),
            new int64(0xb00327c8, 0x98fb213f), new int64(0xbf597fc7, 0xbeef0ee4),
            new int64(0xc6e00bf3, 0x3da88fc2), new int64(0xd5a79147, 0x930aa725),
            new int64(0x06ca6351, 0xe003826f), new int64(0x14292967, 0x0a0e6e70),
            new int64(0x27b70a85, 0x46d22ffc), new int64(0x2e1b2138, 0x5c26c926),
            new int64(0x4d2c6dfc, 0x5ac42aed), new int64(0x53380d13, 0x9d95b3df),
            new int64(0x650a7354, 0x8baf63de), new int64(0x766a0abb, 0x3c77b2a8),
            new int64(0x81c2c92e, 0x47edaee6), new int64(0x92722c85, 0x1482353b),
            new int64(0xa2bfe8a1, 0x4cf10364), new int64(0xa81a664b, 0xbc423001),
            new int64(0xc24b8b70, 0xd0f89791), new int64(0xc76c51a3, 0x0654be30),
            new int64(0xd192e819, 0xd6ef5218), new int64(0xd6990624, 0x5565a910),
            new int64(0xf40e3585, 0x5771202a), new int64(0x106aa070, 0x32bbd1b8),
            new int64(0x19a4c116, 0xb8d2d0c8), new int64(0x1e376c08, 0x5141ab53),
            new int64(0x2748774c, 0xdf8eeb99), new int64(0x34b0bcb5, 0xe19b48a8),
            new int64(0x391c0cb3, 0xc5c95a63), new int64(0x4ed8aa4a, 0xe3418acb),
            new int64(0x5b9cca4f, 0x7763e373), new int64(0x682e6ff3, 0xd6b2b8a3),
            new int64(0x748f82ee, 0x5defb2fc), new int64(0x78a5636f, 0x43172f60),
            new int64(0x84c87814, 0xa1f0ab72), new int64(0x8cc70208, 0x1a6439ec),
            new int64(0x90befffa, 0x23631e28), new int64(0xa4506ceb, 0xde82bde9),
            new int64(0xbef9a3f7, 0xb2c67915), new int64(0xc67178f2, 0xe372532b),
            new int64(0xca273ece, 0xea26619c), new int64(0xd186b8c7, 0x21c0c207),
            new int64(0xeada7dd6, 0xcde0eb1e), new int64(0xf57d4f7f, 0xee6ed178),
            new int64(0x06f067aa, 0x72176fba), new int64(0x0a637dc5, 0xa2c898a6),
            new int64(0x113f9804, 0xbef90dae), new int64(0x1b710b35, 0x131c471b),
            new int64(0x28db77f5, 0x23047d84), new int64(0x32caab7b, 0x40c72493),
            new int64(0x3c9ebe0a, 0x15c9bebc), new int64(0x431d67c4, 0x9c100d4c),
            new int64(0x4cc5d4be, 0xcb3e42b6), new int64(0x597f299c, 0xfc657e2a),
            new int64(0x5fcb6fab, 0x3ad6faec), new int64(0x6c44198c, 0x4a475817)];

        var W = new Array(64);
        var a, b, c, d, e, f, g, h, i, j;
        var T1, T2;
        var charsize = 8;

        function utf8_encode(str) {
            return unescape(encodeURIComponent(str));
        }

        function str2binb(str) {
            var bin = [];
            var mask = (1 << charsize) - 1;
            var len = str.length * charsize;

            for (var i = 0; i < len; i += charsize) {
                bin[i >> 5] |= (str.charCodeAt(i / charsize) & mask) << (32 - charsize - (i % 32));
            }

            return bin;
        }

        function binb2hex(binarray) {
            var hex_tab = "0123456789abcdef";
            var str = "";
            var length = binarray.length * 4;
            var srcByte;

            for (var i = 0; i < length; i += 1) {
                srcByte = binarray[i >> 2] >> ((3 - (i % 4)) * 8);
                str += hex_tab.charAt((srcByte >> 4) & 0xF) + hex_tab.charAt(srcByte & 0xF);
            }

            return str;
        }

        function safe_add_2(x, y) {
            var lsw, msw, lowOrder, highOrder;

            lsw = (x.lowOrder & 0xFFFF) + (y.lowOrder & 0xFFFF);
            msw = (x.lowOrder >>> 16) + (y.lowOrder >>> 16) + (lsw >>> 16);
            lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

            lsw = (x.highOrder & 0xFFFF) + (y.highOrder & 0xFFFF) + (msw >>> 16);
            msw = (x.highOrder >>> 16) + (y.highOrder >>> 16) + (lsw >>> 16);
            highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

            return new int64(highOrder, lowOrder);
        }

        function safe_add_4(a, b, c, d) {
            var lsw, msw, lowOrder, highOrder;

            lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) + (c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF);
            msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (lsw >>> 16);
            lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

            lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) + (c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) + (msw >>> 16);
            msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (d.highOrder >>> 16) + (lsw >>> 16);
            highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

            return new int64(highOrder, lowOrder);
        }

        function safe_add_5(a, b, c, d, e) {
            var lsw, msw, lowOrder, highOrder;

            lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) + (c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF) + (e.lowOrder & 0xFFFF);
            msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (e.lowOrder >>> 16) + (lsw >>> 16);
            lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

            lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) + (c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) + (e.highOrder & 0xFFFF) + (msw >>> 16);
            msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (d.highOrder >>> 16) + (e.highOrder >>> 16) + (lsw >>> 16);
            highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

            return new int64(highOrder, lowOrder);
        }

        function maj(x, y, z) {
            return new int64(
                (x.highOrder & y.highOrder) ^ (x.highOrder & z.highOrder) ^ (y.highOrder & z.highOrder),
                (x.lowOrder & y.lowOrder) ^ (x.lowOrder & z.lowOrder) ^ (y.lowOrder & z.lowOrder)
            );
        }

        function ch(x, y, z) {
            return new int64(
                (x.highOrder & y.highOrder) ^ (~x.highOrder & z.highOrder),
                (x.lowOrder & y.lowOrder) ^ (~x.lowOrder & z.lowOrder)
            );
        }

        function rotr(x, n) {
            if (n <= 32) {
                return new int64(
                    (x.highOrder >>> n) | (x.lowOrder << (32 - n)),
                    (x.lowOrder >>> n) | (x.highOrder << (32 - n))
                );
            } else {
                return new int64(
                    (x.lowOrder >>> n) | (x.highOrder << (32 - n)),
                    (x.highOrder >>> n) | (x.lowOrder << (32 - n))
                );
            }
        }

        function sigma0(x) {
            var rotr28 = rotr(x, 28);
            var rotr34 = rotr(x, 34);
            var rotr39 = rotr(x, 39);

            return new int64(
                rotr28.highOrder ^ rotr34.highOrder ^ rotr39.highOrder,
                rotr28.lowOrder ^ rotr34.lowOrder ^ rotr39.lowOrder
            );
        }

        function sigma1(x) {
            var rotr14 = rotr(x, 14);
            var rotr18 = rotr(x, 18);
            var rotr41 = rotr(x, 41);

            return new int64(
                rotr14.highOrder ^ rotr18.highOrder ^ rotr41.highOrder,
                rotr14.lowOrder ^ rotr18.lowOrder ^ rotr41.lowOrder
            );
        }

        function gamma0(x) {
            var rotr1 = rotr(x, 1), rotr8 = rotr(x, 8), shr7 = shr(x, 7);

            return new int64(
                rotr1.highOrder ^ rotr8.highOrder ^ shr7.highOrder,
                rotr1.lowOrder ^ rotr8.lowOrder ^ shr7.lowOrder
            );
        }

        function gamma1(x) {
            var rotr19 = rotr(x, 19);
            var rotr61 = rotr(x, 61);
            var shr6 = shr(x, 6);

            return new int64(
                rotr19.highOrder ^ rotr61.highOrder ^ shr6.highOrder,
                rotr19.lowOrder ^ rotr61.lowOrder ^ shr6.lowOrder
            );
        }

        function shr(x, n) {
            if (n <= 32) {
                return new int64(
                    x.highOrder >>> n,
                    x.lowOrder >>> n | (x.highOrder << (32 - n))
                );
            } else {
                return new int64(
                    0,
                    x.highOrder << (32 - n)
                );
            }
        }

        var str = utf8_encode(str);
        var strlen = str.length*charsize;
        str = str2binb(str);

        str[strlen >> 5] |= 0x80 << (24 - strlen % 32);
        str[(((strlen + 128) >> 10) << 5) + 31] = strlen;

        for (var i = 0; i < str.length; i += 32) {
            a = H[0];
            b = H[1];
            c = H[2];
            d = H[3];
            e = H[4];
            f = H[5];
            g = H[6];
            h = H[7];

            for (var j = 0; j < 80; j++) {
                if (j < 16) {
                    W[j] = new int64(str[j*2 + i], str[j*2 + i + 1]);
                } else {
                    W[j] = safe_add_4(gamma1(W[j - 2]), W[j - 7], gamma0(W[j - 15]), W[j - 16]);
                }

                T1 = safe_add_5(h, sigma1(e), ch(e, f, g), K[j], W[j]);
                T2 = safe_add_2(sigma0(a), maj(a, b, c));
                h = g;
                g = f;
                f = e;
                e = safe_add_2(d, T1);
                d = c;
                c = b;
                b = a;
                a = safe_add_2(T1, T2);
            }

            H[0] = safe_add_2(a, H[0]);
            H[1] = safe_add_2(b, H[1]);
            H[2] = safe_add_2(c, H[2]);
            H[3] = safe_add_2(d, H[3]);
            H[4] = safe_add_2(e, H[4]);
            H[5] = safe_add_2(f, H[5]);
            H[6] = safe_add_2(g, H[6]);
            H[7] = safe_add_2(h, H[7]);
        }

        var binarray = [];
        for (var i = 0; i < H.length; i++) {
            binarray.push(H[i].highOrder);
            binarray.push(H[i].lowOrder);
        }

        return binb2hex(binarray);
    });

})));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ jsuites; }
});

;// CONCATENATED MODULE: ./src/utils/helpers.js
var Helpers = {};

// Two digits
Helpers.two = function(value) {
    value = '' + value;
    if (value.length == 1) {
        value = '0' + value;
    }
    return value;
}

Helpers.focus = function(el) {
    if (el.innerText.length) {
        var range = document.createRange();
        var sel = window.getSelection();
        var node = el.childNodes[el.childNodes.length-1];
        range.setStart(node, node.length)
        range.collapse(true)
        sel.removeAllRanges()
        sel.addRange(range)
        el.scrollLeft = el.scrollWidth;
    }
}

Helpers.isNumeric = (function (num) {
    if (typeof(num) === 'string') {
        num = num.trim();
    }
    return !isNaN(num) && num !== null && num !== '';
});

Helpers.guid = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

Helpers.getNode = function() {
    var node = document.getSelection().anchorNode;
    if (node) {
        return (node.nodeType == 3 ? node.parentNode : node);
    } else {
        return null;
    }
}
/**
 * Generate hash from a string
 */
Helpers.hash = function(str) {
    var hash = 0, i, chr;

    if (str.length === 0) {
        return hash;
    } else {
        for (i = 0; i < str.length; i++) {
            chr = str.charCodeAt(i);
            if (chr > 32) {
                hash = ((hash << 5) - hash) + chr;
                hash |= 0;
            }
        }
    }
    return hash;
}

/**
 * Generate a random color
 */
Helpers.randomColor = function(h) {
    var lum = -0.25;
    var hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var rgb = [], c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb.push(("00" + c).substr(c.length));
    }

    // Return hex
    if (h == true) {
        return '#' + Helpers.two(rgb[0].toString(16)) + Helpers.two(rgb[1].toString(16)) + Helpers.two(rgb[2].toString(16));
    }

    return rgb;
}

Helpers.getWindowWidth = function() {
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;
    return x;
}

Helpers.getWindowHeight = function() {
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return  y;
}

Helpers.getPosition = function(e) {
    if (e.changedTouches && e.changedTouches[0]) {
        var x = e.changedTouches[0].pageX;
        var y = e.changedTouches[0].pageY;
    } else {
        var x = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
        var y = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    }

    return [ x, y ];
}

Helpers.click = function(el) {
    if (el.click) {
        el.click();
    } else {
        var evt = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        el.dispatchEvent(evt);
    }
}

Helpers.findElement = function(element, condition) {
    var foundElement = false;

    function path (element) {
        if (element && ! foundElement) {
            if (typeof(condition) == 'function') {
                foundElement = condition(element)
            } else if (typeof(condition) == 'string') {
                if (element.classList && element.classList.contains(condition)) {
                    foundElement = element;
                }
            }
        }

        if (element.parentNode && ! foundElement) {
            path(element.parentNode);
        }
    }

    path(element);

    return foundElement;
}

/* harmony default export */ var helpers = (Helpers);
;// CONCATENATED MODULE: ./src/utils/helpers.date.js


function HelpersDate() {
    var Component = {};

    Component.now = function (date, dateOnly) {
        var y = null;
        var m = null;
        var d = null;
        var h = null;
        var i = null;
        var s = null;

        if (Array.isArray(date)) {
            y = date[0];
            m = date[1];
            d = date[2];
            h = date[3];
            i = date[4];
            s = date[5];
        } else {
            if (! date) {
                date = new Date();
            }
            y = date.getFullYear();
            m = date.getMonth() + 1;
            d = date.getDate();
            h = date.getHours();
            i = date.getMinutes();
            s = date.getSeconds();
        }

        if (dateOnly == true) {
            return helpers.two(y) + '-' + helpers.two(m) + '-' + helpers.two(d);
        } else {
            return helpers.two(y) + '-' + helpers.two(m) + '-' + helpers.two(d) + ' ' + helpers.two(h) + ':' + helpers.two(i) + ':' + helpers.two(s);
        }
    }

    Component.toArray = function (value) {
        var date = value.split(((value.indexOf('T') !== -1) ? 'T' : ' '));
        var time = date[1];
        var date = date[0].split('-');
        var y = parseInt(date[0]);
        var m = parseInt(date[1]);
        var d = parseInt(date[2]);
        var h = 0;
        var i = 0;

        if (time) {
            time = time.split(':');
            h = parseInt(time[0]);
            i = parseInt(time[1]);
        }
        return [y, m, d, h, i, 0];
    }

    var excelInitialTime = Date.UTC(1900, 0, 0);
    var excelLeapYearBug = Date.UTC(1900, 1, 29);
    var millisecondsPerDay = 86400000;

    /**
     * Date to number
     */
    Component.dateToNum = function (jsDate) {
        if (typeof (jsDate) === 'string') {
            jsDate = new Date(jsDate + '  GMT+0');
        }
        var jsDateInMilliseconds = jsDate.getTime();
        if (jsDateInMilliseconds >= excelLeapYearBug) {
            jsDateInMilliseconds += millisecondsPerDay;
        }
        jsDateInMilliseconds -= excelInitialTime;

        return jsDateInMilliseconds / millisecondsPerDay;
    }

    /**
     * Number to date
     *
     * IMPORTANT: Excel incorrectly considers 1900 to be a leap year
     */
    Component.numToDate = function (excelSerialNumber) {
        var jsDateInMilliseconds = excelInitialTime + excelSerialNumber * millisecondsPerDay;
        if (jsDateInMilliseconds >= excelLeapYearBug) {
            jsDateInMilliseconds -= millisecondsPerDay;
        }

        const d = new Date(jsDateInMilliseconds);

        var date = [
            d.getUTCFullYear(),
            d.getUTCMonth() + 1,
            d.getUTCDate(),
            d.getUTCHours(),
            d.getUTCMinutes(),
            d.getUTCSeconds(),
        ];

        return Component.now(date);
    }

    // Jsuites calendar labels
    Component.weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    Component.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    Component.weekdaysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    Component.monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return Component;
}

/* harmony default export */ var helpers_date = (HelpersDate());
;// CONCATENATED MODULE: ./src/utils/dictionary.js


// Update dictionary
var setDictionary = function(d) {
    if (! document.dictionary) {
        document.dictionary = {}
    }
    // Replace the key into the dictionary and append the new ones
    var t = null;
    var i = null;
    var k = Object.keys(d);
    for (i = 0; i < k.length; i++) {
        document.dictionary[k[i]] = d[k[i]];
    }

    // Translations
    for (i = 0; i < helpers_date.weekdays.length; i++) {
        t =  translate(helpers_date.weekdays[i]);
        if (helpers_date.weekdays[i]) {
            helpers_date.weekdays[i] = t;
            helpers_date.weekdaysShort[i] = t.substr(0,3);
        }
    }
    for (i = 0; i < helpers_date.months.length; i++) {
        t = translate(helpers_date.months[i]);
        if (t) {
            helpers_date.months[i] = t;
            helpers_date.monthsShort[i] = t.substr(0,3);
        }
    }
}

// Translate
var translate = function(t) {
    if (typeof(document) !== "undefined" && document.dictionary) {
        return document.dictionary[t] || t;
    } else {
        return t;
    }
}


/* harmony default export */ var dictionary = ({ setDictionary, translate });
;// CONCATENATED MODULE: ./src/utils/tracking.js
 const Tracking = function(component, state) {
    if (state === true) {
        Tracking.state = Tracking.state.filter(function(v) {
            return v !== null;
        });

        // Start after all events
        setTimeout(function() {
            Tracking.state.push(component);
        }, 0);

    } else {
        var index = Tracking.state.indexOf(component);
        if (index >= 0) {
            Tracking.state.splice(index, 1);
        }
    }
}

/* harmony default export */ var tracking = (Tracking);
;// CONCATENATED MODULE: ./src/utils/path.js
function Path(str, val, remove) {
    str = str.split('.');
    if (str.length) {
        let o = this;
        let p = null;
        while (str.length > 1) {
            // Get the property
            p = str.shift();
            // Check if the property exists
            if (o.hasOwnProperty(p)) {
                o = o[p];
            } else {
                // Property does not exists
                if (typeof(val) === 'undefined') {
                    return undefined;
                } else {
                    // Create the property
                    o[p] = {};
                    // Next property
                    o = o[p];
                }
            }
        }
        // Get the property
        p = str.shift();
        // Set or get the value
        if (typeof(val) !== 'undefined') {
            if (remove === true) {
                delete o[p];
            } else {
                o[p] = val;
            }
            // Success
            return true;
        } else {
            // Return the value
            if (o) {
                return o[p];
            }
        }
    }
    // Something went wrong
    return false;
}
;// CONCATENATED MODULE: ./src/utils/sorting.js
function Sorting(el, options) {
    var obj = {};
    obj.options = {};

    var defaults = {
        pointer: null,
        direction: null,
        ondragstart: null,
        ondragend: null,
        ondrop: null,
    }

    var dragElement = null;

    // Loop through the initial configuration
    for (var property in defaults) {
        if (options && options.hasOwnProperty(property)) {
            obj.options[property] = options[property];
        } else {
            obj.options[property] = defaults[property];
        }
    }

    el.classList.add('jsorting');

    el.addEventListener('dragstart', function(e) {
        let target = e.target;
        if (target.nodeType === 3) {
            if (target.parentNode.getAttribute('draggable') === 'true') {
                target = target.parentNode;
            } else {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
        }

        if (target.getAttribute('draggable') === 'true') {
            let position = Array.prototype.indexOf.call(target.parentNode.children, target);
            dragElement = {
                element: target,
                o: position,
                d: position
            }
            target.style.opacity = '0.25';

            if (typeof (obj.options.ondragstart) == 'function') {
                obj.options.ondragstart(el, target, e);
            }

            e.dataTransfer.setDragImage(target,0,0);
        }
    });

    el.addEventListener('dragover', function(e) {
        e.preventDefault();

        if (dragElement) {
            if (getElement(e.target)) {
                if (e.target.getAttribute('draggable') == 'true' && dragElement.element != e.target) {
                    if (!obj.options.direction) {
                        var condition = e.target.clientHeight / 2 > e.offsetY;
                    } else {
                        var condition = e.target.clientWidth / 2 > e.offsetX;
                    }

                    if (condition) {
                        e.target.parentNode.insertBefore(dragElement.element, e.target);
                    } else {
                        e.target.parentNode.insertBefore(dragElement.element, e.target.nextSibling);
                    }

                    dragElement.d = Array.prototype.indexOf.call(e.target.parentNode.children, dragElement.element);
                }
            }
        }
    });

    el.addEventListener('dragleave', function(e) {
        e.preventDefault();
    });

    el.addEventListener('dragend', function(e) {
        e.preventDefault();

        if (dragElement) {
            if (typeof(obj.options.ondragend) == 'function') {
                obj.options.ondragend(el, dragElement.element, e);
            }

            // Cancelled put element to the original position
            if (dragElement.o < dragElement.d) {
                e.target.parentNode.insertBefore(dragElement.element, e.target.parentNode.children[dragElement.o]);
            } else {
                e.target.parentNode.insertBefore(dragElement.element, e.target.parentNode.children[dragElement.o].nextSibling);
            }

            dragElement.element.style.opacity = '';
            dragElement = null;
        }
    });

    el.addEventListener('drop', function(e) {
        e.preventDefault();

        if (dragElement) {
            if (dragElement.o !== dragElement.d) {
                if (typeof (obj.options.ondrop) == 'function') {
                    obj.options.ondrop(el, dragElement.o, dragElement.d, dragElement.element, e.target, e);
                }
            }

            dragElement.element.style.opacity = '';
            dragElement = null;
        }
    });

    var getElement = function(element) {
        var sorting = false;

        function path (element) {
            if (element.className) {
                if (element.classList.contains('jsorting')) {
                    sorting = true;
                }
            }

            if (! sorting) {
                path(element.parentNode);
            }
        }

        path(element);

        return sorting;
    }

    for (var i = 0; i < el.children.length; i++) {
        if (! el.children[i].hasAttribute('draggable')) {
            el.children[i].setAttribute('draggable', 'true');
        }
    }

    el.val = function() {
        var id = null;
        var data = [];
        for (var i = 0; i < el.children.length; i++) {
            if (id = el.children[i].getAttribute('data-id')) {
                data.push(id);
            }
        }
        return data;
    }

    return el;
}
;// CONCATENATED MODULE: ./src/utils/lazyloading.js
function LazyLoading(el, options) {
    var obj = {}

    // Mandatory options
    if (! options.loadUp || typeof(options.loadUp) != 'function') {
        options.loadUp = function() {
            return false;
        }
    }
    if (! options.loadDown || typeof(options.loadDown) != 'function') {
        options.loadDown = function() {
            return false;
        }
    }
    // Timer ms
    if (! options.timer) {
        options.timer = 100;
    }

    // Timer
    var timeControlLoading = null;

    // Controls
    var scrollControls = function(e) {
        if (timeControlLoading == null) {
            var event = false;
            var scrollTop = el.scrollTop;
            if (el.scrollTop + (el.clientHeight * 2) >= el.scrollHeight) {
                if (options.loadDown()) {
                    if (scrollTop == el.scrollTop) {
                        el.scrollTop = el.scrollTop - (el.clientHeight);
                    }
                    event = true;
                }
            } else if (el.scrollTop <= el.clientHeight) {
                if (options.loadUp()) {
                    if (scrollTop == el.scrollTop) {
                        el.scrollTop = el.scrollTop + (el.clientHeight);
                    }
                    event = true;
                }
            }

            timeControlLoading = setTimeout(function() {
                timeControlLoading = null;
            }, options.timer);

            if (event) {
                if (typeof(options.onupdate) == 'function') {
                    options.onupdate();
                }
            }
        }
    }

    // Onscroll
    el.onscroll = function(e) {
        scrollControls(e);
    }

    el.onwheel = function(e) {
        scrollControls(e);
    }

    return obj;
}
;// CONCATENATED MODULE: ./src/plugins/ajax.js
function Ajax() {
    var Component = (function(options, complete) {
        if (Array.isArray(options)) {
            // Create multiple request controller
            var multiple = {
                instance: [],
                complete: complete,
            }

            if (options.length > 0) {
                for (var i = 0; i < options.length; i++) {
                    options[i].multiple = multiple;
                    multiple.instance.push(Component(options[i]));
                }
            }

            return multiple;
        }

        if (! options.data) {
            options.data = {};
        }

        if (options.type) {
            options.method = options.type;
        }

        // Default method
        if (! options.method) {
            options.method = 'GET';
        }

        // Default type
        if (! options.dataType) {
            options.dataType = 'json';
        }

        if (options.data) {
            // Parse object to variables format
            var parseData = function (value, key) {
                var vars = [];
                if (value) {
                    var keys = Object.keys(value);
                    if (keys.length) {
                        for (var i = 0; i < keys.length; i++) {
                            if (key) {
                                var k = key + '[' + keys[i] + ']';
                            } else {
                                var k = keys[i];
                            }

                            if (value[k] instanceof FileList) {
                                vars[k] = value[keys[i]];
                            } else if (value[keys[i]] === null || value[keys[i]] === undefined) {
                                vars[k] = '';
                            } else if (typeof(value[keys[i]]) == 'object') {
                                var r = parseData(value[keys[i]], k);
                                var o = Object.keys(r);
                                for (var j = 0; j < o.length; j++) {
                                    vars[o[j]] = r[o[j]];
                                }
                            } else {
                                vars[k] = value[keys[i]];
                            }
                        }
                    }
                }

                return vars;
            }

            var d = parseData(options.data);
            var k = Object.keys(d);

            // Data form
            if (options.method == 'GET') {
                if (k.length) {
                    var data = [];
                    for (var i = 0; i < k.length; i++) {
                        data.push(k[i] + '=' + encodeURIComponent(d[k[i]]));
                    }

                    if (options.url.indexOf('?') < 0) {
                        options.url += '?';
                    }
                    options.url += data.join('&');
                }
            } else {
                var data = new FormData();
                for (var i = 0; i < k.length; i++) {
                    if (d[k[i]] instanceof FileList) {
                        if (d[k[i]].length) {
                            for (var j = 0; j < d[k[i]].length; j++) {
                                data.append(k[i], d[k[i]][j], d[k[i]][j].name);
                            }
                        }
                    } else {
                        data.append(k[i], d[k[i]]);
                    }
                }
            }
        }

        var httpRequest = new XMLHttpRequest();
        httpRequest.open(options.method, options.url, true);
        httpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        // Content type
        if (options.contentType) {
            httpRequest.setRequestHeader('Content-Type', options.contentType);
        }

        // Headers
        if (options.method === 'POST') {
            httpRequest.setRequestHeader('Accept', 'application/json');
        } else {
            if (options.dataType === 'blob') {
                httpRequest.responseType = "blob";
            } else {
                if (! options.contentType) {
                    if (options.dataType === 'json') {
                        httpRequest.setRequestHeader('Content-Type', 'text/json');
                    } else if (options.dataType === 'html') {
                        httpRequest.setRequestHeader('Content-Type', 'text/html');
                    }
                }
            }
        }

        // No cache
        if (options.cache !== true) {
            httpRequest.setRequestHeader('pragma', 'no-cache');
            httpRequest.setRequestHeader('cache-control', 'no-cache');
        }

        // Authentication
        if (options.withCredentials === true) {
            httpRequest.withCredentials = true
        }

        // Before send
        if (typeof(options.beforeSend) == 'function') {
            options.beforeSend(httpRequest);
        }

        // Before send
        if (typeof(Component.beforeSend) == 'function') {
            Component.beforeSend(httpRequest);
        }

        if (document.ajax && typeof(document.ajax.beforeSend) == 'function') {
            document.ajax.beforeSend(httpRequest);
        }

        httpRequest.onload = function() {
            if (httpRequest.status >= 200 && httpRequest.status < 300) {
                if (options.dataType === 'json') {
                    try {
                        var result = JSON.parse(httpRequest.responseText);

                        if (options.success && typeof(options.success) == 'function') {
                            options.success(result);
                        }
                    } catch(err) {
                        if (options.error && typeof(options.error) == 'function') {
                            options.error(err, result);
                        }
                    }
                } else {
                    if (options.dataType === 'blob') {
                        var result = httpRequest.response;
                    } else {
                        var result = httpRequest.responseText;
                    }

                    if (options.success && typeof(options.success) == 'function') {
                        options.success(result);
                    }
                }
            } else {
                if (options.error && typeof(options.error) == 'function') {
                    options.error(httpRequest.responseText, httpRequest.status);
                }
            }

            // Global queue
            if (Component.queue && Component.queue.length > 0) {
                Component.send(Component.queue.shift());
            }

            // Global complete method
            if (Component.requests && Component.requests.length) {
                // Get index of this request in the container
                var index = Component.requests.indexOf(httpRequest);
                // Remove from the ajax requests container
                Component.requests.splice(index, 1);
                // Deprecated: Last one?
                if (! Component.requests.length) {
                    // Object event
                    if (options.complete && typeof(options.complete) == 'function') {
                        options.complete(result);
                    }
                }
                // Group requests
                if (options.group) {
                    if (Component.oncomplete && typeof(Component.oncomplete[options.group]) == 'function') {
                        if (! Component.pending(options.group)) {
                            Component.oncomplete[options.group]();
                            Component.oncomplete[options.group] = null;
                        }
                    }
                }
                // Multiple requests controller
                if (options.multiple && options.multiple.instance) {
                    // Get index of this request in the container
                    var index = options.multiple.instance.indexOf(httpRequest);
                    // Remove from the ajax requests container
                    options.multiple.instance.splice(index, 1);
                    // If this is the last one call method complete
                    if (! options.multiple.instance.length) {
                        if (options.multiple.complete && typeof(options.multiple.complete) == 'function') {
                            options.multiple.complete(result);
                        }
                    }
                }
            }
        }

        // Keep the options
        httpRequest.options = options;
        // Data
        httpRequest.data = data;

        // Queue
        if (options.queue === true && Component.requests.length > 0) {
            Component.queue.push(httpRequest);
        } else {
            Component.send(httpRequest)
        }

        return httpRequest;
    });

    Component.send = function(httpRequest) {
        if (httpRequest.data) {
            if (Array.isArray(httpRequest.data)) {
                httpRequest.send(httpRequest.data.join('&'));
            } else {
                httpRequest.send(httpRequest.data);
            }
        } else {
            httpRequest.send();
        }

        Component.requests.push(httpRequest);
    }

    Component.exists = function(url, __callback) {
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        if (http.status) {
            __callback(http.status);
        }
    }

    Component.pending = function(group) {
        var n = 0;
        var o = Component.requests;
        if (o && o.length) {
            for (var i = 0; i < o.length; i++) {
                if (! group || group == o[i].options.group) {
                    n++
                }
            }
        }
        return n;
    }

    Component.oncomplete = {};
    Component.requests = [];
    Component.queue = [];

    return Component
}

/* harmony default export */ var ajax = (Ajax());
;// CONCATENATED MODULE: ./src/plugins/animation.js
function Animation() {
    const Component = {
        loading: {}
    }
    
    Component.loading.show = function(timeout) {
        if (! Component.loading.element) {
            Component.loading.element = document.createElement('div');
            Component.loading.element.className = 'jloading';
        }
        document.body.appendChild(Component.loading.element);
    
        // Max timeout in seconds
        if (timeout > 0) {
            setTimeout(function() {
                Component.loading.hide();
            }, timeout * 1000)
        }
    }
    
    Component.loading.hide = function() {
        if (Component.loading.element && Component.loading.element.parentNode) {
            document.body.removeChild(Component.loading.element);
        }
    }
    
    Component.slideLeft = function (element, direction, done) {
        if (direction == true) {
            element.classList.add('jslide-left-in');
            setTimeout(function () {
                element.classList.remove('jslide-left-in');
                if (typeof (done) == 'function') {
                    done();
                }
            }, 400);
        } else {
            element.classList.add('jslide-left-out');
            setTimeout(function () {
                element.classList.remove('jslide-left-out');
                if (typeof (done) == 'function') {
                    done();
                }
            }, 400);
        }
    }
    
    Component.slideRight = function (element, direction, done) {
        if (direction === true) {
            element.classList.add('jslide-right-in');
            setTimeout(function () {
                element.classList.remove('jslide-right-in');
                if (typeof (done) == 'function') {
                    done();
                }
            }, 400);
        } else {
            element.classList.add('jslide-right-out');
            setTimeout(function () {
                element.classList.remove('jslide-right-out');
                if (typeof (done) == 'function') {
                    done();
                }
            }, 400);
        }
    }
    
    Component.slideTop = function (element, direction, done) {
        if (direction === true) {
            element.classList.add('jslide-top-in');
            setTimeout(function () {
                element.classList.remove('jslide-top-in');
                if (typeof (done) == 'function') {
                    done();
                }
            }, 400);
        } else {
            element.classList.add('jslide-top-out');
            setTimeout(function () {
                element.classList.remove('jslide-top-out');
                if (typeof (done) == 'function') {
                    done();
                }
            }, 400);
        }
    }
    
    Component.slideBottom = function (element, direction, done) {
        if (direction === true) {
            element.classList.add('jslide-bottom-in');
            setTimeout(function () {
                element.classList.remove('jslide-bottom-in');
                if (typeof (done) == 'function') {
                    done();
                }
            }, 400);
        } else {
            element.classList.add('jslide-bottom-out');
            setTimeout(function () {
                element.classList.remove('jslide-bottom-out');
                if (typeof (done) == 'function') {
                    done();
                }
            }, 100);
        }
    }
    
    Component.fadeIn = function (element, done) {
        element.style.display = '';
        element.classList.add('jfade-in');
        setTimeout(function () {
            element.classList.remove('jfade-in');
            if (typeof (done) == 'function') {
                done();
            }
        }, 2000);
    }
    
    Component.fadeOut = function (element, done) {
        element.classList.add('jfade-out');
        setTimeout(function () {
            element.style.display = 'none';
            element.classList.remove('jfade-out');
            if (typeof (done) == 'function') {
                done();
            }
        }, 1000);
    }

    return Component;
}

/* harmony default export */ var animation = (Animation());
;// CONCATENATED MODULE: ./src/plugins/mask.js



function Mask() {
    // Currency
    var tokens = {
        // Text
        text: [ '@' ],
        // Currency tokens
        currency: [ '#(.{1})##0?(.{1}0+)?( ?;(.*)?)?', '#' ],
        // Percentage
        percentage: [ '0{1}(.{1}0+)?%' ],
        // Number
        numeric: [ '0{1}(.{1}0+)?' ],
        // Data tokens
        datetime: [ 'YYYY', 'YYY', 'YY', 'MMMMM', 'MMMM', 'MMM', 'MM', 'DDDDD', 'DDDD', 'DDD', 'DD', 'DY', 'DAY', 'WD', 'D', 'Q', 'MONTH', 'MON', 'HH24', 'HH12', 'HH', '\\[H\\]', 'H', 'AM/PM', 'MI', 'SS', 'MS', 'Y', 'M' ],
        // Other
        general: [ 'A', '0', '[0-9a-zA-Z\$]+', '.']
    }

    var getDate = function() {
        if (this.mask.toLowerCase().indexOf('[h]') !== -1) {
            var m = 0;
            if (this.date[4]) {
                m = parseFloat(this.date[4] / 60);
            }
            var v = parseInt(this.date[3]) + m;
            v /= 24;
        } else if (! (this.date[0] && this.date[1] && this.date[2]) && (this.date[3] || this.date[4])) {
            v = helpers.two(this.date[3]) + ':' + helpers.two(this.date[4]) + ':' + helpers.two(this.date[5])
        } else {
            if (this.date[0] && this.date[1] && ! this.date[2]) {
                this.date[2] = 1;
            }
            v = helpers.two(this.date[0]) + '-' + helpers.two(this.date[1]) + '-' + helpers.two(this.date[2]);

            if (this.date[3] || this.date[4] || this.date[5]) {
                v += ' ' + helpers.two(this.date[3]) + ':' + helpers.two(this.date[4]) + ':' + helpers.two(this.date[5]);
            }
        }

        return v;
    }

    var extractDate = function() {
        var v = '';
        if (! (this.date[0] && this.date[1] && this.date[2]) && (this.date[3] || this.date[4])) {
            if (this.mask.toLowerCase().indexOf('[h]') !== -1) {
                v = parseInt(this.date[3]);
            } else {
                let h = parseInt(this.date[3]);
                if (h < 13 && this.values.indexOf('PM') !== -1) {
                    v = (h+12) % 24;
                } else {
                    v = h % 24;
                }
            }
            if (this.date[4]) {
                v += parseFloat(this.date[4] / 60);
            }
            if (this.date[5]) {
                v += parseFloat(this.date[5] / 3600);
            }
            v /= 24;
        } else if (this.date[0] || this.date[1] || this.date[2] || this.date[3] || this.date[4] || this.date[5]) {
            if (this.date[0] && this.date[1] && ! this.date[2]) {
                this.date[2] = 1;
            }
            var t = helpers_date.now(this.date);
            v = helpers_date.dateToNum(t);
            if (this.date[4]) {
                v += parseFloat(this.date[4] / 60);
            }
        }

        if (isNaN(v)) {
            v = '';
        }

        return v;
    }

    var isBlank = function(v) {
        return v === null || v === '' || v === undefined ? true : false;
    }

    var isFormula = function(value) {
        var v = (''+value)[0];
        return v == '=' ? true : false;
    }

    var isNumeric = function(t) {
        return t === 'currency' || t === 'percentage' || t === 'numeric' ? true : false;
    }

    /**
     * Get the decimal defined in the mask configuration
     */
    var getDecimal = function(v) {
        if (v && Number(v) == v) {
            return '.';
        } else {
            if (this.options.decimal) {
                return this.options.decimal;
            } else {
                if (this.locale) {
                    var t = Intl.NumberFormat(this.locale).format(1.1);
                    return this.options.decimal = t[1];
                } else {
                    if (! v) {
                        v  = this.mask;
                    }
                    var e = new RegExp('0{1}(.{1})0+', 'ig');
                    var t = e.exec(v);
                    if (t && t[1] && t[1].length == 1) {
                        // Save decimal
                        this.options.decimal = t[1];
                        // Return decimal
                        return t[1];
                    } else {
                        // Did not find any decimal last resort the default
                        var e = new RegExp('#{1}(.{1})#+', 'ig');
                        var t = e.exec(v);
                        if (t && t[1] && t[1].length == 1) {
                            if (t[1] === ',') {
                                this.options.decimal = '.';
                            } else {
                                this.options.decimal = ',';
                            }
                        } else {
                            this.options.decimal = '1.1'.toLocaleString().substring(1,2);
                        }
                    }
                }
            }
        }

        if (this.options.decimal) {
            return this.options.decimal;
        } else {
            return null;
        }
    }

    var ParseValue = function(v, decimal) {
        if (v == '') {
            return '';
        }

        // Get decimal
        if (! decimal) {
            decimal = getDecimal.call(this);
        }

        // New value
        v = (''+v).split(decimal);

        // Signal
        var signal = v[0].match(/[-]+/g);
        if (signal && signal.length) {
            signal = true;
        } else {
            signal = false;
        }

        v[0] = v[0].match(/[0-9]+/g);

        if (v[0]) {
            if (signal) {
                v[0].unshift('-');
            }
            v[0] = v[0].join('');
        } else {
            if (signal) {
                v[0] = '-';
            }
        }

        if (v[0] || v[1]) {
            if (v[1] !== undefined) {
                v[1] = v[1].match(/[0-9]+/g);
                if (v[1]) {
                    v[1] = v[1].join('');
                } else {
                    v[1] = '';
                }
            }
        } else {
            return '';
        }
        return v;
    }

    var FormatValue = function(v, event) {
        if (v === '') {
            return '';
        }
        // Get decimal
        var d = getDecimal.call(this);
        // Convert value
        var o = this.options;
        // Parse value
        v = ParseValue.call(this, v);
        if (v === '') {
            return '';
        }
        var t = null;
        // Temporary value
        if (v[0]) {
            if (o.style === 'percent') {
                t = parseFloat(v[0]) / 100;
            } else {
                t = parseFloat(v[0] + '.1');
            }
        }

        if ((v[0] === '-' || v[0] === '-00') && ! v[1] && (event && event.inputType == "deleteContentBackward")) {
            return '';
        }

        var n = new Intl.NumberFormat(this.locale, o).format(t);
        n = n.split(d);

        if (o.style === 'percent') {
            if (n[0].indexOf('%') !== -1) {
                n[0] = n[0].replace('%', '');
                n[2] = '%';
            }
        }

        if (typeof(n[1]) !== 'undefined') {
            var s = n[1].replace(/[0-9]*/g, '');
            if (s) {
                n[2] = s;
            }
        }

        if (v[1] !== undefined) {
            n[1] = d + v[1];
        } else {
            n[1] = '';
        }

        return n.join('');
    }

    var Format = function(e, event) {
        var v = Value.call(e);
        if (! v) {
            return;
        }

        // Get decimal
        var n = FormatValue.call(this, v, event);
        var t = (n.length) - v.length;
        var index = Caret.call(e) + t;
        // Set value and update caret
        Value.call(e, n, index, true);
    }

    var Extract = function(v) {
        // Keep the raw value
        var current = ParseValue.call(this, v);
        if (current) {
            // Negative values
            if (current[0] === '-') {
                current[0] = '-0';
            }
            return parseFloat(current.join('.'));
        }
        return null;
    }

    /**
     * Caret getter and setter methods
     */
    var Caret = function(index, adjustNumeric) {
        if (index === undefined) {
            if (this.tagName == 'DIV') {
                var pos = 0;
                var s = window.getSelection();
                if (s) {
                    if (s.rangeCount !== 0) {
                        var r = s.getRangeAt(0);
                        var p = r.cloneRange();
                        p.selectNodeContents(this);
                        p.setEnd(r.endContainer, r.endOffset);
                        pos = p.toString().length;
                    }
                }
                return pos;
            } else {
                return this.selectionStart;
            }
        } else {
            // Get the current value
            var n = Value.call(this);

            // Review the position
            if (adjustNumeric) {
                var p = null;
                for (var i = 0; i < n.length; i++) {
                    if (n[i].match(/[\-0-9]/g) || n[i] === '.' || n[i] === ',') {
                        p = i;
                    }
                }

                // If the string has no numbers
                if (p === null) {
                    p = n.indexOf(' ');
                }

                if (index >= p) {
                    index = p + 1;
                }
            }

            // Do not update caret
            if (index > n.length) {
                index = n.length;
            }

            if (index) {
                // Set caret
                if (this.tagName == 'DIV') {
                    var s = window.getSelection();
                    var r = document.createRange();

                    if (this.childNodes[0]) {
                        r.setStart(this.childNodes[0], index);
                        s.removeAllRanges();
                        s.addRange(r);
                    }
                } else {
                    this.selectionStart = index;
                    this.selectionEnd = index;
                }
            }
        }
    }

    /**
     * Value getter and setter method
     */
    var Value = function(v, updateCaret, adjustNumeric) {
        if (this.tagName == 'DIV') {
            if (v === undefined) {
                var v = this.innerText;
                if (this.value && this.value.length > v.length) {
                    v = this.value;
                }
                return v;
            } else {
                if (this.innerText !== v) {
                    this.innerText = v;

                    if (updateCaret) {
                        Caret.call(this, updateCaret, adjustNumeric);
                    }
                }
            }
        } else {
            if (v === undefined) {
                return this.value;
            } else {
                if (this.value !== v) {
                    this.value = v;
                    if (updateCaret) {
                        Caret.call(this, updateCaret, adjustNumeric);
                    }
                }
            }
        }
    }

    // Labels
    var weekDaysFull = helpers_date.weekdays;
    var weekDays = helpers_date.weekdaysShort;
    var monthsFull = helpers_date.months;
    var months = helpers_date.monthsShort;

    var parser = {
        'YEAR': function(v, s) {
            var y = ''+new Date().getFullYear();

            if (typeof(this.values[this.index]) === 'undefined') {
                this.values[this.index] = '';
            }
            if (parseInt(v) >= 0 && parseInt(v) <= 10) {
                if (this.values[this.index].length < s) {
                    this.values[this.index] += v;
                }
            }
            if (this.values[this.index].length == s) {
                if (s == 2) {
                    var y = y.substr(0,2) + this.values[this.index];
                } else if (s == 3) {
                    var y = y.substr(0,1) + this.values[this.index];
                } else if (s == 4) {
                    var y = this.values[this.index];
                }
                this.date[0] = y;
                this.index++;
            }
        },
        'YYYY': function(v) {
            parser.YEAR.call(this, v, 4);
        },
        'YYY': function(v) {
            parser.YEAR.call(this, v, 3);
        },
        'YY': function(v) {
            parser.YEAR.call(this, v, 2);
        },
        'FIND': function(v, a) {
            if (isBlank(this.values[this.index])) {
                this.values[this.index] = '';
            }
            if (this.event && this.event.inputType && this.event.inputType.indexOf('delete') > -1) {
                this.values[this.index] += v;
                return;
            }
            var pos = 0;
            var count = 0;
            var value = (this.values[this.index] + v).toLowerCase();
            for (var i = 0; i < a.length; i++) {
                if (a[i].toLowerCase().indexOf(value) == 0) {
                    pos = i;
                    count++;
                }
            }
            if (count > 1) {
                this.values[this.index] += v;
            } else if (count == 1) {
                // Jump number of chars
                var t = (a[pos].length - this.values[this.index].length) - 1;
                this.position += t;

                this.values[this.index] = a[pos];
                this.index++;
                return pos;
            }
        },
        'MMM': function(v) {
            var ret = parser.FIND.call(this, v, months);
            if (ret !== undefined) {
                this.date[1] = ret + 1;
            }
        },
        'MON': function(v) {
            parser['MMM'].call(this, v);
        },
        'MMMM': function(v) {
            var ret = parser.FIND.call(this, v, monthsFull);
            if (ret !== undefined) {
                this.date[1] = ret + 1;
            }
        },
        'MONTH': function(v) {
            parser['MMMM'].call(this, v);
        },
        'MMMMM': function(v) {
            if (isBlank(this.values[this.index])) {
                this.values[this.index] = '';
            }
            var pos = 0;
            var count = 0;
            var value = (this.values[this.index] + v).toLowerCase();
            for (var i = 0; i < monthsFull.length; i++) {
                if (monthsFull[i][0].toLowerCase().indexOf(value) == 0) {
                    this.values[this.index] = monthsFull[i][0];
                    this.date[1] = i + 1;
                    this.index++;
                    break;
                }
            }
        },
        'MM': function(v) {
            if (isBlank(this.values[this.index])) {
                if (parseInt(v) > 1 && parseInt(v) < 10) {
                    this.date[1] = this.values[this.index] = '0' + v;
                    this.index++;
                } else if (parseInt(v) < 2) {
                    this.values[this.index] = v;
                }
            } else {
                if (this.values[this.index] == 1 && parseInt(v) < 3) {
                    this.date[1] = this.values[this.index] += v;
                    this.index++;
                } else if (this.values[this.index] == 0 && parseInt(v) > 0 && parseInt(v) < 10) {
                    this.date[1] = this.values[this.index] += v;
                    this.index++;
                }
            }
        },
        'M': function(v) {
            var test = false;
            if (parseInt(v) >= 0 && parseInt(v) < 10) {
                if (isBlank(this.values[this.index])) {
                    this.values[this.index] = v;
                    if (v > 1) {
                        this.date[1] = this.values[this.index];
                        this.index++;
                    }
                } else {
                    if (this.values[this.index] == 1 && parseInt(v) < 3) {
                        this.date[1] = this.values[this.index] += v;
                        this.index++;
                    } else if (this.values[this.index] == 0 && parseInt(v) > 0) {
                        this.date[1] = this.values[this.index] += v;
                        this.index++;
                    } else {
                        var test = true;
                    }
                }
            } else {
                var test = true;
            }

            // Re-test
            if (test == true) {
                var t = parseInt(this.values[this.index]);
                if (t > 0 && t < 12) {
                    this.date[1] = this.values[this.index];
                    this.index++;
                    // Repeat the character
                    this.position--;
                }
            }
        },
        'D': function(v) {
            var test = false;
            if (parseInt(v) >= 0 && parseInt(v) < 10) {
                if (isBlank(this.values[this.index])) {
                    this.values[this.index] = v;
                    if (parseInt(v) > 3) {
                        this.date[2] = this.values[this.index];
                        this.index++;
                    }
                } else {
                    if (this.values[this.index] == 3 && parseInt(v) < 2) {
                        this.date[2] = this.values[this.index] += v;
                        this.index++;
                    } else if (this.values[this.index] == 1 || this.values[this.index] == 2) {
                        this.date[2] = this.values[this.index] += v;
                        this.index++;
                    } else if (this.values[this.index] == 0 && parseInt(v) > 0) {
                        this.date[2] = this.values[this.index] += v;
                        this.index++;
                    } else {
                        var test = true;
                    }
                }
            } else {
                var test = true;
            }

            // Re-test
            if (test == true) {
                var t = parseInt(this.values[this.index]);
                if (t > 0 && t < 32) {
                    this.date[2] = this.values[this.index];
                    this.index++;
                    // Repeat the character
                    this.position--;
                }
            }
        },
        'DD': function(v) {
            if (isBlank(this.values[this.index])) {
                if (parseInt(v) > 3 && parseInt(v) < 10) {
                    this.date[2] = this.values[this.index] = '0' + v;
                    this.index++;
                } else if (parseInt(v) < 10) {
                    this.values[this.index] = v;
                }
            } else {
                if (this.values[this.index] == 3 && parseInt(v) < 2) {
                    this.date[2] = this.values[this.index] += v;
                    this.index++;
                } else if ((this.values[this.index] == 1 || this.values[this.index] == 2) && parseInt(v) < 10) {
                    this.date[2] = this.values[this.index] += v;
                    this.index++;
                } else if (this.values[this.index] == 0 && parseInt(v) > 0 && parseInt(v) < 10) {
                    this.date[2] = this.values[this.index] += v;
                    this.index++;
                }
            }
        },
        'DDD': function(v) {
            parser.FIND.call(this, v, weekDays);
        },
        'DY': function(v) {
            parser['DDD'].call(this, v);
        },
        'DDDD': function(v) {
            parser.FIND.call(this, v, weekDaysFull);
        },
        'DAY': function(v) {
            parser['DDDD'].call(this, v);
        },
        'HH12': function(v, two) {
            if (isBlank(this.values[this.index])) {
                if (parseInt(v) > 1 && parseInt(v) < 10) {
                    if (two) {
                        v = 0 + v;
                    }
                    this.date[3] = this.values[this.index] = v;
                    this.index++;
                } else if (parseInt(v) < 10) {
                    this.values[this.index] = v;
                }
            } else {
                if (this.values[this.index] == 1 && parseInt(v) < 3) {
                    this.date[3] = this.values[this.index] += v;
                    this.index++;
                } else if (this.values[this.index] < 1 && parseInt(v) < 10) {
                    this.date[3] = this.values[this.index] += v;
                    this.index++;
                }
            }
        },
        'HH24': function(v, two) {
            if (parseInt(v) >= 0 && parseInt(v) < 10) {
                if (this.values[this.index] == null || this.values[this.index] == '') {
                    if (parseInt(v) > 2 && parseInt(v) < 10) {
                        if (two) {
                            v = 0 + v;
                        }
                        this.date[3] = this.values[this.index] = v;
                        this.index++;
                    } else if (parseInt(v) < 10) {
                        this.values[this.index] = v;
                    }
                } else {
                    if (this.values[this.index] == 2 && parseInt(v) < 4) {
                        if (! two && this.values[this.index] === '0') {
                            this.values[this.index] = '';
                        }
                        this.date[3] = this.values[this.index] += v;
                        this.index++;
                    } else if (this.values[this.index] < 2 && parseInt(v) < 10) {
                        if (! two && this.values[this.index] === '0') {
                            this.values[this.index] = '';
                        }
                        this.date[3] = this.values[this.index] += v;
                        this.index++;
                    }
                }
            }
        },
        'HH': function(v) {
            parser['HH24'].call(this, v, 1);
        },
        'H': function(v) {
            parser['HH24'].call(this, v, 0);
        },
        '\\[H\\]': function(v) {
            if (this.values[this.index] == undefined) {
                this.values[this.index] = '';
            }
            if (v.match(/[0-9]/g)) {
                this.date[3] = this.values[this.index] += v;
            } else {
                if (this.values[this.index].match(/[0-9]/g)) {
                    this.date[3] = this.values[this.index];
                    this.index++;
                    // Repeat the character
                    this.position--;
                }
            }
        },
        'N60': function(v, i) {
            if (this.values[this.index] == null || this.values[this.index] == '') {
                if (parseInt(v) > 5 && parseInt(v) < 10) {
                    this.date[i] = this.values[this.index] = '0' + v;
                    this.index++;
                } else if (parseInt(v) < 10) {
                    this.values[this.index] = v;
                }
            } else {
                if (parseInt(v) < 10) {
                    this.date[i] = this.values[this.index] += v;
                    this.index++;
                 }
            }
        },
        'MI': function(v) {
            parser.N60.call(this, v, 4);
        },
        'SS': function(v) {
            parser.N60.call(this, v, 5);
        },
        'AM/PM': function(v) {
            if (typeof(this.values[this.index]) === 'undefined') {
                this.values[this.index] = '';
            }

            if (this.values[this.index] === '') {
                if (v.match(/a/i) && this.date[3] < 13) {
                    this.values[this.index] += 'A';
                } else if (v.match(/p/i)) {
                    this.values[this.index] += 'P';
                }
            } else if (this.values[this.index] === 'A' || this.values[this.index] === 'P') {
                this.values[this.index] += 'M';
                this.index++;
            }
        },
        'WD': function(v) {
            if (typeof(this.values[this.index]) === 'undefined') {
                this.values[this.index] = '';
            }
            if (parseInt(v) >= 0 && parseInt(v) < 7) {
                this.values[this.index] = v;
            }
            if (this.values[this.index].length == 1) {
                this.index++;
            }
        },
        '0{1}(.{1}0+)?': function(v) {
            // Get decimal
            var decimal = getDecimal.call(this);
            // Negative number
            var neg = false;
            // Create if is blank
            if (isBlank(this.values[this.index])) {
                this.values[this.index] = '';
            } else {
                if (this.values[this.index] == '-') {
                    neg = true;
                }
            }
            var current = ParseValue.call(this, this.values[this.index], decimal);
            if (current) {
                this.values[this.index] = current.join(decimal);
            }
            // New entry
            if (parseInt(v) >= 0 && parseInt(v) < 10) {
                // Replace the zero for a number
                if (this.values[this.index] == '0' && v > 0) {
                    this.values[this.index] = '';
                } else if (this.values[this.index] == '-0' && v > 0) {
                    this.values[this.index] = '-';
                }
                // Don't add up zeros because does not mean anything here
                if ((this.values[this.index] != '0' && this.values[this.index] != '-0') || v == decimal) {
                    this.values[this.index] += v;
                }
            } else if (decimal && v == decimal) {
                if (this.values[this.index].indexOf(decimal) == -1) {
                    if (! this.values[this.index]) {
                        this.values[this.index] = '0';
                    }
                    this.values[this.index] += v;
                }
            } else if (v == '-') {
                // Negative signed
                neg = true;
            }

            if (neg === true && this.values[this.index][0] !== '-') {
                this.values[this.index] = '-' + this.values[this.index];
            }
        },
        '0{1}(.{1}0+)?%': function(v) {
            parser['0{1}(.{1}0+)?'].call(this, v);

            if (this.values[this.index].match(/[\-0-9]/g)) {
                if (this.values[this.index] && this.values[this.index].indexOf('%') == -1) {
                    this.values[this.index] += '%';
                }
            } else {
                this.values[this.index] = '';
            }
        },
        '#(.{1})##0?(.{1}0+)?( ?;(.*)?)?': function(v) {
            // Parse number
            parser['0{1}(.{1}0+)?'].call(this, v);
            // Get decimal
            var decimal = getDecimal.call(this);
            // Get separator
            var separator = this.tokens[this.index].substr(1,1);
            // Negative
            var negative = this.values[this.index][0] === '-' ? true : false;
            // Current value
            var current = ParseValue.call(this, this.values[this.index], decimal);

            // Get main and decimal parts
            if (current !== '') {
                // Format number
                var n = current[0].match(/[0-9]/g);
                if (n) {
                    // Format
                    n = n.join('');
                    var t = [];
                    var s = 0;
                    for (var j = n.length - 1; j >= 0 ; j--) {
                        t.push(n[j]);
                        s++;
                        if (! (s % 3)) {
                            t.push(separator);
                        }
                    }
                    t = t.reverse();
                    current[0] = t.join('');
                    if (current[0].substr(0,1) == separator) {
                        current[0] = current[0].substr(1);
                    }
                } else {
                    current[0] = '';
                }

                // Value
                this.values[this.index] = current.join(decimal);

                // Negative
                if (negative) {
                    this.values[this.index] = '-' + this.values[this.index];
                }
            }
        },
        '0': function(v) {
            if (v.match(/[0-9]/g)) {
                this.values[this.index] = v;
                this.index++;
            }
        },
        '[0-9a-zA-Z$]+': function(v) {
            if (isBlank(this.values[this.index])) {
                this.values[this.index] = '';
            }
            var t = this.tokens[this.index];
            var s = this.values[this.index];
            var i = s.length;

            if (t[i] == v) {
                this.values[this.index] += v;

                if (this.values[this.index] == t) {
                    this.index++;
                }
            } else {
                this.values[this.index] = t;
                this.index++;

                if (v.match(/[\-0-9]/g)) {
                    // Repeat the character
                    this.position--;
                }
            }
        },
        'A': function(v) {
            if (v.match(/[a-zA-Z]/gi)) {
                this.values[this.index] = v;
                this.index++;
            }
        },
        '.': function(v) {
            parser['[0-9a-zA-Z$]+'].call(this, v);
        },
        '@': function(v) {
            if (isBlank(this.values[this.index])) {
                this.values[this.index] = '';
            }
            this.values[this.index] += v;
        }
    }

    /**
     * Get the tokens in the mask string
     */
    var getTokens = function(str) {
        if (this.type == 'general') {
            var t = [].concat(tokens.general);
        } else {
            var t = [].concat(tokens.currency, tokens.datetime, tokens.percentage, tokens.numeric, tokens.text, tokens.general);
        }
        // Expression to extract all tokens from the string
        var e = new RegExp(t.join('|'), 'gi');
        // Extract
        return str.match(e);
    }

    /**
     * Get the method of one given token
     */
    var getMethod = function(str) {
        if (! this.type) {
            var types = Object.keys(tokens);
        } else if (this.type == 'text') {
            var types = [ 'text' ];
        } else if (this.type == 'general') {
            var types = [ 'general' ];
        } else if (this.type == 'datetime') {
            var types = [ 'numeric', 'datetime', 'general' ];
        } else {
            var types = [ 'currency', 'percentage', 'numeric', 'general' ];
        }

        // Found
        for (var i = 0; i < types.length; i++) {
            var type = types[i];
            for (var j = 0; j < tokens[type].length; j++) {
                var e = new RegExp(tokens[type][j], 'gi');
                var r = str.match(e);
                if (r) {
                    return { type: type, method: tokens[type][j] }
                }
            }
        }
    }

    /**
     * Identify each method for each token
     */
    var getMethods = function(t) {
        var result = [];
        for (var i = 0; i < t.length; i++) {
            var m = getMethod.call(this, t[i]);
            if (m) {
                result.push(m.method);
            } else {
                result.push(null);
            }
        }

        // Compatibility with excel
        for (var i = 0; i < result.length; i++) {
            if (result[i] == 'MM') {
                // Not a month, correct to minutes
                if (result[i-1] && result[i-1].indexOf('H') >= 0) {
                    result[i] = 'MI';
                } else if (result[i-2] && result[i-2].indexOf('H') >= 0) {
                    result[i] = 'MI';
                } else if (result[i+1] && result[i+1].indexOf('S') >= 0) {
                    result[i] = 'MI';
                } else if (result[i+2] && result[i+2].indexOf('S') >= 0) {
                    result[i] = 'MI';
                }
            }
        }

        return result;
    }

    /**
     * Get the type for one given token
     */
    var getType = function(str) {
        var m = getMethod.call(this, str);
        if (m) {
            var type = m.type;
        }

        if (type) {
            var numeric = 0;
            // Make sure the correct type
            var t = getTokens.call(this, str);
            for (var i = 0; i < t.length; i++) {
                m = getMethod.call(this, t[i]);
                if (m && isNumeric(m.type)) {
                    numeric++;
                }
            }
            if (numeric > 1) {
                type = 'general';
            }
        }

        return type;
    }

    /**
     * Parse character per character using the detected tokens in the mask
     */
    var parse = function() {
        // Parser method for this position
        if (typeof(parser[this.methods[this.index]]) == 'function') {
            parser[this.methods[this.index]].call(this, this.value[this.position]);
            this.position++;
        } else {
            this.values[this.index] = this.tokens[this.index];
            this.index++;
        }
    }

    var toPlainString = function(num) {
        return (''+ +num).replace(/(-?)(\d*)\.?(\d*)e([+-]\d+)/,
          function(a,b,c,d,e) {
            return e < 0
              ? b + '0.' + Array(1-e-c.length).join(0) + c + d
              : b + c + d + Array(e-d.length+1).join(0);
          });
    }

    /**
     * Mask function
     * @param {mixed|string} JS input or a string to be parsed
     * @param {object|string} When the first param is a string, the second is the mask or object with the mask options
     */
    var obj = function(e, config, returnObject) {
        // Options
        var r = null;
        var t = null;
        var o = {
            // Element
            input: null,
            // Current value
            value: null,
            // Mask options
            options: {},
            // New values for each token found
            values: [],
            // Token position
            index: 0,
            // Character position
            position: 0,
            // Date raw values
            date: [0,0,0,0,0,0],
            // Raw number for the numeric values
            number: 0,
        }

        // This is a JavaScript Event
        if (typeof(e) == 'object') {
            // Element
            o.input = e.target;
            // Current value
            o.value = Value.call(e.target);
            // Current caret position
            o.caret = Caret.call(e.target);
            // Mask
            if (t = e.target.getAttribute('data-mask')) {
                o.mask = t;
            }
            // Type
            if (t = e.target.getAttribute('data-type')) {
                o.type = t;
            }
            // Options
            if (e.target.mask) {
                if (e.target.mask.options) {
                    o.options = e.target.mask.options;
                }
                if (e.target.mask.locale) {
                    o.locale = e.target.mask.locale;
                }
            } else {
                // Locale
                if (t = e.target.getAttribute('data-locale')) {
                    o.locale = t;
                    if (o.mask) {
                        o.options.style = o.mask;
                    }
                }
            }
            // Extra configuration
            if (e.target.attributes && e.target.attributes.length) {
                for (var i = 0; i < e.target.attributes.length; i++) {
                    var k = e.target.attributes[i].name;
                    var v = e.target.attributes[i].value;
                    if (k.substr(0,4) == 'data') {
                        o.options[k.substr(5)] = v;
                    }
                }
            }
        } else {
            // Options
            if (typeof(config) == 'string') {
                // Mask
                o.mask = config;
            } else {
                // Mask
                var k = Object.keys(config);
                for (var i = 0; i < k.length; i++) {
                    o[k[i]] = config[k[i]];
                }
            }

            if (typeof(e) === 'number') {
                // Get decimal
                getDecimal.call(o, o.mask);
                // Replace to the correct decimal
                e = (''+e).replace('.', o.options.decimal);
            }

            // Current
            o.value = e;

            if (o.input) {
                // Value
                Value.call(o.input, e);
                // Focus
                helpers.focus(o.input);
                // Caret
                o.caret = Caret.call(o.input);
            }
        }

        // Mask detected start the process
        if (! isFormula(o.value) && (o.mask || o.locale)) {
            // Compatibility fixes
            if (o.mask) {
                // Remove []
                o.mask = o.mask.replace(new RegExp(/\[h]/),'|h|');
                o.mask = o.mask.replace(new RegExp(/\[.*?\]/),'');
                o.mask = o.mask.replace(new RegExp(/\|h\|/),'[h]');
                if (o.mask.indexOf(';') !== -1) {
                    var t = o.mask.split(';');
                    o.mask = t[0];
                }
                // Excel mask TODO: Improve
                if (o.mask.indexOf('##') !== -1) {
                    var d = o.mask.split(';');
                    if (d[0]) {
                        if (typeof(e) == 'object') {
                            d[0] = d[0].replace(new RegExp(/_\)/g), '');
                            d[0] = d[0].replace(new RegExp(/_\(/g), '');
                        }
                        d[0] = d[0].replace('*', '\t');
                        d[0] = d[0].replace(new RegExp(/_-/g), '');
                        d[0] = d[0].replace(new RegExp(/_/g), '');
                        d[0] = d[0].replace(new RegExp(/"/g), '');
                        d[0] = d[0].replace('##0.###','##0.000');
                        d[0] = d[0].replace('##0.##','##0.00');
                        d[0] = d[0].replace('##0.#','##0.0');
                        d[0] = d[0].replace('##0,###','##0,000');
                        d[0] = d[0].replace('##0,##','##0,00');
                        d[0] = d[0].replace('##0,#','##0,0');
                    }
                    o.mask = d[0];
                }
                // Remove back slashes
                if (o.mask.indexOf('\\') !== -1) {
                    var d = o.mask.split(';');
                    d[0] = d[0].replace(new RegExp(/\\/g), '');
                    o.mask = d[0];
                }
                // Get type
                if (! o.type) {
                    o.type = getType.call(o, o.mask);
                }
                // Get tokens
                o.tokens = getTokens.call(o, o.mask);
            }

            // On new input
            if (typeof(e) !== 'object'  || ! e.inputType || ! e.inputType.indexOf('insert') || ! e.inputType.indexOf('delete')) {
                // Start transformation
                if (o.locale) {
                    if (o.input) {
                        Format.call(o, o.input, e);
                    } else {
                        var newValue = FormatValue.call(o, o.value);
                    }
                } else {
                    // Get tokens
                    o.methods = getMethods.call(o, o.tokens);
                    o.event = e;

                    // Go through all tokes
                    while (o.position < o.value.length && typeof(o.tokens[o.index]) !== 'undefined') {
                        // Get the appropriate parser
                        parse.call(o);
                    }

                    // New value
                    var newValue = o.values.join('');

                    // Add tokens to the end of string only if string is not empty
                    if (isNumeric(o.type) && newValue !== '') {
                        // Complement things in the end of the mask
                        while (typeof(o.tokens[o.index]) !== 'undefined') {
                            var t = getMethod.call(o, o.tokens[o.index]);
                            if (t && t.type == 'general') {
                                o.values[o.index] = o.tokens[o.index];
                            }
                            o.index++;
                        }

                        var adjustNumeric = true;
                    } else {
                        var adjustNumeric = false;
                    }

                    // New value
                    newValue = o.values.join('');

                    // Reset value
                    if (o.input) {
                        t = newValue.length - o.value.length;
                        if (t > 0) {
                            var caret = o.caret + t;
                        } else {
                            var caret = o.caret;
                        }
                        Value.call(o.input, newValue, caret, adjustNumeric);
                    }
                }
            }

            // Update raw data
            if (o.input) {
                var label = null;
                if (isNumeric(o.type)) {
                    let v = Value.call(o.input);
                    // Extract the number
                    o.number = Extract.call(o, v);
                    // Keep the raw data as a property of the tag
                    if (o.type == 'percentage' && (''+v).indexOf('%') !== -1) {
                        label = obj.adjustPrecision(o.number / 100);
                    } else {
                        label = o.number;
                    }
                } else if (o.type == 'datetime') {
                    label = getDate.call(o);

                    if (o.date[0] && o.date[1] && o.date[2]) {
                        o.input.setAttribute('data-completed', true);
                    }
                }

                if (label) {
                    o.input.setAttribute('data-value', label);
                }
            }

            if (newValue !== undefined) {
                if (returnObject) {
                    return o;
                } else {
                    return newValue;
                }
            }
        }
    }

    obj.adjustPrecision = function(num) {
        if (typeof num === 'number' && !Number.isInteger(num)) {
            const v = num.toString().split('.');

            if (v[1] && v[1].length > 10) {
                let t0 = 0;
                const t1 = v[1][v[1].length - 2];

                if (t1 == 0 || t1 == 9) {
                    for (let i = v[1].length - 2; i > 0; i--) {
                        if (t0 >= 0 && v[1][i] == t1) {
                            t0++;
                            if (t0 > 6) {
                                break;
                            }
                        } else {
                            t0 = 0;
                            break;
                        }
                    }

                    if (t0) {
                        return parseFloat(parseFloat(num).toFixed(v[1].length - 1));
                    }
                }
            }
        }

        return num;
    }

    // Get the type of the mask
    obj.getType = getType;

    // Extract the tokens from a mask
    obj.prepare = function(str, o) {
        if (! o) {
            o = {};
        }
        return getTokens.call(o, str);
    }

    /**
     * Apply the mask to a element (legacy)
     */
    obj.apply = function(e) {
        var v = Value.call(e.target);
        if (e.key.length == 1) {
            v += e.key;
        }
        Value.call(e.target, obj(v, e.target.getAttribute('data-mask')));
    }

    /**
     * Legacy support
     */
    obj.run = function(value, mask, decimal) {
        return obj(value, { mask: mask, decimal: decimal });
    }

    /**
     * Extract number from masked string
     */
    obj.extract = function(v, options, returnObject) {
        if (isBlank(v)) {
            return v;
        }
        if (typeof(options) != 'object') {
            return v;
        } else {
            options = Object.assign({}, options);

            if (! options.options) {
                options.options = {};
            }
        }

        // Compatibility
        if (! options.mask && options.format) {
            options.mask = options.format;
        }

        // Remove []
        if (options.mask) {
            if (options.mask.indexOf(';') !== -1) {
                var t = options.mask.split(';');
                options.mask = t[0];
            }
            options.mask = options.mask.replace(new RegExp(/\[h]/),'|h|');
            options.mask = options.mask.replace(new RegExp(/\[.*?\]/),'');
            options.mask = options.mask.replace(new RegExp(/\|h\|/),'[h]');
        }

        // Get decimal
        getDecimal.call(options, options.mask);

        var type = null;
        var value = null;

        if (options.type == 'percent' || options.options.style == 'percent') {
            type = 'percentage';
        } else if (options.mask) {
            type = getType.call(options, options.mask);
        }

        if (type === 'general') {
            var o = obj(v, options, true);

            value = v;
        } else if (type === 'datetime') {
            if (v instanceof Date) {
                v = obj.getDateString(v, options.mask);
            }

            var o = obj(v, options, true);

            if (helpers.isNumeric(v)) {
                value = v;
            } else {
                value = extractDate.call(o);
            }
        } else {
            value = Extract.call(options, v);
            // Percentage
            if (type === 'percentage' && (''+v).indexOf('%') !== -1) {
                value /= 100;
            }
            var o = options;
        }

        o.value = value;

        if (! o.type && type) {
            o.type = type;
        }

        if (returnObject) {
            return o;
        } else {
            return value;
        }
    }

    /**
     * Render
     */
    obj.render = function(value, options, fullMask) {
        if (isBlank(value)) {
            return value;
        }

        if (typeof(options) != 'object') {
            return value;
        } else {
            options = Object.assign({}, options);

            if (! options.options) {
                options.options = {};
            }
        }

        // Compatibility
        if (! options.mask && options.format) {
            options.mask = options.format;
        }

        // Remove []
        if (options.mask) {
            if (options.mask.indexOf(';') !== -1) {
                var t = options.mask.split(';');
                if (! fullMask) {
                    t[0] = t[0].replace(new RegExp(/_\)/g), '');
                    t[0] = t[0].replace(new RegExp(/_\(/g), '');
                }
                options.mask = t[0];
            }
            options.mask = options.mask.replace(new RegExp(/\[h]/),'|h|');
            options.mask = options.mask.replace(new RegExp(/\[.*?\]/),'');
            options.mask = options.mask.replace(new RegExp(/\|h\|/),'[h]');
        }

        var type = null;
        if (options.type == 'percent' || options.options.style == 'percent') {
            type = 'percentage';
        } else if (options.mask) {
            type = getType.call(options, options.mask);
        } else if (value instanceof Date) {
            type = 'datetime';
        }

        // Fill with blanks
        var fillWithBlanks = false;

        if (type =='datetime' || options.type == 'calendar') {
            var t = obj.getDateString(value, options.mask);
            if (t) {
                value = t;
            }
            if (options.mask && fullMask) {
                fillWithBlanks = true;
            }
        } else {
            // Percentage
            if (type === 'percentage') {
                value = obj.adjustPrecision(value*100);
            }
            // Number of decimal places
            if (typeof(value) === 'number') {
                var t = null;
                if (options.mask && fullMask && ((''+value).indexOf('e') === -1)) {
                    var d = getDecimal.call(options, options.mask);
                    if (options.mask.indexOf(d) !== -1) {
                        d = options.mask.split(d);
                        d = (''+d[1].match(/[0-9]+/g))
                        d = d.length;
                        t = value.toFixed(d);
                        let n = value.toString().split('.');
                        let fraction = n[1];
                        if (fraction && fraction.length > d && fraction[fraction.length-1] === '5') {
                            t = parseFloat(n[0] + '.' + fraction + '1').toFixed(d);
                        } else {
                            t = value.toFixed(d);
                        }
                    } else {
                        t = value.toFixed(0);
                    }
                } else if (options.locale && fullMask) {
                    // Append zeros
                    var d = (''+value).split('.');
                    if (options.options) {
                        if (typeof(d[1]) === 'undefined') {
                            d[1] = '';
                        }
                        var len = d[1].length;
                        if (options.options.minimumFractionDigits > len) {
                            for (var i = 0; i < options.options.minimumFractionDigits - len; i++) {
                                d[1] += '0';
                            }
                        }
                    }
                    if (! d[1].length) {
                        t = d[0]
                    } else {
                        t = d.join('.');
                    }
                    var len = d[1].length;
                    if (options.options && options.options.maximumFractionDigits < len) {
                        t = parseFloat(t).toFixed(options.options.maximumFractionDigits);
                    }
                } else {
                    t = toPlainString(value);
                }

                if (t !== null) {
                    value = t;
                    // Get decimal
                    getDecimal.call(options, options.mask);
                    // Replace to the correct decimal
                    if (options.options.decimal) {
                        value = value.replace('.', options.options.decimal);
                    }
                }
            } else {
                if (options.mask && fullMask) {
                    fillWithBlanks = true;
                }
            }
        }

        if (fillWithBlanks) {
            var s = options.mask.length - value.length;
            if (s > 0) {
                for (var i = 0; i < s; i++) {
                    value += ' ';
                }
            }
        }

        value = obj(value, options);

        // Numeric mask, number of zeros
        if (fullMask && type === 'numeric') {
            var maskZeros = options.mask.match(new RegExp(/^[0]+$/gm));
            if (maskZeros && maskZeros.length === 1) {
                var maskLength = maskZeros[0].length;
                if (maskLength > 3) {
                    value = '' + value;
                    while (value.length < maskLength) {
                        value = '0' + value;
                    }
                }
            }
        }

        return value;
    }

    obj.set = function(e, m) {
        if (m) {
            e.setAttribute('data-mask', m);
            // Reset the value
            var event = new Event('input', {
                bubbles: true,
                cancelable: true,
            });
            e.dispatchEvent(event);
        }
    }

    // Helper to extract date from a string
    obj.extractDateFromString = function (date, format) {
        var o = obj(date, { mask: format }, true);

        // Check if in format Excel (Need difference with format date or type detected is numeric)
        if (date > 0 && Number(date) == date && (o.values.join("") !== o.value || o.type == "numeric")) {
            var d = new Date(Math.round((date - 25569) * 86400 * 1000));
            return d.getFullYear() + "-" + helpers.two(d.getMonth()) + "-" + helpers.two(d.getDate()) + ' 00:00:00';
        }

        var complete = false;

        if (o.values && o.values.length === o.tokens.length && o.values[o.values.length - 1].length >= o.tokens[o.tokens.length - 1].length) {
            complete = true;
        }

        if (o.date[0] && o.date[1] && (o.date[2] || complete)) {
            if (!o.date[2]) {
                o.date[2] = 1;
            }

            return o.date[0] + '-' + helpers.two(o.date[1]) + '-' + helpers.two(o.date[2]) + ' ' + helpers.two(o.date[3]) + ':' + helpers.two(o.date[4]) + ':' + helpers.two(o.date[5]);
        }

        return '';
    }

    // Helper to convert date into string
    obj.getDateString = function (value, options) {
        if (!options) {
            var options = {};
        }

        // Labels
        if (options && typeof (options) == 'object') {
            if (options.format) {
                var format = options.format;
            } else if (options.mask) {
                var format = options.mask;
            }
        } else {
            var format = options;
        }

        if (!format) {
            format = 'YYYY-MM-DD';
        }

        // Convert to number of hours
        if (format.indexOf('[h]') >= 0) {
            var result = 0;
            if (value && helpers.isNumeric(value)) {
                result = parseFloat(24 * Number(value));
                if (format.indexOf('mm') >= 0) {
                    var h = ('' + result).split('.');
                    if (h[1]) {
                        var d = 60 * parseFloat('0.' + h[1])
                        d = parseFloat(d.toFixed(2));
                    } else {
                        var d = 0;
                    }
                    result = parseInt(h[0]) + ':' + helpers.two(d);
                }
            }
            return result;
        }

        // Date instance
        if (value instanceof Date) {
            value = helpers_date.now(value);
        } else if (value && helpers.isNumeric(value)) {
            value = helpers_date.numToDate(value);
        }

        // Tokens
        var tokens = ['DAY', 'WD', 'DDDD', 'DDD', 'DD', 'D', 'Q', 'HH24', 'HH12', 'HH', 'H', 'AM/PM', 'MI', 'SS', 'MS', 'YYYY', 'YYY', 'YY', 'Y', 'MONTH', 'MON', 'MMMMM', 'MMMM', 'MMM', 'MM', 'M', '.'];

        // Expression to extract all tokens from the string
        var e = new RegExp(tokens.join('|'), 'gi');
        // Extract
        var t = format.match(e);

        // Compatibility with excel
        for (var i = 0; i < t.length; i++) {
            if (t[i].toUpperCase() == 'MM') {
                // Not a month, correct to minutes
                if (t[i - 1] && t[i - 1].toUpperCase().indexOf('H') >= 0) {
                    t[i] = 'mi';
                } else if (t[i - 2] && t[i - 2].toUpperCase().indexOf('H') >= 0) {
                    t[i] = 'mi';
                } else if (t[i + 1] && t[i + 1].toUpperCase().indexOf('S') >= 0) {
                    t[i] = 'mi';
                } else if (t[i + 2] && t[i + 2].toUpperCase().indexOf('S') >= 0) {
                    t[i] = 'mi';
                }
            }
        }

        // Object
        var o = {
            tokens: t
        }

        // Value
        if (value) {
            var d = '' + value;
            var splitStr = (d.indexOf('T') !== -1) ? 'T' : ' ';
            d = d.split(splitStr);

            var h = 0;
            var m = 0;
            var s = 0;

            if (d[1]) {
                h = d[1].split(':');
                m = h[1] ? h[1] : 0;
                s = h[2] ? h[2] : 0;
                h = h[0] ? h[0] : 0;
            }

            d = d[0].split('-');

            let day = new Date(d[0], d[1], 0).getDate();

            if (d[0] && d[1] && d[2] && d[0] > 0 && d[1] > 0 && d[1] < 13 && d[2] > 0 && d[2] <= day) {

                // Data
                o.data = [d[0], d[1], d[2], h, m, s];

                // Value
                o.value = [];

                // Calendar instance
                var calendar = new Date(o.data[0], o.data[1] - 1, o.data[2], o.data[3], o.data[4], o.data[5]);

                // Get method
                var get = function (i) {
                    // Token
                    var t = this.tokens[i];
                    // Case token
                    var s = t.toUpperCase();
                    var v = null;

                    if (s === 'YYYY') {
                        v = this.data[0];
                    } else if (s === 'YYY') {
                        v = this.data[0].substring(1, 4);
                    } else if (s === 'YY') {
                        v = this.data[0].substring(2, 4);
                    } else if (s === 'Y') {
                        v = this.data[0].substring(3, 4);
                    } else if (t === 'MON') {
                        v = helpers_date.months[calendar.getMonth()].substr(0, 3).toUpperCase();
                    } else if (t === 'mon') {
                        v = helpers_date.months[calendar.getMonth()].substr(0, 3).toLowerCase();
                    } else if (t === 'MONTH') {
                        v = helpers_date.months[calendar.getMonth()].toUpperCase();
                    } else if (t === 'month') {
                        v = helpers_date.months[calendar.getMonth()].toLowerCase();
                    } else if (s === 'MMMMM') {
                        v = helpers_date.months[calendar.getMonth()].substr(0, 1);
                    } else if (s === 'MMMM' || t === 'Month') {
                        v = helpers_date.months[calendar.getMonth()];
                    } else if (s === 'MMM' || t == 'Mon') {
                        v = helpers_date.months[calendar.getMonth()].substr(0, 3);
                    } else if (s === 'MM') {
                        v = helpers.two(this.data[1]);
                    } else if (s === 'M') {
                        v = calendar.getMonth() + 1;
                    } else if (t === 'DAY') {
                        v = helpers_date.weekdays[calendar.getDay()].toUpperCase();
                    } else if (t === 'day') {
                        v = helpers_date.weekdays[calendar.getDay()].toLowerCase();
                    } else if (s === 'DDDD' || t == 'Day') {
                        v = helpers_date.weekdays[calendar.getDay()];
                    } else if (s === 'DDD') {
                        v = helpers_date.weekdays[calendar.getDay()].substr(0, 3);
                    } else if (s === 'DD') {
                        v = helpers.two(this.data[2]);
                    } else if (s === 'D') {
                        v = parseInt(this.data[2]);
                    } else if (s === 'Q') {
                        v = Math.floor((calendar.getMonth() + 3) / 3);
                    } else if (s === 'HH24' || s === 'HH') {
                        v = this.data[3];
                        if (v > 12 && this.tokens.indexOf('am/pm') !== -1) {
                            v -= 12;
                        }
                        v = helpers.two(v);
                    } else if (s === 'HH12') {
                        if (this.data[3] > 12) {
                            v = helpers.two(this.data[3] - 12);
                        } else {
                            v = helpers.two(this.data[3]);
                        }
                    } else if (s === 'H') {
                        v = this.data[3];
                        if (v > 12 && this.tokens.indexOf('am/pm') !== -1) {
                            v -= 12;
                            v = helpers.two(v);
                        }
                    } else if (s === 'MI') {
                        v = helpers.two(this.data[4]);
                    } else if (s === 'SS') {
                        v = helpers.two(this.data[5]);
                    } else if (s === 'MS') {
                        v = calendar.getMilliseconds();
                    } else if (s === 'AM/PM') {
                        if (this.data[3] >= 12) {
                            v = 'PM';
                        } else {
                            v = 'AM';
                        }
                    } else if (s === 'WD') {
                        v = helpers_date.weekdays[calendar.getDay()];
                    }

                    if (v === null) {
                        this.value[i] = this.tokens[i];
                    } else {
                        this.value[i] = v;
                    }
                }

                for (var i = 0; i < o.tokens.length; i++) {
                    get.call(o, i);
                }
                // Put pieces together
                value = o.value.join('');
            } else {
                value = '';
            }
        }

        return value;
    }

    return obj;
}

/* harmony default export */ var mask = (Mask());

;// CONCATENATED MODULE: ./src/plugins/calendar.js







function Calendar() {
    var Component = (function (el, options) {
        // Already created, update options
        if (el.calendar) {
            return el.calendar.setOptions(options, true);
        }

        // New instance
        var obj = {type: 'calendar'};
        obj.options = {};

        // Date
        obj.date = null;

        /**
         * Update options
         */
        obj.setOptions = function (options, reset) {
            // Default configuration
            var defaults = {
                // Render type: [ default | year-month-picker ]
                type: 'default',
                // Restrictions
                validRange: null,
                // Starting weekday - 0 for sunday, 6 for saturday
                startingDay: null,
                // Date format
                format: 'DD/MM/YYYY',
                // Allow keyboard date entry
                readonly: true,
                // Today is default
                today: false,
                // Show timepicker
                time: false,
                // Show the reset button
                resetButton: true,
                // Placeholder
                placeholder: '',
                // Translations can be done here
                months: helpers_date.monthsShort,
                monthsFull: helpers_date.months,
                weekdays: helpers_date.weekdays,
                textDone: dictionary.translate('Done'),
                textReset: dictionary.translate('Reset'),
                textUpdate: dictionary.translate('Update'),
                // Value
                value: null,
                // Fullscreen (this is automatic set for screensize < 800)
                fullscreen: false,
                // Create the calendar closed as default
                opened: false,
                // Events
                onopen: null,
                onclose: null,
                onchange: null,
                onupdate: null,
                // Internal mode controller
                mode: null,
                position: null,
                // Data type
                dataType: null,
                // Controls
                controls: true,
                // Auto select
                autoSelect: true,
            }

            // Loop through our object
            for (var property in defaults) {
                if (options && options.hasOwnProperty(property)) {
                    obj.options[property] = options[property];
                } else {
                    if (typeof (obj.options[property]) == 'undefined' || reset === true) {
                        obj.options[property] = defaults[property];
                    }
                }
            }

            // Reset button
            if (obj.options.resetButton == false) {
                calendarReset.style.display = 'none';
            } else {
                calendarReset.style.display = '';
            }

            // Readonly
            if (obj.options.readonly) {
                el.setAttribute('readonly', 'readonly');
            } else {
                el.removeAttribute('readonly');
            }

            // Placeholder
            if (obj.options.placeholder) {
                el.setAttribute('placeholder', obj.options.placeholder);
            } else {
                el.removeAttribute('placeholder');
            }

            if (helpers.isNumeric(obj.options.value) && obj.options.value > 0) {
                obj.options.value = Component.numToDate(obj.options.value);
                // Data type numeric
                obj.options.dataType = 'numeric';
            }

            // Texts
            calendarReset.innerHTML = obj.options.textReset;
            calendarConfirm.innerHTML = obj.options.textDone;
            calendarControlsUpdateButton.innerHTML = obj.options.textUpdate;

            // Define mask
            el.setAttribute('data-mask', obj.options.format.toLowerCase());

            // Value
            if (!obj.options.value && obj.options.today) {
                var value = Component.now();
            } else {
                var value = obj.options.value;
            }

            // Set internal date
            if (value) {
                // Force the update
                obj.options.value = null;
                // New value
                obj.setValue(value);
            }

            return obj;
        }

        /**
         * Open the calendar
         */
        obj.open = function (value) {
            if (!calendar.classList.contains('jcalendar-focus')) {
                if (!calendar.classList.contains('jcalendar-inline')) {
                    // Current
                    Component.current = obj;
                    // Start tracking
                    tracking(obj, true);
                    // Create the days
                    obj.getDays();
                    // Render months
                    if (obj.options.type == 'year-month-picker') {
                        obj.getMonths();
                    }
                    // Get time
                    if (obj.options.time) {
                        calendarSelectHour.value = obj.date[3];
                        calendarSelectMin.value = obj.date[4];
                    }

                    // Show calendar
                    calendar.classList.add('jcalendar-focus');

                    // Get the position of the corner helper
                    if (helpers.getWindowWidth() < 800 || obj.options.fullscreen) {
                        calendar.classList.add('jcalendar-fullsize');
                        // Animation
                        animation.slideBottom(calendarContent, 1);
                    } else {
                        calendar.classList.remove('jcalendar-fullsize');

                        var rect = el.getBoundingClientRect();
                        var rectContent = calendarContent.getBoundingClientRect();

                        if (obj.options.position) {
                            calendarContainer.style.position = 'fixed';
                            if (window.innerHeight < rect.bottom + rectContent.height) {
                                calendarContainer.style.top = (rect.top - (rectContent.height + 2)) + 'px';
                            } else {
                                calendarContainer.style.top = (rect.top + rect.height + 2) + 'px';
                            }
                            calendarContainer.style.left = rect.left + 'px';
                        } else {
                            if (window.innerHeight < rect.bottom + rectContent.height) {
                                var d = -1 * (rect.height + rectContent.height + 2);
                                if (d + rect.top < 0) {
                                    d = -1 * (rect.top + rect.height);
                                }
                                calendarContainer.style.top = d + 'px';
                            } else {
                                calendarContainer.style.top = 2 + 'px';
                            }

                            if (window.innerWidth < rect.left + rectContent.width) {
                                var d = window.innerWidth - (rect.left + rectContent.width + 20);
                                calendarContainer.style.left = d + 'px';
                            } else {
                                calendarContainer.style.left = '0px';
                            }
                        }
                    }

                    // Events
                    if (typeof (obj.options.onopen) == 'function') {
                        obj.options.onopen(el);
                    }
                }
            }
        }

        obj.close = function (ignoreEvents, update) {
            if (obj.options.autoSelect !== true && typeof(update) === 'undefined') {
                update = false;
            }
            if (calendar.classList.contains('jcalendar-focus')) {
                if (update !== false) {
                    var element = calendar.querySelector('.jcalendar-selected');

                    if (typeof (update) == 'string') {
                        var value = update;
                    } else if (!element || element.classList.contains('jcalendar-disabled')) {
                        var value = obj.options.value
                    } else {
                        var value = obj.getValue();
                    }

                    obj.setValue(value);
                } else {
                    let value = obj.options.value || '';
                    obj.options.value = null;
                    obj.setValue(value)
                }

                // Events
                if (!ignoreEvents && typeof (obj.options.onclose) == 'function') {
                    obj.options.onclose(el);
                }
                // Hide
                calendar.classList.remove('jcalendar-focus');
                // Stop tracking
                tracking(obj, false);
                // Current
                Component.current = null;
            }

            return obj.options.value;
        }

        obj.prev = function () {
            // Check if the visualization is the days picker or years picker
            if (obj.options.mode == 'years') {
                obj.date[0] = obj.date[0] - 12;

                // Update picker table of days
                obj.getYears();
            } else if (obj.options.mode == 'months') {
                obj.date[0] = parseInt(obj.date[0]) - 1;
                // Update picker table of months
                obj.getMonths();
            } else {
                // Go to the previous month
                if (obj.date[1] < 2) {
                    obj.date[0] = obj.date[0] - 1;
                    obj.date[1] = 12;
                } else {
                    obj.date[1] = obj.date[1] - 1;
                }

                // Update picker table of days
                obj.getDays();
            }
        }

        obj.next = function () {
            // Check if the visualization is the days picker or years picker
            if (obj.options.mode == 'years') {
                obj.date[0] = parseInt(obj.date[0]) + 12;

                // Update picker table of days
                obj.getYears();
            } else if (obj.options.mode == 'months') {
                obj.date[0] = parseInt(obj.date[0]) + 1;
                // Update picker table of months
                obj.getMonths();
            } else {
                // Go to the previous month
                if (obj.date[1] > 11) {
                    obj.date[0] = parseInt(obj.date[0]) + 1;
                    obj.date[1] = 1;
                } else {
                    obj.date[1] = parseInt(obj.date[1]) + 1;
                }

                // Update picker table of days
                obj.getDays();
            }
        }

        /**
         * Set today
         */
        obj.setToday = function () {
            // Today
            var value = new Date().toISOString().substr(0, 10);
            // Change value
            obj.setValue(value);
            // Value
            return value;
        }

        obj.setValue = function (val) {
            if (!val) {
                val = '' + val;
            }
            // Values
            var newValue = val;
            var oldValue = obj.options.value;

            if (oldValue != newValue) {
                // Set label
                if (!newValue) {
                    obj.date = null;
                    var val = '';
                    el.classList.remove('jcalendar_warning');
                    el.title = '';
                } else {
                    var value = obj.setLabel(newValue, obj.options);
                    var date = newValue.split(' ');
                    if (!date[1]) {
                        date[1] = '00:00:00';
                    }
                    var time = date[1].split(':')
                    var date = date[0].split('-');
                    var y = parseInt(date[0]);
                    var m = parseInt(date[1]);
                    var d = parseInt(date[2]);
                    var h = parseInt(time[0]);
                    var i = parseInt(time[1]);
                    obj.date = [y, m, d, h, i, 0];
                    var val = obj.setLabel(newValue, obj.options);

                    // Current selection day
                    var current = Component.now(new Date(y, m - 1, d), true);

                    // Available ranges
                    if (obj.options.validRange) {
                        if (!obj.options.validRange[0] || current >= obj.options.validRange[0]) {
                            var test1 = true;
                        } else {
                            var test1 = false;
                        }

                        if (!obj.options.validRange[1] || current <= obj.options.validRange[1]) {
                            var test2 = true;
                        } else {
                            var test2 = false;
                        }

                        if (!(test1 && test2)) {
                            el.classList.add('jcalendar_warning');
                            el.title = dictionary.translate('Date outside the valid range');
                        } else {
                            el.classList.remove('jcalendar_warning');
                            el.title = '';
                        }
                    } else {
                        el.classList.remove('jcalendar_warning');
                        el.title = '';
                    }
                }

                // New value
                obj.options.value = newValue;

                if (typeof (obj.options.onchange) == 'function') {
                    obj.options.onchange(el, newValue, oldValue);
                }

                // Lemonade JS
                if (el.value != val) {
                    el.value = val;
                    if (typeof (el.oninput) == 'function') {
                        el.oninput({
                            type: 'input',
                            target: el,
                            value: el.value
                        });
                    }
                }
            }

            if (obj.date) {
                obj.getDays();
                // Render months
                if (obj.options.type == 'year-month-picker') {
                    obj.getMonths();
                }
            }
        }

        obj.getValue = function () {
            if (obj.date) {
                if (obj.options.time) {
                    return helpers.two(obj.date[0]) + '-' + helpers.two(obj.date[1]) + '-' + helpers.two(obj.date[2]) + ' ' + helpers.two(obj.date[3]) + ':' + helpers.two(obj.date[4]) + ':' + helpers.two(0);
                } else {
                    return helpers.two(obj.date[0]) + '-' + helpers.two(obj.date[1]) + '-' + helpers.two(obj.date[2]) + ' ' + helpers.two(0) + ':' + helpers.two(0) + ':' + helpers.two(0);
                }
            } else {
                return "";
            }
        }

        /**
         *  Calendar
         */
        obj.update = function (element, v) {
            if (element.classList.contains('jcalendar-disabled')) {
                // Do nothing
            } else {
                var elements = calendar.querySelector('.jcalendar-selected');
                if (elements) {
                    elements.classList.remove('jcalendar-selected');
                }
                element.classList.add('jcalendar-selected');

                if (element.classList.contains('jcalendar-set-month')) {
                    obj.date[1] = v;
                    obj.date[2] = 1; // first day of the month
                } else {
                    obj.date[2] = element.innerText;
                }

                if (!obj.options.time) {
                    obj.close(null, true);
                } else {
                    obj.date[3] = calendarSelectHour.value;
                    obj.date[4] = calendarSelectMin.value;
                }
            }

            // Update
            updateActions();
        }

        /**
         * Set to blank
         */
        obj.reset = function () {
            // Close calendar
            obj.setValue('');
            obj.date = null;
            obj.close(false, false);
        }

        /**
         * Get calendar days
         */
        obj.getDays = function () {
            // Mode
            obj.options.mode = 'days';

            // Setting current values in case of NULLs
            var date = new Date();

            // Current selection
            var year = obj.date && helpers.isNumeric(obj.date[0]) ? obj.date[0] : parseInt(date.getFullYear());
            var month = obj.date && helpers.isNumeric(obj.date[1]) ? obj.date[1] : parseInt(date.getMonth()) + 1;
            var day = obj.date && helpers.isNumeric(obj.date[2]) ? obj.date[2] : parseInt(date.getDate());
            var hour = obj.date && helpers.isNumeric(obj.date[3]) ? obj.date[3] : parseInt(date.getHours());
            var min = obj.date && helpers.isNumeric(obj.date[4]) ? obj.date[4] : parseInt(date.getMinutes());

            // Selection container
            obj.date = [year, month, day, hour, min, 0];

            // Update title
            calendarLabelYear.innerHTML = year;
            calendarLabelMonth.innerHTML = obj.options.months[month - 1];

            // Current month and Year
            var isCurrentMonthAndYear = (date.getMonth() == month - 1) && (date.getFullYear() == year) ? true : false;
            var currentDay = date.getDate();

            // Number of days in the month
            var date = new Date(year, month, 0, 0, 0);
            var numberOfDays = date.getDate();

            // First day
            var date = new Date(year, month - 1, 0, 0, 0);
            var firstDay = date.getDay() + 1;

            // Index value
            var index = obj.options.startingDay || 0;

            // First of day relative to the starting calendar weekday
            firstDay = firstDay - index;

            // Reset table
            calendarBody.innerHTML = '';

            // Weekdays Row
            var row = document.createElement('tr');
            row.setAttribute('align', 'center');
            calendarBody.appendChild(row);

            // Create weekdays row
            for (var i = 0; i < 7; i++) {
                var cell = document.createElement('td');
                cell.classList.add('jcalendar-weekday')
                cell.innerHTML = obj.options.weekdays[index].substr(0, 1);
                row.appendChild(cell);
                // Next week day
                index++;
                // Restart index
                if (index > 6) {
                    index = 0;
                }
            }

            // Index of days
            var index = 0;
            var d = 0;

            // Calendar table
            for (var j = 0; j < 6; j++) {
                // Reset cells container
                var row = document.createElement('tr');
                row.setAttribute('align', 'center');
                row.style.height = '34px';

                // Create cells
                for (var i = 0; i < 7; i++) {
                    // Create cell
                    var cell = document.createElement('td');
                    cell.classList.add('jcalendar-set-day');

                    if (index >= firstDay && index < (firstDay + numberOfDays)) {
                        // Day cell
                        d++;
                        cell.innerHTML = d;

                        // Selected
                        if (d == day) {
                            cell.classList.add('jcalendar-selected');
                        }

                        // Current selection day is today
                        if (isCurrentMonthAndYear && currentDay == d) {
                            cell.style.fontWeight = 'bold';
                        }

                        // Current selection day
                        var current = Component.now(new Date(year, month - 1, d), true);

                        // Available ranges
                        if (obj.options.validRange) {
                            if (!obj.options.validRange[0] || current >= obj.options.validRange[0]) {
                                var test1 = true;
                            } else {
                                var test1 = false;
                            }

                            if (!obj.options.validRange[1] || current <= obj.options.validRange[1]) {
                                var test2 = true;
                            } else {
                                var test2 = false;
                            }

                            if (!(test1 && test2)) {
                                cell.classList.add('jcalendar-disabled');
                            }
                        }
                    }
                    // Day cell
                    row.appendChild(cell);
                    // Index
                    index++;
                }

                // Add cell to the calendar body
                calendarBody.appendChild(row);
            }

            // Show time controls
            if (obj.options.time) {
                calendarControlsTime.style.display = '';
            } else {
                calendarControlsTime.style.display = 'none';
            }

            // Update
            updateActions();
        }

        obj.getMonths = function () {
            // Mode
            obj.options.mode = 'months';

            // Loading month labels
            var months = obj.options.months;

            // Value
            var value = obj.options.value;

            // Current date
            var date = new Date();
            var currentYear = parseInt(date.getFullYear());
            var currentMonth = parseInt(date.getMonth()) + 1;
            var selectedYear = obj.date && helpers.isNumeric(obj.date[0]) ? obj.date[0] : currentYear;
            var selectedMonth = obj.date && helpers.isNumeric(obj.date[1]) ? obj.date[1] : currentMonth;

            // Update title
            calendarLabelYear.innerHTML = obj.date[0];
            calendarLabelMonth.innerHTML = months[selectedMonth - 1];

            // Table
            var table = document.createElement('table');
            table.setAttribute('width', '100%');

            // Row
            var row = null;

            // Calendar table
            for (var i = 0; i < 12; i++) {
                if (!(i % 4)) {
                    // Reset cells container
                    var row = document.createElement('tr');
                    row.setAttribute('align', 'center');
                    table.appendChild(row);
                }

                // Create cell
                var cell = document.createElement('td');
                cell.classList.add('jcalendar-set-month');
                cell.setAttribute('data-value', i + 1);
                cell.innerText = months[i];

                if (obj.options.validRange) {
                    var current = selectedYear + '-' + helpers.two(i + 1);
                    if (!obj.options.validRange[0] || current >= obj.options.validRange[0].substr(0, 7)) {
                        var test1 = true;
                    } else {
                        var test1 = false;
                    }

                    if (!obj.options.validRange[1] || current <= obj.options.validRange[1].substr(0, 7)) {
                        var test2 = true;
                    } else {
                        var test2 = false;
                    }

                    if (!(test1 && test2)) {
                        cell.classList.add('jcalendar-disabled');
                    }
                }

                if (i + 1 == selectedMonth) {
                    cell.classList.add('jcalendar-selected');
                }

                if (currentYear == selectedYear && i + 1 == currentMonth) {
                    cell.style.fontWeight = 'bold';
                }

                row.appendChild(cell);
            }

            calendarBody.innerHTML = '<tr><td colspan="7"></td></tr>';
            calendarBody.children[0].children[0].appendChild(table);

            // Update
            updateActions();
        }

        obj.getYears = function () {
            // Mode
            obj.options.mode = 'years';

            // Current date
            var date = new Date();
            var currentYear = date.getFullYear();
            var selectedYear = obj.date && helpers.isNumeric(obj.date[0]) ? obj.date[0] : parseInt(date.getFullYear());

            // Array of years
            var y = [];
            for (var i = 0; i < 25; i++) {
                y[i] = parseInt(obj.date[0]) + (i - 12);
            }

            // Assembling the year tables
            var table = document.createElement('table');
            table.setAttribute('width', '100%');

            for (var i = 0; i < 25; i++) {
                if (!(i % 5)) {
                    // Reset cells container
                    var row = document.createElement('tr');
                    row.setAttribute('align', 'center');
                    table.appendChild(row);
                }

                // Create cell
                var cell = document.createElement('td');
                cell.classList.add('jcalendar-set-year');
                cell.innerText = y[i];

                if (selectedYear == y[i]) {
                    cell.classList.add('jcalendar-selected');
                }

                if (currentYear == y[i]) {
                    cell.style.fontWeight = 'bold';
                }

                row.appendChild(cell);
            }

            calendarBody.innerHTML = '<tr><td colspan="7"></td></tr>';
            calendarBody.firstChild.firstChild.appendChild(table);

            // Update
            updateActions();
        }

        obj.setLabel = function (value, mixed) {
            return Component.getDateString(value, mixed);
        }

        obj.fromFormatted = function (value, format) {
            return Component.extractDateFromString(value, format);
        }

        var mouseUpControls = function (e) {
            var element = helpers.findElement(e.target, 'jcalendar-container');
            if (element) {
                var action = e.target.className;

                // Object id
                if (action == 'jcalendar-prev') {
                    obj.prev();
                } else if (action == 'jcalendar-next') {
                    obj.next();
                } else if (action == 'jcalendar-month') {
                    obj.getMonths();
                } else if (action == 'jcalendar-year') {
                    obj.getYears();
                } else if (action == 'jcalendar-set-year') {
                    obj.date[0] = e.target.innerText;
                    if (obj.options.type == 'year-month-picker') {
                        obj.getMonths();
                    } else {
                        obj.getDays();
                    }
                } else if (e.target.classList.contains('jcalendar-set-month')) {
                    var month = parseInt(e.target.getAttribute('data-value'));
                    if (obj.options.type == 'year-month-picker') {
                        obj.update(e.target, month);
                    } else {
                        obj.date[1] = month;
                        obj.getDays();
                    }
                } else if (action == 'jcalendar-confirm' || action == 'jcalendar-update' || action == 'jcalendar-close') {
                    obj.close(null, true);
                } else if (action == 'jcalendar-backdrop') {
                    obj.close(false, false);
                } else if (action == 'jcalendar-reset') {
                    obj.reset();
                } else if (e.target.classList.contains('jcalendar-set-day') && e.target.innerText) {
                    obj.update(e.target);
                }
            } else {
                obj.close(false, false);
            }
        }

        var keyUpControls = function (e) {
            if (e.target.value && e.target.value.length > 3) {
                var test = Component.extractDateFromString(e.target.value, obj.options.format);
                if (test) {
                    obj.setValue(test);
                }
            }
        }

        // Update actions button
        var updateActions = function () {
            var currentDay = calendar.querySelector('.jcalendar-selected');

            if (currentDay && currentDay.classList.contains('jcalendar-disabled')) {
                calendarControlsUpdateButton.setAttribute('disabled', 'disabled');
                calendarSelectHour.setAttribute('disabled', 'disabled');
                calendarSelectMin.setAttribute('disabled', 'disabled');
            } else {
                calendarControlsUpdateButton.removeAttribute('disabled');
                calendarSelectHour.removeAttribute('disabled');
                calendarSelectMin.removeAttribute('disabled');
            }

            // Event
            if (typeof (obj.options.onupdate) == 'function') {
                obj.options.onupdate(el, obj.getValue());
            }
        }

        var calendar = null;
        var calendarReset = null;
        var calendarConfirm = null;
        var calendarContainer = null;
        var calendarContent = null;
        var calendarLabelYear = null;
        var calendarLabelMonth = null;
        var calendarTable = null;
        var calendarBody = null;

        var calendarControls = null;
        var calendarControlsTime = null;
        var calendarControlsUpdate = null;
        var calendarControlsUpdateButton = null;
        var calendarSelectHour = null;
        var calendarSelectMin = null;

        var init = function () {
            // Get value from initial element if that is an input
            if (el.tagName == 'INPUT' && el.value) {
                options.value = el.value;
            }

            // Calendar DOM elements
            calendarReset = document.createElement('div');
            calendarReset.className = 'jcalendar-reset';

            calendarConfirm = document.createElement('div');
            calendarConfirm.className = 'jcalendar-confirm';

            calendarControls = document.createElement('div');
            calendarControls.className = 'jcalendar-controls'
            calendarControls.style.borderBottom = '1px solid #ddd';
            calendarControls.appendChild(calendarReset);
            calendarControls.appendChild(calendarConfirm);

            calendarContainer = document.createElement('div');
            calendarContainer.className = 'jcalendar-container';
            calendarContent = document.createElement('div');
            calendarContent.className = 'jcalendar-content';
            calendarContainer.appendChild(calendarContent);

            // Main element
            if (el.tagName == 'DIV') {
                calendar = el;
                calendar.classList.add('jcalendar-inline');
            } else {
                // Add controls to the screen
                calendarContent.appendChild(calendarControls);

                calendar = document.createElement('div');
                calendar.className = 'jcalendar';
            }
            calendar.classList.add('jcalendar-container');
            calendar.appendChild(calendarContainer);

            // Table container
            var calendarTableContainer = document.createElement('div');
            calendarTableContainer.className = 'jcalendar-table';
            calendarContent.appendChild(calendarTableContainer);

            // Previous button
            var calendarHeaderPrev = document.createElement('td');
            calendarHeaderPrev.setAttribute('colspan', '2');
            calendarHeaderPrev.className = 'jcalendar-prev';

            // Header with year and month
            calendarLabelYear = document.createElement('span');
            calendarLabelYear.className = 'jcalendar-year';
            calendarLabelMonth = document.createElement('span');
            calendarLabelMonth.className = 'jcalendar-month';

            var calendarHeaderTitle = document.createElement('td');
            calendarHeaderTitle.className = 'jcalendar-header';
            calendarHeaderTitle.setAttribute('colspan', '3');
            calendarHeaderTitle.appendChild(calendarLabelMonth);
            calendarHeaderTitle.appendChild(calendarLabelYear);

            var calendarHeaderNext = document.createElement('td');
            calendarHeaderNext.setAttribute('colspan', '2');
            calendarHeaderNext.className = 'jcalendar-next';

            var calendarHeader = document.createElement('thead');
            var calendarHeaderRow = document.createElement('tr');
            calendarHeaderRow.appendChild(calendarHeaderPrev);
            calendarHeaderRow.appendChild(calendarHeaderTitle);
            calendarHeaderRow.appendChild(calendarHeaderNext);
            calendarHeader.appendChild(calendarHeaderRow);

            calendarTable = document.createElement('table');
            calendarBody = document.createElement('tbody');
            calendarTable.setAttribute('cellpadding', '0');
            calendarTable.setAttribute('cellspacing', '0');
            calendarTable.appendChild(calendarHeader);
            calendarTable.appendChild(calendarBody);
            calendarTableContainer.appendChild(calendarTable);

            calendarSelectHour = document.createElement('select');
            calendarSelectHour.className = 'jcalendar-select';
            calendarSelectHour.onchange = function () {
                obj.date[3] = this.value;

                // Event
                if (typeof (obj.options.onupdate) == 'function') {
                    obj.options.onupdate(el, obj.getValue());
                }
            }

                for (var i = 0; i < 24; i++) {
                    var element = document.createElement('option');
                    element.value = i;
                    element.innerHTML = helpers.two(i);
                    calendarSelectHour.appendChild(element);
                }

            calendarSelectMin = document.createElement('select');
            calendarSelectMin.className = 'jcalendar-select';
            calendarSelectMin.onchange = function () {
                obj.date[4] = this.value;

                // Event
                if (typeof (obj.options.onupdate) == 'function') {
                    obj.options.onupdate(el, obj.getValue());
                }
            }

            for (var i = 0; i < 60; i++) {
                var element = document.createElement('option');
                element.value = i;
                element.innerHTML = helpers.two(i);
                calendarSelectMin.appendChild(element);
            }

            // Footer controls
            var calendarControlsFooter = document.createElement('div');
            calendarControlsFooter.className = 'jcalendar-controls';

            calendarControlsTime = document.createElement('div');
            calendarControlsTime.className = 'jcalendar-time';
            calendarControlsTime.style.maxWidth = '140px';
            calendarControlsTime.appendChild(calendarSelectHour);
            calendarControlsTime.appendChild(calendarSelectMin);

            calendarControlsUpdateButton = document.createElement('button');
            calendarControlsUpdateButton.setAttribute('type', 'button');
            calendarControlsUpdateButton.className = 'jcalendar-update';

            calendarControlsUpdate = document.createElement('div');
            calendarControlsUpdate.style.flexGrow = '10';
            calendarControlsUpdate.appendChild(calendarControlsUpdateButton);
            calendarControlsFooter.appendChild(calendarControlsTime);

            // Only show the update button for input elements
            if (el.tagName == 'INPUT') {
                calendarControlsFooter.appendChild(calendarControlsUpdate);
            }

            calendarContent.appendChild(calendarControlsFooter);

            var calendarBackdrop = document.createElement('div');
            calendarBackdrop.className = 'jcalendar-backdrop';
            calendar.appendChild(calendarBackdrop);

            // Handle events
            el.addEventListener("keyup", keyUpControls);

            // Add global events
            calendar.addEventListener("swipeleft", function (e) {
                animation.slideLeft(calendarTable, 0, function () {
                    obj.next();
                    animation.slideRight(calendarTable, 1);
                });
                e.preventDefault();
                e.stopPropagation();
            });

            calendar.addEventListener("swiperight", function (e) {
                animation.slideRight(calendarTable, 0, function () {
                    obj.prev();
                    animation.slideLeft(calendarTable, 1);
                });
                e.preventDefault();
                e.stopPropagation();
            });

            if ('ontouchend' in document.documentElement === true) {
                calendar.addEventListener("touchend", mouseUpControls);
                el.addEventListener("touchend", obj.open);
            } else {
                calendar.addEventListener("mouseup", mouseUpControls);
                el.addEventListener("mouseup", obj.open);
            }

            // Global controls
            if (!Component.hasEvents) {
                // Execute only one time
                Component.hasEvents = true;
                // Enter and Esc
                document.addEventListener("keydown", Component.keydown);
            }

            // Set configuration
            obj.setOptions(options);

            // Append element to the DOM
            if (el.tagName == 'INPUT') {
                el.parentNode.insertBefore(calendar, el.nextSibling);
                // Add properties
                el.setAttribute('autocomplete', 'off');
                // Element
                el.classList.add('jcalendar-input');
                // Value
                el.value = obj.setLabel(obj.getValue(), obj.options);
            } else {
                // Get days
                obj.getDays();
                // Hour
                if (obj.options.time) {
                    calendarSelectHour.value = obj.date[3];
                    calendarSelectMin.value = obj.date[4];
                }
            }

            // Default opened
            if (obj.options.opened == true) {
                obj.open();
            }

            // Controls
            if (obj.options.controls == false) {
                calendarContainer.classList.add('jcalendar-hide-controls');
            }

            // Change method
            el.change = obj.setValue;

            // Global generic value handler
            el.val = function (val) {
                if (val === undefined) {
                    return obj.getValue();
                } else {
                    obj.setValue(val);
                }
            }

            // Keep object available from the node
            el.calendar = calendar.calendar = obj;
        }

        init();

        return obj;
    });

    Component.keydown = function (e) {
        var calendar = null;
        if (calendar = Component.current) {
            if (e.which == 13) {
                // ENTER
                calendar.close(false, true);
            } else if (e.which == 27) {
                // ESC
                calendar.close(false, false);
            }
        }
    }

    Component.prettify = function (d, texts) {
        if (!texts) {
            var texts = {
                justNow: 'Just now',
                xMinutesAgo: '{0}m ago',
                xHoursAgo: '{0}h ago',
                xDaysAgo: '{0}d ago',
                xWeeksAgo: '{0}w ago',
                xMonthsAgo: '{0} mon ago',
                xYearsAgo: '{0}y ago',
            }
        }

        if (d.indexOf('GMT') === -1 && d.indexOf('Z') === -1) {
            d += ' GMT';
        }

        var d1 = new Date();
        var d2 = new Date(d);
        var total = parseInt((d1 - d2) / 1000 / 60);

        String.prototype.format = function (o) {
            return this.replace('{0}', o);
        }

        if (total == 0) {
            var text = texts.justNow;
        } else if (total < 90) {
            var text = texts.xMinutesAgo.format(total);
        } else if (total < 1440) { // One day
            var text = texts.xHoursAgo.format(Math.round(total / 60));
        } else if (total < 20160) { // 14 days
            var text = texts.xDaysAgo.format(Math.round(total / 1440));
        } else if (total < 43200) { // 30 days
            var text = texts.xWeeksAgo.format(Math.round(total / 10080));
        } else if (total < 1036800) { // 24 months
            var text = texts.xMonthsAgo.format(Math.round(total / 43200));
        } else { // 24 months+
            var text = texts.xYearsAgo.format(Math.round(total / 525600));
        }

        return text;
    }

    Component.prettifyAll = function () {
        var elements = document.querySelectorAll('.prettydate');
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].getAttribute('data-date')) {
                elements[i].innerHTML = Component.prettify(elements[i].getAttribute('data-date'));
            } else {
                if (elements[i].innerHTML) {
                    elements[i].setAttribute('title', elements[i].innerHTML);
                    elements[i].setAttribute('data-date', elements[i].innerHTML);
                    elements[i].innerHTML = Component.prettify(elements[i].innerHTML);
                }
            }
        }
    }

    Component.now = helpers_date.now;
    Component.toArray = helpers_date.toArray;
    Component.dateToNum = helpers_date.dateToNum
    Component.numToDate = helpers_date.numToDate;
    Component.weekdays = helpers_date.weekdays;
    Component.months = helpers_date.months;
    Component.weekdaysShort = helpers_date.weekdaysShort;
    Component.monthsShort = helpers_date.monthsShort;

    // Legacy shortcut
    Component.extractDateFromString = mask.extractDateFromString;
    Component.getDateString = mask.getDateString;

    return Component;
}

/* harmony default export */ var calendar = (Calendar());
;// CONCATENATED MODULE: ./src/plugins/palette.js
// More palettes https://coolors.co/ or https://gka.github.io/palettes/#/10|s|003790,005647,ffffe0|ffffe0,ff005e,93003a|1|1

function Palette() {

    var palette = {
        material: [
            ["#ffebee", "#fce4ec", "#f3e5f5", "#e8eaf6", "#e3f2fd", "#e0f7fa", "#e0f2f1", "#e8f5e9", "#f1f8e9", "#f9fbe7", "#fffde7", "#fff8e1", "#fff3e0", "#fbe9e7", "#efebe9", "#fafafa", "#eceff1"],
            ["#ffcdd2", "#f8bbd0", "#e1bee7", "#c5cae9", "#bbdefb", "#b2ebf2", "#b2dfdb", "#c8e6c9", "#dcedc8", "#f0f4c3", "#fff9c4", "#ffecb3", "#ffe0b2", "#ffccbc", "#d7ccc8", "#f5f5f5", "#cfd8dc"],
            ["#ef9a9a", "#f48fb1", "#ce93d8", "#9fa8da", "#90caf9", "#80deea", "#80cbc4", "#a5d6a7", "#c5e1a5", "#e6ee9c", "#fff59d", "#ffe082", "#ffcc80", "#ffab91", "#bcaaa4", "#eeeeee", "#b0bec5"],
            ["#e57373", "#f06292", "#ba68c8", "#7986cb", "#64b5f6", "#4dd0e1", "#4db6ac", "#81c784", "#aed581", "#dce775", "#fff176", "#ffd54f", "#ffb74d", "#ff8a65", "#a1887f", "#e0e0e0", "#90a4ae"],
            ["#ef5350", "#ec407a", "#ab47bc", "#5c6bc0", "#42a5f5", "#26c6da", "#26a69a", "#66bb6a", "#9ccc65", "#d4e157", "#ffee58", "#ffca28", "#ffa726", "#ff7043", "#8d6e63", "#bdbdbd", "#78909c"],
            ["#f44336", "#e91e63", "#9c27b0", "#3f51b5", "#2196f3", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b"],
            ["#e53935", "#d81b60", "#8e24aa", "#3949ab", "#1e88e5", "#00acc1", "#00897b", "#43a047", "#7cb342", "#c0ca33", "#fdd835", "#ffb300", "#fb8c00", "#f4511e", "#6d4c41", "#757575", "#546e7a"],
            ["#d32f2f", "#c2185b", "#7b1fa2", "#303f9f", "#1976d2", "#0097a7", "#00796b", "#388e3c", "#689f38", "#afb42b", "#fbc02d", "#ffa000", "#f57c00", "#e64a19", "#5d4037", "#616161", "#455a64"],
            ["#c62828", "#ad1457", "#6a1b9a", "#283593", "#1565c0", "#00838f", "#00695c", "#2e7d32", "#558b2f", "#9e9d24", "#f9a825", "#ff8f00", "#ef6c00", "#d84315", "#4e342e", "#424242", "#37474f"],
            ["#b71c1c", "#880e4f", "#4a148c", "#1a237e", "#0d47a1", "#006064", "#004d40", "#1b5e20", "#33691e", "#827717", "#f57f17", "#ff6f00", "#e65100", "#bf360c", "#3e2723", "#212121", "#263238"],
        ],
        fire: [
            ["0b1a6d", "840f38", "b60718", "de030b", "ff0c0c", "fd491c", "fc7521", "faa331", "fbb535", "ffc73a"],
            ["071147", "5f0b28", "930513", "be0309", "ef0000", "fa3403", "fb670b", "f9991b", "faad1e", "ffc123"],
            ["03071e", "370617", "6a040f", "9d0208", "d00000", "dc2f02", "e85d04", "f48c06", "faa307", "ffba08"],
            ["020619", "320615", "61040d", "8c0207", "bc0000", "c82a02", "d05203", "db7f06", "e19405", "efab00"],
            ["020515", "2d0513", "58040c", "7f0206", "aa0000", "b62602", "b94903", "c57205", "ca8504", "d89b00"],
        ],
        baby: [
            ["eddcd2", "fff1e6", "fde2e4", "fad2e1", "c5dedd", "dbe7e4", "f0efeb", "d6e2e9", "bcd4e6", "99c1de"],
            ["e1c4b3", "ffd5b5", "fab6ba", "f5a8c4", "aacecd", "bfd5cf", "dbd9d0", "baceda", "9dc0db", "7eb1d5"],
            ["daa990", "ffb787", "f88e95", "f282a9", "8fc4c3", "a3c8be", "cec9b3", "9dbcce", "82acd2", "649dcb"],
            ["d69070", "ff9c5e", "f66770", "f05f8f", "74bbb9", "87bfae", "c5b993", "83aac3", "699bca", "4d89c2"],
            ["c97d5d", "f58443", "eb4d57", "e54a7b", "66a9a7", "78ae9c", "b5a67e", "7599b1", "5c88b7", "4978aa"],
        ],
        chart: [
            ['#C1D37F', '#4C5454', '#FFD275', '#66586F', '#D05D5B', '#C96480', '#95BF8F', '#6EA240', '#0F0F0E', '#EB8258', '#95A3B3', '#995D81'],
        ],
    }

    var Component = function (o) {
        // Otherwise get palette value
        if (palette[o]) {
            return palette[o];
        } else {
            return palette.material;
        }
    }

    Component.get = function (o) {
        // Otherwise get palette value
        if (palette[o]) {
            return palette[o];
        } else {
            return palette;
        }
    }

    Component.set = function (o, v) {
        palette[o] = v;
    }

    return Component;
}

/* harmony default export */ var palette = (Palette());
;// CONCATENATED MODULE: ./src/plugins/tabs.js



function Tabs(el, options) {
    var obj = {};
    obj.options = {};

    // Default configuration
    var defaults = {
        data: [],
        position: null,
        allowCreate: false,
        allowChangePosition: false,
        onclick: null,
        onload: null,
        onchange: null,
        oncreate: null,
        ondelete: null,
        onbeforecreate: null,
        onchangeposition: null,
        animation: false,
        hideHeaders: false,
        padding: null,
        palette: null,
        maxWidth: null,
    }

    // Loop through the initial configuration
    for (var property in defaults) {
        if (options && options.hasOwnProperty(property)) {
            obj.options[property] = options[property];
        } else {
            obj.options[property] = defaults[property];
        }
    }

    // Class
    el.classList.add('jtabs');

    var prev = null;
    var next = null;
    var border = null;

    // Helpers
    const setBorder = function(index) {
        if (obj.options.animation) {
            setTimeout(function() {
                let rect = obj.headers.children[index].getBoundingClientRect();

                if (obj.options.palette === 'modern') {
                    border.style.width = rect.width - 4 + 'px';
                    border.style.left = obj.headers.children[index].offsetLeft + 2 + 'px';
                } else {
                    border.style.width = rect.width + 'px';
                    border.style.left = obj.headers.children[index].offsetLeft + 'px';
                }

                if (obj.options.position === 'bottom') {
                    border.style.top = '0px';
                } else {
                    border.style.bottom = '0px';
                }
            }, 50);
        }
    }

    var updateControls = function(x) {
        if (typeof(obj.headers.scrollTo) == 'function') {
            obj.headers.scrollTo({
                left: x,
                behavior: 'smooth',
            });
        } else {
            obj.headers.scrollLeft = x;
        }

        if (x <= 1) {
            prev.classList.add('disabled');
        } else {
            prev.classList.remove('disabled');
        }

        if (x >= obj.headers.scrollWidth - obj.headers.offsetWidth) {
            next.classList.add('disabled');
        } else {
            next.classList.remove('disabled');
        }

        if (obj.headers.scrollWidth <= obj.headers.offsetWidth) {
            prev.style.display = 'none';
            next.style.display = 'none';
        } else {
            prev.style.display = '';
            next.style.display = '';
        }
    }

    obj.setBorder = setBorder;

    // Set value
    obj.open = function(index) {
        if (! obj.content.children[index]) {
            return;
        }

        var previous = null;
        for (var i = 0; i < obj.headers.children.length; i++) {
            if (obj.headers.children[i].classList.contains('jtabs-selected')) {
                // Current one
                previous = i;
            }
            // Remote selected
            obj.headers.children[i].classList.remove('jtabs-selected');
            if (obj.content.children[i]) {
                obj.content.children[i].classList.remove('jtabs-selected');
            }
        }

        obj.headers.children[index].classList.add('jtabs-selected');
        if (obj.content.children[index]) {
            obj.content.children[index].classList.add('jtabs-selected');
        }

        if (previous != index && typeof(obj.options.onchange) == 'function') {
            if (obj.content.children[index]) {
                obj.options.onchange(el, obj, index, obj.headers.children[index], obj.content.children[index]);
            }
        }

        // Hide
        if (obj.options.hideHeaders == true && (obj.headers.children.length < 3 && obj.options.allowCreate == false)) {
            obj.headers.parentNode.style.display = 'none';
        } else {
            obj.headers.parentNode.style.display = '';

            var x1 = obj.headers.children[index].offsetLeft;
            var x2 = x1 + obj.headers.children[index].offsetWidth;
            var r1 = obj.headers.scrollLeft;
            var r2 = r1 + obj.headers.offsetWidth;

            if (! (r1 <= x1 && r2 >= x2)) {
                // Out of the viewport
                updateControls(x1 - 1);
            }

            // Set border
            setBorder(index);
        }
    }

    obj.selectIndex = function(a) {
        var index = Array.prototype.indexOf.call(obj.headers.children, a);
        if (index >= 0) {
            obj.open(index);
        }

        return index;
    }

    obj.rename = function(i, title) {
        if (! title) {
            title = prompt('New title', obj.headers.children[i].innerText);
        }
        obj.headers.children[i].innerText = title;
        setBorder(obj.getActive());
    }

    obj.create = function(title, url) {
        if (typeof(obj.options.onbeforecreate) == 'function') {
            var ret = obj.options.onbeforecreate(el);
            if (ret === false) {
                return false;
            } else {
                title = ret;
            }
        }

        var div = obj.appendElement(title);

        if (typeof(obj.options.oncreate) == 'function') {
            obj.options.oncreate(el, div)
        }

        setBorder(obj.getActive());

        return div;
    }

    obj.remove = function(index) {
        return obj.deleteElement(index);
    }

    obj.nextNumber = function() {
        var num = 0;
        for (var i = 0; i < obj.headers.children.length; i++) {
            var tmp = obj.headers.children[i].innerText.match(/[0-9].*/);
            if (tmp > num) {
                num = parseInt(tmp);
            }
        }
        if (! num) {
            num = 1;
        } else {
            num++;
        }

        return num;
    }

    obj.deleteElement = function(index) {
        let current = obj.getActive();

        if (! obj.headers.children[index]) {
            return false;
        } else {
            obj.headers.removeChild(obj.headers.children[index]);
            obj.content.removeChild(obj.content.children[index]);
        }

        if (current === index) {
            obj.open(0);
        } else {
            let current = obj.getActive() || 0;
            setBorder(current);
        }

        if (typeof(obj.options.ondelete) == 'function') {
            obj.options.ondelete(el, index)
        }
    }

    obj.appendElement = function(title, cb, openTab, position) {
        if (! title) {
            var title = prompt('Title?', '');
        }

        if (title) {
            // Add content
            var div = document.createElement('div');

            // Add headers
            var h = document.createElement('div');
            h.innerHTML = title;
            h.content = div;

            if (typeof(position) === 'undefined') {
                obj.content.appendChild(div);
                obj.headers.insertBefore(h, obj.headers.lastChild);
            } else {
                let r = obj.content.children[position];
                if (r) {
                    obj.content.insertBefore(div, r);
                } else {
                    obj.content.appendChild(div);
                }
                r = obj.headers.children[position] || obj.headers.lastChild;
                obj.headers.insertBefore(h, r);
            }

            // Sortable
            if (obj.options.allowChangePosition) {
                h.setAttribute('draggable', 'true');
            }

            // Open new tab
            if (openTab !== false) {
                // Open new tab
                obj.selectIndex(h);
            }

            // Callback
            if (typeof(cb) == 'function') {
                cb(div, h);
            }

            // Return element
            return div;
        }
    }

    obj.getActive = function() {
        for (var i = 0; i < obj.headers.children.length; i++) {
            if (obj.headers.children[i].classList.contains('jtabs-selected')) {
                return i;
            }
        }
        return false;
    }

    obj.updateContent = function(position, newContent) {
        if (typeof newContent !== 'string') {
            var contentItem = newContent;
        } else {
            var contentItem = document.createElement('div');
            contentItem.innerHTML = newContent;
        }

        if (obj.content.children[position].classList.contains('jtabs-selected')) {
            newContent.classList.add('jtabs-selected');
        }

        obj.content.replaceChild(newContent, obj.content.children[position]);

        setBorder();
    }

    obj.updatePosition = function(f, t, ignoreEvents, openTab) {
        // Ondrop update position of content
        if (f > t) {
            obj.content.insertBefore(obj.content.children[f], obj.content.children[t]);
        } else {
            obj.content.insertBefore(obj.content.children[f], obj.content.children[t].nextSibling);
        }

        // Open destination tab
        if (openTab !== false) {
            obj.open(t);
        } else {
            const activeIndex = obj.getActive();

            if (t < activeIndex) {
                obj.setBorder(activeIndex);
            }
        }

        // Call event
        if (! ignoreEvents && typeof(obj.options.onchangeposition) == 'function') {
            obj.options.onchangeposition(obj.headers, f, t);
        }
    }

    obj.move = function(f, t, ignoreEvents, openTab) {
        if (f > t) {
            obj.headers.insertBefore(obj.headers.children[f], obj.headers.children[t]);
        } else {
            obj.headers.insertBefore(obj.headers.children[f], obj.headers.children[t].nextSibling);
        }

        obj.updatePosition(f, t, ignoreEvents, openTab);
    }

    obj.setBorder = setBorder;

    obj.init = function() {
        el.innerHTML = '';

        // Make sure the component is blank
        obj.headers = document.createElement('div');
        obj.content = document.createElement('div');
        obj.headers.classList.add('jtabs-headers');
        obj.content.classList.add('jtabs-content');

        if (obj.options.palette) {
            el.classList.add('jtabs-modern');
        } else {
            el.classList.remove('jtabs-modern');
        }

        // Padding
        if (obj.options.padding) {
            obj.content.style.padding = parseInt(obj.options.padding) + 'px';
        }

        // Header
        var header = document.createElement('div');
        header.className = 'jtabs-headers-container';
        header.appendChild(obj.headers);
        if (obj.options.maxWidth) {
            header.style.maxWidth = parseInt(obj.options.maxWidth) + 'px';
        }

        // Controls
        var controls = document.createElement('div');
        controls.className = 'jtabs-controls';
        controls.setAttribute('draggable', 'false');
        header.appendChild(controls);

        // Append DOM elements
        if (obj.options.position == 'bottom') {
            el.appendChild(obj.content);
            el.appendChild(header);
        } else {
            el.appendChild(header);
            el.appendChild(obj.content);
        }

        // New button
        if (obj.options.allowCreate == true) {
            var add = document.createElement('div');
            add.className = 'jtabs-add';
            add.onclick = function() {
                obj.create();
            }
            controls.appendChild(add);
        }

        prev = document.createElement('div');
        prev.className = 'jtabs-prev';
        prev.onclick = function() {
            updateControls(obj.headers.scrollLeft - obj.headers.offsetWidth);
        }
        controls.appendChild(prev);

        next = document.createElement('div');
        next.className = 'jtabs-next';
        next.onclick = function() {
            updateControls(obj.headers.scrollLeft + obj.headers.offsetWidth);
        }
        controls.appendChild(next);

        // Data
        for (var i = 0; i < obj.options.data.length; i++) {
            // Title
            if (obj.options.data[i].titleElement) {
                var headerItem = obj.options.data[i].titleElement;
            } else {
                var headerItem = document.createElement('div');
            }
            // Icon
            if (obj.options.data[i].icon) {
                var iconContainer = document.createElement('div');
                var icon = document.createElement('i');
                icon.classList.add('material-icons');
                icon.innerHTML = obj.options.data[i].icon;
                iconContainer.appendChild(icon);
                headerItem.appendChild(iconContainer);
            }
            // Title
            if (obj.options.data[i].title) {
                var title = document.createTextNode(obj.options.data[i].title);
                headerItem.appendChild(title);
            }
            // Width
            if (obj.options.data[i].width) {
                headerItem.style.width = obj.options.data[i].width;
            }
            // Content
            if (obj.options.data[i].contentElement) {
                var contentItem = obj.options.data[i].contentElement;
            } else {
                var contentItem = document.createElement('div');
                contentItem.innerHTML = obj.options.data[i].content;
            }
            obj.headers.appendChild(headerItem);
            obj.content.appendChild(contentItem);
        }

        // Animation
        border = document.createElement('div');
        border.className = 'jtabs-border';
        obj.headers.appendChild(border);

        if (obj.options.animation) {
            el.classList.add('jtabs-animation');
        }

        // Events
        obj.headers.addEventListener("click", function(e) {
            if (e.target.parentNode.classList.contains('jtabs-headers')) {
                var target = e.target;
            } else {
                if (e.target.tagName == 'I') {
                    var target = e.target.parentNode.parentNode;
                } else {
                    var target = e.target.parentNode;
                }
            }

            var index = obj.selectIndex(target);

            if (typeof(obj.options.onclick) == 'function') {
                obj.options.onclick(el, obj, index, obj.headers.children[index], obj.content.children[index]);
            }
        });

        obj.headers.addEventListener("contextmenu", function(e) {
            obj.selectIndex(e.target);
        });

        if (obj.headers.children.length) {
            // Open first tab
            obj.open(0);
        }

        // Update controls
        updateControls(0);

        if (obj.options.allowChangePosition == true) {
            Sorting(obj.headers, {
                direction: 1,
                ondrop: function(a,b,c) {
                    obj.updatePosition(b,c);
                },
            });
        }

        if (typeof(obj.options.onload) == 'function') {
            obj.options.onload(el, obj);
        }
    }

    // Loading existing nodes as the data
    if (el.children[0] && el.children[0].children.length) {
        // Create from existing elements
        for (var i = 0; i < el.children[0].children.length; i++) {
            var item = obj.options.data && obj.options.data[i] ? obj.options.data[i] : {};

            if (el.children[1] && el.children[1].children[i]) {
                item.titleElement = el.children[0].children[i];
                item.contentElement = el.children[1].children[i];
            } else {
                item.contentElement = el.children[0].children[i];
            }

            obj.options.data[i] = item;
        }
    }

    // Remote controller flag
    var loadingRemoteData = false;

    // Create from data
    if (obj.options.data) {
        // Append children
        for (var i = 0; i < obj.options.data.length; i++) {
            if (obj.options.data[i].url) {
                ajax({
                    url: obj.options.data[i].url,
                    type: 'GET',
                    dataType: 'text/html',
                    index: i,
                    success: function(result) {
                        obj.options.data[this.index].content = result;
                    },
                    complete: function() {
                        obj.init();
                    }
                });

                // Flag loading
                loadingRemoteData = true;
            }
        }
    }

    if (! loadingRemoteData) {
        obj.init();
    }

    el.tabs = obj;

    return obj;
}
;// CONCATENATED MODULE: ./src/plugins/color.js






function Color(el, options) {
    // Already created, update options
    if (el.color) {
        return el.color.setOptions(options, true);
    }

    // New instance
    var obj = { type: 'color' };
    obj.options = {};

    var container = null;
    var backdrop = null;
    var content = null;
    var resetButton = null;
    var closeButton = null;
    var tabs = null;
    var jsuitesTabs = null;

    /**
     * Update options
     */
    obj.setOptions = function(options, reset) {
        /**
         * @typedef {Object} defaults
         * @property {(string|Array)} value - Initial value of the compontent
         * @property {string} placeholder - The default instruction text on the element
         * @property {requestCallback} onchange - Method to be execute after any changes on the element
         * @property {requestCallback} onclose - Method to be execute when the element is closed
         * @property {string} doneLabel - Label for button done
         * @property {string} resetLabel - Label for button reset
         * @property {string} resetValue - Value for button reset
         * @property {Bool} showResetButton - Active or note for button reset - default false
         */
        var defaults = {
            placeholder: '',
            value: null,
            onopen: null,
            onclose: null,
            onchange: null,
            closeOnChange: true,
            palette: null,
            position: null,
            doneLabel: 'Done',
            resetLabel: 'Reset',
            fullscreen: false,
            opened: false,
        }

        if (! options) {
            options = {};
        }

        if (options && ! options.palette) {
            // Default palette
            options.palette = palette();
        }

        // Loop through our object
        for (var property in defaults) {
            if (options && options.hasOwnProperty(property)) {
                obj.options[property] = options[property];
            } else {
                if (typeof(obj.options[property]) == 'undefined' || reset === true) {
                    obj.options[property] = defaults[property];
                }
            }
        }

        // Update the text of the controls, if they have already been created
        if (resetButton) {
            resetButton.innerHTML = obj.options.resetLabel;
        }
        if (closeButton) {
            closeButton.innerHTML = obj.options.doneLabel;
        }

        // Update the pallete
        if (obj.options.palette && jsuitesTabs) {
            jsuitesTabs.updateContent(0, table());
        }

        // Value
        if (typeof obj.options.value === 'string') {
            el.value = obj.options.value;
            if (el.tagName === 'INPUT') {
                el.style.color = el.value;
                el.style.backgroundColor = el.value;
            }
        }

        // Placeholder
        if (obj.options.placeholder) {
            el.setAttribute('placeholder', obj.options.placeholder);
        } else {
            if (el.getAttribute('placeholder')) {
                el.removeAttribute('placeholder');
            }
        }

        return obj;
    }

    obj.select = function(color) {
        // Remove current selected mark
        var selected = container.querySelector('.jcolor-selected');
        if (selected) {
            selected.classList.remove('jcolor-selected');
        }

        // Mark cell as selected
        if (obj.values[color]) {
            obj.values[color].classList.add('jcolor-selected');
        }

        obj.options.value = color;
    }

    /**
     * Open color pallete
     */
    obj.open = function() {
        if (! container.classList.contains('jcolor-focus')) {
            // Start tracking
            tracking(obj, true);

            // Show color picker
            container.classList.add('jcolor-focus');

            // Select current color
            if (obj.options.value) {
                obj.select(obj.options.value);
            }

            // Reset margin
            content.style.marginTop = '';
            content.style.marginLeft = '';

            var rectContent = content.getBoundingClientRect();
            var availableWidth = helpers.getWindowWidth();
            var availableHeight = helpers.getWindowHeight();

            if (availableWidth < 800 || obj.options.fullscreen == true) {
                content.classList.add('jcolor-fullscreen');
                animation.slideBottom(content, 1);
                backdrop.style.display = 'block';
            } else {
                if (content.classList.contains('jcolor-fullscreen')) {
                    content.classList.remove('jcolor-fullscreen');
                    backdrop.style.display = '';
                }

                if (obj.options.position) {
                    content.style.position = 'fixed';
                } else {
                    content.style.position = '';
                }

                if (rectContent.left + rectContent.width > availableWidth) {
                    content.style.marginLeft = -1 * (rectContent.left + rectContent.width - (availableWidth - 20)) + 'px';
                }
                if (rectContent.top + rectContent.height > availableHeight) {
                    content.style.marginTop = -1 * (rectContent.top + rectContent.height - (availableHeight - 20)) + 'px';
                }
            }


            if (typeof(obj.options.onopen) == 'function') {
                obj.options.onopen(el, obj);
            }

            jsuitesTabs.setBorder(jsuitesTabs.getActive());

            // Update sliders
            if (obj.options.value) {
                var rgb = HexToRgb(obj.options.value);

                rgbInputs.forEach(function(rgbInput, index) {
                    rgbInput.value = rgb[index];
                    rgbInput.dispatchEvent(new Event('input'));
                });
            }
        }
    }

    /**
     * Close color pallete
     */
    obj.close = function(ignoreEvents) {
        if (container.classList.contains('jcolor-focus')) {
            // Remove focus
            container.classList.remove('jcolor-focus');
            // Make sure backdrop is hidden
            backdrop.style.display = '';
            // Call related events
            if (! ignoreEvents && typeof(obj.options.onclose) == 'function') {
                obj.options.onclose(el, obj);
            }
            // Stop  the object
            tracking(obj, false);
        }

        return obj.options.value;
    }

    /**
     * Set value
     */
    obj.setValue = function(color) {
        if (! color) {
            color = '';
        }

        if (color != obj.options.value) {
            obj.options.value = color;
            slidersResult = color;

            // Remove current selecded mark
            obj.select(color);

            // Onchange
            if (typeof(obj.options.onchange) == 'function') {
                obj.options.onchange(el, color, obj);
            }

            // Changes
            if (el.value != obj.options.value) {
                // Set input value
                el.value = obj.options.value;
                if (el.tagName === 'INPUT') {
                    el.style.color = el.value;
                    el.style.backgroundColor = el.value;
                }

                // Element onchange native
                if (typeof(el.oninput) == 'function') {
                    el.oninput({
                        type: 'input',
                        target: el,
                        value: el.value
                    });
                }
            }

            if (obj.options.closeOnChange == true) {
                obj.close();
            }
        }
    }

    /**
     * Get value
     */
    obj.getValue = function() {
        return obj.options.value;
    }

    var backdropClickControl = false;

    // Converts a number in decimal to hexadecimal
    var decToHex = function(num) {
        var hex = num.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    // Converts a color in rgb to hexadecimal
    var rgbToHex = function(r, g, b) {
        return "#" + decToHex(r) + decToHex(g) + decToHex(b);
    }

    // Converts a number in hexadecimal to decimal
    var hexToDec = function(hex) {
        return parseInt('0x' + hex);
    }

    // Converts a color in hexadecimal to rgb
    var HexToRgb = function(hex) {
        return [hexToDec(hex.substr(1, 2)), hexToDec(hex.substr(3, 2)), hexToDec(hex.substr(5, 2))]
    }

    var table = function() {
        // Content of the first tab
        var tableContainer = document.createElement('div');
        tableContainer.className = 'jcolor-grid';

        // Cells
        obj.values = [];

        // Table pallete
        var t = document.createElement('table');
        t.setAttribute('cellpadding', '7');
        t.setAttribute('cellspacing', '0');

        for (var j = 0; j < obj.options.palette.length; j++) {
            var tr = document.createElement('tr');
            for (var i = 0; i < obj.options.palette[j].length; i++) {
                var td = document.createElement('td');
                var color = obj.options.palette[j][i];
                if (color.length < 7 && color.substr(0,1) !== '#') {
                    color = '#' + color;
                }
                td.style.backgroundColor = color;
                td.setAttribute('data-value', color);
                td.innerHTML = '';
                tr.appendChild(td);

                // Selected color
                if (obj.options.value == color) {
                    td.classList.add('jcolor-selected');
                }

                // Possible values
                obj.values[color] = td;
            }
            t.appendChild(tr);
        }

        // Append to the table
        tableContainer.appendChild(t);

        return tableContainer;
    }

    // Canvas where the image will be rendered
    var canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 160;
    var context = canvas.getContext("2d");

    var resizeCanvas = function() {
        // Specifications necessary to correctly obtain colors later in certain positions
        var m = tabs.firstChild.getBoundingClientRect();
        canvas.width = m.width - 14;
        gradient()
    }

    var gradient = function() {
        var g = context.createLinearGradient(0, 0, canvas.width, 0);
        // Create color gradient
        g.addColorStop(0,    "rgb(255,0,0)");
        g.addColorStop(0.15, "rgb(255,0,255)");
        g.addColorStop(0.33, "rgb(0,0,255)");
        g.addColorStop(0.49, "rgb(0,255,255)");
        g.addColorStop(0.67, "rgb(0,255,0)");
        g.addColorStop(0.84, "rgb(255,255,0)");
        g.addColorStop(1,    "rgb(255,0,0)");
        context.fillStyle = g;
        context.fillRect(0, 0, canvas.width, canvas.height);
        g = context.createLinearGradient(0, 0, 0, canvas.height);
        g.addColorStop(0,   "rgba(255,255,255,1)");
        g.addColorStop(0.5, "rgba(255,255,255,0)");
        g.addColorStop(0.5, "rgba(0,0,0,0)");
        g.addColorStop(1,   "rgba(0,0,0,1)");
        context.fillStyle = g;
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    var hsl = function() {
        var element = document.createElement('div');
        element.className = "jcolor-hsl";

        var point = document.createElement('div');
        point.className = 'jcolor-point';

        var div = document.createElement('div');
        div.appendChild(canvas);
        div.appendChild(point);
        element.appendChild(div);

        // Moves the marquee point to the specified position
        var update = function(buttons, x, y) {
            if (buttons === 1) {
                var rect = element.getBoundingClientRect();
                var left = x - rect.left;
                var top = y - rect.top;
                if (left < 0) {
                    left = 0;
                }
                if (top < 0) {
                    top = 0;
                }
                if (left > rect.width) {
                    left = rect.width;
                }
                if (top > rect.height) {
                    top = rect.height;
                }
                point.style.left = left + 'px';
                point.style.top = top + 'px';
                var pixel = context.getImageData(left, top, 1, 1).data;
                slidersResult = rgbToHex(pixel[0], pixel[1], pixel[2]);
            }
        }

        // Applies the point's motion function to the div that contains it
        element.addEventListener('mousedown', function(e) {
            update(e.buttons, e.clientX, e.clientY);
        });

        element.addEventListener('mousemove', function(e) {
            update(e.buttons, e.clientX, e.clientY);
        });

        element.addEventListener('touchmove', function(e) {
            update(1, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
        });

        return element;
    }

    var slidersResult = '';

    var rgbInputs = [];

    var changeInputColors = function() {
        if (slidersResult !== '') {
            for (var j = 0; j < rgbInputs.length; j++) {
                var currentColor = HexToRgb(slidersResult);

                currentColor[j] = 0;

                var newGradient = 'linear-gradient(90deg, rgb(';
                newGradient += currentColor.join(', ');
                newGradient += '), rgb(';

                currentColor[j] = 255;

                newGradient += currentColor.join(', ');
                newGradient += '))';

                rgbInputs[j].style.backgroundImage = newGradient;
            }
        }
    }

    var sliders = function() {
        // Content of the third tab
        var slidersElement = document.createElement('div');
        slidersElement.className = 'jcolor-sliders';

        var slidersBody = document.createElement('div');

        // Creates a range-type input with the specified name
        var createSliderInput = function(name) {
            var inputContainer = document.createElement('div');
            inputContainer.className = 'jcolor-sliders-input-container';

            var label = document.createElement('label');
            label.innerText = name;

            var subContainer = document.createElement('div');
            subContainer.className = 'jcolor-sliders-input-subcontainer';

            var input = document.createElement('input');
            input.type = 'range';
            input.min = 0;
            input.max = 255;
            input.value = 0;

            inputContainer.appendChild(label);
            subContainer.appendChild(input);

            var value = document.createElement('div');
            value.innerText = input.value;

            input.addEventListener('input', function() {
                value.innerText = input.value;
            });

            subContainer.appendChild(value);
            inputContainer.appendChild(subContainer);

            slidersBody.appendChild(inputContainer);

            return input;
        }

        // Creates red, green and blue inputs
        rgbInputs = [
            createSliderInput('Red'),
            createSliderInput('Green'),
            createSliderInput('Blue'),
        ];

        slidersElement.appendChild(slidersBody);

        // Element that prints the current color
        var slidersResultColor = document.createElement('div');
        slidersResultColor.className = 'jcolor-sliders-final-color';

        var resultElement = document.createElement('div');
        resultElement.style.visibility = 'hidden';
        resultElement.innerText = 'a';
        slidersResultColor.appendChild(resultElement)

        // Update the element that prints the current color
        var updateResult = function() {
            var resultColor = rgbToHex(parseInt(rgbInputs[0].value), parseInt(rgbInputs[1].value), parseInt(rgbInputs[2].value));

            resultElement.innerText = resultColor;
            resultElement.style.color = resultColor;
            resultElement.style.removeProperty('visibility');

            slidersResult = resultColor;
        }

        // Apply the update function to color inputs
        rgbInputs.forEach(function(rgbInput) {
            rgbInput.addEventListener('input', function() {
                updateResult();
                changeInputColors();
            });
        });

        slidersElement.appendChild(slidersResultColor);

        return slidersElement;
    }

    var init = function() {
        // Initial options
        obj.setOptions(options);

        // Add a proper input tag when the element is an input
        if (el.tagName == 'INPUT') {
            el.classList.add('jcolor-input');
            el.readOnly = true;
        }

        // Table container
        container = document.createElement('div');
        container.className = 'jcolor';

        // Table container
        backdrop = document.createElement('div');
        backdrop.className = 'jcolor-backdrop';
        container.appendChild(backdrop);

        // Content
        content = document.createElement('div');
        content.className = 'jcolor-content';

        // Controls
        var controls = document.createElement('div');
        controls.className = 'jcolor-controls';
        content.appendChild(controls);

        // Reset button
        resetButton  = document.createElement('div');
        resetButton.className = 'jcolor-reset';
        resetButton.innerHTML = obj.options.resetLabel;
        controls.appendChild(resetButton);

        // Close button
        closeButton  = document.createElement('div');
        closeButton.className = 'jcolor-close';
        closeButton.innerHTML = obj.options.doneLabel;
        controls.appendChild(closeButton);

        // Element that will be used to create the tabs
        tabs = document.createElement('div');
        content.appendChild(tabs);

        // Starts the jSuites tabs component
        jsuitesTabs = Tabs(tabs, {
            animation: true,
            data: [
                {
                    title: 'Grid',
                    contentElement: table(),
                },
                {
                    title: 'Spectrum',
                    contentElement: hsl(),
                },
                {
                    title: 'Sliders',
                    contentElement: sliders(),
                }
            ],
            onchange: function(element, instance, index) {
                if (index === 1) {
                    resizeCanvas();
                } else {
                    var color = slidersResult !== '' ? slidersResult : obj.getValue();

                    if (index === 2 && color) {
                        var rgb = HexToRgb(color);

                        rgbInputs.forEach(function(rgbInput, index) {
                            rgbInput.value = rgb[index];
                            rgbInput.dispatchEvent(new Event('input'));
                        });
                    }
                }
            },
            palette: 'modern',
        });

        container.appendChild(content);

        // Insert picker after the element
        if (el.tagName == 'INPUT') {
            el.parentNode.insertBefore(container, el.nextSibling);
        } else {
            el.appendChild(container);
        }

        container.addEventListener("click", function(e) {
            if (e.target.tagName == 'TD') {
                var value = e.target.getAttribute('data-value');
                if (value) {
                    obj.setValue(value);
                }
            } else if (e.target.classList.contains('jcolor-reset')) {
                obj.setValue('');
                obj.close();
            } else if (e.target.classList.contains('jcolor-close')) {
                if (jsuitesTabs.getActive() > 0) {
                    obj.setValue(slidersResult);
                }
                obj.close();
            } else if (e.target.classList.contains('jcolor-backdrop')) {
                obj.close();
            } else {
                obj.open();
            }
        });

        /**
         * If element is focus open the picker
         */
        el.addEventListener("mouseup", function(e) {
            obj.open();
        });

        // If the picker is open on the spectrum tab, it changes the canvas size when the window size is changed
        window.addEventListener('resize', function() {
            if (container.classList.contains('jcolor-focus') && jsuitesTabs.getActive() == 1) {
                resizeCanvas();
            }
        });

        // Default opened
        if (obj.options.opened == true) {
            obj.open();
        }

        // Change
        el.change = obj.setValue;

        // Global generic value handler
        el.val = function(val) {
            if (val === undefined) {
                return obj.getValue();
            } else {
                obj.setValue(val);
            }
        }

        // Keep object available from the node
        el.color = obj;

        // Container shortcut
        container.color = obj;
    }

    obj.toHex = function(rgb) {
        var hex = function(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        if (rgb) {
            if (/^#[0-9A-F]{6}$/i.test(rgb)) {
                return rgb;
            } else {
                rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                if (rgb && rgb.length) {
                    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
                } else {
                    return "";
                }
            }
        }
    }

    init();

    return obj;
}
;// CONCATENATED MODULE: ./src/plugins/contextmenu.js



function Contextmenu() {

    var Component = function(el, options) {
        // New instance
        var obj = {type: 'contextmenu'};
        obj.options = {};

        // Default configuration
        var defaults = {
            items: null,
            onclick: null,
        };

        // Loop through our object
        for (var property in defaults) {
            if (options && options.hasOwnProperty(property)) {
                obj.options[property] = options[property];
            } else {
                obj.options[property] = defaults[property];
            }
        }

        // Class definition
        el.classList.add('jcontextmenu');

        /**
         * Open contextmenu
         */
        obj.open = function (e, items) {
            if (items) {
                // Update content
                obj.options.items = items;
                // Create items
                obj.create(items);
            }

            // Close current contextmenu
            if (Component.current) {
                Component.current.close();
            }

            // Add to the opened components monitor
            tracking(obj, true);

            // Show context menu
            el.classList.add('jcontextmenu-focus');

            // Current
            Component.current = obj;

            // Coordinates
            if ((obj.options.items && obj.options.items.length > 0) || el.children.length) {
                if (e.target) {
                    if (e.changedTouches && e.changedTouches[0]) {
                        x = e.changedTouches[0].clientX;
                        y = e.changedTouches[0].clientY;
                    } else {
                        var x = e.clientX;
                        var y = e.clientY;
                    }
                } else {
                    var x = e.x;
                    var y = e.y;
                }

                var rect = el.getBoundingClientRect();

                if (window.innerHeight < y + rect.height) {
                    var h = y - rect.height;
                    if (h < 0) {
                        h = 0;
                    }
                    el.style.top = h + 'px';
                } else {
                    el.style.top = y + 'px';
                }

                if (window.innerWidth < x + rect.width) {
                    if (x - rect.width > 0) {
                        el.style.left = (x - rect.width) + 'px';
                    } else {
                        el.style.left = '10px';
                    }
                } else {
                    el.style.left = x + 'px';
                }
            }
        }

        obj.isOpened = function () {
            return el.classList.contains('jcontextmenu-focus') ? true : false;
        }

        /**
         * Close menu
         */
        obj.close = function () {
            if (el.classList.contains('jcontextmenu-focus')) {
                el.classList.remove('jcontextmenu-focus');
            }
            tracking(obj, false);
        }

        /**
         * Create items based on the declared objectd
         * @param {object} items - List of object
         */
        obj.create = function (items) {
            // Update content
            el.innerHTML = '';

            // Add header contextmenu
            var itemHeader = createHeader();
            el.appendChild(itemHeader);

            // Append items
            for (var i = 0; i < items.length; i++) {
                var itemContainer = createItemElement(items[i]);
                el.appendChild(itemContainer);
            }
        }

        /**
         * createHeader for context menu
         * @private
         * @returns {HTMLElement}
         */
        function createHeader() {
            var header = document.createElement('div');
            header.classList.add("header");
            header.addEventListener("click", function (e) {
                e.preventDefault();
                e.stopPropagation();
            });
            var title = document.createElement('a');
            title.classList.add("title");
            title.innerHTML = dictionary.translate("Menu");

            header.appendChild(title);

            var closeButton = document.createElement('a');
            closeButton.classList.add("close");
            closeButton.innerHTML = dictionary.translate("close");
            closeButton.addEventListener("click", function (e) {
                obj.close();
            });

            header.appendChild(closeButton);

            return header;
        }

        /**
         * Private function for create a new Item element
         * @param {type} item
         * @returns {jsuitesL#15.jSuites.contextmenu.createItemElement.itemContainer}
         */
        function createItemElement(item) {
            if (item.type && (item.type == 'line' || item.type == 'divisor')) {
                var itemContainer = document.createElement('hr');
            } else {
                var itemContainer = document.createElement('div');
                var itemText = document.createElement('a');
                itemText.innerHTML = item.title;

                if (item.tooltip) {
                    itemContainer.setAttribute('title', item.tooltip);
                }

                if (item.icon) {
                    itemContainer.setAttribute('data-icon', item.icon);
                }

                if (item.id) {
                    itemContainer.id = item.id;
                }

                if (item.disabled) {
                    itemContainer.className = 'jcontextmenu-disabled';
                } else if (item.onclick) {
                    itemContainer.method = item.onclick;
                    itemContainer.addEventListener("mousedown", function (e) {
                        e.preventDefault();
                    });
                    itemContainer.addEventListener("mouseup", function (e) {
                        // Execute method
                        this.method(this, e);
                    });
                }
                itemContainer.appendChild(itemText);

                if (item.submenu) {
                    var itemIconSubmenu = document.createElement('span');
                    itemIconSubmenu.innerHTML = "&#9658;";
                    itemContainer.appendChild(itemIconSubmenu);
                    itemContainer.classList.add('jcontexthassubmenu');
                    var el_submenu = document.createElement('div');
                    // Class definition
                    el_submenu.classList.add('jcontextmenu');
                    // Focusable
                    el_submenu.setAttribute('tabindex', '900');

                    // Append items
                    var submenu = item.submenu;
                    for (var i = 0; i < submenu.length; i++) {
                        var itemContainerSubMenu = createItemElement(submenu[i]);
                        el_submenu.appendChild(itemContainerSubMenu);
                    }

                    itemContainer.appendChild(el_submenu);
                } else if (item.shortcut) {
                    var itemShortCut = document.createElement('span');
                    itemShortCut.innerHTML = item.shortcut;
                    itemContainer.appendChild(itemShortCut);
                }
            }
            return itemContainer;
        }

        if (typeof (obj.options.onclick) == 'function') {
            el.addEventListener('click', function (e) {
                obj.options.onclick(obj, e);
            });
        }

        // Create items
        if (obj.options.items) {
            obj.create(obj.options.items);
        }

        window.addEventListener("mousewheel", function () {
            obj.close();
        });

        el.contextmenu = obj;

        return obj;
    }

    return Component;
}

/* harmony default export */ var contextmenu = (Contextmenu());
;// CONCATENATED MODULE: ./src/plugins/dropdown.js







function Dropdown() {

    var Component = (function (el, options) {
        // Already created, update options
        if (el.dropdown) {
            return el.dropdown.setOptions(options, true);
        }

        // New instance
        var obj = {type: 'dropdown'};
        obj.options = {};

        // Success
        var success = function (data, val) {
            // Set data
            if (data && data.length) {
                // Sort
                if (obj.options.sortResults !== false) {
                    if (typeof obj.options.sortResults == "function") {
                        data.sort(obj.options.sortResults);
                    } else {
                        data.sort(sortData);
                    }
                }

                obj.setData(data);
            }

            // Onload method
            if (typeof (obj.options.onload) == 'function') {
                obj.options.onload(el, obj, data, val);
            }

            // Set value
            if (val) {
                applyValue(val);
            }

            // Component value
            if (val === undefined || val === null) {
                obj.options.value = '';
            }
            el.value = obj.options.value;

            // Open dropdown
            if (obj.options.opened == true) {
                obj.open();
            }
        }


        // Default sort
        var sortData = function (itemA, itemB) {
            var testA, testB;
            if (typeof itemA == "string") {
                testA = itemA;
            } else {
                if (itemA.text) {
                    testA = itemA.text;
                } else if (itemA.name) {
                    testA = itemA.name;
                }
            }

            if (typeof itemB == "string") {
                testB = itemB;
            } else {
                if (itemB.text) {
                    testB = itemB.text;
                } else if (itemB.name) {
                    testB = itemB.name;
                }
            }

            if (typeof testA == "string" || typeof testB == "string") {
                if (typeof testA != "string") {
                    testA = "" + testA;
                }
                if (typeof testB != "string") {
                    testB = "" + testB;
                }
                return testA.localeCompare(testB);
            } else {
                return testA - testB;
            }
        }

        /**
         * Reset the options for the dropdown
         */
        var resetValue = function () {
            // Reset value container
            obj.value = {};
            // Remove selected
            for (var i = 0; i < obj.items.length; i++) {
                if (obj.items[i].selected == true) {
                    if (obj.items[i].element) {
                        obj.items[i].element.classList.remove('jdropdown-selected')
                    }
                    obj.items[i].selected = null;
                }
            }
            // Reset options
            obj.options.value = '';
            // Reset value
            el.value = '';
        }

        /**
         * Apply values to the dropdown
         */
        var applyValue = function (values) {
            // Reset the current values
            resetValue();

            // Read values
            if (values !== null) {
                if (!values) {
                    if (typeof (obj.value['']) !== 'undefined') {
                        obj.value[''] = '';
                    }
                } else {
                    if (!Array.isArray(values)) {
                        values = ('' + values).split(';');
                    }
                    for (var i = 0; i < values.length; i++) {
                        obj.value[values[i]] = '';
                    }
                }
            }

            // Update the DOM
            for (var i = 0; i < obj.items.length; i++) {
                if (typeof (obj.value[Value(i)]) !== 'undefined') {
                    if (obj.items[i].element) {
                        obj.items[i].element.classList.add('jdropdown-selected')
                    }
                    obj.items[i].selected = true;

                    // Keep label
                    obj.value[Value(i)] = Text(i);
                }
            }

            // Global value
            obj.options.value = Object.keys(obj.value).join(';');

            // Update labels
            obj.header.value = obj.getText();
        }

        // Get the value of one item
        var Value = function (k, v) {
            // Legacy purposes
            if (!obj.options.format) {
                var property = 'value';
            } else {
                var property = 'id';
            }

            if (obj.items[k]) {
                if (v !== undefined) {
                    return obj.items[k].data[property] = v;
                } else {
                    return obj.items[k].data[property];
                }
            }

            return '';
        }

        // Get the label of one item
        var Text = function (k, v) {
            // Legacy purposes
            if (!obj.options.format) {
                var property = 'text';
            } else {
                var property = 'name';
            }

            if (obj.items[k]) {
                if (v !== undefined) {
                    return obj.items[k].data[property] = v;
                } else {
                    return obj.items[k].data[property];
                }
            }

            return '';
        }

        var getValue = function () {
            return Object.keys(obj.value);
        }

        var getText = function () {
            var data = [];
            var k = Object.keys(obj.value);
            for (var i = 0; i < k.length; i++) {
                data.push(obj.value[k[i]]);
            }
            return data;
        }

        obj.setOptions = function (options, reset) {
            if (!options) {
                options = {};
            }

            // Default configuration
            var defaults = {
                url: null,
                data: [],
                format: 0,
                multiple: false,
                autocomplete: false,
                remoteSearch: false,
                lazyLoading: false,
                type: null,
                width: null,
                maxWidth: null,
                opened: false,
                value: null,
                placeholder: '',
                newOptions: false,
                position: false,
                onchange: null,
                onload: null,
                onopen: null,
                onclose: null,
                onfocus: null,
                onblur: null,
                oninsert: null,
                onbeforeinput: null,
                onbeforeinsert: null,
                onsearch: null,
                onbeforesearch: null,
                sortResults: false,
                autofocus: false,
            }

            // Loop through our object
            for (var property in defaults) {
                if (options && options.hasOwnProperty(property)) {
                    obj.options[property] = options[property];
                } else {
                    if (typeof (obj.options[property]) == 'undefined' || reset === true) {
                        obj.options[property] = defaults[property];
                    }
                }
            }

            // Force autocomplete search
            if (obj.options.remoteSearch == true || obj.options.type === 'searchbar') {
                obj.options.autocomplete = true;
            }

            // New options
            if (obj.options.newOptions == true) {
                obj.header.classList.add('jdropdown-add');
            } else {
                obj.header.classList.remove('jdropdown-add');
            }

            // Autocomplete
            if (obj.options.autocomplete == true) {
                obj.header.removeAttribute('readonly');
            } else {
                obj.header.setAttribute('readonly', 'readonly');
            }

            // Place holder
            if (obj.options.placeholder) {
                obj.header.setAttribute('placeholder', obj.options.placeholder);
            } else {
                obj.header.removeAttribute('placeholder');
            }

            // Remove specific dropdown typing to add again
            el.classList.remove('jdropdown-searchbar');
            el.classList.remove('jdropdown-picker');
            el.classList.remove('jdropdown-list');

            if (obj.options.type == 'searchbar') {
                el.classList.add('jdropdown-searchbar');
            } else if (obj.options.type == 'list') {
                el.classList.add('jdropdown-list');
            } else if (obj.options.type == 'picker') {
                el.classList.add('jdropdown-picker');
            } else {
                if (helpers.getWindowWidth() < 800) {
                    if (obj.options.autocomplete) {
                        el.classList.add('jdropdown-searchbar');
                        obj.options.type = 'searchbar';
                    } else {
                        el.classList.add('jdropdown-picker');
                        obj.options.type = 'picker';
                    }
                } else {
                    if (obj.options.width) {
                        el.style.width = obj.options.width;
                        el.style.minWidth = obj.options.width;
                    } else {
                        el.style.removeProperty('width');
                        el.style.removeProperty('min-width');
                    }

                    el.classList.add('jdropdown-default');
                    obj.options.type = 'default';
                }
            }

            // Close button
            if (obj.options.type == 'searchbar') {
                containerHeader.appendChild(closeButton);
            } else {
                container.insertBefore(closeButton, container.firstChild);
            }

            // Load the content
            if (obj.options.url && !options.data) {
                ajax({
                    url: obj.options.url,
                    method: 'GET',
                    dataType: 'json',
                    success: function (data) {
                        if (data) {
                            success(data, obj.options.value);
                        }
                    }
                });
            } else {
                success(obj.options.data, obj.options.value);
            }

            // Return the instance
            return obj;
        }

        // Helpers
        var containerHeader = null;
        var container = null;
        var content = null;
        var closeButton = null;
        var resetButton = null;
        var backdrop = null;

        var keyTimer = null;

        /**
         * Init dropdown
         */
        var init = function () {
            // Do not accept null
            if (!options) {
                options = {};
            }

            // If the element is a SELECT tag, create a configuration object
            if (el.tagName == 'SELECT') {
                var ret = Component.extractFromDom(el, options);
                el = ret.el;
                options = ret.options;
            }

            // Place holder
            if (!options.placeholder && el.getAttribute('placeholder')) {
                options.placeholder = el.getAttribute('placeholder');
            }

            // Value container
            obj.value = {};
            // Containers
            obj.items = [];
            obj.groups = [];
            // Search options
            obj.search = '';
            obj.results = null;

            // Create dropdown
            el.classList.add('jdropdown');

            // Header container
            containerHeader = document.createElement('div');
            containerHeader.className = 'jdropdown-container-header';

            // Header
            obj.header = document.createElement('input');
            obj.header.className = 'jdropdown-header jss_object';
            obj.header.type = 'text';
            obj.header.setAttribute('autocomplete', 'off');
            obj.header.onfocus = function () {
                if (typeof (obj.options.onfocus) == 'function') {
                    obj.options.onfocus(el);
                }
            }

            obj.header.onblur = function () {
                if (typeof (obj.options.onblur) == 'function') {
                    obj.options.onblur(el);
                }
            }

            obj.header.onkeyup = function (e) {
                if (obj.options.autocomplete == true && !keyTimer) {
                    if (obj.search != obj.header.value.trim()) {
                        keyTimer = setTimeout(function () {
                            obj.find(obj.header.value.trim());
                            keyTimer = null;
                        }, 400);
                    }

                    if (!el.classList.contains('jdropdown-focus')) {
                        obj.open();
                    }
                } else {
                    if (!obj.options.autocomplete) {
                        obj.next(e.key);
                    }
                }
            }

            // Global controls
            if (!Component.hasEvents) {
                // Execute only one time
                Component.hasEvents = true;
                // Enter and Esc
                document.addEventListener("keydown", Component.keydown);
            }

            // Container
            container = document.createElement('div');
            container.className = 'jdropdown-container';

            // Dropdown content
            content = document.createElement('div');
            content.className = 'jdropdown-content';

            // Close button
            closeButton = document.createElement('div');
            closeButton.className = 'jdropdown-close';
            closeButton.textContent = 'Done';

            // Reset button
            resetButton = document.createElement('div');
            resetButton.className = 'jdropdown-reset';
            resetButton.textContent = 'x';
            resetButton.onclick = function () {
                obj.reset();
                obj.close();
            }

            // Create backdrop
            backdrop = document.createElement('div');
            backdrop.className = 'jdropdown-backdrop';

            // Append elements
            containerHeader.appendChild(obj.header);

            container.appendChild(content);
            el.appendChild(containerHeader);
            el.appendChild(container);
            el.appendChild(backdrop);

            // Set the otiptions
            obj.setOptions(options);

            if ('ontouchsend' in document.documentElement === true) {
                el.addEventListener('touchsend', Component.mouseup);
            } else {
                el.addEventListener('mouseup', Component.mouseup);
            }

            // Lazyloading
            if (obj.options.lazyLoading == true) {
                LazyLoading(content, {
                    loadUp: obj.loadUp,
                    loadDown: obj.loadDown,
                });
            }

            content.onwheel = function (e) {
                e.stopPropagation();
            }

            // Change method
            el.change = obj.setValue;

            // Global generic value handler
            el.val = function (val) {
                if (val === undefined) {
                    return obj.getValue(obj.options.multiple ? true : false);
                } else {
                    obj.setValue(val);
                }
            }

            // Keep object available from the node
            el.dropdown = obj;
        }

        /**
         * Get the current remote source of data URL
         */
        obj.getUrl = function () {
            return obj.options.url;
        }

        /**
         * Set the new data from a remote source
         * @param {string} url - url from the remote source
         * @param {function} callback - callback when the data is loaded
         */
        obj.setUrl = function (url, callback) {
            obj.options.url = url;

            ajax({
                url: obj.options.url,
                method: 'GET',
                dataType: 'json',
                success: function (data) {
                    obj.setData(data);
                    // Callback
                    if (typeof (callback) == 'function') {
                        callback(obj);
                    }
                }
            });
        }

        /**
         * Set ID for one item
         */
        obj.setId = function (item, v) {
            // Legacy purposes
            if (!obj.options.format) {
                var property = 'value';
            } else {
                var property = 'id';
            }

            if (typeof (item) == 'object') {
                item[property] = v;
            } else {
                obj.items[item].data[property] = v;
            }
        }

        /**
         * Add a new item
         * @param {string} title - title of the new item
         * @param {string} id - value/id of the new item
         */
        obj.add = async function (title, id) {
            if (typeof (obj.options.onbeforeinput) == 'function') {
                let ret = await obj.options.onbeforeinput(obj, title);
                if (ret === false) {
                    return false;
                } else if (ret) {
                    if (typeof(ret) === 'object') {
                        if (ret.title) {
                            title = ret.title;
                        }
                        if (ret.id) {
                            id = ret.id;
                        }
                    } else {
                        title = ret;
                    }
                }
            }

            if (! title) {
                var current = obj.options.autocomplete == true ? obj.header.value : '';
                var title = prompt(dictionary.translate('Add A New Option'), current);
                if (!title) {
                    return false;
                }
            }

            // Id
            if (! id) {
                id = helpers.guid();
            }

            // Create new item
            if (!obj.options.format) {
                var item = {
                    value: id,
                    text: title,
                }
            } else {
                var item = {
                    id: id,
                    name: title,
                }
            }

            // Callback
            if (typeof (obj.options.onbeforeinsert) == 'function') {
                let ret = obj.options.onbeforeinsert(obj, item);
                if (ret === false) {
                    return false;
                } else if (ret) {
                    item = ret;
                }
            }

            // Add item to the main list
            obj.options.data.push(item);

            // Create DOM
            var newItem = obj.createItem(item);

            // Append DOM to the list
            content.appendChild(newItem.element);

            // Callback
            if (typeof (obj.options.oninsert) == 'function') {
                obj.options.oninsert(obj, item, newItem);
            }

            // Show content
            if (content.style.display == 'none') {
                content.style.display = '';
            }

            // Search?
            if (obj.results) {
                obj.results.push(newItem);
            }

            return item;
        }

        /**
         * Create a new item
         */
        obj.createItem = function (data, group, groupName) {
            // Keep the correct source of data
            if (!obj.options.format) {
                if (!data.value && data.id !== undefined) {
                    data.value = data.id;
                    //delete data.id;
                }
                if (!data.text && data.name !== undefined) {
                    data.text = data.name;
                    //delete data.name;
                }
            } else {
                if (!data.id && data.value !== undefined) {
                    data.id = data.value;
                    //delete data.value;
                }
                if (!data.name && data.text !== undefined) {
                    data.name = data.text
                    //delete data.text;
                }
            }

            // Create item
            var item = {};
            item.element = document.createElement('div');
            item.element.className = 'jdropdown-item';
            item.element.indexValue = obj.items.length;
            item.data = data;

            // Groupd DOM
            if (group) {
                item.group = group;
            }

            // Id
            if (data.id) {
                item.element.setAttribute('id', data.id);
            }

            // Disabled
            if (data.disabled == true) {
                item.element.setAttribute('data-disabled', true);
            }

            // Tooltip
            if (data.tooltip) {
                item.element.setAttribute('title', data.tooltip);
            }

            // Image
            if (data.image) {
                var image = document.createElement('img');
                image.className = 'jdropdown-image';
                image.src = data.image;
                if (!data.title) {
                    image.classList.add('jdropdown-image-small');
                }
                item.element.appendChild(image);
            } else if (data.icon) {
                var icon = document.createElement('span');
                icon.className = "jdropdown-icon material-icons";
                icon.innerText = data.icon;
                if (!data.title) {
                    icon.classList.add('jdropdown-icon-small');
                }
                if (data.color) {
                    icon.style.color = data.color;
                }
                item.element.appendChild(icon);
            } else if (data.color) {
                var color = document.createElement('div');
                color.className = 'jdropdown-color';
                color.style.backgroundColor = data.color;
                item.element.appendChild(color);
            }

            // Set content
            if (!obj.options.format) {
                var text = data.text;
            } else {
                var text = data.name;
            }

            var node = document.createElement('div');
            node.className = 'jdropdown-description';
            node.textContent = text || '&nbsp;';

            // Title
            if (data.title) {
                var title = document.createElement('div');
                title.className = 'jdropdown-title';
                title.innerText = data.title;
                node.appendChild(title);
            }

            // Set content
            if (!obj.options.format) {
                var val = data.value;
            } else {
                var val = data.id;
            }

            // Value
            if (obj.value[val]) {
                item.element.classList.add('jdropdown-selected');
                item.selected = true;
            }

            // Keep DOM accessible
            obj.items.push(item);

            // Add node to item
            item.element.appendChild(node);

            return item;
        }

        obj.appendData = function (data) {
            // Create elements
            if (data.length) {
                // Helpers
                var items = [];
                var groups = [];

                // Prepare data
                for (var i = 0; i < data.length; i++) {
                    // Process groups
                    if (data[i].group) {
                        if (!groups[data[i].group]) {
                            groups[data[i].group] = [];
                        }
                        groups[data[i].group].push(i);
                    } else {
                        items.push(i);
                    }
                }

                // Number of items counter
                var counter = 0;

                // Groups
                var groupNames = Object.keys(groups);

                // Append groups in case exists
                if (groupNames.length > 0) {
                    for (var i = 0; i < groupNames.length; i++) {
                        // Group container
                        var group = document.createElement('div');
                        group.className = 'jdropdown-group';
                        // Group name
                        var groupName = document.createElement('div');
                        groupName.className = 'jdropdown-group-name';
                        groupName.textContent = groupNames[i];
                        // Group arrow
                        var groupArrow = document.createElement('i');
                        groupArrow.className = 'jdropdown-group-arrow jdropdown-group-arrow-down';
                        groupName.appendChild(groupArrow);
                        // Group items
                        var groupContent = document.createElement('div');
                        groupContent.className = 'jdropdown-group-items';
                        for (var j = 0; j < groups[groupNames[i]].length; j++) {
                            var item = obj.createItem(data[groups[groupNames[i]][j]], group, groupNames[i]);

                            if (obj.options.lazyLoading == false || counter < 200) {
                                groupContent.appendChild(item.element);
                                counter++;
                            }
                        }
                        // Group itens
                        group.appendChild(groupName);
                        group.appendChild(groupContent);
                        // Keep group DOM
                        obj.groups.push(group);
                        // Only add to the screen if children on the group
                        if (groupContent.children.length > 0) {
                            // Add DOM to the content
                            content.appendChild(group);
                        }
                    }
                }

                if (items.length) {
                    for (var i = 0; i < items.length; i++) {
                        var item = obj.createItem(data[items[i]]);
                        if (obj.options.lazyLoading == false || counter < 200) {
                            content.appendChild(item.element);
                            counter++;
                        }
                    }
                }
            }
        }

        obj.setData = function (data) {
            // Reset current value
            resetValue();

            // Make sure the content container is blank
            content.textContent = '';

            // Reset
            obj.header.value = '';

            // Reset items and values
            obj.items = [];

            // Prepare data
            if (data && data.length) {
                for (var i = 0; i < data.length; i++) {
                    // Compatibility
                    if (typeof (data[i]) != 'object') {
                        // Correct format
                        if (!obj.options.format) {
                            data[i] = {
                                value: data[i],
                                text: data[i]
                            }
                        } else {
                            data[i] = {
                                id: data[i],
                                name: data[i]
                            }
                        }
                    }
                }

                // Append data
                obj.appendData(data);

                // Update data
                obj.options.data = data;
            } else {
                // Update data
                obj.options.data = [];
            }

            obj.close();
        }

        obj.getData = function () {
            return obj.options.data;
        }

        /**
         * Get position of the item
         */
        obj.getPosition = function (val) {
            for (var i = 0; i < obj.items.length; i++) {
                if (Value(i) == val) {
                    return i;
                }
            }
            return false;
        }

        /**
         * Get dropdown current text
         */
        obj.getText = function (asArray) {
            // Get value
            var v = getText();
            // Return value
            if (asArray) {
                return v;
            } else {
                return v.join('; ');
            }
        }

        /**
         * Get dropdown current value
         */
        obj.getValue = function (asArray) {
            // Get value
            var v = getValue();
            // Return value
            if (asArray) {
                return v;
            } else {
                return v.join(';');
            }
        }

        /**
         * Change event
         */
        var change = function (oldValue) {
            // Lemonade JS
            if (el.value != obj.options.value) {
                el.value = obj.options.value;
                if (typeof (el.oninput) == 'function') {
                    el.oninput({
                        type: 'input',
                        target: el,
                        value: el.value
                    });
                }
            }

            // Events
            if (typeof (obj.options.onchange) == 'function') {
                obj.options.onchange(el, obj, oldValue, obj.options.value);
            }
        }

        /**
         * Set value
         */
        obj.setValue = function (newValue) {
            // Current value
            var oldValue = obj.getValue();
            // New value
            if (Array.isArray(newValue)) {
                newValue = newValue.join(';')
            }

            if (oldValue !== newValue) {
                // Set value
                applyValue(newValue);

                // Change
                change(oldValue);
            }
        }

        obj.resetSelected = function () {
            obj.setValue(null);
        }

        obj.selectIndex = function (index, force) {
            // Make sure is a number
            var index = parseInt(index);

            // Only select those existing elements
            if (obj.items && obj.items[index] && (force === true || obj.items[index].data.disabled !== true)) {
                // Reset cursor to a new position
                obj.setCursor(index, false);

                // Behaviour
                if (!obj.options.multiple) {
                    // Update value
                    if (obj.items[index].selected) {
                        obj.setValue(null);
                    } else {
                        obj.setValue(Value(index));
                    }

                    // Close component
                    obj.close();
                } else {
                    // Old value
                    var oldValue = obj.options.value;

                    // Toggle option
                    if (obj.items[index].selected) {
                        obj.items[index].element.classList.remove('jdropdown-selected');
                        obj.items[index].selected = false;

                        delete obj.value[Value(index)];
                    } else {
                        // Select element
                        obj.items[index].element.classList.add('jdropdown-selected');
                        obj.items[index].selected = true;

                        // Set value
                        obj.value[Value(index)] = Text(index);
                    }

                    // Global value
                    obj.options.value = Object.keys(obj.value).join(';');

                    // Update labels for multiple dropdown
                    if (obj.options.autocomplete == false) {
                        obj.header.value = getText().join('; ');
                    }

                    // Events
                    change(oldValue);
                }
            }
        }

        obj.selectItem = function (item) {
            obj.selectIndex(item.indexValue);
        }

        var exists = function (k, result) {
            for (var j = 0; j < result.length; j++) {
                if (!obj.options.format) {
                    if (result[j].value == k) {
                        return true;
                    }
                } else {
                    if (result[j].id == k) {
                        return true;
                    }
                }
            }
            return false;
        }

        obj.find = function (str) {
            if (obj.search == str.trim()) {
                return false;
            }

            // Search term
            obj.search = str;

            // Reset index
            obj.setCursor();

            // Remove nodes from all groups
            if (obj.groups.length) {
                for (var i = 0; i < obj.groups.length; i++) {
                    obj.groups[i].lastChild.textContent = '';
                }
            }

            // Remove all nodes
            content.textContent = '';

            // Remove current items in the remote search
            if (obj.options.remoteSearch == true) {
                // Reset results
                obj.results = null;
                // URL
                var url = obj.options.url;

                // Ajax call
                let o = {
                    url: url,
                    method: 'GET',
                    data: { q: str },
                    dataType: 'json',
                    success: function (result) {
                        // Reset items
                        obj.items = [];

                        // Add the current selected items to the results in case they are not there
                        var current = Object.keys(obj.value);
                        if (current.length) {
                            for (var i = 0; i < current.length; i++) {
                                if (!exists(current[i], result)) {
                                    if (!obj.options.format) {
                                        result.unshift({value: current[i], text: obj.value[current[i]]});
                                    } else {
                                        result.unshift({id: current[i], name: obj.value[current[i]]});
                                    }
                                }
                            }
                        }
                        // Append data
                        obj.appendData(result);
                        // Show or hide results
                        if (!result.length) {
                            content.style.display = 'none';
                        } else {
                            content.style.display = '';
                        }

                        if (typeof(obj.options.onsearch) === 'function') {
                            obj.options.onsearch(obj, result);
                        }
                    }
                }

                if (typeof(obj.options.onbeforesearch) === 'function') {
                    let ret = obj.options.onbeforesearch(obj, o);
                    if (ret === false) {
                        return;
                    } else if (typeof(ret) === 'object') {
                        o = ret;
                    }
                }

                // Remote search
                ajax(o);
            } else {
                // Search terms
                str = new RegExp(str, 'gi');

                // Reset search
                var results = [];

                // Append options
                for (var i = 0; i < obj.items.length; i++) {
                    // Item label
                    var label = Text(i);
                    // Item title
                    var title = obj.items[i].data.title || '';
                    // Group name
                    var groupName = obj.items[i].data.group || '';
                    // Synonym
                    var synonym = obj.items[i].data.synonym || '';
                    if (synonym) {
                        synonym = synonym.join(' ');
                    }

                    if (str == null || obj.items[i].selected == true || label.match(str) || title.match(str) || groupName.match(str) || synonym.match(str)) {
                        results.push(obj.items[i]);
                    }
                }

                if (!results.length) {
                    content.style.display = 'none';

                    // Results
                    obj.results = null;
                } else {
                    content.style.display = '';

                    // Results
                    obj.results = results;

                    // Show 200 items at once
                    var number = results.length || 0;

                    // Lazyloading
                    if (obj.options.lazyLoading == true && number > 200) {
                        number = 200;
                    }

                    for (var i = 0; i < number; i++) {
                        if (obj.results[i].group) {
                            if (!obj.results[i].group.parentNode) {
                                content.appendChild(obj.results[i].group);
                            }
                            obj.results[i].group.lastChild.appendChild(obj.results[i].element);
                        } else {
                            content.appendChild(obj.results[i].element);
                        }
                    }
                }
            }

            // Auto focus
            if (obj.options.autofocus == true) {
                obj.first();
            }
        }

        obj.open = function () {
            // Focus
            if (!el.classList.contains('jdropdown-focus')) {
                // Current dropdown
                Component.current = obj;

                // Start tracking
                tracking(obj, true);

                // Add focus
                el.classList.add('jdropdown-focus');

                // Animation
                if (helpers.getWindowWidth() < 800) {
                    if (obj.options.type == null || obj.options.type == 'picker') {
                        animation.slideBottom(container, 1);
                    }
                }

                // Filter
                if (obj.options.autocomplete == true) {
                    obj.header.value = obj.search;
                    obj.header.focus();
                }

                // Set cursor for the first or first selected element
                var k = getValue();
                if (k[0]) {
                    var cursor = obj.getPosition(k[0]);
                    if (cursor !== false) {
                        obj.setCursor(cursor);
                    }
                }

                // Container Size
                if (!obj.options.type || obj.options.type == 'default') {
                    var rect = el.getBoundingClientRect();
                    var rectContainer = container.getBoundingClientRect();

                    if (obj.options.position) {
                        container.style.position = 'fixed';
                        if (window.innerHeight < rect.bottom + rectContainer.height) {
                            container.style.top = '';
                            container.style.bottom = (window.innerHeight - rect.top) + 1 + 'px';
                        } else {
                            container.style.top = rect.bottom + 'px';
                            container.style.bottom = '';
                        }
                        container.style.left = rect.left + 'px';
                    } else {
                        if (window.innerHeight < rect.bottom + rectContainer.height) {
                            container.style.top = '';
                            container.style.bottom = rect.height + 1 + 'px';
                        } else {
                            container.style.top = '';
                            container.style.bottom = '';
                        }
                    }

                    container.style.minWidth = rect.width + 'px';

                    if (obj.options.maxWidth) {
                        container.style.maxWidth = obj.options.maxWidth;
                    }

                    if (!obj.items.length && obj.options.autocomplete == true) {
                        content.style.display = 'none';
                    } else {
                        content.style.display = '';
                    }
                }
            }

            // Events
            if (typeof (obj.options.onopen) == 'function') {
                obj.options.onopen(el);
            }
        }

        obj.close = function (ignoreEvents) {
            if (el.classList.contains('jdropdown-focus')) {
                // Update labels
                obj.header.value = obj.getText();
                // Remove cursor
                obj.setCursor();
                // Events
                if (!ignoreEvents && typeof (obj.options.onclose) == 'function') {
                    obj.options.onclose(el);
                }
                // Blur
                if (obj.header.blur) {
                    obj.header.blur();
                }
                // Remove focus
                el.classList.remove('jdropdown-focus');
                // Start tracking
                tracking(obj, false);
                // Current dropdown
                Component.current = null;
            }

            return obj.getValue();
        }

        /**
         * Set cursor
         */
        obj.setCursor = function (index, setPosition) {
            // Remove current cursor
            if (obj.currentIndex != null) {
                // Remove visual cursor
                if (obj.items && obj.items[obj.currentIndex]) {
                    obj.items[obj.currentIndex].element.classList.remove('jdropdown-cursor');
                }
            }

            if (index == undefined) {
                obj.currentIndex = null;
            } else {
                index = parseInt(index);

                // Cursor only for visible items
                if (obj.items[index].element.parentNode) {
                    obj.items[index].element.classList.add('jdropdown-cursor');
                    obj.currentIndex = index;

                    // Update scroll to the cursor element
                    if (setPosition !== false && obj.items[obj.currentIndex].element) {
                        var container = content.scrollTop;
                        var element = obj.items[obj.currentIndex].element;
                        content.scrollTop = element.offsetTop - element.scrollTop + element.clientTop - 95;
                    }
                }
            }
        }

        // Compatibility
        obj.resetCursor = obj.setCursor;
        obj.updateCursor = obj.setCursor;

        /**
         * Reset cursor and selected items
         */
        obj.reset = function () {
            // Reset cursor
            obj.setCursor();

            // Reset selected
            obj.setValue(null);
        }

        /**
         * First available item
         */
        obj.first = function () {
            if (obj.options.lazyLoading === true) {
                obj.loadFirst();
            }

            var items = content.querySelectorAll('.jdropdown-item');
            if (items.length) {
                var newIndex = items[0].indexValue;
                obj.setCursor(newIndex);
            }
        }

        /**
         * Last available item
         */
        obj.last = function () {
            if (obj.options.lazyLoading === true) {
                obj.loadLast();
            }

            var items = content.querySelectorAll('.jdropdown-item');
            if (items.length) {
                var newIndex = items[items.length - 1].indexValue;
                obj.setCursor(newIndex);
            }
        }

        obj.next = function (letter) {
            var newIndex = null;

            if (letter) {
                if (letter.length == 1) {
                    // Current index
                    var current = obj.currentIndex || -1;
                    // Letter
                    letter = letter.toLowerCase();

                    var e = null;
                    var l = null;
                    var items = content.querySelectorAll('.jdropdown-item');
                    if (items.length) {
                        for (var i = 0; i < items.length; i++) {
                            if (items[i].indexValue > current) {
                                if (e = obj.items[items[i].indexValue]) {
                                    if (l = e.element.innerText[0]) {
                                        l = l.toLowerCase();
                                        if (letter == l) {
                                            newIndex = items[i].indexValue;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        obj.setCursor(newIndex);
                    }
                }
            } else {
                if (obj.currentIndex == undefined || obj.currentIndex == null) {
                    obj.first();
                } else {
                    var element = obj.items[obj.currentIndex].element;

                    var next = element.nextElementSibling;
                    if (next) {
                        if (next.classList.contains('jdropdown-group')) {
                            next = next.lastChild.firstChild;
                        }
                        newIndex = next.indexValue;
                    } else {
                        if (element.parentNode.classList.contains('jdropdown-group-items')) {
                            if (next = element.parentNode.parentNode.nextElementSibling) {
                                if (next.classList.contains('jdropdown-group')) {
                                    next = next.lastChild.firstChild;
                                } else if (next.classList.contains('jdropdown-item')) {
                                    newIndex = next.indexValue;
                                } else {
                                    next = null;
                                }
                            }

                            if (next) {
                                newIndex = next.indexValue;
                            }
                        }
                    }

                    if (newIndex !== null) {
                        obj.setCursor(newIndex);
                    }
                }
            }
        }

        obj.prev = function () {
            var newIndex = null;

            if (obj.currentIndex === null) {
                obj.first();
            } else {
                var element = obj.items[obj.currentIndex].element;

                var prev = element.previousElementSibling;
                if (prev) {
                    if (prev.classList.contains('jdropdown-group')) {
                        prev = prev.lastChild.lastChild;
                    }
                    newIndex = prev.indexValue;
                } else {
                    if (element.parentNode.classList.contains('jdropdown-group-items')) {
                        if (prev = element.parentNode.parentNode.previousElementSibling) {
                            if (prev.classList.contains('jdropdown-group')) {
                                prev = prev.lastChild.lastChild;
                            } else if (prev.classList.contains('jdropdown-item')) {
                                newIndex = prev.indexValue;
                            } else {
                                prev = null
                            }
                        }

                        if (prev) {
                            newIndex = prev.indexValue;
                        }
                    }
                }
            }

            if (newIndex !== null) {
                obj.setCursor(newIndex);
            }
        }

        obj.loadFirst = function () {
            // Search
            if (obj.results) {
                var results = obj.results;
            } else {
                var results = obj.items;
            }

            // Show 200 items at once
            var number = results.length || 0;

            // Lazyloading
            if (obj.options.lazyLoading == true && number > 200) {
                number = 200;
            }

            // Reset container
            content.textContent = '';

            // First 200 items
            for (var i = 0; i < number; i++) {
                if (results[i].group) {
                    if (!results[i].group.parentNode) {
                        content.appendChild(results[i].group);
                    }
                    results[i].group.lastChild.appendChild(results[i].element);
                } else {
                    content.appendChild(results[i].element);
                }
            }

            // Scroll go to the begin
            content.scrollTop = 0;
        }

        obj.loadLast = function () {
            // Search
            if (obj.results) {
                var results = obj.results;
            } else {
                var results = obj.items;
            }

            // Show first page
            var number = results.length;

            // Max 200 items
            if (number > 200) {
                number = number - 200;

                // Reset container
                content.textContent = '';

                // First 200 items
                for (var i = number; i < results.length; i++) {
                    if (results[i].group) {
                        if (!results[i].group.parentNode) {
                            content.appendChild(results[i].group);
                        }
                        results[i].group.lastChild.appendChild(results[i].element);
                    } else {
                        content.appendChild(results[i].element);
                    }
                }

                // Scroll go to the begin
                content.scrollTop = content.scrollHeight;
            }
        }

        obj.loadUp = function () {
            var test = false;

            // Search
            if (obj.results) {
                var results = obj.results;
            } else {
                var results = obj.items;
            }

            var items = content.querySelectorAll('.jdropdown-item');
            var fistItem = items[0].indexValue;
            fistItem = obj.items[fistItem];
            var index = results.indexOf(fistItem) - 1;

            if (index > 0) {
                var number = 0;

                while (index > 0 && results[index] && number < 200) {
                    if (results[index].group) {
                        if (!results[index].group.parentNode) {
                            content.insertBefore(results[index].group, content.firstChild);
                        }
                        results[index].group.lastChild.insertBefore(results[index].element, results[index].group.lastChild.firstChild);
                    } else {
                        content.insertBefore(results[index].element, content.firstChild);
                    }

                    index--;
                    number++;
                }

                // New item added
                test = true;
            }

            return test;
        }

        obj.loadDown = function () {
            var test = false;

            // Search
            if (obj.results) {
                var results = obj.results;
            } else {
                var results = obj.items;
            }

            var items = content.querySelectorAll('.jdropdown-item');
            var lastItem = items[items.length - 1].indexValue;
            lastItem = obj.items[lastItem];
            var index = results.indexOf(lastItem) + 1;

            if (index < results.length) {
                var number = 0;
                while (index < results.length && results[index] && number < 200) {
                    if (results[index].group) {
                        if (!results[index].group.parentNode) {
                            content.appendChild(results[index].group);
                        }
                        results[index].group.lastChild.appendChild(results[index].element);
                    } else {
                        content.appendChild(results[index].element);
                    }

                    index++;
                    number++;
                }

                // New item added
                test = true;
            }

            return test;
        }

        init();

        return obj;
    });

    Component.keydown = function (e) {
        var dropdown = null;
        if (dropdown = Component.current) {
            if (e.which == 13 || e.which == 9) {  // enter or tab
                if (dropdown.header.value && dropdown.currentIndex == null && dropdown.options.newOptions) {
                    // if they typed something in, but it matched nothing, and newOptions are allowed, start that flow
                    dropdown.add();
                } else {
                    // Quick Select/Filter
                    if (dropdown.currentIndex == null && dropdown.options.autocomplete == true && dropdown.header.value != "") {
                        dropdown.find(dropdown.header.value);
                    }
                    dropdown.selectIndex(dropdown.currentIndex);
                }
            } else if (e.which == 38) {  // up arrow
                if (dropdown.currentIndex == null) {
                    dropdown.first();
                } else if (dropdown.currentIndex > 0) {
                    dropdown.prev();
                }
                e.preventDefault();
            } else if (e.which == 40) {  // down arrow
                if (dropdown.currentIndex == null) {
                    dropdown.first();
                } else if (dropdown.currentIndex + 1 < dropdown.items.length) {
                    dropdown.next();
                }
                e.preventDefault();
            } else if (e.which == 36) {
                dropdown.first();
                if (!e.target.classList.contains('jdropdown-header')) {
                    e.preventDefault();
                }
            } else if (e.which == 35) {
                dropdown.last();
                if (!e.target.classList.contains('jdropdown-header')) {
                    e.preventDefault();
                }
            } else if (e.which == 27) {
                dropdown.close();
            } else if (e.which == 33) {  // page up
                if (dropdown.currentIndex == null) {
                    dropdown.first();
                } else if (dropdown.currentIndex > 0) {
                    for (var i = 0; i < 7; i++) {
                        dropdown.prev()
                    }
                }
                e.preventDefault();
            } else if (e.which == 34) {  // page down
                if (dropdown.currentIndex == null) {
                    dropdown.first();
                } else if (dropdown.currentIndex + 1 < dropdown.items.length) {
                    for (var i = 0; i < 7; i++) {
                        dropdown.next()
                    }
                }
                e.preventDefault();
            }
        }
    }

    Component.mouseup = function (e) {
        var element = helpers.findElement(e.target, 'jdropdown');
        if (element) {
            var dropdown = element.dropdown;
            if (e.target.classList.contains('jdropdown-header')) {
                if (element.classList.contains('jdropdown-focus') && element.classList.contains('jdropdown-default')) {
                    var rect = element.getBoundingClientRect();

                    if (e.changedTouches && e.changedTouches[0]) {
                        var x = e.changedTouches[0].clientX;
                        var y = e.changedTouches[0].clientY;
                    } else {
                        var x = e.clientX;
                        var y = e.clientY;
                    }

                    if (rect.width - (x - rect.left) < 30) {
                        if (e.target.classList.contains('jdropdown-add')) {
                            dropdown.add();
                        } else {
                            dropdown.close();
                        }
                    } else {
                        if (dropdown.options.autocomplete == false) {
                            dropdown.close();
                        }
                    }
                } else {
                    dropdown.open();
                }
            } else if (e.target.classList.contains('jdropdown-group-name')) {
                var items = e.target.nextSibling.children;
                if (e.target.nextSibling.style.display != 'none') {
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].style.display != 'none') {
                            dropdown.selectItem(items[i]);
                        }
                    }
                }
            } else if (e.target.classList.contains('jdropdown-group-arrow')) {
                if (e.target.classList.contains('jdropdown-group-arrow-down')) {
                    e.target.classList.remove('jdropdown-group-arrow-down');
                    e.target.classList.add('jdropdown-group-arrow-up');
                    e.target.parentNode.nextSibling.style.display = 'none';
                } else {
                    e.target.classList.remove('jdropdown-group-arrow-up');
                    e.target.classList.add('jdropdown-group-arrow-down');
                    e.target.parentNode.nextSibling.style.display = '';
                }
            } else if (e.target.classList.contains('jdropdown-item')) {
                dropdown.selectItem(e.target);
            } else if (e.target.classList.contains('jdropdown-image')) {
                dropdown.selectItem(e.target.parentNode);
            } else if (e.target.classList.contains('jdropdown-description')) {
                dropdown.selectItem(e.target.parentNode);
            } else if (e.target.classList.contains('jdropdown-title')) {
                dropdown.selectItem(e.target.parentNode.parentNode);
            } else if (e.target.classList.contains('jdropdown-close') || e.target.classList.contains('jdropdown-backdrop')) {
                dropdown.close();
            }
        }
    }

    Component.extractFromDom = function (el, options) {
        // Keep reference
        var select = el;
        if (!options) {
            options = {};
        }
        // Prepare configuration
        if (el.getAttribute('multiple') && (!options || options.multiple == undefined)) {
            options.multiple = true;
        }
        if (el.getAttribute('placeholder') && (!options || options.placeholder == undefined)) {
            options.placeholder = el.getAttribute('placeholder');
        }
        if (el.getAttribute('data-autocomplete') && (!options || options.autocomplete == undefined)) {
            options.autocomplete = true;
        }
        if (!options || options.width == undefined) {
            options.width = el.offsetWidth;
        }
        if (el.value && (!options || options.value == undefined)) {
            options.value = el.value;
        }
        if (!options || options.data == undefined) {
            options.data = [];
            for (var j = 0; j < el.children.length; j++) {
                if (el.children[j].tagName == 'OPTGROUP') {
                    for (var i = 0; i < el.children[j].children.length; i++) {
                        options.data.push({
                            value: el.children[j].children[i].value,
                            text: el.children[j].children[i].textContent,
                            group: el.children[j].getAttribute('label'),
                        });
                    }
                } else {
                    options.data.push({
                        value: el.children[j].value,
                        text: el.children[j].textContent,
                    });
                }
            }
        }
        if (!options || options.onchange == undefined) {
            options.onchange = function (a, b, c, d) {
                if (options.multiple == true) {
                    if (obj.items[b].classList.contains('jdropdown-selected')) {
                        select.options[b].setAttribute('selected', 'selected');
                    } else {
                        select.options[b].removeAttribute('selected');
                    }
                } else {
                    select.value = d;
                }
            }
        }
        // Create DIV
        var div = document.createElement('div');
        el.parentNode.insertBefore(div, el);
        el.style.display = 'none';
        el = div;

        return {el: el, options: options};
    }

    return Component;
}

/* harmony default export */ var dropdown = (Dropdown());
;// CONCATENATED MODULE: ./src/plugins/picker.js



function Picker(el, options) {
    // Already created, update options
    if (el.picker) {
        return el.picker.setOptions(options, true);
    }

    // New instance
    var obj = { type: 'picker' };
    obj.options = {};

    var dropdownHeader = null;
    var dropdownContent = null;

    /**
     * The element passed is a DOM element
     */
    var isDOM = function(o) {
        return (o instanceof Element || o instanceof HTMLDocument);
    }

    /**
     * Create the content options
     */
    var createContent = function() {
        dropdownContent.innerHTML = '';

        // Create items
        var keys = Object.keys(obj.options.data);

        // Go though all options
        for (var i = 0; i < keys.length; i++) {
            // Item
            var dropdownItem = document.createElement('div');
            dropdownItem.classList.add('jpicker-item');
            dropdownItem.k = keys[i];
            dropdownItem.v = obj.options.data[keys[i]];
            // Label
            var item = obj.getLabel(keys[i], dropdownItem);
            if (isDOM(item)) {
                dropdownItem.appendChild(item);
            } else {
                dropdownItem.innerHTML = item;
            }
            // Append
            dropdownContent.appendChild(dropdownItem);
        }
    }

    /**
     * Set or reset the options for the picker
     */
    obj.setOptions = function(options, reset) {
        // Default configuration
        var defaults = {
            value: 0,
            data: null,
            render: null,
            onchange: null,
            onmouseover: null,
            onselect: null,
            onopen: null,
            onclose: null,
            onload: null,
            width: null,
            header: true,
            right: false,
            bottom: false,
            content: false,
            columns: null,
            grid: null,
            height: null,
        }

        // Legacy purpose only
        if (options && options.options) {
            options.data = options.options;
        }

        // Loop through the initial configuration
        for (var property in defaults) {
            if (options && options.hasOwnProperty(property)) {
                obj.options[property] = options[property];
            } else {
                if (typeof(obj.options[property]) == 'undefined' || reset === true) {
                    obj.options[property] = defaults[property];
                }
            }
        }

        // Start using the options
        if (obj.options.header === false) {
            dropdownHeader.style.display = 'none';
        } else {
            dropdownHeader.style.display = '';
        }

        // Width
        if (obj.options.width) {
            dropdownHeader.style.width = parseInt(obj.options.width) + 'px';
        } else {
            dropdownHeader.style.width = '';
        }

        // Height
        if (obj.options.height) {
            dropdownContent.style.maxHeight = obj.options.height + 'px';
            dropdownContent.style.overflow = 'scroll';
        } else {
            dropdownContent.style.overflow = '';
        }

        if (obj.options.columns > 0) {
            if (! obj.options.grid) {
                dropdownContent.classList.add('jpicker-columns');
                dropdownContent.style.width = obj.options.width ? obj.options.width : 36 * obj.options.columns + 'px';
            } else {
                dropdownContent.classList.add('jpicker-grid');
                dropdownContent.style.gridTemplateColumns = 'repeat(' + obj.options.grid + ', 1fr)';
            }
        }

        if (isNaN(parseInt(obj.options.value))) {
            obj.options.value = 0;
        }

        // Create list from data
        createContent();

        // Set value
        obj.setValue(obj.options.value);

        // Set options all returns the own instance
        return obj;
    }

    obj.getValue = function() {
        return obj.options.value;
    }

    obj.setValue = function(k, e) {
        // Set label
        obj.setLabel(k);

        // Update value
        obj.options.value = String(k);

        // Lemonade JS
        if (el.value != obj.options.value) {
            el.value = obj.options.value;
            if (typeof(el.oninput) == 'function') {
                el.oninput({
                    type: 'input',
                    target: el,
                    value: el.value
                });
            }
        }

        if (dropdownContent.children[k] && dropdownContent.children[k].getAttribute('type') !== 'generic') {
            obj.close();
        }

        // Call method
        if (e) {
            if (typeof (obj.options.onchange) == 'function') {
                var v = obj.options.data[k];

                obj.options.onchange(el, obj, v, v, k, e);
            }
        }
    }

    obj.getLabel = function(v, item) {
        var label = obj.options.data[v] || null;
        if (typeof(obj.options.render) == 'function') {
            label = obj.options.render(label, item);
        }
        return label;
    }

    obj.setLabel = function(v) {
        var item;

        if (obj.options.content) {
            item = '<i class="material-icons">' + obj.options.content + '</i>';
        } else {
            item = obj.getLabel(v, null);
        }
        // Label
        if (isDOM(item)) {
            dropdownHeader.innerHTML = '';
            dropdownHeader.appendChild(item);
        } else {
            dropdownHeader.innerHTML = item;
        }
    }

    obj.open = function() {
        if (! el.classList.contains('jpicker-focus')) {
            // Start tracking the element
            tracking(obj, true);

            // Open picker
            el.classList.add('jpicker-focus');
            el.focus();

            var top = 0;
            var left = 0;

            dropdownContent.style.marginLeft = '';

            var rectHeader = dropdownHeader.getBoundingClientRect();
            var rectContent = dropdownContent.getBoundingClientRect();

            if (window.innerHeight < rectHeader.bottom + rectContent.height || obj.options.bottom) {
                top = -1 * (rectContent.height + 4);
            } else {
                top = rectHeader.height + 4;
            }

            if (obj.options.right === true) {
                left = -1 * rectContent.width + rectHeader.width;
            }

            if (rectContent.left + left < 0) {
                left = left + rectContent.left + 10;
            }
            if (rectContent.left + rectContent.width > window.innerWidth) {
                left = -1 * (10 + rectContent.left + rectContent.width - window.innerWidth);
            }

            dropdownContent.style.marginTop = parseInt(top) + 'px';
            dropdownContent.style.marginLeft = parseInt(left) + 'px';

            //dropdownContent.style.marginTop
            if (typeof obj.options.onopen == 'function') {
                obj.options.onopen(el, obj);
            }
        }
    }

    obj.close = function() {
        if (el.classList.contains('jpicker-focus')) {
            el.classList.remove('jpicker-focus');

            // Start tracking the element
            tracking(obj, false);

            if (typeof obj.options.onclose == 'function') {
                obj.options.onclose(el, obj);
            }
        }
    }

    /**
     * Create floating picker
     */
    var init = function() {
        // Class
        el.classList.add('jpicker');
        el.setAttribute('tabindex', '900');
        el.onmousedown = function(e) {
            if (! el.classList.contains('jpicker-focus')) {
                obj.open();
            }
        }

        // Dropdown Header
        dropdownHeader = document.createElement('div');
        dropdownHeader.classList.add('jpicker-header');

        // Dropdown content
        dropdownContent = document.createElement('div');
        dropdownContent.classList.add('jpicker-content');
        dropdownContent.onclick = function(e) {
            var item = helpers.findElement(e.target, 'jpicker-item');
            if (item) {
                if (item.parentNode === dropdownContent) {
                    // Update label
                    obj.setValue(item.k, e);
                }
            }
        }
        // Append content and header
        el.appendChild(dropdownHeader);
        el.appendChild(dropdownContent);

        // Default value
        el.value = options.value || 0;

        // Set options
        obj.setOptions(options);

        if (typeof(obj.options.onload) == 'function') {
            obj.options.onload(el, obj);
        }

        // Change
        el.change = obj.setValue;

        // Global generic value handler
        el.val = function(val) {
            if (val === undefined) {
                return obj.getValue();
            } else {
                obj.setValue(val);
            }
        }

        // Reference
        el.picker = obj;
    }

    init();

    return obj;
}
;// CONCATENATED MODULE: ./src/plugins/toolbar.js





function Toolbar(el, options) {
    // New instance
    var obj = { type:'toolbar' };
    obj.options = {};

    // Default configuration
    var defaults = {
        app: null,
        container: false,
        badge: false,
        title: false,
        responsive: false,
        maxWidth: null,
        bottom: true,
        items: [],
    }

    // Loop through our object
    for (var property in defaults) {
        if (options && options.hasOwnProperty(property)) {
            obj.options[property] = options[property];
        } else {
            obj.options[property] = defaults[property];
        }
    }

    if (! el && options.app && options.app.el) {
        el = document.createElement('div');
        options.app.el.appendChild(el);
    }

    // Arrow
    var toolbarArrow = document.createElement('div');
    toolbarArrow.classList.add('jtoolbar-item');
    toolbarArrow.classList.add('jtoolbar-arrow');

    var toolbarFloating = document.createElement('div');
    toolbarFloating.classList.add('jtoolbar-floating');
    toolbarArrow.appendChild(toolbarFloating);

    obj.selectItem = function(element) {
        var elements = toolbarContent.children;
        for (var i = 0; i < elements.length; i++) {
            if (element != elements[i]) {
                elements[i].classList.remove('jtoolbar-selected');
            }
        }
        element.classList.add('jtoolbar-selected');
    }

    obj.hide = function() {
        animation.slideBottom(el, 0, function() {
            el.style.display = 'none';
        });
    }

    obj.show = function() {
        el.style.display = '';
        animation.slideBottom(el, 1);
    }

    obj.get = function() {
        return el;
    }

    obj.setBadge = function(index, value) {
        toolbarContent.children[index].children[1].firstChild.innerHTML = value;
    }

    obj.destroy = function() {
        toolbar.remove();
        el.innerHTML = '';
    }

    obj.update = function(a, b) {
        for (var i = 0; i < toolbarContent.children.length; i++) {
            // Toolbar element
            var toolbarItem = toolbarContent.children[i];
            // State management
            if (typeof(toolbarItem.updateState) == 'function') {
                toolbarItem.updateState(el, obj, toolbarItem, a, b);
            }
        }
        for (var i = 0; i < toolbarFloating.children.length; i++) {
            // Toolbar element
            var toolbarItem = toolbarFloating.children[i];
            // State management
            if (typeof(toolbarItem.updateState) == 'function') {
                toolbarItem.updateState(el, obj, toolbarItem, a, b);
            }
        }
    }

    obj.create = function(items) {
        // Reset anything in the toolbar
        toolbarContent.innerHTML = '';
        // Create elements in the toolbar
        for (var i = 0; i < items.length; i++) {
            var toolbarItem = document.createElement('div');
            toolbarItem.classList.add('jtoolbar-item');

            if (items[i].width) {
                toolbarItem.style.width = parseInt(items[i].width) + 'px'; 
            }

            if (items[i].k) {
                toolbarItem.k = items[i].k;
            }

            if (items[i].tooltip) {
                toolbarItem.setAttribute('title', items[i].tooltip);
            }

            // Id
            if (items[i].id) {
                toolbarItem.setAttribute('id', items[i].id);
            }

            // Selected
            if (items[i].updateState) {
                toolbarItem.updateState = items[i].updateState;
            }

            if (items[i].active) {
                toolbarItem.classList.add('jtoolbar-active');
            }

            if (items[i].disabled) {
                toolbarItem.classList.add('jtoolbar-disabled');
            }

            if (items[i].type == 'select' || items[i].type == 'dropdown') {
                Picker(toolbarItem, items[i]);
            } else if (items[i].type == 'divisor') {
                toolbarItem.classList.add('jtoolbar-divisor');
            } else if (items[i].type == 'label') {
                toolbarItem.classList.add('jtoolbar-label');
                toolbarItem.innerHTML = items[i].content;
            } else {
                // Material icons
                var toolbarIcon = document.createElement('i');
                if (typeof(items[i].class) === 'undefined') {
                    toolbarIcon.classList.add('material-icons');
                } else {
                    var c = items[i].class.split(' ');
                    for (var j = 0; j < c.length; j++) {
                        toolbarIcon.classList.add(c[j]);
                    }
                }
                toolbarIcon.innerHTML = items[i].content ? items[i].content : '';
                toolbarItem.appendChild(toolbarIcon);

                // Badge options
                if (obj.options.badge == true) {
                    var toolbarBadge = document.createElement('div');
                    toolbarBadge.classList.add('jbadge');
                    var toolbarBadgeContent = document.createElement('div');
                    toolbarBadgeContent.innerHTML = items[i].badge ? items[i].badge : '';
                    toolbarBadge.appendChild(toolbarBadgeContent);
                    toolbarItem.appendChild(toolbarBadge);
                }

                // Title
                if (items[i].title) {
                    if (obj.options.title == true) {
                        var toolbarTitle = document.createElement('span');
                        toolbarTitle.innerHTML = items[i].title;
                        toolbarItem.appendChild(toolbarTitle);
                    } else {
                        toolbarItem.setAttribute('title', items[i].title);
                    }
                }

                if (obj.options.app && items[i].route) {
                    // Route
                    toolbarItem.route = items[i].route;
                    // Onclick for route
                    toolbarItem.onclick = function() {
                        obj.options.app.pages(this.route);
                    }
                    // Create pages
                    obj.options.app.pages(items[i].route, {
                        toolbarItem: toolbarItem,
                        closed: true
                    });
                }

                // Render
                if (typeof(items[i].render) === 'function') {
                    items[i].render(toolbarItem, items[i]);
                }
            }

            if (items[i].onclick) {
                toolbarItem.onclick = items[i].onclick.bind(items[i], el, obj, toolbarItem);
            }

            toolbarContent.appendChild(toolbarItem);
        }

        // Fits to the page
        setTimeout(function() {
            obj.refresh();
        }, 0);
    }

    obj.open = function() {
        toolbarArrow.classList.add('jtoolbar-arrow-selected');

        var rectElement = el.getBoundingClientRect();
        var rect = toolbarFloating.getBoundingClientRect();
        if (rect.bottom > window.innerHeight || obj.options.bottom) {
            toolbarFloating.style.bottom = '0';
        } else {
            toolbarFloating.style.removeProperty('bottom');
        }

        toolbarFloating.style.right = '0';

        toolbarArrow.children[0].focus();
        // Start tracking
        tracking(obj, true);
    }

    obj.close = function() {
        toolbarArrow.classList.remove('jtoolbar-arrow-selected')
        // End tracking
        tracking(obj, false);
    }

    obj.refresh = function() {
        if (obj.options.responsive == true) {
            // Width of the c
            var rect = el.parentNode.getBoundingClientRect();
            if (! obj.options.maxWidth) {
                obj.options.maxWidth = rect.width;
            }
            // Available parent space
            var available = parseInt(obj.options.maxWidth);
            // Remove arrow
            if (toolbarArrow.parentNode) {
                toolbarArrow.parentNode.removeChild(toolbarArrow);
            }
            // Move all items to the toolbar
            while (toolbarFloating.firstChild) {
                toolbarContent.appendChild(toolbarFloating.firstChild);
            }
            // Toolbar is larger than the parent, move elements to the floating element
            if (available < toolbarContent.offsetWidth) {
                // Give space to the floating element
                available -= 50;
                // Move to the floating option
                while (toolbarContent.lastChild && available < toolbarContent.offsetWidth) {
                    toolbarFloating.insertBefore(toolbarContent.lastChild, toolbarFloating.firstChild);
                }
            }
            // Show arrow
            if (toolbarFloating.children.length > 0) {
                toolbarContent.appendChild(toolbarArrow);
            }
        }
    }

    obj.setReadonly = function(state) {
        state = state ? 'add' : 'remove';
        el.classList[state]('jtoolbar-disabled');
    }

    el.onclick = function(e) {
        var element = helpers.findElement(e.target, 'jtoolbar-item');
        if (element) {
            obj.selectItem(element);
        }

        if (e.target.classList.contains('jtoolbar-arrow')) {
            obj.open();
        }
    }

    window.addEventListener('resize', function() {
        obj.refresh();
    });

    // Toolbar
    el.classList.add('jtoolbar');
    // Reset content
    el.innerHTML = '';
    // Container
    if (obj.options.container == true) {
        el.classList.add('jtoolbar-container');
    }
    // Content
    var toolbarContent = document.createElement('div');
    el.appendChild(toolbarContent);
    // Special toolbar for mobile applications
    if (obj.options.app) {
        el.classList.add('jtoolbar-mobile');
    }
    // Create toolbar
    obj.create(obj.options.items);
    // Shortcut
    el.toolbar = obj;

    return obj;
}
;// CONCATENATED MODULE: ./src/plugins/editor.js





function Editor() {
    var Component = (function(el, options) {
        // New instance
        var obj = { type:'editor' };
        obj.options = {};

        // Default configuration
        var defaults = {
            // Load data from a remove location
            url: null,
            // Initial HTML content
            value: '',
            // Initial snippet
            snippet: null,
            // Add toolbar
            toolbar: true,
            toolbarOnTop: false,
            // Website parser is to read websites and images from cross domain
            remoteParser: null,
            // Placeholder
            placeholder: null,
            // Parse URL
            filterPaste: true,
            // Accept drop files
            dropZone: true,
            dropAsSnippet: false,
            acceptImages: true,
            acceptFiles: false,
            maxFileSize: 5000000,
            allowImageResize: true,
            // Style
            maxHeight: null,
            height: null,
            focus: false,
            // Events
            onclick: null,
            onfocus: null,
            onblur: null,
            onload: null,
            onkeyup: null,
            onkeydown: null,
            onchange: null,
            extensions: null,
            type: null,
        };

        // Loop through our object
        for (var property in defaults) {
            if (options && options.hasOwnProperty(property)) {
                obj.options[property] = options[property];
            } else {
                obj.options[property] = defaults[property];
            }
        }

        // Private controllers
        var editorTimer = null;
        var editorAction = null;
        var files = [];

        // Keep the reference for the container
        obj.el = el;

        if (typeof(obj.options.onclick) == 'function') {
            el.onclick = function(e) {
                obj.options.onclick(el, obj, e);
            }
        }

        // Prepare container
        el.classList.add('jeditor-container');

        // Snippet
        var snippet = document.createElement('div');
        snippet.className = 'jsnippet';
        snippet.setAttribute('contenteditable', false);

        // Toolbar
        var toolbar = document.createElement('div');
        toolbar.className = 'jeditor-toolbar';

        obj.editor = document.createElement('div');
        obj.editor.setAttribute('contenteditable', true);
        obj.editor.setAttribute('spellcheck', false);
        obj.editor.classList.add('jeditor');

        // Placeholder
        if (obj.options.placeholder) {
            obj.editor.setAttribute('data-placeholder', obj.options.placeholder);
        }

        // Max height
        if (obj.options.maxHeight || obj.options.height) {
            obj.editor.style.overflowY = 'auto';

            if (obj.options.maxHeight) {
                obj.editor.style.maxHeight = obj.options.maxHeight;
            }
            if (obj.options.height) {
                obj.editor.style.height = obj.options.height;
            }
        }

        // Set editor initial value
        if (obj.options.url) {
            ajax({
                url: obj.options.url,
                dataType: 'html',
                success: function(result) {
                    obj.editor.innerHTML = result;

                    Component.setCursor(obj.editor, obj.options.focus == 'initial' ? true : false);
                }
            })
        } else {
            if (obj.options.value) {
                obj.editor.innerHTML = obj.options.value;
            } else {
                // Create from existing elements
                for (var i = 0; i < el.children.length; i++) {
                    obj.editor.appendChild(el.children[i]);
                }
            }
        }

        // Make sure element is empty
        el.innerHTML = '';

        /**
         * Onchange event controllers
         */
        var change = function(e) {
            if (typeof(obj.options.onchange) == 'function') {
                obj.options.onchange(el, obj, e);
            }

            // Update value
            obj.options.value = obj.getData();

            // Lemonade JS
            if (el.value != obj.options.value) {
                el.value = obj.options.value;
                if (typeof(el.oninput) == 'function') {
                    el.oninput({
                        type: 'input',
                        target: el,
                        value: el.value
                    });
                }
            }
        }

        /**
         * Extract images from a HTML string
         */
        var extractImageFromHtml = function(html) {
            // Create temp element
            var div = document.createElement('div');
            div.innerHTML = html;

            // Extract images
            var img = div.querySelectorAll('img');

            if (img.length) {
                for (var i = 0; i < img.length; i++) {
                    obj.addImage(img[i].src);
                }
            }
        }

        /**
         * Insert node at caret
         */
        var insertNodeAtCaret = function(newNode) {
            var sel, range;

            if (window.getSelection) {
                sel = window.getSelection();
                if (sel.rangeCount) {
                    range = sel.getRangeAt(0);
                    var selectedText = range.toString();
                    range.deleteContents();
                    range.insertNode(newNode);
                    // move the cursor after element
                    range.setStartAfter(newNode);
                    range.setEndAfter(newNode);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        }

        var updateTotalImages = function() {
            var o = null;
            if (o = snippet.children[0]) {
                // Make sure is a grid
                if (! o.classList.contains('jslider-grid')) {
                    o.classList.add('jslider-grid');
                }
                // Quantify of images
                var number = o.children.length;
                // Set the configuration of the grid
                o.setAttribute('data-number', number > 4 ? 4 : number);
                // Total of images inside the grid
                if (number > 4) {
                    o.setAttribute('data-total', number - 4);
                } else {
                    o.removeAttribute('data-total');
                }
            }
        }

        /**
         * Append image to the snippet
         */
        var appendImage = function(image) {
            if (! snippet.innerHTML) {
                obj.appendSnippet({});
            }
            snippet.children[0].appendChild(image);
            updateTotalImages();
        }

        /**
         * Append snippet
         * @Param object data
         */
        obj.appendSnippet = function(data) {
            // Reset snippet
            snippet.innerHTML = '';

            // Attributes
            var a = [ 'image', 'title', 'description', 'host', 'url' ];

            for (var i = 0; i < a.length; i++) {
                var div = document.createElement('div');
                div.className = 'jsnippet-' + a[i];
                div.setAttribute('data-k', a[i]);
                snippet.appendChild(div);
                if (data[a[i]]) {
                    if (a[i] == 'image') {
                        if (! Array.isArray(data.image)) {
                            data.image = [ data.image ];
                        }
                        for (var j = 0; j < data.image.length; j++) {
                            var img = document.createElement('img');
                            img.src = data.image[j];
                            div.appendChild(img);
                        }
                    } else {
                        div.innerHTML = data[a[i]];
                    }
                }
            }

            obj.editor.appendChild(document.createElement('br'));
            obj.editor.appendChild(snippet);
        }

        /**
         * Set editor value
         */
        obj.setData = function(o) {
            if (typeof(o) == 'object') {
                obj.editor.innerHTML = o.content;
            } else {
                obj.editor.innerHTML = o;
            }

            if (obj.options.focus) {
                Component.setCursor(obj.editor, true);
            }

            // Reset files container
            files = [];
        }

        obj.getFiles = function() {
            var f = obj.editor.querySelectorAll('.jfile');
            var d = [];
            for (var i = 0; i < f.length; i++) {
                if (files[f[i].src]) {
                    d.push(files[f[i].src]);
                }
            }
            return d;
        }

        obj.getText = function() {
            return obj.editor.innerText;
        }

        /**
         * Get editor data
         */
        obj.getData = function(json) {
            if (! json) {
                var data = obj.editor.innerHTML;
            } else {
                var data = {
                    content : '',
                }

                // Get snippet
                if (snippet.innerHTML) {
                    var index = 0;
                    data.snippet = {};
                    for (var i = 0; i < snippet.children.length; i++) {
                        // Get key from element
                        var key = snippet.children[i].getAttribute('data-k');
                        if (key) {
                            if (key == 'image') {
                                if (! data.snippet.image) {
                                    data.snippet.image = [];
                                }
                                // Get all images
                                for (var j = 0; j < snippet.children[i].children.length; j++) {
                                    data.snippet.image.push(snippet.children[i].children[j].getAttribute('src'))
                                }
                            } else {
                                data.snippet[key] = snippet.children[i].innerHTML;
                            }
                        }
                    }
                }

                // Get files
                var f = Object.keys(files);
                if (f.length) {
                    data.files = [];
                    for (var i = 0; i < f.length; i++) {
                        data.files.push(files[f[i]]);
                    }
                }

                // Get content
                var d = document.createElement('div');
                d.innerHTML = obj.editor.innerHTML;
                var s = d.querySelector('.jsnippet');
                if (s) {
                    s.remove();
                }

                var text = d.innerHTML;
                text = text.replace(/<br>/g, "\n");
                text = text.replace(/<\/div>/g, "<\/div>\n");
                text = text.replace(/<(?:.|\n)*?>/gm, "");
                data.content = text.trim();

                // Process extensions
                processExtensions('getData', data);
            }

            return data;
        }

        // Reset
        obj.reset = function() {
            obj.editor.innerHTML = '';
            snippet.innerHTML = '';
            files = [];
        }

        obj.addPdf = function(data) {
            if (data.result.substr(0,4) != 'data') {
                console.error('Invalid source');
            } else {
                var canvas = document.createElement('canvas');
                canvas.width = 60;
                canvas.height = 60;

                var img = new Image();
                var ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                canvas.toBlob(function(blob) {
                    var newImage = document.createElement('img');
                    newImage.src = window.URL.createObjectURL(blob);
                    newImage.title = data.name;
                    newImage.className = 'jfile pdf';

                    files[newImage.src] = {
                        file: newImage.src,
                        extension: 'pdf',
                        content: data.result,
                    }

                    //insertNodeAtCaret(newImage);
                    document.execCommand('insertHtml', false, newImage.outerHTML);
                });
            }
        }

        obj.addImage = function(src, asSnippet) {
            if (! obj.options.acceptImages) {
                return;
            }

            if (! src) {
                src = '';
            }

            if (src.substr(0,4) != 'data' && ! obj.options.remoteParser) {
                console.error('remoteParser not defined in your initialization');
            } else {
                // This is to process cross domain images
                if (src.substr(0,4) == 'data') {
                    var extension = src.split(';')
                    extension = extension[0].split('/');
                    extension = extension[1];
                } else {
                    var extension = src.substr(src.lastIndexOf('.') + 1);
                    // Work for cross browsers
                    src = obj.options.remoteParser + src;
                }

                var img = new Image();

                img.onload = function onload() {
                    var canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;

                    var ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                    canvas.toBlob(function(blob) {
                        var newImage = document.createElement('img');
                        newImage.src = window.URL.createObjectURL(blob);
                        newImage.classList.add('jfile');
                        newImage.setAttribute('tabindex', '900');
                        newImage.setAttribute('width', img.width);
                        newImage.setAttribute('height', img.height);
                        files[newImage.src] = {
                            file: newImage.src,
                            extension: extension,
                            content: canvas.toDataURL(),
                        }

                        if (obj.options.dropAsSnippet || asSnippet) {
                            appendImage(newImage);
                            // Just to understand the attachment is part of a snippet
                            files[newImage.src].snippet = true;
                        } else {
                            //insertNodeAtCaret(newImage);
                            document.execCommand('insertHtml', false, newImage.outerHTML);
                        }

                        change();
                    });
                };

                img.src = src;
            }
        }

        obj.addFile = function(files) {
            var reader = [];

            for (var i = 0; i < files.length; i++) {
                if (files[i].size > obj.options.maxFileSize) {
                    alert('The file is too big');
                } else {
                    // Only PDF or Images
                    var type = files[i].type.split('/');

                    if (type[0] == 'image') {
                        type = 1;
                    } else if (type[1] == 'pdf') {
                        type = 2;
                    } else {
                        type = 0;
                    }

                    if (type) {
                        // Create file
                        reader[i] = new FileReader();
                        reader[i].index = i;
                        reader[i].type = type;
                        reader[i].name = files[i].name;
                        reader[i].date = files[i].lastModified;
                        reader[i].size = files[i].size;
                        reader[i].addEventListener("load", function (data) {
                            // Get result
                            if (data.target.type == 2) {
                                if (obj.options.acceptFiles == true) {
                                    obj.addPdf(data.target);
                                }
                            } else {
                                obj.addImage(data.target.result);
                            }
                        }, false);

                        reader[i].readAsDataURL(files[i])
                    } else {
                        alert('The extension is not allowed');
                    }
                }
            }
        }

        // Destroy
        obj.destroy = function() {
            obj.editor.removeEventListener('mouseup', editorMouseUp);
            obj.editor.removeEventListener('mousedown', editorMouseDown);
            obj.editor.removeEventListener('mousemove', editorMouseMove);
            obj.editor.removeEventListener('keyup', editorKeyUp);
            obj.editor.removeEventListener('keydown', editorKeyDown);
            obj.editor.removeEventListener('dragstart', editorDragStart);
            obj.editor.removeEventListener('dragenter', editorDragEnter);
            obj.editor.removeEventListener('dragover', editorDragOver);
            obj.editor.removeEventListener('drop', editorDrop);
            obj.editor.removeEventListener('paste', editorPaste);
            obj.editor.removeEventListener('blur', editorBlur);
            obj.editor.removeEventListener('focus', editorFocus);

            el.editor = null;
            el.classList.remove('jeditor-container');

            toolbar.remove();
            snippet.remove();
            obj.editor.remove();
        }

        obj.upload = function() {
            helpers.click(obj.file);
        }

        // Elements to be removed
        var remove = [
            HTMLUnknownElement,
            HTMLAudioElement,
            HTMLEmbedElement,
            HTMLIFrameElement,
            HTMLTextAreaElement,
            HTMLInputElement,
            HTMLScriptElement
        ];

        // Valid properties
        var validProperty = ['width', 'height', 'align', 'border', 'src', 'tabindex'];

        // Valid CSS attributes
        var validStyle = ['color', 'font-weight', 'font-size', 'background', 'background-color', 'margin'];

        var parse = function(element) {
           // Remove attributes
           if (element.attributes && element.attributes.length) {
               var image = null;
               var style = null;
               // Process style attribute
               var elementStyle = element.getAttribute('style');
               if (elementStyle) {
                   style = [];
                   var t = elementStyle.split(';');
                   for (var j = 0; j < t.length; j++) {
                       var v = t[j].trim().split(':');
                       if (validStyle.indexOf(v[0].trim()) >= 0) {
                           var k = v.shift();
                           var v = v.join(':');
                           style.push(k + ':' + v);
                       }
                   }
               }
               // Process image
               if (element.tagName.toUpperCase() == 'IMG') {
                   if (! obj.options.acceptImages || ! element.src) {
                       element.parentNode.removeChild(element);
                   } else {
                       // Check if is data
                       element.setAttribute('tabindex', '900');
                       // Check attributes for persistence
                       obj.addImage(element.src);
                   }
               }
               // Remove attributes
               var attr = [];
               for (var i = 0; i < element.attributes.length; i++) {
                   attr.push(element.attributes[i].name);
               }
               if (attr.length) {
                   attr.forEach(function(v) {
                       if (validProperty.indexOf(v) == -1) {
                           element.removeAttribute(v);
                       } else {
                           // Protection XSS
                           if (element.attributes[i].value.indexOf('<') !== -1) {
                               element.attributes[i].value.replace('<', '&#60;');
                           }
                       }
                   });
               }
               element.style = '';
               // Add valid style
               if (style && style.length) {
                   element.setAttribute('style', style.join(';'));
               }
           }
           // Parse children
           if (element.children.length) {
               for (var i = 0; i < element.children.length; i++) {
                   parse(element.children[i]);
               }
           }

           if (remove.indexOf(element.constructor) >= 0) {
               element.remove();
           }
        }

        var select = function(e) {
            var s = window.getSelection()
            var r = document.createRange();
            r.selectNode(e);
            s.addRange(r)
        }

        var filter = function(data) {
            if (data) {
                data = data.replace(new RegExp('<!--(.*?)-->', 'gsi'), '');
            }
            var parser = new DOMParser();
            var d = parser.parseFromString(data, "text/html");
            parse(d);
            var span = document.createElement('span');
            span.innerHTML = d.firstChild.innerHTML;
            return span;
        }

        var editorPaste = function(e) {
            if (obj.options.filterPaste == true) {
                if (e.clipboardData || e.originalEvent.clipboardData) {
                    var html = (e.originalEvent || e).clipboardData.getData('text/html');
                    var text = (e.originalEvent || e).clipboardData.getData('text/plain');
                    var file = (e.originalEvent || e).clipboardData.files
                } else if (window.clipboardData) {
                    var html = window.clipboardData.getData('Html');
                    var text = window.clipboardData.getData('Text');
                    var file = window.clipboardData.files
                }

                if (file.length) {
                    // Paste a image from the clipboard
                    obj.addFile(file);
                } else {
                    if (! html) {
                        html = text.split('\r\n');
                        if (! e.target.innerText) {
                            html.map(function(v) {
                                var d = document.createElement('div');
                                d.innerText = v;
                                obj.editor.appendChild(d);
                            });
                        } else {
                            html = html.map(function(v) {
                                return '<div>' + v + '</div>';
                            });
                            document.execCommand('insertHtml', false, html.join(''));
                        }
                    } else {
                        var d = filter(html);
                        // Paste to the editor
                        //insertNodeAtCaret(d);
                        document.execCommand('insertHtml', false, d.innerHTML);
                    }
                }

                e.preventDefault();
            }
        }

        var editorDragStart = function(e) {
            if (editorAction && editorAction.e) {
                e.preventDefault();
            }
        }

        var editorDragEnter = function(e) {
            if (editorAction || obj.options.dropZone == false) {
                // Do nothing
            } else {
                el.classList.add('jeditor-dragging');
                e.preventDefault();
            }
        }

        var editorDragOver = function(e) {
            if (editorAction || obj.options.dropZone == false) {
                // Do nothing
            } else {
                if (editorTimer) {
                    clearTimeout(editorTimer);
                }

                editorTimer = setTimeout(function() {
                    el.classList.remove('jeditor-dragging');
                }, 100);
                e.preventDefault();
            }
        }

        var editorDrop = function(e) {
            if (editorAction || obj.options.dropZone == false) {
                // Do nothing
            } else {
                // Position caret on the drop
                var range = null;
                if (document.caretRangeFromPoint) {
                    range=document.caretRangeFromPoint(e.clientX, e.clientY);
                } else if (e.rangeParent) {
                    range=document.createRange();
                    range.setStart(e.rangeParent,e.rangeOffset);
                }
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
                sel.anchorNode.parentNode.focus();

                var html = (e.originalEvent || e).dataTransfer.getData('text/html');
                var text = (e.originalEvent || e).dataTransfer.getData('text/plain');
                var file = (e.originalEvent || e).dataTransfer.files;

                if (file.length) {
                    obj.addFile(file);
                } else if (text) {
                    extractImageFromHtml(html);
                }

                el.classList.remove('jeditor-dragging');
                e.preventDefault();
            }
        }

        var editorBlur = function(e) {
            // Process extensions
            processExtensions('onevent', e);
            // Apply changes
            change(e);
            // Blur
            if (typeof(obj.options.onblur) == 'function') {
                obj.options.onblur(el, obj, e);
            }
        }

        var editorFocus = function(e) {
            // Focus
            if (typeof(obj.options.onfocus) == 'function') {
                obj.options.onfocus(el, obj, e);
            }
        }

        var editorKeyUp = function(e) {
            if (! obj.editor.innerHTML) {
                obj.editor.innerHTML = '<div><br></div>';
            }
            if (typeof(obj.options.onkeyup) == 'function') {
                obj.options.onkeyup(el, obj, e);
            }
        }

        var editorKeyDown = function(e) {
            // Process extensions
            processExtensions('onevent', e);

            if (e.key == 'Delete') {
                if (e.target.tagName == 'IMG') {
                    var parent = e.target.parentNode;
                    select(e.target);
                    if (parent.classList.contains('jsnippet-image')) {
                        updateTotalImages();
                    }
                }
            }

            if (typeof(obj.options.onkeydown) == 'function') {
                obj.options.onkeydown(el, obj, e);
            }
        }

        var editorMouseUp = function(e) {
            if (editorAction && editorAction.e) {
                editorAction.e.classList.remove('resizing');

                if (editorAction.e.changed == true) {
                    var image = editorAction.e.cloneNode()
                    image.width = parseInt(editorAction.e.style.width) || editorAction.e.getAttribute('width');
                    image.height = parseInt(editorAction.e.style.height) || editorAction.e.getAttribute('height');
                    editorAction.e.style.width = '';
                    editorAction.e.style.height = '';
                    select(editorAction.e);
                    document.execCommand('insertHtml', false, image.outerHTML);
                }
            }

            editorAction = false;
        }

        var editorMouseDown = function(e) {
            var close = function(snippet) {
                var rect = snippet.getBoundingClientRect();
                if (rect.width - (e.clientX - rect.left) < 40 && e.clientY - rect.top < 40) {
                    snippet.innerHTML = '';
                    snippet.remove();
                }
            }

            if (e.target.tagName == 'IMG') {
                if (e.target.style.cursor) {
                    var rect = e.target.getBoundingClientRect();
                    editorAction = {
                        e: e.target,
                        x: e.clientX,
                        y: e.clientY,
                        w: rect.width,
                        h: rect.height,
                        d: e.target.style.cursor,
                    }

                    if (! e.target.getAttribute('width')) {
                        e.target.setAttribute('width', rect.width)
                    }

                    if (! e.target.getAttribute('height')) {
                        e.target.setAttribute('height', rect.height)
                    }

                    var s = window.getSelection();
                    if (s.rangeCount) {
                        for (var i = 0; i < s.rangeCount; i++) {
                            s.removeRange(s.getRangeAt(i));
                        }
                    }

                    e.target.classList.add('resizing');
                } else {
                    editorAction = true;
                }
            } else {
                if (e.target.classList.contains('jsnippet')) {
                    close(e.target);
                } else if (e.target.parentNode.classList.contains('jsnippet')) {
                    close(e.target.parentNode);
                }

                editorAction = true;
            }
        }

        var editorMouseMove = function(e) {
            if (e.target.tagName == 'IMG' && ! e.target.parentNode.classList.contains('jsnippet-image') && obj.options.allowImageResize == true) {
                if (e.target.getAttribute('tabindex')) {
                    var rect = e.target.getBoundingClientRect();
                    if (e.clientY - rect.top < 5) {
                        if (rect.width - (e.clientX - rect.left) < 5) {
                            e.target.style.cursor = 'ne-resize';
                        } else if (e.clientX - rect.left < 5) {
                            e.target.style.cursor = 'nw-resize';
                        } else {
                            e.target.style.cursor = 'n-resize';
                        }
                    } else if (rect.height - (e.clientY - rect.top) < 5) {
                        if (rect.width - (e.clientX - rect.left) < 5) {
                            e.target.style.cursor = 'se-resize';
                        } else if (e.clientX - rect.left < 5) {
                            e.target.style.cursor = 'sw-resize';
                        } else {
                            e.target.style.cursor = 's-resize';
                        }
                    } else if (rect.width - (e.clientX - rect.left) < 5) {
                        e.target.style.cursor = 'e-resize';
                    } else if (e.clientX - rect.left < 5) {
                        e.target.style.cursor = 'w-resize';
                    } else {
                        e.target.style.cursor = '';
                    }
                }
            }

            // Move
            if (e.which == 1 && editorAction && editorAction.d) {
                if (editorAction.d == 'e-resize' || editorAction.d == 'ne-resize' ||  editorAction.d == 'se-resize') {
                    editorAction.e.style.width = (editorAction.w + (e.clientX - editorAction.x));

                    if (e.shiftKey) {
                        var newHeight = (e.clientX - editorAction.x) * (editorAction.h / editorAction.w);
                        editorAction.e.style.height = editorAction.h + newHeight;
                    } else {
                        var newHeight =  null;
                    }
                }

                if (! newHeight) {
                    if (editorAction.d == 's-resize' || editorAction.d == 'se-resize' || editorAction.d == 'sw-resize') {
                        if (! e.shiftKey) {
                            editorAction.e.style.height = editorAction.h + (e.clientY - editorAction.y);
                        }
                    }
                }

                editorAction.e.changed = true;
            }
        }

        var processExtensions = function(method, data) {
            if (obj.options.extensions) {
                var ext = Object.keys(obj.options.extensions);
                if (ext.length) {
                    for (var i = 0; i < ext.length; i++)
                        if (obj.options.extensions[ext[i]] && typeof(obj.options.extensions[ext[i]][method]) == 'function') {
                            obj.options.extensions[ext[i]][method].call(obj, data);
                        }
                }
            }
        }

        var loadExtensions = function() {
            if (obj.options.extensions) {
                var ext = Object.keys(obj.options.extensions);
                if (ext.length) {
                    for (var i = 0; i < ext.length; i++) {
                        if (obj.options.extensions[ext[i]] && typeof (obj.options.extensions[ext[i]]) == 'function') {
                            obj.options.extensions[ext[i]] = obj.options.extensions[ext[i]](el, obj);
                        }
                    }
                }
            }
        }

        document.addEventListener('mouseup', editorMouseUp);
        document.addEventListener('mousemove', editorMouseMove);
        obj.editor.addEventListener('mousedown', editorMouseDown);
        obj.editor.addEventListener('keyup', editorKeyUp);
        obj.editor.addEventListener('keydown', editorKeyDown);
        obj.editor.addEventListener('dragstart', editorDragStart);
        obj.editor.addEventListener('dragenter', editorDragEnter);
        obj.editor.addEventListener('dragover', editorDragOver);
        obj.editor.addEventListener('drop', editorDrop);
        obj.editor.addEventListener('paste', editorPaste);
        obj.editor.addEventListener('focus', editorFocus);
        obj.editor.addEventListener('blur', editorBlur);

        // Append editor to the container
        el.appendChild(obj.editor);
        // Snippet
        if (obj.options.snippet) {
            obj.appendSnippet(obj.options.snippet);
        }

        // Add toolbar
        if (obj.options.toolbar) {
            // Default toolbar configuration
            if (Array.isArray(obj.options.toolbar)) {
                var toolbarOptions = {
                    container: true,
                    responsive: true,
                    items: obj.options.toolbar
                }
            } else if (obj.options.toolbar === true) {
                var toolbarOptions = {
                    container: true,
                    responsive: true,
                    items: [],
                }
            } else {
                var toolbarOptions = obj.options.toolbar;
            }

            // Default items
            if (! (toolbarOptions.items && toolbarOptions.items.length)) {
                toolbarOptions.items = Component.getDefaultToolbar(obj);
            }

            if (obj.options.toolbarOnTop) {
                // Add class
                el.classList.add('toolbar-on-top');
                // Append to the DOM
                el.insertBefore(toolbar, el.firstChild);
            } else {
                // Add padding to the editor
                obj.editor.style.padding = '15px';
                // Append to the DOM
                el.appendChild(toolbar);
            }

            // Create toolbar
            Toolbar(toolbar, toolbarOptions);

            toolbar.addEventListener('click', function() {
                obj.editor.focus();
            })
        }

        // Upload file
        obj.file = document.createElement('input');
        obj.file.style.display = 'none';
        obj.file.type = 'file';
        obj.file.setAttribute('accept', 'image/*');
        obj.file.onchange = function() {
            obj.addFile(this.files);
        }
        el.appendChild(obj.file);

        // Focus to the editor
        if (obj.options.focus) {
            Component.setCursor(obj.editor, obj.options.focus == 'initial' ? true : false);
        }

        // Change method
        el.change = obj.setData;

        // Global generic value handler
        el.val = function(val) {
            if (val === undefined) {
                // Data type
                var o = el.getAttribute('data-html') === 'true' ? false : true;
                return obj.getData(o);
            } else {
                obj.setData(val);
            }
        }

        loadExtensions();

        el.editor = obj;

        // Onload
        if (typeof(obj.options.onload) == 'function') {
            obj.options.onload(el, obj, obj.editor);
        }

        return obj;
    });

    Component.setCursor = function(element, first) {
        element.focus();
        document.execCommand('selectAll');
        var sel = window.getSelection();
        var range = sel.getRangeAt(0);
        if (first == true) {
            var node = range.startContainer;
            var size = 0;
        } else {
            var node = range.endContainer;
            var size = node.length;
        }
        range.setStart(node, size);
        range.setEnd(node, size);
        sel.removeAllRanges();
        sel.addRange(range);
    }

    Component.getDefaultToolbar = function(obj) {

        var color = function(a,b,c) {
            if (! c.color) {
                var t = null;
                var colorPicker = Color(c, {
                    onchange: function(o, v) {
                        if (c.k === 'color') {
                            document.execCommand('foreColor', false, v);
                        } else {
                            document.execCommand('backColor', false, v);
                        }
                    }
                });
                c.color.open();
            }
        }

        var items = [];

        items.push({
            content: 'undo',
            onclick: function() {
                document.execCommand('undo');
            }
        });

        items.push({
            content: 'redo',
            onclick: function() {
                document.execCommand('redo');
            }
        });

        items.push({
            type: 'divisor'
        });

        if (obj.options.toolbarOnTop) {
            items.push({
                type: 'select',
                width: '140px',
                options: ['Default', 'Verdana', 'Arial', 'Courier New'],
                render: function (e) {
                    return '<span style="font-family:' + e + '">' + e + '</span>';
                },
                onchange: function (a,b,c,d,e) {
                    document.execCommand("fontName", false, d);
                }
            });

            items.push({
                type: 'select',
                content: 'format_size',
                options: ['x-small', 'small', 'medium', 'large', 'x-large'],
                render: function (e) {
                    return '<span style="font-size:' + e + '">' + e + '</span>';
                },
                onchange: function (a,b,c,d,e) {
                    //var html = `<span style="font-size: ${c}">${text}</span>`;
                    //document.execCommand('insertHtml', false, html);
                    document.execCommand("fontSize", false, parseInt(e)+1);
                    //var f = window.getSelection().anchorNode.parentNode
                    //f.removeAttribute("size");
                    //f.style.fontSize = d;
                }
            });

            items.push({
                type: 'select',
                options: ['format_align_left', 'format_align_center', 'format_align_right', 'format_align_justify'],
                render: function (e) {
                    return '<i class="material-icons">' + e + '</i>';
                },
                onchange: function (a,b,c,d,e) {
                    var options = ['JustifyLeft','justifyCenter','justifyRight','justifyFull'];
                    document.execCommand(options[e]);
                }
            });

            items.push({
                type: 'divisor'
            });

            items.push({
                content: 'format_color_text',
                k: 'color',
                onclick: color,
            });

            items.push({
                content: 'format_color_fill',
                k: 'background-color',
                onclick: color,
            });
        }

        items.push({
            content: 'format_bold',
            onclick: function(a,b,c) {
                document.execCommand('bold');

                if (document.queryCommandState("bold")) {
                    c.classList.add('selected');
                } else {
                    c.classList.remove('selected');
                }
            }
        });

        items.push({
            content: 'format_italic',
            onclick: function(a,b,c) {
                document.execCommand('italic');

                if (document.queryCommandState("italic")) {
                    c.classList.add('selected');
                } else {
                    c.classList.remove('selected');
                }
            }
        });

        items.push({
            content: 'format_underline',
            onclick: function(a,b,c) {
                document.execCommand('underline');

                if (document.queryCommandState("underline")) {
                    c.classList.add('selected');
                } else {
                    c.classList.remove('selected');
                }
            }
        });

        items.push({
            type:'divisor'
        });

        items.push({
            content: 'format_list_bulleted',
            onclick: function(a,b,c) {
                document.execCommand('insertUnorderedList');

                if (document.queryCommandState("insertUnorderedList")) {
                    c.classList.add('selected');
                } else {
                    c.classList.remove('selected');
                }
            }
        });

        items.push({
            content: 'format_list_numbered',
            onclick: function(a,b,c) {
                document.execCommand('insertOrderedList');

                if (document.queryCommandState("insertOrderedList")) {
                    c.classList.add('selected');
                } else {
                    c.classList.remove('selected');
                }
            }
        });

        items.push({
            content: 'format_indent_increase',
            onclick: function(a,b,c) {
                document.execCommand('indent', true, null);

                if (document.queryCommandState("indent")) {
                    c.classList.add('selected');
                } else {
                    c.classList.remove('selected');
                }
            }
        });

        items.push({
            content: 'format_indent_decrease',
            onclick: function() {
                document.execCommand('outdent');

                if (document.queryCommandState("outdent")) {
                    this.classList.add('selected');
                } else {
                    this.classList.remove('selected');
                }
            }
        });

        if (obj.options.toolbarOnTop) {
            items.push({
                type: 'divisor'
            });

            items.push({
                content: 'photo',
                onclick: function () {
                    obj.upload();
                }
            });

            items.push({
                type: 'select',
                content: 'table_view',
                columns: 8,
                grid: 8,
                right: true,
                options: [
                    '0x0', '1x0', '2x0', '3x0', '4x0', '5x0', '6x0', '7x0',
                    '0x1', '1x1', '2x1', '3x1', '4x1', '5x1', '6x1', '7x1',
                    '0x2', '1x2', '2x2', '3x2', '4x2', '5x2', '6x2', '7x2',
                    '0x3', '1x3', '2x3', '3x3', '4x3', '5x3', '6x3', '7x3',
                    '0x4', '1x4', '2x4', '3x4', '4x4', '5x4', '6x4', '7x4',
                    '0x5', '1x5', '2x5', '3x5', '4x5', '5x5', '6x5', '7x5',
                    '0x6', '1x6', '2x6', '3x6', '4x6', '5x6', '6x6', '7x6',
                    '0x7', '1x7', '2x7', '3x7', '4x7', '5x7', '6x7', '7x7',
                ],
                render: function (e, item) {
                    if (item) {
                        item.onmouseover = this.onmouseover;
                        e = e.split('x');
                        item.setAttribute('data-x', e[0]);
                        item.setAttribute('data-y', e[1]);
                    }
                    var element = document.createElement('div');
                    item.style.margin = '1px';
                    item.style.border = '1px solid #ddd';
                    return element;
                },
                onmouseover: function (e) {
                    var x = parseInt(e.target.getAttribute('data-x'));
                    var y = parseInt(e.target.getAttribute('data-y'));
                    for (var i = 0; i < e.target.parentNode.children.length; i++) {
                        var element = e.target.parentNode.children[i];
                        var ex = parseInt(element.getAttribute('data-x'));
                        var ey = parseInt(element.getAttribute('data-y'));
                        if (ex <= x && ey <= y) {
                            element.style.backgroundColor = '#cae1fc';
                            element.style.borderColor = '#2977ff';
                        } else {
                            element.style.backgroundColor = '';
                            element.style.borderColor = '#ddd';
                        }
                    }
                },
                onchange: function (a, b, c) {
                    c = c.split('x');
                    var table = document.createElement('table');
                    var tbody = document.createElement('tbody');
                    for (var y = 0; y <= c[1]; y++) {
                        var tr = document.createElement('tr');
                        for (var x = 0; x <= c[0]; x++) {
                            var td = document.createElement('td');
                            td.innerHTML = '';
                            tr.appendChild(td);
                        }
                        tbody.appendChild(tr);
                    }
                    table.appendChild(tbody);
                    table.setAttribute('width', '100%');
                    table.setAttribute('cellpadding', '6');
                    table.setAttribute('cellspacing', '0');
                    document.execCommand('insertHTML', false, table.outerHTML);
                }
            });
        }

        return items;
    }

    return Component;
}

/* harmony default export */ var editor = (Editor());

;// CONCATENATED MODULE: ./src/plugins/floating.js
function Floating() {
    var Component = (function (el, options) {
        var obj = {};
        obj.options = {};

        // Default configuration
        var defaults = {
            type: 'big',
            title: 'Untitled',
            width: 510,
            height: 472,
        }

        // Loop through our object
        for (var property in defaults) {
            if (options && options.hasOwnProperty(property)) {
                obj.options[property] = options[property];
            } else {
                obj.options[property] = defaults[property];
            }
        }

        // Private methods

        var setContent = function () {
            var temp = document.createElement('div');
            while (el.children[0]) {
                temp.appendChild(el.children[0]);
            }

            obj.content = document.createElement('div');
            obj.content.className = 'jfloating_content';
            obj.content.innerHTML = el.innerHTML;

            while (temp.children[0]) {
                obj.content.appendChild(temp.children[0]);
            }

            obj.container = document.createElement('div');
            obj.container.className = 'jfloating';
            obj.container.appendChild(obj.content);

            if (obj.options.title) {
                obj.container.setAttribute('title', obj.options.title);
            } else {
                obj.container.classList.add('no-title');
            }

            // validate element dimensions
            if (obj.options.width) {
                obj.container.style.width = parseInt(obj.options.width) + 'px';
            }

            if (obj.options.height) {
                obj.container.style.height = parseInt(obj.options.height) + 'px';
            }

            el.innerHTML = '';
            el.appendChild(obj.container);
        }

        var setEvents = function () {
            if (obj.container) {
                obj.container.addEventListener('click', function (e) {
                    var rect = e.target.getBoundingClientRect();

                    if (e.target.classList.contains('jfloating')) {
                        if (e.changedTouches && e.changedTouches[0]) {
                            var x = e.changedTouches[0].clientX;
                            var y = e.changedTouches[0].clientY;
                        } else {
                            var x = e.clientX;
                            var y = e.clientY;
                        }

                        if (rect.width - (x - rect.left) < 50 && (y - rect.top) < 50) {
                            setTimeout(function () {
                                obj.close();
                            }, 100);
                        } else {
                            obj.setState();
                        }
                    }
                });
            }
        }

        var setType = function () {
            obj.container.classList.add('jfloating-' + obj.options.type);
        }

        obj.state = {
            isMinized: false,
        }

        obj.setState = function () {
            if (obj.state.isMinized) {
                obj.container.classList.remove('jfloating-minimized');
            } else {
                obj.container.classList.add('jfloating-minimized');
            }
            obj.state.isMinized = !obj.state.isMinized;
        }

        obj.close = function () {
            Components.elements.splice(Component.elements.indexOf(obj.container), 1);
            obj.updatePosition();
            el.remove();
        }

        obj.updatePosition = function () {
            for (var i = 0; i < Component.elements.length; i++) {
                var floating = Component.elements[i];
                var prevFloating = Component.elements[i - 1];
                floating.style.right = i * (prevFloating ? prevFloating.offsetWidth : floating.offsetWidth) * 1.01 + 'px';
            }
        }

        obj.init = function () {
            // Set content into root
            setContent();

            // Set dialog events
            setEvents();

            // Set dialog type
            setType();

            // Update floating position
            Component.elements.push(obj.container);
            obj.updatePosition();

            el.floating = obj;
        }

        obj.init();

        return obj;
    });

    Component.elements = [];

    return Component;
}

/* harmony default export */ var floating = (Floating());
;// CONCATENATED MODULE: ./src/plugins/validations.js


function Validations() {
    /**
     * Options: Object,
     * Properties:
     * Constraint,
     * Reference,
     * Value
     */

    const isNumeric = function(num) {
        return !isNaN(num) && num !== null && (typeof num !== 'string' || num.trim() !== '');
    }

    const numberCriterias = {
        'between': function(value, range) {
            return value >= range[0] && value <= range[1];
        },
        'not between': function(value, range) {
            return value < range[0] || value > range[1];
        },
        '<': function(value, range) {
            return value < range[0];
        },
        '<=': function(value, range) {
            return value <= range[0];
        },
        '>': function(value, range) {
            return value > range[0];
        },
        '>=': function(value, range) {
            return value >= range[0];
        },
        '=': function(value, range) {
            return value == range[0];
        },
        '!=': function(value, range) {
            return value != range[0];
        },
    }

    const dateCriterias = {
        'valid date': function() {
            return true;
        },
        '=': function(value, range) {
            return value === range[0];
        },
        '!=': function(value, range) {
            return value !== range[0];
        },
        '<': function(value, range) {
            return value < range[0];
        },
        '<=': function(value, range) {
            return value <= range[0];
        },
        '>': function(value, range) {
            return value > range[0];
        },
        '>=': function(value, range) {
            return value >= range[0];
        },
        'between': function(value, range) {
            return value >= range[0] && value <= range[1];
        },
        'not between': function(value, range) {
            return value < range[0] || value > range[1];
        },
    }

    const textCriterias = {
        'contains': function(value, range) {
            return value.includes(range[0]);
        },
        'not contains': function(value, range) {
            return !value.includes(range[0]);
        },
        'begins with': function(value, range) {
            return value.startsWith(range[0]);
        },
        'ends with': function(value, range) {
            return value.endsWith(range[0]);
        },
        '=': function(value, range) {
            return value === range[0];
        },
        '!=': function(value, range) {
            return value !== range[0];
        },
        'valid email': function(value) {
            var pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

            return pattern.test(value);
        },
        'valid url': function(value) {
            var pattern = new RegExp(/(((https?:\/\/)|(www\.))[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]+)/ig);

            return pattern.test(value);
        },
    }

    // Component router
    const component = function(value, options) {
        if (typeof(component[options.type]) === 'function') {
            if (options.allowBlank && (typeof value === 'undefined' || value === '' || value === null)) {
                return true;
            }
            return component[options.type].call(this, value, options);
        }
        return null;
    }
    
    component.url = function(data) {
        var pattern = new RegExp(/(((https?:\/\/)|(www\.))[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]+)/ig);
        return pattern.test(data) ? true : false;
    }

    component.email = function(data) {
        var pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        return data && pattern.test(data) ? true : false;
    }
    
    component.required = function(data) {
        return data && data.trim() ? true : false;
    }

    component.empty = function(data) {
        return typeof data === 'undefined' || data === null || (typeof data === 'string' && !data.toString().trim());
    }

    component['not exist'] = component.empty;

    component.notEmpty = function(data) {
        return !component.empty(data);
    }

    component.exist = component.notEmpty;

    component.number = function(data, options) {
       if (! isNumeric(data)) {
           return false;
       }

       if (!options || !options.criteria) {
           return true;
       }

       if (!numberCriterias[options.criteria]) {
           return false;
       }

       let values = options.value.map(function(num) {
          return parseFloat(num);
       })

       return numberCriterias[options.criteria](data, values);
   };

    component.login = function(data) {
        let pattern = new RegExp(/^[a-zA-Z0-9._-]+$/);
        return data && pattern.test(data) ? true : false;
    }

    component.list = function(data, options) {
        let dataType = typeof data;
        if (dataType !== 'string' && dataType !== 'number') {
            return false;
        }
        let list;
        if (typeof(options.value[0]) === 'string') {
            list = options.value[0].split(',');
        } else {
            list = options.value[0];
        }

        if (! Array.isArray(list)) {
            return false;
        } else {
            let validOption = list.findIndex(function (item) {
                return item == data;
            });

            return validOption > -1;
        }
    }

    const getCurrentDateWithoutTime = function() {
        let date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
    }

    const relativeDates = {
        'one year ago': function() {
            let date = getCurrentDateWithoutTime();

            date.setFullYear(date.getFullYear() - 1);

            return date;
        },
        'one month ago': function() {
            let date = getCurrentDateWithoutTime();

            date.setMonth(date.getMonth() - 1);

            return date;
        },
        'one week ago': function() {
            let date = getCurrentDateWithoutTime();

            date.setDate(date.getDate() - 7);

            return date;
        },
        yesterday: function() {
            let date = getCurrentDateWithoutTime();

            date.setDate(date.getDate() - 1);

            return date;
        },
        today: getCurrentDateWithoutTime,
        tomorrow: function() {
            let date = getCurrentDateWithoutTime();

            date.setDate(date.getDate() + 1);

            return date;
        },
    };

    component.date = function(data, options) {
        if (isNumeric(data) && data > 0 && data < 1000000) {
            data = helpers_date.numToDate(data);
        }

        if (new Date(data) == 'Invalid Date') {
            return false;
        }

        if (!options || !options.criteria) {
            return true;
        }

        if (!dateCriterias[options.criteria]) {
            return false;
        }

        let values = options.value.map(function(date) {
            if (typeof date === 'string' && relativeDates[date]) {
                return relativeDates[date]().getTime();
            }

            return new Date(date).getTime();
        });

        return dateCriterias[options.criteria](new Date(data).getTime(), values);
    }

    component.text = function(data, options) {
        if (typeof data === 'undefined' || data === null) {
            data = '';
        } else if (typeof data !== 'string') {
            return false;
        }

        if (!options || !options.criteria) {
            return true;
        }

        if (!textCriterias[options.criteria]) {
            return false;
        }

        return textCriterias[options.criteria](data, options.value);
    }

    component.textLength = function(data, options) {
        data = data.toString();

        return component.number(data.length, options);
    }

    return component;
}

/* harmony default export */ var validations = (Validations());
;// CONCATENATED MODULE: ./src/plugins/form.js




function Form() {
    var Component = (function(el, options) {
        var obj = {};
        obj.options = {};

        // Default configuration
        var defaults = {
            url: null,
            message: 'Are you sure? There are unsaved information in your form',
            ignore: false,
            currentHash: null,
            submitButton:null,
            validations: null,
            onbeforeload: null,
            onload: null,
            onbeforesave: null,
            onsave: null,
            onbeforeremove: null,
            onremove: null,
            onerror: function(el, message) {
                alert(message);
            }
        };

        // Loop through our object
        for (var property in defaults) {
            if (options && options.hasOwnProperty(property)) {
                obj.options[property] = options[property];
            } else {
                obj.options[property] = defaults[property];
            }
        }

        // Validations
        if (! obj.options.validations) {
            obj.options.validations = {};
        }

        // Submit Button
        if (! obj.options.submitButton) {
            obj.options.submitButton = el.querySelector('input[type=submit]');
        }

        if (obj.options.submitButton && obj.options.url) {
            obj.options.submitButton.onclick = function() {
                obj.save();
            }
        }

        if (! obj.options.validations.email) {
            obj.options.validations.email = validations.email;
        }

        if (! obj.options.validations.length) {
            obj.options.validations.length = validations.length;
        }

        if (! obj.options.validations.required) {
            obj.options.validations.required = validations.required;
        }

        obj.setUrl = function(url) {
            obj.options.url = url;
        }

        obj.load = function() {
            ajax({
                url: obj.options.url,
                method: 'GET',
                dataType: 'json',
                queue: true,
                success: function(data) {
                    // Overwrite values from the backend
                    if (typeof(obj.options.onbeforeload) == 'function') {
                        var ret = obj.options.onbeforeload(el, data);
                        if (ret) {
                            data = ret;
                        }
                    }
                    // Apply values to the form
                    Component.setElements(el, data);
                    // Onload methods
                    if (typeof(obj.options.onload) == 'function') {
                        obj.options.onload(el, data);
                    }
                }
            });
        }

        obj.save = function() {
            var test = obj.validate();

            if (test) {
                obj.options.onerror(el, test);
            } else {
                var data = Component.getElements(el, true);

                if (typeof(obj.options.onbeforesave) == 'function') {
                    var data = obj.options.onbeforesave(el, data);

                    if (data === false) {
                        return;
                    }
                }

                ajax({
                    url: obj.options.url,
                    method: 'POST',
                    dataType: 'json',
                    data: data,
                    success: function(result) {
                        if (typeof(obj.options.onsave) == 'function') {
                            obj.options.onsave(el, data, result);
                        }
                    }
                });
            }
        }

        obj.remove = function() {
            if (typeof(obj.options.onbeforeremove) == 'function') {
                var ret = obj.options.onbeforeremove(el, obj);
                if (ret === false) {
                    return false;
                }
            }

            ajax({
                url: obj.options.url,
                method: 'DELETE',
                dataType: 'json',
                success: function(result) {
                    if (typeof(obj.options.onremove) == 'function') {
                        obj.options.onremove(el, obj, result);
                    }

                    obj.reset();
                }
            });
        }

        var addError = function(element) {
            // Add error in the element
            element.classList.add('error');
            // Submit button
            if (obj.options.submitButton) {
                obj.options.submitButton.setAttribute('disabled', true);
            }
            // Return error message
            var error = element.getAttribute('data-error') || 'There is an error in the form';
            element.setAttribute('title', error);
            return error;
        }

        var delError = function(element) {
            var error = false;
            // Remove class from this element
            element.classList.remove('error');
            element.removeAttribute('title');
            // Get elements in the form
            var elements = el.querySelectorAll("input, select, textarea, div[name]");
            // Run all elements
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].getAttribute('data-validation')) {
                    if (elements[i].classList.contains('error')) {
                        error = true;
                    }
                }
            }

            if (obj.options.submitButton) {
                if (error) {
                    obj.options.submitButton.setAttribute('disabled', true);
                } else {
                    obj.options.submitButton.removeAttribute('disabled');
                }
            }
        }

        obj.validateElement = function(element) {
            // Test results
            var test = false;
            // Value
            var value = Component.getValue(element);
            // Validation
            var validation = element.getAttribute('data-validation');
            // Parse
            if (typeof(obj.options.validations[validation]) == 'function' && ! obj.options.validations[validation](value, element)) {
                // Not passed in the test
                test = addError(element);
            } else {
                if (element.classList.contains('error')) {
                    delError(element);
                }
            }

            return test;
        }

        obj.reset = function() {
            // Get elements in the form
            var name = null;
            var elements = el.querySelectorAll("input, select, textarea, div[name]");
            // Run all elements
            for (var i = 0; i < elements.length; i++) {
                if (name = elements[i].getAttribute('name')) {
                    if (elements[i].type == 'checkbox' || elements[i].type == 'radio') {
                        elements[i].checked = false;
                    } else {
                        if (typeof(elements[i].val) == 'function') {
                            elements[i].val('');
                        } else {
                            elements[i].value = '';
                        }
                    }
                }
            }
        }

        // Run form validation
        obj.validate = function() {
            var test = [];
            // Get elements in the form
            var elements = el.querySelectorAll("input, select, textarea, div[name]");
            // Run all elements
            for (var i = 0; i < elements.length; i++) {
                // Required
                if (elements[i].getAttribute('data-validation')) {
                    var res = obj.validateElement(elements[i]);
                    if (res) {
                        test.push(res);
                    }
                }
            }
            if (test.length > 0) {
                return test.join('<br>');
            } else {
                return false;
            }
        }

        // Check the form
        obj.getError = function() {
            // Validation
            return obj.validation() ? true : false;
        }

        // Return the form hash
        obj.setHash = function() {
            return obj.getHash(Component.getElements(el));
        }

        // Get the form hash
        obj.getHash = function(str) {
            var hash = 0, i, chr;

            if (str.length === 0) {
                return hash;
            } else {
                for (i = 0; i < str.length; i++) {
                  chr = str.charCodeAt(i);
                  hash = ((hash << 5) - hash) + chr;
                  hash |= 0;
                }
            }

            return hash;
        }

        // Is there any change in the form since start tracking?
        obj.isChanged = function() {
            var hash = obj.setHash();
            return (obj.options.currentHash != hash);
        }

        // Restart tracking
        obj.resetTracker = function() {
            obj.options.currentHash = obj.setHash();
            obj.options.ignore = false;
        }

        // Ignore flag
        obj.setIgnore = function(ignoreFlag) {
            obj.options.ignore = ignoreFlag ? true : false;
        }

        // Start tracking in one second
        setTimeout(function() {
            obj.options.currentHash = obj.setHash();
        }, 1000);

        // Validations
        el.addEventListener("keyup", function(e) {
            if (e.target.getAttribute('data-validation')) {
                obj.validateElement(e.target);
            }
        });

        // Alert
        if (! Component.hasEvents) {
            window.addEventListener("beforeunload", function (e) {
                if (obj.isChanged() && obj.options.ignore == false) {
                    var confirmationMessage =  obj.options.message? obj.options.message : "\o/";

                    if (confirmationMessage) {
                        if (typeof e == 'undefined') {
                            e = window.event;
                        }

                        if (e) {
                            e.returnValue = confirmationMessage;
                        }

                        return confirmationMessage;
                    } else {
                        return void(0);
                    }
                }
            });

            Component.hasEvents = true;
        }

        el.form = obj;

        return obj;
    });

    // Get value from one element
    Component.getValue = function(element) {
        var value = null;
        if (element.type == 'checkbox') {
            if (element.checked == true) {
                value = element.value || true;
            }
        } else if (element.type == 'radio') {
            if (element.checked == true) {
                value = element.value;
            }
        } else if (element.type == 'file') {
            value = element.files;
        } else if (element.tagName == 'select' && element.multiple == true) {
            value = [];
            var options = element.querySelectorAll("options[selected]");
            for (var j = 0; j < options.length; j++) {
                value.push(options[j].value);
            }
        } else if (typeof(element.val) == 'function') {
            value = element.val();
        } else {
            value = element.value || '';
        }

        return value;
    }

    // Get form elements
    Component.getElements = function(el, asArray) {
        var data = {};
        var name = null;
        var elements = el.querySelectorAll("input, select, textarea, div[name]");

        for (var i = 0; i < elements.length; i++) {
            if (name = elements[i].getAttribute('name')) {
                data[name] = Component.getValue(elements[i]) || '';
            }
        }

        return asArray == true ? data : JSON.stringify(data);
    }

    //Get form elements
    Component.setElements = function(el, data) {
        var name = null;
        var value = null;
        var elements = el.querySelectorAll("input, select, textarea, div[name]");
        for (var i = 0; i < elements.length; i++) {
            // Attributes
            var type = elements[i].getAttribute('type');
            if (name = elements[i].getAttribute('name')) {
                // Transform variable names in pathname
                name = name.replace(new RegExp(/\[(.*?)\]/ig), '.$1');
                value = null;
                // Seach for the data in the path
                if (name.match(/\./)) {
                    var tmp = Path.call(data, name) || '';
                    if (typeof(tmp) !== 'undefined') {
                        value = tmp;
                    }
                } else {
                    if (typeof(data[name]) !== 'undefined') {
                        value = data[name];
                    }
                }
                // Set the values
                if (value !== null) {
                    if (type == 'checkbox' || type == 'radio') {
                        elements[i].checked = value ? true : false;
                    } else if (type == 'file') {
                        // Do nothing
                    } else {
                        if (typeof (elements[i].val) == 'function') {
                            elements[i].val(value);
                        } else {
                            elements[i].value = value;
                        }
                    }
                }
            }
        }
    }

    return Component;
}

/* harmony default export */ var plugins_form = (Form());
;// CONCATENATED MODULE: ./src/plugins/modal.js




function Modal() {

    var Events = function() {
        //  Position
        var tracker = null;

        var keyDown = function (e) {
            if (e.which == 27) {
                var modals = document.querySelectorAll('.jmodal');
                for (var i = 0; i < modals.length; i++) {
                    modals[i].parentNode.modal.close();
                }
            }
        }

        var mouseUp = function (e) {
            let element = e.composedPath();
            var item = helpers.findElement(element[0], 'jmodal');
            if (item) {
                // Get target info
                var rect = item.getBoundingClientRect();

                if (e.changedTouches && e.changedTouches[0]) {
                    var x = e.changedTouches[0].clientX;
                    var y = e.changedTouches[0].clientY;
                } else {
                    var x = e.clientX;
                    var y = e.clientY;
                }

                if (rect.width - (x - rect.left) < 50 && (y - rect.top) < 50) {
                    item.parentNode.modal.close();
                }
            }

            if (tracker) {
                tracker.element.style.cursor = 'auto';
                tracker = null;
            }
        }

        var mouseDown = function (e) {
            let element = e.composedPath();
            var item = helpers.findElement(element[0], 'jmodal');
            if (item) {
                // Get target info
                var rect = item.getBoundingClientRect();

                if (e.changedTouches && e.changedTouches[0]) {
                    var x = e.changedTouches[0].clientX;
                    var y = e.changedTouches[0].clientY;
                } else {
                    var x = e.clientX;
                    var y = e.clientY;
                }

                if (rect.width - (x - rect.left) < 50 && (y - rect.top) < 50) {
                    // Do nothing
                } else {
                    if (y - rect.top < 50) {
                        if (document.selection) {
                            document.selection.empty();
                        } else if (window.getSelection) {
                            window.getSelection().removeAllRanges();
                        }

                        tracker = {
                            left: rect.left,
                            top: rect.top,
                            x: e.clientX,
                            y: e.clientY,
                            width: rect.width,
                            height: rect.height,
                            element: item,
                        }
                    }
                }
            }
        }

        var mouseMove = function (e) {
            if (tracker) {
                e = e || window.event;
                if (e.buttons) {
                    var mouseButton = e.buttons;
                } else if (e.button) {
                    var mouseButton = e.button;
                } else {
                    var mouseButton = e.which;
                }

                if (mouseButton) {
                    tracker.element.style.top = (tracker.top + (e.clientY - tracker.y) + (tracker.height / 2)) + 'px';
                    tracker.element.style.left = (tracker.left + (e.clientX - tracker.x) + (tracker.width / 2)) + 'px';
                    tracker.element.style.cursor = 'move';
                } else {
                    tracker.element.style.cursor = 'auto';
                }
            }
        }

        document.addEventListener('keydown', keyDown);
        document.addEventListener('mouseup', mouseUp);
        document.addEventListener('mousedown', mouseDown);
        document.addEventListener('mousemove', mouseMove);
    }

    var Component = (function (el, options) {
        var obj = {};
        obj.options = {};

        // Default configuration
        var defaults = {
            url: null,
            onopen: null,
            onclose: null,
            onload: null,
            closed: false,
            width: null,
            height: null,
            title: null,
            padding: null,
            backdrop: true,
            icon: null,
        };

        // Loop through our object
        for (var property in defaults) {
            if (options && options.hasOwnProperty(property)) {
                obj.options[property] = options[property];
            } else {
                obj.options[property] = defaults[property];
            }
        }

        // Title
        if (!obj.options.title && el.getAttribute('title')) {
            obj.options.title = el.getAttribute('title');
        }

        var temp = document.createElement('div');
        while (el.children[0]) {
            temp.appendChild(el.children[0]);
        }

        obj.title = document.createElement('div');
        obj.title.className = 'jmodal_title';
        if (obj.options.icon) {
            obj.title.setAttribute('data-icon', obj.options.icon);
        }

        obj.content = document.createElement('div');
        obj.content.className = 'jmodal_content';
        obj.content.innerHTML = el.innerHTML;

        while (temp.children[0]) {
            obj.content.appendChild(temp.children[0]);
        }

        obj.container = document.createElement('div');
        obj.container.className = 'jmodal';
        obj.container.appendChild(obj.title);
        obj.container.appendChild(obj.content);

        if (obj.options.padding) {
            obj.content.style.padding = obj.options.padding;
        }
        if (obj.options.width) {
            obj.container.style.width = obj.options.width;
        }
        if (obj.options.height) {
            obj.container.style.height = obj.options.height;
        }
        if (obj.options.title) {
            var title = document.createElement('h4');
            title.innerText = obj.options.title;
            obj.title.appendChild(title);
        }

        el.innerHTML = '';
        el.style.display = 'none';
        el.appendChild(obj.container);

        // Backdrop
        if (obj.options.backdrop) {
            var backdrop = document.createElement('div');
            backdrop.className = 'jmodal_backdrop';
            backdrop.onclick = function () {
                obj.close();
            }
            el.appendChild(backdrop);
        }

        obj.open = function () {
            el.style.display = 'block';
            // Fullscreen
            var rect = obj.container.getBoundingClientRect();
            if (helpers.getWindowWidth() < rect.width) {
                obj.container.style.top = '';
                obj.container.style.left = '';
                obj.container.classList.add('jmodal_fullscreen');
                animation.slideBottom(obj.container, 1);
            } else {
                if (obj.options.backdrop) {
                    backdrop.style.display = 'block';
                }
            }
            // Event
            if (typeof (obj.options.onopen) == 'function') {
                obj.options.onopen(el, obj);
            }
        }

        obj.resetPosition = function () {
            obj.container.style.top = '';
            obj.container.style.left = '';
        }

        obj.isOpen = function () {
            return el.style.display != 'none' ? true : false;
        }

        obj.close = function () {
            if (obj.isOpen()) {
                el.style.display = 'none';
                if (obj.options.backdrop) {
                    // Backdrop
                    backdrop.style.display = '';
                }
                // Remove fullscreen class
                obj.container.classList.remove('jmodal_fullscreen');
                // Event
                if (typeof (obj.options.onclose) == 'function') {
                    obj.options.onclose(el, obj);
                }
            }
        }

        if (obj.options.url) {
            ajax({
                url: obj.options.url,
                method: 'GET',
                dataType: 'text/html',
                success: function (data) {
                    obj.content.innerHTML = data;

                    if (!obj.options.closed) {
                        obj.open();
                    }

                    if (typeof (obj.options.onload) === 'function') {
                        obj.options.onload(obj);
                    }
                }
            });
        } else {
            if (!obj.options.closed) {
                obj.open();
            }

            if (typeof (obj.options.onload) === 'function') {
                obj.options.onload(obj);
            }
        }

        // Keep object available from the node
        el.modal = obj;

        // Create events when the first modal is create only
        Events();

        // Execute the events only once
        Events = function() {};

        return obj;
    });

    return Component;
}

/* harmony default export */ var modal = (Modal());
;// CONCATENATED MODULE: ./src/plugins/notification.js



function Notification() {
    var Component = function (options) {
        var obj = {};
        obj.options = {};

        // Default configuration
        var defaults = {
            icon: null,
            name: 'Notification',
            date: null,
            error: null,
            title: null,
            message: null,
            timeout: 4000,
            autoHide: true,
            closeable: true,
        };

        // Loop through our object
        for (var property in defaults) {
            if (options && options.hasOwnProperty(property)) {
                obj.options[property] = options[property];
            } else {
                obj.options[property] = defaults[property];
            }
        }

        var notification = document.createElement('div');
        notification.className = 'jnotification';

        if (obj.options.error) {
            notification.classList.add('jnotification-error');
        }

        var notificationContainer = document.createElement('div');
        notificationContainer.className = 'jnotification-container';
        notification.appendChild(notificationContainer);

        var notificationHeader = document.createElement('div');
        notificationHeader.className = 'jnotification-header';
        notificationContainer.appendChild(notificationHeader);

        var notificationImage = document.createElement('div');
        notificationImage.className = 'jnotification-image';
        notificationHeader.appendChild(notificationImage);

        if (obj.options.icon) {
            var notificationIcon = document.createElement('img');
            notificationIcon.src = obj.options.icon;
            notificationImage.appendChild(notificationIcon);
        }

        var notificationName = document.createElement('div');
        notificationName.className = 'jnotification-name';
        notificationName.innerHTML = obj.options.name;
        notificationHeader.appendChild(notificationName);

        if (obj.options.closeable == true) {
            var notificationClose = document.createElement('div');
            notificationClose.className = 'jnotification-close';
            notificationClose.onclick = function () {
                obj.hide();
            }
            notificationHeader.appendChild(notificationClose);
        }

        var notificationDate = document.createElement('div');
        notificationDate.className = 'jnotification-date';
        notificationHeader.appendChild(notificationDate);

        var notificationContent = document.createElement('div');
        notificationContent.className = 'jnotification-content';
        notificationContainer.appendChild(notificationContent);

        if (obj.options.title) {
            var notificationTitle = document.createElement('div');
            notificationTitle.className = 'jnotification-title';
            notificationTitle.innerHTML = obj.options.title;
            notificationContent.appendChild(notificationTitle);
        }

        var notificationMessage = document.createElement('div');
        notificationMessage.className = 'jnotification-message';
        notificationMessage.innerHTML = obj.options.message;
        notificationContent.appendChild(notificationMessage);

        obj.show = function () {
            document.body.appendChild(notification);
            if (helpers.getWindowWidth() > 800) {
                animation.fadeIn(notification);
            } else {
                animation.slideTop(notification, 1);
            }
        }

        obj.hide = function () {
            if (helpers.getWindowWidth() > 800) {
                animation.fadeOut(notification, function () {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                        if (notificationTimeout) {
                            clearTimeout(notificationTimeout);
                        }
                    }
                });
            } else {
                animation.slideTop(notification, 0, function () {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                        if (notificationTimeout) {
                            clearTimeout(notificationTimeout);
                        }
                    }
                });
            }
        };

        obj.show();

        if (obj.options.autoHide == true) {
            var notificationTimeout = setTimeout(function () {
                obj.hide();
            }, obj.options.timeout);
        }

        if (helpers.getWindowWidth() < 800) {
            notification.addEventListener("swipeup", function (e) {
                obj.hide();
                e.preventDefault();
                e.stopPropagation();
            });
        }

        return obj;
    }

    Component.isVisible = function () {
        var j = document.querySelector('.jnotification');
        return j && j.parentNode ? true : false;
    }

    return Component;
}

/* harmony default export */ var notification = (Notification());
;// CONCATENATED MODULE: ./src/plugins/progressbar.js
function Progressbar(el, options) {
    var obj = {};
    obj.options = {};

    // Default configuration
    var defaults = {
        value: 0,
        onchange: null,
        width: null,
    };

    // Loop through the initial configuration
    for (var property in defaults) {
        if (options && options.hasOwnProperty(property)) {
            obj.options[property] = options[property];
        } else {
            obj.options[property] = defaults[property];
        }
    }

    // Class
    el.classList.add('jprogressbar');
    el.setAttribute('tabindex', 1);
    el.setAttribute('data-value', obj.options.value);

    var bar = document.createElement('div');
    bar.style.width = obj.options.value + '%';
    bar.style.color = '#fff';
    el.appendChild(bar);

    if (obj.options.width) {
        el.style.width = obj.options.width;
    }

    // Set value
    obj.setValue = function(value) {
        value = parseInt(value);
        obj.options.value = value;
        bar.style.width = value + '%';
        el.setAttribute('data-value', value + '%');

        if (value < 6) {
            el.style.color = '#000';
        } else {
            el.style.color = '#fff';
        }

        // Update value
        obj.options.value = value;

        if (typeof(obj.options.onchange) == 'function') {
            obj.options.onchange(el, value);
        }

        // Lemonade JS
        if (el.value != obj.options.value) {
            el.value = obj.options.value;
            if (typeof(el.oninput) == 'function') {
                el.oninput({
                    type: 'input',
                    target: el,
                    value: el.value
                });
            }
        }
    }

    obj.getValue = function() {
        return obj.options.value;
    }

    var action = function(e) {
        if (e.which) {
            // Get target info
            var rect = el.getBoundingClientRect();

            if (e.changedTouches && e.changedTouches[0]) {
                var x = e.changedTouches[0].clientX;
                var y = e.changedTouches[0].clientY;
            } else {
                var x = e.clientX;
                var y = e.clientY;
            }

            obj.setValue(Math.round((x - rect.left) / rect.width * 100));
        }
    }

    // Events
    if ('touchstart' in document.documentElement === true) {
        el.addEventListener('touchstart', action);
        el.addEventListener('touchend', action);
    } else {
        el.addEventListener('mousedown', action);
        el.addEventListener("mousemove", action);
    }

    // Change
    el.change = obj.setValue;

    // Global generic value handler
    el.val = function(val) {
        if (val === undefined) {
            return obj.getValue();
        } else {
            obj.setValue(val);
        }
    }

    // Reference
    el.progressbar = obj;

    return obj;
}
;// CONCATENATED MODULE: ./src/plugins/rating.js
function Rating(el, options) {
    // Already created, update options
    if (el.rating) {
        return el.rating.setOptions(options, true);
    }

    // New instance
    var obj = {};
    obj.options = {};

    obj.setOptions = function(options, reset) {
        // Default configuration
        var defaults = {
            number: 5,
            value: 0,
            tooltip: [ 'Very bad', 'Bad', 'Average', 'Good', 'Very good' ],
            onchange: null,
        };

        // Loop through the initial configuration
        for (var property in defaults) {
            if (options && options.hasOwnProperty(property)) {
                obj.options[property] = options[property];
            } else {
                if (typeof(obj.options[property]) == 'undefined' || reset === true) {
                    obj.options[property] = defaults[property];
                }
            }
        }

        // Make sure the container is empty
        el.innerHTML = '';

        // Add elements
        for (var i = 0; i < obj.options.number; i++) {
            var div = document.createElement('div');
            div.setAttribute('data-index', (i + 1))
            div.setAttribute('title', obj.options.tooltip[i])
            el.appendChild(div);
        }

        // Selected option
        if (obj.options.value) {
            for (var i = 0; i < obj.options.number; i++) {
                if (i < obj.options.value) {
                    el.children[i].classList.add('jrating-selected');
                }
            }
        }

        return obj;
    }

    // Set value
    obj.setValue = function(index) {
        for (var i = 0; i < obj.options.number; i++) {
            if (i < index) {
                el.children[i].classList.add('jrating-selected');
            } else {
                el.children[i].classList.remove('jrating-over');
                el.children[i].classList.remove('jrating-selected');
            }
        }

        obj.options.value = index;

        if (typeof(obj.options.onchange) == 'function') {
            obj.options.onchange(el, index);
        }

        // Lemonade JS
        if (el.value != obj.options.value) {
            el.value = obj.options.value;
            if (typeof(el.oninput) == 'function') {
                el.oninput({
                    type: 'input',
                    target: el,
                    value: el.value
                });
            }
        }
    }

    obj.getValue = function() {
        return obj.options.value;
    }

    var init = function() {
        // Start plugin
        obj.setOptions(options);

        // Class
        el.classList.add('jrating');

        // Events
        el.addEventListener("click", function(e) {
            var index = e.target.getAttribute('data-index');
            if (index != undefined) {
                if (index == obj.options.value) {
                    obj.setValue(0);
                } else {
                    obj.setValue(index);
                }
            }
        });

        el.addEventListener("mouseover", function(e) {
            var index = e.target.getAttribute('data-index');
            for (var i = 0; i < obj.options.number; i++) {
                if (i < index) {
                    el.children[i].classList.add('jrating-over');
                } else {
                    el.children[i].classList.remove('jrating-over');
                }
            }
        });

        el.addEventListener("mouseout", function(e) {
            for (var i = 0; i < obj.options.number; i++) {
                el.children[i].classList.remove('jrating-over');
            }
        });

        // Change
        el.change = obj.setValue;

        // Global generic value handler
        el.val = function(val) {
            if (val === undefined) {
                return obj.getValue();
            } else {
                obj.setValue(val);
            }
        }

        // Reference
        el.rating = obj;
    }

    init();

    return obj;
}
;// CONCATENATED MODULE: ./src/plugins/search.js



function Search(el, options) {
    if (el.search) {
        return el.search;
    }

    var index =  null;

    var select = function(e) {
        if (e.target.classList.contains('jsearch_item')) {
            var element = e.target;
        } else {
            var element = e.target.parentNode;
        }

        obj.selectIndex(element);
        e.preventDefault();
    }

    var createList = function(data) {
        if (typeof(obj.options.onsearch) == 'function') {
            var ret = obj.options.onsearch(obj, data);
            if (ret) {
                data = ret;
            }
        }

        // Reset container
        container.innerHTML = '';
        // Print results
        if (! data.length) {
            // Show container
            el.style.display = '';
        } else {
            // Show container
            el.style.display = 'block';

            // Show items (only 10)
            var len = data.length < 11 ? data.length : 10;
            for (var i = 0; i < len; i++) {
                if (typeof(data[i]) == 'string') {
                    var text = data[i];
                    var value = data[i];
                } else {
                    // Legacy
                    var text = data[i].text;
                    if (! text && data[i].name) {
                        text = data[i].name;
                    }
                    var value = data[i].value;
                    if (! value && data[i].id) {
                        value = data[i].id;
                    }
                }

                var div = document.createElement('div');
                div.setAttribute('data-value', value);
                div.setAttribute('data-text', text);
                div.className = 'jsearch_item';

                if (data[i].id) {
                    div.setAttribute('id', data[i].id)
                }

                if (obj.options.forceSelect && i == 0) {
                    div.classList.add('selected');
                }
                var img = document.createElement('img');
                if (data[i].image) {
                    img.src = data[i].image;
                } else {
                    img.style.display = 'none';
                }
                div.appendChild(img);

                var item = document.createElement('div');
                item.innerHTML = text;
                div.appendChild(item);

                // Append item to the container
                container.appendChild(div);
            }
        }
    }

    var execute = function(str) {
        if (str != obj.terms) {
            // New terms
            obj.terms = str;
            // New index
            if (obj.options.forceSelect) {
                index = 0;
            } else {
                index = null;
            }
            // Array or remote search
            if (Array.isArray(obj.options.data)) {
                var test = function(o) {
                    if (typeof(o) == 'string') {
                        if ((''+o).toLowerCase().search(str.toLowerCase()) >= 0) {
                            return true;
                        }
                    } else {
                        for (var key in o) {
                            var value = o[key];
                            if ((''+value).toLowerCase().search(str.toLowerCase()) >= 0) {
                                return true;
                            }
                        }
                    }
                    return false;
                }

                var results = obj.options.data.filter(function(item) {
                    return test(item);
                });

                // Show items
                createList(results);
            } else {
                // Get remove results
                ajax({
                    url: obj.options.data + str,
                    method: 'GET',
                    dataType: 'json',
                    success: function(data) {
                        // Show items
                        createList(data);
                    }
                });
            }
        }
    }

    // Search timer
    var timer = null;

    // Search methods
    var obj = function(str) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            execute(str);
        }, 500);
    }
    if(options.forceSelect === null) {
        options.forceSelect = true;
    }
    obj.options = {
        data: options.data || null,
        input: options.input || null,
        searchByNode: options.searchByNode || null,
        onselect: options.onselect || null,
        forceSelect: options.forceSelect,
        onsearch: options.onsearch || null,
        onbeforesearch: options.onbeforesearch || null,
    };

    obj.selectIndex = function(item) {
        var id = item.getAttribute('id');
        var text = item.getAttribute('data-text');
        var value = item.getAttribute('data-value');
        var image = item.children[0].src || '';
        // Onselect
        if (typeof(obj.options.onselect) == 'function') {
            obj.options.onselect(obj, text, value, id, image);
        }
        // Close container
        obj.close();
    }

    obj.open = function() {
        el.style.display = 'block';
    }

    obj.close = function() {
        if (timer) {
            clearTimeout(timer);
        }
        // Current terms
        obj.terms = '';
        // Remove results
        container.innerHTML = '';
        // Hide
        el.style.display = '';
    }

    obj.isOpened = function() {
        return el.style.display ? true : false;
    }

    obj.keydown = function(e) {
        if (obj.isOpened()) {
            if (e.key == 'Enter') {
                // Enter
                if (index!==null && container.children[index]) {
                    obj.selectIndex(container.children[index]);
                    e.preventDefault();
                } else {
                    obj.close();
                }
            } else if (e.key === 'ArrowUp') {
                // Up
                if (index!==null && container.children[0]) {
                    container.children[index].classList.remove('selected');
                    if(!obj.options.forceSelect && index === 0) {
                        index = null;
                    } else {
                        index = Math.max(0, index-1);
                        container.children[index].classList.add('selected');
                    }
                }
                e.preventDefault();
            } else if (e.key === 'ArrowDown') {
                // Down
                if(index == null) {
                    index = -1;
                } else {
                    container.children[index].classList.remove('selected');
                }
                if (index < 9 && container.children[index+1]) {
                    index++;
                }
                container.children[index].classList.add('selected');
                e.preventDefault();
            }
        }
    }

    obj.keyup = function(e) {
        if (! obj.options.searchByNode && obj.options.input) {
            if (obj.options.input.tagName === 'DIV') {
                var terms = obj.options.input.innerText;
            } else {
                var terms = obj.options.input.value;
            }
        } else {
            // Current node
            var node = helpers.getNode();
            if (node) {
                var terms = node.innerText;
            }
        }

        if (typeof(obj.options.onbeforesearch) == 'function') {
            var ret = obj.options.onbeforesearch(obj, terms);
            if (ret) {
                terms = ret;
            } else {
                if (ret === false) {
                    // Ignore event
                    return;
                }
            }
        }

        obj(terms);
    }

    obj.blur = function(e) {
        obj.close();
    }

    // Add events
    if (obj.options.input) {
        obj.options.input.addEventListener("keyup", obj.keyup);
        obj.options.input.addEventListener("keydown", obj.keydown);
        obj.options.input.addEventListener("blur", obj.blur);
    }

    // Append element
    var container = document.createElement('div');
    container.classList.add('jsearch_container');
    container.onmousedown = select;
    el.appendChild(container);

    el.classList.add('jsearch');
    el.search = obj;

    return obj;
}
;// CONCATENATED MODULE: ./src/plugins/slider.js
function Slider(el, options) {
    var obj = {};
    obj.options = {};
    obj.currentImage = null;

    if (options) {
        obj.options = options;
    }

    // Focus
    el.setAttribute('tabindex', '900')

    // Items
    obj.options.items = [];

    if (! el.classList.contains('jslider')) {
        el.classList.add('jslider');
        el.classList.add('unselectable');

        if (obj.options.height) {
            el.style.minHeight = parseInt(obj.options.height) + 'px';
        }
        if (obj.options.width) {
            el.style.width = parseInt(obj.options.width) + 'px';
        }
        if (obj.options.grid) {
            el.classList.add('jslider-grid');
            var number = el.children.length;
            if (number > 4) {
                el.setAttribute('data-total', number - 4);
            }
            el.setAttribute('data-number', (number > 4 ? 4 : number));
        }

        // Add slider counter
        var counter = document.createElement('div');
        counter.classList.add('jslider-counter');

        // Move children inside
        if (el.children.length > 0) {
            // Keep children items
            for (var i = 0; i < el.children.length; i++) {
                obj.options.items.push(el.children[i]);
                
                // counter click event
                var item = document.createElement('div');
                item.onclick = function() {
                    var index = Array.prototype.slice.call(counter.children).indexOf(this);
                    obj.show(obj.currentImage = obj.options.items[index]);
                }
                counter.appendChild(item);
            }
        }
        // Add caption
        var caption = document.createElement('div');
        caption.className = 'jslider-caption';

        // Add close buttom
        var controls = document.createElement('div');
        var close = document.createElement('div');
        close.className = 'jslider-close';
        close.innerHTML = '';
        
        close.onclick = function() {
            obj.close();
        }
        controls.appendChild(caption);
        controls.appendChild(close);
    }

    obj.updateCounter = function(index) {
        for (var i = 0; i < counter.children.length; i ++) {
            if (counter.children[i].classList.contains('jslider-counter-focus')) {
                counter.children[i].classList.remove('jslider-counter-focus');
                break;
            }
        }
        counter.children[index].classList.add('jslider-counter-focus');
    }

    obj.show = function(target) {
        if (! target) {
            var target = el.children[0];
        }

        // Focus element
        el.classList.add('jslider-focus');
        el.classList.remove('jslider-grid');
        el.appendChild(controls);
        el.appendChild(counter);

        // Update counter
        var index = obj.options.items.indexOf(target);
        obj.updateCounter(index);

        // Remove display
        for (var i = 0; i < el.children.length; i++) {
            el.children[i].style.display = '';
        }
        target.style.display = 'block';

        // Is there any previous
        if (target.previousElementSibling) {
            el.classList.add('jslider-left');
        } else {
            el.classList.remove('jslider-left');
        }

        // Is there any next
        if (target.nextElementSibling && target.nextElementSibling.tagName == 'IMG') {
            el.classList.add('jslider-right');
        } else {
            el.classList.remove('jslider-right');
        }

        obj.currentImage = target;

        // Vertical image
        if (obj.currentImage.offsetHeight > obj.currentImage.offsetWidth) {
            obj.currentImage.classList.add('jslider-vertical');
        }

        controls.children[0].innerText = obj.currentImage.getAttribute('title');
    }

    obj.open = function() {
        obj.show();

        // Event
        if (typeof(obj.options.onopen) == 'function') {
            obj.options.onopen(el);
        }
    }

    obj.close = function() {
        // Remove control classes
        el.classList.remove('jslider-focus');
        el.classList.remove('jslider-left');
        el.classList.remove('jslider-right');
        // Show as a grid depending on the configuration
        if (obj.options.grid) {
            el.classList.add('jslider-grid');
        }
        // Remove display
        for (var i = 0; i < el.children.length; i++) {
            el.children[i].style.display = '';
        }
        // Remove controls from the component
        counter.remove();
        controls.remove();
        // Current image
        obj.currentImage = null;
        // Event
        if (typeof(obj.options.onclose) == 'function') {
            obj.options.onclose(el);
        }
    }

    obj.reset = function() {
        el.innerHTML = '';
    }

    obj.next = function() {
        var nextImage = obj.currentImage.nextElementSibling;
        if (nextImage && nextImage.tagName === 'IMG') {
            obj.show(obj.currentImage.nextElementSibling);
        }
    }
    
    obj.prev = function() {
        if (obj.currentImage.previousElementSibling) {
            obj.show(obj.currentImage.previousElementSibling);
        }
    }

    var mouseUp = function(e) {
        // Open slider
        if (e.target.tagName == 'IMG') {
            obj.show(e.target);
        } else if (! e.target.classList.contains('jslider-close') && ! (e.target.parentNode.classList.contains('jslider-counter') || e.target.classList.contains('jslider-counter'))){
            // Arrow controls
            var offsetX = e.offsetX || e.changedTouches[0].clientX;
            if (e.target.clientWidth - offsetX < 40) {
                // Show next image
                obj.next();
            } else if (offsetX < 40) {
                // Show previous image
                obj.prev();
            }
        }
    }

    if ('ontouchend' in document.documentElement === true) {
        el.addEventListener('touchend', mouseUp);
    } else {
        el.addEventListener('mouseup', mouseUp);
    }

    // Add global events
    el.addEventListener("swipeleft", function(e) {
        obj.next();
        e.preventDefault();
        e.stopPropagation();
    });

    el.addEventListener("swiperight", function(e) {
        obj.prev();
        e.preventDefault();
        e.stopPropagation();
    });

    el.addEventListener('keydown', function(e) {
        if (e.which == 27) {
            obj.close();
        }
    });

    el.slider = obj;

    return obj;
}
;// CONCATENATED MODULE: ./src/plugins/tags.js




function Tags(el, options) {
    // Redefine configuration
    if (el.tags) {
        return el.tags.setOptions(options, true);
    }

    var obj = { type:'tags' };
    obj.options = {};

    // Limit
    var limit = function() {
        return obj.options.limit && el.children.length >= obj.options.limit ? true : false;
    }

    // Search helpers
    var search = null;
    var searchContainer = null;

    obj.setOptions = function(options, reset) {
        /**
         * @typedef {Object} defaults
         * @property {(string|Array)} value - Initial value of the compontent
         * @property {number} limit - Max number of tags inside the element
         * @property {string} search - The URL for suggestions
         * @property {string} placeholder - The default instruction text on the element
         * @property {validation} validation - Method to validate the tags
         * @property {requestCallback} onbeforechange - Method to be execute before any changes on the element
         * @property {requestCallback} onchange - Method to be execute after any changes on the element
         * @property {requestCallback} onfocus - Method to be execute when on focus
         * @property {requestCallback} onblur - Method to be execute when on blur
         * @property {requestCallback} onload - Method to be execute when the element is loaded
         */
        var defaults = {
            value: '',
            limit: null,
            search: null,
            placeholder: null,
            validation: null,
            onbeforepaste: null,
            onbeforechange: null,
            onremoveitem: null,
            onlimit: null,
            onchange: null,
            onfocus: null,
            onblur: null,
            onload: null,
        }

        // Loop through though the default configuration
        for (var property in defaults) {
            if (options && options.hasOwnProperty(property)) {
                obj.options[property] = options[property];
            } else {
                if (typeof(obj.options[property]) == 'undefined' || reset === true) {
                    obj.options[property] = defaults[property];
                }
            }
        }

        // Placeholder
        if (obj.options.placeholder) {
            el.setAttribute('data-placeholder', obj.options.placeholder);
        } else {
            el.removeAttribute('data-placeholder');
        }
        el.placeholder = obj.options.placeholder;

        // Update value
        obj.setValue(obj.options.value);

        // Validate items
        filter();

        // Create search box
        if (obj.options.search) {
            if (! searchContainer) {
                searchContainer = document.createElement('div');
                el.parentNode.insertBefore(searchContainer, el.nextSibling);

                // Create container
                search = Search(searchContainer, {
                    data: obj.options.search,
                    onselect: function(a,b,c) {
                        obj.selectIndex(b,c);
                    }
                });
            }
        } else {
            if (searchContainer) {
                search = null;
                searchContainer.remove();
                searchContainer = null;
            }
        }

        return obj;
    }

    /**
     * Add a new tag to the element
     * @param {(?string|Array)} value - The value of the new element
     */
    obj.add = function(value, focus) {
        if (typeof(obj.options.onbeforechange) == 'function') {
            var ret = obj.options.onbeforechange(el, obj, obj.options.value, value);
            if (ret === false) {
                return false;
            } else { 
                if (ret != null) {
                    value = ret;
                }
            }
        }

        // Make sure search is closed
        if (search) {
            search.close();
        }

        if (limit()) {
            if (typeof(obj.options.onlimit) == 'function') {
                obj.options.onlimit(obj, obj.options.limit);
            } else {
                alert(dictionary.translate('You reach the limit number of entries') + ' ' + obj.options.limit);
            }
        } else {
            // Get node
            var node = helpers.getNode();

            if (node && node.parentNode && node.parentNode.classList.contains('jtags') &&
                node.nextSibling && (! (node.nextSibling.innerText && node.nextSibling.innerText.trim()))) {
                div = node.nextSibling;
            } else {
                // Remove not used last item
                if (el.lastChild) {
                    if (! el.lastChild.innerText.trim()) {
                        el.removeChild(el.lastChild);
                    }
                }

                // Mix argument string or array
                if (! value || typeof(value) == 'string') {
                    var div = createElement(value, value, node);
                } else {
                    for (var i = 0; i <= value.length; i++) {
                        if (! limit()) {
                            if (! value[i] || typeof(value[i]) == 'string') {
                                var t = value[i] || '';
                                var v = null;
                            } else {
                                var t = value[i].text;
                                var v = value[i].value;
                            }

                            // Add element
                            var div = createElement(t, v);
                        }
                    }
                }

                // Change
                change();
            }

            // Place caret
            if (focus) {
                setFocus(div);
            }
        }
    }

    obj.setLimit = function(limit) {
        obj.options.limit = limit;
        var n = el.children.length - limit;
        while (el.children.length > limit) {
            el.removeChild(el.lastChild);
        }
    }

    // Remove a item node
    obj.remove = function(node) {
        // Remove node
        node.parentNode.removeChild(node);
        // Make sure element is not blank
        if (! el.children.length) {
            obj.add('', true);
        } else {
            change();
        }

        if (typeof(obj.options.onremoveitem) == 'function') {
            obj.options.onremoveitem(el, obj, node);
        }
    }

    /**
     * Get all tags in the element
     * @return {Array} data - All tags as an array
     */
    obj.getData = function() {
        var data = [];
        for (var i = 0; i < el.children.length; i++) {
            // Get value
            var text = el.children[i].innerText.replace("\n", "");
            // Get id
            var value = el.children[i].getAttribute('data-value');
            if (! value) {
                value = text;
            }
            // Item
            if (text || value) {
                data.push({ text: text, value: value });
            }
        }
        return data;
    }

    /**
     * Get the value of one tag. Null for all tags
     * @param {?number} index - Tag index number. Null for all tags.
     * @return {string} value - All tags separated by comma
     */
    obj.getValue = function(index) {
        var value = null;

        if (index != null) {
            // Get one individual value
            value = el.children[index].getAttribute('data-value');
            if (! value) {
                value = el.children[index].innerText.replace("\n", "");
            }
        } else {
            // Get all
            var data = [];
            for (var i = 0; i < el.children.length; i++) {
                value = el.children[i].innerText.replace("\n", "");
                if (value) {
                    data.push(obj.getValue(i));
                }
            }
            value = data.join(',');
        }

        return value;
    }

    /**
     * Set the value of the element based on a string separeted by (,|;|\r\n)
     * @param {mixed} value - A string or array object with values
     */
    obj.setValue = function(mixed) {
        if (! mixed) {
            obj.reset();
        } else {
            if (el.value != mixed) {
                if (Array.isArray(mixed)) {
                    obj.add(mixed);
                } else {
                    // Remove whitespaces
                    var text = (''+mixed).trim();
                    // Tags
                    var data = extractTags(text);
                    // Reset
                    el.innerHTML = '';
                    // Add tags to the element
                    obj.add(data);
                }
            }
        }
    }

    /**
     * Reset the data from the element
     */
    obj.reset = function() {
        // Empty class
        el.classList.add('jtags-empty');
        // Empty element
        el.innerHTML = '<div></div>';
        // Execute changes
        change();
    }

    /**
     * Verify if all tags in the element are valid
     * @return {boolean}
     */
    obj.isValid = function() {
        var test = 0;
        for (var i = 0; i < el.children.length; i++) {
            if (el.children[i].classList.contains('jtags_error')) {
                test++;
            }
        }
        return test == 0 ? true : false;
    }

    /**
     * Add one element from the suggestions to the element
     * @param {object} item - Node element in the suggestions container
     */ 
    obj.selectIndex = function(text, value) {
        var node = helpers.getNode();
        if (node) {
            // Append text to the caret
            node.innerText = text;
            // Set node id
            if (value) {
                node.setAttribute('data-value', value);
            }
            // Remove any error
            node.classList.remove('jtags_error');
            if (! limit()) {
                // Add new item
                obj.add('', true);
            }
        }
    }

    /**
     * Search for suggestions
     * @param {object} node - Target node for any suggestions
     */
    obj.search = function(node) {
        // Search for
        var terms = node.innerText;
    }

    // Destroy tags element
    obj.destroy = function() {
        // Bind events
        el.removeEventListener('mouseup', tagsMouseUp);
        el.removeEventListener('keydown', tagsKeyDown);
        el.removeEventListener('keyup', tagsKeyUp);
        el.removeEventListener('paste', tagsPaste);
        el.removeEventListener('focus', tagsFocus);
        el.removeEventListener('blur', tagsBlur);

        // Remove element
        el.parentNode.removeChild(el);
    }

    var setFocus = function(node) {
        if (el.children.length) {
            var range = document.createRange();
            var sel = window.getSelection();
            if (! node) {
                var node = el.childNodes[el.childNodes.length-1];
            }
            range.setStart(node, node.length)
            range.collapse(true)
            sel.removeAllRanges()
            sel.addRange(range)
            el.scrollLeft = el.scrollWidth;
        }
    }

    var createElement = function(label, value, node) {
        var div = document.createElement('div');
        div.innerHTML = label ? label : '';
        if (value) {
            div.setAttribute('data-value', value);
        }

        if (node && node.parentNode.classList.contains('jtags')) {
            el.insertBefore(div, node.nextSibling);
        } else {
            el.appendChild(div);
        }

        return div;
    }

    var change = function() {
        // Value
        var value = obj.getValue();

        if (value != obj.options.value) {
            obj.options.value = value;
            if (typeof(obj.options.onchange) == 'function') {
                obj.options.onchange(el, obj, obj.options.value);
            }

            // Lemonade JS
            if (el.value != obj.options.value) {
                el.value = obj.options.value;
                if (typeof(el.oninput) == 'function') {
                    el.oninput({
                        type: 'input',
                        target: el,
                        value: el.value
                    });
                }
            }
        }

        filter();
    }

    /**
     * Filter tags
     */
    var filter = function() {
        for (var i = 0; i < el.children.length; i++) {
            if (el.children[i].tagName === 'DIV') {
                // Create label design
                if (!obj.getValue(i)) {
                    el.children[i].classList.remove('jtags_label');
                } else {
                    el.children[i].classList.add('jtags_label');

                    // Validation in place
                    if (typeof (obj.options.validation) == 'function') {
                        if (obj.getValue(i)) {
                            if (!obj.options.validation(el.children[i], el.children[i].innerText, el.children[i].getAttribute('data-value'))) {
                                el.children[i].classList.add('jtags_error');
                            } else {
                                el.children[i].classList.remove('jtags_error');
                            }
                        } else {
                            el.children[i].classList.remove('jtags_error');
                        }
                    } else {
                        el.children[i].classList.remove('jtags_error');
                    }
                }
            }
        }

        isEmpty();
    }

    var isEmpty = function() {
        // Can't be empty
        if (! el.innerText.trim()) {
            if (! el.children.length || el.children[0].tagName === 'BR') {
                el.innerHTML = '';
                setFocus(createElement());
            }
        } else {
            el.classList.remove('jtags-empty');
        }
    }

    /**
     * Extract tags from a string
     * @param {string} text - Raw string
     * @return {Array} data - Array with extracted tags
     */
    var extractTags = function(text) {
        /** @type {Array} */
        var data = [];

        /** @type {string} */
        var word = '';

        // Remove whitespaces
        text = text.trim();

        if (text) {
            for (var i = 0; i < text.length; i++) {
                if (text[i] == ',' || text[i] == ';' || text[i] == '\n') {
                    if (word) {
                        data.push(word.trim());
                        word = '';
                    }
                } else {
                    word += text[i];
                }
            }

            if (word) {
                data.push(word);
            }
        }

        return data;
    }

    /** @type {number} */
    var anchorOffset = 0;

    /**
     * Processing event keydown on the element
     * @param e {object}
     */
    var tagsKeyDown = function(e) {
        // Anchoroffset
        anchorOffset = window.getSelection().anchorOffset;

        // Verify if is empty
        isEmpty();

        // Comma
        if (e.key === 'Tab'  || e.key === ';' || e.key === ',') {
            var n = window.getSelection().anchorOffset;
            if (n > 1) {
                if (limit()) {
                    if (typeof(obj.options.onlimit) == 'function') {
                        obj.options.onlimit(obj, obj.options.limit)
                    }
                } else {
                    obj.add('', true);
                }
            }
            e.preventDefault();
        } else if (e.key == 'Enter') {
            if (! search || ! search.isOpened()) {
                var n = window.getSelection().anchorOffset;
                if (n > 1) {
                    if (! limit()) {
                        obj.add('', true);
                    }
                }
                e.preventDefault();
            }
        } else if (e.key == 'Backspace') {
            // Back space - do not let last item to be removed
            if (el.children.length == 1 && window.getSelection().anchorOffset < 1) {
                e.preventDefault();
            }
        }

        // Search events
        if (search) {
            search.keydown(e);
        }

        // Verify if is empty
        isEmpty();
    }

    /**
     * Processing event keyup on the element
     * @param e {object}
     */
    var tagsKeyUp = function(e) {
        if (e.which == 39) {
            // Right arrow
            var n = window.getSelection().anchorOffset;
            if (n > 1 && n == anchorOffset) {
                obj.add('', true);
            }
        } else if (e.which == 13 || e.which == 38 || e.which == 40) {
            e.preventDefault();
        } else {
            if (search) {
                search.keyup(e);
            }
        }

        filter();
    }

    /**
     * Processing event paste on the element
     * @param e {object}
     */
    var tagsPaste =  function(e) {
        if (e.clipboardData || e.originalEvent.clipboardData) {
            var text = (e.originalEvent || e).clipboardData.getData('text/plain');
        } else if (window.clipboardData) {
            var text = window.clipboardData.getData('Text');
        }

        var data = extractTags(text);

        if (typeof(obj.options.onbeforepaste) == 'function') {
            var ret = obj.options.onbeforepaste(el, obj, data);
            if (ret === false) {
                e.preventDefault();
                return false;
            } else {
                if (ret) {
                    data = ret;
                }
            }
        }

        if (data.length > 1) {
            obj.add(data, true);
            e.preventDefault();
        } else if (data[0]) {
            document.execCommand('insertText', false, data[0])
            e.preventDefault();
        }
    }

    /**
     * Processing event mouseup on the element
     * @param e {object}
     */
    var tagsMouseUp = function(e) {
        if (e.target.parentNode && e.target.parentNode.classList.contains('jtags')) {
            if (e.target.classList.contains('jtags_label') || e.target.classList.contains('jtags_error')) {
                var rect = e.target.getBoundingClientRect();
                if (rect.width - (e.clientX - rect.left) < 16) {
                    obj.remove(e.target);
                }
            }
        }

        // Set focus in the last item
        if (e.target == el) {
            setFocus();
        }
    }

    var tagsFocus = function() {
        if (! el.classList.contains('jtags-focus')) {
            if (! el.children.length || obj.getValue(el.children.length - 1)) {
                if (! limit()) {
                    createElement('');
                }
            }

            if (typeof(obj.options.onfocus) == 'function') {
                obj.options.onfocus(el, obj, obj.getValue());
            }

            el.classList.add('jtags-focus');
        }
    }

    var tagsBlur = function() {
        if (el.classList.contains('jtags-focus')) {
            if (search) {
                search.close();
            }

            for (var i = 0; i < el.children.length - 1; i++) {
                // Create label design
                if (! obj.getValue(i)) {
                    el.removeChild(el.children[i]);
                }
            }

            change();

            el.classList.remove('jtags-focus');

            if (typeof(obj.options.onblur) == 'function') {
                obj.options.onblur(el, obj, obj.getValue());
            }
        }
    }

    var init = function() {
        // Bind events
        if ('touchend' in document.documentElement === true) {
            el.addEventListener('touchend', tagsMouseUp);
        } else {
            el.addEventListener('mouseup', tagsMouseUp);
        }

        el.addEventListener('keydown', tagsKeyDown);
        el.addEventListener('keyup', tagsKeyUp);
        el.addEventListener('paste', tagsPaste);
        el.addEventListener('focus', tagsFocus);
        el.addEventListener('blur', tagsBlur);

        // Editable
        el.setAttribute('contenteditable', true);

        // Prepare container
        el.classList.add('jtags');

        // Initial options
        obj.setOptions(options);

        if (typeof(obj.options.onload) == 'function') {
            obj.options.onload(el, obj);
        }

        // Change methods
        el.change = obj.setValue;

        // Global generic value handler
        el.val = function(val) {
            if (val === undefined) {
                return obj.getValue();
            } else {
                obj.setValue(val);
            }
        }

        el.tags = obj;
    }

    init();

    return obj;
}
;// CONCATENATED MODULE: ./src/plugins/upload.js




function Upload(el, options) {
    var obj = {};
    obj.options = {};

    // Default configuration
    var defaults = {
        type: 'image',
        extension: '*',
        input: false,
        minWidth: false,
        maxWidth: null,
        maxHeight: null,
        maxJpegSizeBytes: null, // For example, 350Kb would be 350000
        onchange: null,
        multiple: false,
        remoteParser: null,
    };

    // Loop through our object
    for (var property in defaults) {
        if (options && options.hasOwnProperty(property)) {
            obj.options[property] = options[property];
        } else {
            obj.options[property] = defaults[property];
        }
    }

    // Multiple
    if (obj.options.multiple == true) {
        el.setAttribute('data-multiple', true);
    }

    // Container
    el.content = [];

    // Upload icon
    el.classList.add('jupload');

    if (obj.options.input == true) {
        el.classList.add('input');
    }

    obj.add = function(data) {
        // Reset container for single files
        if (obj.options.multiple == false) {
            el.content = [];
            el.innerText = '';
        }

        // Append to the element
        if (obj.options.type == 'image') {
            var img = document.createElement('img');
            img.setAttribute('src', data.file);
            img.setAttribute('tabindex', -1);
            if (! el.getAttribute('name')) {
                img.className = 'jfile';
                img.content = data;
            }
            el.appendChild(img);
        } else {
            if (data.name) {
                var name = data.name;
            } else {
                var name = data.file;
            }
            var div = document.createElement('div');
            div.innerText = name || obj.options.type;
            div.classList.add('jupload-item');
            div.setAttribute('tabindex', -1);
            el.appendChild(div);
        }

        if (data.content) {
            data.file = helpers.guid();
        }

        // Push content
        el.content.push(data);

        // Onchange
        if (typeof(obj.options.onchange) == 'function') {
            obj.options.onchange(el, data);
        }
    }

    obj.addFromFile = function(file) {
        var type = file.type.split('/');
        if (type[0] == obj.options.type) {
            var readFile = new FileReader();
            readFile.addEventListener("load", function (v) {
                var data = {
                    file: v.srcElement.result,
                    extension: file.name.substr(file.name.lastIndexOf('.') + 1),
                    name: file.name,
                    size: file.size,
                    lastmodified: file.lastModified,
                    content: v.srcElement.result,
                }

                obj.add(data);
            });

            readFile.readAsDataURL(file);
        } else {
            alert(dictionary.translate('This extension is not allowed'));
        }
    }

    obj.addFromUrl = function(src) {
        if (src.substr(0,4) != 'data' && ! obj.options.remoteParser) {
            console.error('remoteParser not defined in your initialization');
        } else {
            // This is to process cross domain images
            if (src.substr(0,4) == 'data') {
                var extension = src.split(';')
                extension = extension[0].split('/');
                var type = extension[0].replace('data:','');
                if (type == obj.options.type) {
                    var data = {
                        file: src,
                        name: '',
                        extension: extension[1],
                        content: src,
                    }
                    obj.add(data);
                } else {
                    alert(obj.options.text.extensionNotAllowed);
                }
            } else {
                var extension = src.substr(src.lastIndexOf('.') + 1);
                // Work for cross browsers
                src = obj.options.remoteParser + src;
                // Get remove content
                ajax({
                    url: src,
                    type: 'GET',
                    dataType: 'blob',
                    success: function(data) {
                        //add(extension[0].replace('data:',''), data);
                    }
                })
            }
        }
    }

    var getDataURL = function(canvas, type) {
        var compression = 0.92;
        var lastContentLength = null;
        var content = canvas.toDataURL(type, compression);
        while (obj.options.maxJpegSizeBytes && type === 'image/jpeg' &&
               content.length > obj.options.maxJpegSizeBytes && content.length !== lastContentLength) {
            // Apply the compression
            compression *= 0.9;
            lastContentLength = content.length;
            content = canvas.toDataURL(type, compression);
        }
        return content;
    }

    var mime = obj.options.type + '/' + obj.options.extension;
    var input = document.createElement('input');
    input.type = 'file';
    input.setAttribute('accept', mime);
    input.onchange = function() {
        for (var i = 0; i < this.files.length; i++) {
            obj.addFromFile(this.files[i]);
        }
    }

    // Allow multiple files
    if (obj.options.multiple == true) {
        input.setAttribute('multiple', true);
    }

    var current = null;

    el.addEventListener("click", function(e) {
        current = null;
        if (! el.children.length || e.target === el) {
            helpers.click(input);
        } else {
            if (e.target.parentNode == el) {
                current = e.target;
            }
        }
    });

    el.addEventListener("dblclick", function(e) {
        helpers.click(input);
    });

    el.addEventListener('dragenter', function(e) {
        el.style.border = '1px dashed #000';
    });

    el.addEventListener('dragleave', function(e) {
        el.style.border = '1px solid #eee';
    });

    el.addEventListener('dragstop', function(e) {
        el.style.border = '1px solid #eee';
    });

    el.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    el.addEventListener('keydown', function(e) {
        if (current && e.which == 46) {
            var index = Array.prototype.indexOf.call(el.children, current);
            if (index >= 0) {
                el.content.splice(index, 1);
                current.remove();
                current = null;
            }
        }
    });

    el.addEventListener('drop', function(e) {
        e.preventDefault();
        e.stopPropagation();

        var html = (e.originalEvent || e).dataTransfer.getData('text/html');
        var file = (e.originalEvent || e).dataTransfer.files;

        if (file.length) {
            for (var i = 0; i < e.dataTransfer.files.length; i++) {
                obj.addFromFile(e.dataTransfer.files[i]);
            }
        } else if (html) {
            if (obj.options.multiple == false) {
                el.innerText = '';
            }

            // Create temp element
            var div = document.createElement('div');
            div.innerHTML = html;

            // Extract images
            var img = div.querySelectorAll('img');

            if (img.length) {
                for (var i = 0; i < img.length; i++) {
                    obj.addFromUrl(img[i].src);
                }
            }
        }

        el.style.border = '1px solid #eee';

        return false;
    });

    el.val = function(val) {
        if (val === undefined) {
            return el.content && el.content.length ? el.content : null;
        } else {
            // Reset
            el.innerText = '';
            el.content = [];

            if (val) {
                if (Array.isArray(val)) {
                    for (var i = 0; i < val.length; i++) {
                        if (typeof(val[i]) == 'string') {
                            obj.add({ file: val[i] });
                        } else {
                            obj.add(val[i]);
                        }
                    }
                } else if (typeof(val) == 'string') {
                    obj.add({ file: val });
                }
            }
        }
    }

    el.upload = el.image = obj;

    return obj;
}

// EXTERNAL MODULE: ./packages/sha512/sha512.js
var sha512 = __webpack_require__(195);
var sha512_default = /*#__PURE__*/__webpack_require__.n(sha512);
;// CONCATENATED MODULE: ./src/jsuites.js




















































var jSuites = {
    // Helpers
    ...dictionary,
    ...helpers,
    /** Current version */
    version: '5.5.0',
    /** Bind new extensions to Jsuites */
    setExtensions: function(o) {
        if (typeof(o) == 'object') {
            var k = Object.keys(o);
            for (var i = 0; i < k.length; i++) {
                jSuites[k[i]] = o[k[i]];
            }
        }
    },
    tracking: tracking,
    path: Path,
    sorting: Sorting,
    lazyLoading: LazyLoading,
    // Plugins
    ajax: ajax,
    animation: animation,
    calendar: calendar,
    color: Color,
    contextmenu: contextmenu,
    dropdown: dropdown,
    editor: editor,
    floating: floating,
    form: plugins_form,
    mask: mask,
    modal: modal,
    notification: notification,
    palette: palette,
    picker: Picker,
    progressbar: Progressbar,
    rating: Rating,
    search: Search,
    slider: Slider,
    tabs: Tabs,
    tags: Tags,
    toolbar: Toolbar,
    upload: Upload,
    validations: validations,
}

// Legacy
jSuites.image = Upload;
jSuites.image.create = function(data) {
    var img = document.createElement('img');
    img.setAttribute('src', data.file);
    img.className = 'jfile';
    img.setAttribute('tabindex', -1);
    img.content = data;

    return img;
}

jSuites.tracker = plugins_form;
jSuites.loading = animation.loading;
jSuites.sha512 = (sha512_default());


/** Core events */
const Events = function() {

    tracking.state = [];

    const find = function(DOMElement, component) {
        if (DOMElement[component.type] && DOMElement[component.type] == component) {
            return true;
        }
        if (DOMElement.component && DOMElement.component == component) {
            return true;
        }
        if (DOMElement.parentNode) {
            return find(DOMElement.parentNode, component);
        }
        return false;
    }

    const isOpened = function(e) {
        if (tracking.state && tracking.state.length > 0) {
            for (var i = 0; i < tracking.state.length; i++) {
                if (tracking.state[i] && ! find(e, tracking.state[i])) {
                    tracking.state[i].close();
                }
            }
        }
    }

    // Width of the border
    let cornerSize = 15;

    // Current element
    let element = null;

    // Controllers
    let editorAction = false;

    // Event state
    let state = {
        x: null,
        y: null,
    }

    // Tooltip element
    let tooltip = document.createElement('div')
    tooltip.classList.add('jtooltip');

    const isWebcomponent = function(e) {
        return e.shadowRoot || e.tagName.includes('-');
    }

    const getElement = function(e) {
        let d;
        let element;
        // Which component I am clicking
        let path = e.path || (e.composedPath && e.composedPath());

        // If path available get the first element in the chain
        if (path) {
            element = path[0];
            // Adjustment sales force
            if (element && isWebcomponent(element) && ! element.shadowRoot && e.toElement) {
                element = e.toElement;
            }
        } else {
            // Try to guess using the coordinates
            if (e.target && isWebcomponent(e.target)) {
                d = e.target.shadowRoot;
            } else {
                d = document;
            }
            // Get the first target element
            element = d.elementFromPoint(x, y);
        }
        return element;
    }

    // Events
    const mouseDown = function(e) {
        // Verify current components tracking
        if (e.changedTouches && e.changedTouches[0]) {
            var x = e.changedTouches[0].clientX;
            var y = e.changedTouches[0].clientY;
        } else {
            var x = e.clientX;
            var y = e.clientY;
        }

        let element = getElement(e);
        // Editable
        let editable = element && element.tagName === 'DIV' && element.getAttribute('contentEditable');
        // Check if this is the floating
        let item = jSuites.findElement(element, 'jpanel');
        // Jfloating found
        if (item && ! item.classList.contains("readonly") && ! editable) {
            // Keep the tracking information
            let rect = item.getBoundingClientRect();
            let angle = 0;
            if (item.style.rotate) {
                // Extract the angle value from the match and convert it to a number
                angle = parseFloat(item.style.rotate);
            }
            let action = 'move';
            if (element.getAttribute('data-action')) {
                action = element.getAttribute('data-action');
            } else {
                if (item.style.cursor) {
                    action = 'resize';
                } else {
                    item.style.cursor = 'move';
                }
            }

            // Action
            editorAction = {
                action: action,
                a: angle,
                e: item,
                x: x,
                y: y,
                l: rect.left,
                t: rect.top,
                b: rect.bottom,
                r: rect.right,
                w: rect.width,
                h: rect.height,
                d: item.style.cursor,
                actioned: false,
            }
            // Make sure width and height styling is OK
            if (! item.style.width) {
                item.style.width = rect.width + 'px';
            }
            if (! item.style.height) {
                item.style.height = rect.height + 'px';
            }
        } else {
            // No floating action found
            editorAction = false;
        }

        isOpened(element);

        focus(e);
    }

    const calculateAngle = function(x1, y1, x2, y2, x3, y3) {
        // Calculate dx and dy for the first line
        const dx1 = x2 - x1;
        const dy1 = y2 - y1;
        // Calculate dx and dy for the second line
        const dx2 = x3 - x1;
        const dy2 = y3 - y1;
        // Calculate the angle for the first line
        let angle1 = Math.atan2(dy1, dx1);
        // Calculate the angle for the second line
        let angle2 = Math.atan2(dy2, dx2);
        // Calculate the angle difference in radians
        let angleDifference = angle2 - angle1;
        // Convert the angle difference to degrees
        angleDifference = angleDifference * (180 / Math.PI);
        // Normalize the angle difference to be within [0, 360) degrees
        if (angleDifference < 0) {
            angleDifference += 360;
        }
        return angleDifference;
    }

    const mouseUp = function(e) {
        if (editorAction && editorAction.e) {
            if (typeof(editorAction.e.refresh) == 'function' && state.actioned) {
                editorAction.e.refresh();
            }
            editorAction.e.style.cursor = '';
        }

        // Reset
        state = {
            x: null,
            y: null,
        }

        editorAction = false;
    }

    const mouseMove = function(e) {
        if (editorAction) {
            let x = e.clientX || e.pageX;
            let y = e.clientY || e.pageY;

            if (state.x == null && state.y == null) {
                state.x = x;
                state.y = y;
            }

            // Action on going
            if (editorAction.action === 'move') {
                var dx = x - state.x;
                var dy = y - state.y;
                var top = editorAction.e.offsetTop + dy;
                var left = editorAction.e.offsetLeft + dx;

                // Update position
                editorAction.e.style.top = top + 'px';
                editorAction.e.style.left = left + 'px';

                // Update element
                if (typeof (editorAction.e.refresh) == 'function') {
                    state.actioned = true;
                    editorAction.e.refresh('position', top, left);
                }
            } else if (editorAction.action === 'rotate') {
                let ox = editorAction.l+editorAction.w/2;
                let oy = editorAction.t+editorAction.h/2;
                let angle = calculateAngle(ox, oy, editorAction.x, editorAction.y, x, y);
                angle = angle + editorAction.a % 360;
                angle = Math.round(angle / 2) * 2;
                editorAction.e.style.rotate = `${angle}deg`;
                // Update element
                if (typeof (editorAction.e.refresh) == 'function') {
                    state.actioned = true;
                    editorAction.e.refresh('rotate', angle);
                }
            } else if (editorAction.action === 'resize') {
                let top = null;
                let left = null;
                let width = null;
                let height = null;

                if (editorAction.d == 'e-resize' || editorAction.d == 'ne-resize' || editorAction.d == 'se-resize') {
                    width = editorAction.e.offsetWidth + (x - state.x);

                    if (e.shiftKey) {
                        height = editorAction.e.offsetHeight + (x - state.x) * (editorAction.e.offsetHeight / editorAction.e.offsetWidth);
                    }
                } else if (editorAction.d === 'w-resize' || editorAction.d == 'nw-resize'|| editorAction.d == 'sw-resize') {
                    left = editorAction.e.offsetLeft + (x - state.x);
                    width = editorAction.e.offsetLeft + editorAction.e.offsetWidth - left;

                    if (e.shiftKey) {
                        height = editorAction.e.offsetHeight - (x - state.x) * (editorAction.e.offsetHeight / editorAction.e.offsetWidth);
                    }
                }

                if (editorAction.d == 's-resize' || editorAction.d == 'se-resize' || editorAction.d == 'sw-resize') {
                    if (! height) {
                        height = editorAction.e.offsetHeight + (y - state.y);
                    }
                } else if (editorAction.d === 'n-resize' || editorAction.d == 'ne-resize' || editorAction.d == 'nw-resize') {
                    top = editorAction.e.offsetTop + (y - state.y);
                    height = editorAction.e.offsetTop + editorAction.e.offsetHeight - top;
                }

                if (top) {
                    editorAction.e.style.top = top + 'px';
                }
                if (left) {
                    editorAction.e.style.left = left + 'px';
                }
                if (width) {
                    editorAction.e.style.width = width + 'px';
                }
                if (height) {
                    editorAction.e.style.height = height + 'px';
                }

                // Update element
                if (typeof(editorAction.e.refresh) == 'function') {
                    state.actioned = true;
                    editorAction.e.refresh('dimensions', width, height);
                }
            }

            state.x = x;
            state.y = y;
        } else {
            let element = getElement(e);
            // Resize action
            let item = jSuites.findElement(element, 'jpanel');
            // Found eligible component
            if (item) {
                // Resizing action
                let controls = item.classList.contains('jpanel-controls');
                if (controls) {
                    let position = element.getAttribute('data-position');
                    if (position) {
                        item.style.cursor = position;
                    } else {
                        item.style.cursor = '';
                    }
                } else if (item.getAttribute('tabindex')) {
                    let rect = item.getBoundingClientRect();
                    //console.log(e.clientY - rect.top, rect.width - (e.clientX - rect.left), cornerSize)
                    if (e.clientY - rect.top < cornerSize) {
                        if (rect.width - (e.clientX - rect.left) < cornerSize) {
                            item.style.cursor = 'ne-resize';
                        } else if (e.clientX - rect.left < cornerSize) {
                            item.style.cursor = 'nw-resize';
                        } else {
                            item.style.cursor = 'n-resize';
                        }
                    } else if (rect.height - (e.clientY - rect.top) < cornerSize) {
                        if (rect.width - (e.clientX - rect.left) < cornerSize) {
                            item.style.cursor = 'se-resize';
                        } else if (e.clientX - rect.left < cornerSize) {
                            item.style.cursor = 'sw-resize';
                        } else {
                            item.style.cursor = 's-resize';
                        }
                    } else if (rect.width - (e.clientX - rect.left) < cornerSize) {
                        item.style.cursor = 'e-resize';
                    } else if (e.clientX - rect.left < cornerSize) {
                        item.style.cursor = 'w-resize';
                    } else {
                        item.style.cursor = '';
                    }
                }
            }
        }
    }

    let position = ['n','ne','e','se','s','sw','w','nw','rotate'];
    position.forEach(function(v, k) {
        position[k] = document.createElement('div');
        position[k].classList.add('jpanel-action');
        if (v === 'rotate') {
            position[k].setAttribute('data-action', 'rotate');
        } else {
            position[k].setAttribute('data-action', 'resize');
            position[k].setAttribute('data-position', v + '-resize');
        }
    });

    let currentElement;

    const focus = function(e) {
        let element = getElement(e);
        // Check if this is the floating
        let item = jSuites.findElement(element, 'jpanel');
        if (item && ! item.classList.contains("readonly") && item.classList.contains('jpanel-controls')) {
            item.append(...position);

            if (! item.classList.contains('jpanel-rotate')) {
                position[position.length-1].remove();
            }

            currentElement = item;
        } else {
            blur(e);
        }
    }

    const blur = function(e) {
        if (currentElement) {
            position.forEach(function(v) {
                v.remove();
            });
            currentElement = null;
        }
    }

    const mouseOver = function(e) {
        let element = getElement(e);
        var message = element.getAttribute('data-tooltip');
        if (message) {
            // Instructions
            tooltip.innerText = message;

            // Position
            if (e.changedTouches && e.changedTouches[0]) {
                var x = e.changedTouches[0].clientX;
                var y = e.changedTouches[0].clientY;
            } else {
                var x = e.clientX;
                var y = e.clientY;
            }

            tooltip.style.top = y + 'px';
            tooltip.style.left = x + 'px';
            document.body.appendChild(tooltip);
        } else if (tooltip.innerText) {
            tooltip.innerText = '';
            document.body.removeChild(tooltip);
        }
    }

    const contextMenu = function(e) {
        var item = document.activeElement;
        if (item && typeof(item.contextmenu) == 'function') {
            // Create edition
            item.contextmenu(e);

            e.preventDefault();
            e.stopImmediatePropagation();
        } else {
            // Search for possible context menus
            item = jSuites.findElement(e.target, function(o) {
                return o.tagName && o.getAttribute('aria-contextmenu-id');
            });

            if (item) {
                var o = document.querySelector('#' + item);
                if (! o) {
                    console.error('JSUITES: contextmenu id not found: ' + item);
                } else {
                    o.contextmenu.open(e);
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            }
        }
    }

    const keyDown = function(e) {
        let item = document.activeElement;
        if (item) {
            if (e.key === "Delete" && typeof(item.delete) == 'function') {
                item.delete();
                e.preventDefault();
                e.stopImmediatePropagation();
            }
        }

        if (tracking.state && tracking.state.length) {
            item = tracking.state[tracking.state.length - 1]
            if (item) {
                if (e.key === "Escape" && typeof(item.isOpened) == 'function' && typeof(item.close) == 'function') {
                    if (item.isOpened()) {
                        item.close();
                        e.preventDefault();
                        e.stopImmediatePropagation();
                    }
                }
            }
        }
    }

    const input = function(e) {
        if (e.target.getAttribute('data-mask') || e.target.mask) {
            jSuites.mask(e);
        }
    }

    document.addEventListener('focusin', focus);
    document.addEventListener('mouseup', mouseUp);
    document.addEventListener("mousedown", mouseDown);
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseover', mouseOver);
    document.addEventListener('keydown', keyDown);
    document.addEventListener('contextmenu', contextMenu);
    document.addEventListener('input', input);

    // Block same events twice
    window['jSuitesEvents'] = true;
}

if (typeof(document) !== "undefined" && ! tracking.state) {
    if (typeof(window['jSuitesEvents']) === "undefined") {
        Events();
    }
}

/* harmony default export */ var jsuites = (jSuites);
}();
jSuites = __webpack_exports__["default"];
/******/ })()
;

    return jSuites;
})));