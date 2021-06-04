(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[192],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7279:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o={id:"dev_exercise",title:"Practical exercise"},l={unversionedId:"dev_exercise",id:"dev_exercise",isDocsHomePage:!1,title:"Practical exercise",description:"Are you looking to put your Substrate knowledge to the test? Do you think you are ready to get hydrated? Then this small practical exercise might be what you are looking for.",source:"@site/docs/dev_exercise.md",sourceDirName:".",slug:"/dev_exercise",permalink:"/dev_exercise",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/dev_exercise.md",version:"current",frontMatter:{id:"dev_exercise",title:"Practical exercise"},sidebar:"sidebar",previous:{title:"Transaction Multi-Payment",permalink:"/dev_pallet_payment"},next:{title:"Writing Docs",permalink:"/contributing"}},s=[{value:"Task description",id:"task-description",children:[]},{value:"Math",id:"math",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Extrinsics",id:"extrinsics",children:[{value:"create pool",id:"create-pool",children:[]},{value:"add liquidity",id:"add-liquidity",children:[]},{value:"remove_liquidity",id:"remove_liquidity",children:[]},{value:"sell / buy",id:"sell--buy",children:[]}]},{value:"Exchange support",id:"exchange-support",children:[]},{value:"Questions",id:"questions",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Are you looking to put your Substrate knowledge to the test? Do you think you are ready to get hydrated? Then this small practical exercise might be what you are looking for. "),(0,i.kt)("h2",{id:"task-description"},"Task description"),(0,i.kt)("p",null,"Implement a simplified version of a trading pool which holds 2 stable assets and has no trading fees."),(0,i.kt)("p",null,"The trading pool should support the following functionality which should be implemented as extrinsics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create pool"),(0,i.kt)("li",{parentName:"ul"},"add liquidity"),(0,i.kt)("li",{parentName:"ul"},"remove liquidity"),(0,i.kt)("li",{parentName:"ul"},"sell"),(0,i.kt)("li",{parentName:"ul"},"buy")),(0,i.kt)("h2",{id:"math"},"Math"),(0,i.kt)("p",null,"You can find the math-related functionality in the HydraDX-math crate under branch simpleswap:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-math/tree/simpleswap"},"https://github.com/galacticcouncil/HydraDX-math/tree/simpleswap")),(0,i.kt)("h2",{id:"storage"},"Storage"),(0,i.kt)("p",null,"Design a storage which keeps the pool information. The following information needs to be stored:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"amplification: u128"),(0,i.kt)("li",{parentName:"ul"},"assets: AssetId (assets in the pool)"),(0,i.kt)("li",{parentName:"ul"},"balances: u128 (balances of each asset in the pool)"),(0,i.kt)("li",{parentName:"ul"},"pool asset: AssetId (asset minted or burnt when liquidity is added to or removed from the pool)")),(0,i.kt)("p",null,"Also consider which type of storage to use and what is the best way to access the pool."),(0,i.kt)("h2",{id:"extrinsics"},"Extrinsics"),(0,i.kt)("p",null,"Here are some further details on the required extrinsics."),(0,i.kt)("h3",{id:"create-pool"},"create pool"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"}," pub fn create_pool(\n    origin: origin,\n    assets: (AssetId, AssetId),\n    amplification: Balance) {}\n")),(0,i.kt)("p",null,"In the first place, create_pool should check if a pool between the two pairs already exists. If this is not the case, it should create a new pool in the asset registry and store all the necessary information in the storage. You can check the XYK pallet for reference on how to work with the asset registry."),(0,i.kt)("h3",{id:"add-liquidity"},"add liquidity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"ub fn add_liquidity(\n    origin: OriginFor<T>,\n    assets: (AssetId,AssetId),\n    amounts: (Balance, Balance),\n    min_mint_amount: Balance,\n) -> DispatchResultWithPostInfo {}\n")),(0,i.kt)("p",null,"This extrinsic should add liquidity to the pool, provided that the pool already exists and that the account has a sufficient balance of both assets that are added to the pool."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"calculate_pool_value")," from the math crate to calculate the amount which should be minted for the user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let d0 = calculate_pool_value([initial amount a, initial amount b], ann);\nlet d1 = calculate_pool_value([new amount a, new amount b], ann);\n\nlet supply = total_issuance(pool_asset);\n\nlet mint_mount = if supply > 0 {\n    supply * ( d1 - d0) / d0\n}else\n{\n    d1\n}\n")),(0,i.kt)("h3",{id:"remove_liquidity"},"remove_liquidity"),(0,i.kt)("p",null,"TBD"),(0,i.kt)("h3",{id:"sell--buy"},"sell / buy"),(0,i.kt)("p",null,"Sell and buy are two very similar extrinsics which change the amount of the assets in the pool - the supply of one asset increases while the supply of the other asset decreases."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn sell(\n    origin: OriginFor<T>,\n    asset_sell: AssetId,\n    asset_buy: AssetId,\n    amount: Balance,\n    min_bought: Balance,\n) -> DispatchResultWithPostInfo {}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn buy(\n    origin: OriginFor<T>,\n    asset_buy: AssetId,\n    asset_sell: AssetId,\n    amount: Balance,\n    max_sold: Balance,\n) -> DispatchResultWithPostInfo {}\n")),(0,i.kt)("p",null,"Before the sell or buy is effectuated, the methods should perform the necessary validations in order to determine that the transaction can be  completed successfully. If this is the case, it should calculate the amounts in and out, perform the transfers and, finally - update the pool storage."),(0,i.kt)("h2",{id:"exchange-support"},"Exchange support"),(0,i.kt)("p",null,"As a bonus task, you can prepare your newly created pool to be plugged into the Exchange pallet. For that purpose, an AMM trait from the primitives crate should be implemented for this pallet."),(0,i.kt)("p",null,"You can look for inspiration on how this can be done in the XYK pallet."),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you have any questions, please feel free to contact us on Discord."))}c.isMDXComponent=!0}}]);