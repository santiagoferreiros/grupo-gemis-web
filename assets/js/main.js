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

const teamInvestigators = document.getElementById('team-investigators');
const teamThesis = document.getElementById('team-thesis');
const teamFellows = document.getElementById('team-fellows');
const teamModal = document.getElementById('teamModal');
const modalTeamPhoto = document.getElementById('modalTeamPhoto');
const modalTeamName = document.getElementById('modalTeamName');
const modalTeamRole = document.getElementById('modalTeamRole');
const modalTeamDescription = document.getElementById('modalTeamDescription');
const modalTeamActions = document.getElementById('modalTeamActions');
const closeTeamModalButtons = document.querySelectorAll('[data-close-team-modal]');

if (
  teamInvestigators &&
  teamThesis &&
  teamFellows &&
  teamModal &&
  modalTeamPhoto &&
  modalTeamName &&
  modalTeamRole &&
  modalTeamDescription &&
  modalTeamActions
) {
  const fallbackTeam = {
    investigators: [
      {
        name: 'María Florencia Pollo Cattáneo',
        initials: 'MF',
        role: 'Directora GEMIS',
        description: 'Directora del Grupo. Doctora en Ciencias Informáticas por la Facultad de Informática de la Universidad Nacional de La Plata. Magíster en Ingeniería en Software - Doble Titulación: Universidad Politécnica de Madrid / Instituto Tecnológico de Buenos Aires. Especialista en Construcción de Sistemas Expertos (ITBA). Ingeniera en Sistemas de Información por la UTN FRBA.',
        image: '/assets/img/profiles/maria-florencia-pollo-cattaneo.jpg',
        linkedin: 'https://ar.linkedin.com/in/florencia-pollo-7bb16719b'
      },
      {
        name: 'Pablo Pytel',
        initials: 'PP',
        role: 'Director de Proyectos',
        description: 'Ingeniero en Sistemas de Información (Facultad Regional Buenos Aires de la Universidad Tecnológica Nacional), Magíster en Ingeniería en Software (Universidad Politécnica de Madrid - Instituto Tecnológico de Buenos Aires), y Doctor en Ciencias Informáticas (Facultad de Informática de Universidad Nacional de La Plata).',
        image: '/assets/img/profiles/pablo-pytel.jpg',
        linkedin: 'https://www.linkedin.com/in/pytel/'
      },
      {
        name: 'Luciano Straccia',
        initials: 'LS',
        role: 'Director de Proyectos',
        description: 'Ingeniero en Sistemas de Información por la UTN FRBA y Magister en Educación (orientación Gestión Educativa) por la Universidad de San Andrés. Docente-investigador, trabaja en gestión educativa y es consultor en servicios de tecnología de información.',
        image: '/assets/img/profiles/luciano-straccia.jpg',
        linkedin: 'https://ar.linkedin.com/in/luciano-straccia'
      },
      {
        name: 'Inés Casanovas',
        initials: 'IC',
        role: 'Investigadora',
        description: 'Ph.D. in Informatics (Jönköping International Business School, Jönköping University, Suecia). Magíster en Docencia Universitaria (Universidad Tecnológica Nacional-FRBA), Magíster en Informática (UNLaM). Ingeniería en Sistemas de Información (Universidad Tecnológica Nacional-FRBA).',
        image: '/assets/img/profiles/ines-casanovas.jpg',
        linkedin: 'https://www.linkedin.com/in/ines-casanovas-9023a919'
      },
      {
        name: 'Cintia Vegega',
        initials: 'CV',
        role: 'Investigadora',
        description: 'Ingeniera en Sistemas de Información por la UTN FRBA. Cursando actualmente la Maestría en Ingeniería de Sistemas de Información en UTN Escuela de Posgrado.',
        image: '/assets/img/profiles/cintia-vegega.jpg',
        linkedin: 'https://www.linkedin.com/in/cinthia-vegega'
      },
      {
        name: 'Parag Chatterjee',
        initials: 'PC',
        role: 'Investigador',
        description: 'PhD | Investigador - Universidad Tecnológica Nacional, Buenos Aires, Argentina | Docente - Universidad de la República Uruguay',
        image: '/assets/img/profiles/parag-chatterjee.jpg',
        linkedin: 'https://www.linkedin.com/in/paragchat/'
      },
      {
        name: 'Ariel Deroche',
        initials: 'AD',
        role: 'Investigador',
        description: 'Ingeniero en Sistemas de Información por la UTN FRBA.',
        image: '/assets/img/profiles/ariel-deroche.jpg',
        linkedin: 'https://www.linkedin.com/in/ariel-deroche/'
      },
      {
        name: 'Adriana Maulini Buño',
        initials: 'AM',
        role: 'Investigadora',
        description: '',
        image: '/assets/img/profiles/adriana-maulini-buno.jpg',
        linkedin: 'https://www.linkedin.com/in/adriana-maulini/'
      },
      {
        name: 'Brenda Baruzzini',
        initials: 'BB',
        role: 'Investigadora Estudiante',
        description: '',
        image: '/assets/img/profiles/brenda-baruzzini.jpg',
        linkedin: 'https://ar.linkedin.com/in/brenda-baruzzini'
      },
      {
        name: 'Abril Caruso',
        initials: 'AC',
        role: 'Investigadora Estudiante',
        description: '',
        image: '/assets/img/profiles/abril-caruso.jpg',
        linkedin: 'https://ar.linkedin.com/in/abril-caruso-74a61b251'
      },
      {
        name: 'Camila Berro',
        initials: 'CB',
        role: 'Investigadora Estudiante',
        description: '',
        image: '/assets/img/profiles/camila-berro.jpg',
        linkedin: 'https://ar.linkedin.com/in/camila-andrea-berro-7923b0264'
      },
      {
        name: 'Chabela Lamas',
        initials: 'CL',
        role: 'Investigadora Estudiante',
        description: '',
        image: '/assets/img/profiles/chabela-lamas.jpg',
        linkedin: 'https://www.linkedin.com/in/chabela-lamas'
      },
      {
        name: 'Franco Cortínez',
        initials: 'FC',
        role: 'Investigador Estudiante',
        description: 'Téc. Informática profesional y personal en Programación.',
        image: '/assets/img/profiles/franco-cortinez.jpg',
        linkedin: 'https://www.linkedin.com/in/francocortinez'
      }
    ],
    thesis: [
      {
        name: 'Adriana Maulini Buño',
        initials: 'AM',
        role: 'Tesista',
        description: 'Propuesta de un modelo de Gestión del Conocimiento para fábricas de software. Directora: Dra. Ing. María Florencia Pollo-Cattaneo. Plan de Tesis aprobado por Resolución Nro. 2686/18. Fecha de Defensa de Tesis: 06/07/2021. Universidad Tecnológica Nacional, Facultad Regional Buenos Aires (UTN-FRBA), Escuela de Posgrado. Carrera Maestría en Ingeniería en Sistemas de Información.',
        image: '/assets/img/profiles/adriana-maulini-buno.jpg',
        linkedin: 'https://www.linkedin.com/in/adriana-maulini/'
      }
    ],
    fellows: [
      {
        name: 'María Isabella Innocente',
        year: '2023',
        program: 'Beca Manuel Belgrano',
        project: 'Proyecto Creación de un observatorio tecnológico de la gestión del conocimiento en CABA'
      },
      {
        name: 'Ian Ruiz Depetris',
        year: '2023',
        program: 'Beca Manuel Belgrano',
        project: 'Proyecto Creación de un observatorio tecnológico de la gestión del conocimiento en CABA'
      },
      {
        name: 'Brenda Baruzzini',
        year: '2023',
        program: 'Estudiante Rectorado',
        project: 'Proyecto Creación de un observatorio tecnológico de la gestión del conocimiento en CABA'
      },
      {
        name: 'Benjamin Alegre',
        year: '2023',
        program: 'Estudiante SAE',
        project: 'Proyecto Creación de un observatorio tecnológico de la gestión del conocimiento en CABA'
      },
      {
        name: 'Lucila Salmerón',
        year: '2023',
        program: 'BINID Graduados',
        project: 'Proyecto Arquitectura tecnológica para la Gestión del Conocimiento'
      },
      {
        name: 'Vanina Aranda',
        year: '2022',
        program: 'Iniciación a la Investigación',
        project: 'Proyecto Arquitectura tecnológica para la Gestión del Conocimiento'
      },
      {
        name: 'Matías Giorda',
        year: '2022',
        program: 'BINID Graduados',
        project: 'Proyecto Arquitectura tecnológica para la Gestión del Conocimiento'
      },
      {
        name: 'María G. Bongiorno',
        year: '2021',
        program: 'Iniciación a la Investigación',
        project: 'Proyecto Arquitectura tecnológica para la Gestión del Conocimiento'
      },
      {
        name: 'Cecilia Ramacciotti',
        year: '2020',
        program: 'BINID Graduados',
        project: 'Proyecto La GC en pequeñas y medianas fábricas de software en AMBA'
      },
      {
        name: 'Luciano Perez',
        year: '2018',
        program: 'Iniciación a la Investigación',
        project: 'Proyecto La GC en pequeñas y medianas fábricas de software en AMBA'
      }
    ]
  };

  const createAvatar = (member) => {
    const avatar = document.createElement('div');
    avatar.className = 'avatar';

    if (member.image) {
      const image = document.createElement('img');
      image.src = member.image;
      image.alt = member.name || '';
      image.addEventListener('error', () => image.remove());
      avatar.appendChild(image);
    }

    const initials = document.createElement('span');
    initials.textContent = member.initials || '';
    avatar.appendChild(initials);

    return avatar;
  };

  const createLinkedinButton = (member) => {
    if (!member.linkedin) return null;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const link = document.createElement('a');
    link.className = 'button ghost team-link';
    link.href = member.linkedin;
    link.target = '_blank';
    link.rel = 'noopener';
    link.setAttribute('aria-label', `LinkedIn de ${member.name}`);

    const mark = document.createElement('span');
    mark.textContent = 'in';

    link.appendChild(mark);
    actions.appendChild(link);

    return actions;
  };

  const openTeamModal = (member) => {
    modalTeamPhoto.innerHTML = '';

    const modalAvatar = createAvatar(member);
    modalAvatar.classList.add('avatar-large');
    modalTeamPhoto.appendChild(modalAvatar);

    modalTeamName.textContent = member.name || '';
    modalTeamRole.textContent = member.role || '';
    modalTeamDescription.textContent = member.description || 'Información en actualización.';
    modalTeamActions.innerHTML = '';

    const linkedinButton = createLinkedinButton(member);
    if (linkedinButton) {
      const link = linkedinButton.querySelector('a');
      if (link) {
        link.classList.remove('ghost', 'team-link');
        link.classList.add('primary', 'team-modal-link');
        link.innerHTML = '<span class="team-modal-link-mark">in</span><span>Ver LinkedIn</span>';
      }
      linkedinButton.classList.add('team-modal-actions');
      modalTeamActions.appendChild(linkedinButton);
    }

    teamModal.classList.add('is-open');
    teamModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  const closeTeamModal = () => {
    teamModal.classList.remove('is-open');
    teamModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  const createTeamCard = (member) => {
    const article = document.createElement('article');
    article.className = 'card team-card is-visible';
    article.setAttribute('tabindex', '0');
    article.setAttribute('role', 'button');
    article.setAttribute('aria-label', `Ver perfil de ${member.name || 'integrante'}`);

    const title = document.createElement('h3');
    title.textContent = member.name || '';

    const role = document.createElement('span');
    role.className = 'role';
    role.textContent = member.role || '';

    article.appendChild(createAvatar(member));
    article.appendChild(title);
    article.appendChild(role);

    article.addEventListener('click', () => openTeamModal(member));
    article.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openTeamModal(member);
      }
    });

    return article;
  };

  const createFellowItem = (fellow) => {
    const item = document.createElement('li');
    item.className = 'member-item';

    const title = document.createElement('h3');
    title.textContent = fellow.name || '';

    const meta = document.createElement('p');
    meta.textContent = [fellow.year, fellow.program].filter(Boolean).join(' · ');

    const project = document.createElement('p');
    project.textContent = fellow.project || '';

    item.appendChild(title);
    item.appendChild(meta);
    item.appendChild(project);

    return item;
  };

  const renderTeam = (team) => {
    teamInvestigators.innerHTML = '';
    teamThesis.innerHTML = '';
    teamFellows.innerHTML = '';

    (team.investigators || []).forEach((member) => {
      teamInvestigators.appendChild(createTeamCard(member));
    });

    (team.thesis || []).forEach((member) => {
      teamThesis.appendChild(createTeamCard(member));
    });

    (team.fellows || []).forEach((fellow) => {
      teamFellows.appendChild(createFellowItem(fellow));
    });
  };

  const fetchTeam = (url) => fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`No se pudo cargar ${url}`);
    }
    return response.json();
  });

  renderTeam(fallbackTeam);

  fetchTeam('/assets/data/team.json')
    .catch(() => fetchTeam('../assets/data/team.json'))
    .then((response) => {
      renderTeam(response);
    })
    .catch((error) => {
      console.error('Error cargando team:', error);
    });

  closeTeamModalButtons.forEach((button) => {
    button.addEventListener('click', closeTeamModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && teamModal.classList.contains('is-open')) {
      closeTeamModal();
    }
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

// TRANSFERENCIA TECNOLOGICA: Actualizable por json
const technologyTransferList = document.getElementById('technology-transfer-list');
const transferModal = document.getElementById('transferModal');
const modalTransferTitle = document.getElementById('modalTransferTitle');
const modalTransferDescription = document.getElementById('modalTransferDescription');
const modalTransferMeta = document.getElementById('modalTransferMeta');
const modalTransferDetails = document.getElementById('modalTransferDetails');
const modalTransferPublications = document.getElementById('modalTransferPublications');
const modalTransferPublicationsSection = document.getElementById('modalTransferPublicationsSection');
const modalTransferActions = document.getElementById('modalTransferActions');
const closeTransferModalButtons = document.querySelectorAll('[data-close-transfer-modal]');

if (
  technologyTransferList &&
  transferModal &&
  modalTransferTitle &&
  modalTransferDescription &&
  modalTransferMeta &&
  modalTransferDetails &&
  modalTransferPublications &&
  modalTransferPublicationsSection &&
  modalTransferActions
) {
  const renderTransferLines = (container, lines) => {
    container.innerHTML = '';

    (lines || [])
      .map((item) => String(item || '').trim())
      .filter(Boolean)
      .forEach((line) => {
        const row = document.createElement('div');
        row.textContent = line;
        container.appendChild(row);
      });
  };

  const renderTransferPublications = (publications) => {
    modalTransferPublications.innerHTML = '';

    const items = publications || [];
    modalTransferPublicationsSection.hidden = items.length === 0;

    items.forEach((publication) => {
      const item = document.createElement('li');
      item.textContent = publication;
      modalTransferPublications.appendChild(item);
    });
  };

  const openTransferModal = (item) => {
    modalTransferTitle.textContent = item.title || '';
    modalTransferDescription.textContent = item.description || '';

    renderTransferLines(modalTransferMeta, [
      item.organization ? `Organización: ${item.organization}` : '',
      item.period ? `Período: ${item.period}` : ''
    ]);

    renderTransferLines(modalTransferDetails, [item.details || '']);
    renderTransferPublications(item.publications);

    modalTransferActions.innerHTML = '';

    if (item.sourceUrl) {
      const sourceButton = document.createElement('a');
      sourceButton.href = item.sourceUrl;
      sourceButton.className = 'button primary';
      sourceButton.textContent = 'Ver fuente original';
      sourceButton.target = '_blank';
      sourceButton.rel = 'noopener';
      modalTransferActions.appendChild(sourceButton);
    }

    transferModal.classList.add('is-open');
    transferModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  const closeTransferModal = () => {
    transferModal.classList.remove('is-open');
    transferModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  const createTransferCard = (item) => {
    const article = document.createElement('article');
    article.className = 'paper-item transfer-item';
    article.setAttribute('tabindex', '0');
    article.setAttribute('role', 'button');
    article.setAttribute('aria-label', `Ver detalle de ${item.title || 'transferencia tecnologica'}`);

    const title = document.createElement('h3');
    title.textContent = item.title || '';

    const description = document.createElement('p');
    description.textContent = item.description || '';

    const meta = document.createElement('span');
    meta.className = 'transfer-meta';
    meta.textContent = [item.organization, item.period].filter(Boolean).join(' · ');

    article.appendChild(title);
    article.appendChild(description);
    if (meta.textContent) {
      article.appendChild(meta);
    }

    article.addEventListener('click', () => openTransferModal(item));
    article.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openTransferModal(item);
      }
    });

    return article;
  };

  fetch('/assets/data/technology-transfer.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('No se pudo cargar technology-transfer.json');
      }
      return response.json();
    })
    .then((items) => {
      technologyTransferList.innerHTML = '';

      items.forEach((item) => {
        technologyTransferList.appendChild(createTransferCard(item));
      });
    })
    .catch((error) => {
      console.error('Error cargando transferencia tecnologica:', error);
    });

  closeTransferModalButtons.forEach((button) => {
    button.addEventListener('click', closeTransferModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && transferModal.classList.contains('is-open')) {
      closeTransferModal();
    }
  });
}
