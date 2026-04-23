const revealItems = document.querySelectorAll('[data-reveal]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const brand = document.querySelector('.brand');
const logo = document.querySelector('[data-logo]');

if (brand && logo && logo.getAttribute('src')) {
  logo.addEventListener('load', () => brand.classList.add('has-logo'));
  logo.addEventListener('error', () => brand.classList.remove('has-logo'));
}

const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('[data-nav-links]');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}


// LOGICA PARA EL MODAL
const projectModal = document.getElementById('projectModal');
const modalProjectTitle = document.getElementById('modalProjectTitle');
const modalProjectDescription = document.getElementById('modalProjectDescription');
const modalProjectLocation = document.getElementById('modalProjectLocation');
const modalProjectTeam = document.getElementById('modalProjectTeam');
const modalProjectPeriod = document.getElementById('modalProjectPeriod');
const modalProjectActions = document.getElementById('modalProjectActions');

const projectCards = document.querySelectorAll('.project-card');
const closeModalButtons = document.querySelectorAll('[data-close-modal]');

if (
  projectModal &&
  modalProjectTitle &&
  modalProjectDescription &&
  modalProjectLocation &&
  modalProjectTeam &&
  modalProjectPeriod &&
  modalProjectActions &&
  projectCards.length
) {
  const renderLines = (container, value) => {
    container.innerHTML = '';

    const lines = (value || '')
      .split('|')
      .map((item) => item.trim())
      .filter(Boolean);

    lines.forEach((line) => {
      const row = document.createElement('div');
      row.textContent = line;
      container.appendChild(row);
    });
  };

  const renderTeam = (container, value) => {
    container.innerHTML = '';

    const members = (value || '')
      .split('|')
      .map((item) => item.trim())
      .filter(Boolean);

    members.forEach((member) => {
      const li = document.createElement('li');
      li.textContent = member;
      container.appendChild(li);
    });
  };

  const openProjectModal = (card) => {
    const title = card.dataset.title || '';
    const description = card.dataset.description || '';
    const location = card.dataset.location || '';
    const team = card.dataset.team || '';
    const period = card.dataset.period || '';
    const publications = card.dataset.publications || '';

    modalProjectTitle.textContent = title;
    modalProjectDescription.textContent = description;

    renderLines(modalProjectLocation, location);
    renderTeam(modalProjectTeam, team);
    renderLines(modalProjectPeriod, period);

    modalProjectActions.innerHTML = '';

    if (publications) {
      const publicationsButton = document.createElement('a');
      publicationsButton.href = publications;
      publicationsButton.className = 'button primary';
      publicationsButton.textContent = 'Ver publicaciones';
      modalProjectActions.appendChild(publicationsButton);
    }

    projectModal.classList.add('is-open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  const closeProjectModal = () => {
    projectModal.classList.remove('is-open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  projectCards.forEach((card) => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');

    card.addEventListener('click', () => openProjectModal(card));

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProjectModal(card);
      }
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener('click', closeProjectModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && projectModal.classList.contains('is-open')) {
      closeProjectModal();
    }
  });
}

//Logica Modal Papers
const paperModal = document.getElementById('paperModal');
const modalPaperTitle = document.getElementById('modalPaperTitle');
const modalPaperDescription = document.getElementById('modalPaperDescription');
const modalPaperCitation = document.getElementById('modalPaperCitation');
const modalPaperActions = document.getElementById('modalPaperActions');

const paperItems = document.querySelectorAll('.paper-item');
const closePaperModalButtons = document.querySelectorAll('[data-close-paper-modal]');

if (
  paperModal &&
  modalPaperTitle &&
  modalPaperDescription &&
  modalPaperCitation &&
  modalPaperActions &&
  paperItems.length
) {
  const renderPaperLines = (container, value) => {
    container.innerHTML = '';

    const lines = (value || '')
      .split('|')
      .map((item) => item.trim())
      .filter(Boolean);

    lines.forEach((line) => {
      const row = document.createElement('div');
      row.textContent = line;
      container.appendChild(row);
    });
  };

  const openPaperModal = (item) => {
    const title = item.dataset.paperTitle || '';
    const description = item.dataset.paperDescription || '';
    const citation = item.dataset.paperCitation || '';
    const pdf = item.dataset.paperPdf || '';

    modalPaperTitle.textContent = title;
    modalPaperDescription.textContent = description;
    renderPaperLines(modalPaperCitation, citation);

    modalPaperActions.innerHTML = '';

    if (pdf) {
      const pdfButton = document.createElement('a');
      pdfButton.href = pdf;
      pdfButton.target = '_blank';
      pdfButton.rel = 'noopener noreferrer';
      pdfButton.className = 'button primary';
      pdfButton.textContent = 'Acceder al PDF';
      modalPaperActions.appendChild(pdfButton);
    }

    paperModal.classList.add('is-open');
    paperModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  const closePaperModal = () => {
    paperModal.classList.remove('is-open');
    paperModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  paperItems.forEach((item) => {
    item.addEventListener('click', () => openPaperModal(item));

    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openPaperModal(item);
      }
    });
  });

  closePaperModalButtons.forEach((button) => {
    button.addEventListener('click', closePaperModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && paperModal.classList.contains('is-open')) {
      closePaperModal();
    }
  });
}