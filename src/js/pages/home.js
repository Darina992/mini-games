import MainMenu from '../components/mainmenu.js';

const HomePage = {
  id: "main",
  title: "Главная страница",
  render: (className = "container") => {
    return `
      ${MainMenu.render()}
    `;
  }
};
export default HomePage;
