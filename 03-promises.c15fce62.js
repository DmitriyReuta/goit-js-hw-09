const e=document.querySelector(".form"),t=document.querySelector('[name="delay"]'),o=document.querySelector('[name="step"]'),n=document.querySelector('[name="amount"]');document.querySelector('button[type="submit"]');function u(e,t){return new Promise(((o,n)=>{const u=Math.random()>.3;setTimeout((()=>{u?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(e){e.preventDefault();let l=Number(t.value),r=Number(o.value),m=Number(n.value);for(let e=1;e<=m;e++){u(e,l+(e-1)*r).then((e=>{console.log(`✅ Fulfilled promise ${e.position} in ${e.delay}ms`)})).catch((e=>{console.log(`❌ Rejected promise ${e.position} in ${e.delay}ms`)}))}}));
//# sourceMappingURL=03-promises.c15fce62.js.map