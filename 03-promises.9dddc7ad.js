document.querySelector(".form");const e=document.querySelector('[name="delay"]'),o=document.querySelector('[name="step"]'),t=document.querySelector('[name="amount"]');document.querySelector('button[type="submit"]').addEventListener("click",(function(n){n.preventDefault();let u=Number(e.value),l=Number(o.value),i=Number(t.value),c=1;!function e(){if(c<=i){(function(e,o){return new Promise(((t,n)=>{const u=Math.random()>.3;setTimeout((()=>{u?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))})(c,u+(c-1)*l).then((e=>{console.log(`✅ Fulfilled promise ${e.position} in ${e.delay}ms`)})).catch((e=>{console.log(`❌ Rejected promise ${e.position} in ${e.delay}ms`)})).finally((()=>{u+=l,c++,e()}))}}()}));
//# sourceMappingURL=03-promises.9dddc7ad.js.map
