import{b as y,v as u,e as d,A as p,d as C,z as $,bL as x,a as l,K as z,ba as _,h as m,b2 as N}from"./index.28d9e4fc.js";let a=[];const h=new WeakMap;function R(){a.forEach(e=>e(...h.get(e))),a=[]}function j(e,...t){h.set(e,t),!a.includes(e)&&a.push(e)===1&&requestAnimationFrame(R)}const S=/^(\d|\.)+$/,f=/(\d|\.)+/;function O(e,{c:t=1,offset:i=0,attachPx:o=!0}={}){if(typeof e=="number"){const n=(e+i)*t;return n===0?"0":`${n}px`}else if(typeof e=="string")if(S.test(e)){const n=(Number(e)+i)*t;return o?n===0?"0":`${n}px`:`${n}`}else{const n=f.exec(e);return n?e.replace(f,String((Number(n[0])+i)*t)):e}return e}const w=y("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[u("color-transition",{transition:"color .3s var(--n-bezier)"}),u("depth",{color:"var(--n-color)"},[d("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),d("svg",{height:"1em",width:"1em"})]),P=Object.assign(Object.assign({},p.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),k=C({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:P,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:i}=$(e),o=p("Icon","-icon",w,x,e,t),n=l(()=>{const{depth:s}=e,{common:{cubicBezierEaseInOut:c},self:b}=o.value;if(s!==void 0){const{color:v,[`opacity${s}Depth`]:g}=b;return{"--n-bezier":c,"--n-color":v,"--n-opacity":g}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),r=i?z("icon",l(()=>`${e.depth||"d"}`),n,e):void 0;return{mergedClsPrefix:t,mergedStyle:l(()=>{const{size:s,color:c}=e;return{fontSize:O(s),color:c}}),cssVars:i?void 0:n,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{$parent:t,depth:i,mergedClsPrefix:o,component:n,onRender:r,themeClass:s}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&_("icon","don't wrap `n-icon` inside `n-icon`"),r==null||r(),m("i",N(this.$attrs,{role:"img",class:[`${o}-icon`,s,{[`${o}-icon--depth`]:i,[`${o}-icon--color-transition`]:i!==void 0}],style:[this.cssVars,this.mergedStyle]}),n?m(n):this.$slots)}});export{k as N,j as b,O as f};
