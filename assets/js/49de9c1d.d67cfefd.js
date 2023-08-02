"use strict";(self.webpackChunkdocs_timecraft_dev=self.webpackChunkdocs_timecraft_dev||[]).push([[443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||i;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="Go",p={unversionedId:"applications/go",id:"applications/go",title:"Go",description:"Preparing Go",source:"@site/docs/applications/go.md",sourceDirName:"applications",slug:"/applications/go",permalink:"/applications/go",draft:!1,editUrl:"https://github.com/stealthrocket/docs.timecraft.dev/tree/main/docs/applications/go.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Applications",permalink:"/category/applications"},next:{title:"Python",permalink:"/applications/python"}},l={},c=[{value:"Preparing Go",id:"preparing-go",level:2},{value:"Compiling your application",id:"compiling-your-application",level:2},{value:"Running your application with Timecraft",id:"running-your-application-with-timecraft",level:2},{value:"Networking applications",id:"networking-applications",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"go"},"Go"),(0,r.kt)("h2",{id:"preparing-go"},"Preparing Go"),(0,r.kt)("p",null,"Go 1.21, due to be released in August 2023, will be able to natively compile Go applications to WebAssembly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GOOS=wasip1 GOARCH=wasm go build ...\n")),(0,r.kt)("p",null,"Since Go 1.21 has not been released yet, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/golang.org/dl/gotip"},(0,r.kt)("inlineCode",{parentName:"a"},"gotip"))," to test these features before release:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go install golang.org/dl/gotip@latest\ngotip download\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GOOS=wasip1 GOARCH=wasm gotip build ...\n")),(0,r.kt)("h2",{id:"compiling-your-application"},"Compiling your application"),(0,r.kt)("p",null,"Instead of using ",(0,r.kt)("inlineCode",{parentName:"p"},"go build"),", use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GOOS=wasip1 GOARCH=wasm gotip build -o app.wasm <path/to/main/pkg>\n")),(0,r.kt)("p",null,"This will build a WebAssembly module that can be run with Timecraft."),(0,r.kt)("h2",{id:"running-your-application-with-timecraft"},"Running your application with Timecraft"),(0,r.kt)("p",null,"To run your application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"timecraft run app.wasm\n")),(0,r.kt)("p",null,"Command-line arguments can be specified after the WebAssembly module. To prevent\nTimecraft from interpreting command-line options for the application, use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"timecraft run -- app.wasm arg1 arg2 ...\n")),(0,r.kt)("p",null,"Note that environment variables passed to Timecraft are automatically passed to the\nWebAssembly module."),(0,r.kt)("h2",{id:"networking-applications"},"Networking applications"),(0,r.kt)("p",null,"You may quickly find that the networking capabilities of ",(0,r.kt)("inlineCode",{parentName:"p"},"GOOS=wasip1")," are limited."),(0,r.kt)("p",null,"We have created a library to help with common use cases, such as creating HTTP servers\nand connecting to databases. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stealthrocket/net"},"https://github.com/stealthrocket/net")," for usage details."))}m.isMDXComponent=!0}}]);