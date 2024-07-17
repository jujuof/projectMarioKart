//const - declara um objeto
//DEFININDO OS JOGADORES
const player1 = {
    NOME: "Mario",
    CARACTERISTICA: "Que te comeu atrás do armário kkkkkkkkkkkkkkkkkkkkkk",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 3,
    PODER: 4,
    PONTOS: 0
};
const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0
};
const player3 = {
    NOME: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0
};
const player4 = {
    NOME: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0
};
const player5 = {
    NOME: "Donkey Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0
};
const player6 = {
    NOME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0
};

//async - antes de uma função faz com que a função retorne uma promess
//CRIANDO O DADO PARA RODAR
async function rollDice(){
  return Math.floor(Math.random() * 6) + 1;
}

(async function main() {
    console.log(
        `🏁🚗 Corrida entre ${player1.NOME} e ${player2.NOME}, começando...\n`
    );
})();