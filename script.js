const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dev') {
        body.setAttribute('data-theme', 'design');
        themeToggle.textContent = 'Passer en mode Dev';
    } 
    // Sinon, on repasse en mode Dev
    else {
        body.setAttribute('data-theme', 'dev');
        themeToggle.textContent = 'Passer en mode Design';
    }
});