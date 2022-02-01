import AboutMemoryPage from './pages/aboutmemorypage.js';
import AboutRebusPage from './pages/aboutrebuspage.js';
import ErrorPage from './pages/errorpage.js';
import AboutSeasonsPage from './pages/aboutseasonspage.js';
import HomePage from './pages/home.js';
import MemoryPage from './pages/memorypage.js';
import RebusPage from './pages/rebuspage.js';
import SeasonsPage from './pages/seasonspage.js';
import SeasonsScorePage from './pages/seasonsscore.js';

import AboutMathPage from './pages/aboutmathpage.js';
import MathSumPage from './pages/mathsumpage.js';
import MathMinusPage from './pages/mathminuspage.js';
import MathMultiplyPage from './pages/mathmultiplepage.js';
import MathDivisionPage from './pages/mathdivisionpage.js';

import Header from './components/header.js';
import Audio from './components/audio.js';
import ButtonStart from './components/buttonstart.js';
import Content from './components/content.js';
import Footer from './components/footer.js';
import MainMenu from './components/mainmenu.js';
import MathMenu from './components/mathmenu.js';
import MathMain from './components/mathmain.js';
import NavButtons from './components/navbuttons.js';

import '../styles/style.css';

import tree1 from '../img/memory/tree1.png';
import tree2 from '../img/memory/tree2.png';
import tree3 from '../img/memory/tree3.png';
import tree4 from '../img/memory/tree4.png';
import tree5 from '../img/memory/tree5.png';
import tree6 from '../img/memory/tree6.png';
import card2 from '../img/memory/card2.png';
import card1 from '../img/memory/card.png';

import rebus1 from '../img/rebus/rebus1.png';
import rebus2 from '../img/rebus/rebus2.png';
import rebus3 from '../img/rebus/rebus3.png';
import rebus4 from '../img/rebus/rebus4.png';
import rebus5 from '../img/rebus/rebus5.png';
import rebus6 from '../img/rebus/rebus6.png';
import rebus7 from '../img/rebus/rebus7.png';

import birds from '../img/seasons/birds.png';
import boy from '../img/seasons/boy.png';
import boy2 from '../img/seasons/boy2.png';
import bullfinch from '../img/seasons/bullfinch.png';
import buterfly from '../img/seasons/buterfly.png';
import cherry from '../img/seasons/cherry.png';
import flower from '../img/seasons/flower.png';
import flower2 from '../img/seasons/flower2.png';
import girl from '../img/seasons/girl.png';
import leaves from '../img/seasons/leaves.png';
import march from '../img/seasons/march.png';
import mittens from '../img/seasons/mittens.png';
import snowman from '../img/seasons/snowman.png';
import spring from '../img/seasons/spring.png';
import sun from '../img/seasons/sun.png';
import umbrella from '../img/seasons/umbrella.png';
import stars from '../img/stars.png';

import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCpANIWfY0HG7ysvjVVrJm1LFI1huvde3Q",
  authDomain: "mini-games-for-kids-fa10e.firebaseapp.com",
  databaseURL: "https://mini-games-for-kids-fa10e-default-rtdb.firebaseio.com",
  projectId: "mini-games-for-kids-fa10e",
  storageBucket: "mini-games-for-kids-fa10e.appspot.com",
  messagingSenderId: "978068884549",
  appId: "1:978068884549:web:f080916bac529fb1cbe72c"
};

const appDB = initializeApp(firebaseConfig);
import { getDatabase, ref, set, onValue } from "firebase/database";


// Список компонент (from components.js)
const components = {
  header: Header,
  audio : Audio,
  content : Content,
  footer: Footer,
};

// Список поддердживаемых роутов (from pages.js)
const routes = {
  home: HomePage,
  aboutmemory: AboutMemoryPage,
  aboutseasons: AboutSeasonsPage,
  aboutrebus: AboutRebusPage,
  memory: MemoryPage,
  seasons: SeasonsPage,
  seasonsscore: SeasonsScorePage,
  rebus: RebusPage,
  aboutmath: AboutMathPage,
  math: MathSumPage,
  math_minus: MathMinusPage,
  math_multiple: MathMultiplyPage,
  math_division: MathDivisionPage,
  default: HomePage,
  error: ErrorPage,
};

