import{s as k,n as I,o as D,h as M}from"../chunks/scheduler.CUGDHCsf.js";import{S as q,i as S,k as h,c as d,s as _,l as m,o as x,a as p,n as w,y as j,j as l,p as c,f,m as b,u as y,t as g,b as $,d as v}from"../chunks/index.C-SfQL0N.js";import{V,N as A,b as H}from"../chunks/Video.vw2D4w6b.js";function L(i){let e,a,s,r,n=`<h1 class="heading text-xl font-bold italic svelte-9a5hkq">About
			<hr class="abouthr svelte-9a5hkq"/></h1> <h2 class="aboutpara svelte-9a5hkq">I&#39;m an IT Support Specialist based out of Miami, FL. <br/>
			I&#39;ve bounced around the food and beverage, hospitality <br/>
			and warehouse industries before finally realizing my passion <br/>
			was in technology. This was a few years after tinkering <br/>
			with and building my own computer and Proxmox server. <br/> <br/>
			Whoops. <br/> <br/>
			I currently work in a hybrid onsite/Azure environment. <br/>
			Primary duties are currently Active Directory and Office 365 administration, <br/>
			as well as user support. During my free time I practice and <br/>
			work on my code. I&#39;m currently aiming for a role in the cloud/devops as I have<br/> personal experience
			working with AWS. Please feel free to check out my projects section.</h2> <h1 class="aboutpara2 font-bold svelte-9a5hkq">Find me here:<br/> <a href="https://github.com/stephanosant97" target="_blank" rel="noopener noreferrer"><i class="githubicon fab fa-github fa-2xl svelte-9a5hkq"></i></a> <a href="https://www.linkedin.com/in/stephano-s-6a022ba6/" target="_blank" rel="noopener noreferrer"><i class="linkedinicon fab fa-linkedin-in fa-2xl svelte-9a5hkq"></i></a></h1>`,t;return a=new V({props:{src:"/animation.mp4",autoplay:!0,playsinline:!0,muted:!0,loop:!0,class:"video-element object-cover w-full h-full",trackSrc:"animation.mp4"}}),{c(){e=h("div"),d(a.$$.fragment),s=_(),r=h("div"),r.innerHTML=n,this.h()},l(o){e=m(o,"DIV",{class:!0});var u=x(e);p(a.$$.fragment,u),s=w(u),r=m(u,"DIV",{class:!0,"data-svelte-h":!0}),j(r)!=="svelte-1g45z5e"&&(r.innerHTML=n),u.forEach(l),this.h()},h(){c(r,"class","headingdivone absolute inset-0 z-20 border border-white border-2 p-5 bg-gray-600 svelte-9a5hkq"),c(e,"class","relative overflow-hidden w-screen h-screen")},m(o,u){f(o,e,u),b(a,e,null),y(e,s),y(e,r),t=!0},p:I,i(o){t||(g(a.$$.fragment,o),t=!0)},o(o){$(a.$$.fragment,o),t=!1},d(o){o&&l(e),v(a)}}}function P(i){let e;return D(()=>{e=document.querySelector(".video-element"),e.addEventListener("canplaythrough",()=>{e.muted=!0,e.play()})}),[]}class T extends q{constructor(e){super(),S(this,e,P,L,k,{})}}function z(i){let e,a,s,r;return{c(){e=h("img"),s=_(),r=h("span"),this.h()},l(n){e=m(n,"IMG",{src:!0,href:!0,class:!0,alt:!0}),s=w(n),r=m(n,"SPAN",{class:!0}),x(r).forEach(l),this.h()},h(){M(e.src,a="/me.png")||c(e,"src",a),c(e,"href","/"),c(e,"class","me-3 h-6 sm:h-9"),c(e,"alt","me emoji"),c(r,"class","self-center whitespace-nowrap text-xl text-orange-400 font-bold")},m(n,t){f(n,e,t),f(n,s,t),f(n,r,t)},p:I,d(n){n&&(l(e),l(s),l(r))}}}function E(i){let e,a,s,r='<a href="/" class="text-orange-400 text-lg font-bold bg-transparent">Home</a> <a href="/about" class="text-orange-400 text-lg font-bold bg-transparent">About</a> <a href="/projects" class="text-orange-400 text-lg font-bold bg-transparent sm:pr-4">Projects</a>',n;return e=new H({props:{$$slots:{default:[z]},$$scope:{ctx:i}}}),{c(){d(e.$$.fragment),a=_(),s=h("div"),s.innerHTML=r,this.h()},l(t){p(e.$$.fragment,t),a=w(t),s=m(t,"DIV",{class:!0,"data-svelte-h":!0}),j(s)!=="svelte-19kepg2"&&(s.innerHTML=r),this.h()},h(){c(s,"class","flex space-x-4")},m(t,o){b(e,t,o),f(t,a,o),f(t,s,o),n=!0},p(t,o){const u={};o&1&&(u.$$scope={dirty:o,ctx:t}),e.$set(u)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){t&&(l(a),l(s)),v(e,t)}}}function N(i){let e,a,s;return a=new A({props:{color:"form",class:"px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 bg-transparent flex justify-between items-center",style:"border-bottom-width: 2px; border-bottom-color: #ccc;",$$slots:{default:[E]},$$scope:{ctx:i}}}),{c(){e=h("div"),d(a.$$.fragment),this.h()},l(r){e=m(r,"DIV",{class:!0});var n=x(e);p(a.$$.fragment,n),n.forEach(l),this.h()},h(){c(e,"class","relative px-8")},m(r,n){f(r,e,n),b(a,e,null),s=!0},p(r,[n]){const t={};n&1&&(t.$$scope={dirty:n,ctx:r}),a.$set(t)},i(r){s||(g(a.$$.fragment,r),s=!0)},o(r){$(a.$$.fragment,r),s=!1},d(r){r&&l(e),v(a)}}}class C extends q{constructor(e){super(),S(this,e,null,N,k,{})}}function B(i){let e,a,s,r,n;return a=new C({}),r=new T({}),{c(){e=h("div"),d(a.$$.fragment),s=_(),d(r.$$.fragment),this.h()},l(t){e=m(t,"DIV",{p:!0});var o=x(e);p(a.$$.fragment,o),s=w(o),p(r.$$.fragment,o),o.forEach(l),this.h()},h(){c(e,"p","8")},m(t,o){f(t,e,o),b(a,e,null),y(e,s),b(r,e,null),n=!0},p:I,i(t){n||(g(a.$$.fragment,t),g(r.$$.fragment,t),n=!0)},o(t){$(a.$$.fragment,t),$(r.$$.fragment,t),n=!1},d(t){t&&l(e),v(a),v(r)}}}class O extends q{constructor(e){super(),S(this,e,null,B,k,{})}}export{O as component};