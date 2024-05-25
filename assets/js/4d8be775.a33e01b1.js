"use strict";(self.webpackChunksui_dapp_starter_dev=self.webpackChunksui_dapp_starter_dev||[]).push([[617],{7998:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var s=t(6070),a=t(6113);const r={sidebar_position:2},o="useBalance()",c={id:"frontend/hooks/useBalance",title:"useBalance()",description:"The useBalance() hook lets you request SUI balance for current user address on the currently active network.",source:"@site/docs/frontend/hooks/useBalance.md",sourceDirName:"frontend/hooks",slug:"/frontend/hooks/useBalance",permalink:"/docs/frontend/hooks/useBalance",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"useTransact()",permalink:"/docs/frontend/hooks/useTransact"},next:{title:"useFaucet()",permalink:"/docs/frontend/hooks/useFaucet"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"One-time request",id:"one-time-request",level:3},{value:"On demand",id:"on-demand",level:3},{value:"Regular update",id:"regular-update",level:3},{value:"Used in",id:"used-in",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"usebalance",children:"useBalance()"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"useBalance()"})," hook lets you request SUI balance for current user address on the currently active network."]}),"\n",(0,s.jsx)(n.p,{children:"It's possible to request the balance once or on a regular basis."}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.h3,{id:"one-time-request",children:"One-time request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="MyComponent.tsx"',children:"const { balance } = useBalance()\n// or\nconst { balance } = useBalance({ \n  autoRefetch: false \n})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"on-demand",children:"On demand"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="MyComponent.tsx"',children:"const { balance, error, refetch } = useBalance()\nrefetch()\n"})}),"\n",(0,s.jsx)(n.h3,{id:"regular-update",children:"Regular update"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="MyComponent.tsx"',children:"const { balance } = useBalance({ \n  autoRefetch: true, \n  autoRefetchInterval: 3000 \n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Where ",(0,s.jsx)(n.code,{children:"autoRefetchInterval"})," is in milliseconds. Default value is 3000 milliseconds (3 seconds)."]}),"\n",(0,s.jsx)(n.h2,{id:"used-in",children:"Used in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/frontend/components/Balance",children:"<Balance />"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6113:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(758);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);