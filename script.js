document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (!themeToggle || !body) {
        return;
    }

    const labels = {
        dev: 'Passer en mode UX/UI',
        design: 'Passer en mode Dev'
    };

    const applyTheme = (theme) => {
        body.setAttribute('data-theme', theme);
        themeToggle.textContent = labels[theme];
        themeToggle.setAttribute('aria-pressed', String(theme === 'design'));
    };

    const currentTheme = body.dataset.theme === 'design' ? 'design' : 'dev';
    applyTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        const nextTheme = body.dataset.theme === 'dev' ? 'design' : 'dev';
        applyTheme(nextTheme);
    });
});