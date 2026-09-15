export const attributesRulesData = {
  title: "Atributos, Modificadores e Salvamentos",
  rollingAttributesIntro: [
    "Para começar a criar o seu personagem (PC), você começa determinando as pontuações de atributos do seu herói abençoado pelos deuses. Estas são seis pontuações que vão de 3 a 18 que representam as aptidões naturais do seu PC. Uma pontuação de 3 é muito baixa e, assim como um deus de pernas aleijadas ou uma divindade imprudente e tola, você pode ter essa incapacidade ecoada na futura lenda do seu Godbound. Uma pontuação de 18 é tão alta quanto um Godbound ou humano pode alcançar em circunstâncias ordinárias, embora dádivas especiais possam imbuir seu PC com capacidades verdadeiramente sobre-humanas."
  ],
  attributesList: [
    {
      name: "Força (Strength)",
      desc: "Mede os poderes de vigor físico do seu PC. A Força melhora a habilidade do seu herói em combate corpo a corpo e permite que ele exerça força sem a ajuda de seus poderes sobrenaturais. Seu modificador de Força afeta as rolagens de acerto e de dano corpo a corpo."
    },
    {
      name: "Destreza (Dexterity)",
      desc: "É a agilidade e precisão de movimento do seu PC. Ela melhora a habilidade do seu herói com combate à distância, seu talento para manobras acrobáticas e sua aptidão para esquivar-se de perigos. Seu modificador de Destreza afeta sua classe de armadura e as rolagens feitas para ataques à distância e com armas leves e seus dados de dano."
    },
    {
      name: "Constituição (Constitution)",
      desc: "É a resistência bruta do seu Godbound e sua capacidade de continuar funcionando quando ferido ou exausto. Ela influencia os pontos de vida de um herói, que determinam quanta punição ele consegue suportar antes de desabar. Os modificadores de Constituição são aplicados aos seus pontos de vida máximos."
    },
    {
      name: "Sabedoria (Wisdom)",
      desc: "É tanto a capacidade de percepção quanto o discernimento de um herói, auxiliando-o a notar detalhes, discernir verdades e fazer avaliações sensatas de uma situação. Seu modificador de Sabedoria é usado apenas raramente, para certos poderes divinos ou para o seu teste de resistência de Espírito."
    },
    {
      name: "Inteligência (Intelligence)",
      desc: "Reflete a capacidade intelectual bruta do herói e seus dons de memória e lógica. Muitas tarefas de educação ou aptidão mental exigem a inteligência de um Godbound. Os modificadores de Inteligência também são usados de forma relativamente rara, mas podem se aplicar ao seu teste de resistência de Evasão ou a poderes que dependem da sagacidade do seu herói."
    },
    {
      name: "Carisma (Charisma)",
      desc: "É a força bruta de personalidade exalada pelo herói e sua capacidade de comandar instintivamente a obediência e a reverência dos outros. Aqueles com Carisma baixo podem ser feios ou facilmente ignorados, enquanto aqueles com Carisma alto parecem ser líderes naturais e dignos de respeito. Seu modificador de Carisma é aplicado às rolagens de reação feitas para determinar como os estranhos respondem ao seu herói, e também pode ser aplicado às rolagens de ataque e dano de poderes baseados na sua presença ou força de vontade."
    }
  ],
  generationMethods: [
    "Para gerar essas pontuações, você tem uma escolha de dois métodos. Para o primeiro, você joga 4d6 seis vezes, descartando o menor dado a cada vez. Você então atribui esses totais aos atributos como desejar. A chance de rolar muito bem é equilibrada pela chance de obter um conjunto de pontuações pouco impressionante, mas a principal força de um Godbound reside em suas habilidades sobrenaturais, e é possível aumentar algumas pontuações mais tarde com base nas Palavras e dádivas que você escolher.",
    "Se você prefere não usar o método aleatório, você pode simplesmente atribuir as seguintes pontuações aos seus atributos em qualquer ordem desejada: 16, 14, 13, 13, 10 e 8."
  ],
  modifierIntro: "Assim que você tiver rolado seus atributos, você precisa anotar o modificador de atributo que acompanha cada um. Este modificador é somado como um bônus, ou subtraído como uma penalidade, a certas rolagens e pontuações. Se o seu atributo mudar mais tarde no jogo, você deve alterar o modificador também.",
  modifierTable: [
    { score: "3", mod: "-3" },
    { score: "4 – 5", mod: "-2" },
    { score: "6 – 8", mod: "-1" },
    { score: "9 – 12", mod: "Sem Modificador" },
    { score: "13 – 15", mod: "+1" },
    { score: "16 – 17", mod: "+2" },
    { score: "18", mod: "+3" }
  ],
  attributeChecks: [
    "Quando seu Godbound tenta realizar algo que exigiria esforço até mesmo de sua capacidade heroica, ele deve fazer um teste de atributo. O número do teste para cada atributo é igual a 21 menos a pontuação do atributo. Para ter sucesso em um teste de atributo, o jogador deve rolar igual ou acima do teste em uma rolagem de 1d20. Uma rolagem natural de 1 sempre resultará em falha ou em alguma complicação infeliz, enquanto uma rolagem natural de 20 é sempre um sucesso.",
    "Um teste de atributo pode ser modificado por bônus ou penalidades. Se o seu herói tiver um Fato relevante para o seu esforço, ele pode adicionar +4 à sua rolagem, enquanto feitos que empurram os limites humanos podem sofrer uma penalidade de -4, com desafios verdadeiramente heroicos aplicando até -8 ao dado."
  ],
  savingThrowsIntro: [
    "Como último passo ao rolar os atributos do seu herói, você precisa anotar seus testes de resistência. Quando o seu Godbound se depara com algum perigo terrível que exige sua resistência, determinação ou rapidez, ele pode ser solicitado a fazer um teste de resistência para resistir ao pior dele.",
    "Para fazer um teste de resistência, você rola 1d20 e tenta rolar igual ou acima da pontuação do teste de resistência correspondente. Uma rolagem de 20 sempre sucede no salvamento e uma rolagem de 1 sempre falha."
  ],
  savingThrowsList: [
    {
      name: "Hardiness (Resistência)",
      desc: "O seu teste de resistência de Hardiness é igual a 15 menos o melhor entre os seus modificadores de Força ou Constituição. Você rola um salvamento de Hardiness contra venenos feiticeiros, pragas malditas, transformações hediondas, rigores sobre-humanos de esforço e provações físicas semelhantes."
    },
    {
      name: "Evasion (Evasão)",
      desc: "O seu teste de resistência de Evasion é igual a 15 menos o melhor entre os seus modificadores de Destreza ou Inteligência. Você rola um salvamento de Evasion ao saltar para longe de um ídolo em desabamento, desviar de um leque de facas arremessadas ou mergulhar atrás de cobertura para evitar uma explosão tremenda."
    },
    {
      name: "Spirit (Espírito)",
      desc: "O seu teste de resistência de Spirit é igual a 15 menos o melhor entre os seus modificadores de Sabedoria ou Carisma. Você rola um salvamento de Spirit ao combater encantamentos sinistros, desafiar o controle mental ou resistir a efeitos mágicos que não sejam mais aplicáveis a uma das outras duas categorias."
    }
  ],
  savingThrowsOutro: "Pode ser que o seu Godbound tenha uma penalidade de modificador em ambos os atributos, caso em qual o seu modificador menos ruim aumenta o teste de resistência. Não tema; os salvamentos do seu herói melhoram conforme ele avança em experiência, e você terá a chance de melhorar suas pontuações de atributo quando escolher os poderes especiais do seu Godbound. Em caso de grande necessidade, um Godbound desesperado também pode recorrer aos seus poderes para anular um salvamento falho."
};