(function(a,r){typeof exports=="object"&&typeof module!="undefined"?r(exports):typeof define=="function"&&define.amd?define(["exports"],r):(a=typeof globalThis!="undefined"?globalThis:a||self,r(a.oncana={}))})(this,function(a){"use strict";const r=document.querySelector("#onboarding"),d=document.querySelector(".loader"),m=document.querySelector(".error-msg"),u=document.querySelector(".success-msg"),v=document.getElementById("select-cancer-type"),w=document.getElementById("select-cancer-stage"),T=document.getElementById("select-treatment-type"),S=document.getElementById("select-treatment-stage"),k=document.getElementById("select-eat"),E=document.getElementById("select-move"),C=document.getElementById("checkboxes-side-effect"),x=document.getElementById("checkboxes-live"),q=document.getElementById("image-input"),z=document.getElementById("image-preview");var $=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",form:r,loader:d,errorMsg:m,successMsg:u,cancerType:v,cancerStage:w,treatmentType:T,treatmentStage:S,eat:k,move:E,sideEffectWrapper:C,live:x,imageInput:q,imagePreview:z});const R=document.getElementsByClassName("cancer-type-item"),D=document.getElementsByClassName("cancer-stage-item"),J=document.getElementsByClassName("treatment-type-item"),K=document.getElementsByClassName("treatment-stage-item"),W=document.getElementsByClassName("side-effect-item"),H=document.getElementsByClassName("category-item"),B=()=>{I(),j(),d.style.display="flex",d.innerText="Loading"},O=()=>{d.style.display="none",d.innerText=""},_=(e,t)=>{console.log(e,t),m.style.display="flex",m.innerText=e,setTimeout(()=>{I()},3e3)},I=()=>{m.style.display="none",m.innerText=""},U=e=>{u.style.display="flex",u.innerText=e,setTimeout(()=>{j()},3e3)},j=()=>{u.style.display="none",u.innerText=""},y=(e,t,o)=>{e&&t&&o&&e.options.add(new Option(o,t))},f=(e,t,o)=>{const n=document.createElement("label"),c=document.createElement("input");c.type="checkbox",c.name=e,c.setAttribute("data-type",o);const s=document.createElement("span");s.className="checkmark";const l=document.createElement("span");return l.className="checktext",l.innerText=t,n.appendChild(c),n.appendChild(s),n.appendChild(l),n},p=(e,t)=>{Object.values(e).map(o=>{const n=o.children[0].innerText,c=o.children[1].innerText;y(t,c,n)})},F=(e,t,o)=>{Object.values(e).map(n=>{const c=n.children[0].innerText,s=n.children[1].innerText,l=f(s,c,o);t.appendChild(l)})};var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",addOption:y,addCheckBox:f,mapCollectionSelector:p,mapCollectionCheckBox:F});const Q=e=>e&&Object.values(e).map(t=>t.selected&&t.value).filter(t=>t),i=e=>e&&e[e.selectedIndex].value,V=e=>Object.values(e).map(t=>t.checked&&t.name).filter(t=>t),g=(e,t)=>Array.from(e).filter(o=>o.checked&&(t?o.getAttribute("data-type")===t:1)).map(o=>o.name).filter(o=>o);var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",multiSelect:Q,uniSelect:i,multiCheckbox:V,multiCheckboxFromEl:g});const Y=()=>{var n,c,s,l,A,P;const e=r.elements,t=r.querySelectorAll('input[type="checkbox"]');return{"webflow-id":e["webflow-id"].value,"first-name":e["first-name"].value,"last-name":e["last-name"].value,gender:i(e.gender.options)||"",dob:e.dob.value,postcode:e.postcode.value,"cancer-type":i((n=e["cancer-type"])==null?void 0:n.options)||"","cancer-stage":i((c=e["cancer-stage"])==null?void 0:c.options)||"","treatment-type":i((s=e["treatment-type"])==null?void 0:s.options)||"","treatment-stage":i((l=e["treatment-stage"])==null?void 0:l.options)||"","side-effects":g(t,"side-effect"),eat:i((A=e.eat)==null?void 0:A.options)||"",move:i((P=e.move)==null?void 0:P.options)||"",live:g(t,"live")}},Z=()=>{const e=r.elements,t=r.querySelectorAll('input[type="checkbox"]');return{"webflow-id":e["webflow-id"].value,"first-name":e["first-name"].value,"last-name":e["last-name"].value,dob:e.dob.value,gender:i(e.gender.options),"side-effects":g(t,"side-effect")}},b="https://kj2a61qk36.execute-api.ap-southeast-2.amazonaws.com/dev",ee=b+"/webflow",te=b+"/get-presigned-url",oe={"Content-Type":"application/json",Accept:"*"},M=(e,t)=>fetch(te,{method:"POST",body:JSON.stringify({filename:e,filetype:t})}),N=(e,t)=>fetch(e,{method:"PUT",headers:{Accept:"*","Content-Type":"image/png"},body:t}),h=e=>fetch(ee,{method:"PATCH",headers:oe,body:JSON.stringify(e)});var ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",api:b,getUploadUrl:M,uploadToS3:N,updateUser:h});const ce=async e=>new Blob([new Uint8Array(await e.arrayBuffer())],{type:e.type}),L=async e=>{const[t,o]=await Promise.all([ce(e),M(e.name,e.type)]);if(!o.ok)throw new Error("Could not get url upload");const{uploadUrl:n}=await o.json(),c=await N(n,t);if(!c.ok)throw new Error("Could not upload the image");return c.url},ae=(e,t)=>{e.addEventListener("change",o=>{t.src=URL.createObjectURL(o.target.files[0])}),t.addEventListener("load",()=>{URL.revokeObjectURL(t.src)})};var se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",uploadImage:L,previewImage:ae});const re=()=>{p(J,T),p(K,S),p(R,v),p(D,w),F(W,C,"side-effect"),Object.values(H).map(e=>{const t=e.children[0].innerText,o=e.children[1].innerText;switch(e.children[2].innerText){case"Eat":y(k,o,t);break;case"Move":y(E,o,t);break;case"Live":const c=f(o,t,"live");x.appendChild(c);break}})},le=async e=>{e.preventDefault(),B();try{const t=Y(),o=await h(t);if(!o.ok)throw new Error("Network response was not OK");U("Success");const n=await o.json();window.location.replace(window.location.href+"/user/"+n.result.slug)}catch(t){_("Could not update your information",t)}finally{O()}},ie=async e=>{var c;e.preventDefault(),B();const t=r.elements,o=Z();let n="";if(((c=t.pic)==null?void 0:c.files)&&t.pic.files[0])try{const s=t.pic.files[0],l=await L(s);o.image=l}catch(s){n="Could not upload your image",console.log(n,s)}try{if(!(await h(o)).ok)throw new Error("Network response was not OK");U("Success")}catch(s){_("Could not update your information",s)}finally{O()}};a.api=ne,a.cf=G,a.createFieldsFromCollections=re,a.gf=X,a.selector=$,a.submitOnboardingForm=le,a.submitProfessionalForm=ie,a.upload=se,Object.defineProperty(a,"__esModule",{value:!0}),a[Symbol.toStringTag]="Module"});