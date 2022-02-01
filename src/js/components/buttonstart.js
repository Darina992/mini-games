const ButtonStart = {
  render: (customClass = "",id = "",text = "") => {
    return `<button type="button" name="button" class="button-start ${customClass}" id="${id}">${text}</button>`;
  }
};
export default ButtonStart
