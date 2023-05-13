/*! For license information please see UseExplorerUrlDemo-stories.c065ae9c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkawesomealgo_hooks=self.webpackChunkawesomealgo_hooks||[]).push([[547],{"./stories/UseExplorerUrlDemo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomAddress:()=>CustomAddress,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UseExplorerUrlDemo_stories});var react=__webpack_require__("./node_modules/react/index.js"),enums=__webpack_require__("./src/misc/enums.ts");const buildExplorerUrl=(chain,prefix,domain)=>`https://${prefix}${"mainnet"===chain.toLowerCase()?"":"testnet."}${domain}`,explorerBaseUrlMapping=(type,chain)=>{switch(type){case enums.iW.AlgoExplorer:return(chain=>buildExplorerUrl(chain,"","algoexplorer.io"))(chain);case enums.iW.AlgoScan:return(chain=>buildExplorerUrl(chain,"","algoscan.app"))(chain);default:return""}};const src_useExplorerUrl=function useExplorerUrl(chain,input,type,explorerType=enums.iW.AlgoScan){const[url,setUrl]=(0,react.useState)("");return(0,react.useEffect)((()=>{const assembledUrl=`${explorerBaseUrlMapping(explorerType,chain)}/${(type=>{switch(type){case enums.Y$.Transaction:return"tx";case enums.Y$.Address:return"address";case enums.Y$.Asset:return"asset";case enums.Y$.Application:return"application";default:return""}})(type)}/${input}`;setUrl(assembledUrl)}),[chain,input,type,explorerType]),url};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UseExplorerUrlDemo=({address="Set your address to check the short address",assetId=1060587336,transactionId="OSVENOIE5QALLGJLSYAWZXBMLPJRY2A22VXUWIF6QJJOPC6XD56A",applicationId=1067289273,explorerType=enums.iW.AlgoScan})=>{const addressUrl=src_useExplorerUrl(enums.Jb.MainNet,address,enums.Y$.Address,explorerType),assetUrl=src_useExplorerUrl(enums.Jb.MainNet,assetId,enums.Y$.Asset,explorerType),transactionUrl=src_useExplorerUrl(enums.Jb.MainNet,transactionId,enums.Y$.Transaction,explorerType),applicationUrl=src_useExplorerUrl(enums.Jb.MainNet,applicationId,enums.Y$.Application,explorerType);return(0,jsx_runtime.jsxs)("div",{style:{color:"white"},children:["Click on the links below to check the address",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("a",{target:"_blank",rel:"noreferrer",href:addressUrl,children:addressUrl}),(0,jsx_runtime.jsx)("br",{})," ",(0,jsx_runtime.jsx)("br",{}),assetId&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Click on the links below to check the asset",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("a",{target:"_blank",rel:"noreferrer",href:assetUrl,children:assetUrl}),(0,jsx_runtime.jsx)("br",{})," ",(0,jsx_runtime.jsx)("br",{})]}),transactionId&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Click on the links below to check the transaction",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("a",{target:"_blank",rel:"noreferrer",href:transactionUrl,children:transactionUrl}),(0,jsx_runtime.jsx)("br",{})," ",(0,jsx_runtime.jsx)("br",{})]}),applicationId&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Click on the links below to check the application",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("a",{target:"_blank",rel:"noreferrer",href:applicationUrl,children:applicationUrl})]})]})};UseExplorerUrlDemo.displayName="UseExplorerUrlDemo";try{UseExplorerUrlDemo.displayName="UseExplorerUrlDemo",UseExplorerUrlDemo.__docgenInfo={description:"",displayName:"UseExplorerUrlDemo",props:{address:{defaultValue:{value:"Set your address to check the short address"},description:"",name:"address",required:!1,type:{name:"string"}},assetId:{defaultValue:{value:"1060587336"},description:"",name:"assetId",required:!1,type:{name:"number"}},transactionId:{defaultValue:{value:"OSVENOIE5QALLGJLSYAWZXBMLPJRY2A22VXUWIF6QJJOPC6XD56A"},description:"",name:"transactionId",required:!1,type:{name:"string"}},applicationId:{defaultValue:{value:"1067289273"},description:"",name:"applicationId",required:!1,type:{name:"number"}},explorerType:{defaultValue:{value:"ExplorerType.AlgoScan"},description:"",name:"explorerType",required:!1,type:{name:"enum",value:[{value:'"AlgoExplorer"'},{value:'"AlgoScan"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/UseExplorerUrlDemo.tsx#UseExplorerUrlDemo"]={docgenInfo:UseExplorerUrlDemo.__docgenInfo,name:"UseExplorerUrlDemo",path:"stories/UseExplorerUrlDemo.tsx#UseExplorerUrlDemo"})}catch(__react_docgen_typescript_loader_error){}const UseExplorerUrlDemo_stories={title:"Example/UseExplorerUrlDemo",component:UseExplorerUrlDemo,tags:["autodocs"]},CustomAddress={args:{address:"2ZDXMASNGYLUX6FFSO5PH3BK3DRVOSIR64OL5IH73YZDNZHADORITA3S6E"}};CustomAddress.parameters={...CustomAddress.parameters,docs:{...CustomAddress.parameters?.docs,source:{originalSource:"{\n  args: {\n    address: '2ZDXMASNGYLUX6FFSO5PH3BK3DRVOSIR64OL5IH73YZDNZHADORITA3S6E'\n  }\n}",...CustomAddress.parameters?.docs?.source}}};const __namedExportsOrder=["CustomAddress"]},"./src/misc/enums.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Jb:()=>ChainType,Y$:()=>ExplorerUrlType,iW:()=>ExplorerType});let ExplorerUrlType=function(ExplorerUrlType){return ExplorerUrlType.Transaction="Transaction",ExplorerUrlType.Address="Address",ExplorerUrlType.Asset="Asset",ExplorerUrlType.Application="Application",ExplorerUrlType}({}),ExplorerType=function(ExplorerType){return ExplorerType.AlgoExplorer="AlgoExplorer",ExplorerType.AlgoScan="AlgoScan",ExplorerType}({}),ChainType=function(ChainType){return ChainType.MainNet="mainnet",ChainType.TestNet="testnet",ChainType.BetaNet="betanet",ChainType}({})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);