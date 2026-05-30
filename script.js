document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const navItems = document.querySelectorAll('.nav-item');
    const canvasTitle = document.getElementById('canvas-title');
    const canvasLead = document.getElementById('canvas-lead');
    const canvasText = document.getElementById('canvas-text');
    const canvasImageCaption = document.getElementById('canvas-image-caption');
    const canvasIframe = document.getElementById('canvas-iframe');
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
            title: 'Système de portfolio interactif',
            lead: 'Ici commence ton univers professionnel, prêt à accueillir projets, parcours et prototypes.',
            text: 'Ce canvas est organisé pour te permettre d’ajouter des textes structurés, des captures d’écran et un aperçu d’interface embarqué. C’est un espace prêt à mettre en valeur ton travail UX/UI et tes réalisations front-end.',
            imageCaption: 'Visuel d’un premier projet.',
            iframeSrc: 'about:blank'
        },
        projets: {
            title: 'Projets sélectionnés',
            lead: 'Un aperçu de tes réalisations les plus marquantes, avec un focus sur la technique et le design.',
            text: 'Présente des cas concrets, les technologies utilisées et les résultats obtenus. Ce template peut facilement accueillir ton portfolio de développement et d’ergonomie.',
            imageCaption: 'Placeholder pour un projet technique.',
            iframeSrc: 'about:blank'
        },
        ux: {
            title: 'UX et design centré utilisateur',
            lead: 'Montre ton expertise en conception d’interfaces, en tests utilisateurs et en accessibilité.',
            text: 'Utilise cet espace pour raconter ta démarche, les personas, les prototypes et l’optimisation des parcours. Les contrôles de droite modifient l’affichage du canvas en direct.',
            imageCaption: 'Placeholder pour un projet UX.',
            iframeSrc: 'about:blank'
        },
        contact: {
            title: 'Entrer en contact',
            lead: 'Client, recruteur ou partenaire : voici ta zone de présentation de contact et de CTA.',
            text: 'Ajoute un court message, ton adresse e-mail, tes réseaux et un lien vers ton CV. Le format est adaptable à toutes les sections de ton portfolio.',
            imageCaption: 'Visuel de contact / présentation.',
            iframeSrc: 'about:blank'
        }
    };

    let fontScale = 1;
    const minScale = 0.85;
    const maxScale = 1.35;
    const scaleStep = 0.08;

    const highlightTargets = [canvasTitle, canvasLead, canvasText];

    const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const clearHighlights = () => {
        highlightTargets.forEach((element) => {
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
        canvasLead.textContent = section.lead;
        canvasText.textContent = section.text;
        canvasImageCaption.textContent = section.imageCaption;
        canvasIframe.setAttribute('src', section.iframeSrc);

        highlightTargets.forEach((element) => {
            element.dataset.originalText = element.textContent;
        });
        clearHighlights();
    };

    const setActiveNav = (sectionKey) => {
        navItems.forEach((item) => {
            item.classList.toggle('active', item.dataset.section === sectionKey);
        });
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

        highlightTargets.forEach((element) => {
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
