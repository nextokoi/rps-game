let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score"),
    computerScore_span = document.getElementById("computer-score"),
    scoreBoard_div = document.querySelector(".score-board"),
    result_p = document.querySelector(".result > p"),
    rock_div = document.getElementById("r"),
    paper_div = document.getElementById("p"),
    scissors_div = document.getElementById("s"),
    smallUserWord = "user".fontsize(3).sub(),
    smallCompWord = "comp".fontsize(3).sub(),
    choices = document.getElementById("choices")

//Hacer un flappy bird con la cara del Padre Baez

function getComputerChoice(){ // Función que genera una opción de la máquina
    const choices = ['r', 'p', 's'] // Array con opciones de la máquina

    //Math.round en algunos momentos devuelve undefined

    const randomNumber = Math.floor(Math.random() * 3) // Genera un número aleatorio entre 0 y 2
    return choices[randomNumber] // Devuelve el elemento del array que se encuentra en la posición randomNumber
}

function convertToWord(letter){ // Convierte una letra en una palabra
    if (letter === "r") return "Rock" // Si el valor de la variable es r, devuelve Rock
    if (letter === "p") return "Paper" // Si el valor de la variable es p, devuelve Paper
    return "Scissors" // Si el valor de la variable es s, devuelve Scissors
}

function win(user, computer){// Función que se ejecuta cuando el usuario gana, pasa como parámetros el valor de la máquina y el del usuario
    const user_div = document.getElementById(user)
    if(userScore == 6){
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        choices.innerHTML = `<h1>You win! 🎉</h1>`
    }
    userScore++ // Aumenta el valor de la variable userScore
    userScore_span.innerHTML = userScore // Muestra el valor de la variable userScore en el HTML
    computerScore_span.innerHTML = computerScore // Muestra el valor de la variable computerScore en el HTML
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You win!🔥` // Muestra el resultado en el HTML
    user_div.classList.add('green-glow') // Añade la clase green-glow al elemento que se ha pulsado
    setTimeout(() => user_div.classList.remove('green-glow'), 300)
}

function lose(user, computer){ // Función que se ejecuta cuando el usuario pierde, pasa como parámetros el valor de la máquina y el del usuario
    const user_div = document.getElementById(user)
    if(computerScore == 6){
        choices.innerHTML = `<h1>Game over! <img src="img/ghost.gif"></h1>`
    }
    computerScore++ // Aumenta el valor de la variable computerScore
    userScore_span.innerHTML = userScore // Muestra el valor de la variable userScore en el HTML
    computerScore_span.innerHTML = computerScore // Muestra el valor de la variable computerScore en el HTML
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}${smallCompWord}. You lose! 💩` // Muestra el resultado en el HTML
    user_div.classList.add('red-glow') // Añade la clase red-glow al elemento que se ha pulsado
    setTimeout(() => user_div.classList.remove('red-glow'), 300)
}

function draw(user, computer){
    const user_div = document.getElementById(user)
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(computer)}${smallCompWord}. It's a draw! 😑` // Muestra el resultado en el HTML
    user_div.classList.add('gray-glow') // Añade la clase green-glow al elemento que se ha pulsado
    setTimeout(() => user_div.classList.remove('gray-glow'), 300)
}

function game(userChoice){ // Función que se ejecuta cuando se pulsa una opción, pasa como parámetro el valor de la opción del usuario
    const computerChoice = getComputerChoice() // Genera una opción de la máquina
    switch (userChoice + computerChoice){ // Selecciona el caso en el que se ejecuta la función, dependiendo de la opción del usuario y de la máquina
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice) // Si el usuario gana, se ejecuta la función win
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice) // Si el usuario pierde, se ejecuta la función lose
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice) // Si es empate, se ejecuta la función draw          
            break;
    }
}

function main(){ // Función que se ejecuta cuando se pulsa una opción

    rock_div.addEventListener('click', () => // Selecciona el elemento que se ha pulsado y ejecuta la función game con el valor de la opción
        game("r") // Selecciona la opción r y ejecuta la función game
    )

    paper_div.addEventListener('click', () =>
        game("p") // Selecciona la opción p y ejecuta la función game
    )

    scissors_div.addEventListener('click', () =>
        game("s") // Selecciona la opción s y ejecuta la función game
    )
}

main();