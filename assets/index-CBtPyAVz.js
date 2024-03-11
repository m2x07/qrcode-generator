(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}})();var R={},Ft=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},mt={},T={};let ct;const _t=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];T.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};T.getSymbolTotalCodewords=function(t){return _t[t]};T.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};T.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');ct=t};T.isKanjiModeEnabled=function(){return typeof ct<"u"};T.toSJIS=function(t){return ct(t)};var Q={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},e.from=function(o,r){if(e.isValid(o))return o;try{return t(o)}catch{return r}}})(Q);function yt(){this.buffer=[],this.length=0}yt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var vt=yt;function K(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}K.prototype.set=function(e,t,i,o){const r=e*this.size+t;this.data[r]=i,o&&(this.reservedBit[r]=!0)};K.prototype.get=function(e,t){return this.data[e*this.size+t]};K.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};K.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var kt=K,Ct={};(function(e){const t=T.getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];const r=Math.floor(o/7)+2,n=t(o),s=n===145?26:Math.ceil((n-13)/(2*r-2))*2,c=[n-7];for(let u=1;u<r-1;u++)c[u]=c[u-1]-s;return c.push(6),c.reverse()},e.getPositions=function(o){const r=[],n=e.getRowColCoords(o),s=n.length;for(let c=0;c<s;c++)for(let u=0;u<s;u++)c===0&&u===0||c===0&&u===s-1||c===s-1&&u===0||r.push([n[c],n[u]]);return r}})(Ct);var Et={};const zt=T.getSymbolSize,gt=7;Et.getPositions=function(t){const i=zt(t);return[[0,0],[i-gt,0],[0,i-gt]]};var pt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},e.from=function(r){return e.isValid(r)?parseInt(r,10):void 0},e.getPenaltyN1=function(r){const n=r.size;let s=0,c=0,u=0,a=null,l=null;for(let p=0;p<n;p++){c=u=0,a=l=null;for(let w=0;w<n;w++){let f=r.get(p,w);f===a?c++:(c>=5&&(s+=t.N1+(c-5)),a=f,c=1),f=r.get(w,p),f===l?u++:(u>=5&&(s+=t.N1+(u-5)),l=f,u=1)}c>=5&&(s+=t.N1+(c-5)),u>=5&&(s+=t.N1+(u-5))}return s},e.getPenaltyN2=function(r){const n=r.size;let s=0;for(let c=0;c<n-1;c++)for(let u=0;u<n-1;u++){const a=r.get(c,u)+r.get(c,u+1)+r.get(c+1,u)+r.get(c+1,u+1);(a===4||a===0)&&s++}return s*t.N2},e.getPenaltyN3=function(r){const n=r.size;let s=0,c=0,u=0;for(let a=0;a<n;a++){c=u=0;for(let l=0;l<n;l++)c=c<<1&2047|r.get(a,l),l>=10&&(c===1488||c===93)&&s++,u=u<<1&2047|r.get(l,a),l>=10&&(u===1488||u===93)&&s++}return s*t.N3},e.getPenaltyN4=function(r){let n=0;const s=r.data.length;for(let u=0;u<s;u++)n+=r.data[u];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(o,r,n){switch(o){case e.Patterns.PATTERN000:return(r+n)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(r+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return r*n%2+r*n%3===0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}e.applyMask=function(r,n){const s=n.size;for(let c=0;c<s;c++)for(let u=0;u<s;u++)n.isReserved(u,c)||n.xor(u,c,i(r,u,c))},e.getBestMask=function(r,n){const s=Object.keys(e.Patterns).length;let c=0,u=1/0;for(let a=0;a<s;a++){n(a),e.applyMask(a,r);const l=e.getPenaltyN1(r)+e.getPenaltyN2(r)+e.getPenaltyN3(r)+e.getPenaltyN4(r);e.applyMask(a,r),l<u&&(u=l,c=a)}return c}})(pt);var q={};const L=Q,J=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Y=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];q.getBlocksCount=function(t,i){switch(i){case L.L:return J[(t-1)*4+0];case L.M:return J[(t-1)*4+1];case L.Q:return J[(t-1)*4+2];case L.H:return J[(t-1)*4+3];default:return}};q.getTotalCodewordsCount=function(t,i){switch(i){case L.L:return Y[(t-1)*4+0];case L.M:return Y[(t-1)*4+1];case L.Q:return Y[(t-1)*4+2];case L.H:return Y[(t-1)*4+3];default:return}};var Bt={},G={};const V=new Uint8Array(512),$=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)V[i]=t,$[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)V[i]=V[i-255]})();G.log=function(t){if(t<1)throw new Error("log("+t+")");return $[t]};G.exp=function(t){return V[t]};G.mul=function(t,i){return t===0||i===0?0:V[$[t]+$[i]]};(function(e){const t=G;e.mul=function(o,r){const n=new Uint8Array(o.length+r.length-1);for(let s=0;s<o.length;s++)for(let c=0;c<r.length;c++)n[s+c]^=t.mul(o[s],r[c]);return n},e.mod=function(o,r){let n=new Uint8Array(o);for(;n.length-r.length>=0;){const s=n[0];for(let u=0;u<r.length;u++)n[u]^=t.mul(r[u],s);let c=0;for(;c<n.length&&n[c]===0;)c++;n=n.slice(c)}return n},e.generateECPolynomial=function(o){let r=new Uint8Array([1]);for(let n=0;n<o;n++)r=e.mul(r,new Uint8Array([1,t.exp(n)]));return r}})(Bt);const At=Bt;function at(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}at.prototype.initialize=function(t){this.degree=t,this.genPoly=At.generateECPolynomial(this.degree)};at.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const o=At.mod(i,this.genPoly),r=this.degree-o.length;if(r>0){const n=new Uint8Array(this.degree);return n.set(o,r),n}return o};var Ot=at,Nt={},D={},lt={};lt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var P={};const Tt="[0-9]+",Vt="[A-Z $%*+\\-./:]+";let H="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";H=H.replace(/u/g,"\\u");const Ht="(?:(?![A-Z0-9 $%*+\\-./:]|"+H+`)(?:.|[\r
]))+`;P.KANJI=new RegExp(H,"g");P.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");P.BYTE=new RegExp(Ht,"g");P.NUMERIC=new RegExp(Tt,"g");P.ALPHANUMERIC=new RegExp(Vt,"g");const Kt=new RegExp("^"+H+"$"),Jt=new RegExp("^"+Tt+"$"),Yt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");P.testKanji=function(t){return Kt.test(t)};P.testNumeric=function(t){return Jt.test(t)};P.testAlphanumeric=function(t){return Yt.test(t)};(function(e){const t=lt,i=P;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function o(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+r)}}e.from=function(n,s){if(e.isValid(n))return n;try{return o(n)}catch{return s}}})(D);(function(e){const t=T,i=q,o=Q,r=D,n=lt,s=7973,c=t.getBCHDigit(s);function u(w,f,m){for(let y=1;y<=40;y++)if(f<=e.getCapacity(y,m,w))return y}function a(w,f){return r.getCharCountIndicator(w,f)+4}function l(w,f){let m=0;return w.forEach(function(y){const N=a(y.mode,f);m+=N+y.getBitsLength()}),m}function p(w,f){for(let m=1;m<=40;m++)if(l(w,m)<=e.getCapacity(m,f,r.MIXED))return m}e.from=function(f,m){return n.isValid(f)?parseInt(f,10):m},e.getCapacity=function(f,m,y){if(!n.isValid(f))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=r.BYTE);const N=t.getSymbolTotalCodewords(f),h=i.getTotalCodewordsCount(f,m),C=(N-h)*8;if(y===r.MIXED)return C;const g=C-a(y,f);switch(y){case r.NUMERIC:return Math.floor(g/10*3);case r.ALPHANUMERIC:return Math.floor(g/11*2);case r.KANJI:return Math.floor(g/13);case r.BYTE:default:return Math.floor(g/8)}},e.getBestVersionForData=function(f,m){let y;const N=o.from(m,o.M);if(Array.isArray(f)){if(f.length>1)return p(f,N);if(f.length===0)return 1;y=f[0]}else y=f;return u(y.mode,y.getLength(),N)},e.getEncodedBits=function(f){if(!n.isValid(f)||f<7)throw new Error("Invalid QR Code version");let m=f<<12;for(;t.getBCHDigit(m)-c>=0;)m^=s<<t.getBCHDigit(m)-c;return f<<12|m}})(Nt);var It={};const ot=T,St=1335,$t=21522,ht=ot.getBCHDigit(St);It.getEncodedBits=function(t,i){const o=t.bit<<3|i;let r=o<<10;for(;ot.getBCHDigit(r)-ht>=0;)r^=St<<ot.getBCHDigit(r)-ht;return(o<<10|r)^$t};var Pt={};const jt=D;function F(e){this.mode=jt.NUMERIC,this.data=e.toString()}F.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(t){let i,o,r;for(i=0;i+3<=this.data.length;i+=3)o=this.data.substr(i,3),r=parseInt(o,10),t.put(r,10);const n=this.data.length-i;n>0&&(o=this.data.substr(i),r=parseInt(o,10),t.put(r,n*3+1))};var Qt=F;const qt=D,x=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function _(e){this.mode=qt.ALPHANUMERIC,this.data=e}_.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};_.prototype.getLength=function(){return this.data.length};_.prototype.getBitsLength=function(){return _.getBitsLength(this.data.length)};_.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let o=x.indexOf(this.data[i])*45;o+=x.indexOf(this.data[i+1]),t.put(o,11)}this.data.length%2&&t.put(x.indexOf(this.data[i]),6)};var Gt=_,Wt=function(t){for(var i=[],o=t.length,r=0;r<o;r++){var n=t.charCodeAt(r);if(n>=55296&&n<=56319&&o>r+1){var s=t.charCodeAt(r+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,r+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const Zt=Wt,Xt=D;function v(e){this.mode=Xt.BYTE,typeof e=="string"&&(e=Zt(e)),this.data=new Uint8Array(e)}v.getBitsLength=function(t){return t*8};v.prototype.getLength=function(){return this.data.length};v.prototype.getBitsLength=function(){return v.getBitsLength(this.data.length)};v.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var xt=v;const te=D,ee=T;function k(e){this.mode=te.KANJI,this.data=e}k.getBitsLength=function(t){return t*13};k.prototype.getLength=function(){return this.data.length};k.prototype.getBitsLength=function(){return k.getBitsLength(this.data.length)};k.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=ee.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var ne=k,Mt={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,o,r){var n={},s={};s[o]=0;var c=t.PriorityQueue.make();c.push(o,0);for(var u,a,l,p,w,f,m,y,N;!c.empty();){u=c.pop(),a=u.value,p=u.cost,w=i[a]||{};for(l in w)w.hasOwnProperty(l)&&(f=w[l],m=p+f,y=s[l],N=typeof s[l]>"u",(N||y>m)&&(s[l]=m,c.push(l,m),n[l]=a))}if(typeof r<"u"&&typeof s[r]>"u"){var h=["Could not find a path from ",o," to ",r,"."].join("");throw new Error(h)}return n},extract_shortest_path_from_predecessor_list:function(i,o){for(var r=[],n=o;n;)r.push(n),i[n],n=i[n];return r.reverse(),r},find_path:function(i,o,r){var n=t.single_source_shortest_paths(i,o,r);return t.extract_shortest_path_from_predecessor_list(n,r)},PriorityQueue:{make:function(i){var o=t.PriorityQueue,r={},n;i=i||{};for(n in o)o.hasOwnProperty(n)&&(r[n]=o[n]);return r.queue=[],r.sorter=i.sorter||o.default_sorter,r},default_sorter:function(i,o){return i.cost-o.cost},push:function(i,o){var r={value:i,cost:o};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Mt);var re=Mt.exports;(function(e){const t=D,i=Qt,o=Gt,r=xt,n=ne,s=P,c=T,u=re;function a(h){return unescape(encodeURIComponent(h)).length}function l(h,C,g){const d=[];let E;for(;(E=h.exec(g))!==null;)d.push({data:E[0],index:E.index,mode:C,length:E[0].length});return d}function p(h){const C=l(s.NUMERIC,t.NUMERIC,h),g=l(s.ALPHANUMERIC,t.ALPHANUMERIC,h);let d,E;return c.isKanjiModeEnabled()?(d=l(s.BYTE,t.BYTE,h),E=l(s.KANJI,t.KANJI,h)):(d=l(s.BYTE_KANJI,t.BYTE,h),E=[]),C.concat(g,d,E).sort(function(A,I){return A.index-I.index}).map(function(A){return{data:A.data,mode:A.mode,length:A.length}})}function w(h,C){switch(C){case t.NUMERIC:return i.getBitsLength(h);case t.ALPHANUMERIC:return o.getBitsLength(h);case t.KANJI:return n.getBitsLength(h);case t.BYTE:return r.getBitsLength(h)}}function f(h){return h.reduce(function(C,g){const d=C.length-1>=0?C[C.length-1]:null;return d&&d.mode===g.mode?(C[C.length-1].data+=g.data,C):(C.push(g),C)},[])}function m(h){const C=[];for(let g=0;g<h.length;g++){const d=h[g];switch(d.mode){case t.NUMERIC:C.push([d,{data:d.data,mode:t.ALPHANUMERIC,length:d.length},{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.ALPHANUMERIC:C.push([d,{data:d.data,mode:t.BYTE,length:d.length}]);break;case t.KANJI:C.push([d,{data:d.data,mode:t.BYTE,length:a(d.data)}]);break;case t.BYTE:C.push([{data:d.data,mode:t.BYTE,length:a(d.data)}])}}return C}function y(h,C){const g={},d={start:{}};let E=["start"];for(let B=0;B<h.length;B++){const A=h[B],I=[];for(let b=0;b<A.length;b++){const S=A[b],O=""+B+b;I.push(O),g[O]={node:S,lastCount:0},d[O]={};for(let X=0;X<E.length;X++){const M=E[X];g[M]&&g[M].node.mode===S.mode?(d[M][O]=w(g[M].lastCount+S.length,S.mode)-w(g[M].lastCount,S.mode),g[M].lastCount+=S.length):(g[M]&&(g[M].lastCount=S.length),d[M][O]=w(S.length,S.mode)+4+t.getCharCountIndicator(S.mode,C))}}E=I}for(let B=0;B<E.length;B++)d[E[B]].end=0;return{map:d,table:g}}function N(h,C){let g;const d=t.getBestModeForData(h);if(g=t.from(C,d),g!==t.BYTE&&g.bit<d.bit)throw new Error('"'+h+'" cannot be encoded with mode '+t.toString(g)+`.
 Suggested mode is: `+t.toString(d));switch(g===t.KANJI&&!c.isKanjiModeEnabled()&&(g=t.BYTE),g){case t.NUMERIC:return new i(h);case t.ALPHANUMERIC:return new o(h);case t.KANJI:return new n(h);case t.BYTE:return new r(h)}}e.fromArray=function(C){return C.reduce(function(g,d){return typeof d=="string"?g.push(N(d,null)):d.data&&g.push(N(d.data,d.mode)),g},[])},e.fromString=function(C,g){const d=p(C,c.isKanjiModeEnabled()),E=m(d),B=y(E,g),A=u.find_path(B.map,"start","end"),I=[];for(let b=1;b<A.length-1;b++)I.push(B.table[A[b]].node);return e.fromArray(f(I))},e.rawSplit=function(C){return e.fromArray(p(C,c.isKanjiModeEnabled()))}})(Pt);const W=T,tt=Q,oe=vt,ie=kt,se=Ct,ue=Et,it=pt,st=q,ce=Ot,j=Nt,ae=It,le=D,et=Pt;function fe(e,t){const i=e.size,o=ue.getPositions(t);for(let r=0;r<o.length;r++){const n=o[r][0],s=o[r][1];for(let c=-1;c<=7;c++)if(!(n+c<=-1||i<=n+c))for(let u=-1;u<=7;u++)s+u<=-1||i<=s+u||(c>=0&&c<=6&&(u===0||u===6)||u>=0&&u<=6&&(c===0||c===6)||c>=2&&c<=4&&u>=2&&u<=4?e.set(n+c,s+u,!0,!0):e.set(n+c,s+u,!1,!0))}}function de(e){const t=e.size;for(let i=8;i<t-8;i++){const o=i%2===0;e.set(i,6,o,!0),e.set(6,i,o,!0)}}function ge(e,t){const i=se.getPositions(t);for(let o=0;o<i.length;o++){const r=i[o][0],n=i[o][1];for(let s=-2;s<=2;s++)for(let c=-2;c<=2;c++)s===-2||s===2||c===-2||c===2||s===0&&c===0?e.set(r+s,n+c,!0,!0):e.set(r+s,n+c,!1,!0)}}function he(e,t){const i=e.size,o=j.getEncodedBits(t);let r,n,s;for(let c=0;c<18;c++)r=Math.floor(c/3),n=c%3+i-8-3,s=(o>>c&1)===1,e.set(r,n,s,!0),e.set(n,r,s,!0)}function nt(e,t,i){const o=e.size,r=ae.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(r>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(o-15+n,8,s,!0),n<8?e.set(8,o-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(o-8,8,1,!0)}function we(e,t){const i=e.size;let o=-1,r=i-1,n=7,s=0;for(let c=i-1;c>0;c-=2)for(c===6&&c--;;){for(let u=0;u<2;u++)if(!e.isReserved(r,c-u)){let a=!1;s<t.length&&(a=(t[s]>>>n&1)===1),e.set(r,c-u,a),n--,n===-1&&(s++,n=7)}if(r+=o,r<0||i<=r){r-=o,o=-o;break}}}function me(e,t,i){const o=new oe;i.forEach(function(u){o.put(u.mode.bit,4),o.put(u.getLength(),le.getCharCountIndicator(u.mode,e)),u.write(o)});const r=W.getSymbolTotalCodewords(e),n=st.getTotalCodewordsCount(e,t),s=(r-n)*8;for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);const c=(s-o.getLengthInBits())/8;for(let u=0;u<c;u++)o.put(u%2?17:236,8);return ye(o,e,t)}function ye(e,t,i){const o=W.getSymbolTotalCodewords(t),r=st.getTotalCodewordsCount(t,i),n=o-r,s=st.getBlocksCount(t,i),c=o%s,u=s-c,a=Math.floor(o/s),l=Math.floor(n/s),p=l+1,w=a-l,f=new ce(w);let m=0;const y=new Array(s),N=new Array(s);let h=0;const C=new Uint8Array(e.buffer);for(let A=0;A<s;A++){const I=A<u?l:p;y[A]=C.slice(m,m+I),N[A]=f.encode(y[A]),m+=I,h=Math.max(h,I)}const g=new Uint8Array(o);let d=0,E,B;for(E=0;E<h;E++)for(B=0;B<s;B++)E<y[B].length&&(g[d++]=y[B][E]);for(E=0;E<w;E++)for(B=0;B<s;B++)g[d++]=N[B][E];return g}function Ce(e,t,i,o){let r;if(Array.isArray(e))r=et.fromArray(e);else if(typeof e=="string"){let a=t;if(!a){const l=et.rawSplit(e);a=j.getBestVersionForData(l,i)}r=et.fromString(e,a||40)}else throw new Error("Invalid data");const n=j.getBestVersionForData(r,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=me(t,i,r),c=W.getSymbolSize(t),u=new ie(c);return fe(u,t),de(u),ge(u,t),nt(u,i,0),t>=7&&he(u,t),we(u,s),isNaN(o)&&(o=it.getBestMask(u,nt.bind(null,u,i))),it.applyMask(o,u),nt(u,i,o),{modules:u,version:t,errorCorrectionLevel:i,maskPattern:o,segments:r}}mt.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let o=tt.M,r,n;return typeof i<"u"&&(o=tt.from(i.errorCorrectionLevel,tt.M),r=j.from(i.version),n=it.from(i.maskPattern),i.toSJISFunc&&W.setToSJISFunction(i.toSJISFunc)),Ce(t,r,o,n)};var bt={},ft={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let o=i.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+i);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(n){return[n,n]}))),o.length===6&&o.push("F","F");const r=parseInt(o.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+o.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});const r=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,n=o.width&&o.width>=21?o.width:void 0,s=o.scale||4;return{width:n,scale:n?4:s,margin:r,color:{dark:t(o.color.dark||"#000000ff"),light:t(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,r){return r.width&&r.width>=o+r.margin*2?r.width/(o+r.margin*2):r.scale},e.getImageWidth=function(o,r){const n=e.getScale(o,r);return Math.floor((o+r.margin*2)*n)},e.qrToImageData=function(o,r,n){const s=r.modules.size,c=r.modules.data,u=e.getScale(s,n),a=Math.floor((s+n.margin*2)*u),l=n.margin*u,p=[n.color.light,n.color.dark];for(let w=0;w<a;w++)for(let f=0;f<a;f++){let m=(w*a+f)*4,y=n.color.light;if(w>=l&&f>=l&&w<a-l&&f<a-l){const N=Math.floor((w-l)/u),h=Math.floor((f-l)/u);y=p[c[N*s+h]?1:0]}o[m++]=y.r,o[m++]=y.g,o[m++]=y.b,o[m]=y.a}}})(ft);(function(e){const t=ft;function i(r,n,s){r.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,c){let u=c,a=s;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),s||(a=o()),u=t.getOptions(u);const l=t.getImageWidth(n.modules.size,u),p=a.getContext("2d"),w=p.createImageData(l,l);return t.qrToImageData(w.data,n,u),i(p,a,l),p.putImageData(w,0,0),a},e.renderToDataURL=function(n,s,c){let u=c;typeof u>"u"&&(!s||!s.getContext)&&(u=s,s=void 0),u||(u={});const a=e.render(n,s,u),l=u.type||"image/png",p=u.rendererOpts||{};return a.toDataURL(l,p.quality)}})(bt);var Lt={};const Ee=ft;function wt(e,t){const i=e.a/255,o=t+'="'+e.hex+'"';return i<1?o+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function rt(e,t,i){let o=e+t;return typeof i<"u"&&(o+=" "+i),o}function pe(e,t,i){let o="",r=0,n=!1,s=0;for(let c=0;c<e.length;c++){const u=Math.floor(c%t),a=Math.floor(c/t);!u&&!n&&(n=!0),e[c]?(s++,c>0&&u>0&&e[c-1]||(o+=n?rt("M",u+i,.5+a+i):rt("m",r,0),r=0,n=!1),u+1<t&&e[c+1]||(o+=rt("h",s),s=0)):r++}return o}Lt.render=function(t,i,o){const r=Ee.getOptions(i),n=t.modules.size,s=t.modules.data,c=n+r.margin*2,u=r.color.light.a?"<path "+wt(r.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",a="<path "+wt(r.color.dark,"stroke")+' d="'+pe(s,n,r.margin)+'"/>',l='viewBox="0 0 '+c+" "+c+'"',w='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+l+' shape-rendering="crispEdges">'+u+a+`</svg>
