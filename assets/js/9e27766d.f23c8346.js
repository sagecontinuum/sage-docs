"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[434],{7937:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var o=a(7462),r=a(3366),n=(a(7294),a(3905)),i=["components"],s={sidebar_label:"Architecture",sidebar_position:2},d="Architecture",l={unversionedId:"about/arch-overview",id:"about/arch-overview",isDocsHomePage:!1,title:"Architecture",description:"Figure 1: A high-level overview of the Sage Cyber-infrastructure",source:"@site/docs/about/arch-overview.md",sourceDirName:"about",slug:"/about/arch-overview",permalink:"/sage-docs/docs/about/arch-overview",editUrl:"https://github.com/sagecontinuum/sage-docs/edit/master/docs/about/arch-overview.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Architecture",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/sage-docs/docs/about/overview"},next:{title:"Integrate My Sensor",permalink:"/sage-docs/docs/tutorials/integrate-my-sensor"}},c=[{value:"Nodes",id:"nodes",children:[]},{value:"Software Infrastructure:",id:"software-infrastructure",children:[]},{value:"Data and Code Repositories",id:"data-and-code-repositories",children:[]},{value:"Utilities",id:"utilities",children:[]},{value:"Support Infrastructure",id:"support-infrastructure",children:[]}],u={toc:c};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Figure 1: A high-level overview of the Sage Cyber-infrastructure",src:a(6706).Z})),(0,n.kt)("p",null,"The Sage project will design and build a new kind of national-scale reusable cyber-infrastructure to enable AI at the edge.\nThe illustration above shows a high-level view of the Sage CI architecture and enumerates the various software services,\ntools and infrastructure pieces. Below a quick summary of each of the components and their interrelationships is provided."),(0,n.kt)("h2",{id:"nodes"},"Nodes"),(0,n.kt)("h4",{id:"sage-node"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/nodes"},"Sage Node")),(0,n.kt)("p",null,"Any Edge node part of the Sage project.  This includes new AoT nodes, Wild Sage nodes, and Sage Blades."),(0,n.kt)("h4",{id:"array-of-things-aot-node"},(0,n.kt)("a",{parentName:"h4",href:"https://arrayofthings.github.io/"},"Array of Things (AoT) Node")),(0,n.kt)("p",null,"A weatherized Waggle Node designed to be installed on a street pole in the city or mounted on exterior walls.  An AoT node usually includes a sensor pod that includes air quality sensors.  The device is also attractive for an urban setting."),(0,n.kt)("h4",{id:"wild-sage-node"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/nodes"},"Wild Sage Node")),(0,n.kt)("p",null,"This identifies Waggle Nodes that are weatherized for remote, outdoor deployment as part of the Sage project.  These nodes are similar to AoT nodes, but since urban aesthetics are not needed, and different cameras and sensors might be used, the Wild Sage Node may look strange.  Wild Sage Nodes look like proper bits of science experiments mounted outside, while AoT nodes look like they deserve an architectural award."),(0,n.kt)("h4",{id:"sage-blade"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/nodes"},"Sage Blade")),(0,n.kt)("p",null,"This identifies Waggle Nodes that are standard, commercially available blade server or box intended for use in a machine room or climate controlled telecommunications hut.  For the Sage project, the first Sage Blades are Dell XR2 1U servers that have been hardened for increased environmental range. They include a powerful NVIDIA GPU for AI@Edge compute jobs.  As a Waggle Node, they run the complete Waggle software stack, and therefore can run Edge jobs, report data, and be remotely configured."),(0,n.kt)("h4",{id:"waggle-node"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/waggle-sensor/waggle"},"Waggle Node")),(0,n.kt)("p",null,"This slang indicates that an AI@Edge computer is running the Waggle software stack.  It is similar to saying \u201cIt is a Linux Box\u201d.  The Linux box could be running a web server or a database, but is running the core Linux software stack.  \u201cA Waggle Node\u201d runs the Waggle encrypted and reliable messaging layers, configuration system, resilience components, adheres to the Waggle security model, provides the AI@Edge runtime libraries, and provides the resource management components to schedule and run Edge docker containers from the Edge Code Repository."),(0,n.kt)("h2",{id:"software-infrastructure"},"Software Infrastructure:"),(0,n.kt)("h4",{id:"sage-core-services-scs"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/bic"},"Sage Core Services (SCS)")),(0,n.kt)("p",null,"To deliver the Sage Cyberinfrastructure, a set of essential components and tools provide data APIs, authentication, and management services to the entire framework.  This includes: Storage & Storage API, Authorization Service, User Management and Authentication, Sage Continuous Integration, Public Streaming Service, and Sage Web Portal."),(0,n.kt)("h4",{id:"waggle-edge-stack-wes"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/wes"},"Waggle Edge Stack (WES)")),(0,n.kt)("p",null,"The WES includes the operating system image and Waggle services running on the NC and EP as well as the ML run-time libraries and tools. It also manages cybersecurity, certificate management, and manages system resources, such as power, memory, and cores. It constantly updates its state with the cloud server to fetch and perform any task scheduled from SES."),(0,n.kt)("h4",{id:"sage-edge-scheduler-ses"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/ses"},"Sage Edge Scheduler (SES)")),(0,n.kt)("p",null,"All configuration changes, whether they be software updates or new edge computing algorithms are handled by the SES. Users who have edge code already running and deployed on Waggle nodes can use their authentication token to push configuration changes to nodes via the SES. Users can also submit \u201cjobs\u201d that can be scheduled and run on nodes at a later time. The SES makes all configuration and system update decisions, and queues up changes that can be pushed out to nodes when they contact Beehive."),(0,n.kt)("h4",{id:"sage-lambda-triggers-slt"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/slt"},"Sage Lambda Triggers (SLT)")),(0,n.kt)("p",null,"The SLT provides a framework for two kinds of triggers: From-Edge and To-Edge. A value or message from a Waggle edge node, delivered to Beehive, can be used to trigger a lambda function -- for example, if high wind velocity is detected, a function could be triggered to determine how to reconfigure sensors or launch a computation or send an alert. Similarly, an HPC calculation or cloud-based data analysis could trigger an API call to the SES and send a notification to a Waggle edge node -- for example to request scheduling of new edge computations or reposition mobile assets."),(0,n.kt)("h4",{id:"waggle-edge-stack-wes-1"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/wes"},"Waggle Edge Stack (WES)")),(0,n.kt)("p",null,"The WES includes the operating system image and Waggle services running on the Node Controller and Edge Processors as well as the ML run-time libraries and tools. It also manages cybersecurity, certificate management, and manages system resources, such as power, memory, and cores. It constantly updates its state with the cloud server to fetch and perform any task scheduled from SES."),(0,n.kt)("h4",{id:"cloud-training-software-stack-ctss"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/ctss"},"Cloud Training Software Stack (CTSS)")),(0,n.kt)("p",null,"CTSS will provide interfaces (CTSS Training Environment and CTSS API Client) and documentation with end-to-end examples for users to allow them to build and bundle the components necessary to test on a Virtual Waggle and then on a Sage Node. It can be run on the cloud or as a downloadable software."),(0,n.kt)("h2",{id:"data-and-code-repositories"},"Data and Code Repositories"),(0,n.kt)("h4",{id:"sage-data-repository-sdr"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/sdr"},"Sage Data Repository (SDR)")),(0,n.kt)("p",null,"Sage data is made open for research wherever possible.  Some training data sets may require data-usage agreements to adhere to privacy guidelines or for operational security.  However all sensor data and AI@Edge inference results are intended to be open and immediately shared in near-real time via the SDR. The SDR aggregates all data collected by Sage Nodes and provides web-based tools for extracting (slicing and dicing) relevant data components or viewing the data on map tools (previously known as BDR)."),(0,n.kt)("h4",{id:"edge-code-repository-ecr"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/ecr"},"Edge Code Repository (ECR)")),(0,n.kt)("p",null,"A library of tested and benchmarked AI@Edge codes that can run on the Waggle software stack.  The ECR provides a verified and versioned repository of AI@Edge docker images that can be pushed by the Beehive to Sage Nodes and executed."),(0,n.kt)("h2",{id:"utilities"},"Utilities"),(0,n.kt)("h4",{id:"virtual-waggle-vw"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/vw"},"Virtual Waggle (VW)")),(0,n.kt)("p",null,"Virtual Waggle is a downloadable software-only programming environment for building and testing edge computing code for the Waggle framework."),(0,n.kt)("h4",{id:"bench-top-waggle-driver-bwd"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/sagecontinuum/bwd"},"Bench-top Waggle Driver (BWD)")),(0,n.kt)("p",null,"The BWD provides a remotely controllable interface to a physical Waggle node. The BWD will control as many physical attributes of the Waggle node as possible, including the serial console.  Ideally, almost everything that can be done physically, while a node sits on a desk, can be done remotely via the BWD."),(0,n.kt)("h2",{id:"support-infrastructure"},"Support Infrastructure"),(0,n.kt)("h4",{id:"chameleon"},(0,n.kt)("a",{parentName:"h4",href:"https://www.chameleoncloud.org/"},"Chameleon")),(0,n.kt)("p",null,"A large-scale, deeply reconfigurable experimental platform built to support Computer Sciences systems research. Community projects range from systems research developing new operating systems, virtualization methods, performance variability studies, and power management research to projects in software defined networking, artificial intelligence, and resource management."),(0,n.kt)("h4",{id:"beehive"},(0,n.kt)("a",{parentName:"h4",href:"https://github.com/waggle-sensor/beehive-server"},"Beehive")),(0,n.kt)("p",null,"Beehive is a cloud endpoint that offers several services for Waggle nodes and derivatives (AoT, Sage etc.)\nincluding authentication, management, configuration, data aggregation and dissemination. Beehive is hosted\nat Argonne National Laboratory."))}h.isMDXComponent=!0},6706:function(e,t,a){t.Z=a.p+"assets/images/SAGE_CI-72e9bd7885c39bd99c7d43cb0083c372.jpg"}}]);