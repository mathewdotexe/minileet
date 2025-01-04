export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>Minileet</title>
  <base href="/minileet/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="minileet.ico">
<style>:root{--background-color: #f9f9f9;--card-background-color: #ffffff;--card-accent-color: #f4f4f4;--text-color: #333333;--primary-color: #4caf50;--error-color: #f44336;--shadow-color: rgba(0, 0, 0, .1);--button-primary-color: #007bff;--button-hover-color: #0056b3;--button-disabled-color: #d6d6d6}body{margin:0;font-family:Arial,sans-serif;background-color:var(--background-color);color:var(--text-color)}*{box-sizing:border-box}
</style><link rel="stylesheet" href="styles-B5WVONNE.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-B5WVONNE.css"></noscript><style ng-app-id="ng">.dark-mode-toggle[_ngcontent-ng-c3535943319]{position:fixed;top:20px;right:20px;padding:10px 20px;background-color:var(--card-background-color);color:var(--text-color);border:none;border-radius:8px;cursor:pointer;box-shadow:0 4px 6px var(--shadow-color);transition:background-color .3s,color .3s}.dark-mode-toggle[_ngcontent-ng-c3535943319]:hover{background-color:var(--primary-color);color:#fff}</style><style ng-app-id="ng">.layout[_ngcontent-ng-c425513472]{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto auto auto;gap:20px;padding:20px;background-color:var(--background-color)}.game-container[_ngcontent-ng-c425513472]{max-width:800px;margin:0 auto;display:flex;flex-direction:column;align-items:center;gap:20px}.carousel[_ngcontent-ng-c425513472]{display:flex;overflow:hidden;position:relative;max-width:800px;margin:0 auto}.slide[_ngcontent-ng-c425513472]{flex:0 0 100%;transition:transform .5s ease-in-out;transform:translate(100%);opacity:0;position:absolute;top:0;left:0}.slide.active[_ngcontent-ng-c425513472]{transform:translate(0);opacity:1;position:relative}.slide.inactive[_ngcontent-ng-c425513472]{opacity:0;transform:translate(100%)}.navigation-buttons[_ngcontent-ng-c425513472]{display:flex;justify-content:space-between;width:100%;max-width:500px;margin:20px auto}button[_ngcontent-ng-c425513472]{padding:10px 20px;font-size:1rem;font-weight:700;border:none;border-radius:8px;cursor:pointer;transition:background-color .3s,color .3s,transform .2s}button.next[_ngcontent-ng-c425513472], button.previous[_ngcontent-ng-c425513472]{background-color:var(--primary-color);color:#fff;box-shadow:0 4px 6px var(--shadow-color)}button[_ngcontent-ng-c425513472]:disabled{background-color:var(--card-accent-color);color:var(--text-color);cursor:not-allowed;opacity:.6}button[_ngcontent-ng-c425513472]:hover:not(:disabled){transform:translateY(-3px);box-shadow:0 6px 12px var(--shadow-color)}.progress-bar[_ngcontent-ng-c425513472]{width:100%;text-align:center;font-size:1rem;font-weight:700}.left-panel[_ngcontent-ng-c425513472], .right-panel[_ngcontent-ng-c425513472]{background-color:var(--card-background-color);border-radius:8px;padding:16px;box-shadow:0 4px 6px var(--shadow-color);color:var(--text-color)}.right-panel[_ngcontent-ng-c425513472]{display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.right-panel[_ngcontent-ng-c425513472]   h3[_ngcontent-ng-c425513472]{text-align:center;margin-bottom:20px;font-size:1.5rem;font-weight:700;color:var(--text-color)}.flashcards[_ngcontent-ng-c425513472]{display:flex;flex-wrap:wrap;justify-content:center;gap:20px;padding:20px}.console-log-panel[_ngcontent-ng-c425513472]{grid-column:span 2;background-color:var(--card-background-color);border-radius:8px;padding:20px;box-shadow:0 4px 6px var(--shadow-color);color:var(--text-color);position:relative}.console-log-panel[_ngcontent-ng-c425513472]   h4[_ngcontent-ng-c425513472]{margin-bottom:10px;font-size:1.2rem;font-weight:700}.console-log-panel[_ngcontent-ng-c425513472]   .console-log[_ngcontent-ng-c425513472]{padding:10px;background-color:var(--card-background-color);border-radius:8px;box-shadow:inset 0 2px 4px var(--shadow-color)}.console-log-panel[_ngcontent-ng-c425513472]   .generate-code-btn[_ngcontent-ng-c425513472]{position:absolute;top:10px;right:10px;background-color:#4caf50;color:#fff;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-size:1rem;text-align:center;transition:background-color .3s}.console-log-panel[_ngcontent-ng-c425513472]   .generate-code-btn[_ngcontent-ng-c425513472]:hover{background-color:#388e3c}.code-panel[_ngcontent-ng-c425513472]{position:relative;grid-column:span 2;margin:20px auto 0;width:100%;background-color:#1e1e1e;border:1px solid #333;border-radius:8px;box-shadow:0 4px 6px #0000004d;overflow:hidden}.code-panel[_ngcontent-ng-c425513472]   .code-header[_ngcontent-ng-c425513472]{background-color:#2d2d2d;border-bottom:1px solid #444;padding:10px;display:flex;align-items:center;justify-content:space-between}.code-panel[_ngcontent-ng-c425513472]   .code-header[_ngcontent-ng-c425513472]   .header-buttons[_ngcontent-ng-c425513472]{display:flex;gap:5px}.code-panel[_ngcontent-ng-c425513472]   .code-header[_ngcontent-ng-c425513472]   .header-buttons[_ngcontent-ng-c425513472]   .button[_ngcontent-ng-c425513472]{width:12px;height:12px;border-radius:50%}.code-panel[_ngcontent-ng-c425513472]   .code-header[_ngcontent-ng-c425513472]   .header-buttons[_ngcontent-ng-c425513472]   .close[_ngcontent-ng-c425513472]{background-color:#ff5f57}.code-panel[_ngcontent-ng-c425513472]   .code-header[_ngcontent-ng-c425513472]   .header-buttons[_ngcontent-ng-c425513472]   .minimize[_ngcontent-ng-c425513472]{background-color:#ffbd2e}.code-panel[_ngcontent-ng-c425513472]   .code-header[_ngcontent-ng-c425513472]   .header-buttons[_ngcontent-ng-c425513472]   .maximize[_ngcontent-ng-c425513472]{background-color:#28c940}.code-panel[_ngcontent-ng-c425513472]   .code-header[_ngcontent-ng-c425513472]   .code-title[_ngcontent-ng-c425513472]{font-family:Arial,sans-serif;font-size:14px;color:#ccc}.code-panel[_ngcontent-ng-c425513472]   .code-content[_ngcontent-ng-c425513472]{padding:20px;font-family:Courier New,monospace;color:#dcdcdc;white-space:pre-wrap;word-wrap:break-word;overflow-x:auto}.copy-btn[_ngcontent-ng-c425513472]{position:absolute;bottom:10px;right:10px;background-color:#4caf50;color:#fff;border:none;border-radius:5px;padding:8px 12px;cursor:pointer;font-size:14px;font-family:Arial,sans-serif;box-shadow:0 2px 4px #0003;transition:background-color .3s}.copy-btn[_ngcontent-ng-c425513472]:hover{background-color:#388e3c}.copy-btn[_ngcontent-ng-c425513472]:active{background-color:#2e7d32}.copy-notification[_ngcontent-ng-c425513472]{position:absolute;bottom:50px;right:10px;background-color:#323232;color:#fff;padding:10px 15px;border-radius:5px;box-shadow:0 2px 4px #0003;font-size:14px;opacity:0;animation:_ngcontent-ng-c425513472_fadeInOut 2s forwards}@keyframes _ngcontent-ng-c425513472_fadeInOut{0%{opacity:0;transform:translateY(10px)}10%,90%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}</style><style ng-app-id="ng">.flashcard[_ngcontent-ng-c3253263608]{background-color:var(--card-accent-color);border-radius:16px;box-shadow:0 6px 10px var(--shadow-color);width:200px;height:100px;text-align:center;font-size:1.1rem;font-weight:700;color:var(--text-color);cursor:pointer;transition:transform .3s ease,box-shadow .3s ease,background-color .3s ease;display:flex;justify-content:center;align-items:center}.flashcard[_ngcontent-ng-c3253263608]:hover{transform:translateY(-5px) scale(1.05);box-shadow:0 10px 20px var(--shadow-color)}.flashcard.selected[_ngcontent-ng-c3253263608]{background-color:var(--primary-color);color:#fff;box-shadow:0 8px 12px #0003}.flashcard.incorrect[_ngcontent-ng-c3253263608]{background-color:var(--error-color);color:#fff;box-shadow:0 8px 12px #0003}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","select"],[]);</script>
  <app-root _nghost-ng-c3535943319 ng-version="19.0.5" ngh="0" ng-server-context="ssg"><app-game _ngcontent-ng-c3535943319 _nghost-ng-c425513472 ngh="1"><div _ngcontent-ng-c425513472 class="game-container"><div _ngcontent-ng-c425513472 class="progress-bar"><p _ngcontent-ng-c425513472>Progress: 1 / 3</p></div><div _ngcontent-ng-c425513472 class="carousel"><div _ngcontent-ng-c425513472 class="slide active"><div _ngcontent-ng-c425513472 class="layout"><div _ngcontent-ng-c425513472 class="left-panel"><h3 _ngcontent-ng-c425513472>Problem</h3><p _ngcontent-ng-c425513472>Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`. You may assume that each input would have exactly one solution, and you may not use the same element twice.</p><h4 _ngcontent-ng-c425513472>Example Input:</h4><pre _ngcontent-ng-c425513472>nums = [2, 7, 11, 15], target = 9</pre><h4 _ngcontent-ng-c425513472>Example Output:</h4><pre _ngcontent-ng-c425513472>[0, 1]</pre></div><div _ngcontent-ng-c425513472 class="right-panel"><h3 _ngcontent-ng-c425513472>Choose Your Solution</h3><div _ngcontent-ng-c425513472 class="flashcards"><app-flashcard _ngcontent-ng-c425513472 _nghost-ng-c3253263608 ngh="0" jsaction="select:;"><div _ngcontent-ng-c3253263608 class="flashcard" jsaction="click:;"><h4 _ngcontent-ng-c3253263608>Hashing</h4></div></app-flashcard><app-flashcard _ngcontent-ng-c425513472 _nghost-ng-c3253263608 ngh="0" jsaction="select:;"><div _ngcontent-ng-c3253263608 class="flashcard" jsaction="click:;"><h4 _ngcontent-ng-c3253263608>Two Pointers</h4></div></app-flashcard><!----></div></div><div _ngcontent-ng-c425513472 class="console-log-panel"><h4 _ngcontent-ng-c425513472>Console Log:</h4><p _ngcontent-ng-c425513472 class="placeholder-text">Waiting for your selection...</p><!----><!----><!----></div><!----></div></div><div _ngcontent-ng-c425513472 class="slide inactive"><div _ngcontent-ng-c425513472 class="layout"><div _ngcontent-ng-c425513472 class="left-panel"><h3 _ngcontent-ng-c425513472>Problem</h3><p _ngcontent-ng-c425513472>Given a string \`s\`, find the length of the longest substring without repeating characters.</p><h4 _ngcontent-ng-c425513472>Example Input:</h4><pre _ngcontent-ng-c425513472>s = "abcabcbb"</pre><h4 _ngcontent-ng-c425513472>Example Output:</h4><pre _ngcontent-ng-c425513472>3</pre></div><div _ngcontent-ng-c425513472 class="right-panel"><h3 _ngcontent-ng-c425513472>Choose Your Solution</h3><div _ngcontent-ng-c425513472 class="flashcards"><app-flashcard _ngcontent-ng-c425513472 _nghost-ng-c3253263608 ngh="0" jsaction="select:;"><div _ngcontent-ng-c3253263608 class="flashcard" jsaction="click:;"><h4 _ngcontent-ng-c3253263608>Sliding Window</h4></div></app-flashcard><app-flashcard _ngcontent-ng-c425513472 _nghost-ng-c3253263608 ngh="0" jsaction="select:;"><div _ngcontent-ng-c3253263608 class="flashcard" jsaction="click:;"><h4 _ngcontent-ng-c3253263608>Two Pointers</h4></div></app-flashcard><!----></div></div><div _ngcontent-ng-c425513472 class="console-log-panel"><h4 _ngcontent-ng-c425513472>Console Log:</h4><p _ngcontent-ng-c425513472 class="placeholder-text">Waiting for your selection...</p><!----><!----><!----></div><!----></div></div><div _ngcontent-ng-c425513472 class="slide inactive"><div _ngcontent-ng-c425513472 class="layout"><div _ngcontent-ng-c425513472 class="left-panel"><h3 _ngcontent-ng-c425513472>Problem</h3><p _ngcontent-ng-c425513472>Given two sorted arrays \`nums1\` and \`nums2\` of size \`m\` and \`n\` respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).</p><h4 _ngcontent-ng-c425513472>Example Input:</h4><pre _ngcontent-ng-c425513472>nums1 = [1,3], nums2 = [2]</pre><h4 _ngcontent-ng-c425513472>Example Output:</h4><pre _ngcontent-ng-c425513472>2.0</pre></div><div _ngcontent-ng-c425513472 class="right-panel"><h3 _ngcontent-ng-c425513472>Choose Your Solution</h3><div _ngcontent-ng-c425513472 class="flashcards"><app-flashcard _ngcontent-ng-c425513472 _nghost-ng-c3253263608 ngh="0" jsaction="select:;"><div _ngcontent-ng-c3253263608 class="flashcard" jsaction="click:;"><h4 _ngcontent-ng-c3253263608>Binary Search</h4></div></app-flashcard><app-flashcard _ngcontent-ng-c425513472 _nghost-ng-c3253263608 ngh="0" jsaction="select:;"><div _ngcontent-ng-c3253263608 class="flashcard" jsaction="click:;"><h4 _ngcontent-ng-c3253263608>Merge Arrays</h4></div></app-flashcard><!----></div></div><div _ngcontent-ng-c425513472 class="console-log-panel"><h4 _ngcontent-ng-c425513472>Console Log:</h4><p _ngcontent-ng-c425513472 class="placeholder-text">Waiting for your selection...</p><!----><!----><!----></div><!----></div></div><!----></div><div _ngcontent-ng-c425513472 class="navigation-buttons"><button _ngcontent-ng-c425513472 class="previous" disabled jsaction="click:;"> Previous Question </button><button _ngcontent-ng-c425513472 class="next" jsaction="click:;"> Next Question </button></div></div></app-game><button _ngcontent-ng-c3535943319 class="dark-mode-toggle" jsaction="click:;"> 🌙 Dark Mode
</button></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-R7GA5H7B.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"t":{"5":"t0"},"c":{"5":[{"i":"t0","r":1,"t":{"19":"t1","23":"t2","24":"t3","26":"t4","27":"t5"},"c":{"19":[{"i":"t1","r":1,"x":2}],"23":[{"i":"t3","r":1}],"24":[],"26":[],"27":[]},"x":3}]}}]}</script></body></html>`;