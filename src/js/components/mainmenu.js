const MainMenu = {
  render: (customClass = "") => {
    return `
      <h1>Мини-игры для детей</h1>
      <nav class="mainmenu ${customClass}" id="mainmenu">
        <ul class="mainmenu__list">
          <li><a class="mainmenu__link" href="#aboutmemory">Мемори</a></li>
          <li><a class="mainmenu__link" href="#aboutseasons">4 сезона</a></li>
          <li><a class="mainmenu__link" href="#aboutrebus">Ребусы</a></li>
          <li><a class="mainmenu__link" href="#aboutmath">Математика</a></li>
        </ul>
      </nav>
    `;
  }
};
export default MainMenu
