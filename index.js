let nomeHeroi = "Testador";
let xpHeroi = 2333;
let nivelHeroi = "Ferro";

//Não foi mencionado em aula sobre a expressão true e false no switch..
//Sou daqueles que começou a aprender pela meio, e agora, está voltando para o início para reforçar a base...

// "Se for menor que 1.000 = Ferro"
// "Se for entre 1.001 e 2.000 = Bronze"
// Se for 1.000? é ferro ou bronze? Visto que está fora das duas condições...
// Mas vamos assumir que é Ferro, já que o escopo do nível Bronze começa a partir de 1.001.

switch (true) {
  case xpHeroi >= 10001:
    nivelHeroi = "Radiante";
    break;

  case xpHeroi >= 9001:
    nivelHeroi = "Imortal";
    break;

  case xpHeroi >= 8001:
    nivelHeroi = "Ascendente";
    break;

  case xpHeroi >= 7001:
    nivelHeroi = "Platina";
    break;

  case xpHeroi >= 5001:
    nivelHeroi = "Ouro";
    break;

  case xpHeroi >= 2001:
    nivelHeroi = "Prata";
    break;

  case xpHeroi >= 1001:
    nivelHeroi = "Bronze";
    break;
}




console.log(
  "O herói de nome " +
    nomeHeroi +
    " tem " +
    xpHeroi +
    " de xp e está no nivel " +
    nivelHeroi
);
