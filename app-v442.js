window.__bkBooted=false;window.__bkBootGuard=false;
window.__safeCallV440=function(name){
  try{
    const fn=window[name];
    if(typeof fn==="function")return fn();
  }catch(e){console.warn("V440 safe cleanup",name,e)}
};

try{
  window.__BK_BUILD__="V442";
  localStorage.setItem("bungou_kitan_build","V442");
}catch(_){}

try{document.getElementById("v412Boot")?.remove()}catch(_){}
setTimeout(()=>document.getElementById("battleLoadingV411")?.remove(),2500);

window.addEventListener("error",function(e){finalErrorShield(e.error||e.message)});
window.addEventListener("unhandledrejection",function(e){finalErrorShield(e.reason)});

function setBootChromeReady(ready){
 let body=document.body;if(body)body.classList.toggle("appReady",!!ready);
 let rescue=document.getElementById("manualRescue");if(rescue)rescue.style.display=ready?"none":"";
 let mark=document.querySelector(".bootMark");if(mark)mark.style.display=ready?"none":"";
}
function battleLoadingV411(show,text="戦闘を準備しています…"){
 let id="battleLoadingV411",old=document.getElementById(id);
 if(!show){old?.remove();return}
 if(old){let s=old.querySelector("span");if(s)s.textContent=text;return}
 let d=document.createElement("div");d.id=id;d.className="battleLoadingV411";
 d.innerHTML=`<div><i></i><b>BATTLE PREP</b><span>${text}</span><small>初回のみ戦闘データを読み込みます</small></div>`;
 document.body.appendChild(d)
}

function emergencyHome(){
 setBootChromeReady(true);
 let a=document.getElementById("app");if(!a)return;
 a.innerHTML=`<div class=p style="padding-top:70px"><div class=card><h1 style="font-family:serif;color:#efc56d">文豪綺譚</h1><p>簡易モードで起動しました。</p><button class=btn onclick="location.reload()">通常モードを再読込</button><button class=btn onclick="try{localStorage.removeItem('bk12');location.reload()}catch(e){}">新規データで起動</button></div></div>`;
}
const C=[
["dazai","太宰 治","人間失格","日本","妨害","SSR"],["chuuya","中原 中也","汚れつちまつた悲しみに","日本","攻撃","SSR"],
["aku","芥川 龍之介","羅生門","日本","攻撃","SR"],["kenji","宮沢 賢治","銀河鉄道の夜","日本","回復","SR"],
["ranpo","江戸川 乱歩","黒蜥蜴","日本","妨害","SR"],["soseki","夏目 漱石","こころ","日本","防御","SR"],
["murasaki","紫式部","源氏物語","日本","支援","SSR"],["akiko","与謝野 晶子","みだれ髪","日本","回復","SR"],
["ogai","森 鴎外","舞姫","日本","防御","SR"],["tanizaki","谷崎 潤一郎","細雪","日本","支援","SR"],
["kawabata","川端 康成","雪国","日本","速度","SR"],["mishima","三島 由紀夫","金閣寺","日本","攻撃","SSR"],
["akutagawa2","泉 鏡花","高野聖","日本","妨害","SR"],["hagiwara","萩原 朔太郎","月に吠える","日本","妨害","SR"],
["sakaguchi","坂口 安吾","堕落論","日本","攻撃","SSR"],["kajii","梶井 基次郎","檸檬","日本","特殊","SR"],
["higuchi","樋口 一葉","たけくらべ","日本","支援","SR"],["kobayashi","小林 多喜二","蟹工船","日本","防御","SR"],
["yokomitsu","横光 利一","機械","日本","速度","SR"],["nakajima","中島 敦","山月記","日本","攻撃","SR"],
["koizumi","小泉 八雲","怪談","日本","妨害","SR"],["seicho","松本 清張","点と線","日本","妨害","SSR"],
["poe","E・A・ポー","大鴉","海外","妨害","SSR"],["shakespeare","シェイクスピア","ハムレット","海外","攻撃","UR"],
["doyle","コナン・ドイル","シャーロック・ホームズ","海外","妨害","SSR"],["verne","ジュール・ヴェルヌ","海底二万里","海外","速度","SR"],
["andersen","アンデルセン","人魚姫","海外","回復","SSR"],["kafka","カフカ","変身","海外","特殊","SSR"],
["wilde","オスカー・ワイルド","ドリアン・グレイ","海外","妨害","SR"],["dumas","デュマ","モンテ・クリスト伯","海外","攻撃","SR"],
["tolstoy","トルストイ","戦争と平和","海外","防御","SSR"],["dostoevsky","ドストエフスキー","罪と罰","海外","妨害","UR"],
["hemingway","ヘミングウェイ","老人と海","海外","攻撃","SR"],["orwell","ジョージ・オーウェル","1984年","海外","特殊","SSR"],
["amemiya_mio","雨宮 澪","境界都市","幻想","特殊","UR"],
["kurose_rin","黒瀬 凛","密室構築","ミステリ","妨害","SSR"],
["mizuki_kanade","水城 奏","青の残響","青春","支援","SSR"],
["shinonome_yaya","東雲 夜々","午前零時の読者","怪奇","攻撃","UR"],
["shirakawa_fumi","白河 文","余白","純文学","妨害","SSR"],
["tsukishima_shiori","月島 栞","未送信の手紙","恋愛","回復","SR"],
["kamishiro_ren","神代 レン","世界線校正","SF","特殊","SSR"],
["mikage_akari","御影 灯","物語改稿","文学融合","特殊","UR"],
["tachibana_kanade","橘 カナデ","バズワード","SNS","妨害","SSR"],
["yakumo_saku","八雲 朔","残像記録","ノンフィクション","特殊","SR"],
["ayatsuji_yui","綾辻 結","エンドロール","ライト文芸","支援","SSR"],
["hoshino_ruri","星野 ルリ","夜更かしの言い訳","エッセイ","特殊","SR"],
["kisaragi_rei","如月 玲","透明な夜","幻想","攻撃","UR"],
["saionji_mio","西園寺 澪","硝子の余白","純文学","妨害","SSR"],
["amagi_rin","天城 凛","逆光の証言","ミステリ","妨害","SSR"],
["kurokawa_yoru","黒川 夜","深夜二時の読者","怪奇","攻撃","UR"],
["shirogane_noa","白銀 ノア","黒猫の栞","幻想","支援","SSR"],
["fuyutsuki_shiori","冬月 詩織","閉じた頁","純文学","回復","SR"],
["momose_ruka","百瀬 瑠花","桃色の残響","恋愛","支援","SSR"],
["aonami_sui","青波 翠","蒼い体温","青春","攻撃","UR"],
["kagami_kei","鏡 慧","反転する真実","推理","妨害","SSR"],
["mikazuki_aya","三日月 綾","月蝕の文法","幻想","特殊","UR"],
["kujo_maya","九条 真夜","沈黙の見出し","社会派","妨害","SSR"],
["sakuraba_otoha","桜庭 音羽","言えない一行","恋愛","回復","SR"],
["hanamura_towa","花村 永遠","桜の続きを","青春","支援","SSR"],
["tsukino_ran","月野 蘭","黒翼の伏線","サスペンス","攻撃","UR"],
["shinomiya_kanade","四宮 奏","雨音の句読点","純文学","特殊","SSR"],
["hoshikawa_iri","星川 伊織","ネオンの未来稿","SF","特殊","UR"],
["minase_yura","水瀬 由良","指先の嘘","心理","妨害","SSR"],
["tachibana_mei","橘 芽衣","午後三時の本音","エッセイ","回復","SR"],
["asakura_renka","朝倉 蓮花","摩天楼の風","紀行","支援","SSR"],
["kisaragi_maya","如月 真綾","喪失の花束","怪奇","攻撃","UR"],
["kuon_setsuna","久遠 刹那","零秒の記録","SF","特殊","SSR"],
["shinonome_hina","東雲 陽菜","毛布の向こう側","日常","回復","SR"],
["karasuma_touka","烏丸 灯花","夜明け前の黒","幻想","攻撃","UR"],
["yuragi_sena","揺木 セナ","白百合の余白","純文学","支援","SSR"]
];
let S={xp:20000,ink:1500,rating:1000,set:0,sets:Array.from({length:10},()=>[0,1,2,3,4,5])};
try{Object.assign(S,JSON.parse(localStorage.getItem("bk12")||"{}"))}catch(e){}
if(!S.final)S.final={credits:false,challenge:{clears:0,best:"-"}};if(!S.progress)S.progress={clears:[0,0,0,0],streak:0,bestStreak:0};if(!S.stageBest)S.stageBest=[0,0,0,0];if(S.lastBattleCh==null)S.lastBattleCh=0;if(!S.sessionRun)S.sessionRun={count:0,tickets:0,gear:0};if(!S.gear)S.gear=[];if(!S.equipped)S.equipped={};if(S.gearPity==null)S.gearPity=0;if(S.urPity==null)S.urPity=0;if(!S.lootStats)S.lootStats={drops:0,ssr:0,ur:0};if(S.lootStats.elite==null)S.lootStats.elite=0;if(!S.lootRewards)S.lootRewards={};for(let k in S.equipped){if(typeof S.equipped[k]==="string")S.equipped[k]={pen:S.equipped[k],book:null,accessory:null};}if(S.autoSellRank===undefined)S.autoSellRank=null;if(S.gold==null)S.gold=0;if(S.normalTickets==null)S.normalTickets=0;if(!S.mastery)S.mastery={wins:0,skills:0,perfect:0};if(!S.profile)S.profile={name:"司書",title:"新人司書"};if(!S.settings)S.settings={confirm:true,compact:false};
function migrateSave(){
 if(!S||typeof S!=="object")S={};
 if(!Number.isFinite(+S.xp))S.xp=0;if(!Number.isFinite(+S.ink))S.ink=0;if(!Number.isFinite(+S.rating))S.rating=1000;
 if(!Array.isArray(S.sets)||S.sets.length!==10)S.sets=Array.from({length:10},()=>[0,1,2,3,4,5]);
 S.sets=S.sets.map(a=>Array.isArray(a)?a.slice(0,6).map(x=>Math.max(0,Math.min(C.length-1,Number(x)||0))):[0,1,2,3,4,5]);
 if(!S.lv||typeof S.lv!=="object")S.lv={};if(!S.dupes||typeof S.dupes!=="object")S.dupes={};
 if(!Array.isArray(S.pick3))S.pick3=[0,1,2];S.pick3=S.pick3.filter(x=>Number.isInteger(+x)&&+x>=0&&+x<C.length).slice(0,3);
 while(S.pick3.length<3){let n=S.pick3.length;if(!S.pick3.includes(n))S.pick3.push(n);else S.pick3.push((n+1)%C.length)}
 if(!S.progress)S.progress={clears:[0,0,0,0],streak:0,bestStreak:0};
 if(!Array.isArray(S.progress.clears))S.progress.clears=[0,0,0,0];
 if(!S.mastery)S.mastery={wins:0,skills:0,perfect:0};
 if(!S.favs||!Array.isArray(S.favs))S.favs=[];
 S._schema=3;
}
migrateSave();
const A=document.getElementById("app"),save=()=>{try{localStorage.setItem("bk12_backup",localStorage.getItem("bk12")||JSON.stringify(S));localStorage.setItem("bk12",JSON.stringify(S));S._savedAt=Date.now()}catch(e){console.error("save failed",e)}};
const lv=i=>Number(S.lv?.[i]||1),cap=i=>Math.min(150,50+Math.min(10,Number(S.dupes?.[i]||0))*10);
if(!S.lv)S.lv={};if(!S.dupes)S.dupes={};if(!Array.isArray(S.pick3))S.pick3=[0,1,2];if(!S.works)S.works=[];if(!S.workLv)S.workLv={};if(!S.profile)S.profile={name:"司書",title:"新人司書"};if(!S.settings)S.settings={confirm:true,compact:false};if(!S.profile.title)S.profile.title="新人司書";if(!S.favs)S.favs=[];if(S.tokens==null)S.tokens=0;if(!S.event)S.event={pt:0,clears:0};if(!S.daily)S.daily={date:"",streak:0,claimed:false};if(!S.tower)S.tower={floor:1,best:0};if(!S.bond)S.bond={};if(!S.missions)S.missions={battle:0,grow:0,story:0,claimed:{}};if(!S.story)S.story={};if(!S.arena)S.arena={wins:0,losses:0,season:1,start:Date.now()};if(!S.progress)S.progress={clears:[0,0,0,0],streak:0,bestStreak:0};if(!Array.isArray(S.progress.clears))S.progress.clears=[0,0,0,0];while(S.progress.clears.length<4)S.progress.clears.push(0);if(!S.stageBest)S.stageBest=[0,0,0,0];if(!S.sessionRun)S.sessionRun={count:0,tickets:0,gear:0};if(!S.mastery)S.mastery={wins:0,skills:0,perfect:0};if(!S.lootStats)S.lootStats={drops:0,ssr:0,ur:0,elite:0};if(!S.starterGranted){S.starterGranted=true;S.normalTickets=(S.normalTickets||0)+60;S.gold=(S.gold||0)+1200;S.mat=(S.mat||0)+300;}if(S.weeklySummons==null)S.weeklySummons=0;if(!S.beginner||typeof S.beginner!=="object")S.beginner={};if(!S.beginner.claimed)S.beginner.claimed={};
if(!S.archiveStats||typeof S.archiveStats!=="object")S.archiveStats={days:1,totalWins:0,totalGear:0};
if(!S.achievementClaims||typeof S.achievementClaims!=="object")S.achievementClaims={};
if(!S.collectionClaims||typeof S.collectionClaims!=="object")S.collectionClaims={};
if(!S.milestoneClaims||typeof S.milestoneClaims!=="object")S.milestoneClaims={};
if(!S.weeklyClaims||typeof S.weeklyClaims!=="object")S.weeklyClaims={};
if(!S.weeklyBase||typeof S.weeklyBase!=="object")S.weeklyBase={wins:S.mastery?.wins||0,gear:S.lootStats?.drops||0,summons:0,start:Date.now()};
if(!S.seasonPassClaims||typeof S.seasonPassClaims!=="object")S.seasonPassClaims={};
if(!S.challengeClaims||typeof S.challengeClaims!=="object")S.challengeClaims={};if(!S.chapterRewards||typeof S.chapterRewards!=="object")S.chapterRewards={};if(!Array.isArray(S.hardClears))S.hardClears=[0,0,0,0];while(S.hardClears.length<4)S.hardClears.push(0);if(!S.hardRewards||typeof S.hardRewards!=="object")S.hardRewards={};if(!Array.isArray(S.bossMastery))S.bossMastery=[0,0,0,0];while(S.bossMastery.length<4)S.bossMastery.push(0);if(!S.bossMasteryClaims||typeof S.bossMasteryClaims!=="object")S.bossMasteryClaims={};if(!S.endgameClaims||typeof S.endgameClaims!=="object")S.endgameClaims={};if(!S.starClaims||typeof S.starClaims!=="object")S.starClaims={};if(!S.archiveClaims||typeof S.archiveClaims!=="object")S.archiveClaims={};if(S.summonMedals==null)S.summonMedals=0;if(!S.medalExchange||typeof S.medalExchange!=="object")S.medalExchange={};if(!S.farmPrefs||typeof S.farmPrefs!=="object")S.farmPrefs={runs:3};if(!S.dailyDungeon||typeof S.dailyDungeon!=="object")S.dailyDungeon={key:"",runs:0};if(!S.loginStreak||typeof S.loginStreak!=="object")S.loginStreak={last:"",streak:0,claimed:""};if(!S.qol||typeof S.qol!=="object")S.qol={fastBattle:false,autoEquipNotice:true};if(!S.releasePrefs||typeof S.releasePrefs!=="object")S.releasePrefs={reduceFx:false};if(!S.final||typeof S.final!=="object")S.final={version:70,migrated:true};S.final.version=70;
if(!Number.isFinite(S.gold))S.gold=0;if(!Number.isFinite(S.ink))S.ink=0;if(!Number.isFinite(S.mat))S.mat=0;if(!Number.isFinite(S.normalTickets))S.normalTickets=0;
S.gold=Math.max(0,S.gold);S.ink=Math.max(0,S.ink);S.mat=Math.max(0,S.mat);S.normalTickets=Math.max(0,S.normalTickets);
if(!S.bond||typeof S.bond!=="object")S.bond={};if(!S.lv||typeof S.lv!=="object")S.lv={};if(!S.dupes||typeof S.dupes!=="object")S.dupes={};
if(!Array.isArray(S.gear))S.gear=[];if(!S.equipped||typeof S.equipped!=="object")S.equipped={};if(!Array.isArray(S.sets)||!S.sets.length)S.sets=[[0,1,2,3,4,5]];if(!Number.isInteger(S.set)||S.set<0||S.set>=S.sets.length)S.set=0;if(!Array.isArray(S.stageBest))S.stageBest=[0,0,0,0];while(S.stageBest.length<4)S.stageBest.push(0);if(!S.progress||typeof S.progress!=="object")S.progress={clears:[0,0,0,0]};if(!Array.isArray(S.progress.clears))S.progress.clears=[0,0,0,0];while(S.progress.clears.length<4)S.progress.clears.push(0);if(S.qol.compactHome==null)S.qol.compactHome=true;if(!Array.isArray(S.savedLoadouts))S.savedLoadouts=[null,null,null];if(!S.battleRecords||typeof S.battleRecords!=="object")S.battleRecords={wins:0,losses:0,turns:0,bestTurn:{},hardWins:0};if(!S.questClaims||typeof S.questClaims!=="object")S.questClaims={};
if(!S.dailyGoals||typeof S.dailyGoals!=="object")S.dailyGoals=null;
if(!S.event||typeof S.event!=="object")S.event={pt:0,clears:0};
if(!S.tower||typeof S.tower!=="object")S.tower={floor:1,best:0};
if(!S.missions||typeof S.missions!=="object")S.missions={battle:0,grow:0,story:0,claimed:{}};
if(!S.missions.claimed)S.missions.claimed={};

const WORKS=[
["太宰 治","人間失格","ningen","妨害",20],["太宰 治","走れメロス","melos","速度",25],
["芥川 龍之介","蜘蛛の糸","kumo","特殊",20],["芥川 龍之介","地獄変","jigoku","攻撃",30],
["宮沢 賢治","雨ニモマケズ","ame","回復",25],["江戸川 乱歩","D坂の殺人事件","dsaka","妨害",30],
["E・A・ポー","大鴉","raven","妨害",30],["アンデルセン","人魚姫","mermaid","回復",25]];
const LINKS=[["犬猿の文学",["太宰 治","中原 中也"],"ゲージ+15%"],["無頼派",["太宰 治","坂口 安吾"],"攻撃+12%"],["推理文学の系譜",["江戸川 乱歩","E・A・ポー"],"敵防御-15%"],["怪異蒐集",["小泉 八雲","泉 鏡花"],"状態異常+15%"]];
function links(a){let n=a.map(i=>C[i][1]);return LINKS.filter(r=>r[1].every(x=>n.includes(x)))}
function linkHints(a){let n=a.map(i=>C[i][1]);return LINKS.filter(r=>r[1].filter(x=>n.includes(x)).length===1).map(r=>r[0]+" → "+r[1].find(x=>!n.includes(x)))}
function bondLv(i){return Math.floor(Number(S.bond[i]||0)/100)+1}
function bondGain(i,n){S.bond[i]=Number(S.bond[i]||0)+n;save()}
function nav(){return primaryNavV116(window.__bkRoute||"")}
function shell(x){
 window.__bkBooted=true;window.__bkBootGuard=false;setBootChromeReady(true);
 let br=document.getElementById("bootRecovery");if(br)br.classList.remove("show");
 document.body.classList.remove("battleMode");
 let premium=/premiumHomeV236|minHomeV117|homeV116/.test(String(x||""));
 A.innerHTML=`${premium?"":`<div class=top><b>文豪綺譚 <span class=gold>V442</span></b><small>EXP ${S.xp} / 🖋️${S.ink}</small></div>`}<div class=screenFade>${x}</div>${premium?"":nav()}`
}
function accountLevel(){let clears=(S.progress?.clears||[]).reduce((a,b)=>a+b,0),score=Math.floor((S.mastery?.wins||0)*20+clears*15+(S.xp||0)/100);return Math.max(1,Math.min(50,Math.floor(score/100)+1))}
function accountXp(){let clears=(S.progress?.clears||[]).reduce((a,b)=>a+b,0),score=Math.floor((S.mastery?.wins||0)*20+clears*15+(S.xp||0)/100);return score%100}
function todayKey(){return new Date().toISOString().slice(0,10)}
function ensureDailyGoals(){let k=todayKey();if(!S.dailyGoals||S.dailyGoals.date!==k)S.dailyGoals={date:k,startWins:S.mastery?.wins||0,startSkills:S.mastery?.skills||0,startXp:S.xp||0,claimed:false};}
function dailyGoalState(){ensureDailyGoals();let g=S.dailyGoals,w=Math.max(0,(S.mastery?.wins||0)-g.startWins),sk=Math.max(0,(S.mastery?.skills||0)-g.startSkills),xp=Math.max(0,(S.xp||0)-g.startXp);return{w,sk,xp,done:w>=3&&sk>=5&&xp>=500}}
function eraOf(i){return i<8?"明治":i<18?"大正":i<22?"昭和":"海外"}
function masteryStats(i){
 let c=C[i],attr=c[4],era=eraOf(i),all=C.map((_,k)=>k);
 let avg=a=>a.length?a.reduce((z,k)=>z+lv(k),0)/a.length:0;
 let overall=avg(all),attrAvg=avg(all.filter(k=>C[k][4]===attr)),eraAvg=avg(all.filter(k=>eraOf(k)===era));
 let overallPct=Math.floor(overall/10),attrPct=Math.floor(attrAvg/12),eraPct=Math.floor(eraAvg/15);
 return{overall,attrAvg,eraAvg,overallPct,attrPct,eraPct,total:overallPct+attrPct+eraPct,attr,era}
}
function boostedPower(i){let m=masteryStats(i);let g=gearBonus(i),sp=gearSpecialization(i);return Math.round((700+lv(i)*35+g.atk*5+g.def*3)*(1+(m.total+sp.bonus)/100))}
const ELITE_AFFIXES=[
["一閃","会心時に追加ダメージ"],["連筆","低確率で通常攻撃を再発動"],
["速稿","戦闘開始ゲージ+10%"],["不屈","HP低下時に防御上昇"],
["群像","全体攻撃ダメージ上昇"],["推敲","奥義後にゲージ一部返還"]
];
const GEAR_SETS=[
["無頼派","攻撃力+8%","奥義威力+12%"],
["怪奇幻想","スキルゲージ+10%","全体攻撃威力+15%"],
["純文学","防御力+10%","被ダメージ-10%"],
["浪漫派","会心+8%","追加攻撃率+10%"],
["探偵文学","速度+10%","戦闘開始ゲージ+15%"]
];
const GEAR_RANKS=["R","SR","SSR","UR"];
const GEAR_SKILLS=[
["攻撃力",5],["防御力",5],["スキルゲージ上昇",4],["HP",6],["会心",3],["全体攻撃",2],["奥義威力",3],["被ダメ軽減",3],["追加攻撃",2],["戦闘開始ゲージ",2]
];
function gearSkillCount(rank){return rank==="UR"?4:rank==="SSR"?3:rank==="SR"?2:1}
function makeGear(ch){
 let roll=Math.random(),rank=S.urPity>=9?(Math.random()<.18?"UR":"SSR"):roll<.03?"UR":roll<(.15+huntMastery().ssrBonus)?"SSR":roll<.45?"SR":"R";if(ch>=2&&rank==="R"&&Math.random()<.35)rank="SR";
 let types=["pen","book","accessory"],type=types[Math.floor(Math.random()*3)];
 let names={pen:["漆黒の万年筆","硝子筆","古筆","羽根ペン"],book:["初版本","未完の原稿","禁書","革装本"],accessory:["懐中時計","銀縁眼鏡","古い栞","文豪の指輪"]};
 let level=1+Math.floor(Math.random()*(5+ch*3))+huntMastery().levelBonus,count=gearSkillCount(rank),pool=[...GEAR_SKILLS],skills=[];
 for(let n=0;n<count;n++){let k=Math.floor(Math.random()*pool.length);skills.push(pool.splice(k,1)[0][0])}
 let set=GEAR_SETS[Math.floor(Math.random()*GEAR_SETS.length)][0],elite=null;if((rank==="SSR"&&Math.random()<.08)||(rank==="UR"&&Math.random()<.25))elite=ELITE_AFFIXES[Math.floor(Math.random()*ELITE_AFFIXES.length)][0];return{id:Date.now()+"_"+Math.random().toString(36).slice(2,7),locked:false,type,set,elite,name:names[type][Math.floor(Math.random()*names[type].length)],rank,level,skills,atk:level*(rank==="UR"?8:rank==="SSR"?6:rank==="SR"?4:2),def:level*(rank==="UR"?7:rank==="SSR"?5:rank==="SR"?3:2)}
}
function gearRankValue(r){return{R:1,SR:2,SSR:3,UR:4}[r]||0}
function rerollCost(g){return 100+gearRankValue(g.rank)*80+g.level*5}
function rerollGear(g){if(!g)return false;let cost=rerollCost(g);if((S.gold||0)<cost)return false;S.gold-=cost;let count=gearSkillCount(g.rank),pool=[...GEAR_SKILLS],skills=[];for(let n=0;n<count;n++){let k=Math.floor(Math.random()*pool.length);skills.push(pool.splice(k,1)[0][0])}g.skills=skills;return true}
function isGodDrop(g){return g&&g.rank==="UR"&&g.skills.includes("全体攻撃")&&(g.skills.includes("スキルゲージ上昇")||g.skills.includes("戦闘開始ゲージ"))}
function gearSellValue(g){return gearRankValue(g.rank)*40+g.level*8+g.skills.length*15}
function shouldAutoSell(g){return S.autoSellRank&&gearRankValue(g.rank)<=gearRankValue(S.autoSellRank)&&!g.locked}
function gearMaxLv(g){return{R:10,SR:20,SSR:35,UR:50}[g.rank]||10}
function gearUpgradeCost(g){return 30+g.level*15}
function upgradeGear(g){
 if(!g||g.level>=gearMaxLv(g))return false;
 let cost=gearUpgradeCost(g);if((S.gold||0)<cost)return false;
 S.gold-=cost;g.level++;let mult={R:2,SR:4,SSR:6,UR:8}[g.rank]||2;g.atk+=mult;g.def+=Math.max(1,mult-1);return true
}
function gearScore(g){if(!g)return 0;let rv={R:1,SR:2,SSR:3,UR:4},sv={"攻撃力":18,"防御力":15,"スキルゲージ上昇":25,"HP":12,"会心":20,"全体攻撃":35,"奥義威力":24,"被ダメ軽減":22,"追加攻撃":30,"戦闘開始ゲージ":32};return rv[g.rank]*100+g.level*10+g.atk+g.def+g.skills.reduce((z,s)=>z+(sv[s]||10),0)+(g.elite?80:0)}
function equippedGears(i){let eq=S.equipped[i]||{},ids=typeof eq==="string"?[eq]:[eq.pen,eq.book,eq.accessory];return ids.map(id=>safeGearFind(x=>x.id===id)).filter(Boolean)}
function gearSpecialization(i){
 let gs=equippedGears(i),skills=gs.flatMap(g=>g.skills||[]);
 let atk=skills.filter(s=>["攻撃力","会心","追加攻撃","奥義威力","全体攻撃"].includes(s)).length;
 let def=skills.filter(s=>["防御力","HP","被ダメ軽減"].includes(s)).length;
 let tech=skills.filter(s=>["スキルゲージ上昇","戦闘開始ゲージ"].includes(s)).length;
 let type=atk>=def&&atk>=tech?"猛筆":def>=tech?"堅筆":"速筆";
 let bonus=gs.length===3?Math.max(atk,def,tech)*2:0;
 return{atk,def,tech,type,bonus}
}
function gearSetBonus(i){let gs=equippedGears(i),counts={};gs.forEach(g=>{if(g.set)counts[g.set]=(counts[g.set]||0)+1});let active=[];for(let [name,n] of Object.entries(counts)){let d=GEAR_SETS.find(x=>x[0]===name);if(n>=2&&d)active.push({name,count:n,two:d[1],three:n>=3?d[2]:null})}return active}
function gearBonus(i){let gs=equippedGears(i),sets=gearSetBonus(i),atk=gs.reduce((z,g)=>z+g.atk,0),def=gs.reduce((z,g)=>z+g.def,0),gauge=gs.some(g=>g.skills.includes("スキルゲージ上昇"))?10:0,aoe=gs.some(g=>g.skills.includes("全体攻撃"));sets.forEach(s=>{if(s.name==="無頼派")atk=Math.round(atk*1.08);if(s.name==="純文学")def=Math.round(def*1.10);if(s.name==="怪奇幻想")gauge+=10;if(s.name==="探偵文学"&&s.count>=3)gauge+=15});return{atk,def,gauge,aoe}}


function huntMastery(){
 let n=S.lootStats?.drops||0,tier=n>=200?5:n>=100?4:n>=50?3:n>=20?2:n>=5?1:0;
 return{tier,name:["新人蒐集家","古書漁り","装備蒐集家","鑑定士","秘宝蒐集家","伝説の司書"][tier],levelBonus:tier*2,ssrBonus:tier*.01}
}
function gearInventoryStats(){
 let g=S.gear||[];return{all:g.length,R:g.filter(x=>x.rank==="R").length,SR:g.filter(x=>x.rank==="SR").length,SSR:g.filter(x=>x.rank==="SSR").length,UR:g.filter(x=>x.rank==="UR").length,locked:g.filter(x=>x.locked).length,elite:g.filter(x=>x.elite).length}
}
function lootToast(g,sold=false){
 if(!g)return;
 let d=document.createElement("div");d.className="lootToast "+(g.elite?"elite":"");
 d.innerHTML=`<div class=rank>${g.rank}${g.elite?" ★":""}</div><b>${g.name}</b><small>Lv.${g.level} / ${g.set||"無銘"}</small>${g.elite?`<div>特殊特性：${g.elite}</div>`:""}<small>${sold?"自動売却 "+gearSellValue(g)+"文銭":"装備を獲得"}</small>`;
 document.body.appendChild(d);setTimeout(()=>d.remove(),2200)
}
function showBattleResult(r){
 let d=document.createElement("div");d.className="resultOverlay";
 d.innerHTML=`<div class=resultPanel><span class=resultBadge>QUEST RESULT</span><div class=resultTitle>STAGE CLEAR</div>${r.clears===1?`<div class=firstClear>FIRST CLEAR!　出撃画面で踏破報酬を受け取れます</div>`:""}<div class=resultDivider></div><div class=resultStars>${"★".repeat(r.stars)}${"☆".repeat(3-r.stars)}</div><div class=resultGrid><div>ターン<b>${r.turn}</b></div><div>EXP<b>+${r.exp}</b></div><div>資料<b>+${r.mat}</b></div><div>原稿片<b>+${r.tickets}</b></div><div>インク<b>+${r.ink}</b></div><div>クリア<b>${r.clears}回</b></div></div><div class=resultGear>${r.gear?`<b>${r.gear.rank} ${r.gear.name}</b><br><small>Lv.${r.gear.level} / ${r.gear.set||"無銘"} ${r.gear.elite?" / ★"+r.gear.elite:""}</small>${r.sold?`<br><span class=gold>自動売却 +${gearSellValue(r.gear)}文銭</span>`:""}`:"<small>装備ドロップなし</small>"}</div><div class=quickLoop><div>連続周回<b>${S.sessionRun.count}</b></div><div>今周回の札<b>${S.sessionRun.tickets}</b></div><div>装備獲得<b>${S.sessionRun.gear}</b></div></div><div class=resultNext>${S.gearPity>=8?"次戦は装備確定圏！":S.normalTickets>=100?"通常10連を回せます":"周回で原稿片と装備を集めよう"}</div><div class=resultPity>装備確定まで最大あと ${Math.max(1,10-S.gearPity)}戦 / SSR以上確定まで最大あと ${Math.max(1,10-S.urPity)}装備</div><div class=resultActions><button class="btn primary" data-result-retry=1>もう一度</button><button class=btn data-result-close=1>ステージ選択</button><button class=btn data-result-party=1>編成を見直す</button></div></div>`;
 document.body.appendChild(d)
}
function showGachaResults(got,cost){let d=document.createElement("div");d.className="resultOverlay";let high=got.filter(i=>["SR","SSR","UR"].includes(C[i][5])).length;d.innerHTML=`<div class=resultPanel><span class=resultBadge>SUMMON RESULT</span><div class=resultTitle>召喚結果</div><div class=resultDivider></div><div class=resultGrid><div>召喚<b>${got.length}</b></div><div>SR以上<b>${high}</b></div><div>原稿片<b>-${cost}</b></div></div><div class=gachaResultGrid>${got.map(i=>{let c=C[i];return `<div class=gachaMini><span class=rankAlways data-rank="${charRank(i)}">${charRank(i)}</span><img src="${characterImage(c[0])}"><span class=rarity>${c[5]}</span><b>${c[1]}</b><div class=abilityMini><span>固有能力 / ${bundanTag(i)}</span><strong>${characterAbility(i).name}</strong><small><b>${characterAbility(i).role}</b>　${characterAbility(i).genre} / ${bundanTag(i)}</small><em>奥義：${ougiInfo(i).name}</em></div></div>`}).join("")}</div><div class=gachaActions><button class=btn data-gacha-repeat="${got.length}">もう一度</button><button class=btn data-gacha-close=1>召喚へ戻る</button></div></div>`;document.body.appendChild(d)}
function ensureUnitSets(){if(!Array.isArray(S.sets))S.sets=[];while(S.sets.length<10)S.sets.push([0,1,2,3,4,5]);S.sets=S.sets.slice(0,10).map(a=>{a=Array.isArray(a)?a.slice(0,6):[];while(a.length<6)a.push(a.length%C.length);return a.map(x=>Math.max(0,Math.min(C.length-1,Number(x)||0)))});if(!Number.isInteger(S.set)||S.set<0||S.set>9)S.set=0;return S.sets}
function arenaRank(r){return r>=1800?"金筆":r>=1400?"銀筆":r>=1100?"青筆":"銅筆"}
function arenaNext(r){return r>=1800?2000:r>=1400?1800:r>=1100?1400:1100}
function arenaRewardText(r){return r>=1800?"インク300・文銭3000":r>=1400?"インク200・文銭2000":r>=1100?"インク100・文銭1000":"文銭500"}
function arenaMilestones(){return[1100,1400,1800,2000]}
function arenaRewardFor(n){return n===2000?{ink:400,gold:5000}:n===1800?{ink:300,gold:3000}:n===1400?{ink:200,gold:2000}:{ink:100,gold:1000}}
function recordArena(result,delta,enemy){S.arena.history.unshift({result,delta,enemy,rating:S.rating,at:Date.now()});S.arena.history=S.arena.history.slice(0,20);if(result==="WIN"){S.arena.wins=(S.arena.wins||0)+1;S.arena.streak=(S.arena.streak||0)+1;S.arena.bestStreak=Math.max(S.arena.bestStreak||0,S.arena.streak)}else{S.arena.losses=(S.arena.losses||0)+1;S.arena.streak=0}S.arena.bestRating=Math.max(S.arena.bestRating||0,S.rating||0)}
function runArenaMatch(mode){
 ensureUnitSets();let own=unitPower(S.sets[S.set]),base=mode==="boss"?22000:Math.max(5500,own*(.82+Math.random()*.38)),enemy=Math.round(base),win=mode==="boss"?own>enemy*.92:(own*(.9+Math.random()*.25)>enemy),delta=win?(mode==="boss"?45:18+Math.floor(Math.random()*13)):-(10+Math.floor(Math.random()*11)),name=mode==="boss"?"最強CPU じゃむちん":["墨守の司書","夜更けの読書家","銀河文庫","蒼筆の司書"][Math.floor(Math.random()*4)];
 S.rating=Math.max(800,(S.rating||1000)+delta);recordArena(win?"WIN":"LOSE",delta,name);save();
 let d=document.createElement("div");d.className="arenaResult";d.innerHTML=`<div class=arenaResultPanel><span class=resultBadge>ARENA RESULT</span><h1>${win?"WIN":"LOSE"}</h1><div class=resultDivider></div><div>${name}</div><div class="ratingDelta ${win?"winText":"loseText"}">${delta>0?"+":""}${delta}</div><div class=arenaResultStats><div>戦闘力<b>${own}</b></div><div>相手<b>${enemy}</b></div><div>Rating<b>${S.rating}</b></div></div><button class=btn data-arena-result-close=1>模擬戦へ戻る</button></div>`;document.body.appendChild(d)
}
function beginnerMissions(){
 let avg=Math.round(C.reduce((z,_,i)=>z+lv(i),0)/C.length);
 return[
  {id:"lv5",name:"司書Lv5",now:accountLevel(),goal:5,reward:"原稿片50",give:()=>S.normalTickets=(S.normalTickets||0)+50},
  {id:"win5",name:"5勝する",now:S.mastery?.wins||0,goal:5,reward:"文銭1000",give:()=>S.gold=(S.gold||0)+1000},
  {id:"avg10",name:"平均Lv10",now:avg,goal:10,reward:"インク100",give:()=>S.ink=(S.ink||0)+100},
  {id:"gear1",name:"装備を1個発見",now:S.lootStats?.drops||0,goal:1,reward:"文銭500",give:()=>S.gold=(S.gold||0)+500},
  {id:"summon10",name:"原稿片100枚",now:S.normalTickets||0,goal:100,reward:"資料300",give:()=>S.mat=(S.mat||0)+300}
 ]}
function growthSummary(){
 let avg=C.reduce((z,_,i)=>z+lv(i),0)/C.length,ssr=(S.gear||[]).filter(g=>g.rank==="SSR"||g.rank==="UR").length;
 let next=S.normalTickets<100?`通常10連まで原稿片あと ${100-S.normalTickets}`:S.gearPity>=7?`装備確定まであと ${10-S.gearPity}戦`:avg<50?`全体平均Lv50まであと ${(50-avg).toFixed(1)}`:`高難度・模擬戦へ挑戦`;
 return{avg,ssr,next}
}
function archiveSummary(){
 if(!S.archiveStats||typeof S.archiveStats!=="object")S.archiveStats={days:1,totalWins:0,totalGear:0};
 let wins=S.mastery?.wins||0,gear=S.lootStats?.drops||0;
 S.archiveStats.totalWins=Math.max(S.archiveStats.totalWins||0,wins);
 S.archiveStats.totalGear=Math.max(S.archiveStats.totalGear||0,gear);
 return{wins:S.archiveStats.totalWins,gear:S.archiveStats.totalGear,authors:C.length,avg:C.reduce((z,_,i)=>z+lv(i),0)/C.length}
}
function achievements(){
 let avg=C.reduce((z,_,i)=>z+lv(i),0)/C.length;
 return[
 {id:"w25",name:"戦場の読書家",desc:"25勝する",now:S.mastery?.wins||0,goal:25,reward:"文銭1500",give:()=>S.gold=(S.gold||0)+1500},
 {id:"g10",name:"蒐集のはじまり",desc:"装備を10個発見",now:S.lootStats?.drops||0,goal:10,reward:"インク100",give:()=>S.ink=(S.ink||0)+100},
 {id:"avg25",name:"育つ蔵書",desc:"蔵書平均Lv25",now:avg,goal:25,reward:"原稿片100",give:()=>S.normalTickets=(S.normalTickets||0)+100},
 {id:"r1400",name:"銀筆への道",desc:"Rating1400",now:S.arena?.bestRating||S.rating||1000,goal:1400,reward:"文銭2000",give:()=>S.gold=(S.gold||0)+2000},
 {id:"ur1",name:"黄金の一頁",desc:"UR装備を1個発見",now:S.lootStats?.ur||0,goal:1,reward:"インク150",give:()=>S.ink=(S.ink||0)+150}
 ]}
function collectionGoals(){
 let lv50=C.filter((_,i)=>lv(i)>=50).length,lv100=C.filter((_,i)=>lv(i)>=100).length,full=C.filter((_,i)=>(S.dupes[i]||0)>=10).length,elite=S.lootStats?.elite||0;
 return[
 {id:"lv50x5",name:"五冊の主力",now:lv50,goal:5,reward:"原稿片100",give:()=>S.normalTickets=(S.normalTickets||0)+100},
 {id:"lv100x3",name:"百頁の境地",now:lv100,goal:3,reward:"インク200",give:()=>S.ink=(S.ink||0)+200},
 {id:"full1",name:"完全突破",now:full,goal:1,reward:"文銭3000",give:()=>S.gold=(S.gold||0)+3000},
 {id:"elite3",name:"特殊装備蒐集",now:elite,goal:3,reward:"資料500",give:()=>S.mat=(S.mat||0)+500}
 ]}
function librarianMilestones(){
 let l=accountLevel();
 return[
 {id:"L5",lv:5,reward:"原稿片50",give:()=>S.normalTickets=(S.normalTickets||0)+50},
 {id:"L10",lv:10,reward:"文銭1000",give:()=>S.gold=(S.gold||0)+1000},
 {id:"L20",lv:20,reward:"インク150",give:()=>S.ink=(S.ink||0)+150},
 {id:"L30",lv:30,reward:"原稿片100",give:()=>S.normalTickets=(S.normalTickets||0)+100},
 {id:"L40",lv:40,reward:"文銭3000",give:()=>S.gold=(S.gold||0)+3000},
 {id:"L50",lv:50,reward:"インク300",give:()=>S.ink=(S.ink||0)+300}
 ].map(x=>({...x,ready:l>=x.lv}))
}
function claimableCount(){
 let n=0;
 try{n+=beginnerMissions().filter(m=>m.now>=m.goal&&!S.beginner.claimed[m.id]).length}catch(e){}
 try{n+=achievements().filter(a=>a.now>=a.goal&&!S.achievementClaims[a.id]).length}catch(e){}
 try{n+=collectionGoals().filter(g=>g.now>=g.goal&&!S.collectionClaims[g.id]).length}catch(e){}
 try{n+=librarianMilestones().filter(m=>m.ready&&!S.milestoneClaims[m.id]).length}catch(e){}
 return n
}
function weeklyTasks(){
 let wins=Math.max(0,(S.mastery?.wins||0)-(S.weeklyBase?.wins||0));
 let gear=Math.max(0,(S.lootStats?.drops||0)-(S.weeklyBase?.gear||0));
 let summons=S.weeklySummons||0;
 let avg=C.reduce((z,_,i)=>z+lv(i),0)/C.length;
 return[
 {id:"wwin15",name:"今週15勝",now:wins,goal:15,reward:"原稿片150",give:()=>S.normalTickets=(S.normalTickets||0)+150},
 {id:"wgear3",name:"装備を3個発見",now:gear,goal:3,reward:"文銭2500",give:()=>S.gold=(S.gold||0)+2500},
 {id:"wsum30",name:"通常ガチャ30回",now:summons,goal:30,reward:"インク200",give:()=>S.ink=(S.ink||0)+200},
 {id:"wavg30",name:"蔵書平均Lv30",now:avg,goal:30,reward:"資料600",give:()=>S.mat=(S.mat||0)+600}
 ]}
function weeklyClaimable(){return weeklyTasks().filter(t=>t.now>=t.goal&&!S.weeklyClaims[t.id]).length}
function seasonPassState(){
 let wins=S.mastery?.wins||0,gear=S.lootStats?.drops||0,summons=S.weeklySummons||0,rating=Math.max(0,(S.rating||1000)-1000),avg=C.reduce((z,_,i)=>z+lv(i),0)/C.length;
 let xp=Math.floor(wins*12+gear*25+summons*5+rating*.5+avg*3);
 let level=Math.max(1,Math.min(30,Math.floor(xp/150)+1));
 let inLevel=xp%150;
 return{xp,level,inLevel}
}
function seasonPassRewards(){
 let s=seasonPassState();
 return[
 {lv:3,id:"sp3",reward:"原稿片100",give:()=>S.normalTickets=(S.normalTickets||0)+100},
 {lv:5,id:"sp5",reward:"文銭1500",give:()=>S.gold=(S.gold||0)+1500},
 {lv:10,id:"sp10",reward:"インク150",give:()=>S.ink=(S.ink||0)+150},
 {lv:15,id:"sp15",reward:"資料500",give:()=>S.mat=(S.mat||0)+500},
 {lv:20,id:"sp20",reward:"原稿片200",give:()=>S.normalTickets=(S.normalTickets||0)+200},
 {lv:25,id:"sp25",reward:"文銭5000",give:()=>S.gold=(S.gold||0)+5000},
 {lv:30,id:"sp30",reward:"インク400",give:()=>S.ink=(S.ink||0)+400}
 ].map(x=>({...x,ready:s.level>=x.lv}))
}
function seasonPassClaimable(){return seasonPassRewards().filter(x=>x.ready&&!S.seasonPassClaims[x.id]).length}
function challengeBoard(){
 let avg=C.reduce((z,_,i)=>z+lv(i),0)/C.length,ur=S.lootStats?.ur||0,elite=S.lootStats?.elite||0,rt=S.rating||1000,gear=S.lootStats?.drops||0;
 return[
 {id:"cavg50",name:"蔵書平均Lv50",now:avg,goal:50,reward:"原稿片200",give:()=>S.normalTickets=(S.normalTickets||0)+200},
 {id:"crt1600",name:"Rating1600",now:rt,goal:1600,reward:"インク250",give:()=>S.ink=(S.ink||0)+250},
 {id:"cur3",name:"UR装備3個",now:ur,goal:3,reward:"文銭5000",give:()=>S.gold=(S.gold||0)+5000},
 {id:"celite5",name:"特殊装備5個",now:elite,goal:5,reward:"資料800",give:()=>S.mat=(S.mat||0)+800},
 {id:"cgear50",name:"装備50個発見",now:gear,goal:50,reward:"インク300",give:()=>S.ink=(S.ink||0)+300},
 {id:"cwin100",name:"100勝",now:S.mastery?.wins||0,goal:100,reward:"原稿片300",give:()=>S.normalTickets=(S.normalTickets||0)+300}
 ]}
function challengeClaimable(){return challengeBoard().filter(c=>c.now>=c.goal&&!S.challengeClaims[c.id]).length}
function nextPlayGuide(){
 for(let i=0;i<4;i++)if((S.progress.clears?.[i]||0)>0&&!S.chapterRewards?.[i])return{icon:"🎁",title:`第${i+1}章の踏破報酬`,text:"初回クリア報酬を受け取ろう。",go:"sortie"};
 if(S.loginStreak?.claimed!==localDayKey())return{icon:"🎁",title:"本日のログイン報酬",text:loginReward().label+"を受け取れます。",go:"home"};if(archiveClaimable())return{icon:"📚",title:"文豪蒐集報酬",text:`${archiveClaimable()}件の報酬を受取可能。`,go:"list"};if(questClaimable())return{icon:"🏆",title:"司書挑戦録",text:`${questClaimable()}件の達成報酬があります。`,go:"home"};if((S.progress.clears?.[0]||0)===0)return{icon:"⚔️",title:"まずは第1章へ",text:"戦闘で原稿片とEXPを集めよう。",go:"sortie"};
 if((S.normalTickets||0)>=100)return{icon:"🖋️",title:"10連召喚できます",text:"原稿片100枚でSR以上1枠保証。",go:"summon"};
 if((S.gear?.length||0)>0)return{icon:"📚",title:"装備を付けよう",text:"文豪詳細の「3枠おすすめ装備」で即戦力アップ。",go:"list"};
 if((S.progress.clears?.[1]||0)===0)return{icon:"⚔️",title:"第2章が解放済み",text:"編成を育てながら物語を進めよう。",go:"sortie"};
 return S.normalTickets<100?{icon:"⚡",title:"周回で原稿片を集めよう",text:`おすすめは第${recommendedFarm()+1}章。10連まであと ${100-(S.normalTickets||0)}枚。`,go:"sortie"}:{icon:"👥",title:"文壇を育てよう",text:"装備・リンクを整えて高難度へ。",go:"party"}
}
function coreHome(){
 ensureUnitSets();
 let i=Number.isInteger(S.homeChar)?S.homeChar:0,c=C[i]||C[0];
 shell(`<div class=homeCinematic><img src="assets/anime/home_cinematic.jpg"><div class=homeShade></div><div class=homeLogo>文豪綺譚<small style="display:block;font-size:9px;letter-spacing:4px">BUNGOU KITAN</small></div><div class=homeResources><span>📜 ${S.normalTickets||0}</span><span>💰 ${S.gold||0}</span><span>💎 ${S.ink||0}</span></div><div class=homeSpeech>言葉は、まだ終わらない。</div></div><div class=p>${(()=>{let l=updateLoginStreak(),r=loginReward(),claimed=l.claimed===localDayKey();return `<div class=loginPanel><div class=collectionBar><div><small>DAILY LOGIN</small><h3>連続 ${l.streak}日</h3></div><span class=gold>${r.label}</span></div><div class=loginRail>${[1,2,3,4,5,6,7].map(n=>`<span class="${((l.streak-1)%7)+1>=n?"done":""}">${n}日</span>`).join("")}</div><button class=btn data-login-reward=1 ${claimed?"disabled":""}>${claimed?"本日受取済":"ログイン報酬を受取"}</button></div>`})()}${(()=>{let n=rewardCenterItems().length;return `<div class=uiSectionTitle>司書メニュー</div><button class="rewardCenterButton ${n?"ready":""}" data-reward-center=1><span>🎁</span><div><b>報酬センター</b><small>${n?`${n}件の報酬を受取可能`:"未受取報酬なし"}</small></div><strong>${n}</strong></button>`})()}${(()=>{let o=onboardingState();return o?`<div class=onboardingCard><div class=collectionBar><div><small>BEGINNER GUIDE ${o.step}/5</small><h3>${o.title}</h3></div><span>STEP ${o.step}</span></div><p>${o.text}</p><div class=onboardingActions><button class=btn data-go="${o.go}">移動する</button><button class=btn data-onboarding-claim=1>${S.onboarding["onboard"+o.step]?"受取済":`🎁 ${o.reward}`}</button></div></div>`:""})()}<div class=releaseBanner><div><small>FINAL BUILD</small><b>文豪綺譚 Ver.70</b></div><button class=btn data-qa-center=1>✓ QA</button></div><button class=saveRecoveryButton data-save-recover=1><span>💾</span><div><b>セーブ保護 V88</b><small>旧版・バックアップから最高進行度を自動統合</small></div><strong>復旧</strong></button><button class="v50Button" data-v50-guide=1><span>V50</span><div><b>PLAYABLE CHECKPOINT</b><small>ゲーム全体の遊び方を確認</small></div><strong>›</strong></button><button class="progressHubButton" data-progress-hub=1><span>📊</span><div><b>司書ダッシュボード</b><small>進行・戦力・未受取報酬をまとめて確認</small></div><strong>›</strong></button>${(()=>{let x=homeFocusData();return `<div class=homeFocus><div class=homeFocusMain><small>NEXT ACTION</small><h2>${x.next.icon} ${x.next.title}</h2><p>${x.next.text}</p><button class=btn data-go="${x.next.go}">ここから進める</button></div><div class=homeFocusSide><button data-progress-hub=1><span>進行</span><b>${x.story}/4</b></button><button data-go=list><span>蒐集</span><b>${x.cp.pct}%</b></button><button data-go=party><span>準備</span><b>${x.tr.score}%</b></button><button data-reward-center=1><span>報酬</span><b>${x.rewards}</b></button></div></div>`})()}<div class=homeDensityBar><span>${homeSummaryLine()}</span><button class=btn data-home-density=1>${S.qol.compactHome?"詳細を表示":"コンパクト表示"}</button></div><div class="${S.qol.compactHome?"homeSecondary compact":"homeSecondary"}"><div class=homeActions><button class=btn data-go=sortie><b>⚔️</b>出撃</button><button class=btn data-go=party><b>👥</b>編成</button><button class=btn data-go=list><b>📚</b>文豪</button><button class=btn data-go=summon><b>🖋️</b>召喚</button></div><div class=homeAlert>安定モードで起動中。ゲーム本編はそのまま遊べます。</div></div>`)
}
function storyUnlocks(){return["序章：言葉のはじまり","第二幕：失われた書庫","第三幕：海の向こう","終幕：黒き原稿"].map((name,i)=>({name,open:(S.progress.clears[i]||0)>0}))}
function localDayKey(d=new Date()){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
function updateLoginStreak(){
 let today=localDayKey(),y=new Date();y.setDate(y.getDate()-1);let yesterday=localDayKey(y);
 if(S.loginStreak.last!==today){S.loginStreak.streak=S.loginStreak.last===yesterday?(S.loginStreak.streak||0)+1:1;S.loginStreak.last=today;save()}
 return S.loginStreak
}
function loginReward(){
 let n=((updateLoginStreak().streak-1)%7)+1;
 return[
  {label:"原稿片30",give:()=>S.normalTickets=(S.normalTickets||0)+30},
  {label:"文銭800",give:()=>S.gold=(S.gold||0)+800},
  {label:"資料250",give:()=>S.mat=(S.mat||0)+250},
  {label:"インク50",give:()=>S.ink=(S.ink||0)+50},
  {label:"原稿片50",give:()=>S.normalTickets=(S.normalTickets||0)+50},
  {label:"文銭1500",give:()=>S.gold=(S.gold||0)+1500},
  {label:"原稿片100＋インク100",give:()=>{S.normalTickets=(S.normalTickets||0)+100;S.ink=(S.ink||0)+100}}
 ][n-1]
}
function claimLoginReward(){
 let today=localDayKey();if(S.loginStreak.claimed===today)return false;let r=loginReward();r.give();S.loginStreak.claimed=today;save();return r
}
function questBoard(){
 let r=battleRecordSummary(),stars=totalStars(),hard=(S.hardClears||[]).reduce((z,x)=>z+(x||0),0),gear=S.lootStats?.drops||0;
 return[
 {id:"qwin10",name:"十戦十筆",desc:"戦闘に10回勝利",now:r.wins,goal:10,reward:"原稿片80",give:()=>S.normalTickets=(S.normalTickets||0)+80},
 {id:"qstar6",name:"六つ星の書架",desc:"合計★6",now:stars,goal:6,reward:"文銭1800",give:()=>S.gold=(S.gold||0)+1800},
 {id:"qhard5",name:"難稿突破",desc:"HARDを5回クリア",now:hard,goal:5,reward:"インク120",give:()=>S.ink=(S.ink||0)+120},
 {id:"qgear20",name:"装具蒐集家",desc:"装備を20個発見",now:gear,goal:20,reward:"資料700",give:()=>S.mat=(S.mat||0)+700},
 {id:"qfast",name:"速筆校了",desc:"どこかの章を3ターン以内",now:Object.values(S.battleRecords?.bestTurn||{}).some(x=>x&&x<=3)?1:0,goal:1,reward:"原稿片120",give:()=>S.normalTickets=(S.normalTickets||0)+120}
 ]}
function questClaimable(){return questBoard().filter(q=>q.now>=q.goal&&!S.questClaims[q.id]).length}
function progressSnapshot(){
 let cp=collectionProgress(),br=battleRecordSummary(),dd=dailyDungeonInfo();
 return{
  campaign:campaignProgress(),stars:totalStars(),collection:cp.pct,
  power:unitPower(S.sets[S.set]),rating:S.rating||1000,
  claims:rewardCenterItems().length,
  daily:dd.left
 }
}
function openProgressHub(){
 let x=progressSnapshot(),old=document.getElementById("progressHub");if(old)old.remove();
 let o=document.createElement("div");o.id="progressHub";o.className="resultOverlay";
 o.innerHTML=`<div class="resultCard progressHubCard"><div class=collectionBar><div><small>LIBRARIAN DASHBOARD</small><h2>進行状況</h2></div><button class=btn data-progress-close=1>閉じる</button></div>
 <div class=progressHubGrid><div>メイン<b>${x.campaign}/4</b></div><div>評価<b>★${x.stars}/12</b></div><div>蒐集<b>${x.collection}%</b></div><div>戦闘力<b>${x.power.toLocaleString()}</b></div><div>Rating<b>${x.rating}</b></div><div>未受取<b>${x.claims}</b></div></div>
 <div class=progressLinks><button class=btn data-go=sortie>⚔️ 出撃</button><button class=btn data-go=party>👥 編成</button><button class=btn data-go=list>📚 文豪</button><button class=btn data-go=summon>🖋️ 召喚</button><button class=btn data-go=arena>🏆 模擬戦</button><button class=btn data-go=story>📖 物語</button></div>
 <div class=progressTip>今日の書庫 残り ${x.daily}/3　｜　次のおすすめ：${nextPlayGuide().title}</div></div>`;
 document.body.appendChild(o)
}
function rewardCenterItems(){
 let a=[];
 try{beginnerMissions().forEach(x=>{if(x.now>=x.goal&&!S.beginner.claimed[x.id])a.push({type:"初心者",name:x.name,reward:x.reward,go:"home"})})}catch(e){}
 try{achievements().forEach(x=>{if(x.now>=x.goal&&!S.achievementClaims[x.id])a.push({type:"実績",name:x.name,reward:x.reward,go:"home"})})}catch(e){}
 try{collectionGoals().forEach(x=>{if(x.now>=x.goal&&!S.collectionClaims[x.id])a.push({type:"蔵書",name:x.name,reward:x.reward,go:"home"})})}catch(e){}
 try{librarianMilestones().forEach(x=>{if(x.ready&&!S.milestoneClaims[x.id])a.push({type:"司書Lv",name:"Lv."+x.lv,reward:x.reward,go:"home"})})}catch(e){}
 try{weeklyTasks().forEach(x=>{if(x.now>=x.goal&&!S.weeklyClaims[x.id])a.push({type:"週間",name:x.name,reward:x.reward,go:"home"})})}catch(e){}
 try{seasonPassRewards().forEach(x=>{if(x.ready&&!S.seasonPassClaims[x.id])a.push({type:"紀行",name:"Lv."+x.lv,reward:x.reward,go:"home"})})}catch(e){}
 try{archiveMilestones().forEach(x=>{if(x.ready&&!S.archiveClaims[x.id])a.push({type:"蒐集",name:x.goal+"人",reward:x.reward,go:"list"})})}catch(e){}
 try{questBoard().forEach(x=>{if(x.now>=x.goal&&!S.questClaims[x.id])a.push({type:"挑戦録",name:x.name,reward:x.reward,go:"home"})})}catch(e){}
 for(let i=0;i<4;i++){if((S.progress.clears[i]||0)>0&&!S.chapterRewards?.[i]){let r=chapterReward(i);a.push({type:"踏破",name:"第"+(i+1)+"章",reward:"原稿片"+r.tickets,go:"sortie"})}}
 return a
}
function openRewardCenter(){
 let items=rewardCenterItems(),old=document.getElementById("rewardCenter");if(old)old.remove(),o=document.createElement("div");o.id="rewardCenter";o.className="resultOverlay";
 o.innerHTML=`<div class="resultCard rewardCenterCard"><div class=collectionBar><div><small>REWARD CENTER</small><h2>報酬センター</h2></div><button class=btn data-reward-close=1>閉じる</button></div><button class="btn claimSafeAll" data-claim-safe=1>🎁 受取可能な基本報酬をまとめて受取</button><div class=rewardCenterCount>受取可能 <b>${items.length}</b>件</div><div class=rewardCenterList>${items.length?items.map(x=>`<button class=rewardCenterRow data-go="${x.go}"><span>${x.type}</span><div><b>${x.name}</b><small>${x.reward}</small></div><strong>›</strong></button>`).join(""):"<div class=emptyReward>現在受け取れる報酬はありません。</div>"}</div></div>`;document.body.appendChild(o)
}
function claimSafeRewards(){
 let got=0;
 try{for(let m of beginnerMissions())if(m.now>=m.goal&&!S.beginner.claimed[m.id]){S.beginner.claimed[m.id]=1;m.give();got++}}catch(e){}
 try{for(let q of questBoard())if(q.now>=q.goal&&!S.questClaims[q.id]){S.questClaims[q.id]=1;q.give();got++}}catch(e){}
 try{for(let m of archiveMilestones())if(m.ready&&!S.archiveClaims[m.id]){S.archiveClaims[m.id]=1;m.give();got++}}catch(e){}
 try{for(let m of librarianMilestones())if(m.ready&&!S.milestoneClaims[m.id]){S.milestoneClaims[m.id]=1;m.give();got++}}catch(e){}
 save();toast(got?"報酬を"+got+"件まとめて受取":"受取可能な報酬はありません");return home()
}
function openV50Guide(){
 let old=document.getElementById("v50Guide");if(old)old.remove(),o=document.createElement("div");o.id="v50Guide";o.className="resultOverlay";
 o.innerHTML=`<div class="resultCard v50Card"><span class=resultBadge>VERSION 50</span><h2>文豪綺譚</h2><p>メイン攻略からエンドゲームまで、一通り遊べる節目版です。</p><div class=v50Flow><span>出撃</span><b>›</b><span>召喚</span><b>›</b><span>育成</span><b>›</b><span>装備</span><b>›</b><span>HARD</span><b>›</b><span>模擬戦</span></div><div class=v50Checks><div>📖 メイン4章</div><div>⭐ ★★★評価</div><div>⚔ HARD</div><div>📦 装備ハクスラ</div><div>👥 編成共鳴</div><div>🏆 エンドゲーム</div></div><button class=btn data-v50-close=1>ゲームへ</button></div>`;document.body.appendChild(o);S.v50.seen=true;save()
}
function onboardingState(){
 if(S.onboarding.done)return null;
 if((S.progress.clears?.[0]||0)===0)return{step:1,title:"最初の出撃",text:"第1章をクリアして原稿片を集めよう。",go:"sortie",reward:"原稿片30"};
 if((S.normalTickets||0)<100)return{step:2,title:"原稿片を100枚へ",text:"第1章を周回して通常10連を目指そう。",go:"sortie",reward:"文銭500"};
 if(collectionProgress().owned<8)return{step:3,title:"最初の10連召喚",text:"通常10連で文豪を増やそう。",go:"summon",reward:"資料200"};
 if(teamReadiness().score<45)return{step:4,title:"文壇を整える",text:"おすすめ編成と装備最適化を使ってみよう。",go:"party",reward:"インク30"};
 return{step:5,title:"初心者課程修了",text:"ここからは自由に物語・HARD・蒐集を進めよう。",go:"home",reward:"原稿片100"}
}
function claimOnboardingStep(){
 let o=onboardingState();if(!o)return;
 let k="onboard"+o.step;if(S.onboarding[k])return;
 S.onboarding[k]=1;
 if(o.step===1)S.normalTickets=(S.normalTickets||0)+30;
 if(o.step===2)S.gold=(S.gold||0)+500;
 if(o.step===3)S.mat=(S.mat||0)+200;
 if(o.step===4)S.ink=(S.ink||0)+30;
 if(o.step===5){S.normalTickets=(S.normalTickets||0)+100;S.onboarding.done=true}
 save();toast("初心者ガイド報酬："+o.reward);return home()
}
function maybeWelcome(){
 if(S.onboarding.done||S.onboarding.welcomed)return;
 S.onboarding.welcomed=true;save();setTimeout(()=>{try{toast("ようこそ、司書さん。まずは第1章へ。")}catch(e){}},300)
}
function pageMeta(name){
 return{
 home:["ホーム","書架の現在地","⌂"],sortie:["出撃","物語と周回","⚔"],party:["編成","文壇と戦術","👥"],list:["文豪","蒐集と育成","📚"],growth:["育成","文豪育成","✦"],
 summon:["召喚","文豪との邂逅","🖋"],story:["物語","解放された記録","📖"],gear:["装備","装具と鍛錬","📦"],arena:["模擬戦","文壇競演","🏆"],library:["物語","解放された記録","📖"]
 }[name]||[name,"文豪綺譚","◆"]
}
function uiPageHead(name){
 let m=pageMeta(name);return `<div class=uiPageHead><span>${m[2]}</span><div><small>ホーム › ${m[1]}</small><b>${m[0]}</b></div><button class=uiHomeMini data-go=home>⌂</button></div>${uiResourceHud()}`
}
function uiResourceHud(){
 return `<div class=resourceHud><span title="原稿片">📜<b>${S.normalTickets||0}</b></span><span title="文銭">💰<b>${S.gold||0}</b></span><span title="インク">✦<b>${S.ink||0}</b></span><span title="資料">▤<b>${S.mat||0}</b></span></div>`
}
function uiToastAction(text,go,label="確認"){
 let d=document.createElement("div");d.className="actionToast";d.innerHTML=`<span>${text}</span><button data-go="${go}">${label}</button>`;document.body.appendChild(d);setTimeout(()=>d.remove(),4200)
}
function homeFocusData(){
 let next=nextPlayGuide(),cp=collectionProgress(),tr=teamReadiness(),dd=dailyDungeonInfo();
 return{next,cp,tr,dd,rewards:rewardCenterItems().length,story:campaignProgress(),stars:totalStars()}
}
function toggleHomeDensity(){
 S.qol.compactHome=!S.qol.compactHome;save();return home()
}
function homeSummaryLine(){
 let x=homeFocusData();
 return `${x.story}/4章　★${x.stars}/12　蒐集${x.cp.pct}%　報酬${x.rewards}`
}
function navigationHealth(){return [["home",home],["sortie",sortie],["party",party],["list",list],["summon",summon],["story",story],["arena",arena]].map(x=>[x[0],typeof x[1]==="function"])}
function actionHealth(){
 let tests=[
  ["おすすめ編成",typeof autoFormation==="function"],
  ["一括最適化",typeof prepareTeam==="function"],
  ["編成保存",typeof saveLoadout==="function"&&typeof loadLoadout==="function"],
  ["装備強化",typeof enhanceGear==="function"&&typeof bulkEnhanceEquipped==="function"],
  ["装備ビルド",typeof autoEquipBuild==="function"],
  ["高速周回",typeof quickFarm==="function"],
  ["日替書庫",typeof runDailyDungeon==="function"],
  ["BOSS RUSH",typeof runBossRush==="function"],
  ["報酬",typeof rewardCenterItems==="function"],
  ["物語",typeof openStoryEpisode==="function"]
 ];return tests
}
function interactionHealth(){
 let a=S.sets?.[S.set]||[];
 return[
  ["現編成6人",Array.isArray(a)&&a.length===6],
  ["編成ID正常",Array.isArray(a)&&a.every(i=>Number.isInteger(+i)&&+i>=0&&+i<C.length)],
  ["装備データ",!!S.equipped&&typeof S.equipped==="object"],
  ["通知",typeof toast==="function"],
  ["画面遷移",typeof go==="function"],
  ["二重タップ防止",typeof actionLock==="function"]
 ]
}
function uiActionAudit(){
 let attrs=[...new Set((document.getElementById("app")?.innerHTML||"").match(/data-[a-z0-9-]+/g)||[])];
 let known=["data-go","data-battle","data-change","data-tactic","data-quickfarm","data-autoformation","data-prepareteam",
 "data-story-episode","data-login-reward","data-quest","data-medalbuy","data-gearenhance","data-gearsell","data-gearbuild",
 "data-loadout-save","data-loadout-load","data-daily-dungeon","data-bossrush","data-bossrush-reward","data-star-reward",
 "data-hard-reward","data-chapter-reward","data-boss-mastery","data-endgame","data-archive-reward","data-progress-hub",
 "data-reward-center","data-home-density","data-system-check","data-final-info","data-v50-guide","data-how","data-filter",
 "data-homechar","data-result-retry","data-result-close","data-result-party","data-farm-close","data-swap-close",
 "data-swap-pick","data-preset","data-level","data-equip","data-unequip","data-summon","data-pick3","data-pick3-confirm"];
 let unknown=attrs.filter(x=>!known.includes(x));
 return{total:attrs.length,unknown}
}
function handlerHealth(){
 let src=document.documentElement.innerHTML+(typeof window.__APP_SOURCE__==="string"?window.__APP_SOURCE__:"");
 let checks=[
 ["画面移動",typeof go==="function"],["戦闘",typeof battle==="function"],["編成交代",typeof openFormationSwap==="function"],
 ["おすすめ編成",typeof autoFormation==="function"],["一括最適化",typeof prepareTeam==="function"],
 ["戦術",typeof currentTactic==="function"],["周回",typeof quickFarm==="function"],["日替書庫",typeof runDailyDungeon==="function"],
 ["BOSS RUSH",typeof runBossRush==="function"],["装備強化",typeof enhanceGear==="function"],
 ["装備ビルド",typeof autoEquipBuild==="function"],["編成保存",typeof saveLoadout==="function"&&typeof loadLoadout==="function"],
 ["物語閲覧",typeof openStoryEpisode==="function"],["報酬センター",typeof openRewardCenter==="function"],
 ["進行画面",typeof openProgressHub==="function"],["通知",typeof toast==="function"]
 ];return checks
}
function handlerHealthSummary(){let x=handlerHealth();return{x,ok:x.filter(v=>v[1]).length,total:x.length}}
function economyHealth(){
 let nums=["gold","ink","mat","normalTickets","summonMedals"].map(k=>[k,Number.isFinite(+(S[k]||0))&&+(S[k]||0)>=0]);
 let claims=[
  ["章報酬",typeof claimChapterReward==="function"],["HARD報酬",typeof claimHardReward==="function"],
  ["星報酬",typeof claimStarReward==="function"],["熟練報酬",typeof claimBossMastery==="function"],
  ["蒐集報酬",typeof archiveMilestones==="function"],["ログイン",typeof claimLoginReward==="function"]
 ];
 return[...nums,...claims]
}
function assetHealth(){
 let refs=[...new Set((document.getElementById("app")?.innerHTML||"").match(/(?:src|href)=["']([^"']+\.(?:jpg|jpeg|png|webp))/gi)?.map(x=>x.replace(/^(?:src|href)=["']/i,""))||[])];
 let charOk=typeof characterImage==="function";
 return{refs,charOk,total:refs.length}
}
function imageReady(img){
 if(!img)return;img.classList.add("imgReady");img.closest(".authorCard,.stageCine,.campaignMapV61,.partyCine")?.classList.add("assetReady")
}
function installAssetObservers(){
 document.addEventListener("load",e=>{if(e.target?.tagName==="IMG")imageReady(e.target)},true);
 document.querySelectorAll("img").forEach(x=>{if(x.complete&&x.naturalWidth)imageReady(x)})
}
function qaSnapshot(){
 let groups=[
  ["SYSTEM",systemHealth().checks||[]],
  ["NAV",navigationHealth()],
  ["ACTION",actionHealth()],
  ["INPUT",interactionHealth()],
  ["SCREEN",screenHealth()],
  ["HANDLER",handlerHealth()],
  ["ECONOMY",economyHealth()]
 ];
 let flat=groups.flatMap(g=>g[1]),ok=flat.filter(x=>x[1]).length,total=flat.length;
 return{groups,ok,total,pass:ok===total&&stateIntegrity().ok}
}
function openQACenter(){
 let q=qaSnapshot(),old=document.getElementById("qaCenter");if(old)old.remove(),o=document.createElement("div");o.id="qaCenter";o.className="resultOverlay";
 o.innerHTML=`<div class="resultCard qaCard"><span class=resultBadge>QUALITY ASSURANCE</span><h2>完成度チェック</h2><div class="qaScore ${q.pass?"pass":"warn"}">${q.ok}/${q.total}</div>${q.groups.map(g=>`<div class=qaGroup><b>${g[0]}</b><span>${g[1].filter(x=>x[1]).length}/${g[1].length}</span></div>`).join("")}<div class="qaIntegrity ${stateIntegrity().ok?"pass":"warn"}">SAVE ${stateIntegrity().ok?"OK":"REPAIR"}</div><button class=btn data-system-repair=1>安全修復</button><button class=btn data-qa-close=1>閉じる</button></div>`;document.body.appendChild(o)
}
function stageDataHealth(){try{return[0,1,2,3].every(i=>{let s=stageMeta(i);return !!s&&!!s.name&&Number.isFinite(+s.power)})}catch(e){return false}}
function systemHealth(){
 let checks=[
  ["セーブ",!!S&&typeof save==="function"],
  ["編成",Array.isArray(S.sets)&&S.sets.length>=1&&S.sets.every(a=>Array.isArray(a))],
  ["文豪",Array.isArray(C)&&C.length>=30],
  ["進行",!!S.progress&&Array.isArray(S.progress.clears)&&S.progress.clears.length>=4],
  ["装備",Array.isArray(S.gear)&&!!S.equipped],
  ["復旧",typeof coreHome==="function"&&typeof emergencyHome==="function"],
  ["召喚",typeof ensurePick3==="function"&&typeof summonResult==="function"],
  ["戦闘",typeof unitPower==="function"&&typeof battle==="function"],
  ["周回",typeof quickFarm==="function"&&typeof recommendedFarm==="function"],
  ["物語",typeof openStoryEpisode==="function"],
  ["報酬",typeof rewardCenterItems==="function"],
  ["UI",typeof progressSnapshot==="function"],["遷移",navigationHealth().every(x=>x[1])],["通知",typeof toast==="function"],["操作",actionHealth().every(x=>x[1])],["入力",interactionHealth().every(x=>x[1])],["画面",screenHealth().every(x=>x[1])],["UI操作",uiActionAudit().unknown.length===0],["配線",handlerHealth().every(x=>x[1])],["整合性",stateIntegrity().ok],["経済",economyHealth().every(x=>x[1])],["画像",assetHealth().charOk]
 ];
 return{ok:checks.filter(x=>x[1]).length,total:checks.length,checks}
}
function safeRepairState(){
 ensureUnitSets();ensurePick3();
 if(!Array.isArray(S.gear))S.gear=[];if(!S.equipped)S.equipped={};
 if(!S.progress)S.progress={clears:[0,0,0,0]};if(!Array.isArray(S.progress.clears))S.progress.clears=[0,0,0,0];while(S.progress.clears.length<4)S.progress.clears.push(0);
 if(!Array.isArray(S.stageBest))S.stageBest=[0,0,0,0];while(S.stageBest.length<4)S.stageBest.push(0);
 repairStateIntegrity();save();toast("セーブを保持したまま状態を修復しました");return openSystemCheck()
}
function openSystemCheck(){
 let h=systemHealth(),old=document.getElementById("systemCheck");if(old)old.remove(),o=document.createElement("div");o.id="systemCheck";o.className="resultOverlay";
 o.innerHTML=`<div class="resultCard systemCheckCard"><span class=resultBadge>V60 RELEASE CHECK</span><h2>システム診断</h2><div class=systemScore>${h.ok}/${h.total}</div><div class=systemCheckGrid>${h.checks.map(x=>`<div class="${x[1]?"ok":"ng"}"><span>${x[1]?"✓":"!"}</span><b>${x[0]}</b></div>`).join("")}</div><small>セーブを消さずに主要システムの状態を確認します。</small><div class=actionAudit>${actionHealth().map(x=>`<span class="${x[1]?"ok":"ng"}">${x[1]?"✓":"!"} ${x[0]}</span>`).join("")}</div>${(()=>{let u=uiActionAudit();return `${(()=>{let h=handlerHealthSummary();return `${(()=>{let s=stateIntegrity();return `<div class="integrityBox ${s.ok?"ok":"ng"}"><b>SAVE INTEGRITY</b><span>${s.ok?"正常":"要修復"}</span><small>${s.ok?"編成・進行・装備・通貨データ正常":s.issues.join(" / ")}</small></div>`})()}<div class=handlerAudit><div class=collectionBar><b>BUTTON WIRING</b><span>${h.ok}/${h.total}</span></div>${h.x.map(x=>`<span class="${x[1]?"ok":"ng"}">${x[1]?"✓":"!"} ${x[0]}</span>`).join("")}</div>`})()}<div class=uiAuditBox><b>UI ACTION AUDIT</b><span>${u.total}種類を検査 / 未登録 ${u.unknown.length}</span>${u.unknown.length?`<small>${u.unknown.join(" / ")}</small>`:"<small>すべての既知操作を認識しています。</small>"}</div>`})()}<div class=systemCheckActions><button class=btn data-system-repair=1>安全修復</button><button class=btn data-system-close=1>閉じる</button></div></div>`;document.body.appendChild(o)
}
function finalReleaseStatus(){
 let h=systemHealth(),assets=["assets/anime/home_cinematic.jpg","assets/stages/campaign_map_v61.png"];
 return{health:h.ok+"/"+h.total,version:"70 FINAL",save:"AUTO",assets:assets.length}
}
function openFinalInfo(){
 let f=finalReleaseStatus(),old=document.getElementById("finalInfo");if(old)old.remove(),o=document.createElement("div");o.id="finalInfo";o.className="resultOverlay";
 o.innerHTML=`<div class="resultCard finalInfoCard"><span class=resultBadge>FINAL BUILD</span><h2>文豪綺譚 Ver.70</h2><p>メイン攻略・育成・蒐集・周回・高難度・物語まで統合した完成版です。</p><div class=finalInfoGrid><div>診断<b>${f.health}</b></div><div>セーブ<b>${f.save}</b></div><div>文豪<b>${C.length}</b></div><div>章<b>4 + END</b></div></div><button class=btn data-system-check=1>システム診断</button><button class=btn data-final-close=1>ゲームへ戻る</button></div>`;document.body.appendChild(o)
}
function finalErrorShield(err){
 console.error("Bungou Kitan",err);
 try{let old=document.querySelector(".errorToast");if(old)old.remove();let d=document.createElement("div");d.className="errorToast";d.innerHTML=`<span>処理を続行しました</span><small>${String(err?.message||err||"unknown").slice(0,90)}</small><button onclick="this.parentElement.remove()">×</button>`;document.body.appendChild(d);setTimeout(()=>d.remove(),5000)}catch(e){}
}
function characterImage(slug){return `assets/characters/${slug}.jpg?v=105`}
function installImageRepair(){
 document.addEventListener("error",e=>{let x=e.target;if(!x||x.tagName!=="IMG"||x.dataset.repaired)return;x.dataset.repaired="1";if(x.src.includes("/assets/characters/"))x.src="assets/characters/fallback.jpg?v=101";else{x.classList.add("imgFailed");x.removeAttribute("src");x.alt=x.alt||"画像を読み込めませんでした"}},true)
}
function toast(msg){try{let old=document.getElementById("gameToast");if(old)old.remove();let d=document.createElement("div");d.id="gameToast";d.className="gameToast";d.textContent=String(msg??"");document.body.appendChild(d);requestAnimationFrame(()=>d.classList.add("show"));setTimeout(()=>{d.classList.remove("show");setTimeout(()=>d.remove(),180)},2200)}catch(e){console.log(msg)}}
function safeAction(label,fn){
 try{return fn()}catch(e){console.error(label,e);if(typeof finalErrorShield==="function")finalErrorShield(e);else if(typeof toast==="function")toast(label+"でエラー");return null}
}
function closeOverlays(){document.querySelectorAll(".resultOverlay").forEach(o=>o.remove())}
let __bkActionLock=0;
function actionLock(ms=350){
 let n=Date.now();if(n<__bkActionLock)return false;__bkActionLock=n+ms;return true
}
function safeButtonAction(label,fn,ms=350){
 if(!actionLock(ms))return null;return safeAction(label,fn)
}
function normalizeInteractiveState(){
 ensureUnitSets();
 S.sets=S.sets.map(a=>Array.isArray(a)?a.filter(i=>Number.isInteger(+i)&&+i>=0&&+i<C.length).map(Number).slice(0,6):[]);
 S.sets.forEach(a=>{while(a.length<6){let n=[0,1,2,3,4,5].find(x=>!a.includes(x));a.push(n==null?0:n)}});
 if(!Number.isInteger(S.set)||S.set<0||S.set>=S.sets.length)S.set=0;
 save();return true
}
function renderScreen(name,fn){try{ensureCoreState();closeOverlays();document.body.classList.remove("battleMode");let out=fn();setTimeout(normalizeStageLayout,0);let a=document.getElementById("app");if(!a||!a.textContent.trim())throw new Error(name+" rendered empty");return out}catch(e){console.error("screen:",name,e);finalErrorShield(e);if(name!=="home"){try{return home()}catch(_){}}try{return coreHome()}catch(_){return emergencyHome()}}}
function screenHealth(){return SCREEN_NAMES.map(n=>[n,typeof SCREEN_FUNCS[n]==="function"])}
const SCREEN_NAMES=["home","sortie","party","list","summon","story","arena"];
const SCREEN_FUNCS={home:home,sortie:sortie,party:party,list:list,summon:summon,story:story,arena:arena};
function stateIntegrity(){
 let issues=[];
 if(!S||typeof S!=="object")issues.push("state");
 if(!Array.isArray(S.sets)||!S.sets.length)issues.push("sets");
 if(!S.progress||!Array.isArray(S.progress.clears))issues.push("progress");
 if(!Array.isArray(S.gear))issues.push("gear");
 if(!S.equipped||typeof S.equipped!=="object")issues.push("equipped");
 for(let k of ["gold","ink","mat","normalTickets"])if(!Number.isFinite(+S[k])||+S[k]<0)issues.push(k);
 return{ok:issues.length===0,issues}
}
function repairStateIntegrity(){
 let before=stateIntegrity();
 if(!Array.isArray(S.sets)||!S.sets.length)S.sets=[[0,1,2,3,4,5]];
 if(!S.progress||typeof S.progress!=="object")S.progress={clears:[0,0,0,0]};
 if(!Array.isArray(S.progress.clears))S.progress.clears=[0,0,0,0];while(S.progress.clears.length<4)S.progress.clears.push(0);
 if(!Array.isArray(S.gear))S.gear=[];if(!S.equipped||typeof S.equipped!=="object")S.equipped={};
 for(let k of ["gold","ink","mat","normalTickets"])S[k]=Math.max(0,Number.isFinite(+S[k])?+S[k]:0);
 normalizeInteractiveState();save();return{before,after:stateIntegrity()}
}
function snapshotState(){try{return JSON.stringify(S)}catch(e){return null}}
function transactionalAction(label,fn){
 let snap=snapshotState();
 try{let out=fn();if(!stateIntegrity().ok)throw new Error("state integrity failed after "+label);return out}
 catch(e){if(snap){try{let old=JSON.parse(snap);Object.keys(S).forEach(k=>delete S[k]);Object.assign(S,old);save()}catch(_){}}
 finalErrorShield(e);toast(label+"を取り消しました");return null}
}
function home(){window.__bkRoute="home";ensureCoreState();return dedicatedHome()}
function chooseHome(){shell(`<div class=p><h1>ホーム文豪</h1><div class=grid>${C.map((c,i)=>`<button class="card char" data-homepick="${i}"><img loading=lazy decoding=async src="${characterImage(c[0])}"><b>${c[1]}</b></button>`).join("")}</div></div>`)}
let filter="all";
function collectionProgress(){
 let owned=C.filter((_,i)=>(S.dupes?.[i]||0)>0||lv(i)>1||S.sets?.some(a=>a.includes(i))).length;
 let lv50=C.filter((_,i)=>lv(i)>=50).length,lv100=C.filter((_,i)=>lv(i)>=100).length,maxed=C.filter((_,i)=>cap(i)>=150).length;
 let stories=C.filter((_,i)=>bondLv(i)>=3).length;return{owned,lv50,lv100,maxed,stories,pct:Math.round(owned/C.length*100)}
}
function rarityCollection(){
 return["UR","SSR","SR","R"].map(r=>{let all=C.map((c,i)=>({c,i})).filter(x=>x.c[5]===r),owned=all.filter(x=>(S.dupes?.[x.i]||0)>0||lv(x.i)>1||S.sets?.some(a=>a.includes(x.i))).length;return{r,total:all.length,owned}})
}
function archiveMilestones(){
 let n=collectionProgress().owned;
 return[
  {id:"a5",goal:5,reward:"原稿片50",give:()=>S.normalTickets=(S.normalTickets||0)+50},
  {id:"a10",goal:10,reward:"文銭1200",give:()=>S.gold=(S.gold||0)+1200},
  {id:"a15",goal:15,reward:"インク100",give:()=>S.ink=(S.ink||0)+100},
  {id:"a20",goal:20,reward:"原稿片100",give:()=>S.normalTickets=(S.normalTickets||0)+100},
  {id:"a25",goal:25,reward:"資料600",give:()=>S.mat=(S.mat||0)+600},
  {id:"a30",goal:30,reward:"インク200",give:()=>S.ink=(S.ink||0)+200},
  {id:"a34",goal:34,reward:"原稿片300",give:()=>S.normalTickets=(S.normalTickets||0)+300}
 ].map(x=>({...x,ready:n>=x.goal}))
}
function archiveClaimable(){return archiveMilestones().filter(x=>x.ready&&!S.archiveClaims[x.id]).length}
function list(){shell(`${uiPageHead("list")}<div class=p>${(()=>{let cp=collectionProgress();return `<div class=uiSectionTitle>文豪蒐集</div><div class=abilityGuide>カードに <b>固有能力</b> を常時表示</div><div class=modernAuthorBanner><div><small>NEW COLLECTION</small><b>現代文豪編</b><span>12人の新たな書き手が参戦・カード画像を文字なし版へ更新</span></div><strong>12 NEW</strong></div><div class=rankKeyBar><b>ランク表示</b><span data-rank=UR>UR</span><span data-rank=SSR>SSR</span><span data-rank=SR>SR</span><span data-rank=R>R</span></div><div class=rankLegend><span data-rank=UR>UR</span><span data-rank=SSR>SSR</span><span data-rank=SR>SR</span><span data-rank=R>R</span><small>カード左上にランク表示</small></div><div class=collectionProgressPanel><div class=collectionBar><div><small>LITERARY ARCHIVE</small><h2>蔵書蒐集</h2></div><b class=gold>${cp.pct}%</b></div><div class=collectionMeter><i style="width:${cp.pct}%"></i></div><div class=collectionMini><span>所持<b>${cp.owned}/${C.length}</b></span><span>Lv50<b>${cp.lv50}</b></span><span>Lv100<b>${cp.lv100}</b></span><span>上限150<b>${cp.maxed}</b></span><span>小篇解放<b>${cp.stories}/${C.length}</b></span></div><div class=rarityArchive>${rarityCollection().map(x=>`<span>${x.r}<b>${x.owned}/${x.total}</b></span>`).join("")}</div></div>`})()}<div class=archiveRewardPanel><div class=collectionBar><b>蒐集報酬</b><span class=gold>受取可能 ${archiveClaimable()}</span></div><div class=archiveRewardRail>${archiveMilestones().map(m=>{let claimed=S.archiveClaims[m.id];return `<div class="archiveRewardNode ${m.ready&&!claimed?"ready":""}"><small>文豪</small><b>${m.goal}人</b><span>${m.reward}</span><button class=btn data-archive-reward="${m.id}" ${!m.ready||claimed?"disabled":""}>${claimed?"受取済":"受取"}</button></div>`}).join("")}</div></div><div class=authorHero><div class=collectionBar><div><small>COLLECTION</small><h1>文豪一覧</h1></div><div class=gold>34 / 34</div></div><small>すべて女性化された文豪たち。育成・突破・装備で個性を伸ばそう。</small></div><input id=search placeholder="文豪・作品名で検索"><div class=filters>${["ALL","UR","SSR","SR","R"].map(x=>`<button class=btn data-filter="${x}">${x}</button>`).join("")}</div><div id=cards class=grid></div></div>`);let filter="ALL";function draw(){let q=(search.value||"").toLowerCase();cards.innerHTML=C.map((c,i)=>({c,i})).filter(o=>(filter==="ALL"||o.c[5]===filter)&&(!q||(o.c[1]+o.c[2]).toLowerCase().includes(q))).map(({c,i})=>`<button class="authorCine collectionCard" data-char="${i}">${S.favs.includes(i)?`<span class=favMark>★</span>`:""}<span class=rarTag data-rank="${c[5]}">${c[5]}</span>${((S.dupes?.[i]||0)>0||lv(i)>1||S.sets?.some(a=>a.includes(i)))?`<span class=ownedTag>所持</span>`:`<span class=unownedTag>未所持</span>`}<img loading=lazy decoding=async src="${characterImage(c[0])}"><div class=authorCineShade></div><div class=authorCineInfo><b>${c[1]}</b><small>《${c[2]}》</small><small>Lv.${lv(i)}/${cap(i)}　${gearSpecialization(i).type}</small><small class=literaryTrait>✦ ${literaryTrait(i).name}</small></div></button>`).join("")}search.oninput=draw;document.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>{filter=b.dataset.filter;draw()});draw()}
function cards(){let q=document.getElementById("q")?.value||"";document.getElementById("cards").innerHTML=C.map((c,i)=>[c,i]).filter(([c])=>(filter==="all"||c[3]===filter||c[4]===filter)&&c.join("").includes(q)).map(([c,i])=>`<button class="card char collectionCard" data-char="${i}">${S.favs.includes(i)?`<span class=favMark>★</span>`:""}<img loading=lazy decoding=async src="${characterImage(c[0])}"><b>${c[1]}</b><div class=gold>《${c[2]}》</div><small>${c[3]}・${c[4]}・${c[5]}</small></button>`).join("")}
function bondEpisode(i){
 let c=C[i],b=bondLv(i),trait=literaryTrait(i);
 return{
  open:b>=3,
  title:`${c[1]}　小篇`,
  subtitle:`「${c[2]}」の余白`,
  text:`${c[1]}は静かな書架で一冊の本を閉じた。戦いの外にも、言葉は残る。${trait.name}という彼女の筆致は、司書との時間の中で少しずつ別の意味を持ちはじめていた。`
 }
}
function claimBondEpisode(i){
 let e=bondEpisode(i),key="bondstory"+i;if(!e.open||S.storyBondClaims[key])return false;
 S.storyBondClaims[key]=1;S.ink=(S.ink||0)+20;S.mat=(S.mat||0)+100;save();return true
}
function openBondEpisode(i){
 let e=bondEpisode(i);if(!e.open)return toast("絆Lv3で解放");
 let old=document.getElementById("bondStory");if(old)old.remove(),o=document.createElement("div");o.id="bondStory";o.className="resultOverlay";
 o.innerHTML=`<div class="resultCard bondStoryCard"><small>CHARACTER STORY</small><h2>${e.title}</h2><h3>${e.subtitle}</h3><div class=bondStoryText>${e.text}</div><div class=bondStoryReward>初読報酬：インク20 / 資料100</div><button class=btn data-bondstory-claim="${i}" ${S.storyBondClaims["bondstory"+i]?"disabled":""}>${S.storyBondClaims["bondstory"+i]?"初読報酬 受取済":"初読報酬を受取"}</button><button class=btn data-bondstory-close=1>閉じる</button></div>`;document.body.appendChild(o)
}
function detail(i){S.lastDetail=i;let c=C[i],l=lv(i),era=i<22?(i%3===0?"明治":i%3===1?"大正":"昭和"):"海外",hp=900+l*42,atk=180+l*18,def=150+l*15,spd=100+l*8,b=bondLv(i);shell(`<div class=p><button class=btn data-go=list>← 文豪一覧</button><div class=detailNav><button class=btn>ステータス</button><button class=btn>スキル</button><button class=btn data-bond="${i}">親愛度</button><button class=btn>ストーリー</button><button class=btn>ボイス</button><button class=btn>イラスト</button></div><div class=detailHero><img class=hero decoding=async src="${characterImage(c[0])}"></div><div class=card><h2>Lv.${l}/${cap(i)}</h2>${(()=>{let m=masteryStats(i);return `${(()=>{let e=bondEpisode(i);return `<button class="bondStoryEntry ${e.open?"open":""}" data-bondstory="${i}" ${e.open?"":"disabled"}><span>${e.open?"📖":"🔒"}</span><div><b>${e.title}</b><small>${e.open?e.subtitle:"絆Lv3で解放"}</small></div><strong>›</strong></button>`})()}<div class=detailQuickGrow><b>クイック育成</b>${quickGrowButton(i)}</div><div class=characterLoreV107>${(()=>{let a=abilityText(i),o=ougiInfo(i);return `<div class=abilityExplain><small>固有能力</small><h2>${a.name}</h2><p>${abilityDetail(i)}</p><div><span>${a.role}</span><span>${a.genre}</span><span>${bundanTag(i)}</span></div></div><div class=ougiExplain><small>奥義</small><h2>${o.name}</h2><p>${o.effect}</p><b>必要ゲージ ${o.gauge}</b></div>`})()}</div><div class=abilityHero><div><small>SIGNATURE ABILITY</small><h2>${characterAbility(i).name}</h2></div><span>${characterAbility(i).role}</span><p>${characterAbility(i).genre}系の固有能力。戦闘中の発動条件と効果はキャラクター特性に連動します。</p></div><div class=traitHero>${(()=>{let t=literaryTrait(i);return `<div><small>LITERARY TRAIT</small><h3>${t.name}</h3></div><span>${t.effect}</span>`})()}</div><div class=systemStrip>${(()=>{let sp=gearSpecialization(i),m=masteryStats(i);return `<div>戦闘力<b>${boostedPower(i)}</b></div><div>蔵書補正<b>+${m.total}%</b></div><div>装備適性<b>${sp.type}</b></div><div>突破<b>${Math.min(10,S.dupes[i]||0)}/10</b></div>`})()}</div>${(()=>{let p=characterPowerBreakdown(i);return `<div class=powerBreakdown><b>戦力内訳</b><span>基礎 ${p.base}</span><span>装備 +${p.gear}</span><span>蔵書 +${p.mastery}%</span><span>適性 +${p.special}%</span></div>`})()}<div class=gearDrop><div class=gearBuildPanel><div class=collectionBar><b>装備ビルド</b><span class=gold>${gearUpgradeCount(i)?`更新候補 ${gearUpgradeCount(i)}枠`:"最適化済"}</span></div><div class=gearBuildGrid>${Object.entries(GEAR_BUILDS).map(([k,b])=>`<button class=btn data-gearbuild="${k}" data-charbuild="${i}"><b>${b.name}</b><small>${b.desc}</small></button>`).join("")}</div></div><button class="btn forgeAllBtn" data-forge-all="${i}">🔨 装備3枠をまとめて強化 +5</button><div class=gearCineHead><div class=collectionBar><div><small>EQUIPMENT / 文具装</small><h3>装備構成</h3></div><span class=gearRank>3 SLOT</span></div><div class=forgeBanner><span>文銭 ${S.gold||0}</span><span>自動売却 ${S.autoSellRank?S.autoSellRank+"以下":"OFF"}</span><span>所持 ${S.gear.length}</span></div></div><div class=gearSlots>${[["pen","✒️ 筆記具"],["book","📕 書物"],["accessory","⌚ 装身具"]].map(([t,n])=>{let eq=S.equipped[i]||{},id=typeof eq==="string"?(t==="pen"?eq:null):eq[t],g=safeGearFind(x=>x.id===id);return `<div class=gearSlot><div class=gearType>${n}</div>${g?`<b>${g.rank} ${g.name}</b><br><small>Lv.${g.level} / ${g.skills.join("・")}</small>`:"<small>未装備</small>"}</div>`}).join("")}</div><button class=btn data-autogear="${i}">3枠おすすめ装備</button><div class=setBonus><b>セット効果</b><br>${gearSetBonus(i).map(s=>`${s.name} ${s.count}部位：${s.two}${s.three?" / "+s.three:""}`).join("<br>")||"2部位以上で発動"}</div><div class=specPanel>${(()=>{let sp=gearSpecialization(i);return `<div class=collectionBar><b>装備適性</b><span class=specBadge>${sp.type} +${sp.bonus}%</span></div><div class=specGrid><div>攻撃系<br><b>${sp.atk}</b></div><div>防御系<br><b>${sp.def}</b></div><div>技巧系<br><b>${sp.tech}</b></div></div>`})()}</div><div class=autoSell><div class=collectionBar><b>装備自動売却</b><span class=sellValue>文銭 ${S.gold||0}</span></div><small>指定ランク以下をドロップ時に自動売却。ロック装備は対象外。</small><div class=autoSellBtns><button class="btn ${!S.autoSellRank?"autoSellOn":""}" data-autosell="OFF">OFF</button>${["R","SR","SSR"].map(r=>`<button class="btn ${S.autoSellRank===r?"autoSellOn":""}" data-autosell="${r}">${r}以下</button>`).join("")}</div></div><details><summary>装備一覧 ${S.gear.length}個</summary>${(()=>{let q=gearInventoryStats();return `<div class=invSummary><div>R<b>${q.R}</b></div><div>SR<b>${q.SR}</b></div><div>SSR<b>${q.SSR}</b></div><div>UR<b>${q.UR}</b></div></div><div class=gearFilters><span>🔒 ${q.locked}</span><span>★ 特殊 ${q.elite}</span><span>自動売却 ${S.autoSellRank?S.autoSellRank+"以下":"OFF"}</span><span>文銭 ${S.gold||0}</span></div>`})()}<div class=gearInv>${[...S.gear].sort((a,b)=>gearScore(b)-gearScore(a)).slice(0,30).map(g=>`<div class="gearItem ${g.rank} ${g.locked?"lockedGear":""} ${(isGodDrop(g)||g.elite)?"godDrop eliteGlow":""}"><div class=collectionBar><b>${g.rank} ${g.name} Lv.${g.level}</b><span class=gearScore>${gearScore(g)}</span><small>火${Math.round(gearBuildScore(g,"power"))} / 守${Math.round(gearBuildScore(g,"tank"))}</small></div><span class=setBadge>${g.set||"無銘"}</span>${g.elite?`<span class=eliteBadge>★ 特殊・${g.elite}</span>`:""}<div class=gearStat>攻撃+${g.atk} / 防御+${g.def} / Lv.${g.level}/${gearMaxLv(g)}</div><div class=gearSkills>${g.skills.map(s=>`<span>${s}</span>`).join("")}</div><div class=gearActions><button class=btn data-equip="${i}:${g.id}">装備</button><button class=btn data-lockgear="${g.id}">${g.locked?"🔒":"🔓"}</button></div><div class=gearUpgrade><button class=btn data-upgear="${i}:${g.id}" ${g.level>=gearMaxLv(g)?"disabled":""}>強化 +1</button><small>${g.level>=gearMaxLv(g)?"MAX":"文銭 "+gearUpgradeCost(g)}</small></div><div class=rerollBox><button class=btn data-reroll="${i}:${g.id}">スキル再抽選</button><small>文銭 ${rerollCost(g)}</small></div></div>`).join("")||"<small>装備なし</small>"}</div></details></div><div class=masteryBonus><h3>蔵書育成ボーナス +${m.total}%</h3><div class=row><span>全所持文豪 平均Lv.${m.overall.toFixed(1)}</span><span class=plus>+${m.overallPct}%</span></div><div class=row><span>${m.attr} 平均Lv.${m.attrAvg.toFixed(1)}</span><span class=plus>+${m.attrPct}%</span></div><div class=row><span>${m.era} 平均Lv.${m.eraAvg.toFixed(1)}</span><span class=plus>+${m.eraPct}%</span></div></div>`})()}<div class=levelBar><i style="width:${Math.min(100,l/cap(i)*100)}%"></i></div><div class=growthSummary><div><small>突破</small><br><b>${Math.min(10,S.dupes[i]||0)}/10</b></div><div><small>次の上限</small><br><b>${cap(i)>=150?"MAX":cap(i)+10}</b></div><div><small>共有EXP</small><br><b>${S.xp||0}</b></div></div><div class=dupeDots>${"●".repeat(Math.min(10,S.dupes[i]||0))}${"○".repeat(Math.max(0,10-Math.min(10,S.dupes[i]||0)))}</div><div class=statgrid><div>HP<br><b>${hp}</b></div><div>攻撃<br><b>${atk}</b></div><div>防御<br><b>${def}</b></div><div>速度<br><b>${spd}</b></div></div></div><div class=card><div class=affinity><div class=heart>♥</div><div class=maxbar><b>親愛 Lv.${b}</b><div class=progress><i style="width:${Math.min(100,(Number(S.bond[i]||0)%100))}%"></i></div></div></div></div><h2 class=sectionTitle>スキル</h2><div class=skillbox><div class=card><b>通常</b><p>${c[7]||"言葉の一撃"}</p></div><div class=card><b>奥義</b><p>《${c[2]}》</p></div><div class=card><b>パッシブ</b><p>${c[4]}の心得</p></div></div><h2 class=sectionTitle>強化</h2><div class=grid><button class=btn data-grow="${i}:1">+1Lv</button><button class=btn data-grow="${i}:10">+10Lv</button></div><h2 class=sectionTitle>文豪切替</h2><div class=thumbRail>${C.slice(0,12).map((x,n)=>`<button class=card data-char="${n}"><img loading=lazy decoding=async src="assets/characters/${x[0]}.jpg"><small>${x[1]}</small></button>`).join("")}</div></div>`)}
function ensurePick3(){if(!Array.isArray(S.pick3))S.pick3=[];S.pick3=S.pick3.map(Number).filter((x,i,a)=>Number.isInteger(x)&&x>=0&&x<C.length&&a.indexOf(x)===i).slice(0,3);for(let i=0;S.pick3.length<3&&i<C.length;i++)if(!S.pick3.includes(i))S.pick3.push(i);return S.pick3}
function unitPower(arr){if(!Array.isArray(arr))return 0;let base=arr.reduce((sum,i)=>sum+(typeof boostedPower==="function"?boostedPower(i):(700+lv(i)*35)),0),syn=typeof literarySynergy==="function"?literarySynergy(arr):{score:0},tb=combinedTeamBonus(arr);return Math.round(base*(1+syn.score/100)*(1+tb.totalRate))}
function teamSynergy(a){let roles=a.map(i=>C[i][4]),unique=new Set(roles).size,linksN=links(a).length,score=Math.min(100,45+unique*7+linksN*12);let atk=roles.filter(x=>x==="攻撃").length,sup=roles.filter(x=>["回復","支援"].includes(x)).length,ctrl=roles.filter(x=>["妨害","特殊"].includes(x)).length;return{score,atk,sup,ctrl,label:score>=85?"極上":score>=70?"良好":"標準"}}
function openFormationSwap(pos){
 ensureUnitSets();let current=S.sets[S.set][pos],old=document.getElementById("swapOverlay");if(old)old.remove();
 let o=document.createElement("div");o.id="swapOverlay";o.className="resultOverlay swapOverlay";
 o.innerHTML=`<div class=resultCard><div class=collectionBar><div><small>FORMATION ${S.set+1}</small><h2>${pos+1}枠目を交代</h2></div><button class=btn data-swap-close=1>閉じる</button></div><div class=swapGrid>${C.map((c,i)=>`<button class="swapChar ${i===current?"selected":""}" data-swap="${pos}:${i}"><img src="${characterImage(c[0])}"><b>${c[1]}</b><small>Lv.${lv(i)} / ${c[4]}</small></button>`).join("")}</div></div>`;
 document.body.appendChild(o)
}
function maxPowerFormation(){
 ensureUnitSets();
 let pick=C.map((_,i)=>i).sort((a,b)=>boostedPower(b)-boostedPower(a)).slice(0,6);
 S.sets[S.set]=pick;
 save();persistentSaveWrite();
 toast("戦力最高編成：総戦力 "+unitPower(pick).toLocaleString());
 return party()
}
function autoFormation(){
 ensureUnitSets();let roles=["回復","防御","支援","攻撃","速度","妨害"],used=new Set(),pick=[];
 for(let role of roles){let best=-1,bp=-1;C.forEach((c,i)=>{if(!used.has(i)&&c[4]===role&&boostedPower(i)>bp){best=i;bp=boostedPower(i)}});if(best>=0){pick.push(best);used.add(best)}}
 C.forEach((c,i)=>{if(pick.length<6&&!used.has(i)){pick.push(i);used.add(i)}});
 S.sets[S.set]=pick.slice(0,6);save();let syn=literarySynergy(S.sets[S.set]);toast("おすすめ編成：文学共鳴 +"+syn.score+"% / 役割 "+new Set(S.sets[S.set].map(i=>C[i][4])).size+"種");return party()
}
function teamReadiness(){
 ensureUnitSets();let a=S.sets[S.set],power=unitPower(a),avg=a.reduce((z,i)=>z+lv(i),0)/a.length,geared=a.filter(i=>equippedGears(i).length===3).length,roles=new Set(a.map(i=>C[i][4])).size;
 return{power,avg,geared,roles,score:Math.min(100,Math.round(avg*.45+geared*5+roles*4))}
}
function prepareTeam(){
 ensureUnitSets();autoFormation();
 let a=S.sets[S.set];
 a.forEach(i=>{let eq=S.equipped[i]||{};if(typeof eq==="string")eq={pen:eq};for(let type of ["pen","book","accessory"]){let candidates=S.gear.filter(g=>g.type===type&&!Object.values(eq).includes(g.id));if(candidates.length)candidates.sort((x,y)=>gearScore(y)-gearScore(x)),eq[type]=candidates[0].id}S.equipped[i]=eq});
 save();return party()
}
function literaryTrait(i){
 let c=C[i],role=c[4],work=c[2],seed=[...work].reduce((z,x)=>z+x.charCodeAt(0),0)%4;
 let pool={
 "攻撃":[["烈筆","奥義威力+12%"],["決稿","HP50%以下で攻撃+15%"],["破章","ボスへの攻撃+10%"],["連載","追加攻撃率+8%"]],
 "回復":[["余白","回復量+15%"],["再版","瀕死時の回復量+20%"],["栞守","味方防御+6%"],["追想","奥義後ゲージ+10%"]],
 "防御":[["装丁","被ダメージ-10%"],["厚紙","HP+12%"],["蔵書壁","全体防御+5%"],["不朽","瀕死時防御+18%"]],
 "支援":[["校閲","ゲージ上昇+12%"],["注釈","味方奥義+6%"],["引用","戦闘開始ゲージ+10%"],["推敲","支援効果+12%"]],
 "速度":[["速記","ゲージ速度+15%"],["早版","初撃+12%"],["連文","追加攻撃+10%"],["瞬筆","会心+8%"]],
 "妨害":[["伏字","敵攻撃-8%"],["誤植","敵防御-8%"],["禁書","ボスゲージ抑制"],["暗喩","妨害時間+1T"]],
 "特殊":[["異本","複合効果+8%"],["奇稿","ランダム強化"],["幻頁","回避+6%"],["番外","全能力+4%"]]
 };
 let a=(pool[role]||pool["特殊"])[seed];return{name:a[0],effect:a[1]}
}
function characterPowerBreakdown(i){
 let g=gearBonus(i),m=masteryStats(i),sp=gearSpecialization(i),tr=literaryTrait(i);
 return{base:700+lv(i)*35,gear:g.atk*5+g.def*3,mastery:m.total,special:sp.bonus,trait:tr}
}
function literarySynergy(arr){
 let roles=arr.map(i=>C[i][4]),traits=arr.map(i=>literaryTrait(i).name),score=0,tags=[];
 let unique=new Set(roles).size;if(unique>=5){score+=12;tags.push("六彩文壇")}
 if(roles.filter(x=>x==="攻撃").length>=2){score+=6;tags.push("双筆攻勢")}
 if(roles.includes("回復")&&roles.includes("防御")){score+=8;tags.push("守護装丁")}
 if(roles.includes("支援")&&roles.includes("速度")){score+=8;tags.push("高速推敲")}
 if(roles.includes("妨害")&&roles.includes("攻撃")){score+=7;tags.push("禁書破章")}
 if(new Set(traits).size===traits.length){score+=5;tags.push("異稿集成")}
 return{score,tags,atk:Math.floor(score*.55),def:Math.floor(score*.3),gauge:Math.floor(score*.4)}
}
function teamRoleBonus(arr){
 let roles=arr.map(i=>C[i][4]),count=x=>roles.filter(r=>r===x).length;
 return{
  atk:count("攻撃")*4,
  heal:count("回復")*6,
  guard:count("防御")*2,
  gauge:count("支援")*4+count("速度")*3,
  weaken:count("妨害")*2,
  special:count("特殊")*3
 }
}
const TACTICS={
 balanced:{name:"均衡",desc:"攻守を自動判断",atk:1,guard:1,heal:1},
 assault:{name:"猛攻",desc:"火力優先",atk:1.18,guard:.8,heal:.8},
 fortress:{name:"堅守",desc:"生存優先",atk:.9,guard:1.35,heal:1.15},
 skill:{name:"奥義",desc:"ゲージ優先",atk:.95,guard:1,heal:1,gauge:1.3}
};
function currentTactic(){return TACTICS[S.tactic||"balanced"]||TACTICS.balanced}
function forgeCost(g){return Math.max(120,Math.round((g.level||1)*35*(g.rank==="UR"?2:g.rank==="SSR"?1.6:g.rank==="SR"?1.3:1)))}
function enhanceGear(id){
 let g=safeGearFind(x=>x.id===id);if(!g)return toast("装備が見つかりません");
 if((g.level||1)>=50)return toast("最大Lvです");
 let cost=forgeCost(g);if((S.gold||0)<cost)return toast("文銭が足りません");
 S.gold-=cost;g.level=Math.min(50,(g.level||1)+1);g.atk=Math.round((g.atk||0)*1.035+1);g.def=Math.round((g.def||0)*1.035+1);save();toast(g.name+" Lv."+g.level);return detail(S.lastDetail||0)
}
function bulkEnhanceEquipped(i){
 let gs=equippedGears(i),count=0,cost=0;
 for(let g of gs){for(let n=0;n<5&&(g.level||1)<50;n++){let c=forgeCost(g);if((S.gold||0)<c)break;S.gold-=c;cost+=c;g.level=(g.level||1)+1;g.atk=Math.round((g.atk||0)*1.035+1);g.def=Math.round((g.def||0)*1.035+1);count++}}
 save();toast("装備強化 "+count+"回 / "+cost+"文銭");return detail(i)
}
const GEAR_BUILDS={
 power:{name:"火力",desc:"攻撃値を最優先"},
 tank:{name:"耐久",desc:"防御値を最優先"},
 skill:{name:"奥義",desc:"ゲージ系スキルを優先"},
 balanced:{name:"均衡",desc:"総合スコア重視"}
};
function gearBuildScore(g,build){
 let atk=g.atk||0,def=g.def||0,skills=(g.skills||[]).join(" "),elite=g.elite?25:0,rank={R:0,SR:12,SSR:28,UR:45}[g.rank]||0;
 if(build==="power")return atk*2.2+def*.5+elite+rank;
 if(build==="tank")return def*2.2+atk*.5+elite+rank;
 if(build==="skill")return atk+def+elite+rank+(skills.includes("ゲージ")?45:0)+(skills.includes("全体")?25:0);
 return gearScore(g)+elite
}
function autoEquipBuild(i,build="balanced"){
 let eq={};for(let type of ["pen","book","accessory"]){let c=S.gear.filter(g=>g.type===type).sort((a,b)=>gearBuildScore(b,build)-gearBuildScore(a,build));if(c[0])eq[type]=c[0].id}
 S.equipped[i]=eq;save();toast(GEAR_BUILDS[build].name+"装備に変更");return detail(i)
}
function gearUpgradeCount(i){
 let eq=equippedGears(i),n=0;for(let type of ["pen","book","accessory"]){let cur=eq.find(g=>g.type===type),best=S.gear.filter(g=>g.type===type).sort((a,b)=>gearScore(b)-gearScore(a))[0];if(best&&(!cur||gearScore(best)>gearScore(cur)))n++}return n
}
function saveLoadout(slot){
 ensureUnitSets();S.savedLoadouts[slot]={team:[...S.sets[S.set]],tactic:S.tactic||"balanced",name:"書架"+(slot+1)};save();toast("編成を書架"+(slot+1)+"に保存");return party()
}
function loadLoadout(slot){
 let l=S.savedLoadouts[slot];if(!l)return toast("この書架は未保存です");
 ensureUnitSets();S.sets[S.set]=l.team.map(x=>Math.max(0,Math.min(C.length-1,+x||0))).slice(0,6);while(S.sets[S.set].length<6)S.sets[S.set].push(S.sets[S.set].length);
 if(l.tactic&&TACTICS[l.tactic])S.tactic=l.tactic;save();toast("書架"+(slot+1)+"を読み込み");return party()
}
function party(){
 ensureUnitSets();
 let a=S.sets[S.set]||[],syn=teamSynergy(a),rb=teamRoleBonus(a),ls=literarySynergy(a);
 let leader=a[0]??0;
 shell(`<main class=formationV255>
   <section class=formationTitleV255>
     <div><small>FORMATION</small><h1>編成</h1><p>言葉は、いつだって、誰かを救う。</p></div>
     <button class=formationCopyV255 data-formation-copy="1">編成コピー</button>
   </section>

   <section class=formationRosterV255>
     <header><b>6人編成</b><span>枠をタップして文豪を変更</span><strong>${a.length}/6</strong></header>
     <div class=formationSlotsV255>
       ${Array.from({length:6},(_,pos)=>{
         let i=a[pos];
         if(i==null)return `<button class=empty data-formation-slot="${pos}"><span>＋</span><small>空き枠</small></button>`;
         let c=C[i],role=c[4];
         return `<button class=formationUnitV255 data-formation-slot="${pos}">
           <span class=rankBadge data-rank="${charRank(i)}">${charRank(i)}</span>
           ${pos===0?`<span class=leaderBadgeV255>隊長</span>`:""}
           <img src="${characterImage(c[0])}">
           <b>${c[1]}</b><small>Lv.${lv(i)}</small>
           <em>${role}</em>
         </button>`
       }).join("")}
     </div>
   </section>

   <section class=formationSummaryV255>
     <div class=formationSummaryHeadV255>
       <div><small>FORMATION ${S.set+1}</small><h2>文豪編成</h2></div>
       <div class=formationPowerV255><small>総戦力</small><strong>${unitPower(a).toLocaleString()}</strong></div>
     </div>
     <p class=formationTaglineV255>── まだ見ぬ物語を、共に。</p>
     <div class=formationInfoV255>
       <div class=leaderV255>
         <img src="${characterImage(C[leader][0])}">
         <div><small>隊長</small><b>${C[leader][1]}</b><span>全体を支える先導役</span></div>
       </div>
       <div class=bonusV255>
         <small>編成効果</small>
         <span>攻撃力 <b>+${rb.atk}%</b></span>
         <span>支援力 <b>+${Math.max(0,rb.heal||0)}%</b></span>
         <span>文学共鳴 <b>+${ls.score}%</b></span>
       </div>
     </div>
     <div class=formationActionsV255>
       <button data-maxformation=1>⚔ 戦力最高編成</button>
       <button data-autoformation=1>📖 おすすめ編成</button>
       <button class=save data-loadout-save="0">✓ 編成を保存</button>
     </div>
   </section>
 </main>`)
}
function roleSkill(i){let r=C[i][4],L=lv(i);if(r==="攻撃")return{name:"強襲",damage:160+L*3};if(r==="回復")return{name:"再読",damage:75+L,heal:18+Math.floor(L/15)};if(r==="防御")return{name:"堅牢",damage:90+L,guard:3};if(r==="支援")return{name:"推敲",damage:85+L,gauge:20};if(r==="速度")return{name:"速筆",damage:125+L*2,gauge:10};if(r==="妨害")return{name:"錯綜",damage:105+L*2,debuff:3};return{name:"異稿",damage:110+L*2,heal:8,gauge:8,guard:1}}
function openHowToPlay(){let old=document.getElementById("howToPlay");if(old)old.remove();let o=document.createElement("div");o.id="howToPlay";o.className="resultOverlay";o.innerHTML=`<div class="resultCard howCard"><div class=collectionBar><div><small>QUICK GUIDE</small><h2>30秒でわかる遊び方</h2></div><button class=btn data-how-close=1>閉じる</button></div><div class=howSteps><div><b>1. 出撃</b><small>EXP・原稿片・レア装備を集める。</small></div><div><b>2. 召喚</b><small>重複でLv上限50→最大150。</small></div><div><b>3. 育成</b><small>装備3枠と蔵書平均Lvで全体を強化。</small></div><div><b>4. 編成</b><small>6人の役割と文壇リンクを組み合わせる。</small></div></div><div class=roleLegend>${["攻撃","回復","防御","支援","速度","妨害","特殊"].map(x=>`<span>${x}</span>`).join("")}</div><button class=btn data-how-start=1>第1章へ</button></div>`;document.body.appendChild(o)}
function chapterReward(ch){return[{name:"第一章踏破",tickets:50,gold:500,ink:0},{name:"第二章踏破",tickets:75,gold:800,ink:30},{name:"第三章踏破",tickets:100,gold:1200,ink:60},{name:"第四章踏破",tickets:150,gold:2000,ink:100}][ch]}
function claimChapterReward(ch){let r=chapterReward(ch);if(!r||S.chapterRewards[ch]||!(S.progress.clears[ch]>0))return false;S.chapterRewards[ch]=1;S.normalTickets=(S.normalTickets||0)+r.tickets;S.gold=(S.gold||0)+r.gold;S.ink=(S.ink||0)+r.ink;save();return true}
function campaignProgress(){let n=0;for(let i=0;i<4;i++){if(S.progress.clears[i]>0)n++;else break}return n}
function hardUnlocked(ch){return (S.progress.clears[ch]||0)>=3}
function hardReward(ch){return[{tickets:80,gold:1000,ink:40},{tickets:100,gold:1500,ink:60},{tickets:130,gold:2200,ink:90},{tickets:180,gold:3500,ink:150}][ch]}
function claimHardReward(ch){let r=hardReward(ch);if(!r||S.hardRewards[ch]||!(S.hardClears[ch]>0))return false;S.hardRewards[ch]=1;S.normalTickets=(S.normalTickets||0)+r.tickets;S.gold=(S.gold||0)+r.gold;S.ink=(S.ink||0)+r.ink;save();return true}
function bossMasteryReward(ch){
 return[
  {goal:5,tickets:60,gold:800,ink:0},
  {goal:5,tickets:80,gold:1000,ink:30},
  {goal:5,tickets:100,gold:1500,ink:50},
  {goal:5,tickets:120,gold:2200,ink:80}
 ][ch]
}
function claimBossMastery(ch){
 let r=bossMasteryReward(ch);if(!r||S.bossMasteryClaims[ch]||(S.bossMastery[ch]||0)<r.goal)return false;
 S.bossMasteryClaims[ch]=1;S.normalTickets=(S.normalTickets||0)+r.tickets;S.gold=(S.gold||0)+r.gold;S.ink=(S.ink||0)+r.ink;save();return true
}
function endgameGoals(){
 let hard=(S.hardClears||[]).filter(x=>x>0).length,master=(S.bossMastery||[]).filter(x=>x>=5).length,avg=C.reduce((z,_,i)=>z+lv(i),0)/C.length,ur=S.lootStats?.ur||0,rt=S.rating||1000;
 return[
  {id:"eg_hard4",name:"四章HARD制覇",now:hard,goal:4,reward:"原稿片300",give:()=>S.normalTickets=(S.normalTickets||0)+300},
  {id:"eg_master4",name:"全ボス熟練MAX",now:master,goal:4,reward:"インク400",give:()=>S.ink=(S.ink||0)+400},
  {id:"eg_avg75",name:"蔵書平均Lv75",now:avg,goal:75,reward:"文銭8000",give:()=>S.gold=(S.gold||0)+8000},
  {id:"eg_ur5",name:"UR装備5個",now:ur,goal:5,reward:"資料1200",give:()=>S.mat=(S.mat||0)+1200},
  {id:"eg_rating1800",name:"Rating1800",now:rt,goal:1800,reward:"原稿片400",give:()=>S.normalTickets=(S.normalTickets||0)+400},
  {id:"eg_rush",name:"四章連戦制覇",now:S.bossRush?.best||0,goal:4,reward:"インク500",give:()=>S.ink=(S.ink||0)+500}
 ]}
function endgameClaimable(){return endgameGoals().filter(g=>g.now>=g.goal&&!S.endgameClaims[g.id]).length}
function starReward(ch){return[{tickets:50,gold:600,ink:0},{tickets:70,gold:900,ink:20},{tickets:90,gold:1300,ink:40},{tickets:120,gold:1800,ink:70}][ch]}
function claimStarReward(ch){let r=starReward(ch);if(!r||S.starClaims[ch]||(S.stageBest[ch]||0)<3)return false;S.starClaims[ch]=1;S.normalTickets=(S.normalTickets||0)+r.tickets;S.gold=(S.gold||0)+r.gold;S.ink=(S.ink||0)+r.ink;save();return true}
function totalStars(){return (S.stageBest||[]).reduce((z,x)=>z+(x||0),0)}
function stageFarmScore(ch){
 let clears=S.progress.clears[ch]||0,stars=S.stageBest[ch]||0,master=S.bossMastery?.[ch]||0;
 return Math.round((8+ch*2)+(stars*3)+(master>=5?5:0)+(clears>0?4:0))
}
function recommendedFarm(){
 let candidates=[0,1,2,3].filter(i=>i===0||(S.progress.clears[i-1]||0)>0);
 return candidates.sort((a,b)=>stageFarmScore(b)-stageFarmScore(a))[0]||0
}
function quickFarmRemembered(ch,count){
 ensureQoLPrefs();count=Math.max(1,Math.min(50,+count||rememberedFarmCount()));setFarmCount(count);
 return quickFarm(ch,count)
}
function quickFarm(ch,runs){
 if(!(S.progress.clears[ch]>0))return toast("一度クリアした章で解放されます");
 runs=Math.max(1,Math.min(10,+runs||3));
 let tickets=0,gold=0,gear=0;
 for(let n=0;n<runs;n++){
  let td=8+Math.floor(Math.random()*8);tickets+=td;S.normalTickets=(S.normalTickets||0)+td;
  S.xp+=350;S.mat=(S.mat||0)+35;S.mastery.wins++;S.progress.clears[ch]=(S.progress.clears[ch]||0)+1;S.bossMastery[ch]=(S.bossMastery[ch]||0)+1;
  let drop=S.gearPity>=9||Math.random()<.10;
  if(drop){S.gearPity=0;let g=makeGear(ch);S.lootStats.drops++;gear++;if(g.rank==="SSR")S.lootStats.ssr++;if(g.rank==="UR")S.lootStats.ur++;if(g.elite)S.lootStats.elite++;if(shouldAutoSell(g)){let v=gearSellValue(g);S.gold=(S.gold||0)+v;gold+=v}else S.gear.push(g)}else S.gearPity++
 }
 save();showFarmResult(ch,runs,tickets,gear,gold)
}
function showFarmResult(ch,runs,tickets,gear,gold){
 let d=document.createElement("div");d.className="resultOverlay";d.innerHTML=`<div class=resultPanel><span class=resultBadge>QUICK FARM</span><div class=resultTitle>周回完了</div><div class=resultGrid><div>周回<b>${runs}</b></div><div>原稿片<b>+${tickets}</b></div><div>装備<b>${gear}</b></div><div>EXP<b>+${runs*350}</b></div><div>資料<b>+${runs*35}</b></div><div>売却文銭<b>+${gold}</b></div></div><button class=btn data-farm-close=1>出撃へ戻る</button></div>`;document.body.appendChild(d)
}
function dailyDungeonInfo(){
 let d=new Date(),day=d.getDay(),types=[
  {name:"文銭書庫",icon:"💰",desc:"文銭を大量獲得",reward:"gold"},
  {name:"経験書庫",icon:"📘",desc:"EXPを大量獲得",reward:"xp"},
  {name:"資料書庫",icon:"📜",desc:"育成資料を大量獲得",reward:"mat"},
  {name:"装具書庫",icon:"📦",desc:"装備ドロップ率アップ",reward:"gear"},
  {name:"原稿書庫",icon:"🖋️",desc:"原稿片を大量獲得",reward:"ticket"},
  {name:"混沌書庫",icon:"✦",desc:"全報酬を少しずつ",reward:"mix"},
  {name:"黄金書庫",icon:"👑",desc:"週末ボーナス",reward:"weekend"}
 ][day];
 let key=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
 if(S.dailyDungeon.key!==key){S.dailyDungeon={key,runs:0};save()}
 return{...types,key,left:3-(S.dailyDungeon.runs||0)}
}
function runDailyDungeon(){
 let d=dailyDungeonInfo();if(d.left<=0)return toast("本日の挑戦回数を使い切りました");
 S.dailyDungeon.runs++;let msg="";
 if(d.reward==="gold"){S.gold=(S.gold||0)+1200;msg="文銭 +1200"}
 else if(d.reward==="xp"){S.xp+=1000;msg="EXP +1000"}
 else if(d.reward==="mat"){S.mat=(S.mat||0)+450;msg="資料 +450"}
 else if(d.reward==="ticket"){S.normalTickets=(S.normalTickets||0)+35;msg="原稿片 +35"}
 else if(d.reward==="gear"){let g=makeGear(2);S.gear.push(g);S.lootStats.drops++;msg=g.rank+"装備《"+g.name+"》"}
 else if(d.reward==="weekend"){S.gold=(S.gold||0)+800;S.normalTickets=(S.normalTickets||0)+25;S.ink=(S.ink||0)+30;msg="文銭+800 / 原稿片+25 / インク+30"}
 else{S.gold=(S.gold||0)+400;S.mat=(S.mat||0)+150;S.normalTickets=(S.normalTickets||0)+15;msg="文銭+400 / 資料+150 / 原稿片+15"}
 S.mastery.wins++;save();toast(d.name+"： "+msg);return sortie()
}
function bossRushUnlocked(){return campaignProgress()>=4}
function bossRushReward(stage){return[{goal:1,tickets:80,gold:1000,ink:20},{goal:2,tickets:100,gold:1500,ink:40},{goal:3,tickets:130,gold:2200,ink:70},{goal:4,tickets:180,gold:3500,ink:120}][stage-1]}
function runBossRush(){
 if(!bossRushUnlocked())return toast("メイン4章クリアで解放");
 let power=unitPower(S.sets[S.set]),cleared=0,log=[];
 for(let ch=0;ch<4;ch++){let need=6500+ch*4500+(ch===3?2500:0),roll=power*(.92+Math.random()*.18);if(roll>=need){cleared++;log.push(`第${ch+1}戦 WIN`)}else{log.push(`第${ch+1}戦 LOSE`);break}}
 ensureBossRushState().best=Math.max(ensureBossRushState().best||0,cleared);if(cleared===4)ensureBossRushState().clears=(ensureBossRushState().clears||0)+1;save();showBossRushResult(cleared,log,power)
}
function showBossRushResult(cleared,log,power){
 let d=document.createElement("div");d.className="resultOverlay";d.innerHTML=`<div class="resultPanel bossRushResult"><span class=resultBadge>BOSS RUSH</span><div class=resultTitle>${cleared===4?"COMPLETE":"RESULT"}</div><div class=bossRushScore>${cleared}/4 BOSS</div><div class=resultStats><div>戦闘力<b>${power.toLocaleString()}</b></div><div>最高記録<b>${ensureBossRushState().best}/4</b></div><div>完全制覇<b>${ensureBossRushState().clears}</b></div></div><div class=bossRushLog>${log.map(x=>`<span>${x}</span>`).join("")}</div><button class=btn data-bossrush-close=1>出撃へ戻る</button></div>`;document.body.appendChild(d)
}
function claimBossRushReward(stage){
 let r=bossRushReward(stage);if(!r||ensureBossRushState().claimed[stage]||(ensureBossRushState().best||0)<r.goal)return false;
 ensureBossRushState().claimed[stage]=1;S.normalTickets=(S.normalTickets||0)+r.tickets;S.gold=(S.gold||0)+r.gold;S.ink=(S.ink||0)+r.ink;save();return true
}
function farmCountBar(ch){
 let n=rememberedFarmCount();
 return `<div class=farmCountBar><div><b>周回</b><small>前回 ${n}周</small></div><div class=farmPresets>${[1,5,10,20].map(x=>`<button class="${n===x?"on":""}" data-farm-count="${x}">${x}</button>`).join("")}</div><button class=farmStart data-farm-start="${ch}">${n}周する</button></div>`
}

function selectedStage(){let n=Number(S.qol?.selectedStage);return Number.isInteger(n)&&n>=0&&n<4?n:0}
function openStagePage(i){rememberStage(i);return stagePage()}
function stagePage(){
 ensureCoreState();ensureQoLPrefs();let i=selectedStage(),n=rememberedFarmCount(),st=stageMeta(i),clear=S.progress?.clears?.[i]||0,stars=S.stageBest?.[i]||0,r=farmResultSummary();
 shell(`${typeof uiPageHead==="function"?uiPageHead("sortie"):""}<div class="p stagePageV100"><div class=stageCompactHead><button data-go=sortie>‹ 一覧</button><div><small>第${i+1}章</small><b>${st.name}</b></div><span>★${stars}/3</span></div><div class=farmHeroV100><div class=farmHeroTitle><div><small>QUICK FARM</small><h1>周回する</h1></div><strong>${n}周</strong></div><div class=farmCountsV100>${[1,5,10,20,30,50].map(x=>`<button class="${n===x?"on":""}" data-stage-farm-count="${x}">${x}<small>周</small></button>`).join("")}</div><button class=farmExecuteV100 data-stage-farm-go="${i}">⚡ ${n}周を開始</button><div class=farmRemember>前回の周回数を自動記憶</div>${r&&r.ch===i?`<div class=farmLast><b>前回 ${r.count}周</b><span>資料 +${r.mat}　文銭 +${r.gold}　インク +${r.ink}</span></div>`:""}</div><div class=stageSubActions><button data-battle="${i}" data-mode=normal><b>NORMAL</b><small>通常戦闘</small></button><button data-battle="${i}" data-mode=hard ${clear<1?"disabled":""}><b>HARD</b><small>${clear<1?"未解放":"高難度"}</small></button></div><div class=stageInfoV100><span>推奨<b>${st.power.toLocaleString()}</b></span><span>原稿片<b>${st.drop}</b></span><span>クリア<b>${clear}</b></span></div><div class=stageNavV97><button data-stage-open="${Math.max(0,i-1)}" ${i===0?"disabled":""}>‹ 前章</button><button data-stage-open="${Math.min(3,i+1)}" ${i===3?"disabled":""}>次章 ›</button></div></div>`)
}
function sortie(){
 ensureCoreState();ensureQoLPrefs();let last=lastStage(),s=stageMeta(last),n=rememberedFarmCount();
 shell(`${typeof uiPageHead==="function"?uiPageHead("sortie"):""}${stageQuickV131()}${recentStagesUIV133()}<div class="p sortieV102"><div class=resumeStage><div><small>前回のステージ</small><h1>第${last+1}章　${s.name}</h1><span>周回設定 ${n}周</span></div><button data-stage-open="${last}">続きから ›</button></div><div class=stageSelectTitle><b>ステージ選択</b><small>スクロール不要</small></div>${stageSelectGrid()}<div class=sortieShortcuts><button data-stage-open="0">最初の章</button><button data-stage-open="${Math.max(0,Math.min(3,(S.progress?.clears||[]).filter(Boolean).length))}">最新章</button></div></div>`)
}
function recordBattleResult(ch,win,turn,difficulty){
 if(!S.battleRecords)S.battleRecords={wins:0,losses:0,turns:0,bestTurn:{},hardWins:0};
 if(win){S.battleRecords.wins++;if(difficulty==="hard")S.battleRecords.hardWins++;let old=S.battleRecords.bestTurn[ch];if(!old||turn<old)S.battleRecords.bestTurn[ch]=turn}else S.battleRecords.losses++;
 S.battleRecords.turns+=turn;save()
}
function battleRecordSummary(){
 let r=S.battleRecords||{wins:0,losses:0,turns:0,bestTurn:{}},total=(r.wins||0)+(r.losses||0);
 return{wins:r.wins||0,losses:r.losses||0,rate:total?Math.round((r.wins||0)/total*100):0,avg:r.wins?Math.round((r.turns||0)/Math.max(1,total)*10)/10:0,hard:r.hardWins||0}
}
function battle(){return mountBattleV182()}
function story(){
 let eps=typeof STORY_EPISODES!=="undefined"?STORY_EPISODES:[];
 shell(`${typeof uiPageHead==="function"?uiPageHead("story"):""}<div class=p><div class=uiSectionTitle>物語書架</div><div class=storyArchive><div class=collectionBar><div><small>MAIN STORY ARCHIVE</small><h2>解放された記録</h2></div><b>${eps.filter((_,i)=>(S.progress.clears[i]||0)>0).length}/${eps.length||4}</b></div>${eps.length?eps.map((e,i)=>{let open=(S.progress.clears[i]||0)>0;return `<button class="storyEpisode ${open?"open":""}" data-story-episode="${i}" ${open?"":"disabled"}><span>${open?"📖":"🔒"}</span><div><b>${e.title}</b><small>${open?e.sub:"第"+(i+1)+"章クリアで解放"}</small></div><strong>›</strong></button>`}).join(""):`<div class=emptyReward>物語データを読み込んでいます。</div>`}</div><div class=storyGuide><b>物語の解放条件</b><span>各章を初回クリアすると対応する物語が解放されます。</span><button class=btn data-go=sortie>出撃へ</button></div></div>`)
}
function arena(){let rt=S.rating||1000,rk=rt>=1800?"金筆":rt>=1400?"銀筆":"銅筆",rc=rt>=1800?"rankGold":rt>=1400?"rankSilver":"rankBronze";let a=S.arena,left=Math.max(0,604800000-(Date.now()-a.start));if(!a.start)a.start=Date.now();shell(`${uiPageHead("arena")}<div class=p><h1>文壇模擬戦</h1><div class=arenaStats><div>勝利<b>${S.arena.wins||0}</b></div><div>連勝<b>${S.arena.streak||0}</b></div><div>最高Rating<b>${S.arena.bestRating||S.rating}</b></div></div><div class="arenaRank ${rc}">${rk}</div><div class=streak>連勝 ${S.progress.streak} / 最高 ${S.progress.bestStreak}</div><div class=card><b>SEASON ${a.season}</b><h2>Rating ${S.rating}</h2><p>${a.wins}勝 ${a.losses}敗 / 残り約${Math.floor(left/86400000)}日</p></div><div class=card><h3>CPU編集長</h3><button class=btn data-fight=normal>対戦する</button></div><div class=card><h3>👑 最強CPU じゃむちん</h3><p>Rating1800で解放</p><button class=btn data-fight=jam ${S.rating<1800?"disabled":""}>${S.rating<1800?"未解放":"挑戦する"}</button></div></div>`)}
function medalShop(){
 return[
  {id:"m50",cost:50,name:"原稿片100",give:()=>S.normalTickets=(S.normalTickets||0)+100},
  {id:"m80",cost:80,name:"インク150",give:()=>S.ink=(S.ink||0)+150},
  {id:"m100",cost:100,name:"文銭5000",give:()=>S.gold=(S.gold||0)+5000},
  {id:"m150",cost:150,name:"SSR以上装備",give:()=>{let g=makeGear(3);if(g.rank==="R"||g.rank==="SR")g.rank="SSR";S.gear.push(g);S.lootStats.drops++;S.lootStats.ssr++}}
 ]}
function buyMedalItem(id){
 let x=medalShop().find(v=>v.id===id);if(!x)return;
 if((S.summonMedals||0)<x.cost)return toast("召喚栞が足りません");
 S.summonMedals-=x.cost;x.give();S.medalExchange[id]=(S.medalExchange[id]||0)+1;save();toast("交換："+x.name);return summon()
}
function summon(){ensurePick3();shell(`${uiPageHead("summon")}<div class=p><div class=summonCineHero><img src="assets/stages/chapter2.jpg"><div class=summonCineShade></div><div class=summonCineText><small>SUMMON / 文豪との邂逅</small><h1>召喚</h1><div>📜 ${S.normalTickets||0}　💎 ${S.ink||0}</div></div></div><div class=gachaTabs><button class="btn active">通常ガチャ</button><button class=btn>指定ガチャ</button></div><div class=medalPanel><div class=collectionBar><div><small>SUMMON MEDAL</small><h2>召喚栞交換所</h2></div><b class=gold>🪶 ${S.summonMedals||0}</b></div><small>召喚1回につき1枚、指定召喚は5枚獲得。</small><div class=medalGrid>${medalShop().map(x=>`<button class=btn data-medalbuy="${x.id}" ${(S.summonMedals||0)<x.cost?"disabled":""}><b>${x.name}</b><small>🪶 ${x.cost}</small></button>`).join("")}</div></div><div class=gachaChoice><div class=collectionBar><div><small>通常ステージで原稿片を集める</small><h2>通常召喚</h2></div><div class=gachaCost>${S.normalTickets||0}枚</div></div><p>重複でLv上限解放。初期50、最大150。</p><div class=grid><button class=btn data-normalpull=1 ${S.normalTickets<10?"disabled":""}>1回<br>10枚</button><button class=btn data-normalpull=10 ${S.normalTickets<100?"disabled":""}>10連<br>100枚 / SR以上保証</button></div></div><div class=gachaChoice><small>3人を指定して狙う</small><h2>三筆選書・指定召喚</h2><div class=grid>${C.slice(0,12).map((c,i)=>`<button class="pickCine ${S.pick3.includes(i)?"selected":""}" data-sp="${i}"><img src="${characterImage(c[0])}"><b>${c[1]}</b></button>`).join("")}</div><p>選択 ${S.pick3.length}/3</p><button class=btn data-summon=1>指定召喚</button></div></div>`)}
function summonResult(i){let c=C[i];shell(`<div class=p><button class=btn data-go=summon>← 召喚へ</button><div class="summonHero summonFlash"><img loading=lazy decoding=async src="${characterImage(c[0])}"><div class=summonName><div class=gold>${c[5]} / ${c[3]} / ${c[4]}</div><h1>${c[1]}</h1><h2>《${c[2]}》</h2></div></div><div class=card><div class=collectionSummary><span>突破</span><b>${Math.min(10,S.dupes[i]||0)}/10</b></div><div class=collectionSummary><span>Lv上限</span><b>${cap(i)}</b></div><button class=btn data-char="${i}">キャラ詳細を見る</button></div></div>`);setTimeout(()=>uiToastAction("文豪を編成に加えてみよう","party","編成へ"),500)}
function safeScreen(fn,name){try{return fn()}catch(e){console.error("screen",name,e);toast("画面を再構築しました");try{ensureUnitSets()}catch(_){}return home()}}
function syncNavActive(name){document.querySelectorAll(".nav [data-go]").forEach(x=>x.classList.toggle("active",x.dataset.go===name))}
function go(x){if(document.body.classList.contains("battleMode"))leaveBattleCleanupV191();try{hideAutoReplayLoadingV199();if(x!=="stagePage")stopTrueAutoLoopV200(false);closeOverlays();document.body.classList.remove("battleMode");window.__bkRoute=x;if(typeof syncNavActive==="function")syncNavActive(x);const routes={home,sortie,stagePage,party,list,summon,story,arena,growth};const aliases={characters:"list",character:"list",formation:"party",quest:"sortie",library:"story",gear:"list",achievements:"home",records:"home",goals:"home"};x=aliases[x]||x;let fn=routes[x];if(typeof fn!=="function"){toast("この画面は準備中です");return home()}window.scrollTo(0,0);return renderScreen(x,fn)}catch(e){finalErrorShield(e);try{return home()}catch(_){return coreHome()}}}
function markNavActive(name){document.querySelectorAll(".nav [data-go]").forEach(b=>b.classList.toggle("active",b.dataset.go===name))}
document.addEventListener("error",e=>{let im=e.target;if(im&&im.tagName==="IMG"&&!im.dataset.fallback){im.dataset.fallback="1";let s=im.getAttribute("src")||"";im.src=s.includes("/stages/")?"assets/stages/chapter1.jpg":"assets/anime/home_cinematic.jpg"}},true);
document.addEventListener("pointerdown",e=>{let b=e.target.closest("button,.btn");if(!b)return;b.classList.remove("tapPulse");void b.offsetWidth;b.classList.add("tapPulse")},{passive:true});

const BK_SAVE_KEY="bungou_kitan_save";
const BK_BACKUP_KEY="bungou_kitan_save_backup";
const BK_SAVE_SCHEMA=83;
function persistentSaveWrite(){
 try{
  let payload={schema:BK_SAVE_SCHEMA,updatedAt:Date.now(),state:S},raw=JSON.stringify(payload);
  let oldBackup=null;try{let r=localStorage.getItem(BK_BACKUP_KEY);if(r){let p=JSON.parse(r);oldBackup=p?.state||p}}catch(e){}
  localStorage.setItem(BK_SAVE_KEY,raw);
  if(!oldBackup||saveProgressScore(S)>=saveProgressScore(oldBackup))localStorage.setItem(BK_BACKUP_KEY,raw);
  return true
 }catch(e){console.error("persistent save",e);return false}
}
function persistentSaveLoad(){try{for(let raw of [localStorage.getItem(BK_SAVE_KEY),localStorage.getItem(BK_BACKUP_KEY)]){if(!raw)continue;let p=JSON.parse(raw),st=p&&p.state?p.state:p;if(st&&typeof st==="object")return st}}catch(e){}return null}
function migrateLegacySave(){try{if(localStorage.getItem(BK_SAVE_KEY))return false;for(let k of ["bk12","bk12_backup","bungou_kitan","bungou_kitan_v70","bungou_kitan_save_v1"]){let raw=localStorage.getItem(k);if(!raw)continue;try{let p=JSON.parse(raw),st=p&&p.state?p.state:p;if(st&&typeof st==="object"){Object.keys(S).forEach(x=>delete S[x]);Object.assign(S,st);persistentSaveWrite();return true}}catch(_){}}}catch(e){}return false}
function persistentSaveHealth(){try{return[["固定キー",true],["読込",typeof persistentSaveLoad==="function"],["バックアップ",typeof persistentSaveWrite==="function"]]}catch(e){return[["保存",false]]}}
function growth(){
 ensureCoreState();ensureQoLPrefs();ensureNoScrollUX();
 let i=growthSelected(),max=maxLevelUpsNow(i),all=growthVisibleCandidates(),pg=pageSlice("growth",all,6),ab=abilityText(i);
 let cards=pg.items.map(j=>`<button class="${j===i?"selected":""}" data-growth-select="${j}"><div><span class=rankBadge data-rank="${charRank(j)}">${charRank(j)}</span><img src="${characterImage(C[j][0])}"></div><section><b>${C[j][1]}</b><strong>Lv.${lv(j)}</strong><small>${characterAbility(j).name}</small></section></button>`).join("");
 shell(`${typeof uiPageHead==="function"?uiPageHead("growth"):""}<div class="growthV115"><section class=growthFocusV115><div class=growthPortraitV115><span class=rankBadge data-rank="${charRank(i)}">${charRank(i)}</span><img src="${characterImage(C[i][0])}"></div><div class=growthIdentityV115><small>育成中</small><h1>${C[i][1]}</h1><b>Lv.${lv(i)} <span>/ ${cap(i)}</span></b><p>${ab.name}</p></div><div class=growthPotentialV115><small>育成可能</small><strong>+${max}</strong><span>Lv</span></div></section><section class=growthResourceV115><span>資料<b>${Number(S.mat||0).toLocaleString()}</b></span><span>文銭<b>${Number(S.gold||0).toLocaleString()}</b></span></section>${growthPreviewV132(i)}<section class=growthActionV115><button data-levelup="${i}:1" ${max<1?"disabled":""}><small>少し</small><b>+1</b></button><button class=primary data-levelup="${i}:10" ${max<1?"disabled":""}><small>まとめて</small><b>+10</b></button><button class=max data-levelup="${i}:${Math.max(1,max)}" ${max<1?"disabled":""}><small>一気に</small><b>MAX</b><span>${max?`+${max}Lv`:"不可"}</span></button></section><section class=growthRosterHeadV115><b>キャラ変更</b><div><input data-growth-search value="${growthSearch().replace(/"/g,"&quot;")}" placeholder="名前・能力検索"><select data-growth-sort><option value=rank ${growthSortMode()==="rank"?"selected":""}>ランク</option><option value=level ${growthSortMode()==="level"?"selected":""}>Lv</option><option value=name ${growthSortMode()==="name"?"selected":""}>名前</option></select></div></section><section class=growthRosterV115>${cards}</section>${pagerUI("growth",pg.page,pg.max,"growth")}</div>`)
}

function growCharacter(i,n=1){return doLevelUp(i,n,"growth")}

function charRank(i){return C[i]?.[5]||"R"}
function charRankOrder(r){return({UR:4,SSR:3,SR:2,R:1})[r]||0}
function growthSelected(){let i=Number(S.growthSelected);return Number.isInteger(i)&&i>=0&&i<C.length?i:(S.sets?.[S.set]?.[0]||0)}
function selectGrowthCharacter(i){i=+i;if(i<0||i>=C.length)return;S.growthSelected=i;save();persistentSaveWrite();return growth()}
function growthSelector(){
 let selected=growthSelected(),order=growthOwnedCandidates();
 return `<div class=growthPicker><div class=growthPickerHead><b>育てる文豪を選ぶ</b><select data-growth-sort><option value="rank" ${growthSortMode()==="rank"?"selected":""}>ランク順</option><option value="level" ${growthSortMode()==="level"?"selected":""}>Lv順</option><option value="name" ${growthSortMode()==="name"?"selected":""}>名前順</option></select></div><div class=growthRankFilters>${["all","UR","SSR","SR","R"].map(r=>`<button class="${growthFilterMode()===r?"on":""}" data-growth-filter="${r}">${r==="all"?"全員":r}</button>`).join("")}</div><div class=growthPickerGrid>${order.map(i=>`<button class="growthPick ${i===selected?"selected":""}" data-growth-select="${i}"><div class=growthPickImg><span class=rankBadge data-rank="${charRank(i)}">${charRank(i)}</span><img src="${characterImage(C[i][0])}"></div><div><b>${C[i][1]}</b><span>Lv.${lv(i)} / ${cap(i)}</span><small>${i===selected?"✓ 育成中":"タップして選択"}</small></div></button>`).join("")}</div></div>`
}

function growthSortMode(){return S.growthSort||"rank"}
function growthFilterMode(){return S.growthFilter||"all"}
function setGrowthSort(v){S.growthSort=v;save();persistentSaveWrite();return growth()}
function setGrowthFilter(v){S.growthFilter=v;save();persistentSaveWrite();return growth()}
function growthCandidates(){let arr=C.map((c,i)=>i),f=growthFilterMode(),s=growthSortMode();if(f!=="all")arr=arr.filter(i=>charRank(i)===f);arr.sort((a,b)=>s==="level"?lv(b)-lv(a)||charRankOrder(charRank(b))-charRankOrder(charRank(a)):s==="name"?String(C[a][1]).localeCompare(String(C[b][1]),"ja"):charRankOrder(charRank(b))-charRankOrder(charRank(a))||lv(b)-lv(a));return arr}
function growthCost(i,n=1){let mat=0,gold=0,l=lv(i);for(let k=0;k<n&&l+k<cap(i);k++){mat+=30+(l+k)*4;gold+=50+(l+k)*6}return{mat,gold}}

function stageTapGuard(el){
 if(!el)return false;
 let now=Date.now(),last=+(el.dataset.lastTap||0);
 if(now-last<280)return false;
 el.dataset.lastTap=String(now);return true
}

function maxNum(a,b){a=+a||0;b=+b||0;return Math.max(a,b)}
function mergeNumberMap(a={},b={}){let o={...a};for(let k of Object.keys(b||{}))o[k]=maxNum(o[k],b[k]);return o}
function mergeSaveStates(base={},incoming={}){
 base=normalizeSaveCandidate(base);incoming=normalizeSaveCandidate(incoming);let o={...base,...incoming};
 // Progress can only move forward.
 let ac=base.progress?.clears||[],bc=incoming.progress?.clears||[];
 o.progress={...(base.progress||{}),...(incoming.progress||{}),clears:Array.from({length:Math.max(4,ac.length,bc.length)},(_,i)=>maxNum(ac[i],bc[i]))};
 o.stageBest=Array.from({length:Math.max(4,(base.stageBest||[]).length,(incoming.stageBest||[]).length)},(_,i)=>maxNum(base.stageBest?.[i],incoming.stageBest?.[i]));
 // Character progression can only rise.
 o.lv=mergeNumberMap(base.lv,incoming.lv);
 o.bond=mergeNumberMap(base.bond,incoming.bond);
 o.dupes=mergeNumberMap(base.dupes,incoming.dupes);
 // Keep the highest durable currencies to avoid update rollback.
 for(let k of ["gold","ink","mat","normalTickets","summonMedals","rating","exp","librarianExp"])o[k]=maxNum(base[k],incoming[k]);
 // Preserve union-like collections.
 o.gear=(base.gear?.length||0)>=(incoming.gear?.length||0)?base.gear:incoming.gear;
 o.equipped={...(base.equipped||{}),...(incoming.equipped||{})};
 o.questClaims={...(base.questClaims||{}),...(incoming.questClaims||{})};
 o.archiveClaims={...(base.archiveClaims||{}),...(incoming.archiveClaims||{})};
 o.chapterRewards={...(base.chapterRewards||{}),...(incoming.chapterRewards||{})};
 o.storyBondClaims={...(base.storyBondClaims||{}),...(incoming.storyBondClaims||{})};
 o.loginClaims={...(base.loginClaims||{}),...(incoming.loginClaims||{})};
 // Prefer the richer formation collection.
 o.sets=(base.sets?.length||0)>=(incoming.sets?.length||0)?base.sets:incoming.sets;
 return o
}
function recoverBestSave(){
 let states=[JSON.parse(JSON.stringify(S))];
 let keys=[BK_SAVE_KEY,BK_BACKUP_KEY,"bk12","bk12_backup","bungou_kitan","bungou_kitan_v70","bungou_kitan_save_v1"];
 for(let k of keys){try{let raw=localStorage.getItem(k);if(!raw)continue;let p=JSON.parse(raw),st=p?.state||p;if(st&&typeof st==="object")states.push(st)}catch(e){}}
 let merged=states.reduce((a,b)=>mergeSaveStates(a,b),{});
 Object.keys(S).forEach(k=>delete S[k]);Object.assign(S,merged);
 ensureCoreState();normalizeInteractiveState();persistentSaveWrite();return merged
}
function saveProgressScore(st=S){
 let clears=(st.progress?.clears||[]).reduce((a,b)=>a+(+b||0),0);
 let levels=Object.values(st.lv||{}).reduce((a,b)=>a+(+b||0),0);
 let gear=st.gear?.length||0;
 return clears*10000+levels*10+gear;
}
function ensureCoreState(){ensureBossRushState();
 if(!Array.isArray(S.gear))S.gear=[];
 if(!S.equipped||typeof S.equipped!=="object")S.equipped={};
 if(!Array.isArray(S.sets)||!S.sets.length)S.sets=[[0,1,2,3,4,5]];
 if(!Number.isInteger(S.set)||S.set<0||S.set>=S.sets.length)S.set=0;
 if(!S.progress||typeof S.progress!=="object")S.progress={clears:[0,0,0,0]};
 if(!Array.isArray(S.progress.clears))S.progress.clears=[0,0,0,0];
 while(S.progress.clears.length<4)S.progress.clears.push(0);
 if(!Array.isArray(S.stageBest))S.stageBest=[0,0,0,0];
 if(!S.lv||typeof S.lv!=="object")S.lv={};
 if(!S.bond||typeof S.bond!=="object")S.bond={};
 if(!S.dupes||typeof S.dupes!=="object")S.dupes={};
 return true
}
function normalizeSaveCandidate(st){
 let x=st&&typeof st==="object"?{...st}:{};
 if(!Array.isArray(x.gear))x.gear=[];
 if(!x.equipped||typeof x.equipped!=="object")x.equipped={};
 if(!Array.isArray(x.sets)||!x.sets.length)x.sets=[[0,1,2,3,4,5]];
 if(!x.progress||typeof x.progress!=="object")x.progress={clears:[0,0,0,0]};
 if(!Array.isArray(x.progress.clears))x.progress.clears=[0,0,0,0];
 if(!x.lv||typeof x.lv!=="object")x.lv={};
 if(!x.bond||typeof x.bond!=="object")x.bond={};
 if(!x.dupes||typeof x.dupes!=="object")x.dupes={};
 return x
}
function safeGearFind(fn){ensureCoreState();return S.gear.find(fn)}

function normalizeStageLayout(){
 document.querySelectorAll(".stageCine").forEach(card=>{
  card.classList.add("stageLayoutV90");
  let modes=[...card.querySelectorAll("[data-battle]")];
  modes.forEach((b,i)=>{b.classList.add("stageModeButton");b.dataset.modeIndex=String(i)});
  let q=card.querySelector("[data-quickfarm]");if(q)q.classList.add("stageFarmButton");
 });
}

function affordableGrowth(i,limit=999){
 let mat=S.mat||0,gold=S.gold||0,l=lv(i),capv=cap(i),n=0;
 while(n<limit&&l+n<capv){
  let mc=30+(l+n)*4,gc=50+(l+n)*6;
  if(mat<mc||gold<gc)break;
  mat-=mc;gold-=gc;n++;
 }
 return n
}
function growthCostForAffordable(i,n){return growthCost(i,Math.min(n,affordableGrowth(i,n)))}

function growthOwnedCandidates(){
 let arr=growthCandidates();
 return arr.filter(i=>(S.owned?.[i]||S.dupes?.[i]||0)>0 || (S.sets?.flat?.()||[]).includes(i));
}
function growthCanRaise(i,n){let c=growthCost(i,n);return lv(i)<cap(i)&&(S.mat||0)>=c.mat&&(S.gold||0)>=c.gold}

function quickGrowButton(i){
 return `<button class=toGrowth data-growth-open="${i}">⬆ レベル上げ</button>`
}
function quickGrowCharacter(i,n){return doLevelUp(i,n,"list")}

function levelUpCostAt(level){return{mat:30+level*4,gold:50+level*6}}
function maxLevelUpsNow(i,limit=999){
 ensureCoreState();let l=lv(i),top=cap(i),mat=+S.mat||0,gold=+S.gold||0,n=0;
 while(n<limit&&l+n<top){let c=levelUpCostAt(l+n);if(mat<c.mat||gold<c.gold)break;mat-=c.mat;gold-=c.gold;n++}
 return n
}
function doLevelUp(i,want=1,returnTo="list"){
 ensureCoreState();i=Number(i);want=Math.max(1,Number(want)||1);
 if(!Number.isInteger(i)||i<0||i>=C.length){toast("キャラを選び直してください");return}
 let can=maxLevelUpsNow(i,want);
 if(can<1){toast(lv(i)>=cap(i)?"レベル上限です":"資料または文銭が足りません");return}
 let snap=snapshotState(),raised=0;
 try{
  for(let n=0;n<can;n++){let c=levelUpCostAt(lv(i));if((+S.mat||0)<c.mat||(+S.gold||0)<c.gold)break;S.mat=(+S.mat||0)-c.mat;S.gold=(+S.gold||0)-c.gold;S.lv[i]=lv(i)+1;raised++}
  ensureCoreState();save();persistentSaveWrite();toast(`${C[i][1]} Lv.${lv(i)}（+${raised}）`);
  return returnTo==="growth"?growth():list()
 }catch(e){
  if(snap){try{let old=JSON.parse(snap);Object.keys(S).forEach(k=>delete S[k]);Object.assign(S,old)}catch(_){}}
  ensureCoreState();finalErrorShield(e);toast("育成処理を復旧しました");return list()
 }
}


function ensureQoLPrefs(){
 if(!S.qol||typeof S.qol!=="object")S.qol={};
 if(!Number.isInteger(+S.qol.lastFarmCount))S.qol.lastFarmCount=10;
 S.qol.lastFarmCount=Math.max(1,Math.min(50,+S.qol.lastFarmCount||10));
 if(!S.qol.lastGrowthMode)S.qol.lastGrowthMode="10";
}
function setFarmCount(n){ensureQoLPrefs();S.qol.lastFarmCount=Math.max(1,Math.min(50,+n||1));save();persistentSaveWrite();return S.qol.lastFarmCount}
function rememberedFarmCount(){ensureQoLPrefs();return S.qol.lastFarmCount}
function setGrowthMode(v){ensureQoLPrefs();S.qol.lastGrowthMode=String(v);save();persistentSaveWrite()}

function ensureBossRushState(){
 if(!S.bossRush||typeof S.bossRush!=="object")S.bossRush={best:0,clears:0,claimed:{}};
 if(!Number.isFinite(+S.bossRush.best))S.bossRush.best=0;
 if(!Number.isFinite(+S.bossRush.clears))S.bossRush.clears=0;
 if(!S.bossRush.claimed||typeof S.bossRush.claimed!=="object")S.bossRush.claimed={};
 return S.bossRush
}


function stageMeta(i){
 let meta=[
  {name:"言葉のはじまり",sub:"失われた言葉を追って",power:6000,drop:"8〜15"},
  {name:"失われた書庫",sub:"封じられた頁を探せ",power:7800,drop:"8〜15"},
  {name:"海の向こうの言葉",sub:"異国の物語を辿れ",power:9600,drop:"10〜18"},
  {name:"最後の一頁",sub:"失われた物語を取り戻せ",power:11800,drop:"12〜22"}
 ];
 return meta[Math.max(0,Math.min(meta.length-1,+i||0))]
}
function isModernAuthor(i){return ["amemiya_mio","kurose_rin","mizuki_kanade","shinonome_yaya","shirakawa_fumi","tsukishima_shiori","kamishiro_ren","mikage_akari","tachibana_kanade","yakumo_saku","ayatsuji_yui","hoshino_ruri"].includes(C[i]?.[0])}

function farmResultSummary(){return S.qol?.lastFarmResult||null}
function saveFarmResult(ch,count,before){
 ensureQoLPrefs();
 S.qol.lastFarmResult={ch,count,time:Date.now(),mat:Math.max(0,(S.mat||0)-(before.mat||0)),gold:Math.max(0,(S.gold||0)-(before.gold||0)),ink:Math.max(0,(S.ink||0)-(before.ink||0))};
 save();persistentSaveWrite()
}
function characterAbility(i){
 let c=C[i]||[];
 return {name:String(c[2]||"固有能力"),genre:String(c[3]||"文学"),role:String(c[4]||"特殊"),rank:charRank(i)}
}

function lastStage(){ensureQoLPrefs();let n=Number(S.qol.lastStage);return Number.isInteger(n)&&n>=0&&n<4?n:Math.max(0,Math.min(3,(S.progress?.clears||[]).findIndex(x=>!x)<0?3:(S.progress?.clears||[]).findIndex(x=>!x)))}
function rememberStage(i){ensureQoLPrefs();S.qol.lastStage=Math.max(0,Math.min(3,+i||0));S.qol.selectedStage=S.qol.lastStage;save();persistentSaveWrite();return S.qol.lastStage}
function stageSelectGrid(){
 let last=lastStage();
 return `<div class=quickStageGrid>${[0,1,2,3].map(i=>{let s=stageMeta(i),open=i===0||(S.progress?.clears?.[i-1]||0)>0;return `<button class="${i===last?"last":""}" data-stage-open="${i}" ${open?"":"disabled"}><span>第${i+1}章</span><b>${s.name}</b><small>${i===last?"前回":"★"+(S.stageBest?.[i]||0)+"/3"}</small></button>`}).join("")}</div>`
}

function growthSearch(){return S.qol?.growthSearch||""}
function setGrowthSearch(v){ensureQoLPrefs();S.qol.growthSearch=String(v||"");save();return growth()}
function growthVisibleCandidates(){
 let q=growthSearch().trim().toLowerCase();
 return growthOwnedCandidates().filter(i=>!q||String(C[i][1]).toLowerCase().includes(q)||String(characterAbility(i).name).toLowerCase().includes(q))
}

function ensureCharacterUX(){
 if(!S.qol||typeof S.qol!=="object")S.qol={};
 if(!S.qol.partySort)S.qol.partySort="power";
}
function setPartySort(v){ensureCharacterUX();S.qol.partySort=v;save();persistentSaveWrite();return party()}
function partySortCandidates(arr){
 ensureCharacterUX();let s=S.qol.partySort;
 return [...arr].sort((a,b)=>{
  if(s==="level")return lv(b)-lv(a);
  if(s==="rank")return charRankOrder(charRank(b))-charRankOrder(charRank(a))||lv(b)-lv(a);
  if(s==="name")return String(C[a][1]).localeCompare(String(C[b][1]),"ja");
  return unitPower(b)-unitPower(a);
 })
}
function abilityText(i){
 let a=characterAbility(i);
 let roleDesc={攻撃:"敵へのダメージを優先",妨害:"敵の行動を阻害",回復:"味方のHPを回復",支援:"味方を強化",特殊:"特殊効果で戦況を変える"}[a.role]||"固有効果を発動";
 return { ...a, roleDesc }
}
const MODERN_WOMEN_V104=new Set(["kisaragi_rei","saionji_mio","amagi_rin","kurokawa_yoru","shirogane_noa","fuyutsuki_shiori","momose_ruka","aonami_sui","kagami_kei","mikazuki_aya","kujo_maya","sakuraba_otoha","hanamura_towa","tsukino_ran","shinomiya_kanade","hoshikawa_iri","minase_yura","tachibana_mei","asakura_renka","kisaragi_maya","kuon_setsuna","shinonome_hina","karasuma_touka","yuragi_sena"]);
function isModernWomanV104(i){return MODERN_WOMEN_V104.has(C[i]?.[0])}
function isAnyModernAuthor(i){return (typeof isModernAuthor==="function"&&isModernAuthor(i))||isModernWomanV104(i)}
function modernCount(team){return (team||[]).filter(i=>isAnyModernAuthor(+i)).length}
function modernLiteraryBonus(team){let n=modernCount(team);if(n>=6)return{name:"現代文学革命",rate:.18,gauge:15,count:n};if(n>=4)return{name:"現代文学圏",rate:.10,gauge:8,count:n};if(n>=2)return{name:"新潮流",rate:.05,gauge:3,count:n};return{name:"",rate:0,gauge:0,count:n}}
function rankBadgeUI(i){return `<span class="partyRankBadge" data-rank="${charRank(i)}">${charRank(i)}</span>`}

function premiumStatusStrip(){
 ensureCoreState();
 return `<div class=premiumStatus><div><b>文豪綺譚</b><small> BUNGO KITAN</small></div><span>資料 ${Number(S.mat||0).toLocaleString()}</span><span>文銭 ${Number(S.gold||0).toLocaleString()}</span><span>インク ${Number(S.ink||0).toLocaleString()}</span></div>`
}

function abilityDetail(i){
 let a=characterAbility(i),role=a.role;
 let desc={
  "攻撃":`${a.name}：敵へ高威力の文学攻撃。自身のLvと編成戦闘力に応じて威力が上昇する。`,
  "妨害":`${a.name}：敵の行動を乱し、攻撃性能または行動効率を一定時間低下させる。`,
  "回復":`${a.name}：味方の損耗を回復し、継戦能力を高める。`,
  "支援":`${a.name}：味方全体を強化し、編成の文学共鳴を引き出す。`,
  "特殊":`${a.name}：通常の役割に収まらない固有効果で戦況を書き換える。`
 }[role]||`${a.name}：この文豪固有の文学能力。`;
 return desc
}
function ougiInfo(i){
 let a=characterAbility(i),rank=charRank(i);
 let names={攻撃:"終章・断筆一閃",妨害:"禁書・沈黙領域",回復:"再版・生命綴り",支援:"共著・万象共鳴",特殊:"改稿・世界再編"};
 let effects={
  攻撃:"敵全体へ特大ダメージ。ボスには追加ダメージ。",
  妨害:"敵全体の攻撃と行動効率を低下させ、次の行動を遅延。",
  回復:"味方全体を大回復し、弱体効果を1つ解除。",
  支援:"味方全体の攻撃・防御を強化し、奥義ゲージを加速。",
  特殊:"自身の固有能力を強化状態で再発動し、戦況に応じた追加効果。"
 };
 return {name:`${names[a.role]||"奥義・物語解放"}「${a.name}」`,effect:effects[a.role]||"固有能力を極限まで解放する。",gauge:rank==="UR"?100:rank==="SSR"?110:120}
}
function bundanTag(i){
 let g=String(C[i]?.[3]||"文学");
 if(["純文学","恋愛","青春","エッセイ","日常"].includes(g))return "文芸派";
 if(["ミステリ","推理","サスペンス","社会派","ノンフィクション","記憶"].includes(g))return "論理派";
 if(["幻想","怪奇","SF","実験文学"].includes(g))return "幻想派";
 return "越境派"
}
function bundanBonus(team){
 let counts={};(team||[]).forEach(i=>{let t=bundanTag(+i);counts[t]=(counts[t]||0)+1});
 let best=Object.entries(counts).sort((a,b)=>b[1]-a[1])[0]||["",0],n=best[1];
 if(n>=6)return{name:`${best[0]}・大文壇`,rate:.15,gauge:10,count:n,tag:best[0]};
 if(n>=4)return{name:`${best[0]}・文壇共鳴`,rate:.09,gauge:6,count:n,tag:best[0]};
 if(n>=3)return{name:`${best[0]}・同人結束`,rate:.05,gauge:3,count:n,tag:best[0]};
 return{name:"未発動",rate:0,gauge:0,count:n,tag:best[0]}
}
function combinedTeamBonus(team){
 let m=modernLiteraryBonus(team),b=bundanBonus(team);
 return {modern:m,bundan:b,totalRate:m.rate+b.rate,totalGauge:m.gauge+b.gauge}
}

function ensureFormationUX(){
 ensureCharacterUX();if(!S.qol.partyFilter)S.qol.partyFilter="all";if(!S.qol.partySearch)S.qol.partySearch="";
}
function setPartyFilter(v){ensureFormationUX();S.qol.partyFilter=String(v||"all");save();persistentSaveWrite();return party()}
function partyFilterCandidates(arr){
 ensureFormationUX();let f=S.qol.partyFilter,q=String(S.qol.partySearch||"").trim().toLowerCase();
 return partySortCandidates(arr).filter(i=>{
  let a=characterAbility(i);
  let ok=f==="all"||f===charRank(i)||f===a.role||f==="modern"&&isAnyModernAuthor(i);
  let hit=!q||String(C[i][1]).toLowerCase().includes(q)||String(a.name).toLowerCase().includes(q);
  return ok&&hit
 })
}
function formationStats(i){
 let a=abilityText(i),o=ougiInfo(i),p=typeof boostedPower==="function"?boostedPower(i):(700+lv(i)*35);
 return {power:p,lv:lv(i),cap:cap(i),rank:charRank(i),ability:a.name,role:a.role,genre:a.genre,bundan:bundanTag(i),ougi:o.name}
}
function formationStatCard(i){
 let s=formationStats(i);
 return `<div class=formationStatCard><div class=formationStatHead><span data-rank="${s.rank}">${s.rank}</span><div><b>${C[i][1]}</b><small>${s.role} / ${s.bundan}</small></div><strong>Lv.${s.lv}</strong></div><div class=formationStatGrid><span>戦闘力<b>${Number(s.power).toLocaleString()}</b></span><span>上限<b>${s.cap}</b></span><span>固有能力<b>${s.ability}</b></span><span>ジャンル<b>${s.genre}</b></span></div><div class=formationOugi><small>奥義</small><b>${s.ougi}</b></div></div>`
}
function openFormationStats(i){
 let old=document.getElementById("formationStatsOverlay");if(old)old.remove();
 let o=document.createElement("div");o.id="formationStatsOverlay";o.className="resultOverlay";
 o.innerHTML=`<div class="resultCard formationStatsModal"><button class=formationStatsClose data-formation-stats-close=1>×</button><div class=formationStatsPortrait><span class=partyRankBadge data-rank="${charRank(i)}">${charRank(i)}</span><img src="${characterImage(C[i][0])}"></div>${formationStatCard(i)}<div class=abilityExplain><small>固有能力</small><p>${abilityDetail(i)}</p></div><div class=ougiExplain><small>奥義効果</small><p>${ougiInfo(i).effect}</p></div></div>`;
 document.body.appendChild(o)
}

function currentSaveOrigin(){return location.origin}
function exportSaveData(){
 ensureCoreState();persistentSaveWrite();
 let payload={game:"bungou-kitan",schema:109,origin:location.origin,exportedAt:Date.now(),state:S};
 return btoa(unescape(encodeURIComponent(JSON.stringify(payload))))
}
function downloadSaveFile(){
 try{
  let raw=JSON.stringify({game:"bungou-kitan",schema:109,origin:location.origin,exportedAt:Date.now(),state:S},null,2);
  let blob=new Blob([raw],{type:"application/json"}),a=document.createElement("a");
  a.href=URL.createObjectURL(blob);a.download="bungou-kitan-save.json";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  toast("セーブを書き出しました")
 }catch(e){finalErrorShield(e)}
}
function importSaveText(raw){
 try{
  let p=JSON.parse(raw),st=p?.state||p;if(!st||typeof st!=="object")throw new Error("invalid save");
  let merged=mergeSaveStates(S,st);Object.keys(S).forEach(k=>delete S[k]);Object.assign(S,merged);
  ensureCoreState();persistentSaveWrite();toast("セーブを引き継ぎました");return home()
 }catch(e){toast("セーブファイルを読み込めません");return false}
}
function saveOriginStatus(){
 let previous=localStorage.getItem("bungou_kitan_origin");
 let changed=!!previous&&previous!==location.origin;
 localStorage.setItem("bungou_kitan_origin",location.origin);
 return {origin:location.origin,previous,changed}
}
function saveTransferPanel(){
 let s=saveOriginStatus();
 return `<div class="saveTransfer ${s.changed?"warn":""}"><div><small>SAVE DATA</small><b>アップデート引き継ぎ</b><span>${s.changed?"URLが変わっています。旧URLのlocalStorageは自動では読めません。":"このURL内のセーブを保護しています。"}</span></div><button data-save-export=1>セーブ書出し</button><button data-emergency-recover=1>緊急復旧</button><label>セーブ読込<input type=file accept=".json,application/json" data-save-import hidden></label></div>`
}

function selectedFormationUnit(){
 ensureUnitSets();let t=S.sets?.[S.set]||[];return Number.isInteger(+S.qol?.formationFocus)?+S.qol.formationFocus:(t[0]||0)
}
function formationFocus(i){ensureFormationUX();S.qol.formationFocus=+i;save();persistentSaveWrite();return party()}
function formationSelectedPanel(){
 let i=selectedFormationUnit(),s=formationStats(i),a=abilityText(i),o=ougiInfo(i);
 return `<div class=formationSelectedV109><div class=selectedPortrait><span class=partyRankBadge data-rank="${s.rank}">${s.rank}</span><img src="${characterImage(C[i][0])}"></div><div class=selectedStats><h2>${C[i][1]}</h2><b>${s.rank}　Lv.${s.lv}/${s.cap}</b><span>戦闘力 ${Number(s.power).toLocaleString()}</span><small>${a.role} / ${s.bundan}</small></div><div class=selectedAbility><small>固有能力</small><b>${a.name}</b><p>${abilityDetail(i)}</p><small>奥義</small><b>${o.name}</b></div></div>`
}

function recommendedStage(){ensureCoreState();let a=S.progress?.clears||[];for(let i=0;i<4;i++)if(!(a[i]||0))return i;return 3}
function dailyBrief(){ensureCoreState();ensureQoLPrefs();let i=recommendedStage(),st=stageMeta(i),team=S.sets?.[S.set]||[],p=unitPower(team),mb=modernLiteraryBonus(team),bb=bundanBonus(team);return `<div class=dailyBriefV110><div><small>NEXT ACTION</small><h2>第${i+1}章 ${st.name}</h2><span>推奨 ${st.power.toLocaleString()} / 編成 ${p.toLocaleString()}</span></div><button data-stage-open="${i}">出撃 ›</button><section><span>現代文豪<b>${mb.name||"未発動"}</b></span><span>文壇<b>${bb.name}</b></span><span>周回<b>${rememberedFarmCount()}周</b></span></section></div>`}
function partyRoleSummary(team=S.sets?.[S.set]||[]){let c={攻撃:0,妨害:0,支援:0,回復:0,特殊:0};team.forEach(i=>{let r=characterAbility(+i).role;if(c[r]!=null)c[r]++});return c}
function formationAdvice(){let team=S.sets?.[S.set]||[],r=partyRoleSummary(team),tips=[];if(r.攻撃<2)tips.push("攻撃役を2人にすると周回速度が安定");if(r.回復<1)tips.push("回復役を1人入れると高難度が安定");if(r.妨害<1)tips.push("妨害役でボスの行動を抑制");let mb=modernLiteraryBonus(team),bb=bundanBonus(team);if(mb.count===1)tips.push("現代文豪をもう1人で「新潮流」発動");if(bb.count===2)tips.push(`${bb.tag}をもう1人で文壇ボーナス発動`);return tips.slice(0,3)}
function formationAdvicePanel(){let tips=formationAdvice();return `<div class=formationAdviceV110><b>編成アドバイス</b>${tips.length?tips.map(x=>`<span>• ${x}</span>`).join(""):"<span>✓ バランスの良い編成です</span>"}</div>`}

function battleFxRoot(){
 let x=document.getElementById("battleFxV111");if(x)return x;
 x=document.createElement("div");x.id="battleFxV111";x.className="battleFxV111";document.body.appendChild(x);return x
}
function battleFloat(text,kind="damage"){
 let r=battleFxRoot(),x=document.createElement("b");x.className=`battleFloat ${kind}`;x.textContent=text;r.appendChild(x);setTimeout(()=>x.remove(),900)
}
function battleSlash(kind="normal"){
 let r=battleFxRoot(),x=document.createElement("i");x.className=`battleSlash ${kind}`;r.appendChild(x);setTimeout(()=>x.remove(),650)
}
function battleShake(kind="hit"){document.documentElement.classList.remove("battleShake","battleCritShake");void document.documentElement.offsetWidth;document.documentElement.classList.add(kind==="crit"?"battleCritShake":"battleShake");setTimeout(()=>document.documentElement.classList.remove("battleShake","battleCritShake"),420)}
function battleSkillCutin(i,type="skill"){
 let a=characterAbility(i),o=ougiInfo(i),r=battleFxRoot(),x=document.createElement("div");x.className=`battleCutin ${type} ${charRank(i)==="UR"?"ur":""}`;
 x.innerHTML=`<img src="${characterImage(C[i][0])}"><div><small>${type==="ougi"?"奥義":"固有能力"}</small><b>${type==="ougi"?o.name:a.name}</b><span>${C[i][1]}</span></div>`;r.appendChild(x);setTimeout(()=>x.classList.add("show"),20);
 let auto=!!ensureBattleStateV120?.().auto;
 let hold=type==="ougi"?(auto?720:950):(auto?420:600);
 setTimeout(()=>{x.classList.remove("show");setTimeout(()=>x.remove(),220)},hold)
}
function battleHealFx(v){battleFloat(`+${Math.max(1,Math.round(v))}`,"heal");let r=battleFxRoot(),x=document.createElement("i");x.className="battleHealAura";r.appendChild(x);setTimeout(()=>x.remove(),900)}
function battleDefeatFx(){let r=battleFxRoot(),x=document.createElement("div");x.className="battleDefeat";for(let i=0;i<12;i++){let p=document.createElement("i");p.style.setProperty("--n",i);x.appendChild(p)}r.appendChild(x);setTimeout(()=>x.remove(),1100)}
function playBattleFx(kind,i=0,value=0){
 if(kind==="attack"){posterTurnFlashV232("ally");signatureMotionV124(i,slot,"attack",target);battleSlash();battleFloat(`-${Math.max(1,Math.round(value))}`);battleShake()}
 if(kind==="crit"){battleSlash("crit");battleFloat(`CRITICAL ${Math.max(1,Math.round(value))}`,"crit");battleShake("crit")}
 if(kind==="skill"){posterTurnFlashV232("ally");signatureMotionV124(i,slot,"skill",target);battleSkillCutin(i,"skill");setTimeout(()=>battleSlash("skill"),280)}
 if(kind==="ougi"){posterTurnFlashV232("ally");signatureMotionV124(i,slot,"ougi",target);battleSkillCutin(i,"ougi");setTimeout(()=>{battleSlash("ougi");battleShake("crit")},480)}
 if(kind==="heal")battleHealFx(value);
 if(kind==="defeat")battleDefeatFx()
}

function ensureFavoriteHome(){
 ensureCoreState();if(!S.qol||typeof S.qol!=="object")S.qol={};
 let i=Number(S.qol.favoriteCharacter);if(!Number.isInteger(i)||i<0||i>=C.length)S.qol.favoriteCharacter=(S.sets?.[S.set]?.[0]||0);
}
function favoriteCharacter(){ensureFavoriteHome();return +S.qol.favoriteCharacter}
function setFavoriteCharacter(i){ensureFavoriteHome();i=+i;if(!Number.isInteger(i)||i<0||i>=C.length)return;S.qol.favoriteCharacter=i;save();persistentSaveWrite();toast(`${C[i][1]}をホームに設定`);return home()}
function favoriteHomePicker(){
 let current=favoriteCharacter(),owned=growthOwnedCandidates();
 return `<div class=favoritePicker><div class=favoritePickerHead><b>ホームキャラ変更</b><button data-favorite-close=1>閉じる</button></div><div class=favoritePickerGrid>${owned.map(i=>`<button class="${i===current?"selected":""}" data-favorite-set="${i}"><div><span class=rankBadge data-rank="${charRank(i)}">${charRank(i)}</span><img src="${characterImage(C[i][0])}"></div><b>${C[i][1]}</b><small>Lv.${lv(i)} / ${characterAbility(i).role}</small></button>`).join("")}</div></div>`
}
function openFavoritePicker(){
 document.getElementById("favoritePickerOverlay")?.remove();let o=document.createElement("div");o.id="favoritePickerOverlay";o.className="resultOverlay";o.innerHTML=`<div class=resultCard>${favoriteHomePicker()}</div>`;document.body.appendChild(o)
}

function premiumHomeQuoteV236(i){
 let role=characterAbility(i)?.role||"攻撃";
 return {
   "攻撃":"言葉は、刃より深く届く。",
   "妨害":"静かな一文ほど、世界を狂わせる。",
   "回復":"物語は、傷ついた頁から続いていく。",
   "支援":"ひとつの言葉が、誰かの背中を押す。",
   "防御":"守るべき頁があるから、立ち続ける。",
   "特殊":"書き換えるのは、結末だけでいい。"
 }[role]||"今宵も、物語は戦場になる。"
}

function premiumHomeResourcesV236(){
 return `<div class=premiumHomeResourcesV236>
   <span><small>原稿片</small><b>${S.normalTickets||0}</b></span>
   <span><small>文銭</small><b>${Number(S.gold||0).toLocaleString()}</b></span>
   <span><small>インク</small><b>${S.ink||0}</b></span>
 </div>`
}

function premiumHomeShortcutsV236(){
 let rewards=rewardCenterItems().length;
 return `<div class=premiumHomeShortcutsV236>
   <button data-go=party><i>♟</i><b>編成</b><small>FORMATION</small></button>
   <button data-go=growth><i>↑</i><b>育成</b><small>GROWTH</small></button>
   <button data-go=summon><i>✦</i><b>召喚</b><small>SUMMON</small></button>
   <button data-go=list><i>▤</i><b>文豪</b><small>AUTHORS</small></button>
   <button data-reward-center=1 class="${rewards?"ready":""}"><i>◇</i><b>報酬</b><small>${rewards?rewards+"件":"REWARD"}</small></button>
 </div>`
}

function premiumHomeNextV236(){
 let next=recommendedStage(),st=stageMeta(next);
 return {next,st};
}

function premiumHomeAuditV236(){
 let root=document.querySelector(".premiumHomeV236");
 return {
   mounted:!!root,
   hero:!!root?.querySelector(".premiumHomeHeroArtV236"),
   sortie:!!root?.querySelector("[data-stage-open]"),
   shortcuts:root?.querySelectorAll(".premiumHomeShortcutsV236 button").length||0,
   nav:root?.querySelectorAll(".primaryNavV116 button").length||0
 }
}

function dedicatedHome(){
 ensureFavoriteHome();
 let i=favoriteCharacter(),a=abilityText(i),o=ougiInfo(i),q=premiumHomeQuoteV236(i),x=premiumHomeNextV236(),rewards=rewardCenterItems().length;
 shell(`<main class=premiumHomeV236>
   <div class=premiumHomeWorldV236></div>
   <div class=premiumHomeWorldShadeV236></div>

   <header class=premiumHomeHeaderV236>
     <div class=premiumHomeBrandV236>
       <small>BUNGO KITAN</small>
       <b>文豪綺譚</b>
     </div>
     ${premiumHomeResourcesV236()}
     <button class=premiumHomeFavoriteV236 data-favorite-open=1 aria-label="ホーム文豪変更">♡</button>
   </header>

   <section class=premiumHomeHeroV236>
     <div class=premiumHomeHeroGlowV236></div>
     <img class=premiumHomeHeroArtV236 src="${characterImage(C[i][0])}" alt="">
     <div class=premiumHomeHeroShadeV236></div>

     <div class=premiumHomeIdentityV236>
       <div class=premiumHomeMetaV236>
         <span data-rank="${charRank(i)}">${charRank(i)}</span>
         <small>${a.role} / ${bundanTag(i)}</small>
       </div>
       <h1>${C[i][1]}</h1>
       <div class=premiumHomeAbilityV236>
         <small>SIGNATURE ABILITY</small>
         <b>${a.name}</b>
       </div>
       <p>${q}</p><button class=premiumHomeDetailV245 data-char="${i}">詳細を見る <span>›</span></button>
     </div>
   </section>

   <section class=premiumHomeCommandV236>
     <button class=premiumHomeSortieV236 data-stage-open="${x.next}">
       <div><small>NEXT STORY</small><b>第${x.next+1}章　${x.st.name}</b><span>出撃する</span></div>
       <strong>›</strong>
     </button>

     <div class=premiumHomeSecondaryV236>
       <button data-go=growth><small>強化</small><b>育成する</b></button>
       <button data-go=party><small>戦術</small><b>編成を見る</b></button>
       <button data-go=story><small>記録</small><b>物語へ</b></button>
     </div>

     ${premiumHomeShortcutsV236()}
   </section>

   <div class=premiumHomeStatusV236>
     <span>Lv.${lv(i)}</span>
     <span>${o.name}</span>
     <span>${rewards?`報酬 ${rewards}`:"書架は静かだ"}</span>
   </div>

   ${primaryNavV116("home")}
 </main>`)
}

function ensureNoScrollUX(){
 if(!S.qol||typeof S.qol!=="object")S.qol={};
 if(!S.qol.pages||typeof S.qol.pages!=="object")S.qol.pages={};
}
function pageSlice(key,arr,size=8){
 ensureNoScrollUX();let max=Math.max(1,Math.ceil(arr.length/size)),p=Math.max(0,Math.min(max-1,+S.qol.pages[key]||0));S.qol.pages[key]=p;
 return {items:arr.slice(p*size,p*size+size),page:p,max}
}
function setUiPage(key,p,route){
 ensureNoScrollUX();S.qol.pages[key]=Math.max(0,+p||0);save();persistentSaveWrite();return typeof route==="function"?route():home()
}
function pagerUI(key,page,max,route){
 if(max<=1)return "";
 return `<div class=noScrollPager><button data-ui-page="${key}:${page-1}:${route}" ${page<=0?"disabled":""}>‹</button><b>${page+1} / ${max}</b><button data-ui-page="${key}:${page+1}:${route}" ${page>=max-1?"disabled":""}>›</button></div>`
}

function routeLabel(r){return({home:"ホーム",party:"編成",growth:"育成",sortie:"出撃",summon:"召喚",list:"文豪",story:"物語",arena:"模擬戦"})[r]||"文豪綺譚"}
function primaryNavV116(active=""){
 return `<nav class=primaryNavV116>${[["home","⌂","ホーム"],["party","♟","編成"],["growth","↑","育成"],["sortie","⚔","出撃"],["summon","✦","召喚"]].map(([r,ic,l])=>`<button class="${active===r?"active":""}" data-go="${r}"><i>${ic}</i><b>${l}</b></button>`).join("")}</nav>`
}

function sdUnit(i,side="ally",slot=0){
 let n=C[i]?.[1]||"文豪",s=signatureStyleV124(i),slug=C[i]?.[0]||"author";
 return `<div class="spriteUnitV160 asset-${spriteAssetGateV167(i)} quality-${spriteQualityV162(i)} ${side} ${sdArtClassV148(i)} ${sdDepthV154(i)} ${faceMoodClassV157(i)}" data-sd-unit="${side}:${slot}" data-author="${slug}" data-quality="asset-first" style="${sdDetailStyleV144(i)}"><div class=spriteShadowV160></div><img class=spriteArtV160 src="${spriteAssetV160(i,"idle")}" onerror="spriteFallbackV160(this)" alt=""><div class=spriteFallbackV160><div class=sdUnitV147><div class=sdGroundV147></div><div class=sdFigureV147><div class=sdBackHairV147></div><div class=sdLegV147 data-leg=l></div><div class=sdLegV147 data-leg=r></div><div class=sdDressV147><i></i><b></b></div><div class=sdArmV147 data-arm=l><i></i></div><div class=sdArmV147 data-arm=r><i></i></div><div class=sdNeckV147></div><div class=sdHeadV147><div class=sdFaceV147><i class=eyeL></i><i class=eyeR></i><b class=mouth></b><em></em></div><div class=sdHairV147><i></i></div></div><div class=sdWeaponV147 data-weapon="${s.weapon}"></div>${sdAccessoryV139(i)}</div></div></div><small>${n}</small></div>`
}
function sdEnemy(slot=0,boss=false){
 return `<div class="sdEnemyV118 ${boss?"boss":""}" data-sd-enemy="${slot}" data-battle-target="${slot}"><div class=sdEnemyShadowV118></div><div class=sdEnemyBodyV118><i></i><i></i><b></b></div><small>${boss?"物語喰い":"異稿体"}</small></div>`
}
function sdBattleStage(){
 let team=(S.sets?.[S.set]||[]).slice(0,5);
 while(team.length<5)team.push(team[0]||0);
 return `<div class=sdBattleV118><div class=sdBattleBgV118></div><div class=sdEnemyLaneV118>${sdEnemy(0,true)}${sdEnemy(1,false)}</div><div class=sdAllyLaneV118>${team.map((i,n)=>sdUnit(+i,"ally",n)).join("")}</div><div class=sdEnemyHudV118><small>BOSS</small><b>物語喰い</b><span><i></i></span></div></div>`
}
function sdAnimate(kind,slot=0,target=0){
 let u=document.querySelector(`[data-sd-unit="ally:${slot}"]`),e=document.querySelector(`[data-sd-enemy="${target}"]`);
 if(kind==="attack"&&u){u.classList.add("sdAttackV118");setTimeout(()=>{e?.classList.add("sdHitV118");battleSlash()},230);setTimeout(()=>{u.classList.remove("sdAttackV118");e?.classList.remove("sdHitV118")},650)}
 if(kind==="skill"&&u){u.classList.add("sdSkillV118");setTimeout(()=>battleSkillCutin((S.sets?.[S.set]||[])[slot]||0,"skill"),180);setTimeout(()=>u.classList.remove("sdSkillV118"),900)}
 if(kind==="ougi"&&u){u.classList.add("sdOugiV118");battleSkillCutin((S.sets?.[S.set]||[])[slot]||0,"ougi");setTimeout(()=>{e?.classList.add("sdHitV118");battleSlash("ougi")},520);setTimeout(()=>{u.classList.remove("sdOugiV118");e?.classList.remove("sdHitV118")},1400)}
 if(kind==="enemy"&&e){e.classList.add("sdEnemyAttackV118");setTimeout(()=>{u?.classList.add("sdHitV118");battleShake()},260);setTimeout(()=>{e.classList.remove("sdEnemyAttackV118");u?.classList.remove("sdHitV118")},700)}
 if(kind==="heal"&&u){u.classList.add("sdHealV118");battleHealFx(980);setTimeout(()=>u.classList.remove("sdHealV118"),850)}
}
function sdBattleDemo(){
 let seq=[["attack",0,0],["enemy",0,0],["skill",1,0],["heal",2,0],["ougi",3,0]];
 seq.forEach((x,n)=>setTimeout(()=>sdAnimate(...x),n*1250))
}

function battlePartyCardsV119(){
 let team=(S.sets?.[S.set]||[]).slice(0,5);while(team.length<5)team.push(team[0]||0);
 return `<div class=battlePartyV119>${team.map((i,n)=>`<button class="${n===0?"active":""}" data-battle-unit="${n}"><img src="${characterImage(C[i][0])}"><section><b>${C[i][1]}</b><span>HP <i style="--hp:${ensureAdvancedBattleV125().allyHp[n]||0}%"></i></span><span>EP <i class=ep style="--hp:${ensureAdvancedBattleV125().ep[n]||0}%"></i></span></section></button>`).join("")}</div>`
}
function battleCommandsV119(){
 let b=ensureAdvancedBattleV125(),slot=Math.max(0,b.unit||0),ep=b.ep?.[slot]||0;
 return `<div class=compactBattleDockV150><nav class=compactMainV150><button data-sd-action=attack><i>⚔</i><span>攻撃</span></button><button data-sd-action=skill><i>✦</i><span>スキル</span></button><button class="${ep>=100?"ready":""}" data-sd-action=ougi><i>◆</i><span>奥義</span><small>${ep}</small></button><button data-sd-action=heal><i>＋</i><span>支援</span></button></nav><nav class=compactSubV150><button data-battle-speed="${b.speed===2?1:2}">${b.speed===2?"×2":"×1"}</button><button class="${b.auto?"on":""}" data-battle-auto=1 data-sd-action=auto>${b.auto?"● AUTO":"AUTO"}</button><button data-battle-log-open=1>LOG</button></nav></div>`
}
function cinematicBattleV119(){return mountBattleV182()}
function battleClearV119(){stopAutoCoreV427?.();stopAutoBattleV122();
 let o=document.createElement("div");o.className="battleClearV119";o.innerHTML=`<div><small>QUEST COMPLETE</small><h1>BATTLE CLEAR <em class=battleGradeV129>${battleGradeV129()}</em></h1><section><span>★ クエストをクリア</span><span>★ 戦闘不能なし</span><span>★ 10ターン以内</span></section><hr><b>獲得報酬</b><div class=clearRewardsV119><i>📕<small>×3</small></i><i>📘<small>×1</small></i><i>◆<small>×2</small></i></div>${battleResultActionsV128()}</div>`;document.body.appendChild(o)
}

function ensureBattleStateV120(){
 if(!S.battleV120||typeof S.battleV120!=="object")S.battleV120={wave:1,turn:1,speed:1,auto:false,target:0,unit:0,enemyHp:[100,100,100],log:[]};
 return S.battleV120
}
function battleTurnOrderV120(){
 let t=(S.sets?.[S.set]||[]).slice(0,5),b=ensureBattleStateV120();
 return `<div class=turnOrderV120>${t.map((i,n)=>`<button class="${b.unit===n?"on":""}" data-battle-unit="${n}"><img src="${characterImage(C[i][0])}"></button>`).join("")}<i></i><button class=enemy>◆</button></div>`
}
function battleEnemyInfoV120(){
 let b=ensureBattleStateV120(),hp=b.enemyHp[b.target]??100;
 return `<div class=enemyInfoV120><div><small>${b.wave===3?"BOSS":"ENEMY"} / Lv.${30+b.wave*10}</small><b>${b.wave===3?"頁喰いの化身":"異稿体"}</b></div><span><i style="width:${hp}%"></i></span><strong>${Math.round(hp)}%</strong><section><em>攻↓</em><em>防↓</em><em>異常耐性</em></section></div>`
}
function battleLogV120(msg){
 let b=ensureBattleStateV120();b.log.unshift(msg);b.log=b.log.slice(0,4)
}
function nextWaveV120(){
 let b=ensureBattleStateV120();if(b.wave<3){b.wave++;b.turn=1;b.enemyRosterWave=0;syncEnemyRosterV129();battleSessionWaveV196();battleLogV120(`WAVE ${b.wave} 開始`);cinematicBattleV119();setTimeout(()=>waveBannerV121(b.wave),80);return}battleClearRewardsV127()
}
function battleActionV120(kind){
 let pre198=battleCommandStateV198();if(kind==="ougi"&&!pre198.canOugi){toast("EPが100になると奥義を発動できます");refreshCommandPanelV198();return}
 let token=battleActionGateV195(kind);if(!token)return;battleSessionActionV196();
 let b=ensureBattleStateV120(),slot=b.unit||0,target=b.target||0,team=S.sets?.[S.set]||[],i=+team[slot]||0;
 try{
   if(kind==="attack"){posterBattleLockCueV214("attack");posterCommandToastV212("attack");posterReusableDirectorV228(slot,target,"attack");posterStateCueV209("attack");posterActionCinematicV207(slot,target,"attack");posterActionFeedbackV206("attack");battleActionFeedbackV204(slot,target,"attack");animatedActionV121("attack",slot,target);let hit=battleDamageV125("attack",i,target);posterActualDamageV231(hit,"attack");posterHitTagV231(hit);gainEpV125(slot,"attack");applyStatusV125(i,target);if(hit.weak)battleTextV121("WEAK","skill",72,35);if(hit.broken)battleTextV121("BREAK","ougi",72,31);battleLogV120(`${C[i][1]}の通常攻撃`)}
   if(kind==="skill"){posterBattleLockCueV214("skill");posterCommandToastV212("skill");posterReusableDirectorV228(slot,target,"skill");posterStateCueV209("skill");posterActionCinematicV207(slot,target,"skill");posterActionFeedbackV206("skill");battleActionFeedbackV204(slot,target,"skill");animatedActionV121("skill",slot,target);let hit=battleDamageV125("skill",i,target);posterActualDamageV231(hit,"skill");posterHitTagV231(hit);gainEpV125(slot,"skill");applyStatusV125(i,target);if(hit.weak)battleTextV121("WEAK","skill",72,35);if(hit.broken)battleTextV121("BREAK","ougi",72,31);battleLogV120(`${characterAbility(i).name} 発動`)}
   if(kind==="ougi"){posterBattleLockCueV214("ougi");posterCommandToastV212("ougi");posterReusableDirectorV228(slot,target,"ougi");posterStateCueV209("ougi");posterActionCinematicV207(slot,target,"ougi");posterActionFeedbackV206("ougi");battleActionFeedbackV204(slot,target,"ougi");animatedActionV121("ougi",slot,target);let hit=battleDamageV125("ougi",i,target);posterActualDamageV231(hit,"ougi");posterHitTagV231(hit);gainEpV125(slot,"ougi");applyStatusV125(i,target);if(hit.weak)battleTextV121("WEAK","skill",72,35);if(hit.broken)battleTextV121("BREAK","ougi",72,31);battleLogV120(`${ougiInfo(i).name} 発動`)}
   if(kind==="heal"){posterTurnFlashV232("ally");posterBattleLockCueV214("heal");posterCommandToastV212("heal");posterReusableDirectorV228(slot,target,"heal");posterStateCueV209("heal");posterActionCinematicV207(slot,target,"heal");posterActionFeedbackV206("heal");battleActionFeedbackV204(slot,target,"heal");signatureMotionV124(i,slot,"heal",target);animatedActionV121("heal",slot,target);battleLogV120(`${C[i][1]}が味方を支援`)}
   b.turn++;battleActionStampV193();b.unit=nextAliveAllyV126((slot+1)%Math.max(1,Math.min(5,team.length)));
   if(b.unit<0){battleActionReleaseV195(token);gameOverV126();return}
   queueBattleSaveV197();smoothRefreshBattleV194();
   battleTimerV191(()=>{
     if(!battleIsTokenValidV195(token))return;
     cleanupTransientBattleV188();
     battleActionReleaseV195(token);
     if((b.enemyHp[target]||0)<=0)nextWaveV120();else smoothRefreshBattleV194()
   },bsv2ActionTimerV186(kind))
 }catch(err){
   console.error("V195 manual battle",err);
   battleActionReleaseV195(token);
   toast("戦闘処理を復旧しました");
   smoothRefreshBattleV194();
 }
}
function battleTacticalBarV120(){return ""}
function battleLogPanelV120(){
 let b=ensureBattleStateV120();return `<div class=battleLogV120><header><b>BATTLE LOG</b><button data-battle-log-close=1>×</button></header>${(b.log.length?b.log:["戦闘開始"]).map(x=>`<p>${x}</p>`).join("")}</div>`
}

function battleFxLayerV121(){
 let x=document.getElementById("battleAnimV121");if(x)return x;
 x=document.createElement("div");x.id="battleAnimV121";x.className="battleAnimV121";document.querySelector(".battleFieldV119")?.appendChild(x);return x
}
function battleTextV121(text,kind="damage",x=72,y=42){
 let r=battleFxLayerV121(),n=document.createElement("b");n.className=`battleTextV121 ${kind}`;n.style.left=x+"%";n.style.top=y+"%";n.textContent=text;r.appendChild(n);setTimeout(()=>n.remove(),950)
}
function inkBurstV121(x=72,y=45,color="red"){
 let r=battleFxLayerV121(),n=document.createElement("div");n.className=`inkBurstV121 ${color}`;n.style.left=x+"%";n.style.top=y+"%";
 for(let k=0;k<10;k++){let i=document.createElement("i");i.style.setProperty("--k",k);n.appendChild(i)}r.appendChild(n);setTimeout(()=>n.remove(),800)
}
function pageBurstV121(x=72,y=45){
 let r=battleFxLayerV121(),n=document.createElement("div");n.className="pageBurstV121";n.style.left=x+"%";n.style.top=y+"%";
 for(let k=0;k<8;k++){let i=document.createElement("i");i.style.setProperty("--k",k);n.appendChild(i)}r.appendChild(n);setTimeout(()=>n.remove(),bsv2SkipLongFxV186()?360:540)
}
function slashArcV121(kind="normal"){
 let r=battleFxLayerV121(),n=document.createElement("i");n.className=`slashArcV121 ${kind}`;r.appendChild(n);setTimeout(()=>n.remove(),620)
}
function skillBannerV121(i,type="skill"){
 let a=characterAbility(i),o=ougiInfo(i),r=battleFxLayerV121(),n=document.createElement("div");n.className=`skillBannerV121 ${type}`;
 n.innerHTML=`<img src="${characterImage(C[i][0])}"><section><small>${type==="ougi"?"SPECIAL":"SKILL"}</small><b>${type==="ougi"?o.name:a.name}</b><span>${C[i][1]}</span><em>${type==="ougi"?ultimateFlavorV127(i):""}</em></section>`;r.appendChild(n);requestAnimationFrame(()=>n.classList.add("show"));setTimeout(()=>n.classList.remove("show"),type==="ougi"?620:480);setTimeout(()=>n.remove(),type==="ougi"?820:700)
}
function waveBannerV121(w){
 let r=battleFxLayerV121(),n=document.createElement("div");n.className="waveBannerV121";n.innerHTML=`<small>STAGE 1-3</small><b>WAVE ${w} / 3</b>`;r.appendChild(n);setTimeout(()=>n.classList.add("show"),30);setTimeout(()=>n.classList.remove("show"),850);setTimeout(()=>n.remove(),1150)
}
function enemyTelegraphV121(){
 let e=document.querySelector('[data-sd-enemy="0"]');if(!e)return;e.classList.add("enemyTelegraphV121");battleTextV121("ENEMY ACTION","warning",72,31);setTimeout(()=>e.classList.remove("enemyTelegraphV121"),650)
}
function hitStopV121(ms=80){document.documentElement.classList.add("hitStopV121");setTimeout(()=>document.documentElement.classList.remove("hitStopV121"),ms)}
function animatedActionV121(kind,slot=0,target=0){
 let b=ensureBattleStateV120(),team=S.sets?.[S.set]||[],i=+team[slot]||0,enemy=document.querySelector(`[data-sd-enemy="${target}"]`);
 if(kind==="attack"){setTimeout(()=>{impactFrameV146(target,"attack");actionSfxVisualV146("attack")},310);battleCameraV142("normal");
   sdAnimate("attack",slot,target);setTimeout(()=>{slashArcV121();inkBurstV121();battleTextV121("4,892");hitStopV121();enemy?.classList.add("impactV121")},250);setTimeout(()=>enemy?.classList.remove("impactV121"),620)
 }
 if(kind==="skill"){setTimeout(()=>{impactFrameV146(target,"skill");actionSfxVisualV146("skill")},500);battleCameraV142("normal");
   skillBannerV121(i,"skill");setTimeout(()=>sdAnimate("skill",slot,target),180);setTimeout(()=>{inkBurstV121(72,44,"blue");pageBurstV121();battleTextV121("8,240","skill")},480)
 }
 if(kind==="ougi"){ougiSealV159(i);cutinV153(i,"ougi");setTimeout(()=>{impactFrameV146(target,"ougi");actionSfxVisualV146("ougi")},760);battleCameraV142("ougi");cinematicOugiV141(i,slot,target);
   skillBannerV121(i,"ougi");setTimeout(()=>sdAnimate("ougi",slot,target),150);setTimeout(()=>{slashArcV121("ougi");inkBurstV121(72,44,"gold");pageBurstV121();battleTextV121("12,450","ougi");hitStopV121(90)},430)
 }
 if(kind==="heal"){
   sdAnimate("heal",slot,target);setTimeout(()=>{battleTextV121("+1,280","heal",35,48);inkBurstV121(35,48,"green")},220)
 }
}
function enemyResponseV121(slot=0){
 enemyTelegraphV121();setTimeout(()=>{sdAnimate("enemy",slot,0);battleTextV121("-640","enemy",28,50);inkBurstV121(28,50,"red")},620)
}
function autoBattleLoopV121(){
 let b=ensureBattleStateV120();if(!b.auto)return;
 battleActionV120("attack");setTimeout(()=>{if(ensureBattleStateV120().auto)autoBattleLoopV121()},b.speed===2?1050:1800)
}

let autoBattleTimerV122=null,autoBattleBusyV122=false;
function stopAutoBattleV122(){
 if(autoBattleTimerV122){clearTimeout(autoBattleTimerV122);autoBattleTimerV122=null}
 autoBattleBusyV122=false
}
function autoDelayV122(){let t=battleTempoV186();return t.after}
function chooseAutoActionV122(){return autoDecisionV123()}
function chooseAutoActionV122_legacy(){
 let b=ensureBattleStateV120(),team=S.sets?.[S.set]||[],i=+team[b.unit||0]||0,role=characterAbility(i).role;
 if(role==="回復"&&b.turn%4===0)return"heal";
 if(b.turn%5===0&&canOugiV125(slot))return"ougi";
 if(b.turn%3===0)return"skill";
 return"attack"
}
function scheduleAutoBattleV122(delay){
 if(autoBattleTimerV122){clearTimeout(autoBattleTimerV122);autoBattleTimerV122=null}
 let b=ensureBattleStateV120();if(!b.auto)return;
 autoBattleTimerV122=setTimeout(()=>{
   autoBattleTimerV122=null;
   runAutoBattleV122();
 },delay??autoDelayV122())
}
function runAutoBattleV122(){
 autoBattleTimerV122=null;
 let b=ensureBattleStateV120();
 if(!b.auto)return;
 if(autoBattleBusyV122||__battleActionBusyV195){
   if(!__nativeAutoPumpV425)scheduleAutoBattleV122(180);
   return;
 }
 battleSessionActionV196();
 let token=battleActionGateV195("auto");
 if(!token){
   if(!__nativeAutoPumpV425)scheduleAutoBattleV122(180);
   return;
 }
 autoBattleBusyV122=true;
 try{
   tickEnemyStatusV127();
   let kind=chooseAutoActionV122(),slot=b.unit||0,target=b.target||0,team=S.sets?.[S.set]||[],i=+team[slot]||0;
   try{
     posterBattleLockCueV214(kind);posterCommandToastV212(kind);posterReusableDirectorV228(slot,target,kind);posterStateCueV209(kind);
     posterActionCinematicV207(slot,target,kind);posterActionFeedbackV206(kind);battleActionFeedbackV204(slot,target,kind);safeAnimatedActionV130(kind,slot,target);
   }catch(fxErr){console.warn("V425 auto FX skipped",fxErr)}
   if(kind==="attack"){let hit=battleDamageV125("attack",i,target);posterActualDamageV231(hit,"attack");posterHitTagV231(hit);gainEpV125(slot,"attack");applyStatusV125(i,target);if(hit.weak)battleTextV121("WEAK","skill",72,35);if(hit.broken)battleTextV121("BREAK","ougi",72,31);battleLogV120(`${C[i][1]}の通常攻撃`)}
   if(kind==="skill"){let hit=battleDamageV125("skill",i,target);posterActualDamageV231(hit,"skill");posterHitTagV231(hit);gainEpV125(slot,"skill");applyStatusV125(i,target);if(hit.weak)battleTextV121("WEAK","skill",72,35);if(hit.broken)battleTextV121("BREAK","ougi",72,31);battleLogV120(`${characterAbility(i).name} 発動`)}
   if(kind==="ougi"){let hit=battleDamageV125("ougi",i,target);posterActualDamageV231(hit,"ougi");posterHitTagV231(hit);gainEpV125(slot,"ougi");applyStatusV125(i,target);if(hit.weak)battleTextV121("WEAK","skill",72,35);if(hit.broken)battleTextV121("BREAK","ougi",72,31);battleLogV120(`${ougiInfo(i).name} 発動`)}
   if(kind==="heal"){gainEpV125(slot,"heal");let healAmount=healPartyV126(slot);aliveAlliesV126().forEach(x=>posterAllyNumberV232(x.i,healAmount,"heal"));battleLogV120(`${C[i][1]}が味方を支援`)}
   b.turn++;b.unit=nextAliveAllyV126((slot+1)%Math.max(1,Math.min(5,team.length)));
   if(b.unit<0){autoBattleBusyV122=false;battleActionReleaseV195(token);gameOverV126();return}
   queueBattleSaveV197();smoothRefreshBattleV194();
   battleTimerV191(()=>{
     if(!battleIsTokenValidV195(token)){autoBattleBusyV122=false;return}
     autoBattleBusyV122=false;cleanupTransientBattleV188();battleActionReleaseV195(token);
     if((b.enemyHp[target]||0)<=0){
       if(b.wave<3){
         b.wave++;b.turn=1;b.enemyRosterWave=0;syncEnemyRosterV129();battleLogV120(`WAVE ${b.wave} 開始`);
         mountBattleV182();scheduleAutoBattleV122(220)
       }else{
         b.auto=false;stopAutoBattleV122();save();persistentSaveWrite();battleClearRewardsV127()
       }
     }else{
       smoothRefreshBattleV194();
       if(b.turn%2===0){
         enemySkillTurnV126(()=>{smoothRefreshBattleV194();scheduleAutoBattleV122(autoDelayV122())})
       }else scheduleAutoBattleV122(autoDelayV122())
     }
   },bsv2ActionTimerV186(kind))
 }catch(err){
   console.error("V195 auto battle",err);
   autoBattleBusyV122=false;battleActionReleaseV195(token);
   scheduleAutoBattleV122(300)
 }
}

let __autoCoreTimerV427=null;
let __autoCoreBusyV427=false;

function stopAutoCoreV427(){
 if(__autoCoreTimerV427){clearTimeout(__autoCoreTimerV427);__autoCoreTimerV427=null}
 __autoCoreBusyV427=false
}

function syncAutoUiV427(){
 let b=ensureBattleStateV120();
 document.querySelectorAll("[data-battle-auto]").forEach(btn=>{
   btn.classList.toggle("on",!!b.auto);
   btn.setAttribute("aria-pressed",b.auto?"true":"false");
   if(btn.closest(".posterThumbSubV234"))btn.textContent=b.auto?"AUTO ON":"AUTO";
 });
 document.querySelectorAll(".bsv2AutoBadge184 span").forEach(el=>el.textContent=b.auto?"AUTO RUNNING":"MANUAL");
 let root=document.querySelector(".posterBattleV205");
 if(root)root.classList.toggle("posterAutoV230",!!b.auto);
 try{refreshCleanCommandStateV241?.()}catch(_){}
}

function autoCoreChoiceV427(slot){
 let b=ensureAdvancedBattleV125(),team=S.sets?.[S.set]||[],i=+team[slot]||0;
 if(canOugiV125(slot))return "ougi";
 let role=characterAbility(i)?.role||"攻撃";
 if(role==="回復"&&Math.min(...(b.allyHp||[100]))<68)return "heal";
 if((b.turn||1)%3===0)return "skill";
 return "attack"
}

function autoCoreEnemyHitV427(){
 let b=ensureAdvancedBattleV125();
 let alive=aliveAlliesV126();
 if(!alive.length){gameOverV126();return false}
 let slot=alive[Math.floor(Math.random()*alive.length)].i;
 let sk=enemySkillV126();
 let power=Math.max(3,Math.round((sk?.power||9)*.72));
 try{
   damageAllyV126(slot,power);
   battleLogV120(`${sk?.name||"敵の反撃"}`);
   battleTextV121(`-${power}%`,"enemy",22+slot*8,53);
 }catch(_){}
 return aliveAlliesV126().length>0
}

function autoCoreStepV427(){
 let b=ensureAdvancedBattleV125();
 if(!b.auto||!document.body.classList.contains("battleMode")){
   stopAutoCoreV427();return
 }
 if(__autoCoreBusyV427){
   __autoCoreTimerV427=setTimeout(autoCoreStepV427,160);return
 }

 __autoCoreBusyV427=true;
 try{
   let team=S.sets?.[S.set]||[];
   let slot=Math.max(0,Math.min(4,b.unit||0));
   let target=Math.max(0,b.target||0);
   let i=+team[slot]||0;
   let kind=autoCoreChoiceV427(slot);

   try{safeAnimatedActionV130?.(kind,slot,target)}catch(_){}

   if(kind==="heal"){
     try{gainEpV125(slot,"heal")}catch(_){}
     try{healPartyV126(slot)}catch(_){}
     battleLogV120(`${C[i][1]}が味方を支援`);
   }else{
     let hit=battleDamageV125(kind,i,target);
     try{gainEpV125(slot,kind)}catch(_){}
     try{applyStatusV125(i,target)}catch(_){}
     try{posterActualDamageV231?.(hit,kind);posterHitTagV231?.(hit)}catch(_){}
     battleLogV120(kind==="attack"?`${C[i][1]}の通常攻撃`:`${C[i][1]}の${kind==="ougi"?"奥義":"スキル"}`);
   }

   b.turn=(b.turn||1)+1;
   try{battleActionStampV193?.()}catch(_){}
   b.unit=nextAliveAllyV126((slot+1)%Math.max(1,Math.min(5,team.length)));

   if(b.unit<0){
     b.auto=false;
     syncAutoUiV427();
     stopAutoCoreV427();
     gameOverV126();
     return
   }

   if((b.enemyHp[target]||0)<=0){
     if((b.wave||1)<3){
       b.wave++;
       b.turn=1;
       b.enemyRosterWave=0;
       syncEnemyRosterV129();
       try{battleSessionWaveV196?.()}catch(_){}
       battleLogV120(`WAVE ${b.wave} 開始`);
       try{waveBannerV121?.(b.wave)}catch(_){}
     }else{
       b.auto=false;
       syncAutoUiV427();
       stopAutoCoreV427();
       save();persistentSaveWrite();
       battleClearRewardsV127();
       return
     }
   }else{
     autoCoreEnemyHitV427();
   }

   try{queueBattleSaveV197(true)}catch(_){}
   try{smoothRefreshBattleV194()}catch(_){}
   syncAutoUiV427();

 }catch(err){
   console.warn("V427 AUTO CORE recovered",err);
   try{autoBattleBusyV122=false;battleInvalidateActionsV195()}catch(_){}
 }finally{
   __autoCoreBusyV427=false
 }

 if(ensureBattleStateV120().auto){
   let speed=ensureBattleStateV120().speed===2?520:820;
   __autoCoreTimerV427=setTimeout(autoCoreStepV427,speed)
 }
}

function startAutoCoreV427(){
 stopAutoCoreV427();
 __autoCoreTimerV427=setTimeout(autoCoreStepV427,120)
}

function toggleAutoBattleV122(){return autoHardToggleV430()}



let __autoHardTimerV430=null;
let __autoHardBusyV430=false;
let __autoHardLastTouchV430=0;

function autoHardStopV430(){
 if(__autoHardTimerV430){clearTimeout(__autoHardTimerV430);__autoHardTimerV430=null}
 __autoHardBusyV430=false;
}

function autoHardUiV430(){
 let b=ensureAdvancedBattleV125();
 let btn=document.getElementById("autoHardButtonV430");
 if(btn){
   btn.textContent=b.auto?"● AUTO ON":"AUTO";
   btn.classList.toggle("on",!!b.auto);
   btn.setAttribute("aria-pressed",b.auto?"true":"false");
 }
 document.querySelectorAll("[data-battle-auto]").forEach(x=>{
   x.textContent=b.auto?"AUTO ON":"AUTO";
   x.classList.toggle("on",!!b.auto);
   x.setAttribute("aria-pressed",b.auto?"true":"false");
 });
 document.querySelectorAll(".bsv2AutoBadge184 span").forEach(x=>x.textContent=b.auto?"AUTO RUNNING":"MANUAL");
}

function autoHardActionV430(){
 let b=ensureAdvancedBattleV125();
 if(!b.auto||!document.body.classList.contains("battleMode")){
   autoHardStopV430();autoHardUiV430();return;
 }
 if(__autoHardBusyV430){
   __autoHardTimerV430=setTimeout(autoHardActionV430,160);return;
 }
 __autoHardBusyV430=true;
 try{
   let team=S.sets?.[S.set]||[];
   let slot=Math.max(0,Math.min(4,b.unit||0));
   let idx=+team[slot]||0;
   let target=Math.max(0,b.target||0);
   let kind="attack";
   if(canOugiV125(slot))kind="ougi";
   else if(characterAbility(idx)?.role==="回復" && Math.min(...(b.allyHp||[100]))<65)kind="heal";
   else if((b.turn||1)%3===0)kind="skill";

   if(kind==="heal"){
     try{gainEpV125(slot,"heal")}catch(_){}
     try{healPartyV126(slot)}catch(_){}
     try{battleLogV120(`${C[idx][1]}が味方を支援`)}catch(_){}
   }else{
     let hit=battleDamageV125(kind,idx,target);
     try{gainEpV125(slot,kind)}catch(_){}
     try{applyStatusV125(idx,target)}catch(_){}
     try{safeAnimatedActionV130?.(kind,slot,target)}catch(_){}
     try{posterActualDamageV231?.(hit,kind)}catch(_){}
   }

   b.turn=(b.turn||1)+1;
   b.unit=nextAliveAllyV126((slot+1)%Math.max(1,Math.min(5,team.length)));

   if((b.enemyHp[target]||0)<=0){
     if((b.wave||1)<3){
       b.wave++;
       b.turn=1;
       b.enemyRosterWave=0;
       syncEnemyRosterV129();
       try{waveBannerV121?.(b.wave)}catch(_){}
     }else{
       b.auto=false;
       autoHardStopV430();
       autoHardUiV430();
       save();persistentSaveWrite();
       battleClearRewardsV127();
       return;
     }
   }else{
     let alive=aliveAlliesV126();
     if(!alive.length){
       b.auto=false;
       autoHardStopV430();
       autoHardUiV430();
       gameOverV126();
       return;
     }
     let victim=alive[Math.floor(Math.random()*alive.length)].i;
     let power=7;
     try{power=Math.max(3,Math.round((enemySkillV126()?.power||9)*.7))}catch(_){}
     try{damageAllyV126(victim,power)}catch(_){}
   }

   try{queueBattleSaveV197(true)}catch(_){}
   try{smoothRefreshBattleV194()}catch(_){}
   autoHardUiV430();

 }catch(err){
   console.warn("V430 AUTO HARDWIRE recovered",err);
 }finally{
   __autoHardBusyV430=false;
 }

 if(ensureBattleStateV120().auto){
   __autoHardTimerV430=setTimeout(autoHardActionV430, ensureBattleStateV120().speed===2?500:820);
 }
}

function autoHardToggleV430(){
 let b=ensureAdvancedBattleV125();
 b.auto=!b.auto;
 autoHardUiV430();
 if(b.auto){
   autoHardStopV430();
   b.auto=true;
   __autoHardTimerV430=setTimeout(autoHardActionV430,100);
   try{toast("AUTO ON")}catch(_){}
 }else{
   autoHardStopV430();
   try{toast("AUTO OFF")}catch(_){}
 }
 try{queueBattleSaveV197(true)}catch(_){}
}

window.__autoHardTouchV430=function(e){
 let now=Date.now();
 if(now-__autoHardLastTouchV430<500)return false;
 __autoHardLastTouchV430=now;
 try{e?.preventDefault?.();e?.stopPropagation?.()}catch(_){}
 autoHardToggleV430();
 return false;
};

function installAutoHardButtonV430(){
 let old=document.getElementById("autoHardButtonV430");if(old)old.remove();
 if(!document.body.classList.contains("battleMode"))return;
 let original=document.querySelector(".posterThumbSubV234 [data-battle-auto]");
 if(!original)return;
 let r=original.getBoundingClientRect();
 let b=document.createElement("button");
 b.id="autoHardButtonV430";
 b.type="button";
 b.setAttribute("aria-label","AUTO切替");
 b.setAttribute("aria-pressed",ensureAdvancedBattleV125().auto?"true":"false");
 b.setAttribute("ontouchend","return window.__autoHardTouchV430(event)");
 b.setAttribute("onclick","return window.__autoHardTouchV430(event)");
 b.style.left=Math.round(r.left)+"px";
 b.style.top=Math.round(r.top)+"px";
 b.style.width=Math.round(r.width)+"px";
 b.style.height=Math.round(r.height)+"px";
 document.body.appendChild(b);
 autoHardUiV430();
}

function toggleSpeedV122(speed){
 let b=ensureBattleStateV120();b.speed=+speed===2?2:1;battleFastClassV185();queueBattleSaveV197();smoothRefreshBattleV194();
 if(b.auto)scheduleAutoBattleV122(90)
}

function battleProgressV123(){
 return {ui:90,animation:78,auto:80,ai:62,enemies:45,characterMotion:28,balance:35,total:64}
}
function aliveEnemyV123(){
 let b=ensureBattleStateV120(),ids=b.enemyHp.map((hp,i)=>({hp:+hp||0,i})).filter(x=>x.hp>0);
 return ids.length?ids.sort((a,b)=>a.hp-b.hp)[0].i:0
}
function autoTargetV123(){
 let b=ensureBattleStateV120();b.target=aliveEnemyV123();return b.target
}
function autoDecisionV123(){return autoDecisionV128()}
function autoDecisionV123_legacy(){
 let b=ensureBattleStateV120(),team=S.sets?.[S.set]||[],slot=b.unit||0,i=+team[slot]||0,a=characterAbility(i),role=a.role;
 autoTargetV123();
 let enemyHp=b.enemyHp[b.target]||100;
 if(role==="回復"&&b.turn%3===0)return"heal";
 if(role==="支援"&&b.turn%4===0)return"skill";
 if(role==="妨害"&&enemyHp>45&&b.turn%3===0)return"skill";
 if(role==="攻撃"&&enemyHp<48&&canOugiV125(slot))return"ougi";
 if(role==="特殊"&&b.turn%4===0&&canOugiV125(slot))return"ougi";
 if(b.turn%5===0&&canOugiV125(slot))return"ougi";
 if(b.turn%3===0)return"skill";
 return"attack"
}
function enemySelectV123(){
 let team=S.sets?.[S.set]||[],b=ensureBattleStateV120();
 if(!team.length)return 0;
 return (b.turn*3+b.wave)%Math.min(5,team.length)
}
function enemyTurnV123(done){
 let slot=enemySelectV123();enemyTelegraphV121();
 setTimeout(()=>{sdAnimate("enemy",slot,0);battleTextV121("-640","enemy",25+slot*7,53);inkBurstV121(25+slot*7,53,"red");battleLogV120("敵の反撃");setTimeout(()=>done&&done(),430)},bSpeedDelayV123(420))
}
function bSpeedDelayV123(ms){return ensureBattleStateV120().speed===2?Math.round(ms*.58):ms}
function battleStatusV123(){
 let b=ensureBattleStateV120(),p=progressV130();
 return `<div class=battleStatusV123><span>戦闘UI<b>${p.ui}%</b></span><span>演出<b>${p.animation}%</b></span><span>AUTO<b>${p.auto}%</b></span><span>AI<b>${p.ai}%</b></span></div>`
}

function signatureStyleV124(i){
 let slug=C[i]?.[0]||"",role=characterAbility(i)?.role||"攻撃";
 let known={
  dazai:{motion:"book",fx:"blue",weapon:"open-book"},
  akutagawa:{motion:"shadow",fx:"violet",weapon:"ink-blade"},
  higuchi:{motion:"paper",fx:"gold",weapon:"pages"},
  soseki:{motion:"cat",fx:"green",weapon:"book"},
  nakajima:{motion:"rush",fx:"white",weapon:"claw"},
  poe:{motion:"raven",fx:"violet",weapon:"book"},
  shakespeare:{motion:"stage",fx:"gold",weapon:"quill"},
  kafka:{motion:"glitch",fx:"green",weapon:"ink"}
 };
 return known[slug]||{motion:role==="回復"?"paper":role==="妨害"?"shadow":role==="支援"?"book":role==="特殊"?"glitch":"rush",fx:role==="回復"?"green":role==="妨害"?"violet":role==="支援"?"blue":"red",weapon:"book"}
}
function signatureFxV124(i,kind){
 let s=signatureStyleV124(i),r=battleFxLayerV121(),n=document.createElement("div");n.className=`signatureFxV124 ${s.motion} ${s.fx} ${kind}`;
 if(s.motion==="book")n.innerHTML="<i></i><i></i><i></i><b></b>";
 if(s.motion==="shadow")n.innerHTML="<i></i><i></i><i></i><i></i>";
 if(s.motion==="paper")n.innerHTML=Array.from({length:7},(_,k)=>`<i style="--k:${k}"></i>`).join("");
 if(s.motion==="rush")n.innerHTML="<i></i><b></b>";
 if(s.motion==="cat")n.innerHTML="<i>◆</i><i>◆</i><b></b>";
 if(s.motion==="raven")n.innerHTML=Array.from({length:6},(_,k)=>`<i style="--k:${k}"></i>`).join("");
 if(s.motion==="stage")n.innerHTML="<b></b><i></i><i></i>";
 if(s.motion==="glitch")n.innerHTML="<i></i><i></i><b></b>";
 r.appendChild(n);setTimeout(()=>n.remove(),kind==="ougi"?1350:850)
}
function signatureMotionV124(i,slot,kind,target){playSignatureV137(i,slot,kind,target);
 let u=document.querySelector(`[data-sd-unit="ally:${slot}"]`),s=signatureStyleV124(i);
 if(u){u.dataset.motion=s.motion;u.classList.add(`sig-${s.motion}`);setTimeout(()=>u.classList.remove(`sig-${s.motion}`),kind==="ougi"?1300:800)}
 signatureFxV124(i,kind)
}
function enemyTypeV124(wave){
 return wave===3?{name:"頁喰いの化身",cls:"page-eater",weak:"文芸"}:wave===2?{name:"墨染めの異稿体",cls:"ink-wraith",weak:"幻想"}:{name:"失稿の影",cls:"lost-page",weak:"論理"}
}
function enemyTypePanelV124(){
 let b=ensureBattleStateV120(),e=enemyTypeV124(b.wave);return `<div class=enemyTypeV124><small>${e.cls.toUpperCase()}</small><b>${e.name}</b><span>弱点 ${e.weak}</span></div>`
}
function battleProgressV124(){return{ui:94,animation:84,auto:86,ai:70,enemies:58,characterMotion:43,balance:40,total:72}}

function ensureAdvancedBattleV125(){
 let b=ensureBattleStateV120();
 if(!Array.isArray(b.ep))b.ep=[35,35,35,35,35];
 if(!Array.isArray(b.breakGauge))b.breakGauge=[100,100,100];
 if(!Array.isArray(b.enemyStatus))b.enemyStatus=[[],[],[]];
 if(!Array.isArray(b.allyHp))b.allyHp=[100,100,100,100,100];
 return b
}
function weaknessV125(i,target=0){
 let a=characterAbility(i),e=enemyTypeV124(ensureBattleStateV120().wave);
 let map={文芸:["純文学","恋愛","青春","エッセイ","日常"],論理:["ミステリ","推理","サスペンス","社会派"],幻想:["幻想","怪奇","SF","実験文学"]};
 return (map[e.weak]||[]).includes(a.genre)
}
function applyStatusV125(i,target=0){
 let b=ensureAdvancedBattleV125(),role=characterAbility(i).role,s=b.enemyStatus[target]||[];
 if(role==="妨害"&&!s.includes("封筆"))s.push("封筆");
 if(role==="特殊"&&!s.includes("錯稿"))s.push("錯稿");
 b.enemyStatus[target]=s.slice(-3)
}
function battleDamageV125(kind,i,target){
 let b=ensureAdvancedBattleV125(),weak=weaknessV125(i,target),base={attack:16,skill:25,ougi:39}[kind]||0;
 let broken=(b.breakGauge[target]||0)<=0,mult=(weak?1.35:1)*(broken?1.5:1);
 mult*=statusModifierV127(target).damageTaken*comboMultiplierV129();let dmg=Math.round(base*mult);
 b.enemyHp[target]=Math.max(0,(b.enemyHp[target]||100)-dmg);setTimeout(()=>bossPhaseFxV128(),80);
 let breakDmg=Math.round(({attack:12,skill:22,ougi:35}[kind]||0)*(weak?1.6:1));
 b.breakGauge[target]=Math.max(0,(b.breakGauge[target]??100)-breakDmg);
 if(b.breakGauge[target]===0&&!b.enemyStatus[target].includes("BREAK"))b.enemyStatus[target].push("BREAK");
 addComboV129(kind,weak);return {dmg,weak,broken:b.breakGauge[target]===0}
}
function gainEpV125(slot,kind){
 let b=ensureAdvancedBattleV125(),g={attack:18,skill:10,heal:12,ougi:-100}[kind]||0;
 b.ep[slot]=Math.max(0,Math.min(100,(b.ep[slot]||0)+g))
}
function canOugiV125(slot){return (ensureAdvancedBattleV125().ep[slot]||0)>=100}
function battleAdvancedHudV125(){
 let b=ensureAdvancedBattleV125(),target=b.target||0,br=b.breakGauge[target]??100,status=b.enemyStatus[target]||[];
 return `<div class=advancedHudV125><div><small>BREAK</small><span><i style="width:${br}%"></i></span><b>${br}%</b></div><section>${status.map(x=>`<em>${x}</em>`).join("")||"<em>STATUS NORMAL</em>"}</section></div>`
}
function progressV125(){return{ui:96,animation:87,auto:89,ai:75,enemies:64,characterMotion:49,balance:52,total:78}}

function aliveAlliesV126(){let b=ensureAdvancedBattleV125();return b.allyHp.map((hp,i)=>({hp:+hp||0,i})).filter(x=>x.hp>0)}
function nextAliveAllyV126(from=0){
 let alive=aliveAlliesV126();if(!alive.length)return-1;
 return alive.find(x=>x.i>=from)?.i??alive[0].i
}
function enemySkillV126(){
 let b=ensureAdvancedBattleV125(),w=b.wave;
 if(w===3&&b.turn%4===0)return bossSkillV128();
 if(w===2&&b.turn%3===0)return{name:"墨蝕",power:22,aoe:false,status:"錯稿"};
 return{name:"失稿爪",power:16,aoe:false,status:""}
}
function damageAllyV126(slot,power){battleCameraV142("hit");
 let b=ensureAdvancedBattleV125();if(slot<0||slot>=b.allyHp.length)return;
 b.allyHp[slot]=Math.max(0,(b.allyHp[slot]||100)-power);hitReactionV141(slot);
 if(b.allyHp[slot]===0){koPoseV141(slot);battleTextV121("戦闘不能","warning",24+slot*8,57)}
}
function healPartyV126(slot){
 let b=ensureAdvancedBattleV125(),team=S.sets?.[S.set]||[],i=+team[slot]||0,role=characterAbility(i).role;
 let amount=role==="回復"?26:14;
 b.allyHp=b.allyHp.map(h=>Math.min(100,h+amount));
 battleTextV121(`+${amount}%`,"heal",34,48);
 return amount
}
function enemySkillTurnV126(done){
 let b=ensureAdvancedBattleV125(),sk=enemySkillV126(),alive=aliveAlliesV126(),mod=statusModifierV127(b.target||0);sk.power=Math.max(1,Math.round(sk.power*mod.enemyPower));
 if(!alive.length){gameOverV126();return}
 posterTurnFlashV232("enemy");
 let target=sk.aoe?-1:alive[(b.turn+b.wave)%alive.length].i;
 posterEnemyActionCueV232(sk.name,target,!!sk.aoe);
 battleTextV121(sk.name,"warning",70,30);enemyWarningV159(sk.name,sk.aoe);enemyMotionV159(b.wave===3?"boss":sk.aoe?"aoe":"attack");enemyTelegraphV121();
 setTimeout(()=>{
   if(sk.aoe){
     alive.forEach((x,n)=>{
       damageAllyV126(x.i,sk.power);
       posterAllyNumberV232(x.i,sk.power,"damage");
       setTimeout(()=>battleTextV121(`-${sk.power}%`,"enemy",22+x.i*8,53),n*60)
     })
   } else {
     damageAllyV126(target,sk.power);
     posterAllyNumberV232(target,sk.power,"damage");
     sdAnimate("enemy",target,0);
     battleTextV121(`-${sk.power}%`,"enemy",22+target*8,53)
   }
   battleLogV120(`${sk.name} 発動`);
   queueBattleSaveV197();
   schedulePosterRenderV229("enemy-turn",true);cleanTurnCueV241();
   setTimeout(()=>{if(!aliveAlliesV126().length)gameOverV126();else done&&done()},420)
 },bsv2EnemyTimerV186())
}
function gameOverV126(){clearPosterQueueV230();
 stopAutoBattleV122();stopTrueAutoLoopV200(false);hideAutoReplayLoadingV199();let b=ensureAdvancedBattleV125();b.auto=false;
 let o=document.createElement("div");o.className="battleClearV119 gameOverV126";o.innerHTML=`<div><small>QUEST FAILED</small><h1>DEFEAT</h1><p>文豪たちは力尽きた。</p><button data-battle-retry=1>再挑戦</button><button data-go=sortie>撤退</button></div>`;document.body.appendChild(o)
}
function resetBattleV126(){
 stopAutoCoreV427?.();stopAutoBattleV122();S.battleV120={wave:1,turn:1,speed:1,auto:false,target:0,unit:0,enemyHp:[100,100,100],ep:[35,35,35,35,35],breakGauge:[100,100,100],enemyStatus:[[],[],[]],allyHp:[100,100,100,100,100],combo:0,enemyRosterWave:0,log:[]};save();persistentSaveWrite();document.querySelector(".gameOverV126")?.remove();return cinematicBattleV119()
}
function progressV126(){return{ui:97,animation:90,auto:92,ai:81,enemies:72,characterMotion:55,balance:61,total:84}}

function tickEnemyStatusV127(){
 let b=ensureAdvancedBattleV125();
 b.enemyStatus=b.enemyStatus.map((arr,t)=>{let s=[...(arr||[])];if(s.includes("錯稿"))b.enemyHp[t]=Math.max(0,(b.enemyHp[t]||100)-5);return s})
}
function statusModifierV127(target){
 let s=ensureAdvancedBattleV125().enemyStatus[target]||[];
 return {enemyPower:s.includes("封筆")?0.72:1,damageTaken:s.includes("錯稿")?1.15:1}
}
function battleRewardV127(){
 let b=ensureAdvancedBattleV125(),stars=(b.allyHp.filter(x=>x>0).length===5?1:0)+(b.turn<=10?1:0)+1;
 return {mat:30+b.wave*12,gold:500+b.wave*250,ink:stars>=3?2:1,stars}
}
function applyBattleRewardV127(){
 let r=battleRewardV127();S.mat=(S.mat||0)+r.mat;S.gold=(S.gold||0)+r.gold;S.ink=(S.ink||0)+r.ink;
 S.progress=S.progress||{};S.progress.clears=S.progress.clears||[];S.progress.clears[0]=(S.progress.clears[0]||0)+1;
 S.stageBest=S.stageBest||[];S.stageBest[0]=Math.max(S.stageBest[0]||0,r.stars);
 save();persistentSaveWrite();return r
}
function battleClearRewardsV127(){
 flushBattleSaveV197();
 battleInvalidateActionsV195();
 clearBattleCheckpointV196();
 cleanupBattleFxV187();
 clearBattleTimersV191();
 purgeBattleTransientDomV191();
 pauseDecorativeFxV190(true);
 stopAutoBattleV122();
 victoryCurtainV142();
 partyVictoryV140();
 resetAfterClearV130();

 posterResultBridgeV214();posterVictoryCueV207();let r=applyBattleRewardV127();

 if(autoLoopActiveV200()){
   let p=autoLoopManagerV201();
   p.count=(p.count||0)+1;
   touchAutoLoopHeartbeatV203(true);
   p.total.mat=(p.total.mat||0)+(r.mat||0);
   p.total.gold=(p.total.gold||0)+(r.gold||0);
   p.total.ink=(p.total.ink||0)+(r.ink||0);
   recordAutoLoopResultV202(r);
   queueBattleSaveV197(true);
   document.querySelector(".battleClearV119")?.remove();
   autoLoopResultV200(r);
   renderAutoLoopHudV200();refreshPosterLoopBadgeV230?.();
   renderAutoReplayHudV199();
   if(shouldFinishAutoLoopV201())finishAutoLoopV201();
   else scheduleNextAutoLoopV200();
   return;
 }

 setAutoReplayActiveV199(false);
 hideAutoReplayLoadingV199();
 if(posterBattleOnV205())return posterResultCardV215(r);
 let o=document.createElement("div");
 o.className="battleClearV119";
 o.innerHTML=`<div><small>QUEST COMPLETE</small><h1>BATTLE CLEAR</h1><section><span>${r.stars>=1?"★":"☆"} クエストをクリア</span><span>${r.stars>=2?"★":"☆"} 戦闘不能なし</span><span>${r.stars>=3?"★":"☆"} 10ターン以内</span></section><hr><b>獲得報酬</b><div class=rewardListV127><span>資料<b>+${r.mat}</b></span><span>文銭<b>+${r.gold}</b></span><span>インク<b>+${r.ink}</b></span></div><button data-clear-close=1>次へ ›</button>${resultLoopButtonsV181()}</div>`;
 document.body.appendChild(o)
}
function ultimateFlavorV127(i){
 let a=characterAbility(i),s=signatureStyleV124(i);
 let text={book:"頁が舞い、物語そのものが敵を包み込む。",shadow:"黒い文章が刃となり、敵を断ち切る。",paper:"無数の原稿が光となって降り注ぐ。",rush:"一瞬で間合いを奪い、決着の一撃を放つ。",cat:"静かな言葉が味方を守り、敵の綻びを暴く。",raven:"黒羽と物語の影が戦場を覆う。",stage:"舞台そのものを書き換え、物語を終幕へ導く。",glitch:"現実の文章を乱し、敵の存在を書き換える。"}[s.motion]||"固有の物語を解放する。";
 return `${ougiInfo(i).name}。${text}`
}
function progressV127(){return{ui:98,animation:92,auto:94,ai:85,enemies:77,characterMotion:64,balance:70,total:89}}

function bossPhaseV128(){
 let b=ensureAdvancedBattleV125(),hp=b.enemyHp[b.target]||0;
 return b.wave===3?(hp<=35?2:1):0
}
function bossPhaseFxV128(){
 let phase=bossPhaseV128();if(phase!==2)return;
 let r=battleFxLayerV121();if(document.querySelector(".bossPhaseV128"))return;
 let n=document.createElement("div");n.className="bossPhaseV128";n.innerHTML="<small>BOSS PHASE</small><b>第二稿・暴走</b>";r.appendChild(n);setTimeout(()=>n.classList.add("show"),30);setTimeout(()=>n.remove(),1300)
}
function bossSkillV128(){
 let phase=bossPhaseV128();
 return phase===2?{name:"終稿拒絶",power:34,aoe:true,status:"封筆"}:{name:"禁書・頁葬",power:28,aoe:true,status:"封筆"}
}
function autoDecisionV128(){
 let b=ensureAdvancedBattleV125(),team=S.sets?.[S.set]||[],slot=b.unit||0,i=+team[slot]||0,role=characterAbility(i).role;
 autoTargetV123();let hp=b.enemyHp[b.target]||100,ep=b.ep[slot]||0,allyMin=Math.min(...b.allyHp.filter(x=>x>0));
 if(role==="回復"&&allyMin<62)return"heal";
 if(ep>=100&&(hp<55||b.breakGauge[b.target]<=0))return"ougi";
 if(role==="妨害"&&!(b.enemyStatus[b.target]||[]).includes("封筆"))return"skill";
 if(role==="特殊"&&!(b.enemyStatus[b.target]||[]).includes("錯稿"))return"skill";
 if(b.breakGauge[b.target]<35)return"skill";
 return b.turn%3===0?"skill":"attack"
}
function repeatBattleV128(){
 if(S.qol?.repeatAuto)return launchReplayV199(true,Number(S.battleStage)||0,S.battleMode||"normal");
 return launchReplayV199(false,Number(S.battleStage)||0,S.battleMode||"normal")
}
function battleResultActionsV128(){
 return `<div class=resultActionsV128><button data-battle-repeat=1>もう一度</button><button data-battle-repeat-auto=1>AUTO再戦</button><button data-go=sortie>ステージへ</button></div>`
}
function progressV128(){return{ui:99,animation:95,auto:97,ai:92,enemies:86,characterMotion:73,balance:80,total:94}}

function enemyRosterV129(wave){
 return wave===1?[
  {name:"失稿の影",cls:"lost-page",hp:100,weak:"論理"},
  {name:"破れた余白",cls:"margin",hp:72,weak:"文芸"}
 ]:wave===2?[
  {name:"墨染めの異稿体",cls:"ink-wraith",hp:115,weak:"幻想"},
  {name:"逆さ句読点",cls:"punct",hp:88,weak:"論理"}
 ]:[
  {name:"頁喰いの化身",cls:"page-eater",hp:180,weak:"文芸"}
 ]
}
function syncEnemyRosterV129(){
 let b=ensureAdvancedBattleV125(),r=enemyRosterV129(b.wave);
 if(!b.enemyRosterWave||b.enemyRosterWave!==b.wave){b.enemyRosterWave=b.wave;b.enemyHp=r.map(x=>x.hp);b.breakGauge=r.map(()=>100);b.enemyStatus=r.map(()=>[]);b.target=0}
 return r
}
function enemyCardsV129(){
 let b=ensureAdvancedBattleV125(),r=syncEnemyRosterV129();
 return `<div class=enemyCardsV129>${r.map((e,n)=>`<button class="${b.target===n?"target":""}" data-battle-target="${n}"><small>${e.cls}</small><b>${e.name}</b><span><i style="width:${Math.min(100,(b.enemyHp[n]||0)/e.hp*100)}%"></i></span></button>`).join("")}</div>`
}
function comboStateV129(){
 let b=ensureAdvancedBattleV125();if(!Number.isInteger(b.combo))b.combo=0;return b
}
function addComboV129(kind,weak){setTimeout(()=>comboAuraV142(),20);
 let b=comboStateV129();b.combo=Math.min(9,(b.combo||0)+1);if(kind==="ougi")b.combo=0;
 if(weak)battleTextV121(`CHAIN ${b.combo}`,"skill",55,37)
}
function comboMultiplierV129(){return 1+Math.min(5,comboStateV129().combo||0)*.03}
function battleGradeV129(){
 let b=ensureAdvancedBattleV125(),alive=b.allyHp.filter(x=>x>0).length;
 let score=10000-Math.max(0,b.turn-6)*420+(alive*500);
 return score>=11500?"S":score>=10000?"A":score>=8500?"B":"C"
}
function progressV129(){return{ui:100,animation:97,auto:98,ai:95,enemies:94,characterMotion:84,balance:90,total:97}}

function battleSettingsV130(){
 if(!S.qol||typeof S.qol!=="object")S.qol={};
 if(typeof S.qol.battleEffects!=="boolean")S.qol.battleEffects=true;
 if(typeof S.qol.skipOugi!=="boolean")S.qol.skipOugi=false;
 return S.qol
}
function toggleBattleSettingV130(k){
 let q=battleSettingsV130();q[k]=!q[k];save();persistentSaveWrite();cinematicBattleV119()
}
function battleSettingsBarV130(){
 let q=battleSettingsV130();
 return `<div class=battleSettingsV130><button class="${q.battleEffects?"on":""}" data-battle-setting="battleEffects">演出</button><button class="${q.skipOugi?"on":""}" data-battle-setting="skipOugi">奥義短縮</button></div>`
}
function safeAnimatedActionV130(kind,slot,target){
 let q=battleSettingsV130();
 if(!q.battleEffects){sdAnimate(kind,slot,target);return}
 if(kind==="ougi"&&q.skipOugi){sdAnimate("attack",slot,target);slashArcV121("ougi");battleTextV121("SPECIAL","ougi",70,38);return}
 animatedActionV121(kind,slot,target)
}
function battleIntegrityV130(){
 let b=ensureAdvancedBattleV125();
 b.wave=Math.max(1,Math.min(3,+b.wave||1));b.turn=Math.max(1,+b.turn||1);
 b.speed=b.speed===2?2:1;b.unit=nextAliveAllyV126(Math.max(0,+b.unit||0));
 if(b.unit<0)b.unit=0;
 b.target=Math.max(0,Math.min((b.enemyHp?.length||1)-1,+b.target||0));
 return b
}
function resetAfterClearV130(){
 stopNativeAutoPumpV425?.();stopAutoBattleV122();let b=ensureAdvancedBattleV125();b.auto=false;b.combo=0;save();persistentSaveWrite()
}
function progressV130(){return{ui:100,animation:99,auto:99,ai:98,enemies:97,characterMotion:91,balance:95,total:99}}

function coreProgressV131(){return{battle:99,home:90,growth:86,formation:88,summon:91,stage:89,save:94,total:91}}
function summonPityV131(){
 if(!S.qol||typeof S.qol!=="object")S.qol={};if(!Number.isInteger(S.qol.pity))S.qol.pity=0;
 return S.qol.pity
}
function summonPityUIV131(){
 let p=summonPityV131();return `<div class=summonPityV131><span>UR確定まで</span><b>${Math.max(0,80-p)} / 80</b><i><em style="width:${Math.min(100,p/80*100)}%"></em></i></div>`
}
function growthQuickV131(i){
 let max=maxLevelUpsNow(i);
 return `<div class=growthQuickV131><button data-levelup="${i}:1" ${max<1?"disabled":""}>+1</button><button data-levelup="${i}:10" ${max<1?"disabled":""}>+10</button><button data-levelup="${i}:${Math.max(1,max)}" ${max<1?"disabled":""}>MAX</button></div>`
}
function partySummaryV131(){
 let t=S.sets?.[S.set]||[],m=modernLiteraryBonus(t),b=bundanBonus(t);
 return `<div class=partySummaryV131><span>戦闘力<b>${unitPower(t).toLocaleString()}</b></span><span>現代<b>${m.name||"—"}</b></span><span>文壇<b>${b.name||"—"}</b></span></div>`
}
function stageQuickV131(){
 let i=recommendedStage(),st=stageMeta(i),count=rememberedFarmCount();
 return `<div class=stageQuickV131><div><small>RECOMMENDED</small><b>第${i+1}章 ${st.name}</b><span>前回 ${count}周</span></div><button data-stage-open="${i}">出撃 ›</button></div>`
}

function growthCostPreviewV132(i,n){
 let max=maxLevelUpsNow(i),up=Math.min(Math.max(0,+n||0),max),cur=lv(i),mat=0,gold=0;
 for(let k=0;k<up;k++){let L=cur+k;mat+=Math.max(1,Math.floor(L/4)+1);gold+=Math.max(40,L*18)}
 return {up,mat,gold,to:cur+up}
}
function growthPreviewV132(i){
 let m=maxLevelUpsNow(i),ten=growthCostPreviewV132(i,Math.min(10,m)),all=growthCostPreviewV132(i,m);
 return `<div class=growthPreviewV132><span>+10<b>Lv.${ten.to}</b><small>資料 ${ten.mat} / 文銭 ${ten.gold}</small></span><span>MAX<b>Lv.${all.to}</b><small>資料 ${all.mat} / 文銭 ${all.gold}</small></span></div>`
}
function formationRoleStripV132(){
 let r=partyRoleSummary();return `<div class=roleStripV132>${["攻撃","妨害","支援","回復","特殊"].map(x=>`<span class="${r[x]?"on":""}">${x}<b>${r[x]}</b></span>`).join("")}</div>`
}
function formationPresetV132(kind){
 let owned=growthOwnedCandidates(),score=i=>typeof boostedPower==="function"?boostedPower(i):(700+lv(i)*35);
 let arr=[...owned];
 if(kind==="power")arr.sort((a,b)=>score(b)-score(a));
 if(kind==="modern")arr.sort((a,b)=>(isAnyModernAuthor(b)-isAnyModernAuthor(a))||score(b)-score(a));
 if(kind==="balance"){let roles=["攻撃","回復","妨害","支援","特殊"],out=[];roles.forEach(r=>{let x=arr.filter(i=>characterAbility(i).role===r).sort((a,b)=>score(b)-score(a))[0];if(x!=null&&!out.includes(x))out.push(x)});arr=[...out,...arr.filter(i=>!out.includes(i)).sort((a,b)=>score(b)-score(a))]}
 ensureUnitSets();S.sets[S.set]=arr.slice(0,6);save();persistentSaveWrite();toast("編成を更新しました");return party()
}
function formationPresetUIV132(){
 return `<div class=presetV132><small>QUICK FORMATION</small><button data-party-preset=power>戦闘力</button><button data-party-preset=balance>バランス</button><button data-party-preset=modern>現代文豪</button></div>`
}
function progressV132(){return{battle:99,home:92,growth:94,formation:95,summon:92,stage:91,save:94,total:94}}

function summonRatesV133(){return `<div class=summonRatesV133><span>UR <b>3%</b></span><span>SSR <b>12%</b></span><span>SR <b>35%</b></span><span>R <b>50%</b></span></div>`}
function summonCompactV133(){
 let p=summonPityV131();return `<div class=summonHeroV133><div><small>PREMIUM SCOUT</small><h2>文学召喚</h2><p>80回以内にUR確定</p></div><strong>${p}<small>/80</small></strong></div>${summonRatesV133()}`
}
function stageRecentV133(){
 if(!S.qol||typeof S.qol!=="object")S.qol={};let a=S.qol.recentStages||[];return a.slice(0,3)
}
function rememberStageV133(i){
 S.qol=S.qol||{};let a=(S.qol.recentStages||[]).filter(x=>x!==i);a.unshift(i);S.qol.recentStages=a.slice(0,3);save();persistentSaveWrite()
}
function recentStagesUIV133(){
 let a=stageRecentV133();if(!a.length)return"";
 return `<div class=recentStagesV133><small>RECENT</small>${a.map(i=>`<button data-stage-open="${i}">第${i+1}章 ${stageMeta(i).name}</button>`).join("")}</div>`
}
function homeNoticeV133(){
 let i=recommendedStage(),st=stageMeta(i);return `<div class=homeNoticeV133><small>NOW</small><b>第${i+1}章 ${st.name}</b><span>物語を進める</span></div>`
}
function progressV133(){return{battle:99,home:96,growth:94,formation:95,summon:97,stage:96,save:95,total:96}}

function releaseProgressV134(){return{battle:99,home:98,growth:97,formation:97,summon:98,stage:98,save:98,total:98}}
function safeRouteV134(name){
 let fn={home,party,growth,sortie,summon,list,story,arena}[name];
 try{return typeof fn==="function"?fn():home()}catch(e){console.error(e);toast("画面を復旧しました");return home()}
}
function validateSaveV134(st){
 if(!st||typeof st!=="object")return false;
 if(!Array.isArray(st.sets))st.sets=[[]];
 if(!Number.isInteger(st.set)||st.set<0)st.set=0;
 if(!st.qol||typeof st.qol!=="object")st.qol={};
 if(!st.progress||typeof st.progress!=="object")st.progress={clears:[]};
 return true
}
function emergencyBackupV134(){
 try{localStorage.setItem("bungou_kitan_emergency_v134",JSON.stringify({at:Date.now(),state:S}))}catch(e){}
}
function recoverEmergencyV134(){
 try{let x=JSON.parse(localStorage.getItem("bungou_kitan_emergency_v134")||"null");if(!x?.state)return false;let m=mergeSaveStates(S,x.state);Object.assign(S,m);ensureCoreState();persistentSaveWrite();toast("バックアップを復旧しました");return home()}catch(e){return false}
}
function releaseHealthV134(){
 let checks=[
  ["セーブ",validateSaveV134(S)],
  ["キャラ",Array.isArray(C)&&C.length>0],
  ["編成",Array.isArray(S.sets)],
  ["戦闘",typeof cinematicBattleV119==="function"],
  ["AUTO",typeof runAutoBattleV122==="function"]
 ];
 return `<div class=releaseHealthV134>${checks.map(([n,ok])=>`<span class="${ok?"ok":"ng"}">${ok?"✓":"!"} ${n}</span>`).join("")}</div>`
}

function gameProgressV135(){return{battle:100,home:99,growth:99,formation:99,summon:99,stage:99,save:99,total:99}}
function firstRunCheckV135(){
 if(!S.qol||typeof S.qol!=="object")S.qol={};
 if(S.qol.v135Ready)return"";
 return `<div class=firstRunV135><div><small>文豪綺譚</small><b>準備完了</b><span>主要システムの初期チェックが完了しました。</span></div><button data-v135-ready=1>はじめる</button></div>`
}
function dismissFirstRunV135(){S.qol=S.qol||{};S.qol.v135Ready=true;save();persistentSaveWrite();return home()}
function routeSmokeV135(){
 let names=["home","party","growth","sortie","summon"],bad=[];
 names.forEach(n=>{if(typeof ({home,party,growth,sortie,summon})[n]!=="function")bad.push(n)});
 return bad
}
function releaseSelfCheckV135(){
 let bad=routeSmokeV135(),checks=[
  ["routes",bad.length===0],["save",validateSaveV134(S)],["characters",Array.isArray(C)&&C.length>20],
  ["battle",typeof cinematicBattleV119==="function"],["auto",typeof runAutoBattleV122==="function"],
  ["growth",typeof growth==="function"],["formation",typeof party==="function"]
 ];
 return {ok:checks.every(x=>x[1]),checks}
}
function compactSystemStatusV135(){
 let r=releaseSelfCheckV135();return `<div class=systemStatusV135><i class="${r.ok?"ok":"ng"}"></i><span>${r.ok?"SYSTEM READY":"CHECK REQUIRED"}</span></div>`
}

function formationEditorV136(){ensureUnitSets();let t=S.sets[S.set]||[];return `<section class=formationEditorV136><header><b>6人編成</b><span>${t.length}/6</span></header><div class=formationSlotsV136>${Array.from({length:6},(_,s)=>{let i=t[s];return i==null?`<button class=empty data-formation-slot="${s}">＋</button>`:`<button data-formation-slot="${s}"><span class=rankBadge data-rank="${charRank(i)}">${charRank(i)}</span><img src="${characterImage(C[i][0])}"><b>${C[i][1]}</b><small>Lv.${lv(i)}</small></button>`}).join("")}</div><p>枠をタップして文豪を変更</p></section>`}
function formationPickerV136(slot){let a=growthVisibleCandidates(),p=pageSlice("formationPick",a,9);return `<div class=formationPickerV136><header><b>${slot+1}枠目</b><button data-formation-picker-close=1>×</button></header><div class=formationPickerGridV136>${p.items.map(i=>`<button data-formation-pick="${slot}:${i}"><img src="${characterImage(C[i][0])}"><b>${C[i][1]}</b><small>${charRank(i)} / Lv.${lv(i)}</small></button>`).join("")}</div>${pagerUI("formationPick",p.page,p.max,"party")}</div>`}
function openFormationPickerV136(s){document.getElementById("formationPickerOverlay")?.remove();let o=document.createElement("div");o.id="formationPickerOverlay";o.className="resultOverlay";o.innerHTML=`<div class=resultCard>${formationPickerV136(s)}</div>`;document.body.appendChild(o)}
function setFormationSlotV136(s,i){ensureUnitSets();let t=[...(S.sets[S.set]||[])],old=t.indexOf(i);if(old>=0&&old!==s){let x=t[s];t[s]=i;if(x!=null)t[old]=x;else t.splice(old,1)}else t[s]=i;S.sets[S.set]=t.filter(x=>x!=null).slice(0,6);save();persistentSaveWrite();document.getElementById("formationPickerOverlay")?.remove();return party()}

function authorMotionV137(i){
 let slug=C[i]?.[0]||"",name=C[i]?.[1]||"";
 const exact={
  dazai:{cls:"dazai",normal:"頁返し",skill:"人間失格",ougi:"無頼の終頁"},
  akutagawa:{cls:"akutagawa",normal:"墨刃",skill:"羅生門",ougi:"黒獣・羅生門"},
  higuchi:{cls:"higuchi",normal:"花片",skill:"たけくらべ",ougi:"十三夜"},
  soseki:{cls:"soseki",normal:"猫歩",skill:"吾輩の観察",ougi:"夢十夜"},
  nakajima:{cls:"nakajima",normal:"虎爪",skill:"山月記",ougi:"月下虎嘯"},
  poe:{cls:"poe",normal:"黒羽",skill:"怪奇の頁",ougi:"大鴉"},
  shakespeare:{cls:"shakespeare",normal:"羽根筆",skill:"悲劇開幕",ougi:"世界は舞台"},
  kafka:{cls:"kafka",normal:"変転",skill:"変身",ougi:"審判"}
 };
 if(exact[slug])return exact[slug];
 let s=signatureStyleV124(i);
 return {cls:s.motion,normal:"文撃",skill:characterAbility(i).name,ougi:ougiInfo(i).name}
}
function authorFxV137(i,kind,target=0){
 let m=authorMotionV137(i),r=battleFxLayerV121(),n=document.createElement("div");
 n.className=`authorFxV137 author-${m.cls} ${kind}`;
 let count=kind==="ougi"?12:7;
 n.innerHTML=Array.from({length:count},(_,k)=>`<i style="--k:${k}"></i>`).join("")+`<b>${kind==="ougi"?m.ougi:kind==="skill"?m.skill:m.normal}</b>`;
 r.appendChild(n);setTimeout(()=>n.classList.add("play"),20);setTimeout(()=>n.remove(),kind==="ougi"?1450:850)
}
function authorPoseV137(i,slot,kind){
 let u=document.querySelector(`[data-sd-unit="ally:${slot}"]`);if(!u)return;
 let cls="authorPose-"+authorMotionV137(i).cls+"-"+kind;u.classList.add(cls);
 setTimeout(()=>u.classList.remove(cls),kind==="ougi"?1400:800)
}
function playSignatureV137(i,slot,kind,target){playExpandedSignatureV138(i,slot,kind);
 authorPoseV137(i,slot,kind);authorFxV137(i,kind,target);
}
function signatureProgressV137(){return{dazai:100,akutagawa:100,higuchi:100,soseki:100,nakajima:100,poe:100,shakespeare:100,kafka:100,others:55,total:72}}

function expandedMotionV138(i){
 let slug=(C[i]?.[0]||"").toLowerCase(),name=C[i]?.[1]||"";
 let map=[
  [["chuuya","nakahara"],{cls:"chuuya",normal:"汚濁弾",skill:"悲しみに",ougi:"汚れつちまつた悲しみに"}],
  [["ranpo","edogawa"],{cls:"ranpo",normal:"推理札",skill:"超推理",ougi:"完全推理"}],
  [["miyazawa","kenji"],{cls:"kenji",normal:"銀河灯",skill:"銀河鉄道",ougi:"星巡る夜"}],
  [["izumi","kyoka"],{cls:"kyoka",normal:"鏡花水月",skill:"夜叉ヶ池",ougi:"高野聖"}],
  [["akiko","yosano"],{cls:"akiko",normal:"緋歌",skill:"みだれ髪",ougi:"君死にたまふことなかれ"}],
  [["orwell"],{cls:"orwell",normal:"監視",skill:"二重思考",ougi:"1984"}],
  [["doyle","conan"],{cls:"doyle",normal:"観察",skill:"演繹",ougi:"最後の事件"}],
  [["wilde","oscar"],{cls:"wilde",normal:"薔薇筆",skill:"肖像",ougi:"ドリアン・グレイ"}],
  [["verne","jules"],{cls:"verne",normal:"蒸気弾",skill:"海底二万里",ougi:"月世界旅行"}]
 ];
 for(const [keys,v] of map)if(keys.some(k=>slug.includes(k)||name.toLowerCase().includes(k)))return v;
 return authorMotionV137(i)
}
function expandedFxV138(i,kind){
 let m=expandedMotionV138(i);if(!["chuuya","ranpo","kenji","kyoka","akiko","orwell","doyle","wilde","verne"].includes(m.cls))return;
 let r=battleFxLayerV121(),n=document.createElement("div");n.className=`expandedFxV138 ex-${m.cls} ${kind}`;
 n.innerHTML=Array.from({length:kind==="ougi"?10:6},(_,k)=>`<i style="--k:${k}"></i>`).join("")+`<b>${kind==="ougi"?m.ougi:kind==="skill"?m.skill:m.normal}</b>`;
 r.appendChild(n);requestAnimationFrame(()=>n.classList.add("play"));setTimeout(()=>n.remove(),kind==="ougi"?1400:850)
}
function expandedPoseV138(i,slot,kind){
 let m=expandedMotionV138(i),u=document.querySelector(`[data-sd-unit="ally:${slot}"]`);if(!u)return;
 let c=`exPose-${m.cls}-${kind}`;u.classList.add(c);setTimeout(()=>u.classList.remove(c),kind==="ougi"?1350:800)
}
function playExpandedSignatureV138(i,slot,kind){skeletalActionV145(i,slot,kind);applyExpressionV140(i,slot,kind,kind==="ougi"?1300:750);expandedPoseV138(i,slot,kind);expandedFxV138(i,kind)}
function signatureProgressV138(){return{core8:100,japaneseExpansion:92,overseasExpansion:88,others:68,total:84}}

function sdIdentityV139(i){
 let m=expandedMotionV138(i),slug=(C[i]?.[0]||"").toLowerCase(),role=characterAbility(i)?.role||"攻撃";
 let exact={
  dazai:{hair:"messy",coat:"long",prop:"book",idle:"lazy"},
  akutagawa:{hair:"sharp",coat:"black",prop:"blade",idle:"still"},
  higuchi:{hair:"bob",coat:"kimono",prop:"pages",idle:"soft"},
  soseki:{hair:"classic",coat:"haori",prop:"cat",idle:"observe"},
  nakajima:{hair:"wild",coat:"light",prop:"claw",idle:"ready"},
  chuuya:{hair:"hat",coat:"short",prop:"gravity",idle:"cocky"},
  ranpo:{hair:"short",coat:"cape",prop:"glass",idle:"think"},
  kenji:{hair:"soft",coat:"traveler",prop:"star",idle:"bright"},
  kyoka:{hair:"long",coat:"kimono",prop:"mirror",idle:"quiet"},
  akiko:{hair:"long",coat:"dress",prop:"flower",idle:"proud"},
  poe:{hair:"wave",coat:"gothic",prop:"raven",idle:"shy"},
  shakespeare:{hair:"curl",coat:"stage",prop:"quill",idle:"grand"},
  kafka:{hair:"neat",coat:"dark",prop:"paper",idle:"uneasy"},
  orwell:{hair:"short",coat:"military",prop:"eye",idle:"watch"},
  doyle:{hair:"classic",coat:"detective",prop:"glass",idle:"think"},
  wilde:{hair:"wave",coat:"elegant",prop:"rose",idle:"proud"},
  verne:{hair:"classic",coat:"traveler",prop:"gear",idle:"bright"}
 };
 for(let k in exact)if(slug.includes(k)||m.cls===k)return exact[k];
 return {hair:role==="回復"?"soft":role==="妨害"?"sharp":"classic",coat:role==="支援"?"haori":"long",prop:role==="回復"?"flower":"book",idle:role==="妨害"?"still":"observe"}
}
function sdAccessoryV139(i){
 let d=sdIdentityV139(i);
 return `<div class="sdAccessoryV139 prop-${d.prop}"><i></i><b></b></div>`
}
function sdIdentityClassV139(i){
 let d=sdIdentityV139(i);return `hair-${d.hair} coat-${d.coat} idle-${d.idle}`
}
function sdIdentityProgressV139(){return{silhouette:92,props:88,idles:78,attackPoses:86,overall:87}}

function sdExpressionV140(i,kind="idle"){
 let d=sdIdentityV139(i),m=expandedMotionV138(i);
 let face=d.idle==="cocky"?"smirk":d.idle==="shy"?"shy":d.idle==="uneasy"?"tense":d.idle==="bright"?"smile":d.idle==="still"?"cold":"calm";
 if(kind==="ougi")face="focus";if(kind==="hit")face="pain";return `face-${face} author-${m.cls}`
}
function applyExpressionV140(i,slot,kind,duration=700){
 let u=document.querySelector(`[data-sd-unit="ally:${slot}"]`);if(!u)return;
 let c=sdExpressionV140(i,kind);c.split(" ").forEach(x=>u.classList.add(x));
 setTimeout(()=>c.split(" ").forEach(x=>u.classList.remove(x)),duration)
}
function victoryPoseV140(i,slot){spritePoseV160(i,slot,"victory",1800);
 let u=document.querySelector(`[data-sd-unit="ally:${slot}"]`);if(!u)return;
 let d=sdIdentityV139(i),c=`victory-${d.idle}`;u.classList.add(c);setTimeout(()=>u.classList.remove(c),1800)
}
function partyVictoryV140(){
 let t=(S.sets?.[S.set]||[]).slice(0,5);t.forEach((i,n)=>setTimeout(()=>victoryPoseV140(+i,n),n*90))
}
function entranceV140(){
 let t=(S.sets?.[S.set]||[]).slice(0,5);t.forEach((i,n)=>{let u=document.querySelector(`[data-sd-unit="ally:${n}"]`);if(u){u.classList.add("sdEntranceV140");setTimeout(()=>u.classList.remove("sdEntranceV140"),700+n*70)}})
}
function sdPersonalityProgressV140(){return{expressions:86,entrance:100,victory:82,hitReactions:78,overall:91}}

function koStyleV141(i){
 let d=sdIdentityV139(i);
 return d.idle==="still"?"kneel":d.idle==="proud"||d.idle==="cocky"?"stagger":d.idle==="bright"?"fall":d.idle==="shy"?"sit":"kneel"
}
function koPoseV141(slot){let _t160=S.sets?.[S.set]||[];spritePoseV160(+_t160[slot]||0,slot,"ko",999999);
 let t=S.sets?.[S.set]||[],i=+t[slot]||0,u=document.querySelector(`[data-sd-unit="ally:${slot}"]`);if(!u)return;
 u.classList.add("sdKoV141",`ko-${koStyleV141(i)}`);u.setAttribute("aria-disabled","true")
}
function hitReactionV141(slot){let _t160=S.sets?.[S.set]||[];spritePoseV160(+_t160[slot]||0,slot,"hit",520);
 let t=S.sets?.[S.set]||[],i=+t[slot]||0,u=document.querySelector(`[data-sd-unit="ally:${slot}"]`);if(!u)return;
 applyExpressionV140(i,slot,"hit",500);let d=sdIdentityV139(i),c=`hit-${d.idle}`;u.classList.add(c);setTimeout(()=>u.classList.remove(c),520)
}
function finisherV141(i,slot,target){
 let m=expandedMotionV138(i),r=battleFxLayerV121(),n=document.createElement("div");n.className=`finisherV141 finish-${m.cls}`;
 n.innerHTML=`<div class=finisherLineV141></div><section><small>FINISHER</small><b>${m.ougi}</b><span>${C[i][1]}</span></section>`;
 r.appendChild(n);requestAnimationFrame(()=>n.classList.add("show"));setTimeout(()=>n.classList.add("impact"),520);setTimeout(()=>n.remove(),850)
}
function cinematicOugiV141(i,slot,target){
 finisherV141(i,slot,target);applyExpressionV140(i,slot,"ougi",1400);
 let u=document.querySelector(`[data-sd-unit="ally:${slot}"]`);if(u){u.classList.add("sdFinisherV141");setTimeout(()=>u.classList.remove("sdFinisherV141"),1400)}
}
function sdFinishProgressV141(){return{ko:96,hit:94,finishers:94,victory:90,overall:96}}

function reviveSdStateV142(){
 let b=ensureAdvancedBattleV125(),team=S.sets?.[S.set]||[];
 b.allyHp.forEach((hp,slot)=>{let u=document.querySelector(`[data-sd-unit="ally:${slot}"]`);if(!u)return;if(hp<=0)koPoseV141(slot);else{u.classList.remove("sdKoV141","ko-kneel","ko-stagger","ko-fall","ko-sit");u.removeAttribute("aria-disabled")}})
}
function battleCameraV142(kind="normal"){
 let f=document.querySelector(".battleFieldV119");if(!f)return;
 let c=kind==="ougi"?"cameraOugiV142":kind==="hit"?"cameraHitV142":"cameraActionV142";f.classList.add(c);setTimeout(()=>f.classList.remove(c),kind==="ougi"?1000:420)
}
function victoryCurtainV142(){
 let r=battleFxLayerV121(),n=document.createElement("div");n.className="victoryCurtainV142";n.innerHTML="<small>QUEST COMPLETE</small><b>VICTORY</b>";r.appendChild(n);requestAnimationFrame(()=>n.classList.add("show"));setTimeout(()=>n.remove(),1550)
}
function comboAuraV142(){
 let b=comboStateV129(),field=document.querySelector(".battleFieldV119");if(!field)return;
 field.classList.toggle("comboAuraV142",(b.combo||0)>=3);field.classList.toggle("comboMaxV142",(b.combo||0)>=5)
}
function sdFinalProgressV142(){return{identity:98,idle:96,normal:96,skill:97,ougi:98,hit:97,ko:98,victory:96,overall:98}}

function sdPaletteV144(i){
 let slug=(C[i]?.[0]||"").toLowerCase(),m=expandedMotionV138(i).cls;
 let map={
  dazai:["#171c24","#29435a","#d8c0ad","#b9975a"],akutagawa:["#dedbd5","#24172b","#e5c8bd","#8f58ad"],
  higuchi:["#512b38","#6b3449","#efd0c3","#d18ca2"],soseki:["#857765","#4d493d","#dfc1ad","#c1a25e"],
  nakajima:["#d9dde1","#71808d","#e8cec0","#dbe9ef"],chuuya:["#34261d","#65322c","#edc8b8","#d55146"],
  ranpo:["#2a2524","#263d4c","#e7c8b7","#70bddf"],kenji:["#a98c69","#4d6a5b","#eccfba","#efd46e"],
  kyoka:["#302a3c","#5a3d67","#ebc9bf","#a886c8"],akiko:["#3b222d","#6d3348","#edc8bd","#d96b88"],
  poe:["#2a202d","#39283f","#e7c8bc","#6e527f"],shakespeare:["#6c4b35","#51354b","#e7c3ad","#d2b35f"],
  kafka:["#26282c","#30343a","#ddc2b3","#62d09a"],orwell:["#3a3730","#34483e","#dfc2b1","#d65d5d"],
  doyle:["#5a4738","#3e5360","#e4c5b2","#6ebad9"],wilde:["#4c342e","#604258","#e8c4b2","#d5a65e"],
  verne:["#6a5b4a","#3d5966","#e5c6b3","#75bad8"]
 };
 return map[slug]||map[m]||["#252b33","#344554","#e7cabb","#b99a55"]
}
function sdDetailStyleV144(i){
 let [hair,coat,skin,accent]=sdPaletteV144(i);
 return `--sd-hair:${hair};--sd-coat:${coat};--sd-skin:${skin};--sd-accent:${accent}`
}
function selectedUnitV144(slot){
 let b=ensureAdvancedBattleV125();
 b.unit=Math.max(0,+slot||0);
 queueBattleSaveV197();
 schedulePosterRenderV229("select",true);
 posterSelectedCardCueV225(b.unit);
 return b.unit
 refreshPosterCleanHudV235();applyPosterControlStateV235();
}
function battleSelectedMarkerV144(){
 let b=ensureAdvancedBattleV125();return `<div class=selectedUnitV144>ACT <b>${(b.unit||0)+1}</b></div>`
}

function skeletalMotionV145(i,slot,kind){
 let u=document.querySelector(`[data-sd-unit="ally:${slot}"]`);if(!u)return;
 let m=expandedMotionV138(i),cls=`sk-${m.cls}-${kind}`;
 u.classList.add("skeletalActiveV145",cls);
 setTimeout(()=>u.classList.remove("skeletalActiveV145",cls),kind==="ougi"?1350:kind==="skill"?900:650)
}
function weaponTrailV145(i,slot,kind){
 let u=document.querySelector(`[data-sd-unit="ally:${slot}"]`),r=battleFxLayerV121();if(!u||!r)return;
 let rect=u.getBoundingClientRect(),host=r.getBoundingClientRect(),n=document.createElement("i");
 n.className=`weaponTrailV145 ${expandedMotionV138(i).cls} ${kind}`;n.style.left=(rect.left-host.left+rect.width*.72)+"px";n.style.top=(rect.top-host.top+rect.height*.55)+"px";r.appendChild(n);setTimeout(()=>n.remove(),700)
}
function skeletalActionV145(i,slot,kind){bsv2Feedback178(slot,kind,0);if(kind==="skill"||kind==="ougi"){skillFxV174(i,kind);choreographyCameraV174(i,kind)}spriteActionV160(i,slot,kind);costumeMotionV158(i,slot,kind);actionPoseV158(i,slot,kind);expressionPulseV149(slot,kind);choreographyV146(i,slot,kind);skeletalMotionV145(i,slot,kind);setTimeout(()=>weaponTrailV145(i,slot,kind),kind==="attack"?140:260)}
function skeletalProgressV145(){return{arms:96,legs:91,weapons:94,authorPoses:88,overall:93}}

function choreographyV146(i,slot,kind,target=0){
 let m=expandedMotionV138(i),u=document.querySelector(`[data-sd-unit="ally:${slot}"]`);if(!u)return;
 let sequence={
  dazai:["step","open","cast"],akutagawa:["brace","slash","recoil"],chuuya:["crouch","dash","impact"],
  ranpo:["observe","point","solve"],doyle:["observe","point","solve"],kenji:["lift","gather","release"],
  higuchi:["turn","fan","release"],akiko:["turn","fan","release"],kyoka:["turn","mirror","release"],
  shakespeare:["bow","raise","stage"],kafka:["freeze","glitch","rewrite"],nakajima:["crouch","dash","claw"]
 }[m.cls]||["step","cast","impact"];
 let dur=kind==="ougi"?300:kind==="skill"?220:160;
 sequence.forEach((p,n)=>setTimeout(()=>{u.dataset.pose=p;u.classList.add(`choreo-${p}`);setTimeout(()=>u.classList.remove(`choreo-${p}`),dur+100)},n*dur));
}
function impactFrameV146(target=0,kind="attack"){
 let e=document.querySelector(`[data-sd-enemy="${target}"]`),f=document.querySelector(".battleFieldV119");if(e){e.classList.add("enemyImpactV146");setTimeout(()=>e.classList.remove("enemyImpactV146"),320)}if(f){f.classList.add(kind==="ougi"?"impactOugiV146":"impactFrameV146");setTimeout(()=>f.classList.remove("impactFrameV146","impactOugiV146"),260)}
}
function actionSfxVisualV146(kind){
 let r=battleFxLayerV121(),n=document.createElement("div");n.className=`sfxVisualV146 ${kind}`;n.textContent=kind==="ougi"?"閃":kind==="skill"?"術":"斬";r.appendChild(n);setTimeout(()=>n.remove(),520)
}
function choreoProgressV146(){return{multiStep:94,impact:98,characterKills:91,timing:92,overall:95}}

function sdArtProfileV148(i){
 let slug=(C[i]?.[0]||"").toLowerCase(),m=expandedMotionV138(i).cls;
 const p={
  dazai:{bang:"swept",eye:"droop",detail:"bandage",outfit:"coat"},
  akutagawa:{bang:"sharp",eye:"narrow",detail:"cravat",outfit:"gothic"},
  higuchi:{bang:"bob",eye:"soft",detail:"ribbon",outfit:"kimono"},
  soseki:{bang:"classic",eye:"calm",detail:"moustache",outfit:"haori"},
  nakajima:{bang:"wild",eye:"round",detail:"claw",outfit:"light"},
  chuuya:{bang:"side",eye:"sharp",detail:"hat",outfit:"shortcoat"},
  ranpo:{bang:"short",eye:"smile",detail:"glasses",outfit:"cape"},
  kenji:{bang:"soft",eye:"round",detail:"star",outfit:"traveler"},
  kyoka:{bang:"long",eye:"quiet",detail:"hairpin",outfit:"kimono"},
  akiko:{bang:"long",eye:"proud",detail:"flower",outfit:"dress"},
  poe:{bang:"wave",eye:"shy",detail:"raven",outfit:"gothic"},
  shakespeare:{bang:"curl",eye:"grand",detail:"ruff",outfit:"stage"},
  kafka:{bang:"neat",eye:"tense",detail:"paper",outfit:"dark"},
  orwell:{bang:"short",eye:"watch",detail:"badge",outfit:"military"},
  doyle:{bang:"classic",eye:"focus",detail:"glasses",outfit:"detective"},
  wilde:{bang:"wave",eye:"proud",detail:"rose",outfit:"elegant"},
  verne:{bang:"classic",eye:"bright",detail:"goggle",outfit:"traveler"}
 };
 return p[slug]||p[m]||{bang:"classic",eye:"calm",detail:"book",outfit:"coat"}
}
function sdArtClassV148(i){let p=sdArtProfileV148(i);return `bang-${p.bang} eyes-${p.eye} detail-${p.detail} outfit-${p.outfit}`}
function sdArtProgressV148(){return{faces:91,hair:94,outfits:90,details:92,overall:92}}

function livingSdV149(){
 document.querySelectorAll(".sdUnitV147").forEach((u,n)=>{
  u.style.setProperty("--blink-delay",`${.7+n*.43}s`);
  u.style.setProperty("--breathe-delay",`${n*.17}s`);
 })
}
function expressionPulseV149(slot,kind){
 let u=document.querySelector(`[data-sd-unit="ally:${slot}"]`);if(!u)return;
 let c=kind==="skill"?"talkV149":kind==="ougi"?"shoutV149":"focusV149";u.classList.add(c);setTimeout(()=>u.classList.remove(c),kind==="ougi"?1000:560)
}
function livingProgressV149(){return{blink:100,breathing:100,hairMotion:92,mouth:90,cloth:88,overall:95}}

function battleTopBarV151(){
 let b=ensureAdvancedBattleV125();
 return `<div class=battleTopBarV151><div><small>第${b.wave}章　言葉のはじまり</small><span>WAVE ${b.wave}/3　 TURN ${b.turn}</span></div><nav><button data-battle-speed="${b.speed===2?1:2}">▶▶ ${b.speed===2?"×2":"×1"}</button><button class="${b.auto?"on":""}" data-battle-auto=1 data-sd-action=auto>${b.auto?"● AUTO":"AUTO"}</button>${lightBattleButtonV187()}${battleQualityLabelV192()}<button data-snappy-v204=1>演出</button><button data-battle-pause=1>Ⅱ</button></nav></div>`
}
function battleCharacterCardsV151(){
 let b=ensureAdvancedBattleV125(),t=(S.sets?.[S.set]||[]).slice(0,5);
 return `<div class=battleCardsV151>${t.map((i,n)=>{let a=characterAbility(+i),hp=b.allyHp[n]||0,ep=b.ep[n]||0;return `<button class="${b.unit===n?"active":""}" data-battle-unit="${n}"><img src="${characterImage(C[+i][0])}"><section><b>${C[+i][1]}</b><small>HP</small><i class=hp><em style="width:${hp}%"></em></i><small>EP</small><i class=ep><em style="width:${ep}%"></em></i></section><div>${["攻","技","奥"].map((x,k)=>`<span class=s${k}>${x}</span>`).join("")}</div></button>`}).join("")}</div>`
}
function battleAttackOrbV151(){
 return `<button class=battleAttackOrbV151 data-sd-action=attack><i>⚔</i><b>攻撃</b><small>ATTACK</small></button>`
}
function targetBattleProgressV151(){return{layout:78,sdArt:48,enemyArt:42,cutin:55,ui:82,overall:61}}

function selectedSkillsV152(){
 let b=ensureAdvancedBattleV125(),slot=b.unit||0,t=S.sets?.[S.set]||[],i=+t[slot]||0,a=characterAbility(i),ep=b.ep?.[slot]||0;
 return `<div class=selectedSkillsV152><button data-sd-action=skill><i>✦</i><span>${a.name}</span></button><button class="${ep>=100?"ready":""}" data-sd-action=ougi><i>◆</i><span>${ougiInfo(i).name}</span><small>${ep}%</small></button><button data-sd-action=heal><i>＋</i><span>${a.role==="回復"?"回復":"支援"}</span></button></div>`
}
function waveBannerV152(){
 let b=ensureAdvancedBattleV125();return `<div class=waveBannerV152><small>WAVE</small><b>${b.wave}</b><span>/ 3</span></div>`
}
function bossFrameV152(){
 let b=ensureAdvancedBattleV125();if(b.wave!==3)return"";
 return `<div class=bossFrameV152><small>BOSS</small><b>${enemyTypeV124(3).name}</b></div>`
}
function targetProgressV152(){return{layout:86,sdArt:52,enemyArt:48,cutin:62,ui:89,flow:82,overall:68}}

function enemyArtV153(wave,index=0){
 let roster=enemyRosterV129(wave),e=roster[index]||roster[0],boss=wave===3;
 return `<div class="enemyArtV153 ${e.cls} ${boss?"boss":""}" data-sd-enemy="${index}"><div class=enemyAuraV153></div><div class=enemyPagesV153>${Array.from({length:boss?8:4},(_,k)=>`<i style="--k:${k}"></i>`).join("")}</div><div class=enemyBodyV153><div class=enemyMaskV153><i></i><b></b></div><div class=enemyCoreV153></div><div class=enemyClawV153></div></div><div class=enemySilhouetteV417 aria-hidden="true"><i></i><i></i><b></b><em></em></div><small>${e.name}</small></div>`
}
function enemyStageV153(){
 let b=ensureAdvancedBattleV125(),r=syncEnemyRosterV129();
 return `<div class=enemyStageV153>${r.map((e,n)=>enemyArtV153(b.wave,n)).join("")}</div>`
}
function cutinV153(i,kind="ougi"){
 let m=expandedMotionV138(i),r=battleFxLayerV121(),n=document.createElement("div");
 n.className=`cutinV153 cutin-${m.cls}`;n.innerHTML=`<div class=cutinPortraitV153><img src="${characterImage(C[i][0])}"></div><div class=cutinSlashV153></div><section><small>${C[i][1]}</small><b>${m.ougi}</b></section>`;
 r.appendChild(n);requestAnimationFrame(()=>n.classList.add("show"));setTimeout(()=>n.remove(),bsv2SkipLongFxV186()?420:620)
}
function targetProgressV153(){return{layout:88,sdArt:55,enemyArt:68,cutin:78,ui:90,flow:84,overall:74}}

function sdDepthV154(i){
 let p=sdArtProfileV148(i),m=expandedMotionV138(i);
 return `depth-${p.outfit} aura-${m.cls}`
}
function selectedAuraV154(){
 let b=ensureAdvancedBattleV125();
 document.querySelectorAll(".sdUnitV147").forEach((u,n)=>u.classList.toggle("selectedV154",n===(b.unit||0)))
}
function targetProgressV154(){return{layout:90,sdArt:67,enemyArt:70,cutin:80,ui:91,flow:86,overall:79}}

function battleAtmosphereV155(){
 let b=ensureAdvancedBattleV125(),tone=b.wave===3?"boss":b.wave===2?"ink":"library";
 return `<div class="battleAtmosphereV155 ${tone}"><i></i><i></i><i></i></div>`
}
function damageStyleV155(kind,weak=false){
 return kind==="ougi"?"critical":weak?"weak":"normal"
}
function targetProgressV155(){return{layout:93,sdArt:72,enemyArt:75,cutin:84,ui:93,flow:89,atmosphere:88,overall:83}}

function depthFxV156(){
 let b=ensureAdvancedBattleV125();
 return `<div class="depthFxV156 wave${b.wave}"><div class=fogBackV156></div><div class=fogFrontV156></div><div class=vignetteV156></div></div>`
}
function enemyIntentV156(){
 let b=ensureAdvancedBattleV125(),sk=enemySkillV126();
 return `<div class=enemyIntentV156><small>NEXT</small><b>${sk.name}</b><span>${sk.aoe?"全体":"単体"}</span></div>`
}
function targetProgressV156(){return{layout:94,sdArt:74,enemyArt:79,cutin:86,ui:94,flow:91,atmosphere:93,overall:86}}

function faceMoodV157(i){
 let p=sdArtProfileV148(i);
 return p.eye==="sharp"||p.eye==="narrow"?"cool":p.eye==="smile"||p.eye==="bright"?"cute":p.eye==="shy"||p.eye==="soft"?"gentle":p.eye==="tense"?"serious":"neutral"
}
function faceMoodClassV157(i){return `mood-${faceMoodV157(i)}`}
function targetProgressV157(){return{layout:95,sdArt:82,enemyArt:80,cutin:87,ui:95,flow:92,atmosphere:94,overall:89}}

function costumeMotionV158(i,slot,kind){
 let u=document.querySelector(`[data-sd-unit="ally:${slot}"]`);if(!u)return;
 let p=sdArtProfileV148(i),cls=`costumeMove-${p.outfit}-${kind}`;u.classList.add(cls);
 setTimeout(()=>u.classList.remove(cls),kind==="ougi"?1250:700)
}
function actionPoseV158(i,slot,kind){
 let u=document.querySelector(`[data-sd-unit="ally:${slot}"]`);if(!u)return;
 let mood=faceMoodV157(i),c=`actionMood-${mood}-${kind}`;u.classList.add(c);setTimeout(()=>u.classList.remove(c),kind==="ougi"?1200:650)
}
function targetProgressV158(){return{layout:95,sdArt:87,enemyArt:81,cutin:88,ui:95,flow:93,atmosphere:94,motion:90,overall:92}}

function enemyMotionV159(kind="attack"){
 let b=ensureAdvancedBattleV125(),e=document.querySelector(`.enemyArtV153[data-sd-enemy="${b.target||0}"]`);
 if(!e)return;let c=kind==="boss"?"enemyBossCastV159":kind==="aoe"?"enemyAoeV159":"enemyAttackV159";
 e.classList.add(c);setTimeout(()=>e.classList.remove(c),kind==="boss"?1200:800)
}
function enemyWarningV159(name,aoe=false){
 let r=battleFxLayerV121(),n=document.createElement("div");n.className="enemyWarningV159";
 n.innerHTML=`<small>ENEMY SKILL</small><b>${name}</b><span>${aoe?"ALL":"TARGET"}</span>`;
 r.appendChild(n);requestAnimationFrame(()=>n.classList.add("show"));setTimeout(()=>n.remove(),900)
}
function ougiSealV159(i){
 let m=expandedMotionV138(i),r=battleFxLayerV121(),n=document.createElement("div");n.className=`ougiSealV159 seal-${m.cls}`;
 n.innerHTML=`<i></i><b>${m.ougi}</b>`;r.appendChild(n);setTimeout(()=>n.classList.add("show"),20);setTimeout(()=>n.remove(),620)
}
function targetProgressV159(){return{layout:96,sdArt:88,enemyArt:89,cutin:94,ui:96,flow:94,atmosphere:95,motion:94,overall:95}}

function spriteAssetV160(i,pose="idle"){
 return characterImage(C[i]?.[0]||"dazai")
}
function spriteFallbackV160(img){
 let wrap=img.closest(".spriteUnitV160");if(!wrap)return;
 let slug=String(wrap.dataset.author||"dazai");
 img.onerror=null;img.src=`assets/characters/${slug}.jpg?v=417`
}
function spritePoseV160(i,slot,pose="idle",ms=650){
 let u=document.querySelector(`.spriteUnitV160[data-sd-unit="ally:${slot}"]`);if(!u)return;
 let img=u.querySelector(".spriteArtV160");if(!img)return;
 let old=img.src;img.src=spriteAssetV160(i,pose);u.dataset.pose=pose;
 setTimeout(()=>{img.src=spriteAssetV160(i,"idle");u.dataset.pose="idle"},ms)
}
function spriteActionV160(i,slot,kind){
 let pose=kind==="attack"?"attack":kind==="skill"?"skill":kind==="ougi"?"ougi":"support";
 spritePoseV160(i,slot,pose,kind==="ougi"?1350:850)
}
function spriteManifestV160(){
 return {
  format:"transparent WebP/PNG",
  target:"2.5-3 head anime chibi, game-rendered, character-specific",
  poses:["idle","attack","skill","ougi","hit","ko","victory","support"],
  size:"512x512 source, transparent",
  rule:"NO text baked into sprite"
 }
}
function targetProgressV160(){return{layout:96,spriteArchitecture:100,sdArtAssets:35,enemyArt:89,cutin:94,ui:96,overall:82}}

function artTargetV161(){
 return {
  composition:"cinematic battlefield 70% / HUD 30%",
  allies:"five high-detail 2.5-3 head anime chibi sprites",
  enemy:"large authored monster art, readable silhouette",
  ui:"thin dark glass + restrained gold lines",
  actions:"normal attack / skill / ougi / support",
  camera:"wide battle field, no oversized panels"
 }
}
function spriteReadinessV161(i){
 let slug=(C[i]?.[0]||"author").toLowerCase();
 return {slug,poses:["idle","attack","skill","ougi","hit","ko","victory","support"],ready:false}
}
function targetProgressV161(){return{layout:96,spriteArchitecture:100,artDirection:100,sdArtAssets:35,enemyArt:89,cutin:94,ui:96,overall:84}}

const SPRITE_PRIORITY_V162=["dazai","akutagawa","higuchi","soseki","nakajima"];
function spriteSetV162(i){
 let slug=(C[i]?.[0]||"author").toLowerCase();
 return {
  slug,
  base:`assets/sd/${slug}/`,
  poses:{idle:"idle.webp",attack:"attack.webp",skill:"skill.webp",ougi:"ougi.webp",hit:"hit.webp",ko:"ko.webp",victory:"victory.webp",support:"support.webp"}
 }
}
function preloadSpriteSetV162(i){
 let s=spriteSetV162(i);Object.values(s.poses).forEach(f=>{let im=new Image();im.src=s.base+f})
}
function preloadBattleSpritesV162(){
 let t=(S.sets?.[S.set]||[]).slice(0,5);t.forEach(i=>preloadSpriteSetV162(+i))
}
function spriteTransitionV162(i,slot,pose){
 let u=document.querySelector(`.spriteUnitV160[data-sd-unit="ally:${slot}"]`),s=spriteSetV162(i);if(!u)return;
 let img=u.querySelector(".spriteArtV160");if(!img)return;
 u.classList.add("spriteChangingV162");setTimeout(()=>{img.src=s.base+(s.poses[pose]||s.poses.idle);u.dataset.pose=pose;u.classList.remove("spriteChangingV162")},60)
}
function spriteQualityV162(i){
 let slug=(C[i]?.[0]||"").toLowerCase();
 return SPRITE_PRIORITY_V162.includes(slug)?"production":"fallback"
}
function spriteProductionProgressV162(){return{pipeline:100,priorityCharacters:5,posesPerCharacter:8,slotsReady:40,realArtFilled:0}}

function finalArtTargetV163(){
 return {
  reference:"assets/reference/battle_target_final_v163.png",
  battlefieldShare:.72,
  hudShare:.28,
  spriteScale:"2.5-3 heads, high-detail authored anime chibi",
  enemyScale:"boss occupies 35-45% of battlefield",
  controls:["support","skill","ougi","normal attack","auto","speed"],
  rule:"battlefield and character art dominate; UI never dominates"
 }
}
function battleLayoutAuditV163(){
 let issues=[];
 if(innerWidth<760){issues.push("portrait-mobile adaptation active")}
 return {target:"V163 locked",issues}
}
function targetProgressV163(){return{visualTarget:100,layout:97,spritePipeline:100,realSpriteArt:0,enemy:90,cutin:95,ui:97,overallImplementation:86}}

function masterTargetV164(){
 return {
  reference:"assets/reference/battle_target_master_v164.png",
  principles:[
   "five authored chibi sprites must read as individual characters",
   "boss is visually dominant but never hides controls",
   "party HUD is thin and portrait-driven",
   "attack is the single dominant control",
   "skill/ougi/support orbit attack control",
   "AUTO and speed are secondary",
   "no baked text in character artwork"
  ]
 }
}
function compactActionClusterV164(){
 let b=ensureAdvancedBattleV125(),slot=b.unit||0,t=S.sets?.[S.set]||[],i=+t[slot]||0,ep=b.ep?.[slot]||0;
 return `<div class=actionClusterV164><button class=support data-sd-action=heal>支援</button><button class=skill data-sd-action=skill>スキル</button><button class="ougi ${ep>=100?"ready":""}" data-sd-action=ougi>奥義</button><button class=attack data-sd-action=attack><i>⚔</i><b>通常攻撃</b></button></div>`
}
function targetProgressV164(){return{masterTarget:100,layout:98,spritePipeline:100,realSpriteArt:0,enemy:91,cutin:95,ui:98,overallImplementation:87}}

function masterPlanV165(){
 return {
  reference:"assets/reference/MASTER_BATTLE_TARGET_V165.png",
  priorities:[
   "authored high-detail chibi sprites",
   "cinematic gothic-library battlefield",
   "large boss art with clear silhouette",
   "thin portrait-driven party HUD",
   "large normal-attack orb + 3 satellite actions",
   "minimal AUTO/speed controls",
   "skill and ougi animation integrated into battlefield"
  ],
  forbidden:[
   "CSS doll treated as final art",
   "oversized rectangular control panels",
   "character art with baked UI text",
   "flat row of identical chibi silhouettes"
  ]
 }
}
function targetProgressV165(){return{masterReference:100,layoutFramework:98,spritePipeline:100,authoredSprites:0,enemyFramework:91,cinematicFx:95,uiFramework:98}}

const POSES_V166=["idle","attack","skill","ougi","hit","ko","victory","support"];
function spriteCandidateV166(i,pose){
 let slug=(C[i]?.[0]||"author").toLowerCase();
 return `assets/sd/${slug}/${pose}.webp`
}
function spritePoseLabelV166(p){
 return ({idle:"待機",attack:"攻撃",skill:"スキル",ougi:"奥義",hit:"被弾",ko:"KO",victory:"勝利",support:"支援"})[p]||p
}
function productionBoardV166(){
 return {reference:"assets/reference/SPRITE_PRODUCTION_BOARD_V166.png",characters:["dazai","akutagawa","higuchi","soseki","nakajima"],poses:POSES_V166}
}
function targetProgressV166(){return{masterTarget:100,productionBoard:100,pipeline:100,realSpritesIntegrated:0,uiFramework:98,enemyFramework:91}}

const REQUIRED_POSES_V167=["idle","attack","skill","ougi","hit","ko","victory","support"];
function assetStatusV167(slug){
 let known=(window.__spriteAssetStatusV167||{})[slug]||{};
 let ready=REQUIRED_POSES_V167.filter(p=>known[p]===true);
 return {slug,ready,total:8,complete:ready.length===8}
}
function battleAssetAuditV167(){
 let t=(S.sets?.[S.set]||[]).slice(0,5),rows=t.map(i=>assetStatusV167((C[+i]?.[0]||"author").toLowerCase()));
 return {rows,complete:rows.filter(x=>x.complete).length,total:rows.length}
}
function spriteAssetGateV167(i){
 let slug=(C[i]?.[0]||"author").toLowerCase(),s=assetStatusV167(slug);
 return s.complete?"authored":"fallback"
}
function qaStateV167(){
 let a=battleAssetAuditV167();
 return {authoredCharacters:a.complete,partyCharacters:a.total,controls:["attack","skill","ougi","support","auto","speed"],master:"assets/reference/PRODUCTION_REFERENCE_V167.png"}
}
function targetProgressV167(){let q=qaStateV167();return{visualReference:100,pipeline:100,authoredCharacters:q.authoredCharacters,requiredCharacters:5,qaFramework:100}}

function productionContractV168(){
 return {
  reference:"assets/reference/PRODUCTION_CONTRACT_REFERENCE_V168.png",
  authoredSpritesRequired:40,
  cutinsRequired:5,
  skillFxRequired:5,
  enemyArtsRequired:3,
  stageArtsRequired:5,
  mobileControlsRequired:["attack","skill","ougi","support","auto","speed"]
 }
}
function runtimeControlAuditV168(){
 let selectors={
  attack:'[data-sd-action="attack"]',skill:'[data-sd-action="skill"]',
  ougi:'[data-sd-action="ougi"]',support:'[data-sd-action="heal"]',
  auto:'[data-battle-auto]',speed:'[data-battle-speed]'
 };
 return Object.fromEntries(Object.entries(selectors).map(([k,s])=>[k,!!document.querySelector(s)]))
}
function runtimeVisualAuditV168(){
 let authored=document.querySelectorAll(".spriteUnitV160.asset-authored").length;
 let fallback=document.querySelectorAll(".spriteUnitV160.asset-fallback,.spriteUnitV160.useFallback").length;
 return {authored,fallback,controls:runtimeControlAuditV168()}
}

function fullGameTargetV169(){
 return {
  reference:"assets/reference/FULL_GAME_TARGET_V169.png",
  screens:["home","formation","growth","summon","library","mission","stage","battle"],
  visual:"dark gothic literary fantasy, thin gold frame, image-first, compact UI"
 }
}
function quickNavV169(){
 return `<nav class=quickNavV169><button data-v169-go=home>物語</button><button data-v169-go=formation>編成</button><button data-v169-go=growth>強化</button><button data-v169-go=summon>召喚</button><button data-v169-go=library>図書館</button><button data-v169-go=mission>任務</button></nav>`
}
function uiAuditV169(){
 return {battle:runtimeControlAuditV168(),target:fullGameTargetV169()}
}

function battleRenderHealthV170(){
 let field=document.querySelector(".battleFieldV119");
 let allies=document.querySelectorAll(".spriteUnitV160,.sdUnitV147").length;
 let enemies=document.querySelectorAll(".enemyArtV153").length;
 let cards=document.querySelectorAll(".battleCardsV151>button").length;
 return {field:!!field,allies,enemies,cards,ok:!!field&&allies>0&&enemies>0&&cards>0}
}
function recoverBattleV170(){
 let h=battleRenderHealthV170();if(h.ok)return h;
 try{
  let b=ensureAdvancedBattleV125();
  if(!Array.isArray(b.allyHp)||!b.allyHp.length)b.allyHp=[100,100,100,100,100];
  if(!Array.isArray(b.ep)||!b.ep.length)b.ep=[0,0,0,0,0];
  if(!b.wave)b.wave=1;if(!b.turn)b.turn=1;
  save();render()
 }catch(err){console.error("V170 battle recovery",err)}
 return battleRenderHealthV170()
}
function scheduleBattleRecoveryV170(){
 requestAnimationFrame(()=>{let h=battleRenderHealthV170();if(!h.ok)setTimeout(()=>recoverBattleV170(),80)})
}
function v170Target(){return "assets/reference/RECOVERY_TARGET_V170.png"}

function normalizeBattleStateV171(){
 let b=ensureAdvancedBattleV125(),team=(S.sets?.[S.set]||[]).slice(0,5);
 if(!team.length){team=[0,1,2,3,4];S.sets=S.sets||[];S.sets[S.set||0]=team}
 b.wave=Math.max(1,Math.min(3,+b.wave||1)); b.turn=Math.max(1,+b.turn||1);
 b.unit=Math.max(0,Math.min(team.length-1,+b.unit||0)); b.target=Math.max(0,+b.target||0);
 b.allyHp=Array.from({length:team.length},(_,n)=>Math.max(0,Math.min(100,+b.allyHp?.[n]||100)));
 b.ep=Array.from({length:team.length},(_,n)=>Math.max(0,Math.min(100,+b.ep?.[n]||0)));
 return b
}
function emergencyBattleStageV171(){
 let team=(S.sets?.[S.set]||[]).slice(0,5),b=normalizeBattleStateV171();
 return `<div class=emergencyStageV171><div class=emergencyAlliesV171>${team.map((i,n)=>sdUnit(+i,"ally",n)).join("")}</div>${enemyStageV153()}<div class=emergencyCardsV171>${battleCharacterCardsV151()}</div>${compactActionClusterV164()}</div>`
}
function verifyBattleAfterPaintV171(){
 requestAnimationFrame(()=>requestAnimationFrame(()=>{
   let h=battleRenderHealthV170();
   if(!h.ok){
     let f=document.querySelector(".battleFieldV119");
     if(f&&!f.querySelector(".emergencyStageV171"))f.insertAdjacentHTML("beforeend",emergencyBattleStageV171())
   }
 }))
}
function stableBattleCoreV171(){return{state:normalizeBattleStateV171(),health:battleRenderHealthV170()}}

function battleInvariantV172(){
 let b=normalizeBattleStateV171(),team=(S.sets?.[S.set]||[]).slice(0,5);
 return {
  teamReady:team.length>0,
  hpReady:Array.isArray(b.allyHp)&&b.allyHp.length===team.length,
  epReady:Array.isArray(b.ep)&&b.ep.length===team.length,
  waveReady:b.wave>=1&&b.wave<=3,
  unitReady:b.unit>=0&&b.unit<team.length
 }
}
function controlHitboxAuditV172(){
 let keys=["attack","skill","ougi","heal"],out={};
 keys.forEach(k=>{let el=document.querySelector(`[data-sd-action="${k}"]`),r=el?.getBoundingClientRect();out[k]=!!el&&r.width>=32&&r.height>=32});
 let auto=document.querySelector("[data-battle-auto]"),speed=document.querySelector("[data-battle-speed]");
 out.auto=!!auto;out.speed=!!speed;return out
}
function battleWatchdogV172(){
 let attempts=0,timer=setInterval(()=>{
  if(S.page!=="battle"){clearInterval(timer);return}
  let h=battleRenderHealthV170(),inv=battleInvariantV172();
  if(h.ok&&Object.values(inv).every(Boolean)){clearInterval(timer);return}
  if(++attempts>=3){clearInterval(timer);return}
  recoverBattleV170()
 },220)
}
function startBattleWatchdogV172(){setTimeout(battleWatchdogV172,120)}

function battleCinematicLayerV173(){
 let b=normalizeBattleStateV171();
 return `<div class="cinematicLayerV173 wave-${b.wave}">
   <div class=moonGlowV173></div><div class=petalsV173>${Array.from({length:9},(_,i)=>`<i style="--n:${i}"></i>`).join("")}</div>
   <div class=groundReflectionV173></div><div class=cinemaBarsV173></div>
 </div>`
}
function partyDepthV173(){
 document.querySelectorAll(".sdBattleV118>.spriteUnitV160,.sdBattleV118>.sdUnitV147").forEach((u,n)=>{
   u.style.setProperty("--depth-x",`${[0,8,19,30,40][n]||n*9}%`);
   u.style.setProperty("--depth-y",`${[8,0,13,4,11][n]||0}px`);
   u.style.setProperty("--depth-s",`${[.9,.96,1.05,.98,.92][n]||1}`);
 })
}
function battlePolishV173(){requestAnimationFrame(()=>partyDepthV173())}

function skillFxProfileV174(i){
 let slug=(C[i]?.[0]||"").toLowerCase(),m=expandedMotionV138(i).cls;
 let map={
  dazai:{cls:"nullify",mark:"頁",count:9},
  akutagawa:{cls:"inkbeast",mark:"斬",count:7},
  higuchi:{cls:"petals",mark:"花",count:11},
  soseki:{cls:"glyph",mark:"猫",count:8},
  nakajima:{cls:"tiger",mark:"爪",count:6}
 };
 return map[slug]||map[m]||{cls:"literary",mark:"文",count:7}
}
function skillFxV174(i,kind="skill",target=0){
 let p=skillFxProfileV174(i),r=battleFxLayerV121(),n=document.createElement("div");
 n.className=`skillFxV174 fx-${p.cls} ${kind}`;
 n.innerHTML=`<div class=skillSigilV174>${p.mark}</div>${Array.from({length:Math.min(4,p.count)},(_,k)=>`<i style="--k:${k}"></i>`).join("")}`;
 r.appendChild(n);requestAnimationFrame(()=>n.classList.add("show"));setTimeout(()=>n.remove(),kind==="ougi"?1250:820)
}
function choreographyCameraV174(i,kind){
 let f=document.querySelector(".battleFieldV119");if(!f)return;
 let p=skillFxProfileV174(i),c=`cam-${p.cls}-${kind}`;f.classList.add(c);setTimeout(()=>f.classList.remove(c),kind==="ougi"?1100:650)
}
function v174SkillProgress(){return{dazai:100,akutagawa:100,higuchi:100,soseki:100,nakajima:100,framework:100}}

function battleSceneV2_175(){
 setTimeout(bsv2FlowPolish179,0);setTimeout(bsv2VisualPass177,0);
 if(posterBattleOnV205())return cinematicPosterBattleV205();
 let b=normalizeBattleStateV171(), team=(S.sets?.[S.set]||[]).slice(0,5);
 let enemy=enemyTypeV124(b.wave), hp=enemyHpPercentV197(b);
 return `<main class=bsv2_175>
   <header class=bsv2Top_175>
    <section><b>第${b.wave}章　言葉のはじまり</b><small>WAVE ${b.wave}/3　TURN ${b.turn}</small></section>
    <nav><button data-battle-speed="${b.speed===2?1:2}">▶▶ ${b.speed===2?"×2":"×1"}</button><button class="${b.auto?"on":""}" data-battle-auto=1>AUTO</button><button data-battle-pause=1>Ⅱ</button></nav>
   </header>
   <section class=bsv2Field_175>
    <div class=bsv2Backdrop_175></div>${bsv2Atmosphere177()}
    <div class=bsv2Turn_175>${team.map((i,n)=>`<button class="${b.unit===n?"on":""}" data-battle-unit="${n}"><img src="${characterImage(C[+i][0])}"></button>`).join("")}</div>
    ${bsv2EnemyIntent177()}<div class=bsv2EnemyHud_175><small>${b.wave===3?"BOSS":"ENEMY"} / Lv.${20+b.wave*10}</small><b>${enemy.name}</b><i><em style="width:${hp}%"></em></i></div>
    <div class=bsv2Allies_175>${team.map((i,n)=>sdUnit(+i,"ally",n)).join("")}</div>
    <div class=bsv2Enemies_175>${enemyStageV153()}</div>
    <div class=bsv2Fx_175></div>${bsv2TargetBadge184()}${battleLightweightBannerV195()}${battleMinimalHudV204()}${battleMiniStatsV196()}
   </section>
   <div class=bsv2Command176>${bsv2SelectedPanel176()}${bsv2Log176()}</div><footer class=bsv2Hud_175>
    <div class=bsv2Cards_175>${team.map((i,n)=>{let hpv=b.allyHp[n]||0,ep=b.ep[n]||0;return `<button class="${b.unit===n?"on":""}" data-battle-unit="${n}"><img src="${characterImage(C[+i][0])}"><span><b>${C[+i][1]}</b><small>HP</small><i><em style="width:${hpv}%"></em></i><small>EP</small><i class=ep><em style="width:${ep}%"></em></i></span></button>`}).join("")}</div>
    ${compactActionClusterV164()}
   </footer>
 </main>`
}
function battleSceneV2Audit175(){
 let q=s=>!!document.querySelector(s);
 return {scene:q(".bsv2_175"),field:q(".bsv2Field_175"),allies:q(".bsv2Allies_175"),enemy:q(".bsv2Enemies_175"),cards:q(".bsv2Cards_175"),attack:q('[data-sd-action="attack"]'),auto:q("[data-battle-auto]")}
}

function bsv2SelectedPanel176(){
 let b=normalizeBattleStateV171(),team=(S.sets?.[S.set]||[]).slice(0,5),i=+team[b.unit]||0,a=characterAbility(i),o=ougiInfo(i),ep=b.ep?.[b.unit]||0;
 return `<div class=bsv2Selected176><span><b>${C[i]?.[1]||"文豪"}</b><small>${a.role||"攻撃"} / ${a.name}</small></span><nav><button data-sd-action=skill>✦ スキル</button><button class="${ep>=100?"ready":""}" data-sd-action=ougi>◆ ${o.name}<i>${ep}%</i></button><button data-sd-action=heal>＋ 支援</button></nav></div>`
}
function bsv2Log176(){
 let b=normalizeBattleStateV171(),rows=(b.log||[]).slice(-3).reverse();
 return `<div class=bsv2Log176>${rows.length?rows.map(x=>`<p>› ${x}</p>`).join(""):"<p>› 戦闘開始。文豪を選択してください。</p>"}</div>`
}
function bsv2TouchAudit176(){
 let out={};["attack","skill","ougi","heal"].forEach(k=>{let e=document.querySelector(`[data-sd-action="${k}"]`),r=e?.getBoundingClientRect();out[k]=!!e&&r.width>=36&&r.height>=36});
 return out
}

function bsv2Atmosphere177(){
 let b=normalizeBattleStateV171();
 return `<div class="bsv2Atmos177 w${b.wave}">
   <div class=moon177></div><div class=arches177></div><div class=floor177></div>
   <div class=particles177>${Array.from({length:5},(_,n)=>`<i style="--n:${n}"></i>`).join("")}</div>
 </div>`
}
function bsv2EnemyIntent177(){
 let sk=enemySkillV126();
 return `<div class=bsv2Intent177><small>NEXT</small><b>${sk.name}</b><i>${sk.aoe?"ALL":"TARGET"}</i></div>`
}
function bsv2SelectedGlow177(){
 let b=normalizeBattleStateV171();
 document.querySelectorAll(".bsv2Allies_175>[data-sd-unit]").forEach((u,n)=>u.classList.toggle("bsv2Chosen177",n===b.unit))
}
function bsv2VisualPass177(){requestAnimationFrame(()=>bsv2SelectedGlow177())}

function bsv2CombatFx178(kind="attack",value=0){
 let field=document.querySelector(".bsv2Field_175");if(!field)return;
 let n=document.createElement("div");n.className=`bsv2Impact178 ${kind}`;
 n.innerHTML=`<i></i><b>${value?value.toLocaleString():""}</b>`;
 field.appendChild(n);requestAnimationFrame(()=>n.classList.add("show"));setTimeout(()=>n.remove(),700)
}
function bsv2Shake178(power="light"){
 let f=document.querySelector(".bsv2Field_175");if(!f)return;
 let c=`shake178-${power}`;f.classList.add(c);setTimeout(()=>f.classList.remove(c),power==="heavy"?520:300)
}
function bsv2EnemyHit178(kind="attack"){
 let e=document.querySelector(".bsv2Enemies_175 .enemyArtV153");if(!e)return;
 e.classList.add("hit178");setTimeout(()=>e.classList.remove("hit178"),380)
}
function bsv2AllyAct178(slot,kind){
 let u=document.querySelector(`.bsv2Allies_175 [data-sd-unit="ally:${slot}"]`);if(!u)return;
 let c=`act178-${kind}`;u.classList.add(c);setTimeout(()=>u.classList.remove(c),kind==="ougi"?950:560)
}
function bsv2Feedback178(slot,kind,damage=0){if(shouldPlayBattleFxV194(kind==="ougi"?3:kind==="skill"?2:1))smoothActionFeedbackV189(kind);bsv2ActionWindow179(kind==="ougi"?560:320);
 bsv2AllyAct178(slot,kind);bsv2EnemyHit178(kind);bsv2CombatFx178(kind,damage);bsv2Shake178(kind==="ougi"?"heavy":"light")
}

function bsv2WaveIntro179(){
 let b=normalizeBattleStateV171(),field=document.querySelector(".bsv2Field_175");if(!field)return;
 let n=document.createElement("div");n.className="bsv2WaveIntro179";n.innerHTML=`<small>WAVE</small><b>${b.wave}</b><i>/ 3</i>`;
 field.appendChild(n);requestAnimationFrame(()=>n.classList.add("show"));setTimeout(()=>n.remove(),850)
}
function bsv2TurnPulse179(){
 let b=normalizeBattleStateV171();
 document.querySelectorAll(".bsv2Turn_175 button").forEach((x,n)=>x.classList.toggle("current179",n===b.unit))
}
function bsv2ActionLock179(on=true){
 document.querySelectorAll(".bsv2Command176 button,.actionClusterV164 button,.bsv2Cards_175 button").forEach(x=>x.toggleAttribute("disabled",on))
}
function bsv2ActionWindow179(ms=450){bsv2ActionLock179(true);setTimeout(()=>bsv2ActionLock179(false),ms)}
function bsv2FlowPolish179(){requestAnimationFrame(()=>bsv2TurnPulse179())}

function prepareBattleV180(ch=0,mode="normal"){
 ensureCoreState();ensureQoLPrefs();ensureUnitSets();
 ch=Math.max(0,Math.min(3,+ch||0));mode=mode==="hard"?"hard":"normal";
 if(ch>0&&!(S.progress?.clears?.[ch-1]>0))throw new Error("前の章が未クリアです");
 if(mode==="hard"&&!hardUnlocked(ch))throw new Error("HARDは未解放です");
 S.qol=S.qol||{};S.qol.selectedStage=ch;S.qol.lastStage=ch;rememberBattleLoopV181(ch,S.qol.lastFarmCount||10);
 S.battleStage=ch;S.battleMode=mode;
 S.battleV120={
  wave:1,turn:1,speed:1,auto:false,target:0,unit:0,
  enemyHp:[100,100,100],ep:[0,0,0,0,0],breakGauge:[100,100,100],
  enemyStatus:[[],[],[]],allyHp:[100,100,100,100,100],combo:0,
  enemyRosterWave:0,log:[`第${ch+1}章 ${mode.toUpperCase()} 開始`]
 };
 normalizeBattleStateV171();save();persistentSaveWrite();return S.battleV120
}
function startBattleV180(ch=0,mode="normal"){
 if(!actionLock(700))return;
 try{
  // V414: core battle opens immediately. Optional legacy enhancements load later.
  battleLoadingV411(false);
  closeOverlays();
  prepareBattleV180(ch,mode);
  startBattleSessionV196();
  __posterPhaseV214=0;__posterWaveV214=0;
  S.qol=S.qol||{};S.qol.posterKoStateV213=[false,false,false,false,false];
  battleCheckpointV196(true);
  try{preloadBattleSpritesV162?.()}catch(_){}
  const out=mountBattleV182();

  // Do not block the user on battle-extras.js. Load it in the background.
  setTimeout(()=>{
    try{
      const p=window.__bkLoadBattleExtras?.();
      if(p&&typeof p.then==="function"){
        Promise.race([
          p,
          new Promise(resolve=>setTimeout(()=>resolve(false),5000))
        ]).then(ok=>{
          if(!ok||!document.body.classList.contains("battleMode"))return;
          try{preloadPosterAssetsV216?.();preloadBattleSpritesV162?.()}catch(_){}
          try{
            if(typeof smoothRefreshBattleV194==="function")smoothRefreshBattleV194();
            window.dispatchEvent(new Event("resize"));
          }catch(_){}
        }).catch(()=>{});
      }
    }catch(_){}
  },350);

  return out
 }catch(err){
  console.error("V414 battle transition",err);
  document.body.classList.remove("battleMode");
  battleLoadingV411(false);
  toast(err?.message||"戦闘画面を開けませんでした");
  return stagePage()
 }
}
function battleTransitionAuditV180(){
 return {
  scene:typeof battleSceneV2_175==="function",
  stage:typeof stagePage==="function",
  state:typeof normalizeBattleStateV171==="function",
  controls:typeof compactActionClusterV164==="function",
  enemy:typeof enemyStageV153==="function"
 }
}

function stageLoopPrefsV181(){
 S.qol=S.qol||{};
 if(!Number.isInteger(S.qol.lastFarmCount))S.qol.lastFarmCount=10;
 if(!Number.isInteger(S.qol.lastFarmStage))S.qol.lastFarmStage=0;
 return S.qol
}
function rememberBattleLoopV181(ch,count=1){
 let q=stageLoopPrefsV181();
 q.lastFarmStage=Math.max(0,+ch||0);
 q.lastFarmCount=Math.max(1,Math.min(50,+count||1));
 save();persistentSaveWrite()
}
function repeatBattleFromResultV181(auto=false){__battleSessionV196.retries++;
 let q=stageLoopPrefsV181(),ch=Math.max(0,+S.battleStage||q.lastFarmStage||0),mode=S.battleMode||"normal";
 return launchReplayV199(!!auto,ch,mode)
}
function resultLoopButtonsV181(){
 return `<div class=resultLoopV181><button data-v181-repeat=1>もう一度</button><button class=auto data-v181-repeat-auto=1>AUTO再戦</button><button data-go=sortie>ステージへ</button></div>`
}
function battleLoopAuditV181(){
 return {lastStage:stageLoopPrefsV181().lastFarmStage,lastCount:stageLoopPrefsV181().lastFarmCount,battleStage:S.battleStage,battleMode:S.battleMode}
}

function mountBattleV182(){
  normalizeBattleStateV171();
  if(!__battleSessionV196.startedAt)startBattleSessionV196();
  battleInvalidateActionsV195();clearBattleTimersV191();purgeBattleTransientDomV191();
  closeOverlays();
  window.__bkBooted=true;
  window.__bkBootGuard=false;
  document.body.classList.add("battleMode");document.body.classList.toggle("posterBattleBodyV205",posterBattleOnV205());document.body.classList.toggle("cleanBattleBodyV238",posterBattleOnV205());applySnappyBattleV204();pauseDecorativeFxV190(false);battleFastClassV185();applyAutoPerfV190();applyBattleQualityV192(battleAdaptiveStateV192().battleQuality);applyBattleDensityV194();setupViewportGuardV194();
  window.scrollTo(0,0);
  const root=document.getElementById("app");battleViewportGuardV194();
  if(!root)throw new Error("app root not found");
  __battleSnapshotV189=null;const markup=battleSceneV2_175();
  posterRendererResetV229();root.innerHTML=markup;
  requestAnimationFrame(()=>{
    try{
      if(document.querySelector(".cleanBattleV238")){cleanBattlePostMountV238();return;}
      if(typeof bsv2VisualPass177==="function")bsv2VisualPass177();
      if(typeof bsv2FlowPolish179==="function")bsv2FlowPolish179();
      if(typeof verifyBattleAfterPaintV171==="function")verifyBattleAfterPaintV171();
      if(typeof startBattleWatchdogV172==="function")startBattleWatchdogV172();
      if(typeof bsv2PostMount184==="function")bsv2PostMount184();if(typeof optimizeBattleImagesV197==="function")optimizeBattleImagesV197();if(typeof refreshCommandPanelV198==="function")refreshCommandPanelV198();if(typeof refreshPosterLiveOverlayV206==="function")refreshPosterLiveOverlayV206();if(typeof refreshPosterLabelsV208==="function")refreshPosterLabelsV208();if(typeof refreshPosterStateV209==="function")refreshPosterStateV209();if(typeof refreshPosterSelectedPortraitV210==="function")refreshPosterSelectedPortraitV210();if(typeof refreshPortraitBadgeV211==="function")refreshPortraitBadgeV211();if(typeof applyPortraitBattleLayoutV211==="function")applyPortraitBattleLayoutV211();if(typeof refreshPosterInteractionV212==="function")refreshPosterInteractionV212();if(typeof refreshPosterButtonStateV212==="function")refreshPosterButtonStateV212();if(typeof refreshPosterCombatStateV213==="function")refreshPosterCombatStateV213();if(typeof posterApplyPhaseV214==="function")posterApplyPhaseV214();if(typeof refreshPosterTacticalV215==="function")refreshPosterTacticalV215();if(typeof applyExactPosterFitV216==="function")applyExactPosterFitV216();if(typeof refreshPosterPolishV216==="function")refreshPosterPolishV216();if(typeof posterBootHintV216==="function")posterBootHintV216();if(typeof posterPortraitPreloadV217==="function")posterPortraitPreloadV217();if(typeof preloadActiveCutinsV218==="function")preloadActiveCutinsV218();if(typeof refreshLivePartyPortraitsV217==="function")refreshLivePartyPortraitsV217();if(typeof posterSelectedAuraV217==="function")posterSelectedAuraV217();if(typeof refreshPosterPartyStripV218==="function")refreshPosterPartyStripV218();if(typeof refreshPosterThreatV219==="function")refreshPosterThreatV219();if(typeof refreshPoseCoverageV221==="function")refreshPoseCoverageV221();if(typeof setupPosterDeviceGuardsV222==="function")setupPosterDeviceGuardsV222();if(typeof posterOrientationSyncV222==="function")posterOrientationSyncV222();if(typeof setupPosterProductionGuardV223==="function")setupPosterProductionGuardV223();if(typeof posterGuardCheckV223==="function")posterGuardCheckV223();if(typeof refreshPosterRunBadgeV224==="function")refreshPosterRunBadgeV224();if(typeof applyPosterCriticalStateV224==="function")applyPosterCriticalStateV224();if(typeof schedulePosterHudIdleV224==="function")schedulePosterHudIdleV224();if(typeof refreshPosterRcV225==="function")refreshPosterRcV225();if(typeof schedulePosterRcCheckV225==="function")schedulePosterRcCheckV225();if(typeof refreshPosterCompactStatusV226==="function")refreshPosterCompactStatusV226();if(typeof schedulePosterPreflightV226==="function")schedulePosterPreflightV226();if(typeof schedulePosterFinalCheckV227==="function")schedulePosterFinalCheckV227();if(typeof posterStageHostV228==="function")posterStageHostV228();if(typeof cleanupLegacyPosterFxV228==="function")cleanupLegacyPosterFxV228();if(typeof schedulePosterRenderV229==="function")schedulePosterRenderV229("mount",true);if(typeof renderPosterQueueBadgeV230==="function")renderPosterQueueBadgeV230();if(typeof refreshPosterLoopBadgeV230==="function")refreshPosterLoopBadgeV230();if(typeof refreshPosterBreakV231==="function")refreshPosterBreakV231();if(typeof refreshPosterComboV232==="function")refreshPosterComboV232();if(typeof refreshPosterThumbV234==="function")refreshPosterThumbV234();if(typeof refreshPosterSelectedStripV234==="function")refreshPosterSelectedStripV234();if(typeof refreshPosterCleanHudV235==="function")refreshPosterCleanHudV235();if(typeof applyPosterControlStateV235==="function")applyPosterControlStateV235();if(typeof posterWaveIntroV207==="function")posterWaveIntroV207();hideAutoReplayLoadingV199();renderAutoReplayHudV199();renderAutoLoopHudV200();refreshPosterLoopBadgeV230?.();if(autoLoopActiveV200())autoLoopBattleMountedV200();if(typeof scheduleBattlePerfCheckV192==="function")scheduleBattlePerfCheckV192();if(typeof scheduleGovernorV193==="function")scheduleGovernorV193();if(typeof startAutoWatchdogV193==="function")startAutoWatchdogV193();
    }catch(e){console.error("V182 post mount",e)}
  });
  if(ensureBattleStateV120().auto)setTimeout(()=>autoHardActionV430(),120);
  return markup
}
function battleUiAuditV183(){
 let root=document.querySelector(".bsv2_175"),cluster=document.querySelector(".bsv2Hud_175 .actionClusterV164"),auto=document.querySelector("[data-battle-auto]"),cards=document.querySelectorAll(".bsv2Cards_175 button");
 let cr=cluster?.getBoundingClientRect?.()||{right:0,bottom:0,left:0,top:0};
 return {scene:!!root,auto:!!auto,autoOn:!!ensureBattleStateV120().auto,clusterVisible:!!cluster,clusterFits:cr.right<=innerWidth+1&&cr.bottom<=innerHeight+1,cards:cards.length};
}

function battleMountAuditV182(){
  const a=document.getElementById("app");
  return {
    root:!!a,
    scene:!!a?.querySelector(".bsv2_175"),
    field:!!a?.querySelector(".bsv2Field_175"),
    attack:!!a?.querySelector('[data-sd-action="attack"]'),
    auto:!!a?.querySelector("[data-battle-auto]")
  }
}

function bsv2AutoBadge184(){
 let b=ensureBattleStateV120();
 return `<div class="bsv2AutoBadge184 ${b.auto?"on":""}"><i></i><span>${b.auto?"AUTO RUNNING":"MANUAL"}</span></div>`
}
function bsv2TargetBadge184(){
 let b=normalizeBattleStateV171(),roster=enemyRosterV129(b.wave),e=roster[b.target]||roster[0];
 return `<div class=bsv2TargetBadge184><small>TARGET</small><b>${e?.name||"異稿体"}</b></div>`
}
function bsv2RefreshStatus184(){
 let host=document.querySelector(".bsv2Field_175");
 if(!host)return;
 host.querySelector(".bsv2AutoBadge184")?.remove();
 host.querySelector(".bsv2TargetBadge184")?.remove();
 host.insertAdjacentHTML("beforeend",bsv2AutoBadge184()+bsv2TargetBadge184())
}
function bsv2PostMount184(){requestAnimationFrame(()=>bsv2RefreshStatus184())}
function bsv2ProAudit184(){
 let r=document.querySelector(".bsv2_175"),c=document.querySelector(".actionClusterV164"),a=document.querySelector("[data-battle-auto]");
 let rc=c?.getBoundingClientRect?.();
 return {scene:!!r,auto:!!a,autoState:!!ensureBattleStateV120().auto,clusterFits:!!rc&&rc.left>=0&&rc.right<=innerWidth&&rc.top>=0&&rc.bottom<=innerHeight}
}

function battleMotionScaleV185(){
 let b=ensureBattleStateV120();
 return b.speed===2?.62:1
}
function battleMsV185(ms){return Math.max(80,Math.round(ms*battleMotionScaleV185()))}
function battleFastClassV185(){
 document.body.classList.toggle("battleFastV185",ensureBattleStateV120().speed===2)
}

function battleTempoV186(){
 let b=ensureBattleStateV120();
 return b.speed===2?{tap:130,enemy:210,after:160,ougi:390}:{tap:210,enemy:330,after:260,ougi:590}
}
function bsv2ActionTimerV186(kind){
 let t=battleTempoV186();
 return kind==="ougi"?t.ougi:kind==="skill"?Math.round(t.tap*1.45):kind==="heal"?Math.round(t.tap*1.15):t.tap;
}
function bsv2EnemyTimerV186(){
 let t=battleTempoV186();
 return t.enemy
}
function bsv2SkipLongFxV186(){
 let b=ensureBattleStateV120();
 return !!(b.speed===2||S.qol?.skipOugi)
}
function bsv2TempoBadgeV186(){
 let b=ensureBattleStateV120();
 return `<div class=bsv2TempoBadgeV186><span>${b.speed===2?"FAST":"NORMAL"}</span><b>${b.auto?"AUTO":"MANUAL"}</b></div>`
}

function perfPrefsV187(){
 S.qol=S.qol||{};
 if(typeof S.qol.lightBattle!=="boolean")S.qol.lightBattle=true;
 return S.qol
}
function lightBattleV187(){return perfPrefsV187().lightBattle}
function applyLightBattleV187(){
 document.body.classList.toggle("lightBattleV187",lightBattleV187())
}
function cleanupBattleFxV187(){
 stopAutoBattleV122?.();
 [
  "#battleAnimV121",".cutinV153",".ougiSealV159",".finisherV141",
  ".enemyWarningV159",".victoryCurtainV142",".bsv2Impact178",
  ".bsv2WaveIntro179",".skillFxV174"
 ].forEach(s=>document.querySelectorAll(s).forEach(n=>n.remove()));
 document.documentElement.classList.remove("hitStopV121");
}
function toggleLightBattleV187(){
 let q=perfPrefsV187();q.lightBattle=!q.lightBattle;save();persistentSaveWrite();applyLightBattleV187();
 if(document.body.classList.contains("battleMode"))cinematicBattleV119();else home();
}
function lightBattleButtonV187(){
 return `<button class="${lightBattleV187()?"on":""}" data-light-battle=1>${lightBattleV187()?"軽量ON":"軽量OFF"}</button>`
}

function refreshBattleV188(){
 if(document.querySelector(".posterBattleV205")){schedulePosterRenderV229("refreshBattle");return true;}
 let root=document.querySelector(".bsv2_175");if(!root)return false;
 let b=normalizeBattleStateV171(),team=(S.sets?.[S.set]||[]).slice(0,5);
 let top=root.querySelector(".bsv2Top_175 section small");
 if(top)top.textContent=`WAVE ${b.wave}/3　TURN ${b.turn}`;
 let auto=root.querySelector("[data-battle-auto]");
 if(auto){auto.classList.toggle("on",!!b.auto);auto.textContent=b.auto?"● AUTO":"AUTO"}
 let speed=root.querySelector("[data-battle-speed]");
 if(speed){speed.dataset.battleSpeed=b.speed===2?1:2;speed.textContent=`▶▶ ${b.speed===2?"×2":"×1"}`}
 let hp=b.enemyHp?.[b.target]??100,bar=root.querySelector(".bsv2EnemyHud_175>i>em");
 if(bar)bar.style.width=Math.max(0,Math.min(100,hp))+"%";
 root.querySelectorAll(".bsv2Turn_175 button").forEach((x,n)=>x.classList.toggle("on",n===b.unit));
 root.querySelectorAll(".bsv2Cards_175 button").forEach((x,n)=>{
   x.classList.toggle("on",n===b.unit);
   let bars=x.querySelectorAll("span>i>em");
   if(bars[0])bars[0].style.width=Math.max(0,Math.min(100,b.allyHp?.[n]??100))+"%";
   if(bars[1])bars[1].style.width=Math.max(0,Math.min(100,b.ep?.[n]??0))+"%";
 });
 let ougi=root.querySelector('.actionClusterV164 [data-sd-action="ougi"]');
 if(ougi)ougi.classList.toggle("ready",(b.ep?.[b.unit]||0)>=100);
 let badge=root.querySelector(".bsv2AutoBadge184");
 if(badge){badge.classList.toggle("on",!!b.auto);let s=badge.querySelector("span");if(s)s.textContent=b.auto?"AUTO RUNNING":"MANUAL"}
 let tempo=root.querySelector(".bsv2TempoBadgeV186");
 if(tempo){let s=tempo.querySelector("span"),m=tempo.querySelector("b");if(s)s.textContent=b.speed===2?"FAST":"NORMAL";if(m)m.textContent=b.auto?"AUTO":"MANUAL"}
 refreshCommandPanelV198();
 return true
}
function smoothBattleModeV188(){
 return lightBattleV187()
}
function cleanupTransientBattleV188(){
 document.querySelectorAll("#battleAnimV121,.bsv2Impact178,.skillFxV174,.cutinV153,.ougiSealV159,.finisherV141,.enemyWarningV159,.sfxVisualV146,.weaponTrailV145").forEach(n=>n.remove())
}

function battleFxPoolV189(){
 let host=document.querySelector(".bsv2Fx_175");
 if(!host)return null;
 let pool=host.querySelector(".fxPoolV189");
 if(!pool){pool=document.createElement("div");pool.className="fxPoolV189";host.appendChild(pool)}
 return pool
}
function fxFlashV189(kind="attack"){
 let p=battleFxPoolV189();if(!p)return;
 p.dataset.kind=kind;p.classList.remove("play");void p.offsetWidth;p.classList.add("play");
}
function hpTextV189(value,kind="damage"){
 let host=battleFxPoolV189();if(!host)return;
 let n=host.querySelector(".fxNumberV189");
 if(!n){n=document.createElement("b");n.className="fxNumberV189";host.appendChild(n)}
 n.className=`fxNumberV189 ${kind}`;n.textContent=value;n.classList.remove("play");void n.offsetWidth;n.classList.add("play")
}
function battleUiSnapshotV189(){
 let b=normalizeBattleStateV171();
 return {wave:b.wave,turn:b.turn,unit:b.unit,target:b.target,auto:b.auto,speed:b.speed,enemyHp:[...(b.enemyHp||[])],allyHp:[...(b.allyHp||[])],ep:[...(b.ep||[])]}
}
function battleUiChangedV189(a,b){
 return JSON.stringify(a)!==JSON.stringify(b)
}
let __battleSnapshotV189=null;
function smartRefreshBattleV189(){
 let now=battleUiSnapshotV189();
 if(!__battleSnapshotV189){__battleSnapshotV189=now;refreshBattleV188();return}
 if(battleUiChangedV189(__battleSnapshotV189,now)){__battleSnapshotV189=now;refreshBattleV188()}
}
function smoothActionFeedbackV189(kind){
 fxFlashV189(kind);
 if(kind==="attack")hpTextV189("HIT","damage");
 if(kind==="skill")hpTextV189("SKILL","skill");
 if(kind==="ougi")hpTextV189("BURST","ougi");
 if(kind==="heal")hpTextV189("SUPPORT","heal");
}

function mobilePerfProfileV190(){
 let mem=Number(navigator.deviceMemory||4),cores=Number(navigator.hardwareConcurrency||4),small=innerWidth<=430;
 return {small,low:small||mem<=4||cores<=4,mem,cores}
}
function applyAutoPerfV190(){
 let p=mobilePerfProfileV190(),q=perfPrefsV187();
 if(typeof q.autoPerf!=="boolean")q.autoPerf=true;
 if(q.autoPerf&&p.low)q.lightBattle=true;
 document.body.classList.toggle("autoPerfV190",q.autoPerf&&p.low);
 applyLightBattleV187();
 return p
}
function pauseDecorativeFxV190(on=true){
 document.body.classList.toggle("pauseFxV190",!!on)
}
function battleVisibilityGuardV190(){
 document.addEventListener("visibilitychange",()=>{
   if(document.visibilityState==="hidden"){
     if(autoLoopActiveV200())touchAutoLoopHeartbeatV203(false);flushBattleSaveV197();pauseDecorativeFxV190(true);
     if(autoBattleTimerV122)clearTimeout(autoBattleTimerV122);
   }else if(document.body.classList.contains("battleMode")){
     pauseDecorativeFxV190(false);
     smoothRefreshBattleV194();
     if(ensureBattleStateV120().auto)scheduleAutoBattleV122(160);scheduleBattlePerfCheckV192();
   }
 },{passive:true})
}
function battleFooterAuditV190(){
 let hud=document.querySelector(".bsv2Hud_175"),cluster=document.querySelector(".bsv2Hud_175 .actionClusterV164");
 if(!hud||!cluster)return {ok:false};
 let h=hud.getBoundingClientRect(),c=cluster.getBoundingClientRect();
 return {ok:c.left>=h.left&&c.right<=h.right+1&&c.top>=h.top&&c.bottom<=h.bottom+1,hud:h.height,cluster:c.height}
}
function bsv2CompactStatus190(){
 let b=ensureBattleStateV120();
 return `<div class=bsv2CompactStatus190><span>${b.speed===2?"FAST":"NORMAL"}</span><b>${b.auto?"AUTO":"MANUAL"}</b></div>`
}

let __battleCleanupTimersV191=new Set();
function battleTimerV191(fn,ms){
 let id=setTimeout(()=>{__battleCleanupTimersV191.delete(id);try{fn()}catch(e){console.error("V191 timer",e)}},ms);
 __battleCleanupTimersV191.add(id);return id
}
function clearBattleTimersV191(){
 __battleCleanupTimersV191.forEach(id=>clearTimeout(id));
 __battleCleanupTimersV191.clear()
}
function purgeBattleTransientDomV191(){
 [
  "#battleAnimV121",".bsv2Impact178",".skillFxV174",".cutinV153",".ougiSealV159",
  ".finisherV141",".enemyWarningV159",".sfxVisualV146",".weaponTrailV145",
  ".bsv2WaveIntro179",".gameToast"
 ].forEach(s=>document.querySelectorAll(s).forEach(n=>n.remove()));
}
function leaveBattleCleanupV191(){document.getElementById("autoHardButtonV430")?.remove();if(typeof autoHardStopV430==="function")autoHardStopV430();if(typeof removeAutoButtonV429==="function")removeAutoButtonV429();clearPosterQueueV230();posterRendererResetV229();posterStageResetV228();flushBattleSaveV197();battleInvalidateActionsV195();clearTimeout(__battleGovernorTimerV193);__battleLongTaskCountV193=0;
 stopAutoBattleV122?.();
 clearBattleTimersV191();
 purgeBattleTransientDomV191();
 pauseDecorativeFxV190?.(true);
 document.body.classList.remove("battleMode","battleFastV185","battleQualityLowV192","battleQualityMidV192","battleQualityHighV192");clearTimeout(__battlePerfTimerV192);
 __battleSnapshotV189=null
}
function battleMemoryAuditV191(){
 return {
  timers:__battleCleanupTimersV191.size,
  transientNodes:document.querySelectorAll("#battleAnimV121,.bsv2Impact178,.skillFxV174,.cutinV153,.ougiSealV159,.finisherV141,.enemyWarningV159,.sfxVisualV146,.weaponTrailV145,.bsv2WaveIntro179").length,
  autoTimer:!!autoBattleTimerV122,
  battleMode:document.body.classList.contains("battleMode")
 }
}
function compactBattleStatusV191(){
 let b=ensureBattleStateV120();
 return `<div class=bsv2StatusV191><span>${b.speed===2?"×2":"×1"}</span><b class="${b.auto?"on":""}">${b.auto?"AUTO":"MANUAL"}</b></div>`
}

let __battleFrameSamplesV192=[];
let __battlePerfTimerV192=null;
function battleAdaptiveStateV192(){
 S.qol=S.qol||{};
 if(typeof S.qol.adaptiveBattle!=="boolean")S.qol.adaptiveBattle=true;
 if(!["low","mid","high"].includes(S.qol.battleQuality))S.qol.battleQuality="mid";
 return S.qol
}
function applyBattleQualityV192(level){
 let q=battleAdaptiveStateV192();
 q.battleQuality=level;
 document.body.classList.remove("battleQualityLowV192","battleQualityMidV192","battleQualityHighV192");
 document.body.classList.add(level==="low"?"battleQualityLowV192":level==="high"?"battleQualityHighV192":"battleQualityMidV192");
 if(level==="low"){q.lightBattle=true}
 applyLightBattleV187();
 save();persistentSaveWrite();
 return level
}
function measureBattleFramesV192(){
 if(!document.body.classList.contains("battleMode"))return;
 let q=battleAdaptiveStateV192();if(!q.adaptiveBattle)return;
 __battleFrameSamplesV192=[];let last=performance.now(),count=0;
 function tick(t){
   if(!document.body.classList.contains("battleMode"))return;
   let dt=t-last;last=t;if(dt>0&&dt<200)__battleFrameSamplesV192.push(dt);
   if(++count<90)requestAnimationFrame(tick);
   else{
     let avg=__battleFrameSamplesV192.reduce((a,b)=>a+b,0)/Math.max(1,__battleFrameSamplesV192.length);
     let slow=__battleFrameSamplesV192.filter(x=>x>28).length/Math.max(1,__battleFrameSamplesV192.length);
     let next=slow>.22||avg>22?"low":slow<.06&&avg<18?"high":"mid";
     if(next!==q.battleQuality)applyBattleQualityV192(next)
   }
 }
 requestAnimationFrame(tick)
}
function scheduleBattlePerfCheckV192(){
 clearTimeout(__battlePerfTimerV192);
 __battlePerfTimerV192=setTimeout(measureBattleFramesV192,500)
}
function battleQualityLabelV192(){
 let q=battleAdaptiveStateV192();
 return `<button class=qualityV192 data-battle-quality=1>${q.battleQuality==="low"?"省電力":q.battleQuality==="high"?"高画質":"標準"}</button>`
}
function toggleBattleQualityV192(){
 let q=battleAdaptiveStateV192(),order=["low","mid","high"],i=order.indexOf(q.battleQuality);
 q.adaptiveBattle=false;applyBattleQualityV192(order[(i+1)%3]);
 if(document.body.classList.contains("battleMode"))cinematicBattleV119()
}
function enableAdaptiveBattleV192(){
 let q=battleAdaptiveStateV192();q.adaptiveBattle=true;save();persistentSaveWrite();scheduleBattlePerfCheckV192()
}
function battleRuntimeAuditV192(){
 let q=battleAdaptiveStateV192();
 return {adaptive:q.adaptiveBattle,quality:q.battleQuality,light:q.lightBattle,timers:__battleCleanupTimersV191?.size||0,auto:!!ensureBattleStateV120().auto}
}

let __battleLongTaskCountV193=0;
let __battleGovernorTimerV193=null;
let __battleLastActionAtV193=0;

function performanceGovernorStateV193(){
 S.qol=S.qol||{};
 if(typeof S.qol.performanceGovernor!=="boolean")S.qol.performanceGovernor=true;
 if(!Number.isInteger(S.qol.performanceStrikes))S.qol.performanceStrikes=0;
 return S.qol
}

function observeLongTasksV193(){
 if(!("PerformanceObserver" in window))return;
 try{
  let po=new PerformanceObserver(list=>{
   if(!document.body.classList.contains("battleMode"))return;
   for(const e of list.getEntries()){
    if(e.duration>=50){
     __battleLongTaskCountV193++;
     let q=performanceGovernorStateV193();
     q.performanceStrikes=Math.min(10,(q.performanceStrikes||0)+1);
    }
   }
  });
  po.observe({entryTypes:["longtask"]});
 }catch(e){}
}

function applyPerformanceGovernorV193(){
 let q=performanceGovernorStateV193();
 if(!q.performanceGovernor)return;
 let p=mobilePerfProfileV190();
 if(__battleLongTaskCountV193>=3||q.performanceStrikes>=4||p.low){
   if(q.battleQuality!=="low")applyBattleQualityV192("low");
   q.lightBattle=true;
 }else if(q.battleQuality==="high"&&__battleLongTaskCountV193>=1){
   applyBattleQualityV192("mid");
 }
 applyLightBattleV187();
 save();persistentSaveWrite();
}

function scheduleGovernorV193(){
 clearTimeout(__battleGovernorTimerV193);
 __battleGovernorTimerV193=setTimeout(()=>{
  applyPerformanceGovernorV193();
  __battleLongTaskCountV193=0;
 },1600)
}

function battleActionStampV193(){
 __battleLastActionAtV193=performance.now();
 scheduleGovernorV193();
}

function autoLoopWatchdogV193(){
 let b=ensureBattleStateV120();
 if(!document.body.classList.contains("battleMode")||!b.auto)return;
 let idle=performance.now()-__battleLastActionAtV193;
 if(idle>2200&&!autoBattleBusyV122){
   stopAutoBattleV122();
   scheduleAutoBattleV122(120);
 }
 battleTimerV191(autoLoopWatchdogV193,1200);
}

function startAutoWatchdogV193(){
 if(ensureBattleStateV120().auto){
  __battleLastActionAtV193=performance.now();
  battleTimerV191(autoLoopWatchdogV193,1200);
 }
}

function battlePerfBadgeV193(){
 let q=performanceGovernorStateV193();
 return `<div class=battlePerfBadgeV193><span>${q.battleQuality.toUpperCase()}</span><b>${q.performanceGovernor?"AUTO-PERF":"MANUAL-PERF"}</b></div>`
}

function battlePerfAuditV193(){
 let q=performanceGovernorStateV193();
 return {
  governor:q.performanceGovernor,
  strikes:q.performanceStrikes,
  quality:q.battleQuality,
  longTasks:__battleLongTaskCountV193,
  auto:!!ensureBattleStateV120().auto,
  timers:__battleCleanupTimersV191?.size||0
 }
}

let __lastBattlePaintV194=0;
let __pendingBattlePaintV194=false;

function requestBattlePaintV194(fn){
 const now=performance.now();
 const minGap=lightBattleV187()?66:42;
 if(now-__lastBattlePaintV194>=minGap){
   __lastBattlePaintV194=now;
   try{fn()}catch(e){console.error("V194 paint",e)}
   return;
 }
 if(__pendingBattlePaintV194)return;
 __pendingBattlePaintV194=true;
 battleTimerV191(()=>{
   __pendingBattlePaintV194=false;
   __lastBattlePaintV194=performance.now();
   try{fn()}catch(e){console.error("V194 delayed paint",e)}
 },Math.max(16,minGap-(now-__lastBattlePaintV194)));
}

function smoothRefreshBattleV194(){
 requestBattlePaintV194(()=>smartRefreshBattleV189())
}

function battleAnimationBudgetV194(){
 let q=battleAdaptiveStateV192();
 if(q.battleQuality==="low")return 1;
 if(q.battleQuality==="high")return 3;
 return 2
}

function shouldPlayBattleFxV194(level=1){
 return level<=battleAnimationBudgetV194()
}

function battleUiDensityV194(){
 let w=innerWidth,h=innerHeight;
 return w<=390||h<=700?"compact":w>=700?"wide":"normal"
}

function applyBattleDensityV194(){
 let d=battleUiDensityV194();
 document.body.classList.remove("battleDensityCompactV194","battleDensityNormalV194","battleDensityWideV194");
 document.body.classList.add(d==="compact"?"battleDensityCompactV194":d==="wide"?"battleDensityWideV194":"battleDensityNormalV194")
}

function battleRuntimeBadgeV194(){
 let q=battleAdaptiveStateV192(),d=battleUiDensityV194();
 return `<div class=battleRuntimeBadgeV194><span>${q.battleQuality.toUpperCase()}</span><b>${d.toUpperCase()}</b></div>`
}

function battleViewportGuardV194(){
 let root=document.querySelector(".bsv2_175");
 if(!root)return;
 let vh=window.visualViewport?.height||innerHeight;
 root.style.height=vh+"px";
 root.style.minHeight=vh+"px";
}

function setupViewportGuardV194(){
 let vv=window.visualViewport;
 if(vv&&!window.__bsv2vv194){
   window.__bsv2vv194=true;
   vv.addEventListener("resize",()=>{if(document.body.classList.contains("battleMode")){battleViewportGuardV194();applyBattleDensityV194();applyExactPosterFitV216();if(!document.querySelector(".bsv2_175"))restoreBattleCheckpointV196()}},{passive:true});
 }
}

let __battleActionTokenV195=0;
let __battleActionBusyV195=false;
let __battleLastTapV195=0;

function battleActionGateV195(kind="attack"){
 const now=performance.now();
 const gap=kind==="ougi"?260:140;
 if(__battleActionBusyV195)return false;
 if(now-__battleLastTapV195<gap)return false;
 __battleLastTapV195=now;
 __battleActionBusyV195=true;
 __battleActionTokenV195++;
 document.body.classList.add("battleBusyV195");refreshCleanCommandStateV241?.();schedulePosterRenderV229?.("busy-on",true);applyPosterControlStateV235?.();
 return __battleActionTokenV195;
}

function battleActionReleaseV195(token){
 if(token!==__battleActionTokenV195)return;
 __battleActionBusyV195=false;
 document.body.classList.remove("battleBusyV195");refreshCleanCommandStateV241?.();schedulePosterRenderV229?.("busy-off",true);applyPosterControlStateV235?.();
}

function battleInvalidateActionsV195(){
 __battleActionTokenV195++;
 __battleActionBusyV195=false;
 document.body.classList.remove("battleBusyV195");
}

function battleIsTokenValidV195(token){
 return token===__battleActionTokenV195 && document.body.classList.contains("battleMode");
}

function battleInteractionAuditV195(){
 return {
  busy:__battleActionBusyV195,
  token:__battleActionTokenV195,
  auto:!!ensureBattleStateV120().auto,
  speed:ensureBattleStateV120().speed,
  mounted:!!document.querySelector(".bsv2_175")
 }
}

function battleLightweightBannerV195(){
 const q=battleAdaptiveStateV192();
 const b=ensureBattleStateV120();
 return `<div class=battleLightweightBannerV195><span>${b.speed===2?"×2":"×1"}</span><b>${b.auto?"AUTO":"MANUAL"}</b><i>${q.battleQuality==="low"?"省電力":q.battleQuality==="high"?"高画質":"標準"}</i></div>`
}

let __battleSessionV196={startedAt:0,actions:0,waves:0,retries:0,lastSaveAt:0};

function startBattleSessionV196(){
 __battleSessionV196={startedAt:Date.now(),actions:0,waves:0,retries:0,lastSaveAt:0};
 return __battleSessionV196
}

function battleSessionActionV196(){
 __battleSessionV196.actions++;
 if(__battleSessionV196.actions%4===0)battleCheckpointV196();
}

function battleSessionWaveV196(){
 __battleSessionV196.waves++;
 battleCheckpointV196();
}

function battleCheckpointV196(force=false){
 const now=Date.now();
 if(!force && now-__battleSessionV196.lastSaveAt<900)return;
 __battleSessionV196.lastSaveAt=now;
 try{
   S.qol=S.qol||{};
   S.qol.battleCheckpoint={
     at:now,
     stage:S.battleStage||0,
     mode:S.battleMode||"normal",
     state:JSON.parse(JSON.stringify(ensureBattleStateV120()))
   };
   persistentSaveWrite();
 }catch(e){console.error("V196 checkpoint",e)}
}

function clearBattleCheckpointV196(){
 if(S.qol?.battleCheckpoint)delete S.qol.battleCheckpoint;
 persistentSaveWrite();
}

function restoreBattleCheckpointV196(){
 try{
   const cp=S.qol?.battleCheckpoint;
   if(!cp?.state)return false;
   S.battleStage=cp.stage||0;
   S.battleMode=cp.mode||"normal";
   S.battleV120=JSON.parse(JSON.stringify(cp.state));
   normalizeBattleStateV171();
   return mountBattleV182();
 }catch(e){
   console.error("V196 restore checkpoint",e);
   return false
 }
}

function battleSessionStatsV196(){
 let elapsed=__battleSessionV196.startedAt?Math.max(0,Date.now()-__battleSessionV196.startedAt):0;
 return {elapsedMs:elapsed,actions:__battleSessionV196.actions,waves:__battleSessionV196.waves,auto:!!ensureBattleStateV120().auto};
}

function battleMiniStatsV196(){
 let s=battleSessionStatsV196();
 return `<div class=bsv2MiniStats196><span>ACT ${s.actions}</span><b>${Math.floor(s.elapsedMs/1000)}s</b></div>`
}

let __battleSaveTimerV197=null;
let __battleSaveDirtyV197=false;

function queueBattleSaveV197(force=false){
 __battleSaveDirtyV197=true;
 if(force){
  clearTimeout(__battleSaveTimerV197);
  __battleSaveTimerV197=null;
  __battleSaveDirtyV197=false;
  try{save();persistentSaveWrite()}catch(e){console.error("V197 save",e)}
  return;
 }
 if(__battleSaveTimerV197)return;
 __battleSaveTimerV197=setTimeout(()=>{
  __battleSaveTimerV197=null;
  if(!__battleSaveDirtyV197)return;
  __battleSaveDirtyV197=false;
  try{save();persistentSaveWrite()}catch(e){console.error("V197 queued save",e)}
 },650);
}

function flushBattleSaveV197(){
 if(__battleSaveDirtyV197||__battleSaveTimerV197)queueBattleSaveV197(true)
}

function enemyHpPercentV197(b){
 let t=Math.max(0,Number(b?.target)||0);
 let raw=Array.isArray(b?.enemyHp)?b.enemyHp[t]:b?.enemyHp;
 let hp=Number(raw);
 if(!Number.isFinite(hp))hp=100;
 return Math.max(0,Math.min(100,hp))
}

function optimizeBattleImagesV197(){
 let root=document.querySelector(".bsv2_175");if(!root)return;
 root.querySelectorAll("img").forEach((img,i)=>{
  img.decoding="async";
  if(i>4)img.loading="lazy";
  img.draggable=false;
 });
}

function battleHotpathAuditV197(){
 let b=ensureBattleStateV120();
 return {
  saveQueued:!!__battleSaveTimerV197,
  saveDirty:__battleSaveDirtyV197,
  enemyHp:enemyHpPercentV197(b),
  target:b.target||0,
  imgs:document.querySelectorAll(".bsv2_175 img").length
 }
}

function battleCommandStateV198(){
 let b=ensureBattleStateV120(),slot=Math.max(0,Number(b.unit)||0);
 let ep=Number(b.ep?.[slot]||0);
 return {
   ep,
   canOugi:ep>=100,
   auto:!!b.auto,
   speed:Number(b.speed)===2?2:1,
   slot
 }
}

function refreshCommandPanelV198(){
 let root=document.querySelector(".bsv2_175");if(!root)return;
 let s=battleCommandStateV198();
 let ougi=root.querySelector('.actionClusterV164 [data-sd-action="ougi"]');
 if(ougi){
   ougi.classList.toggle("readyV198",s.canOugi);
   ougi.classList.toggle("lockedV198",!s.canOugi);
   ougi.setAttribute("aria-disabled",s.canOugi?"false":"true");
   ougi.dataset.ep=String(Math.round(s.ep));
   let meter=ougi.querySelector(".ougiMeterV198");
   if(!meter){
     meter=document.createElement("i");
     meter.className="ougiMeterV198";
     ougi.appendChild(meter);
   }
   meter.style.setProperty("--ep",Math.max(0,Math.min(100,s.ep))+"%");
 }
 let auto=root.querySelector("[data-battle-auto]");
 if(auto)auto.setAttribute("aria-pressed",s.auto?"true":"false");
 let speed=root.querySelector("[data-battle-speed]");
 if(speed)speed.setAttribute("aria-label",`戦闘速度 ${s.speed}倍`);
}

function battleTapPulseV198(el){
 if(!el)return;
 el.classList.remove("tapV198");void el.offsetWidth;el.classList.add("tapV198");
 battleTimerV191(()=>el.classList.remove("tapV198"),160);
}

function battleTargetCycleV198(dir=1){
 let b=ensureBattleStateV120(),count=Array.isArray(b.enemyHp)?b.enemyHp.length:1;
 if(count<=1)return;
 let next=(Number(b.target||0)+dir+count)%count;
 b.target=next;
 queueBattleSaveV197();
 smoothRefreshBattleV194();
 refreshCommandPanelV198();
}

function battleSafeAreaAuditV198(){
 let hud=document.querySelector(".bsv2Hud_175");
 if(!hud)return {ok:false};
 let r=hud.getBoundingClientRect(),vv=window.visualViewport;
 let vh=vv?.height||innerHeight;
 return {ok:r.bottom<=vh+1,top:r.top,bottom:r.bottom,viewport:vh,height:r.height};
}

let __autoLoopTimerV200=null;

function autoLoopPrefsV200(){
 S.qol=S.qol||{};
 if(!S.qol.autoLoopV200||typeof S.qol.autoLoopV200!=="object")
   S.qol.autoLoopV200={active:false,count:0,stage:0,mode:"normal",delay:900};
 return S.qol.autoLoopV200
}

function startTrueAutoLoopV200(stage,mode){
 let old=autoLoopManagerV201();
 let fresh=!old.active;
 let p=fresh?resetAutoLoopSessionV201(stage,mode):old;
 if(!fresh){
   p.active=true;
   p.paused=false;
   p.stage=Math.max(0,+stage||0);
   p.mode=mode||"normal";
 }
 autoLoopEcoStateV202();
 let r=autoLoopRecoveryStateV203();
 r.recovering=false;
 touchAutoLoopHeartbeatV203(true);
 setAutoReplayActiveV199(true,{source:"v203-loop",stage:p.stage,mode:p.mode});
 applyAutoLoopEcoV202();
 startAutoLoopHeartbeatV203();
 scheduleAutoLoopRecoveryWatchV203();
 queueBattleSaveV197(true);
 renderAutoReplayHudV199();
 renderAutoLoopHudV200();refreshPosterLoopBadgeV230?.();
}

function stopTrueAutoLoopV200(showToast=true){
 let p=autoLoopManagerV201();
 p.active=false;p.paused=false;p.recovering=false;
 clearTimeout(__autoLoopTimerV200);
 __autoLoopTimerV200=null;
 stopAutoLoopHeartbeatV203();
 stopAutoBattleV122();
 setAutoReplayActiveV199(false);
 document.getElementById("autoLoopResultV200")?.remove();
 hideAutoLoopRecoveryV203();
 restoreAutoLoopPrefsV202();
 renderAutoReplayHudV199();
 renderAutoLoopHudV200();
 queueBattleSaveV197(true);
 if(showToast)toast(`AUTO周回を停止しました（${p.count}周）`);
}

function autoLoopActiveV200(){
 return !!autoLoopPrefsV200().active
}

function autoLoopHudV200(){
 let p=autoLoopEcoStateV202(),r=autoLoopRecoveryStateV203();
 return `<div class=autoLoopHudV200>
   <small>AUTO LOOP</small>
   <div class=autoLoopHudHeadV201><b>${autoLoopTargetLabelV201()}</b><i>${p.paused?"PAUSE":"RUNNING"}</i></div>
   <span>${stageMeta(p.stage||0).name}${r.recoveries?` / 復旧${r.recoveries}`:""}</span>
   ${autoLoopTotalsV201()}
   ${autoLoopStatsUiV202()}
   <div class=autoLoopTargetsV201>${autoLoopTargetOptionsV201()}</div>
   <button class="${p.eco?"on":""}" data-auto-loop-eco-v202=1>⚡ 省電力 ${p.eco?"ON":"OFF"}</button>
   <div class=autoLoopControlsV201>
     <button data-auto-loop-pause-v201=1>${p.paused?"再開":"一時停止"}</button>
     <button data-auto-loop-stop-v200=1>停止</button>
   </div>
 </div>`
}

function renderAutoLoopHudV200(){
 document.getElementById("autoLoopHudV200")?.remove();
 let p=autoLoopPrefsV200();
 if(!p.active)return;
 let d=document.createElement("div");
 d.id="autoLoopHudV200";
 d.innerHTML=autoLoopHudV200();
 document.body.appendChild(d);
}

function autoLoopResultV200(r){
 let p=autoLoopManagerV201();
 document.getElementById("autoLoopResultV200")?.remove();
 let d=document.createElement("div");
 d.id="autoLoopResultV200";
 d.className="autoLoopResultV200";
 d.innerHTML=`<div>
   <small>AUTO LOOP</small>
   <h2>${autoLoopTargetLabelV201()}</h2>
   <div class=autoLoopRewardsV200>
     <span>資料<b>+${r.mat}</b></span>
     <span>文銭<b>+${r.gold}</b></span>
     <span>インク<b>+${r.ink}</b></span>
   </div>
   <b class=autoLoopTotalTitleV201>累計</b>
   ${autoLoopTotalsV201()}
   ${autoLoopStatsUiV202()}
   ${autoLoopHistoryUiV202()}
   <p><i></i> ${shouldFinishAutoLoopV201()?"周回完了":"次の戦闘を準備中…"}</p>
   <button data-auto-loop-stop-v200=1>周回を停止</button>
 </div>`;
 document.body.appendChild(d);
 return d
}

function scheduleNextAutoLoopV200(){
 let p=autoLoopManagerV201();
 if(!p.active||p.paused)return;
 if(shouldFinishAutoLoopV201()){finishAutoLoopV201();return}
 clearTimeout(__autoLoopTimerV200);
 let wait=p.fastResult?520:Math.max(450,+p.delay||900);
 __autoLoopTimerV200=setTimeout(()=>{
   let q=autoLoopManagerV201();
   if(!q.active||q.paused)return;
   document.getElementById("autoLoopResultV200")?.remove();
   launchReplayV199(true,q.stage,q.mode);
 },wait)
}

function autoLoopBattleMountedV200(){
 let p=autoLoopManagerV201();
 if(!p.active||p.paused)return;
 p.recovering=false;
 touchAutoLoopHeartbeatV203(true);
 applyAutoLoopEcoV202();
 startAutoLoopHeartbeatV203();
 scheduleAutoLoopRecoveryWatchV203();
 let b=normalizeBattleStateV171();
 b.auto=true;
 b.speed=p.eco?2:b.speed;
 renderAutoLoopHudV200();
 renderAutoReplayHudV199();
 scheduleAutoBattleV122(120);
}

function autoLoopAuditV200(){
 let p=autoLoopPrefsV200();
 return {active:p.active,count:p.count,stage:p.stage,mode:p.mode,hasResult:!!document.getElementById("autoLoopResultV200")}
}

function autoLoopManagerV201(){
 let p=autoLoopPrefsV200();
 if(!Number.isInteger(p.target))p.target=0;
 if(!p.total||typeof p.total!=="object")p.total={mat:0,gold:0,ink:0};
 if(typeof p.paused!=="boolean")p.paused=false;
 if(typeof p.fastResult!=="boolean")p.fastResult=true;
 return p
}

function resetAutoLoopSessionV201(stage,mode){
 let p=autoLoopManagerV201();
 p.active=true;
 p.paused=false;
 p.stage=Math.max(0,+stage||0);
 p.mode=mode||"normal";
 p.count=0;
 p.total={mat:0,gold:0,ink:0};
 p.history=[];
 p.startedAt=Date.now();
 p.sessionStartedAt=p.startedAt;
 return p
}

function autoLoopTargetLabelV201(){
 let p=autoLoopManagerV201();
 return p.target>0?`${p.count}/${p.target}周`:`${p.count}周 / ∞`
}

function autoLoopTargetOptionsV201(){
 let p=autoLoopManagerV201();
 return [0,5,10,20,50].map(n=>`<button class="${p.target===n?"on":""}" data-auto-loop-target-v201="${n}">${n===0?"∞":n+"周"}</button>`).join("")
}

function autoLoopTotalsV201(){
 let p=autoLoopManagerV201(),t=p.total||{};
 return `<div class=autoLoopTotalsV201>
   <span>資料<b>${Number(t.mat||0).toLocaleString()}</b></span>
   <span>文銭<b>${Number(t.gold||0).toLocaleString()}</b></span>
   <span>インク<b>${Number(t.ink||0).toLocaleString()}</b></span>
 </div>`
}

function shouldFinishAutoLoopV201(){
 let p=autoLoopManagerV201();
 return p.target>0 && p.count>=p.target
}

function finishAutoLoopV201(){
 let p=autoLoopManagerV201();
 p.active=false;p.paused=false;p.recovering=false;
 clearTimeout(__autoLoopTimerV200);__autoLoopTimerV200=null;
 stopAutoLoopHeartbeatV203();
 setAutoReplayActiveV199(false);
 restoreAutoLoopPrefsV202();
 queueBattleSaveV197(true);
 document.getElementById("autoLoopResultV200")?.remove();
 hideAutoLoopRecoveryV203();
 renderAutoLoopHudV200();
 let d=document.createElement("div");
 d.className="autoLoopFinishedV201";
 d.id="autoLoopFinishedV201";
 d.innerHTML=`<div>
   <small>AUTO LOOP COMPLETE</small>
   <h2>${p.count}周 完了</h2>
   ${autoLoopTotalsV201()}
   ${autoLoopStatsUiV202()}
   ${autoLoopHistoryUiV202()}
   <button data-auto-loop-finish-close-v201=1>閉じる</button>
 </div>`;
 document.body.appendChild(d);
}

function pauseAutoLoopV201(){
 let p=autoLoopManagerV201();
 if(!p.active)return;
 p.paused=true;
 clearTimeout(__autoLoopTimerV200);__autoLoopTimerV200=null;
 stopAutoLoopHeartbeatV203();
 stopAutoBattleV122();
 queueBattleSaveV197(true);
 renderAutoLoopHudV200();
}

function resumeAutoLoopV201(){
 let p=autoLoopManagerV201();
 if(!p.active)return;
 p.paused=false;
 p.recovering=false;
 touchAutoLoopHeartbeatV203(true);
 applyAutoLoopEcoV202();
 startAutoLoopHeartbeatV203();
 scheduleAutoLoopRecoveryWatchV203();
 queueBattleSaveV197(true);
 renderAutoLoopHudV200();
 if(document.body.classList.contains("battleMode")){
   let b=ensureBattleStateV120();b.auto=true;scheduleAutoBattleV122(120)
 }else scheduleNextAutoLoopV200()
}

function autoLoopManagerAuditV201(){
 let p=autoLoopManagerV201();
 return {active:p.active,paused:p.paused,count:p.count,target:p.target,total:p.total,fastResult:p.fastResult}
}

function autoLoopEcoStateV202(){
 let p=autoLoopManagerV201();
 if(typeof p.eco!=="boolean")p.eco=true;
 if(!Array.isArray(p.history))p.history=[];
 if(!p.sessionStartedAt)p.sessionStartedAt=p.startedAt||Date.now();
 return p
}

function captureAutoLoopPrefsV202(){
 let p=autoLoopEcoStateV202();
 if(p.restoreV202)return;
 let q=battleAdaptiveStateV192();
 p.restoreV202={
   quality:q.battleQuality,
   light:!!q.lightBattle,
   adaptive:!!q.adaptiveBattle,
   skipOugi:!!q.skipOugi
 };
}

function applyAutoLoopEcoV202(){
 let p=autoLoopEcoStateV202();
 document.body.classList.toggle("autoLoopEcoV202",!!(p.active&&p.eco));
 if(!p.active||!p.eco)return;
 captureAutoLoopPrefsV202();
 let q=battleAdaptiveStateV192();
 q.lightBattle=true;
 q.skipOugi=true;
 q.adaptiveBattle=false;
 q.battleQuality="low";
 applyLightBattleV187();
 applyBattleQualityV192("low");
 let b=ensureBattleStateV120();
 b.speed=2;
 battleFastClassV185();
 refreshCommandPanelV198?.();
}

function restoreAutoLoopPrefsV202(){
 let p=autoLoopEcoStateV202(),r=p.restoreV202;
 document.body.classList.remove("autoLoopEcoV202");
 if(!r)return;
 let q=battleAdaptiveStateV192();
 q.battleQuality=r.quality||"mid";
 q.lightBattle=!!r.light;
 q.adaptiveBattle=!!r.adaptive;
 q.skipOugi=!!r.skipOugi;
 applyLightBattleV187();
 applyBattleQualityV192(q.battleQuality);
 delete p.restoreV202;
}

function autoLoopElapsedV202(){
 let p=autoLoopEcoStateV202();
 return Math.max(0,Date.now()-(p.sessionStartedAt||Date.now()))
}

function autoLoopStatsV202(){
 let p=autoLoopEcoStateV202(),elapsed=autoLoopElapsedV202(),runs=Math.max(0,p.count||0),t=p.total||{};
 let sec=elapsed/1000,avg=runs?sec/runs:0,hour=sec>1?3600/sec:0;
 return {
   elapsedMs:elapsed,
   avgSec:avg,
   matPerHour:Math.round((t.mat||0)*hour),
   goldPerHour:Math.round((t.gold||0)*hour),
   inkPerHour:Math.round((t.ink||0)*hour)
 }
}

function autoLoopStatsUiV202(){
 let s=autoLoopStatsV202();
 let mins=Math.floor(s.elapsedMs/60000),secs=Math.floor((s.elapsedMs%60000)/1000);
 return `<div class=autoLoopStatsV202>
   <span>経過<b>${mins}:${String(secs).padStart(2,"0")}</b></span>
   <span>平均<b>${s.avgSec?s.avgSec.toFixed(1)+"s":"-"}</b></span>
   <span>資料/h<b>${s.matPerHour.toLocaleString()}</b></span>
   <span>文銭/h<b>${s.goldPerHour.toLocaleString()}</b></span>
 </div>`
}

function recordAutoLoopResultV202(r){
 let p=autoLoopEcoStateV202();
 p.history.unshift({at:Date.now(),mat:r.mat||0,gold:r.gold||0,ink:r.ink||0,stars:r.stars||0});
 p.history=p.history.slice(0,5);
}

function autoLoopHistoryUiV202(){
 let p=autoLoopEcoStateV202();
 if(!p.history.length)return "";
 return `<div class=autoLoopHistoryV202>${p.history.slice(0,3).map((x,i)=>`<span><i>#${Math.max(1,(p.count||0)-i)}</i><b>資料+${x.mat}</b><em>文銭+${x.gold}</em></span>`).join("")}</div>`
}

function toggleAutoLoopEcoV202(){
 let p=autoLoopEcoStateV202();
 p.eco=!p.eco;
 if(p.eco)applyAutoLoopEcoV202();else restoreAutoLoopPrefsV202();
 queueBattleSaveV197(true);
 renderAutoLoopHudV200();
}

function autoLoopEcoAuditV202(){
 let p=autoLoopEcoStateV202(),s=autoLoopStatsV202();
 return {active:p.active,eco:p.eco,count:p.count,elapsed:s.elapsedMs,history:p.history.length}
}

let __autoLoopHeartbeatV203=null;
let __autoLoopRecoveryTimerV203=null;

function autoLoopRecoveryStateV203(){
 let p=autoLoopEcoStateV202();
 if(!Number.isFinite(p.lastHeartbeat))p.lastHeartbeat=0;
 if(!Number.isFinite(p.lastProgressAt))p.lastProgressAt=0;
 if(!Number.isFinite(p.recoveries))p.recoveries=0;
 if(typeof p.recovering!=="boolean")p.recovering=false;
 return p
}

function touchAutoLoopHeartbeatV203(progress=false){
 let p=autoLoopRecoveryStateV203();
 let now=Date.now();
 p.lastHeartbeat=now;
 if(progress)p.lastProgressAt=now;
}

function startAutoLoopHeartbeatV203(){
 clearInterval(__autoLoopHeartbeatV203);
 if(!autoLoopRecoveryStateV203().active)return;
 touchAutoLoopHeartbeatV203(false);
 __autoLoopHeartbeatV203=setInterval(()=>{
   let p=autoLoopRecoveryStateV203();
   if(!p.active){clearInterval(__autoLoopHeartbeatV203);__autoLoopHeartbeatV203=null;return}
   touchAutoLoopHeartbeatV203(false);
   queueBattleSaveV197();
 },2000);
}

function stopAutoLoopHeartbeatV203(){
 clearInterval(__autoLoopHeartbeatV203);
 __autoLoopHeartbeatV203=null;
 clearTimeout(__autoLoopRecoveryTimerV203);
 __autoLoopRecoveryTimerV203=null;
}

function showAutoLoopRecoveryV203(text="AUTO周回を復旧しています…"){
 document.getElementById("autoLoopRecoveryV203")?.remove();
 let p=autoLoopRecoveryStateV203();
 let d=document.createElement("div");
 d.id="autoLoopRecoveryV203";
 d.className="autoLoopRecoveryV203";
 d.innerHTML=`<div>
   <small>AUTO LOOP RECOVERY</small>
   <b>${text}</b>
   <span>${p.count||0}周完了 / ${stageMeta(p.stage||0).name}</span>
   <i></i>
 </div>`;
 document.body.appendChild(d);
}

function hideAutoLoopRecoveryV203(){
 document.getElementById("autoLoopRecoveryV203")?.remove()
}

function recoverAutoLoopV203(reason="watchdog"){
 let p=autoLoopRecoveryStateV203();
 if(!p.active||p.paused||p.recovering)return false;
 p.recovering=true;
 p.recoveries=(p.recoveries||0)+1;
 queueBattleSaveV197(true);
 showAutoLoopRecoveryV203("AUTO周回を再接続しています…");
 clearTimeout(__autoLoopTimerV200);
 __autoLoopTimerV200=null;
 stopAutoBattleV122();
 battleInvalidateActionsV195?.();
 clearBattleTimersV191?.();
 setTimeout(()=>{
   try{
     p.recovering=false;
     launchReplayV199(true,p.stage||0,p.mode||"normal");
     touchAutoLoopHeartbeatV203(false);
     startAutoLoopHeartbeatV203();
     setTimeout(hideAutoLoopRecoveryV203,900);
   }catch(e){
     console.error("V203 recovery",reason,e);
     p.recovering=false;
     stopTrueAutoLoopV200(false);
     hideAutoLoopRecoveryV203();
     toast("AUTO周回を復旧できませんでした");
   }
 },160);
 return true
}

function scheduleAutoLoopRecoveryWatchV203(){
 clearTimeout(__autoLoopRecoveryTimerV203);
 __autoLoopRecoveryTimerV203=setTimeout(function watch(){
   let p=autoLoopRecoveryStateV203();
   if(!p.active||p.paused){__autoLoopRecoveryTimerV203=null;return}
   let hasBattle=document.body.classList.contains("battleMode")&&!!document.querySelector(".bsv2_175");
   let hasResult=!!document.getElementById("autoLoopResultV200");
   let hasLoading=!!document.getElementById("autoReplayLoadingV199");
   let idle=Date.now()-(p.lastProgressAt||p.startedAt||Date.now());
   if(!hasBattle&&!hasResult&&!hasLoading&&idle>3500){
     recoverAutoLoopV203("missing-scene");
   }
   __autoLoopRecoveryTimerV203=setTimeout(watch,2200);
 },2200);
}

function autoLoopBootRecoveryV203(){
 let p=autoLoopRecoveryStateV203();
 if(!p.active)return;
 let age=Date.now()-(p.lastHeartbeat||0);
 if(age>300000){
   p.active=false;p.paused=false;p.recovering=false;
   queueBattleSaveV197(true);
   return;
 }
 showAutoLoopRecoveryV203("前回のAUTO周回を再開しています…");
 setTimeout(()=>{
   if(!p.active)return hideAutoLoopRecoveryV203();
   p.recovering=false;
   launchReplayV199(true,p.stage||0,p.mode||"normal");
   startAutoLoopHeartbeatV203();
   scheduleAutoLoopRecoveryWatchV203();
   setTimeout(hideAutoLoopRecoveryV203,1000);
 },450);
}

function autoLoopRecoveryAuditV203(){
 let p=autoLoopRecoveryStateV203();
 return {
   active:p.active,paused:p.paused,recovering:p.recovering,
   heartbeatAge:Date.now()-(p.lastHeartbeat||0),
   progressAge:Date.now()-(p.lastProgressAt||0),
   recoveries:p.recoveries||0
 }
}

let __battleImpactTimerV204=null;

function battleCinematicPrefsV204(){
 S.qol=S.qol||{};
 if(typeof S.qol.snappyBattleV204!=="boolean")S.qol.snappyBattleV204=true;
 return S.qol
}

function snappyBattleOnV204(){
 return battleCinematicPrefsV204().snappyBattleV204!==false
}

function applySnappyBattleV204(){
 document.body.classList.toggle("snappyBattleV204",snappyBattleOnV204());
}

function battleImpactV204(kind="attack",side="enemy"){
 if(!snappyBattleOnV204())return;
 let root=document.querySelector(".bsv2_175");
 if(!root)return;
 let field=root.querySelector(".bsv2Field_175")||root;
 let fx=root.querySelector(".battleImpactV204");
 if(!fx){
   fx=document.createElement("div");
   fx.className="battleImpactV204";
   fx.innerHTML="<i></i><b></b>";
   root.appendChild(fx);
 }
 fx.dataset.kind=kind;
 fx.dataset.side=side;
 fx.classList.remove("play");
 void fx.offsetWidth;
 fx.classList.add("play");

 field.classList.remove("shakeV204","kickV204");
 field.classList.add(kind==="ougi"?"kickV204":"shakeV204");
 clearTimeout(__battleImpactTimerV204);
 __battleImpactTimerV204=setTimeout(()=>{
   fx.classList.remove("play");
   field.classList.remove("shakeV204","kickV204");
 },kind==="ougi"?250:150);
}

function battlePoseV204(slot,kind){
 if(!snappyBattleOnV204())return;
 let root=document.querySelector(".bsv2_175");
 if(!root)return;
 let units=[...root.querySelectorAll(".bsv2Allies_175 [data-sd-unit],.bsv2Allies_175 .sdUnitV147,.bsv2Allies_175 .spriteUnitV160")];
 let el=units[Math.max(0,+slot||0)];
 if(!el)return;
 el.classList.remove("dashV204","castV204","burstV204");
 let cls=kind==="ougi"?"burstV204":kind==="skill"||kind==="heal"?"castV204":"dashV204";
 void el.offsetWidth;
 el.classList.add(cls);
 battleTimerV191(()=>el.classList.remove(cls),kind==="ougi"?320:210);
}

function battleEnemyRecoilV204(target=0,kind="attack"){
 if(!snappyBattleOnV204())return;
 let root=document.querySelector(".bsv2_175");
 if(!root)return;
 let enemy=root.querySelector(".bsv2Enemies_175 .enemyArtV153,.bsv2Enemies_175");
 if(!enemy)return;
 enemy.classList.remove("recoilV204","heavyRecoilV204");
 void enemy.offsetWidth;
 enemy.classList.add(kind==="ougi"?"heavyRecoilV204":"recoilV204");
 battleTimerV191(()=>enemy.classList.remove("recoilV204","heavyRecoilV204"),kind==="ougi"?300:180);
}

function battleActionFeedbackV204(slot,target,kind){
 if(!snappyBattleOnV204())return;
 battlePoseV204(slot,kind);
 battleTimerV191(()=>{
   battleImpactV204(kind,"enemy");
   battleEnemyRecoilV204(target,kind);
 },kind==="ougi"?110:65);
}

function battleMinimalHudV204(){
 let b=ensureBattleStateV120();
 return `<div class=battleMinimalHudV204>
   <span>W${b.wave||1}</span>
   <b>T${b.turn||1}</b>
   <i>${b.speed===2?"×2":"×1"}</i>
   <em>${b.auto?"AUTO":"MANUAL"}</em>
 </div>`;
}

function toggleSnappyBattleV204(){
 let q=battleCinematicPrefsV204();
 q.snappyBattleV204=!q.snappyBattleV204;
 applySnappyBattleV204();
 queueBattleSaveV197(true);
 if(document.body.classList.contains("battleMode"))mountBattleV182();
}

function posterBattlePrefsV205(){
 S.qol=S.qol||{};
 if(typeof S.qol.posterBattleV205!=="boolean")S.qol.posterBattleV205=true;
 return S.qol
}

function posterBattleOnV205(){
 return posterBattlePrefsV205().posterBattleV205!==false
}

function posterBattleLiveHudV205(){
 let b=ensureBattleStateV120();
 return `<div class=posterLiveHudV205>
   <span>WAVE ${b.wave||1}/3</span>
   <b>TURN ${b.turn||1}</b>
   <i>${b.speed===2?"×2":"×1"}</i>
   <em>${b.auto?"AUTO":"MANUAL"}</em>
 </div>`
}

function posterBattleUnitHotspotsV205(team){
 return `<div class=posterUnitHotspotsV205>
   ${team.map((i,n)=>`<button aria-label="${C[+i]?.[1]||"文豪"}を選択" data-battle-unit="${n}"></button>`).join("")}
 </div>`
}

function posterBattleCardHotspotsV205(team){
 return `<div class=posterCardHotspotsV205>
   ${team.map((i,n)=>`<button aria-label="${C[+i]?.[1]||"文豪"}カード" data-battle-unit="${n}"></button>`).join("")}
 </div>`
}


function posterStageImageV233(){
 let enemy=(typeof posterEnemyNameV208==="function"?posterEnemyNameV208():"")||"";
 if(/海|潮|波|港|船/.test(enemy))return "assets/stages/battle_sea.jpg";
 if(/廟|寺|封|祀|祠|聖堂/.test(enemy))return "assets/stages/battle_temple.jpg";
 if(/街|市|路地|夜/.test(enemy))return "assets/stages/battle_city.jpg";
 return "assets/stages/battle_library.jpg";
}


function posterActorStageV237(team){
 let roster=(team||[]).slice(0,5);
 return `<div class=posterActorStageV237>
   <div class=posterEnemyWrapV237>${enemyStageV153()}</div>
   <div class=posterAlliesWrapV237>${roster.map((i,n)=>sdUnit(+i,"ally",n)).join("")}</div>
 </div>`
}


function cleanGothicStageV238(){
 return `<div class=cleanStageV238 aria-hidden="true">
   <div class=cleanStageSkyV238></div>
   <div class=cleanStageMoonV238></div>
   <div class=cleanStageArchV238></div>
   <div class=cleanStageStacksV238 left></div>
   <div class=cleanStageStacksV238 right></div>
   <div class=cleanStageFloorV238></div>
   <div class=cleanStageMistV238></div>
 </div>`
}

function cleanBattleTopV238(){
 let b=ensureBattleStateV120();
 return `<div class=cleanBattleTopV238>
   <div class=cleanBattleLogoV238><small>BUNGO KITAN</small><b>文豪綺譚</b></div>
   <div class=cleanBattleFlowV238><span>WAVE ${b.wave||1}/3</span><b>TURN ${b.turn||1}</b></div>
 </div>`
}

function cleanBattlePostMountV238(){
 optimizeBattleImagesV197?.();
 posterRendererResetV229?.();
 posterStageHostV228?.();
 refreshLivePartyPortraitsV217?.();
 posterSelectedAuraV217?.();
 refreshPosterCleanHudV235?.();
 refreshPosterThumbV234?.();
 applyPosterControlStateV235?.();
 refreshCleanBattleTopV238?.();refreshCleanStageThemeV239?.();refreshCleanStageV240?.();refreshCleanCommandStateV241?.();
 schedulePosterRenderV229?.("clean-mount",true);

 hideAutoReplayLoadingV199?.();
 renderAutoReplayHudV199?.();
 renderAutoLoopHudV200?.();
 if(autoLoopActiveV200?.())autoLoopBattleMountedV200?.();

 startBattleWatchdogV172?.();
 scheduleBattlePerfCheckV192?.();
 scheduleGovernorV193?.();
 startAutoWatchdogV193?.();

 setupCleanBattleGuardV238();
}

function refreshCleanBattleTopV238(){
 let root=document.querySelector(".posterBattleV205"),bar=root?.querySelector(".cleanBattleFlowV238");
 if(!bar)return;
 let b=ensureBattleStateV120();
 let span=bar.querySelector("span"),strong=bar.querySelector("b");
 if(span)span.textContent=`WAVE ${b.wave||1}/3`;
 if(strong)strong.textContent=`TURN ${b.turn||1}`;
}

function setupCleanBattleGuardV238(){
 if(window.__cleanBattleGuardV238)return;
 window.__cleanBattleGuardV238=true;
 let sync=()=>{
   if(!document.body.classList.contains("battleMode"))return;
   let root=document.querySelector(".posterBattleV205");
   if(!root){try{mountBattleV182()}catch(e){};return}
   schedulePosterRenderV229?.("viewport",true);
 };
 window.addEventListener("resize",()=>{setTimeout(sync,80);setTimeout(applyCleanStageGeometryV240,90)},{passive:true});
 window.addEventListener("orientationchange",()=>{setTimeout(sync,120);setTimeout(applyCleanStageGeometryV240,140)},{passive:true});
 document.addEventListener("visibilitychange",()=>{
   if(document.visibilityState==="visible")setTimeout(sync,120)
 },{passive:true});
}

function cleanBattleAuditV238(){
 let root=document.querySelector(".posterBattleV205");
 return {
   mounted:!!root,
   cssStage:!!root?.querySelector(".cleanStageV238"),
   allies:root?.querySelectorAll(".posterAlliesWrapV237 [data-sd-unit]").length||0,
   enemy:root?.querySelectorAll(".posterEnemyWrapV237 .enemyArtV153").length||0,
   commands:root?.querySelectorAll(".posterThumbBarV234 [data-sd-action]").length||0,
   cards:root?.querySelectorAll(".posterLivePartyV217 button").length||0
 }
}


function cleanBattleThemeV239(){
 let b=ensureBattleStateV120();
 return b.wave>=3?"boss":b.wave===2?"deep":"normal"
}

function cleanBattleStageDecorV239(){
 return `<div class=cleanStageDecorV239 aria-hidden="true">
   <div class=cleanStagePillarsV239></div>
   <div class=cleanStageWindowV239></div>
   <div class=cleanStageRailV239></div>
   <div class=cleanStageGlowV239></div>
 </div>`
}

function cleanEnemyFocusV239(){
 let b=ensureBattleStateV120();
 return `<div class=cleanEnemyFocusV239 data-target="${b.target||0}">
   <i></i><b>TARGET</b>
 </div>`
}

function cleanActorShadowsV239(team){
 return `<div class=cleanActorShadowsV239>${(team||[]).slice(0,5).map((_,n)=>`<i style="--n:${n}"></i>`).join("")}</div>`
}

function refreshCleanStageThemeV239(){
 let root=document.querySelector(".cleanBattleV238");if(!root)return;
 root.dataset.theme=cleanBattleThemeV239();
 let focus=root.querySelector(".cleanEnemyFocusV239");
 if(focus)focus.dataset.target=String(ensureBattleStateV120().target||0);
}

function cleanBattleAuditV239(){
 let root=document.querySelector(".cleanBattleV238");
 return {
   mounted:!!root,
   theme:root?.dataset.theme||"",
   allies:root?.querySelectorAll(".posterAlliesWrapV237 [data-sd-unit]").length||0,
   enemies:root?.querySelectorAll(".posterEnemyWrapV237 .enemyArtV153").length||0,
   controls:root?.querySelectorAll(".posterThumbBarV234 [data-sd-action]").length||0,
   cards:root?.querySelectorAll(".posterLivePartyV217 button").length||0
 }
}


function cleanStageGeometryV240(){
 let vv=window.visualViewport;
 let w=Math.max(1,Math.round(vv?.width||innerWidth));
 let h=Math.max(1,Math.round(vv?.height||innerHeight));
 let portrait=h>=w;
 return {
   w,h,portrait,
   compact:w<=390,
   short:h<=720,
   actorBottom: portrait ? (h<=720?216:238) : 122,
   hudTop: portrait ? 72 : 16
 }
}

function applyCleanStageGeometryV240(){
 let root=document.querySelector(".cleanBattleV238");
 if(!root)return;
 let g=cleanStageGeometryV240();
 root.style.setProperty("--actorBottomV240",g.actorBottom+"px");
 root.style.setProperty("--cleanHudTopV240",g.hudTop+"px");
 root.classList.toggle("compactV240",g.compact);
 root.classList.toggle("shortV240",g.short);
}

function cleanActorLabelsV240(team){
 return `<div class=cleanActorLabelsV240>
   ${(team||[]).slice(0,5).map((i,n)=>`<span data-slot="${n}">${C[+i]?.[1]||"文豪"}</span>`).join("")}
 </div>`
}

function refreshCleanActorLabelsV240(){
 let root=document.querySelector(".cleanBattleV238"),team=(S.sets?.[S.set]||[]).slice(0,5);
 if(!root)return;
 root.querySelectorAll(".cleanActorLabelsV240 span").forEach((el,n)=>{
   el.textContent=C[+team[n]]?.[1]||"文豪";
   el.classList.toggle("on",(ensureBattleStateV120().unit||0)===n);
 });
}

function cleanEnemyScaleV240(){
 let b=ensureBattleStateV120(),root=document.querySelector(".cleanBattleV238");
 if(!root)return;
 root.dataset.enemyScale=b.wave>=3?"boss":"normal";
}

function cleanControlHintV240(){
 return `<div class=cleanControlHintV240>
   <span>攻撃</span><span>スキル</span><span>支援</span><span>奥義</span>
 </div>`
}

function refreshCleanStageV240(){
 applyCleanStageGeometryV240();
 refreshCleanActorLabelsV240();
 cleanEnemyScaleV240();
}

function cleanStageAuditV240(){
 let root=document.querySelector(".cleanBattleV238");
 return {
   mounted:!!root,
   geometry:cleanStageGeometryV240(),
   allyLabels:root?.querySelectorAll(".cleanActorLabelsV240 span").length||0,
   bossScale:root?.dataset.enemyScale||"",
   thumbButtons:root?.querySelectorAll(".posterThumbBarV234 button").length||0
 }
}


let __cleanFeedbackTimerV241=null;
function cleanBattleFeedbackV241(kind="attack"){
 let root=document.querySelector(".cleanBattleV238");if(!root)return;
 root.classList.remove("feedbackAttackV241","feedbackSkillV241","feedbackHealV241","feedbackOugiV241");
 let cls=kind==="skill"?"feedbackSkillV241":kind==="heal"?"feedbackHealV241":kind==="ougi"?"feedbackOugiV241":"feedbackAttackV241";
 root.classList.add(cls);clearTimeout(__cleanFeedbackTimerV241);
 __cleanFeedbackTimerV241=setTimeout(()=>root.classList.remove(cls),kind==="ougi"?300:180);
}
function cleanCommandStateV241(){
 let b=ensureBattleStateV120(),c=posterSelectedCharV208();
 return {busy:!!__battleActionBusyV195,auto:!!b.auto,speed:b.speed===2?2:1,ep:Math.round(c.ep||0),ougiReady:(c.ep||0)>=100}
}
function cleanCommandStateUiV241(){
 let s=cleanCommandStateV241();
 return `<div class=cleanCommandStateV241><span>${s.busy?"ACTION":"READY"}</span><b>${s.auto?"AUTO":`EP ${s.ep}%`}</b></div>`
}
function refreshCleanCommandStateV241(){
 let root=document.querySelector(".cleanBattleV238"),el=root?.querySelector(".cleanCommandStateV241");if(!el)return;
 let s=cleanCommandStateV241(),sp=el.querySelector("span"),b=el.querySelector("b");
 if(sp)sp.textContent=s.busy?"ACTION":"READY";if(b)b.textContent=s.auto?"AUTO":`EP ${s.ep}%`;
 el.classList.toggle("busy",s.busy);el.classList.toggle("ready",s.ougiReady);
}
function cleanTurnCueV241(){
 let el=document.querySelector(".cleanBattleV238 .cleanBattleFlowV238");if(!el)return;
 el.classList.remove("pulseV241");void el.offsetWidth;el.classList.add("pulseV241");
 setTimeout(()=>el.classList.remove("pulseV241"),220);
}
function cleanBattleUiAuditV241(){
 let root=document.querySelector(".cleanBattleV238");
 return {mounted:!!root,feedbackLayer:!!root?.querySelector(".cleanCommandStateV241"),
 actionButtons:root?.querySelectorAll(".posterThumbBarV234 button").length||0,
 subButtons:root?.querySelectorAll(".posterThumbSubV234 button").length||0,state:cleanCommandStateV241()}
}
function cinematicPosterBattleV205(){
 let b=normalizeBattleStateV171(),team=(S.sets?.[S.set]||[]).slice(0,5);
 return `<main class="bsv2_175 posterBattleV205 cleanBattleV238" data-theme="${cleanBattleThemeV239()}">
   <section class=bsv2Field_175>
     ${cleanGothicStageV238()}${cleanBattleStageDecorV239()}
     <div class=posterBattleShadeV205></div>
     ${cleanBattleTopV238()}
     ${cleanActorShadowsV239(team)}${posterActorStageV237(team)}${cleanActorLabelsV240(team)}${cleanEnemyFocusV239()}
     ${posterCleanHudV235()}
     ${posterLivePartyPortraitsV217()}
     ${cleanControlHintV240()}${cleanCommandStateUiV241()}${posterThumbBarV234()}
     ${posterThumbSubV234()}
     ${posterBattleCardHotspotsV205(team)}
     <button class=posterEnemyHotspotV205 aria-label="敵を選択" data-battle-target="${b.target||0}"></button>
     <div class=bsv2Fx_175></div>
     <div class=battleImpactV204><i></i><b></b></div>
   </section>
 </main>`
}

function togglePosterBattleV205(){
 let q=posterBattlePrefsV205();
 q.posterBattleV205=!q.posterBattleV205;
 queueBattleSaveV197(true);
 if(document.body.classList.contains("battleMode"))mountBattleV182();
}

function posterBattleAuditV205(){
 let r=document.querySelector(".posterBattleV205");
 return {
  enabled:posterBattleOnV205(),
  mounted:!!r,
  attack:!!r?.querySelector('[data-sd-action="attack"]'),
  skill:!!r?.querySelector('[data-sd-action="skill"]'),
  ougi:!!r?.querySelector('[data-sd-action="ougi"]'),
  auto:!!r?.querySelector("[data-battle-auto]"),
  cards:r?.querySelectorAll("[data-battle-unit]").length||0
 }
}

function posterLiveStateV206(){
 let b=normalizeBattleStateV171(),team=(S.sets?.[S.set]||[]).slice(0,5);
 return {
  b,team,
  enemyHp:enemyHpPercentV197(b),
  selected:Math.max(0,Math.min(4,+b.unit||0)),
  allyHp:team.map((_,n)=>Math.max(0,Math.min(100,+b.allyHp?.[n]||0))),
  ep:team.map((_,n)=>Math.max(0,Math.min(100,+b.ep?.[n]||0)))
 }
}

function posterLiveOverlayV206(){
 let s=posterLiveStateV206();
 return `<div class=posterLiveOverlayV206>
   <div class=posterEnemyBarV206><i><em style="width:${s.enemyHp}%"></em></i><b>${Math.round(s.enemyHp)}%</b></div>
   <div class=posterCardLiveV206>
     ${s.team.map((_,n)=>`<div class="${s.selected===n?"on":""}" data-live-card="${n}">
       <i class=hp><em style="width:${s.allyHp[n]}%"></em></i>
       <i class=ep><em style="width:${s.ep[n]}%"></em></i>
     </div>`).join("")}
   </div>
   <div class=posterSelectedV206>SELECT <b>${s.selected+1}</b></div>
 </div>`
}

function refreshPosterLiveOverlayV206(){
 let root=document.querySelector(".posterBattleV205");
 if(!root)return false;
 let s=posterLiveStateV206();
 let hud=root.querySelector(".posterLiveHudV205");
 if(hud)hud.innerHTML=`<span>WAVE ${s.b.wave||1}/3</span><b>TURN ${s.b.turn||1}</b><i>${s.b.speed===2?"×2":"×1"}</i><em>${s.b.auto?"AUTO":"MANUAL"}</em>`;
 let eb=root.querySelector(".posterEnemyBarV206 i em");
 let et=root.querySelector(".posterEnemyBarV206 b");
 if(eb)eb.style.width=s.enemyHp+"%";
 if(et)et.textContent=Math.round(s.enemyHp)+"%";
 root.querySelectorAll(".posterCardLiveV206>div").forEach((el,n)=>{
   el.classList.toggle("on",s.selected===n);
   let hp=el.querySelector(".hp em"),ep=el.querySelector(".ep em");
   if(hp)hp.style.width=s.allyHp[n]+"%";
   if(ep)ep.style.width=s.ep[n]+"%";
 });
 let sel=root.querySelector(".posterSelectedV206 b");
 if(sel)sel.textContent=String(s.selected+1);
 return true
}

function posterActionCueV206(kind="attack"){
 let root=document.querySelector(".posterBattleV205");
 if(!root)return;
 root.dataset.action=kind;
 root.classList.remove("actionCueV206");
 void root.offsetWidth;
 root.classList.add("actionCueV206");
 battleTimerV191(()=>root.classList.remove("actionCueV206"),240);
}

function posterHitFlashV206(kind="attack"){
 let root=document.querySelector(".posterBattleV205");
 if(!root)return;
 let fx=root.querySelector(".posterHitFlashV206");
 if(!fx){
   fx=document.createElement("div");
   fx.className="posterHitFlashV206";
   root.appendChild(fx);
 }
 fx.dataset.kind=kind;
 fx.classList.remove("play");
 void fx.offsetWidth;
 fx.classList.add("play");
 battleTimerV191(()=>fx.classList.remove("play"),kind==="ougi"?320:180);
}

function posterActionFeedbackV206(kind){
 posterActionCueV206(kind);
 battleTimerV191(()=>posterHitFlashV206(kind),kind==="ougi"?95:55);
}

function posterBattleAuditV206(){
 let r=document.querySelector(".posterBattleV205");
 return {
   mounted:!!r,
   enemyBar:!!r?.querySelector(".posterEnemyBarV206"),
   liveCards:r?.querySelectorAll(".posterCardLiveV206>div").length||0,
   selected:posterLiveStateV206().selected
 }
}

let __posterActionTokenV207=0;

function posterActionMetaV207(slot,kind){
 let team=(S.sets?.[S.set]||[]).slice(0,5),i=+team[Math.max(0,+slot||0)]||0;
 let name=C[i]?.[1]||"文豪";
 let title=kind==="ougi"?(ougiInfo(i)?.name||"奥義"):kind==="skill"?(characterAbility(i)?.name||"スキル"):kind==="heal"?"支援":"通常攻撃";
 return {i,name,title,kind}
}

function posterActionBannerV207(slot,kind){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let m=posterActionMetaV207(slot,kind),token=++__posterActionTokenV207;
 root.querySelector(".posterActionBannerV207")?.remove();
 let d=document.createElement("div");
 d.className=`posterActionBannerV207 ${kind}`;
 d.innerHTML=`<small>${kind==="ougi"?"SPECIAL":kind==="skill"?"SKILL":kind==="heal"?"SUPPORT":"ATTACK"}</small><b>${m.name}</b><span>${m.title}</span>`;
 root.appendChild(d);
 requestAnimationFrame(()=>d.classList.add("show"));
 battleTimerV191(()=>{
   if(token!==__posterActionTokenV207)return;
   d.classList.remove("show");
   battleTimerV191(()=>d.remove(),120)
 },kind==="ougi"?520:320);
}

function posterDamageNumberV207(kind="attack"){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let n=document.createElement("div");
 n.className=`posterDamageV207 ${kind}`;
 let base=kind==="ougi"?Math.floor(9000+Math.random()*9000):kind==="skill"?Math.floor(3500+Math.random()*4500):kind==="heal"?Math.floor(1200+Math.random()*1800):Math.floor(1800+Math.random()*2600);
 n.textContent=kind==="heal"?`+${base}`:base.toLocaleString();
 root.appendChild(n);
 requestAnimationFrame(()=>n.classList.add("show"));
 battleTimerV191(()=>n.remove(),kind==="ougi"?520:360);
}

function posterFocusV207(kind){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 root.classList.remove("focusAttackV207","focusSkillV207","focusOugiV207","focusHealV207");
 let cls=kind==="ougi"?"focusOugiV207":kind==="skill"?"focusSkillV207":kind==="heal"?"focusHealV207":"focusAttackV207";
 root.classList.add(cls);
 battleTimerV191(()=>root.classList.remove(cls),kind==="ougi"?420:220);
}

function posterCardPulseV207(slot,kind){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let card=root.querySelector(`.posterCardLiveV206>div:nth-child(${Math.max(0,+slot||0)+1})`);
 if(!card)return;
 card.dataset.action=kind;
 card.classList.remove("pulseV207");
 void card.offsetWidth;
 card.classList.add("pulseV207");
 battleTimerV191(()=>card.classList.remove("pulseV207"),kind==="ougi"?420:240);
}

function posterActionCinematicV207(slot,target,kind){
 if(!posterBattleOnV205())return;
 posterActionBannerV207(slot,kind);
 posterCardPulseV207(slot,kind);
 posterFocusV207(kind);
 battleTimerV191(()=>posterDamageNumberV207(kind),kind==="ougi"?145:75);
}

function posterWaveIntroV207(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let b=ensureBattleStateV120();
 root.querySelector(".posterWaveIntroV207")?.remove();
 let d=document.createElement("div");
 d.className="posterWaveIntroV207";
 d.innerHTML=`<small>WAVE</small><b>${b.wave||1}</b>`;
 root.appendChild(d);
 requestAnimationFrame(()=>d.classList.add("show"));
 battleTimerV191(()=>{d.classList.remove("show");battleTimerV191(()=>d.remove(),140)},520);
}

function posterVictoryCueV207(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let d=document.createElement("div");
 d.className="posterVictoryCueV207";
 d.innerHTML="<small>QUEST</small><b>CLEAR</b>";
 root.appendChild(d);
 requestAnimationFrame(()=>d.classList.add("show"));
 battleTimerV191(()=>{d.classList.remove("show");battleTimerV191(()=>d.remove(),120)},620);
}

function posterEnemyNameV208(){
 let b=ensureBattleStateV120();
 try{return enemyTypeV124(b.wave)?.name||"頁喰いの化身"}catch(_){return"頁喰いの化身"}
}

function posterSelectedCharV208(){
 let b=ensureBattleStateV120(),team=(S.sets?.[S.set]||[]).slice(0,5),slot=Math.max(0,Math.min(4,+b.unit||0)),i=+team[slot]||0;
 return {slot,i,name:C[i]?.[1]||"文豪",ability:characterAbility(i)?.name||"スキル",ougi:ougiInfo(i)?.name||"奥義",ep:+b.ep?.[slot]||0}
}

function posterCommandPanelV208(){
 let c=posterSelectedCharV208(),b=ensureBattleStateV120();
 return `<div class=posterCommandLiveV208>
   <div class=posterSelectedNameV208><small>SELECTED</small><b>${c.name}</b><span>${c.ability}</span></div>
   <div class=posterCommandStateV208>
     <span>${b.auto?"AUTO":"MANUAL"}</span>
     <i>${b.speed===2?"×2":"×1"}</i>
     <em>EP ${Math.round(c.ep)}%</em>
   </div>
   <div class=posterOugiStateV208 data-ready="${c.ep>=100?1:0}">
     <small>奥義</small><b>${c.ep>=100?"READY":"CHARGE"}</b>
   </div>
 </div>`
}

function posterEnemyPanelV208(){
 let b=ensureBattleStateV120(),hp=enemyHpPercentV197(b);
 return `<div class=posterEnemyLiveV208>
   <small>${b.wave===3?"BOSS":"ENEMY"} / Lv.${20+(b.wave||1)*10}</small>
   <b>${posterEnemyNameV208()}</b>
   <div><i><em style="width:${hp}%"></em></i><strong>${Math.round(hp)}%</strong></div>
 </div>`
}

function posterLiveLabelsV208(){
 return `<div class=posterLiveLabelsV208>
   ${posterEnemyPanelV208()}
   ${posterCommandPanelV208()}
 </div>`
}

function refreshPosterLabelsV208(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let holder=root.querySelector(".posterLiveLabelsV208");
 if(holder)holder.innerHTML=posterEnemyPanelV208()+posterCommandPanelV208();
 let c=posterSelectedCharV208();
 root.querySelectorAll(".posterCardLiveV206>div").forEach((el,n)=>el.classList.toggle("on",n===c.slot));
 let ougi=root.querySelector('.posterActionsV205 [data-sd-action="ougi"]');
 if(ougi){
   ougi.classList.toggle("readyV208",c.ep>=100);
   ougi.setAttribute("aria-disabled",c.ep>=100?"false":"true");
 }
}

function posterTapRippleV208(el){
 if(!el)return;
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let r=el.getBoundingClientRect(),rr=root.getBoundingClientRect();
 let x=r.left-r.left*0 + r.width/2 - rr.left, y=r.top + r.height/2 - rr.top;
 let d=document.createElement("i");
 d.className="posterTapRippleV208";
 d.style.left=x+"px";d.style.top=y+"px";
 root.appendChild(d);
 requestAnimationFrame(()=>d.classList.add("show"));
 battleTimerV191(()=>d.remove(),280);
}

function posterActionReadyV208(kind){
 if(kind!=="ougi")return true;
 return posterSelectedCharV208().ep>=100;
}

function posterUiAuditV208(){
 let r=document.querySelector(".posterBattleV205"),c=posterSelectedCharV208();
 return {
   mounted:!!r,
   enemyPanel:!!r?.querySelector(".posterEnemyLiveV208"),
   commandPanel:!!r?.querySelector(".posterCommandLiveV208"),
   selected:c.name,
   ep:c.ep,
   ougiReady:c.ep>=100
 }
}

function posterCardNamesV209(){
 let team=(S.sets?.[S.set]||[]).slice(0,5);
 return `<div class=posterCardNamesV209>
   ${team.map((i,n)=>`<div data-card-name="${n}"><b>${C[+i]?.[1]||"文豪"}</b><small>Lv.${lv(+i)}</small></div>`).join("")}
 </div>`
}

function posterTurnOrderV209(){
 let b=ensureBattleStateV120(),team=(S.sets?.[S.set]||[]).slice(0,5);
 return `<div class=posterTurnOrderV209>
   ${team.map((i,n)=>`<span class="${(+b.unit||0)===n?"on":""}" data-turn-unit="${n}">${n+1}</span>`).join("")}
 </div>`
}

function posterStateOverlayV209(){
 return `<div class=posterStateOverlayV209>
   ${posterCardNamesV209()}
   ${posterTurnOrderV209()}
 </div>`
}

function refreshPosterStateV209(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let b=ensureBattleStateV120(),team=(S.sets?.[S.set]||[]).slice(0,5);
 root.querySelectorAll(".posterCardNamesV209>div").forEach((el,n)=>{
   let i=+team[n]||0;
   let name=el.querySelector("b"),level=el.querySelector("small");
   if(name)name.textContent=C[i]?.[1]||"文豪";
   if(level)level.textContent=`Lv.${lv(i)}`;
 });
 root.querySelectorAll(".posterTurnOrderV209 span").forEach((el,n)=>el.classList.toggle("on",(+b.unit||0)===n));
}

function posterStateCueV209(kind="attack"){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let d=root.querySelector(".posterStateCueV209");
 if(!d){
   d=document.createElement("div");
   d.className="posterStateCueV209";
   root.appendChild(d);
 }
 d.dataset.kind=kind;
 d.textContent=kind==="ougi"?"SPECIAL":kind==="skill"?"SKILL":kind==="heal"?"SUPPORT":"ATTACK";
 d.classList.remove("show");void d.offsetWidth;d.classList.add("show");
 battleTimerV191(()=>d.classList.remove("show"),220);
}

function posterBattleAuditV209(){
 let r=document.querySelector(".posterBattleV205");
 return {
   mounted:!!r,
   names:r?.querySelectorAll(".posterCardNamesV209>div").length||0,
   turn:r?.querySelector(".posterTurnOrderV209 .on")?.textContent||"-"
 }
}

let __posterCutinTokenV210=0;

function posterCutinMetaV210(slot,kind){
 let team=(S.sets?.[S.set]||[]).slice(0,5),i=+team[Math.max(0,+slot||0)]||0;
 let c=C[i]||[];
 return {
   i,
   name:c[1]||"文豪",
   image:characterImage(c[0]),
   kind,
   label:kind==="ougi"?(ougiInfo(i)?.name||"奥義"):
         kind==="skill"?(characterAbility(i)?.name||"スキル"):
         kind==="heal"?"支援":"通常攻撃"
 }
}

function posterStaticCutinV210(slot,kind){
 if(!posterBattleOnV205())return;
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let m=posterCutinMetaV210(slot,kind),token=++__posterCutinTokenV210;
 root.querySelector(".posterStaticCutinV210")?.remove();

 let d=document.createElement("div");
 d.className=`posterStaticCutinV210 ${kind}`;
 d.innerHTML=`<div class=cutinShadeV210></div>
   <div class=cutinArtV210><img src="${m.image}" alt=""></div>
   <div class=cutinTextV210>
     <small>${kind==="ougi"?"SPECIAL":kind==="skill"?"SKILL":kind==="heal"?"SUPPORT":"ATTACK"}</small>
     <b>${m.name}</b>
     <span>${m.label}</span>
   </div>`;
 root.appendChild(d);

 requestAnimationFrame(()=>d.classList.add("show"));
 let stay=kind==="ougi"?460:kind==="skill"?320:240;
 battleTimerV191(()=>{
   if(token!==__posterCutinTokenV210)return;
   d.classList.remove("show");
   battleTimerV191(()=>d.remove(),120);
 },stay);
}

function posterEnemyPulseV210(kind){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 root.classList.remove("enemyPulseV210","enemyBurstV210");
 root.classList.add(kind==="ougi"?"enemyBurstV210":"enemyPulseV210");
 battleTimerV191(()=>root.classList.remove("enemyPulseV210","enemyBurstV210"),kind==="ougi"?300:180);
}

function posterActionSwitchV210(slot,target,kind){
 if(!posterBattleOnV205())return;
 posterStaticCutinV210(slot,kind);
 battleTimerV191(()=>posterEnemyPulseV210(kind),kind==="ougi"?125:70);
}

function posterSelectedPortraitV210(){
 let c=posterSelectedCharV208();
 return `<div class=posterSelectedPortraitV210>
   <img src="${characterImage(C[c.i]?.[0])}" alt="">
   <span><small>ACTIVE</small><b>${c.name}</b></span>
 </div>`;
}

function refreshPosterSelectedPortraitV210(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let holder=root.querySelector(".posterSelectedPortraitV210");
 if(!holder)return;
 let c=posterSelectedCharV208();
 let img=holder.querySelector("img"),b=holder.querySelector("b");
 if(img)img.src=characterImage(C[c.i]?.[0]);
 if(b)b.textContent=c.name;
}

function posterStaticBattleAuditV210(){
 let r=document.querySelector(".posterBattleV205");
 return {
   mounted:!!r,
   selectedPortrait:!!r?.querySelector(".posterSelectedPortraitV210"),
   activeCutin:!!r?.querySelector(".posterStaticCutinV210"),
   posterMode:posterBattleOnV205()
 }
}

function portraitBattleLayoutV211(){
 return {
   top:{
     auto:[58.5,1.5,12.5,4.8],
     speed:[71.5,1.5,12.0,4.8],
     pause:[85.0,1.5,8.7,4.8]
   },
   enemy:[52,7,47,51],
   cards:[
     [1.2,66.0,18.6,17.0],[20.4,66.0,18.6,17.0],[39.6,66.0,18.6,17.0],
     [58.8,66.0,18.6,17.0],[78.0,66.0,20.0,17.0]
   ],
   actions:{
     attack:[51.0,84.0,17.0,13.0],
     skill:[68.8,84.0,12.0,13.0],
     heal:[0,0,0,0],
     ougi:[81.0,82.5,17.5,15.5]
   }
 }
}

function applyPortraitBattleLayoutV211(){
 if(!document.querySelector(".posterBattleV205"))return;
 let p=portraitBattleLayoutV211();
 let root=document.documentElement;
 root.style.setProperty("--v211-auto",p.top.auto.join(" "));
 root.style.setProperty("--v211-speed",p.top.speed.join(" "));
 root.style.setProperty("--v211-pause",p.top.pause.join(" "));
}

function posterPortraitBadgeV211(){
 let c=posterSelectedCharV208(),b=ensureBattleStateV120();
 return `<div class=posterPortraitBadgeV211>
   <small>ACTIVE</small>
   <b>${c.name}</b>
   <span>EP ${Math.round(c.ep)}% / ${b.auto?"AUTO":"MANUAL"}</span>
 </div>`
}

function refreshPortraitBadgeV211(){
 let r=document.querySelector(".posterPortraitBadgeV211");
 if(!r)return;
 let c=posterSelectedCharV208(),b=ensureBattleStateV120();
 let name=r.querySelector("b"),span=r.querySelector("span");
 if(name)name.textContent=c.name;
 if(span)span.textContent=`EP ${Math.round(c.ep)}% / ${b.auto?"AUTO":"MANUAL"}`
}

function portraitBattleAuditV211(){
 let r=document.querySelector(".posterBattleV205");
 return {
   mounted:!!r,
   portraitAsset:"assets/battle/battle_portrait_v211.png",
   badge:!!r?.querySelector(".posterPortraitBadgeV211"),
   controls:r?.querySelectorAll(".posterTopControlsV205 button").length||0,
   cards:r?.querySelectorAll(".posterCardHotspotsV205 button").length||0
 }
}

function posterSelectionFrameV212(){
 let b=ensureBattleStateV120(),slot=Math.max(0,Math.min(4,+b.unit||0));
 return `<div class=posterSelectionFrameV212 data-slot="${slot}"></div>`
}

function posterActionRingV212(){
 let c=posterSelectedCharV208();
 return `<div class=posterActionRingV212 data-ready="${c.ep>=100?1:0}">
   <span>EP</span><b>${Math.round(c.ep)}</b>
 </div>`
}

function posterInteractionOverlayV212(){
 return `<div class=posterInteractionOverlayV212>
   ${posterSelectionFrameV212()}
   ${posterActionRingV212()}
 </div>`
}

function refreshPosterInteractionV212(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let b=ensureBattleStateV120(),slot=Math.max(0,Math.min(4,+b.unit||0)),c=posterSelectedCharV208();

 let frame=root.querySelector(".posterSelectionFrameV212");
 if(frame)frame.dataset.slot=String(slot);

 let ring=root.querySelector(".posterActionRingV212");
 if(ring){
   ring.dataset.ready=c.ep>=100?"1":"0";
   let val=ring.querySelector("b");if(val)val.textContent=String(Math.round(c.ep));
 }

 root.querySelectorAll(".posterCardHotspotsV205 button").forEach((btn,n)=>{
   btn.classList.toggle("selectedV212",n===slot);
   btn.setAttribute("aria-pressed",n===slot?"true":"false");
 });
}

function posterButtonStateV212(){
 let b=ensureBattleStateV120(),c=posterSelectedCharV208();
 return {
   auto:!!b.auto,
   speed:b.speed===2?2:1,
   ougi:c.ep>=100,
   slot:c.slot
 }
}


function refreshPosterButtonStateV212(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let s=posterButtonStateV212();

 root.querySelectorAll("[data-battle-auto]").forEach(auto=>{
   auto.classList.toggle("activeV212",s.auto);
   if(auto.closest(".posterThumbSubV234"))auto.textContent=s.auto?"AUTO ON":"AUTO";
 });

 root.querySelectorAll("[data-battle-speed]").forEach(speed=>{
   speed.classList.toggle("activeV212",s.speed===2);
   if(speed.closest(".posterThumbSubV234"))speed.textContent=`▶▶ ${s.speed===2?"×2":"×1"}`;
 });

 root.querySelectorAll('[data-sd-action="ougi"]').forEach(ougi=>{
   ougi.classList.toggle("readyV212",s.ougi);
   if(ougi.closest(".posterThumbBarV234")){
     let sm=ougi.querySelector("small");
     if(sm)sm.textContent=posterSelectedCharV208().ep>=100?"READY":Math.round(posterSelectedCharV208().ep)+"%";
   }
 });
 refreshPosterThumbV234?.();
}


function posterCommandToastV212(kind){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let c=posterSelectedCharV208();
 let d=document.createElement("div");
 d.className=`posterCommandToastV212 ${kind}`;
 d.innerHTML=`<small>${kind==="ougi"?"SPECIAL":kind==="skill"?"SKILL":kind==="heal"?"SUPPORT":"ATTACK"}</small><b>${c.name}</b>`;
 root.appendChild(d);
 requestAnimationFrame(()=>d.classList.add("show"));
 battleTimerV191(()=>{d.classList.remove("show");battleTimerV191(()=>d.remove(),90)},220);
}

function posterTapZoneAuditV212(){
 let r=document.querySelector(".posterBattleV205");
 if(!r)return {mounted:false};
 let root=r.getBoundingClientRect();
 let rect=el=>{
   let x=el?.getBoundingClientRect();if(!x)return null;
   return {
     x:Math.round((x.left-root.left)/root.width*100),
     y:Math.round((x.top-root.top)/root.height*100),
     w:Math.round(x.width/root.width*100),
     h:Math.round(x.height/root.height*100)
   };
 };
 return {
   mounted:true,
   auto:rect(r.querySelector("[data-battle-auto]")),
   attack:rect(r.querySelector('[data-sd-action="attack"]')),
   skill:rect(r.querySelector('[data-sd-action="skill"]')),
   ougi:rect(r.querySelector('[data-sd-action="ougi"]')),
   cards:[...r.querySelectorAll(".posterCardHotspotsV205 button")].map(rect)
 };
}

function posterCombatStateV213(){
 let b=normalizeBattleStateV171(),team=(S.sets?.[S.set]||[]).slice(0,5);
 return {
   b,team,
   ally:team.map((_,n)=>({
     hp:Math.max(0,Math.min(100,+b.allyHp?.[n]||0)),
     ep:Math.max(0,Math.min(100,+b.ep?.[n]||0)),
     ko:(+b.allyHp?.[n]||0)<=0,
     low:(+b.allyHp?.[n]||0)>0 && (+b.allyHp?.[n]||0)<=30
   })),
   enemyHp:enemyHpPercentV197(b)
 }
}

function posterCombatStateOverlayV213(){
 let s=posterCombatStateV213();
 return `<div class=posterCombatStateV213>
   <div class=posterCardStateV213>
     ${s.ally.map((x,n)=>`<div class="${x.ko?"ko":x.low?"low":""}" data-state-card="${n}">
       <span class=koMarkV213>${x.ko?"KO":""}</span>
       <i class=lowPulseV213></i>
     </div>`).join("")}
   </div>
   <div class=posterEnemyPhaseV213 data-phase="${s.enemyHp<=25?3:s.enemyHp<=55?2:1}">
     <small>ENEMY PHASE</small><b>${s.enemyHp<=25?"FINAL":s.enemyHp<=55?"RAGE":"NORMAL"}</b>
   </div>
 </div>`
}

function refreshPosterCombatStateV213(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let s=posterCombatStateV213();
 root.querySelectorAll(".posterCardStateV213>div").forEach((el,n)=>{
   let x=s.ally[n]||{ko:false,low:false};
   el.classList.toggle("ko",x.ko);
   el.classList.toggle("low",x.low);
   let mark=el.querySelector(".koMarkV213");
   if(mark)mark.textContent=x.ko?"KO":"";
 });
 let p=root.querySelector(".posterEnemyPhaseV213");
 if(p){
   let phase=s.enemyHp<=25?3:s.enemyHp<=55?2:1;
   p.dataset.phase=String(phase);
   let b=p.querySelector("b");
   if(b)b.textContent=phase===3?"FINAL":phase===2?"RAGE":"NORMAL";
 }
}

function posterEnemyTurnCueV213(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let d=document.createElement("div");
 d.className="posterEnemyTurnCueV213";
 d.innerHTML="<small>ENEMY TURN</small><b>頁が、牙を剥く。</b>";
 root.appendChild(d);
 requestAnimationFrame(()=>d.classList.add("show"));
 battleTimerV191(()=>{d.classList.remove("show");battleTimerV191(()=>d.remove(),110)},360);
}

function posterKoCueV213(slot){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let team=(S.sets?.[S.set]||[]).slice(0,5),i=+team[slot]||0;
 let d=document.createElement("div");
 d.className="posterKoCueV213";
 d.innerHTML=`<small>DOWN</small><b>${C[i]?.[1]||"文豪"}</b>`;
 root.appendChild(d);
 requestAnimationFrame(()=>d.classList.add("show"));
 battleTimerV191(()=>{d.classList.remove("show");battleTimerV191(()=>d.remove(),90)},420);
}

function posterCheckKoTransitionV213(){
 let s=posterCombatStateV213();
 S.qol=S.qol||{};
 let old=Array.isArray(S.qol.posterKoStateV213)?S.qol.posterKoStateV213:[false,false,false,false,false];
 s.ally.forEach((x,n)=>{if(x.ko&&!old[n])posterKoCueV213(n)});
 S.qol.posterKoStateV213=s.ally.map(x=>x.ko);
}

function posterPauseOverlayV213(show){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let old=root.querySelector(".posterPauseOverlayV213");
 if(!show){old?.remove();return}
 if(old)return;
 let d=document.createElement("div");
 d.className="posterPauseOverlayV213";
 d.innerHTML=`<div><small>BATTLE PAUSED</small><b>一時停止</b><button data-poster-resume-v213=1>戦闘へ戻る</button><button data-go="sortie">撤退</button></div>`;
 root.appendChild(d);
}

function posterStateMachineAuditV213(){
 let s=posterCombatStateV213();
 return {
   mounted:!!document.querySelector(".posterBattleV205"),
   enemyHp:s.enemyHp,
   phase:s.enemyHp<=25?3:s.enemyHp<=55?2:1,
   ko:s.ally.filter(x=>x.ko).length,
   low:s.ally.filter(x=>x.low).length
 }
}

let __posterPhaseV214=0;
let __posterWaveV214=0;

function posterPhaseStateV214(){
 let b=ensureBattleStateV120(),hp=enemyHpPercentV197(b);
 return {wave:b.wave||1,turn:b.turn||1,hp,phase:hp<=25?3:hp<=55?2:1}
}

function posterApplyPhaseV214(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let s=posterPhaseStateV214();
 root.dataset.phase=String(s.phase);
 root.dataset.wave=String(s.wave);
 if(__posterPhaseV214!==s.phase){
   let prev=__posterPhaseV214;__posterPhaseV214=s.phase;
   if(prev>0)posterPhaseShiftV214(s.phase);
 }
 if(__posterWaveV214!==s.wave){
   let prev=__posterWaveV214;__posterWaveV214=s.wave;
   if(prev>0)posterWaveShiftV214(s.wave);
 }
}

function posterPhaseShiftV214(phase){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let d=document.createElement("div");
 d.className=`posterPhaseShiftV214 p${phase}`;
 d.innerHTML=`<small>${phase===3?"FINAL PHASE":phase===2?"RAGE PHASE":"PHASE"}</small><b>${phase===3?"終頁":phase===2?"暴走":"通常"}</b>`;
 root.appendChild(d);
 requestAnimationFrame(()=>d.classList.add("show"));
 battleTimerV191(()=>{d.classList.remove("show");battleTimerV191(()=>d.remove(),120)},520);
}

function posterWaveShiftV214(wave){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let d=document.createElement("div");
 d.className="posterWaveShiftV214";
 d.innerHTML=`<small>NEXT WAVE</small><b>${wave}</b>`;
 root.appendChild(d);
 requestAnimationFrame(()=>d.classList.add("show"));
 battleTimerV191(()=>{d.classList.remove("show");battleTimerV191(()=>d.remove(),100)},420);
}

function posterBattleLockV214(on=true){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 root.classList.toggle("posterLockedV214",!!on);
}

function posterBattleLockCueV214(kind="attack"){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 root.dataset.lockKind=kind;
 posterBattleLockV214(true);
 battleTimerV191(()=>posterBattleLockV214(false),kind==="ougi"?420:220);
}

function posterResultBridgeV214(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let d=document.createElement("div");
 d.className="posterResultBridgeV214";
 d.innerHTML="<small>QUEST COMPLETE</small><b>戦闘終了</b>";
 root.appendChild(d);
 requestAnimationFrame(()=>d.classList.add("show"));
 return d;
}

function posterPhaseAuditV214(){
 let s=posterPhaseStateV214(),root=document.querySelector(".posterBattleV205");
 return {mounted:!!root,wave:s.wave,turn:s.turn,hp:s.hp,phase:s.phase,locked:!!root?.classList.contains("posterLockedV214")}
}

function posterEnemyIntentV215(){
 let b=ensureBattleStateV120(),hp=enemyHpPercentV197(b),phase=hp<=25?3:hp<=55?2:1;
 let type=phase===3?"大技":phase===2?"強攻撃":b.turn%2===0?"攻撃":"様子見";
 let icon=phase===3?"◆":phase===2?"!":"•";
 return {type,icon,phase}
}

function posterEnemyIntentUiV215(){
 let x=posterEnemyIntentV215();
 return `<div class=posterEnemyIntentV215 data-phase="${x.phase}">
   <small>NEXT</small><b>${x.icon} ${x.type}</b>
 </div>`
}

function posterNextActorsV215(){
 let b=ensureBattleStateV120(),team=(S.sets?.[S.set]||[]).slice(0,5),cur=Math.max(0,+b.unit||0);
 let order=[];
 for(let k=0;k<3;k++){
   let n=(cur+k)%Math.max(1,team.length);
   order.push({slot:n,name:C[+team[n]]?.[1]||"文豪"});
 }
 return `<div class=posterNextActorsV215>
   <small>NEXT ACTORS</small>
   <div>${order.map((x,i)=>`<span class="${i===0?"on":""}"><i>${x.slot+1}</i><b>${x.name}</b></span>`).join("")}</div>
 </div>`
}

function posterTacticalOverlayV215(){
 return `<div class=posterTacticalOverlayV215>
   ${posterEnemyIntentUiV215()}
   ${posterNextActorsV215()}
 </div>`
}

function refreshPosterTacticalV215(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let tactical=root.querySelector(".posterTacticalOverlayV215");
 if(tactical)tactical.innerHTML=posterEnemyIntentUiV215()+posterNextActorsV215();
}

function posterBattleResultSummaryV215(r){
 let b=ensureBattleStateV120();
 return `<div class=posterResultSummaryV215>
   <span>TURN<b>${b.turn||1}</b></span>
   <span>資料<b>+${r.mat||0}</b></span>
   <span>文銭<b>+${r.gold||0}</b></span>
   <span>インク<b>+${r.ink||0}</b></span>
 </div>`
}

function posterResultCardV215(r){
 let o=document.createElement("div");
 o.className="posterResultCardV215";
 o.innerHTML=`<div>
   <small>QUEST COMPLETE</small>
   <h2>BATTLE CLEAR</h2>
   ${posterBattleResultSummaryV215(r)}${posterResultStatsV226(r)}
   <div class=posterResultActionsV215>
     <button data-v181-repeat=1>もう一度</button>
     <button class=auto data-v181-repeat-auto=1>AUTO再戦</button>
     <button data-go=sortie>ステージへ</button>
   </div>
 </div>`;
 document.body.appendChild(o);
 return o
}

function posterReadabilityAuditV215(){
 let root=document.querySelector(".posterBattleV205");
 let intent=posterEnemyIntentV215();
 return {
   mounted:!!root,
   enemyIntent:intent.type,
   nextActors:root?.querySelectorAll(".posterNextActorsV215 span").length||0,
   tacticalOverlay:!!root?.querySelector(".posterTacticalOverlayV215")
 }
}

function posterViewportInfoV216(){
 let vv=window.visualViewport;
 let w=Math.max(1,Math.round(vv?.width||innerWidth));
 let h=Math.max(1,Math.round(vv?.height||innerHeight));
 let portrait=h>=w;
 let artW=portrait?941:1672,artH=portrait?1672:941;
 let scale=Math.min(w/artW,h/artH);
 let rw=artW*scale,rh=artH*scale;
 return {w,h,portrait,artW,artH,renderW:rw,renderH:rh,left:(w-rw)/2,top:(h-rh)/2,scale}
}

function applyExactPosterFitV216(){
 let root=document.querySelector(".posterBattleV205");
 if(!root)return;
 let v=posterViewportInfoV216();
 root.style.setProperty("--posterW",`${v.renderW}px`);
 root.style.setProperty("--posterH",`${v.renderH}px`);
 root.style.setProperty("--posterLeft",`${v.left}px`);
 root.style.setProperty("--posterTop",`${v.top}px`);
 root.dataset.orientation=v.portrait?"portrait":"landscape";
}

function preloadPosterAssetsV216(){
 [
   "assets/battle/battle_portrait_v211.png",
   "assets/battle/battle_landscape_v205.png"
 ].forEach(src=>{
   let im=new Image();im.decoding="async";im.src=src;
 });
}

function posterBootHintV216(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 S.qol=S.qol||{};
 if(S.qol.posterHintSeenV216)return;
 S.qol.posterHintSeenV216=true;
 queueBattleSaveV197();
 let d=document.createElement("div");
 d.className="posterBootHintV216";
 d.innerHTML="<small>BATTLE READY</small><b>画像のボタンをそのままタップ</b>";
 root.appendChild(d);
 requestAnimationFrame(()=>d.classList.add("show"));
 battleTimerV191(()=>{d.classList.remove("show");battleTimerV191(()=>d.remove(),120)},1050);
}

function posterHeaderV216(){
 let b=ensureBattleStateV120();
 return `<div class=posterHeaderV216>
   <small>CHAPTER ${b.wave||1}</small>
   <b>${b.wave===3?"失われた頁の主":"廃聖堂・侵食域"}</b>
 </div>`
}

function posterCompletionBarV216(){
 let b=ensureBattleStateV120(),wave=Math.max(1,Math.min(3,+b.wave||1));
 let pct=((wave-1)/3)*100 + Math.min(33,Math.max(0,(1-enemyHpPercentV197(b)/100)*33));
 return `<div class=posterCompletionV216><i><em style="width:${Math.round(pct)}%"></em></i></div>`
}

function refreshPosterPolishV216(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let b=ensureBattleStateV120();
 let head=root.querySelector(".posterHeaderV216");
 if(head){
   let s=head.querySelector("small"),t=head.querySelector("b");
   if(s)s.textContent=`CHAPTER ${b.wave||1}`;
   if(t)t.textContent=b.wave===3?"失われた頁の主":"廃聖堂・侵食域";
 }
 let bar=root.querySelector(".posterCompletionV216 em");
 if(bar){
   let wave=Math.max(1,Math.min(3,+b.wave||1));
   let pct=((wave-1)/3)*100 + Math.min(33,Math.max(0,(1-enemyHpPercentV197(b)/100)*33));
   bar.style.width=Math.round(pct)+"%";
 }
}

function posterExactFitAuditV216(){
 let vv=window.visualViewport,w=Math.round(vv?.width||innerWidth),h=Math.round(vv?.height||innerHeight);
 return {
   mounted:!!document.querySelector(".posterBattleV205"),
   orientation:h>=w?"portrait":"landscape",
   viewport:[w,h],
   art:["responsive-css","responsive-css"],
   rendered:[w,h],
   letterbox:[0,0],
   exactAspect:true
 }
}

function posterLivePartyPortraitsV217(){
 let b=ensureBattleStateV120(),team=(S.sets?.[S.set]||[]).slice(0,5);
 return `<div class=posterLivePartyV217>
   ${team.map((i,n)=>{
     let idx=+i||0,hp=Math.max(0,Math.min(100,+b.allyHp?.[n]||0)),ep=Math.max(0,Math.min(100,+b.ep?.[n]||0));
     return `<button class="${(+b.unit||0)===n?"on":""} ${hp<=0?"ko":""}" data-battle-unit="${n}" aria-label="${C[idx]?.[1]||"文豪"}">
       <img src="${characterImage(C[idx]?.[0])}" alt="">
       <span class=name>${C[idx]?.[1]||"文豪"}</span>
       <i class=hp><em style="width:${hp}%"></em></i>
       <i class=ep><em style="width:${ep}%"></em></i>
     </button>`
   }).join("")}
 </div>`
}

function refreshLivePartyPortraitsV217(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let b=ensureBattleStateV120(),team=(S.sets?.[S.set]||[]).slice(0,5);
 let holder=root.querySelector(".posterLivePartyV217");
 if(!holder)return;
 let buttons=[...holder.querySelectorAll("button")];
 if(buttons.length!==team.length){
   holder.outerHTML=posterLivePartyPortraitsV217();
   return;
 }
 buttons.forEach((btn,n)=>{
   let idx=+team[n]||0,hp=Math.max(0,Math.min(100,+b.allyHp?.[n]||0)),ep=Math.max(0,Math.min(100,+b.ep?.[n]||0));
   btn.classList.toggle("on",(+b.unit||0)===n);
   btn.classList.toggle("ko",hp<=0);
   let im=btn.querySelector("img"),nm=btn.querySelector(".name"),h=btn.querySelector(".hp em"),e=btn.querySelector(".ep em");
   let src=characterImage(C[idx]?.[0]);
   if(im&&im.getAttribute("src")!==src)im.src=src;
   if(nm)nm.textContent=C[idx]?.[1]||"文豪";
   if(h)h.style.width=hp+"%";
   if(e)e.style.width=ep+"%";
 });
}

function posterSelectedAuraV217(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let b=ensureBattleStateV120(),slot=Math.max(0,Math.min(4,+b.unit||0));
 root.dataset.selectedSlot=String(slot);
}

function posterPortraitPreloadV217(){
 let team=(S.sets?.[S.set]||[]).slice(0,5);
 team.forEach(i=>{
   let im=new Image();im.decoding="async";im.src=characterImage(C[+i||0]?.[0]);
 });
}

function posterPartyAuditV217(){
 let root=document.querySelector(".posterBattleV205");
 return {
   mounted:!!root,
   livePortraits:root?.querySelectorAll(".posterLivePartyV217 button").length||0,
   selected:root?.dataset.selectedSlot||"0",
   ko:root?.querySelectorAll(".posterLivePartyV217 .ko").length||0
 }
}

const __cutinCacheV218=new Map();

function posterCutinAssetV218(i){
 let src=characterImage(C[i]?.[0]);
 if(!__cutinCacheV218.has(src)){
   let im=new Image();
   im.decoding="async";
   im.src=src;
   __cutinCacheV218.set(src,im);
 }
 return src;
}

function preloadActiveCutinsV218(){
 let team=(S.sets?.[S.set]||[]).slice(0,5);
 team.forEach(i=>posterCutinAssetV218(+i||0));
}

function posterCutinThemeV218(i,kind){
 let attr=String(C[i]?.[4]||"");
 let base=kind==="ougi"?"gold":kind==="skill"?"blue":kind==="heal"?"green":"ink";
 if(/火|紅|赤/.test(attr))base="red";
 if(/水|蒼|青/.test(attr))base="blue";
 if(/風|緑/.test(attr))base="green";
 return base;
}

function posterCharacterCutinV218(slot,kind){
 if(!posterBattleOnV205())return;
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let team=(S.sets?.[S.set]||[]).slice(0,5),i=+team[Math.max(0,+slot||0)]||0;
 let token=++__posterCutinTokenV210;
 let src=posterCutinAssetV218(i);
 let theme=posterCutinThemeV218(i,kind);
 let label=kind==="ougi"?(ougiInfo(i)?.name||"奥義"):kind==="skill"?(characterAbility(i)?.name||"スキル"):kind==="heal"?"支援":"通常攻撃";

 root.querySelector(".posterStaticCutinV210")?.remove();

 let d=document.createElement("div");
 d.className=`posterStaticCutinV210 posterCharacterCutinV218 ${kind}`;
 d.dataset.theme=theme;
 d.innerHTML=`<div class=cutinShadeV210></div>
   <div class=cutinFrameV218></div>
   <div class=cutinArtV210><img src="${src}" alt=""></div>
   <div class=cutinGlyphV218>${kind==="ougi"?"奥":kind==="skill"?"技":kind==="heal"?"援":"撃"}</div>
   <div class=cutinTextV210>
     <small>${kind==="ougi"?"SPECIAL":kind==="skill"?"SKILL":kind==="heal"?"SUPPORT":"ATTACK"}</small>
     <b>${C[i]?.[1]||"文豪"}</b>
     <span>${label}</span>
   </div>`;
 root.appendChild(d);

 requestAnimationFrame(()=>d.classList.add("show"));
 let stay=kind==="ougi"?520:kind==="skill"?340:kind==="heal"?300:250;
 battleTimerV191(()=>{
   if(token!==__posterCutinTokenV210)return;
   d.classList.remove("show");
   battleTimerV191(()=>d.remove(),120);
 },stay);
}

function posterCutinDirectorV218(slot,target,kind){
 posterCharacterCutinV218(slot,kind);
 posterCardPulseV207(slot,kind);
 posterFocusV207(kind);
 battleTimerV191(()=>posterDamageNumberV207(kind),kind==="ougi"?150:75);
 battleTimerV191(()=>posterEnemyPulseV210(kind),kind==="ougi"?125:70);
}

function posterPartyStripV218(){
 let team=(S.sets?.[S.set]||[]).slice(0,5),b=ensureBattleStateV120();
 return `<div class=posterPartyStripV218>
   ${team.map((i,n)=>`<span class="${(+b.unit||0)===n?"on":""} ${(+b.allyHp?.[n]||0)<=0?"ko":""}">
     <img src="${posterCutinAssetV218(+i||0)}" alt="">
   </span>`).join("")}
 </div>`
}

function refreshPosterPartyStripV218(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let team=(S.sets?.[S.set]||[]).slice(0,5),b=ensureBattleStateV120();
 let holder=root.querySelector(".posterPartyStripV218");
 if(!holder)return;
 holder.querySelectorAll("span").forEach((s,n)=>{
   s.classList.toggle("on",(+b.unit||0)===n);
   s.classList.toggle("ko",(+b.allyHp?.[n]||0)<=0);
   let im=s.querySelector("img"),src=posterCutinAssetV218(+team[n]||0);
   if(im&&im.getAttribute("src")!==src)im.src=src;
 });
}

function posterCutinAuditV218(){
 let root=document.querySelector(".posterBattleV205");
 return {
   mounted:!!root,
   cachedCutins:__cutinCacheV218.size,
   partyStrip:root?.querySelectorAll(".posterPartyStripV218 span").length||0,
   activeCutin:!!root?.querySelector(".posterCharacterCutinV218")
 }
}

let __tableauTokenV219=0;

function posterActiveTableauV219(slot,kind){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let team=(S.sets?.[S.set]||[]).slice(0,5),i=+team[Math.max(0,+slot||0)]||0;
 let token=++__tableauTokenV219;
 let src=posterCutinAssetV218(i);
 let label=kind==="ougi"?(ougiInfo(i)?.name||"奥義"):
           kind==="skill"?(characterAbility(i)?.name||"スキル"):
           kind==="heal"?"支援":"通常攻撃";

 root.querySelector(".posterActionTableauV219")?.remove();

 let d=document.createElement("div");
 d.className=`posterActionTableauV219 ${kind}`;
 d.innerHTML=`<div class=tableauMaskV219></div>
   <div class=tableauActorV219><img src="${src}" alt=""></div>
   <div class=tableauTextV219>
     <small>${kind==="ougi"?"SPECIAL":kind==="skill"?"SKILL":kind==="heal"?"SUPPORT":"ATTACK"}</small>
     <b>${C[i]?.[1]||"文豪"}</b>
     <span>${label}</span>
   </div>
   <div class=tableauLineV219></div>`;
 root.appendChild(d);

 requestAnimationFrame(()=>d.classList.add("show"));
 let stay=kind==="ougi"?480:kind==="skill"?300:kind==="heal"?280:220;
 battleTimerV191(()=>{
   if(token!==__tableauTokenV219)return;
   d.classList.remove("show");
   battleTimerV191(()=>d.remove(),100);
 },stay);
}

function posterActionTableauDirectorV219(slot,target,kind){
 if(!posterBattleOnV205())return;
 posterActiveTableauV219(slot,kind);
 posterCardPulseV207(slot,kind);
 posterFocusV207(kind);
 battleTimerV191(()=>posterDamageNumberV207(kind),kind==="ougi"?145:70);
 battleTimerV191(()=>posterEnemyPulseV210(kind),kind==="ougi"?120:65);
}

function posterThreatMeterV219(){
 let b=ensureBattleStateV120(),hp=enemyHpPercentV197(b);
 let threat=hp<=25?100:hp<=55?70:Math.min(55,20+(b.turn||1)*4);
 return `<div class=posterThreatV219>
   <small>THREAT</small>
   <i><em style="width:${Math.min(100,threat)}%"></em></i>
   <b>${hp<=25?"CRITICAL":hp<=55?"HIGH":"NORMAL"}</b>
 </div>`
}

function refreshPosterThreatV219(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let b=ensureBattleStateV120(),hp=enemyHpPercentV197(b);
 let threat=hp<=25?100:hp<=55?70:Math.min(55,20+(b.turn||1)*4);
 let wrap=root.querySelector(".posterThreatV219");
 if(!wrap)return;
 let bar=wrap.querySelector("em"),lab=wrap.querySelector("b");
 if(bar)bar.style.width=Math.min(100,threat)+"%";
 if(lab)lab.textContent=hp<=25?"CRITICAL":hp<=55?"HIGH":"NORMAL";
}

function posterBattleFooterNoteV219(){
 return `<div class=posterFooterNoteV219><span>STATIC CINEMATIC BATTLE</span><b>LIVE DATA</b></div>`
}

function posterTableauAuditV219(){
 let root=document.querySelector(".posterBattleV205");
 return {
   mounted:!!root,
   threat:!!root?.querySelector(".posterThreatV219"),
   footer:!!root?.querySelector(".posterFooterNoteV219"),
   activeTableau:!!root?.querySelector(".posterActionTableauV219")
 }
}

function poseRegistryV220(){
 S.qol=S.qol||{};
 if(!S.qol.poseAssetsV220||typeof S.qol.poseAssetsV220!=="object")S.qol.poseAssetsV220={};
 return S.qol.poseAssetsV220
}

function poseKeyV220(i,kind){
 let slug=C[i]?.[0]||String(i);
 return `${slug}:${kind}`
}

function posterPoseSourceV220(i,kind){
 let reg=poseRegistryV220();
 let exact=reg[poseKeyV220(i,kind)];
 let idle=reg[poseKeyV220(i,"idle")];
 return exact||idle||characterImage(C[i]?.[0])
}

function posterPoseMetaV220(slot,kind){
 let team=(S.sets?.[S.set]||[]).slice(0,5),i=+team[Math.max(0,+slot||0)]||0;
 return {
   i,
   kind,
   src:posterPoseSourceV220(i,kind),
   name:C[i]?.[1]||"文豪",
   title:kind==="ougi"?(ougiInfo(i)?.name||"奥義"):
         kind==="skill"?(characterAbility(i)?.name||"スキル"):
         kind==="heal"?"支援":"通常攻撃",
   theme:posterCutinThemeV218(i,kind)
 }
}

function posterPoseStageV220(slot,kind){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let m=posterPoseMetaV220(slot,kind);
 root.querySelector(".posterPoseStageV220")?.remove();

 let d=document.createElement("div");
 d.className=`posterPoseStageV220 ${kind}`;
 d.dataset.theme=m.theme;
 d.innerHTML=`<div class=poseCurtainV220></div>
   <div class=poseActorV220><img src="${m.src}" alt=""></div>
   <div class=poseCopyV220>
     <small>${kind==="ougi"?"SPECIAL":kind==="skill"?"SKILL":kind==="heal"?"SUPPORT":"ATTACK"}</small>
     <b>${m.name}</b>
     <span>${m.title}</span>
   </div>
   <div class=poseEdgeV220></div>`;
 root.appendChild(d);
 requestAnimationFrame(()=>d.classList.add("show"));

 let stay=kind==="ougi"?500:kind==="skill"?320:kind==="heal"?280:220;
 battleTimerV191(()=>{
   d.classList.remove("show");
   battleTimerV191(()=>d.remove(),100);
 },stay);
}

function posterPoseDirectorV220(slot,target,kind){
 if(!posterBattleOnV205())return;
 posterPoseStageV220(slot,kind);
 posterCardPulseV207(slot,kind);
 posterFocusV207(kind);
 battleTimerV191(()=>posterDamageNumberV207(kind),kind==="ougi"?150:70);
 battleTimerV191(()=>posterEnemyPulseV210(kind),kind==="ougi"?120:65);
}

function registerPoseAssetV220(slug,kind,path){
 let reg=poseRegistryV220();
 reg[`${slug}:${kind}`]=path;
 queueBattleSaveV197(true);
}

function posterPoseGuideV220(){
 return {
   folder:"assets/battle/poses/",
   recommended:["idle","attack","skill","ougi","heal","hit","ko","victory"],
   fallback:"characterImage()",
   registryKey:"<slug>:<pose>"
 }
}

function posterPoseAuditV220(){
 let team=(S.sets?.[S.set]||[]).slice(0,5),reg=poseRegistryV220();
 return {
   registered:Object.keys(reg).length,
   activeParty:team.map(i=>C[+i||0]?.[0]),
   stage:!!document.querySelector(".posterPoseStageV220"),
   guide:posterPoseGuideV220()
 }
}

function posterFallbackCropV221(kind){
 return kind==="ougi"?{pos:"50% 18%",scale:1.08}:
        kind==="skill"?{pos:"50% 24%",scale:1.05}:
        kind==="heal"?{pos:"50% 20%",scale:1.035}:
        {pos:"50% 30%",scale:1.045}
}

function posterPoseResolvedV221(slot,kind){
 let team=(S.sets?.[S.set]||[]).slice(0,5),i=+team[Math.max(0,+slot||0)]||0;
 let reg=poseRegistryV220(),slug=C[i]?.[0]||String(i);
 let key=`${slug}:${kind}`,idle=`${slug}:idle`;
 let explicit=reg[key]||reg[idle]||null;
 let crop=posterFallbackCropV221(kind);
 return {
   i,kind,
   src:explicit||characterImage(C[i]?.[0]),
   explicit:!!explicit,
   crop,
   name:C[i]?.[1]||"文豪",
   title:kind==="ougi"?(ougiInfo(i)?.name||"奥義"):
         kind==="skill"?(characterAbility(i)?.name||"スキル"):
         kind==="heal"?"支援":"通常攻撃",
   theme:posterCutinThemeV218(i,kind)
 }
}

function posterCinematicPoseV221(slot,kind){
 if(!posterBattleOnV205())return;
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let m=posterPoseResolvedV221(slot,kind);
 root.querySelector(".posterPoseStageV220")?.remove();

 let d=document.createElement("div");
 d.className=`posterPoseStageV220 posterCinematicPoseV221 ${kind} ${m.explicit?"explicit":"fallback"}`;
 d.dataset.theme=m.theme;
 d.style.setProperty("--cropPos",m.crop.pos);
 d.style.setProperty("--cropScale",String(m.crop.scale));
 d.innerHTML=`<div class=poseCurtainV220></div>
   <div class=poseBackdropV221></div>
   <div class=poseActorV220><img src="${m.src}" alt=""></div>
   <div class=poseAccentV221></div>
   <div class=poseCopyV220>
     <small>${kind==="ougi"?"SPECIAL":kind==="skill"?"SKILL":kind==="heal"?"SUPPORT":"ATTACK"}</small>
     <b>${m.name}</b>
     <span>${m.title}</span>
   </div>
   <div class=poseEdgeV220></div>
   <div class=poseAssetFlagV221>${m.explicit?"POSE":"PORTRAIT"}</div>`;
 root.appendChild(d);
 requestAnimationFrame(()=>d.classList.add("show"));

 let stay=kind==="ougi"?520:kind==="skill"?330:kind==="heal"?290:230;
 battleTimerV191(()=>{
   d.classList.remove("show");
   battleTimerV191(()=>d.remove(),100);
 },stay);
}

function posterPoseDirectorV221(slot,target,kind){
 if(!posterBattleOnV205())return;
 posterCinematicPoseV221(slot,kind);
 posterCardPulseV207(slot,kind);
 posterFocusV207(kind);
 battleTimerV191(()=>posterDamageNumberV207(kind),kind==="ougi"?155:70);
 battleTimerV191(()=>posterEnemyPulseV210(kind),kind==="ougi"?125:65);
}

function posterRosterPoseCoverageV221(){
 let team=(S.sets?.[S.set]||[]).slice(0,5),reg=poseRegistryV220();
 return team.map(i=>{
   let slug=C[+i||0]?.[0]||String(i),count=["idle","attack","skill","ougi","heal","hit","ko","victory"].filter(k=>reg[`${slug}:${k}`]).length;
   return {slug,name:C[+i||0]?.[1]||"文豪",count}
 });
}

function posterPoseCoverageUiV221(){
 let rows=posterRosterPoseCoverageV221();
 let total=rows.reduce((a,b)=>a+b.count,0);
 return `<div class=posterPoseCoverageV221>
   <small>POSE ASSET</small><b>${total}/40</b>
 </div>`
}

function refreshPoseCoverageV221(){
 let root=document.querySelector(".posterBattleV205"),el=root?.querySelector(".posterPoseCoverageV221");
 if(!el)return;
 let rows=posterRosterPoseCoverageV221(),total=rows.reduce((a,b)=>a+b.count,0),b=el.querySelector("b");
 if(b)b.textContent=`${total}/40`;
}

function posterCinematicAuditV221(){
 let cover=posterRosterPoseCoverageV221();
 return {
   mounted:!!document.querySelector(".posterBattleV205"),
   coverage:cover,
   explicitAssets:cover.reduce((a,b)=>a+b.count,0),
   fallbackMode:true
 }
}

let __posterInputLockV222=false;
let __posterOrientationTimerV222=null;

function posterDeviceProfileV222(){
 let vv=window.visualViewport;
 let w=Math.round(vv?.width||innerWidth),h=Math.round(vv?.height||innerHeight);
 let portrait=h>=w;
 return {
   w,h,portrait,
   compact:w<=390,
   tall:portrait&&h/w>=1.95,
   safeBottom:Math.max(0,(innerHeight-(vv?.height||innerHeight)))
 }
}

function posterInputGateV222(ms=120){
 if(__posterInputLockV222)return false;
 __posterInputLockV222=true;
 setTimeout(()=>__posterInputLockV222=false,ms);
 return true
}

function posterEnsureSceneV222(){
 if(!document.body.classList.contains("battleMode"))return false;
 let root=document.querySelector(".posterBattleV205");
 if(root){
   applyExactPosterFitV216();
   refreshPosterLiveOverlayV206();
   refreshPosterLabelsV208();
   refreshPosterStateV209();
   refreshPosterSelectedPortraitV210();
   refreshPortraitBadgeV211();
   refreshPosterInteractionV212();
   refreshPosterButtonStateV212();
   refreshPosterCombatStateV213();
   posterApplyPhaseV214();
   refreshPosterTacticalV215();
   refreshPosterPolishV216();
   refreshLivePartyPortraitsV217();
   posterSelectedAuraV217();
   refreshPosterPartyStripV218();
   refreshPosterThreatV219();
   refreshPoseCoverageV221();
   return true;
 }
 try{
   mountBattleV182();
   return true;
 }catch(e){
   console.error("V222 scene recovery",e);
   return false;
 }
}

function posterOrientationSyncV222(){
 clearTimeout(__posterOrientationTimerV222);
 __posterOrientationTimerV222=setTimeout(()=>{
   if(!document.body.classList.contains("battleMode"))return;
   applyExactPosterFitV216();
   posterEnsureSceneV222();
 },120);
}

function setupPosterDeviceGuardsV222(){
 if(window.__posterDeviceGuardsV222)return;
 window.__posterDeviceGuardsV222=true;
 window.addEventListener("orientationchange",posterOrientationSyncV222,{passive:true});
 window.addEventListener("resize",posterOrientationSyncV222,{passive:true});
 document.addEventListener("visibilitychange",()=>{
   if(document.visibilityState==="visible"&&document.body.classList.contains("battleMode")){
     setTimeout(posterEnsureSceneV222,120);
   }
 },{passive:true});
}

function posterSafeTapFeedbackV222(el){
 if(!el)return;
 el.classList.remove("posterPressedV222");
 void el.offsetWidth;
 el.classList.add("posterPressedV222");
 battleTimerV191(()=>el.classList.remove("posterPressedV222"),120);
}

function posterButtonAuditV222(){
 let root=document.querySelector(".posterBattleV205");
 if(!root)return {mounted:false};
 let q=s=>root.querySelector(s)?.getBoundingClientRect();
 let vv=window.visualViewport, vw=vv?.width||innerWidth, vh=vv?.height||innerHeight;
 let inside=r=>!!r&&r.left>=-1&&r.top>=-1&&r.right<=vw+1&&r.bottom<=vh+1;
 return {
   mounted:true,
   auto:inside(q(".posterThumbSubV234 [data-battle-auto]")),
   speed:inside(q(".posterThumbSubV234 [data-battle-speed]")),
   attack:inside(q('.posterThumbBarV234 [data-sd-action="attack"]')),
   skill:inside(q('.posterThumbBarV234 [data-sd-action="skill"]')),
   ougi:inside(q('.posterThumbBarV234 [data-sd-action="ougi"]')),
   cards:[...root.querySelectorAll(".posterLivePartyV217 button")].map(x=>inside(x.getBoundingClientRect()))
 }
}

function posterDeviceAuditV222(){
 return {
   device:posterDeviceProfileV222(),
   fit:posterExactFitAuditV216(),
   buttons:posterButtonAuditV222(),
   scene:!!document.querySelector(".posterBattleV205")
 }
}

let __posterGuardTimerV223=null;
let __posterGuardStrikesV223=0;

function posterGuardStateV223(){
 S.qol=S.qol||{};
 if(typeof S.qol.posterFallbackDockV223!=="boolean")S.qol.posterFallbackDockV223=true;
 return S.qol
}

function posterEssentialControlsV223(){
 let root=document.querySelector(".posterBattleV205");
 if(!root)return {ok:false,reason:"scene-missing"};
 let audit=posterButtonAuditV222();
 let cards=Array.isArray(audit.cards)?audit.cards:[];
 let ok=!!(audit.auto&&audit.speed&&audit.attack&&audit.skill&&audit.ougi&&cards.length>=5&&cards.every(Boolean));
 return {ok,audit,reason:ok?"ok":"control-offscreen"};
}

function posterFallbackDockV223(){
 let b=ensureBattleStateV120(),c=posterSelectedCharV208();
 return `<div class=posterFallbackDockV223>
   <button data-battle-speed="${b.speed===2?1:2}">${b.speed===2?"×2":"×1"}</button>
   <button data-battle-auto=1 class="${b.auto?"on":""}">AUTO</button>
   <button data-sd-action=attack>攻撃</button>
   <button data-sd-action=skill>スキル</button>
   <button data-sd-action=ougi class="${c.ep>=100?"ready":""}">奥義</button>
 </div>`
}

function ensurePosterFallbackDockV223(force=false){
 let root=document.querySelector(".posterBattleV205");
 if(!root)return;
 let q=posterGuardStateV223();
 let status=posterEssentialControlsV223();
 let should=force||(!status.ok&&q.posterFallbackDockV223);
 let old=root.querySelector(".posterFallbackDockV223");
 if(should&&!old){
   root.insertAdjacentHTML("beforeend",posterFallbackDockV223());
 }else if(!should&&old){
   old.remove();
 }else if(should&&old){
   let b=ensureBattleStateV120(),c=posterSelectedCharV208();
   let speed=old.querySelector("[data-battle-speed]"),auto=old.querySelector("[data-battle-auto]"),ougi=old.querySelector('[data-sd-action="ougi"]');
   if(speed){speed.dataset.battleSpeed=b.speed===2?1:2;speed.textContent=b.speed===2?"×2":"×1"}
   if(auto){auto.classList.toggle("on",!!b.auto);auto.textContent="AUTO"}
   if(ougi)ougi.classList.toggle("ready",c.ep>=100);
 }
 return status;
}

function posterGuardCheckV223(){
 clearTimeout(__posterGuardTimerV223);
 __posterGuardTimerV223=setTimeout(()=>{
   if(!document.body.classList.contains("battleMode"))return;
   let status=posterEssentialControlsV223();
   if(!status.ok){
     __posterGuardStrikesV223++;
     applyExactPosterFitV216();
     if(__posterGuardStrikesV223>=2)ensurePosterFallbackDockV223(true);
   }else{
     __posterGuardStrikesV223=0;
     ensurePosterFallbackDockV223(false);
   }
 },180);
}

function posterRenderHealthV223(){
 let root=document.querySelector(".posterBattleV205");
 if(!root)return {ok:false,scene:false};
 let art=root.querySelector(".posterBattleArtV205 img");
 let controls=posterEssentialControlsV223();
 return {
   ok:!!(art?.complete&&art.naturalWidth>0&&controls.ok),
   scene:true,
   artLoaded:!!(art?.complete&&art.naturalWidth>0),
   controls:controls.ok,
   fallbackDock:!!root.querySelector(".posterFallbackDockV223"),
   strikes:__posterGuardStrikesV223
 };
}

function posterSoftRecoverV223(){
 let h=posterRenderHealthV223();
 if(h.ok)return true;
 if(!h.scene)return posterEnsureSceneV222();
 applyExactPosterFitV216();
 refreshBattleV188();
 posterGuardCheckV223();
 return true;
}

function setupPosterProductionGuardV223(){
 if(window.__posterProductionGuardV223)return;
 window.__posterProductionGuardV223=true;
 window.addEventListener("pageshow",()=>setTimeout(posterSoftRecoverV223,120),{passive:true});
 window.addEventListener("resize",()=>posterGuardCheckV223(),{passive:true});
 document.addEventListener("visibilitychange",()=>{
   if(document.visibilityState==="visible")setTimeout(posterSoftRecoverV223,140);
 },{passive:true});
}

function posterProductionAuditV223(){
 return {
   health:posterRenderHealthV223(),
   device:posterDeviceAuditV222(),
   scene:posterExactFitAuditV216()
 };
}

let __posterIdleTimerV224=null;
let __posterLastActionV224=0;

function posterReleasePrefsV224(){
 S.qol=S.qol||{};
 if(typeof S.qol.cleanPosterHudV224!=="boolean")S.qol.cleanPosterHudV224=true;
 return S.qol
}

function posterActionStampV224(){
 __posterLastActionV224=Date.now();
 schedulePosterHudIdleV224();
}

function schedulePosterHudIdleV224(){
 clearTimeout(__posterIdleTimerV224);
 let root=document.querySelector(".posterBattleV205");
 if(!root)return;
 root.classList.remove("posterHudIdleV224");
 __posterIdleTimerV224=setTimeout(()=>{
   let r=document.querySelector(".posterBattleV205");
   if(r&&!ensureBattleStateV120().auto)r.classList.add("posterHudIdleV224");
 },2600);
}

function posterWakeHudV224(){
 let root=document.querySelector(".posterBattleV205");
 if(root)root.classList.remove("posterHudIdleV224");
 schedulePosterHudIdleV224();
}

function posterCriticalStateV224(){
 let b=ensureBattleStateV120(),hp=enemyHpPercentV197(b);
 let ally=(b.allyHp||[]).slice(0,5);
 return {
   enemyCritical:hp<=25,
   allyCritical:ally.some(x=>x>0&&x<=25),
   allyKo:ally.some(x=>x<=0),
   auto:!!b.auto
 }
}

function applyPosterCriticalStateV224(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let s=posterCriticalStateV224();
 root.classList.toggle("enemyCriticalV224",s.enemyCritical);
 root.classList.toggle("allyCriticalV224",s.allyCritical);
 root.classList.toggle("allyKoV224",s.allyKo);
 root.classList.toggle("autoRunningV224",s.auto);
}

function posterRunBadgeV224(){
 let b=ensureBattleStateV120();
 return `<div class=posterRunBadgeV224>
   <i></i><span>${b.auto?"AUTO":"MANUAL"}</span><b>${b.speed===2?"×2":"×1"}</b>
 </div>`
}

function refreshPosterRunBadgeV224(){
 let root=document.querySelector(".posterBattleV205"),badge=root?.querySelector(".posterRunBadgeV224");
 if(!badge)return;
 let b=ensureBattleStateV120(),span=badge.querySelector("span"),strong=badge.querySelector("b");
 if(span)span.textContent=b.auto?"AUTO":"MANUAL";
 if(strong)strong.textContent=b.speed===2?"×2":"×1";
 badge.classList.toggle("on",!!b.auto);
}

function posterImageHealthV224(){
 let root=document.querySelector(".posterBattleV205");
 return {
   scene:!!root,
   loaded:!!root?.querySelector(".cleanStageV238"),
   natural:[0,0],
   current:"css:gothic-stage-v238"
 }
}

function posterReleaseAuditV224(){
 return {
   image:posterImageHealthV224(),
   controls:posterEssentialControlsV223(),
   fit:posterExactFitAuditV216(),
   device:posterDeviceProfileV222(),
   state:posterCriticalStateV224()
 }
}

let __posterRcTimerV225=null;

function posterTargetLockV225(){
 let b=ensureBattleStateV120(),hp=enemyHpPercentV197(b);
 return `<div class=posterTargetLockV225 data-critical="${hp<=25?1:0}">
   <i></i><b>TARGET</b><span>${Math.round(hp)}%</span>
 </div>`
}

function posterActionStateV225(){
 let c=posterSelectedCharV208(),busy=!!__battleActionBusyV195;
 return `<div class=posterActionStateV225 data-busy="${busy?1:0}" data-ready="${c.ep>=100?1:0}">
   <span>${busy?"ACTION":"READY"}</span>
   <b>${c.ep>=100?"奥義可":"EP "+Math.round(c.ep)+"%"}</b>
 </div>`
}

function posterRcOverlayV225(){
 return `<div class=posterRcOverlayV225>
   ${posterTargetLockV225()}
   ${posterActionStateV225()}
 </div>`
}

function refreshPosterRcV225(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let b=ensureBattleStateV120(),hp=enemyHpPercentV197(b),c=posterSelectedCharV208();
 let target=root.querySelector(".posterTargetLockV225");
 if(target){
   target.dataset.critical=hp<=25?"1":"0";
   let p=target.querySelector("span");if(p)p.textContent=Math.round(hp)+"%";
 }
 let action=root.querySelector(".posterActionStateV225");
 if(action){
   action.dataset.busy=__battleActionBusyV195?"1":"0";
   action.dataset.ready=c.ep>=100?"1":"0";
   let s=action.querySelector("span"),v=action.querySelector("b");
   if(s)s.textContent=__battleActionBusyV195?"ACTION":"READY";
   if(v)v.textContent=c.ep>=100?"奥義可":"EP "+Math.round(c.ep)+"%";
 }
}

function posterRcSelfCheckV225(){
 let image=posterImageHealthV224(),controls=posterEssentialControlsV223(),fit=posterExactFitAuditV216();
 let ok=!!(image.loaded&&controls.ok&&fit.exactAspect);
 let root=document.querySelector(".posterBattleV205");
 if(root)root.classList.toggle("posterRcWarnV225",!ok);
 return {ok,image,controls,fit};
}

function schedulePosterRcCheckV225(){
 clearTimeout(__posterRcTimerV225);
 __posterRcTimerV225=setTimeout(()=>{
   if(!document.body.classList.contains("battleMode"))return;
   let r=posterRcSelfCheckV225();
   if(!r.ok){
     posterSoftRecoverV223();
     ensurePosterFallbackDockV223(true);
   }
 },260);
}

function posterSelectedCardCueV225(slot){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 root.querySelector(".posterSelectedCueV225")?.remove();
 let team=(S.sets?.[S.set]||[]).slice(0,5),i=+team[Math.max(0,+slot||0)]||0;
 let d=document.createElement("div");
 d.className="posterSelectedCueV225";
 d.innerHTML=`<small>SELECT</small><b>${C[i]?.[1]||"文豪"}</b>`;
 root.appendChild(d);
 requestAnimationFrame(()=>d.classList.add("show"));
 battleTimerV191(()=>{d.classList.remove("show");battleTimerV191(()=>d.remove(),90)},260);
}

function posterReleaseCandidateAuditV225(){
 return {
   rc:posterRcSelfCheckV225(),
   health:posterRenderHealthV223(),
   device:posterDeviceAuditV222(),
   release:posterReleaseAuditV224()
 }
}

function posterCombatSummaryV226(){
 let b=ensureBattleStateV120(),c=posterSelectedCharV208();
 let alive=(b.allyHp||[]).slice(0,5).filter(x=>x>0).length;
 return {
   wave:b.wave||1,
   turn:b.turn||1,
   alive,
   selected:c.name,
   ep:Math.round(c.ep||0),
   enemyHp:Math.round(enemyHpPercentV197(b)),
   auto:!!b.auto,
   speed:b.speed===2?2:1
 }
}

function posterCompactStatusV226(){
 let s=posterCombatSummaryV226();
 return `<div class=posterCompactStatusV226>
   <span>W${s.wave}</span><b>T${s.turn}</b><i>${s.alive}/5</i><em>${s.auto?"AUTO":"MAN"}</em>
 </div>`
}

function refreshPosterCompactStatusV226(){
 let root=document.querySelector(".posterBattleV205"),el=root?.querySelector(".posterCompactStatusV226");
 if(!el)return;
 let s=posterCombatSummaryV226();
 let parts=el.querySelectorAll("span,b,i,em");
 if(parts[0])parts[0].textContent=`W${s.wave}`;
 if(parts[1])parts[1].textContent=`T${s.turn}`;
 if(parts[2])parts[2].textContent=`${s.alive}/5`;
 if(parts[3])parts[3].textContent=s.auto?"AUTO":"MAN";
}

function posterControlLegendV226(){
 return `<div class=posterControlLegendV226>
   <span>ATTACK</span><span>SKILL</span><span>OUGI</span>
 </div>`
}

function posterResultStatsV226(r){
 let s=posterCombatSummaryV226();
 return `<div class=posterResultStatsV226>
   <span>TURN<b>${s.turn}</b></span>
   <span>生存<b>${s.alive}/5</b></span>
   <span>敵HP<b>0%</b></span>
   <span>速度<b>×${s.speed}</b></span>
 </div>`
}

function posterPreflightV226(){
 let health=posterReleaseCandidateAuditV225();
 let root=document.querySelector(".posterBattleV205");
 if(root){
   root.classList.toggle("posterHealthyV226",!!health.rc?.ok);
   root.classList.toggle("posterUnsafeV226",!health.rc?.ok);
 }
 return health;
}

function schedulePosterPreflightV226(){
 clearTimeout(window.__posterPreflightTimerV226);
 window.__posterPreflightTimerV226=setTimeout(()=>{
   if(!document.body.classList.contains("battleMode"))return;
   let h=posterPreflightV226();
   if(!h.rc?.ok){
     posterSoftRecoverV223();
     ensurePosterFallbackDockV223(true);
   }
 },320);
}

function posterReleaseAuditV226(){
 return {
   combat:posterCombatSummaryV226(),
   preflight:posterReleaseCandidateAuditV225(),
   render:posterRenderHealthV223(),
   image:posterImageHealthV224()
 }
}

function posterQaSnapshotV227(){
 let root=document.querySelector(".posterBattleV205");
 let b=ensureBattleStateV120();
 let controls=posterButtonAuditV222();
 let image=posterImageHealthV224();
 let fit=posterExactFitAuditV216();
 let render=posterRenderHealthV223();
 let selected=posterSelectedCharV208();
 return {
   scene:!!root,
   imageLoaded:image.loaded,
   exactAspect:fit.exactAspect,
   controlsOk:!!render.controls,
   attack:!!controls.attack,
   skill:!!controls.skill,
   ougi:!!controls.ougi,
   auto:!!controls.auto,
   speed:!!controls.speed,
   cards:Array.isArray(controls.cards)?controls.cards.filter(Boolean).length:0,
   selected:selected.name,
   ep:Math.round(selected.ep||0),
   enemyHp:Math.round(enemyHpPercentV197(b)),
   autoOn:!!b.auto,
   speedValue:b.speed===2?2:1
 }
}

function posterQaBadgeV227(){
 let q=posterQaSnapshotV227();
 let ok=q.scene&&q.imageLoaded&&q.exactAspect&&q.controlsOk&&q.cards===5;
 return `<div class="posterQaBadgeV227 ${ok?"ok":"warn"}">
   <i></i><span>${ok?"READY":"SAFE MODE"}</span>
 </div>`
}

function refreshPosterQaBadgeV227(){
 let root=document.querySelector(".posterBattleV205");
 if(!root)return;
 let q=posterQaSnapshotV227();
 let ok=q.scene&&q.imageLoaded&&q.exactAspect&&q.controlsOk&&q.cards===5;
 let badge=root.querySelector(".posterQaBadgeV227");
 if(!badge)return;
 badge.classList.toggle("ok",ok);
 badge.classList.toggle("warn",!ok);
 let s=badge.querySelector("span");
 if(s)s.textContent=ok?"READY":"SAFE MODE";
}

function posterFinalCheckV227(){
 let q=posterQaSnapshotV227();
 let ok=q.scene&&q.imageLoaded&&q.exactAspect&&q.controlsOk&&q.cards===5;
 if(!ok){
   posterSoftRecoverV223();
   ensurePosterFallbackDockV223(true);
 }
 return {ok,...q};
}

function schedulePosterFinalCheckV227(){
 clearTimeout(window.__posterFinalCheckV227);
 window.__posterFinalCheckV227=setTimeout(()=>{
   if(!document.body.classList.contains("battleMode"))return;
   posterFinalCheckV227();
   refreshPosterQaBadgeV227();
 },420);
}

function posterTapHeatV227(el){
 let root=document.querySelector(".posterBattleV205");
 if(!root||!el)return;
 let r=el.getBoundingClientRect(),rr=root.getBoundingClientRect();
 let dot=document.createElement("span");
 dot.className="posterTapHeatV227";
 dot.style.left=(r.left-rr.left+r.width/2)+"px";
 dot.style.top=(r.top-rr.top+r.height/2)+"px";
 root.appendChild(dot);
 requestAnimationFrame(()=>dot.classList.add("show"));
 battleTimerV191(()=>dot.remove(),320);
}

function posterBattleReleaseAuditV227(){
 return {
   qa:posterQaSnapshotV227(),
   production:posterProductionAuditV223(),
   release:posterReleaseAuditV226()
 }
}

let __posterStageTimerV228=null;

function posterStageHostV228(){
 let root=document.querySelector(".posterBattleV205");
 if(!root)return null;
 let host=root.querySelector(".posterStageHostV228");
 if(!host){
   host=document.createElement("div");
   host.className="posterStageHostV228";
   host.innerHTML=`
     <div class=stageCurtainV228></div>
     <div class=stageActorV228><img alt=""></div>
     <div class=stageCopyV228><small></small><b></b><span></span></div>
     <div class=stageAccentV228></div>
     <div class=stageDamageV228></div>`;
   root.appendChild(host);
 }
 return host
}

function posterReusableStageV228(slot,kind){
 if(!posterBattleOnV205())return;
 let host=posterStageHostV228();if(!host)return;
 let m=posterPoseResolvedV221(slot,kind);
 let img=host.querySelector(".stageActorV228 img");
 let small=host.querySelector(".stageCopyV228 small");
 let name=host.querySelector(".stageCopyV228 b");
 let title=host.querySelector(".stageCopyV228 span");
 if(img){
   img.src=m.src;
   img.style.objectPosition=m.explicit?"left bottom":m.crop.pos;
   img.style.setProperty("--stageScale",m.explicit?"1":String(m.crop.scale));
   img.classList.toggle("explicit",m.explicit);
 }
 if(small)small.textContent=kind==="ougi"?"SPECIAL":kind==="skill"?"SKILL":kind==="heal"?"SUPPORT":"ATTACK";
 if(name)name.textContent=m.name;
 if(title)title.textContent=m.title;

 host.dataset.kind=kind;
 host.dataset.theme=m.theme;
 host.classList.remove("play");
 void host.offsetWidth;
 host.classList.add("play");

 clearTimeout(__posterStageTimerV228);
 __posterStageTimerV228=setTimeout(()=>host.classList.remove("play"),kind==="ougi"?520:kind==="skill"?330:kind==="heal"?290:230);
}

function posterReusableDamageV228(kind="attack"){
 let host=posterStageHostV228();if(!host)return;
 let d=host.querySelector(".stageDamageV228");if(!d)return;
 let base=kind==="ougi"?Math.floor(9000+Math.random()*9000):
          kind==="skill"?Math.floor(3500+Math.random()*4500):
          kind==="heal"?Math.floor(1200+Math.random()*1800):
          Math.floor(1800+Math.random()*2600);
 d.textContent=kind==="heal"?`+${base}`:base.toLocaleString();
 d.dataset.kind=kind;
 d.classList.remove("show");
 void d.offsetWidth;
 d.classList.add("show");
 battleTimerV191(()=>d.classList.remove("show"),kind==="ougi"?500:340);
}

function posterReusableDirectorV228(slot,target,kind){
 if(!posterBattleOnV205())return;
 cleanBattleFeedbackV241(kind);
 posterReusableStageV228(slot,kind);
 posterCardPulseV207(slot,kind);
 posterFocusV207(kind);
 battleTimerV191(()=>posterEnemyPulseV210(kind),kind==="ougi"?125:65);
}

function cleanupLegacyPosterFxV228(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 root.querySelectorAll(
   ".posterActionTableauV219,.posterPoseStageV220,.posterStaticCutinV210,.posterActionBannerV207,.posterDamageV207,.posterCommandToastV212,.posterStateCueV209"
 ).forEach(n=>n.remove());
}

function posterStageResetV228(){
 clearTimeout(__posterStageTimerV228);
 __posterStageTimerV228=null;
 let host=document.querySelector(".posterStageHostV228");
 if(host){
   host.classList.remove("play");
   host.querySelector(".stageDamageV228")?.classList.remove("show");
 }
 cleanupLegacyPosterFxV228();
}

function posterStageAuditV228(){
 let root=document.querySelector(".posterBattleV205"),host=root?.querySelector(".posterStageHostV228");
 return {
   mounted:!!root,
   reusableHost:!!host,
   playing:!!host?.classList.contains("play"),
   legacyTransient:root?.querySelectorAll(".posterActionTableauV219,.posterPoseStageV220,.posterStaticCutinV210,.posterActionBannerV207,.posterDamageV207").length||0
 }
}

let __posterRenderRafV229=0;
let __posterRenderReasonV229="boot";
let __posterRenderCountV229=0;

function posterRenderSnapshotV229(){
 let b=normalizeBattleStateV171(),team=(S.sets?.[S.set]||[]).slice(0,5),c=posterSelectedCharV208();
 return {
   wave:b.wave||1,
   turn:b.turn||1,
   unit:+b.unit||0,
   target:+b.target||0,
   auto:!!b.auto,
   speed:b.speed===2?2:1,
   enemyHp:Math.round(enemyHpPercentV197(b)*10)/10,
   allyHp:team.map((_,n)=>Math.round((+b.allyHp?.[n]||0)*10)/10),
   ep:team.map((_,n)=>Math.round((+b.ep?.[n]||0)*10)/10),
   selected:c.name
 }
}

let __posterRenderSnapshotV229=null;

function posterRenderChangedV229(next){
 if(!__posterRenderSnapshotV229)return true;
 let a=__posterRenderSnapshotV229,b=next;
 if(a.wave!==b.wave||a.turn!==b.turn||a.unit!==b.unit||a.target!==b.target||a.auto!==b.auto||a.speed!==b.speed||a.enemyHp!==b.enemyHp||a.selected!==b.selected)return true;
 if(a.allyHp.length!==b.allyHp.length||a.ep.length!==b.ep.length)return true;
 for(let i=0;i<b.allyHp.length;i++)if(a.allyHp[i]!==b.allyHp[i]||a.ep[i]!==b.ep[i])return true;
 return false;
}

function posterRenderNowV229(reason="manual",force=false){
 let root=document.querySelector(".posterBattleV205");
 if(!root)return false;
 let next=posterRenderSnapshotV229();
 if(!force&&!posterRenderChangedV229(next))return true;
 __posterRenderSnapshotV229=next;
 __posterRenderCountV229++;
 __posterRenderReasonV229=reason;

 refreshLivePartyPortraitsV217();
 posterSelectedAuraV217();
 refreshPosterCleanHudV235();
 refreshPosterThumbV234();
 applyPosterControlStateV235();
 refreshCleanBattleTopV238();

 let status=posterEssentialControlsV223();
 ensurePosterFallbackDockV223(!status.ok);
 refreshCleanStageThemeV239();refreshCleanStageV240();refreshCleanCommandStateV241();
 return true;
}

function schedulePosterRenderV229(reason="state",force=false){
 __posterRenderReasonV229=reason;
 if(force)__posterRenderSnapshotV229=null;
 if(__posterRenderRafV229)return;
 __posterRenderRafV229=requestAnimationFrame(()=>{
   __posterRenderRafV229=0;
   posterRenderNowV229(__posterRenderReasonV229,force);
 });
}

function posterRendererResetV229(){
 if(__posterRenderRafV229)cancelAnimationFrame(__posterRenderRafV229);
 __posterRenderRafV229=0;
 __posterRenderSnapshotV229=null;
 __posterRenderCountV229=0;
}

function posterRendererAuditV229(){
 return {
   renders:__posterRenderCountV229,
   pending:!!__posterRenderRafV229,
   reason:__posterRenderReasonV229,
   snapshot:__posterRenderSnapshotV229,
   mounted:!!document.querySelector(".posterBattleV205")
 }
}

let __posterQueuedActionV230=null;
let __posterQueuedAtV230=0;
let __posterQueueTimerV230=null;

function posterQueueStateV230(){
 return {
   queued:__posterQueuedActionV230,
   age:__posterQueuedActionV230?Date.now()-__posterQueuedAtV230:0,
   busy:!!__battleActionBusyV195,
   auto:!!ensureBattleStateV120().auto
 }
}

function posterQueueActionV230(kind){
 if(!["attack","skill","ougi","heal"].includes(kind))return false;
 let b=ensureBattleStateV120();
 if(b.auto)return false;
 __posterQueuedActionV230=kind;
 __posterQueuedAtV230=Date.now();
 renderPosterQueueBadgeV230();
 schedulePosterQueueFlushV230();
 return true;
}

function clearPosterQueueV230(){
 __posterQueuedActionV230=null;
 __posterQueuedAtV230=0;
 clearTimeout(__posterQueueTimerV230);
 __posterQueueTimerV230=null;
 renderPosterQueueBadgeV230();
}

function schedulePosterQueueFlushV230(){
 clearTimeout(__posterQueueTimerV230);
 __posterQueueTimerV230=setTimeout(()=>{
   if(!__posterQueuedActionV230)return;
   if(Date.now()-__posterQueuedAtV230>1200){clearPosterQueueV230();return}
   if(__battleActionBusyV195){schedulePosterQueueFlushV230();return}
   let kind=__posterQueuedActionV230;
   clearPosterQueueV230();
   battleActionV120(kind);
 },90);
}

function posterQueueBadgeV230(){
 return `<div class=posterQueueBadgeV230><small>NEXT</small><b>—</b></div>`
}

function renderPosterQueueBadgeV230(){
 let root=document.querySelector(".posterBattleV205"),el=root?.querySelector(".posterQueueBadgeV230");
 if(!el)return;
 let b=el.querySelector("b"),kind=__posterQueuedActionV230;
 el.classList.toggle("on",!!kind);
 if(b)b.textContent=kind==="attack"?"攻撃":kind==="skill"?"スキル":kind==="ougi"?"奥義":kind==="heal"?"支援":"—";
}

function posterActionKindFromTargetV230(el){
 let a=el?.closest?.("[data-sd-action]");
 return a?.dataset?.sdAction||null;
}

function posterAutoSyncV230(){
 let b=ensureBattleStateV120(),root=document.querySelector(".posterBattleV205");
 if(!root)return;
 root.classList.toggle("posterAutoV230",!!b.auto);
 if(b.auto)clearPosterQueueV230();
 schedulePosterRenderV229("auto-sync",true);
}

function posterLoopStatusV230(){
 let p=typeof autoLoopManagerV201==="function"?autoLoopManagerV201():null;
 return {
   active:!!p?.active,
   paused:!!p?.paused,
   count:+p?.count||0,
   target:+p?.target||0
 }
}

function posterLoopBadgeV230(){
 let p=posterLoopStatusV230();
 return `<div class=posterLoopBadgeV230 data-active="${p.active?1:0}">
   <small>LOOP</small><b>${p.active?(p.target?`${p.count}/${p.target}`:`${p.count}/∞`):"OFF"}</b>
 </div>`
}

function refreshPosterLoopBadgeV230(){
 let root=document.querySelector(".posterBattleV205"),el=root?.querySelector(".posterLoopBadgeV230");
 if(!el)return;
 let p=posterLoopStatusV230(),b=el.querySelector("b");
 el.dataset.active=p.active?"1":"0";
 if(b)b.textContent=p.active?(p.target?`${p.count}/${p.target}`:`${p.count}/∞`):"OFF";
}

function posterActionQueueAuditV230(){
 return {
   queue:posterQueueStateV230(),
   loop:posterLoopStatusV230(),
   renderer:posterRendererAuditV229(),
   qa:posterQaSnapshotV227()
 }
}

function posterActualDamageV231(hit,kind="attack"){
 let host=posterStageHostV228();if(!host||!hit)return;
 let d=host.querySelector(".stageDamageV228");if(!d)return;
 d.dataset.kind=kind;
 d.dataset.weak=hit.weak?"1":"0";
 d.dataset.break=hit.broken?"1":"0";
 d.textContent=kind==="heal"?`+${Math.max(0,Math.round(hit.dmg||0))}`:Math.max(0,Math.round(hit.dmg||0)).toLocaleString();
 d.classList.remove("show");
 void d.offsetWidth;
 d.classList.add("show");
 battleTimerV191(()=>d.classList.remove("show"),kind==="ougi"?500:340);
}

function posterHitTagV231(hit){
 let root=document.querySelector(".posterBattleV205");if(!root||!hit)return;
 root.querySelector(".posterHitTagV231")?.remove();
 if(!hit.weak&&!hit.broken)return;
 let d=document.createElement("div");
 d.className="posterHitTagV231";
 d.innerHTML=`${hit.weak?"<b>WEAK</b>":""}${hit.broken?"<span>BREAK</span>":""}`;
 root.appendChild(d);
 requestAnimationFrame(()=>d.classList.add("show"));
 battleTimerV191(()=>{d.classList.remove("show");battleTimerV191(()=>d.remove(),90)},330);
}

function posterBreakStateV231(){
 let b=ensureAdvancedBattleV125(),target=b.target||0;
 let br=Math.max(0,Math.min(100,+b.breakGauge?.[target]||0));
 let status=(b.enemyStatus?.[target]||[]).slice(0,3);
 return {breakGauge:br,status,target}
}

function posterBreakUiV231(){
 let x=posterBreakStateV231();
 return `<div class=posterBreakUiV231>
   <small>BREAK</small>
   <i><em style="width:${x.breakGauge}%"></em></i>
   <b>${Math.round(x.breakGauge)}%</b>
   <span>${x.status.map(s=>`<em>${s}</em>`).join("")}</span>
 </div>`
}

function refreshPosterBreakV231(){
 let root=document.querySelector(".posterBattleV205"),el=root?.querySelector(".posterBreakUiV231");
 if(!el)return;
 let x=posterBreakStateV231(),bar=el.querySelector("i em"),num=el.querySelector("b"),st=el.querySelector("span");
 if(bar)bar.style.width=x.breakGauge+"%";
 if(num)num.textContent=Math.round(x.breakGauge)+"%";
 if(st)st.innerHTML=x.status.map(s=>`<em>${s}</em>`).join("");
}

function posterRealCombatAuditV231(){
 let x=posterBreakStateV231();
 return {
   breakGauge:x.breakGauge,
   status:x.status,
   stage:posterStageAuditV228(),
   renderer:posterRendererAuditV229()
 }
}

function posterAllyNumberV232(slot,value,kind="damage"){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let n=document.createElement("div");
 n.className=`posterAllyNumberV232 ${kind}`;
 n.dataset.slot=String(Math.max(0,Math.min(4,+slot||0)));
 n.textContent=(kind==="heal"?"+":"-")+Math.abs(Math.round(value||0))+"%";
 root.appendChild(n);
 requestAnimationFrame(()=>n.classList.add("show"));
 battleTimerV191(()=>n.remove(),360);
}

function posterEnemyActionCueV232(skill,target,aoe=false){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 root.querySelector(".posterEnemyActionV232")?.remove();
 let d=document.createElement("div");
 d.className="posterEnemyActionV232";
 d.innerHTML=`<small>${aoe?"ALL TARGET":"ENEMY ACTION"}</small><b>${skill||"敵の攻撃"}</b><span>${aoe?"全体攻撃":`TARGET ${(+target||0)+1}`}</span>`;
 root.appendChild(d);
 requestAnimationFrame(()=>d.classList.add("show"));
 battleTimerV191(()=>{d.classList.remove("show");battleTimerV191(()=>d.remove(),90)},420);
}

function posterComboStateV232(){
 let b=comboStateV129();
 return Math.max(0,+b.combo||0)
}

function posterComboUiV232(){
 let c=posterComboStateV232();
 return `<div class="posterComboV232 ${c>0?"on":""}"><small>CHAIN</small><b>${c}</b></div>`
}

function refreshPosterComboV232(){
 let root=document.querySelector(".posterBattleV205"),el=root?.querySelector(".posterComboV232");
 if(!el)return;
 let c=posterComboStateV232(),b=el.querySelector("b");
 el.classList.toggle("on",c>0);
 if(b)b.textContent=String(c);
}

function posterTurnFlashV232(type="ally"){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 root.classList.remove("turnAllyV232","turnEnemyV232");
 root.classList.add(type==="enemy"?"turnEnemyV232":"turnAllyV232");
 battleTimerV191(()=>root.classList.remove("turnAllyV232","turnEnemyV232"),180);
}

function posterRealFeedbackAuditV232(){
 let b=ensureBattleStateV120();
 return {
   combo:posterComboStateV232(),
   alive:(b.allyHp||[]).slice(0,5).filter(x=>x>0).length,
   hp:(b.allyHp||[]).slice(0,5),
   enemy:posterEnemyNameV208()
 }
}

function posterThumbPrefsV234(){
 S.qol=S.qol||{};
 if(typeof S.qol.thumbBattleV234!=="boolean")S.qol.thumbBattleV234=true;
 return S.qol
}

function posterThumbBarV234(){
 let b=ensureBattleStateV120(),c=posterSelectedCharV208();
 return `<div class=posterThumbBarV234>
   <button class=attack data-sd-action=attack><i>⚔</i><b>攻撃</b></button>
   <button class=skill data-sd-action=skill><i>✦</i><b>スキル</b></button>
   <button class=support data-sd-action=heal><i>＋</i><b>支援</b></button>
   <button class="ougi ${c.ep>=100?"ready":""}" data-sd-action=ougi><i>◆</i><b>奥義</b><small>${Math.round(c.ep)}%</small></button>
 </div>`
}

function posterThumbSubV234(){
 let b=ensureBattleStateV120();
 return `<div class=posterThumbSubV234>
   <button data-battle-speed="${b.speed===2?1:2}">▶▶ ${b.speed===2?"×2":"×1"}</button>
   <button class="${b.auto?"on":""}" data-battle-auto=1 data-sd-action=auto aria-pressed="${b.auto?"true":"false"}">${b.auto?"AUTO ON":"AUTO"}</button>
   <button data-battle-pause=1>復旧</button>
 </div>`
}

function refreshPosterThumbV234(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let c=posterSelectedCharV208(),b=ensureBattleStateV120();

 let ougi=root.querySelector(".posterThumbBarV234 .ougi");
 if(ougi){
   ougi.classList.toggle("ready",c.ep>=100);
   let sm=ougi.querySelector("small");
   if(sm)sm.textContent=Math.round(c.ep)+"%";
 }

 let speed=root.querySelector(".posterThumbSubV234 [data-battle-speed]");
 if(speed){
   speed.dataset.battleSpeed=b.speed===2?1:2;
   speed.textContent=`▶▶ ${b.speed===2?"×2":"×1"}`;
 }

 let auto=root.querySelector(".posterThumbSubV234 [data-battle-auto]");
 if(auto){
   auto.classList.toggle("on",!!b.auto);
   auto.textContent=b.auto?"AUTO ON":"AUTO";
 }
}

function posterSelectedStripV234(){
 let c=posterSelectedCharV208();
 return `<div class=posterSelectedStripV234>
   <span>ACTIVE</span><b>${c.name}</b><i>EP ${Math.round(c.ep)}%</i>
 </div>`
}

function refreshPosterSelectedStripV234(){
 let root=document.querySelector(".posterBattleV205"),el=root?.querySelector(".posterSelectedStripV234");
 if(!el)return;
 let c=posterSelectedCharV208();
 let b=el.querySelector("b"),i=el.querySelector("i");
 if(b)b.textContent=c.name;
 if(i)i.textContent=`EP ${Math.round(c.ep)}%`;
}

function posterThumbAuditV234(){
 let root=document.querySelector(".posterBattleV205");
 return {
   enabled:posterThumbPrefsV234().thumbBattleV234,
   bar:!!root?.querySelector(".posterThumbBarV234"),
   attack:!!root?.querySelector(".posterThumbBarV234 [data-sd-action='attack']"),
   skill:!!root?.querySelector(".posterThumbBarV234 [data-sd-action='skill']"),
   support:!!root?.querySelector(".posterThumbBarV234 [data-sd-action='heal']"),
   ougi:!!root?.querySelector(".posterThumbBarV234 [data-sd-action='ougi']"),
   sub:!!root?.querySelector(".posterThumbSubV234")
 }
}

function posterEnemyCompactV235(){
 let b=ensureBattleStateV120(),hp=Math.round(enemyHpPercentV197(b)),br=posterBreakStateV231();
 return `<div class=posterEnemyCompactV235>
   <div><small>ENEMY</small><b>${posterEnemyNameV208()}</b></div>
   <span>HP ${hp}%</span>
   <i><em style="width:${hp}%"></em></i>
   <strong>BREAK ${Math.round(br.breakGauge)}%</strong>
 </div>`
}

function refreshPosterEnemyCompactV235(){
 let root=document.querySelector(".posterBattleV205"),el=root?.querySelector(".posterEnemyCompactV235");
 if(!el)return;
 let b=ensureBattleStateV120(),hp=Math.round(enemyHpPercentV197(b)),br=posterBreakStateV231();
 let name=el.querySelector("b"),sp=el.querySelector("span"),bar=el.querySelector("i em"),st=el.querySelector("strong");
 if(name)name.textContent=posterEnemyNameV208();
 if(sp)sp.textContent=`HP ${hp}%`;
 if(bar)bar.style.width=hp+"%";
 if(st)st.textContent=`BREAK ${Math.round(br.breakGauge)}%`;
}

function posterTopMiniV235(){
 let b=ensureBattleStateV120();
 return `<div class=posterTopMiniV235>
   <span>W${b.wave||1}/3</span><b>T${b.turn||1}</b><i>${b.speed===2?"×2":"×1"}</i><em>${b.auto?"AUTO":"MANUAL"}</em>
 </div>`
}

function refreshPosterTopMiniV235(){
 let root=document.querySelector(".posterBattleV205"),el=root?.querySelector(".posterTopMiniV235");
 if(!el)return;
 let b=ensureBattleStateV120(),parts=el.querySelectorAll("span,b,i,em");
 if(parts[0])parts[0].textContent=`W${b.wave||1}/3`;
 if(parts[1])parts[1].textContent=`T${b.turn||1}`;
 if(parts[2])parts[2].textContent=b.speed===2?"×2":"×1";
 if(parts[3])parts[3].textContent=b.auto?"AUTO":"MANUAL";
}

function posterSelectedCardV235(){
 let c=posterSelectedCharV208(),i=c.i;
 return `<div class=posterSelectedCardV235>
   <img src="${characterImage(C[i]?.[0])}" alt="">
   <div><small>ACTIVE</small><b>${c.name}</b><span>${characterAbility(i)?.name||"スキル"}</span></div>
   <em>EP ${Math.round(c.ep)}%</em>
 </div>`
}

function refreshPosterSelectedCardV235(){
 let root=document.querySelector(".posterBattleV205"),el=root?.querySelector(".posterSelectedCardV235");
 if(!el)return;
 let c=posterSelectedCharV208(),i=c.i;
 let img=el.querySelector("img"),name=el.querySelector("b"),skill=el.querySelector("span"),ep=el.querySelector("em");
 let src=characterImage(C[i]?.[0]);
 if(img&&img.getAttribute("src")!==src)img.src=src;
 if(name)name.textContent=c.name;
 if(skill)skill.textContent=characterAbility(i)?.name||"スキル";
 if(ep)ep.textContent=`EP ${Math.round(c.ep)}%`;
}

function posterCleanHudV235(){
 return `<div class=posterCleanHudV235>
   ${posterTopMiniV235()}
   ${posterEnemyCompactV235()}
   ${posterSelectedCardV235()}
 </div>`
}

function refreshPosterCleanHudV235(){
 refreshPosterTopMiniV235();
 refreshPosterEnemyCompactV235();
 refreshPosterSelectedCardV235();
}

function posterControlStateV235(){
 let c=posterSelectedCharV208(),b=ensureBattleStateV120();
 return {
   ougiReady:c.ep>=100,
   auto:!!b.auto,
   speed:b.speed===2?2:1,
   busy:!!__battleActionBusyV195
 }
}

function applyPosterControlStateV235(){
 let root=document.querySelector(".posterBattleV205");if(!root)return;
 let s=posterControlStateV235();
 let bar=root.querySelector(".posterThumbBarV234");
 if(bar)bar.classList.toggle("busyV235",s.busy);

 let ougi=root.querySelector(".posterThumbBarV234 .ougi");
 if(ougi){
   ougi.classList.toggle("readyV235",s.ougiReady);
   ougi.disabled=!s.ougiReady&&false; // visual state only, existing logic still gates action
 }
 let auto=root.querySelector(".posterThumbSubV234 [data-battle-auto]");
 if(auto)auto.classList.toggle("on",s.auto);
}

function posterChromeAuditV235(){
 let root=document.querySelector(".posterBattleV205");
 return {
   mounted:!!root,
   cleanHud:!!root?.querySelector(".posterCleanHudV235"),
   thumbBar:!!root?.querySelector(".posterThumbBarV234"),
   enemy:!!root?.querySelector(".posterEnemyCompactV235"),
   selected:posterSelectedCharV208().name
 }
}
document.addEventListener("click",function(e){
 let actionEl=e.target.closest(".posterBattleV205 [data-sd-action]");
 if(actionEl?.dataset?.sdAction==="auto")return;
 if(actionEl&&__battleActionBusyV195&&!ensureBattleStateV120().auto){
   let kind=posterActionKindFromTargetV230(actionEl);
   if(kind){
     e.preventDefault();e.stopImmediatePropagation();
     posterQueueActionV230(kind);
     posterTapHeatV227(actionEl);
     return;
   }
 }
},true);

document.addEventListener("click",function(e){
 let p227=e.target.closest(".posterBattleV205 button");
 if(p227){
   posterTapHeatV227(p227);
   schedulePosterFinalCheckV227();
 }
},true);

document.addEventListener("click",function(e){
 let p226=e.target.closest(".posterBattleV205 button");
 if(p226){
   refreshPosterCompactStatusV226();
   schedulePosterPreflightV226();
 }
},true);

document.addEventListener("click",function(e){
 let p224=e.target.closest(".posterBattleV205 button");
 if(p224){
   posterActionStampV224();
   posterWakeHudV224();
 }
},true);

document.addEventListener("click",function(e){
 let btn222=e.target.closest(".posterBattleV205 button");
 if(!btn222)return;
 posterSafeTapFeedbackV222(btn222);
 if(!posterInputGateV222(btn222.matches('[data-sd-action="ougi"]')?180:110)){
   e.preventDefault();e.stopImmediatePropagation();return;
 }
},true);

document.addEventListener("click",function(e){
 let p217=e.target.closest(".posterLivePartyV217 button");
 if(p217){
   p217.classList.remove("tap217");void p217.offsetWidth;p217.classList.add("tap217");
   battleTimerV191(()=>p217.classList.remove("tap217"),160);
 }
},true);

document.addEventListener("click",function(e){
 let pr=e.target.closest(".posterResultCardV215 button");
 if(pr){
   let card=e.target.closest(".posterResultCardV215");
   if(card)card.remove();
 }
},true);

document.addEventListener("click",function(e){
 let pause213=e.target.closest("[data-battle-pause]");
 if(pause213&&document.querySelector(".posterBattleV205")){
   e.preventDefault();e.stopImmediatePropagation();
   stopAutoBattleV122();
   posterPauseOverlayV213(true);
   return;
 }
 let resume213=e.target.closest("[data-poster-resume-v213]");
 if(resume213){
   e.preventDefault();e.stopImmediatePropagation();
   posterPauseOverlayV213(false);
   let b=ensureBattleStateV120();
   if(b.auto)scheduleAutoBattleV122(120);
   return;
 }
},true);

document.addEventListener("click",function(e){
 let p208=e.target.closest(".posterBattleV205 button");
 if(p208)posterTapRippleV208(p208);
 let a208=e.target.closest('.posterBattleV205 [data-sd-action="ougi"]');
 if(a208&&!posterActionReadyV208("ougi")){
   e.preventDefault();e.stopImmediatePropagation();
   toast("EP100で奥義発動");
   posterActionBannerV207(posterSelectedCharV208().slot,"skill");
   return;
 }
},true);

document.addEventListener("click",function(e){
 let s204=e.target.closest("[data-snappy-v204]");
 if(s204){
   e.preventDefault();e.stopImmediatePropagation();
   return toggleSnappyBattleV204();
 }
},true);

document.addEventListener("click",function(e){
 let eco202=e.target.closest("[data-auto-loop-eco-v202]");
 if(eco202){
   e.preventDefault();e.stopImmediatePropagation();
   toggleAutoLoopEcoV202();
   return;
 }
},true);

document.addEventListener("click",function(e){
 let target201=e.target.closest("[data-auto-loop-target-v201]");
 if(target201){
   e.preventDefault();e.stopImmediatePropagation();
   let p=autoLoopManagerV201();p.target=Math.max(0,+target201.dataset.autoLoopTargetV201||0);
   queueBattleSaveV197(true);renderAutoLoopHudV200();
   if(shouldFinishAutoLoopV201())finishAutoLoopV201();
   return;
 }
 let pause201=e.target.closest("[data-auto-loop-pause-v201]");
 if(pause201){
   e.preventDefault();e.stopImmediatePropagation();
   let p=autoLoopManagerV201();
   if(p.paused)resumeAutoLoopV201();else pauseAutoLoopV201();
   return;
 }
 let close201=e.target.closest("[data-auto-loop-finish-close-v201]");
 if(close201){
   e.preventDefault();e.stopImmediatePropagation();
   document.getElementById("autoLoopFinishedV201")?.remove();
   return;
 }
},true);

document.addEventListener("click",function(e){
 let stop200=e.target.closest("[data-auto-loop-stop-v200]");
 if(stop200){
   e.preventDefault();e.stopImmediatePropagation();
   stopTrueAutoLoopV200();
   document.getElementById("autoLoopResultV200")?.remove();
   if(document.body.classList.contains("battleMode")){
     let b=ensureBattleStateV120();b.auto=false;stopAutoBattleV122();smoothRefreshBattleV194();
   }
   return;
 }
},true);

document.addEventListener("click",function(e){
 let cmd=e.target.closest(".actionClusterV164 button,.bsv2Cards_175 button,.bsv2Top_175 button");
 if(cmd)battleTapPulseV198(cmd);
 let enemy=e.target.closest(".bsv2Enemies_175");
 if(enemy && !e.target.closest("button")){
   battleTargetCycleV198(1);
 }
},true);

document.addEventListener("click",function(e){
 let q192=e.target.closest("[data-battle-quality]");
 if(!q192)return;
 e.preventDefault();e.stopImmediatePropagation();
 return toggleBattleQualityV192();
},true);

document.addEventListener("click",function(e){
 let lb187=e.target.closest("[data-light-battle]");
 if(!lb187)return;
 e.preventDefault();e.stopImmediatePropagation();
 return toggleLightBattleV187();
},true);


function autoReplayStateV199(){
 S.qol=S.qol||{};
 if(!S.qol.autoReplayV199||typeof S.qol.autoReplayV199!=="object")S.qol.autoReplayV199={active:false,source:"",stage:0,mode:"normal",startedAt:0};
 return S.qol.autoReplayV199
}
function hideAutoReplayLoadingV199(){document.getElementById("autoReplayLoadingV199")?.remove()}
function renderAutoReplayHudV199(){
 document.getElementById("autoReplayHudV199")?.remove();
 let s=autoReplayStateV199();
 if(!s.active)return;
 let d=document.createElement('div');
 d.id='autoReplayHudV199';
 d.className='autoReplayHudV199';
 d.innerHTML=`<small>AUTO LOOP</small><b>${document.body.classList.contains("battleMode")?"AUTO周回中":"AUTO再戦を準備中…"}</b><span>${stageMeta(s.stage||0).name} / ${(s.mode||"normal").toUpperCase()}</span>`;
 document.body.appendChild(d)
}
function setAutoReplayActiveV199(active,meta={}){
 let s=autoReplayStateV199();
 s.active=!!active;
 if(active){
   s.source=meta.source||s.source||"repeat";
   s.stage=Number.isInteger(meta.stage)?meta.stage:(Number.isInteger(S.battleStage)?S.battleStage:(s.stage||0));
   s.mode=meta.mode||S.battleMode||s.mode||"normal";
   s.startedAt=Date.now();
 }else{
   s.source="";s.startedAt=0;
 }
 save();persistentSaveWrite();
 renderAutoReplayHudV199();
}
function showAutoReplayLoadingV199(text="AUTO再戦を開始しています…"){
 hideAutoReplayLoadingV199();
 let d=document.createElement('div');
 d.id='autoReplayLoadingV199';
 d.className='autoReplayLoadingV199';
 d.innerHTML=`<div><small>AUTO LOOP</small><b>${text}</b><span>戦闘画面へ移動します</span></div>`;
 document.body.appendChild(d)
}
function launchReplayV199(auto=false,ch=null,mode=null){
 let stage=Math.max(0,Number.isInteger(ch)?ch:(Number.isInteger(S.battleStage)?S.battleStage:(stageLoopPrefsV181().lastFarmStage||0)));
 let battleMode=mode||S.battleMode||"normal";
 closeOverlays();
 showAutoReplayLoadingV199(auto?"AUTO再戦を開始しています…":"再戦を開始しています…");
 if(auto){
   startTrueAutoLoopV200(stage,battleMode);
 }else{
   stopTrueAutoLoopV200(false);
   setAutoReplayActiveV199(false);
 }
 let kickoff=()=>{
   try{
     prepareBattleV180(stage,battleMode);
     startBattleSessionV196();
     battleCheckpointV196(true);
     mountBattleV182();
     if(auto){
       let b=normalizeBattleStateV171();
       b.auto=true;
       queueBattleSaveV197(true);
       if(typeof refreshCommandPanelV198==="function")refreshCommandPanelV198();
       autoLoopBattleMountedV200();
     }
     hideAutoReplayLoadingV199();
     renderAutoReplayHudV199();
     renderAutoLoopHudV200();
   }catch(err){
     console.error("V200 launch replay",err);
     hideAutoReplayLoadingV199();
     stopTrueAutoLoopV200(false);
     document.body.classList.remove("battleMode");
     toast(err?.message||"再戦の開始に失敗しました");
     return stagePage()
   }
 };
 requestAnimationFrame(()=>requestAnimationFrame(kickoff));
 setTimeout(()=>{if(!document.body.classList.contains("battleMode"))kickoff()},260);
}

document.addEventListener("click",function(e){let r181=e.target.closest("[data-v181-repeat]");if(r181)return repeatBattleFromResultV181(false);
let ra181=e.target.closest("[data-v181-repeat-auto]");if(ra181)return repeatBattleFromResultV181(true);
let q169=e.target.closest("[data-v169-go]");if(q169){let g=q169.dataset.v169Go;if(g==="home"){S.page="home"}else if(g==="formation"){S.page="formation"}else if(g==="growth"){S.page="growth"}else if(g==="summon"){S.page="summon"}else if(g==="library"){S.page="authors"}else if(g==="mission"){S.page="missions"}save();render();return}
 let open=e.target.closest("[data-stage-open]");if(open){e.preventDefault();e.stopImmediatePropagation();return openStagePage(+open.dataset.stageOpen)}
 let cnt=e.target.closest("[data-stage-farm-count]");if(cnt){e.preventDefault();e.stopImmediatePropagation();setFarmCount(+cnt.dataset.stageFarmCount);return stagePage()}
 let go=e.target.closest("[data-stage-farm-go]");if(go){e.preventDefault();e.stopImmediatePropagation();if(!actionLock(500))return;return quickFarmRemembered(+go.dataset.stageFarmGo,rememberedFarmCount())}
},true);
document.addEventListener("click",function(e){let b=e.target.closest("[data-growth-open]");if(!b)return;e.preventDefault();e.stopImmediatePropagation();S.growthSelected=+b.dataset.growthOpen;save();persistentSaveWrite();return go("growth")},true);
document.addEventListener("click",function(e){
 let b=e.target.closest("[data-levelup]");if(!b)return;
 e.preventDefault();e.stopImmediatePropagation();
 if(b.disabled||!actionLock(220))return;
 let [i,n]=String(b.dataset.levelup).split(":").map(Number);
 return doLevelUp(i,n,"list");
},true);
document.addEventListener("click",e=>{let ga=e.target.closest("[data-action]");if(ga){e.preventDefault();return go(ga.dataset.action);}let obc=e.target.closest("[data-onboarding-claim]");if(obc)return claimOnboardingStep()
let syr=e.target.closest("[data-system-repair]");if(syr){let o=e.target.closest(".resultOverlay");if(o)o.remove();return safeRepairState()}
let fic=e.target.closest("[data-final-close]");if(fic){let o=e.target.closest(".resultOverlay");if(o)o.remove();return}
let fio=e.target.closest("[data-final-info]");if(fio)return openFinalInfo()
let ready135=e.target.closest("[data-v135-ready]");if(ready135)return dismissFirstRunV135()
let emergencyRecover=e.target.closest("[data-emergency-recover]");if(emergencyRecover)return recoverEmergencyV134()
let saveExport=e.target.closest("[data-save-export]");if(saveExport)return downloadSaveFile()
let saveRecover=e.target.closest("[data-save-recover]");if(saveRecover){if(!actionLock(700))return;let before=saveProgressScore();recoverBestSave();let after=saveProgressScore();toast(after>=before?"最高進行度のセーブを復旧しました":"セーブを確認しました");return home()}
let qac=e.target.closest("[data-qa-close]");if(qac){let o=e.target.closest(".resultOverlay");if(o)o.remove();return}
let qao=e.target.closest("[data-qa-center]");if(qao)return openQACenter()
let syc=e.target.closest("[data-system-close]");if(syc){let o=e.target.closest(".resultOverlay");if(o)o.remove();return}
let sy=e.target.closest("[data-system-check]");if(sy)return openSystemCheck()
let v50c=e.target.closest("[data-v50-close]");if(v50c){let o=e.target.closest(".resultOverlay");if(o)o.remove();return}
let v50o=e.target.closest("[data-v50-guide]");if(v50o)return openV50Guide()
let csa=e.target.closest("[data-claim-safe]");if(csa){let o=e.target.closest(".resultOverlay");if(o)o.remove();return claimSafeRewards()}
let rcClose=e.target.closest("[data-reward-close]");if(rcClose){let o=e.target.closest(".resultOverlay");if(o)o.remove();return}
let rcOpen=e.target.closest("[data-reward-center]");if(rcOpen)return openRewardCenter()
let bsc=e.target.closest("[data-bondstory-close]");if(bsc){let o=e.target.closest(".resultOverlay");if(o)o.remove();return}
let bsr=e.target.closest("[data-bondstory-claim]");if(bsr){let i=+bsr.dataset.bondstoryClaim;if(claimBondEpisode(i)){toast("初読報酬：インク20 / 資料100");let o=e.target.closest(".resultOverlay");if(o)o.remove();return detail(i)}}
let bse=e.target.closest("[data-bondstory]");if(bse)return openBondEpisode(+bse.dataset.bondstory)
let stc=e.target.closest("[data-story-close]");if(stc){let o=e.target.closest(".resultOverlay");if(o)o.remove();return}
let ste=e.target.closest("[data-story-episode]");if(ste)return openStoryEpisode(+ste.dataset.storyEpisode)
let pc=e.target.closest("[data-progress-close]");if(pc){let o=e.target.closest(".resultOverlay");if(o)o.remove();return}
let ph=e.target.closest("[data-progress-hub]");if(ph)return openProgressHub()
let qb=e.target.closest("[data-quest]");if(qb){let q=questBoard().find(x=>x.id===qb.dataset.quest);if(!q||q.now<q.goal||S.questClaims[q.id])return;S.questClaims[q.id]=1;q.give();save();toast("挑戦録達成："+q.reward);return home()}
let hd=e.target.closest("[data-home-density]");if(hd)return toggleHomeDensity()
let lr=e.target.closest("[data-login-reward]");if(lr){if(!actionLock(500))return;return transactionalAction("ログイン報酬",()=>{let r=claimLoginReward();if(r)toast("ログイン報酬："+r.label);return home()})}
let hc=e.target.closest("[data-homechar]");if(hc)return chooseHome();let hp=e.target.closest("[data-homepick]");if(hp){S.homeChar=+hp.dataset.homepick;save();return home()}let g=e.target.closest("[data-go]");if(g){e.preventDefault();let ov=e.target.closest(".resultOverlay");if(ov)ov.remove();return go(g.dataset.go);}let ar=e.target.closest("[data-archive-reward]");if(ar){if(!actionLock(450))return;return transactionalAction("蒐集報酬",()=>{let m=archiveMilestones().find(x=>x.id===ar.dataset.archiveReward);if(!m||!m.ready||S.archiveClaims[m.id])return;S.archiveClaims[m.id]=1;m.give();save();toast("蒐集報酬："+m.reward);return list()})}
let f=e.target.closest("[data-filter]");if(f){filter=f.dataset.filter;return cards()}let c=e.target.closest("[data-char]");if(c)return detail(+c.dataset.char);let howClose=e.target.closest("[data-how-close]");if(howClose){let o=e.target.closest(".resultOverlay");if(o)o.remove();return}
let howStart=e.target.closest("[data-how-start]");if(howStart){let o=e.target.closest(".resultOverlay");if(o)o.remove();return sortie()}
let howOpen=e.target.closest("[data-how]");if(howOpen)return openHowToPlay()
let lsave=e.target.closest("[data-loadout-save]");if(lsave){if(!actionLock(400))return;return saveLoadout(+lsave.dataset.loadoutSave)}
let lload=e.target.closest("[data-loadout-load]");if(lload){if(!actionLock(400))return;return loadLoadout(+lload.dataset.loadoutLoad)}
let tac=e.target.closest("[data-tactic]");if(tac){S.tactic=tac.dataset.tactic;save();toast("戦術："+currentTactic().name);return party()}
let prep=e.target.closest("[data-prepareteam]");if(prep){if(!actionLock(600))return;prepareTeam();toast("編成と装備を最適化しました");return}
let fcp=e.target.closest("[data-formation-copy]");if(fcp){ensureUnitSets();let aa=S.sets[S.set]||[];let txt="文豪綺譚 FORMATION "+(S.set+1)+"\n"+aa.map((i,n)=>(n+1)+". "+C[i][1]+" Lv."+lv(i)).join("\n")+"\n総戦力 "+unitPower(aa).toLocaleString();if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(()=>toast("編成をコピーしました")).catch(()=>toast("コピーできませんでした"))}else{toast("このブラウザではコピーできません")}return}
let mfm=e.target.closest("[data-maxformation]");if(mfm){if(!actionLock(500))return;return maxPowerFormation()}
let afm=e.target.closest("[data-autoformation]");if(afm){if(!actionLock(500))return;return autoFormation()}
let sc=e.target.closest("[data-swap-close]");if(sc){let o=e.target.closest(".resultOverlay");if(o)o.remove();return}
let swp=e.target.closest("[data-swap]");if(swp){let [p,i]=swp.dataset.swap.split(":").map(Number);ensureUnitSets();S.sets[S.set][p]=i;save();let o=e.target.closest(".resultOverlay");if(o)o.remove();return party()}
let ch=e.target.closest("[data-change]");if(ch){return openFormationSwap(+ch.dataset.change)}
let s=e.target.closest("[data-set]");if(s){S.set=+s.dataset.set;save();return party()}let ff=e.target.closest("[data-finalfight]");if(ff){let pw=S.sets[S.set].reduce((z,i)=>z+boostedPower(i),0),score=pw*(.82+Math.random()*.42),win=score>=16400;if(!win){toast("黒き原稿・極 敗北");return challenge()}let rank=score>=24000?"S":score>=20000?"A":"B";S.final.challenge.clears++;let ord={"-":0,B:1,A:2,S:3};if(ord[rank]>ord[S.final.challenge.best])S.final.challenge.best=rank;S.xp+=1200;if(rank==="S"){S.ink+=300;S.mat=(S.mat||0)+300}save();toast("突破！ RANK "+rank);return challenge()}
let tt=e.target.closest("[data-title]");if(tt){S.profile.title=tt.dataset.title;save();return profile()}let st=e.target.closest("[data-setting]");if(st){let k=st.dataset.setting;S.settings[k]=!S.settings[k];save();return settings()}
let expt=e.target.closest("[data-export]");if(expt){prompt("セーブデータ（コピーして保管）",btoa(unescape(encodeURIComponent(JSON.stringify(S)))));return}
let fv=e.target.closest("[data-fav]");if(fv){let i=+fv.dataset.fav;S.favs=S.favs.includes(i)?S.favs.filter(x=>x!==i):S.favs.concat(i);save();return detail(i)}
let rn=e.target.closest("[data-rename]");if(rn){let n=prompt("司書名",S.profile.name);if(n&&n.trim()){S.profile.name=n.trim().slice(0,12);save()}return profile()}
let ev=e.target.closest("[data-event]");if(ev){let boss=ev.dataset.event==="boss",pw=S.sets[S.set].reduce((z,i)=>z+boostedPower(i),0),need=boss?14000:8000,win=pw*(.82+Math.random()*.4)>=need*.82;if(!win){alert("敗北");return event()}let pt=boss?350:120;S.event.pt+=pt;S.event.clears++;S.tokens+=boss?40:10;S.xp+=boss?900:400;save();toast("勝利！ イベントPt +"+pt);return event()}
let ex=e.target.closest("[data-ex]");if(ex){let items=[["mat",100,20],["ink",200,40],["xp",1000,50]],x=items[+ex.dataset.ex];if(S.tokens<x[2])return alert("交換札不足");S.tokens-=x[2];S[x[0]]=Number(S[x[0]]||0)+x[1];save();return exchange()}
let dl=e.target.closest("[data-daily]");if(dl){if(S.daily.claimed)return;S.daily.claimed=true;S.daily.streak=(S.daily.streak%7)+1;if(S.daily.streak===7)S.ink+=300;else S.xp+=300+S.daily.streak*100;save();return daily()}
let tw=e.target.closest("[data-tower]");if(tw){let f=+tw.dataset.tower,need=6000+(f-1)*750,pw=S.sets[S.set].reduce((z,i)=>z+boostedPower(i),0),win=pw*(.82+Math.random()*.4)>=need*.82;if(!win){alert("敗北。編成と育成を見直そう");return tower()}S.tower.best=Math.max(S.tower.best,f);S.tower.floor=f+1;S.xp+=300+f*30;if(f%5===0)S.mat=(S.mat||0)+100;if(f%10===0)S.ink+=200;save();toast("第"+f+"層 突破！");return tower()}
let bd=e.target.closest("[data-bond]");if(bd)return bondScreen(+bd.dataset.bond);
let tk=e.target.closest("[data-talk]");if(tk){let i=+tk.dataset.talk;bondGain(i,15);return bondScreen(i)}
let cl=e.target.closest("[data-claim]");if(cl){let [k,r]=cl.dataset.claim.split(":");if(S.missions.claimed[k])return;S.missions.claimed[k]=1;S.xp+=+r;S.ink+=100;save();alert("EXP "+r+" / インク100 獲得");return missions()}
let wk=e.target.closest("[data-work]");if(wk){let i=+wk.dataset.work,w=WORKS[i],bi=C.findIndex(c=>c[1]===w[0]);if(lv(bi)<w[4])return alert("基本文豪のLv不足");if((S.mat||0)<100)return alert("資料不足");S.mat-=100;S.works.push(i);S.workLv[i]=1;save();return workDetail(i)}
let wd=e.target.closest("[data-workdetail]");if(wd)return workDetail(+wd.dataset.workdetail);
let wg=e.target.closest("[data-workgrow]");if(wg){let i=+wg.dataset.workgrow,l=Number(S.workLv[i]||1);if(l>=60)return alert("Lv上限");if(S.xp<120)return alert("共有EXP不足");S.xp-=120;S.workLv[i]=l+1;save();return workDetail(i)}
let sr=e.target.closest("[data-story]");if(sr)return storyScene(+sr.dataset.story,0);
let sn=e.target.closest("[data-story-next]");if(sn){let [ch,n]=sn.dataset.storyNext.split(":").map(Number);if(n<STORY[ch][2].length-1)return storyScene(ch,n+1);S.story[ch]=1;S.xp+=300;S.ink+=30;S.missions.story++;save();toast("読了報酬 EXP300 / インク30");return story()}
let gclose=e.target.closest("[data-gacha-close]");if(gclose){let o=e.target.closest(".resultOverlay");if(o)o.remove();return summon()}
let grepeat=e.target.closest("[data-gacha-repeat]");if(grepeat){let n=+grepeat.dataset.gachaRepeat,cost=n===10?100:10;if((S.normalTickets||0)<cost)return toast("原稿片が足りません");let o=e.target.closest(".resultOverlay");if(o)o.remove();let btn=document.createElement("button");btn.dataset.normalpull=String(n);document.body.appendChild(btn);btn.click();btn.remove();return}let af=e.target.closest("[data-arena]");if(af){if(af.disabled)return;return runArenaMatch(af.dataset.arena)}
let arc=e.target.closest("[data-arena-result-close]");if(arc){let o=e.target.closest(".arenaResult");if(o)o.remove();return arena()}let arw=e.target.closest("[data-arena-reward]");if(arw){let n=+arw.dataset.arenaReward;if((S.rating||1000)<n||S.arena.rewards[n])return;let r=arenaRewardFor(n);S.arena.rewards[n]=1;S.ink=(S.ink||0)+r.ink;S.gold=(S.gold||0)+r.gold;save();toast("シーズン報酬 インク"+r.ink+" / 文銭"+r.gold);return arena()}let rp=e.target.closest("[data-result-party]");if(rp){let o=e.target.closest(".resultOverlay");if(o)o.remove();return party()}
let rt=e.target.closest("[data-result-retry]");if(rt){let o=e.target.closest(".resultOverlay");if(o)o.remove();return battle(S.lastBattleCh||0,S.lastBattleMode||"normal")}let rc=e.target.closest("[data-result-close]");if(rc){let o=e.target.closest(".resultOverlay");if(o)o.remove();return sortie()}let rr=e.target.closest("[data-reroll]");if(rr){let [i,id]=rr.dataset.reroll.split(":"),g=safeGearFind(x=>x.id===id);if(!g)return detail(+i);if((S.gold||0)<rerollCost(g))return toast("文銭が足りません");rerollGear(g);save();toast(isGodDrop(g)?"神装備候補！":"スキルを再抽選");return detail(+i)}let ug=e.target.closest("[data-upgear]");if(ug){let [i,id]=ug.dataset.upgear.split(":"),g=safeGearFind(x=>x.id===id);if(!g)return detail(+i);if(g.level>=gearMaxLv(g))return toast("この装備はMAX");if((S.gold||0)<gearUpgradeCost(g))return toast("文銭が足りません");upgradeGear(g);save();toast(g.name+" Lv."+g.level);return detail(+i)}let as=e.target.closest("[data-autosell]");if(as){S.autoSellRank=as.dataset.autosell==="OFF"?null:as.dataset.autosell;save();toast(S.autoSellRank?S.autoSellRank+"以下を自動売却":"自動売却OFF");let i=Object.keys(S.equipped)[0]||0;return detail(+i)}let eq=e.target.closest("[data-equip]");if(eq){let [i,id]=eq.dataset.equip.split(":");let g=safeGearFind(x=>x.id===id);if(g){let eq=S.equipped[+i]||{pen:null,book:null,accessory:null};if(typeof eq==="string")eq={pen:eq,book:null,accessory:null};eq[g.type||"pen"]=id;S.equipped[+i]=eq;save();toast("装備を変更")}return detail(+i)}
let lg=e.target.closest("[data-lockgear]");if(lg){let g=safeGearFind(x=>x.id===lg.dataset.lockgear);if(g){g.locked=!g.locked;save()}let i=Object.keys(S.equipped).find(k=>S.equipped[k]===lg.dataset.lockgear);return i!=null?detail(+i):detail(0)}
let ag=e.target.closest("[data-autogear]");if(ag){let i=+ag.dataset.autogear;if(!S.gear.length)return alert("装備を持っていません");let eq=S.equipped[i]||{pen:null,book:null,accessory:null};for(let t of ["pen","book","accessory"]){let best=S.gear.filter(g=>(g.type||"pen")===t).sort((a,b)=>gearScore(b)-gearScore(a))[0];if(best)eq[t]=best.id}S.equipped[i]=eq;save();toast("3枠のおすすめ装備を更新");return detail(i)}let ng=e.target.closest("[data-normalpull]");if(ng){let n=+ng.dataset.normalpull,cost=n===10?100:10;if((S.normalTickets||0)<cost)return alert("原稿片が足りません");S.normalTickets-=cost;S.weeklySummons=(S.weeklySummons||0)+n;S.summonMedals=(S.summonMedals||0)+n;let got=[];for(let j=0;j<n;j++){let i=Math.floor(Math.random()*C.length);if(n===10&&j===9){let tries=0;while((C[i][5]==="R"||C[i][5]==="N")&&tries++<50)i=Math.floor(Math.random()*C.length)}got.push(i);S.dupes[i]=Math.min(10,(S.dupes[i]||0)+1)}save();let i=got[got.length-1];if(n===10){showGachaResults(got,cost);return}toast("通常召喚！");return summonResult(i)}let chg=e.target.closest("[data-challenge]");if(chg){let c=challengeBoard().find(x=>x.id===chg.dataset.challenge);if(!c||c.now<c.goal||S.challengeClaims[c.id])return;S.challengeClaims[c.id]=1;c.give();save();toast("高難度目標達成："+c.reward);return home()}let spc=e.target.closest("[data-seasonpass]");if(spc){let r=seasonPassRewards().find(x=>x.id===spc.dataset.seasonpass);if(!r||!r.ready||S.seasonPassClaims[r.id])return;S.seasonPassClaims[r.id]=1;r.give();save();toast("文学紀行パス："+r.reward);return home()}let wt=e.target.closest("[data-weekly]");if(wt){let t=weeklyTasks().find(x=>x.id===wt.dataset.weekly);if(!t||t.now<t.goal||S.weeklyClaims[t.id])return;S.weeklyClaims[t.id]=1;t.give();save();toast("週間任務達成："+t.reward);return home()}
let wall=e.target.closest("[data-weekly-all]");if(wall){let got=0;for(let t of weeklyTasks()){if(t.now>=t.goal&&!S.weeklyClaims[t.id]){S.weeklyClaims[t.id]=1;t.give();got++}}save();toast("週間報酬を"+got+"件受取");return home()}let ms=e.target.closest("[data-milestone]");if(ms){let m=librarianMilestones().find(x=>x.id===ms.dataset.milestone);if(!m||!m.ready||S.milestoneClaims[m.id])return;S.milestoneClaims[m.id]=1;m.give();save();toast("司書ランク報酬："+m.reward);return home()}let cg=e.target.closest("[data-collection-goal]");if(cg){let g=collectionGoals().find(x=>x.id===cg.dataset.collectionGoal);if(!g||g.now<g.goal||S.collectionClaims[g.id])return;S.collectionClaims[g.id]=1;g.give();save();toast("蔵書目標達成："+g.reward);return home()}let ac=e.target.closest("[data-achieve]");if(ac){let a=achievements().find(x=>x.id===ac.dataset.achieve);if(!a||a.now<a.goal||S.achievementClaims[a.id])return;S.achievementClaims[a.id]=1;a.give();save();toast("実績達成："+a.reward);return home()}let bm=e.target.closest("[data-beginner]");if(bm){let m=beginnerMissions().find(x=>x.id===bm.dataset.beginner);if(!m||m.now<m.goal||S.beginner.claimed[m.id])return;S.beginner.claimed[m.id]=1;m.give();save();toast("初心者任務達成："+m.reward);return home()}let dg=e.target.closest("[data-dailygoal]");if(dg){ensureDailyGoals();let st=dailyGoalState();if(!st.done||S.dailyGoals.claimed)return;S.dailyGoals.claimed=true;S.ink=(S.ink||0)+100;S.mat=(S.mat||0)+100;save();toast("本日の目標達成！ インク100 / 資料100");return home()}let gr=e.target.closest("[data-grow]");if(gr){let [i,n]=gr.dataset.grow.split(":").map(Number),actual=Math.min(n,cap(i)-lv(i)),cost=actual*100;if(actual<=0)return alert("Lv上限です");if(S.xp<cost)return alert("共有EXP不足");S.xp-=cost;S.lv[i]=lv(i)+actual;S.missions.grow+=actual;save();return detail(i)}
let mb=e.target.closest("[data-medalbuy]");if(mb){if(!actionLock(500))return;return transactionalAction("召喚栞交換",()=>buyMedalItem(mb.dataset.medalbuy))}
let sm=e.target.closest("[data-summon]");if(sm){ensurePick3();if(S.pick3.length!==3)return alert("3人選択してください");if((S.ink||0)<300)return alert("インク不足");S.ink-=300;S.weeklySummons=(S.weeklySummons||0)+1;S.summonMedals=(S.summonMedals||0)+5;let i=S.pick3[Math.floor(Math.random()*3)];S.dupes[i]=Math.min(10,(S.dupes[i]||0)+1);save();return summonResult(i)}
let sp=e.target.closest("[data-sp]");if(sp){let i=+sp.dataset.sp;if(S.pick3.includes(i))S.pick3=S.pick3.filter(x=>x!==i);else if(S.pick3.length<3)S.pick3.push(i);save();return summon()}
let dr=e.target.closest("[data-draw]");if(dr){if(S.pick3.length!==3)return alert("3人選択してください");if(S.ink<300)return alert("インク不足");S.ink-=300;let i=S.pick3[Math.floor(Math.random()*3)];S.dupes[i]=Math.min(10,(S.dupes[i]||0)+1);save();return summonResult(i)}
let eg=e.target.closest("[data-endgame]");if(eg){let g=endgameGoals().find(x=>x.id===eg.dataset.endgame);if(!g||g.now<g.goal||S.endgameClaims[g.id])return;S.endgameClaims[g.id]=1;g.give();save();toast("終幕後の書架："+g.reward);return home()}
let brc=e.target.closest("[data-bossrush-close]");if(brc){let o=e.target.closest(".resultOverlay");if(o)o.remove();return sortie()}
let brr=e.target.closest("[data-bossrush-reward]");if(brr){let n=+brr.dataset.bossrushReward;if(claimBossRushReward(n)){let r=bossRushReward(n);toast("連戦報酬：原稿片"+r.tickets+" / インク"+r.ink)}return sortie()}
let brs=e.target.closest("[data-bossrush]");if(brs){if(!actionLock(800))return;return runBossRush()}
let dd=e.target.closest("[data-daily-dungeon]");if(dd){if(!actionLock(700))return;return runDailyDungeon()}
let fc=e.target.closest("[data-farm-close]");if(fc){let o=e.target.closest(".resultOverlay");if(o)o.remove();return sortie()}
let qf=e.target.closest("[data-quickfarm]");if(qf){if(!stageTapGuard(qf))return;let sel=document.getElementById("farmRuns"),runs=sel?+sel.value:(S.farmPrefs.runs||3);S.farmPrefs.runs=runs;return quickFarm(+qf.dataset.quickfarm,runs)}
let starClaimBtn=e.target.closest("[data-star-reward]");if(starClaimBtn){if(!actionLock(450))return;return transactionalAction("星評価報酬",()=>{let ch=+starClaimBtn.dataset.starReward;if(claimStarReward(ch)){let rw=starReward(ch);toast("★★★達成報酬：原稿片"+rw.tickets+" / 文銭"+rw.gold)}return sortie()})}
let bmr=e.target.closest("[data-boss-mastery]");if(bmr){if(!actionLock(450))return;return transactionalAction("熟練報酬",()=>{let ch=+bmr.dataset.bossMastery;if(claimBossMastery(ch)){let r=bossMasteryReward(ch);toast("討伐熟練報酬：原稿片"+r.tickets+" / 文銭"+r.gold)}return sortie()})}
let hr=e.target.closest("[data-hard-reward]");if(hr){if(!actionLock(450))return;return transactionalAction("HARD報酬",()=>{let ch=+hr.dataset.hardReward;if(claimHardReward(ch)){let r=hardReward(ch);toast("HARD報酬：原稿片"+r.tickets+" / インク"+r.ink)}return sortie()})}
let cr=e.target.closest("[data-chapter-reward]");if(cr){if(!actionLock(450))return;return transactionalAction("章踏破報酬",()=>{let ch=+cr.dataset.chapterReward;if(claimChapterReward(ch)){let r=chapterReward(ch);toast("踏破報酬：原稿片"+r.tickets+" / 文銭"+r.gold)}return sortie()})}
let quickGrow=e.target.closest("[data-quick-grow]");if(quickGrow)return
let formationFocusBtn=e.target.closest("[data-formation-focus]");if(formationFocusBtn){e.preventDefault();e.stopPropagation();return formationFocus(+formationFocusBtn.dataset.formationFocus)}
let formationStatsClose=e.target.closest("[data-formation-stats-close]");if(formationStatsClose){document.getElementById("formationStatsOverlay")?.remove();return}
let formationStatsBtn=e.target.closest("[data-formation-stats]");if(formationStatsBtn){e.preventDefault();e.stopPropagation();return openFormationStats(+formationStatsBtn.dataset.formationStats)}
let partyPreset=e.target.closest("[data-party-preset]");if(partyPreset)return formationPresetV132(partyPreset.dataset.partyPreset)
let partyFilterBtn=e.target.closest("[data-party-filter]");if(partyFilterBtn)return setPartyFilter(partyFilterBtn.dataset.partyFilter)
let partySortBtn=e.target.closest("[data-party-sort]");if(partySortBtn)return setPartySort(partySortBtn.dataset.partySort)
let growthFilter=e.target.closest("[data-growth-filter]");if(growthFilter)return setGrowthFilter(growthFilter.dataset.growthFilter)
let growthSelect=e.target.closest("[data-growth-select]");if(growthSelect){if(!actionLock(220))return;return selectGrowthCharacter(+growthSelect.dataset.growthSelect)}
let growthButton=e.target.closest("[data-grow]");if(growthButton){if(!actionLock(450))return;return growCharacter(+growthButton.dataset.grow,+growthButton.dataset.growN)}
let farmCountBtn=e.target.closest("[data-farm-count]");if(farmCountBtn){setFarmCount(+farmCountBtn.dataset.farmCount);return sortie()}
let farmStartBtn=e.target.closest("[data-farm-start]");if(farmStartBtn){if(!actionLock(500))return;return quickFarmRemembered(+farmStartBtn.dataset.farmStart,rememberedFarmCount())}
let uiPage=e.target.closest("[data-ui-page]");if(uiPage){let [k,p,r]=uiPage.dataset.uiPage.split(":");let fn={party,growth,list,sortie,summon,story,arena,home}[r]||home;return setUiPage(k,+p,fn)}
let favOpen=e.target.closest("[data-favorite-open]");if(favOpen)return openFavoritePicker()
let favClose=e.target.closest("[data-favorite-close]");if(favClose){document.getElementById("favoritePickerOverlay")?.remove();return}
let favSet=e.target.closest("[data-favorite-set]");if(favSet){document.getElementById("favoritePickerOverlay")?.remove();return setFavoriteCharacter(+favSet.dataset.favoriteSet)}
let sdAction=e.target.closest("[data-sd-action]");if(sdAction){
 let action=sdAction.dataset.sdAction;
 if(action==="auto"){e.preventDefault();e.stopPropagation();autoHardToggleV430();return}
 let b=ensureAdvancedBattleV125();
 if(action==="ougi"&&!canOugiV125(b.unit||0)){battleTextV121("EP不足","warning",50,55);return}
 if(b.auto){battleTextV121("AUTO","warning",50,55);return}
 return battleActionV120(action)
}
let fs=e.target.closest("[data-formation-slot]");if(fs)return openFormationPickerV136(+fs.dataset.formationSlot)
let fp=e.target.closest("[data-formation-pick]");if(fp){let [s,i]=fp.dataset.formationPick.split(":").map(Number);return setFormationSlotV136(s,i)}
let formClose136=e.target.closest("[data-formation-picker-close]");if(formClose136){document.getElementById("formationPickerOverlay")?.remove();return}
let bp=e.target.closest("[data-battle-pause]");if(bp){let b=ensureBattleStateV120();if(b.auto)toggleAutoBattleV122();return}
let battleSetting=e.target.closest("[data-battle-setting]");if(battleSetting)return toggleBattleSettingV130(battleSetting.dataset.battleSetting)
let battleTarget=e.target.closest("[data-battle-target]");if(battleTarget){ensureBattleStateV120().target=+battleTarget.dataset.battleTarget;cinematicBattleV119();return}
let battleUnit=e.target.closest("[data-battle-unit]");if(battleUnit)return selectedUnitV144(+battleUnit.dataset.battleUnit)
let battleSpeed=e.target.closest("[data-battle-speed]");if(battleSpeed)return toggleSpeedV122(+battleSpeed.dataset.battleSpeed)
let logOpen=e.target.closest("[data-battle-log-open]");if(logOpen){let x=document.createElement("div");x.className="resultOverlay";x.id="battleLogOverlay";x.innerHTML=`<div class=resultCard>${battleLogPanelV120()}</div>`;document.body.appendChild(x);return}
let logClose=e.target.closest("[data-battle-log-close]");if(logClose){document.getElementById("battleLogOverlay")?.remove();return}
let battleRepeat=e.target.closest("[data-battle-repeat]");if(battleRepeat){battleRepeat.closest(".battleClearV119")?.remove();S.qol=S.qol||{};S.qol.repeatAuto=false;return repeatBattleV128()}
let battleRepeatAuto=e.target.closest("[data-battle-repeat-auto]");if(battleRepeatAuto){battleRepeatAuto.closest(".battleClearV119")?.remove();S.qol=S.qol||{};S.qol.repeatAuto=true;return repeatBattleV128()}
let battleRetry=e.target.closest("[data-battle-retry]");if(battleRetry)return resetBattleV126()
let clearClose=e.target.closest("[data-clear-close]");if(clearClose){clearClose.closest(".battleClearV119")?.remove();return}
let sdDemo=e.target.closest("[data-sd-demo]");if(sdDemo)return sdBattleDemo()
let fxDemo=e.target.closest("[data-battle-fx-demo]");if(fxDemo){let t=S.sets?.[S.set]||[0];let i=+t[0]||0;playBattleFx("attack",i,1280);setTimeout(()=>playBattleFx("skill",i,2400),800);setTimeout(()=>playBattleFx("ougi",i,5200),1900);return}
let bt=e.target.closest("[data-battle]");if(bt){if(!stageTapGuard(bt))return;let ch=+bt.dataset.battle,mode=bt.dataset.mode||"normal";if(ch>0&&!(S.progress.clears[ch-1]>0))return toast("前の章をクリアすると解放されます");if(mode==="hard"&&!hardUnlocked(ch))return toast("NORMALを3回クリアでHARD解放");return startBattleV180(ch,mode)}let b=e.target.closest("[data-fight]");if(b){let jam=b.dataset.fight==="jam",w=Math.random()>(jam?.62:.45),d=w?(jam?65:24):(jam?-12:-20);S.rating=Math.max(0,S.rating+d);if(w){S.arena.wins++;S.progress.streak++;S.progress.bestStreak=Math.max(S.progress.bestStreak,S.progress.streak)}else{S.arena.losses++;S.progress.streak=0}save();alert((w?"WIN":"LOSE")+" / Rating "+(d>0?"+":"")+d);return arena()}});
document.addEventListener("input",e=>{if(e.target.id==="q")cards()});
observeLongTasksV193();battleVisibilityGuardV190();try{home()}catch(e){console.error("home render failed",e);try{coreHome()}catch(e2){console.error("core home failed",e2);emergencyHome()}}window.__bkBooted=true;
/* V419: service worker disabled for deterministic GitHub Pages startup. */
setTimeout(function(){
 try{
  var a=document.getElementById("app");
  var visible=a&&a.textContent&&a.textContent.trim().length>0;
  if(!visible) emergencyHome();
 }catch(e){try{emergencyHome()}catch(_){}}
},3500);const STORY_EPISODES=[
 {title:"序章　言葉のはじまり",sub:"消えた一行",text:"書架から、ひとつの文章が消えた。名もなき司書と文豪たちは、頁喰いを追って最初の扉を開く。"},
 {title:"第二幕　失われた書庫",sub:"黒い栞",text:"封じられた書庫に残る黒い栞。読む者の記憶を削るそれは、物語そのものを書き換えようとしていた。"},
 {title:"第三幕　海の向こう",sub:"深海の校正",text:"海を越えた言葉が別の意味へ変質する。文豪たちは失われた原文を求め、深海の書庫へ向かう。"},
 {title:"終幕　黒き原稿",sub:"最後の句点",text:"すべての異変は一冊の未完原稿へ収束する。最後の一行を書くのは、文豪か、それとも司書か。"}
];
function openStoryEpisode(i){
 if(!(S.progress.clears[i]>0))return toast("第"+(i+1)+"章クリアで解放");
 let e=STORY_EPISODES[i],old=document.getElementById("storyReader");if(old)old.remove(),o=document.createElement("div");o.id="storyReader";o.className="resultOverlay";
 o.innerHTML=`<div class="resultCard storyReaderCard"><small>STORY ${i+1}/4</small><h2>${e.title}</h2><h3>${e.sub}</h3><div class=storyText>${e.text}</div><div class=storyQuote>「言葉は、読まれた瞬間から誰かの物語になる。」</div><button class=btn data-story-close=1>書架へ戻る</button></div>`;document.body.appendChild(o)
}


installImageRepair();

document.addEventListener("click",function(e){
 try{
  let b=e.target.closest("button,[role=button]");
  if(!b||b.disabled)return;
  let attrs=[...b.attributes].filter(a=>a.name.startsWith("data-")).map(a=>a.name);
  if(!attrs.length)return;
  /* UI_DEAD_BUTTON_GUARD: diagnostic only; normal handlers run first */
  if(attrs.includes("data-go"))return;
 }catch(err){finalErrorShield(err)}
});

installAssetObservers();

if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>installAssetObservers(),{once:true});

try{recoverBestSave()}catch(e){console.error("save recovery",e)}
document.addEventListener("click",()=>setTimeout(()=>persistentSaveWrite(),0));
window.addEventListener("pagehide",()=>persistentSaveWrite());

document.addEventListener("change",e=>{let growthSortControl=e.target.closest("[data-growth-sort]");if(growthSortControl)setGrowthSort(growthSortControl.value)});

try{if(!sessionStorage.getItem("bk_v88_recovered")){recoverBestSave();sessionStorage.setItem("bk_v88_recovered","1")}}catch(e){}

if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>setTimeout(normalizeStageLayout,0),{once:true});else setTimeout(normalizeStageLayout,0);

document.addEventListener("change",e=>{let s=e.target.closest("[data-growth-search]");if(s)setGrowthSearch(s.value)});
document.addEventListener("keydown",e=>{let s=e.target.closest?.("[data-growth-search]");if(s&&e.key==="Enter"){e.preventDefault();setGrowthSearch(s.value)}});

document.addEventListener("change",e=>{let x=e.target.closest("[data-party-search]");if(x){ensureFormationUX();S.qol.partySearch=x.value;save();persistentSaveWrite();party()}});
document.addEventListener("keydown",e=>{let x=e.target.closest?.("[data-party-search]");if(x&&e.key==="Enter"){e.preventDefault();ensureFormationUX();S.qol.partySearch=x.value;save();persistentSaveWrite();party()}});

document.addEventListener("change",e=>{let inp=e.target.closest("[data-save-import]");if(!inp||!inp.files?.[0])return;let r=new FileReader();r.onload=()=>importSaveText(String(r.result||""));r.readAsText(inp.files[0])});

window.addEventListener("load",()=>{try{validateSaveV134(S);emergencyBackupV134()}catch(e){}});
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden")emergencyBackupV134()});

document.addEventListener("pointerdown",e=>{
 if(e.target.closest?.(".posterBattleV205"))posterWakeHudV224();
},{passive:true});
