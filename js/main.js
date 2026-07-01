gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);

history.scrollRestoration = 'manual';

// ===== I18N SYSTEM =====
const translations = {
  es: {
    splash_badge: 'Full Stack & Creative Developer',
    splash_tagline: 'Minimalismo funcional, experiencias memorables',
    btn_hint_left: 'diestro',
    btn_hint_right: 'zurdo',
    toggle_label: 'Modo',
    toggle_label_bio: 'Modo Bio',
    hero_badge: 'Full Stack & Creative Developer',
    hero_tagline: 'Minimalismo funcional, experiencias memorables',
    hero_cta_projects: 'Ver Proyectos',
    hero_cta_contact: 'Contactar',
    proj_section_title: 'Proyectos',
    proj1_label: 'GAME',
    proj1_title: 'Shadow Hunter',
    proj1_desc: 'MOBA conceptual con alma de Dark Souls. Combates en tercera persona donde solo uno sobrevive. Sigilo, exploración 3D y combate táctico en un mundo oscuro.',
    proj1_features_title: 'Características',
    proj1_feat1: 'Escenario 3D interactivo con Three.js',
    proj1_feat2: 'Sistema de sigilo y detección por visión',
    proj1_feat3: 'Mecánica battle royale: último en pie gana',
    proj1_feat4: 'Animaciones y transiciones inmersivas',
    proj1_stack_title: 'Stack',
    proj1_link_code: 'Código →',
    proj2_label: 'API',
    proj2_title: 'API Go Back Skate',
    proj2_desc: 'Red social para skaters construida en Go. Como Twitter, pero con más ollies y menos política. Publicá trucos, seguí skaters y armá tu spot favorito.',
    proj2_features_title: 'Características',
    proj2_feat1: 'API RESTful con Go puro',
    proj2_feat2: 'Autenticación y perfiles de usuario',
    proj2_feat3: 'Publicaciones con likes y comentarios',
    proj2_feat4: 'Base de datos relacional con PostgreSQL',
    proj2_stack_title: 'Stack',
    proj2_link_code: 'Código →',
    proj3_label: 'WEB',
    proj3_title: 'Intercambio Clases',
    proj3_desc: 'Plataforma para intercambiar conocimientos. Un marketplace de skills donde todos tienen algo que enseñar y algo que aprender.',
    proj3_features_title: 'Características',
    proj3_feat1: 'Sistema de usuarios con perfiles completos',
    proj3_feat2: 'Publicación y búsqueda de clases',
    proj3_feat3: 'Sistema de reseñas y calificaciones',
    proj3_feat4: 'Panel de administración',
    proj3_stack_title: 'Stack',
    proj3_link_code: 'Código →',
    proj4_label: 'PORTFOLIO',
    proj4_title: 'Portfolio 2024',
    proj4_desc: 'Mi portafolio anterior. Un espacio donde el diseño y el código se encuentran. La primera versión de mi identidad digital.',
    proj4_features_title: 'Características',
    proj4_feat1: 'Diseño responsivo con identidad única',
    proj4_feat2: 'Sección de proyectos interactiva',
    proj4_feat3: 'Animaciones CSS nativas',
    proj4_feat4: 'Hosteado en GitHub Pages',
    proj4_stack_title: 'Stack',
    proj4_link_demo: 'Demo →',
    proj4_link_code: 'Código →',
    proj5_label: 'ACTUAL',
    proj5_title: 'DevelasqRoad',
    proj5_desc: 'Este mismo portafolio. Terminal interactiva, transiciones fluidas, modo oscuro/claro y comandos en vivo. Construido con alma y café.',
    proj5_features_title: 'Características',
    proj5_feat1: 'Doble terminal con comandos en vivo',
    proj5_feat2: 'Transiciones de página con Barba.js + GSAP',
    proj5_feat3: 'Modo Skate / Space con toggle animado',
    proj5_feat4: 'Persistencia de preferencias en localStorage',
    proj5_stack_title: 'Stack',
    proj5_link_demo: 'Demo →',
    proj5_link_code: 'Código →',
    nav_about: 'Sobre mí',
    nav_projects: 'Proyectos',
    nav_contact: 'Contacto',
    about_section_title: 'Sobre mí',
    about_greeting: 'Soy',
    about_text1: 'Frontend Developer con alma de diseñador. Más de 5 años construyendo experiencias digitales que no solo se ven bien, sino que se sienten bien. Mi filosofía es simple: código limpio, diseño con propósito, y una obsesión enfermiza por los detalles.',
    about_text2: 'Empecé como diseñador gráfico creando animaciones SVG en <strong>Construyored.com</strong>, donde descubrí que un píxel fuera de lugar puede contar una historia diferente. De ahí salté al frontend, combinando ojo visual con código que realmente funciona. Hoy mezclo React, Node, Three.js y GSAP para crear interfaces que responden, emocionan y convierten.',
    about_stat_exp_label: 'Años de experiencia',
    about_stat_projects_label: 'Proyectos entregados',
    about_stat_colombia_label: 'Colombia 3.0',
    about_skills_title: 'Stack',
    contact_section_title: 'Contacto',
    contact_intro: 'Open channel for new missions. Consultas disponibles vía WhatsApp, LinkedIn o GitHub.',
    contact_email_placeholder: 'Click para revelar',
    page_title_index: 'DevelasqRoad — Daniel Velasquez',
    page_title_about: 'Sobre mí — DevelasqRoad',
    footer_text: '© 2026 DevelasqRoad. Pasión por el frontend, obsesión por el detalle.',
    about_hero_badge: 'Sobre mí',
    about_hero_tagline: 'Frontend Developer con alma creativa',
    about_nav_home: 'Inicio',
    about_nav_bio: 'Bio',
    about_nav_skills: 'Skills',
    about_nav_experience: 'Experiencia',
    about_nav_contact: 'Contacto',
    bio_section_title: 'Bio',
    bio_greeting: 'Soy',
    bio_text1: 'Frontend Developer y creativo en constante evolución. Llevo más de 5 años construyendo experiencias digitales que no solo funcionan, sino que se sienten vivas. Mi fórmula: código limpio, diseño con intención, y una obsesión casi enfermiza por los detalles que nadie ve pero todos perciben.',
    bio_text2: 'Mi historia empieza en el diseño gráfico. En <strong>Construyored.com</strong> pasé dos años creando animaciones SVG, ilustraciones vectoriales y piezas visuales desde cero. Ahí entendí que un píxel no es solo un punto: es una decisión. Esa precisión la llevé después al frontend en <strong>Ases Empresariales</strong> (2018–2020) y <strong>Generación Internal Group</strong> (2016–2018), donde combiné mi ojo de diseñador con código que resolvía problemas reales.',
    bio_text3: 'Hoy me muevo entre React, Node, Three.js y GSAP para crear interfaces que responden, emocionan y convierten. También sé defenderme en PHP, WordPress y Go cuando el proyecto lo pide. Y sí, soy de los que dibujan animaciones en After Effects mientras debuggean en la terminal.',
    bio_text4: 'Uno de mis logros más orgullosos fue quedar <strong>2º en Colombia 3.0</strong> con un proyecto de juego inclusivo para niños con discapacidad, desarrollado en Unity. Ver cómo la tecnología puede derribar barreras me recordó por qué elegí este camino.',
    bio_text5: 'Fuera del código: skate, fotografía analógica, café de especialidad y una fascinación sin límites por la exploración espacial. Todo eso termina colándose en lo que construyo, porque creo que el mejor trabajo nace de lo que realmente te apasiona.',
    bio_quick_facts_title: 'Datos rápidos',
    bio_fact_location: '📍 Ubicación: Manizales, Colombia',
    bio_fact_role: '💼 Rol: Frontend & Creative Developer',
    bio_fact_education: '🎓 Educación: Ing. Sistemas / FP Apps Web',
    bio_fact_languages: '🗣️ Idiomas: Español, Inglés',
    bio_fact_stack: '⚡ Stack fav: Node + React + GSAP',
    bio_interests_title: 'Intereses',
    skills_section_title: 'Skills',
    skills_frontend_title: 'Frontend',
    skills_backend_title: 'Backend',
    skills_devops_title: 'DevOps & Tools',
    skills_creative_title: 'Creative',
    exp_section_title: 'Experiencia',
    exp1_date: '2020 — Presente',
    exp1_title: 'Creative Developer Freelance',
    exp1_company: 'DevelasqRoad Studio',
    exp1_desc: 'Desarrollo de experiencias web interactivas para clientes directos. Combino frontend con React, animaciones GSAP y diseño visual. También me muevo en WordPress y PHP cuando toca.',
    exp2_date: '2018 — 2020',
    exp2_title: 'Frontend Developer',
    exp2_company: 'Ases Empresariales',
    exp2_desc: 'Desarrollo de interfaces web y componentes frontend. Implementación de diseños responsivos, optimización de rendimiento y colaboración directa con el equipo de diseño.',
    exp3_date: '2016 — 2018',
    exp3_title: 'Frontend Developer',
    exp3_company: 'Generación Internal Group',
    exp3_desc: 'Construcción de sitios web y aplicaciones frontend. Trabajo en equipo multidisciplinario, maquetación CSS y primeros pasos en animaciones web.',
    exp4_date: '2015 — 2017',
    exp4_title: 'Animador & Diseñador SVG',
    exp4_company: 'Construyored.com',
    exp4_desc: 'Creación de animaciones SVG, ilustraciones vectoriales y piezas gráficas. Ahí entendí que un píxel no es solo un punto: es una decisión de diseño.',
    cta_title: '¿Listo para trabajar juntos?',
    cta_text: 'Estoy abierto a nuevas oportunidades, colaboraciones interesantes y proyectos desafiantes. Si tenés una idea en mente, hablemos.',
    cta_button: 'Contactar'
  },
  en: {
    splash_badge: 'Full Stack & Creative Developer',
    splash_tagline: 'Functional minimalism, memorable experiences',
    btn_hint_left: 'right-handed',
    btn_hint_right: 'left-handed',
    toggle_label: 'Mode',
    toggle_label_bio: 'Bio Mode',
    hero_badge: 'Full Stack & Creative Developer',
    hero_tagline: 'Functional minimalism, memorable experiences',
    hero_cta_projects: 'View Projects',
    hero_cta_contact: 'Get in Touch',
    proj_section_title: 'Projects',
    proj1_label: 'GAME',
    proj1_title: 'Shadow Hunter',
    proj1_desc: 'Conceptual MOBA with a Dark Souls soul. Third-person combat where only one survives. Stealth, 3D exploration and tactical combat in a dark world.',
    proj1_features_title: 'Features',
    proj1_feat1: 'Interactive 3D scene with Three.js',
    proj1_feat2: 'Stealth and vision-based detection system',
    proj1_feat3: 'Battle royale mechanics: last standing wins',
    proj1_feat4: 'Immersive animations and transitions',
    proj1_stack_title: 'Stack',
    proj1_link_code: 'Code →',
    proj2_label: 'API',
    proj2_title: 'API Go Back Skate',
    proj2_desc: 'Social network for skaters built in Go. Like Twitter, but with more ollies and less politics. Post tricks, follow skaters and build your favorite spot.',
    proj2_features_title: 'Features',
    proj2_feat1: 'RESTful API with pure Go',
    proj2_feat2: 'Authentication and user profiles',
    proj2_feat3: 'Posts with likes and comments',
    proj2_feat4: 'Relational database with PostgreSQL',
    proj2_stack_title: 'Stack',
    proj2_link_code: 'Code →',
    proj3_label: 'WEB',
    proj3_title: 'Class Exchange',
    proj3_desc: 'Platform for knowledge exchange. A skills marketplace where everyone has something to teach and something to learn.',
    proj3_features_title: 'Features',
    proj3_feat1: 'User system with complete profiles',
    proj3_feat2: 'Class publishing and search',
    proj3_feat3: 'Reviews and ratings system',
    proj3_feat4: 'Admin dashboard',
    proj3_stack_title: 'Stack',
    proj3_link_code: 'Code →',
    proj4_label: 'PORTFOLIO',
    proj4_title: 'Portfolio 2024',
    proj4_desc: 'My previous portfolio. A space where design and code meet. The first version of my digital identity.',
    proj4_features_title: 'Features',
    proj4_feat1: 'Responsive design with unique identity',
    proj4_feat2: 'Interactive projects section',
    proj4_feat3: 'Native CSS animations',
    proj4_feat4: 'Hosted on GitHub Pages',
    proj4_stack_title: 'Stack',
    proj4_link_demo: 'Demo →',
    proj4_link_code: 'Code →',
    proj5_label: 'CURRENT',
    proj5_title: 'DevelasqRoad',
    proj5_desc: 'This very portfolio. Interactive terminal, smooth transitions, dark/light mode and live commands. Built with soul and coffee.',
    proj5_features_title: 'Features',
    proj5_feat1: 'Dual terminal with live commands',
    proj5_feat2: 'Page transitions with Barba.js + GSAP',
    proj5_feat3: 'Skate / Space mode with animated toggle',
    proj5_feat4: 'Preference persistence in localStorage',
    proj5_stack_title: 'Stack',
    proj5_link_demo: 'Demo →',
    proj5_link_code: 'Code →',
    nav_about: 'About me',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    about_section_title: 'About me',
    about_greeting: "I'm",
    about_text1: 'Frontend Developer with a designer soul. Over 5 years building digital experiences that not only look good, but feel good. My philosophy is simple: clean code, purposeful design, and an unhealthy obsession with details.',
    about_text2: 'I started as a graphic designer creating SVG animations at <strong>Construyored.com</strong>, where I discovered that a pixel out of place can tell a different story. From there I jumped to frontend, combining a visual eye with code that actually works. Today I mix React, Node, Three.js and GSAP to create interfaces that respond, excite and convert.',
    about_stat_exp_label: 'Years of experience',
    about_stat_projects_label: 'Projects delivered',
    about_stat_colombia_label: 'Colombia 3.0',
    about_skills_title: 'Stack',
    contact_section_title: 'Contact',
    contact_intro: 'Open channel for new missions. Available via WhatsApp, LinkedIn or GitHub.',
    contact_email_placeholder: 'Click to reveal',
    page_title_index: 'DevelasqRoad — Daniel Velasquez',
    page_title_about: 'About me — DevelasqRoad',
    footer_text: '© 2026 DevelasqRoad. Passion for frontend, obsession for detail.',
    about_hero_badge: 'About me',
    about_hero_tagline: 'Frontend Developer with a creative soul',
    about_nav_home: 'Home',
    about_nav_bio: 'Bio',
    about_nav_skills: 'Skills',
    about_nav_experience: 'Experience',
    about_nav_contact: 'Contact',
    bio_section_title: 'Bio',
    bio_greeting: "I'm",
    bio_text1: 'Frontend Developer and creative in constant evolution. I have over 5 years building digital experiences that not only work, but feel alive. My formula: clean code, intentional design, and an almost unhealthy obsession with details that nobody sees but everyone perceives.',
    bio_text2: 'My story begins in graphic design. At <strong>Construyored.com</strong> I spent two years creating SVG animations, vector illustrations and visual pieces from scratch. There I understood that a pixel is not just a dot: it is a decision. I later brought that precision to frontend at <strong>Ases Empresariales</strong> (2018–2020) and <strong>Generación Internal Group</strong> (2016–2018), where I combined my designer eye with code that solved real problems.',
    bio_text3: 'Today I work with React, Node, Three.js and GSAP to create interfaces that respond, excite and convert. I also hold my own in PHP, WordPress and Go when the project calls for it. And yes, I am one of those who draw animations in After Effects while debugging in the terminal.',
    bio_text4: 'One of my proudest achievements was placing <strong>2nd at Colombia 3.0</strong> with an inclusive game project for children with disabilities, developed in Unity. Seeing how technology can break down barriers reminded me why I chose this path.',
    bio_text5: 'Outside of code: skateboarding, analog photography, specialty coffee and a limitless fascination with space exploration. All of that ends up seeping into what I build, because I believe the best work comes from what you are truly passionate about.',
    bio_quick_facts_title: 'Quick Facts',
    bio_fact_location: '📍 Location: Manizales, Colombia',
    bio_fact_role: '💼 Role: Frontend & Creative Developer',
    bio_fact_education: '🎓 Education: Systems Eng. / Web Dev',
    bio_fact_languages: '🗣️ Languages: Spanish, English',
    bio_fact_stack: '⚡ Fav stack: Node + React + GSAP',
    bio_interests_title: 'Interests',
    skills_section_title: 'Skills',
    skills_frontend_title: 'Frontend',
    skills_backend_title: 'Backend',
    skills_devops_title: 'DevOps & Tools',
    skills_creative_title: 'Creative',
    exp_section_title: 'Experience',
    exp1_date: '2020 — Present',
    exp1_title: 'Creative Developer Freelance',
    exp1_company: 'DevelasqRoad Studio',
    exp1_desc: 'Development of interactive web experiences for direct clients. I combine frontend with React, GSAP animations and visual design. I also work with WordPress and PHP when needed.',
    exp2_date: '2018 — 2020',
    exp2_title: 'Frontend Developer',
    exp2_company: 'Ases Empresariales',
    exp2_desc: 'Web interface development and frontend components. Implementation of responsive designs, performance optimization and direct collaboration with the design team.',
    exp3_date: '2016 — 2018',
    exp3_title: 'Frontend Developer',
    exp3_company: 'Generación Internal Group',
    exp3_desc: 'Building websites and frontend applications. Multidisciplinary teamwork, CSS layout and first steps in web animations.',
    exp4_date: '2015 — 2017',
    exp4_title: 'Animator & SVG Designer',
    exp4_company: 'Construyored.com',
    exp4_desc: 'Creation of SVG animations, vector illustrations and graphic pieces. There I understood that a pixel is not just a dot: it is a design decision.',
    cta_title: 'Ready to work together?',
    cta_text: "I'm open to new opportunities, interesting collaborations and challenging projects. If you have an idea in mind, let's talk.",
    cta_button: 'Get in Touch'
  },
  fr: {
    splash_badge: 'Full Stack & Creative Developer',
    splash_tagline: 'Minimalisme fonctionnel, expériences mémorables',
    btn_hint_left: 'droitier',
    btn_hint_right: 'gaucher',
    toggle_label: 'Mode',
    toggle_label_bio: 'Mode Bio',
    hero_badge: 'Full Stack & Creative Developer',
    hero_tagline: 'Minimalisme fonctionnel, expériences mémorables',
    hero_cta_projects: 'Voir Projets',
    hero_cta_contact: 'Me Contacter',
    proj_section_title: 'Projets',
    proj1_label: 'JEU',
    proj1_title: 'Shadow Hunter',
    proj1_desc: 'MOBA conceptuel avec une âme de Dark Souls. Combats à la troisième personne où un seul survit. Infiltration, exploration 3D et combat tactique dans un monde sombre.',
    proj1_features_title: 'Caractéristiques',
    proj1_feat1: 'Scène 3D interactive avec Three.js',
    proj1_feat2: "Système d'infiltration et de détection visuelle",
    proj1_feat3: 'Mécanique battle royale : le dernier debout gagne',
    proj1_feat4: 'Animations et transitions immersives',
    proj1_stack_title: 'Stack',
    proj1_link_code: 'Code →',
    proj2_label: 'API',
    proj2_title: 'API Go Back Skate',
    proj2_desc: 'Réseau social pour skaters construit en Go. Comme Twitter, mais avec plus de ollies et moins de politique. Publie des tricks, suis des skaters et construis ton spot préféré.',
    proj2_features_title: 'Caractéristiques',
    proj2_feat1: 'API RESTful en Go pur',
    proj2_feat2: 'Authentification et profils utilisateur',
    proj2_feat3: 'Publications avec likes et commentaires',
    proj2_feat4: 'Base de données relationnelle avec PostgreSQL',
    proj2_stack_title: 'Stack',
    proj2_link_code: 'Code →',
    proj3_label: 'WEB',
    proj3_title: "Échange de Cours",
    proj3_desc: 'Plateforme pour échanger des connaissances. Un marketplace de compétences où chacun a quelque chose à enseigner et quelque chose à apprendre.',
    proj3_features_title: 'Caractéristiques',
    proj3_feat1: "Système d'utilisateurs avec profils complets",
    proj3_feat2: 'Publication et recherche de cours',
    proj3_feat3: 'Système davis et dévaluations',
    proj3_feat4: "Panneau d'administration",
    proj3_stack_title: 'Stack',
    proj3_link_code: 'Code →',
    proj4_label: 'PORTFOLIO',
    proj4_title: 'Portfolio 2024',
    proj4_desc: 'Mon portfolio précédent. Un espace où le design et le code se rencontrent. La première version de mon identité numérique.',
    proj4_features_title: 'Caractéristiques',
    proj4_feat1: 'Design responsive avec identité unique',
    proj4_feat2: 'Section projets interactive',
    proj4_feat3: 'Animations CSS natives',
    proj4_feat4: 'Hébergé sur GitHub Pages',
    proj4_stack_title: 'Stack',
    proj4_link_demo: 'Démo →',
    proj4_link_code: 'Code →',
    proj5_label: 'ACTUEL',
    proj5_title: 'DevelasqRoad',
    proj5_desc: "Ce portfolio même. Terminal interactif, transitions fluides, mode sombre/clair et commandes en direct. Construit avec âme et café.",
    proj5_features_title: 'Caractéristiques',
    proj5_feat1: 'Double terminal avec commandes en direct',
    proj5_feat2: 'Transitions de page avec Barba.js + GSAP',
    proj5_feat3: 'Mode Skate / Space avec toggle animé',
    proj5_feat4: 'Persistance des préférences dans localStorage',
    proj5_stack_title: 'Stack',
    proj5_link_demo: 'Démo →',
    proj5_link_code: 'Code →',
    nav_about: 'À propos',
    nav_projects: 'Projets',
    nav_contact: 'Contact',
    about_section_title: 'À propos',
    about_greeting: 'Je suis',
    about_text1: "Développeur Frontend avec une âme de designer. Plus de 5 ans à construire des expériences numériques qui non seulement sont belles, mais qui se ressentent. Ma philosophie est simple : code propre, design avec intention, et une obsession maladive pour les détails.",
    about_text2: "J'ai commencé comme designer graphique en créant des animations SVG chez <strong>Construyored.com</strong>, où j'ai découvert qu'un pixel déplacé peut raconter une histoire différente. De là, j'ai sauté dans le frontend, combinant un œil visuel avec du code qui fonctionne vraiment. Aujourd'hui, je mélange React, Node, Three.js et GSAP pour créer des interfaces qui répondent, émeuvent et convertissent.",
    about_stat_exp_label: "Années d'expérience",
    about_stat_projects_label: 'Projets livrés',
    about_stat_colombia_label: 'Colombia 3.0',
    about_skills_title: 'Stack',
    contact_section_title: 'Contact',
    contact_intro: 'Canal ouvert pour nouvelles missions. Disponible via WhatsApp, LinkedIn ou GitHub.',
    contact_email_placeholder: 'Cliquer pour révéler',
    page_title_index: 'DevelasqRoad — Daniel Velasquez',
    page_title_about: 'À propos — DevelasqRoad',
    footer_text: '© 2026 DevelasqRoad. Passion pour le frontend, obsession pour le détail.',
    about_hero_badge: 'À propos',
    about_hero_tagline: 'Développeur Frontend à lâme créative',
    about_nav_home: 'Accueil',
    about_nav_bio: 'Bio',
    about_nav_skills: 'Compétences',
    about_nav_experience: 'Expérience',
    about_nav_contact: 'Contact',
    bio_section_title: 'Bio',
    bio_greeting: 'Je suis',
    bio_text1: "Développeur Frontend et créatif en constante évolution. J'ai plus de 5 ans à construire des expériences numériques qui non seulement fonctionnent, mais qui se sentent vivantes. Ma formule : code propre, design intentionnel, et une obsession presque maladive pour les détails que personne ne voit mais que tout le monde perçoit.",
    bio_text2: "Mon histoire commence dans le design graphique. Chez <strong>Construyored.com</strong>, j'ai passé deux ans à créer des animations SVG, des illustrations vectorielles et des pièces visuelles à partir de zéro. Là, j'ai compris qu'un pixel n'est pas juste un point : c'est une décision. J'ai ensuite apporté cette précision au frontend chez <strong>Ases Empresariales</strong> (2018–2020) et <strong>Generación Internal Group</strong> (2016–2018), où j'ai combiné mon œil de designer avec du code qui résolvait des problèmes réels.",
    bio_text3: "Aujourd'hui, je travaille avec React, Node, Three.js et GSAP pour créer des interfaces qui répondent, émeuvent et convertissent. Je me débrouille aussi en PHP, WordPress et Go quand le projet le demande. Et oui, je suis de ceux qui dessinent des animations dans After Effects tout en débuggant dans le terminal.",
    bio_text4: "L'une de mes réalisations les plus fières a été de terminer <strong>2e à Colombia 3.0</strong> avec un projet de jeu inclusif pour enfants handicapés, développé sur Unity. Voir comment la technologie peut abattre des barrières m'a rappelé pourquoi j'ai choisi cette voie.",
    bio_text5: "En dehors du code : skateboard, photographie analogique, café de spécialité et une fascination sans limites pour l'exploration spatiale. Tout cela finit par s'infiltrer dans ce que je construis, car je crois que le meilleur travail naît de ce qui vous passionne vraiment.",
    bio_quick_facts_title: 'Faits rapides',
    bio_fact_location: '📍 Lieu : Manizales, Colombie',
    bio_fact_role: '💼 Rôle : Frontend & Creative Developer',
    bio_fact_education: '🎓 Formation : Ing. Systèmes / Dev Web',
    bio_fact_languages: '🗣️ Langues : Espagnol, Anglais',
    bio_fact_stack: '⚡ Stack préféré : Node + React + GSAP',
    bio_interests_title: "Centres d'intérêt",
    skills_section_title: 'Compétences',
    skills_frontend_title: 'Frontend',
    skills_backend_title: 'Backend',
    skills_devops_title: 'DevOps & Outils',
    skills_creative_title: 'Créatif',
    exp_section_title: 'Expérience',
    exp1_date: '2020 — Présent',
    exp1_title: 'Creative Developer Freelance',
    exp1_company: 'DevelasqRoad Studio',
    exp1_desc: "Développement d'expériences web interactives pour clients directs. Je combine frontend avec React, animations GSAP et design visuel. Je travaille aussi avec WordPress et PHP quand nécessaire.",
    exp2_date: '2018 — 2020',
    exp2_title: 'Développeur Frontend',
    exp2_company: 'Ases Empresariales',
    exp2_desc: "Développement d'interfaces web et de composants frontend. Mise en œuvre de designs responsifs, optimisation des performances et collaboration directe avec l'équipe de design.",
    exp3_date: '2016 — 2018',
    exp3_title: 'Développeur Frontend',
    exp3_company: 'Generación Internal Group',
    exp3_desc: 'Construction de sites web et applications frontend. Travail d\'équipe pluridisciplinaire, maquettage CSS et premiers pas dans les animations web.',
    exp4_date: '2015 — 2017',
    exp4_title: 'Animateur & Designer SVG',
    exp4_company: 'Construyored.com',
    exp4_desc: "Création d'animations SVG, d'illustrations vectorielles et de pièces graphiques. Là, j'ai compris qu'un pixel n'est pas juste un point : c'est une décision de design.",
    cta_title: 'Prêt à travailler ensemble ?',
    cta_text: "Je suis ouvert aux nouvelles opportunités, collaborations intéressantes et projets stimulants. Si vous avez une idée en tête, parlons-en.",
    cta_button: 'Me Contacter'
  }
};

