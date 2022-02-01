import ButtonStart from '../components/buttonstart.js';

const RebusPage = {
  id : "rebus",
  title : "Игра Ребус",
  render : (className = "") => {
    return `
      <section class="${className}">
        <div class="rebus-content">
            <div class="rebus-img"></div>
            <div class="rebus-answer">
              <input type="text" name="answer" value="">
              ${ButtonStart.render("button-rebus","button-rebus-answer","Проверить!")}
            </div>
            <div class="rebus-clue">
              ${ButtonStart.render("button-rebus","button-rebus-clue","Подсказка!")}
              <span class="clue-item"></span>
            </div>
            <div class="rebus-stage"></div>
            <div class="rebus-restart">
              ${ButtonStart.render("button-rebus","button-rebus-restart","Начать заново!")}
            </div>
        </div>
      </section>
    `;
  }
};
export default RebusPage;
