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



//PAPERS: Actualizable por json
const papersKnowledgeManagement = document.getElementById('papers-knowledge-management');
const papersArtificialIntelligence = document.getElementById('papers-artificial-intelligence');
const papersEducationTics = document.getElementById('papers-education-tics');

const paperModal = document.getElementById('paperModal');
const modalPaperTitle = document.getElementById('modalPaperTitle');
const modalPaperDescription = document.getElementById('modalPaperDescription');
const modalPaperCitation = document.getElementById('modalPaperCitation');
const modalPaperActions = document.getElementById('modalPaperActions');
const closePaperModalButtons = document.querySelectorAll('[data-close-paper-modal]');

if (
  papersKnowledgeManagement &&
  papersArtificialIntelligence &&
  papersEducationTics &&
  paperModal &&
  modalPaperTitle &&
  modalPaperDescription &&
  modalPaperCitation &&
  modalPaperActions
) {
  const paperContainers = {
    'knowledge-management': papersKnowledgeManagement,
    'artificial-intelligence': papersArtificialIntelligence,
    'education-tics': papersEducationTics
  };

  const openPaperCategoryFromHash = () => {
    const category = window.location.hash.replace('#', '');
    const container = paperContainers[category];
    if (!container) return;

    const section = document.getElementById(category);
    const details = section ? section.querySelector('.details-block') : null;
    if (!details) return;

    details.open = true;
    window.requestAnimationFrame(() => {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

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

  const openPaperModal = (paper) => {
    modalPaperTitle.textContent = paper.title || '';
    modalPaperDescription.textContent = paper.description || '';
    renderPaperLines(modalPaperCitation, paper.citation || '');

    modalPaperActions.innerHTML = '';

    if (paper.pdf) {
      const pdfButton = document.createElement('a');
      pdfButton.href = paper.pdf;
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

  const createPaperCard = (paper) => {
    const article = document.createElement('article');
    article.className = 'paper-item';
    article.setAttribute('tabindex', '0');
    article.setAttribute('role', 'button');

    const title = document.createElement('h3');
    title.textContent = paper.title || '';

    const description = document.createElement('p');
    description.textContent = paper.description || '';

    article.appendChild(title);
    article.appendChild(description);

    article.addEventListener('click', () => openPaperModal(paper));
    article.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openPaperModal(paper);
      }
    });

    return article;
  };

  fetch('/assets/data/papers.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('No se pudo cargar papers.json');
      }
      return response.json();
    })
    .then((papers) => {
      papers.forEach((paper) => {
        const container = paperContainers[paper.category];
        if (!container) return;

        const card = createPaperCard(paper);
        container.appendChild(card);
      });

      openPaperCategoryFromHash();
    })
    .catch((error) => {
      console.error('Error cargando papers:', error);
    });

  window.addEventListener('hashchange', openPaperCategoryFromHash);

  closePaperModalButtons.forEach((button) => {
    button.addEventListener('click', closePaperModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && paperModal.classList.contains('is-open')) {
      closePaperModal();
    }
  });
}
