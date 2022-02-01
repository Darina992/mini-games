import NavButtons from './navbuttons.js';
const Header = {
  render: (customClass = "") => {
    return `
      <header class="header ${customClass}" id="header">
        ${NavButtons.render()}
      </header>
    `;
  }
};
export default Header
