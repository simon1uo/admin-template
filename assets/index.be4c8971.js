import{b as v,f as p,d as V,z as A,A as Z,bT as j,H as R,a as S,K as k,h as d,L as f,$ as a,a0 as r,a1 as e,ad as L,bC as Y,a2 as t,a6 as s,a4 as F,a3 as N,a7 as T,bU as D,ac as P}from"./index.28d9e4fc.js";import{_ as W}from"./vue.5aa6a602.js";import{_ as J,a as O}from"./Grid.9cf8fe86.js";import{N as I}from"./Icon.3a58ad48.js";import"./get-slot.95d44f9f.js";const U=v("statistic",[p("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),v("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[p("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[v("icon",{verticalAlign:"-0.125em"})]),p("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),p("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[v("icon",{verticalAlign:"-0.125em"})])])]),G=Object.assign(Object.assign({},Z.props),{tabularNums:Boolean,label:String,value:[String,Number]}),K=V({name:"Statistic",props:G,setup(n){const{mergedClsPrefixRef:o,inlineThemeDisabled:u,mergedRtlRef:h}=A(n),_=Z("Statistic","-statistic",U,j,n,o),c=R("Statistic",h,o),i=S(()=>{const{self:{labelFontWeight:x,valueFontSize:g,valueFontWeight:b,valuePrefixTextColor:w,labelTextColor:$,valueSuffixTextColor:m,valueTextColor:E,labelFontSize:M},common:{cubicBezierEaseInOut:z}}=_.value;return{"--n-bezier":z,"--n-label-font-size":M,"--n-label-font-weight":x,"--n-label-text-color":$,"--n-value-font-weight":b,"--n-value-font-size":g,"--n-value-prefix-text-color":w,"--n-value-suffix-text-color":m,"--n-value-text-color":E}}),l=u?k("statistic",void 0,i,n):void 0;return{rtlEnabled:c,mergedClsPrefix:o,cssVars:u?void 0:i,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var n;const{mergedClsPrefix:o,$slots:{default:u,label:h,prefix:_,suffix:c}}=this;return(n=this.onRender)===null||n===void 0||n.call(this),d("div",{class:[`${o}-statistic`,this.themeClass,this.rtlEnabled&&`${o}-statistic--rtl`],style:this.cssVars},f(h,i=>d("div",{class:`${o}-statistic__label`},this.label||i)),d("div",{class:`${o}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},f(_,i=>i&&d("span",{class:`${o}-statistic-value__prefix`},i)),this.value!==void 0?d("span",{class:`${o}-statistic-value__content`},this.value):f(u,i=>i&&d("span",{class:`${o}-statistic-value__content`},i)),f(c,i=>i&&d("span",{class:`${o}-statistic-value__suffix`},i))))}}),q={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},Q=e("path",{fill:"currentColor",d:"M2 5v14h6V5H2m7 0v5h6V5H9m7 0v9h6V5h-6m-7 6v8h6v-8H9m7 4v4h6v-4h-6Z"},null,-1),X=[Q];function e1(n,o){return a(),r("svg",q,X)}const t1={name:"mdi-view-dashboard-variant",render:e1},s1={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},o1=e("path",{fill:"currentColor",d:"M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"},null,-1),n1=[o1];function c1(n,o){return a(),r("svg",s1,n1)}const l1={name:"mdi-lock",render:c1},i1={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},a1=e("path",{fill:"currentColor",d:"M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"},null,-1),r1=[a1];function _1(n,o){return a(),r("svg",i1,r1)}const d1={name:"mdi-menu",render:_1},u1={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},h1=e("path",{fill:"currentColor",d:"M17 5h3l-1.5 2L17 5M3 2h18a2 2 0 0 1 2 2v4c0 1.11-.89 2-2 2h-5v10c0 1.11-.89 2-2 2H3a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m0 2v4h11V4H3m18 4V4h-5v4h5M3 20h11V10H3v10m2-8h7v2H5v-2m0 4h7v2H5v-2Z"},null,-1),m1=[h1];function v1(n,o){return a(),r("svg",u1,m1)}const p1={name:"mdi-form-dropdown",render:v1},f1={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},x1=e("path",{fill:"currentColor",d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7 7h2v2H7V7m0 4h2v2H7v-2m0 4h2v2H7v-2m10 2h-6v-2h6v2m0-4h-6v-2h6v2m0-4h-6V7h6v2Z"},null,-1),g1=[x1];function b1(n,o){return a(),r("svg",f1,g1)}const w1={name:"mdi-list-box",render:b1},$1={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},E1=e("path",{fill:"currentColor",d:"M13 3v6h8V3m-8 18h8V11h-8M3 21h8v-6H3m0-2h8V3H3v10Z"},null,-1),M1=[E1];function z1(n,o){return a(),r("svg",$1,M1)}const F1={name:"mdi-view-dashboard",render:z1},V1={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1em",height:"1em"},Z1=e("path",{fill:"#F7DF1E",d:"M0 0h256v256H0V0Z"},null,-1),C1=e("path",{d:"m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"},null,-1),B1=[Z1,C1];function H1(n,o){return a(),r("svg",V1,B1)}const y1={name:"logos-javascript",render:H1},A1={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",width:"1em",height:"1em"},j1=e("path",{fill:"#00D8FF",d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"},null,-1),R1=[j1];function S1(n,o){return a(),r("svg",A1,R1)}const k1={name:"logos-react",render:S1},L1={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 272",width:"1em",height:"1em"},Y1=e("path",{fill:"#E23237",d:"M.1 45.522L125.908.697l129.196 44.028l-20.919 166.45l-108.277 59.966l-106.583-59.169L.1 45.522Z"},null,-1),N1=e("path",{fill:"#B52E31",d:"M255.104 44.725L125.908.697v270.444l108.277-59.866l20.919-166.55Z"},null,-1),T1=e("path",{fill:"#FFF",d:"M126.107 32.274L47.714 206.693l29.285-.498l15.739-39.347h70.325l17.233 39.845l27.99.498l-82.179-174.917Zm.2 55.882l26.496 55.383h-49.806l23.31-55.383Z"},null,-1),D1=[Y1,N1,T1];function P1(n,o){return a(),r("svg",L1,D1)}const W1={name:"logos-angular-icon",render:P1},J1={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 361",width:"1em",height:"1em"},O1=L('<path fill="#E44D26" d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766h255.11Z"></path><path fill="#F16529" d="m128 337.95l84.417-23.403l19.86-222.49H128V337.95Z"></path><path fill="#EBEBEB" d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739l-2.919-32.704Zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604l-2.274-25.471Z"></path><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0Zm68.65 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001ZM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0Zm62.74 0h16.235v32.508h22.824v16.05h-39.06V0Z"></path><path fill="#FFF" d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89v31.937Zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89v31.86Z"></path>',5),I1=[O1];function U1(n,o){return a(),r("svg",J1,I1)}const G1={name:"logos-html5",render:U1},K1={class:"inline-block",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1em",height:"1em"},q1=e("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"},null,-1),Q1=[q1];function X1(n,o){return a(),r("svg",K1,Q1)}const ee={name:"mdi-github",render:X1},te={"min-w-375":""},se={flex:"","items-center":""},oe=["src"],ne={"ml-20":"","text-18":""},ce={"fw-600":""},le=e("p",{"fw-300":"","op-60":""},"\u5F00\u59CB\u60A8\u4E00\u5929\u7684\u5DE5\u4F5C\u5427\uFF01",-1),ie={"ml-auto":"","items-center":"",hidden:"","md:flex":""},ae=T(" / 10 "),re={class:"flex flex-wrap project-card"},_e={class:"flex"},de=e("span",{class:"text-20 ml-4"},"Github",-1),ue=e("div",{class:"flex my-2 text-gray-400"},"\u662F\u4E00\u4E2A\u9762\u5411\u5F00\u6E90\u53CA\u79C1\u6709\u8F6F\u4EF6\u9879\u76EE\u7684\u6258\u7BA1\u5E73\u53F0\u3002",-1),he={class:"flex"},me=e("span",{class:"text-20 ml-4"},"Vue",-1),ve=e("div",{class:"flex my-2 text-gray-400"},"\u6E10\u8FDB\u5F0F JavaScript \u6846\u67B6",-1),pe={class:"flex"},fe=e("span",{class:"text-20 ml-4"}," HTML5 ",-1),xe=e("div",{class:"flex my-2 text-gray-400"},"\u662F\u4E92\u8054\u7F51\u7684\u4E0B\u4E00\u4EE3\u6807\u51C6\u3002",-1),ge={class:"flex"},be=e("span",{class:"text-20 ml-4"},"Angular",-1),we=e("div",{class:"flex my-2 text-gray-400"},"\u662F\u4E00\u4E2A\u73B0\u4EE3 Web \u5F00\u53D1\u5E73\u53F0",-1),$e={class:"flex"},Ee=e("span",{class:"text-20 ml-4"},"React",-1),Me=e("div",{class:"flex my-2 text-gray-400"},"\u662F\u4E00\u4E2A \u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684 JavaScript \u5E93\u3002",-1),ze={class:"flex"},Fe=e("span",{class:"text-20 ml-4"},"JavaScript",-1),Ve=e("div",{class:"flex my-2 text-gray-400"},null,-1),Ze={class:"flex flex-wrap project-card"},Ce={class:"flex flex-col justify-center text-gray-500"},Be={class:"text-center"},He=e("span",{class:"text-lx text-center"},"\u4E3B\u63A7\u53F0",-1),ye={class:"flex flex-col justify-center text-gray-500"},Ae={class:"text-center"},je=e("span",{class:"text-lx text-center"},"\u5217\u8868",-1),Re={class:"flex flex-col justify-center text-gray-500"},Se={class:"text-center"},ke=e("span",{class:"text-lx text-center"},"\u8868\u5355",-1),Le={class:"flex flex-col justify-center text-gray-500"},Ye={class:"text-center"},Ne=e("span",{class:"text-lx text-center"},"\u6743\u9650\u7BA1\u7406",-1),Te={class:"flex flex-col justify-center text-gray-500"},De={class:"text-center"},Pe=e("span",{class:"text-lx text-center"},"\u7CFB\u7EDF\u7BA1\u7406",-1),We={class:"flex flex-col justify-center text-gray-500"},Je={class:"text-center"},Oe=e("span",{class:"text-lx text-center"},"\u4E3B\u63A7\u53F0",-1),Ie=V({__name:"index",setup(n){const o=Y();return(u,h)=>{const _=K,c=D,i=ee,l=I,x=W,g=G1,b=W1,w=k1,$=y1,m=J,E=F1,M=w1,z=p1,C=d1,B=l1,H=t1,y=O;return a(),r("div",te,[t(c,{"rounded-10":""},{default:s(()=>[e("div",se,[e("img",{src:F(o).avatar,alt:"avatar","w-100":"","rounded-full":""},null,8,oe),e("div",ne,[e("p",ce,"Hello, "+N(F(o).name),1),le]),e("div",ie,[t(_,{label:"\u5F85\u529E",value:4,"w-80":"","mr-25":"","text-right":""},{suffix:s(()=>[ae]),_:1}),t(_,{label:"\u9879\u76EE",value:8,"w-80":"","mr-25":"","text-right":""}),t(_,{label:"\u56E2\u961F",value:300,"w-80":"","mr-25":"","text-right":""})])])]),_:1}),t(y,{cols:"6","item-responsive":"",responsive:"screen","x-gap":"15"},{default:s(()=>[t(m,{span:"6 l:4"},{default:s(()=>[t(c,{title:"\u9879\u76EE",size:"medium",segmented:{content:!0},"content-style":"padding: 0;",bordered:!1,"mt-15":"","rounded-10":""},{default:s(()=>[e("div",re,[t(c,{size:"medium",class:"cursor-pointer project-card-item ms:w-1/2 md:w-1/3 overflow-hidden",hoverable:""},{default:s(()=>[e("div",_e,[e("span",null,[t(l,{size:"30"},{default:s(()=>[t(i)]),_:1})]),de]),ue]),_:1}),t(c,{size:"medium",class:"cursor-pointer project-card-item ms:w-1/2 md:w-1/3 overflow-hidden",hoverable:""},{default:s(()=>[e("div",he,[e("span",null,[t(l,{size:"30"},{default:s(()=>[t(x)]),_:1})]),me]),ve]),_:1}),t(c,{size:"medium",class:"cursor-pointer project-card-item ms:w-1/2 md:w-1/3 overflow-hidden",hoverable:""},{default:s(()=>[e("div",pe,[e("span",null,[t(l,{size:"30"},{default:s(()=>[t(g)]),_:1})]),fe]),xe]),_:1}),t(c,{size:"medium",class:"cursor-pointer project-card-item ms:w-1/2 md:w-1/3 overflow-hidden",hoverable:""},{default:s(()=>[e("div",ge,[e("span",null,[t(l,{size:"30"},{default:s(()=>[t(b)]),_:1})]),be]),we]),_:1}),t(c,{size:"medium",class:"cursor-pointer project-card-item ms:w-1/2 md:w-1/3 overflow-hidden",hoverable:""},{default:s(()=>[e("div",$e,[e("span",null,[t(l,{size:"30"},{default:s(()=>[t(w)]),_:1})]),Ee]),Me]),_:1}),t(c,{size:"medium",class:"cursor-pointer project-card-item ms:w-1/2 md:w-1/3 overflow-hidden",hoverable:""},{default:s(()=>[e("div",ze,[e("span",null,[t(l,{size:"30"},{default:s(()=>[t($)]),_:1})]),Fe]),Ve]),_:1})])]),_:1})]),_:1}),t(m,{span:"6 l:2"},{default:s(()=>[t(c,{title:"\u5BFC\u822A",size:"medium",segmented:{content:!0},"content-style":"padding: 0;",bordered:!1,"mt-15":"","rounded-10":""},{default:s(()=>[e("div",Ze,[t(c,{size:"small",class:"cursor-pointer project-card-item",hoverable:""},{default:s(()=>[e("div",Ce,[e("span",Be,[t(l,{size:"30",color:"#68c755"},{default:s(()=>[t(E)]),_:1})]),He])]),_:1}),t(c,{size:"small",class:"cursor-pointer project-card-item",hoverable:""},{default:s(()=>[e("div",ye,[e("span",Ae,[t(l,{size:"30",color:"#fab251"},{default:s(()=>[t(M)]),_:1})]),je])]),_:1}),t(c,{size:"small",class:"cursor-pointer project-card-item",hoverable:""},{default:s(()=>[e("div",Re,[e("span",Se,[t(l,{size:"30",color:"#1890ff"},{default:s(()=>[t(z)]),_:1})]),ke])]),_:1}),t(c,{size:"small",class:"cursor-pointer project-card-item",hoverable:""},{default:s(()=>[e("div",Le,[e("span",Ye,[t(l,{size:"30",color:"#f06b96"},{default:s(()=>[t(C)]),_:1})]),Ne])]),_:1}),t(c,{size:"small",class:"cursor-pointer project-card-item",hoverable:""},{default:s(()=>[e("div",Te,[e("span",De,[t(l,{size:"30",color:"#7238d1"},{default:s(()=>[t(B)]),_:1})]),Pe])]),_:1}),t(c,{size:"small",class:"cursor-pointer project-card-item",hoverable:""},{default:s(()=>[e("div",We,[e("span",Je,[t(l,{size:"30",color:""},{default:s(()=>[t(H)]),_:1})]),Oe])]),_:1})])]),_:1})]),_:1})]),_:1})])}}});const Xe=P(Ie,[["__file","/home/runner/work/admin-template/admin-template/src/views/dashboard/workbench/index.vue"]]);export{Xe as default};
