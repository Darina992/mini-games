import ButtonStart from '../components/buttonstart.js';

const SeasonsScorePage = {
  id: "seasons-score",
  title: "Рекорды",
  render: (className = "") => {

    return `
      <section class="${className}">
        <h2>Рекорды</h2>
        <div class="records-table">
          <table class="records">
            <tr>
              <th>#</th>
              <th>Имя</th>
              <th>Время</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
          <div class="loader not-display">
        	<div class="loader-inner">
        		<div class="loader-line-wrap">
        			<div class="loader-line"></div>
        		</div>
        		<div class="loader-line-wrap">
        			<div class="loader-line"></div>
        		</div>
        		<div class="loader-line-wrap">
        			<div class="loader-line"></div>
        		</div>
        		<div class="loader-line-wrap">
        			<div class="loader-line"></div>
        		</div>
        		<div class="loader-line-wrap">
        			<div class="loader-line"></div>
        		</div>
        	</div>
        </div>
        </div>
        <p>Введите имя</p>
        <input type="text" name="user-name" disabled="disabled" value="" id="seasons-user-name">
        ${ButtonStart.render("button-start","button-send","Отправить!")}
      </section>
    `;
  }
};
export default SeasonsScorePage;
