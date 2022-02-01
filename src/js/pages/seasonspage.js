const SeasonsPage = {
  id : "seasons",
  title : "Игра 4 сезона",
  render : (className = "") => {
    return `
      <section class="${className}">

        <div class="first-line">
          <span class="season">Весна</span>
          <span class="season-img"></span>
          <span class="season-img"></span>
          <span class="season-img"></span>
          <span class="season-img"></span>
        </div>
        <div class="second-line">
          <span class="season">Лето</span>
          <span class="season-img"></span>
          <span class="season-img"></span>
          <span class="season-img"></span>
          <span class="season-img"></span>
        </div>
        <div class="third-line">
          <span class="season">Осень</span>
          <span class="season-img"></span>
          <span class="season-img"></span>
          <span class="season-img"></span>
          <span class="season-img"></span>
        </div>
        <div class="forth-line">
          <span class="season">Зима</span>
          <span class="season-img"></span>
          <span class="season-img"></span>
          <span class="season-img"></span>
          <span class="season-img"></span>
        </div>
        <div class="timer"></div>
        <audio id="audio-congratulation" preload>
          <source src="../../audio/uh-ty.mp3" type="audio/mpeg">
        </audio>
      </section>
    `;
  }
};
export default SeasonsPage;
