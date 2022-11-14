
// Variavel do botão de postar.
var buttonAdd = document.getElementById('postar');

// evento botão postar (Adiciona os posts caso passem na validação)
buttonAdd.addEventListener('click', function (event) {
    // variaveis (pegam o DOM responsável)
    let titulo = document.getElementById('titulo');
    let img = document.getElementById('url');
    let desc = document.getElementById('descricao');
    let container = document.querySelector('#conteiner')
    let form = document.getElementById('cardCreator');
    // variavel item (formato do post que sera postado)
    let item =
        `
    <div class="card">
        <img src="${img.value}">
        <h2>${titulo.value}</h2>
        <p>
        ${desc.value}
        </p>
    </div>
    `;
    //  previne o evento default do botão (reiniciar a pagina)
    event.preventDefault()
    // adiciona o post ao conteiner no html e puxa o scroll do mesmo pro topo
    container.innerHTML += item;
    container.scrollTo(0, -Math.abs(container.scrollHeight));

    if (screen.width <= 777) {
        form.style.display = 'none'
    }
});

// validações on keyup no navegador (possivel mal otimizado)
window.addEventListener('keyup', function () {
    let titulo = document.getElementById('titulo');
    let img = document.getElementById('url');
    let desc = document.getElementById('descricao');
    // (titulo e descrição < 4 caracteres e imagem não pode estar vazia)
    if (titulo.value.length < 4 || desc.value.length < 4 || img.value == '') {
        buttonAdd.disabled = true;
    } else {
        buttonAdd.disabled = false;
    }
})

// botão adicionado para funcionalidade mobile
var btnModal = document.getElementById('mobileModal')
btnModal.addEventListener('click', function () {
    let form = document.getElementById('cardCreator');
    if (form.style.display == 'none') {
        form.style.display = 'flex';
    } else {
        form.style.display = 'none'
    }
})