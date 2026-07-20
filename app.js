const questions = [
  {title:"Насколько свободно поворачивается голова?",hint:"Сравните стороны без усилия и резких движений.",answers:[
    ["Движение ограничено с обеих сторон",{mobility:3}], ["В одну сторону заметно легче",{axis:3}], ["К вечеру поворачивать голову сложнее",{load:3}], ["Поворот отзывается тяжестью в голове",{head:3}], ["Приходится поворачиваться всем корпусом",{systemic:3}]]},
  {title:"Как обычно расположена голова?",hint:"Вспомните своё отражение или обычные фотографии.",answers:[
    ["Шея выглядит скованной",{mobility:3}], ["Есть заметный наклон или поворот в сторону",{axis:3}], ["Голова часто подаётся вперёд",{load:3}], ["Положение связано с тяжестью в затылке",{head:3}], ["Положение головы меняется вместе со всем телом",{systemic:3}]]},
  {title:"Что происходит после долгой работы сидя?",hint:"Отметьте самое знакомое ощущение.",answers:[
    ["Хочется осторожно размять шею",{mobility:3}], ["Одно плечо напрягается сильнее",{axis:3}], ["Шея и плечи быстро устают",{load:3}], ["Тяжелеет затылок или голова",{head:3}], ["Скованность спускается по спине ниже",{systemic:3}]]},
  {title:"Что вы замечаете в плечах?",hint:"Важно устойчивое ощущение, а не идеальная симметрия.",answers:[
    ["Плечи свободны, но шея остаётся плотной",{mobility:3}], ["Одно плечо выше или сильнее выдвинуто",{axis:3}], ["Оба плеча часто подняты",{load:3}], ["Напряжение плеч сопровождается тяжестью в голове",{head:3}], ["Напряжение переходит между плечами, спиной и тазом",{systemic:3}]]},
  {title:"Как тело держит равновесие?",hint:"Вспомните ходьбу, повороты и положение стоя.",answers:[
    ["При поворотах шея будто блокирует движение",{mobility:3}], ["Чаще переношу вес на одну ногу",{axis:3}], ["После нагрузки устойчивость ухудшается",{load:3}], ["Неуверенность сопровождается тяжестью в голове",{head:3}], ["Иногда появляется шаткость или общий дисбаланс",{systemic:3}]]},
  {title:"Как тело реагирует на напряжённый день?",hint:"Речь о вашей телесной реакции, а не о диагнозе.",answers:[
    ["Шея становится менее подвижной",{mobility:3}], ["Сильнее напрягается одна сторона",{axis:3}], ["Голова уходит вперёд, плечи поднимаются",{load:3}], ["Сжимаю челюсть, напрягаются лоб и затылок",{head:3}], ["Откликается всё тело сразу",{systemic:3}]]},
  {title:"Как вы просыпаетесь по утрам?",hint:"Оцените большинство обычных утр.",answers:[
    ["Шее нужно время, чтобы расходиться",{mobility:3}], ["Одна сторона ощущается плотнее",{axis:3}], ["Шея выглядит уставшей уже с утра",{load:3}], ["Есть тяжесть в голове или затылке",{head:3}], ["Ощущения каждый день появляются в разных местах",{systemic:3}]]},
  {title:"Что происходит при ходьбе?",hint:"Выберите ближайшее наблюдение.",answers:[
    ["Чтобы посмотреть в сторону, поворачиваюсь корпусом",{mobility:3}], ["Руки двигаются неодинаково",{axis:3}], ["Голова и плечи подаются вперёд",{load:3}], ["При ходьбе появляется тяжесть в голове",{head:3}], ["Замечаю несколько особенностей сразу",{systemic:3}]]},
  {title:"Что чаще всего заставляет вас обратить внимание на шею?",hint:"Выберите главную причину.",answers:[
    ["Ограничение поворота или наклона",{mobility:3}], ["Ощущение перекоса",{axis:3}], ["Усталость после работы или нагрузки",{load:3}], ["Связь с состоянием головы",{head:3}], ["Связь шеи с ощущениями во всём теле",{systemic:3}]]},
  {title:"Как часто вас беспокоит головная боль или тяжесть в голове?",hint:"Выберите самый точный вариант. Тест не устанавливает причину головной боли.",answers:[
    ["Практически не беспокоит",{mobility:1}], ["Иногда вместе с напряжением одной стороны шеи",{axis:2,head:1}], ["После долгой работы, стресса или нагрузки",{load:2,head:1}], ["Повторяется регулярно или начинается с затылка",{head:3}], ["Сочетается с головокружением или общим дисбалансом",{systemic:2,head:1}]]},
  {title:"С какой стороны напряжение заметнее?",hint:"Это поможет показать вашу схему на модели тела. Она не является диагнозом.",answers:[
    ["Больше слева",{axis:1},{side:"left"}], ["Больше справа",{axis:1},{side:"right"}], ["Примерно одинаково с обеих сторон",{load:1},{side:"both"}], ["Сторона меняется",{systemic:1},{side:"changing"}], ["Явной разницы не замечаю",{mobility:1},{side:"neutral"}]]}
];

