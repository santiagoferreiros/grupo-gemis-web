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

const eventModal = document.getElementById('eventModal');
const modalEventTitle = document.getElementById('modalEventTitle');
const modalEventDescription = document.getElementById('modalEventDescription');
const modalEventEditions = document.getElementById('modalEventEditions');
const eventCards = document.querySelectorAll('.event-card');
const closeEventModalButtons = document.querySelectorAll('[data-close-event-modal]');

if (
  eventModal &&
  modalEventTitle &&
  modalEventDescription &&
  modalEventEditions &&
  eventCards.length
) {
  const events = {
    wkmit: {
      title: 'International Workshop on Knowledge Management, Innovation and Technologies',
      description: 'WKMIT es un workshop internacional organizado por GEMIS sobre gestión del conocimiento, innovación y tecnologías, co-localizado con ICAI.',
      editions: [
        ['WKMIT 2026', 'Octubre 2026', 'Universidad Central de Florida - USA', 'https://grupogemis.com.ar/icai/wkmit/2026/'],
        ['WKMIT 2025', 'Octubre 2025', 'Université Mohammed VI Polytechnic - Marruecos', 'https://grupogemis.com.ar/icai/wkmit/2025/'],
        ['WKMIT 2024', 'Octubre 2024', 'Universidad Andrés Bello - Viña del Mar, Chile', 'https://grupogemis.com.ar/icai/wkmit/2024/'],
        ['WKMIT 2023', 'Octubre 2023', 'Universidad Ecotec - Guayaquil, Ecuador', 'https://grupogemis.com.ar/icai/wkmit/2023/'],
        ['WKMIT 2022', 'Octubre 2022', 'Universidad Continental - Arequipa, Perú', 'https://grupogemis.com.ar/icai/wkmit/2022/'],
        ['WKMIT 2021', 'Octubre 2021', 'Universidad Tecnológica Nacional - Buenos Aires, Argentina', 'https://grupogemis.com.ar/icai/wkmit/2021/']
      ]
    },
    waai: {
      title: 'International Workshop on Applied Artificial Intelligence',
      description: 'WAAI es un workshop internacional organizado por GEMIS para reunir investigaciones, aplicaciones y experiencias en inteligencia artificial aplicada.',
      editions: [
        ['WAAI 2026', 'Octubre 2026', 'Universidad Central de Florida - USA', 'https://grupogemis.com.ar/icai/waai/2026/'],
        ['WAAI 2025', 'Octubre 2025', 'Université Mohammed VI Polytechnic - Marruecos', 'https://grupogemis.com.ar/icai/waai/2025/'],
        ['WAAI 2024', 'Octubre 2024', 'Universidad Andrés Bello - Viña del Mar, Chile', 'https://grupogemis.com.ar/icai/waai/2024/'],
        ['WAAI 2023', 'Octubre 2023', 'Universidad Ecotec - Guayaquil, Ecuador', 'https://grupogemis.com.ar/icai/waai/2023/'],
        ['WAAI 2022', 'Octubre 2022', 'Universidad Continental - Arequipa, Perú', 'https://grupogemis.com.ar/icai/waai/2022/'],
        ['WAAI 2021', 'Octubre 2021', 'Universidad Tecnológica Nacional - Buenos Aires, Argentina', 'https://grupogemis.com.ar/icai/waai/2021/']
      ]
    }
  };

  const renderEventEditions = (editions) => {
    modalEventEditions.innerHTML = '';

    editions.forEach(([title, date, venue, url]) => {
      const item = document.createElement('article');
      item.className = 'event-edition';

      const heading = document.createElement('h3');
      heading.textContent = title;

      const meta = document.createElement('p');
      meta.textContent = `${date} · ${venue}`;

      const link = document.createElement('a');
      link.className = 'button ghost';
      link.href = url;
      link.textContent = 'Ir al sitio web';

      item.appendChild(heading);
      item.appendChild(meta);
      item.appendChild(link);
      modalEventEditions.appendChild(item);
    });
  };

  const openEventModal = (card) => {
    const event = events[card.dataset.event];
    if (!event) return;

    modalEventTitle.textContent = event.title;
    modalEventDescription.textContent = event.description;
    renderEventEditions(event.editions);

    eventModal.classList.add('is-open');
    eventModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  const closeEventModal = () => {
    eventModal.classList.remove('is-open');
    eventModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  eventCards.forEach((card) => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');

    card.addEventListener('click', () => openEventModal(card));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openEventModal(card);
      }
    });
  });

  closeEventModalButtons.forEach((button) => {
    button.addEventListener('click', closeEventModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && eventModal.classList.contains('is-open')) {
      closeEventModal();
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

  const getPaperCategoryFromHash = () => {
    return decodeURIComponent(window.location.hash.replace('#', '')).trim();
  };

  const openPaperCategoryFromHash = (shouldScroll = false) => {
    const category = getPaperCategoryFromHash();
    const container = paperContainers[category];
    if (!container) return;

    const section = document.getElementById(category);
    const details = section ? section.querySelector('.details-block') : null;
    if (!details) return;

    details.open = true;
    section.querySelectorAll('[data-reveal]').forEach((item) => {
      item.classList.add('is-visible');
    });

    if (shouldScroll) {
      window.requestAnimationFrame(() => {
        section.scrollIntoView({ behavior: 'auto', block: 'start' });
      });
    }
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

      openPaperCategoryFromHash(true);
      window.setTimeout(() => openPaperCategoryFromHash(true), 80);
    })
    .catch((error) => {
      console.error('Error cargando papers:', error);
    });

  openPaperCategoryFromHash();
  window.addEventListener('hashchange', () => openPaperCategoryFromHash(true));

  closePaperModalButtons.forEach((button) => {
    button.addEventListener('click', closePaperModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && paperModal.classList.contains('is-open')) {
      closePaperModal();
    }
  });
}
