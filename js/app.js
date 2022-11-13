
var buttonAdd = document.getElementById('postar');

buttonAdd.addEventListener('click', function (event) {
    let titulo = document.getElementById('titulo');
    let img = document.getElementById('url');
    let desc = document.getElementById('descricao');
    let container = document.querySelector('#conteiner')
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

    event.preventDefault()

    //validações
    if (titulo.value.length < 4 || desc.value.length < 4 || img.value == '') {
        return '';
    } else {
        container.innerHTML += item;
        container.scrollTo(0, -Math.abs(container.scrollHeight));
    } 
});

window.addEventListener('keyup', function (){
    let titulo = document.getElementById('titulo');
    let img = document.getElementById('url');
    let desc = document.getElementById('descricao');

    if (titulo.value.length < 4 || desc.value.length < 4 || img.value == '') {
        buttonAdd.disabled = true;
    } else {
        buttonAdd.disabled = false;
    } 
})

