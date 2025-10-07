// Associando o botão de toggle a uma variável
const btn_menu_toggle = document.getElementById('btn_menu_toggle');

// Associando a div com os links de navegação a uma variável
const navbarLinks = document.querySelector('.navbar-links');

// Ao botão ser clicado, a div 'navbar-links' e o próprio botão recebem ou perdem a classe 'aberto'
btn_menu_toggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('aberto');
    btn_menu_toggle.classList.toggle('aberto');
});

// Associando todos os links do nav a uma variável
const navLinks = document.querySelectorAll('.navbar-links a');

// Para cada link na variável 'navLinks', um event listener de click é adicionado e, ao ser ativado, remove a classe 'aberto' da div 'navbar-links' e do botão
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.classList.remove('aberto');
        btn_menu_toggle.classList.remove('aberto');
    });
});