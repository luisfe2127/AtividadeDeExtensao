var alturaOriginal = '50px';
var alturaAumentada = '900px';
var isAlturaAumentada = false;

var isAlturaAumentada = false;

function toggleParagrafos() {
    var testElement = document.getElementById('test');
    var paragrafos = testElement.getElementsByClassName('info');

    if (paragrafosAdicionados) {
        // Remover os parágrafos
        while (paragrafos[0]) {
            paragrafos[0].parentNode.removeChild(paragrafos[0]);
        }
        testElement.classList.remove('expandido');
    } else {
        // Adicionar parágrafos
        for (var i = 1; i <= 3; i++) {
            var novoParagrafo = document.createElement('p');
            novoParagrafo.className = 'info';
            novoParagrafo.textContent = 'Parágrafo ' + i + ' adicionado';
            testElement.appendChild(novoParagrafo);
        }
        testElement.classList.add('expandido');
    }

    paragrafosAdicionados = !paragrafosAdicionados;
}