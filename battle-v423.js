window.__BK_BATTLE_BUILD__="V423";
// 文豪綺譚 V411: battle-only legacy enhancements.
// Loaded lazily on first battle entry to keep home startup fast.
// v328-script
(()=>{
 const roster=[
  {key:'dazai',hair:'#18212e',hair2:'#34455b',coat:'#273f59',coat2:'#111a24',skin:'#f0d7c8',accent:'#c9a968',book:1},
  {key:'chuuya',hair:'#6c4330',hair2:'#b17855',coat:'#6b2937',coat2:'#241016',skin:'#f1d1bd',accent:'#d4a166',hat:1},
  {key:'akutagawa',hair:'#151923',hair2:'#5a6472',coat:'#2a2133',coat2:'#0e0d14',skin:'#ead7cd',accent:'#a880dd',blade:1},
  {key:'kenji',hair:'#bea97d',hair2:'#e2d5b6',coat:'#536a5b',coat2:'#28362e',skin:'#efd9c0',accent:'#e8c968',star:1},
  {key:'ranpo',hair:'#151c25',hair2:'#495866',coat:'#2e3943',coat2:'#13191f',skin:'#edd6c8',accent:'#8fbcd6',glasses:1,book:1}
 ];
 function svg(c){
  const hat=c.hat?`<g><ellipse cx="160" cy="58" rx="68" ry="15" fill="#3c291f"/><path d="M111 25q49-18 98 0v30h-98z" fill="#684833" stroke="#24170f" stroke-width="4"/><rect x="111" y="45" width="98" height="7" rx="3.5" fill="#c99459"/></g>`:'';
  const glasses=c.glasses?`<g fill="none" stroke="#60717f" stroke-width="4"><rect x="116" y="116" width="32" height="18" rx="6"/><rect x="172" y="116" width="32" height="18" rx="6"/><path d="M148 122h24"/></g>`:'';
  const book=c.book?`<g transform="translate(219 239) rotate(-12)"><rect width="48" height="35" rx="4" fill="#4b3422" stroke="#c7a55f" stroke-width="3"/><path d="M24 2v31M7 10h11M30 10h11" stroke="#d7c8a7" stroke-width="2"/></g>`:'';
  const blade=c.blade?`<g transform="translate(229 203) rotate(30)"><rect width="11" height="92" rx="6" fill="#a980df"/><rect x="-6" y="78" width="23" height="9" rx="4.5" fill="#44324f"/></g>`:'';
  const star=c.star?`<path d="M247 168l7 15 16 1-13 10 4 16-14-9-14 9 4-16-13-10 16-1z" fill="#edcf6f"/>`:'';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400"><defs><linearGradient id="coat" x1="0" x2="1"><stop stop-color="${c.coat2}"/><stop offset=".52" stop-color="${c.coat}"/><stop offset="1" stop-color="${c.coat2}"/></linearGradient><linearGradient id="hair" x1="0" x2="1"><stop stop-color="${c.hair2}"/><stop offset="1" stop-color="${c.hair}"/></linearGradient><linearGradient id="skin" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#fff2eb"/><stop offset="1" stop-color="${c.skin}"/></linearGradient></defs><ellipse cx="160" cy="350" rx="72" ry="18" fill="#000" opacity=".28"/><rect x="114" y="274" width="28" height="72" rx="14" fill="#18212b"/><rect x="178" y="274" width="28" height="72" rx="14" fill="#18212b"/><ellipse cx="126" cy="347" rx="23" ry="9" fill="#0d1319"/><ellipse cx="194" cy="347" rx="23" ry="9" fill="#0d1319"/><path d="M102 176q58-28 116 0l18 127H84z" fill="url(#coat)" stroke="#ffffff10" stroke-width="3"/><path d="M143 171h34v27h-34z" fill="url(#skin)"/><rect x="73" y="190" width="24" height="96" rx="12" fill="url(#coat)" transform="rotate(8 85 238)"/><rect x="223" y="190" width="24" height="96" rx="12" fill="url(#coat)" transform="rotate(-8 235 238)"/><circle cx="82" cy="286" r="13" fill="url(#skin)"/><circle cx="238" cy="286" r="13" fill="url(#skin)"/><ellipse cx="160" cy="119" rx="61" ry="58" fill="url(#skin)"/><ellipse cx="126" cy="126" rx="8" ry="10" fill="#1f2a35"/><ellipse cx="194" cy="126" rx="8" ry="10" fill="#1f2a35"/><ellipse cx="123" cy="123" rx="2.5" ry="2.5" fill="#fff"/><ellipse cx="191" cy="123" rx="2.5" ry="2.5" fill="#fff"/><path d="M148 154q12 8 24 0" stroke="#a76069" stroke-width="4" stroke-linecap="round" fill="none"/>${glasses}<path d="M96 98q8-51 64-54 55 2 66 54v33q-7-22-23-26-9 26-32 38-8-23-29-37-9 22-27 28-14 4-19 20z" fill="url(#hair)"/><path d="M101 83q15-18 30-24 8 17 28 24 20-7 30-24 15 8 27 25" fill="none" stroke="#ffffff18" stroke-width="6" stroke-linecap="round"/>${hat}<path d="M145 200h30v58h-30z" fill="#ffffff0c"/>${book}${blade}${star}</svg>`;
 }
 function uri(s){return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(s.replace(/\n\s+/g,''));}
 function build(){
   const stage=document.createElement('div'); stage.className='v328PartyStage';
   roster.forEach((c,i)=>{const u=document.createElement('div');u.className='v328Unit'+(i===0?' active':'');u.dataset.index=i;const img=document.createElement('img');img.alt='';img.src=uri(svg(c));u.appendChild(img);stage.appendChild(u)});
   return stage;
 }
 function activeIndex(){
   const qs=['.posterLivePartyV217 button','.battleCardsV151>button','.bsv2Cards_175 button'];
   for(const q of qs){const arr=[...document.querySelectorAll(q)];const i=arr.findIndex(b=>b.classList.contains('on')||b.classList.contains('active'));if(i>=0)return i}
   return 0;
 }
 function run(){
   const fields=[...document.querySelectorAll('.battleFieldV119,.cleanBattleV238 .bsv2Field_175')];
   fields.forEach(field=>{if(!field.querySelector(':scope > .v328PartyStage')) field.appendChild(build())});
   const ai=activeIndex();document.querySelectorAll('.v328PartyStage').forEach(s=>[...s.children].forEach((u,i)=>u.classList.toggle('active',i===ai)));
 }
 if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run,{once:true}); else run();
 let q=false;new MutationObserver(()=>{if(q)return;q=true;requestAnimationFrame(()=>{q=false;run()})}).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});
 setInterval(run,800);
})();

// v329-script
(()=>{
  const roster=[
    {key:'dazai',hair:'#18212e',hair2:'#34455b',coat:'#273f59',coat2:'#111a24',skin:'#f0d7c8',book:1},
    {key:'chuuya',hair:'#6c4330',hair2:'#b17855',coat:'#6b2937',coat2:'#241016',skin:'#f1d1bd',hat:1},
    {key:'akutagawa',hair:'#151923',hair2:'#5a6472',coat:'#2a2133',coat2:'#0e0d14',skin:'#ead7cd',blade:1},
    {key:'kenji',hair:'#bea97d',hair2:'#e2d5b6',coat:'#536a5b',coat2:'#28362e',skin:'#efd9c0',star:1},
    {key:'ranpo',hair:'#151c25',hair2:'#495866',coat:'#2e3943',coat2:'#13191f',skin:'#edd6c8',glasses:1,book:1}
  ];

  function svg(c){
    const hat=c.hat?`<g><ellipse cx="160" cy="58" rx="68" ry="15" fill="#3c291f"/><path d="M111 25q49-18 98 0v30h-98z" fill="#684833" stroke="#24170f" stroke-width="4"/><rect x="111" y="45" width="98" height="7" rx="3.5" fill="#c99459"/></g>`:'';
    const glasses=c.glasses?`<g fill="none" stroke="#60717f" stroke-width="4"><rect x="116" y="116" width="32" height="18" rx="6"/><rect x="172" y="116" width="32" height="18" rx="6"/><path d="M148 122h24"/></g>`:'';
    const book=c.book?`<g transform="translate(219 239) rotate(-12)"><rect width="48" height="35" rx="4" fill="#4b3422" stroke="#c7a55f" stroke-width="3"/><path d="M24 2v31M7 10h11M30 10h11" stroke="#d7c8a7" stroke-width="2"/></g>`:'';
    const blade=c.blade?`<g transform="translate(229 203) rotate(30)"><rect width="11" height="92" rx="6" fill="#a980df"/><rect x="-6" y="78" width="23" height="9" rx="4.5" fill="#44324f"/></g>`:'';
    const star=c.star?`<path d="M247 168l7 15 16 1-13 10 4 16-14-9-14 9 4-16-13-10 16-1z" fill="#edcf6f"/>`:'';

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400">
      <defs>
        <linearGradient id="coat" x1="0" x2="1"><stop stop-color="${c.coat2}"/><stop offset=".52" stop-color="${c.coat}"/><stop offset="1" stop-color="${c.coat2}"/></linearGradient>
        <linearGradient id="hair" x1="0" x2="1"><stop stop-color="${c.hair2}"/><stop offset="1" stop-color="${c.hair}"/></linearGradient>
        <linearGradient id="skin" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#fff2eb"/><stop offset="1" stop-color="${c.skin}"/></linearGradient>
      </defs>
      <ellipse cx="160" cy="350" rx="72" ry="18" fill="#000" opacity=".28"/>
      <rect x="114" y="274" width="28" height="72" rx="14" fill="#18212b"/>
      <rect x="178" y="274" width="28" height="72" rx="14" fill="#18212b"/>
      <ellipse cx="126" cy="347" rx="23" ry="9" fill="#0d1319"/>
      <ellipse cx="194" cy="347" rx="23" ry="9" fill="#0d1319"/>
      <path d="M102 176q58-28 116 0l18 127H84z" fill="url(#coat)" stroke="#ffffff10" stroke-width="3"/>
      <path d="M143 171h34v27h-34z" fill="url(#skin)"/>
      <rect x="73" y="190" width="24" height="96" rx="12" fill="url(#coat)" transform="rotate(8 85 238)"/>
      <rect x="223" y="190" width="24" height="96" rx="12" fill="url(#coat)" transform="rotate(-8 235 238)"/>
      <circle cx="82" cy="286" r="13" fill="url(#skin)"/><circle cx="238" cy="286" r="13" fill="url(#skin)"/>
      <ellipse cx="160" cy="119" rx="61" ry="58" fill="url(#skin)"/>
      <ellipse cx="126" cy="126" rx="8" ry="10" fill="#1f2a35"/><ellipse cx="194" cy="126" rx="8" ry="10" fill="#1f2a35"/>
      <ellipse cx="123" cy="123" rx="2.5" ry="2.5" fill="#fff"/><ellipse cx="191" cy="123" rx="2.5" ry="2.5" fill="#fff"/>
      <path d="M148 154q12 8 24 0" stroke="#a76069" stroke-width="4" stroke-linecap="round" fill="none"/>
      ${glasses}
      <path d="M96 98q8-51 64-54 55 2 66 54v33q-7-22-23-26-9 26-32 38-8-23-29-37-9 22-27 28-14 4-19 20z" fill="url(#hair)"/>
      <path d="M101 83q15-18 30-24 8 17 28 24 20-7 30-24 15 8 27 25" fill="none" stroke="#ffffff18" stroke-width="6" stroke-linecap="round"/>
      ${hat}
      <path d="M145 200h30v58h-30z" fill="#ffffff0c"/>
      ${book}${blade}${star}
    </svg>`;
  }

  function uri(s){return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(s.replace(/\n\s+/g,''));}

  function makeStage(){
    const stage=document.createElement('div');
    stage.className='v329PartyStage';
    roster.forEach((c,i)=>{
      const u=document.createElement('div');
      u.className='v329Unit'+(i===0?' active':'');
      u.dataset.index=i;
      const img=document.createElement('img');
      img.alt='';
      img.src=uri(svg(c));
      u.appendChild(img);
      stage.appendChild(u);
    });
    return stage;
  }

  function activeIndex(){
    const sets=['.posterLivePartyV217 button','.battleCardsV151>button','.bsv2Cards_175 button'];
    for(const q of sets){
      const arr=[...document.querySelectorAll(q)];
      const i=arr.findIndex(b=>b.classList.contains('on')||b.classList.contains('active'));
      if(i>=0) return i;
    }
    return 0;
  }

  function clearOld(){
    document.querySelectorAll('.v328PartyStage').forEach(n=>n.remove());
  }

  function run(){
    clearOld();

    let host=document.querySelector('.cleanBattleV238 .posterActorStageV237');
    if(!host) host=document.querySelector('.bsv2Field_175');
    if(!host) return;

    if(!host.querySelector(':scope > .v329PartyStage')){
      host.appendChild(makeStage());
    }

    const ai=activeIndex();
    document.querySelectorAll('.v329PartyStage').forEach(s=>{
      [...s.children].forEach((u,i)=>u.classList.toggle('active',i===ai));
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run,{once:true});
  else run();

  let queued=false;
  const mo=new MutationObserver(()=>{
    if(queued) return;
    queued=true;
    requestAnimationFrame(()=>{queued=false;run();});
  });
  mo.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});
  setInterval(run,800);
})();

