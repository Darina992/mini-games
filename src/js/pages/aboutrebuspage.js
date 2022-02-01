import ButtonStart from '../components/buttonstart.js';

const AboutRebusPage = {
  id: "about-rebus",
  title: "Oб игре",
  render: (className = "") => {

    return `
      <section class="${className}">
        <h1>Игра "Отгадай ребус"</h1>
        <h2>Правила</h2>
        <div class="description">
        Отгадай ребус и впиши полученное слово в окошко внизу и нажми Ответить,чтобы подтвердить свой ответ.
        <p class="user-question">Прежде чем начать играть давай познакомимся!</p>
        <p class="user-question">Как тебя зовут?</p>
        <input type="text" name="user-name" value="" id="user-name">
        ${ButtonStart.render("button-start","button-start-rebus","Играть!")}
        </div>
        </section>
    `;
  }
};
export default AboutRebusPage;
