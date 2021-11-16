"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[436],{6640:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var n=t(3117),s=t(102),i=(t(7294),t(3905)),o=["components"],r={sidebar_position:3},l="Access and Use Data",d={unversionedId:"tutorials/accessing-data",id:"tutorials/accessing-data",isDocsHomePage:!1,title:"Access and Use Data",description:"Data Movement",source:"@site/docs/tutorials/accessing-data.md",sourceDirName:"tutorials",slug:"/tutorials/accessing-data",permalink:"/docs/tutorials/accessing-data",editUrl:"https://github.com/sagecontinuum/sage-docs/edit/main/docs/tutorials/accessing-data.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Compute at the Edge",permalink:"/docs/tutorials/compute-at-edge"},next:{title:"Compute in the Cloud",permalink:"/docs/tutorials/cloud-compute"}},m=[{value:"Data Model",id:"data-model",children:[],level:2},{value:"Accessing Large Files (i.e. Training Data)",id:"accessing-large-files-ie-training-data",children:[],level:2}],p={toc:m};function u(e){var a=e.components,r=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"access-and-use-data"},"Access and Use Data"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Data Movement",src:t(4074).Z})),(0,i.kt)("p",null,"Raw sensor data is collected by edge code. This edge code can either talk to sensor hardware directly or may obtain data from an abstraction layer (not show in image above). Edge code may forward unprocessed sensor data, do light processing to convert raw sensor values into final data products, or may use CPU/GPU-intensive workloads (e.g. AI application) to extract information from data-intensive sensors such as cameras, microphone or LIDAR.  "),(0,i.kt)("p",null,"Sensor data from nodes that comes in numerical or textual form (e.g. temperature) is stored natively in our time series database. Sensor data in form of large files (images, audio, movies..) is stored in the Sage object store, but is referenced in the time series data (thus the dashed arrow in the figure above). Thus, the primary way to find all data (sensor and large files) is via the Sage sensor query API described below."),(0,i.kt)("p",null,"Currently the SAGE sensor database contains data such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"relative humidity, barometric pressure, ambient temperature and gas (VOC) ",(0,i.kt)("a",{parentName:"li",href:"https://www.bosch-sensortec.com/products/environmental-sensors/gas-sensors/bme680/"},"BME680")),(0,i.kt)("li",{parentName:"ul"},"rainfall measurements ",(0,i.kt)("a",{parentName:"li",href:"https://sage-commons.sdsc.edu/dataset/rg-15"},"(Hydreon RG-15)")," "),(0,i.kt)("li",{parentName:"ul"},"AI-based cloud coverage estimation from camera images"),(0,i.kt)("li",{parentName:"ul"},"AI-based object counts from camera images"),(0,i.kt)("li",{parentName:"ul"},"(system data of the nodes, free disk space etc.)")),(0,i.kt)("p",null,'Data can be accessed via "data bundles"  or by API calls:'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Data bundles")," are static collections of sensor data which includes all metadata needed to understand how the data was generated. Data bundles are targeted at scientists that want to be able to cite data they used in their publications."),(0,i.kt)("p",null,"Data bundles will eventually be provided through the Sage Commons web portal. In the mean time, data from Sage Beta is begin compiled nightly in ",(0,i.kt)("a",{parentName:"p",href:"https://web.lcrc.anl.gov/public/waggle/sagedata/SAGE-Data.tar"},"this archive"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Sage sensor query API"),' allows for flexible access to historical and "real time" data in Sage.  This example shows how to retrieve data the latest data from a specific sensor (you can adjust the ',(0,i.kt)("inlineCode",{parentName:"p"},"start")," field if you do not get any recent data):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'curl -H \'Content-Type: application/json\' https://data.sagecontinuum.org/api/v1/query -d \'\n{\n    "start": "-10s",\n    "filter": {\n        "sensor": "bme680"\n    }\n}\n\'\n')),(0,i.kt)("p",null,"Example results:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"timestamp":"2021-08-09T19:26:03.880781217Z","name":"iio.in_humidityrelative_input","value":70.905,"meta":{"node":"000048b02d15bdcd","plugin":"plugin-metsense:0.1.1","sensor":"bme680"}}\n{"timestamp":"2021-08-09T19:26:03.878659392Z","name":"iio.in_pressure_input","value":975.78,"meta":{"node":"000048b02d15bdcd","plugin":"plugin-metsense:0.1.1","sensor":"bme680"}}\n{"timestamp":"2021-08-09T19:26:03.872652127Z","name":"iio.in_resistance_input","value":93952,"meta":{"node":"000048b02d15bdcd","plugin":"plugin-metsense:0.1.1","sensor":"bme680"}}\n{"timestamp":"2021-08-09T19:26:03.874998057Z","name":"iio.in_temp_input","value":27330,"meta":{"node":"000048b02d15bdcd","plugin":"plugin-metsense:0.1.1","sensor":"bme680"}}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"More details on how to use the query API can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/waggle-beehive-v2/blob/main/docs/querying-measurements.md#query-api"},"here")))),(0,i.kt)("h2",{id:"data-model"},"Data Model"),(0,i.kt)("p",null,"A detailed description of the data model can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/waggle-beehive-v2/blob/main/docs/querying-measurements.md#data-model"},"here"),"."),(0,i.kt)("h2",{id:"accessing-large-files-ie-training-data"},"Accessing Large Files (i.e. Training Data)"),(0,i.kt)("p",null,"To find files collected by Sage nodes use the filter ",(0,i.kt)("inlineCode",{parentName:"p"},'"name":"upload"')," and specify additional filters to limit search results, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'curl -s -H \'Content-Type: application/json\' https://data.sagecontinuum.org/api/v1/query -d \'{\n  "start": "2021-09-10T12:51:36.246454082Z",\n  "end":"2021-09-10T13:51:36.246454082Z",\n  "filter": {\n    "name":"upload",\n    "plugin":"imagesampler-left:0.2.3"\n    }\n  }\'\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"timestamp":"2021-09-10T13:19:27.237651354Z","name":"upload","value":"https://storage.sagecontinuum.org/api/v1/data/sage/sage-imagesampler-left-0.2.3/000048b02d05a0a4/1631279967237651354-2021-09-10T13:19:26+0000.jpg","meta":{"job":"sage","node":"000048b02d05a0a4","plugin":"imagesampler-left:0.2.3","task":"imagesampler-left:0.2.3"}}\n{"timestamp":"2021-09-10T13:50:32.29028603Z","name":"upload","value":"https://storage.sagecontinuum.org/api/v1/data/sage/sage-imagesampler-left-0.2.3/000048b02d15bc3d/1631281832290286030-2021-09-10T13:50:32+0000.jpg","meta":{"job":"sage","node":"000048b02d15bc3d","plugin":"imagesampler-left:0.2.3","task":"imagesampler-left:0.2.3"}}\n{"timestamp":"2021-09-10T12:52:59.782262376Z","name":"upload","value":"https://storage.sagecontinuum.org/api/v1/data/sage/sage-imagesampler-left-0.2.3/000048b02d15bdc2/1631278379782262376-2021-09-10T12:52:59+0000.jpg","meta":{"job":"sage","node":"000048b02d15bdc2","plugin":"imagesampler-left:0.2.3","task":"imagesampler-left:0.2.3"}}\n{"timestamp":"2021-09-10T13:49:49.084350086Z","name":"upload","value":"https://storage.sagecontinuum.org/api/v1/data/sage/sage-imagesampler-left-0.2.3/000048b02d15bdd2/1631281789084350086-2021-09-10T13:49:48+0000.jpg","meta":{"job":"sage","node":"000048b02d15bdd2","plugin":"imagesampler-left:0.2.3","task":"imagesampler-left:0.2.3"}}\n')),(0,i.kt)("p",null,"For a quick way to only extract the urls from the json objects above, a tool like ",(0,i.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," can be used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'curl -s -H \'Content-Type: application/json\' https://data.sagecontinuum.org/api/v1/query -d \'{\n  "start": "2021-09-10T12:51:36.246454082Z",\n  "end":"2021-09-10T13:51:36.246454082Z",\n  "filter": {\n    "name":"upload",\n    "plugin":"imagesampler-left:0.2.3"\n    }\n  }\' | jq -r .value > urls.txt\n')),(0,i.kt)("p",null,"The resulting file ",(0,i.kt)("inlineCode",{parentName:"p"},"urls.txt")," will look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"https://storage.sagecontinuum.org/api/v1/data/sage/sage-imagesampler-left-0.2.3/000048b02d05a0a4/1631279967237651354-2021-09-10T13:19:26+0000.jpg\nhttps://storage.sagecontinuum.org/api/v1/data/sage/sage-imagesampler-left-0.2.3/000048b02d15bc3d/1631281832290286030-2021-09-10T13:50:32+0000.jpg\nhttps://storage.sagecontinuum.org/api/v1/data/sage/sage-imagesampler-left-0.2.3/000048b02d15bdc2/1631278379782262376-2021-09-10T12:52:59+0000.jpg\nhttps://storage.sagecontinuum.org/api/v1/data/sage/sage-imagesampler-left-0.2.3/000048b02d15bdd2/1631281789084350086-2021-09-10T13:49:48+0000.jpg\n")),(0,i.kt)("p",null,"To download the files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"wget -i urls.txt\n")),(0,i.kt)("p",null,"If many files are downloaded, it is better to preserve the directory tree structure to prevent filename collision:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"wget -r -i urls.txt\n")))}u.isMDXComponent=!0},4074:function(e,a,t){a.Z=t.p+"assets/images/data_movement-6a77fe43e06dc0c6870b80de8eb513e6.svg"}}]);