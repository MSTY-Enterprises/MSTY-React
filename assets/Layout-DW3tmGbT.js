import{r as n,j as e,a as z,R as L,l as P,O as S}from"./index-Ce69QYns.js";import{N as O,F as H}from"./Footer-B5JvcIJq.js";import{M as $,u as k,P as F,a as T,L as B,m as N}from"./proxy-CKHciutz.js";import"./iconBase-CmiIeSh5.js";import"./index-BOhGpiQe.js";const D="/assets/whatsappIcon-Brq_PLbX.webp";class W extends n.Component{getSnapshotBeforeUpdate(a){const t=this.props.childRef.current;if(t&&a.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function _({children:o,isPresent:a}){const t=n.useId(),i=n.useRef(null),p=n.useRef({width:0,height:0,top:0,left:0}),{nonce:g}=n.useContext($);return n.useInsertionEffect(()=>{const{width:f,height:s,top:u,left:h}=p.current;if(a||!i.current||!f||!s)return;i.current.dataset.motionPopId=t;const c=document.createElement("style");return g&&(c.nonce=g),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${s}px !important;
            top: ${u}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[a]),e.jsx(W,{isPresent:a,childRef:i,sizeRef:p,children:n.cloneElement(o,{ref:i})})}const K=({children:o,initial:a,isPresent:t,onExitComplete:i,custom:p,presenceAffectsLayout:g,mode:f})=>{const s=k(U),u=n.useId(),h=n.useCallback(l=>{s.set(l,!0);for(const w of s.values())if(!w)return;i&&i()},[s,i]),c=n.useMemo(()=>({id:u,initial:a,isPresent:t,custom:p,onExitComplete:h,register:l=>(s.set(l,!1),()=>s.delete(l))}),g?[Math.random(),h]:[t,h]);return n.useMemo(()=>{s.forEach((l,w)=>s.set(w,!1))},[t]),n.useEffect(()=>{!t&&!s.size&&i&&i()},[t]),f==="popLayout"&&(o=e.jsx(_,{isPresent:t,children:o})),e.jsx(F.Provider,{value:c,children:o})};function U(){return new Map}const b=o=>o.key||"";function R(o){const a=[];return n.Children.forEach(o,t=>{n.isValidElement(t)&&a.push(t)}),a}const V=({children:o,exitBeforeEnter:a,custom:t,initial:i=!0,onExitComplete:p,presenceAffectsLayout:g=!0,mode:f="sync"})=>{const s=n.useMemo(()=>R(o),[o]),u=s.map(b),h=n.useRef(!0),c=n.useRef(s),l=k(()=>new Map),[w,M]=n.useState(s),[m,v]=n.useState(s);T(()=>{h.current=!1,c.current=s;for(let d=0;d<m.length;d++){const r=b(m[d]);u.includes(r)?l.delete(r):l.get(r)!==!0&&l.set(r,!1)}},[m,u.length,u.join("-")]);const j=[];if(s!==w){let d=[...s];for(let r=0;r<m.length;r++){const x=m[r],C=b(x);u.includes(C)||(d.splice(r,0,x),j.push(x))}f==="wait"&&j.length&&(d=j),v(R(d)),M(s);return}const{forceRender:y}=n.useContext(B);return e.jsx(e.Fragment,{children:m.map(d=>{const r=b(d),x=s===m||u.includes(r),C=()=>{if(l.has(r))l.set(r,!0);else return;let E=!0;l.forEach(I=>{I||(E=!1)}),E&&(y==null||y(),v(c.current),p&&p())};return e.jsx(K,{isPresent:x,initial:!h.current||i?void 0:!1,custom:x?void 0:t,presenceAffectsLayout:g,mode:f,onExitComplete:x?void 0:C,children:d},r)})})},q=()=>{const{pathname:o}=z();n.useEffect(()=>{console.log("Scroll to top"),window.scrollTo(0,0)},[o])},A=()=>{const[o,a]=L.useState(!1),t={initial:{opacity:0,width:0},animate:{width:"16rem",opacity:1,transition:{duration:.5,ease:"easeInOut"}}},i={initial:{x:-100,opacity:0},animate:{x:0,opacity:1,transition:{delay:.5,duration:.5,ease:"easeInOut"}}},p=()=>{window.open("https://wa.me?919910741417?text=Hello","_blank")};return e.jsx(V,{children:e.jsxs("div",{onClick:()=>a(!o),className:"fixed bottom-10 left-5 z-50 cursor-pointer",children:[!o&&e.jsx("span",{className:"absolute -top-4 -right-4    z-10 bg-red-500 text-white rounded-full flex justify-center items-center p-3 w-4 h-4 text-xs",children:"1"}),e.jsx("img",{src:D,alt:"",className:"w-16 h-16 drop-shadow-2xl  "}),e.jsxs(N.div,{variants:t,initial:"initial",animate:o?"animate":"initial",className:"absolute flex flex-col justify-between top-0 right-0 translate-x-[100%] -translate-y-[100%] w-60  shadow-2xl aspect-[3/4] rounded-xl overflow-hidden bg-[url('https://w0.peakpx.com/wallpaper/557/521/HD-wallpaper-whatsapp-v-background-doodle-pattern-patterns-whatsapp.jpg')] bg-cover bg-center bg-no-repeat",children:[e.jsxs("div",{className:"flex gap-2 px-2 py-1 items-center bg-gray-700 ",children:[e.jsx("div",{className:"relative before:top-0 before:right-0 before:absolute before:w-3 before:h-3 before:rounded-full before:bg-green-400",children:e.jsx("img",{src:P,alt:"msty enterprises",className:"w-10 h-10 p-1 bg-black border-white border-2 rounded-full"})}),e.jsxs("div",{className:"py-2",children:[e.jsx("p",{className:"text-white font-bold text-sm ",children:"Msty Enterprises"}),e.jsx("p",{className:"text-xs font-semibold text-neutral-400",children:"Online"})]})]}),e.jsxs("div",{className:"flex flex-col gap-4 p-2",children:[e.jsx(N.div,{variants:i,initial:"initial",animate:o?"animate":"initial",className:"bg-white text-sm w-fit px-2 py-1 rounded-md shadow-lg",children:"Hello 🙏, How may I help you?"}),e.jsx("button",{onClick:p,className:"bg-green-600 text-white px-6 py-2 rounded-3xl block mx-auto items-end",children:" Connect"})]})]})]})})},Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsx(O,{}),e.jsx(A,{}),e.jsx("main",{children:e.jsx(S,{})}),e.jsx(H,{})]});export{Z as default};