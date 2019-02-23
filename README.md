# Project Euler, problem 1: Minha Solução

<b>Problema:</b>

<i>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.</i>

Para descobrir se um número é multiplo de um outro determinado número, podemos usar o modulo (no caso do javascript: %).
Chamando o número de x, e o número que - querermos saber se o x é múltiplo - de y, podemos pedir pro computador calcular x % y. Caso o resultado seja 0, isso quer dizer que x é múltiplo de y.

Para resolver o problema, primeiramente foi necessário gerar um Array vazio que é populado através de um for loop:

	let numbersArray = [] //cria a variável que guarda o array vazio
	
	//realiza um loop que começa em 0, soma um e repete até chegar em 999. i é o índice numérico da repetição
	for (i = 0; i < 1000; i++) {
	
	//caso  i % 3 ou i % 5 resultem em 0, adicionar ao array
  	if (i % 3 === 0 || i % 5 === 0) {
     	 numbersArray.push(i)                               
   	 }
	}

Dessa forma, a variável numbersArray guarda um array de números múltiplos de 3 e 5 abaixo de 1000.
Depois disso, só foi preciso fazer a soma.

Para tal, usei o método array.reduce() do javascript. Ela recebe como argumento uma função que vai ditar como a redução vai ser feita.

Criei então uma variável que guardasse a função de soma:

	function sum(array) {
	
  	//função pra usar no reduce
  	const sumFunction = (total, num) => {
		
		//em cada elemento da array, adiciona o elemento atual ao total já acumulado
    	return total + num
  	}
		//aplica o reduce na array passada no argumento da função sum, usando a sumFunction como argumento.
  	return array.reduce(sumFunction)                               
	}
	
Dentro do arquivo javascript nesse repositório, resolvi fazer também uma função que recebesse 3 argumentos: dois números e mais um número ou array. A função usa os dois primeiros argumentos pra criar um array de números no intervalo entre eles e o terceiro argumento como múltiplo ou um array de múltiplos e realizar a soma dos múltiplo(s) do(s) número(s) fornecido(s) dentro do terceiro arguentom dentro do intervalo entre os números fornecidos no primeiro e segundo argumentos.
