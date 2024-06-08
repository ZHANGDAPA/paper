import{d as C,y as B,o as a,b as k,f as D,h as A,t as _,ac as T,c as b,k as h,e,l as n,x,g as m,r as S,m as y,q as $,s as N,A as v,a6 as r}from"../modules/vue-uvdIgQm2.js";import{_ as f,d as q,ad as w}from"../index-etgzCgYH.js";import{D as F}from"../modules/unplugin-icons-DZotwfbM.js";import{_ as V}from"./CodeBlockWrapper-DO2kb8Y3.js";import{I as z}from"./default-Du9UpcD2.js";import{p as P,u as E,f as R}from"./context-BEeGzwOE.js";import"../modules/shiki-BhEdCg85.js";const j=C({__name:"Transform",props:{scale:{type:[Number,String],required:!1},origin:{type:String,required:!1}},setup(l){const t=l,o=B(()=>{const s=[];return t.scale!=null&&s.push(`scale(${t.scale||1})`),{transform:s.join(" "),"transform-origin":t.origin||"top left"}});return(s,i)=>(a(),k("div",{style:A(o.value)},[D(s.$slots,"default")],4))}}),I=f(j,[["__file","C:/Users/zhw/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/builtin/Transform.vue"]]),U={key:0,class:"w-30 h-30 my-10px bg-gray-400 bg-opacity-10 rounded-lg flex opacity-50"},W={class:"m-auto animate-pulse text-4xl"},Y={key:0},L=C({__name:"Tweet",props:{id:{type:[String,Number],required:!0},scale:{type:[String,Number],required:!1},conversation:{type:String,required:!1},cards:{type:String,required:!1}},setup(l){const t=l,o=_(),s=_(!1),i=_(!1);async function d(c=10){var u,p;if(!((p=(u=window.twttr)==null?void 0:u.widgets)!=null&&p.createTweet)){if(c<=0)return console.error("Failed to load Twitter widget after 10 retries.");setTimeout(()=>d(c-1),1e3);return}const g=await window.twttr.widgets.createTweet(t.id.toString(),o.value,{theme:q.value?"dark":"light",conversation:t.conversation||"none",cards:t.cards});s.value=!0,g===void 0&&(i.value=!0)}return T(()=>{d()}),(c,g)=>{const u=F,p=I;return a(),b(p,{scale:c.scale||1},{default:h(()=>[e("div",{ref_key:"tweet",ref:o,class:"tweet slidev-tweet"},[!s.value||i.value?(a(),k("div",U,[e("div",W,[n(u),i.value?(a(),k("span",Y,'Could not load tweet with id="'+x(t.id)+'"',1)):m("v-if",!0)])])):m("v-if",!0)],512)]),_:1},8,["scale"])}}}),M=f(L,[["__file","C:/Users/zhw/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/builtin/Tweet.vue"]]),G=e("h1",null,"Components",-1),H={grid:"~ cols-2 gap-4"},J=e("p",null,"You can use Vue components directly inside your slides.",-1),K=e("p",null,[r("We have provided a few built-in components like "),e("code",null,"<Tweet/>"),r(" and "),e("code",null,"<Youtube/>"),r(" that you can use directly. And adding your custom components is also super easy.")],-1),O=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-html"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),e("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"Counter"),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," :count"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),e("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),e("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"10"),e("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," />")])])],-1),Q=e("p",null,[r("Check out "),e("a",{href:"https://sli.dev/builtin/components.html",target:"_blank",rel:"noopener"},"the guides"),r(" for more.")],-1),X=e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-html"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),e("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"Tweet"),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," id"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),e("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),e("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"1390115482657726468"),e("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," />")])])],-1),Z={__name:"6",setup(l){return P(w),E(),(t,o)=>{const s=V,i=S("Counter"),d=M;return a(),b(z,$(N(v(R)(v(w),5))),{default:h(()=>[G,e("div",H,[e("div",null,[J,K,n(s,y({},{ranges:[]}),{default:h(()=>[O]),_:1},16),m(" ./components/Counter.vue "),n(i,{count:10,m:"t-4"}),Q]),e("div",null,[n(s,y({},{ranges:[]}),{default:h(()=>[X]),_:1},16),n(d,{id:"1390115482657726468",scale:"0.65"})])])]),_:1},16)}}},re=f(Z,[["__file","/@slidev/slides/6.md"]]);export{re as default};