// v332-script
(()=>{
 const roster=[
  {key:'dazai',hair1:'#0f1620',hair2:'#263649',coat1:'#0f1c29',coat2:'#395b78',skin:'#f1d8ca',book:1,bandage:1},
  {key:'chuuya',hair1:'#56301f',hair2:'#b06d43',coat1:'#281017',coat2:'#7d3244',skin:'#f2d3bf',hat:1},
  {key:'akutagawa',hair1:'#0d1118',hair2:'#5d6674',coat1:'#110f16',coat2:'#302339',skin:'#ecd8cf',blade:1,whitecollar:1},
  {key:'kenji',hair1:'#9e8b65',hair2:'#e5d7b4',coat1:'#26332c',coat2:'#657b6b',skin:'#efd9c0',star:1},
  {key:'ranpo',hair1:'#0e151d',hair2:'#3e4e5c',coat1:'#141a20',coat2:'#3d4954',skin:'#edd6c8',glasses:1,book:1}
 ];

 function svg(c){
   const hat=c.hat?`<g><ellipse cx="160" cy="61" rx="72" ry="16" fill="#3f2b20"/><path d="M108 25q52-19 104 0v32H108z" fill="#6b4934" stroke="#24170f" stroke-width="5"/><rect x="108" y="46" width="104" height="8" rx="4" fill="#c89559"/></g>`:'';
   const glasses=c.glasses?`<g fill="none" stroke="#5f7280" stroke-width="4"><rect x="114" y="119" width="34" height="20" rx="7"/><rect x="172" y="119" width="34" height="20" rx="7"/><path d="M148 126h24"/></g>`:'';
   const book=c.book?`<g transform="translate(218 238) rotate(-12)"><rect width="52" height="38" rx="5" fill="#4c3522" stroke="#c8a75f" stroke-width="3"/><path d="M26 3v32M8 11h12M32 11h12" stroke="#d8c8a6" stroke-width="2"/></g>`:'';
   const blade=c.blade?`<g transform="translate(230 203) rotate(29)"><rect width="12" height="96" rx="6" fill="#ad86e6"/><rect x="2" y="5" width="3" height="80" rx="1.5" fill="#fff" opacity=".55"/><rect x="-7" y="81" width="26" height="10" rx="5" fill="#44324f"/></g>`:'';
   const star=c.star?`<g transform="translate(245 168)"><path d="M0-18 6-6 20-5 9 4 13 18 0 10-13 18-9 4-20-5-6-6Z" fill="#edd06c"/><circle r="29" fill="none" stroke="#edd06c" stroke-opacity=".3" stroke-width="3"/></g>`:'';
   const bandage=c.bandage?`<path d="M105 118q12-8 23-4" stroke="#e9dfcf" stroke-width="8" stroke-linecap="round"/><path d="M104 125q10-5 21-2" stroke="#cfc3b1" stroke-width="3" stroke-linecap="round"/>`:'';
   const collar=c.whitecollar?`<path d="M124 181h72l-18 32-18-15-18 15z" fill="#eee9df" opacity=".92"/>`:'';
   return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 410">
   <defs>
    <linearGradient id="coat" x1="0" x2="1"><stop stop-color="${c.coat1}"/><stop offset=".52" stop-color="${c.coat2}"/><stop offset="1" stop-color="${c.coat1}"/></linearGradient>
    <linearGradient id="hair" x1="0" x2="1"><stop stop-color="${c.hair2}"/><stop offset="1" stop-color="${c.hair1}"/></linearGradient>
    <linearGradient id="skin" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#fff4ed"/><stop offset="1" stop-color="${c.skin}"/></linearGradient>
    <linearGradient id="leg" x1="0" x2="1"><stop stop-color="#0e151d"/><stop offset=".5" stop-color="#26333d"/><stop offset="1" stop-color="#0e151d"/></linearGradient>
   </defs>
   <ellipse cx="160" cy="358" rx="76" ry="18" fill="#000" opacity=".25"/>
   <rect x="110" y="276" width="29" height="76" rx="14" fill="url(#leg)"/>
   <rect x="181" y="276" width="29" height="76" rx="14" fill="url(#leg)"/>
   <ellipse cx="124" cy="353" rx="25" ry="10" fill="#0b1117"/>
   <ellipse cx="196" cy="353" rx="25" ry="10" fill="#0b1117"/>
   <path d="M99 178q61-30 122 0l19 132H80z" fill="url(#coat)" stroke="#ffffff10" stroke-width="3"/>
   ${collar}
   <path d="M145 171h30v30h-30z" fill="url(#skin)"/>
   <rect x="69" y="190" width="25" height="100" rx="12" fill="url(#coat)" transform="rotate(9 82 240)"/>
   <rect x="226" y="190" width="25" height="100" rx="12" fill="url(#coat)" transform="rotate(-9 238 240)"/>
   <circle cx="79" cy="288" r="13" fill="url(#skin)"/><circle cx="241" cy="288" r="13" fill="url(#skin)"/>
   <ellipse cx="160" cy="120" rx="63" ry="60" fill="url(#skin)" stroke="#ffffff10" stroke-width="2"/>
   <ellipse cx="123" cy="127" rx="9" ry="11" fill="#202a34"/><ellipse cx="197" cy="127" rx="9" ry="11" fill="#202a34"/>
   <ellipse cx="120" cy="123" rx="3" ry="3" fill="#fff"/><ellipse cx="194" cy="123" rx="3" ry="3" fill="#fff"/>
   <path d="M146 156q14 9 28 0" stroke="#a45f69" stroke-width="4.5" stroke-linecap="round" fill="none"/>
   <ellipse cx="119" cy="149" rx="11" ry="5" fill="#e896a2" opacity=".22"/><ellipse cx="201" cy="149" rx="11" ry="5" fill="#e896a2" opacity=".22"/>
   ${bandage}${glasses}
   <path d="M94 101q7-54 66-58 58 2 68 58v35q-6-24-24-28-10 28-33 40-9-25-29-39-10 23-29 29-14 5-19 21z" fill="url(#hair)"/>
   <path d="M100 83q16-18 32-24 9 19 29 25 21-7 31-24 16 8 29 25" fill="none" stroke="#ffffff20" stroke-width="6" stroke-linecap="round"/>
   <path d="M103 104q10 15 14 34M216 104q-10 15-14 34" stroke="#00000020" stroke-width="6" stroke-linecap="round"/>
   ${hat}
   <path d="M146 205h28v58h-28z" fill="#ffffff0c"/>
   ${book}${blade}${star}
   </svg>`;
 }

 function uri(s){
   return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(s.replace(/\n\s+/g,''));
 }

 function createStage(){
   const s=document.createElement('div');
   s.className='v331PartyStage v332Stable';
   roster.forEach((c,i)=>{
     const u=document.createElement('div');
     u.className='v331Unit'+(i===0?' active':'');
     u.dataset.index=String(i);
     const img=document.createElement('img');
     img.alt='';
     img.src=uri(svg(c));
     u.appendChild(img);
     s.appendChild(u);
   });
   return s;
 }

 function getActiveIndex(){
   for(const q of ['.posterLivePartyV217 button','.battleCardsV151>button','.bsv2Cards_175 button']){
     const arr=[...document.querySelectorAll(q)];
     const i=arr.findIndex(b=>b.classList.contains('on')||b.classList.contains('active'));
     if(i>=0) return i;
   }
   return 0;
 }

 function ensure(){
   const host=document.querySelector('.cleanBattleV238 .posterActorStageV237') || document.querySelector('.bsv2Field_175');
   if(!host) return;

   let stage=host.querySelector(':scope > .v332Stable');
   if(!stage){
     document.querySelectorAll('.v331PartyStage').forEach(n=>n.remove());
     stage=createStage();
     host.appendChild(stage);
   }

   const ai=getActiveIndex();
   [...stage.children].forEach((u,i)=>{
     const should=i===ai;
     if(u.classList.contains('active')!==should){
       u.classList.toggle('active',should);
     }
   });
 }

 if(document.readyState==='loading'){
   document.addEventListener('DOMContentLoaded',ensure,{once:true});
 }else{
   ensure();
 }

 let queued=false;
 const mo=new MutationObserver(()=>{
   if(queued) return;
   queued=true;
   requestAnimationFrame(()=>{
     queued=false;
     ensure();
   });
 });
 mo.observe(document.documentElement,{
   subtree:true,
   childList:true,
   attributes:true,
   attributeFilter:['class']
 });

 setInterval(ensure,2500);
})();

// v334-script
(()=>{
  const roster=[
    {key:'dazai', hairDark:'#0f1621', hairLight:'#2d4259', coatDark:'#0f1d2a', coatLight:'#406583', skin:'#f1d8cb', accent:'#d6b56b', eye:'#5b6d85', book:1, bandage:1},
    {key:'chuuya', hairDark:'#5f351f', hairLight:'#bf7d4e', coatDark:'#2a1218', coatLight:'#86384b', skin:'#f2d3c0', accent:'#d7a266', eye:'#a4604d', hat:1},
    {key:'akutagawa', hairDark:'#0e1219', hairLight:'#626b78', coatDark:'#110f16', coatLight:'#37283f', skin:'#ecd8cf', accent:'#b48af0', eye:'#787492', blade:1, whitecollar:1},
    {key:'kenji', hairDark:'#9f8d65', hairLight:'#eadcb6', coatDark:'#27332c', coatLight:'#6a806f', skin:'#eed8bf', accent:'#eccf6d', eye:'#6f8e69', star:1},
    {key:'ranpo', hairDark:'#0e151d', hairLight:'#465867', coatDark:'#141a21', coatLight:'#42505c', skin:'#edd6c8', accent:'#93bdd4', eye:'#6f8f9e', glasses:1, book:1}
  ];

  function art(c){
    const hat = c.hat ? `
      <g>
        <ellipse cx="162" cy="66" rx="76" ry="17" fill="#3d291e"/>
        <path d="M110 26q52-20 106 0v35H110z" fill="#6e4b36" stroke="#24170f" stroke-width="5"/>
        <rect x="110" y="48" width="106" height="9" rx="4.5" fill="#ca9559"/>
      </g>` : '';
    const glasses = c.glasses ? `
      <g fill="none" stroke="#617381" stroke-width="4.5">
        <rect x="112" y="126" width="36" height="21" rx="7"/>
        <rect x="174" y="126" width="36" height="21" rx="7"/>
        <path d="M148 133h26"/>
      </g>` : '';
    const book = c.book ? `
      <g transform="translate(224 252) rotate(-12)">
        <rect width="54" height="40" rx="5" fill="#4d3523" stroke="#cfab62" stroke-width="3"/>
        <path d="M27 3v34M8 11h13M33 11h13M8 18h11M34 18h10" stroke="#dccaa5" stroke-width="2"/>
      </g>` : '';
    const blade = c.blade ? `
      <g transform="translate(238 210) rotate(27)">
        <rect width="13" height="102" rx="6.5" fill="#b28ceb"/>
        <rect x="2.5" y="7" width="3" height="82" rx="1.5" fill="#fff" opacity=".6"/>
        <rect x="-8" y="86" width="29" height="11" rx="5.5" fill="#49354f"/>
      </g>` : '';
    const star = c.star ? `
      <g transform="translate(257 183)">
        <path d="M0-18 6-6 20-5 9 4 13 18 0 10-13 18-9 4-20-5-6-6Z" fill="#edd06d"/>
        <circle r="31" fill="none" stroke="#edd06d" stroke-opacity=".28" stroke-width="3"/>
      </g>` : '';
    const bandage = c.bandage ? `
      <path d="M101 126q15-9 30-4" stroke="#efe5d7" stroke-width="9" stroke-linecap="round"/>
      <path d="M101 133q13-4 27-2" stroke="#ccbfae" stroke-width="3" stroke-linecap="round"/>
    ` : '';
    const collar = c.whitecollar ? `
      <path d="M122 194h78l-20 35-19-17-19 17z" fill="#efe9df" opacity=".96"/>
    ` : '';

    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 440">
      <defs>
        <linearGradient id="coat" x1="0" x2="1"><stop stop-color="${c.coatDark}"/><stop offset=".52" stop-color="${c.coatLight}"/><stop offset="1" stop-color="${c.coatDark}"/></linearGradient>
        <linearGradient id="hair" x1="0" x2="1"><stop stop-color="${c.hairLight}"/><stop offset="1" stop-color="${c.hairDark}"/></linearGradient>
        <linearGradient id="skin" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#fff5ee"/><stop offset="1" stop-color="${c.skin}"/></linearGradient>
        <linearGradient id="leg" x1="0" x2="1"><stop stop-color="#0d141b"/><stop offset=".5" stop-color="#293744"/><stop offset="1" stop-color="#0d141b"/></linearGradient>
        <radialGradient id="faceGlow" cx="35%" cy="25%" r="65%"><stop offset="0" stop-color="#ffffff" stop-opacity=".33"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>
      </defs>
      <ellipse cx="170" cy="383" rx="84" ry="18" fill="#000" opacity=".28"/>
      <ellipse cx="170" cy="376" rx="66" ry="10" fill="#081018" opacity=".72"/>
      <rect x="116" y="295" width="31" height="79" rx="14" fill="url(#leg)"/>
      <rect x="193" y="295" width="31" height="79" rx="14" fill="url(#leg)"/>
      <ellipse cx="130" cy="372" rx="26" ry="10" fill="#0b1117"/>
      <ellipse cx="209" cy="372" rx="26" ry="10" fill="#0b1117"/>

      <path d="M101 191q69-33 138 0l20 145H81z" fill="url(#coat)" stroke="#ffffff12" stroke-width="3"/>
      <path d="M113 207q58-22 114 0" fill="none" stroke="#ffffff12" stroke-width="5" stroke-linecap="round"/>
      <path d="M111 246q61 18 118 0" fill="none" stroke="#00000020" stroke-width="6" stroke-linecap="round"/>
      ${collar}
      <path d="M154 185h33v32h-33z" fill="url(#skin)"/>
      <path d="M151 209h39v61h-39z" fill="#ffffff10"/>
      <rect x="64" y="205" width="26" height="109" rx="13" fill="url(#coat)" transform="rotate(9 77 259)"/>
      <rect x="249" y="205" width="26" height="109" rx="13" fill="url(#coat)" transform="rotate(-9 262 259)"/>
      <circle cx="76" cy="313" r="14" fill="url(#skin)"/>
      <circle cx="264" cy="313" r="14" fill="url(#skin)"/>

      <ellipse cx="170" cy="127" rx="68" ry="64" fill="url(#skin)" stroke="#ffffff10" stroke-width="2"/>
      <ellipse cx="170" cy="127" rx="68" ry="64" fill="url(#faceGlow)"/>
      <ellipse cx="129" cy="135" rx="10" ry="12" fill="#1f2934"/>
      <ellipse cx="211" cy="135" rx="10" ry="12" fill="#1f2934"/>
      <ellipse cx="125" cy="131" rx="3" ry="3" fill="#fff"/>
      <ellipse cx="207" cy="131" rx="3" ry="3" fill="#fff"/>
      <path d="M118 121q13-8 27-4" fill="none" stroke="#273340" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M195 121q13-8 27-4" fill="none" stroke="#273340" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M155 165q15 11 30 0" stroke="#ab646d" stroke-width="5" stroke-linecap="round" fill="none"/>
      <ellipse cx="124" cy="160" rx="11" ry="5" fill="#ea98a4" opacity=".25"/>
      <ellipse cx="216" cy="160" rx="11" ry="5" fill="#ea98a4" opacity=".25"/>
      ${bandage}
      ${glasses}

      <path d="M98 105q9-58 72-63 63 2 72 63v38q-6-25-25-30-11 31-37 44-10-28-32-43-12 24-33 31-15 5-17 23z" fill="url(#hair)"/>
      <path d="M106 86q18-21 35-28 10 20 31 27 22-8 34-27 18 8 32 29" fill="none" stroke="#ffffff22" stroke-width="7" stroke-linecap="round"/>
      <path d="M108 112q12 18 16 39M233 112q-12 18-16 39" stroke="#00000024" stroke-width="6" stroke-linecap="round"/>
      ${hat}

      ${book}
      ${blade}
      ${star}
    </svg>`;
  }

  function uri(s){ return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(s.replace(/\n\s+/g,'')); }

  function apply(){
    const imgs = document.querySelectorAll('.v331PartyStage.v332Stable .v331Unit img');
    if(imgs.length < 5) return;
    imgs.forEach((img, i)=>{
      if(img.dataset.v334Ready === '1') return;
      img.src = uri(art(roster[i]));
      img.dataset.v334Ready = '1';
      img.alt = roster[i].key;
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, {once:true});
  else apply();
  let pending = false;
  const mo = new MutationObserver(()=>{
    if(pending) return;
    pending = true;
    requestAnimationFrame(()=>{ pending = false; apply(); });
  });
  mo.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});
  setInterval(apply, 2200);
})();

// v336-script
(()=>{
  function getStage(){
    return document.querySelector('.cleanBattleV238 .posterActorStageV237') ||
           document.querySelector('.bsv2Field_175');
  }
  function getActiveUnit(){
    const units=[...document.querySelectorAll('.v331PartyStage.v332Stable .v331Unit')];
    return units.find(u=>u.classList.contains('active')) || units[0] || null;
  }
  function getEnemyWrap(){
    return document.querySelector('.cleanBattleV238 .posterEnemyWrapV237') ||
           document.querySelector('.bsv2Enemies_175');
  }
  function addFx(){
    const host=getStage();
    if(!host) return;
    const fx=document.createElement('div'); fx.className='v336AttackFx';
    const flash=document.createElement('div'); flash.className='v336ImpactFlash';
    const label=document.createElement('div'); label.className='v336AttackLabel'; label.textContent='攻撃';
    host.append(fx,flash,label);
    setTimeout(()=>fx.remove(),520);
    setTimeout(()=>flash.remove(),460);
    setTimeout(()=>label.remove(),620);
  }
  function playAttack(){
    const unit=getActiveUnit();
    if(!unit || unit.classList.contains('v336-attacking')) return;
    unit.classList.add('v336-attacking');
    const enemy=getEnemyWrap();
    setTimeout(()=>{
      addFx();
      if(enemy) enemy.classList.add('v336-hit');
    },210);
    setTimeout(()=>{
      unit.classList.remove('v336-attacking');
      if(enemy) enemy.classList.remove('v336-hit');
    },700);
  }
  function isAttackButton(el){
    return !!el.closest(
      '.posterThumbBarV234 .attack,'+
      '.battleCommandsV119 .attack,'+
      '.actionClusterV164 .attack,'+
      '[data-sd-action="attack"]'
    );
  }
  document.addEventListener('click',(e)=>{
    if(isAttackButton(e.target)) playAttack();
  },true);
})();

