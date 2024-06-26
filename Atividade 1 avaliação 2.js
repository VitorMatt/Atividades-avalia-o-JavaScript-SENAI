// >>>>>>>>>>>>>>>>>>> Atividade 1 (3,0) <<<<<<<<<<<<<<<<<<<

// O CETAS (Centro de Triagem de Animais Silvestres) está com processo seletivo de integrantes para as suas equipes. 
// Criar um sistema utilizando estrutura condicional IF/ELSE IF/ELSE, que receba os dados do candidato (nome, idade, formação e cidade) 
// para sinalizar se ele pode concorrer às vagas. Após receber os dados, mostrar o nome do candidato e mensagem para qual tipo de vaga o 
// candidato está apto a concorrer. Caso não esteja apto a concorrer a nenhuma das duas categorias de vagas, mostrar mensagem de 
// "Não apto a concorrer".

// Vaga para Equipe de Resgate -> O candidato deve ter de 18 a 60 anos, possuir formação em "Biologia" ou "Ecologia" e residir em Florianópolis.
// Vaga para Equipe de Tratamento -> O candidato deve ter de 23 a 65 anos, possuir formação em "Veterinária" e residir em Florianópolis.

// Critérios de avaliação:

// (1,0) Receber e armazenar os dados do candidato.
// (1,5) Validar os dados e critérios para cada tipo de vaga, ou caso não possa concorrer.
// (0,5) Mostrar mensagem com o nome do candidato e o tipo de vaga que pode concorrer, ou mensagem de "Não apto a concorrer".


alert('Olá, bem vindo ao nosso processo seletivo!\nVerifique a sua elegibilidade abaixo.')

let nomeCandidato
let idadeCandidato
let formacaoCandidato
let cidadeCandidato

nomeCandidato = prompt('Qual o seu nome?')
idadeCandidato = Number(prompt('Qual sua idade?'))
formacaoCandidato = prompt('Qual sua formação?').toUpperCase()
cidadeCandidato = prompt('Qual sua cidade?').toUpperCase()

if (idadeCandidato>=18 && idadeCandidato<=60 && formacaoCandidato=='BIOLOGIA' || formacaoCandidato=='ECOLOGIA' && cidadeCandidato=='FLORIANÓPOLIS'){

    alert(nomeCandidato + ', você está apto para a vaga para equipe de resgate!')
} else if (idadeCandidato>=23 && idadeCandidato<=65 && formacaoCandidato=='VETERINÁRIA' && cidadeCandidato=='FLORIANÓPOLIS'){

    alert(nomeCandidato + ', você está apto para a vaga para equipe de tratamento!')
} else {
    alert(nomeCandidato + ', infelizmente você não está apto para concorrer em nosso processo seletivo!:(')
}
