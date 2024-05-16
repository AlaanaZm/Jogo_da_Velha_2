
let tabuleiro = {
    10: ['', '', '', '', '', '', '', '', ''],
    11: ['', '', '', '', '', '', '', '', ''],
    12: ['', '', '', '', '', '', '', '', ''],
    13: ['', '', '', '', '', '', '', '', ''],
    14: ['', '', '', '', '', '', '', '', ''],
    15: ['', '', '', '', '', '', '', '', ''],
    16: ['', '', '', '', '', '', '', '', ''],
    17: ['', '', '', '', '', '', '', '', ''],
    18: ['', '', '', '', '', '', '', '', '']
}

let tabuleiroMaior = ['', '', '', '', '', '', '', '', '']

let jogador = 1
let fim = false
let fimdejogo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let fimdejogoMaior = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

document.addEventListener('DOMContentLoaded', () => {

    let quadrados = document.querySelectorAll(".quadrado3")

    quadrados.forEach((x) => {
        x.addEventListener('click', click)
    })

})

function click(evento) {

    if (fim) {
        return
    }

    let posicao = evento.target.id
    let pai = evento.target.parentElement
    let avo = pai.parentElement.id


    if (tabuleiro[avo][posicao] == "") {
        tabuleiro[avo][posicao] = jogador;
        if (jogador == 1) {
            setjogador(this, jogador)
            verificarganhador(avo, jogador)
            jogador = 2
        } else {
            setjogador(this, jogador)
            verificarganhador(avo, jogador)
            jogador = 1
        }
    }
}

function setjogador(quadradoMenor, player) {

    if (player == 1) {
        quadradoMenor.innerHTML = "<div class='o'></div>"

    } else {
        quadradoMenor.innerHTML = "<div class='x'></div>"

    }
}

function verificarganhador(quadradoMenor, ganhador) {
    let cont = 0
    for (let i = 0; i < fimdejogo.length; i++) {
        let seq = fimdejogo[i]
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (tabuleiro[quadradoMenor][pos1] == tabuleiro[quadradoMenor][pos2] && tabuleiro[quadradoMenor][pos1] == tabuleiro[quadradoMenor][pos3] && tabuleiro[quadradoMenor][pos1] != "") {
            setTimeout(() => {
                alert("O Jogador " + ganhador + " ganhou este bloco")
            }, 12);
            setJogadorMaior(quadradoMenor, ganhador)
        }

        if (tabuleiro[quadradoMenor][i] != "") {
            cont = cont + 1
        }


    }
    if (cont == fimdejogo.length) {
        setTimeout(() => {
            alert("Deu empate, jogue outra vez este bloco")
        }, 12);
        let returnClass = document.getElementsByName("q" + quadradoMenor)
        for (let i = 0; i < returnClass.length; i++) {
            tabuleiro[quadradoMenor][i] = ''
            returnClass[i].innerHTML = "<div class=''></div>"
        }
    }
}

function setJogadorMaior(idquadradoMaior, playerganhador) {
    let quadrado = document.getElementById(idquadradoMaior.toString())
    if (playerganhador == 1) {
        quadrado.innerHTML = "<div class='o1'></div>"
        tabuleiroMaior[idquadradoMaior - 10] = 1
        verificarganhadorMaior(playerganhador)

    } else {
        quadrado.innerHTML = "<div class='x1'></div>"
        tabuleiroMaior[idquadradoMaior - 10] = 2
        verificarganhadorMaior(playerganhador)
    }
}

function verificarganhadorMaior(ganhadorfinal) {
    let contMaior = 0
    for (let i = 0; i < fimdejogoMaior.length; i++) {
        let seqmaior = fimdejogoMaior[i]
        let pos1Maior = seqmaior[0]
        let pos2Maior = seqmaior[1]
        let pos3Maior = seqmaior[2]

        if (tabuleiroMaior[pos1Maior] == tabuleiroMaior[pos2Maior] && tabuleiroMaior[pos1Maior] == tabuleiroMaior[pos3Maior] && tabuleiroMaior[pos1Maior] != "") {
            setTimeout(() => {
                alert("O Jogador " + ganhadorfinal + " ganhou!")
            }, 12)
            fim = true;
        }
        if (tabuleiroMaior[i] != "") {
            contMaior = contMaior + 1
        }
    }

    if (contMaior == tabuleiroMaior.length-1) {
        setTimeout(() => {
            alert("Deu empate, jogue outra vez")
        }, 12);
    }

}

function recomecar() {
    window.location.reload()
}