// v337-script
(()=>{
  const roster=[
    {key:'dazai', hairDark:'#101821', hairLight:'#324760', coatDark:'#16202a', coatLight:'#456985', accent:'#d1b36e', skin:'#f0d8cb', eye:'#54657b', bandage:1, book:1, tie:'#6e7d95'},
    {key:'chuuya', hairDark:'#5a311d', hairLight:'#c98553', coatDark:'#33151c', coatLight:'#8d3a4d', accent:'#daa364', skin:'#f2d3bf', eye:'#a55f49', hat:1, scarf:'#6b151f'},
    {key:'akutagawa', hairDark:'#11151c', hairLight:'#68707c', coatDark:'#151118', coatLight:'#3a2b44', accent:'#b38df0', skin:'#edd8cf', eye:'#716e88', blade:1, collar:1},
    {key:'kenji', hairDark:'#95835d', hairLight:'#ebddb6', coatDark:'#2d3931', coatLight:'#708675', accent:'#eed16d', skin:'#efd8bf', eye:'#688664', star:1, strap:'#6a4c2d'},
    {key:'ranpo', hairDark:'#111820', hairLight:'#455766', coatDark:'#161c23', coatLight:'#475460', accent:'#8eb9d3', skin:'#edd6c8', eye:'#688896', glasses:1, book:1}
  ];

  function art(c){
    const hat = c.hat ? `
      <g>
        <ellipse cx="180" cy="72" rx="82" ry="18" fill="#3b281e"/>
        <path d="M124 30q56-22 112 0v38H124z" fill="#6c4a35" stroke="#23170e" stroke-width="5"/>
        <rect x="124" y="53" width="112" height="10" rx="5" fill="#cb9558"/>
      </g>` : '';
    const glasses = c.glasses ? `
      <g fill="none" stroke="#647886" stroke-width="4.6">
        <rect x="120" y="138" width="39" height="23" rx="8"/>
        <rect x="201" y="138" width="39" height="23" rx="8"/>
        <path d="M159 146h42"/>
      </g>` : '';
    const book = c.book ? `
      <g transform="translate(244 270) rotate(-12)">
        <rect width="58" height="42" rx="5" fill="#4a3424" stroke="#d0ad63" stroke-width="3"/>
        <path d="M29 4v34M10 12h14M34 12h14M10 20h12M36 20h10" stroke="#dfd0a8" stroke-width="2"/>
      </g>` : '';
    const blade = c.blade ? `
      <g transform="translate(261 228) rotate(26)">
        <rect width="14" height="113" rx="7" fill="#b68ff2"/>
        <rect x="3" y="9" width="3" height="92" rx="1.5" fill="#fff" opacity=".7"/>
        <rect x="-9" y="94" width="31" height="12" rx="6" fill="#4c3754"/>
      </g>` : '';
    const star = c.star ? `
      <g transform="translate(281 192)">
        <path d="M0-20 7-7 22-6 10 5 14 20 0 11-14 20-10 5-22-6-7-7Z" fill="#efd26f"/>
        <circle r="34" fill="none" stroke="#efd26f" stroke-opacity=".26" stroke-width="3"/>
      </g>` : '';
    const bandage = c.bandage ? `
      <path d="M108 136q17-11 35-5" stroke="#f1e8db" stroke-width="10" stroke-linecap="round"/>
      <path d="M108 144q15-5 31-2" stroke="#ccbeac" stroke-width="3" stroke-linecap="round"/>
    ` : '';
    const collar = c.collar ? `
      <path d="M129 213h102l-26 38-25-18-25 18z" fill="#f0ebe2" opacity=".98"/>
      <path d="M129 213h102" stroke="#c9c1b7" stroke-width="3"/>
    ` : '';
    const neckwear = c.tie ? `<path d="M170 199h20l-5 18 5 18h-20l5-18z" fill="${c.tie}" opacity=".95"/>` : '';
    const scarf = c.scarf ? `<path d="M153 204q24-16 49 0q-9 16 -4 37q-19 8 -41 1q5-21 -4 -38z" fill="${c.scarf}" opacity=".96"/>` : '';
    const strap = c.strap ? `<path d="M125 202q51 31 84 82" stroke="${c.strap}" stroke-width="6" opacity=".7"/>` : '';

    return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 470">
  <defs>
    <linearGradient id="coat" x1="0" x2="1"><stop stop-color="${c.coatDark}"/><stop offset=".52" stop-color="${c.coatLight}"/><stop offset="1" stop-color="${c.coatDark}"/></linearGradient>
    <linearGradient id="hair" x1="0" x2="1"><stop stop-color="${c.hairLight}"/><stop offset="1" stop-color="${c.hairDark}"/></linearGradient>
    <linearGradient id="skin" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#fff6ef"/><stop offset="1" stop-color="${c.skin}"/></linearGradient>
    <linearGradient id="leg" x1="0" x2="1"><stop stop-color="#10161d"/><stop offset=".5" stop-color="#2c3945"/><stop offset="1" stop-color="#10161d"/></linearGradient>
    <linearGradient id="shoe" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#131b23"/><stop offset="1" stop-color="#090e13"/></linearGradient>
    <radialGradient id="faceGlow" cx="34%" cy="26%" r="65%"><stop offset="0" stop-color="#ffffff" stop-opacity=".34"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>
  </defs>

  <ellipse cx="180" cy="405" rx="90" ry="20" fill="#000" opacity=".28"/>
  <ellipse cx="180" cy="399" rx="72" ry="11" fill="#081018" opacity=".72"/>

  <rect x="121" y="308" width="33" height="81" rx="15" fill="url(#leg)"/>
  <rect x="206" y="308" width="33" height="81" rx="15" fill="url(#leg)"/>
  <ellipse cx="135" cy="389" rx="28" ry="11" fill="url(#shoe)"/>
  <ellipse cx="225" cy="389" rx="28" ry="11" fill="url(#shoe)"/>

  <path d="M102 208q78-37 156 0l22 154H80z" fill="url(#coat)" stroke="#ffffff14" stroke-width="3"/>
  <path d="M113 226q68-28 134 0" fill="none" stroke="#ffffff14" stroke-width="6" stroke-linecap="round"/>
  <path d="M119 267q65 21 122 0" fill="none" stroke="#0000001e" stroke-width="7" stroke-linecap="round"/>
  ${strap}
  ${collar}
  <path d="M165 204h31v36h-31z" fill="url(#skin)"/>
  ${scarf}
  ${neckwear}
  <path d="M162 228h36v73h-36z" fill="#ffffff0f"/>

  <rect x="59" y="223" width="27" height="115" rx="13" fill="url(#coat)" transform="rotate(8 72 280)"/>
  <rect x="274" y="223" width="27" height="115" rx="13" fill="url(#coat)" transform="rotate(-10 287 280)"/>
  <circle cx="72" cy="337" r="14" fill="url(#skin)"/>
  <circle cx="286" cy="337" r="14" fill="url(#skin)"/>

  <ellipse cx="180" cy="139" rx="73" ry="68" fill="url(#skin)" stroke="#ffffff12" stroke-width="2"/>
  <ellipse cx="180" cy="139" rx="73" ry="68" fill="url(#faceGlow)"/>
  <path d="M124 126q16-11 33-5" fill="none" stroke="#26323e" stroke-width="5" stroke-linecap="round"/>
  <path d="M204 126q16-11 33-5" fill="none" stroke="#26323e" stroke-width="5" stroke-linecap="round"/>
  <path d="M132 144q13 16 28 0" fill="none" stroke="#1d2731" stroke-width="4" stroke-linecap="round"/>
  <path d="M203 144q13 16 28 0" fill="none" stroke="#1d2731" stroke-width="4" stroke-linecap="round"/>
  <ellipse cx="131" cy="154" rx="10" ry="13" fill="#202a35"/>
  <ellipse cx="229" cy="154" rx="10" ry="13" fill="#202a35"/>
  <ellipse cx="127" cy="149" rx="3" ry="3" fill="#fff"/>
  <ellipse cx="225" cy="149" rx="3" ry="3" fill="#fff"/>
  <path d="M163 186q17 13 34 0" stroke="#ad6770" stroke-width="5" stroke-linecap="round" fill="none"/>
  <ellipse cx="127" cy="178" rx="11" ry="5" fill="#eb99a5" opacity=".24"/>
  <ellipse cx="233" cy="178" rx="11" ry="5" fill="#eb99a5" opacity=".24"/>
  ${bandage}
  ${glasses}

  <path d="M102 114q10-64 78-70 70 2 78 70v42q-6-28-28-33-12 35-41 49-11-31-36-47-13 27-37 35-16 5-14 24z" fill="url(#hair)"/>
  <path d="M111 92q20-22 39-29 11 22 33 30 24-9 37-30 19 9 36 31" fill="none" stroke="#ffffff24" stroke-width="7" stroke-linecap="round"/>
  <path d="M114 121q14 20 17 43M246 121q-14 20 -17 43" stroke="#00000024" stroke-width="6" stroke-linecap="round"/>
  <path d="M142 74q-12 20 -32 34" stroke="#00000018" stroke-width="6" stroke-linecap="round"/>
  ${hat}

  ${book}
  ${blade}
  ${star}
</svg>`;
  }

  function uri(s){ return 'data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(s.replace(/\n\s+/g,'')); }

  function apply(){
    const imgs=document.querySelectorAll('.v331PartyStage.v332Stable .v331Unit img');
    if(imgs.length<5) return;
    imgs.forEach((img,i)=>{
      img.src = uri(art(roster[i]));
      img.dataset.v337Ready='1';
      img.alt=roster[i].key;
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', apply, {once:true});
  else apply();
  let pend=false;
  const mo=new MutationObserver(()=>{ if(pend) return; pend=true; requestAnimationFrame(()=>{ pend=false; apply(); }); });
  mo.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});
  setInterval(apply,1800);
})();

// v339-script
(()=>{
  const roster=[
    {key:'dazai', hair1:'#0e151d', hair2:'#31475f', coat1:'#131f2a', coat2:'#496f8b', skin:'#f0d8ca', eye:'#54657a', accent:'#cfb26f', tie:'#6f7f95', bandage:1, book:1, mood:'lazy'},
    {key:'chuuya', hair1:'#5b311b', hair2:'#d08b58', coat1:'#30131b', coat2:'#944052', skin:'#f2d3bf', eye:'#a55f49', accent:'#d7a065', scarf:'#6d1720', hat:1, mood:'sharp'},
    {key:'akutagawa', hair1:'#0f1319', hair2:'#69727e', coat1:'#130f16', coat2:'#3d2b47', skin:'#edd8cf', eye:'#77738c', accent:'#b690f2', collar:1, blade:1, mood:'cold'},
    {key:'kenji', hair1:'#95825d', hair2:'#eddeba', coat1:'#2d3831', coat2:'#738877', skin:'#efd8be', eye:'#698562', accent:'#eed36e', strap:'#6a4b2c', star:1, mood:'soft'},
    {key:'ranpo', hair1:'#111820', hair2:'#475867', coat1:'#171d24', coat2:'#4a5864', skin:'#edd6c8', eye:'#678796', accent:'#8dbbd4', glasses:1, book:1, mood:'clever'}
  ];

  function face(c){
    let mouth;
    if(c.mood==='sharp'){
      mouth='<path d="M169 204q15 7 31 -1" stroke="#a95f67" stroke-width="4.5" stroke-linecap="round" fill="none"/>';
    }else if(c.mood==='cold'){
      mouth='<path d="M167 204q15 3 31 0" stroke="#9e5d67" stroke-width="4.2" stroke-linecap="round" fill="none"/>';
    }else if(c.mood==='clever'){
      mouth='<path d="M167 203q16 11 32 -1" stroke="#aa6570" stroke-width="4.3" stroke-linecap="round" fill="none"/>';
    }else if(c.mood==='soft'){
      mouth='<path d="M168 203q14 12 30 1" stroke="#ad6770" stroke-width="4.2" stroke-linecap="round" fill="none"/>';
    }else{
      mouth='<path d="M167 203q15 8 31 0" stroke="#a7656e" stroke-width="4.2" stroke-linecap="round" fill="none"/>';
    }

    let brows;
    if(c.mood==='sharp'){
      brows='<path d="M122 136q18 -14 37 -7" fill="none" stroke="#27333f" stroke-width="5.5" stroke-linecap="round"/><path d="M204 129q17 -6 34 6" fill="none" stroke="#27333f" stroke-width="5.5" stroke-linecap="round"/>';
    }else if(c.mood==='cold'){
      brows='<path d="M122 133q18 -7 36 1" fill="none" stroke="#27333f" stroke-width="5" stroke-linecap="round"/><path d="M204 133q18 -7 36 1" fill="none" stroke="#27333f" stroke-width="5" stroke-linecap="round"/>';
    }else{
      brows='<path d="M122 132q18 -11 36 -3" fill="none" stroke="#27333f" stroke-width="5" stroke-linecap="round"/><path d="M203 132q18 -11 36 -3" fill="none" stroke="#27333f" stroke-width="5" stroke-linecap="round"/>';
    }

    let lashes;
    if(c.mood==='sharp'){
      lashes='<path d="M125 156q16 19 35 1" fill="none" stroke="#1d2731" stroke-width="4.3" stroke-linecap="round"/><path d="M203 156q16 19 35 1" fill="none" stroke="#1d2731" stroke-width="4.3" stroke-linecap="round"/>';
    }else{
      lashes='<path d="M126 154q15 15 33 2" fill="none" stroke="#1d2731" stroke-width="4" stroke-linecap="round"/><path d="M203 154q15 15 33 2" fill="none" stroke="#1d2731" stroke-width="4" stroke-linecap="round"/>';
    }
    return brows + lashes + mouth;
  }

  function art(c){
    const hat = c.hat ? `<g><ellipse cx="180" cy="74" rx="84" ry="18" fill="#39271d"/><path d="M122 30q58-23 116 0v39H122z" fill="#6d4b36" stroke="#24170f" stroke-width="5"/><rect x="122" y="54" width="116" height="10" rx="5" fill="#cb9558"/></g>` : '';
    const glasses = c.glasses ? `<g fill="none" stroke="#657988" stroke-width="4.7"><rect x="118" y="141" width="40" height="23" rx="8"/><rect x="202" y="141" width="40" height="23" rx="8"/><path d="M158 149h44"/></g>` : '';
    const book = c.book ? `<g transform="translate(245 286) rotate(-12)"><rect width="60" height="43" rx="5" fill="#4b3524" stroke="#d2ae63" stroke-width="3"/><path d="M30 4v35M10 12h15M35 12h15M10 21h12M38 21h10" stroke="#e0d1a8" stroke-width="2"/></g>` : '';
    const blade = c.blade ? `<g transform="translate(266 236) rotate(25)"><rect width="14" height="118" rx="7" fill="#b790f2"/><rect x="3" y="8" width="3" height="96" rx="1.5" fill="#fff" opacity=".74"/><rect x="-9" y="98" width="32" height="12" rx="6" fill="#4c3754"/></g>` : '';
    const star = c.star ? `<g transform="translate(286 202)"><path d="M0-20 7-7 22-6 10 5 14 20 0 11-14 20-10 5-22-6-7-7Z" fill="#eed16f"/><circle r="34" fill="none" stroke="#eed16f" stroke-opacity=".24" stroke-width="3"/></g>` : '';
    const bandage = c.bandage ? `<path d="M107 140q18-11 36-5" stroke="#f1e8db" stroke-width="10" stroke-linecap="round"/><path d="M108 148q15-5 31-2" stroke="#cebfae" stroke-width="3" stroke-linecap="round"/>` : '';
    const collar = c.collar ? `<path d="M127 220h106l-27 39-26-18-26 18z" fill="#f0ebe1" opacity=".98"/><path d="M127 220h106" stroke="#cac2b8" stroke-width="3"/>` : '';
    const tie = c.tie ? `<path d="M171 209h19l-5 18 5 18h-19l5-18z" fill="${c.tie}" opacity=".95"/>` : '';
    const scarf = c.scarf ? `<path d="M150 211q26-17 52 0q-9 17 -4 39q-21 8 -44 1q6-23 -4 -40z" fill="${c.scarf}" opacity=".96"/>` : '';
    const strap = c.strap ? `<path d="M126 212q54 33 89 87" stroke="${c.strap}" stroke-width="6" opacity=".7"/>` : '';

    return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 490">
  <defs>
    <linearGradient id="coat" x1="0" x2="1"><stop stop-color="${c.coat1}"/><stop offset=".52" stop-color="${c.coat2}"/><stop offset="1" stop-color="${c.coat1}"/></linearGradient>
    <linearGradient id="hair" x1="0" x2="1"><stop stop-color="${c.hair2}"/><stop offset="1" stop-color="${c.hair1}"/></linearGradient>
    <linearGradient id="skin" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#fff6ef"/><stop offset="1" stop-color="${c.skin}"/></linearGradient>
    <linearGradient id="leg" x1="0" x2="1"><stop stop-color="#0f151c"/><stop offset=".5" stop-color="#2b3945"/><stop offset="1" stop-color="#0f151c"/></linearGradient>
    <linearGradient id="shoe" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#131a22"/><stop offset="1" stop-color="#090e13"/></linearGradient>
    <radialGradient id="faceGlow" cx="34%" cy="24%" r="65%"><stop offset="0" stop-color="#ffffff" stop-opacity=".36"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>
  </defs>

  <ellipse cx="180" cy="422" rx="92" ry="20" fill="#000" opacity=".28"/>
  <ellipse cx="180" cy="415" rx="74" ry="11" fill="#081018" opacity=".72"/>

  <rect x="124" y="318" width="30" height="88" rx="14" fill="url(#leg)"/>
  <rect x="207" y="318" width="30" height="88" rx="14" fill="url(#leg)"/>
  <ellipse cx="138" cy="407" rx="28" ry="10.5" fill="url(#shoe)"/>
  <ellipse cx="222" cy="407" rx="28" ry="10.5" fill="url(#shoe)"/>

  <path d="M107 220q73-39 146 0l21 160H86z" fill="url(#coat)" stroke="#ffffff14" stroke-width="3"/>
  <path d="M118 239q66-30 128 0" fill="none" stroke="#ffffff14" stroke-width="6" stroke-linecap="round"/>
  <path d="M121 284q64 22 118 0" fill="none" stroke="#00000020" stroke-width="7" stroke-linecap="round"/>
  ${strap}${collar}
  <path d="M165 213h30v38h-30z" fill="url(#skin)"/>
  ${scarf}${tie}
  <path d="M160 236h40v78h-40z" fill="#ffffff10"/>

  <rect x="61" y="234" width="24" height="121" rx="12" fill="url(#coat)" transform="rotate(8 73 294)"/>
  <rect x="275" y="234" width="24" height="120" rx="12" fill="url(#coat)" transform="rotate(-10 287 294)"/>
  <circle cx="73" cy="355" r="13.5" fill="url(#skin)"/>
  <circle cx="286" cy="355" r="13.5" fill="url(#skin)"/>

  <path d="M180 74c44 0 76 26 76 73c0 44-31 72-76 72c-45 0-76-28-76-72c0-47 31-73 76-73z" fill="url(#skin)" stroke="#ffffff12" stroke-width="2"/>
  <path d="M180 74c44 0 76 26 76 73c0 44-31 72-76 72c-45 0-76-28-76-72c0-47 31-73 76-73z" fill="url(#faceGlow)"/>
  ${face(c)}
  <ellipse cx="132" cy="158" rx="9.5" ry="13" fill="#1f2934"/>
  <ellipse cx="228" cy="158" rx="9.5" ry="13" fill="#1f2934"/>
  <ellipse cx="128" cy="153" rx="3" ry="3" fill="#fff"/>
  <ellipse cx="224" cy="153" rx="3" ry="3" fill="#fff"/>
  <ellipse cx="130" cy="182" rx="10" ry="5" fill="#ec9aa6" opacity=".22"/>
  <ellipse cx="230" cy="182" rx="10" ry="5" fill="#ec9aa6" opacity=".22"/>
  ${bandage}${glasses}

  <path d="M102 118q10-67 78-74 70 2 78 74v44q-7-28-28-35q-13 36-43 50q-12-33-37-49q-13 27-38 36q-16 6-10 26z" fill="url(#hair)"/>
  <path d="M112 95q20-23 40-31q11 23 33 31q25-9 38-31q20 9 38 33" fill="none" stroke="#ffffff25" stroke-width="7" stroke-linecap="round"/>
  <path d="M113 126q14 21 18 46M247 126q-14 21-18 46" stroke="#00000025" stroke-width="6" stroke-linecap="round"/>
  <path d="M145 73q-18 18-37 35" stroke="#00000018" stroke-width="5.5" stroke-linecap="round"/>
  ${hat}

  ${book}${blade}${star}
</svg>`;
  }

  function uri(s){
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(s.replace(/\n\s+/g,''));
  }

  function apply(){
    const imgs=document.querySelectorAll('.v331PartyStage.v332Stable .v331Unit img');
    if(imgs.length<5) return;
    imgs.forEach((img,i)=>{
      img.src=uri(art(roster[i]));
      img.dataset.v339Ready='1';
      img.alt=roster[i].key;
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', apply, {once:true});
  }else{
    apply();
  }

  let queued=false;
  const mo=new MutationObserver(()=>{
    if(queued) return;
    queued=true;
    requestAnimationFrame(()=>{
      queued=false;
      apply();
    });
  });
  mo.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['class']});
  setInterval(apply,1800);
})();

