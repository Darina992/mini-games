import MathMenu from '../components/mathmenu.js';
import MathMain from '../components/mathmain.js';

const MathMultiplyPage = {
  id: "math-multiply",
  title: "Математика:умножение",
  render: (className = "") => {
    return `
      <section class="${className}">
        ${MathMenu.render()}
        <div class="math-progress"><span class="progress-text"></span><button type="button" name="button" class="button-start" id="button-startagain-math">Начать заново!</button></div>
        <div class="show-progress"></div>
        ${MathMain.render()}
        <audio id="audio-wrong">
          <source src="../../audio/ups.mp3" type="audio/mpeg">
        </audio>
      </section>
    `;
  }
};
export default MathMultiplyPage
