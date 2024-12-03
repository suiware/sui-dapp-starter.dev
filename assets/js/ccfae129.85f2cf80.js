"use strict";(self.webpackChunksui_dapp_starter_dev=self.webpackChunksui_dapp_starter_dev||[]).push([[4611],{8141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var s=t(6070),r=t(2907);const d={sidebar_position:3},o="useFaucet()",i={id:"frontend/hooks/useFaucet",title:"useFaucet",description:"If you're here just for a devnet or testnet faucet for Sui, join Sui Discord and use the #devnet-faucet or #testnet-faucet channels accordingly to fund your address.",source:"@site/docs/frontend/hooks/useFaucet.md",sourceDirName:"frontend/hooks",slug:"/frontend/hooks/useFaucet",permalink:"/docs/frontend/hooks/useFaucet",draft:!1,unlisted:!1,editUrl:"https://github.com/suiware/sui-dapp-starter.dev/tree/main/docs/frontend/hooks/useFaucet.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"useBalance()",permalink:"/docs/frontend/hooks/useBalance"},next:{title:"useSynchronizedNetworkType()",permalink:"/docs/frontend/hooks/useSynchronizedNetworkType"}},a={},c=[{value:"Usage",id:"usage",level:2},{value:"Fund current address",id:"fund-current-address",level:3},{value:"Fund an arbitrary address",id:"fund-an-arbitrary-address",level:3},{value:"Used in",id:"used-in",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you're here just for a ",(0,s.jsx)(n.strong,{children:"devnet"})," or ",(0,s.jsx)(n.strong,{children:"testnet"})," faucet for Sui, join ",(0,s.jsx)(n.a,{href:"https://discord.gg/sui",children:"Sui Discord"})," and use the ",(0,s.jsx)(n.code,{children:"#devnet-faucet"})," or ",(0,s.jsx)(n.code,{children:"#testnet-faucet"})," channels accordingly to fund your address."]})}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"usefaucet",children:"useFaucet()"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"useFaucet()"})," hook lets you fund an address an a test network."]}),"\n",(0,s.jsxs)(n.p,{children:["The supported networks are ",(0,s.jsx)(n.strong,{children:"localnet"}),", ",(0,s.jsx)(n.strong,{children:"devnet"})," and ",(0,s.jsx)(n.strong,{children:"testnet"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The granted amount is:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"localnet: 100 SUI"}),"\n",(0,s.jsx)(n.li,{children:"devnet: 10 SUI"}),"\n",(0,s.jsx)(n.li,{children:"testnet: 1 SUI"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["There is a quota for requesting funds from ",(0,s.jsx)(n.strong,{children:"devnet"})," and ",(0,s.jsx)(n.strong,{children:"testnet"}),".\nIf you have reached the limit, wait for 24 hours, and in the meanwhile use the ",(0,s.jsx)(n.code,{children:"#devnet-faucet"})," and ",(0,s.jsx)(n.code,{children:"#testnet-faucet"})," channels of the ",(0,s.jsx)(n.a,{href:"https://discord.gg/sui",children:"official Sui Discord"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"fund-current-address",children:"Fund current address"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="MyComponent.tsx"',children:"const { fund } = useFaucet()\nfund()\n"})}),"\n",(0,s.jsx)(n.p,{children:"If a wallet is not connected, an error message will be displayed."}),"\n",(0,s.jsx)(n.h3,{id:"fund-an-arbitrary-address",children:"Fund an arbitrary address"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="MyComponent.tsx"',children:"const { fund } = useFaucet()\nfund('0xADDRESS')\n"})}),"\n",(0,s.jsx)(n.h2,{id:"used-in",children:"Used in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/frontend/components/Faucet",children:"<Faucet />"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},2907:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(758);const r={},d=s.createContext(r);function o(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);