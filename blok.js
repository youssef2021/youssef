function adBlockDetected(){function e(e,c){return e.classList?e.classList.contains(c):!!e.className.match(new RegExp("(\\s|^)"+c+"(\\s|$)"))}function c(c,t){c.classList?c.classList.add(t):e(c,t)||(c.className+=" "+t)}function t(c,t){if(c.classList)c.classList.remove(t);else if(e(c,t)){var o=new RegExp("(\\s|^)"+t+"(\\s|$)");c.className=c.className.replace(o," ")}}var o=document.querySelector(".adblockInfo"),s=document.querySelector(".adblockInfo__close");c(o,"is-active"),s.onclick=function(){t(o,"is-active")}}if("undefined"!=typeof fuckAdBlock||"undefined"!=typeof FuckAdBlock)adBlockDetected();else{var importFAB=document.createElement("script");importFAB.onload=function(){fuckAdBlock.onDetected(adBlockDetected)},importFAB.onerror=function(){adBlockDetected()},importFAB.integrity="sha256-xjwKUY/NgkPjZZBOtOxRYtK20GaqTwUCf7WYCJ1z69w=",importFAB.crossOrigin="anonymous",importFAB.src="https://raw.githack.com/youssef2021/youssef/master/adblok.js",document.head.appendChild(importFAB)}
