const questions = [
  {title:"Насколько свободно поворачивается голова?",hint:"Сравните стороны без усилия и резких движений.",answers:[
    ["Одинаково свободно в обе стороны",{load:2}], ["В одну сторону заметно легче",{mobility:3,axis:1}], ["Движение ограничено с обеих сторон",{mobility:3}], ["Появляется неприятное ощущение или головокружение",{mixed:3}]]},
  {title:"Как обычно расположена голова?",hint:"Можно вспомнить своё отражение или обычные фотографии.",answers:[
    ["Часто подаётся вперёд",{load:3,axis:1}], ["Замечаю наклон или поворот в сторону",{axis:3}], ["Положение меняется в течение дня",{mixed:3}], ["Явной особенности не замечаю",{mobility:1}]]},
  {title:"Что происходит после долгой работы сидя?",hint:"Отметьте самое знакомое ощущение.",answers:[
    ["Хочется поддержать или размять шею",{load:3}], ["Тяжелеет затылок или голова",{mobility:2,load:1}], ["Одно плечо напрягается сильнее",{axis:3}], ["Скованность проходит по спине ниже",{mixed:3}]]},
  {title:"Что вы замечаете в плечах?",hint:"Не ищите идеальную симметрию — важно устойчивое ощущение.",answers:[
    ["Одно плечо кажется выше или впереди",{axis:3}], ["Оба плеча часто подняты",{load:3}], ["Плечи свободны, но шея напряжена",{mobility:3}], ["Напряжение каждый раз ощущается по-разному",{mixed:3}]]},
  {title:"Как тело держит равновесие?",hint:"Вспомните ходьбу, повороты и положение стоя.",answers:[
    ["Опора ощущается устойчиво",{load:1}], ["Чаще переношу вес на одну ногу",{axis:3}], ["При поворотах двигаюсь всем корпусом",{mobility:3}], ["Иногда появляется неуверенность или шаткость",{mixed:3}]]},
  {title:"Как меняется состояние в напряжённый день?",hint:"Речь о вашей телесной реакции, а не о диагнозе.",answers:[
    ["Сжимаю челюсть и затылок",{load:3,mobility:1}], ["Голова сильнее уходит вперёд",{load:3}], ["Напрягается одна сторона шеи",{axis:3}], ["Откликается всё тело",{mixed:3}]]},
  {title:"Как вы просыпаетесь по утрам?",hint:"Оцените большинство обычных утр.",answers:[
    ["Шее нужно время, чтобы расходиться",{mobility:3}], ["Есть тяжесть в затылке или голове",{load:3}], ["Одна сторона ощущается плотнее",{axis:3}], ["Ощущения каждый день разные",{mixed:3}]]},
  {title:"Что происходит при ходьбе?",hint:"Выберите ближайшее наблюдение.",answers:[
    ["Голова и плечи подаются вперёд",{load:3}], ["Руки двигаются неодинаково",{axis:3}], ["Чтобы посмотреть в сторону, поворачиваюсь корпусом",{mobility:3}], ["Замечаю несколько особенностей сразу",{mixed:3}]]},
  {title:"Что вы хотите понять в первую очередь?",hint:"Ответ поможет подобрать материал после теста.",answers:[
    ["Почему шея двигается не так свободно",{mobility:3}], ["Откуда ощущение перекоса",{axis:3}], ["Почему напряжение возвращается после нагрузки",{load:3}], ["Как связаны голова, шея и всё тело",{mixed:3}]]}
];

