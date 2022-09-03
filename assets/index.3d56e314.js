import{e as r,b as s,v as d,x as I,U as K,W as N,d as h,z as U,A as v,c3 as W,H as A,a as m,I as c,K as D,h as F,$ as q,bw as G,a6 as g,a2 as p,bU as J,ac as Q}from"./index.28d9e4fc.js";import{P as X}from"./index.2a8ca1ea.js";import"./index.baa3e3bb.js";const Y=r([s("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[r("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[r("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),r("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[r("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),d("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[r("tr",[r("&:last-child",[r("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),d("single-line",[r("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),r("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),d("single-column",[r("tr",[r("&:not(:last-child)",[r("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),d("striped",[r("tr:nth-of-type(even)",[r("td","background-color: var(--n-td-color-striped)")])]),I("bottom-bordered",[r("tr",[r("&:last-child",[r("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),K(s("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[r("th",`
 background-color: var(--n-th-color-modal);
 `),r("td",`
 background-color: var(--n-td-color-modal);
 `)])),N(s("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[r("th",`
 background-color: var(--n-th-color-popover);
 `),r("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),Z=Object.assign(Object.assign({},v.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),rr=h({name:"Table",props:Z,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n,mergedRtlRef:l}=U(e),a=v("Table","-table",Y,W,e,o),u=A("Table",l,o),b=m(()=>{const{size:i}=e,{self:{borderColor:f,tdColor:x,tdColorModal:_,tdColorPopover:C,thColor:z,thColorModal:k,thColorPopover:P,thTextColor:w,tdTextColor:B,borderRadius:R,thFontWeight:$,lineHeight:y,borderColorModal:T,borderColorPopover:M,tdColorStriped:S,tdColorStripedModal:E,tdColorStripedPopover:V,[c("fontSize",i)]:H,[c("tdPadding",i)]:L,[c("thPadding",i)]:O},common:{cubicBezierEaseInOut:j}}=a.value;return{"--n-bezier":j,"--n-td-color":x,"--n-td-color-modal":_,"--n-td-color-popover":C,"--n-td-text-color":B,"--n-border-color":f,"--n-border-color-modal":T,"--n-border-color-popover":M,"--n-border-radius":R,"--n-font-size":H,"--n-th-color":z,"--n-th-color-modal":k,"--n-th-color-popover":P,"--n-th-font-weight":$,"--n-th-text-color":w,"--n-line-height":y,"--n-td-padding":L,"--n-th-padding":O,"--n-td-color-striped":S,"--n-td-color-striped-modal":E,"--n-td-color-striped-popover":V}}),t=n?D("table",m(()=>e.size[0]),b,e):void 0;return{rtlEnabled:u,mergedClsPrefix:o,cssVars:n?void 0:b,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),F("table",{class:[`${o}-table`,this.themeClass,{[`${o}-table--rtl`]:this.rtlEnabled,[`${o}-table--bottom-bordered`]:this.bottomBordered,[`${o}-table--bordered`]:this.bordered,[`${o}-table--single-line`]:this.singleLine,[`${o}-table--single-column`]:this.singleColumn,[`${o}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),or=h({__name:"index",setup(e){return(o,n)=>{const l=rr,a=J;return q(),G(X,{"show-header":!1},{default:g(()=>[p(a,{title:"",size:"medium"},{default:g(()=>[p(l)]),_:1})]),_:1})}}}),nr=Q(or,[["__file","/home/runner/work/admin-template/admin-template/src/views/example/table/index.vue"]]);export{nr as default};
