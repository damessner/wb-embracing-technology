(function () {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const filterCards = document.querySelectorAll('[data-category]');

  if (filterButtons.length && filterCards.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const selected = btn.dataset.filter;
        filterButtons.forEach((b) => {
          const active = b === btn;
          b.classList.toggle('active', active);
          b.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        filterCards.forEach((card) => {
          const categories = card.dataset.category.split(' ');
          const visible = selected === 'alle' || categories.includes(selected);
          card.hidden = !visible;
        });
      });
    });
  }

  const goalWrap = document.querySelector('[data-goals]');
  if (goalWrap) {
    const selects = goalWrap.querySelectorAll('select');
    const fill = document.querySelector('[data-progress-fill]');
    const label = document.querySelector('[data-progress-label]');

    const values = { erreicht: 1, teilweise: 0.5, offen: 0 };
    const update = () => {
      const sum = [...selects].reduce((acc, select) => acc + values[select.value], 0);
      const percent = Math.round((sum / selects.length) * 100);
      fill.style.width = `${percent}%`;
      label.textContent = `${percent}% Zielerreichung (interaktiv anpassbar)`;
    };

    selects.forEach((select) => select.addEventListener('change', update));
    update();
  }

  const milestoneButtons = document.querySelectorAll('[data-milestone]');
  const milestoneText = document.querySelector('[data-milestone-text]');
  if (milestoneButtons.length && milestoneText) {
    milestoneButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        milestoneButtons.forEach((b) => {
          const active = b === btn;
          b.classList.toggle('active', active);
          b.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        milestoneText.textContent = btn.dataset.detail;
      });
    });
  }
})();