// v340-script
(()=>{
  function ensureLighting(){
    const host=document.querySelector('.cleanBattleV238 .posterActorStageV237') ||
               document.querySelector('.bsv2Field_175');
    if(!host) return;

    if(!host.querySelector(':scope > .v340DepthHaze')){
      const haze=document.createElement('div');
      haze.className='v340DepthHaze';
      host.appendChild(haze);
    }
    if(!host.querySelector(':scope > .v340ClashLine')){
      const line=document.createElement('div');
      line.className='v340ClashLine';
      host.appendChild(line);
    }
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',ensureLighting,{once:true});
  }else{
    ensureLighting();
  }

  let queued=false;
  const mo=new MutationObserver(()=>{
    if(queued) return;
    queued=true;
    requestAnimationFrame(()=>{
      queued=false;
      ensureLighting();
    });
  });
  mo.observe(document.documentElement,{subtree:true,childList:true});
  setInterval(ensureLighting,2500);
})();

// v343-hq-party-script
(function(){
  var partyData = {
    dazai: window.__bkAsset("https://ks5154yt-oss.github.io/bungou-kitan-game/assets/embedded_6d9ab10733b4.png"),
    chuuya: window.__bkAsset("https://ks5154yt-oss.github.io/bungou-kitan-game/assets/embedded_517df4cc52d6.png"),
    akutagawa: window.__bkAsset("https://ks5154yt-oss.github.io/bungou-kitan-game/assets/embedded_323afc3131bb.png"),
    kenji: window.__bkAsset("https://ks5154yt-oss.github.io/bungou-kitan-game/assets/embedded_87d871429c2b.png"),
    ranpo: window.__bkAsset("https://ks5154yt-oss.github.io/bungou-kitan-game/assets/embedded_115808055131.png")
  };
  var order = ['dazai','chuuya','akutagawa','kenji','ranpo'];

  function getActiveIndex(){
    var selectors = ['.posterLivePartyV217 button','.battleCardsV151>button','.bsv2Cards_175 button'];
    for(var s=0; s<selectors.length; s++){
      var arr = Array.prototype.slice.call(document.querySelectorAll(selectors[s]));
      if(!arr.length) continue;
      for(var i=0;i<arr.length;i++){
        var el = arr[i];
        if(el.classList.contains('on') || el.classList.contains('active') || el.classList.contains('current') || el.classList.contains('selected')) return Math.min(i,4);
      }
      return 0;
    }
    return 0;
  }

  function ensureParty(){
    var host = document.querySelector('.cleanBattleV238 .posterActorStageV237') || document.querySelector('.bsv2Field_175');
    if(!host) return;

    var wrap = host.querySelector('.v343HQParty');
    if(!wrap){
      wrap = document.createElement('div');
      wrap.className = 'v343HQParty';
      for(var i=0;i<order.length;i++){
        var unit = document.createElement('div');
        unit.className = 'v343Unit u' + (i+1);
        unit.setAttribute('data-key', order[i]);
        var img = document.createElement('img');
        img.alt = order[i];
        img.src = partyData[order[i]];
        unit.appendChild(img);
        wrap.appendChild(unit);
      }
      host.appendChild(wrap);
    }

    var idx = getActiveIndex();
    var units = wrap.querySelectorAll('.v343Unit');
    for(var j=0;j<units.length;j++){
      if(j===idx) units[j].classList.add('active');
      else units[j].classList.remove('active');
    }
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ensureParty, {once:true});
  else ensureParty();

  var queued = false;
  var mo = new MutationObserver(function(){
    if(queued) return;
    queued = true;
    requestAnimationFrame(function(){ queued = false; ensureParty(); });
  });
  mo.observe(document.documentElement, {subtree:true, childList:true, attributes:true, attributeFilter:['class']});
  setInterval(ensureParty, 2000);
})();

// v345-real-sprites-script
(function(){
  var spriteData = {
    dazai: window.__bkAsset("https://ks5154yt-oss.github.io/bungou-kitan-game/assets/embedded_dc90a50cb2dd.png"),
    chuuya: window.__bkAsset("https://ks5154yt-oss.github.io/bungou-kitan-game/assets/embedded_70b7c7bb1174.png"),
    akutagawa: window.__bkAsset("https://ks5154yt-oss.github.io/bungou-kitan-game/assets/embedded_e43dd731cd94.png"),
    kenji: window.__bkAsset("https://ks5154yt-oss.github.io/bungou-kitan-game/assets/embedded_99c27ba9a4e4.png"),
    ranpo: window.__bkAsset("https://ks5154yt-oss.github.io/bungou-kitan-game/assets/embedded_4c5b20317b92.png")
  };

  function applyRealSprites(){
    var units = document.querySelectorAll('.v343HQParty .v343Unit');
    if (!units.length) return;
    units.forEach(function(unit){
      var key = unit.getAttribute('data-key');
      var img = unit.querySelector('img');
      if (!key || !img || !spriteData[key]) return;
      if (img.getAttribute('data-v345') === '1') return;
      img.src = spriteData[key];
      img.setAttribute('data-v345','1');
      img.alt = key;
    });
  }

  function boot(){ applyRealSprites(); }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();

  var queued = false;
  var mo = new MutationObserver(function(){
    if (queued) return;
    queued = true;
    requestAnimationFrame(function(){ queued = false; applyRealSprites(); });
  });
  mo.observe(document.documentElement, {subtree:true, childList:true, attributes:true, attributeFilter:['class']});
  setInterval(applyRealSprites, 1200);
})();

// v347-action-motion-script
(()=>{
  function getStage(){
    return document.querySelector('.cleanBattleV238 .posterActorStageV237') ||
           document.querySelector('.bsv2Field_175');
  }
  function getActiveIndex(){
    const selectors=['.posterLivePartyV217 button','.battleCardsV151>button','.bsv2Cards_175 button'];
    for(const sel of selectors){
      const arr=[...document.querySelectorAll(sel)];
      if(!arr.length) continue;
      for(let i=0;i<arr.length;i++){
        const el=arr[i];
        if(el.classList.contains('on') || el.classList.contains('active') || el.classList.contains('current') || el.classList.contains('selected')) return Math.min(i,4);
      }
      return 0;
    }
    return 0;
  }
  function getVisibleUnit(){
    const idx=getActiveIndex();
    const units=[...document.querySelectorAll('.v343HQParty .v343Unit')];
    return units[idx] || units[0] || null;
  }
  function clearMotion(unit){
    if(!unit) return;
    unit.classList.remove('v347-attack','v347-skill','v347-support','v347-ougi');
  }
  function addFx(type){
    const host=getStage();
    if(!host) return;
    const fx=document.createElement('div');
    fx.className='v347StageFx';
    if(type==='attack'){
      const slash=document.createElement('div'); slash.className='v347Slash';
      const burst=document.createElement('div'); burst.className='v347Burst';
      fx.append(slash,burst);
      setTimeout(()=>fx.remove(),460);
    } else if(type==='skill'){
      const burst=document.createElement('div'); burst.className='v347Burst';
      burst.style.left='50%'; burst.style.top='32%'; burst.style.width='28%'; burst.style.height='28%';
      fx.append(burst);
      setTimeout(()=>fx.remove(),520);
    } else if(type==='support'){
      const aura=document.createElement('div'); aura.className='v347Aura';
      fx.append(aura);
      setTimeout(()=>fx.remove(),560);
    } else if(type==='ougi'){
      const burst=document.createElement('div'); burst.className='v347Burst';
      burst.style.left='48%'; burst.style.top='25%'; burst.style.width='36%'; burst.style.height='36%';
      const slash=document.createElement('div'); slash.className='v347Slash';
      slash.style.left='28%'; slash.style.top='48%'; slash.style.width='44%';
      fx.append(burst,slash);
      setTimeout(()=>fx.remove(),780);
    }
    host.appendChild(fx);
  }
  function play(type){
    const unit=getVisibleUnit();
    if(!unit) return;
    clearMotion(unit);
    // force reflow so repeated taps retrigger
    void unit.offsetWidth;
    unit.classList.add('v347-'+type);
    addFx(type);
    const duration = type==='ougi' ? 900 : type==='skill' ? 740 : type==='support' ? 640 : 580;
    setTimeout(()=>clearMotion(unit), duration);
  }
  function detectAction(target){
    const el=target.closest('button,[role="button"],.cmd,.command,.action,[data-sd-action]');
    if(!el) return '';
    const ds=(el.getAttribute('data-sd-action')||'').toLowerCase();
    const txt=(el.textContent||'').replace(/\s+/g,'');
    if(ds.includes('ougi') || ds.includes('ultimate') || txt.includes('奥義')) return 'ougi';
    if(ds.includes('skill') || txt.includes('スキル')) return 'skill';
    if(ds.includes('support') || txt.includes('支援')) return 'support';
    if(ds.includes('attack') || txt.includes('攻撃')) return 'attack';
    return '';
  }
  function handler(e){
    const type=detectAction(e.target);
    if(type) play(type);
  }
  document.addEventListener('click', handler, true);
})();

// v348-hit-and-character-motion-script
(()=>{
  function activeUnit(){
    const units=[...document.querySelectorAll('.v343HQParty .v343Unit')];
    return units.find(u=>u.classList.contains('active')) || units[0] || null;
  }
  function stage(){
    return document.querySelector('.cleanBattleV238 .posterActorStageV237') ||
           document.querySelector('.bsv2Field_175');
  }
  function enemies(){
    return document.querySelector('.cleanBattleV238 .posterEnemyWrapV237') ||
           document.querySelector('.bsv2Enemies_175');
  }
  function flash(heavy){
    const host=stage();
    if(!host) return;
    const impact=document.createElement('div');
    impact.className='v348Impact';
    if(heavy){
      impact.style.width='150px';
      impact.style.height='150px';
      impact.style.right='11%';
      impact.style.top='35%';
    }
    const txt=document.createElement('div');
    txt.className='v348DamageText';
    txt.textContent=heavy?'CRITICAL':'HIT';
    host.append(impact,txt);
    setTimeout(()=>impact.remove(),520);
    setTimeout(()=>txt.remove(),640);
  }
  function play(type){
    const u=activeUnit();
    const e=enemies();
    if(!u) return;
    if(type==='attack'){
      u.classList.add('v348-char-attack');
      setTimeout(()=>{
        if(e)e.classList.add('v348-hit');
        flash(false);
      },220);
      setTimeout(()=>{
        u.classList.remove('v348-char-attack');
        if(e)e.classList.remove('v348-hit');
      },620);
    }else if(type==='skill'){
      setTimeout(()=>{
        if(e)e.classList.add('v348-heavy-hit');
        flash(true);
      },300);
      setTimeout(()=>{if(e)e.classList.remove('v348-heavy-hit');},760);
    }else if(type==='ougi'){
      setTimeout(()=>{
        if(e)e.classList.add('v348-heavy-hit');
        flash(true);
      },360);
      setTimeout(()=>{if(e)e.classList.remove('v348-heavy-hit');},900);
    }
  }
  function detect(target){
    const el=target.closest('button,[role="button"],.cmd,.command,.action,[data-sd-action]');
    if(!el) return '';
    const ds=(el.getAttribute('data-sd-action')||'').toLowerCase();
    const txt=(el.textContent||'').replace(/\s+/g,'');
    if(ds.includes('ougi')||ds.includes('ultimate')||txt.includes('奥義')) return 'ougi';
    if(ds.includes('skill')||txt.includes('スキル')) return 'skill';
    if(ds.includes('attack')||txt.includes('攻撃')) return 'attack';
    return '';
  }
  document.addEventListener('click',e=>{
    const t=detect(e.target);
    if(t)play(t);
  },true);
})();

