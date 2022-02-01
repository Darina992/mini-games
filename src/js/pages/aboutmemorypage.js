import ButtonStart from '../components/buttonstart.js';

const AboutMemoryPage = {
  id: "about-memory",
  title: "Oб игре",
  render: (className = "") => {
    return `
      <section class="${className}">
        <h1>Игра "Мемори"</h1>
        <h2>Правила</h2>
        <div class="description">
        Карточки выкладываются на поле «рубашкой» вверх.Открывай две любые карточки,если на них изображены одинаковые рисунки,то карточки исчезают и можно открывать
следующую пару.А если же рисунки не совпадают,то карточки снова переворачиваются «рубашкой» вверх.
        ${ButtonStart.render("button-start","button-start-memory","Играть!")}
        </div>
        </section>
    `;
  }
};

export default AboutMemoryPage;
