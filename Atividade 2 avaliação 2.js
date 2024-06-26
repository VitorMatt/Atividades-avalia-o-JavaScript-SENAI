// >>>>>>>>>>>>>>>>>> Atividade 2 (3,0) <<<<<<<<<<<<<<<<<<<<

// No site Amazon, os produtos a venda podem ser avaliados pelos compradores, o que gera um índice (média aritmética) 
// utilizado pelo algoritmo para definir se o produto deve ou não ganhar destaque: destaque na página principal, destaque 
// na página da categoria daquele produto, destaque na página de promoções ou não deve ganhar destaque. 
// O índice é calculado através da avaliação de 3 quesitos pelo comprador: qualidade do produto, custo benefício, durabilidade. 
// Criar um sistema utilizando a estrutura condicional SWITCH / CASE, que receba avaliações do comprador nesses três quesitos (notas de 0 a 10)
// sobre um determinado produto e gere o índice dele. Após receber as avaliações, mostrar o índice do produto e indicar se conseguiu destaque
// para: índice abaixo de 5 (não ganha destaque), índice de 5 a menor que 7 (destaque na página da categoria), índice de 7 a menor que 9 
// (destaque em promoções), índice igual ou maior a 9 (destaque na página principal).


// Critérios de avaliação:

// (1,0) Receber e armazenar as notas dos três quesitos (avaliação).
// (1,0) Calcular o índice do produto (média aritmética) com três casas após a vírgula e mostrar na tela.
// (1,0) Criar o sistema de destaques com as quatro possibilidades e mostrar mensagem referente na tela.


alert('Bem-vindo(a) à Amazon! Deixe sua avaliação a qualquer produto agora mesmo!')

const produtoSemDestaque = 5
const produtoComDestaqueNaPaginaDaCategoria = 7
const produtoComDestaqueEmPromocoes = 9
const quantidadeCriteriosParaSeremAvaliados = 3
let avaliacaoQualidadeProduto
let avaliacaoCustoBeneficioProduto
let avaliacaoDurabilidadeProduto
let somaAvaliacoes
let indiceProduto

prompt('Qual o nome do produto?')

avaliacaoQualidadeProduto = Number(prompt('(De 0 a 10), qual a sua avaliação para a qualidade deste produto?'))
avaliacaoCustoBeneficioProduto = Number(prompt('(De 0 a 10), qual a sua avaliação para o custo benefício deste produto?'))
avaliacaoDurabilidadeProduto = Number(prompt('(De 0 a 10), qual a sua avaliação para a durabilidade deste produto?'))

if (avaliacaoCustoBeneficioProduto<0 || avaliacaoCustoBeneficioProduto>10 || avaliacaoDurabilidadeProduto<0 || avaliacaoDurabilidadeProduto>10 || avaliacaoQualidadeProduto<0 || avaliacaoQualidadeProduto>10){

    alert('Você não digitou números de 0 a 10!')
} else {

somaAvaliacoes = (avaliacaoQualidadeProduto + avaliacaoCustoBeneficioProduto + avaliacaoDurabilidadeProduto)
indiceProduto = somaAvaliacoes / quantidadeCriteriosParaSeremAvaliados

indiceProduto = indiceProduto.toFixed(3)

switch (true){

    case indiceProduto <5 && indiceProduto>=0:
        alert(`Índice produto: ${indiceProduto}\nO produto não ganhará nenhum destaque!`)
        break

    case indiceProduto>=5 && indiceProduto<7:
        alert(`Índice produto: ${indiceProduto}\nO produto ganhará destaque apenas na página de sua categoria!`)
        break

    case indiceProduto >=7 && indiceProduto<9:
        alert(`Índice produto: ${indiceProduto}\nO produto ganhará destaque apenas em promoções!`)
        break

    case indiceProduto>=9 && indiceProduto <=10:
        alert(`Índice produto: ${indiceProduto}\nO produto ganhará destaque na página principal!`)
        break

}
}