const profiles = {
  mobility:{eyebrow:"Профиль 01 · движение",title:"Шее не хватает свободы движения",summary:"В ваших ответах чаще повторяется ограничение поворота или ощущение скованности. Один тест движения не показывает причину и не подтверждает положение Атланта. На очной оценке важно сопоставить шею с грудной клеткой, тазом, опорой и реакцией тканей.",zones:["поворот головы","верхняя часть шеи","движение корпуса"],article:"Почему ограниченный поворот головы ещё не говорит о «смещении Атланта»",recommendation:"Начните с очной оценки диапазона движения и болезненности без попыток самостоятельно «вправлять» шею."},
  axis:{eyebrow:"Профиль 02 · ось",title:"Тело удерживает заметную асимметрию",summary:"В ответах повторяются различия между сторонами: положение головы и плеч, опора или движение рук и ног. Тело может распределять нагрузку по всей оси, поэтому одна асимметрия не объясняет её происхождение.",zones:["голова и плечи","ось корпуса","таз и опора"],article:"Как верхняя опора связана с общей осью тела",recommendation:"На очной оценке полезно сопоставить положение головы, плеч, таза и опоры в покое и движении."},
  load:{eyebrow:"Профиль 03 · нагрузка",title:"Верхняя опора быстрее устаёт под нагрузкой",summary:"По вашим ответам напряжение чаще нарастает после сидения, работы или стресса. Это наблюдаемый паттерн нагрузки, а не доказательство проблемы в одном позвонке. Важно понять, какие структуры берут на себя лишнюю работу.",zones:["затылок","шея и плечи","положение головы"],article:"Почему напряжение возвращается после отдыха или массажа",recommendation:"Начните с оценки того, как голова удерживается над корпусом и как меняется движение после нагрузки."},
  mixed:{eyebrow:"Профиль 04 · связанная система",title:"Отклик распределяется по всему телу",summary:"В ответах нет одной ведущей зоны: движение шеи, равновесие, плечи и спина отзываются вместе. Такой результат особенно важно не сводить к одному Атланту — нужна последовательная очная проверка всей системы.",zones:["верхняя опора","нервная система","связанные цепи"],article:"Почему Атлант — важная часть биомеханики, но не объяснение всех симптомов",recommendation:"Начните с очной оценки движения лёжа и сидя, фасциальных натяжений, опоры и анамнеза."}
};

const app = document.querySelector('#app');
let step = -1;
let chosen = [];
const arrow = '<span aria-hidden="true">↗</span>';

function header(side='') { return `<header class="topbar compact"><button class="wordmark" data-home>НЕЙРОФАСЦИАЛЬНАЯ КОРРЕКЦИЯ</button>${side}</header>`; }
function bindHome(){ document.querySelector('[data-home]')?.addEventListener('click',home); }

function home(){
  step=-1; chosen=[]; window.scrollTo(0,0);
  app.innerHTML=`<main class="home-shell">
    <header class="topbar"><span class="wordmark">НЕЙРОФАСЦИАЛЬНАЯ КОРРЕКЦИЯ</span><span class="trust-pill"><i></i> Александр Земцов</span></header>
    <section class="hero"><div class="fascia-art" aria-hidden="true"></div><div class="hero-copy reveal">
      <p class="index">C1 <i>/</i> ВЕРХНЯЯ ОПОРА</p><h1>Как тело<br>удерживает<br>голову?</h1>
      <p class="lead">Ответьте на 9 вопросов и получите карту верхней опоры — без онлайн-диагнозов и опасных самопроверок</p>
      <button class="primary-button hero-button" data-start>Начать — 3 минуты ${arrow}</button>
      <p class="disclaimer"><span>◇</span> Тест не определяет «смещение Атланта»</p></div></section>
    <section class="benefits"><article><span>✦</span><div><b>Движение</b><p>Как свободно поворачиваются голова и корпус.</p></div></article><article><span>≈</span><div><b>Ось</b><p>Как связаны голова, плечи, таз и опора.</p></div></article><article><span>⌁</span><div><b>Следующий шаг</b><p>Персональное объяснение и материал о методе.</p></div></article></section>
    <section class="about-method"><p class="eyebrow">Первый шейный позвонок</p><h2>Атлант — часть общей биомеханики</h2><p>Атлант, или C1, участвует в движении головы и работе верхнешейного отдела. Но он не является универсальным объяснением всех симптомов. Александр Земцов оценивает верхнюю опору только в связи с движением всей оси, фасциальными натяжениями и реакцией нервной системы.</p></section>
    <footer>Информационный материал · При острых или тревожных симптомах обратитесь к врачу</footer></main>`;
  document.querySelector('[data-start]').addEventListener('click',()=>{step=0;renderQuestion();});
}

function renderQuestion(){
  const q=questions[step]; const progress=((step+1)/questions.length)*100;
  app.innerHTML=`<main class="quiz-shell">${header(`<span class="question-count">0${step+1} <i>/</i> 09</span>`)}<div class="progress-track"><span style="width:${progress}%"></span></div>
    <section class="question-layout"><div class="question-copy reveal"><p class="eyebrow">Вопрос ${step+1} из 9</p><h1>${q.title}</h1><p>${q.hint}</p></div>
    <div class="answers reveal">${q.answers.map((a,i)=>`<button data-answer="${i}"><span>0${i+1}</span>${a[0]}${arrow}</button>`).join('')}${step?'<button class="back-button" data-back>← Назад</button>':''}</div></section>
    <p class="quiz-disclaimer">Не выполняйте движения через боль. Тест не ставит диагнозов.</p></main>`;
  bindHome();
  document.querySelectorAll('[data-answer]').forEach(btn=>btn.addEventListener('click',()=>{chosen[step]=Number(btn.dataset.answer);if(step===8)result();else{step++;renderQuestion();}}));
  document.querySelector('[data-back]')?.addEventListener('click',()=>{chosen.pop();step--;renderQuestion();});
}