// v349-signature-skills-script
(()=>{
  function host(){return document.querySelector('.cleanBattleV238 .posterActorStageV237')||document.querySelector('.bsv2Field_175')}
  function activeUnit(){const a=[...document.querySelectorAll('.v343HQParty .v343Unit')];return a.find(x=>x.classList.contains('active'))||a[0]||null}
  function key(){const u=activeUnit();return u?u.getAttribute('data-key')||'dazai':'dazai'}
  function layer(){const h=host();if(!h)return null;const l=document.createElement('div');l.className='v349FxLayer';h.appendChild(l);return l}
  function clearLater(el,ms){setTimeout(()=>{if(el&&el.remove)el.remove()},ms)}
  function skillFx(){
    const l=layer(); if(!l)return; const k=key();
    if(k==='dazai'){
      const a=document.createElement('span');a.className='v349-dazai-ribbon';
      const b=document.createElement('span');b.className='v349-dazai-ribbon r2';l.append(a,b);
    }else if(k==='chuuya'){
      const a=document.createElement('span');a.className='v349-chuuya-ring';
      const b=document.createElement('span');b.className='v349-chuuya-core';l.append(a,b);
    }else if(k==='akutagawa'){
      const a=document.createElement('span');a.className='v349-akutagawa-slash';
      const b=document.createElement('span');b.className='v349-akutagawa-slash a2';l.append(a,b);
    }else if(k==='kenji'){
      for(let i=0;i<6;i++){
        const s=document.createElement('span');s.className='v349-kenji-star';
        s.style.setProperty('--x',(12+i*9)+'%');s.style.setProperty('--dur',(.55+i*.08)+'s');s.style.setProperty('--delay',(i*.04)+'s');l.appendChild(s);
      }
    }else{
      const a=document.createElement('span');a.className='v349-ranpo-clue';l.appendChild(a);
    }
    clearLater(l,900);
  }
  function ougiFx(){
    const h=host();if(!h)return;
    const dark=document.createElement('div');dark.className='v349OugiDark';
    const line=document.createElement('div');line.className='v349OugiLine';
    const title=document.createElement('div');title.className='v349OugiTitle';
    const labels={dazai:'人間失格',chuuya:'重力制圧',akutagawa:'羅生門',kenji:'星巡り',ranpo:'完全推理'};
    title.textContent=labels[key()]||'奥義';
    h.append(dark,line,title);
    clearLater(dark,1050);clearLater(line,900);clearLater(title,950);
  }
  function detect(target){
    const e=target.closest('button,[role="button"],.cmd,.command,.action,[data-sd-action]');if(!e)return'';
    const d=(e.getAttribute('data-sd-action')||'').toLowerCase();const t=(e.textContent||'').replace(/\s+/g,'');
    if(d.includes('ougi')||d.includes('ultimate')||t.includes('奥義'))return'ougi';
    if(d.includes('skill')||t.includes('スキル'))return'skill';
    return'';
  }
  document.addEventListener('click',e=>{const a=detect(e.target);if(a==='skill')skillFx();else if(a==='ougi')ougiFx()},true);
})();

// v350-battle-cinema-script
(()=>{
  function stage(){
    return document.querySelector('.cleanBattleV238 .posterActorStageV237') ||
           document.querySelector('.bsv2Field_175');
  }
  function banner(text){
    const host=stage();
    if(!host) return;
    const b=document.createElement('div');
    b.className='v350WaveBanner';
    b.textContent=text;
    host.appendChild(b);
    setTimeout(()=>b.remove(),1250);
  }
  function flashPlayerHit(){
    const host=stage();
    if(!host) return;
    const idx=0;
    const units=[...document.querySelectorAll('.v343HQParty .v343Unit')];
    const active=units.find(u=>u.classList.contains('active')) || units[idx];
    if(active){
      active.classList.add('v350-hit');
      setTimeout(()=>active.classList.remove('v350-hit'),430);
    }
    const fx=document.createElement('div');
    fx.className='v350HitOverlay';
    host.appendChild(fx);
    setTimeout(()=>fx.remove(),420);
  }
  function victory(){
    const host=stage();
    if(!host) return;
    const units=[...document.querySelectorAll('.v343HQParty .v343Unit')];
    units.forEach((u,i)=>{
      setTimeout(()=>{
        u.classList.add('v350-victory');
        setTimeout(()=>u.classList.remove('v350-victory'),1000);
      },i*90);
    });
    const title=document.createElement('div');
    title.className='v350VictoryTitle';
    title.textContent='VICTORY';
    const line=document.createElement('div');
    line.className='v350VictoryLine';
    host.append(title,line);
    setTimeout(()=>{title.remove();line.remove();},1900);
  }

  // Expose lightweight hooks for future battle logic integration.
  window.bungoV350 = {
    wave(n){ banner('WAVE '+n); },
    hit(){ flashPlayerHit(); },
    victory(){ victory(); }
  };

  // Observe text/state changes so existing logic can trigger the new visuals without rewiring the game.
  let lastWave='';
  let lastResult='';
  const scan=()=>{
    const waveNode=[...document.querySelectorAll('body *')].find(el=>{
      const t=(el.textContent||'').trim();
      return /^WAVE\s*\d+\/\d+$/i.test(t) && el.children.length===0;
    });
    if(waveNode){
      const t=waveNode.textContent.trim();
      if(t!==lastWave){
        lastWave=t;
        const m=t.match(/WAVE\s*(\d+)/i);
        if(m) banner(m[1]==='1'?'WAVE 1':'WAVE '+m[1]);
      }
    }

    const bodyText=document.body.innerText||'';
    const result=/勝利|VICTORY/i.test(bodyText)?'victory':'';
    if(result && result!==lastResult){
      lastResult=result;
      victory();
    }
  };

  setInterval(scan,1200);
})();

