!function(){var e=document.querySelector(".form"),o=document.querySelector('[name="delay"]'),n=document.querySelector('[name="step"]'),t=document.querySelector('[name="amount"]');document.querySelector('button[type="submit"]');function u(e,o){return new Promise((function(n,t){var u=Math.random()>.3;setTimeout((function(){u?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}e.addEventListener("submit",(function(e){e.preventDefault();for(var c=Number(o.value),r=Number(n.value),i=Number(t.value),a=1;a<=i;a++){u(a,c+(a-1)*r).then((function(e){console.log("✅ Fulfilled promise ".concat(e.position," in ").concat(e.delay,"ms"))})).catch((function(e){console.log("❌ Rejected promise ".concat(e.position," in ").concat(e.delay,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.eef34a0f.js.map
