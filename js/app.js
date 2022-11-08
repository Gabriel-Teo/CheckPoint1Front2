
var buttonAdd = document.getElementById('postar');

buttonAdd.addEventListener('click', function (event) {
    event.preventDefault()
})

buttonAdd.addEventListener('click', function addCard() {
    let titulo = document.getElementById('titulo');
    let img = document.getElementById('url');
    let desc = document.getElementById('descricao');
    let container = document.querySelector('#conteiner')
    let item = 
    `
    <div>
        <h2>${titulo.value}</h2>
        <img src="${img.value}">
        <p>
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

window.addEventListener('click', function (){
    if (titulo.value === '' || titulo.value.length < 4) {
        buttonAdd.disabled = true;
        return '';
    } else {
        buttonAdd.disabled = false;
    } 
})

