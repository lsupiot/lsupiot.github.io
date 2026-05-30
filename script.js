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

    const updateCanvas = (sectionKey) => {
        const section = sections[sectionKey];
        if (!section) return;

        canvasTitle.textContent = section.title;
        canvasLead.textContent = section.lead;
        canvasText.textContent = section.text;
        canvasImageCaption.textContent = section.imageCaption;
        canvasIframe.setAttribute('src', section.iframeSrc);
    };

    const setActiveNav = (button) => {
        navItems.forEach((item) => item.classList.remove('active'));
        button.classList.add('active');
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

    document.querySelector('.nav-list').addEventListener('click', (event) => {
        const target = event.target.closest('.nav-item');
        if (!target) return;
        setActiveNav(target);
        updateCanvas(target.dataset.section);
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

    root.style.setProperty('--content-scale', fontScale);
    updateCanvas('accueil');
    setTheme(body.dataset.theme ?? 'dark');
});
