"use strict";(self.webpackChunkdocs_timecraft_dev=self.webpackChunkdocs_timecraft_dev||[]).push([[168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="Compiling your Python application to WebAssembly",p={unversionedId:"getting-started/compiling-python",id:"getting-started/compiling-python",title:"Compiling your Python application to WebAssembly",description:"Python applications aren't compiled to WebAssembly. Rather, a Python interpreter (CPython)",source:"@site/docs/getting-started/compiling-python.md",sourceDirName:"getting-started",slug:"/getting-started/compiling-python",permalink:"/getting-started/compiling-python",draft:!1,editUrl:"https://github.com/stealthrocket/docs.timecraft.dev/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/compiling-python.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Compiling your Go application to WebAssembly",permalink:"/getting-started/compiling-go"},next:{title:"Execution tracing",permalink:"/using-timecraft/execution-tracing"}},l={},c=[{value:"Preparing Python",id:"preparing-python",level:2},{value:"Running your application with Timecraft",id:"running-your-application-with-timecraft",level:2},{value:"Preparing dependencies",id:"preparing-dependencies",level:3},{value:"Running Timecraft",id:"running-timecraft",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compiling-your-python-application-to-webassembly"},"Compiling your Python application to WebAssembly"),(0,a.kt)("p",null,"Python applications aren't compiled to WebAssembly. Rather, a Python interpreter (CPython)\nis compiled to WebAssembly and interprets your Python application as it would normally."),(0,a.kt)("p",null,"Minor patches have been made to both the CPython interpreter and standard library to ensure\nthat applications are able to create POSIX style sockets. This enables Python applications to\ncreate servers and connect to databases. We intend to upstream our patches at some stage."),(0,a.kt)("h2",{id:"preparing-python"},"Preparing Python"),(0,a.kt)("p",null,"We provide a pre-compiled Python interpreter and patched standard library. You can download them by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"make -C python download\n")),(0,a.kt)("p",null,"at the root of the repository."),(0,a.kt)("p",null,"To build Python from scratch, see the instructions in the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stealthrocket/timecraft/tree/main/python"},(0,a.kt)("inlineCode",{parentName:"a"},"./python"))," dir."),(0,a.kt)("h2",{id:"running-your-application-with-timecraft"},"Running your application with Timecraft"),(0,a.kt)("h3",{id:"preparing-dependencies"},"Preparing dependencies"),(0,a.kt)("p",null,"It's recommended that you install your Python dependencies in a virtualenv:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ python3 -m venv env\n$ source ./env/bin/activate\n(env) $ pip install -r /path/to/requirements.txt\n")),(0,a.kt)("h3",{id:"running-timecraft"},"Running Timecraft"),(0,a.kt)("p",null,"The Python interpreter needs to know where dependencies are installed\nand where the standard library ZIP is located."),(0,a.kt)("p",null,"Assuming both the interpreter (",(0,a.kt)("inlineCode",{parentName:"p"},"python.wasm"),") and standard library (",(0,a.kt)("inlineCode",{parentName:"p"},"python311.zip"),")\nare located in the current directory, you can pass this information to the\ninterpreter like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ export PYTHONHOME=env\n$ export PYTHONPATH=python311.zip:$PYTHONHOME\n")),(0,a.kt)("p",null,"You can now run your application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ timecraft run python.wasm main.py\n")))}d.isMDXComponent=!0}}]);