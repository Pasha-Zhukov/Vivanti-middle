import{r as l,u as m,j as s,a as d,n as x}from"./index-bT1GCquA.js";import{B as p,a as f}from"./ButtonPrev-I79bejUU.js";/* empty css                */const h="/Vivanti-middle/assets/img-3-BvjgZmAi.svg";function b(){const[e,n]=l.useState(""),[o,t]=l.useState(!0),a=m(),c=i=>{const u=i.target.value;/^\d{0,2}$/.test(u)?(n(i.target.value),t(!0)):t(!1)},r=()=>{e?(a(d(e)),a(x())):t(!1),n("")};return s.jsx("div",{className:"bg-questions p-3",children:s.jsxs("div",{className:"d-flex flex-column flex-lg-row flex-column-reverse  justify-content-between ",children:[s.jsxs("div",{className:"bg-questions d-flex flex-column justify-content-between mt-lg-0 mt-3",children:[s.jsx("div",{className:"fw-bold",children:"Вопрос 2/8"}),s.jsx("h5",{className:"mb-0",children:"Рассчитайте индекс массы тела пациента"}),s.jsxs("div",{className:"width-input",children:["Индекс массы тела позволяет выявить наличие избыточного веса или ожирения ",s.jsx("br",{}),"(ИМТ = вес, кг / рост, м^2). Если у Вас не получается произвести расчет самостоятельно, воспользуйтесь",s.jsx("a",{target:"_blank",href:"https://clinic-cvetkov.ru/company/kalkulyator-imt/",children:"специальным калькулятором."})]}),s.jsx("input",{className:o?"p-2 pe-5 bg-questions width-input":"p-2 pe-5 bg-questions width-input invalid",type:"number",placeholder:"Текст",value:e,onChange:c}),s.jsxs("p",{className:"text-body-secondary fs-13 m-0",children:["Менее 25 кг/м2 (0 баллов), 25—30 кг/м2 (1 балл), ",s.jsx("br",{}),"больше 30 кг/м2 (3 балла)"]}),s.jsxs("div",{className:"d-flex flex-column flex-lg-row flex-column-reverse gap-3 mt-3",children:[s.jsx(p,{}),s.jsx(f,{onClick:r,answer:e})]})]}),s.jsx("img",{className:"img-question",src:h,alt:"img"})]})})}export{b as default};