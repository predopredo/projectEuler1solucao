//pega os elementos que vou usar pra mostrar na pagina
const display = document.querySelector('.display')
const display2 = document.querySelector('.display2')

//Essa função cria uma array com multiplos de 3 e 5 no intervalo de 0 a 1000
function multiplesArray() {
    let numbersArray = [] //array vazio que vou popular com a função abaixo
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            numbersArray.push(i) //joga os numeros pro array
        }
    }
    return numbersArray
}

//essa função realiza a soma dos números de um array
function sum(array) {
    //função pra usar no reduce
    const sumFunction = (total, num) => {
        return total + num
    }
    return array.reduce(sumFunction)
}

const calculateResult = sum(multiplesArray())

//joga o resultado pra dentro do html pra aparecer na página
display.innerHTML = `<p>Resultado solução 1: A soma dos múltiplos de 3 e 5 dentre os números abaixo de 1000 é ${calculateResult}</p>`

//Resolvi criar uma função que serve pra qualquer número inicial, número final e multiplos

function generateNumbersBetween(first, last, multiplesOf) {
    let numbersArray = [] //array vazio que vou popular com a função abaixo
    let finalArray = [] //array final que será o resultado da função

    //checa qual dos números fornecidos é maior pra ditar a "direção" que o loop vai seguir
    if (Math.round(first) < Math.round(last)) {
        for (let i = Math.round(first); i < Math.round(last); i++) {
            numbersArray.push(i) //popula a variável numbersArray com os números do intervalo
        }
    } else {
        for (let i = Math.round(last); i < Math.round(first); i++) {
            numbersArray.push(i) //popula a variável numbersArray com os números do intervalo
        }
    }
    //checa se o terceiro parâmetro é array ou um número e filtra a numbersArray, adicionando para a finalArray somente números em que o módulo deles com o(s) múltiplos resulta em zero
    if (Array.isArray(multiplesOf)) {
        numbersArray.forEach(number => {
            multiplesOf.forEach(multiple => {
                if (number % multiple === 0 && !finalArray.includes(number)) {
                    finalArray.push(number)
                }
            })
        })
    } else {
        finalArray = numbersArray.filter(number => {
            return number % multiplesOf === 0
        })
    }
    return finalArray
}

const calculateResult2 = sum(generateNumbersBetween(0, 1000, [3, 5]))

//joga o resultado pra dentro do html pra aparecer na página
display2.innerHTML = `<p>Resultado solução 2: A soma dos múltiplos de 3 e 5 dentre os números no intervalo entre 0 e 1000 é ${calculateResult2}</p>
<p class="small">Exemplo adicional solução 2: A soma dos múltplos de 2, 3 e 5 dentre os números no intervalo de 2 e 500 é ${sum(generateNumbersBetween(2, 500, [2, 3, 5]))}`