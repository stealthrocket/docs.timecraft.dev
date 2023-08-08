"use strict";(self.webpackChunkdocs_timecraft_dev=self.webpackChunkdocs_timecraft_dev||[]).push([[809],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(i),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return i?n.createElement(h,o(o({ref:t},u),{},{components:i})):n.createElement(h,o({ref:t},u))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},7127:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=i(7462),a=(i(7294),i(3905));const r={sidebar_position:1},o="Architecture",l={unversionedId:"getting-started/architecture",id:"getting-started/architecture",title:"Architecture",description:"Timecraft is an application runtime leverage WebAssembly as main sandboxing system. On top of it, Timecraft implements a networking and filesystem sandbox allowing",source:"@site/docs/getting-started/architecture.md",sourceDirName:"getting-started",slug:"/getting-started/architecture",permalink:"/getting-started/architecture",draft:!1,editUrl:"https://github.com/stealthrocket/docs.timecraft.dev/tree/main/docs/getting-started/architecture.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/category/getting-started"},next:{title:"Installing Timecraft",permalink:"/getting-started/installation"}},s={},c=[{value:"Timecraft internals",id:"timecraft-internals",level:2},{value:"WebAssembly runtime",id:"webassembly-runtime",level:3},{value:"Decentralized scheduler",id:"decentralized-scheduler",level:3},{value:"Log of execution",id:"log-of-execution",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"Timecraft is an application runtime leverage WebAssembly as main sandboxing system. On top of it, Timecraft implements a networking and filesystem sandbox allowing\noperators to get full control of their applications' interactions with the rest of the world."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We are activelly working on bringing a native sandboxing system to Timecraft. While we believe that WebAssembly is the future of cloud computing and distributed systems, we might want to leverage your existing development workflow while still benefit from the Timecraft features. The native sandbox will be based on cAdvisor.")),(0,a.kt)("h2",{id:"timecraft-internals"},"Timecraft internals"),(0,a.kt)("p",null,"Internally, Timecraft is composed of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A WebAssembly runtime "),(0,a.kt)("li",{parentName:"ul"},"A decentralized scheduler"),(0,a.kt)("li",{parentName:"ul"},"A log of execution")),(0,a.kt)("h3",{id:"webassembly-runtime"},"WebAssembly runtime"),(0,a.kt)("p",null,"Timecraft leverags Wazero for its WebAssembly runtime and enhances it with a couple of goodies."),(0,a.kt)("p",null,"The WASI layer implements a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stealthrocket/wasi-go/blob/main/imports/wasi_snapshot_preview1/wasmedge.go"},"complete, non-blocking, network stack")," based on the WasmEdge API, allowing developers to run a full application in WASM. While we are currently using the WasmEdge API, we are also looking at implementing ",(0,a.kt)("a",{parentName:"p",href:"http://wasix.org/"},"WASIX")," to provide wider compatibility with the WebAssembly ecosystem."),(0,a.kt)("p",null,"The Timecraft WASI layer is currently fully compatible with Go 1.21 (to be released later this month) and Python 3.11. Note that Python Asyncio is also supported."),(0,a.kt)("h3",{id:"decentralized-scheduler"},"Decentralized scheduler"),(0,a.kt)("p",null,"Timecraft ships with a built-in decentralized orchestrator enabling durable execution at scale. The orchestrator is still in active development but fully functional.\nDevelopers can programatically create graph of execution of actors, Timecraft will ensure those actors go to completion not matter the infrastructure event (instance restart, network partitions, etc)."),(0,a.kt)("p",null,"The interaction with the scheduler goes through the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stealthrocket/timecraft/tree/main/sdk"},"Timecraft SDK")," currently available for Golang and Python. More languages will be supported as we move forward."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"More details about the durable execution can be found in the dedicated guides: ",(0,a.kt)("a",{parentName:"p",href:"/guides/durable-execution"},"Durable execution"),".")),(0,a.kt)("h3",{id:"log-of-execution"},"Log of execution"),(0,a.kt)("p",null,"Each Timecraft instance automatically record the entire execution of all application and actors it schedules. Coupled with the WebAssembly determinism, ",(0,a.kt)("a",{parentName:"p",href:"/architecture/log"},"The Log")," enables the Time Machine capabilities of the system:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deterministic simulator"),(0,a.kt)("li",{parentName:"ul"},"Profiling of past executions"),(0,a.kt)("li",{parentName:"ul"},"Interactive debugging (coming soon)"),(0,a.kt)("li",{parentName:"ul"},"Telemetry injection / Execution rehydratation (coming soon)")),(0,a.kt)("h1",{id:"time-machine"},"Time Machine"),(0,a.kt)("p",null,"The Time Machine is a core primitive of Timecraft that brings a new step function in scaling the development and operation of distributed systems. Because the recording happens at the bottom-most level of interaction between the host runtime and the guest applications, it scales with the addition of new capabilities. For example, recording all network connections at the socket layer means that we can track the network messages exchanged in any protocol. Applications using protocols that cannot yet generate high-level observability can still be executed and recorded, and capabilities can be added later on to extract value from the records."),(0,a.kt)("p",null,"Decoupling the recording from the high-level machinery is the architectural model that brings scalability. Instead of systems having to implement their instrumentation, the separation of concerns offered by the low-level recording capability provides a much more powerful model where extracting context from the record does not require modification of the application code, and can happen after the fact on records of past executions."),(0,a.kt)("p",null,"Because the capture happens on the critical path of the guest application, it must be fast. The write path of the time machine must be optimized to have the lowest possible cost. The data captured is first buffered in memory, then sent to local storage and can be synced asynchronously to an object store like S3 for long-term durability at an affordable cost."),(0,a.kt)("p",null,"Over time, we anticipate that the development of most operational capabilities could be built on top of Time Machines: time travel debugging through layers of services, high-level telemetry, or deterministic simulations could all be derived from the records captured from the execution of guest applications on the runtime. The possibilities span far beyond software operations and could even reach the realm of data analytics: data lakes of application records where asynchronous batch processing pipelines create views tailored to provide insight into all aspects of the products built on top of those distributed systems."),(0,a.kt)("p",null,"One of the main challenges of those Time Machines is facilitating access to the scale of records that it produces. Even with effective compression to minimize the storage footprint, they can geneate very large volumes of information. Developing solutions to efficiently access the gold mine of data captured in the logs is one of the responsibilities that Timecraft can fulfill on behalf of the applications it runs."))}m.isMDXComponent=!0}}]);