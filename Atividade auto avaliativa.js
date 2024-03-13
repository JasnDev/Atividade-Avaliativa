/* Para começar, eu não tive tantos problemas 
afinal array é fácil entender, o problema é a aplicação e a resolução do problema
e até o momento onde estou escrevendo isso, não sei o que estou fazendo ou como resolver
o que fiz. E depois de muito quebrar a cabeça consegui, mas admito que meu ponto fraco é aprender
mas não saber aplicar. */

let totalAlunos = 10;
let nome, idade, formando, linguas;
const nomeSala = ['Jasa', 'Brunao', 'Schifell', 'Julha', 'Danilaishon', 'MariMyHeart', 'Adriano', 'Kevin', 'Paulino', 'Guerra'];
const idadeSala = [17,39,17,17,17,17,25,17,32,17];
const formacoes = ['estudante', 'professor E.F', 'estudante', 'estudante', 'desempregado', 'namorada troféu', 'const. civil', 'estudante', 'marido troféu', 'estudante'];
const linguagem = ['russo', 'alemão', 'inglês', 'espanhol', 'russo', 'espanhol', 'inglês', 'inglês', 'inglês', 'português'];

function alunos(aluno, idade, formacao, linguagem){
    this.aluno = aluno
    this.idade = idade
    this.formacao = formacao
    this.linguagem = linguagem
}

for(let i = 0; i<totalAlunos; i++){
    nome = nomeSala[i];
    idade = idadeSala[i];
    formando = formacoes[i]; 
    linguas = linguagem[i];

    console.log(`${nome}, tenho ${idade}, sou formado em ${formando} nasci em ${2024-idade} e falo português e ${linguas}\n`)
}

