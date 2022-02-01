const NavButtons = {
  render : (customClass = "") => {
    return `
    <nav class="menu ${customClass}" id="menu">
      <ul class="menu-buttons">
        <li class="menu-button button-home" id="button-home"><a href="#home"></a></li>
        <li class="menu-button button-sound" id="button-sound"></li>
      </ul>
    </nav>
    `
  }
};
export default NavButtons
