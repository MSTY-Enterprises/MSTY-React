import{j as e,R as m}from"./index-Ce69QYns.js";import{B as d}from"./Banner-BfTawsH3.js";import{c as x,d as h}from"./index-CErskrEo.js";import{c as p}from"./index-w8t-BEfn.js";import"./iconBase-CmiIeSh5.js";const u=()=>e.jsx("section",{children:e.jsx("div",{className:"container mx-auto py-8 ",children:e.jsxs("div",{className:" flex justify-between p-8 border rounded-3xl shadow-lg bg-white",children:[e.jsxs("div",{className:"",children:[e.jsx("h2",{className:"text-4xl font-semibold mb-8",children:"Contact Details"}),e.jsxs("div",{className:"flex flex-col gap-6 justify-center  ",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:" rounded-full bg-violet-500 p-4 text-white text-3xl ",children:e.jsx(x,{})}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Address"}),e.jsx("p",{className:"text-base text-neutral-800 max-w-[500px]",children:"No. 33 3rd Floor, 33A, Building, Rama Rd, Industrial Area, Najafgarh Road Industrial Area, New Delhi, Delhi, 110015"})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:" rounded-full bg-violet-500 p-4 text-white text-3xl ",children:e.jsx(h,{})}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Phone"}),e.jsx("p",{className:"text-base text-neutral-800",children:"+91 99107 41417"})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:" rounded-full bg-violet-500 p-4 text-white text-3xl ",children:e.jsx(p,{})}),e.jsxs("div",{className:"",children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Email"}),e.jsx("p",{className:"text-base text-neutral-800",children:"info@mstyenterprises.com"})]})]})]})]}),e.jsxs("div",{className:"",children:[e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14003.856730650416!2d77.1518712!3d28.6607911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d037977ecfe2b%3A0xeaaac29c89049faa!2sMsty%20Enterprises!5e0!3m2!1sen!2sin!4v1733728214983!5m2!1sen!2sin",width:"600",height:"450",className:"",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})," "]})]})})}),j=()=>{const[t,n]=m.useState({name:"",mobile:"",email:"",message:""}),i=async s=>{const a=await fetch("http://192.168.1.20:8000/api/query",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(s)}),l=await a.json();console.log(l),a.ok?(alert("Form Submitted Successfully"),n({name:"",mobile:"",email:"",message:""})):alert("Something went wrong")},r=s=>{s.preventDefault();const a=new FormData(s.target),l=Object.fromEntries(a);i(l)},o=s=>{const{name:a,value:l}=s.target;n(c=>({...c,[a]:l}))};return e.jsx("section",{children:e.jsxs("div",{className:"container mx-auto flex flex-col lg:flex-row px-8 lg:px-16 py-6 bg-orange-100 rounded-3xl  ",children:[e.jsx("div",{className:"w-full lg:w-2/3 py-8 lg:py-16",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h2",{className:"text-4xl font-semibold",children:"Get in touch"}),e.jsx("p",{className:"text-base text-neutral-800 max-w-[500px]",children:"We’re here to assist you with any questions, comments, or concerns you may have. Whether you're looking for support, have a query about our services, or just want to say hello, we’d love to hear from you!"}),e.jsx("p",{className:"text-sm text-neutral-500 max-w-[500px]",children:"Please fill out the contact form and a member of our team will get back to you as soon as possible. We strive to respond to all inquiries within 24 hours."})]})}),e.jsx("div",{className:"w-full lg:w-1/3 lg:p-6",children:e.jsxs("form",{onSubmit:r,className:"flex flex-col gap-2 bg-slate-50 p-8 shadow-xl rounded-3xl border",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{className:"ml-1 text-base",htmlFor:"name",children:"Name"}),e.jsx("input",{id:"name",className:"border p-2 rounded-xl",name:"name",value:t.name,onChange:o,type:"text",placeholder:"Name"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{className:"ml-1 text-base",htmlFor:"email",children:"Email"}),e.jsx("input",{id:"email",className:"border p-2 rounded-xl",name:"email",value:t.email,onChange:o,type:"email",placeholder:"Email"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{className:"ml-1 text-base",htmlFor:"Mobile",children:"Mobile"}),e.jsx("input",{id:"Mobile",className:"border p-2 rounded-xl",name:"mobile",value:t.mobile,onChange:o,type:"text",placeholder:"Mobile"})]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{className:"ml-1 text-base",htmlFor:"message",children:"Message"}),e.jsx("textarea",{name:"message",className:"border p-2 rounded-xl",id:"message",cols:"30",rows:"5",value:t.message,onChange:o,placeholder:"Message"})]}),e.jsx("div",{className:"",children:e.jsx("button",{className:"bg-red-500 text-white px-6 py-2 rounded-full block mx-auto",children:"Submit"})})]})})]})})},w=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{}),e.jsx(u,{}),e.jsx(j,{})]});export{w as default};