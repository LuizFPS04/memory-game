const EMOJIS = [
    "🤑", "🤑", "😈", "😈",
    "🤡", "🤡", "🤤", "🤤",
    "😻", "😻", "🐓", "🐓",
    "👽", "👽", "💩", "💩"
];

let embaralhar_emojis = EMOJIS.sort(() => Math.random() - 0.5);
let timer = document.querySelector(".timer");
let movimentoHTML = document.querySelector(".movimento");
let movimentos = 0;

for (var i = 0; i < EMOJIS.length; i++) {
    let carta = document.createElement('div');
    carta.className = 'item';
    carta.innerHTML = embaralhar_emojis[i];

    carta.onclick = function () {
        this.classList.add('virarCarta');
        
        setTimeout(function () {
            movimentos += 1;
            movimentoHTML.innerHTML = `Movimentos: ${movimentos}`; 
            let cartasViradas = document.querySelectorAll('.virarCarta');
            
            if (cartasViradas.length > 1) {
                let carta1 = cartasViradas[0];
                let carta2 = cartasViradas[1];

                if (carta1.innerHTML === carta2.innerHTML) {
                    carta1.classList.add('cartaIgual');
                    carta2.classList.add('cartaIgual');
                    carta1.classList.remove('virarCarta');
                    carta2.classList.remove('virarCarta');

                    if (document.querySelectorAll('.cartaIgual').length === EMOJIS.length) {
                        
                        alert('VOCÊ GANHOU UM IFONE 17!!!!!!');
                    }
                } else {
                    carta1.classList.remove('virarCarta');
                    carta2.classList.remove('virarCarta');
                }
            }
        }, 500);
    };

    document.querySelector('.jogo').appendChild(carta);
}


function startTimer() {
    let tempoEmSegundos = 0;

    let loop = setInterval(() => {
        tempoEmSegundos += 1;
        let minutos = Math.floor(tempoEmSegundos / 60);
        let segundos = tempoEmSegundos % 60;

        let tempoFormatado = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        timer.innerHTML = `Tempo: ${tempoFormatado}`;
    }, 1000);
}


startTimer();