function detectBrowserLanguage() {
  const lang = (navigator.language || navigator.userLanguage || 'es').substring(0, 2).toLowerCase();
  if (['es', 'en', 'fr'].includes(lang)) return lang;
  return 'es';
}

function getCurrentLanguage() {
  return localStorage.getItem('lang') || detectBrowserLanguage();
}

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });
  // Page title: check if there's a title element with data-i18n in the current page
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) {
    const key = titleEl.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      document.title = t[key];
    }
  }
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
}

function setLanguage(lang) {
  applyLanguage(lang);
  document.querySelectorAll('.btn-lang').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
}

document.addEventListener("DOMContentLoaded", () => {

    const lenis = null;

    function initSplashScreen() {
        const splash = document.querySelector('.splash-screen');
        if (!splash) return;

        document.fonts.ready.then(() => {
            const tl = gsap.timeline();

            tl.set('.splash-screen .hero-badge, .splash-screen .hero-name, .splash-screen .hero-tagline', { opacity: 0, y: 40 }, 0)
              .to('.splash-screen .hero-badge', { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, 0.3)
              .to('.splash-screen .hero-name', { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, 0.5)
              .to('.splash-screen .hero-tagline', { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, 0.7)
              .to('.splash-loader-fill', { width: '100%', duration: 1.5, ease: "power1.inOut" }, 1.0);

            const minDuration = (tl.totalDuration() + 0.5) * 1000;
            const startTime = performance.now();

            function dismissSplash() {
                const elapsed = performance.now() - startTime;
                const remaining = Math.max(0, minDuration - elapsed);

                setTimeout(() => {
                    const done = gsap.timeline();

                    done.to(splash, {
                        opacity: 0,
                        duration: 0.6,
                        ease: "power2.inOut",
                        onComplete: () => {
                            splash.remove();
                            initHeroEntrance();
                            initNameClick();
                            showHandednessHint();
                            ScrollTrigger.refresh();
                        }
                    }, 0);

                    done.set('.hero-intro .hero-badge, .hero-intro .hero-name, .hero-intro .hero-tagline, .hero-cta-row .btn-primary, .hero-cta-row .btn-outline', {
                        opacity: 0
                    }, 0);

                    done.from('.top-utility-bar, .hero-top-row', {
                        y: -40, opacity: 0, duration: 0.5, ease: "power2.out"
                    }, 0);
                }, remaining);
            }

            if (document.readyState === 'complete') {
                dismissSplash();
            } else {
                window.addEventListener('load', dismissSplash);
            }
        });
    }

    initSplashScreen();

    // Apply saved/browser language on first load
    const initialLang = getCurrentLanguage();
    setLanguage(initialLang);

    function initLanguageSelector() {
        if (window.__langSelectorInited) return;
        const langButtons = document.querySelectorAll('.btn-lang');
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = btn.getAttribute('data-lang');
                setLanguage(lang);
            });
        });
        window.__langSelectorInited = true;
    }

    function initInfiniteCarousel() {
        const wrappers = document.querySelectorAll('.carousel-wrapper');
        wrappers.forEach((wrapper) => {
            const originalContent = wrapper.innerHTML;
            wrapper.innerHTML = originalContent + originalContent + originalContent;

            let xPos = 0;
            let speed = 1;
            let isDragging = false;
            let isPaused = false;
            let startX = 0;
            let velocity = 0;
            let lastMoveTime = 0;
            let lastMoveX = 0;

            const getUnitWidth = () => wrapper.scrollWidth / 3;

            const normalize = () => {
                const unitWidth = getUnitWidth();
                while (xPos <= -(unitWidth * 2)) { xPos += unitWidth; }
                while (xPos >= 0) { xPos -= unitWidth; }
                gsap.set(wrapper, { x: Math.round(xPos) });
            };

            xPos = -getUnitWidth();
            gsap.set(wrapper, { x: xPos });

            let rafId = null;
            const update = () => {
                if (!wrapper.isConnected) {
                    window.removeEventListener('mousemove', onMove);
                    window.removeEventListener('mouseup', onEnd);
                    window.removeEventListener('touchmove', onMove);
                    window.removeEventListener('touchend', onEnd);
                    return;
                }
                if (!isDragging && !isPaused) {
                    xPos -= speed;
                    const unitWidth = getUnitWidth();
                    if (xPos <= -(unitWidth * 2)) {
                        xPos += unitWidth;
                    }
                    if (xPos >= 0) {
                        xPos -= unitWidth;
                    }
                    gsap.set(wrapper, { x: xPos });
                }
                rafId = requestAnimationFrame(update);
            };
            rafId = requestAnimationFrame(update);

            const cards = wrapper.querySelectorAll('.project-card');
            let expandedCard = null;
            let cardPlaceholder = null;
            let modalWrap = null;
            let canCollapse = true;
            let countdownInterval = null;
            let countdownEl = null;
            let wasDragged = false;

            function startCountdown(card) {
                countdownEl = document.createElement('span');
                countdownEl.className = 'card-countdown';
                countdownEl.textContent = '3';

                function positionCountdown() {
                    const rect = card.getBoundingClientRect();
                    countdownEl.style.left = (rect.left + rect.width / 2) + 'px';
                    countdownEl.style.top = (rect.top - 56) + 'px';
                }

                positionCountdown();
                document.body.appendChild(countdownEl);

                const scrollHandler = () => positionCountdown();
                window.addEventListener('scroll', scrollHandler);
                countdownEl._scrollHandler = scrollHandler;

                let count = 3;
                countdownInterval = setInterval(() => {
                    count--;
                    if (countdownEl) countdownEl.textContent = count;
                    if (count <= 0) {
                        clearCountdown();
                        canCollapse = false;
                        expandedCard = card;
                        openModal(card);
                    }
                }, 600);
            }

            function clearCountdown() {
                if (countdownInterval) {
                    clearInterval(countdownInterval);
                    countdownInterval = null;
                }
                if (countdownEl) {
                    if (countdownEl._scrollHandler) {
                        window.removeEventListener('scroll', countdownEl._scrollHandler);
                    }
                    countdownEl.remove();
                    countdownEl = null;
                }
            }

            function openModal(card) {
                clearCountdown();
                const rect = card.getBoundingClientRect();

                modalWrap = document.createElement('div');
                modalWrap.style.cssText = 'position:fixed;inset:0;z-index:100000';

                const isDark = document.body.classList.contains('modo-bio-active');
                const backdrop = document.createElement('div');
                backdrop.style.cssText = 'position:absolute;inset:0;background:' + (isDark ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.5)') + ';backdrop-filter:blur(4px);opacity:0';

                modalWrap.appendChild(backdrop);
                document.body.appendChild(modalWrap);

                cardPlaceholder = document.createElement('div');
                cardPlaceholder.style.flex = '0 0 ' + rect.width + 'px';
                cardPlaceholder.style.height = rect.height + 'px';
                card.parentNode.insertBefore(cardPlaceholder, card);

                const targetW = Math.min(window.innerWidth * 0.7, 660);
                const targetH = Math.min(window.innerHeight * 0.7, 520);

                card.style.position = 'fixed';
                card.style.left = (window.innerWidth - targetW) / 2 + 'px';
                card.style.top = (window.innerHeight - targetH) / 2 + 'px';
                card.style.width = targetW + 'px';
                card.style.height = targetH + 'px';
                card.style.zIndex = 1;
                card.style.overflowY = 'auto';
                card.style.overflowX = 'hidden';

                card.remove();
                modalWrap.appendChild(card);

                card.classList.add('is-expanded');
                gsap.to(backdrop, { opacity: 1, duration: 0.15 });

                const ring = document.createElement('div');
                ring.style.cssText = 'position:fixed;left:50%;top:50%;width:40px;height:40px;margin:-20px;border-radius:50%;border:3px solid #FF2D78;z-index:0;pointer-events:none;opacity:0';
                modalWrap.appendChild(ring);
                gsap.fromTo(ring,
                    { scale: 0.3, opacity: 0.8 },
                    { scale: 4, opacity: 0, duration: 0.4, ease: "power2.out" }
                );

                gsap.fromTo(card,
                    { scale: 0.85, opacity: 0, rotation: -3 },
                    {
                        scale: 1, opacity: 1, rotation: -2,
                        duration: 0.4,
                        ease: "back.out(2)",
                        onComplete: () => { canCollapse = true; }
                    }
                );
            }

            function collapseCard() {
                if (!expandedCard) return;
                const card = expandedCard;
                gsap.to(card, { opacity: 0, rotation: 4, duration: 0.2, ease: "power2.in", onComplete: () => {
                    card.classList.remove('is-expanded');
                    if (modalWrap) modalWrap.remove();
                    card.style.position = '';
                    card.style.left = '';
                    card.style.top = '';
                    card.style.width = '';
                    card.style.height = '';
                    card.style.opacity = '';
                    card.style.zIndex = '';
                    card.style.overflow = '';
                    if (cardPlaceholder && cardPlaceholder.parentNode) {
                        cardPlaceholder.parentNode.insertBefore(card, cardPlaceholder);
                        cardPlaceholder.remove();
                    }
                    cardPlaceholder = null;
                    modalWrap = null;
                    expandedCard = null;
                    canCollapse = true;
                    isPaused = false;
                }});
            }

            function cancelExpand() {
                clearCountdown();
            }

            const isTouch = 'ontouchstart' in window;

            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    if (isTouch) return;
                    if (expandedCard) return;
                    cancelExpand();
                    isPaused = true;
                    startCountdown(card);
                });

                card.addEventListener('click', (e) => {
                    if (expandedCard) return;
                    if (wasDragged) {
                        wasDragged = false;
                        return;
                    }
                    cancelExpand();
                    e.stopPropagation();
                    isPaused = true;
                    canCollapse = false;
                    expandedCard = card;
                    openModal(card);
                });

                card.addEventListener('mouseleave', () => {
                    if (countdownEl) {
                        clearCountdown();
                        isPaused = false;
                    } else if (canCollapse) {
                        collapseCard();
                    }
                });
            });

            document.addEventListener('click', (e) => {
                if (expandedCard && modalWrap && !expandedCard.contains(e.target) && canCollapse) {
                    collapseCard();
                }
            });

            const onStart = (e) => {
                cancelExpand();
                if (expandedCard) collapseCard();
                gsap.killTweensOf(wrapper);
                isDragging = true;
                wasDragged = false;
                velocity = 0;
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                startX = clientX - xPos;
                lastMoveX = clientX;
                lastMoveTime = performance.now();
                wrapper.style.cursor = 'grabbing';
            };

            const onMove = (e) => {
                if (!isDragging) return;
                wasDragged = true;
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                xPos = clientX - startX;
                gsap.set(wrapper, { x: Math.round(xPos) });

                const now = performance.now();
                const dt = now - lastMoveTime;
                if (dt > 10) {
                    velocity = (xPos - lastMoveX) / dt * 16;
                    lastMoveX = xPos;
                    lastMoveTime = now;
                }
            };

            let dragEndCard = null;

            const onEnd = (e) => {
                isDragging = false;
                wrapper.style.cursor = 'grab';

                if (!isTouch && e.clientX != null) {
                    const el = document.elementFromPoint(e.clientX, e.clientY);
                    dragEndCard = el?.closest('.project-card') || null;
                } else {
                    dragEndCard = null;
                }

                const doResumeCountdown = () => {
                    if (wasDragged && dragEndCard && !expandedCard && !countdownEl) {
                        isPaused = true;
                        startCountdown(dragEndCard);
                    }
                };

                if (Math.abs(velocity) > 0.3) {
                    const unitWidth = getUnitWidth();
                    const momentum = velocity * 25;
                    const targetX = xPos + momentum;

                    gsap.to(wrapper, {
                        x: targetX,
                        duration: Math.min(Math.abs(momentum) * 0.003 + 0.2, 1),
                        ease: "power3.out",
                        onUpdate: () => {
                            xPos = Math.round(gsap.getProperty(wrapper, "x"));
                            const uw = getUnitWidth();
                            if (xPos <= -(uw * 2)) { xPos += uw; gsap.set(wrapper, { x: xPos }); }
                            else if (xPos >= 0) { xPos -= uw; gsap.set(wrapper, { x: xPos }); }
                        },
                        onComplete: () => {
                            normalize();
                            doResumeCountdown();
                        }
                    });
                } else {
                    normalize();
                    doResumeCountdown();
                }
                velocity = 0;
            };

            wrapper.addEventListener('mousedown', onStart);
            window.addEventListener('mousemove', onMove);
            window.addEventListener('mouseup', onEnd);
            wrapper.addEventListener('touchstart', onStart);
            wrapper.addEventListener('touchmove', onMove, { passive: true });
            wrapper.addEventListener('touchend', onEnd);
        });
    }

    let isOn = false;

    function setupHandedness() {
        const btnLeft = document.getElementById('btn-left');
        const btnRight = document.getElementById('btn-right');
        if (!btnLeft || !btnRight) return;

        updateHandednessLabels();
        if (!document.querySelector('.splash-screen')) {
            showHandednessHint();
        }

        btnLeft.onclick = (e) => {
            e.stopPropagation();
            e.preventDefault();
            removeHandednessHint();
            if (!document.body.classList.contains('is-right-handed')) updateHandedness(true);
        };
        btnRight.onclick = (e) => {
            e.stopPropagation();
            e.preventDefault();
            removeHandednessHint();
            if (document.body.classList.contains('is-right-handed')) updateHandedness(false);
        };
        if (localStorage.getItem('userHandedness') === 'right') document.body.classList.add('is-right-handed');
    }

    let activeTimeline = null;
    function initModeToggle() {
        const longPressDuration = 500;
        const toggle = document.getElementById('mode-toggle');
        const overlay = document.getElementById('mode-expansion-overlay');
        const ball = document.querySelector('.toggle-ball');
        const navElements = document.querySelectorAll('.top-utility-bar, .hero-top-row');
        if (document.body.classList.contains('modo-bio-active')) {
            toggle.classList.add('is-active');
        }
        const giantToggle = document.getElementById('giant-toggle-container');
        const giantBall = giantToggle?.querySelector('.giant-ball');
        let isGoingToDark = false;

        if (!toggle) return;

        const orbitTl = gsap.timeline({ repeat: -1, paused: true });

        gsap.set(["#ship-back", "#ship-front"], { xPercent: -50, yPercent: -50, opacity: 0 });

        orbitTl.set("#ship-back", { opacity: 1 }, 0)
               .to("#ship-back", { duration: 2, ease: "none", motionPath: { path: "#orbit-path", start: 0.5, end: 1 } }, 0)
               .set("#ship-back", { opacity: 0 }, 2)
               .set("#ship-front", { opacity: 1 }, 2)
               .to("#ship-front", { duration: 2, ease: "none", motionPath: { path: "#orbit-path", start: 0, end: 0.5 } }, 2)
               .set("#ship-front", { opacity: 0 }, 4);

        const wheelShape = "M60,10 a50,50 0 1,1 0,100 a50,50 0 1,1 0,-100";
        const moonShape  = "M60,15 a45,45 0 1,1 0,90 a45,45 0 1,1 0,-90";

        const handlePressStart = (e) => {
            e.preventDefault();
            e.stopPropagation();

            if (activeTimeline && activeTimeline.isActive()) {
                activeTimeline.pause();
                const progress = activeTimeline.progress();

                if (isGoingToDark) {
                    if (progress > 0.3) {
                        gsap.set(['#orbit-back-group', '#orbit-front-group'], { display: 'block' });
                        gsap.to(['#orbit-back-group', '#orbit-front-group'], { opacity: 1, duration: 0.2 });
                        orbitTl.play();
                    }
                } else {
                    orbitTl.pause();
                    gsap.set(['#orbit-back-group', '#orbit-front-group'], { display: 'none', opacity: 0 });
                }

                gsap.to(giantToggle, { scale: 0.95, opacity: 0.9, duration: 0.2 });
            }
        };

        const handlePressEnd = (e) => {
            if (activeTimeline) {
                orbitTl.pause();
                gsap.to(['#orbit-back-group', '#orbit-front-group'], {
                    opacity: 0,
                    duration: 0.2,
                    onComplete: () => gsap.set(['#orbit-back-group', '#orbit-front-group'], { display: 'none' })
                });
                activeTimeline.play();
                gsap.to(giantToggle, { scale: 1, opacity: 1, duration: 0.2 });
            }
        };

        if (giantToggle) {
            giantToggle.addEventListener('mousedown', handlePressStart);
            giantToggle.addEventListener('mouseup', handlePressEnd);
            giantToggle.addEventListener('mouseleave', handlePressEnd);
            giantToggle.addEventListener('touchstart', handlePressStart, { passive: false });
            giantToggle.addEventListener('touchend', handlePressEnd);
        }

        toggle.addEventListener('click', () => {
            const isDark = document.body.classList.contains('modo-bio-active');
            isGoingToDark = !isDark;
            if (activeTimeline && activeTimeline.isActive()) return;

            activeTimeline = gsap.timeline({
                onStart: () => {
                    document.body.style.pointerEvents = 'none';
                    giantToggle.style.pointerEvents = 'auto';
                    gsap.set(['#orbit-back-group', '#orbit-front-group'], { opacity: 0 });
                },
                onComplete: () => {
                    document.body.style.pointerEvents = 'auto';
                    gsap.set(['#orbit-back-group', '#orbit-front-group'], { opacity: 0 });
                    activeTimeline = null;
                }
            });
            const tl = activeTimeline;

            const rect = ball ? ball.getBoundingClientRect() : toggle.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            if (giantToggle) {
                gsap.set(giantToggle, {
                    xPercent: -50, yPercent: -50,
                    x: 0, y: 0,
                    top: "50%", left: "50%",
                    scale: 0, opacity: 0,
                    display: 'block'
                });
            }

            if (giantBall) {
                gsap.set(giantBall, { x: -20, y: 0 });
            }

            if (!isDark) {
                if (overlay) {
                    overlay.style.display = 'block';
                    gsap.set(overlay, {
                        x: centerX, y: centerY, xPercent: -50, yPercent: -50,
                        scale: 0, backgroundColor: '#101418', zIndex: 1000000, opacity: 1
                    });
                }

                if (giantToggle) {
                    gsap.set(giantToggle, { x: 0, display: 'block', scale: 0, opacity: 1, zIndex: 2000000 });
                    gsap.set("#morph-base", { morphSVG: wheelShape, fill: "#111" });
                    gsap.set("#morph-wheel-details, #morph-text-group", { opacity: 1, scale: 1 });
                    gsap.set("#morph-craters", { opacity: 0, scale: 0.5 });
                    tl.to(giantToggle, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" });
                }

                if (overlay) {
                    tl.to(overlay, { scale: 150, duration: 0.2, ease: "expo.inOut" });
                }

                if (giantBall) {
                    tl.to(giantBall, { x: 100, rotation: 360, duration: 0.8, ease: "power3.inOut" }, 0)
                      .to("#morph-base", { morphSVG: moonShape, fill: "#F5F3CE", duration: 0.3, ease: "power2.in" }, 0)
                      .to("#morph-wheel-details", { opacity: 0, scale: 0.5, duration: 0.2 }, 0.1)
                      .to("#morph-text-group", { opacity: 0, scale: 1.2, duration: 0.2 }, 0.1)
                      .to("#morph-craters", { opacity: 1, scale: 1, duration: 0.4 }, 0.2);

                    tl.to(giantBall, {
                        scale: 1.2,
                        duration: 0.4,
                        ease: "power2.out",
                        yoyo: true,
                        repeat: 1
                    }, "-=0.4");
                }

                tl.add(() => {
                    document.body.classList.add('modo-bio-active');
                    toggle.classList.add('is-active');
                    localStorage.setItem('modoBio', 'true');
                    updateHandednessLabels();
                    if (overlay) gsap.set(overlay, { zIndex: -1 });
                }, "-=0.1");

                tl.fromTo(navElements,
                    { y: -50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
                    "-=0.1"
                );

                tl.to(giantToggle, {
                    x: 0,
                    scale: 0,
                    opacity: 0,
                    duration: 0.5,
                    ease: "back.in(1.2)",
                    clearProps: "all"
                }, "-=0.3");

            } else {
                if (overlay) {
                    overlay.style.display = 'block';
                    gsap.set(overlay, {
                        x: centerX, y: centerY, xPercent: -50, yPercent: -50,
                        scale: 150, backgroundColor: '#101418', zIndex: -1, opacity: 1
                    });
                }

                if (giantToggle) {
                    gsap.set(giantToggle, { x: 0, rotation: 0, display: 'block', scale: 0, opacity: 1, zIndex: 2000000 });
                    gsap.set(giantBall, { x: 100, rotation: 360, scale: 1 });
                    tl.to(giantToggle, { scale: 1, duration: 0.4, ease: "back.out(1.7)" });
                }

                tl.to(overlay, {
                    scale: 0, duration: 0.8, ease: "expo.out",
                    onStart: () => {
                        document.body.classList.remove('modo-bio-active');
                        localStorage.setItem('modoBio', 'false');
                        updateHandednessLabels();
                    }
                }, "-=0.2");

                if (giantBall) {
                    tl.to(giantBall, { x: -15, rotation: 0, duration: 0.6, ease: "power2.in" }, "-=0.8")
                      .to("#morph-base", { morphSVG: wheelShape, fill: "#111", duration: 0.8 }, "<")
                      .to("#morph-craters", { opacity: 0, scale: 0.5, duration: 0.4 }, "<")
                      .to("#morph-wheel-details", { opacity: 1, scale: 1, duration: 0.5 }, "<")
                      .to("#morph-text-group", { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.5 }, "<");

                    tl.to(giantBall, { x: -25, rotation: -45, duration: 0.2, ease: "power2.out"}, "-=0.1");
                    tl.to(giantToggle, {
                        x: -8,
                        rotation: -3,
                        transformOrigin: "left center",
                        duration: 0.2,
                        ease: "power2.out"
                    }, "<");
                    tl.to(giantBall, { x: -20, rotation: 0, duration: 0.5, ease: "back.out(2)" });
                    tl.to(giantToggle, {
                        x: 0,
                        rotation: 0,
                        duration: 0.5,
                        transformOrigin: "center center",
                        ease: "back.out(2)"
                    }, "<");
                }

                if (ball) {
                    tl.to(ball, { x: 0, rotation: -360, duration: 0.9, ease: "back.out(1.5)",
                        onStart: () => { toggle.classList.remove('is-active'); }
                    }, "<");
                }

                tl.add(() => {
                    if (giantToggle) {
                        gsap.to(giantToggle, {
                            scale: 0,
                            opacity: 0,
                            x: 0,
                            rotation: 0,
                            duration: 0.5,
                            delay: 0.2,
                            ease: "back.in(1.2)",
                            clearProps: "all"
                        });
                    }
                    if (overlay) overlay.style.display = 'none';
                    if (ball) gsap.set(ball, { clearProps: "all" });
                });
            }
            const currentMode = isDark ? 'space' : 'skate';
            triggerSystemLogs(currentMode);
        });
    }

    document.addEventListener('mousedown', (e) => {
        if (!activeTimeline || !activeTimeline.isActive()) return;

        const giantToggle = document.getElementById('giant-toggle-container');
        const toggle = document.getElementById('mode-toggle');

        if (giantToggle && !giantToggle.contains(e.target) && !toggle.contains(e.target)) {
            activeTimeline.progress(1);
            gsap.to(['#giant-toggle-container', '#mode-expansion-overlay'], {
                opacity: 0,
                scale: 0,
                duration: 0.2,
                onComplete: () => {
                    document.getElementById('mode-expansion-overlay').style.display = 'none';
                    giantToggle.style.display = 'none';
                    document.body.style.pointerEvents = 'auto';
                    activeTimeline = null;
                }
            });
        }
    });

    function initWindowsLogic() {
        const minimizeButtons = document.querySelectorAll('.win-close, .win-minimize');
        const taskButtons = document.querySelectorAll('.win-task-btn');

        const minimizeWindow = (windowEl) => {
            const taskBtn = document.querySelector(`.link-to-${windowEl.id}`);
            windowEl.classList.add('is-transitioning-out');

            gsap.to(windowEl, {
                duration: 0.4,
                scale: 0.5,
                y: 100,
                opacity: 0,
                ease: "power2.in",
                onComplete: () => {
                    windowEl.classList.add('is-minimized');
                    windowEl.classList.remove('is-transitioning-out');
                    if (taskBtn) taskBtn.classList.add('is-active');
                }
            });
        };

        minimizeButtons.forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                const windowEl = btn.closest('.win-window');
                if (windowEl) minimizeWindow(windowEl);
            };
        });

        taskButtons.forEach(btn => {
            btn.onclick = () => {
                const classList = Array.from(btn.classList);
                const targetClass = classList.find(cls => cls.startsWith('link-to-'));
                const targetId = targetClass?.replace('link-to-', '');
                const targetWindow = document.getElementById(targetId);

                if (targetWindow) {
                    const otherOpen = document.querySelector('.win-window:not(.is-minimized)');
                    if (otherOpen && otherOpen !== targetWindow) {
                        minimizeWindow(otherOpen);
                    }
                    btn.classList.remove('is-active');
                    targetWindow.classList.remove('is-minimized');
                    gsap.fromTo(targetWindow,
                        { scale: 0.8, y: 30, opacity: 0 },
                        {
                            duration: 0.5,
                            scale: 1,
                            y: 0,
                            opacity: 1,
                            ease: "back.out(1.2)",
                            delay: 0.1
                        }
                    );
                }
            };
        });
    }
    function initScrollReveal() {
        const configs = [
            {
                section: '.projects-section',
                targets: '.section-number, .section-title, .section-line'
            },
            {
                section: '.about-section',
                targets: '.section-number, .section-title, .section-line, .about-greeting, .about-text, .stat, .about-skills'
            },
            {
                section: '.contact-section',
                targets: '.section-number, .section-title, .section-line'
            },
            {
                section: '.skills-section',
                targets: '.section-number, .section-title, .section-line, .skill-category'
            },
            {
                section: '.experience-section',
                targets: '.section-number, .section-title, .section-line, .timeline-item'
            },
            {
                section: '.about-cta-section',
                targets: '.cta-block-title, .cta-block-text, .btn-primary'
            }
        ];

        configs.forEach(({ section, targets }) => {
            const el = document.querySelector(section);
            if (!el) return;

            const children = el.querySelectorAll(targets);
            if (!children.length) return;

            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) return;

            gsap.from(children, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 75%",
                    toggleActions: "play none none none"
                },
                y: 25,
                opacity: 0,
                duration: 0.45,
                stagger: 0.07,
                ease: "back.out(1.7)"
            });
        });
    }

    function triggerSystemLogs(mode) {
        const container = document.getElementById('system-terminal-logs');
        if (!container) return;

        const scrollArea = container.querySelector('.terminal-scroll-area');
        if (scrollArea) scrollArea.innerHTML = '';

        const spaceMessages = [
            "> INITIALIZING DEVELASQ_OS...",
            "> LOADING PROJECT_MODULES... [OK]",
            "> CHECKING USER_INTERFACE... [HANDEDNESS_READY]",
            "> READY FOR COMMAND."
        ];

        const skateMessages = [
            "STREET_SESSION_01 // INICIANDO...",
            "CARGANDO FANZINE DE PROYECTOS...",
            "AJUSTANDO TABLA... [LISTO]",
            "DALE CAÑA."
        ];

        const messages = mode === 'space' ? spaceMessages : skateMessages;

        const parent = scrollArea || container;

        messages.forEach((msg, index) => {
            setTimeout(() => {
                const line = document.createElement('div');
                line.className = 'log-line';
                line.innerHTML = `<span style="opacity:0.5">${mode === 'space' ? '$' : '>>'}</span> ${msg}`;
                parent.appendChild(line);
                gsap.from(line, { opacity: 0, x: -10, duration: 0.3 });
                if (parent.scrollTop !== undefined) {
                    parent.scrollTop = parent.scrollHeight;
                }
            }, index * 400);
        });
    }

    function initHeroEntrance() {
        const hero = document.querySelector('.hero-intro');
        if (!hero) return;
        if (hero._entranceInited) return;
        hero._entranceInited = true;
        const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)", duration: 0.5 } });

        tl.fromTo('.hero-intro .hero-badge', { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, 0)
          .fromTo('.hero-intro .hero-name', { scale: 0, opacity: 0, rotation: -3 }, { scale: 1, opacity: 1, rotation: 0 }, 0.1)
          .fromTo('.hero-intro .hero-tagline', { x: 50, opacity: 0 }, { x: 0, opacity: 1 }, 0.25);

        const ctaBtns = document.querySelectorAll('.hero-cta-row .btn-primary, .hero-cta-row .btn-outline');
        if (ctaBtns.length) {
            tl.fromTo(ctaBtns, { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08 }, 0.4);
        }
    }

    function initNameClick() {
        const oldTriangle = document.querySelector('.name-triangle');
        if (oldTriangle) oldTriangle.remove();
        ScrollTrigger.getById('triangle-scroll')?.kill();
        document.body.classList.remove('name-triangle-open');

        const nameEl = document.querySelector('.highlight-accent');
        if (!nameEl) return;
        nameEl.style.cursor = 'pointer';

        const triangle = document.createElement('div');
        triangle.className = 'name-triangle';
        triangle.style.visibility = 'hidden';
        document.body.appendChild(triangle);

        let isOpen = false;
        let scrollTriggerInstance = null;

        const cp = { rightX: 0, rightY: 0, leftTopY: 0, leftBotY: 100, offX: 0 };

        function applyClip() {
            const rect = triangle.getBoundingClientRect();
            const w = rect.width || 1;
            const h = rect.height || 1;
            const rX = cp.rightX / 100 * w;
            const rY = cp.rightY / 100 * h;
            const lTY = cp.leftTopY / 100 * h;
            const lBY = cp.leftBotY / 100 * h;
            const oX = cp.offX;
            triangle.style.clipPath = `polygon(${oX}px ${lTY}px, ${oX}px ${lBY}px, ${rX + oX}px ${rY}px)`;
        }

        function actionLines() {
            const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
            for (let i = 0; i < 18; i++) {
                const line = document.createElement('div');
                const fromX = 20 + Math.random() * 60;
                const y = 5 + Math.random() * 90;
                const w = 80 + Math.random() * 200;
                const h = 2 + Math.random() * 3;
                const speed = 0.2 + Math.random() * 0.3;
                const delay = Math.random() * 0.15;
                line.style.cssText = `
                    position:fixed; left:${fromX}vw; top:${y}vh;
                    width:${w}px; height:${h}px;
                    background:${accent};
                    pointer-events:none; z-index:999;
                    opacity:1;
                `;
                document.body.appendChild(line);
                gsap.to(line, {
                    x: -w - 300,
                    opacity: 0,
                    duration: speed,
                    delay: delay,
                    ease: "none",
                    onComplete: () => line.remove()
                });
            }
        }

        let inviteTl = null;
        function startInvitation() {
            stopInvitation();
            inviteTl = gsap.timeline({ repeat: -1, repeatDelay: 2, delay: 1.5 });
            inviteTl
                .call(() => {
                    if (isOpen) return;
                    gsap.set(triangle, { visibility: 'visible' });
                    cp.rightX = 0; cp.rightY = 0; cp.leftTopY = 0; cp.leftBotY = 100; cp.offX = 0;
                    applyClip();
                })
                .to(nameEl, { scale: 1.14, rotation: -3, duration: 0.35, ease: "back.out(2)" }, 0)
                .to(cp, { rightX: 14, duration: 0.35, ease: "back.out(2)", onUpdate: applyClip }, 0)
                .to(nameEl, { scale: 1, rotation: 0, duration: 0.35, ease: "power2.inOut" }, 0.35)
                .to(cp, { rightX: 0, duration: 0.35, ease: "power2.inOut", onUpdate: applyClip }, 0.35)
                .call(() => {
                    gsap.set(triangle, { visibility: 'hidden' });
                });
        }
        function stopInvitation() {
            if (inviteTl) { inviteTl.kill(); inviteTl = null; }
            gsap.set(triangle, { visibility: 'hidden' });
        }

        nameEl.addEventListener('click', (e) => {
            e.stopPropagation();

            gsap.killTweensOf(triangle);
            gsap.killTweensOf(nameEl);
            gsap.killTweensOf(cp);
            stopInvitation();

            gsap.to(nameEl, {
                rotation: 15,
                scale: 1.2,
                duration: 0.4,
                ease: "power2.inOut",
                onComplete: () => {
                    gsap.to(nameEl, {
                        rotation: 0,
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out",
                        clearProps: "transform"
                    });
                }
            });

            if (isOpen) {
                if (scrollTriggerInstance) {
                    scrollTriggerInstance.kill();
                    scrollTriggerInstance = null;
                }
                gsap.to(cp, {
                    rightX: 0, rightY: 0, leftTopY: 0, leftBotY: 100, offX: 0,
                    duration: 0.4, ease: "power2.in",
                    onUpdate: applyClip,
                    onComplete: () => {
                        gsap.set(triangle, { visibility: 'hidden' });
                        document.body.classList.remove('name-triangle-open');
                        startInvitation();
                    }
                });
                isOpen = false;
            } else {
                gsap.set(triangle, { visibility: 'visible' });
                cp.rightX = 0; cp.rightY = 0; cp.leftTopY = 0; cp.leftBotY = 100; cp.offX = 0;
                applyClip();

                gsap.to(cp, {
                    rightX: 100, duration: 0.8, ease: "elastic.out(1, 0.3)",
                    onUpdate: applyClip,
                    onStart: () => {
                        document.body.classList.add('name-triangle-open');
                    }
                });

                const tl = gsap.timeline({ paused: true });
                tl.to(cp, { rightY: -8, duration: 0.1, ease: "none", onUpdate: applyClip })
                  .to(cp, { rightY: 8, duration: 0.1, ease: "none", onUpdate: applyClip })
                  .to(cp, { rightY: 0, duration: 0.1, ease: "none", onUpdate: applyClip })
                  .to(cp, { rightX: 140, rightY: 32.5, leftTopY: 32.5, leftBotY: 67.5, duration: 0.2, ease: "power1.in", onUpdate: applyClip, onStart: actionLines })
                  .to(cp, { offX: -300, rightX: 0, duration: 0.5, ease: "power3.in", onUpdate: applyClip });

                scrollTriggerInstance = ScrollTrigger.create({
                    id: 'triangle-scroll',
                    trigger: document.body,
                    start: "top top",
                    end: "+=800",
                    scrub: 1.5,
                    onUpdate: (self) => {
                        if (triangle.style.visibility !== 'hidden') {
                            tl.progress(self.progress);
                        }
                    }
                });

                isOpen = true;
            }
        });

        startInvitation();
    }

    function initEmailReveal() {
        const btn = document.querySelector('.email-reveal');
        if (!btn) return;
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = btn.getAttribute('data-email');
            const placeholder = btn.querySelector('.email-placeholder');
            if (!placeholder) return;
            if (placeholder.dataset.revealed) return;
            placeholder.textContent = email;
            placeholder.dataset.revealed = 'true';
            btn.setAttribute('href', 'mailto:' + email);
            try { navigator.clipboard.writeText(email); } catch (_) {}
        });
    }

    let stickyNavTrigger = null;
    let terminalScrollHandler = null;
    let toggleBtn = null;

    function ensureToggleBtn() {
        if (!toggleBtn || !document.body.contains(toggleBtn)) {
            toggleBtn = document.createElement('button');
            toggleBtn.className = 'terminal-toggle-btn';
            toggleBtn.setAttribute('aria-label', 'Toggle terminal');
            toggleBtn.textContent = '\u276E';
            document.body.appendChild(toggleBtn);
        }
        return toggleBtn;
    }

    function ensureVoidOverlay() {
        let overlay = document.getElementById('void-overlay');
        if (overlay) return overlay;

        overlay = document.createElement('div');
        overlay.id = 'void-overlay';

        const topBar = document.createElement('div');
        topBar.id = 'void-top-bar';

        const prompt = document.createElement('span');
        prompt.id = 'void-prompt';
        prompt.textContent = '$';
        topBar.appendChild(prompt);

        const input = document.createElement('input');
        input.id = 'void-input';
        input.type = 'text';
        input.autocomplete = 'off';
        input.spellcheck = false;
        input.placeholder = 'type exit to return';
        topBar.appendChild(input);

        overlay.appendChild(topBar);

        const closeBtn = document.createElement('button');
        closeBtn.id = 'void-close-btn';
        closeBtn.textContent = '\u2715';
        overlay.appendChild(closeBtn);

        const content = document.createElement('div');
        content.id = 'void-content';
        content.textContent = '\u25CB esperando...';
        overlay.appendChild(content);

        document.body.appendChild(overlay);
        return overlay;
    }

    function enterVoid() {
        const overlay = ensureVoidOverlay();
        if (overlay.classList.contains('is-active')) return;

        const columns = document.querySelectorAll('.overlay-column');
        if (!columns.length) return;

        document.body.classList.add('is-void-active');
        overlay.classList.add('is-active');

        const closeBtn = document.getElementById('void-close-btn');
        const input = document.getElementById('void-input');

        const exitVoidFn = function () {
            if (!overlay.classList.contains('is-active')) return;
            input.value = '';
            overlay.classList.remove('is-active');
            document.body.classList.remove('is-void-active');
            gsap.to(columns, {
                scaleX: 0,
                duration: 0.6,
                ease: "power2.inOut",
                stagger: 0.06,
                transformOrigin: "right"
            });
        };

        closeBtn.onclick = exitVoidFn;

        input.onkeydown = function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const val = input.value.trim().toLowerCase();
                if (val === 'exit') {
                    exitVoidFn();
                }
                input.value = '';
            }
        };

        gsap.fromTo(columns,
            { scaleX: 0, transformOrigin: "left" },
            { scaleX: 1, duration: 0.7, ease: "power2.inOut", stagger: 0.08 }
        );

        setTimeout(function () { input.focus(); }, 800);
    }

    function initTerminal() {
        const terminal = document.getElementById('system-terminal-logs');
        if (!terminal) return;

        if (terminalScrollHandler) {
            window.removeEventListener('scroll', terminalScrollHandler);
            terminalScrollHandler = null;
        }

        // TOP TERMINAL SETUP (in flow, always visible)
        if (!terminal._inited) {
            terminal._inited = true;
            terminal.innerHTML = '';

            const scrollArea = document.createElement('div');
            scrollArea.className = 'terminal-scroll-area';
            terminal.appendChild(scrollArea);

            const inputRow = document.createElement('div');
            inputRow.className = 'terminal-input-row';

            const prompt = document.createElement('span');
            prompt.className = 'terminal-prompt';
            prompt.textContent = '$';
            inputRow.appendChild(prompt);

            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'terminal-input';
            input.autocomplete = 'off';
            input.spellcheck = false;
            input.placeholder = 'type help for commands';
            inputRow.appendChild(input);

            terminal.appendChild(inputRow);

            terminal._appendLog = function (text) {
                const line = document.createElement('div');
                line.className = 'log-line';
                line.textContent = text;
                scrollArea.appendChild(line);
                scrollArea.scrollTop = scrollArea.scrollHeight;
            };

            function processCmd(val) {
                const trimmed = val.trim();
                if (!trimmed) return;
                terminal._appendLog('$ ' + trimmed);
                const toggle = document.getElementById('mode-toggle');
                const cmd = trimmed.toLowerCase();
                switch (cmd) {
                    case 'dark': case 'oscuro': case 'black':
                        if (document.body.classList.contains('modo-bio-active')) {
                            terminal._appendLog('⏎ ya estás en modo oscuro');
                        } else if (toggle) {
                            toggle.click();
                        }
                        break;
                    case 'light': case 'claro': case 'white':
                        if (!document.body.classList.contains('modo-bio-active')) {
                            terminal._appendLog('⏎ ya estás en modo claro');
                        } else if (toggle) {
                            toggle.click();
                        }
                        break;
                    case 'left': case 'izquierda': case 'goofy':
                        if (!document.body.classList.contains('is-right-handed')) {
                            terminal._appendLog('⏎ ya eres zurdo');
                        } else {
                            updateHandedness(false);
                        }
                        break;
                    case 'right': case 'derecha': case 'regular':
                        if (document.body.classList.contains('is-right-handed')) {
                            terminal._appendLog('⏎ ya eres diestro');
                        } else {
                            updateHandedness(true);
                        }
                        break;
                    case 'void':
                        enterVoid();
                        break;
                    case 'help':
                        terminal._appendLog('⏎ comandos: dark/oscuro/black, light/claro/white, left/izquierda/goofy, right/derecha/regular, void, clear, help');
                        break;
                    case 'clear':
                        scrollArea.innerHTML = '';
                        break;
                    default:
                        terminal._appendLog('⏎ comando no reconocido: ' + trimmed + ' (escribe help)');
                }
                input.value = '';
                input.focus();
            }

            input.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    processCmd(input.value);
                }
            });

            terminal.addEventListener('click', function () {
                input.focus();
            });
        }

        // STICKY BOTTOM TERMINAL (appears on scroll)
        ensureToggleBtn();

        if (!toggleBtn._listenerAttached) {
            toggleBtn.addEventListener('click', function onToggle() {
                const bar = document.getElementById('terminal-sticky-bar');
                if (!bar) return;
                const expanded = bar.classList.contains('terminal-expanded');
                if (expanded) {
                    bar.classList.remove('terminal-expanded');
                    toggleBtn.textContent = '\u276F';
                } else {
                    bar.classList.add('terminal-expanded');
                    toggleBtn.textContent = '\u276E';
                }
            });
            toggleBtn._listenerAttached = true;
        }

        function buildStickyBar() {
            let bar = document.getElementById('terminal-sticky-bar');
            if (bar) return bar;

            bar = document.createElement('div');
            bar.id = 'terminal-sticky-bar';
            bar.className = 'terminal-sticky-bar';

            const sArea = document.createElement('div');
            sArea.className = 'terminal-scroll-area';
            bar.appendChild(sArea);

            const iRow = document.createElement('div');
            iRow.className = 'terminal-input-row';
            const p = document.createElement('span');
            p.className = 'terminal-prompt';
            p.textContent = '$';
            iRow.appendChild(p);
            const inp = document.createElement('input');
            inp.type = 'text';
            inp.className = 'terminal-input';
            inp.autocomplete = 'off';
            inp.spellcheck = false;
            inp.placeholder = 'type help for commands';
            iRow.appendChild(inp);
            bar.appendChild(iRow);

            document.body.appendChild(bar);

            bar._appendLog = function (text) {
                const line = document.createElement('div');
                line.className = 'log-line';
                line.textContent = text;
                sArea.appendChild(line);
                sArea.scrollTop = sArea.scrollHeight;
            };

            inp.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const trimmed = inp.value.trim();
                    if (!trimmed) return;
                    bar._appendLog('$ ' + trimmed);
                    const toggle = document.getElementById('mode-toggle');
                    const cmd = trimmed.toLowerCase();
                    switch (cmd) {
                        case 'dark': case 'oscuro': case 'black':
                            if (document.body.classList.contains('modo-bio-active')) {
                                bar._appendLog('⏎ ya estás en modo oscuro');
                            } else if (toggle) { toggle.click(); }
                            break;
                        case 'light': case 'claro': case 'white':
                            if (!document.body.classList.contains('modo-bio-active')) {
                                bar._appendLog('⏎ ya estás en modo claro');
                            } else if (toggle) { toggle.click(); }
                            break;
                        case 'left': case 'izquierda': case 'goofy':
                            if (!document.body.classList.contains('is-right-handed')) {
                                bar._appendLog('⏎ ya eres zurdo');
                            } else {
                                updateHandedness(false);
                            }
                            break;
                        case 'right': case 'derecha': case 'regular':
                            if (document.body.classList.contains('is-right-handed')) {
                                bar._appendLog('⏎ ya eres diestro');
                            } else {
                                updateHandedness(true);
                            }
                            break;
                        case 'void':
                            enterVoid();
                            break;
                        case 'help':
                            bar._appendLog('⏎ comandos: dark/oscuro/black, light/claro/white, left/izquierda/goofy, right/derecha/regular, void, clear, help');
                            break;
                        case 'clear':
                            sArea.innerHTML = '';
                            break;
                        default:
                            bar._appendLog('⏎ comando no reconocido: ' + trimmed + ' (escribe help)');
                    }
                    inp.value = '';
                    inp.focus();
                }
            });

            bar.addEventListener('click', function () { inp.focus(); });

            return bar;
        }

        function removeStickyBar() {
            const bar = document.getElementById('terminal-sticky-bar');
            if (bar) bar.remove();
            if (toggleBtn) {
                toggleBtn.style.display = 'none';
                toggleBtn.textContent = '\u276E';
            }
        }

        function onScroll() {
            const scrollY = window.scrollY;
            const bar = document.getElementById('terminal-sticky-bar');

            if (scrollY > 78 && !bar) {
                const stickyBar = buildStickyBar();
                stickyBar.classList.add('terminal-visible');
                toggleBtn.style.display = 'block';
                toggleBtn.textContent = '\u276F';
            } else if (scrollY <= 78 && bar) {
                removeStickyBar();
            }
        }

        terminalScrollHandler = onScroll;
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    function initStickyNav() {
        const nav = document.querySelector('.custom-nav');
        const topRow = document.querySelector('.hero-top-row');
        if (!nav || !topRow) return;

        if (stickyNavTrigger) {
            stickyNavTrigger.kill();
            stickyNavTrigger = null;
        }

        const rect = topRow.getBoundingClientRect();
        const topOffset = rect.top + rect.height - 4;

        let spacer = document.querySelector('.nav-spacer');
        if (!spacer) {
            spacer = document.createElement('div');
            spacer.className = 'nav-spacer';
            spacer.style.height = '0px';
            nav.parentNode.insertBefore(spacer, nav);
        }

        stickyNavTrigger = ScrollTrigger.create({
            trigger: nav,
            start: () => `top ${topOffset}px`,
            onEnter: () => {
                nav.classList.add('is-sticky');
                spacer.style.height = nav.offsetHeight + 'px';
            },
            onLeaveBack: () => {
                nav.classList.remove('is-sticky');
                spacer.style.height = '0px';
            }
        });
    }

    function initGlobalScripts() {
        if (!window.__headerInited) {
            initModeToggle();
            window.__headerInited = true;
        }
        initLanguageSelector();
        setupHandedness();
        initInfiniteCarousel();
        initTerminal();
        triggerSystemLogs(document.body.classList.contains('modo-bio-active') ? 'space' : 'skate');
        initStickyNav();
        initWindowsLogic();
        initEmailReveal();
        initScrollReveal();
        const splash = document.querySelector('.splash-screen');
        if (!splash) {
            initHeroEntrance();
            initNameClick();
        }
        updateMobileButtons();
        ScrollTrigger.refresh();
        const savedHandedness = localStorage.getItem('userHandedness');
        if (savedHandedness === 'right') {
            document.body.classList.add('is-right-handed');
        }
    }

    if (typeof barba !== 'undefined') {
    function createSpeedLines() {
        const container = document.createElement('div');
        container.id = 'speed-lines-overlay';
        container.style.cssText = 'position:fixed;inset:0;z-index:99999;pointer-events:none;overflow:hidden';
        const isDark = document.body.classList.contains('modo-bio-active');
        const colors = isDark
            ? ['rgba(255,255,255,0.06)', 'rgba(255,255,255,0.03)']
            : ['rgba(0,0,0,0.08)', 'rgba(0,0,0,0.04)'];
        for (let i = 0; i < 20; i++) {
            const line = document.createElement('div');
            const top = (i / 20) * 100;
            const color = colors[i % 2];
            line.style.cssText = `position:absolute;top:${top}%;height:${Math.random() < 0.3 ? 3 : 1}px;left:-20%;width:140%;background:${color};transform:translateX(0)`;
            container.appendChild(line);
        }
        document.body.appendChild(container);
        return container;
    }

    barba.init({
        prevent: ({ el }) => {
            const href = el.getAttribute('href');
            if (!href || href === '#' || href.startsWith('#')) return true;
            return false;
        },
        transitions: [{
            name: 'stagger-transition',
            async leave(data) {
                removeHandednessHint();
                document.body.classList.add('is-transitioning');
                const speedLines = createSpeedLines();
                gsap.to(speedLines.children, {
                    x: '100%',
                    duration: 0.6,
                    ease: "power2.in",
                    stagger: { each: 0.03, from: "random" }
                });
                const isBack = data.trigger === 'back';
                await gsap.to(".overlay-column", {
                    duration: 0.7,
                    scaleX: 1,
                    transformOrigin: isBack ? "left" : "right",
                    ease: "power2.inOut",
                    stagger: 0.08
                });
                speedLines.remove();
                data.current.container.remove();
            },
            beforeEnter() {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
            },
            async afterEnter(data) {
                initGlobalScripts();
                // Re-apply language after Barba.js page transition
                const savedLang = localStorage.getItem('lang');
                if (savedLang) setLanguage(savedLang);
                await new Promise(r => setTimeout(r, 200));
                const isBack = data.trigger === 'back';
                await gsap.to(".overlay-column", {
                    duration: 0.8,
                    scaleX: 0,
                    transformOrigin: isBack ? "right" : "left",
                    ease: "power2.inOut",
                    stagger: { each: 0.08, from: isBack ? "end" : "start" }
                });
                document.body.classList.remove('is-transitioning');
            }
        }]
    });
    }

    window.addEventListener('load', initGlobalScripts);
});

