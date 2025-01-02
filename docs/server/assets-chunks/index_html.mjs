export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>MinileetGame</title>
  <base href="/minileet/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<style>:root{--background-color: #f9f9f9;--card-background-color: #ffffff;--card-accent-color: #f4f4f4;--text-color: #333333;--primary-color: #4caf50;--error-color: #f44336;--shadow-color: rgba(0, 0, 0, .1)}body{margin:0;font-family:Arial,sans-serif;background-color:var(--background-color);color:var(--text-color)}*{box-sizing:border-box}
</style><link rel="stylesheet" href="styles-NXBXHMPL.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-NXBXHMPL.css"></noscript><style ng-app-id="ng">.dark-mode-toggle[_ngcontent-ng-c3535943319]{position:fixed;top:20px;right:20px;padding:10px 20px;background-color:var(--card-background-color);color:var(--text-color);border:none;border-radius:8px;cursor:pointer;box-shadow:0 4px 6px var(--shadow-color);transition:background-color .3s,color .3s}.dark-mode-toggle[_ngcontent-ng-c3535943319]:hover{background-color:var(--primary-color);color:#fff}</style><style ng-app-id="ng">.layout[_ngcontent-ng-c359416054]{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto 1fr;gap:20px;padding:20px;background-color:var(--background-color)}.left-panel[_ngcontent-ng-c359416054]{background-color:var(--card-background-color);border-radius:8px;padding:16px;box-shadow:0 4px 6px var(--shadow-color);color:var(--text-color)}.right-panel[_ngcontent-ng-c359416054]{background-color:var(--card-background-color);border-radius:8px;padding:16px;box-shadow:0 4px 6px var(--shadow-color);display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.right-panel[_ngcontent-ng-c359416054]   h3[_ngcontent-ng-c359416054]{text-align:center;margin-bottom:20px;font-size:1.5rem;font-weight:700;color:var(--text-color)}.flashcards[_ngcontent-ng-c359416054]{display:flex;flex-wrap:wrap;justify-content:center;gap:20px;padding:20px}.bottom-panel[_ngcontent-ng-c359416054]{grid-column:span 2;margin-top:20px;background-color:var(--card-background-color);border-radius:8px;padding:20px;box-shadow:0 4px 6px var(--shadow-color);color:var(--text-color)}.bottom-panel[_ngcontent-ng-c359416054]   h4[_ngcontent-ng-c359416054]{margin-bottom:10px;font-size:1.2rem;font-weight:700}.bottom-panel[_ngcontent-ng-c359416054]   .console-log[_ngcontent-ng-c359416054]{padding:10px;background-color:var(--card-background-color);border-radius:8px;box-shadow:inset 0 2px 4px var(--shadow-color)}.bottom-panel[_ngcontent-ng-c359416054]   .console-log[_ngcontent-ng-c359416054]   p[_ngcontent-ng-c359416054]{margin:5px 0;font-size:1rem;line-height:1.5}.bottom-panel[_ngcontent-ng-c359416054]   .console-log[_ngcontent-ng-c359416054]   p.status[_ngcontent-ng-c359416054]{font-size:1.2rem;font-weight:700}.bottom-panel[_ngcontent-ng-c359416054]   .console-log[_ngcontent-ng-c359416054]   p.status.correct[_ngcontent-ng-c359416054]{color:var(--primary-color)}.bottom-panel[_ngcontent-ng-c359416054]   .console-log[_ngcontent-ng-c359416054]   p.status.incorrect[_ngcontent-ng-c359416054]{color:var(--error-color)}.bottom-panel[_ngcontent-ng-c359416054]   .console-log[_ngcontent-ng-c359416054]   p[_ngcontent-ng-c359416054]   strong[_ngcontent-ng-c359416054]{color:var(--primary-color)}</style><style ng-app-id="ng">.flashcard[_ngcontent-ng-c3253263608]{background-color:var(--card-accent-color);border-radius:16px;box-shadow:0 6px 10px var(--shadow-color);width:200px;height:100px;text-align:center;font-size:1.1rem;font-weight:700;color:var(--text-color);cursor:pointer;transition:transform .3s ease,box-shadow .3s ease,background-color .3s ease;display:flex;justify-content:center;align-items:center}.flashcard[_ngcontent-ng-c3253263608]:hover{transform:translateY(-5px) scale(1.05);box-shadow:0 10px 20px var(--shadow-color)}.flashcard.selected[_ngcontent-ng-c3253263608]{background-color:var(--primary-color);color:#fff;box-shadow:0 8px 12px #0003}.flashcard.incorrect[_ngcontent-ng-c3253263608]{background-color:var(--error-color);color:#fff;box-shadow:0 8px 12px #0003}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","select"],[]);</script>
  <app-root _nghost-ng-c3535943319 ng-version="19.0.5" ngh="0" ng-server-context="ssg"><app-game _ngcontent-ng-c3535943319 _nghost-ng-c359416054 ngh="1"><div _ngcontent-ng-c359416054 class="layout"><div _ngcontent-ng-c359416054 class="left-panel"><h3 _ngcontent-ng-c359416054>Problem</h3><p _ngcontent-ng-c359416054>Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`. You may assume that each input would have exactly one solution, and you may not use the same element twice.</p><h4 _ngcontent-ng-c359416054>Example Input:</h4><pre _ngcontent-ng-c359416054>nums = [2, 7, 11, 15], target = 9</pre><h4 _ngcontent-ng-c359416054>Example Output:</h4><pre _ngcontent-ng-c359416054>[0, 1]</pre></div><div _ngcontent-ng-c359416054 class="right-panel"><h3 _ngcontent-ng-c359416054>Choose Your Solution</h3><div _ngcontent-ng-c359416054 class="flashcards"><app-flashcard _ngcontent-ng-c359416054 _nghost-ng-c3253263608 ngh="0" jsaction="select:;"><div _ngcontent-ng-c3253263608 class="flashcard" jsaction="click:;"><h4 _ngcontent-ng-c3253263608>Hashing</h4></div></app-flashcard><app-flashcard _ngcontent-ng-c359416054 _nghost-ng-c3253263608 ngh="0" jsaction="select:;"><div _ngcontent-ng-c3253263608 class="flashcard" jsaction="click:;"><h4 _ngcontent-ng-c3253263608>Two-Pointers</h4></div></app-flashcard><!----></div></div><div _ngcontent-ng-c359416054 class="bottom-panel"><h4 _ngcontent-ng-c359416054>Console Log:</h4><p _ngcontent-ng-c359416054 class="placeholder-text"></p><!----><!----></div></div></app-game><button _ngcontent-ng-c3535943319 class="dark-mode-toggle" jsaction="click:;"> 🌙 Dark Mode
</button></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-CD666JNI.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"t":{"18":"t0","22":"t1","23":"t2"},"c":{"18":[{"i":"t0","r":1,"x":2}],"22":[{"i":"t2","r":1}],"23":[]}}]}</script></body></html>`;