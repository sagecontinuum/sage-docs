"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[942],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,p=u["".concat(l,".").concat(h)]||u[h]||g[h]||o;return a?r.createElement(p,i(i({ref:t},c),{},{components:a})):r.createElement(p,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3114:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var r=a(3117),n=a(102),o=(a(7294),a(3905)),i=["components"],s={sidebar_position:2},l="Architecture",d={unversionedId:"about/architecture",id:"about/architecture",title:"Architecture",description:"Figure 1: A high-level overview of the Sage Cyber-infrastructure",source:"@site/docs/about/architecture.md",sourceDirName:"about",slug:"/about/architecture",permalink:"/docs/about/architecture",editUrl:"https://github.com/sagecontinuum/sage-docs/edit/main/docs/about/architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/about/overview"},next:{title:"Resources",permalink:"/docs/category/resources"}},c=[{value:"Nodes",id:"nodes",children:[{value:"Sage Node",id:"sage-node",children:[],level:4},{value:"Array of Things (AoT) Node",id:"array-of-things-aot-node",children:[],level:4},{value:"Wild Sage Node",id:"wild-sage-node",children:[],level:4},{value:"Sage Blade",id:"sage-blade",children:[],level:4},{value:"Waggle Node",id:"waggle-node",children:[],level:4}],level:2},{value:"Software infrastructure",id:"software-infrastructure",children:[{value:"Sage Core Services (SCS)",id:"sage-core-services-scs",children:[],level:4},{value:"Waggle Edge Stack (WES)",id:"waggle-edge-stack-wes",children:[],level:4},{value:"Sage Edge Scheduler (SES)",id:"sage-edge-scheduler-ses",children:[],level:4},{value:'Sage Lambda Triggers (SLT) <small className="muted">(in design)</small>',id:"sage-lambda-triggers-slt-in-design",children:[],level:4},{value:'Cloud Training Software Stack (CTSS) <small className="muted">(in design)</small>',id:"cloud-training-software-stack-ctss-in-design",children:[],level:4}],level:2},{value:"Data",id:"data",children:[{value:"Sage Data Repository (SDR)",id:"sage-data-repository-sdr",children:[],level:4},{value:"Sage Object Store / Open Storage Network",id:"sage-object-store--open-storage-network",children:[],level:4}],level:2},{value:"Edge Code Repository",id:"edge-code-repository",children:[{value:"Edge Code Repository (ECR)",id:"edge-code-repository-ecr",children:[],level:4}],level:2},{value:"Utilities",id:"utilities",children:[{value:"Virtual Waggle (VW)",id:"virtual-waggle-vw",children:[],level:4},{value:'Bench-top Waggle Driver (BWD) <small className="muted">(in design)</small>',id:"bench-top-waggle-driver-bwd-in-design",children:[],level:4}],level:2},{value:"Support Infrastructure",id:"support-infrastructure",children:[{value:"Beehive",id:"beehive",children:[],level:4},{value:"Beekeeper",id:"beekeeper",children:[],level:4}],level:2}],g={toc:c};function u(e){var t=e.components,s=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Figure 1: A high-level overview of the Sage Cyber-infrastructure",src:a(7809).Z,width:"1666",height:"768"})),(0,o.kt)("p",null,"The Sage project will design and build a new kind of national-scale reusable cyber-infrastructure to enable AI at the edge.  The illustration above shows a high-level view of the Sage CI architecture and enumerates the various software services, tools and infrastructure pieces. Below a quick summary of each of the components and their interrelationships is provided."),(0,o.kt)("h2",{id:"nodes"},"Nodes"),(0,o.kt)("h4",{id:"sage-node"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/nodes"},"Sage Node")),(0,o.kt)("p",null,"Any Edge node part of the Sage project.  This includes new AoT nodes, Wild Sage nodes, and Sage Blades."),(0,o.kt)("h4",{id:"array-of-things-aot-node"},(0,o.kt)("a",{parentName:"h4",href:"https://arrayofthings.github.io/"},"Array of Things (AoT) Node")),(0,o.kt)("p",null,"A weatherized Waggle Node designed to be installed on a street pole in the city or mounted on exterior walls.  An AoT node usually includes a sensor pod that includes air quality sensors.  The device is also attractive for an urban setting."),(0,o.kt)("h4",{id:"wild-sage-node"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/nodes"},"Wild Sage Node")),(0,o.kt)("p",null,"This identifies Waggle Nodes that are weatherized for remote, outdoor deployment as part of the Sage project.  These nodes are similar to AoT nodes, but since urban aesthetics are not needed, and different cameras and sensors might be used, the Wild Sage Node may look strange.  Wild Sage Nodes look like proper bits of science experiments mounted outside, while AoT nodes look like they deserve an architectural award."),(0,o.kt)("h4",{id:"sage-blade"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/nodes"},"Sage Blade")),(0,o.kt)("p",null,"This identifies Waggle Nodes that are standard, commercially available blade server or box intended for use in a machine room or climate controlled telecommunications hut.  For the Sage project, the first Sage Blades are Dell XR2 1U servers that have been hardened for increased environmental range. They include a powerful NVIDIA GPU for AI@Edge compute jobs.  As a Waggle Node, they run the complete Waggle software stack, and therefore can run Edge jobs, report data, and be remotely configured."),(0,o.kt)("h4",{id:"waggle-node"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/waggle-sensor/waggle"},"Waggle Node")),(0,o.kt)("p",null,"This slang indicates that an AI@Edge computer is running the Waggle software stack.  It is similar to saying \u201cIt is a Linux Box\u201d.  The Linux box could be running a web server or a database, but is running the core Linux software stack.  \u201cA Waggle Node\u201d runs the Waggle encrypted and reliable messaging layers, configuration system, resilience components, adheres to the Waggle security model, provides the AI@Edge runtime libraries, and provides the resource management components to schedule and run Edge docker containers from the Edge Code Repository."),(0,o.kt)("h2",{id:"software-infrastructure"},"Software infrastructure"),(0,o.kt)("h4",{id:"sage-core-services-scs"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/bic"},"Sage Core Services (SCS)")),(0,o.kt)("p",null,"To deliver the Sage Cyberinfrastructure, a set of essential components and tools provide data APIs, authentication, and management services to the entire framework.  This includes: Storage & Storage API, Authorization Service, User Management and Authentication, Sage Continuous Integration, Public Streaming Service, and Sage Web Portal."),(0,o.kt)("h4",{id:"waggle-edge-stack-wes"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/waggle-sensor/waggle-edge-stack"},"Waggle Edge Stack (WES)")),(0,o.kt)("p",null,"The WES includes the operating system image and Waggle services running on the NC and EP as well as the ML run-time libraries and tools. It also manages cybersecurity, certificate management, and manages system resources, such as power, memory, and cores. It constantly updates its state with the cloud server to fetch and perform any task scheduled from SES."),(0,o.kt)("h4",{id:"sage-edge-scheduler-ses"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/ses"},"Sage Edge Scheduler (SES)")),(0,o.kt)("p",null,"All configuration changes, whether they be software updates or new edge computing algorithms are handled by the SES. Users who have edge code already running and deployed on Waggle nodes can use their authentication token to push configuration changes to nodes via the SES. Users can also submit \u201cjobs\u201d that can be scheduled and run on nodes at a later time. The SES makes all configuration and system update decisions, and queues up changes that can be pushed out to nodes when they contact Beehive."),(0,o.kt)("h4",{id:"sage-lambda-triggers-slt-in-design"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/slt"},"Sage Lambda Triggers (SLT)")," ",(0,o.kt)("small",{className:"muted"},"(in design)")),(0,o.kt)("p",null,"The SLT provides a framework for two kinds of triggers: From-Edge and To-Edge. A value or message from a Waggle edge node, delivered to Beehive, can be used to trigger a lambda function -- for example, if high wind velocity is detected, a function could be triggered to determine how to reconfigure sensors or launch a computation or send an alert. Similarly, an HPC calculation or cloud-based data analysis could trigger an API call to the SES and send a notification to a Waggle edge node -- for example to request scheduling of new edge computations or reposition mobile assets."),(0,o.kt)("h4",{id:"cloud-training-software-stack-ctss-in-design"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/ctss"},"Cloud Training Software Stack (CTSS)")," ",(0,o.kt)("small",{className:"muted"},"(in design)")),(0,o.kt)("p",null,"CTSS will provide interfaces (CTSS Training Environment and CTSS API Client) and documentation with end-to-end examples for users to allow them to build and bundle the components necessary to test on a Virtual Waggle and then on a Sage Node. It can be run on the cloud or as a downloadable software."),(0,o.kt)("h2",{id:"data"},"Data"),(0,o.kt)("h4",{id:"sage-data-repository-sdr"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/waggle-sensor/waggle-beehive-v2"},"Sage Data Repository (SDR)")),(0,o.kt)("p",null,"Accessed via the ",(0,o.kt)("a",{parentName:"p",href:"docs/tutorials/accessing-data"},"Sage Data API"),", Sage data is made open for research wherever possible.  Some training data sets may require data-usage agreements to adhere to privacy guidelines or for operational security.  However all sensor data and AI@Edge inference results are intended to be open and immediately shared in near-real time via the SDR. The SDR aggregates all data collected by Sage Nodes and provides web-based tools for extracting (slicing and dicing) relevant data components or viewing the data on map tools (previously known as BDR)."),(0,o.kt)("h4",{id:"sage-object-store--open-storage-network"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/sage"},"Sage Object Store / Open Storage Network")),(0,o.kt)("p",null,"The Sage Object Store API enables storing of larger objects (files), such as images, audio, and data sets.  When an object is stored via an ECR application, a reference to these files are kept in SDR and can be accessed via the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/accessing-data#accessing-large-files-ie-training-data"},"Object Store API"),"."),(0,o.kt)("h2",{id:"edge-code-repository"},"Edge Code Repository"),(0,o.kt)("h4",{id:"edge-code-repository-ecr"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/sage-ecr"},"Edge Code Repository (ECR)")),(0,o.kt)("p",null,"A library of tested and benchmarked AI@Edge codes that can run on the Waggle software stack.  The ECR provides a verified and versioned repository of AI@Edge docker images that can be pushed by the Beehive to Sage Nodes and executed.  ",(0,o.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org/apps/explore"},"View public apps on portal"),"."),(0,o.kt)("h2",{id:"utilities"},"Utilities"),(0,o.kt)("h4",{id:"virtual-waggle-vw"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/waggle-sensor/virtual-waggle"},"Virtual Waggle (VW)")),(0,o.kt)("p",null,"Virtual Waggle is a downloadable software-only programming environment for building and testing edge computing code for the Waggle framework."),(0,o.kt)("h4",{id:"bench-top-waggle-driver-bwd-in-design"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/bwd"},"Bench-top Waggle Driver (BWD)")," ",(0,o.kt)("small",{className:"muted"},"(in design)")),(0,o.kt)("p",null,"The BWD provides a remotely controllable interface to a physical Waggle node. The BWD will control as many physical attributes of the Waggle node as possible, including the serial console.  Ideally, almost everything that can be done physically, while a node sits on a desk, can be done remotely via the BWD."),(0,o.kt)("h2",{id:"support-infrastructure"},"Support Infrastructure"),(0,o.kt)("h4",{id:"beehive"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/waggle-sensor/waggle-beehive-v2"},"Beehive")),(0,o.kt)("p",null,"Beehive is a cloud endpoint that offers several services for Waggle nodes and derivatives (AoT, Sage etc.)\nincluding authentication, management, configuration, data aggregation and dissemination. Beehive is hosted\nat Argonne National Laboratory."),(0,o.kt)("h4",{id:"beekeeper"},(0,o.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/beekeeper"},"Beekeeper")),(0,o.kt)("p",null,"Beekeeper is the is an administrative cloud endpoint that all Sage nodes connect to allow Sage administrators to perform actions on the nodes such as gather health metrics, and perform software updates."))}u.isMDXComponent=!0},7809:function(e,t,a){t.Z=a.p+"assets/images/SAGE_CI-72e9bd7885c39bd99c7d43cb0083c372.jpg"}}]);