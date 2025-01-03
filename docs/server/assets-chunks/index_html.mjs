export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>MinileetGame</title>
  <base href="/minileet/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<style>:root{--background-color: #f9f9f9;--card-background-color: #ffffff;--card-accent-color: #f4f4f4;--text-color: #333333;--primary-color: #4caf50;--error-color: #f44336;--shadow-color: rgba(0, 0, 0, .1);--button-primary-color: #007bff;--button-hover-color: #0056b3;--button-disabled-color: #d6d6d6}body{margin:0;font-family:Arial,sans-serif;background-color:var(--background-color);color:var(--text-color)}*{box-sizing:border-box}
</style><link rel="stylesheet" href="styles-B5WVONNE.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-B5WVONNE.css"></noscript><style ng-app-id="ng">.dark-mode-toggle[_ngcontent-ng-c3535943319]{position:fixed;top:20px;right:20px;padding:10px 20px;background-color:var(--card-background-color);color:var(--text-color);border:none;border-radius:8px;cursor:pointer;box-shadow:0 4px 6px var(--shadow-color);transition:background-color .3s,color .3s}.dark-mode-toggle[_ngcontent-ng-c3535943319]:hover{background-color:var(--primary-color);color:#fff}</style><style ng-app-id="ng">.layout[_ngcontent-ng-c2607071870]{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto 1fr;gap:20px;padding:20px;background-color:var(--background-color)}.game-container[_ngcontent-ng-c2607071870]{max-width:800px;margin:0 auto;display:flex;flex-direction:column;align-items:center;gap:20px}.carousel[_ngcontent-ng-c2607071870]{display:flex;overflow:hidden;position:relative;max-width:800px;margin:0 auto}.slide[_ngcontent-ng-c2607071870]{flex:0 0 100%;transition:transform .5s ease-in-out;transform:translate(100%);opacity:0;position:absolute;top:0;left:0}.slide.active[_ngcontent-ng-c2607071870]{transform:translate(0);opacity:1;position:relative}.slide.inactive[_ngcontent-ng-c2607071870]{opacity:0;transform:translate(100%)}.navigation-buttons[_ngcontent-ng-c2607071870]{display:flex;justify-content:space-between;width:100%;max-width:500px;margin:20px auto}button[_ngcontent-ng-c2607071870]{padding:10px 20px;font-size:1rem;font-weight:700;border:none;border-radius:8px;cursor:pointer;transition:background-color .3s,color .3s,transform .2s}button.next[_ngcontent-ng-c2607071870], button.previous[_ngcontent-ng-c2607071870]{background-color:var(--primary-color);color:#fff;box-shadow:0 4px 6px var(--shadow-color)}button[_ngcontent-ng-c2607071870]:disabled{background-color:var(--card-accent-color);color:var(--text-color);cursor:not-allowed;opacity:.6}button[_ngcontent-ng-c2607071870]:hover:not(:disabled){transform:translateY(-3px);box-shadow:0 6px 12px var(--shadow-color)}.progress-bar[_ngcontent-ng-c2607071870]{width:100%;text-align:center;font-size:1rem;font-weight:700}.left-panel[_ngcontent-ng-c2607071870]{background-color:var(--card-background-color);border-radius:8px;padding:16px;box-shadow:0 4px 6px var(--shadow-color);color:var(--text-color)}.right-panel[_ngcontent-ng-c2607071870]{background-color:var(--card-background-color);border-radius:8px;padding:16px;box-shadow:0 4px 6px var(--shadow-color);display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.right-panel[_ngcontent-ng-c2607071870]   h3[_ngcontent-ng-c2607071870]{text-align:center;margin-bottom:20px;font-size:1.5rem;font-weight:700;color:var(--text-color)}.flashcards[_ngcontent-ng-c2607071870]{display:flex;flex-wrap:wrap;justify-content:center;gap:20px;padding:20px}.bottom-panel[_ngcontent-ng-c2607071870]{grid-column:span 2;margin-top:20px;background-color:var(--card-background-color);border-radius:8px;padding:20px;box-shadow:0 4px 6px var(--shadow-color);color:var(--text-color)}.bottom-panel[_ngcontent-ng-c2607071870]   h4[_ngcontent-ng-c2607071870]{margin-bottom:10px;font-size:1.2rem;font-weight:700}.bottom-panel[_ngcontent-ng-c2607071870]   .console-log[_ngcontent-ng-c2607071870]{padding:10px;background-color:var(--card-background-color);border-radius:8px;box-shadow:inset 0 2px 4px var(--shadow-color)}.bottom-panel[_ngcontent-ng-c2607071870]   .console-log[_ngcontent-ng-c2607071870]   p[_ngcontent-ng-c2607071870]{margin:5px 0;font-size:1rem;line-height:1.5}.bottom-panel[_ngcontent-ng-c2607071870]   .console-log[_ngcontent-ng-c2607071870]   p.status[_ngcontent-ng-c2607071870]{font-size:1.2rem;font-weight:700}.bottom-panel[_ngcontent-ng-c2607071870]   .console-log[_ngcontent-ng-c2607071870]   p.status.correct[_ngcontent-ng-c2607071870]{color:var(--primary-color)}.bottom-panel[_ngcontent-ng-c2607071870]   .console-log[_ngcontent-ng-c2607071870]   p.status.incorrect[_ngcontent-ng-c2607071870]{color:var(--error-color)}.bottom-panel[_ngcontent-ng-c2607071870]   .console-log[_ngcontent-ng-c2607071870]   p[_ngcontent-ng-c2607071870]   strong[_ngcontent-ng-c2607071870]{color:var(--primary-color)}</style><style ng-app-id="ng">.flashcard[_ngcontent-ng-c3253263608]{background-color:var(--card-accent-color);border-radius:16px;box-shadow:0 6px 10px var(--shadow-color);width:200px;height:100px;text-align:center;font-size:1.1rem;font-weight:700;color:var(--text-color);cursor:pointer;transition:transform .3s ease,box-shadow .3s ease,background-color .3s ease;display:flex;justify-content:center;align-items:center}.flashcard[_ngcontent-ng-c3253263608]:hover{transform:translateY(-5px) scale(1.05);box-shadow:0 10px 20px var(--shadow-color)}.flashcard.selected[_ngcontent-ng-c3253263608]{background-color:var(--primary-color);color:#fff;box-shadow:0 8px 12px #0003}.flashcard.incorrect[_ngcontent-ng-c3253263608]{background-color:var(--error-color);color:#fff;box-shadow:0 8px 12px #0003}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","select"],[]);</script>
  <app-root _nghost-ng-c3535943319 ng-version="19.0.5" ngh="0" ng-server-context="ssg"><app-game _ngcontent-ng-c3535943319 _nghost-ng-c2607071870 ngh="1"><div _ngcontent-ng-c2607071870 class="game-container"><div _ngcontent-ng-c2607071870 class="progress-bar"><p _ngcontent-ng-c2607071870>Progress: 1 / 3</p></div><div _ngcontent-ng-c2607071870 class="carousel"><div _ngcontent-ng-c2607071870 class="slide active"><div _ngcontent-ng-c2607071870 class="layout"><div _ngcontent-ng-c2607071870 class="left-panel"><h3 _ngcontent-ng-c2607071870>Problem</h3><p _ngcontent-ng-c2607071870>Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`. You may assume that each input would have exactly one solution, and you may not use the same element twice.</p><h4 _ngcontent-ng-c2607071870>Example Input:</h4><pre _ngcontent-ng-c2607071870>nums = [2, 7, 11, 15], target = 9</pre><h4 _ngcontent-ng-c2607071870>Example Output:</h4><pre _ngcontent-ng-c2607071870>[0, 1]</pre></div><div _ngcontent-ng-c2607071870 class="right-panel"><h3 _ngcontent-ng-c2607071870>Choose Your Solution</h3><div _ngcontent-ng-c2607071870 class="flashcards"><app-flashcard _ngcontent-ng-c2607071870 _nghost-ng-c3253263608 ngh="0" jsaction="select:;"><div _ngcontent-ng-c3253263608 class="flashcard" jsaction="click:;"><h4 _ngcontent-ng-c3253263608>Hashing</h4></div></app-flashcard><app-flashcard _ngcontent-ng-c2607071870 _nghost-ng-c3253263608 ngh="0" jsaction="select:;"><div _ngcontent-ng-c3253263608 class="flashcard" jsaction="click:;"><h4 _ngcontent-ng-c3253263608>Two Pointers</h4></div></app-flashcard><!----></div></div><div _ngcontent-ng-c2607071870 class="bottom-panel"><h4 _ngcontent-ng-c2607071870>Console Log:</h4><p _ngcontent-ng-c2607071870 class="placeholder-text">Waiting for your selection...</p><!----><!----></div></div></div><div _ngcontent-ng-c2607071870 class="slide inactive"><div _ngcontent-ng-c2607071870 class="layout"><div _ngcontent-ng-c2607071870 class="left-panel"><h3 _ngcontent-ng-c2607071870>Problem</h3><p _ngcontent-ng-c2607071870>Given a string \`s\`, find the length of the longest substring without repeating characters.</p><h4 _ngcontent-ng-c2607071870>Example Input:</h4><pre _ngcontent-ng-c2607071870>s = "abcabcbb"</pre><h4 _ngcontent-ng-c2607071870>Example Output:</h4><pre _ngcontent-ng-c2607071870>3</pre></div><div _ngcontent-ng-c2607071870 class="right-panel"><h3 _ngcontent-ng-c2607071870>Choose Your Solution</h3><div _ngcontent-ng-c2607071870 class="flashcards"><app-flashcard _ngcontent-ng-c2607071870 _nghost-ng-c3253263608 ngh="0" jsaction="select:;"><div _ngcontent-ng-c3253263608 class="flashcard" jsaction="click:;"><h4 _ngcontent-ng-c3253263608>Sliding Window</h4></div></app-flashcard><app-flashcard _ngcontent-ng-c2607071870 _nghost-ng-c3253263608 ngh="0" jsaction="select:;"><div _ngcontent-ng-c3253263608 class="flashcard" jsaction="click:;"><h4 _ngcontent-ng-c3253263608>Two Pointers</h4></div></app-flashcard><!----></div></div><div _ngcontent-ng-c2607071870 class="bottom-panel"><h4 _ngcontent-ng-c2607071870>Console Log:</h4><p _ngcontent-ng-c2607071870 class="placeholder-text">Waiting for your selection...</p><!----><!----></div></div></div><div _ngcontent-ng-c2607071870 class="slide inactive"><div _ngcontent-ng-c2607071870 class="layout"><div _ngcontent-ng-c2607071870 class="left-panel"><h3 _ngcontent-ng-c2607071870>Problem</h3><p _ngcontent-ng-c2607071870>Given two sorted arrays \`nums1\` and \`nums2\` of size \`m\` and \`n\` respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).</p><h4 _ngcontent-ng-c2607071870>Example Input:</h4><pre _ngcontent-ng-c2607071870>nums1 = [1,3], nums2 = [2]</pre><h4 _ngcontent-ng-c2607071870>Example Output:</h4><pre _ngcontent-ng-c2607071870>2.0</pre></div><div _ngcontent-ng-c2607071870 class="right-panel"><h3 _ngcontent-ng-c2607071870>Choose Your Solution</h3><div _ngcontent-ng-c2607071870 class="flashcards"><app-flashcard _ngcontent-ng-c2607071870 _nghost-ng-c3253263608 ngh="0" jsaction="select:;"><div _ngcontent-ng-c3253263608 class="flashcard" jsaction="click:;"><h4 _ngcontent-ng-c3253263608>Binary Search</h4></div></app-flashcard><app-flashcard _ngcontent-ng-c2607071870 _nghost-ng-c3253263608 ngh="0" jsaction="select:;"><div _ngcontent-ng-c3253263608 class="flashcard" jsaction="click:;"><h4 _ngcontent-ng-c3253263608>Merge Arrays</h4></div></app-flashcard><!----></div></div><div _ngcontent-ng-c2607071870 class="bottom-panel"><h4 _ngcontent-ng-c2607071870>Console Log:</h4><p _ngcontent-ng-c2607071870 class="placeholder-text">Waiting for your selection...</p><!----><!----></div></div></div><!----></div><div _ngcontent-ng-c2607071870 class="navigation-buttons"><button _ngcontent-ng-c2607071870 class="previous" disabled jsaction="click:;"> Previous Question </button><button _ngcontent-ng-c2607071870 class="next" jsaction="click:;"> Next Question </button></div></div></app-game><button _ngcontent-ng-c3535943319 class="dark-mode-toggle" jsaction="click:;"> 🌙 Dark Mode
</button></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-EA5BGFST.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"t":{"5":"t0"},"c":{"5":[{"i":"t0","r":1,"t":{"19":"t1","23":"t2","24":"t3"},"c":{"19":[{"i":"t1","r":1,"x":2}],"23":[{"i":"t3","r":1}],"24":[]},"x":3}]}}]}</script></body></html>`;