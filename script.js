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
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchNote = document.getElementById('search-note');
    const root = document.documentElement;

    const sections = {
        accueil: {
            title: '👋 Bonjour, je suis Lucas SUPIOT',
            useHTML: true,
            showIframe: false,
            htmlContent: `
                <p class="lead-copy" id="canvas-lead"><strong>Développeur Front-end &amp; UX/UI Designer</strong></p>
                <p id="canvas-text">Issu d'un BUT Informatique, j'ai eu un véritable déclic pour l'UX/UI en créant des Design Systems. Mon objectif est de lier l'exigence créative de l'UX/UI à mon bagage de développeur pour concevoir des plateformes numériques immersives, performantes et accessibles à tous.</p>

                <h3 id="area-parcours">🧠 Mon Parcours : De la technique à l'humain</h3>
                <ul>
                    <li><strong>Technique :</strong> Diplômé d'un BUT Informatique (Parcours Réalisation d'applications) à l'IUT de La Rochelle.</li>
                    <li><strong>Ergonomie :</strong> J'ai ensuite intégré un Master 1 en Ergonomie à l'UFR SHS de Metz pour approfondir la psychologie cognitive et les méthodologies de tests utilisateurs.</li>
                    <li><strong>Le Choix du concret :</strong> J'ai fait le choix d'arrêter ce master car son approche était trop théorique, ce qui a confirmé mon besoin viscéral de pratique et de création concrète.</li>
                </ul>

                <h3 id="area-experiences">💼 Expériences Professionnelles</h3>
                <ul>
                    <li><strong>Skydrone Robotics (Alternance)</strong> : Analyse et refonte des interfaces de télémétrie de stations de contrôle de drones pour réduire la charge cognitive des pilotes.</li>
                    <li><strong>Musée d'Histoire Naturelle de La Rochelle</strong> : Digitalisation du parcours visiteur via la création de l'application mobile <strong>Scan'Art</strong>.</li>
                    <li><strong>Projet Smart-Campus</strong> : Maquettage et conception d'un dashboard web axé sur la Data Visualization et l'UX (micro-copy).</li>
                </ul>

                <h3 id="area-objectif">🎯 Mon Objectif Actuel</h3>
                <p>Je suis activement à la recherche d'une <strong>alternance UI / Webdesigner d'une durée de 1 an</strong>, disponible sur Strasbourg et dans la région Grand Est.</p>
            `,
            imageCaption: 'Lucas Supiot - Développeur Front-end &amp; UX/UI Designer',
            iframeSrc: 'about:blank'
        },
        projets: {
            title: '💻 Ingénierie &amp; Développement Front-End',
            useHTML: true,
            showIframe: false,
            htmlContent: `
                <p class="lead-copy" id="canvas-lead">Mon approche du développement est guidée par l'optimisation, la maintenabilité et la qualité de l'interface utilisateur.</p>
                <p id="canvas-text">Je couvre toute la chaîne technique, avec un focus particulier sur l'architecture, la fiabilité et la performance des applications.</p>

                <h3 id="area-scanart">⚙️ Scan'Art : Architecture Mobile &amp; Backend</h3>
                <p>Sur ce projet de 6 mois, j'ai occupé le rôle de <strong>Product Owner</strong> (méthode Agile/Scrum) et de Développeur Mobile.</p>
                <ul>
                    <li><strong>Front-End (Flutter/Dart)</strong> : Intégration front-end avec une architecture Clean Code respectant les maquettes Figma.</li>
                    <li><strong>Tests &amp; Qualité</strong> : Rédaction de tests BDD (Behavior Driven Development) et analyse via SonarQube (89.8% de couverture de code, zéro vulnérabilité).</li>
                    <li><strong>Back-End Optimisé</strong> : API PHP conteneurisée via Docker Multi-stage. Optimisation du stockage des ressources avec un bucket MinIO et conversion des images au format WebP.</li>
                </ul>

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
            title: '🎨 Projets UX/UI &amp; Prototypage',
            useHTML: true,
            showIframe: true,
            htmlContent: `
                <p class="lead-copy" id="canvas-lead">Mes conceptions reposent sur des méthodes éprouvées : Design Thinking, création de Personas, User Journeys et respect des normes d'accessibilité (WCAG/RGAA).</p>
                <p id="canvas-text">Je mets en valeur la réflexion ergonomique dans chaque projet, du prototypage à la validation sur le terrain.</p>

                <h3 id="area-scanart">🏛️ Scan'Art : L'expérience muséale interactive</h3>
                <p><strong>Contexte :</strong> Projet académique pour le Musée d'Histoire Naturelle de La Rochelle.</p>
                <p><strong>Objectifs :</strong> Fluidifier la visite avec des enfants et donner envie de revenir grâce à des challenges, le tout jouable en totale autonomie (sans médiateurs) et hors ligne.</p>

                <ul>
                    <li><strong>UI Design &amp; Atomic Design :</strong> Conception d'une bibliothèque de composants graphiques sur Figma pour assurer la parfaite cohérence visuelle de l'application.</li>
                    <li><strong>Personnalisation &amp; Gamification :</strong> Création d'une interface de création d'avatar pour immerger l'enfant dans l'aventure.</li>
                    <li><strong>Recherche &amp; Tests Utilisateurs :</strong> Organisation de sessions de tests itératifs directement avec les visiteurs (et les enfants) pour ajuster l'ergonomie, valider l'histoire et faciliter la prise en main.</li>
                </ul>

                <h4>Démonstration du parcours utilisateur :</h4>
                <p><em>(Aperçu vidéo du gameplay final interactif)</em></p>
                <video controls preload="metadata">
                    <source src="assets/Scan'Art_gameplay.mp4" type="video/mp4">
                    Votre navigateur ne supporte pas la lecture vidéo.
                </video>
                <p><a href="assets/scanart_presentation.pdf" target="_blank" rel="noopener">📄 Consulter le PDF de présentation Scan'Art</a></p>

                <h3 id="area-metz-tour">📍 Metz Tour : Gamification &amp; Exploration Urbaine</h3>
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

    const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const clearHighlights = () => {
        getHighlightTargets().forEach((element) => {
            if (element.dataset.originalText) {
                element.textContent = element.dataset.originalText;
            }
        });
        if (searchNote) {
            searchNote.textContent = '';
        }
    };

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
        updateLayerList();
    };

    const setActiveNav = (sectionKey) => {
        navItems.forEach((item) => {
            item.classList.toggle('active', item.dataset.section === sectionKey);
        });
    };

    const updateLayerList = () => {
        if (!layerListElement) return;

        const headings = Array.from(document.querySelectorAll('.canvas-copy h3'));
        if (!headings.length) {
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

    const searchContent = (query) => {
        clearHighlights();

        if (!query.trim()) {
            if (searchNote) searchNote.textContent = 'Entrez un mot-clé pour rechercher.';
            return;
        }

        const escapedQuery = escapeRegExp(query.trim());
        const searchRegex = new RegExp(`(${escapedQuery})`, 'gi');
        let totalMatches = 0;

        getHighlightTargets().forEach((element) => {
            const original = element.dataset.originalText || element.textContent;
            const highlighted = original.replace(searchRegex, '<span class="highlighted-text">$1</span>');
            const matchCount = (original.match(new RegExp(escapedQuery, 'gi')) || []).length;
            totalMatches += matchCount;
            element.innerHTML = highlighted;
        });

        if (searchNote) {
            searchNote.textContent = totalMatches > 0 ? `${totalMatches} résultat(s) trouvé(s).` : 'Aucun résultat trouvé.';
        }

        if (totalMatches > 0) {
            scrollToFirstHighlight();
        }
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

    if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            searchContent(searchInput.value);
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            if (!searchInput.value.trim()) clearHighlights();
        });
    }

    root.style.setProperty('--content-scale', fontScale);
    updateCanvas('accueil');
    setTheme(body.dataset.theme ?? 'dark');
});
