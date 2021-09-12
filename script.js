function computer(){
    const choice = ['Água', 'Fogo', 'Grama']
    const computer = document.getElementById('computer')

    let random =  Math.floor(Math.random() * (3 - 0) + 0);

    computer.innerHTML = `${choice[random]}`
}
//computer()

function player(){
    const pedra = document.getElementById('pedra')
    const papel = document.getElementById('papel')
    const tesoura = document.getElementById('tesoura')

    const player = document.getElementById('player')

    const computer = document.getElementById('computer')

    const result = document.getElementById('resultado')

    pedra.addEventListener('click', () =>{
        result.innerHTML = ''
        computer.innerHTML = ''
        player.innerHTML = 'Grama'
    })

    papel.addEventListener('click', () =>{
        result.innerHTML = ''
        computer.innerHTML = ''
        player.innerHTML = 'Fogo'
    })

    tesoura.addEventListener('click', () =>{
        result.innerHTML = ''
        computer.innerHTML = ''
        player.innerHTML = 'Água'
    })

}
//player()

function victory(){
    const player = document.getElementById('player')
    const computer = document.getElementById('computer')
    const result = document.getElementById('resultado')

    //player win
    if(computer.innerHTML == 'Grama' && player.innerHTML == 'Fogo'){
        result.innerHTML = 'Você ganhou'
    }
    if(computer.innerHTML == 'Fogo' && player.innerHTML == 'Água'){
        result.innerHTML = 'Você ganhou'
    }
    if(computer.innerHTML == 'Água' && player.innerHTML == 'Grama'){
        result.innerHTML = 'Você ganhou'
    }
    //computer win
    if(player.innerHTML == 'Grama' && computer.innerHTML == 'Fogo'){
        result.innerHTML = 'Computador ganhou'
    }
    if(player.innerHTML == 'Fogo' && computer.innerHTML == 'Água'){
        result.innerHTML = 'Computador ganhou'
    }
    if(player.innerHTML == 'Água' && computer.innerHTML == 'Grama'){
        result.innerHTML = 'Computador ganhou'
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