/* ----- spa init module --- */
const mySPA = (function() {

  /* ------- begin view -------- */
  function ModuleView() {
    let myModuleContainer = null;
    let contentContainer = null;
    let routesObj = null;
    let that = this;
    let butterfly = null;
    let butterflyFeaches = null;
    let startAnimation = null;
    //переменныем для memory-page
    let grid = null;
    let result = null;
    //переменные для ребуса
    let buttonStartRebus = null;
    let inputUserName = null;
    let rebusPage = null;
    let inputRebus = null;
    let buttonCheck = null;
    let rebusImage = null;
    let rebusArray = null;
    let textClue = null;
    let rebusStage = null;
    let stageStars = null;
    let starsArr = null;
    let n = null;
    let buttonRestartRebus = null;
    //переменные для сезонов
    let timer = null;
    let totalTime = null;
    let buttonSend = null;
    let inputRecords = null;
    //переменные для математики
    let num1 = null;
    let num2 = null;
    let linkArr = null;
    let audioWrongSound = null;
    let progress = null;
    let showProgress = null;
    let mathConteiner = null;

    
    this.init = function(container, routes) {
      myModuleContainer = container;
      routesObj = routes;
      contentContainer = myModuleContainer.querySelector("#content");
    }
    //отрисовка основного контента
    this.renderContent = function(hashPageName) {
      let routeName = "default";
      if (hashPageName.length > 0) {
        routeName = hashPageName in routes ? hashPageName : "error";
      }
      window.document.title = routesObj[routeName].title;
      contentContainer.innerHTML = routesObj[routeName].render(`${routeName}-page`);
    }
    //создаем бабочку
    this.createButterfly = function(){
      butterfly = document.createElement('div');
      butterfly.id = 'yellow-butterfly';
      contentContainer.append(butterfly);
    }
    //анимируем бабочку
    this.animateButterfly = function (butterfly) {
        butterflyFeaches = butterfly;

        butterflyFeaches.posX += butterflyFeaches.speedX;
        //проверяем дотронулась ли бабочка до девой стороны контента
        if (butterflyFeaches.posX < 0){
            butterflyFeaches.speedX = - butterflyFeaches.speedX;
            butterflyFeaches.posX =  0;
        }
        //проверяем добронулась ли бабочка до правой стороны контента
        if (butterflyFeaches.posX + butterflyFeaches.width >= contentContainer.offsetWidth ){
            butterflyFeaches.speedX = -butterflyFeaches.speedX;
            butterflyFeaches.posX = contentContainer.offsetWidth- butterflyFeaches.width;
        }
        butterflyFeaches.posY +=butterflyFeaches.speedY;
        //проверяем добронулась ли бабочка до нижней стороны контента
        if ( butterflyFeaches.posY + butterflyFeaches.height > contentContainer.offsetHeight ) {
            butterflyFeaches.speedY = - butterflyFeaches.speedY;
            butterflyFeaches.posY = contentContainer.offsetHeight - butterflyFeaches.height;
        }
        //проверяем добронулась ли бабочка до верхней стороны контента
        if ( butterflyFeaches.posY < 0 ) {
            butterflyFeaches.speedY = -butterflyFeaches.speedY;
            butterflyFeaches.posY = 0;
        }

        if (butterflyFeaches.speedX < 0){
            butterflyFeaches.updateAndTurn();//разворачиваем бабочку
        } else {
            butterflyFeaches.update();
        }
        startAnimation = requestAnimationFrame(function() {
          that.animateButterfly(butterflyFeaches);
        });
      }
    this.stopAnimation = function () {
      cancelAnimationFrame(startAnimation);
    }
    //включение/выключение аудио
    this.turnOnMusic = function() {
        let music = myModuleContainer.querySelector('#audio');
        if (music.paused) {
          myModuleContainer.querySelector('#button-sound').classList.add('on');
          music.play();
        } else {
          myModuleContainer.querySelector('#button-sound').classList.remove('on');
          music.currentTime = 0;
          music.pause();
        }
    }
    //-------мемори--------
    //отрисовка игры мемори(поля и счета)
    this.renderMemoryBoard = function(card){
      grid = myModuleContainer.querySelector('.grid');
      result = myModuleContainer.querySelector('#result');
      grid.appendChild(card);
    }
    this.renderMemoryResult = function(text){
      result.textContent = text;
    }
    //-------ребус--------
    //пока не введено имя игра не начинается
    this.checkStartButton = function(){
      inputUserName = myModuleContainer.querySelector('#user-name');
      buttonStartRebus = myModuleContainer.querySelector('#button-start-rebus');
      if(inputUserName.value){
        buttonStartRebus.removeAttribute('disabled');
      } else{
        buttonStartRebus.setAttribute('disabled','disabled');
      }
    }
    //отрисовка игры ребус
    this.renderRebusGame = function (rebusArray) {
      rebusPage = myModuleContainer.querySelector('.rebus-page');
      rebusStage = myModuleContainer.querySelector('.rebus-stage');
      buttonCheck = myModuleContainer.querySelector('#button-rebus-answer');
      buttonRestartRebus = myModuleContainer.querySelector('#button-rebus-restart');
      textClue = myModuleContainer.querySelector('.clue-item');
      n = 0;
      //делаем кнопку Проверить и Начать заново задезейбленной
      buttonCheck.setAttribute('disabled','disabled');
      buttonRestartRebus.setAttribute('disabled','disabled');
      //отображаем ребус
      rebusImage = myModuleContainer.querySelector('.rebus-img');
      rebusImage.style.backgroundImage = `url(${rebusArray[n].img})`;
      //рисуем звездочки для счета
      for(let i = 0; i < 7;i++){
        let star = document.createElement('div');
        star.classList.add('stage-star');
        rebusStage.append(star);//добавили их в стейдж
      }
      //добавляем звездочки для поздравлений
      that.rebusGameCreateStars();
      starsArr = myModuleContainer.querySelectorAll('.star');
      //console.log(starsArr);
      starsArr.forEach((item) => {
        item.classList.add('not-display');
      });
    }
    //метод находит кнопку и устанавливает атрибуты
    this.rebusGameButtonCheck = function() {
      inputRebus =  myModuleContainer.querySelector('.rebus-content input');
      buttonCheck = myModuleContainer.querySelector('#button-rebus-answer');
      textClue.textContent = "";
      //console.log(inputRebus.value);
      that.rebusGameButtonCheckState();
    }
    //метод для дизейбла кнопки Проверить
    this.rebusGameButtonCheckState = function() {
      if(inputRebus.value){
        buttonCheck.removeAttribute('disabled');
      } else{
        buttonCheck.setAttribute('disabled','disabled');
      }
    }
    //метод меняющий картинку ребуса
    this.rebusGameChangeImage = function(rebusArray,userName){
      rebusArray = rebusArray;
      stageStars = myModuleContainer.querySelectorAll('.stage-star');
      if(inputRebus.value.toLowerCase() === rebusArray[n].answer){
        textClue.textContent = `${userName}!!! Правильно!`;
        inputRebus.value = "";
        stageStars[n].classList.add('yellow-star');
        n++;
        if(n >= 7){
          textClue.textContent = `${userName}! Умница!!!`;
          //появляется возможность начать заново
          that.rebusGameEnd();
        } else{
          for(let item of starsArr){
            item.classList.remove('not-display');
            item.classList.add('star-animation');
          }
          //через 5 сек показываем след ребус
          setTimeout(() =>{
            for(let item of starsArr){
              item.classList.add('not-display');
              item.classList.remove('star-animation');
            }
            console.log(rebusArray[n].img);
            rebusImage.style.backgroundImage = `url(${rebusArray[n].img})`;
            textClue.textContent = "";
            that.rebusGameButtonCheckState();
          },5000)
        }
      } else{
        textClue.textContent = `${userName}! Неверно! Попробуй еще раз!`;
        inputRebus.value = "";
      }
    }
    //создание звездочек при правильном ответе
    this.rebusGameCreateStars = function(){
      for(let i = 0; i < 20; i++){
        let star = document.createElement('span');
        let img = document.createElement('img');
        img.src = stars;
        star.classList.add('star');
        star.prepend(img);
        if(i < 10){
          if(i % 2 === 0){
            star.style.top = `${10+i*20}px`;
            star.style.left = `${0}px`;
          } else {
            star.style.top = `${10+i*20}px`;
            star.style.left = `${50}px`;
          }
        } else {
          if(i % 2 === 0){
            star.style.top = `${10+i*20 - 200}px`;
            star.style.right = `0px`;
          } else {
            star.style.top = `${10+i*20 -200}px`;
            star.style.right = `50px`;
          }
        }
        rebusPage.append(star);
      }
    }
    //если отгаданы все ребусы
    this.rebusGameEnd = function () {
      buttonRestartRebus.removeAttribute('disabled');
      console.log(starsArr);
      for(let item of starsArr){
        item.classList.remove('not-display');
        item.classList.add('star-animation-move');
      }
      setTimeout(() => {
        for(let item of starsArr){
          item.classList.add('not-display');
          item.classList.remove('star-animation-move');
        }
      },5000)
  }
    //начать заново
    this.rebusGameRestart = function(rebusArray) {
      n = 0;
      rebusImage.style.backgroundImage = `url(${rebusArray[n].img})`;
      textClue.textContent = "";
      that.rebusGameButtonCheckState();
      stageStars.forEach((item) => {
        item.classList.remove('yellow-star');
      });
      buttonRestartRebus.setAttribute('disabled','disabled');
      that.rebusGameChangeImage();
    }
    //подсказка
    this.rebusGameGiveClue = function(rebusArray) {
      textClue.textContent = `${rebusArray[n].answer}`;
    }
    //--------методы для сезонов-------
    //отображение таймера
    this.showTimer = function (hour,min,sec) {
      timer = myModuleContainer.querySelector('.timer');
      //функция для корректироваки отображения часов
      function updateTime(a){
        return (a < 10) ? `0${a}` : a;
      }
      timer.textContent = `${updateTime(hour)}:${updateTime(min)}:${updateTime(sec)}`;
    }
    //отрисовка события драг-дроп
    this.seasonsDragstart = function (item) {
      item.classList.add("item-selected");
    }
    this.seasonsDragend = function (item) {
      item.classList.remove("item-selected");
    }
    this.seasonsDragenter = function (item) {
      if(item.closest('span.season-img')){
        item.classList.add('item-to-drop');
      }
    }
    this.seasonsDragleave = function (item) {
      item.classList.remove('item-to-drop');
    }
    this.seasonsDragdrop = function (item,seasonsArray) {
      item.classList.remove('item-to-drop');
      const selectedItem = myModuleContainer.querySelector('.item-selected');
      const currentItem = item;
      if (currentItem.closest('span.season-img')){
        if(currentItem === selectedItem){
          return;
        }
        let selectedItemNext = selectedItem.nextElementSibling;
        let currentItemNext = currentItem.nextElementSibling;

        //проверяем куда вставлять элемент
        if(selectedItem === currentItemNext){
          currentItem.before(selectedItem);
          selectedItem.after(currentItem);
        } else if(currentItem === selectedItemNext){
          currentItem.after(selectedItem);
          selectedItem.before(currentItem);
        } else if(!selectedItemNext && !currentItemNext){
          selectedItemNext = selectedItem.previousElementSibling;
          currentItemNext = currentItem.previousElementSibling;
          selectedItemNext.after(currentItem);
          currentItemNext.after(selectedItem);
        } else if (!currentItemNext && selectedItemNext){
          currentItemNext = currentItem.previousElementSibling;
          currentItemNext.after(selectedItem);
          selectedItemNext.before(currentItem);
        } else if(currentItemNext && !selectedItemNext){
          selectedItemNext = selectedItem.previousElementSibling;
          currentItemNext.before(selectedItem);
          selectedItemNext.after(currentItem);
        } else {
          currentItemNext.before(selectedItem);
          selectedItemNext.before(currentItem);
        }
      }
    }
    //метод,сравнивающий сезон и картинки каждого ряда
    this.seasonsCompareImages = function (url) {
      let spring = Array.from(myModuleContainer.querySelector('.first-line').children);
      let summer = Array.from(myModuleContainer.querySelector('.second-line').children);
      let autumn = Array.from(myModuleContainer.querySelector('.third-line').children);
      let winter = Array.from(myModuleContainer.querySelector('.forth-line').children);
      //проверяем все картинки соответствуют своему сезону года
      if(spring.slice(1).every((item) =>  item.getAttribute('data-season') === "spring") &&
        summer.slice(1).every((item) =>  item.getAttribute('data-season') === "summer") &&
        autumn.slice(1).every((item) =>  item.getAttribute('data-season') === "autumn") &&
        winter.slice(1).every((item) =>  item.getAttribute('data-season') === "winter")){
        //включаем звук Ух-ты,если включено айдио то на время выключаем его
        let music = myModuleContainer.querySelector('#audio-congratulation');
        let audio = myModuleContainer.querySelector('#audio');
        if(!audio.paused){
          audio.currentTime = 0;
          audio.pause();
          setTimeout(() => audio.play(),2000);
        }
        music.play();
        totalTime = timer.textContent;//записываем время игры
        setTimeout(() => {
          location.hash = url;
        },2000);
      };
    }
    //страница с рекордами
    this.seasonsButtonSend = function () {
      inputRecords = myModuleContainer.querySelector('#seasons-user-name');
      if(inputRecords.value){
        buttonSend.removeAttribute('disabled');
      } else {
        buttonSend.setAttribute('disabled','disabled');
      }
    }
    this.seasonsSetAttribute = function () {
      buttonSend = myModuleContainer.querySelector('#button-send');
      buttonSend.setAttribute('disabled','disabled');
    }
    this.seasonsSetAttributeInput = function () {
      inputRecords = myModuleContainer.querySelector('#seasons-user-name');
      if(inputRecords.hasAttribute('disabled')){
        inputRecords.removeAttribute('disabled','disabled');
      } else {
        inputRecords.setAttribute('disabled','disabled');
      }
    }
    this.seasonsShowLoader = function () {
      let loader = myModuleContainer.querySelector('.loader');
      loader.classList.remove('not-display');
    /*  if(loader.classList.contains('not-display')){
        loader.classList.remove('not-display');
      } else {
        loader.classList.add('not-display');
      }*/
    }
    this.seasonsHideLoader = function(){
      let loader = myModuleContainer.querySelector('.loader');
      loader.classList.add('not-display');
    }
    this.seasonsFillRecordsTable = function(array) {
      let table = myModuleContainer.querySelector('.records');
      let tableTr = myModuleContainer.querySelectorAll('.records tr');
      for(let i = 1; i <= array.length; i++){
        let tableTd = tableTr[i].querySelectorAll('td');
          tableTd[0].textContent = `${i}`;
          tableTd[1].textContent = `${array[i-1].name}`;
          tableTd[2].textContent = `${array[i-1].score}`;
        }
    }
    //--------методы для математики--------
    //отрисовка чисел,ответов
    this.mathViewStartDigits = function (number1,number2,answer1,answer2,answer3) {
        showProgress = myModuleContainer.querySelector('.show-progress');
        mathConteiner = myModuleContainer.querySelector('.math-conteiner');
        showProgress.classList.add('not-display');
        num1 = myModuleContainer.querySelector('.num1');
        num2 = myModuleContainer.querySelector('.num2');
        num1.textContent = number1;
        num2.textContent = number2;
        let answerArr = Array.from(myModuleContainer.querySelectorAll('.answer'));
        answerArr.sort(() => 0.5 - Math.random());
        answerArr[0].textContent = answer3;
        answerArr[1].textContent = answer1;
        answerArr[2].textContent = answer2;
      }
    //метод для начальной вкладки
    this.mathAddStartClass = function(){
      linkArr = myModuleContainer.querySelectorAll('.mathmenu__link');
      linkArr.forEach((item) => {
        if(item.getAttribute('href') === location.hash){
          item.classList.add('active');
        }
      });
    }
    //включение звука упс
    this.mathTurnOnWrongSound = function() {
      audioWrongSound = myModuleContainer.querySelector('#audio-wrong');
      audioWrongSound.play();
    }
    //метод изменяет класс при изм вкладки
    this.mathSwitchClass = function(event) {
      if(event.closest('a')){
        linkArr.forEach((item) => {
          if(item.classList.contains('active')){
            item.classList.remove('active');
          }
        });
        event.classList.add('active');
      }
    }
    //метод выводящий строку прогресс
    this.mathFillProgress = function (score) {
      progress = myModuleContainer.querySelector('.progress-text');
      progress.textContent = `Количество баллов: ${score}/10`;
    }
    //поздравления
    this.mathCongratulations = function(score){
      if(score === 10){
        progress.textContent = "Умница! Все верно!";
      } else {
        progress.textContent = "Молодец! Но старайся лучше!";
      }
      mathConteiner.style.opacity = '0';
      let answerArr = myModuleContainer.querySelectorAll('.answer');
      for(let i of answerArr){
        i.classList.add('cursor');
      }
      showProgress.classList.remove('not-display');
      showProgress.textContent = `Итого: ${score}/10`;
    }
    //начать заново
    this.mathStartAgain = function () {
      mathConteiner.style.opacity = '1';
      let answerArr = myModuleContainer.querySelectorAll('.answer');
      for(let i of answerArr){
        i.classList.remove('cursor');
      }
      showProgress.classList.add('not-display');
      showProgress.textContent = '';
    }
}
  /* -------- end view --------- */
  /* ------- begin model ------- */
  function ModuleModel() {
      let myModuleView = null;
      let that = this;
      //переменные для мемори
      const cardsArray = [
        {
          name : "tree1",
          image : tree1
        },
        {
          name : "tree1",
          image : tree1
        },
        {
          name : "tree2",
          image : tree2
        },
        {
          name : "tree2",
          image : tree2
        },
        {
          name : "tree3",
          image : tree3
        },
        {
          name : "tree3",
          image : tree3
        },
        {
          name : "tree4",
          image : tree4
        },
        {
          name : "tree4",
          image : tree4
        },
        {
          name : "tree5",
          image : tree5
        },
        {
          name : "tree5",
          image : tree5
        },
        {
          name : "tree6",
          image : tree6
        },
        {
          name : "tree6",
          image : tree6
        }
      ];
      let cardsChoosen = [];
      let cardsChoosenId = [];
      let cardsWon = [];
      //переменные для ребуса
      const rebusArray = [
      {  id : "0",
        answer : "озеро",
        img : rebus1
      },
      {  id : "1",
        answer : "каникулы",
        img : rebus2
      },
      {  id : "2",
        answer : "комар",
        img : rebus3
      },
      {  id : "3",
        answer : "жара",
        img : rebus4
      },
      {  id : "4",
        answer : "гроза",
        img : rebus5
      },
      {  id : "5",
        answer : "бабочка",
        img : rebus6
      },
      {  id : "6",
        answer : "солнце",
        img : rebus7
      },
    ];
      //переменные для сезонов
      const seasonsArray = [
        {
          name: "birds",
          image : birds,
          season: "autumn"
        },
        {
          name: "boy",
          image : boy,
          season: "winter"
        },
        {
          name: "boy2",
          image : boy2,
          season: "autumn"
        },
        {
          name: "bullfinch",
          image : bullfinch,
          season: "winter"
        },
        {
          name: "butefly",
          image : buterfly,
          season: "summer"
        },
        {
          name: "cherry",
          image : cherry,
          season: "summer"
        },
        {
          name: "flower",
          image : flower,
          season: "spring"
        },
        {
          name: "flower2",
          image : flower2,
          season: "spring"
        },
        {
          name: "girl",
          image : girl,
          season: "summer"
        },
        {
          name: "leaves",
          image : leaves,
          season: "autumn"
        },
        {
          name: "march",
          image : march,
          season: "spring"
        },
        {
          name: "mittens",
          image : mittens,
          season: "winter"
        },
        {
          name: "snowman",
          image : snowman,
          season: "winter"
        },
        {
          name: "spring",
          image : spring,
          season: "spring"
        },
        {
          name: "sun",
          image : sun,
          season: "summer"
        },
        {
          name: "umbrella",
          image : umbrella,
          season: "autumn"
        }
      ];
      let counter = null;
      //переменные для матем
      let level = 10;//уровень по дефолту 10
      let n = 0;//количество попыток(10)
      let score = 0;//счет

      this.init = function(view) {
        myModuleView = view;
      }
      //передаем во вью перерисовку на странице
      this.updateState = function(pageName) {
        if(pageName === 'memory'){
          myModuleView.renderContent(pageName);
          that.memoryGame();
        } else {
          myModuleView.renderContent(pageName);
        }
        if(pageName === "home"){
          that.animateButterfly();
        } else {
          that.stopAnimateButterfly();
        }
        if(pageName === "seasonsscore"){
          that.seasonsGetFromDB();
        }
      }
      //создаем характеристики для бабочки и передаем во вью
      this.animateButterfly = function(){
        //создаем хар-ки
        let butterflyFeaches = {
            posX : 10,
            posY : 10,
            speedX : 1,
            speedY : 1,
            width : 50,
            height : 50,
            update : function(){
              let butterfly = document.querySelector('#yellow-butterfly');
              butterfly.style.transform = `translate(${this.posX}px,${this.posY}px)`;
            },
            updateAndTurn : function() {
              let butterfly = document.querySelector('#yellow-butterfly');
              butterfly.style.transform = `translate(${this.posX}px,${this.posY}px) scaleX(-1)`;
            }
          };
        myModuleView.createButterfly();
        requestAnimationFrame(function() {
           myModuleView.animateButterfly(butterflyFeaches);
        });
      }
      this.stopAnimateButterfly = function () {
        myModuleView.stopAnimation();
      }
      //передаем во вью включение/выключение аудио
      this.turnOnMusic = function() {
        myModuleView.turnOnMusic();
      }

      //-------методы для мемори---------
      this.memoryGameCreateBoard = function(){
          for(let i = 0; i < cardsArray.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src', card2);
            card.setAttribute('data-id',i);
            myModuleView.renderMemoryBoard(card);
        }
      }
      this.memoryGameFlipCard = function(event) {
          let cardId = event.getAttribute('data-id');
          //console.log(cardId,cardsChoosen,cardsChoosenId)
          cardsChoosen.push(cardsArray[cardId].name);
          cardsChoosenId.push(cardId);
          event.classList.toggle('rotated');
          event.setAttribute('src',cardsArray[cardId].image);
          if (cardsChoosen.length === 2){
            setTimeout(that.memoryGameCheckForMatch,500);//если открыто 2 карты то через 0,5с вызываем емтод проверяющий соответсвие
          }
      }
      this.memoryGameCheckForMatch = function() {
        //check for match
          let cards = document.querySelectorAll('img');
          let optionOneId = cardsChoosenId[0];
          let optionTwoId = cardsChoosenId[1];
          if(cardsChoosen[0] === cardsChoosen[1] && cardsChoosenId[0] !== cardsChoosenId[1]){
            cards[optionOneId].classList.toggle('rotated');
            cards[optionTwoId].classList.toggle('rotated');
            cards[optionOneId].setAttribute('src',card1);
            cards[optionTwoId].setAttribute('src',card1);
            cardsWon.push(cardsChoosen);
          } else {
            cards[optionOneId].classList.toggle('rotated');
            cards[optionTwoId].classList.toggle('rotated');
            cards[optionOneId].setAttribute('src',card2);
            cards[optionTwoId].setAttribute('src',card2);
          }
          cardsChoosen = [];
          cardsChoosenId = [];

          myModuleView.renderMemoryResult(`Score : ${cardsWon.length}`);
          if (cardsWon.length === cardsArray.length/2){
            myModuleView.renderMemoryResult('Поздравляем!Вы выйграли!!!');;
          }

      }
      this.memoryGameRestart = function(cards) {
        for(let i = 0; i < cards.length; i++){
          cards[i].setAttribute('src',card2);
        }
        cardsChoosen = [];
        cardsChoosenId = [];
        cardsWon = [];
        myModuleView.renderMemoryResult(`Score : ${cardsWon.length}`);
        cardsArray.sort(() => 0.5 - Math.random());
      }
      this.memoryGame = function () {
        //cards options
        cardsArray.sort(() => 0.5 - Math.random());//тусуем карточки
        that.memoryGameCreateBoard();//строим поле
        myModuleView.renderMemoryResult(`Score : ${cardsWon.length}`);//выводим счет
      }

      //------методы для ребуса----------
      this.changeButtonState = function(button){
        button.setAttribute('disabled','disabled');
      }
      this.rebusGameButtonStartState = function() {
        myModuleView.checkStartButton();
      }
      //метод записывающий имя в локал сторадж
      this.rebusGameUserName = function (userName) {
        let user = JSON.stringify(userName);
        localStorage.setItem('$rebus_game_user-name',user);
      }
      //метод передачи во вью для отрисовки поля
      this.rebusGame = function() {
        myModuleView.renderRebusGame(rebusArray);
      }
      //метод регулирующий состояние кнопки Проверить
      this.rebusGameInput = function(){
        myModuleView.rebusGameButtonCheck();
      }
      //метод отрисовки во вью след ребуса при правильном ответе
      this.rebusGameCheckInput = function() {
        let user = that.rebusGameGetName();
        myModuleView.rebusGameChangeImage(rebusArray,user);
      }
      //метод получения имени из локал-сторадж
      this.rebusGameGetName = function () {
        return JSON.parse(localStorage.getItem('$rebus_game_user-name'));
      }
      //метод выводящий подсказку
      this.rebusGameGiveClue = function () {
        myModuleView.rebusGameGiveClue(rebusArray);
      }
      //вью перерисовывает заново поле
      this.rebusGameRestart = function () {
        myModuleView.rebusGameRestart(rebusArray);
      }

      //--------методы для сезонов-------
      this.seasonsMixImages = function(seasonsImgArr){
        let arr = Array.from(seasonsImgArr);
        seasonsArray.sort(() => 0.5 - Math.random());
        //console.log(arr);
        arr.forEach((item, i) => {
          //console.log(seasonsArray[i],i,seasonsArray[i].image);
          //let img = document.createElement('img');
          item.style.backgroundImage = `url(${seasonsArray[i].image})`;
          item.setAttribute('data-value',`${seasonsArray[i].name}`);
          item.setAttribute('data-season',`${seasonsArray[i].season}`);
          item.setAttribute('draggable',true);
          //item.prepend(img);
        });
      };
      //логика работы таймена
      this.startTimer = function () {
        let hour = 0;
        let min = 0;
        let sec = 0;
        function countTimer(){
          sec += 1;
          if(sec === 60){
            min += 1;
            sec = 0;
          } else if (min == 60){
            hour += 1;
            min = 0;
          }
          counter = setTimeout(function(){
            countTimer();
          },1000);
          myModuleView.showTimer(hour,min,sec);
        }
        //вызываем функцию времени через 1 сек
        setTimeout(() => countTimer(),1000);
        myModuleView.showTimer(hour,min,sec);
      }
      //остановка таймера
      this.stopTimer = function () {
        clearTimeout(counter);
      }
      //обработка события драг-дроп
      this.seasonsHandleEvents = function (event,item) {
        switch (event) {
          case "dragstart":
            myModuleView.seasonsDragstart(item);
            break;
          case 'dragend':
            myModuleView.seasonsDragend(item);
            break;
          case 'dragenter':
            myModuleView.seasonsDragenter(item);
            break;
          case 'dragleave':
            myModuleView.seasonsDragleave(item);
            break;
          case 'drop':
            myModuleView.seasonsDragdrop(item,seasonsArray);
            myModuleView.seasonsCompareImages("#seasonsscore");//если все ок,то переходим на страницу Рекорды
            break;
          default:
            break;
        }
      }
      this.seasonsButtonSend = function () {
        myModuleView.seasonsButtonSend();
      }
      this.seasonsSetAttribute = function () {
        myModuleView.seasonsSetAttribute();
      }
      this.seasonsCheckTime = function(time){
        if (time !== '00:00:00') {
          myModuleView.seasonsSetAttributeInput();//раздезейбливаем инпут если время не равно 0
        }
      }
      //отправка имени и время в БД
      this.seasonsSentToDB = function (input,time) {
        function writeUserData(name,time) {
          const db = getDatabase();
          set(ref(db, 'seasons/' + name), {
            name: name,
            score: time,
          })
          .then(() => {
             console.log('Data saved successfully!');
             myModuleView.seasonsHideLoader();
          })
          .catch((error) => {
            console.log('The write failed...')
          });
        }
        writeUserData(input.value,time);
        myModuleView.seasonsShowLoader();
        input.value = "";//очищаем инпут после отправки
        myModuleView.seasonsSetAttribute();//дизейблим кнопку
        myModuleView.seasonsSetAttributeInput();
      }
      //получаем данные и вызываем метод сортировки
      this.seasonsGetFromDB = function () {
            myModuleView.seasonsShowLoader();
            const db = getDatabase();
            const starCountRef = ref(db, 'seasons/');
            onValue(starCountRef, (snapshot) => {
              const data = snapshot.val();
              if (data){
                that.seasonsSortData(data);
                myModuleView.seasonsHideLoader();
              }
            });
      }
      //сортируем массив по времени игры
      this.seasonsSortData = function (data){
        let arr = [];
        //формируем массив
        for(let i = 0; i < Object.keys(data).length; i++){
          arr.push({name:Object.keys(data)[i],score:Object.values(data)[i].score});
        }
        //конвертируем время в сек
        for(let i = 0; i < arr.length; i++){
          let time = `${arr[i].score}`;
          arr[i].score = convertTimeInSec(time);
        }
        //сортируем
        sortByScore(arr);
        //конвертируем время обратно
        for(let i = 0; i < arr.length; i++){
          let time = `${arr[i].score}`;
          arr[i].score = convertSecToTime(time);
        }
        //массив не больше 5
        if(arr.length > 5){
          arr.length = 5;
        }
        //отрисовка таблицы
        myModuleView.seasonsFillRecordsTable(arr);
        function convertTimeInSec(time) {
          let arr = time.split(":");
          arr.reverse();
          let sec = +arr[0] + +arr[1]*60 + +arr[2]*3600;
          return sec;
        }
        function convertSecToTime(sec) {
          let seconds  = parseInt(sec % 60);
          let minutes = parseInt(sec / 60 % 60);
          let hours = parseInt(sec / 3600  % 24);
          hours = (hours < 10) ? "0" + hours : hours;
          minutes = (minutes < 10) ? "0" + minutes : minutes;
          seconds = (seconds < 10) ? "0" + seconds : seconds;
          return hours + ":" + minutes + ":" + seconds;
        }
        function sortByScore(arr) {
          arr.sort((a, b) => a.score > b.score ? 1 : -1);
        }
      }

      //-----методы для математики-----
      this.mathSelectLevel = function (event) {
        if(event.closest('button')){
          switch (event.textContent) {
            case '10':
              level = 10;
              location.hash = '#math';
              break;
            case '20':
              level = 20;
              location.hash = '#math';
              break;
            case '50':
              level = 50;
              location.hash = '#math';
              break;
            case '100':
              level = 100;
              location.hash = '#math';
              break;
            default:
              break;
          }
          n = 0;
          score = 0;
        }
      }
      //метод,определяющий знак в зависимости от страницы
      this.mathFillSign = function (sign){
        if(location.hash === '#math'){
          sign.textContent = "+";
          that.mathFillDigits('+');
        } else if(location.hash === '#math_minus'){
          sign.textContent = "-";
          that.mathFillDigits('-');
        } else if(location.hash === '#math_multiple'){
          sign.textContent = "*";
          that.mathFillDigits('*');
        } else if(location.hash === '#math_division'){
          sign.textContent = "/";
          that.mathFillDigits('/');
        }
      }
      //метод заполняющий рандомно числа и делающий проверки
      this.mathFillDigits = function (sign){
          //функция нахождения целого рандомного числа до макс.
          let getRandomInt = function(max) {
            return Math.floor(Math.random() * max);
          };
          let num1 = getRandomInt(level);
          let num2 = null;
          let answer1 = null;
          let answer2 = null;
          let answer3 = null;
          //проверяем вычитание(убираем отрицательные рез-ты),деление(только нацело и не на ноль)
          switch (sign) {
            case '-':
              do {
                num2 = getRandomInt(level);
              } while(num1 - num2 < 0);
              break;
            case '/':
              do {
                num2 = getRandomInt(level);
              } while(num1 % num2 !== 0 || num2 === 0);

              break;
            default:
              num2 = getRandomInt(level);
          }
          //находим 3 число-ответ
          switch (sign) {
            case '+':
              answer3 = num1 + num2;
              break;
            case '-':
              answer3 = num1 - num2;
              break;
            case '*':
              answer3 = num1 * num2;
              break;
            case '/':
              answer3 = num1 / num2;
              break;
            default:
              break;
          }
          answer2 = getRandomInt(level*3);
          while (answer3 === answer2){
            answer2 = getRandomInt(level*3);
          };
          answer1 = getRandomInt(level*3);
          while (answer1 === answer2 && answer1 === answer3){
            answer1 = getRandomInt(level*3);
          };
          //передаем во вью для отрисовки
          myModuleView.mathViewStartDigits(num1,num2,answer1,answer2,answer3);
          //подчеркиваем вкладу
          myModuleView.mathAddStartClass();
        }
      //метод проверяющий правильный ответ в зависимости от знака,иначе включаем упс
      this.mathCheckAnswer = function (event,num1,num2,sign){
        if(event.closest('div.answer')){
          switch (sign.textContent) {
            case "+":
              if(+num1.textContent + +num2.textContent === +event.textContent){
                score += 1;
                n++;
                that.mathProgress(score);
                if(n === 10){
                  myModuleView.mathCongratulations(score);
                } else {
                  setTimeout(() => that.mathFillDigits("+"),500);//разбить по действия
                }
              } else {
                 myModuleView.mathTurnOnWrongSound();
                 n++;
                 if(n === 10){
                   myModuleView.mathCongratulations(score);
                 } else {
                   setTimeout(() => that.mathFillDigits("+"),500);//разбить по действия
                 }
               }
              break;
            case "-":
              if(+num1.textContent - +num2.textContent === +event.textContent){
                score += 1;
                n++;
                that.mathProgress(score);
                if(n === 10){
                  myModuleView.mathCongratulations(score);
                } else {
                  setTimeout(() => that.mathFillDigits("-"),500);//разбить по действия
                }
              } else {
                 myModuleView.mathTurnOnWrongSound();
                 n++;
                 if(n === 10){
                   myModuleView.mathCongratulations(score);
                 } else {
                   setTimeout(() => that.mathFillDigits("-"),500);//разбить по действия
                 }
               }
              break;
            case "*":
              if(+num1.textContent * +num2.textContent === +event.textContent){
                score += 1;
                n++;
                that.mathProgress(score);
                if(n === 10){
                  myModuleView.mathCongratulations(score);
                } else {
                  setTimeout(() => that.mathFillDigits("*"),500);//разбить по действия
                }
              } else {
                 myModuleView.mathTurnOnWrongSound();
                 n++;
                 if(n === 10){
                   myModuleView.mathCongratulations(score);
                 } else {
                   setTimeout(() => that.mathFillDigits("*"),500);//разбить по действия
                 }
               }
              break;
            default:
              if(+num1.textContent / +num2.textContent === +event.textContent){
                score += 1;
                n++;
                that.mathProgress(score);
                if(n === 10){
                  myModuleView.mathCongratulations(score);
                } else {
                  setTimeout(() => that.mathFillDigits("/"),500);//разбить по действия
                }
              } else {
                 myModuleView.mathTurnOnWrongSound();
                 n++;
                 if(n === 10){
                   myModuleView.mathCongratulations(score);
                 } else {
                   setTimeout(() => that.mathFillDigits("/"),500);//разбить по действия
                 }
               }
              break;
          }
        }
  }
      //переключение на вкладках
      this.mathSwitch = function (event) {
        myModuleView.mathSwitchClass(event);
        n = 0;
        score = 0;
      }
      this.mathProgress = function () {
        myModuleView.mathFillProgress(score);
      }
      this.mathStartAgain = function(sign){
          n = 0;
          score = 0;
          that.mathProgress();
          myModuleView.mathStartAgain();
          that.mathFillDigits(sign.textContent);
      }
  }
  /* -------- end model -------- */
  /* ----- begin controller ---- */
  function ModuleController () {
      let myModuleContainer = null;
      let myModuleModel = null;
      let buttonStart = null;
      let that = this;
      let board = null;//переменная для мемори
      let buttonStartMemory = null;
      let buttonRestartMemory = null;//переменная для мемори
      let stage = null;//переменная для ребуса
      let inputRebus = null;//переменная для ребуса
      let inputUserName = null;
      let buttonStartRebus = null;
      let rebusStage = null;
      let buttonCheck = null;
      let buttonClue = null;
      let buttonRestartRebus = null;
      //переменные для сезонов
      let buttonStartSeasons = null;
      let seasonsImgArr  = null;
      let seasonsField = null;
      let timer = null;
      let totalTime = null;
      let buttonSend = null;
      let inputRecords = null;
      //переменные для математики
      let mathPage = null;
      let mathMultiplyPage = null;
      let mathMinusPage = null;
      let mathDivisionPage = null;
      let answerConteiner = null;
      let mathMenu = null;
      let buttonsMath = null;
      let buttonMath = null;
      let buttonAgainMath = null;


      this.init = function(container, model) {
        myModuleContainer = container;
        myModuleModel = model;
        // вешаем слушателей на событие hashchange
        window.addEventListener("hashchange", this.updateState);
        this.updateState(); //первая отрисовка
        //вешаем обработчик на кнопку Звук
        myModuleContainer.querySelector('#button-sound').addEventListener("click",myModuleModel.turnOnMusic);
      }
      //метод находящий элементы на разных страницах и вешающий на них обработчики
      this.findElements = function () {
        board = myModuleContainer.querySelector('.grid');
        buttonRestartMemory = myModuleContainer.querySelector('.button-restart-memory');
        buttonStartMemory = myModuleContainer.querySelector('#button-start-memory');

        inputUserName = myModuleContainer.querySelector('#user-name');
        buttonStartRebus = myModuleContainer.querySelector('#button-start-rebus');
        rebusStage = myModuleContainer.querySelector('.rebus-stage');
        inputRebus = myModuleContainer.querySelector('.rebus-content input');
        buttonCheck = myModuleContainer.querySelector('.rebus-answer .button-rebus');
        buttonClue = myModuleContainer.querySelector('#button-rebus-clue');
        buttonRestartRebus = myModuleContainer.querySelector('#button-rebus-restart');

        buttonStartSeasons = myModuleContainer.querySelector('#button-start-seasons');
        seasonsField = myModuleContainer.querySelector('.seasons-page');
        seasonsImgArr = myModuleContainer.querySelectorAll('.season-img');
        timer = myModuleContainer.querySelector('.timer');

        buttonSend = myModuleContainer.querySelector('#button-send');
        inputRecords = myModuleContainer.querySelector('#seasons-user-name');

        buttonsMath = myModuleContainer.querySelector('.buttons-math');
        mathPage = myModuleContainer.querySelector('.math-page');
        mathMinusPage = myModuleContainer.querySelector('.math_minus-page');
        mathMultiplyPage = myModuleContainer.querySelector('.math_multiple-page');
        mathDivisionPage = myModuleContainer.querySelector('.math_division-page');
        answerConteiner = myModuleContainer.querySelector('.answer-conteiner');
        if(board){
          board.addEventListener("click",function(event){
            if(event.target.closest('img')){
              myModuleModel.memoryGameFlipCard(event.target);
            }
          });
        }
        if(buttonRestartMemory){
          buttonRestartMemory.addEventListener("click",function(event){
            let cards = myModuleContainer.querySelectorAll('img')
            myModuleModel.memoryGameRestart(cards);
          })
        }
        if(buttonStartMemory){
          buttonStartMemory.addEventListener("click",function(event){
            location.hash = "#memory";
          })
        }
        if(inputUserName){
          inputUserName.addEventListener("input",myModuleModel.rebusGameButtonStartState)

          inputUserName.addEventListener("change",function() {
            myModuleModel.rebusGameUserName(inputUserName.value);
          })
        }
        if(buttonStartRebus){
          myModuleModel.changeButtonState(buttonStartRebus);
          buttonStartRebus.addEventListener("click",function(event){
            location.hash = "#rebus";
          })
        }
        if(rebusStage && buttonCheck && inputRebus){
          myModuleModel.rebusGame();
          buttonCheck.addEventListener("click",myModuleModel.rebusGameCheckInput)
          inputRebus.addEventListener("input",myModuleModel.rebusGameInput);
        }
        if(buttonRestartRebus){
          buttonRestartRebus.addEventListener("click",myModuleModel.rebusGameRestart)
        }
        if(buttonClue){
          buttonClue.addEventListener("click",myModuleModel.rebusGameGiveClue)
        }
        if(buttonStartSeasons){
          buttonStartSeasons.addEventListener("click",function(event){
            location.hash = "#seasons";
          })
        }
        if(seasonsImgArr && seasonsField){
          myModuleModel.seasonsMixImages(seasonsImgArr);
          seasonsField.addEventListener('dragstart', function(event) {
            myModuleModel.seasonsHandleEvents("dragstart",event.target);
          });
          seasonsField.addEventListener('dragend', function(event) {
            event.preventDefault();
            myModuleModel.seasonsHandleEvents("dragend",event.target);
          });
          seasonsField.addEventListener('dragenter', function(event) {
            myModuleModel.seasonsHandleEvents("dragenter",event.target);
          });
          seasonsField.addEventListener('dragover', function(event) {
            event.preventDefault();
          });
          seasonsField.addEventListener('dragleave', function(event) {
            event.preventDefault();
            myModuleModel.seasonsHandleEvents("dragleave",event.target);
          });
          seasonsField.addEventListener('drop', function(event) {
            myModuleModel.seasonsHandleEvents("drop",event.target);
          });
        }
        if(timer){
          myModuleModel.startTimer();
        } else if(!timer){
          myModuleModel.stopTimer();
        }
        if(buttonSend){
          myModuleModel.seasonsSetAttribute();
          myModuleModel.seasonsCheckTime(totalTime);
          buttonSend.addEventListener("click",function(event){
            myModuleModel.seasonsSentToDB(inputRecords,totalTime);
            totalTime = "00:00:00";//чтобы 2 раза не заносилось время
          });
        }

        if(inputRecords){
          inputRecords.addEventListener('input',myModuleModel.seasonsButtonSend);
        }
        if(buttonsMath){
          buttonsMath.addEventListener("click",function(event){
            myModuleModel.mathSelectLevel(event.target);
          });
        }
        if(mathPage || mathMinusPage || mathMultiplyPage || mathDivisionPage){
          let sign = myModuleContainer.querySelector('.sign');
          let num1 = myModuleContainer.querySelector('.num1');
          let num2 = myModuleContainer.querySelector('.num2');
          mathMenu = myModuleContainer.querySelector('.mathmenu__list');
          buttonAgainMath = myModuleContainer.querySelector('#button-startagain-math');
          myModuleModel.mathFillSign(sign);
          myModuleModel.mathProgress();
          answerConteiner.addEventListener("click",function(event){
            myModuleModel.mathCheckAnswer(event.target,num1,num2,sign);
          });
          mathMenu.addEventListener("click",function(event){
            myModuleModel.mathSwitch(event.target);
          });
          buttonAgainMath.addEventListener("click",function() {
            myModuleModel.mathStartAgain(sign);
          });
        }
      }
      //передаем в модель хэш для отрисовки страницы
      this.updateState = function() {
        console.log(location.hash);
        const hashPageName = location.hash.slice(1).toLowerCase();
        //для рекордов запоминаем время до отрисовки след страницы
        if(hashPageName === "seasonsscore"){
          if(timer){
             totalTime = timer.textContent;
          } else {
            totalTime = '00:00:00';
          }
        }
        myModuleModel.updateState(hashPageName);
        that.findElements();//ищем необходимые элементы на страницах
      }

  }
  /* ------ end controller ----- */

  return {
      init: function({container, routes, components}) {
        this.renderComponents(container, components);

        const view = new ModuleView();
        const model = new ModuleModel();
        const controller = new ModuleController();

        //связываем части модуля
        view.init(document.getElementById(container), routes);
        model.init(view);
        controller.init(document.getElementById(container), model);
      },
      renderComponents: function (container, components) {
        const root = document.getElementById(container);
        const componentsList = Object.keys(components);
        for (let item of componentsList) {
          root.innerHTML += components[item].render();
        }
      },
  };

}());
/* ------ end app module ----- */

/*** --- init module --- ***/
document.addEventListener("DOMContentLoaded", mySPA.init({
  container: "spa",
  routes: routes,
  components: components
}));