// v351-ios-turn-hotfix-script
(()=>{
  let lastBattleTouch=0;

  function isBattleVisible(){
    return !!(
      document.querySelector('.cleanBattleV238') ||
      document.querySelector('.battleV119') ||
      document.querySelector('.bsv2_175')
    );
  }

  function isBattleCommand(target){
    if(!target || !target.closest) return false;
    const el=target.closest('button,[role="button"],[data-sd-action],.cmd,.command,.action');
    if(!el) return false;
    const txt=(el.textContent||'').replace(/\s+/g,'');
    const ds=(el.getAttribute('data-sd-action')||'').toLowerCase();
    return (
      ds.includes('attack') || ds.includes('skill') ||
      ds.includes('support') || ds.includes('ougi') ||
      ds.includes('ultimate') ||
      txt.includes('攻撃') || txt.includes('スキル') ||
      txt.includes('支援') || txt.includes('奥義')
    );
  }

  // Record the touch only. Do not run visual/game logic on touchend.
  document.addEventListener('touchend',(e)=>{
    if(isBattleVisible() && isBattleCommand(e.target)){
      lastBattleTouch=Date.now();
    }
  },{capture:true,passive:true});

  // iOS can synthesize a delayed click after touchend. If the battle has
  // just re-rendered, that click can land on the Home nav underneath.
  document.addEventListener('click',(e)=>{
    if(!isBattleVisible()) return;
    const nav=e.target && e.target.closest
      ? e.target.closest('.primaryNavV116,.homeNavV116,.bottomNav,.quickDock,.quickDockV2,.floatingDock')
      : null;
    if(nav && Date.now()-lastBattleTouch < 900){
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  },true);
})();

// v352-turn-lock-script
(()=>{
  let lockUntil = 0;
  let lockTimer = 0;

  function battleAction(target){
    if(!target || !target.closest) return false;
    const el = target.closest('button,[role="button"],[data-sd-action],.cmd,.command,.action');
    if(!el) return false;
    const txt = (el.textContent || '').replace(/\s+/g,'');
    const ds = (el.getAttribute('data-sd-action') || '').toLowerCase();
    return (
      ds.includes('attack') || ds.includes('skill') || ds.includes('support') ||
      ds.includes('ougi') || ds.includes('ultimate') ||
      txt.includes('攻撃') || txt.includes('スキル') ||
      txt.includes('支援') || txt.includes('奥義')
    );
  }

  function isHomeLike(target){
    if(!target || !target.closest) return false;
    const el = target.closest(
      '.primaryNavV116,.homeNavV116,.bottomNav,.quickDock,.quickDockV2,.floatingDock,'+
      'a,[data-route],[data-page],button'
    );
    if(!el) return false;

    const txt = (el.textContent || '').replace(/\s+/g,'');
    const href = (el.getAttribute('href') || '').toLowerCase();
    const route = (el.getAttribute('data-route') || '').toLowerCase();
    const page = (el.getAttribute('data-page') || '').toLowerCase();

    return (
      !!el.closest('.primaryNavV116,.homeNavV116,.bottomNav,.quickDock,.quickDockV2,.floatingDock') ||
      txt === 'ホーム' || txt.includes('ホーム') ||
      href.includes('home') || route === 'home' || page === 'home'
    );
  }

  function lockTurn(ms=3200){
    lockUntil = Math.max(lockUntil, Date.now() + ms);
    document.body.classList.add('v352-turn-lock');
    clearTimeout(lockTimer);
    lockTimer = setTimeout(()=>{
      if(Date.now() >= lockUntil){
        document.body.classList.remove('v352-turn-lock');
      }
    }, ms + 80);
  }

  function locked(){
    return Date.now() < lockUntil;
  }

  // Start the lock at pointer/touch DOWN, before the battle DOM has any chance to re-render.
  document.addEventListener('pointerdown',(e)=>{
    if(battleAction(e.target)) lockTurn();
  },true);

  document.addEventListener('touchstart',(e)=>{
    if(battleAction(e.target)) lockTurn();
  },{capture:true,passive:true});

  // Keep it armed on the real click too.
  document.addEventListener('click',(e)=>{
    if(battleAction(e.target)) lockTurn();

    if(locked() && isHomeLike(e.target)){
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    }
  },true);

  // iOS may synthesize delayed touch/click events after the command DOM changes.
  document.addEventListener('touchend',(e)=>{
    if(locked() && isHomeLike(e.target)){
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  },{capture:true,passive:false});

  // Also suppress accidental pointer-up on navigation during the lock window.
  document.addEventListener('pointerup',(e)=>{
    if(locked() && isHomeLike(e.target)){
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  },true);

  // If a nav element appears during a battle re-render, keep it inert until the turn settles.
  const mo = new MutationObserver(()=>{
    if(locked()){
      document.body.classList.add('v352-turn-lock');
    }
  });
  mo.observe(document.documentElement,{subtree:true,childList:true});
})();

// v362-enemy-hit-only-script
(()=>{
  function enemyWrap(){
    return document.querySelector('.cleanBattleV238 .posterEnemyWrapV237') ||
           document.querySelector('.bsv2Enemies_175');
  }
  function stage(){
    return document.querySelector('.cleanBattleV238 .posterActorStageV237') ||
           document.querySelector('.bsv2Field_175');
  }
  function isAttackButton(target){
    if(!target || !target.closest) return false;
    const el = target.closest('button,[role="button"],[data-sd-action],.cmd,.command,.action');
    if(!el) return false;
    const ds = (el.getAttribute('data-sd-action')||'').toLowerCase();
    const txt = (el.textContent||'').replace(/\s+/g,'');
    return ds.includes('attack') || txt.includes('攻撃');
  }
  function hit(){
    const enemy = enemyWrap();
    const host = stage();
    if(!enemy || !host) return;

    enemy.classList.remove('v362-hit');
    void enemy.offsetWidth;
    enemy.classList.add('v362-hit');

    const fx = document.createElement('div');
    fx.className = 'v362Impact';
    host.appendChild(fx);

    setTimeout(()=>enemy.classList.remove('v362-hit'), 420);
    setTimeout(()=>fx.remove(), 430);
  }

  document.addEventListener('click', (e)=>{
    if(isAttackButton(e.target)) setTimeout(hit, 180);
  }, true);
})();

// v363-ally-attack-only-script
(()=>{
  function isAttackButton(target){
    if(!target || !target.closest) return false;
    const el = target.closest('button,[role="button"],[data-sd-action],.cmd,.command,.action');
    if(!el) return false;
    const ds = (el.getAttribute('data-sd-action')||'').toLowerCase();
    const txt = (el.textContent||'').replace(/\s+/g,'');
    return ds.includes('attack') || txt.includes('攻撃');
  }

  function activeUnit(){
    const units=[...document.querySelectorAll('.v343HQParty .v343Unit')];
    return units.find(u=>u.classList.contains('active')) || units[0] || null;
  }

  function play(){
    const unit=activeUnit();
    if(!unit || unit.classList.contains('v363-attacking')) return;
    unit.classList.add('v363-attacking');
    setTimeout(()=>unit.classList.remove('v363-attacking'),560);
  }

  document.addEventListener('click',(e)=>{
    if(isAttackButton(e.target)) play();
  },true);
})();

// v364-skill-only-script
(()=>{
  function stage(){return document.querySelector('.cleanBattleV238 .posterActorStageV237')||document.querySelector('.bsv2Field_175')}
  function activeUnit(){const u=[...document.querySelectorAll('.v343HQParty .v343Unit')];return u.find(x=>x.classList.contains('active'))||u[0]||null}
  function isSkillButton(target){
    if(!target||!target.closest)return false;
    const el=target.closest('button,[role="button"],[data-sd-action],.cmd,.command,.action');
    if(!el)return false;
    const ds=(el.getAttribute('data-sd-action')||'').toLowerCase();
    const txt=(el.textContent||'').replace(/\s+/g,'');
    return ds.includes('skill')||txt.includes('スキル');
  }
  function playSkill(){
    const host=stage(),unit=activeUnit(); if(!host||!unit)return;
    const key=unit.getAttribute('data-key')||'dazai';
    const layer=document.createElement('div'); layer.className='v364SkillLayer';
    if(key==='dazai'){const x=document.createElement('div');x.className='v364Dazai';layer.appendChild(x)}
    else if(key==='chuuya'){const x=document.createElement('div');x.className='v364Chuuya';layer.appendChild(x)}
    else if(key==='akutagawa'){const x=document.createElement('div');x.className='v364Akutagawa';layer.appendChild(x)}
    else if(key==='kenji'){for(let i=0;i<6;i++){const s=document.createElement('i');s.className='v364Star';s.style.left=(18+i*8)+'%';s.style.top=(62-(i%2)*6)+'%';s.style.animationDelay=(i*.05)+'s';layer.appendChild(s)}}
    else{const x=document.createElement('div');x.className='v364RanpoLine';layer.appendChild(x)}
    host.appendChild(layer); setTimeout(()=>layer.remove(),900);
  }
  document.addEventListener('click',e=>{if(isSkillButton(e.target))playSkill()},true);
})();

// v365-ougi-cutin-only-script
(()=>{
  const info={
    dazai:{name:'太宰 治',skill:'人間失格'},
    chuuya:{name:'中原 中也',skill:'汚れつちまつた悲しみに'},
    akutagawa:{name:'芥川 龍之介',skill:'羅生門'},
    kenji:{name:'宮沢 賢治',skill:'銀河鉄道の夜'},
    ranpo:{name:'江戸川 乱歩',skill:'超推理'}
  };

  function stage(){
    return document.querySelector('.cleanBattleV238 .posterActorStageV237') ||
           document.querySelector('.bsv2Field_175');
  }

  function activeUnit(){
    const units=[...document.querySelectorAll('.v343HQParty .v343Unit')];
    return units.find(u=>u.classList.contains('active')) || units[0] || null;
  }

  function isOugiButton(target){
    if(!target || !target.closest) return false;
    const el=target.closest('button,[role="button"],[data-sd-action],.cmd,.command,.action');
    if(!el) return false;
    const ds=(el.getAttribute('data-sd-action')||'').toLowerCase();
    const txt=(el.textContent||'').replace(/\s+/g,'');
    return ds.includes('ougi') || ds.includes('ultimate') || txt.includes('奥義');
  }

  function playCutIn(){
    const host=stage(), unit=activeUnit();
    if(!host || !unit) return;

    const key=unit.getAttribute('data-key') || 'dazai';
    const meta=info[key] || info.dazai;

    const box=document.createElement('div');
    box.className='v365CutIn';

    const img=unit.querySelector('img');
    if(img && img.src){
      const pic=document.createElement('img');
      pic.src=img.src;
      pic.alt=meta.name;
      box.appendChild(pic);
    }

    const tx=document.createElement('div');
    tx.className='v365CutInText';
    tx.innerHTML='<small>ULTIMATE</small><b>'+meta.name+'</b><em>'+meta.skill+'</em>';
    box.appendChild(tx);

    host.appendChild(box);
    setTimeout(()=>box.remove(),1080);
  }

  document.addEventListener('click',(e)=>{
    if(isOugiButton(e.target)) playCutIn();
  },true);
})();

// v366-wave-only-script
(()=>{
  let lastWave='';
  function stage(){return document.querySelector('.cleanBattleV238 .posterActorStageV237')||document.querySelector('.bsv2Field_175')}
  function showWave(n){
    const host=stage(); if(!host)return;
    const curtain=document.createElement('div'); curtain.className='v366WaveCurtain';
    const txt=document.createElement('div'); txt.className='v366WaveText'; txt.textContent='WAVE '+n;
    host.append(curtain,txt);
    setTimeout(()=>{curtain.remove();txt.remove()},1050);
  }
  function scan(){
    const node=[...document.querySelectorAll('*')].find(el=>{
      if(el.children.length)return false;
      const t=(el.textContent||'').trim();
      return /^WAVE\s*\d+\/\d+$/i.test(t);
    });
    if(!node)return;
    const current=node.textContent.trim();
    if(current===lastWave)return;
    lastWave=current;
    const m=current.match(/WAVE\s*(\d+)/i);
    if(m)showWave(m[1]);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',scan,{once:true});else scan();
  const mo=new MutationObserver(scan);
  mo.observe(document.documentElement,{subtree:true,childList:true,characterData:true});
})();

// v367-break-only-script
(()=>{
  let lastBreak=null;

  function stage(){
    return document.querySelector('.cleanBattleV238 .posterActorStageV237') ||
           document.querySelector('.bsv2Field_175');
  }

  function readBreak(){
    const els=[...document.querySelectorAll('*')];
    for(const el of els){
      if(el.children.length) continue;
      const t=(el.textContent||'').trim();
      const m=t.match(/^BREAK\s*(\d+)%$/i);
      if(m) return parseInt(m[1],10);
    }
    return null;
  }

  function playBreak(){
    const host=stage();
    if(!host) return;

    const text=document.createElement('div');
    text.className='v367BreakText';
    text.textContent='BREAK';

    const ring=document.createElement('div');
    ring.className='v367BreakRing';

    host.append(text,ring);
    setTimeout(()=>text.remove(),920);
    setTimeout(()=>ring.remove(),760);
  }

  function scan(){
    const now=readBreak();
    if(now===null) return;
    if(lastBreak===null){
      lastBreak=now;
      return;
    }
    if(now===0 && lastBreak>0){
      playBreak();
    }
    lastBreak=now;
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',scan,{once:true});
  }else{
    scan();
  }

  const mo=new MutationObserver(scan);
  mo.observe(document.documentElement,{
    subtree:true,
    childList:true,
    characterData:true
  });
})();

// v368-victory-only-script
(()=>{
  let shown=false;

  function stage(){
    return document.querySelector('.cleanBattleV238 .posterActorStageV237') ||
           document.querySelector('.bsv2Field_175');
  }

  function showVictory(){
    if(shown) return;
    const host=stage();
    if(!host) return;
    shown=true;

    const text=document.createElement('div');
    text.className='v368VictoryText';
    text.textContent='VICTORY';

    const line=document.createElement('div');
    line.className='v368VictoryLine';

    host.append(text,line);

    const units=[...document.querySelectorAll('.v343HQParty .v343Unit')];
    units.forEach((u,i)=>{
      setTimeout(()=>{
        u.classList.add('v368-victory');
        setTimeout(()=>u.classList.remove('v368-victory'),760);
      },i*80);
    });

    setTimeout(()=>text.remove(),1520);
    setTimeout(()=>line.remove(),1450);
  }

  function scan(){
    const body=(document.body.innerText||'');
    if(/勝利|VICTORY/i.test(body)) showVictory();
    if(/敗北|DEFEAT/i.test(body)) shown=false;
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',scan,{once:true});
  }else{
    scan();
  }

  const mo=new MutationObserver(scan);
  mo.observe(document.documentElement,{
    subtree:true,
    childList:true,
    characterData:true
  });
})();

// v383-real-enemies-script
(()=>{
  const DATA={
    shadow:window.__bkAsset("https://ks5154yt-oss.github.io/bungou-kitan-game/assets/embedded_48b86bc4de6a.png"),
    void:window.__bkAsset("https://ks5154yt-oss.github.io/bungou-kitan-game/assets/embedded_ee9a342c17e4.png"),
    hound:window.__bkAsset("https://ks5154yt-oss.github.io/bungou-kitan-game/assets/embedded_218c517d3896.png")
  };

  function wrap(){
    return document.querySelector('.cleanBattleV238 .posterEnemyWrapV237');
  }

  function enemyCount(){
    const w=wrap();
    if(!w) return 0;
    const nodes=[...w.querySelectorAll('.enemyArtV153')].filter(n=>n.offsetParent!==null);
    return nodes.length || w.querySelectorAll('.enemyArtV153').length || 1;
  }

  function ensure(){
    const w=wrap();
    if(!w) return;

    let layer=w.querySelector('.v383EnemyOverlay');
    if(!layer){
      layer=document.createElement('div');
      layer.className='v383EnemyOverlay';

      const a=document.createElement('img');
      a.className='v383Enemy e1';
      a.src=DATA.shadow;
      a.alt='shadow enemy';

      const b=document.createElement('img');
      b.className='v383Enemy e2';
      b.src=DATA.hound;
      b.alt='hound enemy';

      const c=document.createElement('img');
      c.className='v383Enemy e3';
      c.src=DATA.void;
      c.alt='void enemy';

      layer.append(a,b,c);
      w.appendChild(layer);
    }

    const n=Math.max(1,Math.min(3,enemyCount()));
    layer.classList.remove('count1','count2','count3');
    layer.classList.add('count'+n);

    // For a single enemy, make the chained brute the visible focal art.
    if(n===1){
      layer.querySelector('.e1').src=DATA.void;
    }else{
      layer.querySelector('.e1').src=DATA.shadow;
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',ensure,{once:true});
  else ensure();

  const mo=new MutationObserver(()=>requestAnimationFrame(ensure));
  mo.observe(document.documentElement,{subtree:true,childList:true});
})();

// v384-enemy-sync-polish-script
(()=>{
  function wrap(){
    return document.querySelector('.cleanBattleV238 .posterEnemyWrapV237');
  }

  function overlay(){
    return wrap()?.querySelector('.v383EnemyOverlay') || null;
  }

  function visibleEnemies(){
    const w=wrap();
    if(!w) return [];
    return [...w.querySelectorAll('.enemyArtV153')].filter(n=>n.offsetParent!==null);
  }

  function ensureRing(layer){
    let ring=layer.querySelector('.v384TargetRing');
    if(!ring){
      ring=document.createElement('div');
      ring.className='v384TargetRing';
      layer.appendChild(ring);
    }
    return ring;
  }

  function sync(){
    const layer=overlay();
    if(!layer) return;

    const old=layer.querySelectorAll('.v384Target');
    old.forEach(x=>x.classList.remove('v384Target'));
    layer.classList.remove('hasTarget');

    const enemies=visibleEnemies();
    let idx=enemies.findIndex(n=>n.classList.contains('selected')||n.classList.contains('active'));

    if(idx<0){
      const all=[...wrap().querySelectorAll('.enemyArtV153')];
      idx=all.findIndex(n=>n.classList.contains('selected')||n.classList.contains('active'));
    }
    if(idx<0) return;

    const count=Math.max(1,Math.min(3,enemies.length || wrap().querySelectorAll('.enemyArtV153').length || 1));

    let art=null;
    if(count===1){
      art=layer.querySelector('.e1');
    }else if(count===2){
      art=idx===0 ? layer.querySelector('.e1') : layer.querySelector('.e2');
    }else{
      art=layer.querySelector('.e'+(Math.min(idx,2)+1));
    }

    if(!art) return;
    art.classList.add('v384Target');
    layer.classList.add('hasTarget');

    const ring=ensureRing(layer);
    if(count===1){
      ring.style.right='12%';
      ring.style.left='auto';
      ring.style.width='54%';
    }else if(count===2){
      ring.style.width='38%';
      ring.style.right='auto';
      ring.style.left=(idx===0?'11%':'57%');
    }else{
      ring.style.width='27%';
      ring.style.right='auto';
      ring.style.left=(idx===0?'3%':idx===1?'37%':'70%');
    }
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',()=>setTimeout(sync,120),{once:true});
  }else{
    setTimeout(sync,120);
  }

  const mo=new MutationObserver(()=>requestAnimationFrame(sync));
  mo.observe(document.documentElement,{
    subtree:true,
    childList:true,
    attributes:true,
    attributeFilter:['class']
  });

  setInterval(sync,1200);
})();

// v385-enemy-enter-defeat-script
(()=>{
  let lastCount=-1;
  let initialized=false;

  function layer(){
    return document.querySelector('.v383EnemyOverlay');
  }

  function visibleArts(){
    const l=layer();
    if(!l) return [];
    return [...l.querySelectorAll('.v383Enemy')].filter(img=>{
      const s=getComputedStyle(img);
      return s.display!=='none' && s.visibility!=='hidden' && parseFloat(s.opacity||'1')>0.01;
    });
  }

  function playEntrance(){
    const arts=visibleArts();
    arts.forEach((img,i)=>{
      const cls='v385-enter-'+(i+1);
      img.classList.remove('v385-enter-1','v385-enter-2','v385-enter-3');
      void img.offsetWidth;
      img.classList.add(cls);
      setTimeout(()=>img.classList.remove(cls),950);
    });
  }

  function burstAt(img){
    const l=layer();
    if(!l || !img) return;
    const lr=l.getBoundingClientRect();
    const r=img.getBoundingClientRect();

    const b=document.createElement('div');
    b.className='v385Burst';
    b.style.left=((r.left+r.width/2-lr.left)-60)+'px';
    b.style.top=((r.top+r.height/2-lr.top)-60)+'px';
    l.appendChild(b);
    setTimeout(()=>b.remove(),700);
  }

  function defeatIndex(idx){
    const arts=visibleArts();
    const img=arts[Math.max(0,Math.min(idx,arts.length-1))];
    if(!img || img.classList.contains('v385-defeat')) return;
    burstAt(img);
    img.classList.add('v385-defeat');
    setTimeout(()=>img.classList.remove('v385-defeat'),900);
  }

  function currentEnemyCount(){
    const wrap=document.querySelector('.cleanBattleV238 .posterEnemyWrapV237');
    if(!wrap) return 0;
    const nodes=[...wrap.querySelectorAll('.enemyArtV153')].filter(n=>n.offsetParent!==null);
    return nodes.length || wrap.querySelectorAll('.enemyArtV153').length || 0;
  }

  function scan(){
    const c=currentEnemyCount();
    if(!c) return;

    if(!initialized){
      initialized=true;
      lastCount=c;
      setTimeout(playEntrance,140);
      return;
    }

    if(lastCount>=0 && c<lastCount){
      defeatIndex(Math.max(0,c));
    }
    if(c>lastCount){
      setTimeout(playEntrance,120);
    }
    lastCount=c;
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',scan,{once:true});
  }else{
    scan();
  }

  const mo=new MutationObserver(()=>requestAnimationFrame(scan));
  mo.observe(document.documentElement,{subtree:true,childList:true});

  window.bungoV385={playEntrance,defeatIndex};
})();

// v386-boss-art-script
(()=>{
  const DATA=window.__bkAsset("https://ks5154yt-oss.github.io/bungou-kitan-game/assets/embedded_20973d57aabe.jpg");

  function stage(){
    return document.querySelector('.cleanBattleV238 .posterActorStageV237') ||
           document.querySelector('.bsv2Field_175');
  }

  function enemyWrap(){
    return document.querySelector('.cleanBattleV238 .posterEnemyWrapV237');
  }

  function ensure(){
    const host=stage();
    if(!host) return null;

    let art=host.querySelector('.v386BossArt');
    let halo=host.querySelector('.v386BossHalo');
    let label=host.querySelector('.v386BossLabel');

    if(!halo){
      halo=document.createElement('div');
      halo.className='v386BossHalo';
      host.appendChild(halo);
    }
    if(!art){
      art=document.createElement('img');
      art.className='v386BossArt';
      art.src=DATA;
      art.alt='boss';
      host.appendChild(art);
    }
    if(!label){
      label=document.createElement('div');
      label.className='v386BossLabel';
      label.textContent='BOSS';
      host.appendChild(label);
    }
    return {art,halo,label};
  }

  function isBoss(){
    const body=(document.body.innerText||'').toUpperCase();
    return /\bBOSS\b/.test(body) || /ボス/.test(body);
  }

  function sync(){
    const parts=ensure();
    if(!parts) return;
    const wrap=enemyWrap();
    const on=isBoss();

    parts.art.classList.toggle('show',on);
    parts.halo.classList.toggle('show',on);
    parts.label.classList.toggle('show',on);
    if(wrap) wrap.classList.toggle('v386BossMode',on);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',sync,{once:true});
  }else{
    sync();
  }

  const mo=new MutationObserver(()=>requestAnimationFrame(sync));
  mo.observe(document.documentElement,{subtree:true,childList:true,characterData:true});
})();

// v387-boss-intro-script
(()=>{
  let shown=false;

  function stage(){
    return document.querySelector('.cleanBattleV238 .posterActorStageV237') ||
           document.querySelector('.bsv2Field_175');
  }

  function isBoss(){
    const body=(document.body.innerText||'').toUpperCase();
    return /\bBOSS\b/.test(body) || /ボス/.test(body);
  }

  function play(){
    if(shown) return;
    const host=stage();
    if(!host) return;
    shown=true;

    const veil=document.createElement('div');
    veil.className='v387BossVeil';

    const text=document.createElement('div');
    text.className='v387BossIntroText';
    text.textContent='BOSS ENCOUNTER';

    const sweep=document.createElement('div');
    sweep.className='v387BossSweep';

    host.append(veil,text,sweep);

    const bossArt=host.querySelector('.v386BossArt');
    if(bossArt){
      bossArt.classList.add('v387Punch');
      setTimeout(()=>bossArt.classList.remove('v387Punch'),800);
    }

    setTimeout(()=>veil.remove(),1450);
    setTimeout(()=>text.remove(),1400);
    setTimeout(()=>sweep.remove(),950);
  }

  function scan(){
    if(isBoss()) play();
    else shown=false;
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',scan,{once:true});
  }else{
    scan();
  }

  const mo=new MutationObserver(()=>requestAnimationFrame(scan));
  mo.observe(document.documentElement,{subtree:true,childList:true,characterData:true});
})();

// v388-mobile-polish-script
(()=>{
  if(window.__BUNGO_V388__) return;
  window.__BUNGO_V388__=true;
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));

  function label(el){return (el?.textContent||'').replace(/\\s+/g,'').trim();}
  function visible(el){if(!el) return false; const r=el.getBoundingClientRect(); const st=getComputedStyle(el); return r.width>0&&r.height>0&&st.display!=='none'&&st.visibility!=='hidden';}

  function currentTitle(){
    const hs=$$('.p h1,.p h2,.pageHead h1,.pageHead h2').filter(visible);
    return label(hs[0]);
  }
  function syncNav(){
    const nav=$('.nav'); if(!nav) return;
    const title=currentTitle();
    const map=[
      ['ホーム',['ホーム','TOP']],['図鑑',['図鑑','文豪']],['編成',['編成']],['育成',['育成','強化']],['出撃',['出撃','ステージ','戦闘']],['召喚',['召喚','ガチャ']],['装備',['装備']],['模擬',['模擬','PVP']]
    ];
    const buttons=$$('button',nav);
    let hit=null;
    for(const b of buttons){
      b.classList.remove('v388ActiveNav');
      const bt=label(b);
      const row=map.find(([k,vals])=>bt.includes(k)&&vals.some(v=>title.includes(v)));
      if(row) hit=b;
    }
    if(hit) hit.classList.add('v388ActiveNav');
  }

  function prepImages(root=document){
    $$('img',root).forEach(img=>{
      if(img.dataset.v388Prepared) return;
      img.dataset.v388Prepared='1';
      const critical=!!img.closest('.homeWrap,.battleStage,.summonHero,.detailHero');
      if(!critical) img.loading='lazy';
      img.decoding='async';
      img.classList.add('v388LazyVisual');
      const done=()=>img.classList.add('v388Decoded');
      if(img.complete) done(); else { img.addEventListener('load',done,{once:true}); img.addEventListener('error',done,{once:true}); }
    });
  }

  let lastLog='';
  function pulseBattleLog(){
    const log=$('.battlelog'); if(!log) return;
    const now=log.textContent||'';
    if(now!==lastLog){
      lastLog=now;
      log.classList.remove('v388LogPulse');
      void log.offsetWidth;
      log.classList.add('v388LogPulse');
      setTimeout(()=>log.classList.remove('v388LogPulse'),260);
      log.scrollTop=log.scrollHeight;
    }
  }

  document.addEventListener('pointerdown',e=>{
    const b=e.target.closest?.('button,.btn'); if(!b) return;
    b.classList.remove('v388TapFlash'); void b.offsetWidth; b.classList.add('v388TapFlash');
    setTimeout(()=>b.classList.remove('v388TapFlash'),180);
  },{passive:true});

  let raf=0;
  function refresh(){
    cancelAnimationFrame(raf);
    raf=requestAnimationFrame(()=>{prepImages();syncNav();pulseBattleLog();});
  }
  const mo=new MutationObserver(refresh);
  mo.observe(document.documentElement,{subtree:true,childList:true,characterData:true});
  addEventListener('resize',refresh,{passive:true});
  addEventListener('orientationchange',refresh,{passive:true});
  refresh();
})();

// v389-battle-cinema-script
(()=>{
  if(window.__BUNGO_V389__) return; window.__BUNGO_V389__=true;
  const root=()=>document.querySelector('.cleanBattleV238');
  const stage=()=>document.querySelector('.cleanBattleV238 .posterActorStageV237')||document.querySelector('.bsv2Field_175');
  function action(el){
    const b=el?.closest?.('button,[role="button"],[data-sd-action],.cmd,.command,.action'); if(!b)return'';
    const d=(b.getAttribute('data-sd-action')||'').toLowerCase(),t=(b.textContent||'').replace(/\s+/g,'');
    if(d.includes('ougi')||d.includes('ultimate')||t.includes('奥義'))return'ougi';
    if(d.includes('skill')||t.includes('スキル'))return'skill';
    if(d.includes('attack')||t.includes('攻撃'))return'attack';
    return'';
  }
  function activeName(){
    const u=document.querySelector('.v343HQParty .v343Unit.active,.posterLivePartyV217 button.on,.posterLivePartyV217 button.active');
    const n=(u?.querySelector('.name')?.textContent||u?.textContent||'').trim(); return n.slice(0,18);
  }
  function play(type){
    const h=stage(),r=root(); if(!h||!r)return;
    let fx=h.querySelector('.v389Fx'); if(!fx){fx=document.createElement('div');fx.className='v389Fx';h.appendChild(fx)}
    const banner=document.createElement('div');banner.className='v389ActionBanner '+type;
    const title=type==='ougi'?'奥義発動':type==='skill'?'異能発動':'連撃';
    banner.innerHTML='<small>'+(type==='ougi'?'LITERARY ULTIMATE':type==='skill'?'ABILITY':'ATTACK')+'</small><b>'+((activeName()?activeName()+'　':'')+title)+'</b>';
    fx.appendChild(banner);
    const slash=document.createElement('div');slash.className='v389Slash '+type;fx.appendChild(slash);
    const shock=document.createElement('div');shock.className='v389Shock';fx.appendChild(shock);
    setTimeout(()=>{const t=document.createElement('div');t.className='v389HitText '+type;t.textContent=type==='ougi'?'CRITICAL!!':type==='skill'?'ABILITY HIT!':'HIT!';fx.appendChild(t);setTimeout(()=>t.remove(),800)},type==='ougi'?280:180);
    r.classList.remove('v389Impact','v389OugiFlash');void r.offsetWidth;r.classList.add('v389Impact');if(type==='ougi')r.classList.add('v389OugiFlash');
    setTimeout(()=>r.classList.remove('v389Impact','v389OugiFlash'),760);
    setTimeout(()=>{banner.remove();slash.remove();shock.remove()},900);
  }
  let bossWarned=false, bossHits=0;
  function bossCheck(){
    const r=root(),h=stage();if(!r||!h)return;
    const text=(r.textContent||'').toUpperCase(); const boss=/\bBOSS\b|ボス/.test(text);
    if(!boss){bossWarned=false;bossHits=0;return}
    if(bossHits>=3&&!bossWarned){bossWarned=true;const x=document.createElement('div');x.className='v389BossDanger';x.textContent='DANGER  •  BOSS PHASE SHIFT';h.appendChild(x);setTimeout(()=>x.remove(),1400)}
  }
  document.addEventListener('click',e=>{const a=action(e.target);if(!a)return;if(a==='attack'||a==='skill'||a==='ougi')bossHits++;setTimeout(()=>play(a),a==='ougi'?120:70);setTimeout(bossCheck,180)},true);
  const mo=new MutationObserver(()=>requestAnimationFrame(bossCheck));mo.observe(document.documentElement,{subtree:true,childList:true,characterData:true});bossCheck();
})();

// v391-ougi-options-script
(()=>{
 const KEY='bk12_ougi_fx_mode';
 const modes={normal:'標準',lite:'軽量',off:'OFF'};
 function apply(mode){
   document.body.classList.remove('ougiLiteV391','ougiOffV391');
   if(mode==='lite') document.body.classList.add('ougiLiteV391');
   if(mode==='off') document.body.classList.add('ougiOffV391');
   try{localStorage.setItem(KEY,mode)}catch(e){}
 }
 function init(){
   let mode='lite';
   try{mode=localStorage.getItem(KEY)||'lite'}catch(e){}
   apply(mode);
   if(!document.body.classList.contains('battleMode')){document.getElementById('v391OugiSetting')?.remove();return;}
   if(document.getElementById('v391OugiSetting')) return;
   const wrap=document.createElement('label');
   wrap.id='v391OugiSetting';
   wrap.className='v391OugiSetting';
   wrap.textContent='奥義演出';
   const sel=document.createElement('select');
   for(const [k,v] of Object.entries(modes)){const o=document.createElement('option');o.value=k;o.textContent=v;if(k===mode)o.selected=true;sel.appendChild(o)}
   sel.addEventListener('change',()=>apply(sel.value));
   wrap.appendChild(sel);
   document.body.appendChild(wrap);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
 const v413mo=new MutationObserver(()=>init());
 v413mo.observe(document.body,{attributes:true,attributeFilter:['class']});
})();

// v392-character-ougi-fx-script
(()=>{
 if(window.__BUNGO_V392__) return; window.__BUNGO_V392__=true;
 const label={dazai:'NULLIFY',chuuya:'GRAVITY',akutagawa:'RASHOMON',kenji:'STARLIGHT',ranpo:'ANALYSIS'};
 function host(){return document.querySelector('.cleanBattleV238 .posterActorStageV237')||document.querySelector('.bsv2Field_175')}
 function active(){const a=[...document.querySelectorAll('.v343HQParty .v343Unit')];return a.find(x=>x.classList.contains('active'))||a[0]||null}
 function isOugi(t){const b=t?.closest?.('button,[role="button"],[data-sd-action],.cmd,.command,.action');if(!b)return false;const d=(b.getAttribute('data-sd-action')||'').toLowerCase(),x=(b.textContent||'').replace(/\s+/g,'');return d.includes('ougi')||d.includes('ultimate')||x.includes('奥義')}
 function make(key){
   const h=host(); if(!h||document.body.classList.contains('ougiOffV391')) return;
   h.querySelectorAll('.v392OugiFx').forEach(n=>n.remove());
   const fx=document.createElement('div');fx.className='v392OugiFx '+key;
   const tag=document.createElement('span');tag.className='tag';tag.textContent=label[key]||'ULTIMATE';fx.appendChild(tag);
   if(key==='dazai'||key==='chuuya'||key==='akutagawa'){for(let i=0;i<3;i++)fx.appendChild(document.createElement('i'));if(key==='chuuya')fx.appendChild(document.createElement('b'))}
   else if(key==='kenji'){
     [[57,52],[63,43],[69,55],[75,38],[80,49],[72,62]].forEach(([x,y],i)=>{const s=document.createElement('i');s.style.setProperty('--x',x+'%');s.style.setProperty('--y',y+'%');s.style.animationDelay=(i*.04)+'s';fx.appendChild(s)})
   }else{
     [34,42,50,58].forEach((y,i)=>{const s=document.createElement('i');s.style.setProperty('--y',y+'%');s.style.animationDelay=(i*.035)+'s';fx.appendChild(s)});fx.appendChild(document.createElement('b'));
   }
   h.appendChild(fx);setTimeout(()=>fx.remove(),880);
 }
 document.addEventListener('click',e=>{if(!isOugi(e.target))return;const u=active();const key=u?.getAttribute('data-key')||'dazai';setTimeout(()=>make(key),110)},true);
})();

// v393-enemy-cinema-script
(()=>{
 if(window.__BUNGO_V393__) return; window.__BUNGO_V393__=true;
 const root=()=>document.querySelector('.cleanBattleV238');
 const stage=()=>document.querySelector('.cleanBattleV238 .posterActorStageV237')||document.querySelector('.bsv2Field_175');
 function enemyKind(){
   const w=document.querySelector('.posterEnemyWrapV237');
   const txt=((w?.textContent||'')+' '+(root()?.textContent||'')).toLowerCase();
   const cls=(w?.innerHTML||'').toLowerCase();
   if(txt.includes('ink')||txt.includes('インク')||cls.includes('ink-wraith'))return'ink';
   if(txt.includes('page')||txt.includes('紙')||txt.includes('頁')||cls.includes('page-eater'))return'page';
   if(txt.includes('punct')||txt.includes('句読')||txt.includes('記号')||cls.includes('punct'))return'punct';
   return'normal';
 }
 function enemyName(){
   const w=document.querySelector('.posterEnemyWrapV237');
   const t=(w?.textContent||'').replace(/\s+/g,' ').trim();
   if(/boss/i.test(t)||/ボス/.test(t))return'BOSS';
   return t.slice(0,18)||'ENEMY';
 }
 function isBoss(){
   const r=root(); if(!r)return false; const t=(r.textContent||'').toUpperCase(); return /\bBOSS\b|ボス/.test(t);
 }
 function ensure(){const h=stage();if(!h)return null;let fx=h.querySelector('.v393EnemyFx');if(!fx){fx=document.createElement('div');fx.className='v393EnemyFx';h.appendChild(fx)}return fx}
 function playAttack(boss=false){
   const fx=ensure(),r=root();if(!fx||!r)return;
   const k=enemyKind(), name=enemyName();
   const warn=document.createElement('div');warn.className='v393EnemyWarn';warn.innerHTML='<small>ENEMY ACTION</small><b>'+name+'</b>';fx.appendChild(warn);
   const arc=document.createElement('div');arc.className='v393EnemyArc '+k;fx.appendChild(arc);
   const pulse=document.createElement('div');pulse.className='v393EnemyPulse '+k;fx.appendChild(pulse);
   r.classList.remove('v393EnemyImpact');void r.offsetWidth;r.classList.add('v393EnemyImpact');
   if(boss){const ult=document.createElement('div');ult.className='v393BossUltimate';ult.innerHTML='<small>BOSS LITERARY ART</small><b>禁書解放</b>';fx.appendChild(ult);setTimeout(()=>ult.remove(),1050)}
   setTimeout(()=>r.classList.remove('v393EnemyImpact'),420);
   setTimeout(()=>{warn.remove();arc.remove();pulse.remove()},850);
 }
 let last='', bossCounter=0, lock=0;
 function scan(){
   const log=document.querySelector('.battlelog');if(!log)return;
   const txt=log.textContent||'';if(txt===last)return;
   const delta=txt.slice(Math.max(0,last.length-12));last=txt;
   const enemy=/敵|enemy|ボス|boss|怪異|攻撃|ダメージ/i.test(delta);
   const player=/奥義発動|ABILITY HIT|CRITICAL|連撃|異能発動/i.test(delta);
   if(!enemy||player)return;
   const now=Date.now();if(now-lock<500)return;lock=now;
   const boss=isBoss(); if(boss)bossCounter++;
   setTimeout(()=>playAttack(boss && bossCounter%3===0),90);
 }
 const mo=new MutationObserver(()=>requestAnimationFrame(scan));
 mo.observe(document.documentElement,{subtree:true,childList:true,characterData:true});scan();
})();

// v394-enemy-art-phase2-script
(()=>{
  let count=0,active=false,lastBoss=false;
  function root(){return document.querySelector('.cleanBattleV238')||document.querySelector('.battleV119')}
  function stage(){const r=root();return r&&(r.querySelector('.posterActorStageV237')||r.querySelector('.bsv2Field_175')||r)}
  function isBoss(){const r=root();if(!r)return false;const t=(r.textContent||'').toLowerCase();return /boss|ボス|禁書|終章|最終/.test(t)||!!r.querySelector('.v386BossArt,.enemyArtV153.boss')}
  function setPhase(on){const r=root();if(!r)return;r.classList.toggle('v394Phase2',!!on);active=!!on}
  function burst(){const s=stage();if(!s)return;const a=document.createElement('div');a.className='v394PhaseBurst';const t=document.createElement('div');t.className='v394PhaseTitle';t.innerHTML='<small>BOSS SECOND FORM</small><b>禁書・第二形態</b><em>PHASE II AWAKENING</em>';s.appendChild(a);s.appendChild(t);setTimeout(()=>a.remove(),1100);setTimeout(()=>t.remove(),1500)}
  function resetIfNeeded(){const b=isBoss();if(!b){count=0;if(active)setPhase(false)}else if(!lastBoss){count=0;setPhase(false)}lastBoss=b}
  function actionTarget(el){return el&&el.closest&&el.closest('[data-sd-action],.actionClusterV164 button,.battleAttackOrbV151,.selectedSkillsV152 button,.posterCommandDockV217 button')}
  document.addEventListener('click',e=>{resetIfNeeded();if(!isBoss())return;const b=actionTarget(e.target);if(!b)return;count++;if(count>=4&&!active){setPhase(true);burst()}},true);
  const mo=new MutationObserver(()=>requestAnimationFrame(resetIfNeeded));
  mo.observe(document.documentElement,{subtree:true,childList:true,characterData:true});
  resetIfNeeded();
})();

// v395-boss-climax-script
(()=>{
 let phase2Attacks=0,lastLog='',rage=false,finished=false;
 function root(){return document.querySelector('.cleanBattleV238')||document.querySelector('.battleV119')}
 function stage(){const r=root();return r&&(r.querySelector('.posterActorStageV237')||r.querySelector('.bsv2Field_175')||r)}
 function boss(){const r=root();if(!r)return false;const t=(r.textContent||'').toLowerCase();return /boss|ボス|禁書|終章|最終/.test(t)||!!r.querySelector('.v386BossArt,.enemyArtV153.boss')}
 function phase2(){const r=root();return !!(r&&r.classList.contains('v394Phase2'))}
 function fx(){const s=stage();if(!s)return null;let f=s.querySelector('.v395BossFx');if(!f){f=document.createElement('div');f.className='v395BossFx';s.appendChild(f)}return f}
 function pattern(){const f=fx(),r=root();if(!f||!r)return;phase2Attacks++;const p=document.createElement('div');p.className='v395BossPattern p'+(((phase2Attacks-1)%3)+1);f.appendChild(p);for(let i=1;i<=3;i++){const s=document.createElement('div');s.className='v395BossStrike s'+i;f.appendChild(s);setTimeout(()=>s.remove(),900)}setTimeout(()=>p.remove(),900)}
 function findHpPct(){const r=root();if(!r)return null;const bars=[...r.querySelectorAll('[style*="width"],.meter i,.progress i,.enemyHp i,.hp i')];for(const b of bars){const s=b.getAttribute('style')||'';const m=s.match(/width\s*:\s*(\d+(?:\.\d+)?)%/i);if(m){const v=+m[1];if(v>=0&&v<=100)return v}}const txt=r.textContent||'';let m=txt.match(/HP\s*(\d+)\s*\/\s*(\d+)/i);if(m&&+m[2]>0)return(+m[1]/+m[2])*100;return null}
 function updateRage(){const r=root();if(!r||!boss()||!phase2()){if(r)r.classList.remove('v395Rage');rage=false;return}const hp=findHpPct();const should=hp!==null&&hp<=30;if(should&&!rage){rage=true;r.classList.add('v395Rage');const f=fx();if(f){const b=document.createElement('div');b.className='v395RageBadge';b.textContent='BERSERK  •  禁書暴走';f.appendChild(b);setTimeout(()=>b.remove(),1100)}}}
 function finish(){if(finished)return;finished=true;const f=fx();if(!f)return;const w=document.createElement('div');w.className='v395FinisherWash';const t=document.createElement('div');t.className='v395FinisherTitle';t.innerHTML='<small>BOSS DEFEATED</small><b>禁書封印</b><em>LITERARY SEAL COMPLETE</em>';f.appendChild(w);f.appendChild(t);setTimeout(()=>w.remove(),1000);setTimeout(()=>t.remove(),1400)}
 function scan(){const r=root();if(!r)return;if(!boss()){phase2Attacks=0;rage=false;finished=false;r.classList.remove('v395Rage');lastLog='';return}updateRage();const log=r.querySelector('.battlelog')||document.querySelector('.battlelog');const txt=log?.textContent||'';if(txt!==lastLog){const delta=txt.slice(Math.max(0,lastLog.length-30));lastLog=txt;if(phase2()&&/敵|enemy|ボス|boss|攻撃|ダメージ/i.test(delta)&&!/奥義発動|ABILITY HIT|CRITICAL|連撃|異能発動/i.test(delta))setTimeout(pattern,70);if(/撃破|勝利|victory|defeat|討伐|戦闘終了/i.test(delta))setTimeout(finish,120)}const text=(r.textContent||'');if(/VICTORY|勝利|撃破|討伐完了/i.test(text))finish()}
 const mo=new MutationObserver(()=>requestAnimationFrame(scan));mo.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class','style']});scan();
})();

// v396-boss-identity-script
(()=>{
  const state={last:'',ticks:0};
  const root=()=>document.querySelector('.cleanBattleV238')||document.querySelector('.battleV119')||document.body;
  function bossType(){
    const txt=(document.body.innerText||'').toLowerCase();
    if(/ink|墨|インク/.test(txt)) return 'ink';
    if(/page|頁|ページ|禁書/.test(txt)) return 'page';
    if(/punct|記号|句読/.test(txt)) return 'punct';
    if(/wraith|亡霊|影|怨/.test(txt)) return 'wraith';
    return 'default';
  }
  function moveFor(t){
    return {ink:['墨界侵食','黒雨・無明'],page:['禁頁奔流','断章崩落'],punct:['終止符・零','句読断界'],wraith:['怨嗟反響','亡影連斬'],default:['禁書解放','終章崩壊']}[t]||['禁書解放','終章崩壊'];
  }
  function cls(t){return {ink:'v396InkBoss',page:'v396PageBoss',punct:'v396PunctBoss',wraith:'v396WraithBoss',default:''}[t]||''}
  function pulse(){
    const host=root(); if(!host) return;
    const t=bossType();
    ['v396InkBoss','v396PageBoss','v396PunctBoss','v396WraithBoss'].forEach(c=>host.classList.remove(c));
    const c=cls(t); if(c) host.classList.add(c);
    const boss=host.querySelector('.enemyArtV153.boss'); if(!boss) return;
    const phase2=host.querySelector('.phase2,.secondPhase,.berserk,.v394Phase2,.v395Berserk')||/PHASE II|第二形態|暴走/.test(document.body.innerText||'');
    if(!phase2) return;
    state.ticks++;
    if(state.ticks%11!==0) return;
    const moves=moveFor(t);
    const name=moves[(state.ticks/11)%2|0];
    const sig=document.createElement('div');sig.className='v396BossSigil '+t;sig.innerHTML='<b>'+name.replace('・','<br>')+'</b>';host.appendChild(sig);setTimeout(()=>sig.remove(),1200);
    const mv=document.createElement('div');mv.className='v396BossMove '+t;mv.innerHTML='<small>BOSS PHASE II</small><b>'+name+'</b>';host.appendChild(mv);setTimeout(()=>mv.remove(),1050);
  }
  setInterval(pulse,550);
})();

// v397-auto-rescue-script
(()=>{
  const KEY='bk12_v397_auto';
  let state=localStorage.getItem(KEY)==='1';
  let lastClick=0,lastKey='';
  function visible(el){if(!el) return false; const cs=getComputedStyle(el); if(cs.display==='none'||cs.visibility==='hidden'||+cs.opacity===0) return false; const r=el.getBoundingClientRect(); return r.width>0 && r.height>0 && r.bottom>0 && r.right>0 && r.top<innerHeight && r.left<innerWidth;}
  function txt(el){return ((el.innerText||el.textContent||'').replace(/\s+/g,' ').trim());}
  function clickableButtons(){return [...document.querySelectorAll('button,[role="button"]')].filter(visible);}
  function setState(on){state=!!on; localStorage.setItem(KEY,state?'1':'0'); document.body.classList.toggle('v397AutoMode',state); renderHud(); syncBadges();}
  function toggle(){setState(!state)}
  function syncBadges(){document.querySelectorAll('.bsv2AutoBadge184,.resultLoopV181 button.auto,[data-auto],button').forEach(b=>{const t=txt(b); if(/AUTO|オート/i.test(t)) b.classList.toggle('on',state);});}
  function renderHud(){
    let host=document.getElementById('v397AutoHud');
    if(!document.body.classList.contains('battleMode')){ if(host)host.remove(); return; }
    if(!host){ host=document.createElement('div'); host.id='v397AutoHud'; document.body.appendChild(host);}
    host.className='v397AutoHud'+(state?'':' off');
    host.innerHTML=`<div><small>AUTO</small><b>${state?'ON':'OFF'}</b></div><button type="button">${state?'停止':'開始'}</button>`;
    host.querySelector('button').onclick=(e)=>{e.preventDefault();e.stopPropagation();toggle();};
  }
  function likelyAutoToggle(el){ if(!el) return false; const t=txt(el); return /AUTO|オート/i.test(t) || el.classList.contains('auto') || el.classList.contains('bsv2AutoBadge184'); }
  document.addEventListener('click',e=>{
    const btn=e.target.closest('button,[role="button"]');
    if(!btn || btn.closest('#v397AutoHud')) return;
    if(likelyAutoToggle(btn)){
      /* Native AUTO must receive its own click. Mirror the visual state only after it runs. */
      setTimeout(()=>{
        const t=txt(btn);
        const nativeOn=btn.classList.contains('on')||btn.classList.contains('auto')||/ON/i.test(t);
        state=nativeOn; localStorage.setItem(KEY,state?'1':'0');
        document.body.classList.toggle('v397AutoMode',state); renderHud(); syncBadges();
      },80);
    }
  },true);
  function press(el){ if(!visible(el)) return false; const key=(el.dataset && (el.dataset.sdAction||el.dataset.battle)) || txt(el).slice(0,20); const now=Date.now(); if(now-lastClick<260 && key===lastKey) return false; lastClick=now; lastKey=key; try{ el.click(); return true; }catch(_){ try{ el.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true})); return true;}catch(e){ return false; } } }
  function chooseButton(){
    const buttons=clickableButtons();
    const textOf=(x)=>txt(x);

    /* 1) Result / modal continuation first. */
    let b=buttons.find(x=>!x.disabled && !/AUTO|オート/i.test(textOf(x)) && /再戦|もう一度|リトライ|次へ|つぎへ|続行|つづける|OK|閉じる|とじる/i.test(textOf(x)));
    if(b) return b;

    /* 2) On a stage-select page, NEVER press Quick Farm automatically.
          Uncleared chapters show the farm UI but reject it, which caused the old AUTO loop. */
    const stagePage=document.querySelector('.stagePageV100,.stagePageV97,.farmHeroV100');
    if(stagePage && visible(stagePage)){
      const stageBattle=[
        ...document.querySelectorAll('.stageSubActions button[data-battle],button[data-battle],.stageModeV97 button:not(:disabled)')
      ].find(x=>visible(x) && !x.disabled && !/HARD|未解放|周回|FARM/i.test(textOf(x)));
      if(stageBattle) return stageBattle;
      const normal=buttons.find(x=>!x.disabled && /NORMAL|通常戦闘/i.test(textOf(x)) && !/未解放/i.test(textOf(x)));
      if(normal) return normal;
      return null;
    }

    /* 3) Battle actions. Ougi only when ready, otherwise skill then attack. */
    const readyOugi=document.querySelector('.actionClusterV164 [data-sd-action="ougi"].readyV198,.actionClusterV164 .ougi.ready,.bsv2Selected176 button.ready');
    if(visible(readyOugi) && !readyOugi.disabled) return readyOugi;
    for(const q of [
      '.actionClusterV164 [data-sd-action="skill"]',
      '.actionClusterV164 .skill',
      '.bsv2Selected176 button.ready',
      '.selectedSkillsV152 button.ready',
      '.actionClusterV164 [data-sd-action="attack"]',
      '.actionClusterV164 .attack'
    ]){
      b=document.querySelector(q);
      if(visible(b) && !b.disabled && !/AUTO|オート/i.test(textOf(b))) return b;
    }

    /* 4) Battle result controls, but never Quick Farm or AUTO toggles. */
    b=[...document.querySelectorAll('.resultLoopV181 button,.autoLoopFinishedV201 button,.autoLoopResultV200 button')]
      .find(x=>visible(x)&&!x.disabled&&!/AUTO|オート|周回|FARM/i.test(textOf(x)));
    if(b) return b;

    return buttons.find(x=>!x.disabled && !/AUTO|オート|周回|FARM|HARD|未解放/i.test(textOf(x)) && /攻撃|たたかう|戦闘|決定|次へ|再戦|挑戦|出撃/i.test(textOf(x))) || null;
  }
  function loop(){ if(!state||!document.body.classList.contains('battleMode')) return; syncBadges(); const btn=chooseButton(); if(btn) press(btn); }
  renderHud(); syncBadges(); document.body.classList.toggle('v397AutoMode',state);
  setInterval(loop,950);
  setInterval(()=>{ if(document.readyState==='complete') {renderHud(); syncBadges();}},2000);
})();

// v399-auto-touch-script
(()=>{
  document.addEventListener('click',e=>{
    const host=e.target.closest('#v397AutoHud');
    if(!host) return;
    const btn=host.querySelector('button');
    if(!btn) return;
    if(e.target===btn || e.target.closest('button')) return;
    e.preventDefault();
    e.stopPropagation();
    btn.click();
  },true);
})();

// v400-auto-hardfix-script
(()=>{
  const KEY='bk12_v400_auto';
  let on=localStorage.getItem(KEY)==='1';
  let lastAction=0;
  function isVisible(el){if(!el||el.disabled)return false;const s=getComputedStyle(el);if(s.display==='none'||s.visibility==='hidden'||s.pointerEvents==='none'||+s.opacity===0)return false;const r=el.getBoundingClientRect();return r.width>10&&r.height>10&&r.bottom>0&&r.right>0&&r.top<innerHeight&&r.left<innerWidth}
  function text(el){return (el?.innerText||el?.textContent||'').replace(/\s+/g,' ').trim()}
  function hud(){return document.getElementById('v397AutoHud')}
  function draw(){
    const h=hud(); if(!h)return;
    h.classList.toggle('off',!on);
    h.innerHTML=`<div><small>AUTO</small><b>${on?'ON':'OFF'}</b></div><button id="v400AutoButton" type="button" aria-pressed="${on}">${on?'停止':'開始'}</button>`;
  }
  function set(v){on=!!v;localStorage.setItem(KEY,on?'1':'0');document.body.classList.toggle('v397AutoMode',on);draw()}
  function toggle(){set(!on)}
  function bind(){
    const h=hud(); if(!h)return;
    // Make the whole panel a large touch target. pointerup works reliably on iPhone Safari.
    if(h.dataset.v400Bound==='1')return;
    h.dataset.v400Bound='1';
    h.addEventListener('pointerdown',e=>{h.classList.add('v400Pressed')},{passive:true});
    h.addEventListener('pointercancel',()=>h.classList.remove('v400Pressed'),{passive:true});
    h.addEventListener('pointerup',e=>{
      h.classList.remove('v400Pressed');
      e.preventDefault();e.stopPropagation();
      toggle();
    },{capture:true});
  }
  function action(){
    if(!on||!document.body.classList.contains('battleMode'))return;
    const now=Date.now(); if(now-lastAction<520)return;
    const qs=[
      '.actionClusterV164 [data-sd-action="ougi"].readyV198',
      '.actionClusterV164 .ougi.ready',
      '.bsv2Selected176 button.ready',
      '.selectedSkillsV152 button.ready',
      '.actionClusterV164 [data-sd-action="skill"]',
      '.actionClusterV164 .skill',
      '.actionClusterV164 [data-sd-action="attack"]',
      '.actionClusterV164 .attack'
    ];
    for(const q of qs){const b=document.querySelector(q);if(isVisible(b)){lastAction=now;b.click();return}}
    // Result / next battle controls only. Never touch quick-farm or locked difficulty.
    const buttons=[...document.querySelectorAll('button')].filter(isVisible);
    const next=buttons.find(b=>!/AUTO|オート|周回|FARM|HARD|未解放/i.test(text(b))&&/再戦|次へ|続行|OK|出撃|挑戦|通常戦闘|NORMAL/i.test(text(b)));
    if(next){lastAction=now;next.click()}
  }
  function init(){
    draw();bind();document.body.classList.toggle('v397AutoMode',on);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
  new MutationObserver(()=>{draw();bind()}).observe(document.documentElement,{subtree:true,childList:true});
  setInterval(action,650);
})();
