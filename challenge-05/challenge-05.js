/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var arr = ['textoa', 2 , 4 , 5 , 'textob'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myarr(arg){
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

//> myarr()[1]
[ 'textoa', 2, 4, 5, 'textob' ]



/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número.

 A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myarr2(arg, Number){
	return arg[Number] 
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrt5 = [1,'textoc', null, undefined, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

function ar5(){
	return arrt5;
}


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. 

Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:

- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3

propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String

- A função deve retornar o objeto referente ao livro passado por parâmetro.

- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.

*/
// ?


function book(n_do_livro){
	var objLivro = {

		'livro 1': {
			quantidadePaginas:10,
			autor:'Maria Silva',
			editora:'Saraiva',
		},
		'livro 2': {
			quantidadePaginas:20,
			autor:'string',
			editora:'kalung',
		},
		'livro 3': {
				quantidadePaginas:30,
				autor:'Jhow Vick',
				editora:'Master Two',
			},
		}

		return objLivro;
	}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