let handednessHintTimer = null;

function removeHandednessHint() {
    const el = document.querySelector('.handedness-hint');
    if (el) el.remove();
    if (handednessHintTimer) {
        clearTimeout(handednessHintTimer);
        handednessHintTimer = null;
    }
}

function showHandednessHint() {
    removeHandednessHint();
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');
    if (!btnLeft || !btnRight) return;

    const isRight = document.body.classList.contains('is-right-handed');
    const targetBtn = isRight ? btnRight : btnLeft;
    const label = isRight ? 'ZURDO' : 'DIESTRO';

    const hint = document.createElement('div');
    hint.className = 'handedness-hint';
    hint.textContent = label;
    hint.style.cssText = 'position:fixed;padding:5px 12px;border-radius:6px;font-size:10px;font-weight:700;' +
        'font-family:"Space Grotesk",sans-serif;letter-spacing:1px;pointer-events:none;z-index:100000;' +
        'white-space:nowrap;background:#FF2D78;color:#fff;box-shadow:0 2px 8px rgba(0,0,0,0.25);';

    const rect = targetBtn.getBoundingClientRect();
    hint.style.left = (rect.left + rect.width / 2) + 'px';
    hint.style.top = (rect.bottom + 6) + 'px';

    const arrow = document.createElement('div');
    arrow.style.cssText = 'position:absolute;bottom:100%;left:50%;transform:translateX(-50%);' +
        'width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;' +
        'border-bottom:5px solid #FF2D78;';
    hint.prepend(arrow);

    document.body.appendChild(hint);
    gsap.from(hint, { opacity: 0, y: -6, duration: 0.25, ease: "power2.out" });

    handednessHintTimer = setTimeout(removeHandednessHint, 8000);
}

