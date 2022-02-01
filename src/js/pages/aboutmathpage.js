import ButtonStart from '../components/buttonstart.js';

const AboutMathPage = {
  id: "about-math",
  title: "Математика",
  render: (className = "") => {
    return `
      <section class="${className}">
      <p class="math-text">Привет!!! Давай потренируемся! <br> За каждый правильный ответ получай 1 балл.<br>Постарайся набрать 10баллов!</p>
      <p class="math-text">Выбирай! Числа будут до ...</p>
      <div class="buttons-math">
        ${ButtonStart.render("button-math","button10",10)}
        ${ButtonStart.render("button-math","button20",20)}
        ${ButtonStart.render("button-math","button50",50)}
        ${ButtonStart.render("button-math","button100",100)}
      </div>
      </section>
    `;
  }
};
export default AboutMathPage;
