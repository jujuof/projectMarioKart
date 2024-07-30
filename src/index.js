//const - declara um objeto    
//async - antes de uma função faz com que a função retorne uma promess
//await - espera uma função chamar a outra 
//let - declara a variável
//switch - parecido com o if, é uma estrutura de condição

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

//CRIANDO O DADO PARA RODAR
async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO"
    }

    return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        let block = await getRandomBlock()  //sortear bloco
        console.log(`Bloco: ${block}`)

        let diceResult1 = await rollDice(); //rolar os dados
        let diceResult2 = await rollDice();
        let totalTestSkill1 = 0; //teste de habilidade
        let totalTestSkill2 = 0;

        //3 sinais de = para comparar o valor e formato
        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

            await logRollResult(
                character1.NOME,
                "manobrabilidade",
                diceResult1,
                character1.MANOBRABILIDADE
            );

            await logRollResult(
                character2.NOME,
                "manobrabilidade",
                diceResult2,
                character2.MANOBRABILIDADE
            );
        }

        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

            await logRollResult(
                character1.NOME,
                "velocidade",
                diceResult1,
                character1.VELOCIDADE
            );

            await logRollResult(
                character2.NOME,
                "velocidade",
                diceResult2,
                character2.VELOCIDADE
            );

        }

        if (block === "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

            await logRollResult(
                character1.NOME,
                "poder",
                diceResult1,
                character1.PODER
            );

            await logRollResult(
                character2.NOME,
                "poder",
                diceResult2,
                character2.PODER
            );

            if(powerResult1 > powerResult2 && character2.PONTOS > 0){
                console.log(
                    `${character1.NOME} VENCEUUUUUU! 🎉 ${character2.NOME}, infelizmente perdeu um ponto }`
                );
                character2.PONTOS--;
            }
            
            if(powerResult2 > powerResult1 && character1.PONTOS > 0){
                console.log(
                    `${character2.NOME} VENCEUUUUUU! 🎉 ${character1.NOME}, infelizmente perdeu um ponto }`
                );
                character1.PONTOS--;
            }

            console.log(
                powerResult2 === powerResult1
                    ? "EMPATE! Ninguem perdeu ponto nessa rodada 📢"
                    : ""
            )
        }


        //verificando o vencedor
        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.NOME} marcou um pontinhoo!`);
            character1.PONTOS++;
        } else if (totalTestSkill1 < totalTestSkill2) {
            console.log(`${character2.NOME} marcou um pontinhoo!`);
            character2.PONTOS++
        }
        console.log("----------------------------------------")
    }
}

async function declareWinner(character1, character2){
    console.log("Resultado final:")
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`)
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`)

    if(character1.PONTOS > character2.PONTOS)
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns fofo 🎉🎊`);
    else if(character2.PONTOS > character1.PONTOS)
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns fofo 🎉🎊`);
    else
        console.log("A corrida terminou, mas ficou empatada... que tal tentar de novo?")
}

(async function main() {
    console.log(
        `🏁🚗 Corrida entre ${player1.NOME} e ${player2.NOME}, começando...\n`
    );

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2)
})();