function updateHandednessLabels() {
    const nameLeft = document.querySelector('#btn-left .btn-main-name');
    const nameRight = document.querySelector('#btn-right .btn-main-name');
    if (!nameLeft || !nameRight) return;
    const isSpace = document.body.classList.contains('modo-bio-active');
    nameLeft.textContent = isSpace ? 'Babor' : 'Goofy';
    nameRight.textContent = isSpace ? 'Estribor' : 'Regular';
}
function updateMobileButtons() {
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');
    if (!btnLeft || !btnRight) return;
    if (window.innerWidth >= 480) {
        btnLeft.style.display = '';
        btnRight.style.display = '';
        return;
    }
    const isRight = document.body.classList.contains('is-right-handed');
    btnLeft.style.display = isRight ? 'none' : '';
    btnRight.style.display = isRight ? '' : 'none';
}
function updateHandedness(isRight) {
    const elements = ".hero-top-row, .custom-nav, .top-utility-bar, .win-task-container";

    gsap.to(elements, {
        opacity: 0,
        y: 5,
        duration: 0.2,
        onComplete: () => {
            if (isRight) {
                document.body.classList.add('is-right-handed');
                localStorage.setItem('userHandedness', 'right');
            } else {
                document.body.classList.remove('is-right-handed');
                localStorage.setItem('userHandedness', 'left');
            }
            updateMobileButtons();
            showHandednessHint();

            gsap.fromTo(elements,
                { opacity: 0, y: -5 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
            );
        }
    });
}
window.addEventListener('resize', () => {
    gsap.killTweensOf(".project-card");
    updateMobileButtons();
});