function getProfile(){
  const scores={mobility:0,axis:0,load:0,mixed:0};
  chosen.forEach((n,i)=>Object.entries(questions[i].answers[n][1]).forEach(([k,v])=>scores[k]+=v));
  return Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0];
}

function result(){
  const p=profiles[getProfile()]; window.scrollTo(0,0);
  app.innerHTML=`<main class="result-shell">${header('<span class="trust-pill"><i></i> Ваша карта готова</span>')}
    <section class="result-hero"><div class="result-copy reveal"><p class="eyebrow">${p.eyebrow}</p><h1>${p.title}</h1><p class="result-summary">${p.summary}</p><div class="zone-list" aria-label="Зоны наблюдения">${p.zones.map((z,i)=>`<span><b>0${i+1}</b>${z}</span>`).join('')}</div></div>
    <div class="result-map" aria-hidden="true"><div class="map-orbit orbit-one"></div><div class="map-orbit orbit-two"></div><div class="map-center"><span>ваша</span><strong>КАРТА</strong><span>верхней опоры</span></div></div></section>
    <section class="next-steps"><article class="recommend-card"><p class="card-label">С чего начать</p><h2>${p.recommendation}</h2><p>Результат отражает только ваши ответы. Он не определяет положение позвонков и не подтверждает причину симптомов.</p></article>
    <article class="article-card"><p class="card-label">Материал для вас · 7 минут</p><h2>${p.article}</h2><button class="text-link" data-article>Прочитать материал ${arrow}</button></article></section>
    <article class="method-article reveal" data-article-body hidden><p class="eyebrow">Верхняя опора · C1</p><h2>Что на самом деле оценивается при работе с Атлантом</h2><p>Атлант — первый шейный позвонок. В расшифровке метода Александр подчёркивает важную деталь: обычно речь не о том, что позвонок «вылетел», а об ограничении движения верхнешейного отдела и устойчивом мышечном ответе. По одному повороту головы, фотографии или ощущению нельзя установить причину такого ограничения.</p><p>Поэтому работа начинается с анамнеза и очной оценки. Сопоставляются свобода движения шеи, положение головы и плеч, таз и опора, фасциальные натяжения и реакция тканей. Проверка проводится лёжа и сидя, а после точечной и фасциальной работы движение оценивается повторно.</p><p>Работа с верхнешейным отделом является частью нейрофасциальной коррекции, в которую также входят работа с глубокими мышечными блоками и фасциальными цепями. Но не каждому нужен каждый этап: частота и объём встреч зависят от индивидуальной оценки. Возможные изменения — ощущение лёгкости, более свободное движение, другая опора или дыхание — индивидуальны и не гарантируются заранее.</p><blockquote>Атлант — верхняя опора и часть общей оси тела, а не универсальная причина любых жалоб.</blockquote></article>
    <section class="booking-panel"><div><p class="eyebrow">Подробнее о методе</p><h2>Познакомьтесь с подходом Александра Земцова</h2><p>На странице метода можно узнать о нейрофасциальной коррекции, посмотреть материалы, перейти в Telegram-канал или выбрать запись.</p></div><div class="booking-actions"><a class="primary-button" href="https://neuro-zemtsov.taplink.ws/" target="_blank" rel="noopener noreferrer">Узнать о методе ${arrow}</a><button class="secondary-button" data-restart>Пройти ещё раз</button></div></section>
    <footer>Метод не заменяет медицинскую диагностику или лечение. При внезапной сильной головной боли, головокружении, слабости, онемении, нарушении речи, зрения или координации обратитесь за медицинской помощью.</footer></main>`;
  bindHome();
  document.querySelector('[data-restart]').addEventListener('click',home);
  document.querySelector('[data-article]').addEventListener('click',e=>{const el=document.querySelector('[data-article-body]');el.hidden=!el.hidden;e.currentTarget.innerHTML=el.hidden?`Прочитать материал ${arrow}`:'Свернуть материал';if(!el.hidden)el.scrollIntoView({behavior:'smooth'});});
}

home();