const profiles = {
  mobility:{number:"01",label:"Движение шеи",eyebrow:"Профиль 01 · подвижность",title:"Ведущий паттерн — ограничение движения",summary:"В ваших ответах чаще повторяется скованность шеи и уменьшение свободы поворота. Один тест движения не показывает причину и не подтверждает положение Атланта. На очной оценке важно сопоставить шею с грудной клеткой, тазом, опорой и реакцией тканей.",zones:["поворот головы","верхняя часть шеи","движение корпуса"],article:"Почему ограниченный поворот головы ещё не говорит о «смещении Атланта»",recommendation:"Начните с очной оценки диапазона движения и болезненности без попыток самостоятельно «вправлять» шею."},
  axis:{number:"02",label:"Асимметрия",eyebrow:"Профиль 02 · ось",title:"Ведущий паттерн — асимметрия",summary:"В ответах повторяются различия между сторонами: положение головы и плеч, опора или движение рук и ног. Тело может распределять нагрузку по всей оси, поэтому одна асимметрия не объясняет её происхождение.",zones:["голова и плечи","ось корпуса","таз и опора"],article:"Как верхняя опора связана с общей осью тела",recommendation:"На очной оценке полезно сопоставить положение головы, плеч, таза и опоры в покое и движении."},
  load:{number:"03",label:"Нагрузка",eyebrow:"Профиль 03 · нагрузка",title:"Ведущий паттерн — перегрузка верхней опоры",summary:"По вашим ответам напряжение чаще нарастает после сидения, работы или стресса. Это наблюдаемый паттерн нагрузки, а не доказательство проблемы в одном позвонке. Важно понять, какие структуры берут на себя лишнюю работу.",zones:["затылок","шея и плечи","положение головы"],article:"Почему напряжение возвращается после отдыха или массажа",recommendation:"Начните с оценки того, как голова удерживается над корпусом и как меняется движение после нагрузки."},
  head:{number:"04",label:"Голова и затылок",eyebrow:"Профиль 04 · головной отклик",title:"Ведущий паттерн — отклик со стороны головы",summary:"В ваших ответах состояние шеи часто сопровождается тяжестью, напряжением затылка или головной болью. Онлайн-тест не может определить их причину. Повторяющаяся или необычная головная боль требует медицинской оценки.",zones:["затылок","челюсть и виски","голова и шея"],article:"Головная боль и шея: почему совпадение ещё не доказывает причину",recommendation:"Начните с медицинской оценки повторяющейся головной боли, а затем при отсутствии противопоказаний — с очной оценки движения шеи и общей оси тела."},
  systemic:{number:"05",label:"Общий отклик",eyebrow:"Профиль 05 · связанная система",title:"Ведущий паттерн — общий отклик тела",summary:"В ответах нет одной ведущей зоны: движение шеи, равновесие, плечи и спина отзываются вместе. Такой результат особенно важно не сводить к одному Атланту — нужна последовательная очная проверка всей системы.",zones:["верхняя опора","общая ось","связанные цепи"],article:"Почему Атлант — важная часть биомеханики, но не объяснение всех симптомов",recommendation:"Начните с очной оценки движения лёжа и сидя, фасциальных натяжений, опоры и анамнеза."}
};

const profileKeys=Object.keys(profiles);
const app=document.querySelector('#app');
let step=-1;
let chosen=[];
const arrow='<span aria-hidden="true">↗</span>';

