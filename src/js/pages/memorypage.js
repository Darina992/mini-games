import ButtonStart from '../components/buttonstart.js';

const MemoryPage = {
  id : "memory",
  title : "Игра Мемори",
  render : (className = "container") => {
    return `
      <section class="${className}">
        <h3 id="result"></h3>
        <div class="grid">
        </div>
        ${ButtonStart.render("button-restart-memory","#memory","Начать заново!")}
      </section>
    `;
  }
};
export default MemoryPage;
