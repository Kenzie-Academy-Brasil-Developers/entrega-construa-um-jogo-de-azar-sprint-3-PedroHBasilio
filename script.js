function computer(){
    const choice = ['Água', 'Fogo', 'Grama']
    const computer = document.getElementById('computer')
    const versus = document.getElementById('versus')

    let random =  Math.floor(Math.random() * (3 - 0) + 0);

    computer.innerHTML = `${choice[random]}`
    versus.innerHTML = 'X'
}
//computer()

function player(){
    const pedra = document.getElementById('pedra')
    const papel = document.getElementById('papel')
    const tesoura = document.getElementById('tesoura')

    const player = document.getElementById('player')
    const computer = document.getElementById('computer')
    const result = document.getElementById('resultado')
    const versus = document.getElementById('versus')

    pedra.addEventListener('click', () =>{
        result.innerHTML = ''
        versus.innerHTML = ''
        computer.innerHTML = ''
        player.innerHTML = 'Grama'
    })

    papel.addEventListener('click', () =>{
        result.innerHTML = ''
        versus.innerHTML = ''
        computer.innerHTML = ''
        player.innerHTML = 'Fogo'
    })

    tesoura.addEventListener('click', () =>{
        result.innerHTML = ''
        versus.innerHTML = ''
        computer.innerHTML = ''
        player.innerHTML = 'Água'
    })

}
//player()

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
//victory()





function jokenpo(){
    const jogar = document.getElementById("jogar")

    player()

    jogar.addEventListener("click", () => {
        computer()
        victory()
    })

}
jokenpo()

function btn(){
    const btn = document.getElementById("btn")
    const inicio = document.getElementById("inicial")

    btn.addEventListener("click", () => {   
        inicio.style.display = "none"; 
        console.log("oi")         
        
    })
}
btn()