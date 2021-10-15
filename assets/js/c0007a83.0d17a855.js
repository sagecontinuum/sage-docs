"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[915],{8038:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return r},toc:function(){return d},default:function(){return g}});var a=i(7462),o=i(3366),n=(i(7294),i(3905)),s=["components"],l={sidebar_position:2},p="Compute at the Edge",r={unversionedId:"tutorials/compute-at-edge",id:"tutorials/compute-at-edge",isDocsHomePage:!1,title:"Compute at the Edge",description:"Introduction to edge applications",source:"@site/docs/tutorials/compute-at-edge.md",sourceDirName:"tutorials",slug:"/tutorials/compute-at-edge",permalink:"/sage-docs/docs/tutorials/compute-at-edge",editUrl:"https://github.com/sagecontinuum/sage-docs/edit/main/docs/tutorials/compute-at-edge.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Access Sage Sensors",permalink:"/sage-docs/docs/tutorials/access-sage-sensors"},next:{title:"Access and Use Data",permalink:"/sage-docs/docs/tutorials/accessing-data"}},d=[{value:"Introduction to edge applications",id:"introduction-to-edge-applications",children:[]},{value:"Exploring existing edge applications",id:"exploring-existing-edge-applications",children:[]},{value:"Developing new edge applications",id:"developing-new-edge-applications",children:[{value:"Write plugin code",id:"write-plugin-code",children:[]},{value:"Submit plugin to the Edge Code Repository",id:"submit-plugin-to-the-edge-code-repository",children:[]},{value:"Schedule plugin for deployment",id:"schedule-plugin-for-deployment",children:[]},{value:"Access plugin data",id:"access-plugin-data",children:[]}]}],u={toc:d};function g(e){var t=e.components,l=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"compute-at-the-edge"},"Compute at the Edge"),(0,n.kt)("h2",{id:"introduction-to-edge-applications"},"Introduction to edge applications"),(0,n.kt)("p",null,"Sage nodes run edge applications (i.e. ",(0,n.kt)("strong",{parentName:"p"},"plugins"),") to process data. A plugin is a self-contained program which typically reads sensors, audio or video data, does some processing and then publishes information derived from that data."),(0,n.kt)("p",null,"The most basic example of a plugin is one which reads and publishes a value from a sensor. A more complex plugin could publish the number of birds in a scene using a deep learning model."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Basic Plugin",src:i(3658).Z})),(0,n.kt)("p",null,"Plugins fit into the wider Sage infrastructure by being added to the ",(0,n.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"Edge Code Repository"),", deployed to nodes and publishing data to our Sage Data Repository."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Plugins in Sage",src:i(9957).Z})),(0,n.kt)("h2",{id:"exploring-existing-edge-applications"},"Exploring existing edge applications"),(0,n.kt)("p",null,"One of the major goals of Sage is to provide the science community with a diverse set of edge applications to enable new kinds of research. These edge applications are maintained in the ",(0,n.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"Edge Code Repository")," where you can find more background information and links to their source repos."),(0,n.kt)("p",null,"We encourage users to explore the ",(0,n.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"ECR")," to get familiar with existing applications as well a references if you develop your own edge applications."),(0,n.kt)("h2",{id:"developing-new-edge-applications"},"Developing new edge applications"),(0,n.kt)("p",null,"Writing a new edge applications (i.e. ",(0,n.kt)("strong",{parentName:"p"},"plugin"),") consists of the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Write plugin code")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Submit plugin to the ",(0,n.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"Edge Code Repository"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Schedule plugin for deployment")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Access plugin data"))),(0,n.kt)("p",null,"The following sections cover each of these steps in detail."),(0,n.kt)("h3",{id:"write-plugin-code"},"Write plugin code"),(0,n.kt)("p",null,"The entry point to writing plugins is our Python library ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/pywaggle"},"pywaggle"),". This library provides all the necessary abstractions for accessing and publishing data. For this step, please refer to pywaggle's own in-depth guide on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/pywaggle/blob/main/docs/writing-a-plugin.md"},"writing plugins"),"."),(0,n.kt)("h3",{id:"submit-plugin-to-the-edge-code-repository"},"Submit plugin to the Edge Code Repository"),(0,n.kt)("p",null,"We require plugins to be submitted to the ",(0,n.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"Edge Code Repository")," to be built and tested to validate that they are ready to be scheduled on nodes."),(0,n.kt)("p",null,"The following steps are required to submit a plugin to ECR."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a repo for plugin and add required packaging files. (See ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/waggle-sensor/pywaggle/blob/main/docs/writing-a-plugin.md#adding-hello-world-plugin-packaging-info"},"pywaggle guide")," for details.)"),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("a",{parentName:"li",href:"https://portal.sagecontinuum.org"},"Edge Code Repository"),"."),(0,n.kt)("li",{parentName:"ol"},'Go to "Sign In" and follow the instructions.'),(0,n.kt)("li",{parentName:"ol"},'Go to "My Apps".'),(0,n.kt)("li",{parentName:"ol"},'Go to "Create app" and follow the instructions.')),(0,n.kt)("p",null,'If everything is successful, your plugin will appeared and be marked as "Built".'),(0,n.kt)("h3",{id:"schedule-plugin-for-deployment"},"Schedule plugin for deployment"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"TODO This is work in progress! We will update this section once the scheduler is public.")),(0,n.kt)("h3",{id:"access-plugin-data"},"Access plugin data"),(0,n.kt)("p",null,"Once a plugin has been deployed to node(s) and is publishing data, you can ",(0,n.kt)("a",{parentName:"p",href:"/sage-docs/docs/tutorials/accessing-data"},"access the published data")," in the Sage Data Repository."))}g.isMDXComponent=!0},3658:function(e,t,i){t.Z=i.p+"assets/images/plugin-basic-a1632d393968488af247b3045de6dc0c.svg"},9957:function(e,t,i){t.Z=i.p+"assets/images/plugin-sage-f6541c3f2d3c2ea6a3661583bface8c4.svg"}}]);