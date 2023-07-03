"use strict";(self.webpackChunkdocs_timecraft_dev=self.webpackChunkdocs_timecraft_dev||[]).push([[238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=i,d=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(d,a(a({ref:t},f),{},{components:r})):n.createElement(d,a({ref:t},f))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={},a="Profiling",l={unversionedId:"using-timecraft/profiling",id:"using-timecraft/profiling",title:"Profiling",description:"Timecraft can generate CPU and memory profiles from a historical trace of execution.",source:"@site/docs/using-timecraft/profiling.md",sourceDirName:"using-timecraft",slug:"/using-timecraft/profiling",permalink:"/using-timecraft/profiling",draft:!1,editUrl:"https://github.com/stealthrocket/docs.timecraft.dev/tree/main/docs/docs/using-timecraft/profiling.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Execution tracing",permalink:"/using-timecraft/execution-tracing"},next:{title:"Record & Replay",permalink:"/using-timecraft/record-replay"}},p={},c=[{value:"Generating Profiles",id:"generating-profiles",level:2},{value:"Viewing Profiles",id:"viewing-profiles",level:2},{value:"Profiling Issues",id:"profiling-issues",level:2},{value:"<code>dot</code> executable not found in path",id:"dot-executable-not-found-in-path",level:3}],f={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(s,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"profiling"},"Profiling"),(0,i.kt)("p",null,"Timecraft can generate CPU and memory profiles from a historical trace of execution."),(0,i.kt)("p",null,"Timecraft uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stealthrocket/wzprof"},"wzprof")," to profile applications\ncompiled to WebAssembly.\nFor a deep dive into the technology, see ",(0,i.kt)("a",{parentName:"p",href:"https://blog.stealthrocket.tech/performance-in-the-spotlight-webassembly-profiling-for-everyone/"},"this blog post"),"."),(0,i.kt)("h2",{id:"generating-profiles"},"Generating Profiles"),(0,i.kt)("p",null,"Here's an example process:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ timecraft run testdata/go/echo.wasm foo\n9341c1c8-1d9b-43b5-a140-b36f866e00cf\nfoo\n")),(0,i.kt)("p",null,"To generate profiles, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"timecraft profile")," command. This will generate a CPU\nprofile and memory profile, and write them to the registry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ timecraft profile 9341c1c8-1d9b-43b5-a140-b36f866e00cf\nPROFILE ID    PROCESS ID                            TYPE    START   DURATION  SIZE\na53837e395c3  9341c1c8-1d9b-43b5-a140-b36f866e00cf  cpu     6s ago  5ms       37.6 KiB\n219b8e22df5a  9341c1c8-1d9b-43b5-a140-b36f866e00cf  memory  6s ago  5ms       2.17 KiB\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"timecraft profile")," command has options to control things like the\ntime range and sampling rate. See ",(0,i.kt)("inlineCode",{parentName:"p"},"timecraft profile -h"),"."),(0,i.kt)("h2",{id:"viewing-profiles"},"Viewing Profiles"),(0,i.kt)("p",null,"To export a profile from the registry, use ",(0,i.kt)("inlineCode",{parentName:"p"},"timecraft export profile"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ timecraft export profile a53837e395c3 profile.out\n")),(0,i.kt)("p",null,"To view the profile interactively, use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ go tool pprof -http :3000 profile.out\n")),(0,i.kt)("h2",{id:"profiling-issues"},"Profiling Issues"),(0,i.kt)("h3",{id:"dot-executable-not-found-in-path"},(0,i.kt)("inlineCode",{parentName:"h3"},"dot")," executable not found in path"),(0,i.kt)("p",null,"Try ",(0,i.kt)("inlineCode",{parentName:"p"},"brew install graphviz")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt install graphviz")))}u.isMDXComponent=!0}}]);