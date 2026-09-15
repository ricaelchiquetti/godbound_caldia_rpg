export const advancementData = {
  title: "Evolução",
  subtitle: "Advancement",
  intro: "Um Godbound ganha poder por meio de feitos grandiosos e da imposição de sua vontade sobre o mundo. Eles exigem tanto experiência prática do mundo quanto a chance de realizar seus desejos sobre ele antes de estarem prontos para dominar novas dádivas.",
  sections: [
    {
      heading: "Experiência e Domínio",
      content: [
        "Os Godbound ganham pontos de experiência ao realizarem objetivos dignos que testem suas habilidades. O GM possui diretrizes para determinar quantos pontos de experiência um feito concede.",
        "Os pontos de Domínio são obtidos através de feitos grandiosos, adoração de cultos e relíquias celestiais, sendo gastos para moldar reinos ou forjar um Paraíso na Noite Não-Criada."
      ]
    },
    {
      heading: "Ganhando um Nível",
      content: [
        "Ao acumular experiência e gastar Domínio suficiente, o personagem ganha um nível imediatamente, recebendo aumentos em bônus de ataque, pontos de vida máximos, Esforço, Influência, testes de resistência reduzidos e um novo Fato.",
        "Novos pontos também podem ser gastos para comprar dádivas de suas Palavras conhecidas (menores custam 1, maiores custam 2) ou adquirir novas Palavras."
      ]
    },
    {
      heading: "Dádivas de Apoteose",
      content: [
        "A Palavra de Apoteose representa a ascensão gradual da divindade dentro do personagem, concedendo dádivas automáticas em determinados níveis para quem lidera seguidores.",
        "Godbound sem igreja ('divindades livres') ganham Domínio mensalmente de forma autônoma, mas abrem mão das dádivas de Apoteose e de seguidores."
      ]
    }
  ],
  levelTable: [
    { level: 1, exp: 0, dominion: 0 },
    { level: 2, exp: 3, dominion: 2 },
    { level: 3, exp: 6, dominion: 4 },
    { level: 4, exp: 12, dominion: 10 },
    { level: 5, exp: 24, dominion: 22 },
    { level: 6, exp: 48, dominion: 38 },
    { level: 7, exp: 72, dominion: 57 },
    { level: 8, exp: 96, dominion: 76 },
    { level: 9, exp: 130, dominion: 95 },
    { level: 10, exp: 170, dominion: 124 }
  ],
  apotheosisTable: [
    { level: 1, gifts: "–" },
    { level: 2, gifts: "Receber o Incenso da Fé" },
    { level: 3, gifts: "Santificar Santuário, Golpear o Apóstata" },
    { level: 4, gifts: "Ouvir Orações" },
    { level: 5, gifts: "Perceber o Peticionário" },
    { level: 6, gifts: "Marca do Profeta" },
    { level: 7, gifts: "Atender os Fiéis" },
    { level: 8, gifts: "Abençoar as Nações" },
    { level: 9, gifts: "–" },
    { level: 10, gifts: "–" }
  ]
};