`;return typeof o=="function"&&o(null,w),w};const Be=Ft,ut=mt,Rt=bt,Ae=Lt;function dt(e,t,i,o,r){const n=[].slice.call(arguments,1),s=n.length,c=typeof n[s-1]=="function";if(!c&&!Be())throw new Error("Callback required as last argument");if(c){if(s<2)throw new Error("Too few arguments provided");s===2?(r=i,i=t,t=o=void 0):s===3&&(t.getContext&&typeof r>"u"?(r=o,o=void 0):(r=o,o=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=o=void 0):s===2&&!t.getContext&&(o=i,i=t,t=void 0),new Promise(function(u,a){try{const l=ut.create(i,o);u(e(l,t,o))}catch(l){a(l)}})}try{const u=ut.create(i,o);r(null,e(u,t,o))}catch(u){r(u)}}R.create=ut.create;R.toCanvas=dt.bind(null,Rt.render);R.toDataURL=dt.bind(null,Rt.renderToDataURL);R.toString=dt.bind(null,function(e,t,i){return Ae.render(e,i)});const Z=document.querySelector("#canvas"),Ne=document.querySelector("#data"),Dt=document.querySelector("#colorLight"),Ut=document.querySelector("#colorDark");let U="https://youtu.be/dQw4w9WgXcQ?si=Oa3-SPZpfGwT0573",z={errorCorrectionLevel:"Q",margin:2,width:325,color:{dark:"#000000",light:"#ffffff"}};Dt.value="#ffffff";Ut.value="#000000";Dt.addEventListener("change",e=>{z.color.light=e.target.value,R.toCanvas(Z,U,z)});Ut.addEventListener("change",e=>{z.color.dark=e.target.value,R.toCanvas(Z,U,z)});Ne.addEventListener("input",e=>{e.target.value==""?U="https://youtu.be/dQw4w9WgXcQ?si=Oa3-SPZpfGwT0573":U=e.target.value,R.toCanvas(Z,U,z)});R.toCanvas(Z,U,z);
