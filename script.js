
function computer(){
    const choice = ['Água', 'Fogo', 'Grama']
    const computer = document.getElementById('computer')
    const versus = document.getElementById('versus')
    const pcImg = document.getElementById('pcImg')

    let random =  Math.floor(Math.random() * (3 - 0) + 0);

    computer.innerHTML = `${choice[random]}`
    versus.innerHTML = 'X'

    if(computer.innerHTML === 'Água'){
        pcImg.innerHTML = '<img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/63a98e1dbcfbe96.png" alt=""></img>'
    }
    if(computer.innerHTML === 'Fogo'){
        pcImg.innerHTML = '<img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/ac2826f88646e6e.png" alt=""></img>'
    }
    if(computer.innerHTML === 'Grama'){
        pcImg.innerHTML = '<img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/c5ffaa9bc5803d0.png" alt=""></img>'
    }
}

function player(){
    const pedra = document.getElementById('pedra')
    const papel = document.getElementById('papel')
    const tesoura = document.getElementById('tesoura')

    const pcImg = document.getElementById('pcImg')
    const player = document.getElementById('player')
    const playerImg = document.getElementById('playerImg')
    const computer = document.getElementById('computer')
    const result = document.getElementById('resultado')
    const versus = document.getElementById('versus')

    pedra.addEventListener('click', () =>{
        result.innerHTML = ''
        pcImg.innerHTML = ''
        versus.innerHTML = ''
        computer.innerHTML = ''
        player.innerHTML = 'Grama'
        playerImg.innerHTML = '<img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/c5ffaa9bc5803d0.png" alt=""></img>'
        pedra.classList.add("animation_choose")
        tesoura.classList.remove("animation_choose")
        papel.classList.remove("animation_choose")
    })

    papel.addEventListener('click', () =>{
        result.innerHTML = ''
        pcImg.innerHTML = ''
        versus.innerHTML = ''
        computer.innerHTML = ''
        player.innerHTML = 'Fogo'
        playerImg.innerHTML = '<img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/ac2826f88646e6e.png" alt=""></img>'
        papel.classList.add("animation_choose")
        pedra.classList.remove("animation_choose")
        tesoura.classList.remove("animation_choose")
    })

    tesoura.addEventListener('click', () =>{
        result.innerHTML = ''
        pcImg.innerHTML = ''
        versus.innerHTML = ''
        computer.innerHTML = ''
        player.innerHTML = 'Água'
        playerImg.innerHTML = '<img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/63a98e1dbcfbe96.png" alt=""></img>'
        tesoura.classList.add("animation_choose")
        pedra.classList.remove("animation_choose")
        papel.classList.remove("animation_choose")
    })

}

//pontos de cada jogador
let pointsA = 0;
let pointsR = 0;

function victory(){
    const player = document.getElementById('player')
    const computer = document.getElementById('computer')
    const result = document.getElementById('resultado')
    const teamR = document.getElementById('TR-points')
    const ash = document.getElementById('A-points') 

    

    //player win
    if(computer.innerHTML == 'Grama' && player.innerHTML == 'Fogo'){
        result.innerHTML = 'Você ganhou'
        pointsA ++
        ash.innerText = pointsA
    }
    if(computer.innerHTML == 'Fogo' && player.innerHTML == 'Água'){
        result.innerHTML = 'Você ganhou'
        pointsA ++
        ash.innerText = pointsA
    }
    if(computer.innerHTML == 'Água' && player.innerHTML == 'Grama'){
        result.innerHTML = 'Você ganhou'
        pointsA ++
        ash.innerText = pointsA
    }
    //computer win
    if(player.innerHTML == 'Grama' && computer.innerHTML == 'Fogo'){
        result.innerHTML = 'Não foi dessa vez!'
        pointsR ++
        teamR.innerText = pointsR
    }
    if(player.innerHTML == 'Fogo' && computer.innerHTML == 'Água'){
        result.innerHTML = 'Não foi dessa vez!'
        pointsR ++
        teamR.innerText = pointsR
    }
    if(player.innerHTML == 'Água' && computer.innerHTML == 'Grama'){
        result.innerHTML = 'Não foi dessa vez!'
        pointsR ++
        teamR.innerText = pointsR
    }
    //empate
    if(player.innerHTML == 'Grama' && computer.innerHTML == 'Grama'){
        result.innerHTML = 'Empate'
    }
    if(player.innerHTML == 'Fogo' && computer.innerHTML == 'Fogo'){
        result.innerHTML = 'Empate'
    }
    if(player.innerHTML == 'Água' && computer.innerHTML == 'Água'){
        result.innerHTML = 'Empate'
    }

}

function jokenpo(){
    const jogar = document.getElementById("jogar")
    const choose = document.getElementById("choose")
    const entrada = document.getElementById("playerImg")
    const pcEntrada = document.getElementById("pcImg")

    player()

    jogar.addEventListener("click", () => {
        computer()
        victory()
        choose.style.display = "none"
        jogar.style.display = "none"
        entrada.classList.add("player_entrance")
        pcEntrada.classList.add("pc_entrance")
    })

}
jokenpo()

function btn(){
    const btn = document.getElementById("btn")
    const inicio = document.getElementById("inicial")

    btn.addEventListener("click", () => {   
        inicio.style.display = "none";         
    })
}
btn()

function voltar(){
    const jogar = document.getElementById("jogar")
    const back = document.getElementById("back")
    const choose = document.getElementById("choose")
    const entrada = document.getElementById("playerImg")
    const pcEntrada = document.getElementById("pcImg")
    const result = document.getElementById('resultado')

    const pedra = document.getElementById('pedra')
    const papel = document.getElementById('papel')
    const tesoura = document.getElementById('tesoura')



    back.addEventListener("click", () => {
        choose.style.display = "flex"
        jogar.style.display = "flex"
        result.innerHTML = ""
        entrada.classList.remove("player_entrance")
        pcEntrada.classList.remove("pc_entrance")
        pedra.classList.remove("animation_choose")
        papel.classList.remove("animation_choose")
        tesoura.classList.remove("animation_choose")
    })
}
voltar()
