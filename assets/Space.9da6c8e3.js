import{bM as B,b9 as C,d as G,z as R,A as v,H as j,a as E,I,bN as M,bO as b,bP as P,h as x}from"./index.28d9e4fc.js";import{g as _}from"./get-slot.95d44f9f.js";const A=()=>B,L={name:"Space",self:A},O=L;let h;const T=()=>{if(!C)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const a=e.scrollHeight===1;return document.body.removeChild(e),h=a}return h},H=Object.assign(Object.assign({},v.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),F=G({name:"Space",props:H,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:u}=R(e),n=v("Space","-space",void 0,O,e,a),g=j("Space",u,a);return{useGap:T(),rtlEnabled:g,mergedClsPrefix:a,margin:E(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[I("gap",t)]:f}}=n.value,{row:l,col:p}=M(f);return{horizontal:b(p),vertical:b(l)}})}},render(){const{vertical:e,align:a,inline:u,justify:n,itemStyle:g,margin:t,wrap:f,mergedClsPrefix:l,rtlEnabled:p,useGap:o,wrapItem:w,internalUseGap:S}=this,c=P(_(this));if(!c.length)return null;const y=`${t.horizontal}px`,m=`${t.horizontal/2}px`,z=`${t.vertical}px`,i=`${t.vertical/2}px`,s=c.length-1,d=n.startsWith("space-");return x("div",{role:"none",class:[`${l}-space`,p&&`${l}-space--rtl`],style:{display:u?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(n)?"flex-"+n:n,flexWrap:!f||e?"nowrap":"wrap",marginTop:o||e?"":`-${i}`,marginBottom:o||e?"":`-${i}`,alignItems:a,gap:o?`${t.vertical}px ${t.horizontal}px`:""}},!w&&(o||S)?c:c.map(($,r)=>x("div",{role:"none",style:[g,{maxWidth:"100%"},o?"":e?{marginBottom:r!==s?z:""}:p?{marginLeft:d?n==="space-between"&&r===s?"":m:r!==s?y:"",marginRight:d?n==="space-between"&&r===0?"":m:"",paddingTop:i,paddingBottom:i}:{marginRight:d?n==="space-between"&&r===s?"":m:r!==s?y:"",marginLeft:d?n==="space-between"&&r===0?"":m:"",paddingTop:i,paddingBottom:i}]},$)))}});export{F as _};