function header(side=''){return `<header class="topbar compact"><button class="wordmark" data-home>НЕЙРОФАСЦИАЛЬНАЯ КОРРЕКЦИЯ</button>${side}</header>`;}
function bindHome(){document.querySelector('[data-home]')?.addEventListener('click',home);}

function home(){
  step=-1;chosen=[];window.scrollTo(0,0);
  app.innerHTML=`<main class="home-shell">
    <header class="topbar"><span class="wordmark">НЕЙРОФАСЦИАЛЬНАЯ КОРРЕКЦИЯ</span><span class="trust-pill"><i></i> Александр Земцов</span></header>
    <section class="hero"><div class="fascia-art" aria-hidden="true"></div><div class="hero-copy reveal">
      <p class="index">C1 <i>/</i> ВЕРХНЯЯ ОПОРА</p><h1>Как тело<br>удерживает<br>голову?</h1>
      <p class="lead">Ответьте на 11 вопросов и получите персональную модель тела: ведущий паттерн, подсвеченные зоны и взаимосвязи</p>
      <button class="primary-button hero-button" data-start>Начать — 3 минуты ${arrow}</button>
      <p class="disclaimer"><span>◇</span> Тест не определяет «смещение Атланта»</p></div></section>
    <section class="benefits"><article><span>✦</span><div><b>Пять результатов</b><p>Понятный профиль по вашим ответам.</p></div></article><article><span>≈</span><div><b>Наглядные шкалы</b><p>Сразу видно, какой паттерн выражен сильнее.</p></div></article><article><span>⌁</span><div><b>Следующий шаг</b><p>Персональное объяснение и материал о методе.</p></div></article></section>
    <section class="about-method"><p class="eyebrow">Первый шейный позвонок</p><h2>Атлант — часть общей биомеханики</h2><p>Атлант, или C1, участвует в движении головы и работе верхнешейного отдела. Но он не является универсальным объяснением всех симптомов. Александр Земцов оценивает верхнюю опору только в связи с движением всей оси, фасциальными натяжениями и реакцией нервной системы.</p></section>
    <footer>Информационный материал · При острых или тревожных симптомах обратитесь к врачу</footer></main>`;
  document.querySelector('[data-start]').addEventListener('click',()=>{step=0;renderQuestion();});
}

function renderQuestion(){
  const q=questions[step];const progress=((step+1)/questions.length)*100;
  app.innerHTML=`<main class="quiz-shell">${header(`<span class="question-count">${String(step+1).padStart(2,'0')} <i>/</i> ${questions.length}</span>`)}<div class="progress-track"><span style="width:${progress}%"></span></div>
    <section class="question-layout"><div class="question-copy reveal"><p class="eyebrow">Вопрос ${step+1} из ${questions.length}</p><h1>${q.title}</h1><p>${q.hint}</p></div>
    <div class="answers reveal">${q.answers.map((a,i)=>`<button data-answer="${i}"><span>${String(i+1).padStart(2,'0')}</span>${a[0]}${arrow}</button>`).join('')}${step?'<button class="back-button" data-back>← Назад</button>':''}</div></section>
    <p class="quiz-disclaimer">Не выполняйте движения через боль. Тест не ставит диагнозов.</p></main>`;
  bindHome();
  document.querySelectorAll('[data-answer]').forEach(btn=>btn.addEventListener('click',()=>{chosen[step]=Number(btn.dataset.answer);if(step===questions.length-1)result();else{step++;renderQuestion();}}));
  document.querySelector('[data-back]')?.addEventListener('click',()=>{chosen.pop();step--;renderQuestion();});
}

function calculateScores(){
  const scores={mobility:0,axis:0,load:0,head:0,systemic:0};
  chosen.forEach((answerIndex,questionIndex)=>Object.entries(questions[questionIndex].answers[answerIndex][1]).forEach(([key,value])=>scores[key]+=value));
  return scores;
}

function getProfile(scores){
  const max=Math.max(...Object.values(scores));
  const tied=profileKeys.filter(key=>scores[key]===max);
  if(tied.length===1)return tied[0];
  for(let i=chosen.length-1;i>=0;i--){
    const answerWeights=questions[i].answers[chosen[i]][1];
    const match=tied.find(key=>answerWeights[key]);
    if(match)return match;
  }
  return tied[0];
}

