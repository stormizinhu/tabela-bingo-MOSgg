window.onload = function() {
    let newTitle = prompt("Digite o título do bingo:");
    if (newTitle) {
        document.getElementById('bingoTitle').textContent = newTitle;
    }
};

// Função para preencher os números em ordem crescente
const columns = {
    B: Array.from({length: 15}, (_, i) => i + 1),
    I: Array.from({length: 15}, (_, i) => i + 16),
    N: Array.from({length: 15}, (_, i) => i + 31),
    G: Array.from({length: 15}, (_, i) => i + 46),
    O: Array.from({length: 15}, (_, i) => i + 61)
};

// Criar containers separados para cada letra e seus números
for (let key in columns) {
    let bingoContainer = document.createElement('div');
    bingoContainer.className = 'bingo-container';

    // Adicionar cabeçalho da coluna
    let header = document.createElement('div');
    header.className = 'bingo-header';
    header.textContent = key;
    bingoContainer.appendChild(header);

    // Adicionar números da coluna
    for (let i = 0; i < columns[key].length; i++) {
        let card = document.createElement('div');
        card.className = 'bingo-card';
        card.textContent = columns[key][i];
        card.onclick = function() {
            card.classList.toggle('clicked');
        };
        bingoContainer.appendChild(card);
    }

    // Adicionar o container principal
    document.querySelector('.main-container').appendChild(bingoContainer);
};

// Função para capturar a tela e salvar como PNG
function captureScreen() {
    let fileName = prompt("Digite o nome do arquivo (sem extensão):", "bingo");
    if (fileName) {
        html2canvas(document.getElementById('mainContainer')).then(function(canvas) {
            let link = document.createElement('a');
            link.download = `${fileName}.png`;
            link.href = canvas.toDataURL();
            link.click();
        });
    }
}

// Função para limpar todos os cards marcados
function clearMarked() {
    let markedCards = document.querySelectorAll('.bingo-card.clicked');
    markedCards.forEach(card => card.classList.remove('clicked'));
}
