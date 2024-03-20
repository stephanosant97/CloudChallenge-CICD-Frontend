import{s as j,n as k,o as M,h as V}from"../chunks/scheduler.CUGDHCsf.js";import{S as I,i as S,k as h,c as m,s as x,l as d,o as w,a as p,n as _,y as D,j as l,p as c,f as u,m as b,u as y,t as g,b as $,d as v}from"../chunks/index.C-SfQL0N.js";import{V as A,N as H,b as L}from"../chunks/Video.vw2D4w6b.js";function P(i){let e,a,s,r,n=`<div class="headingdiv absolute top-14 bottom-0 right-0 z-15 border border-white border-2 p-5 bg-gray-600 transform flex-border svelte-15jwhf7"><h1 class="heading text-xl font-bold italic svelte-15jwhf7">About
			<hr class="abouthr svelte-15jwhf7"/></h1> <h2 class="aboutpara svelte-15jwhf7">I&#39;m an IT Support Specialist based out of Miami, FL. <br/>
			I&#39;ve bounced around the food and beverage, hospitality <br/>
			and warehouse industries before finally realizing my passion <br/>
			was in technology. This was a few years after tinkering <br/>
			with and building my own computer and Proxmox server. <br/> <br/>
			Whoops. <br/> <br/>
			I currently work in a hybrid onsite/Azure environment. <br/>
			Primary duties are currently Active Directory and Office 365 administration, <br/>
			as well as user support. During my free time I practice and <br/>
			work on my code. I&#39;m currently aiming for a role in the cloud/devops as I have<br/> personal experience
			working with AWS. Please feel free to check out my projects section.</h2> <h1 class="aboutpara2 font-bold svelte-15jwhf7">Find me here:<br/> <a href="https://github.com/stephanosant97" target="_blank" rel="noopener noreferrer"><i class="githubicon fab fa-github fa-2xl svelte-15jwhf7"></i></a> <a href="https://www.linkedin.com/in/stephano-s-6a022ba6/" target="_blank" rel="noopener noreferrer"><i class="linkedinicon fab fa-linkedin-in fa-2xl svelte-15jwhf7"></i></a></h1> <h1 class="text-gray-600" style="padding-top: 50px;">testestset</h1></div>`,t;return a=new A({props:{src:"/animation.mp4",autoplay:!0,playsinline:!0,muted:!0,loop:!0,class:"video-element object-cover w-full h-full",trackSrc:"animation.mp4"}}),{c(){e=h("div"),m(a.$$.fragment),s=x(),r=h("div"),r.innerHTML=n,this.h()},l(o){e=d(o,"DIV",{class:!0});var f=w(e);p(a.$$.fragment,f),s=_(f),r=d(f,"DIV",{class:!0,"data-svelte-h":!0}),D(r)!=="svelte-1vgmozh"&&(r.innerHTML=n),f.forEach(l),this.h()},h(){c(r,"class","flex justify-end"),c(e,"class","relative overflow-hidden w-screen h-screen")},m(o,f){u(o,e,f),b(a,e,null),y(e,s),y(e,r),t=!0},p:k,i(o){t||(g(a.$$.fragment,o),t=!0)},o(o){$(a.$$.fragment,o),t=!1},d(o){o&&l(e),v(a)}}}function T(i){let e;return M(()=>{e=document.querySelector(".video-element"),e.addEventListener("canplaythrough",()=>{e.muted=!0,e.play()})}),[]}class z extends I{constructor(e){super(),S(this,e,T,P,j,{})}}function E(i){let e,a,s,r;return{c(){e=h("img"),s=x(),r=h("span"),this.h()},l(n){e=d(n,"IMG",{src:!0,href:!0,class:!0,alt:!0}),s=_(n),r=d(n,"SPAN",{class:!0}),w(r).forEach(l),this.h()},h(){V(e.src,a="/me.png")||c(e,"src",a),c(e,"href","/"),c(e,"class","me-3 h-6 sm:h-9"),c(e,"alt","me emoji"),c(r,"class","self-center whitespace-nowrap text-xl text-orange-400 font-bold")},m(n,t){u(n,e,t),u(n,s,t),u(n,r,t)},p:k,d(n){n&&(l(e),l(s),l(r))}}}function N(i){let e,a,s,r='<a href="/" class="text-orange-400 text-lg font-bold bg-transparent">Home</a> <a href="/about" class="text-orange-400 text-lg font-bold bg-transparent">About</a> <a href="/projects" class="text-orange-400 text-lg font-bold bg-transparent sm:pr-4">Projects</a>',n;return e=new L({props:{$$slots:{default:[E]},$$scope:{ctx:i}}}),{c(){m(e.$$.fragment),a=x(),s=h("div"),s.innerHTML=r,this.h()},l(t){p(e.$$.fragment,t),a=_(t),s=d(t,"DIV",{class:!0,"data-svelte-h":!0}),D(s)!=="svelte-19kepg2"&&(s.innerHTML=r),this.h()},h(){c(s,"class","flex space-x-4")},m(t,o){b(e,t,o),u(t,a,o),u(t,s,o),n=!0},p(t,o){const f={};o&1&&(f.$$scope={dirty:o,ctx:t}),e.$set(f)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){t&&(l(a),l(s)),v(e,t)}}}function q(i){let e,a,s;return a=new H({props:{color:"form",class:"mobilenav px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 bg-transparent flex justify-between items-center",style:"border-bottom-width: 2px; border-bottom-color: #ccc;",$$slots:{default:[N]},$$scope:{ctx:i}}}),{c(){e=h("div"),m(a.$$.fragment),this.h()},l(r){e=d(r,"DIV",{class:!0});var n=w(e);p(a.$$.fragment,n),n.forEach(l),this.h()},h(){c(e,"class","relative px-8")},m(r,n){u(r,e,n),b(a,e,null),s=!0},p(r,[n]){const t={};n&1&&(t.$$scope={dirty:n,ctx:r}),a.$set(t)},i(r){s||(g(a.$$.fragment,r),s=!0)},o(r){$(a.$$.fragment,r),s=!1},d(r){r&&l(e),v(a)}}}class C extends I{constructor(e){super(),S(this,e,null,q,j,{})}}function B(i){let e,a,s,r,n;return a=new C({}),r=new z({}),{c(){e=h("div"),m(a.$$.fragment),s=x(),m(r.$$.fragment),this.h()},l(t){e=d(t,"DIV",{p:!0});var o=w(e);p(a.$$.fragment,o),s=_(o),p(r.$$.fragment,o),o.forEach(l),this.h()},h(){c(e,"p","8")},m(t,o){u(t,e,o),b(a,e,null),y(e,s),b(r,e,null),n=!0},p:k,i(t){n||(g(a.$$.fragment,t),g(r.$$.fragment,t),n=!0)},o(t){$(a.$$.fragment,t),$(r.$$.fragment,t),n=!1},d(t){t&&l(e),v(a),v(r)}}}class O extends I{constructor(e){super(),S(this,e,null,B,j,{})}}export{O as component};