function renderScoreBars(scores,winner){
  const maxPossible=questions.length*3;
  return profileKeys.map(key=>{
    const percent=Math.round((scores[key]/maxPossible)*100);
    return `<div class="score-row ${key===winner?'is-leading':''}"><div class="score-row-label"><span>${profiles[key].label}</span><b>${scores[key]} баллов</b></div><div class="score-track"><i style="width:${Math.max(percent,3)}%"></i></div></div>`;
  }).join('');
}

function getSide(){
  for(let i=chosen.length-1;i>=0;i--){
    const meta=questions[i].answers[chosen[i]][2];
    if(meta?.side)return meta.side;
  }
  return 'neutral';
}

function renderBodyModel(scores,winner){
  const max=Math.max(...Object.values(scores),1);
  const intensity=value=>(.16+.84*Math.min(value/max,1)).toFixed(2);
  const headLevel=Math.max(scores.head,scores.systemic*.35);
  const neckLevel=Math.max(scores.mobility,scores.head*.65,scores.load*.55);
  const shoulderLevel=Math.max(scores.load,scores.axis,scores.systemic*.55);
  const spineLevel=Math.max(scores.systemic,scores.axis*.72,scores.load*.62);
  const pelvisLevel=Math.max(scores.axis,scores.systemic*.78);
  const side=getSide();
  const axisPaths={
    left:'M150 98 C138 142 132 184 142 225 C151 266 139 310 130 354',
    right:'M150 98 C162 142 168 184 158 225 C149 266 161 310 170 354',
    changing:'M150 98 C128 142 173 177 145 222 C125 260 178 305 150 354',
    both:'M150 98 C150 150 150 205 150 260 C150 300 150 330 150 354',
    neutral:'M150 98 C150 150 150 205 150 260 C150 300 150 330 150 354'
  };
  const lean=side==='left'?-5:side==='right'?5:0;
  return `<div class="body-model-wrap"><div class="body-model-title"><span>Ваши зоны по ответам</span><b>${side==='left'?'акцент слева':side==='right'?'акцент справа':side==='changing'?'сторона меняется':'без явной стороны'}</b></div>
    <svg class="body-model" viewBox="0 0 380 470" role="img" aria-label="Персональная модель зон напряжения по ответам">
      <defs><filter id="zoneGlow"><feGaussianBlur stdDeviation="9"/></filter><linearGradient id="axisGradient" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#17a3aa"/><stop offset="1" stop-color="#8cc8cc"/></linearGradient></defs>
      <g class="human-shape" transform="rotate(${lean} 150 235)">
        <circle cx="150" cy="58" r="37"/>
        <path d="M118 102 C93 115 79 153 77 204 L62 304 C60 320 78 324 84 309 L103 225 L103 350 L86 442 C83 457 102 462 108 447 L145 365 L155 365 L192 447 C198 462 217 457 214 442 L197 350 L197 225 L216 309 C222 324 240 320 238 304 L223 204 C221 153 207 115 182 102 C166 111 134 111 118 102 Z"/>
      </g>
      <g class="zone-glows" filter="url(#zoneGlow)">
        <ellipse cx="150" cy="58" rx="34" ry="30" style="opacity:${intensity(headLevel)}"/>
        <ellipse cx="150" cy="103" rx="24" ry="18" style="opacity:${intensity(neckLevel)}"/>
        <ellipse cx="150" cy="137" rx="72" ry="22" style="opacity:${intensity(shoulderLevel)}"/>
        <ellipse cx="150" cy="240" rx="38" ry="100" style="opacity:${intensity(spineLevel)}"/>
        <ellipse cx="150" cy="339" rx="58" ry="28" style="opacity:${intensity(pelvisLevel)}"/>
      </g>
      <path class="body-axis" d="${axisPaths[side]}"/>
      <circle class="atlas-pulse" cx="150" cy="99" r="9"/><circle class="atlas-core" cx="150" cy="99" r="4"/>
      <path class="callout-line" d="M160 98 L230 82"/><text x="235" y="79" class="callout-main">C1 · АТЛАНТ</text><text x="235" y="94" class="callout-sub">зона оценки</text>
      <path class="callout-line" d="M186 139 L248 139"/><text x="252" y="143" class="callout-sub">плечи</text>
      <path class="callout-line" d="M181 337 L242 350"/><text x="246" y="354" class="callout-sub">таз</text>
    </svg>
    <div class="model-legend"><span><i></i>Ярче = чаще встречалось в ответах</span><span><b></b>Линия = визуальный паттерн оси</span></div>
    <p class="model-note">Это схема ваших ответов, а не снимок позвоночника. Она не подтверждает смещение Атланта, сколиоз или кифоз.</p></div>`;
}

