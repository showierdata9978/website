const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}};Z();function b(){}function R(e){return e()}function G(){return Object.create(null)}function N(e){e.forEach(R)}function V(e){return typeof e=="function"}function q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ee(e){return Object.keys(e).length===0}function A(e,t){e.appendChild(t)}function u(e,t,r){e.insertBefore(t,r||null)}function f(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function O(e){return document.createTextNode(e)}function k(){return O(" ")}function te(){return O("")}function Q(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function y(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function re(e){return Array.from(e.childNodes)}let S;function L(e){S=e}function ne(){if(!S)throw new Error("Function called outside component initialization");return S}function oe(e){ne().$$.on_mount.push(e)}const C=[],P=[],H=[],W=[],ie=Promise.resolve();let X=!1;function se(){X||(X=!0,ie.then(Y))}function F(e){H.push(e)}function ae(e){W.push(e)}const K=new Set;let T=0;function Y(){const e=S;do{for(;T<C.length;){const t=C[T];T++,L(t),le(t.$$)}for(L(null),C.length=0,T=0;P.length;)P.pop()();for(let t=0;t<H.length;t+=1){const r=H[t];K.has(r)||(K.add(r),r())}H.length=0}while(C.length);for(;W.length;)W.pop()();X=!1,K.clear(),L(e)}function le(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}const I=new Set;let x;function ce(){x={r:0,c:[],p:x}}function fe(){x.r||N(x.c),x=x.p}function M(e,t){e&&e.i&&(I.delete(e),e.i(t))}function E(e,t,r,n){if(e&&e.o){if(I.has(e))return;I.add(e),x.c.push(()=>{I.delete(e),n&&(r&&e.d(1),n())}),e.o(t)}else n&&n()}function ue(e,t,r,n){const o=e.$$.props[t];o!==void 0&&(e.$$.bound[o]=r,n===void 0&&r(e.$$.ctx[o]))}function U(e){e&&e.c()}function z(e,t,r,n){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,r),n||F(()=>{const l=e.$$.on_mount.map(R).filter(V);e.$$.on_destroy?e.$$.on_destroy.push(...l):N(l),e.$$.on_mount=[]}),i.forEach(F)}function D(e,t){const r=e.$$;r.fragment!==null&&(N(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function de(e,t){e.$$.dirty[0]===-1&&(C.push(e),se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(e,t,r,n,o,i,l,w=[-1]){const m=S;L(e);const c=e.$$={fragment:null,ctx:[],props:i,update:b,not_equal:o,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:G(),dirty:w,skip_bound:!1,root:t.target||m.$$.root};l&&l(c.root);let _=!1;if(c.ctx=r?r(e,t.props||{},(d,v,...a)=>{const h=a.length?a[0]:v;return c.ctx&&o(c.ctx[d],c.ctx[d]=h)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](h),_&&de(e,d)),v}):[],c.update(),_=!0,N(c.before_update),c.fragment=n?n(c.ctx):!1,t.target){if(t.hydrate){const d=re(t.target);c.fragment&&c.fragment.l(d),d.forEach(f)}else c.fragment&&c.fragment.c();t.intro&&M(e.$$.fragment),z(e,t.target,t.anchor,t.customElement),Y()}L(m)}class B{$destroy(){D(this,1),this.$destroy=b}$on(t,r){if(!V(r))return b;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(r),()=>{const o=n.indexOf(r);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function he(e){let t,r,n;return{c(){t=p("p"),t.innerHTML=`<img src="https://avatars.githubusercontent.com/u/68120127?v=4" alt="my avatar" width="300" height="300" class="svelte-1w9gdj2"/>

    Hello! im ShowierData9978, a 15yo fullstack dev! I have a few open source
    python librarys i have made. One them is used by alot of people!`,r=k(),n=p("div"),n.innerHTML=`<p class="svelte-1w9gdj2"><br/>
        I work with
        <a href="https://github.com/Meower-Media-Co">Meower Media Co</a>
        and <a href="https://github.com/4DMinerCommunity">4DMiner Community</a>!
        <br/>  
        <br/>
        I moderate <a href="https://discord.gg/JJhag3kNXq">4DMiner</a>, and also
        mod the game. The game is by <a href="https://mashpoe.com">Mashpoe</a>!</p>`,y(t,"class","svelte-1w9gdj2"),y(n,"id","below"),y(n,"class","svelte-1w9gdj2")},m(o,i){u(o,t,i),u(o,r,i),u(o,n,i)},p:b,i:b,o:b,d(o){o&&f(t),o&&f(r),o&&f(n)}}}class ge extends B{constructor(t){super(),J(this,t,null,he,q,{})}}function me(e){let t,r,n,o,i,l,w,m,c,_,d,v,a,h,j,$;return{c(){t=O(`Hi im ShowierData9978, I have a youtube channel that goes by the same name. I\r
rarely upload on it though (editing issue). I know some of alot of langs atleast\r
some, and can pick them up realy easily.\r
\r
`),r=p("br"),n=O(`\r
some examples of this (languges and tools):\r
`),o=p("br"),i=k(),l=p("br"),w=k(),m=p("br"),c=k(),_=p("h3"),_.textContent="Connect with me:",d=k(),v=p("p"),v.innerHTML=`<a href="https://www.youtube.com/c/showierdata9978" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="showierdata9978" height="30" width="40"/></a> 
    <a href="https://discord.gg/JeWvKXBeTN" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg" alt="JeWvKXBeTN" height="30" width="40"/></a>`,a=k(),h=p("h3"),h.textContent="Languages and Tools:",j=k(),$=p("p"),$.innerHTML=`<a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"><img src="https://d33wubrfki0l68.cloudfront.net/7c8561d6a2795e512d1f3165ed7edd9405419968/ad392/img/symbol/svg/full_colored_light.svg" alt="bash" width="40" height="40"/></a> 
    <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/></a> 
    <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/></a> 
    <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"><img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" width="40" height="40"/></a> 
    <a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/></a> 
    <a href="https://www.figma.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/></a> 
    <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/></a> 
    <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="40" height="40"/></a> 
    <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></a> 
    <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/></a> 
    <a href="https://www.java.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/></a> 
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a> 
    <a href="https://www.linux.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/></a> 
    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/></a> 
    <a href="https://www.python.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/></a> 
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/></a>`,y(_,"align","left"),y(v,"align","left"),y(h,"align","left"),y($,"align","left")},m(s,g){u(s,t,g),u(s,r,g),u(s,n,g),u(s,o,g),u(s,i,g),u(s,l,g),u(s,w,g),u(s,m,g),u(s,c,g),u(s,_,g),u(s,d,g),u(s,v,g),u(s,a,g),u(s,h,g),u(s,j,g),u(s,$,g)},p:b,i:b,o:b,d(s){s&&f(t),s&&f(r),s&&f(n),s&&f(o),s&&f(i),s&&f(l),s&&f(w),s&&f(m),s&&f(c),s&&f(_),s&&f(d),s&&f(v),s&&f(a),s&&f(h),s&&f(j),s&&f($)}}}class pe extends B{constructor(t){super(),J(this,t,null,me,q,{})}}function we(e){let t,r,n,o,i,l,w;return{c(){t=p("div"),r=p("div"),n=p("button"),n.textContent="Home",o=k(),i=p("button"),i.textContent="About",y(n,"class","navbar-item svelte-1aqkplj"),y(i,"class","navbar-item svelte-1aqkplj"),y(r,"class","navbar-links svelte-1aqkplj"),y(t,"class","navbar svelte-1aqkplj")},m(m,c){u(m,t,c),A(t,r),A(r,n),A(r,o),A(r,i),l||(w=[Q(n,"click",e[1]),Q(i,"click",e[2])],l=!0)},p:b,i:b,o:b,d(m){m&&f(t),l=!1,N(w)}}}function be(e,t,r){let{page:n="home"}=t;const o=()=>r(0,n="home"),i=()=>r(0,n="about");return e.$$set=l=>{"page"in l&&r(0,n=l.page)},[n,o,i]}class _e extends B{constructor(t){super(),J(this,t,be,we,q,{page:0})}}function ve(e){let t,r;return t=new ge({}),{c(){U(t.$$.fragment)},m(n,o){z(t,n,o),r=!0},i(n){r||(M(t.$$.fragment,n),r=!0)},o(n){E(t.$$.fragment,n),r=!1},d(n){D(t,n)}}}function ye(e){let t,r;return t=new pe({}),{c(){U(t.$$.fragment)},m(n,o){z(t,n,o),r=!0},i(n){r||(M(t.$$.fragment,n),r=!0)},o(n){E(t.$$.fragment,n),r=!1},d(n){D(t,n)}}}function $e(e){let t,r,n,o,i,l,w;function m(a){e[1](a)}let c={};e[0]!==void 0&&(c.page=e[0]),t=new _e({props:c}),P.push(()=>ue(t,"page",m,e[0]));const _=[ye,ve],d=[];function v(a,h){return a[0]==="home"?0:a[0]==="about"?1:-1}return~(o=v(e))&&(i=d[o]=_[o](e)),{c(){U(t.$$.fragment),n=k(),i&&i.c(),l=te()},m(a,h){z(t,a,h),u(a,n,h),~o&&d[o].m(a,h),u(a,l,h),w=!0},p(a,[h]){const j={};!r&&h&1&&(r=!0,j.page=a[0],ae(()=>r=!1)),t.$set(j);let $=o;o=v(a),o!==$&&(i&&(ce(),E(d[$],1,1,()=>{d[$]=null}),fe()),~o?(i=d[o],i||(i=d[o]=_[o](a),i.c()),M(i,1),i.m(l.parentNode,l)):i=null)},i(a){w||(M(t.$$.fragment,a),M(i),w=!0)},o(a){E(t.$$.fragment,a),E(i),w=!1},d(a){D(t,a),a&&f(n),~o&&d[o].d(a),a&&f(l)}}}function ke(e,t,r){let n;oe(()=>{r(0,n="home")});function o(i){n=i,r(0,n)}return[n,o]}class xe extends B{constructor(t){super(),J(this,t,ke,$e,q,{})}}new xe({target:document.getElementById("app")});
