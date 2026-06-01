document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const navItems = document.querySelectorAll('.nav-item');
    const canvasTitle = document.getElementById('canvas-title');
    const canvasLead = document.getElementById('canvas-lead');
    const canvasText = document.getElementById('canvas-text');
    const canvasImageCaption = document.getElementById('canvas-image-caption');
    const canvasIframe = document.getElementById('canvas-iframe');
    const canvasIframeCard = document.getElementById('canvas-prototype-card');
    const canvasMedia = document.getElementById('canvas-media');
    const layerListElement = document.querySelector('.layer-list');
    const themeButton = document.querySelector('[data-action="toggle-theme"]');
    const daltonismSelect = document.getElementById('daltonism-select');
    const homeButton = document.getElementById('home-button');
    const contactButton = document.getElementById('contact-button');
    const root = document.documentElement;

    const sections = {
        accueil: {
            title: 'Présentation & Parcours',
            useHTML: true,
            showIframe: false,
            htmlContent: `
                <div class="profile-grid">
                    <div>
                        <p class="lead-copy" id="canvas-lead"><strong>Je m'appelle Lucas et je suis Développeur Full-Stack de formation, avec une passion grandissante pour l'UX/UI Design.</strong></p>
                        <p id="canvas-text">Je souhaite combiner l'exigence créative du design avec mon bagage technique pour concevoir des solutions immersives, performantes et accessibles à tous.</p>
                    </div>
                    <div class="hero-card accent-panel">
                        <h3>Profil hybride</h3>
                        <p>Un parcours technique et design orienté vers la pratique, le prototypage et l'expérience utilisateur.</p>
                    </div>
                </div>

                <section id="area-parcours" class="profile-section">
                    <h3>Mon parcours</h3>
                    <p>Depuis petit, j'adore la tech et surtout les jeux vidéo. On m'oriente alors vers l'informatique : c'est là que mon parcours dans ce domaine a débuté. À la sortie du collège, voulant rentrer dans le concret, je pars en bac pro informatique. Une année intéressante, mais manquant de théorie. Je me réoriente donc vers un bac techno STI2D où je viens combler ma pratique avec de la théorie.</p>
                    <p>Par la suite, j'intègre le BUT Informatique à l'IUT de La Rochelle qui mêle pratique et théorie. Durant mes 3 années là-bas, j'ai acquis de solides bases en réalisation d'applications et en programmation. J'y ai découvert trois grands domaines du développement : l'applicatif, le web et le mobile. J'ai également eu la chance de pouvoir faire ma troisième année en alternance sur de l'applicatif C++ à destination du mobile. C'est au fil de mes études que j'ai eu un véritable déclic pour l'UX/UI, notamment lors de mon projet de fin d'études. Désireux d'approfondir cette passion naissante, je pars à l'autre bout de la France en Moselle, et plus précisément à Metz, en Master d'Ergonomie.</p>                    <div class="profile-timeline">
                        <div><strong>Bac pro Informatique :</strong> premières bases en pratique, découverte du développement et de l'univers tech.</div>
                        <div><strong>Bac STI2D :</strong> apprentissage de la théorie pour mieux comprendre les fondations techniques.</div>
                        <div><strong>BUT Informatique à La Rochelle :</strong> trois années pour acquérir de solides bases en réalisation d'applications et en programmation.</div>
                        <div><strong>Alternance en applicatif C++ mobile :</strong> immersion professionnelle axée sur les solutions mobiles.</div>
                        <div><strong>Master d'Ergonomie à Metz :</strong> exploration de la psychologie cognitive, de la méthodologie des tests utilisateurs, des neurosciences comportementales, de l'ergonomie organisationnelle et de l'anatomie du corps humain.</div>
                    </div>
                    <p class="section-note">À travers ce long périple, j'ai découvert que j'aspirais surtout à la pratique concrète : le besoin de prototypage, de conception et de création m'a amené à arrêter cette formation trop théorique.</p>
                </section>

                <section id="area-experiences" class="profile-section">
                    <h3>Expériences significatives</h3>
                    <ul class="profile-list">
                        <li><strong>Musée d'Histoire Naturelle de La Rochelle :</strong> en tant que Product Owner et Développeur Mobile, j'ai co-créé Scan'Art, une application gamifiée pour digitaliser le parcours visiteur. J'y ai découvert Figma pour la conception de l'Atomic Design, organisé des tests itératifs avec le public, et participé au développement sous Flutter.</li>
                        <li><strong>Skydrone Robotics :</strong> pendant mon alternance, j'ai analysé et refondu l'ergonomie des interfaces de télémétrie de drones. Mon travail a consisté à traduire les besoins du terrain en maquettes fonctionnelles puis à les intégrer techniquement, avec pour but de réduire la charge cognitive des pilotes et de faciliter les missions de vol.</li>
                        <li><strong>Smart-Campus :</strong> j'ai œuvré en tant que Webdesigner et Développeur Full-Stack pour concevoir un dashboard web interactif, en mettant l'accent sur la Data Visualization.</li>
                    </ul>
                </section>

                <section id="area-objectif" class="profile-section">
                    <h3>Mon objectif</h3>
                    <p>Aujourd'hui, je suis activement à la recherche d'une alternance en UI / Webdesign pour une durée d'un an. Je suis prêt à m'investir pour transformer des besoins complexes en interfaces fluides, de la phase d'idéation jusqu'à l'intégration technique.</p>
                </section>
            `,
            imageCaption: 'Lucas Supiot - Développeur Front-end et UX/UI Designer',
            iframeSrc: 'about:blank'
        },
        projets: {
            title: '💻 Développement Full-Stack',
            useHTML: true,
            showIframe: false,
            htmlContent: `
                <p class="lead-copy" id="canvas-lead">Mon approche du développement est guidée par l'optimisation, la maintenabilité et la qualité de l'interface utilisateur.</p>
                <p id="canvas-text">Je couvre toute la chaîne technique, avec un focus particulier sur l'architecture, la fiabilité et la performance des applications.</p>

                <h3 id="area-scanart">⚙️ Scan'Art : Architecture Mobile et Backend</h3>
                <p>Sur ce projet de 6 mois, j'ai occupé le rôle de <strong>Product Owner</strong> (méthode Agile/Scrum) et de Développeur Mobile.</p>
                <ul>
                    <li><strong>Front-End (Flutter/Dart)</strong> : Intégration front-end avec une architecture Clean Code respectant les maquettes Figma.</li>
                    <li><strong>Tests et Qualité</strong> : Rédaction de tests BDD (Behavior Driven Development) et analyse via SonarQube (89.8% de couverture de code, zéro vulnérabilité).</li>
                    <li><strong>Back-End Optimisé</strong> : API PHP conteneurisée via Docker Multi-stage. Optimisation du stockage des ressources avec un bucket MinIO et conversion des images au format WebP.</li>
                </ul>
                <figure class="canvas-image-card">
                    <img src="assets/Scanart.png" alt="Capture d'écran du miro de Scan'Art" />
                    <figcaption>Scan'Art — Tableau de bord et gestion du travail.</figcaption>
                </figure>

                <h3 id="area-skydrone">🚁 Skydrone Robotics (Alternance)</h3>
                <p>Développement d'applications et d'interfaces pour l'industrie des drones.</p>
                <ul>
                    <li>Traduction des besoins terrain complexes en maquettes fonctionnelles.</li>
                    <li>Développement et intégration de composants graphiques en <strong>C++, QML et Qt</strong> pour la station de contrôle.</li>
                </ul>
                <figure class="canvas-image-card">
                    <img src="assets/qqgroundcontrol.png" alt="Capture d'écran de QGroundControl" />
                    <figcaption>QGroundControl — interface de contrôle du drone en alternance.</figcaption>
                </figure>

                <h3 id="area-smart-campus">📊 Smart-Campus (Projet Web)</h3>
                <ul>
                    <li>Intégration HTML5, CSS3 et JavaScript.</li>
                    <li><strong>Data Visualization</strong> : utilisation de la librairie Chart.js pour concevoir des graphiques interactifs.</li>
                    <li>Conception d'un système d'alertes intelligentes basé sur une micro-copy soignée.</li>
                </ul>
            `,
            imageCaption: 'Architecture logicielle et développement front-end',
            iframeSrc: 'about:blank'
        },
        ux: {
            title: '🎨 Projets UX/UI et Prototypage',
            useHTML: true,
            showIframe: true,
            htmlContent: `
                <p class="lead-copy" id="canvas-lead">Mes conceptions reposent sur des méthodes éprouvées : Design Thinking, création de Personas, User Journeys et respect des normes d'accessibilité (WCAG/RGAA).</p>
                <p id="canvas-text">Je mets en valeur la réflexion ergonomique dans chaque projet, du prototypage à la validation sur le terrain.</p>

                <h3 id="area-scanart">🏛️ Scan'Art : L'expérience muséale interactive</h3>
                <p><strong>Contexte :</strong> Projet académique pour le Musée d'Histoire Naturelle de La Rochelle.</p>
                <p><strong>Objectifs :</strong> Fluidifier la visite des enfants et donner envie de revenir grâce à des challenges, le tout jouable en totale autonomie (sans médiateurs) et hors ligne.</p>

                <ul>
                    <li><strong>UI Design et; Atomic Design :</strong> Conception d'une bibliothèque de composants graphiques sur Figma pour assurer la parfaite cohérence visuelle de l'application.</li>
                    <li><strong>Personnalisation et Gamification :</strong> Création d'une interface de création d'avatar pour immerger l'enfant dans l'aventure.</li>
                    <li><strong>Recherche et Tests Utilisateurs :</strong> Organisation de sessions de tests itératifs directement avec les visiteurs du musée pour ajuster l'ergonomie et valider l'histoire.</li>
                </ul>

                <h4>Démonstration du parcours utilisateur :</h4>
                <p><em>(Aperçu vidéo du gameplay final interactif)</em></p>
                <video controls preload="metadata">
                    <source src="assets/Scan'Art_gameplay.mp4" type="video/mp4">
                    Votre navigateur ne supporte pas la lecture vidéo.
                </video>
                <p><a href="assets/scanart_presentation.pdf" target="_blank" rel="noopener">📄 Consulter le PDF de présentation Scan'Art</a></p>

                <h3 id="area-metz-tour">📍 Metz Tour : Gamification et Exploration Urbaine</h3>
                <p><strong>Le défi :</strong> Comment inciter les touristes et les habitants de Metz à pratiquer une activité physique tout en découvrant le patrimoine de leur ville ?</p>
                <p><strong>La solution :</strong> Nous avons conçu l'interface d'une application mobile qui transforme la balade en jeu : carte interactive, filtres de lieux et badges de succès.</p>
                <p>Vous pouvez naviguer dans le prototype interactif ci-dessous :</p>
            `,
            imageCaption: 'UX/UI prototypes et parcours utilisateur',
            iframeSrc: 'https://embed.figma.com/proto/jrErI9CJrKEsVj4S0vZ2EP/Metz-Tour?page-id=1139%3A2404&node-id=1139-2405&p=f&viewport=359%2C181%2C0.16&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1139%3A2405&embed-host=share'
        },
        contact: {
            title: '📬 Me Contacter',
            useHTML: true,
            showIframe: false,
            htmlContent: `
                <p class="lead-copy" id="canvas-lead">Si mon profil correspond à vos besoins pour une <strong>Alternance UI / Webdesigner de 1 an</strong>, n'hésitez pas à me contacter directement !</p>
                <p id="canvas-text">Je suis disponible pour échanger sur vos projets de développement web, UX/UI et design d'interface.</p>

                <ul>
                    <li>📧 <strong>Email :</strong> <a href="mailto:lucas.supiot2@gmail.com">lucas.supiot2@gmail.com</a></li>
                    <li>💼 <strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/lucas-supiot/" target="_blank" rel="noopener">Lucas Supiot</a></li>
                    <li>💻 <strong>GitHub :</strong> <a href="https://github.com/lsupiot" target="_blank" rel="noopener">lsupiot</a></li>
                </ul>
            `,
            imageCaption: 'Contact et opportunités',
            iframeSrc: 'about:blank'
        }
    };

    let fontScale = 1;
    const minScale = 0.85;
    const maxScale = 1.35;
    const scaleStep = 0.08;

    const getHighlightTargets = () => [canvasTitle, document.getElementById('canvas-lead'), document.getElementById('canvas-text')].filter(Boolean);

    const clearHighlights = () => {
        document.querySelectorAll('.highlighted-text').forEach((element) => {
            element.classList.remove('highlighted-text');
        });
    };

    const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const updateCanvas = (sectionKey) => {
        const section = sections[sectionKey];
        if (!section) return;

        canvasTitle.textContent = section.title;
        
        const canvasCopy = document.querySelector('.canvas-copy');
        
        if (section.useHTML) {
            // Pour les sections avec contenu HTML enrichi
            canvasCopy.innerHTML = section.htmlContent;
        } else {
            // Pour les sections classiques
            if (canvasLead && canvasText) {
                canvasLead.textContent = section.lead;
                canvasText.textContent = section.text;
                getHighlightTargets().forEach((element) => {
                    element.dataset.originalText = element.textContent;
                });
            } else {
                // Créer une structure simple si les éléments n'existent pas
                canvasCopy.innerHTML = `
                    <p class="lead-copy" id="canvas-lead">${section.lead}</p>
                    <p id="canvas-text">${section.text}</p>
                `;
            }
        }

        if (canvasImageCaption) {
            canvasImageCaption.textContent = section.imageCaption;
        }

        const hasIframe = section.showIframe && section.iframeSrc && section.iframeSrc !== 'about:blank';
        if (canvasIframeCard) {
            canvasIframeCard.style.display = hasIframe ? 'flex' : 'none';
        }
        if (canvasMedia) {
            canvasMedia.style.display = hasIframe ? 'grid' : 'none';
        }
        if (canvasIframe) {
            canvasIframe.setAttribute('src', hasIframe ? section.iframeSrc : 'about:blank');
        }

        clearHighlights();
        updateLayerList(sectionKey);
    };

    const setActiveNav = (sectionKey) => {
        navItems.forEach((item) => {
            item.classList.toggle('active', item.dataset.section === sectionKey);
        });
    };

    const updateLayerList = (sectionKey) => {
        if (!layerListElement) return;

        const headings = Array.from(document.querySelectorAll('.canvas-copy h3'));
        if (!headings.length) {
            if (sectionKey === 'contact') {
                layerListElement.innerHTML = `
                    <li>
                        <button class="layer-item" type="button" data-scroll-target="canvas-title">Contact</button>
                    </li>
                `;
                return;
            }
            layerListElement.innerHTML = '<li class="layer-placeholder">Aucun titre h3 disponible</li>';
            return;
        }

        layerListElement.innerHTML = headings.map((heading) => {
            const headingId = heading.id || heading.textContent.trim().toLowerCase().replace(/[^\w-]+/g, '-');
            if (!heading.id) {
                heading.id = headingId;
            }
            return `
                <li>
                    <button class="layer-item" type="button" data-scroll-target="${heading.id}">${heading.textContent}</button>
                </li>
            `;
        }).join('');
    };

    const scrollToFirstHighlight = () => {
        const first = document.querySelector('.highlighted-text');
        if (first) {
            first.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const setTheme = (theme) => {
        body.dataset.theme = theme;
        if (!themeButton) return;

        const nextText = theme === 'dark' ? 'Activer mode clair' : 'Activer mode sombre';
        themeButton.textContent = nextText;
        themeButton.setAttribute('aria-pressed', String(theme === 'light'));
    };

    const adjustFontScale = (increase) => {
        fontScale = increase ? Math.min(maxScale, fontScale + scaleStep) : Math.max(minScale, fontScale - scaleStep);
        root.style.setProperty('--content-scale', fontScale);
    };

    const updateToggleState = (button, className) => {
        const isActive = body.classList.toggle(className);
        button.setAttribute('aria-pressed', String(isActive));
    };

    const toggleContrast = (button) => {
        const isActive = body.classList.toggle('contrast-high');
        button.setAttribute('aria-pressed', String(isActive));
    };

    const setDaltonism = (value) => {
        body.dataset.daltonism = value;
    };

    const activateSection = (sectionKey) => {
        setActiveNav(sectionKey);
        updateCanvas(sectionKey);
    };

    document.querySelector('.nav-list').addEventListener('click', (event) => {
        const target = event.target.closest('.nav-item');
        if (!target) return;
        activateSection(target.dataset.section);
    });

    const layerContainer = document.querySelector('.layer-list');
    if (layerContainer) {
        layerContainer.addEventListener('click', (event) => {
            const target = event.target.closest('.layer-item');
            if (!target) return;
            const scrollTarget = target.dataset.scrollTarget;
            if (!scrollTarget) return;
            const element = document.getElementById(scrollTarget);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                element.focus({ preventScroll: true });
            }
        });
    }

    document.querySelector('.panel-right').addEventListener('click', (event) => {
        const button = event.target.closest('[data-action]');
        if (!button) return;
        const action = button.dataset.action;

        switch (action) {
            case 'toggle-theme':
                setTheme(body.dataset.theme === 'dark' ? 'light' : 'dark');
                break;
            case 'increase-font':
                adjustFontScale(true);
                break;
            case 'decrease-font':
                adjustFontScale(false);
                break;
            case 'toggle-contrast':
                toggleContrast(button);
                break;
            case 'toggle-line-spacing':
                updateToggleState(button, 'line-spacing');
                break;
            case 'toggle-letter-spacing':
                updateToggleState(button, 'letter-spacing');
                break;
            default:
                break;
        }
    });

    if (daltonismSelect) {
        daltonismSelect.addEventListener('change', (event) => {
            setDaltonism(event.target.value);
        });
    }

    if (homeButton) {
        homeButton.addEventListener('click', () => activateSection('accueil'));
    }

    if (contactButton) {
        contactButton.addEventListener('click', () => activateSection('contact'));
    }

    root.style.setProperty('--content-scale', fontScale);
    updateCanvas('accueil');
    setTheme(body.dataset.theme ?? 'dark');
});