function result(){
  const scores=calculateScores();const winner=getProfile(scores);const p=profiles[winner];window.scrollTo(0,0);
  app.innerHTML=`<main class="result-shell">${header('<span class="trust-pill"><i></i> Ваш результат готов</span>')}
    <section class="result-hero"><div class="result-copy reveal"><p class="eyebrow">${p.eyebrow}</p><h1>${p.title}</h1><p class="result-summary">${p.summary}</p><div class="zone-list" aria-label="Зоны наблюдения">${p.zones.map((zone,i)=>`<span><b>${String(i+1).padStart(2,'0')}</b>${zone}</span>`).join('')}</div></div>
    <div class="result-profile reveal"><p class="profile-caption">Ваш ведущий паттерн</p><div class="profile-heading"><strong>${p.number}</strong><div><span>ПРОФИЛЬ</span><h2>${p.label}</h2></div></div>${renderBodyModel(scores,winner)}<p class="profile-explain">Шкалы показывают, какие темы чаще встречались именно в ваших ответах.</p><div class="score-list">${renderScoreBars(scores,winner)}</div></div></section>
    <section class="next-steps"><article class="recommend-card"><p class="card-label">С чего начать</p><h2>${p.recommendation}</h2><p>Результат отражает только ваши ответы. Он не определяет положение позвонков и не подтверждает причину симптомов.</p></article>
    <article class="article-card"><p class="card-label">Материал для вас · 7 минут</p><h2>${p.article}</h2><button class="text-link" data-article>Прочитать материал ${arrow}</button></article></section>
    <article class="method-article reveal" data-article-body hidden><p class="eyebrow">Верхняя опора · C1</p><h2>Что на самом деле оценивается при работе с Атлантом</h2><p>Атлант — первый шейный позвонок. В расшифровке метода Александр подчёркивает важную деталь: обычно речь не о том, что позвонок «вылетел», а об ограничении движения верхнешейного отдела и устойчивом мышечном ответе. По одному повороту головы, фотографии или ощущению нельзя установить причину такого ограничения.</p><p>Поэтому работа начинается с анамнеза и очной оценки. Сопоставляются свобода движения шеи, положение головы и плеч, таз и опора, фасциальные натяжения и реакция тканей. Проверка проводится лёжа и сидя, а после точечной и фасциальной работы движение оценивается повторно.</p><p>Работа с верхнешейным отделом является частью нейрофасциальной коррекции, в которую также входят работа с глубокими мышечными блоками и фасциальными цепями. Но не каждому нужен каждый этап: частота и объём встреч зависят от индивидуальной оценки. Возможные изменения — ощущение лёгкости, более свободное движение, другая опора или дыхание — индивидуальны и не гарантируются заранее.</p><blockquote>Атлант — верхняя опора и часть общей оси тела, а не универсальная причина любых жалоб.</blockquote></article>
    <section class="booking-panel"><div><p class="eyebrow">Подробнее о методе</p><h2>Познакомьтесь с подходом Александра Земцова</h2><p>На странице метода можно узнать о нейрофасциальной коррекции, посмотреть материалы, перейти в Telegram-канал или выбрать запись.</p></div><div class="booking-actions"><a class="primary-button" href="https://neuro-zemtsov.taplink.ws/" target="_blank" rel="noopener noreferrer">Узнать о методе ${arrow}</a><button class="secondary-button" data-restart>Пройти ещё раз</button></div></section>
    <footer>Метод не заменяет медицинскую диагностику или лечение. При внезапной сильной головной боли, головокружении, слабости, онемении, нарушении речи, зрения или координации обратитесь за медицинской помощью.</footer></main>`;
  bindHome();
  document.querySelector('[data-restart]').addEventListener('click',home);
  document.querySelector('[data-article]').addEventListener('click',event=>{const article=document.querySelector('[data-article-body]');article.hidden=!article.hidden;event.currentTarget.innerHTML=article.hidden?`Прочитать материал ${arrow}`:'Свернуть материал';if(!article.hidden)article.scrollIntoView({behavior:'smooth'});});
}

home();
