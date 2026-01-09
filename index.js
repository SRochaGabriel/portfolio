// Associando o botão de toggle a uma variável
const btn_menu_toggle = document.getElementById('btn_menu_toggle');

// Associando a div com os links de navegação a uma variável
const navbarLinks = document.querySelector('.navbar-links');

// Associando todos os links do nav a uma variável
const navLinks = document.querySelectorAll('.navbar-links a');

// Acessando a div 'projetos_display'
const projetosDisplay = document.querySelector('.swiper-wrapper');

// Ao botão ser clicado, a div 'navbar-links' e o próprio botão recebem ou perdem a classe 'aberto'
btn_menu_toggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('aberto');
    btn_menu_toggle.classList.toggle('aberto');
});

// Para cada link na variável 'navLinks', um event listener de click é adicionado e, ao ser ativado, remove a classe 'aberto' da div 'navbar-links' e do botão
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.classList.remove('aberto');
        btn_menu_toggle.classList.remove('aberto');
    });
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 2,
        },
        425: {
            slidesPerView: 1,
        }
    }
});

// Buscando os itens de projetos.json e gerando os cards que exibem os projetos
fetch('projetos.json')
.then(res => res.json())
.then(projects => {
    projects.forEach(project => {
        console.log(project)
        projetosDisplay.innerHTML += `
            <div class="swiper-slide">
                <div class="card_projeto" id="${project.id}">
                    <img class="projeto_cover" src="${project.image}" alt="Imagem do projeto">
                    <div class="card_info">
                        <div class="card_projeto_header">
                            <h3>${project.name}</h3>
                            <p>${project.desc}</p>
                        </div>
                        <div class="card_projeto_body"></div>
                        <div class="card_projeto_footer">
                            <a href="${project.deploy}" target="_blank">
                                <img class="link_projeto_icon" src="./imagens/link_logo.png" alt="Link deploy">
                                <p>Acesse o site</p>
                            </a>
                            <a href="${project.rep}" target="_blank">
                                <img class="link_projeto_icon" src="./imagens/github_logo_white.png" alt="Link Github">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        for(let item of project.stack) {
            console.log(item)
        }

        if (document.querySelector(`#${project.id} .card_projeto_body`)) {
            for (let item of project.stack) {
                document.querySelector(`#${project.id} .card_projeto_body`).innerHTML += `
                    <p>${item}</p>
                `;
            }
        }
    });
})