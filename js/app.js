
var buttonAdd = document.getElementById('postar');

buttonAdd.addEventListener('click', function (event) {
    event.preventDefault()
})

buttonAdd.addEventListener('click', function addCard() {
    let titulo = document.getElementById('titulo');
    let img = document.getElementById('url');
    let desc = document.getElementById('descricao');
    let container = document.getElementById('container')
    let item =
        `
    <div class="card">
        <img src="${img.value}" class="imagem">
        <h3>${titulo.value}</h3>
        <p class="description">
        ${desc.value}
        </p>
        
    </div>
    `;

    if (titulo.value === '' || titulo.value.length < 4) {
        buttonAdd.disabled = true;
        return '';
    } else {
        container.innerHTML += item;
    }
});

window.addEventListener('click', function () {
    if (titulo.value === '' || titulo.value.length < 4) {
        buttonAdd.disabled = true;
        return '';
    } else {
        buttonAdd.disabled = false;
    }
})

