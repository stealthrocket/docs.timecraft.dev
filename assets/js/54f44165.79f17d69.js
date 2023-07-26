"use strict";(self.webpackChunkdocs_timecraft_dev=self.webpackChunkdocs_timecraft_dev||[]).push([[152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="Installing Timecraft",o={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installing Timecraft",description:"Supported Systems",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/getting-started/installation",draft:!1,editUrl:"https://github.com/stealthrocket/docs.timecraft.dev/tree/main/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/getting-started/applications/python"},next:{title:"Preparing your application",permalink:"/category/preparing-your-application"}},s={},c=[{value:"Supported Systems",id:"supported-systems",level:2},{value:"Installing Go",id:"installing-go",level:2},{value:"Installing Timecraft",id:"installing-timecraft-1",level:2},{value:"Installation Issues",id:"installation-issues",level:2},{value:"Cannot find timecraft command",id:"cannot-find-timecraft-command",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-timecraft"},"Installing Timecraft"),(0,r.kt)("h2",{id:"supported-systems"},"Supported Systems"),(0,r.kt)("p",null,"Timecraft runs on macOS and Linux."),(0,r.kt)("h2",{id:"installing-go"},"Installing Go"),(0,r.kt)("p",null,"Timecraft requires ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/"},"Go"),"."),(0,r.kt)("p",null,"macOS users using ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew")," can install Go using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ brew install go\n")),(0,r.kt)("p",null,"Ubuntu users can install Go with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ sudo apt install golang\n")),(0,r.kt)("p",null,"For other Linux systems, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/dl/"},"Go Releases")," page for installation instructions."),(0,r.kt)("h2",{id:"installing-timecraft-1"},"Installing Timecraft"),(0,r.kt)("p",null,"To install Timecraft, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ go install github.com/stealthrocket/timecraft@latest\n")),(0,r.kt)("p",null,"Timecraft should now be available. To check that installation was successful,\nrun:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ timecraft help\n")),(0,r.kt)("h2",{id:"installation-issues"},"Installation Issues"),(0,r.kt)("h3",{id:"cannot-find-timecraft-command"},"Cannot find timecraft command"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"timecraft")," command cannot be found, make sure ",(0,r.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin")," is in\nyour search path:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'export PATH="$GOPATH/bin:$PATH"\n')),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"$GOPATH")," has not been set, try:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ go env | grep GOPATH\n")))}m.isMDXComponent=!0}}]);