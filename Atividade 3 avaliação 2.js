// >>>>>>>>>>>>>>>>>> Atividade 3 (4,0) <<<<<<<<<<<<<<<<<<<<

// Desenvolver a lógica de perguntas / respostas / pontuação para um mini-quiz utilizando a estrutura condicional SWITCH / CASE. 
// O quiz contém 4 perguntas com 4 respostas cada (conforme abaixo). Todas as respostas possuem uma pontuação específica. 
// Realizar o cálculo da pontuação e mostrar ao final.

// 1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?

// A) Van Helsing (2 pontos)
// B) Castlevania (3 pontos)
// C) The Vampire Diaries (2 pontos)
// D) Blade: The Series (1 ponto)


// 2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?

// A) Alice no País das Maravilhas (1 ponto)
// B) O Hobbit (1 ponto)
// C) A Fantástica Fábrica de Chocolates (1 ponto)
// D) Coraline (2 pontos)


// 3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?

// A) The Legend of Zelda (3 pontos)
// B) Kirby (2 pontos)
// C) Metroid (3 pontos)
// D) Super Mario Bros (2 pontos)


// 4) Quais dos autores citados, representam melhor o gênero de livros de terror?

// A) Stephen King (2 pontos)
// B) Edgar Allan Poe (2 pontos)
// C) H.P. Lovecraft (2 pontos)
// D) Mary Shelley (1 ponto)


// Critérios de avaliação:

// (0,5) Criar uma tela (janela) inicial de boas vindas, explicando o quiz.
// (1,0) Validar para que respostas digitadas com letra minúscula (a, b, c, d) também somem os pontos.
// (1,0) Incluir uma validação para opções diferentes das alternativas, avisando a soma de 0 pontos.
// (0,5) Mostrar na tela ao final, quais foram as opções / respostas escolhidas em cada pergunta.
// (1,0) Mostrar os pontos ao final. Se conseguir pontuação máxima (10 pontos), incluir além da pontuação, uma mensagem "Parabéns!"

alert('Olá, bem-vindo(a) ao nosso quiz, aqui você descobre e aprende sobre jogos, livros e muito mais!\nCLick enter para começar.')

let respostaUsuarioUm
let respostaUsuarioDois
let respostaUsuarioTres
let respostaUsuarioQuatro
let pontuacaoQuestaoUm
let pontuacaoQuestaoDois
let pontuacaoQuestaoTres
let pontuacaoQuestaoQuatro
let somaPontuações

alert('Pronto para as perguntas?\nLembre-se de reponder de acordo com as alternativas (a, b, c ou d)\nBoa sorte!:)')

respostaUsuarioUm = prompt('1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?\nA) Van Helsing\nB) Castlevania\nC) The Vampire Diaries\nD) Blade: The Series').toLowerCase()

switch (respostaUsuarioUm){

    case 'a':
        pontuacaoQuestaoUm = 2
        break
        
    case 'b':
        pontuacaoQuestaoUm = 3
        break

    case 'c':
        pontuacaoQuestaoUm = 2
        break
        
    case 'd':
        pontuacaoQuestaoUm = 1
        break

    default: 
    alert('Opção inválida! Você não ganhou pontos!')
    pontuacaoQuestaoUm = 0
    respostaUsuarioUm = ''

}

respostaUsuarioDois = prompt('2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\nA) Alice no País das Maravilhas\nB) O Hobbit\nC) A Fantástica Fábrica de Chocolates\nD) Coraline').toLowerCase()

switch (respostaUsuarioDois){

    case 'a':
        pontuacaoQuestaoDois = 1
        break
        
    case 'b':
        pontuacaoQuestaoDois = 1
        break

    case 'c':
        pontuacaoQuestaoDois = 1
        break
        
    case 'd':
        pontuacaoQuestaoDois = 2
        break

    default: 
    alert('Opção inválida! Você não ganhou pontos!')
    pontuacaoQuestaoDois = 0
    respostaUsuarioDois = ''

}

respostaUsuarioTres = prompt('3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?\nA) The Legend of Zelda\nB) Kirby\nC) Metroid\nD) Super Mario Bros').toLowerCase()

switch (respostaUsuarioTres){

    case 'a':
        pontuacaoQuestaoTres = 3
        break
        
    case 'b':
        pontuacaoQuestaoTres = 2
        break

    case 'c':
        pontuacaoQuestaoTres = 3
        break
        
    case 'd':
        pontuacaoQuestaoTres = 2
        break

    default: 
    alert('Opção inválida! Você não ganhou pontos!')
    pontuacaoQuestaoTres = 0
    respostaUsuarioTres = ''

}

respostaUsuarioQuatro = prompt('4) Quais dos autores citados, representam melhor o gênero de livros de terror?\nA) Stephen King\nB) Edgar Allan Poe\nC) H.P. Lovecraft\nD) Mary Shelley').toLowerCase()

switch (respostaUsuarioQuatro){

    case 'a':
        pontuacaoQuestaoQuatro = 2
        break
        
    case 'b':
        pontuacaoQuestaoQuatro = 2
        break

    case 'c':
        pontuacaoQuestaoQuatro = 2
        break
        
    case 'd':
        pontuacaoQuestaoQuatro = 1
        break

    default: 
    alert('Opção inválida! Você não ganhou pontos!')
    pontuacaoQuestaoQuatro = 0
    respostaUsuarioQuatro = ''

}

somaPontuações = pontuacaoQuestaoUm + pontuacaoQuestaoDois + pontuacaoQuestaoTres + pontuacaoQuestaoQuatro

alert(`Opções escolhidas:\nQuestão 1 - ${respostaUsuarioUm}\nQuestão 2 - ${respostaUsuarioDois}\nQuestão 3 - ${respostaUsuarioTres}\nQuestão 4 - ${respostaUsuarioQuatro}`)

if (somaPontuações==10){

    alert('Pontuação final: ' + somaPontuações + '\nParabéns!!:)')
} else {

    alert('Pontuação final: ' + somaPontuações)
}
