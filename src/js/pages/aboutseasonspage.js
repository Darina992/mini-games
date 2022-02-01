import ButtonStart from '../components/buttonstart.js';

const AboutSeasonsPage = {
  id: "about-seasons",
  title: "Oб игре",
  render: (className = "") => {

    return `
      <section class="${className}">
        <h1>Игра "4 сезона"</h1>
        <h2>Правила</h2>
        <div class="description">
        Меняй местами карточки так, чтобы в каждом ряду были картинки по указанному времени года.
Игра на время,поэтому постарайся попасть в Рекорды!
        ${ButtonStart.render("button-start","button-start-seasons","Начать!")}
        </div>
        </section>
    `;
  }
};
export default AboutSeasonsPage;
