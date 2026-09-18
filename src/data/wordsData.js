export const wordsData = [
  {
    id: "Universal",
    name: 'Universais (Universal)',
    shortDesc: "Dádivas Universais comuns que qualquer Palavra pode manifestar.",
    description: "Alguns efeitos são comuns o bastante para que qualquer Palavra possa manifestá-los. Em vez de repeti-los sob cada cabeçalho, eles são fornecidos aqui, todos como dádivas menores.",
    gifts: {
      lesser: [
        {
          name: "Ira Divina (Divine Wrath)",
          type: "Ação",
          content: "Comprometa Esforço até o fim da cena. Você golpeia um inimigo escolhido ao alcance da sua visão com as energias da Palavra, infligindo 1d8 de dano por nível de personagem. Você é sempre imune à ira de suas próprias Palavras vinculadas, assim como outras entidades que empunham poderes semelhantes. Por ser um poder de Golpe (Smite), a Ira Divina não pode ser usada por duas rodadas consecutivas."
        },
        {
          name: "Corona de Fúria (Corona of Fury)",
          type: "Ação",
          content: "Comprometa Esforço até o fim da cena. Você lança uma torrente de energia da sua Palavra contra um grupo de inimigos, afetando todos em um raio de 9 metros (30 pés) a partir de um ponto alvo visível. Cada vítima sofre 1d8 de dano para cada dois níveis que você possui, arredondado para cima. A fúria pode poupar aliados na área de forma seletiva, mas, nesse caso, os inimigos têm direito a um teste de resistência apropriado para mitigar o efeito. Você é sempre imune às fúrias de suas próprias Palavras vinculadas, assim como outras entidades com poderes semelhantes. Por ser um Golpe (Smite), a Corona de Fúria não pode ser usada por duas rodadas consecutivas."
        },
        {
          name: "Esforço da Palavra (Effort of the Word)",
          type: "Constante",
          content: "Seu Esforço máximo aumenta em um ponto. Esta dádiva pode ser adquirida uma vez para cada Palavra a qual você se vinculou, mas cada aquisição após a primeira custa dois pontos de dádiva em vez de um."
        },
        {
          name: "Influência da Palavra (Influence of the Word)",
          type: "Constante",
          content: "Sua Influência máxima aumenta em dois pontos. Esta dádiva pode ser adquirida uma vez para cada Palavra à qual você se vinculou."
        },
        {
          name: "Excelência da Palavra (Excellence of the Word)",
          type: "Constante",
          content: "Escolha um valor de atributo e aumente-o para 18. Esta excelência costuma refletir a natureza da Palavra que a concede; Fogo que concede Destreza pode fazer com que faíscas sejam deixadas para trás em movimentos rápidos, enquanto Terra que concede Sabedoria pode dar um tom ponderado e firme aos seus pensamentos. Esta dádiva só pode ser adquirida uma vez, independentemente de quantas Palavras seu herói tenha vinculado."
        }
      ]
    }
  },
  {
    id: "alacrity",
    name: "Velocidade (Alacrity)",
    shortDesc: "A Palavra de rapidez e graça impossível, Alacrity concede milagres de pressa e evasão.",
    description: "A Palavra de rapidez e graça impossível, Alacrity concede milagres de pressa ao herói que a possui. Milagres de seu poder podem envolver completar uma tarefa particular em apenas alguns momentos, evadir algum perigo que seria inevitável ou responder a um evento antes que seu autor possa sequer começar. Alacrity não é Journeying, no entanto, e seu movimento tende a ser restrito a um único lugar particular ou a uma curta distância, em vez de trânsito rápido entre locais distantes. Heróis com a Palavra Alacrity não podem ser surpreendidos. Eles podem aumentar sua Destreza para 16, ou para 18 se já for 16 ou superior.",
    gifts: {
      lesser: [
        {
          name: "Todas as Direções como Uma (All Directions as One)",
          type: "Constante",
          content: "Você pode navegar por superfícies verticais ou salientes como se fossem chão plano. Você pode atravessar terreno difícil sem esforço. Você possui uma defesa invulnerável contra ser empurrado ou derrubado."
        },
        {
          name: "Avanço Cintilante (Flickering Advance)",
          type: "No Turno",
          content: "Comprometa Esforço até o fim da cena. Alcance instantaneamente qualquer local visível a olho nu até o horizonte, o que geralmente é de cerca de 4,8 km (três milhas) para um personagem em terreno plano. De uma grande elevação, o alcance máximo é dez vezes maior."
        },
        {
          name: "Névoa sobre a Água (Mist on Water)",
          type: "No Turno",
          content: "Comprometa Esforço até o fim da cena. Até o final do seu turno, você pode ignorar toda matéria sólida com seu movimento, desde que termine em um local que possa ocupar fisicamente. Você não pode afetar o mundo durante essa corrida impossivelmente rápida, mas possui defesas invencíveis contra todas as formas de dano não mágico. Se terminar dentro de um objeto sólido no final do turno, você é expelido dele inofensivamente para o espaço vazio mais próximo."
        },
        {
          name: "A Tempestade Rompe (The Storm Breaks)",
          type: "Instante",
          content: "Antes da primeira rodada de qualquer combate ou circunstância sensível ao tempo, você pode Comprometer Esforço para a cena para obter uma rodada bônus gratuita antes que qualquer outra pessoa aja. Dois heróis usando esta dádiva rolam testes de atributo de Destreza oponentes para ver quem realiza sua ação primeiro."
        },
        {
          name: "Mais Rápido que o Sol (Swifter Than The Sun)",
          type: "No Turno",
          content: "Comprometa Esforço. Sua taxa de movimento é duas vezes mais rápida que a do seu perseguidor ou presa mais veloz, até um mínimo de 18 metros (60 pés) por ação de movimento. Ao perseguir presas que possuem dádivas divinas que lhes permitem despistar perseguidores, o participante com mais dados de vida é mais rápido, com empates resolvidos no cara ou coroa."
        },
        {
          name: "Caminhar entre a Chuva (Walk Between the Rain)",
          type: "Constante",
          content: "Sua CA natural é 3. Você não pode ser atingido por nada que não seja impulsionado por um propósito, a menos que você permita; objetos em queda nunca o atingirão, a menos que alguma vontade de machucá-lo os coloque em movimento. Armadilhas destinadas a atingir um intruso têm chance de atingi-lo. Armaduras e escudos não lhe trazem benefícios."
        }
      ],
      greater: [
        {
          name: "Presença Onipresente (All-Encompassing Presence)",
          type: "No Turno",
          content: "Comprometa Esforço. Duas vezes durante o seu turno, como uma ação No Turno, você pode estar em qualquer lugar dentro de um raio de 30 metros (100 pés) da sua localização atual, desde que consiga se mover para esse ponto por meios próprios."
        },
        {
          name: "Mais Rápido que o Pensamento (Faster Than Thought)",
          type: "Instante (Golpe / Smite)",
          content: "Comprometa Esforço até o fim da cena quando qualquer pessoa visível declarar uma ação. Você ganha a ação e o movimento de uma rodada gratuita antes que eles possam executar o ato deles. Se a ação desejada por eles for tornada impossível pela sua, a ação deles é desperdiçada. Por ser uma dádiva de Golpe (Smite), esta não pode ser usada dois turnos seguidos."
        },
        {
          name: "Intocável (Untouchable)",
          type: "Instante",
          content: "Comprometa Esforço até o fim da cena para se tornar extremamente difícil de ser atingido até o início do seu próximo turno. Ataques físicos o atingem apenas em um 20 natural, mesmo aqueles ataques de inimigos que normalmente acertariam automaticamente. Sendo uma dádiva Instante, você pode usá-la após uma jogada de ataque."
        }
      ]
    }
  },
  {
    id: "artifice",
    name: "Artifício (Artifice)",
    shortDesc: "A Palavra de artífices, construtores e criadores de invenções maravilhosas, permitindo moldar, reparar e destruir objetos.",
    description: "Esta é a Palavra de artesãos, construtores e criadores de criações maravilhosas. Alguns Godbound expressam sua afinidade através de uma forma particular de artesanato, como ferraria ou construção naval, enquanto outros são patronos de uma gama mais ampla de trabalho criativo. No entanto, mesmo artesãos focados podem usar seus poderes de maneira geral. Milagres de Artifice envolvem a criação, comando, reparo ou destruição de objetos físicos. Heróis com a Palavra Artifice podem criar qualquer objeto não mágico que um homem comum possa carregar como uma ação de round, usando quaisquer materiais disponíveis. Embora a criação resultante possa parecer estranha e quaisquer \"alimentos\" sejam invedíveis, ela funciona e dura tão bem quanto um objeto normal de seu tipo e substância habitual. Os esforços de artesanato do herói por um dia contam como 100 trabalhadores por nível de personagem quando uma estimativa for necessária.",
    gifts: {
      lesser: [
        {
          name: "Reparo Impecável (Faultless Repair)",
          type: "Ação",
          content: "Você pode consertar qualquer coisa com os materiais e ferramentas disponíveis. Até um cubo de 3 x 3 x 3 metros (10x10x10 pés) por nível em objetos ou construções pode ser feito como novo a cada rodada, desde que não esteja completamente destruído. Toda forma de apodrecimento, deterioração, dano e corrupção é consertada, mesmo para perecíveis como alimentos. Ao reparar itens mágicos ou encantados, o Esforço é Comprometido para a cena a cada uso da dádiva."
        },
        {
          name: "Comandar as Rodas (Command the Wheels)",
          type: "Ação",
          content: "Comprometa Esforço. Você pode assumir o controle de qualquer veículo visível, mecanismo, porta ou outro objeto com peças móveis de até o tamanho de um navio pequeno. Se o item foi criado por você, não há limite de tamanho para o que pode ser controlado. Enquanto o Esforço permanecer comprometido, o objeto funcionará exatamente como se estivesse sendo manipulado, dirigido ou pilotado por você. Cada nova diretiva exige uma ação, e inimigos poderosos podem fazer um teste de resistência contra Espírito para anular a dádiva em itens que estejam usando."
        },
        {
          name: "Mão de Martelo (Hammerhand)",
          type: "No Turno",
          content: "Comprometa Esforço. Toda arma ou ataque desarmado que você usar rola pelo menos um dado de dano de 1d10 e é tratado como uma arma mágica. Contra construções artificiais ou coisas inanimadas, esta rolagem de dano é lida diretamente."
        },
        {
          name: "Marcar o Criador (Mark the Maker)",
          type: "Ação",
          content: "Com a inspeção cuidadosa de uma ação, você entende o propósito e a operação de qualquer objeto crafted (fabricado), mágico ou mundano. Você também obtém uma breve visão de cada pessoa que ajudou substancialmente em sua criação e uma curta descrição do que elas contribuíram para ele."
        },
        {
          name: "Dez Mil Ferramentas (Ten Thousand Tools)",
          type: "Constante",
          content: "Seus dons naturais de criação são aumentados. Em vez de exigir uma rodada inteira para criar um objeto mundano portátil, você pode fazê-lo como uma ação No Turno, como parte de qualquer ação que realizar. Este objeto pode ser uma criação permanente ou ter permissão para desaparecer depois, a seu critério. Seu trabalho diário em projetos vale o equivalente a 1.000 trabalhadores por nível. Esta dádiva não tem utilidade para um Godbound que não tenha vinculado esta Palavra."
        },
        {
          name: "Transmutador (Transmuter)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e transforme um cubo de 3 x 3 x 3 metros (10x10x10 pés) de material por nível de herói de uma substância física em outra. Itens usados ou seguidos por uma criatura não podem ser alterados. Se o efeito for usado para de alguma forma causar dano a alvos, eles recebem um dado de dano de 1d6 para cada dois níveis de personagem do herói, arredondado para cima. Se a substância criada for rara ou preciosa, o Esforço deve ser comprometido pelo dia. Substâncias extremamente raras e mágicas não podem ser criadas desta forma, embora montanhas de ouro possam ser fabricadas. Veja a Palavra de Riqueza (Wealth) para limites no uso desse tesouro recém-descoberto, pois é muito fácil inflar a economia mundana de uma região até o caos."
        }
      ],
      greater: [
        {
          name: "Os Olhos do Criador (The Maker’s Eyes)",
          type: "Ação",
          content: "Como uma ação, você pode perceber instantaneamente a área ao redor de qualquer objeto que você criou como se estivesse lá, vendo e ouvindo tudo ao seu redor. Se você Comprometer Esforço para a cena, poderá realizar uma ação com o objeto como se estivesse presente para manipulá-lo. Se escolher um local específico para focar, você enxerga através do objeto válido mais próximo."
        },
        {
          name: "Perfeição Perpétua (Perpetual Perfection)",
          type: "Constante",
          content: "Tudo o que você faz é impecável e impermédio à deterioração e ao desgaste normal. Apenas esforços intencionais de destruição têm alguma chance de arruiná-los. As armas e armaduras que você cria contam como itens mágicos, capazes de ferir inimigos sobrenaturais e conceder um bônus de +1 nas jogadas de ataque e dano para wielder (portadores) mortais. Você e outros Godbound são poderosos demais para se beneficiarem deste bônus de ataque e dano."
        },
        {
          name: "Reverência ao Aço (Reverence of Steel)",
          type: "Constante",
          content: "Qualquer roupa ou armadura que você fizer para si mesmo concede uma CA de 3, sem penalidades em testes de resistência. Quando você faz um traje especificamente para outra pessoa, quaisquer penalidades em testes de resistência são um nível mais leves: nenhuma para armadura média, e apenas um teste de resistência penalizado para armadura pesada. Como uma ação Instante, Comprometa Esforço para a cena para anular um acerto que você receber de uma arma fabricada ou trabalhada."
        }
      ]
    }
  },
  {
    id: "beasts",
    name: "Feras (Beasts)",
    shortDesc: "A Palavra do reino animal, permitindo falar com animais, adotar suas características, metamorfose e comando de feras.",
    description: "A Palavra do reino animal, as dádivas de Beast podem ser usadas em qualquer animal natural ou mágico, embora não em criaturas feitas inteiramente de feitiçaria ou artifício impossível. A maioria das criaturas com inteligência humana não se qualifica como besta, embora algumas entidades excepcionalmente primais ou selvagens possam ser tratadas como tal. Milagres da Palavra Beast envolvem adotar traços de animais, impor esses traços em outros, metamorfose total ou híbrida, comandar feras ou invocar animais. Alguns poderes concedem ao usuário a forma total ou parcial de um animal, ou permitem que transformem outro. Se usado como uma maldição, o herói pode infligir o intelecto do animal ao alvo ou permitir que ele retenha sua própria mente em sua nova casca. Se usado como uma bênção ou uma transformação pessoal, a mente original é retida, embora com uma consciência instintiva de como usar as habilidades naturais do animal. As regras de metamorfose são descritas em detalhes na página 160. Se usar o armamento natural de uma criatura para atacar, criaturas pequenas, mas perigosas, usam um dado de dano de 1d6, aquelas do tamanho de lobo ou urso usam um dado de dano de 1d8, e criaturas maiores usam um dado de dano de 1d10. Assim, transformar mortais em feras ferozes não melhoraria realmente sua proeza, mas apenas mudaria sua aparência exterior e daria a eles a locomoção natural das feras. Embora as dádivas aqui não abordem isso, outros milagres ou dádivas da Palavra Beast podem ser capazes de conceder habilidades ou qualidades especiais da forma de um animal por Esforço adicional. Heróis com a Palavra Beast podem falar com animais. Bestas não inteligentes sempre cumprirão pedidos que não sejam antinaturais para elas.",
    gifts: {
      lesser: [
        {
          name: "Uivo Distante (Distant Howl)",
          type: "No Turno",
          content: "Comprometa Esforço. Você pode se comunicar à distância com qualquer animal cuja localização você conheça com precisão de até um quilômetro e meio (uma milha). Você pode emprestar os sentidos deles se permitirem. Animais que passaram pelo menos uma semana em sua presença podem ser alcançados onde quer que estejam."
        },
        {
          name: "Olhos de Gato (Eyes of the Cat)",
          type: "Constante",
          content: "Você possui sentidos hiperagudos; você pode enxergar na escuridão perfeita, ouvir perfeitamente qualquer ruído em um raio de cerca de 90 metros (cem jardas) e rastrear pelo olfato."
        },
        {
          name: "Elo de Unidade (Link of Unity)",
          type: "Constante",
          content: "Você pode se conectar com um animal, ligando-o como uma extensão do seu espírito e permitindo o compartilhamento de sentidos e comunicação. Ele usa suas estatísticas normais, mas seus ataques são tratados como armas mágicas e seus dados de vida são o dobro do seu nível. Se ele morrer, ele desaparece, mas pode ser invocado de volta Comprometendo Esforço pelo dia. Ele pode ser teletransportado para o seu lado pelo mesmo custo. Apenas um animal pode estar vinculado por vez, e humanos vinculados com Conquistar a Besta Interior devem ser mortais normais."
        },
        {
          name: "Vermelho em Dente e Garra (Red in Tooth and Claw)",
          type: "No Turno",
          content: "Comprometa Esforço. Você possui ou pode manifestar instantaneamente armamentos naturais que causam 1d10 de dano e contam como uma arma mágica. Contra feras naturais ou mágicas, essas garras ou presas sempre atingem contra a CA 9, pois rasgam sem esforço as peles ou escamas desses inimigos."
        },
        {
          name: "Rastrear a Presa (Scent the Prey)",
          type: "No Turno",
          content: "Comprometa Esforço para obter uma percepção intuitiva das localizações e tipos de todas as feras em um raio de um quilômetro e meio (uma milha). Você pode convocar telepaticamente qualquer uma delas para ir até você o mais rápido que puderem fazer isso com segurança. Feras mágicas ou inteligentes podem recusar o chamado se assim o desejar."
        },
        {
          name: "Vontade Indomada (Untamed Will)",
          type: "Instante",
          content: "Comprometa Esforço. Enquanto estiver comprometido, nenhuma magia externa ou compulsão pode fazer você fazer ou sentir qualquer coisa contrária aos seus desejos. Você pode invocar esta dádiva mesmo após falhar em um teste de resistência ou ser atingido por um efeito mental."
        }
      ],
      greater: [
        {
          name: "Conquistar a Besta Interior (Conquer the Beast Within)",
          type: "Constante",
          content: "Quando você derrota um inimigo em combate, reduzindo-o a zero dados de vida, você pode escolher subjugá-lo se usar um ataque não letal conforme descrito na página 160. Essa vítima subjugada revive com 1 dado de vida e, para sempre, fica sujeita às suas dádivas de Besta como se fosse um animal."
        },
        {
          name: "Senhor da Selva (Lord of the Wild)",
          type: "Constante",
          content: "Os animais instintivamente o servem e obedecem até a morte, executando comandos como se tivessem intelecto humano. Feras mágicas ou inteligentes recebem um teste de resistência de Espírito e não podem ser comandadas a agir de uma maneira que pareça suicida para elas ou completamente contra a sua natureza."
        },
        {
          name: "Manto de Muitas Peles (Many-Skinned Mantle)",
          type: "Ação",
          content: "Adote a forma de qualquer fera ou híbrido, natural ou mágico. Alternativamente, transforme uma criatura viva visível em uma fera natural; Comprometa Esforço até o fim do dia para afetar um inimigo poderoso, que também recebe um teste de resistência de Vigor (Hardiness) para resistir. Se usado como uma bênção, um alvo humano pode encerrar a mudança à vontade. Aqueles mal dizidos com uma mudança não podem ser revertidos por nada menos que outra dádiva ou dispersão poderosa semelhante."
        }
      ]
    }
  },
  {
    id: "birds",
    name: "Pássaros (Birds)",
    shortDesc: "A Palavra dos Pássaros, concedendo a capacidade de voar, comunicação com aves e controle absoluto sobre criaturas aladas.",
    description: "A Palavra de Birds é um exemplo do tipo de poderes que podem ser concedidos a um exemplar de um único tipo de animal. Tais dádivas não são mais potentes do que a Palavra de Beasts, mas podem tocar em poderes ou graças que podem ser muito tangenciais a uma Palavra mais ampla. Aqueles ligados à Palavra de Birds podem voar em sua taxa de movimento base e se comunicar livremente com qualquer criatura aviária. Aves não mágicas nunca os farão mal de boa vontade e obedecerão até mesmo a comandos suicidas do Godbound, executando-os com tanta inteligência e compreensão quanto um humano normal. No entanto, os pássaros tendem a ser suscetíveis a distrações e, portanto, não podem ser mantidos em serviço por mais do que uma cena de cada vez dessa maneira.",
    gifts: {
      lesser: [
        {
          name: "Ápice do Bando (Apex of the Flock)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. O Godbound pode se comunicar telepaticamente com qualquer ave individual que ele tenha visto pessoalmente antes, vendo através de seus olhos e ouvindo o que ela ouve. Aves mundanas e inimigos menores podem ser comandados como se estivessem presentes. Inimigos poderosos não podem ser comandados, mas não podem impedir o Godbound de contatá-los ou compartilhar seus sentidos. Este contato dura por uma cena."
        },
        {
          name: "Olhos do Falcão Caçador (Eyes of the Hunting Hawk)",
          type: "No Turno",
          content: "Comprometa Esforço. O Godbound ganha acuidade visual incrível, capaz de ver em qualquer nível de luz e distinguir claramente os menores detalhes de qualquer alvo mais próximo que o horizonte. A furtividade não mágica é inútil contra o usuário, e itens ou características ocultas mundanamente são óbvias."
        },
        {
          name: "Manto de Plumas (Feathered Mantle)",
          type: "Ação",
          content: "O Godbound assume a forma de uma ave, não menor que um beija-flor e não maior que a maior ave mundana do reino. Esta mudança de forma não altera as habilidades especiais do Godbound, e ele não ganha nenhuma habilidade não natural possuída pela nova forma de ave. A mudança dura pelo tempo desejado e pode ser revertida como uma ação de No Turno. Se o Godbound Comprometer Esforço para a cena, ele pode aplicar uma transformação semelhante a qualquer alvo à vista; Inimigos Poderosos recebem um teste de resistência de Vigor (Hardiness) para resistir e se tornam imunes a este poder pela cena. Inimigos menores não têm chance de resistir. A transformação permanece até que o Godbound os liberte ou a habilidade seja dissipada. Aves transformadas não estão sujeitas ao controle inato de aves da Palavra."
        },
        {
          name: "O Canto do Rouxininol (The Nightingale's Song)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. O canto do Godbound, seja em forma humana ou aviária, é encantador para os ouvintes. Uma ideia simples pode ser transmitida pelo canto, que pode afetar até uma Grande Multidão de ouvintes. Os sujeitos acreditarão nessa ideia ou a realizarão até os limites de seu caráter natural ou bem-estar pessoal pelo resto da cena. Ideias que não contradizem evidências observadas ou inclinações naturais continuarão a ser acreditadas depois até que se provenham incorretas. Inimigos menores não podem resistir a este canto, mas inimigos poderosos podem fazer um teste de resistência de Espírito para se tornarem imunes a ele pela cena."
        },
        {
          name: "Mergulho Vermelho do Raptor (Raptor's Red Plunge)",
          type: "No Turno",
          content: "Comprometa Esforço para a cena e escolha um alvo visível a até uma milha. O Godbound dispara instantaneamente para perto do alvo, desde que não haja barreira entre eles que não possa ser contornada voando. Pelo resto da cena, o Godbound pode usar sua ação de Movimento para avançar para perto do alvo, não importa o quão longe ele se mova, desde que o alvo permaneça dentro de uma milha. Se o alvo for um inimigo menor, o Godbound pode usar seu ataque para eviscerá-lo automaticamente ou pegá-lo, matando-o ou deixando-o totalmente indefeso até ser liberado."
        },
        {
          name: "Garras e Bico (Talons and Beak)",
          type: "No Turno",
          content: "Comprometa Esforço. O Godbound cresce garras afiadas, um bico navalhado, penas perfurantes ou alguma outra arma natural apropriada para uma ave. Essas armas brancas causam 1d10 de dano. A primeira vez em cada cena em que o usuário faz um ataque de mergulho de uma altitude de pelo menos 50 pés, o ataque é um acerto automático e o dano é rolado duas vezes, sendo usado o melhor resultado."
        }
      ],
      greater: [
        {
          name: "Criador de Asas (Maker of Wings)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. O Godbound pode criar até uma Pequena Multidão de aves mundanas do nada (ex nihilo) ou convocar uma Grande Multidão de aves locais que chegarão em dez minutos. Esta Multidão tem as estatísticas de combate efetivas de uma Multidão de soldados humanos, exceto com uma velocidade de voo de 60 pés, poderes limitados de manipulação manual e imunidade a qualquer fonte de dano não mágico que não matasse números significativos de aves individuais, como os golpes de lança de um único homem. O Godbound pode controlar apenas uma Multidão por vez, e mudar os comandos da Multidão requer uma ação adicional. Estas aves são absolutamente leais e continuarão obedecendo ordens até serem destruídas ou a cena terminar."
        },
        {
          name: "Príncipe do Ar (Prince of the Air)",
          type: "Constante",
          content: "Qualquer criatura ou objeto voador ou aerotransportado está sujeito à ira do Godbound; os ataques do Godbound contra tais alvos sempre acertam com dano máximo, e quaisquer poderes ofensivos usados contra tais alvos aplicam uma penalidade de -2 em seus testes de resistência e infligem dano máximo ou efeito rolado máximo possível. Se invocado como um milagre, esta dádiva dura uma rodada."
        },
        {
          name: "Velocidade Soprada pela Tempestade (Storm-Blown Swiftness)",
          type: "Constante",
          content: "A velocidade de voo do Godbound é dobrada e, ao viajar por terra sem interrupção, ele pode atingir velocidades de até 100 milhas por hora. Ao perseguir ou ser perseguido por uma criatura voadora, ele invariavelmente foge ou alcança o alvo. Ao Comprometer Esforço como um Instante, ele pode compartilhar seus poderes de voo com outra criatura visível, que então ganha a taxa de movimento de voo do usuário enquanto o Esforço permanecer Comprometido. Um único Comprometimento compartilhou os poderes de voo do portador com até meia dúzia de aliados. Se o portador ficar inconsciente ou o Esforço for recuperado, os aliados descerão imediatamente em segurança para o solo."
        }
      ]
    }
  },
  {
    id: "bow",
    name: "Arco (Bow)",
    shortDesc: "A Palavra do combate à distância, abrangendo arcos, armas de fogo, arremessos e precisão divina incomparável.",
    description: "A Palavra de Bow inclui todas as divindades do combate à distância, seja com arco, lança arremessada, pistola, rifle, adaga arremessada ou um raio de energia lançado. Heróis com a dádiva Alcance Onipresente podem nem usar uma arma física de tais formas, lançando em vez disso disparos de alguma energia apropriada. Tais disparos podem causar dano elemental se o herói estiver alinhado com tais Palavras, ou podem ser explosões físicas de força divina concussiva. Milagres de Bow envolvem dano impossivelmente preciso entregue a enormes distâncias ou o amaldiçoamento e condenação da tentativa de outro de realizar um ataque à distância. Note que os benefícios concedidos pelas dádivas de Bow aplicam-se apenas a projéteis e outras armas ou disparos evocados pelas dádivas desta Palavra. Eles não se aplicam a outros ataques à distância de outras Palavras ou à magia que simplesmente aconteça de ser desferida à distância, como a dádiva Ira Divina permitida a todas as Palavras. Heróis com a Palavra Bow nunca ficam sem munição normal. Eles podem chamar instantaneamente armas de alcance ou de arremesso que usaram para suas mãos a qualquer distância, e seus ataques com armas à distância nunca ferem nenhum alvo que eles não pretendiam machucar. Seus ataques à distância sempre contam como mágicos para fins de superar defesas.",
    gifts: {
      lesser: [
        {
          name: "Barrer a Descida Vermelha (Bar the Red Descent)",
          type: "No Turno",
          content: "Comprometa Esforço. Você possui uma defesa invulnerável contra projéteis normais e não recebe mais de 1 ponto de dano por acerto de projéteis mágicos. Apenas armas reais, como flechas, balas, lanças e pedras de trabuco são afetadas por isto, não simpatias, feitiços ou efeitos mágicos."
        },
        {
          name: "Disparo da Perícia Invencível (Bolt of Invincible Skill)",
          type: "Instante",
          content: "Você sempre atinge um alvo desavisado ou inanimado, não importa o quão pequeno seja ou o quão coberto esteja. Opcionalmente, você pode Comprometer Esforço até o fim da cena para garantir que seu ataque à distância atual ou seguinte cause dano máximo e atinja qualquer coisa, exceto em uma rolagem natural de 1."
        },
        {
          name: "Tempestade Emplumada (Feathered Tempest)",
          type: "No Turno",
          content: "Comprometa Esforço. Contra inimigos menores, você sempre acerta com ataques à distância. Você pode distribuir qualquer dano excedente para quaisquer outros alvos ao alcance sujeitos a esta dádiva."
        },
        {
          name: "Nenhum Fora do Alcance (None Beyond Reach)",
          type: "Instante",
          content: "Seus ataques à distância não têm alcance máximo, desde que você possa ver o que está atirando com sua visão natural ou saiba a localização do alvo com precisão de até 3 metros (10 pés). Esta habilidade se estende apenas ao mesmo reino em que você habita atualmente."
        },
        {
          name: "Alcance Onipresente (Omnipresent Reach)",
          type: "Constante",
          content: "Suas armas de ataque à distância têm um alcance máximo tão distante quanto sua linha de visão natural. Suas armas de projétil sempre causam pelo menos 1d10 de dano e são tratadas como armas mágicas. Mesmo sem um arco ou arma de fogo, você pode disparar projéteis de força ou armas conjuradas que causam 1d10 de dano. As pistolas e fuzis da República Brilhante funcionam para você mesmo na ausência do efeito estabilizador de um nó etérico."
        },
        {
          name: "O Voo Perseguidor (The Seeking Flight)",
          type: "No Turno",
          content: "Escolha um alvo visível e Comprometa Esforço até o fim da cena. Seus ataques à distância o buscam independentemente do alcance, o tratam como CA 9 e ignoram completamente a cobertura, desde que haja pelo menos algum caminho para sua flecha ou projétil alcançá-lo."
        }
      ],
      greater: [
        {
          name: "O Projétil Inexorável (The Inexorable Shaft)",
          type: "No Turno",
          content: "Comprometa Esforço. Seus ataques à distância golpeiam com uma força tremenda, sempre causando seu dano máximo em um acerto. Seus projéteis podem penetrar qualquer espessura de materiais não mágicos para perfurar a cobertura que protege um alvo, embora a armadura dele se aplique normalmente."
        },
        {
          name: "Senhor Daquilo que Cai (Lord of That Which Falls)",
          type: "Instante",
          content: "Comprometa Esforço. Redirecione quaisquer ataques de armas à distância em sua presença, com a rolagem de ataque aplicada contra o novo alvo. Inimigos poderosos só podem ter seus ataques redirecionados se estiverem atirando em você. Projéteis podem ser redirecionados para qualquer alvo, embora uma única vítima não possa ser alvo de mais de um ataque por rodada desta forma. Indivíduos que também se vincularam à Palavra do Arco são imunes a este poder, assim como outras divindades afiliadas ao arco."
        },
        {
          name: "Chuva de Lamentações (Rain of Sorrow)",
          type: "No Turno",
          content: "Comprometa Esforço. Contra Multidões (Mobs), os dados de dano dos seus ataques com armas à distância são lidos diretamente e somados ao seu nível. Assim, um Godbound de 4º nível disparando uma arma de 1d10 com um bônus de atributo de +2 infligiria de 7 a 16 dados de vida de dano contra uma Multidão. Contra alvos não agrupados em uma Multidão, você pode rolar seu dado de Fray (Refrega) contra cada inimigo aplicável à vista a cada rodada."
        }
      ]
    }
  },
  {
    id: "cities",
    name: "Cidades (Cities)",
    shortDesc: "A Palavra da cidade, encarnando o espírito das multidões urbanas, edifícios e ruas, com domínio absoluto dentro de territórios urbanos.",
    description: "Cada cidade tem seu espírito, seja ele literal ou figurativo. O Godbound of the City é um avatar das multidões humanas, dos emaranhados urbanos de pedra, madeira e tijolos de barro que abrigam os sonhos de muitos. Sua influência é sobre a população sem rosto de seus domínios, os homens e mulheres simples que tornam a cidade uma cidade, e não uma mera turba aglomerada. Assim também eles comandam os edifícios e estruturas mais profundas de uma cidade, controlando pedra e rua como outro Godbound poderia manejar fogo ou relâmpagos furiosos. Suas habilidades têm pouca aplicação fora desses lugares, embora possam evocar edifícios mesmo em um ermo estéril, convocando uma cidade nascida de seus próprios sonhos e desejos. Godbound of Cities podem se mover para qualquer lugar dentro de uma cidade, passando por paredes e outras construções como se fossem inexistentes. Eles podem se misturar perfeitamente com os habitantes locais, falando seu idioma e sabendo tudo o que um ocupante comum sabe sobre a cidade. Uma vez que tenham visitado a cidade, esse conhecimento permanece mesmo depois que vão para outro lugar e é atualizado com os principais eventos atuais. Apenas inimigos dignos têm alguma chance de perfurar essa impostura de cidadão, e isso apenas após interação de perto com um teste de resistência de Espírito bem-sucedido. Muitos desses poderes se aplicam apenas a ou dentro de cidades. Para os propósitos desta Palavra, uma \"cidade\" é qualquer comunidade contígua autoproclamada que consista de mais de 999 pessoas, com seus limites estendendo-se até as estruturas mais distantes habitadas por pessoas que se consideram cidadãos da cidade. Acampamentos nômades não contam como cidades, salvo ocupação persistente e regular. Mundus Wards também podem aumentar o custo desses poderes se forem direcionados a uma pessoa abrigada dentro de um edifício protegido.",
    gifts: {
      lesser: [
        {
          name: "Coragem da Multidão (Courage of the Multitude)",
          type: "No Turno",
          content: "Comprometa Esforço pelo dia. Você inspira e sustenta os cidadãos de uma cidade que você ocupa atualmente. Cada cidadão mortal comum ganha +1 DV (HD), um bônus de acerto igual ao seu nível e Moral 12 ao enfrentar ameaças à cidade como um todo. Você pode excluir grupos específicos ou locais hostis deste benefício. Enquanto ativo, esta cidadania corajosa conta como uma Característica que não adiciona Problemas extras a uma facção, nem pode ser sacrificada em uma derrota de conflito. A dádiva e a Característica duram até que você as encerre ou use a dádiva em outra cidade. Esta dádiva não pode ser usada como um milagre."
        },
        {
          name: "Um dos Muitos (One of the Many)",
          type: "Constante",
          content: "Você tem uma conexão intuitiva com a cidadania comum de uma cidade quando está dentro de seus limites. Cidadãos que são inimigos menores nunca iniciarão violência, a menos que sejam vigorosamente provocados, e sempre fornecerão favores ou assistência que não os inconvenienciem significativamente. Você detecta automaticamente as figuras importantes da cidade, sua localização e seu papel geral: mestres de Guildas de ladrões, reis ocultos, prefeitos e autoridades conhecidas, e pilares muito amados da comunidade."
        },
        {
          name: "Pai da Pedra e da Rua (Sire of Stone and Street)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia. Você pode evocar construções e engenharia civil em um estilo apropriado para qualquer cidade que você conheceu. Um único uso desta dádiva cria estruturas dentro de um cubo de cem pés por nível do personagem, com os edifícios subindo e se formando ao longo de uma hora. Qualquer construção apropriada para uma cidade pode ser evocada, mesmo que o ambiente local careça dos materiais necessários. Os edifícios são equipados com móveis e objetos mundanos apropriados à sua função. Esta dádiva não é utilizável como um milagre."
        },
        {
          name: "Andarilho das Ruas (Streetwalker)",
          type: "Ação",
          content: "Comprometa Esforço para a cena enquanto estiver em uma rua, beco ou atalho da cidade. Você e seus companheiros na mesma rua são transportados instantaneamente para qualquer local em outra rua na mesma cidade. Inimigos menores no seu ponto de partida ou de destino não notarão nada de anômalo em seu movimento, racionalizando-o como alguma fuga rápida ou presença atual que eles não haviam notado."
        },
        {
          name: "Barricadas Ocultas (Unseen Barricades)",
          type: "Ação",
          content: "Enquanto estiver dentro de uma cidade, Comprometa Esforço para a cena e mire em um número de sujeitos até uma Pequena Multidão dentro da mesma cidade, independentemente de você saber a localização deles ou poder senti-los. Eles são incapazes de se mover de sua vizinhança atual, achando cada caminho para outro lugar de alguma forma bloqueado ou confuso para eles, mesmo que outros tentem carregá-los. Opcionalmente, o Godbound pode amaldiçoá-los para que cada curso que tomem os leve invariavelmente a um lugar específico. Inimigos menores não podem resistir a esta dádiva, enquanto inimigos poderosos podem fazer um teste de resistência de Evasão para se tornarem imunes pelo dia. A maldição dura até que o Godbound os liberte ou ela seja dissipada, com inimigos poderosos ganhando outro teste de resistência a cada 24 horas."
        },
        {
          name: "Vereador da Ala (Ward Alderman)",
          type: "Constante",
          content: "Você tem um vínculo profundo e compassivo com uma cidade, de modo que nem mesmo a défiância de uma Ala de Mundus (Mundus Ward) ou uma Ala Empírea (Empyrean Ward) pode interferir na sua vontade. Desde que você esteja pessoalmente dentro da área afetada por uma Ala e desde que a Ala esteja dentro dos limites de uma cidade, a força da Ala é diminuída pelo seu nível de personagem. Se você usar suas habilidades para prejudicar a cidade como um todo, no entanto, e não apenas alguns edifícios ou pessoas, esta dádiva não poderá ser usada na mesma cidade por um ano e um dia."
        },
        {
          name: "Palavra na Rua (Word on the Street)",
          type: "No Turno",
          content: "Você pode falar com ou espiar qualquer pessoa dentro de qualquer cidade, desde que você a tenha conhecido. Apenas você e o alvo ouvem qualquer conversa, enquanto a espionagem é imperceptível. Inimigos menores não podem resistir a este poder, enquanto inimigos poderosos podem fazer um teste de resistência versus Espírito para se tornarem imunes por uma cena; em caso de falha, eles não têm consciência de que estão sendo ouvidos. Ao Comprometer Esforço pelo dia, você pode enviar uma mensagem para qualquer grupo dentro de uma cidade que você visitou, visando desde uma única pessoa até uma profissão inteira, culto ou população. Os destinatários não são obrigados a prestar atenção à sua mensagem, mas a sentirão como um reconhecimento intuitivo."
        }
      ],
      greater: [
        {
          name: "Cidade dos Mortos (City of the Dead)",
          type: "Ação",
          content: "Você amaldiçoa uma cidade ou alguma estrutura dentro dela. Se direcionado a um edifício urbano, ele desmoronará, infligindo o nível de personagem do Godbound em dano a todos lá dentro. Até uma estrutura de palácio inteira pode desabar com uma única maldição. Se uma maldição for direcionada a toda a cidade, ela se tornará incapaz de funcionar; cidadãos comuns começam a lutar entre si, e toda a cidade será abandonada e arruinada dentro de um mês se este poder não for dissipado ou o Godbound não ceder. Este poder não pode ser invocado como um milagre."
        },
        {
          name: "Conselho de Um (Council of One)",
          type: "Constante",
          content: "Comprometa Esforço. Enquanto você permanecer em uma cidade e o Esforço permanecer Comprometido, os ocupantes o tratam inconscientemente como seu governante legítimo. Você será obedecido como se fosse igual ao prefeito, lorde, conselho municipal ou outra autoridade suprema da cidade, na medida em que o alvo realmente respeite qualquer um desses personagens. Mesmo inimigos poderosos o tratarão automaticamente como em paridade com o governante existente, embora possam não estender a você mais deferência do que estenderiam ao prefeito. Esta dádiva é extremamente sutil e corta até mesmo o efeito de silenciamento das Alas Empíreas ou de Mundus. Ocupantes que saem da cidade podem fazer um teste de resistência de Espírito para descartar essa deferência instintiva se forem fortemente desafiados sobre isso, mas ela cairá sobre eles mais uma vez se retornarem."
        },
        {
          name: "Almas da Cidade (Souls of the City)",
          type: "Ação",
          content: "Enquanto estiver dentro de uma cidade ou de uma área urbana vazia de pelo menos mil pés de diâmetro, o Godbound pode criar uma Pequena Multidão de seus cidadãos, até vinte e quatro pessoas. Esses cidadãos criados obedecerão ao Godbound totalmente até serem destruídos ou o Godbound usar esta dádiva novamente, após o que as criações anteriores se tornam livres, mas bem-dispostas para com seu criador, embora não arrisquem suas novas vidas por eles. Os cidadãos lutam como soldados humanos normais e são equipados com as habilidades e ferramentas comuns de seus papéis pretendidos. Se criados do nada, os cidadãos são construtos extremamente realistas, sem verdadeira vontade de fazer nada além de cumprir seus papéis. Se usado em um local onde um número adequado de almas humanas recentemente mortas ou persistentemente mortas-vivas ainda permanece, os espíritos podem habitar os corpos recém-criados, tornando-se pessoas reais que podem ou não se lembrar muito de suas vidas ou identidades anteriores. Tanto autômatos quanto corpos imbuídos de alma se desintegrarão se deixarem a cidade depois, mas os corpos imbuídos de alma podem se reproduzir para produzir crianças humanas perfeitamente normais."
        }
      ]
    }
  },
  {
    id: "command",
    name: "Comando (Command)",
    shortDesc: "A Palavra de comando, liderança e governo, permitindo compelir a submissão e a aceitação de sua soberania.",
    description: "A Palavra de Command fala de obediência, liderança e governo. Godbound de Command podem compelir a submissão dos outros à sua vontade e a aceitação de seu governo, mas não podem tocar nos corações daqueles que comandam. Embora súditos enfeitiçados cumpram ordens meticulosamente e racionalmente, eles não exercerão sua própria iniciativa a menos que concordem com os desejos do Godbound. Heróis com a Palavra Command podem definir sua pontuação de Carisma para 16, ou para 18 se já for 16 ou superior. Eles podem se comunicar com qualquer criatura inteligente, entendendo-a e sendo compreendidos por sua vez. Seus comandos são sempre compreendidos corretamente, embora a obediência dependa de sua eloquência ou do uso de suas dádivas.",
    gifts: {
      lesser: [
        {
          name: "Guarda! Agarrem-no! (Guards! Seize him!)",
          type: "Ação",
          content: "Até uma Multidão Pequena (Small Mob) de subordinados ou meia dúzia de servidores individuais podem aparecer no local atual, desde que estejam a até dez milhas do Godbound. Apenas seguidores formalmente juramentados ao Godbound podem ser convocados, e eles não podem ser convocados para nenhum lugar que não pudessem alcançar por meios próprios na prática. Os servidores convocados aparecem onde seria mais lógico entrarem, pois os poderes do Godbound fizeram com que se apressassem para atender ao chamado antes mesmo de ele ser feito."
        },
        {
          name: "Conhecer a Verdade Interior (Know the Inner Truth)",
          type: "No Turno",
          content: "Comprometa Esforço para a cena. Compreenda as verdadeiras motivações e intenções de qualquer parceiro de conversa, expressas pelo Mestre em algumas frases. Inimigos poderosos recebem um teste de resistência de Espírito para ocultar a verdade."
        },
        {
          name: "A Sabedoria do Tenente (The Lieutenant's Wisdom)",
          type: "Ação",
          content: "Comprometa Esforço antes de dar uma ordem a uma pessoa ou grupo a seu serviço. Enquanto o Esforço permanecer comprometido, você pode gastar uma ação para emprestar os sentidos de qualquer membro individual do grupo ou para se comunicar telepaticamente com qualquer um ou todos eles, e eles podem contatá-lo. Um sujeito pode quebrar esse vínculo, mas você fica imediatamente ciente disso. O efeito termina quando o Esforço é recuperado ou a ordem é cumprida."
        },
        {
          name: "As Linhas de Regra (The Lines of Rule)",
          type: "No Turno",
          content: "Você consegue identificar o verdadeiro líder em qualquer grupo ou contexto social. Além disso, você pode Comprometer Esforço; um grupo de NPCs que sejam inimigos menores obedecerá instintivamente a você como se fosse seu superior ou empregador. Se a estranheza disso for trazida à atenção deles pelas circunstâncias ou por aqueles não afetados, eles recebem um teste de resistência de Espírito."
        },
        {
          name: "O Coração Fiel do Soldado (The Soldier's Faithful Heart)",
          type: "Constante",
          content: "Uma criatura visível com dados de vida iguais ou inferiores ao seu nível que jura lealdade a você livremente acha o juramento totalmente obrigatório. Apenas coerção mágica pode forçá-la a desobedecer ou traí-lo até que você a libere do efeito, mesmo com ordens suicidas ou não naturais. Esta dádiva não pode afetar mais de cem pessoas por nível de personagem no total."
        },
        {
          name: "Mil Soldados Leais (A Thousand Loyal Troops)",
          type: "Ação",
          content: "Comprometa Esforço. Um NPC visível torna-se imediatamente cooperativo com você, fazendo por você tudo o que faria por um superior ou empregador. Aqueles que são inimigos poderosos recebem um teste de resistência de Espírito para resistir a este efeito. A cooperatividade dura mesmo após o Esforço ser recuperado, desde que a conformidade não seja abusada ou totalmente improvável."
        }
      ],
      greater: [
        {
          name: "Portador da Coroa Escarlate (Bearer of the Scarlet Crown)",
          type: "Constante",
          content: "Sua legitimidade como governante é inabalável. Você tem uma percepção intuitiva de todos os principais eventos públicos em grupos ou comunidades que você governa ou administra, e pode comunicar sua vontade aos seus vice-reis e oficiais a qualquer momento, embora eles não possam responder diretamente. Você ganha um ponto extra gratuito de Domínio a cada mês, embora só possa gastar esses pontos em suas próprias terras ou organizações governadas. Novos Godbound não começam o jogo com nenhum estoque de pontos, no entanto."
        },
        {
          name: "General de Ferro Invencível (Invincible Iron General)",
          type: "Constante",
          content: "Todos os soldados NPCs que servem sob seu comando ganham +1 dado de vida, um bônus de acerto igual ao seu nível e Moral de 11. Sua vontade é conhecida automaticamente por todos os seus tenentes e você sempre conhece a localização, condição e atividades gerais de todas as unidades militares que aceitam o seu comando."
        },
        {
          name: "Grito Criador de Subjugados (Thrall-Making Shout)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia e dê uma ordem. Se direcionado a um grupo, todos os inimigos menores até o número de uma Multidão Vastos (Vast Mob) obedecem instantaneamente a qualquer coisa que não seja uma ordem suicida ou um comando para não se defenderem de perigo óbvio, desde que já não estejam em combate contra o Godbound. A obediência a esta única ordem dura pela cena. Se direcionado a um único alvo que não esteja lutando contra o Godbound, qualquer coisa pode ser exigida dele até que o Godbound o liberte. Inimigos poderosos recebem um teste de resistência de Espírito para resistir ao controle."
        }
      ]
    }
  },
  {
    id: "dance",
    name: "Dança (Dance)",
    shortDesc: "A Palavra da dança, paixão e movimento, permitindo influenciar corações, comunicar-se sem palavras e restaurar o vigor físico.",
    description: "A dança é um poder de paixão e movimento, de significado em si mesma e de palavras sem enunciado. Godbound of Dance podem influenciar os corações dos observadores e desafiar as vontades daqueles que os impedem. No entanto, a graça que esta Palavra concede, ela também pode tirar. Godbound of Dance podem elevar suas pontuações de Destreza ou Carisma para 16, ou para 18 se a pontuação já for 16 ou superior. Eles podem se comunicar efetivamente com qualquer criatura inteligente, lendo sua linguagem corporal e usando pequenos movimentos exquisite e expressivos para responder por sua vez. A dança é tão restauradora quanto o sono e a comida para o Godbound e para aqueles que dançam com eles.",
    gifts: {
      lesser: [
        {
          name: "Passo Lateral Artístico (Artful Sidestep)",
          type: "Instante",
          content: "Comprometa Esforço para a cena para anular um único ataque físico contra você que teoricamente poderia ser esquivado. Se foi um ataque de efeito em área, você se reposiciona habilmente logo para fora do perigo."
        },
        {
          name: "Performance Expressiva (Expressive Performance)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Sua dança transmite uma ideia ou emoção de sua escolha, junto com um alvo para essa emoção. Inimigos menores invariavelmente acreditarão na ideia ou abraçarão a emoção e agirão de acordo com ela até o limite de seu caráter natural. Inimigos poderosos recebem um teste de resistência de Espírito para resistir à ideia."
        },
        {
          name: "Dança do Fogo (Fire Dance)",
          type: "Instante",
          content: "Comprometa Esforço para a cena e indique algum perigo natural ou ambiental, como uma tempestade tremenda, incêndio rugidor, edifício em colapso ou outra circunstância perigosa. Você e seus companheiros movem-se em perfeita harmonia com o mundo ao seu redor e são impermeáveis ao perigo pelo resto da cena, evitando qualquer dano ou empecilho do caos."
        },
        {
          name: "Pés Ligeiros (Footloose)",
          type: "Constante",
          content: "Você tem uma defesa invulnerável contra ser contido de movimento livre, seja por restrições físicas, paralisia ou efeitos mágicos. Como uma ação de No Turno, você pode Comprometer Esforço para a cena para passar através de objetos sólidos ou barreiras físicas livremente pelo resto da rodada, junto com companheiros que o sigam nessa mesma rodada."
        },
        {
          name: "Leve como o Ar (Light as Air)",
          type: "No Turno",
          content: "Comprometa Esforço. Seus passos são impossivelmente graciosos e leves, permitindo que você atravesse qualquer superfície em sua taxa de movimento total, seja líquida, vertical ou incapaz de suportar seu peso. Seu movimento nunca aciona alas ou armadilhas que dependem de pressão para funcionar."
        },
        {
          name: "Ritmo Perfeito (Perfect Rhythm)",
          type: "Constante",
          content: "Sua graça sobrenatural e senso de ritmo concedem a você uma Classe de Armadura base de 3. Você é imune a dano de queda e não pode tropeçar, escorregar ou ser movido à força da sua posição escolhida por uma força hostil."
        }
      ],
      greater: [
        {
          name: "Batalha de Dança (Dance Battle)",
          type: "No Turno",
          content: "Comprometa Esforço. Enquanto ativa, sua dança torna-se aterrorizante ou impossivelmente sedutora para os inimigos, sendo tratada como uma arma mágica causando 1d10 de dano emocional com alcance até a distância visual. Contra Multidões, este dano é lido diretamente. Se uma criatura for levada a zero pontos de vida por este dano, ela pode ser morta pelo terror ou beleza da dança, ser compelida a fugir ou ser seduzida para o seu serviço pelo resto da cena. No último caso, a criatura recupera 1 ponto de vida e é suicidadamente obediente até o fim da cena."
        },
        {
          name: "Sacudindo as Paredes (Shaking the Walls)",
          type: "Ação (Golpe / Smite)",
          content: "Comprometa Esforço pelo dia. Seus passos provocam uma vibração ruinosamente destrutiva que pode destruir todos os edifícios e estruturas sólidas de sua escolha dentro de cem pés por nível de personagem, como se por um terremoto, poupando apenas aqueles reforçados com materiais de nível divino. Criaturas inimigas pegas dentro desta zona sofrem o seu nível de personagem em dano, com Multidões sofrendo triplo dano. Seus aliados e alvos isentos por você nunca sofrem dano de estruturas em colapso."
        },
        {
          name: "Andar Sem Ritmo (Walk Without Rhythm)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e mire em um único inimigo poderoso visível ou em qualquer número de inimigos menores à vista. As vítimas tornam-se incapazes de se mover de maneiras graciosas ou controladas e perdem sua ação de Movimento a cada rodada. Para dar um passo seguro a partir de suas localizações, elas precisam usar suas Ações Principais para fazê-lo. Inimigos poderosos podem Comprometer Esforço para a cena para se livrar deste efeito, mas inimigos menores são afetados enquanto você permanecer na área. Se apenas um único inimigo menor for visado por este poder, a duração é indefinida, e o alvo pode ser reduzido a total desamparo físico por paralisias e tremores."
        }
      ]
    }
  },
  {
    id: "death",
    name: "Morte (Death)",
    shortDesc: "A Palavra da morte e do destino inevitável, permitindo comandar mortos-vivos, revelar causas de morte e manipular o fim da vida.",
    description: "Death é conhecida por tudo o que é mortal, e esta Palavra concede comando sobre esse destino inevitável. Seus milagres evitam ou provocam a morte, revelam detalhes sobre uma morte, governam os mortos inquietos ou criam mortos-vivos inquietos. Heróis com a Palavra Death podem comandar mortos-vivos em sua presença como uma ação, ordenando até uma Multidão de qualquer tamanho. Mortos-vivos maiores obtêm um teste de resistência de Espírito para resistir e não podem ser comandados a se autodestruírem. Como uma ação de No Turno, eles também sabem os detalhes de o quê, onde e como qualquer coisa morreu ou está morrendo a 100 pés deles.",
    gifts: {
      lesser: [
        {
          name: "Guardião dos Túmulos (Keeper of the Graves)",
          type: "No Turno",
          content: "Você descobre exatamente onde cada cadáver, morto-vivo ou fragmento de restos mortais está em um raio de 60 metros (200 pés) e a identidade deles em vida. Você pode dizer exatamente como eles morreram, como se tivesse observado a morte deles pessoalmente. Se você Comprometer Esforço, terá uma defesa invulnerável contra mortos-vivos menores."
        },
        {
          name: "Manto de Quieto (Mantle of Quietus)",
          type: "Instante",
          content: "Comprometa Esforço para a cena. Atacar você traz a morte. Qualquer inimigo menor que tente machucá-lo fisicamente sofre 1 ponto de dano antes que seu ataque seja resolvido, com Multidões (Mobs) sofrendo um dado normal de 1d20. Inimigos com múltiplos ataques por rodada sofrem o dano apenas uma vez por rodada."
        },
        {
          name: "Uma Coroa Pálida Chama (A Pale Crown Beckons)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Você pode evocar mortos-vivos, convocando partes instantaneamente da fonte mais próxima, se necessário. Um único morto-vivo maior com dados de vida não superiores ao dobro do seu nível é chamado, ou uma Multidão Pequena (Small Mob) de mortos-vivos menores de 1 DV é criada para cada três níveis que você possui, arredondado para cima. Um cadáver transformado em um morto-vivo maior não deve ter recebido ritos funerários ou estar morto há mais de um mês. Os mortos-vivos são leais, mas se dissolvem quando você usa esta dádiva novamente. Entidades convocadas ou Multidões podem ser preservadas indefinidamente por 1 ponto de Domínio cada."
        },
        {
          name: "Mão de Foice (Scythe Hand)",
          type: "No Turno",
          content: "Comprometa Esforço. Há morte no seu olhar ou na sua lâmina, que você pode usar como uma arma mágica. Ela possui um dado de dano de 1d10 e um alcance de 60 metros (200 pés). Este ataque sempre causa pelo menos 1 ponto de dano contra criaturas vivas ou mortos-vivos, mesmo que a rolagem de acerto falhe."
        },
        {
          name: "Colheita de Ossos Brancos (White Bone Harvest)",
          type: "Ação (Golpe / Smite)",
          content: "Comprometa Esforço para a cena. Como uma ação, você pode destruir instantaneamente qualquer morto-vivo menor hostil à vista, desde que sejam inimigos menores. Outros mortos-vivos à vista sofrem pontos de dano iguais ao seu nível, triplicados para Multidões."
        },
        {
          name: "Retendo a Misericórdia (Withholding the Mercy)",
          type: "Constante",
          content: "Aqueles reduzidos a zero dados de vida ou pontos de vida em um raio de 60 metros (200 pés) de você estabilizam ou morrem automaticamente, conforme o seu desejo. Se você desejar, criaturas vivas dispostas com 0 DV ou pontos de vida ao seu redor podem continuar agindo por tantos rounds quantos forem os seus níveis antes de caírem inevitavelmente mortas."
        }
      ],
      greater: [
        {
          name: "Sem Libertação (No Release)",
          type: "No Turno",
          content: "Comprometa Esforço e escolha um alvo visível. Ele simplesmente não pode morrer até que você recupere o Esforço. Se for reduzido a zero dados de vida ou pontos de vida, ficará incapacitado por uma hora antes de reviver com um ponto de vida. Se o seu corpo for destruído ou amplamente espalhado, ele existirá em uma névoa perpétua de agonia cega até que magia ou milagres restauradores sejam usados para reunir as partes do cadáver, ou até que o Esforço seja recuperado. Um Godbound não pode usar este poder em si mesmo."
        },
        {
          name: "Palavra Ceifadora (Reaping Word)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e escolha um alvo a qualquer alcance. Um gesto basta se você puder ver o alvo; caso contrário, você deve usar um nome que ele considere seu próprio nome verdadeiro. Inimigos menores caem mortos e não podem ser revividos sem a sua permissão. Inimigos poderosos exigem que o Esforço seja comprometido até o fim do dia e têm direito a um teste de resistência de Vigor (Hardiness) para resistir. Além disso, inimigos poderosos devem estar feridos para permitir que a Morte os alcance; mesmo um único ponto de dano é suficiente."
        },
        {
          name: "Chamado ao Dia (Summons to Day)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia. Qualquer criatura mortal normal pode ser chamada de volta da morte, desde que o cadáver esteja relativamente intacto, não tenha recebido ritos funerários ou sido entregue a um Paraíso, e não esteja morto há mais de um mês. Eles revivem com 1 dado de vida. Godbound e entidades sobrenaturais não podem ser chamados de volta desta forma."
        }
      ]
    }
  },
  {
    id: "deception",
    name: "Ilusão (Deception)",
    shortDesc: "A Palavra de dissimulação, furtividade, ilusões e mentiras, permitindo enganar percepções e detectar artifícios.",
    description: "As artes de Deception são aquelas de furtividade, ilusão e mentiras. Um trapaceiro magistral é hábil em detectar imposições, bem como em proferi-las, e seus milagres podem ter a ver com revelar o engano, bem como gravá-lo nas mentes dos outros. Dádivas de furtividade e ocultação geralmente se aplicam desde que o herói esteja evitando atenção e agindo discretamente. Violência, barulhos altos e expor-se diretamente a guardas ou outros tipos vigilantes arriscam a perda da ocultação. Heróis com a Palavra Deception podem elevar sua Destreza ou Carisma para 16, dependendo se favorecem a furtividade ou as mentiras. Se qualquer pontuação já for 16 ou superior, eles podem definir como 18 em vez disso.",
    gifts: {
      lesser: [
        {
          name: "Olho Inflexível do Enganador (Deceiver’s Unblinking Eye)",
          type: "Constante",
          content: "Você sempre sabe quando alguém está tentando mentir ou enganá-lo. Você pode enxergar através de ilusões e disfarces mortais. Esta dádiva não afeta outros Godbound com a Palavra da Enganação."
        },
        {
          name: "Um Rosto Familiar (A Familiar Face)",
          type: "Ação",
          content: "Comprometa Esforço para se misturar a uma população ou grupo. Assumindo que não estejam ativamente vigilantes contra intrusos, ninguém o incomodará a menos que você deseje o contrário, e você saberá intuitivamente como agir, falar e conduzir negócios para evitar chamar a atenção. Esta camuflagem funciona mesmo com entidades que não se parecem em nada com humanos."
        },
        {
          name: "Graça Impecável do Mentiroso (Liar’s Flawless Grace)",
          type: "Constante",
          content: "Suas mentiras nunca podem ser detectadas como tal por magia ou outras habilidades especiais, incluindo aquelas da Palavra da Enganação. Inimigos menores sempre acreditarão nelas, a menos que sejam completamente implausíveis, emocionalmente intoleráveis ou os obriguem a auto-agressão."
        },
        {
          name: "Mascarada Perfeita (Perfect Masquerade)",
          type: "No Turno",
          content: "Comprometa Esforço. Apareça instantaneamente como qualquer humanoide que você já tenha visto. Apenas inimigos poderosos ou aqueles com conhecimento pessoal significativo do indivíduo têm chance de fazer um teste de resistência de Espírito contra a farsa, a menos que você faça algo flagrantemente fora de caráter. Você imita instintivamente a voz, as roupas, os trejeitos e os hábitos de comportamento esperados."
        },
        {
          name: "Teatro de Sombras (Shadow Play)",
          type: "Ação",
          content: "Comprometa Esforço. Você pode criar ilusões perfeitas de som, cheiro e aparência, embora sejam intangíveis ao toque. A ilusão aparece em qualquer lugar à vista, pode ter até 9 metros (30 pés) de diâmetro e pode ser feita para se mover e parecer realista sem atenção adicional, desde que o Esforço permaneça comprometido com ela. Invisibilidade não é uma ilusão."
        },
        {
          name: "Passo Velado (Veiled Step)",
          type: "No Turno",
          content: "Comprometa Esforço. Inimigos menores não têm chance de detectá-lo, desde que você fique fora da presença imediata deles e não chame atenção. Inimigos poderosos podem tentar um teste de resistência de Espírito para resistir quando você estiver por perto."
        }
      ],
      greater: [
        {
          name: "Convicção do Erro (Conviction of Error)",
          type: "Ação",
          content: "Comprometa Esforço. Todos os alvos escolhidos presentes ficam convencidos de que uma de suas crenças de sua escolha é, na verdade, uma mentira terrível que lhes foi imposta, seja a existência de um deus ou a fidelidade de seu cônjuge. Inimigos poderosos recebem um teste de resistência de Espírito. Eles podem reconsiderar essa convicção de erro uma vez que o Esforço seja recuperado, mas só o farão sob grande pressão emocional ou fatos óbvios."
        },
        {
          name: "Engremedo Impenetrável (Impenetrable Deceit)",
          type: "Ação",
          content: "Você afirma algo que acredita ser falso e Comprometa Esforço. Todos que ouvirem você falar naquele momento acreditarão, embora inimigos poderosos recebam um teste de resistência de Espírito. Um teste de resistência também é concedido se forem apresentadas provas em contrário ou se a mentira for emocionalmente intolerável para eles. Essa crença persistirá mesmo após o esforço ser recuperado, a menos que evidências claras a contrariem ou a mentira seja dolorosa demais para ser acreditada."
        },
        {
          name: "Fantasma Ambulante (Walking Ghost)",
          type: "No Turno",
          content: "Comprometa Esforço. Você não pode ser detectado por inimigos menores, a menos que os ataque ou chame atenção evidente, mesmo que esteja parado bem na frente do NPC. Inimigos poderosos têm a chance de notar você com um teste de resistência de Espírito se você entrar na presença deles ou se estiverem procurando ativamente por inimigos ocultos. Ataques e ações barulhentas sempre atraem atenção. Adquirir esta dádiva reembolsa o Passo Velado (Veiled Step), caso já o possua."
        }
      ]
    }
  },
  {
    id: "desert",
    name: "Deserto (Desert)",
    shortDesc: "A Palavra do deserto, dominando terras áridas, calor sufocante, miragens e concedendo imunidade a elementos inóspitos.",
    description: "Mestre da poeira e da desolação, um Godbound do Desert governa sobre ermos secos e terras áridas pedregosas. Eles invocam o ar sufocante e o calor mortal de seus domínios, e são senhores das miragens desconcertantes e dos espaços vazios que desencaminham o viajante sem sorte. Um Godbound dos Desertos possui uma defesa invulnerável contra fogo e qualquer temperatura encontrada em um deserto mundano. Eles não têm necessidade de comida ou água e possuem uma defesa invulnerável contra se perderem, independentemente de seus arredores. Muitas de suas dádivas estão relacionadas à manipulação dos arredores do deserto. Para os propósitos de tais dádivas, um \"deserto\" é qualquer terreno árido e arenoso ou rochoso com pelo menos cento e um pés de diâmetro, com casos limítrofes determinados pelo Mestre. Tais \"desertos\" podem ser naturais ou artificiais.",
    gifts: {
      lesser: [
        {
          name: "Fonte do Oásis Azul (Azure Oasis Spring)",
          type: "Ação",
          content: "Evoca uma fonte de água, fazendo jorrar uma nova nascente. O uso repetido desta habilidade pode fornecer suprimentos de água suficientes para quase qualquer número de pessoas, ou corroer e destruir estruturas não mágicas dentro de uma hora. A critério do Godbound, esta água evocada é magicamente revigorante, suprindo todas as necessidades alimentares daqueles que a bebem. Essas nascentes duram até serem fisicamente destruídas ou dissipadas pelo Godbound. Opcionalmente, o Godbound pode destruir instantaneamente toda a água aberta e matar todas as nascentes naturais dentro de duzentos pés por nível de personagem, transformando a terra comum em ermos arenosos."
        },
        {
          name: "Maldição da Poeira (Curse of Dust)",
          type: "Ação (Golpe / Smite)",
          content: "Comprometa Esforço pelo dia. Todo o terreno de sua escolha até um raio de um quarto de milha por nível de PC é imediatamente transformado em deserto. Se direcionado a uma única criatura visível, ela é murchada até virar um cadáver desidratado. Inimigos poderosos podem fazer um teste de resistência versus Vigor (Hardiness) para sofrer apenas o nível do Godbound em pontos de dano. Criaturas feitas de metal, pedra, carne dessicada ou outras substâncias sem componentes líquidos saem ilesas deste poder."
        },
        {
          name: "Moldador de Areia (Sandshaper)",
          type: "No Turno",
          content: "Comprometa Esforço. Enquanto o Esforço estiver comprometido, você pode usar sua Ação Principal para moldar areia, rocha sedimentar e terra seca dentro do alcance visual em qualquer configuração que desejar dentro de um cubo de 20 pés por nível de personagem. A areia moldada é tão resistente quanto arenito após ser formada. Paredes moldadas têm pontos de vida iguais ao nível do personagem para cada pé de espessura; se dano suficiente for causado, um buraco do tamanho de uma criatura é aberto através dela."
        },
        {
          name: "Miragem Brilhante (Shining Mirage)",
          type: "Ação",
          content: "Comprometa Esforço para a cena para conjurar uma ilusão de escolha dentro da distância visual. Esta ilusão pode operar independentemente uma vez criada, fornece todos os componentes auditivos e olfativos necessários e age conforme apropriado para sua aparência, mas não pode afetar objetos físicos e é imaterial ao toque. O Godbound pode mover ou alterar a ilusão como uma Ação Principal até que ela desapareça no final da cena. A invisibilidade não é uma ilusão, mas uma falsa parede ou tapeçaria é."
        },
        {
          name: "Espada de Siroco (Sirocco Sword)",
          type: "No Turno",
          content: "Comprometa Esforço. Você empunha ventos de fornalha e areia cortante como uma arma mágica, causando 1d10 de dano até o alcance visual. Contra criaturas que precisam de água para viver, o ataque sempre inflige pelo menos 1 ponto de dano, mesmo em um erro."
        },
        {
          name: "Andarilho entre as Dunas (Wanderer Among the Dunes)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e mire em uma única criatura ou em até uma Grande Multidão de inimigos menores. O alvo fica irremediavelmente perdido, independentemente da simplicidade e familiaridade de seus arredores, e não consegue encontrar uma saída de sua localização ou sala atual. Mesmo se fisicamente carregados para longe, eles reaparecem em sua localização fixa. Esta maldição dura até que o Godbound liberte um inimigo menor, ou até que um inimigo poderoso tenha sucesso em um teste de resistência de Evasão, o que eles podem tentar no final de cada um de seus turnos. As vítimas não notarão a maldição até que realmente tentem deixar a área em que estão."
        }
      ],
      greater: [
        {
          name: "Carne de Areias Movediças (Flesh of Shifting Sands)",
          type: "No Turno",
          content: "Comprometa Esforço para transformar seu corpo em uma tempestade fluida de areia. Enquanto estiver assim transformado, você é invulneravelmente imune a armas não mágicas e a qualquer ferimento físico de corte ou perfuração. Você não pode manipular objetos físicos enquanto estiver assim transformado, mas pode usar suas dádivas e atacar com armamento desarmado. Você pode se mover em sua taxa de movimento normal, passar através de areia ou terra como se fosse espaço vazio e fluir através de qualquer buraco ou abertura que possa admitir um único grão de areia. Seus pertences se transformam com você, embora você possa descartá-los para permitir que outros os peguem enquanto você permanece transformado."
        },
        {
          name: "Senhor do Bairro Vazio (Lord of the Empty Quarter)",
          type: "Ação",
          content: "Você se concentra por um breve momento e pode perceber imediatamente qualquer área de deserto conectada à mesma área de deserto em que você está. Se você estiver procurando por algo específico na área acessível, você o encontra automaticamente. Se você Comprometer Esforço pelo dia, você e seus companheiros podem aparecer instantaneamente em qualquer área conectada de deserto. Se você estiver fora de um deserto, você e quaisquer aliados com você podem aparecer de qualquer banco de areia do tamanho de um ser humano dentro de uma milha por nível, aparecendo no monte de areia mais próximo do seu destino. Que tipo de solo conta como \"areia\" fica a critério do Mestre, mas mera terra seca não é suficiente para este poder."
        },
        {
          name: "Fúria do Simum (Rage of the Simoom)",
          type: "Ação (Golpe / Smite)",
          content: "Comprometa Esforço pelo dia para evocar uma tempestade de vento assassina de calor mortal e areia abrasiva. Todos os inimigos dentro do alcance visual sofrem 1d12 de dano a cada dois níveis que você possui, arredondado para cima, com inimigos poderosos autorizados a fazer um teste de resistência versus Vigor (Hardiness) para matar pela metade o dano, arredondado para cima. Multidões sofrem 3 pontos de dano por nível de personagem em vez de rolar para o dano. Estruturas de madeira leve e objetos semelhantes são destruídos pelos ventos, enquanto edifícios mais robustos são limpos e coroados pelo vendaval. A critério do portador, objetos facilmente inflamáveis podem ser incendiados pela dádiva."
        }
      ]
    }
  },
  {
    id: "desire",
    name: "Desejo (Desire)",
    shortDesc: "A Palavra do desejo e dos anseios carnais e intelectuais, permitindo manipular vontades, atração e necessidades profundas.",
    description: "A Palavra de Desire fala de desejos de todos os tipos, tanto carnais quanto intelectuais. Ela governa sobre o querer e os compromissos que são feitos para obter uma necessidade terrível. Os favorecidos de Desire elevam automaticamente seu Carisma para 16, ou para 18 se já for 16 ou mais. A critério deles, os outros os acharão romanticamente compatíveis, independentemente dos gostos usuais e naturais do observador.",
    gifts: {
      lesser: [
        {
          name: "Paixão Escravizante (Enslaving Passion)",
          type: "No Turno",
          content: "Comprometa Esforço. As palavras, gestos e atenção do Godbound são tão vertiginosos que a vítima perde sua capacidade de resistir aos desejos do herói. A atenção deles conta como um ataque de arma mágica de 1d10 com alcance suficiente para atingir um alvo capaz de vê-los. O dano que esta dádiva causa é emocional, erodindo a vontade da vítima; se reduzida a zero pontos de vida ou dados de vida pelo efeito, a vítima recupera um ponto de vida e se torna o escravo total do Godbound pelo resto da cena, executando qualquer ato não suicida, mas recuperando seu autocontrole ao final dela. Esta dádiva afeta apenas alvos inteligentes com livre-arbítrio e seu uso é obviamente sobrenatural tanto para os espectadores quanto para o alvo."
        },
        {
          name: "Necessidade Incandescente (Incandescent Need)",
          type: "Ação",
          content: "Provoca um desejo tremendo por uma pessoa, uma coisa, um tipo geral de atividade ou por estar em um lugar. Os alvos agirão até o limite de seu caráter para obter seu desejo, com a maioria das pessoas fazendo qualquer coisa aquém de crimes facilmente detectáveis para obtê-lo, e sentirão intenso prazer nisso. Se o Esforço for Comprometido para a cena, o Godbound pode afetar até uma Grande Multidão de alvos em sua vizinhança. Inimigos poderosos recebem um teste de resistência de Espírito para resistir a este poder. O efeito dura até ser dissipado ou o Godbound liberar uma vítima."
        },
        {
          name: "Sufocar o Coração (Quench the Heart)",
          type: "Ação",
          content: "Extingue o desejo no coração de um alvo visível, seja por uma pessoa, um objetivo, um sexo, um tipo geral de atividade ou um lugar. Nada sobre o assunto subtraído será capaz de interessar ou dar prazer ao alvo, embora pessoas disciplinadas possam se envolver com ele independentemente por senso de dever. Inimigos poderosos recebem um teste de resistência de Espírito para resistir. Se o Esforço for comprometido para uma cena, o Godbound pode afetar até uma Grande Multidão de alvos em sua vizinhança. O efeito dura até ser dissipado ou o Godbound liberar o alvo."
        },
        {
          name: "Autoposse (Self-Possession)",
          type: "Constante",
          content: "O Godbound tem imunidade invencível a qualquer efeito mental que influencie seus desejos ou ações. Ao Comprometer Esforço para a cena, eles podem estender essa imunidade a todos os aliados a até 200 pés pela cena."
        },
        {
          name: "Sentir a Necessidade (Sense the Need)",
          type: "No Turno",
          content: "Escolha um alvo visível. Obtenha uma compreensão completa de seus gostos românticos, quaisquer prazeres significativos que eles tenham e o desejo deles que seja mais relevante para os interesses ou objetivos do Godbound. Se formulado como uma pergunta sobre o que o alvo quer em troca de um serviço ou favor específico, o incentivo necessário mais provável é revelado, de acordo com o julgamento do Mestre. Se usado contra um inimigo poderoso, o Godbound deve Comprometer Esforço para a cena."
        },
        {
          name: "Beleza Insuportável (Unbearable Beauty)",
          type: "Constante",
          content: "O Godbound tem uma CA efetiva de 3 contra criaturas inteligentes, sejam autômatos com livre-arbítrio, mortos-vivos ou seres vivos, pois eles se sentem relutantes em golpear o Godbound. O primeiro ataque que qualquer criatura ou Multidão lança contra o usuário em cada luta é um erro automático, pois eles hesitam em seu ataque."
        }
      ],
      greater: [
        {
          name: "Agonia do Desejo (Agony of Desire)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e escolha um alvo visível de até o tamanho de uma Grande Multidão. Implante um desejo não auto-prejudicial por uma coisa ou ação específica; se o alvo não gastar pelo menos uma ação em sua rodada perseguindo essa atividade ou procurando obter essa coisa, ele sofre um ponto de dano emocional por nível do Godbound. Se reduzido a zero dados de vida ou pontos de vida por isso, ele recupera um ponto de vida e torna-se incapaz de fazer qualquer coisa além de perseguir esse desejo pelo resto da cena. Inimigos poderosos podem tentar um teste de resistência de Espírito para encerrar o poder no início de cada uma de suas rodadas, mas cada tentativa de teste inflige um ponto de dano por nível do Godbound. Uma vez que um teste é feito, um alvo é imune a esta dádiva pelo resto da cena. Apenas um desejo pode ser implantado por vez e dura pelo resto da cena."
        },
        {
          name: "O Comércio da Cortesã (The Harlot's Trade)",
          type: "Ação",
          content: "O Godbound deve oferecer a um alvo visível algo que ele ache desejável, seja uma pessoa, coisa ou favor em troca de algum favor ou ação por parte do alvo. Se o alvo deseja a coisa oferecida ardentemente e não tem motivo importante para recusar a troca, ele deve aceitá-la e cumprir sua parte da troca de boa-fé. Se a coisa oferecida for uma recompensa inadequada ou o alvo tiver um motivo poderoso para não aceitar a troca, um inimigo poderoso pode fazer um teste de resistência de Espírito para resistir a este poder e se tornar imune a ele pela cena. Inimigos menores não têm direito a teste nem mesmo contra acordos terríveis. Esta dádiva não pode induzir um alvo a fazer algo suicida ou profundamente contrário à sua natureza. Se o Godbound prometer um favor que depois falhar em cumprir, ele se tornará incapaz de fazer qualquer teste de resistência bem-sucedido contra o alvo ofendido ou evitar qualquer de suas rolagens de ataque por um ano e um dia depois disso. Esta dádiva é sutil, e um alvo afetado geralmente não suspeitará de qualquer influência mágica, a menos que o acordo oferecido seja obviamente desigual."
        },
        {
          name: "Escravo do Desejo (Thrall to Desire)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e escolha um alvo inteligente visível. Inimigos menores tornam-se total e permanentemente escravizados pelo Godbound, fornecendo qualquer serviço que não seja totalmente suicida. Inimigos poderosos recebem um teste de resistência de Espírito para resistir a este poder. Esta escravização dura até ser dissipada, o assunto passar pelo menos 24 horas sem ter pelo menos cinco minutos de atenção pessoal focada do Godbound, ou o Godbound liberar a vítima."
        }
      ]
    }
  },
  {
    id: "earth",
    name: "Terra (Earth)",
    shortDesc: "A Palavra da terra e da rocha, conferindo comando sobre pedra e solo, além de dureza e durabilidade inabaláveis.",
    description: "A Palavra de Earth concede comando sobre pedra e solo, e evoca a dureza e a obstinação da rocha. Milagres de Earth giram em torno de pedra, terra, força, dureza e durabilidade, e podem ser usados para conceder breves maravilhas dessas qualidades ao herói ou a outros. O metal pode ser destruído ou purificado do minério por esta Palavra, mas não pode ser moldado da mesma maneira que a pedra bruta ou o solo podem ser moldados. Heróis com a Palavra Earth podem definir suas pontuações de Força ou Constituição para 16, dependendo se enfatizam a força da pedra de sustentação ou a dureza da rocha sólida. Se a pontuação escolhida já for 16 ou superior, eles podem definir como 18 em vez disso.",
    gifts: {
      lesser: [
        {
          name: "Andarilho da Terra (Earthwalker)",
          type: "No Turno",
          content: "Comprometa Esforço. Você e seus companheiros podem passar através de pedra ou solo sem necessidade de respiração. É necessária uma ação para entrar ou sair de ambientes de terra. Esta dádiva funciona tanto para terra natural quanto para pedra trabalhada, e pode ser usada em solo de qualquer consistência não mais fina que lama. Você pode detectar espaços ocos na terra em um raio de 30 metros (100 pés)."
        },
        {
          name: "Olhos Brilhantes como Joias (Jewel-Bright Eyes)",
          type: "No Turno",
          content: "Comprometa Esforço. Enquanto estiver comprometido, você pode enxergar através de terra ou pedra. Com um momento de foco, você pode olhar para fora de qualquer gema que já tenha tocado, independentemente de onde ela esteja agora."
        },
        {
          name: "Músculos de Montanha (Mountain Thews)",
          type: "Ação",
          content: "Comprometa Esforço até o fim da cena. Realize um feito de força impossível. Este feito exige foco demais para ser um ataque eficaz, mas você pode levantar, arremessar ou quebrar quase tudo em que puder botar as mãos, variando em tamanho até uma casa modesta ou um navio pequeno."
        },
        {
          name: "Obduração da Pedra (Obduracy of Stone)",
          type: "Constante",
          content: "Sua classe de armadura natural é 3, e você possui uma defesa invulnerável contra danos causados por pedra, terra ou soterrnamento. Você não precisa comer, beber ou respirar. Armaduras e escudos não melhoram esta classe de armadura base."
        },
        {
          name: "Rebelião do Solo (Rebellion of the Soil)",
          type: "Ação",
          content: "Faça com que um objeto visível de pedra ou metal não mágico, não maior do que uma casa, desintegre-se ou desabe. Você pode desabar estruturas maiores não mágicas uma parte de cada vez. O desabamento pode ser destrutivo, infligindo 1d20 de dano a todos lá dentro, ou controlado de forma a deixar os que estão dentro ilesos. Armaduras ou itens vestidos não podem ser afetados por este poder."
        },
        {
          name: "Orador das Pedras (Stonespeaker)",
          type: "No Turno",
          content: "Comprometa Esforço. Você pode se comunicar com a terra ou a pedra, vendo e percebendo tudo o que ela testemunhou em um determinado momento de sua escolha. As pedras não têm pensamento como os humanos reconhecem, mas podem transmitir perfeitamente todos os sons e visões que ocorreram em sua presença. No entanto, você deve especificar um momento particular para focar."
        }
      ],
      greater: [
        {
          name: "Construtor de Picos de Montanha (Builder of Mountain Peaks)",
          type: "Ação",
          content: "A cada rodada, crie, modifique ou destrua uma estrutura de pedra ou terra de até 6 x 6 x 6 metros (20x20x20 pés) dentro da sua linha de visão normal. A estrutura pode ser elaborada, até o limite de suas próprias habilidades criativas. Veja a página 27 para regras sobre prender vítimas em paredes ou zonas. Você pode criar terra ou pedra normal como parte deste processo. Criaturas feitas inteiramente de terra ou pedra dentro da área podem ser completamente controladas, com inimigos poderosos tendo direito a um teste de resistência de Espírito para resistir."
        },
        {
          name: "Fúria da Avalanche (Fury of the Avalanche)",
          type: "No Turno",
          content: "A terra treme e lança cacos de pedra. Comprometa Esforço para empunhar essas erupções como uma arma mágica de 1d10 enquanto o Esforço permanecer comprometido. Enquanto a dádiva durar, seu dado de Refrega (Fray) pode ser aplicado a cada inimigo menor que estiver sobre terra ou pedra à vista."
        },
        {
          name: "Tremores do Coração do Mundo (Tremors of the World’s Heart)",
          type: "Ação",
          content: "Comprometa Esforço até o fim do dia para causar um terremoto localizado em um ponto à vista, achatando a maioria dos edifícios em um raio de 90 metros (300 pés) e jogando inimigos menores de joelhos. Aqueles derrubados devem gastar sua ação de movimento para se levantarem. A devastação completa ao redor leva cerca de sessenta segundos para ser concluída."
        }
      ]
    }
  },
  {
    id: "endurance",
    name: "Resistência (Endurance)",
    shortDesc: "A Palavra da resistência, determinação e esforço incansável, concedendo sobrevivência extrema e imunidade a cansaço.",
    description: "A Palavra de Endurance é de vigor, determinação e esforço incansável. Seus milagres podem conceder sobrevivência mesmo diante da morte certa, força quando a exaustão de outra forma o sobrepujaria, e resistência contra feitiçaria ou maldições indesejadas. Um Godbound agraciado com esta Palavra é terrivelmente difícil de ferir fisicamente, mas a Palavra não pode desviar fontes de dano mental ou espiritual ou compulsões, como uma Ira Divina de Knowledge ou uma compulsão de Command. Como guia, se envolver um teste de Espírito, Endurance não pode detê-lo. Seus milagres não podem estender imunidades a outros, a menos que indicado o contrário. Heróis de Endurance não precisam comer, dormir, beber ou respirar, e podem definir sua pontuação de Constituição para 16, ou para 18 se já for 16 ou superior.",
    gifts: {
      lesser: [
        {
          name: "Vitalidade de Amaranto (Amaranth Vitality)",
          type: "Constante",
          content: "A cada quinze minutos, você cura um ponto de vida perdido a cada três níveis de personagem, arredondado para cima, contanto que você ainda esteja vivo."
        },
        {
          name: "Corpo de Vontade de Ferro (Body of Iron Will)",
          type: "Constante",
          content: "Sua classe de armadura natural é 3. Você é impenetrável a qualquer dano ambiental natural, como o causado por calor extremo, frio, pressão, radiação ou vácuo. Tais forças usadas como arma ou perigo contra você funcionam normalmente. Armaduras ou escudos não beneficiam esta CA base."
        },
        {
          name: "Desafiar o Ferro (Defy the Iron)",
          type: "Instante",
          content: "Comprometa Esforço até o final da cena. Anule um único ataque físico ou instância de ferimento corporal. Esta dádiva não pode afastar tipos de dano mental ou espiritual, ou efeitos mágicos que normalmente provocariam um teste de resistência de Espírito. Esta imunidade se estende apenas a um round de dano ao enfrentar um perigo contínuo que cause dano a cada round."
        },
        {
          name: "Desprezo Elemental (Elemental Scorn)",
          type: "Constante",
          content: "Escolha calor, frio, eletricidade ou alguma outra forma de energia. Você tem uma defesa invencível contra ela em todas as suas formas. Como uma ação de No Turno, você pode Comprometer Esforço para estender esta defesa a cada aliado dentro de cem jardas. Você pode pegar esta dádiva mais de uma vez para ganhar imunidade a outros elementos; um único Comprometimento pode estender todas as suas defesas."
        },
        {
          name: "Mais Duro que Isso (Harder than This)",
          type: "No Turno",
          content: "Comprometa Esforço. Torne-se imune a um perigo físico ou ataque especial enquanto o esforço permanecer comprometido. Você não pode se adaptar a armas, dádivas ou magias, mas pode se ajustar para se tornar imune ao sopro de um dragão, ao olhar de um basilisco, ao veneno de uma besta ou à caldeira de um vulcão."
        },
        {
          name: "Inspiração Incansável (Untiring Inspiration)",
          type: "Constante",
          content: "Escolha um projeto de Influência que você empreendeu. Adicione 1 à Influência efetiva nele enquanto você foca sem dormir na tarefa. Como uma ação, Comprometa Esforço. Todos os aliados dentro de 100 jardas são perpetuamente revigorados e não precisam de descanso, comida, bebida ou respiração."
        }
      ],
      greater: [
        {
          name: "Sem Medo do Aço (Fear No Steel)",
          type: "No Turno",
          content: "Comprometa Esforço. Sua determinação ou resistência sobrenatural permite que você ignore os danos menores do mundo. Você sofre 1 ponto a menos de dano de todas as fontes de dano recebidas, sejam físicas ou mágicas. Opcionalmente, Comprometa Esforço pelo dia para se tornar imune por uma cena a ataques de inimigos menores sem armas mágicas."
        },
        {
          name: "Inquebrável (Unbreakable)",
          type: "Instante",
          content: "Comprometa Esforço até o final do dia. Até o início do seu próximo turno, você tem uma defesa invencível contra qualquer ataque físico tangível ou efeito de magia. Danos ou ferimentos mentais e espirituais não são desviados."
        },
        {
          name: "Imorredouro (Undying)",
          type: "Constante",
          content: "Embora você possa ser levado a zero pontos de vida, mutilado ou queimado, você não pode ser realmente morto, exceto pelo efeito ou auxílio de uma dádiva impulsionada por Palavra, milagre divino ou ataque aprimorado por dádiva. Se não for morto, você se regenera de volta a um ponto de vida em uma hora a partir do seu maior pedaço restante."
        }
      ]
    }
  },
  {
    id: "engineering",
    name: "Engenharia (Engineering)",
    shortDesc: "A Palavra da engenharia, substituindo a Artificia em campanhas de tecnologia avançada, permitindo criar dispositivos portáteis instantaneamente.",
    description: "A Palavra de Engineering é uma Palavra substituta destinada a ocupar o lugar de Artifice em campanhas com tecnologia avançada, como a que pode ser encontrada em um jogo ambientado em uma era moderna ou de ficção científica. A Palavra de Artifice é destinada a se aplicar a cenários onde a tecnologia de base mais avançada é uma besta ou aqueduto, enquanto Engineering é mais adequada para campanhas com ogivas nucleares portáteis. Godbound da Palavra de Engineering podem produzir instantaneamente qualquer dispositivo comum portátil por uma pessoa normal como uma ação Em Turno. Um \"dispositivo comum\" é qualquer coisa geralmente comercializável nos mercados legais ou negros de um cenário, incluindo armamentos e munições comuns, mas não armas de destruição em massa, objetos existentes únicos ou tecnologia experimental exótica. Esta habilidade não inclui gêneros alimentícios. Tais dispositivos desaparecem ou evaporam poucas horas depois que o Godbound ou seus companheiros param de usá-los.",
    gifts: {
      lesser: [
        {
          name: "Projetos Abençoados (Blessed Blueprints)",
          type: "Constante",
          content: "O Godbound sabe instantaneamente como operar qualquer veículo, nave estelar ou dispositivo que veja, e tem uma compreensão intuitiva do layout e do design de edifícios, naves estelares e outras grandes estruturas projetadas, incluindo pontos fracos e capacidades técnicas. Esse conhecimento não é preciso o suficiente para servir como um mapa, mas eles sempre podem encontrar o caminho para qualquer função, seção ou recurso específico que desejam encontrar."
        },
        {
          name: "Invenção Brilhante (Brilliant Invention)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia. O Godbound cria um dispositivo tecnológico que apenas ele pode usar, o qual pode imitar perfeitamente uma dádiva menor de qualquer outra Palavra, exceto Feitiçaria. Eles podem usar esta dádiva ao seu custo habitual em Esforço, se houver, e o dispositivo permanece utilizável até a próxima vez que usarem esta dádiva. Invenção Brilhante é utilizável apenas uma vez por dia."
        },
        {
          name: "Artifício duradouro (Lasting Artifice)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. O Godbound pode conjurar qualquer dispositivo comum que possa carregar com um braço. Ao Comprometer Esforço pelo dia em vez disso, ele pode ser do tamanho de um caminhão ou ônibus espacial. Este dispositivo dura indefinidamente e fica totalmente energizado toda vez que o Godbound o toca."
        },
        {
          name: "Método Científico (Scientific Method)",
          type: "Constante",
          content: "Os trabalhos do Godbound são capazes de construir tecnologia comum ou estruturas menores que uma casa dentro de uma cena, menores que uma fábrica dentro de um dia e menores que uma cidade durante o intervalo entre as sessões, desde que seja mais de um dia. Materiais ainda são necessários para construí-lo."
        },
        {
          name: "Conserto do Criador (Mending of the Maker)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. O Godbound restaura um mecanismo ou objeto visível à sua condição original, energizada e intacta. Se estiver reparando objetos maiores do que um cubo de 20 pés, ele restaura um cubo de 20 pés do objeto danificado. Para o reparo de grandes estruturas e veículos, assuma que o conserto repara 20% da integridade máxima do objeto."
        },
        {
          name: "Assumir o Volante (Take the Wheel)",
          type: "Ação",
          content: "Comprometa Esforço e escolha um dispositivo visível. Enquanto o Esforço permanecer Comprometido, você tem controle total sobre a operação dessa máquina, emitindo comandos como ações de No Turno. O Godbound pode controlar apenas partes visíveis de um dispositivo; se estiver enfrentando uma nave estelar, ele poderia controlar escotilhas, motores visíveis e armamentos de superfície, mas precisaria ter acesso à ponte de comando para controlar suas funções internas. O Godbound não pode compelir um dispositivo a fazer algo impossível para seu operador comum. Apenas uma máquina pode ser controlada por vez."
        }
      ],
      greater: [
        {
          name: "Ponta de Lança Tecnológica (Cutting Edge)",
          type: "Constante",
          content: "Uma vez por sessão, o Godbound pode desenvolver um avanço dramático na tecnologia comum existente, como criar tecnologia de clonagem viável, conceber tecnologia anti-gravidade, curar uma ampla gama de doenças congênitas ou algo semelhante à frente da base tecnológica comum da campanha. O Mestre pode vetar avanços que sejam drásticos demais para o cenário. Embora essa tecnologia seja muito pesada ou melindrosa para ser útil em aventuras ou em combate, ela pode servir como justificativa para propósitos de gastos de Domínio, tornando mudanças Impossíveis em Implausíveis, ou as Implausíveis em Plausíveis. Dependendo do esforço do Godbound em espalhar essa tecnologia, ela pode gradualmente permear a base tecnológica de linha de base da campanha também, permitindo assim que os poderes inatos de criação de dispositivos do Godbound tirem proveito disso e permitindo que engenheiros comuns a construam. Até que a tecnologia se torne padrão, o gênio único do Godbound é necessário para construí-la e direcioná-la. Embora esta dádiva possa ser usada como um milagre, a menos que seja tomada como uma dádiva, ela nunca poderá ser mantida de forma eficaz para permitir que a tecnologia se torne uma parte padrão da campanha."
        },
        {
          name: "Alma da Máquina (Soul of the Machine)",
          type: "Instante",
          content: "Comprometa Esforço pelo dia quando o Godbound tocar em um dispositivo não maior do que um ônibus espacial ou caminhão grande. O dispositivo é instantaneamente imbuído de senciência e inteligência em nível humano, podendo implantar livremente sua própria funcionalidade conforme achar melhor e se comunicar através de dispositivos conectados. Os dispositivos serão amigáveis e obedientes ao Godbound, a menos que tenham algum significado significativo para seu verdadeiro dono, caso em que não realizarão nenhuma ação prejudicial a ele. Os dispositivos estão felizes sendo o que são e geralmente contentes em servir conforme o esperado; eles não obedecerão a comandos que devam levar à sua destruição, a menos que tais comandos sejam apropriados ao seu propósito pretendido. Os dispositivos não têm memória de coisas que aconteceram antes de ganharem consciência."
        },
        {
          name: "Ponto Fraco (Weak Spot)",
          type: "Constante",
          content: "Ataques que exigem uma rolagem de acerto feita pelo Godbound contra veículos, formas de vida sintéticas ou estruturas são sempre bem-sucedidos e sempre causam pelo menos 1 ponto de dano, independentemente de qualquer coisa aquém de uma defesa invulnerável. Dádivas usadas contra tais alvos rolam quaisquer dados de dano duas vezes e pegam o melhor resultado. Contra dispositivos ou veículos não sensientes não maiores do que um caminhão, o Godbound pode destruí-los com um toque de No Turno, desde que não estejam sendo operados no momento."
        }
      ]
    }
  },
  {
    id: "entropy",
    name: "Entropia (Entropy)",
    shortDesc: "A Palavra da entropia, encarnando a desordem, a decadência e a preservação estática de objetos ou coisas.",
    description: "Godbound of Entropy são avatares de desordem e decadência, os eidolos que fazem as coisas desmoronarem e garantem que o centro não se sustente. Matéria, paixões, planos... essas coisas desmoronam diante da vontade do Godbound. No entanto, esta Palavra não é inteiramente negativa, pois alguém com a Palavra de Entropy também pode fazer com que ela retire sua influência corrosiva de um sujeito escolhido, preservando-o em ordem perfeita e não natural até que esse favor seja retirado. Eles não podem curar, mas podem impedir que as coisas piorem para aquilo que protegem. A Palavra de Entropy concede a um Godbound nenhuma necessidade de comida, bebida, sono ou ar, e eles também parecem funcionalmente imunes ao envelhecimento. Eles podem destruir qualquer objeto inanimado não divino que toque como uma Ação Principal, ou até três pés cúbicos de um objeto maior por rodada.",
    gifts: {
      lesser: [
        {
          name: "Mentes Desordenadas (Disordered Minds)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e mire em uma criatura visível enquanto nomeia algum propósito ou ação que a criatura está tentando realizar, seja matar um inimigo ou proclamar um édito real. Eles executarão imediatamente a ação mais prejudicial e disruptiva que puderem tomar em contradição a esse objetivo, seja um erro intencional ou deturpar criticamente o édito ao transmiti-lo. Eles estarão convencidos de que estão se comportando sensatamente, apesar de qualquer argumento, até serem liberados pelo Godbound. Inimigos menores não podem resistir a esta dádiva, enquanto inimigos poderosos podem salvar versus Espírito para se libertarem antes de cada rodada de confusão."
        },
        {
          name: "Tempo de Vida Funcional (Functional Lifespan)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e mire em uma criatura visível ou um objeto ou parte de um objeto não maior do que uma casa de campo. O alvo torna-se imune a intempéries naturais, decomposição ou envelhecimento, embora ainda possa ser danificado normalmente por ação intencional ou abuso atípico. Criaturas sobrenaturais ou humanos com mais de 1 DV (HD) não podem ser feitos imortais desta forma, embora sua expectativa de vida possa ser maximizada."
        },
        {
          name: "Baixo Impacto (Low Impact)",
          type: "Instante",
          content: "Comprometa Esforço para a cena e mire em um ataque visível ou evento lesivo que acabou de acontecer. O dano é anulado à medida que a força se esvai inutilmente ou o objeto permanece sem perturbações pelo ataque. Esta dádiva normalmente só se aplica a dano de pontos de vida ou perturbação física."
        },
        {
          name: "Eficiência Perfeita (Perfect Efficiency)",
          type: "Constante",
          content: "Ganhe um ponto de Esforço. Além disso, como uma ação de No Turno, Comprometa Esforço para ignorar um número de pontos da habilidade Respiração Fria (Cold Breath) de um Não Criado (Uncreated) igual à metade do seu nível, arredondado para baixo, enquanto ele permanecer Comprometido."
        },
        {
          name: "Drenar a Força (Sap the Force)",
          type: "Instante",
          content: "O Godbound mira em uma criatura que acabou de Comprometer Esforço por qualquer motivo. O Esforço é perdido e a criatura deve Comprometê-lo novamente como uma ação Instantânea se o efeito desejado for acontecer. Esta dádiva pode ser usada apenas uma vez por cena em um determinado alvo."
        },
        {
          name: "As Coisas Desmoronam (Things Fall Apart)",
          type: "Constante",
          content: "O descontentamento do Godbound causa decaimento físico, dissolução e colapso. Eles podem usá-lo como uma arma mágica à distância até a distância visual, causando 1d10 de dano. Contra objetos inanimados, este dano é sempre máximo e pode erodir uma esfera de até 6 pés de diâmetro de matéria não divina a cada rodada."
        },
        {
          name: "Tempo de Vida Funcional Zero (Zero Functional Lifespan)",
          type: "Ação",
          content: "Mira em um objeto visível não maior do que uma pessoa, ou Comprometa Esforço pelo dia para mirar em um objeto não maior do que um grande navio à vela. O objeto apodrece imediatamente como se tivesse envelhecido até um século por nível de personagem, um período geralmente suficiente para destruir todos, exceto os materiais mais obstinados ou itens mágicos projetados para durar indefinidamente. Se usado contra um veículo mágico, Godwalker ou outro artifício que exija manutenção, o alvo sofre imediatamente 1d8 de dano a cada dois níveis de personagem do usuário, arredondado para cima."
        }
      ],
      greater: [
        {
          name: "Almas Atomizadas (Atomized Souls)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia e mire em uma criatura visível. Escolha um ou mais relacionamentos emocionais que eles possuem, ou simplesmente nomeie uma classe inteira de relacionamentos. Eles e aqueles nos relacionamentos perdem todo o sentimento uns pelos outros, sejam positivos ou negativos, e não podem desenvolvê-lo novamente até que o Godbound permita. Inimigos menores não podem resistir a esta apatia, enquanto inimigos poderosos podem salvar versus Espírito para reter seus sentimentos em relação ao outro, embora este sentimento possa ser unilateral se o outro for um inimigo menor."
        },
        {
          name: "Planos Mais Bem Elaborados (Best Laid Plans)",
          type: "Ação",
          content: "O Godbound mira em um plano ou propósito específico, seja um especificamente conhecido por eles ou meramente um objetivo hipotético. Eles imediatamente obtêm uma noção intuitiva do ato mais útil que poderiam realizar no momento para promover ou dificultar esse objetivo, de acordo com seus desejos e o melhor julgamento do Mestre. Eles podem não entender por que essa ação seria tão útil ou prejudicial para o objetivo, e o ato pode ser difícil de ser executado por eles, mas ele sempre será muito útil ou prejudicial por sua vez, conforme pretendem. Esta dádiva não pode ser usada como um milagre. Esta dádiva não pode ser usada novamente no mesmo tópico ou em um similar até que a ação tenha sido tomada ou seriamente tentada."
        },
        {
          name: "Ordem Sem Perturbação (Undisrupted Order)",
          type: "No Turno",
          content: "O Godbound foca em manter a coerência pessoal e ganha uma defesa invulnerável contra todo dano físico ou alteração física até o início de seu próximo turno. Usar esta dádiva uma segunda vez ou mais na mesma cena exige que o Esforço seja Comprometido pelo dia a cada vez adicional que esta dádiva for usada. Note que esta dádiva é de No Turno em vez de Instantânea, portanto deve ser usada no turno do Godbound."
        }
      ]
    }
  },
  {
    id: "fear",
    name: "Medo (Fear)",
    shortDesc: "A Palavra do medo, atuando como um enviado de pesadelos que marca a mente mortal com o pavor e afeta a moral de aliados e inimigos.",
    description: "Um Godbound of Fear é um enviado de pesadelo. Eles trazem a certeza de horrores e a expectativa de terrores, marcando as mentes mortais com a agonia de coisas que ainda não aconteceram e os temores de coisas que ainda podem ser. Até mesmo criaturas sem mente respondem a terrores que podem não ter a cognição para compreender verdadeiramente. Godbound of Fear nunca ficam com medo involuntariamente e concedem automaticamente uma Moral de 12 a qualquer aliado visível, enquanto quaisquer inimigos que enfrentam sofrem uma penalidade automática de Moral de -2. Esta penalidade e outros temores que o Godbound induz podem afetar até mesmo inimigos sem mente ou fanáticos. Se os poderes forem usados contra PCs, assuma que eles têm uma pontuação de Moral base de 12, antes que a penalidade de -2 seja aplicada.",
    gifts: {
      lesser: [
        {
          name: "Cidadela de Coragem (Citadel of Courage)",
          type: "Constante",
          content: "O Godbound tem uma defesa invulnerável contra habilidades que afetam emoções. Eles podem Comprometer Esforço para estender essa imunidade aos aliados dentro do alcance visual."
        },
        {
          name: "Conhecer o Medo Interior (Know the Fear Within)",
          type: "Ação",
          content: "O Godbound estuda um alvo visível e descobre quaisquer medos que ele possa ter relevantes para os interesses do Godbound, aprendendo contexto suficiente para que a origem dos medos faça sentido. Eles podem silenciar ou amplificar seletivamente tais terrores. Quando em força total, a vítima deve fazer um teste de Moral ou agir para evitar ou fugir do medo até o limite de seu caráter natural. A calma ou o terror duram no máximo 24 horas, ou até que o Godbound os liberte."
        },
        {
          name: "Lança de Deimos (Lance of Deimos)",
          type: "No Turno",
          content: "Comprometa Esforço. O Godbound empunha o terror mortal como uma arma, com ataques que causam 1d10 de dano emocional e têm alcance até a distância visual. A primeira vez que um inimigo é atingido por este poder em uma luta, ele precisa fazer um teste de Moral. Esta dádiva não pode afetar objetos inanimados, mas pode ferir robôs ou outros inimigos animados sem mente."
        },
        {
          name: "Monstros do Id (Monsters of the Id)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. O Godbound conjura uma manifestação monstruosa de algo de que um alvo visível tem medo. Criaturas sem medos naturais produzem monstros hipotéticos. Essas criaturas têm o dobro do nível do Godbound em dados de vida, até um máximo de dez, uma CA de 5, um movimento de voo de 30 pés, um bônus de acerto igual aos seus dados de vida e causam 1d10 de dano, mas seus ataques sempre atingem com sucesso a entidade da qual foram evocados e rolam 1d20 de dano contra ela. Elas são incapazes de realizar ações que não sejam direcionadas a ferir ou aterrorizar sua entidade de origem. Uma entidade pode dar à luz apenas um tal terror de cada vez."
        },
        {
          name: "Escudo de Phobos (Shield of Phobos)",
          type: "Constante",
          content: "O Godbound tem uma Classe de Armadura natural de 3, pois os inimigos hesitam em golpear. Inimigos menores com uma pontuação de Moral modificada de 6 ou menos estão muito intimidados para atacar o Godbound, a menos que sejam atacados primeiro."
        },
        {
          name: "Premonição Insuportável (Unbearable Premonition)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e escolha um único alvo ou Pequena Multidão. Escolha um ato ou tipo de ação que eles acharão insuportavelmente aterrador de contemplar. Inimigos menores serão incapazes de realizar a ação, a menos que suas vidas dependam disso, enquanto inimigos poderosos podem fazer um teste de Moral para realizar o ato por um turno, ou Comprometer Esforço para a cena para afastar o medo completamente. Criaturas que se livram do poder ficam imunes a ele pelo resto da cena. Caso contrário, o medo dura até que o Godbound o suspenda."
        },
        {
          name: "Pesadelos Desvelados (Unveiled Nightmares)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e mire em uma criatura visível. Ela ganha uma fobia intensa em relação a uma coisa, lugar ou tipo geral de atividade. Esse terror pode ser tornado específico para coisas particulares ou abranger toda uma classe ou tipo de entidades. A vítima deve fazer um teste de Moral com a penalidade de -2 do Godbound a cada turno que desejar interagir com o objeto de seu terror. O pavor dura até ser dissipado ou o Godbound os liberar. Um inimigo poderoso pode salvar versus Espírito para se livrar dele."
        }
      ],
      greater: [
        {
          name: "O Covarde Interior (The Coward Inside)",
          type: "Ação",
          content: "Comprometa Esforço. Você pode usar os sentidos de qualquer criatura que já tenha falhado em um teste de Moral induzido por você ou sido aterrorizada por você de forma semelhante, percebendo tudo o que ela percebe sem a consciência dela da sua presença. Comprometa Esforço pelo dia para aparecer atrás deles se estiverem a dez milhas por nível do Godbound."
        },
        {
          name: "Pavor Inexorável (Inexorable Dread)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia e escolha um medo que um alvo visível tenha. Esse medo inevitavelmente se concretizará o mais rápido possível. Se o medo envolver inimigos poderosos, esses inimigos podem salvar versus Espírito para não serem influenciados pela dádiva, mas inimigos menores tomarão quaisquer ações necessárias para concretizar o medo, quer queiram ou não. Se o medo envolver objetos inanimados ou eventos aleatórios, a coincidência e o acaso o trarão à tona, se fisicamente possível. Esta dádiva não pode ser usada em um alvo novamente até que o medo tenha se concretizado. A escala do medo não pode envolver mais de 100 alvos."
        },
        {
          name: "Terror Quintessencial (Quintessential Terror)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia e mire em um sujeito que você já viu antes. Você pode escolher um único objeto, evento ou pessoa; o confronto com a coisa escolhida fará com que o alvo morra de terror ou seja reduzido a 1 ponto de vida, a seu critério. O alvo não está necessariamente ciente desse pavor até ser confrontado com o objeto, embora você possa optar por impressioná-lo com uma sombra de seu terror no momento em que usar este poder, deixando-o com medo de enfrentá-lo. Inimigos menores não podem evitar as consequências, enquanto inimigos poderosos podem salvar versus Espírito para em vez disso sofrer metade do nível do Godbound em pontos de dano, arredondado para cima. Esta dádiva dura até ser disparada, após o qual qualquer vítima sobrevivente fica imune à dádiva por 30 dias. Esta dádiva não pode ser usada como um milagre."
        }
      ]
    }
  },
  {
    id: "fertility",
    name: "Fertilidade (Fertility)",
    shortDesc: "A Palavra da fertilidade, abençoando colheitas e linhagens, ou trazendo pragas e maldições sobre terras e famílias.",
    description: "Fertilidade para suas terras e filhos para suas famílias são dois dos desejos mais caros de todas as pessoas comuns, e a Palavra de Fertility concede tais bênçãos. Mas o que ela dá, ela também pode tirar, e os milagres desse poder também podem ser usados para devastar terras e amaldiçoar linhagens. Milagres imediatos tendem a influenciar brevemente o desejo, a sexualidade, as colheitas e pragas, enquanto as dádivas da Palavra podem produzir efeitos mais duradouros. Heróis com a Palavra Fertility têm controle perfeito sobre sua reprodução e podem definir sua pontuação de Constituição para 16, ou para 18 se já for 16 ou superior. Eles têm uma defesa invencível contra armas ou objetos de madeira, monstros vegetais e toxinas à base de plantas.",
    gifts: {
      lesser: [
        {
          name: "Bênção do Nascimento (Birth Blessing)",
          type: "Ação",
          content: "Torne instantaneamente um alvo estéril, induza um aborto espontâneo ou abençoe o alvo com a garantia de uma concepção saudável, cujos detalhes da criança você pode moldar. Você também pode curar defeitos congênitos ou garantir um parto seguro. Tal é o poder desta dádiva que ela pode até induzir um nascimento virginal. Alvos resistentes que sejam inimigos poderosos têm direito a um teste de resistência de Vigor (Hardiness)."
        },
        {
          name: "Uma Segunda Primavera (A Second Spring)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia. Todos os aliados à vista são revigorados, recuperando o vigor como se estivessem bem alimentados e descansados, e curando 1d6 pontos de dano mais o nível do Godbound. Ao contrário da maioria dos efeitos de cura, os recipientes não precisam comprometer Esforço para se beneficiar desta bênção."
        },
        {
          name: "Sementes da Morte (Seeds of Death)",
          type: "No Turno",
          content: "Comprometa Esforço. Você pode induzir cânceres e crescimentos letais como uma arma mágica de 1d10 com um alcance de 60 metros (200 pés), fazendo jogadas de ataque normalmente. O uso deste poder na primeira rodada é imperceptível para os espectadores e para a vítima, mas a segunda rodada e as seguintes produzem tumores e crescimentos visíveis. Inimigos menores morrerão de câncer de 1 a 6 meses após você usar esta dádiva neles, excetuando-se cura mágica, mesmo que você escolha não causar dano com um acerto."
        },
        {
          name: "Uma Sensação de Cinza (A Sense of Ash)",
          type: "No Turno",
          content: "Comprometa Esforço. Você detecta todos os venenos, pragas, danos ambientais ou maldições na terra à vista. Você obtém uma impressão das pessoas ou causas responsáveis por eles, a menos que estejam ocultadas por magia de outra forma. Você reconhece criaturas doentes ou causadoras de doenças à vista e pode determinar qual praga as aflige ou que elas infligem aos outros."
        },
        {
          name: "Restrição do Toque Verde (Touch of Green Restraint)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Plantas em um raio de 15 metros (50 pés) ao redor do ponto escolhido à vista irrompem para agarrar os inimigos. Todos os inimigos na área devem fazer um teste de resistência de Evasão no início de cada rodada para se livrarem das vinhas e recuperarem o movimento livre, embora ainda possam lutar onde estão normalmente ou lançar ataques à distância, caso os possuam. Inimigos sujeitos ao seu dado de Refrega (Fray) sofrem o dano a cada rodada em que permanecerem presos. Aqueles inimigos que atingirem zero dados de vida por causa disso podem ser totalmente imobilizados ou esmagados até a morte, a critério do Godbound."
        },
        {
          name: "Maldição Siderante (Withering Curse)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Quarenta acres de plantas morrem instantaneamente e a terra em que estavam fica amaldiçoada à inutilidade por uma geração, a menos que seja revertida pelos poderes desta Palavra. Opcionalmente, plantas e madeira viva ou cortada podem ser reduzidas a cinzas conforme desejado em um raio de 15 metros (50 pés). Itens de madeira segurados ou carregados por um portador não são afetados, embora edifícios ou veículos possam ser destruídos. Monstros vegetais sofrem 1d12 de dano por nível."
        }
      ],
      greater: [
        {
          name: "Bênção Cornucópia (Cornucopian Blessing)",
          type: "No Turno",
          content: "Comprometa Esforço. Escolha um recipiente contendo uma substância agrícola não mágica; enquanto o Esforço permanecer comprometido, o suprimento nunca acabará, não importa o quanto seja retirado do recipiente. O recipiente pode fornecer até dez toneladas de mercadorias por dia por nível de herói, desde que sua boca seja grande o suficiente para expelir tais quantidades."
        },
        {
          name: "Cortar a Linha (Sever the Line)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia e escolha um alvo à vista. O alvo é tornado estéril e apenas uma dádiva ou poder similar pode desfazer isso. Todos os seus filhos sofrem imediatamente um dado de dano de 1d12, os netos sofrem 1d10, os bisnetos sofrem 1d8, e assim por diante até a quinta geração, que sofre 1d4. Esta maldição só funciona uma vez em qualquer alvo dado, e descendentes específicos podem ser poupados pelo herói."
        },
        {
          name: "Abundância Sem Fim (Unending Abundance)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia. A terra que você designar dentro de um raio de dez milhas torna-se impossivelmente fértil, com colheitas brotando em meras horas e alimentando qualquer número de pessoas dentro dessa área. Se aplicado como uma bênção e não usado como um milagre único, a fertilidade persistente conta como uma Característica (Feature) benéfica para qualquer facção que controle a terra, embora não possa ser sacrificada no caso de um Conflito perdido em que esteve envolvida."
        }
      ]
    }
  },
  {
    id: "fire",
    name: "Fogo (Fire)",
    shortDesc: "Calor, fumaça, luz, fúria e ânsia.",
    description: "A Palavra do Fogo consome e purifica com chamas rugentes, lançando torrentes de calor devastador e brasas que incendeiam o campo de batalha.",
    gifts: {
      lesser: [
        {
          name: "Olhar Consumidor (Consuming Gaze)",
          type: "Ação",
          content: "Um objeto à vista de até 6 x 6 x 6 metros (20x20x20 pés) de tamanho é consumido em chamas e transformado em cinzas finas, mesmo que normalmente não seja combustível. Objetos maiores podem levar algumas rodadas para queimar completamente. Objetos carregados por uma pessoa não podem ser afetados. Veja a página 27 para regras sobre a criação de paredes de fogo ou outras zonas de terreno perigoso."
        },
        {
          name: "Tempestade de Fogo (Firestorm)",
          type: "Ação (Golpe / Smite)",
          content: "Comprometa Esforço para a cena. Escolha um ponto à vista; cada alvo escolhido em um raio de 30 metros (100 pés) dele é atingido por chamas cadentes com um dado de dano de 1d6 por nível do Godbound, com um teste de resistência de Evasão permitido para reduzir o dano à metade, arredondado para cima."
        },
        {
          name: "Andarilho do Fogo (Firewalker)",
          type: "No Turno",
          content: "Comprometa Esforço para a cena. Saiba instantaneamente a localização de todas as chamas em um raio de uma milha. Como uma ação, teletransporte-se e emerja de qualquer chama maior do que uma vela com quaisquer companheiros dispostos em contato físico com você. Você não pode se mover mais de uma milha no total em uma hora."
        },
        {
          name: "Devolver as Cinzas (Give Forth the Ashes)",
          type: "Ação",
          content: "Desqueime objetos ou criaturas em um cubo de 6 x 6 x 6 metros (20x20x20 pés) a cada rodada, reparando danos e restaurando a condição de objetos queimados. O dano por fogo é curado sem custo de Esforço, mas os mortos não são ressuscitados."
        },
        {
          name: "Mestre da Fornalha (Master of the Furnace)",
          type: "No Turno",
          content: "Comprometa Esforço. Modele e molde todo o fogo à vista, direcionando-o ou extinguindo-o como desejar. Como uma ação, incendeie um objeto inanimado e sem vigilância à vista, se ele for inflamável. Objetos maiores que uma carroça só podem ser incendiados parcialmente."
        },
        {
          name: "Nimbo de Chamas (Nimbus of Flame)",
          type: "No Turno",
          content: "Comprometa Esforço. Você está cercado por uma auréola de calor abrasador. Qualquer um que o ataque em combate corpo a corpo sofre 1 ponto de dano por fogo antes que o ataque seja resolvido. Os agressores podem sofrer apenas um tal ferimento por rodada, mesmo que lancem múltiplos ataques."
        }
      ],
      greater: [
        {
          name: "Repreensão Ardente (Burning Rebuke)",
          type: "No Turno",
          content: "Comprometa Esforço. Cada inimigo que o atacar enquanto estiver com raiva ou apaixonado sofre o seu dado de Refrega (Fray) em dano de fogo antes de cada ataque ser resolvido, mesmo que eles tenham mais dados de vida do que você ou façam múltiplos ataques. Normalmente, apenas criaturas sem mente ou inimigos notavelmente disciplinados conseguem manter a calma suficiente para evitar o dano. Multidões sofrem esse dano diretamente."
        },
        {
          name: "Palavras de Brasa (Cinder Words)",
          type: "No Turno",
          content: "Comprometa Esforço. Sua voz corrói seus inimigos. Cada inimigo menor ao alcance da voz sofre o seu dano de Refrega a cada rodada. Você pode incendiar objetos sem vigilância com uma palavra como uma ação gratuita uma vez por rodada."
        },
        {
          name: "Lâmina Incandescente (Searing Blade)",
          type: "No Turno",
          content: "Comprometa Esforço. Você empunha o fogo como uma arma, seja revestindo uma lâmina nele ou usando projeções dele como uma arma mágica com alcance de 60 metros (200 pés) e dado de dano de 1d10. Vítimas individuais mortas por isso explodem em chamas, causando um dado de dano de 1d6 a todos os alvos desejados em um raio de 6 metros (20 pés). O dano desta dádiva é sempre rolado diretamente contra Multidões de inimigos menores."
        }
      ]
    }
  },
  {
    id: "health",
    name: "Saúde (Health)",
    shortDesc: "A Palavra da saúde, banindo doenças, curando ferimentos e corrigindo carne disforme.",
    description: "Pão, crianças e saúde; essas coisas estão sempre nas orações do povo. A Palavra de Health oferece pelo menos uma delas, banindo doenças e endireitando a carne malformada. Milagres de Health podem banir pragas e curar ferimentos, embora dádivas sejam geralmente necessárias para trabalhos em grande escala, exceto em feitos de cura relativamente menores. Semideuses vingativos de Health também podem infligir as mesmas pragas que podem curar. Embora potentes, os poderes de cura frequentemente exigem muito das reservas daqueles que se beneficiariam deles. Algumas dádivas exigem que aqueles que foram curados comprometam Esforço pelo dia para absorver as energias de cura. NPCs e outros sem pontuações de Esforço listadas podem ser considerados capazes de se beneficiar de tal cura no máximo uma vez por dia. Heróis com a Palavra Health têm uma defesa invencível contra doenças e venenos, e podem diagnosticá-los instantaneamente. Eles podem definir sua Constituição para 16, ou para 18 se já for 16 ou superior.",
    gifts: {
      lesser: [
        {
          name: "Finalizador de Pragas (Ender of Plagues)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Cura todas as doenças e envenenamentos à vista. Se o Esforço for gasto pelo dia, o alcance da cura se estende para meia milha ao redor do herói, penetra paredes e outras barreiras, e você se torna imediatamente ciente de quaisquer maldições causadoras de doenças ou fontes de pestilência dentro dessa área."
        },
        {
          name: "Carne Tornada Verdadeira (Flesh Made True)",
          type: "Ação",
          content: "Você é capaz de curar mutilações, cegueiras, envenenamentos, desfigurações e defeitos congênitos de um alvo à vista uma vez por rodada. Isso não cura dano de pontos de vida, mas pode restaurar membros perdidos e funcionalidade incapacitada."
        },
        {
          name: "Saúde Intrínseca (Intrinsic Health)",
          type: "Constante",
          content: "Seus pontos de vida máximos aumentam em 2 pontos extras por nível, incluindo níveis ganhos antes de você pegar esta dádiva. Esta dádiva não pode ser suprimida."
        },
        {
          name: "Olhar Misericordioso (Merciful Gaze)",
          type: "Ação",
          content: "Com o seu olhar em um alvo à vista, você pode curar 2d6 mais o seu nível de personagem em pontos de dano. No entanto, o alvo deve Comprometer Esforço pelo dia para se beneficiar da cura. NPCs e outros mortais comuns normalmente podem se beneficiar apenas uma vez por dia desta dádiva."
        },
        {
          name: "Portador da Peste (Plaguebringer)",
          type: "No Turno",
          content: "Comprometa Esforço. Seu toque ou ataques de armas bem-sucedidos causam uma doença de sua escolha. Inimigos poderosos recebem um teste de resistência de Vigor (Hardiness) para resistir. A doença pode ser restrita a eles ou ter sua contágio natural permitido. A doença aparece dentro de 1d6 horas e está em pleno efeito em um dia. Doenças letais matarão dentro de 1d6 dias sem cura mágica."
        },
        {
          name: "Fornalha Vital (Vital Furnace)",
          type: "No Turno",
          content: "Comprometa Esforço pelo dia. Cure instantaneamente quaisquer pontos de vida perdidos desde o final do seu último turno, desde que o dano não o tenha matado."
        }
      ],
      greater: [
        {
          name: "Vitalidade Ardente (Burning Vitality)",
          type: "No Turno",
          content: "Comprometa Esforço pelo dia. Recupere 1 ponto de vida por rodada até estar com a saúde total. Alternativamente, você pode Comprometer Esforço pelo dia para curar 1 ponto de vida ou dado de vida em todos os aliados em um raio de 90 metros (100 jardas) e ressuscitar seres mortais comuns dentre os mortos com 1 dado de vida, desde que tenham morrido nos últimos cinco minutos e não estejam completamente mutilados. Os recipientes não precisam Comprometer Esforço para se beneficiarem desta cura."
        },
        {
          name: "Esgotar a Saúde (Deplete Health)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e escolha um alvo. Ele adoece, caindo para metade de seus dados de vida ou pontos de vida atuais, arredondado para cima. Inimigos poderosos recebem um teste de resistência de Vigor (Hardiness) para resistir. Os dados de vida perdidos retornam no final da cena se a criatura não estiver morta. Esta dádiva não se acumula várias vezes."
        },
        {
          name: "Doador de Vida (Lifegiver)",
          type: "Constante",
          content: "Aliados em sua presença estabilizam automaticamente com zero dados de vida ou pontos de vida, desde que seus corpos não estejam despedaçados. Como uma ação, Comprometa Esforço pelo dia para ressuscitar uma criatura mortal comum da morte se ela estiver morta há menos de um dia e alguma parte de seu cadáver permanecer intacta. Godbound e outras entidades poderosas não podem ser ressuscitados."
        }
      ]
    }
  },
  {
    id: "insects",
    name: "Insetos (Insects)",
    shortDesc: "A Palavra dos Insetos, governando hordas verminosas, resiliência quitinosa, fome implacável e controle de criaturas.",
    description: "Senhores de enxames e multidões, Godbound of Insects têm domínio sobre hordas verminosas e monstros quitinosos alike. Eles manejam poderes de resiliência, fome e impulso irracional. Como a maioria das Palavras relacionadas a um único tipo de criatura animal, a Palavra de Insects pode emular muitos dos poderes da Palavra de Beasts relacionados a insetos e criaturas semelhantes a bugs. Ela pode adicionalmente invocar poderes relacionados aos traços característicos de insetos, como multiplicidade, fome sem mente, a capacidade de agir enquanto desmembrado e controle parasitário de outras criaturas. Godbound da Palavra de Insects possuem imunidade invulnerável a danos causados ​​por insetos ou toxinas derivadas de insetos. Seres divinos de natureza insetoide ainda podem ferir eles, mas devem Comprometer Esforço pelo dia para cada rodada que buscam atacar o Godbound diretamente. Eles podem se comunicar com insetos como se as criaturas fossem inteligentes como humanos e podem comandar insetos não mágicos completamente. Na ausência de enxames perigosos, os insetos não são eficazes em combate, mas espionarán obedientemente e agirão sem consideração pela autopreservação. Comandos que um Godbound emite para eles serão obedecidos por uma cena antes que eles se afastem ou percam o foco.",
    gifts: {
      lesser: [
        {
          name: "Chamar o Enxame (Call the Swarm)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia. O Godbound evoca uma Pequena Multidão de insetos para cada três níveis de personagem que possui, arredondado para cima. Esses insetos têm as estatísticas de combate de uma Multidão de Enxame Verminoso, mas podem voar a 60 pés por ação de movimento e juntos podem carregar até 50 libras de peso. Esses enxames existem até serem destruídos ou o Godbound os dissipar. Esta dádiva não pode ser usada novamente até que todos os enxames anteriores sejam dissipados ou destruídos."
        },
        {
          name: "Vitalidade Quitinosa (Chitinous Vitality)",
          type: "Constante",
          content: "A carne do Godbound é dura e resiliente contra ferimentos, concedendo-lhe uma CA natural de 3. Eles podem regenerar extremidades perdidas em um dia, incluindo sua cabeça, e não podem ser incapacitados apenas por decapitação."
        },
        {
          name: "Carne de Muitos (Flesh of the Many)",
          type: "Ação",
          content: "Comprometa Esforço. O Godbound desmorona em um enxame de insetos de sua escolha, com insetos voadores movendo-se a uma taxa igual ao movimento normal do Godbound. Eles não podem usar poderes ofensivos ou ataques enquanto estiverem nessa forma, mas são igualmente imunes a qualquer ataque que não pudesse destruir um enxame inteiro de insetos de uma só vez. Os insetos devem permanecer a 30 pés um do outro, e o Godbound se une novamente em qualquer lugar dentro desse alcance quando recupera o Esforço."
        },
        {
          name: "O Salto da Mosca (The Fly's Leap)",
          type: "Instante",
          content: "Comprometa Esforço para a cena. O Godbound salta instantaneamente até 30 pés de distância, evadindo automaticamente qualquer ataque físico ou dano que pudesse ser esquivado por tal evasão."
        },
        {
          name: "Veneno Verminoso (Verminous Venom)",
          type: "No Turno",
          content: "Comprometa Esforço. O Godbound brota mandíbulas, garras, ferrões ou outras armas corporais venenosas, ou envenena uma arma carregada, fazendo-a causar 1d10 de dano. Qualquer criatura viva atingida com esta dádiva sofre automaticamente 1 ponto de dano na rodada seguinte devido à toxina persistente. A critério do Godbound, seu veneno pode simplesmente paralisar um inimigo levado a zero pontos de vida."
        },
        {
          name: "O Verme Interior (The Worm Within)",
          type: "Instante",
          content: "Quando um inimigo é reduzido a zero pontos de vida por um ataque que o Godbound faz, ele pode Comprometer Esforço pelo dia para injetar uma larva no inimigo caído como parte do ataque. A vítima recupera um ponto de vida e imediatamente se torna completa e totalmente sujeita à vontade do Godbound. O Godbound pode compartilhar seus sentidos e se comunicar telepaticamente com eles como desejar. Inimigos menores não têm resistência a esse controle, embora inimigos poderosos possam fazer um teste de resistência de Espírito para resistir a demandas particularmente repugnantes. Se a vítima tiver sucesso em um teste, o Godbound deve imediatamente permitir que a larva pereça ou fazer com que ela mate o hospedeiro, emergindo como um inseto do tamanho de um cachorro de escolha do Godbound, sem habilidades reais de combate. O Godbound pode permitir que a larva morra ou emerja em qualquer ponto anterior, se desejar. Um Godbound pode ter até o seu nível em vítimas parasitadas de uma vez."
        }
      ],
      greater: [
        {
          name: "Um Milhão de Mandíbulas (A Million Mandibles)",
          type: "Ação (Golpe / Smite)",
          content: "Comprometa Esforço pelo dia. Uma erupção de insetos consumidores ataca todos os alvos desejados, plantas e estruturas dentro de trinta pés por nível do Godbound. Inimigos menores sofrem 1d6 de dano por nível do Godbound, enquanto indivíduos de 1 DV (HD) ou Multidões feitas de tais indivíduos são instantaneamente destruídos, a menos que tenham alguma proteção especial. Inimigos poderosos sofrem 1d8 de dano a cada dois níveis, com um teste de resistência de Vigor (Hardiness) para reduzi-lo à metade. Plantas normais ou estruturas de madeira leve são destruídas e as de madeira resistente são severamente danificadas. Esses insetos desaparecem após o ataque."
        },
        {
          name: "Voar, Escavar e Perfurar (Fly, Burrow, and Bore)",
          type: "Constante",
          content: "O Godbound é capaz de voar ao dobro de sua taxa de movimento normal e perfurar obstáculos ou superfícies de terra ou madeira à sua taxa de movimento normal, criando um buraco de até quatro pés de raio e tão fundo quanto escolher mover-se."
        },
        {
          name: "Mil Asas (One Thousand Wings)",
          type: "Ação",
          content: "Comprometa Esforço. O Godbound se transforma em um inseto normal de sua escolha, não ganhando poderes especiais, mas adquirindo qualquer movimento de voo ou aquático que o inseto possa ter enquanto o Esforço permanecer Comprometido. Se o Esforço for Comprometido para a cena, eles podem transformar um alvo visível em um inseto. Inimigos menores não podem resistir a isso, mas inimigos poderosos podem salvar versus Vigor (Hardiness) para se livrar do efeito. Esta transformação dura tanto quanto o Godbound desejar e pode ser puramente física ou transmitir a mente de um inseto também."
        }
      ]
    }
  },
  {
    id: "intoxication",
    name: "Intoxicação (Intoxication)",
    shortDesc: "A Palavra da intoxicação, dominando drogas, venenos, estados de embriaguez e o controle por meio de vícios e substâncias químicas.",
    description: "Todas as substâncias que alteram a mente do usuário caem sob a Palavra de Intoxication, seja droga narcótica ou vinho sagrado, bem como os estados de embriaguez, envenenamento e outra influência química. Aqueles que são mestres sobre a Palavra de Intoxication podem elevar sua Constituição para 16, ou para 18 se já for 16 ou maior. Eles têm imunidade invulnerável a venenos e nunca ficam sem um suprimento de qualquer droga não mágica suficiente para uma Multidão Grande de pessoas. Suas drogas são poderosas o suficiente para afetar construtos e mortos-vivos; apenas aqueles com uma imunidade invulnerável específica a venenos são imunes. Alguns poderes induzem ou usam vícios em drogas. Um viciado realizará qualquer ato inofensivo em troca de sua droga de escolha, e inimigos menores devem fazer um teste de resistência contra o pior entre seus testes de Resistência (Hardiness) ou Espírito (Spirit) para resistir a fazer até mesmo atos muito nocivos ou imorais em troca de uma oferta de sua substância desejada. Vícios induzidos magicamente duram até que o Godbound liberte as vítimas.",
    gifts: {
      lesser: [
        {
          name: "Lote Ruim (Bad Batch)",
          type: "Ação",
          content: "O Godbound pode alterar a natureza de qualquer substância comestível ou consumível visível, dando-lhe as propriedades de uma droga de sua escolha. Os usuários não sofrerão overdose, a menos que o Godbound permita; se usado para criar uma toxina, o usuário deve salvar versus Vigor (Hardiness) ou morrer. Se o Godbound Comprometer Esforço pelo dia, a substância encantada pode ser codificada para afetar apenas pessoas específicas ou classes de alvos."
        },
        {
          name: "Influência Química (Chemical Influence)",
          type: "No Turno",
          content: "Comprometa Esforço para a cena e mire em uma criatura visível. A criatura é imediatamente oprimida por uma emoção de sua escolha, agindo até os limites de seu próprio caráter para expressar essa emoção. Você pode focar a emoção em uma pessoa escolhida ou ideia simples. A emoção dura até o final da cena, e inimigos poderosos podem salvar versus Vigor (Hardiness) para permanecerem na sua maioria inafetados, embora mesmo um teste bem-sucedido os force a Comprometer Esforço pelo dia para resistir ao impulso químico. Um teste bem-sucedido torna o alvo imune a usos posteriores deste poder em uma cena."
        },
        {
          name: "Sentindo-se Muito Bem (Feeling All Right)",
          type: "Constante",
          content: "O Godbound ganha imunidade invulnerável a influência mental mágica ou leitura mental. Se visado por tal poder, ele pode Comprometer Esforço para a cena como uma ação Instantânea para usar uma dádiva de Intoxicação ou milagre em seu agressor como se ele fosse um alvo visível, pagando o preço usual em Esforço pela habilidade."
        },
        {
          name: "Passe Adiante (Pass It Around)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Um alvo visível é afetado como se tivesse tomado uma droga de escolha do Godbound. O Godbound pode controlar quaisquer alucinações ou emoções que a droga possa induzir. Se usado para aplicar uma dose tóxica, o poder inflige dois pontos de dano por nível de PC. Inimigos poderosos podem salvar versus Vigor (Hardiness) para resistir a este poder."
        },
        {
          name: "Vendo Coisas (Seeing Things)",
          type: "No Turno",
          content: "Comprometa Esforço. O Godbound controla todas as alucinações que ocorrem atualmente em um raio de duzentos pés. Ele pode tornar essas alucinações objetivamente reais para aqueles que as experimentam; escadas ilusórias sustentam seu peso, facas imaginadas que eles seguram cortam coisas, e fossos fantasmas os engolem. Alvos afetados por alucinações nocivas podem salvar versus Vigor (Hardiness) para evitar sofrer dano a cada rodada; o fracasso significa que eles sofrem um ponto de dano a cada dois níveis do PC, arredondado para cima. Multidões sofrem dano triplo. No final da dádiva, quaisquer alvos em locais impossíveis são movidos com segurança para o lugar real mais próximo."
        },
        {
          name: "O Chamado do Desejo (The Craving Call)",
          type: "Ação",
          content: "O Godbound pode ver visivelmente vícios em drogas com a inspeção equivalente a uma ação. O Godbound pode extinguir vícios em drogas físicos e psicológicos em qualquer número de alvos à vista. Se ele Comprometer Esforço para a cena, ele também pode induzir vícios em alvos de até o tamanho de uma Pequena Multidão; inimigos poderosos podem salvar versus Vigor (Hardiness) para resistir. Vícios causados por um Godbound podem ter permissão para seguir seu curso usual ou serem tornados fisicamente inofensivos ao alvo, permitindo-lhes assim indulgência excessiva agressiva indefinidamente."
        }
      ],
      greater: [
        {
          name: "Lá Dentro (Inside You)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia para emergir instantaneamente de qualquer criatura sob a influência de drogas, vícios ou dádivas de Intoxicação fornecidas por você, independentemente da distância deles. Opcionalmente, você pode compartilhar os sentidos desse alvo sem precisar Comprometer o Esforço concentrando-se por uma ação, comunicando-se com eles como desejar."
        },
        {
          name: "Legalização (Legalization)",
          type: "Constante",
          content: "Drogas, venenos ou substâncias ilícitas de qualquer espécie nunca são vistos como ilegais ou repreensíveis quando possuídos ou usados pelo Godbound ou seus representantes pessoalmente escolhidos, até cinco por nível de personagem. Apesar de confrontados diretamente com eles, agentes da lei simplesmente não pensarão em considerá-los uma violação. Mesmo envenenamentos, intoxicação pública ou uso hostil de drogas contra um sujeito não são considerados ilegais ou socialmente impróprios. Inimigos poderosos podem salvar versus Espírito para ver através dessa confusão, mesmo que os outros não possam."
        },
        {
          name: "Negócio de Traficante (Pusher's Deal)",
          type: "No Turno",
          content: "Comprometa Esforço para a cena para sancionar um acordo feito em troca de drogas. O alvo não pode ser coagido magicamente a fazer esta barganha, mas pode ser ameaçado ou apresentado de outra forma a consequências desagradáveis. Uma vez que o acordo é feito, o alvo deve cumprir, embora o Godbound não esteja igualmente vinculado às suas promessas. Se o alvo quebrar o acordo, o Godbound é instantaneamente avisado disso. Por um ano e um dia, a vítima não recebe mais um teste de resistência contra os poderes do Godbound e nunca pode evitar seus ataques. Inimigos menores que quebram um acordo podem ser mortos instantaneamente de qualquer distância durante este período, se o Godbound desejar."
        }
      ]
    }
  },
  {
    id: "journeying",
    name: "Jornada (Journeying)",
    shortDesc: "A Palavra de jornadas e viagens longas, permitindo transporte veloz, superação de barreiras e navegação infalível.",
    description: "O herói viaja longe com a Palavra de Jornada, que se preocupa com longas viagens e caminhos perigosos. Milagres de Journeying envolvem transporte veloz para um local desejado, o rompimento de barreiras para o caminho do herói e a evitação de perigos enquanto estiver na estrada. Outros milagres podem selar ou abrir Night Roads existentes. Note que as dádivas de Journeying aplicam-se a viagens em vez de simples movimento. Dádivas que falam de viagens significam que o herói está se movendo de um local para outro destino, em vez de apenas correr em uma única área. Heróis com a Palavra Journeying sabem sempre exatamente onde estão, nunca perdem o caminho para um destino conhecido e podem tratar a viagem como se fosse tão revigorante e nutritiva para eles quanto um sono profundo e uma boa refeição.",
    gifts: {
      lesser: [
        {
          name: "Poeira em seus Calcanhares (Dust At Your Heels)",
          type: "No Turno",
          content: "Comprometa Esforço. Você e aqueles que estão com você não podem ser alcançados por perseguidores, desde que continuem viajando. Seu grupo estará sempre se movendo mais rápido do que eles, independentemente da velocidade deles, até que você interrompa seu movimento."
        },
        {
          name: "Conhecer o Caminho (Know the Path)",
          type: "Constante",
          content: "Você sempre sabe o caminho mais seguro e fácil para chegar a qualquer local que não seja mantido em segredo do mundo. Aqueles que viajam com você também consideram sua jornada como comida e sono, permitindo viagens constantes."
        },
        {
          name: "Mestre da Chave (Master of the Key)",
          type: "Instante",
          content: "Você pode derrotar instantaneamente qualquer armadilha mundana, fechadura, amarra, vínculo ou selo. Comprometa Esforço para a cena para superar barreiras, armadilhas e vínculos mágicos à vista, incluindo aqueles de natureza mental. Você pode fazer isso mesmo que o efeito de vínculo de outra forma o deixasse indefeso."
        },
        {
          name: "Abrindo o Caminho (Opening the Way)",
          type: "Ação",
          content: "Comprometa Esforço para a cena para criar uma brecha na segurança, seja um guarda vagando repentinamente para longe de seu posto ou uma fenda aparecendo em uma barreira mágica. A brecha permitirá a você e aos seus aliados um caminho claro para dentro ou além de um lugar e durará o tempo que for prático, não menos do que cinco minutos. Esta brecha de segurança geralmente não é grande o suficiente para permitir movimento desimpedido dentro do local, apenas a entrada nele."
        },
        {
          name: "Progresso Veloz (Swift Progress)",
          type: "No Turno",
          content: "Comprometa Esforço. Você e todos que viajam com você movem-se ao dobro da taxa diária normal de viagem e podem cruzar qualquer terreno como se fosse chão plano, mesmo montanhas ou mares. Nenhum de vocês jamais é prejudicado pelo clima natural ou outro ambiente natural insalubre."
        },
        {
          name: "Passagem Tranquila (Untroubled Passage)",
          type: "No Turno",
          content: "Comprometa Esforço. Enquanto você viaja, você e aqueles que estão com você nunca serão prejudicados por criaturas encontradas por acaso ou mau tempo. Inimigos poderosos vagando em seu caminho ganham um teste de resistência de Espírito para notar você."
        }
      ],
      greater: [
        {
          name: "A Estrada do Êxodo (The Exodus Road)",
          type: "No Turno",
          content: "Comprometa Esforço. Suas dádivas de Jornada podem ser aplicadas a qualquer número de companheiros dispostos à vista, incluindo exércitos inteiros ou cidades."
        },
        {
          name: "A Hora da Necessidade (The Hour of Need)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia. Até uma dúzia de aliados dentro de uma viagem de uma semana perceberam que você precisaria deles lá neste momento e chegarão nesta rodada, caso estivessem dispostos a vir. Isso pode induzir alguns problemas de causalidade, mas o poder da dádiva permite a chegada deles independentemente disso."
        },
        {
          name: "O Caminho da Aurora Acelerada (The Path of Racing Dawn)",
          type: "No Turno",
          content: "Comprometa Esforço. Você e aqueles que estão com você podem voar ou ignorar o terreno de outra forma, movendo-se a uma taxa de 100 milhas por hora durante a viagem. Você pode cruzar distâncias menores pelo ar, embora o voo não seja preciso o suficiente para servir em combate ou outros espaços interiores apertados."
        }
      ]
    }
  },
  {
    id: "knowledge",
    name: "Conhecimento (Knowledge)",
    shortDesc: "A Palavra do conhecimento e da compreensão, revelando segredos do passado e do presente, e mistérios do mundo.",
    description: "Knowledge é a Palavra da compreensão. Tudo o que os estudiosos mortais conhecem está dentro do escopo desta Palavra, juntamente com os segredos do passado e do presente. A Palavra de Knowledge não pode penetrar o véu do futuro, mas pode revelar quase tudo do mundo atual. No entanto, mistérios profundos de um mundo de campanha não podem ser descobertos à força. Fatos ou eventos perpetrados por alguém com a Palavra Deception permitem ao seu autor um teste de resistência de Espírito para ocultar eventos da Palavra de Knowledge. Heróis com a Palavra Knowledge podem definir seu atributo de Inteligência ou Sabedoria para 16. Se a pontuação já for 16 ou superior, eles podem definir como 18 em vez disso.",
    gifts: {
      lesser: [
        {
          name: "O Melhor Curso (The Best Course)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Obtenha uma frase de informação verdadeira do Mestre sobre a melhor maneira de realizar seu desejo ou objetivo atual. Novas informações não podem ser ganhas com esta dádiva até que a informação existente seja posta em prática ou o objetivo seja abandonado."
        },
        {
          name: "Os Planos Mais Bem Elaborados (The Best-Laid Plans)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia e elabore um plano. O Mestre anuncia a complicação ou ameaça mais relevante para a execução do plano que você ainda não conheça. Esta percepção só pode ser utilizada uma vez para qualquer objetivo específico que esteja sendo perseguido, cabendo ao Mestre decidir o que constitui um objetivo diferente."
        },
        {
          name: "Excisão da Compreensão (Excision of Understanding)",
          type: "Ação",
          content: "Como uma ação, apague o conhecimento de um alvo visível sobre um idioma, uma habilidade intelectual ou um tópico ou evento específico. Isso não pode apagar habilidades de lançamento de feitiços ou outros poderes, mas dura até que a habilidade seja reaprendida ou o Godbound ceda. Inimigos poderosos podem testar a resistência de Espírito para resistir."
        },
        {
          name: "Uma Verdade que Queima (A Truth That Burns)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e escolha um alvo visível. Conheça o conhecimento dele ou de seus planos que ele menos deseja que você saiba, a critério do Mestre. Inimigos poderosos recebem um teste de resistência de Espírito para resistir a esta inquisição subtil."
        },
        {
          name: "A Verdade Revelada (The Unveiled Truth)",
          type: "Ação",
          content: "Comprometa Esforço para a cena; obtenha uma resposta para qualquer pergunta, desde que a verdade sobre ela não esteja sendo intencionalmente ocultada por todos que a conhecem. Esta resposta é geralmente breve, de no máximo algumas frases."
        },
        {
          name: "Uma Palavra Distante (A Word Far Off)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Saiba o que está acontecendo em um determinado lugar ou comunidade onde você já esteve, aprendendo até três frases do que o Mestre acha que você acharia mais importante ou mais relevante para seus interesses imediatos."
        }
      ],
      greater: [
        {
          name: "Revelar a Falha (Disclose the Flaw)",
          type: "Instante",
          content: "Comprometa Esforço para a cena e escolha um alvo, seja criatura ou instituição. Conheça suas fraquezas atuais e elementos mais vulneráveis naquele momento, incluindo quaisquer meios ocultos pelos quais possa ser morto ou destruído. Criaturas revelam seus dados de vida e totais de Esforço."
        },
        {
          name: "Consulta Irresistível (Irresistible Query)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia. Faça ao Mestre qualquer pergunta sobre eventos atuais ou passados e receba resposta em uma palavra ou frase curta. Este poder não pode ser usado mais de uma vez sobre um dado tópico até que a situação mude significativamente."
        },
        {
          name: "O Acadêmico Onisciente (The Omniscient Scholar)",
          type: "Constante",
          content: "Você dominou todas as esferas do conhecimento acadêmico mortal. Você sempre sabe a resposta para qualquer pergunta envolvendo tal aprendizado, se algum sábio mortal a souber, e é bem-sucedido automaticamente em testes de atributo para realizar tarefas intelectuais se estiverem dentro das capacidades mortais."
        }
      ]
    }
  },
  {
    id: "luck",
    name: "Sorte (Luck)",
    shortDesc: "A Palavra da sorte e do destino, permitindo manipular resultados casuais e alterar os rumos da fortuna a favor ou contra.",
    description: "Luck é uma Palavra sutil em sua essência, sem muitos dos efeitos clamorosamente óbvios dos outros domínios. Em vez disso, a sorte simplesmente abençoa aqueles agraciados por seu poder, garantindo que as coisas de algum modo terminem bem para eles e muito mal para aqueles que os desagradam. Milagres de Luck podem ser usados para reescrever o destino, assegurando que eventos aparentemente aleatórios resultem bem ou mal para aqueles visados pelas atenções do herói. Heróis dotados com a Palavra Luck podem rolar 1d20 uma vez por dia. A qualquer momento durante esse dia, eles podem substituir a rolagem de 1d20 própria ou de outra pessoa pela que está em reserva. Eles só podem substituir uma rolagem uma vez por dia.",
    gifts: {
      lesser: [
        {
          name: "Sorte Deturpada (Blighted Luck)",
          type: "Ação",
          content: "Um único alvo que não seja uma Multidão é amaldiçoado com o infortúnio. Ele sempre perderá jogos de azar, coisas ruins de caráter variado e não fatal sempre acontecerão com ele, e ele sempre rolará dois dados em jogadas de acerto e testes de resistência, ficando com o pior resultado. Inimigos poderosos podem fazer um teste de resistência de Espírito para resistir e exigem que o Esforço seja comprometido para a cena. Este efeito dura até que você escolha removê-lo, seja disperso ou um evento específico aconteça."
        },
        {
          name: "Nove Vidas (Nine Lives)",
          type: "Constante",
          content: "Jogue novamente de forma automática testes de resistência ou jogadas de acerto inimigas que resultariam na morte ou ferimento mortal do herói. O segundo resultado é o que vale, mesmo que seja pior."
        },
        {
          name: "Guardar a Sorte (Salting Away the Luck)",
          type: "Instante",
          content: "Comprometa Esforço depois que o herói rolar um dado enquanto faz algo importante. O dado é rolar novamente, mas o resultado inicial é salvo. Quando o Esforço for recuperado, o resultado pode ser dado a qualquer outra pessoa na presença do herói, desde que um dado com o mesmo número de lados esteja sendo rolado. Inimigos poderosos relutantes podem fazer um teste de resistência de Espírito para resistir à doação. Esta dádiva pode preservar apenas uma rolagem por vez."
        },
        {
          name: "Fortuna Fiada (Spun Fortune)",
          type: "Instante",
          content: "Comprometa Esforço para a cena. Outra pessoa rola novamente uma jogada que você sabe que ela acabou de fazer."
        },
        {
          name: "Beneficência Imaculada (Unmarred Beneficence)",
          type: "Constante",
          content: "O herói tem uma CA natural de 3, evitando perigos por sorte. Se um infortúnio recair aleatoriamente sobre um membro de seu grupo, ele nunca será a vítima dele. Esta CA base não é melhorada por armadura ou escudos."
        },
        {
          name: "O Mundo Contra Você (The World Against You)",
          type: "No Turno",
          content: "Comprometa Esforço. O herói torna-se capaz de usar a sorte como uma arma com alcance de 30 metros (100 pés), infligindo calamidades súbitas e extremamente improváveis a um inimigo com jogadas de ataque normais. Quando usada para atacar, o dano é de 1d10 e é tratado como uma arma mágica. A fonte dessa incrível má sorte não é perceptível para espectadores mortais ou seres não sobrenaturais."
        }
      ],
      greater: [
        {
          name: "Por Acaso (By Chance)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. O jogador dita um evento em sua presença que não seja totalmente improvável, e ele acontece. O dano aos inimigos é limitado a um dado de 1d12 para uma calamidade focada em um único alvo ou a um dado de dano de 1d6 cada para problemas que afetam um grupo. Este poder afeta apenas objetos e eventos físicos, não mentes ou emoções."
        },
        {
          name: "Vitória Impossível (Impossible Victory)",
          type: "Constante",
          content: "Exatamente uma vez, o herói vence automaticamente um conflito ou obtém seu objetivo em uma situação por pura sorte. Pode não ser uma vitória total, mas conquista seu objetivo principal. Eles então perdem a dádiva, têm seu custo reembolsado e nunca mais podem comprá-la. Milagres de sorte não podem replicar esta dádiva."
        },
        {
          name: "Fortuna Infalível (Unfailing Fortune)",
          type: "Constante",
          content: "O herói pode sempre rolar novamente um 1 natural em qualquer dado que rolar. Ele pode ditar o resultado de qualquer elemento de acaso em apostas ou jogos."
        }
      ]
    }
  },
  {
    id: "madness",
    name: "Loucura (Madness)",
    shortDesc: "A Palavra da loucura, governando a desrazão, visões delirantes, infligindo danos mentais e garantindo invulnerabilidade a controle e leitura mental.",
    description: "A Palavra de Loucura governa a desrazão apaixonada, a lógica quebrada, visões delirantes e certezas irracionais. Embora a Palavra não tenha poder para criar efeitos físicos tangíveis, ela pode queimar seu próprio caminho através das mentes dos outros, deixando cicatrizes que incapacitam as vítimas pelo resto de suas vidas... ou até que o Godbound conceda misericórdia. Godbound de Madness têm uma defesa invulnerável contra poderes que afetem a mente ou as emoções, bem como poderes de leitura. Qualquer tentativa de usar tais poderes contra o Godbound resulta no agressor sofrendo imediatamente 1d6 de dano mental por nível do personagem, se o Godbound assim desejar. Como uma Ação Principal, o Godbound pode estudar uma criatura e identificar quaisquer doenças mentais significativas, obtendo uma descrição de uma frase para cada uma. Algumas dádivas afetam apenas aqueles afligidos por doenças mentais, o que inclui qualquer pessoa sob a influência de uma dádiva de Madness. Cabe ao Mestre (GM) decidir se um NPC em particular é realmente doente mental ou está meramente operando sob princípios racionais bizarros ou repugnantes. Seres de raças alienígenas podem agir de maneiras aparentemente enlouquecidas, mas seu comportamento natural não conta como loucura.",
    gifts: {
      lesser: [
        {
          name: "Aliviar a Dor (Ease the Ache)",
          type: "Instante",
          content: "Comprometa Esforço para a cena para anular qualquer ataque que inflija dano de pontos de vida emocional ou mental do qual você tenha consciência. Como uma Ação, você pode curar as doenças mentais de todos os alvos visíveis, incluindo o uso hostil da dádiva Loucura (Madness) e aquelas de natureza totalmente biológica ou baseada em toxinas, sem a necessidade de Comprometer Esforço para fazê-lo. Esta dádiva não tem efeito sobre criaturas de um tipo que naturalmente e intrinsecamente pensam de maneiras aparentemente insanas."
        },
        {
          name: "Mundo Alucinatório (Hallucinatory World)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e escolha uma alucinação específica ou falsa impressão sensorial que todos os alvos visíveis ao seu redor percebem de repente. Esta alucinação não pode causar dano real ao alvo, e eles evitarão subconscientemente tomar ações baseadas nela que causem dano físico a si mesmos. Alucinações sutis e plausíveis não serão resistidas por um alvo, a menos que tenham motivos para suspeitar de seus sentidos. Inimigos poderosos que estão ameaçados, oprimidos ou duvidosos de uma visão podem fazer um teste de resistência de Espírito no início de cada rodada para se tornarem imunes a esta dádiva pelo resto da cena, e qualquer vítima é liberta assim que sofre dano de pontos de vida."
        },
        {
          name: "Ideia Fixa (Idée Fixe)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e mire em uma única criatura visível ou em até uma Pequena Multidão de inimigos menores. O alvo imediatamente passa a acreditar em uma afirmação de sua escolha e considera este fato a coisa mais importante em sua vida, agindo de acordo com os limites de seu caráter. Inimigos poderosos recebem um teste de resistência de Espírito para se tornarem imunes a esta dádiva pelo resto da cena, enquanto os alvos afetados permanecem cativados por esta ideia por uma semana antes de se tornarem suscetíveis à persuasão mundana de seu erro."
        },
        {
          name: "Beijo da Loucura (Kiss of Madness)",
          type: "No Turno",
          content: "Comprometa Esforço. Você empunha uma aura de loucura e confusão como se fosse uma arma mágica, infligindo 1d10 de dano mental em qualquer alvo visível. Criaturas levadas a zero pontos de vida ou se matarão ou ficarão permanentemente insanas de qualquer maneira que você escolher, recuperando 1 ponto de vida no processo."
        },
        {
          name: "Marionetes da Insanidade (Puppets of Insanity)",
          type: "No Turno",
          content: "Comprometa Esforço e mire em uma criatura visível mentalmente doente. Enquanto o Esforço permanecer comprometido, você pode usar sua Ação Principal para forçar a criatura a executar uma Ação Principal de sua escolha, embora não uma que seja suicida. A criatura executará comandos da melhor maneira possível, como se fosse sua própria ideia. Inimigos poderosos podem fazer um teste de resistência de Espírito para resistir ao comando se ele for repugnante aos seus próprios desejos."
        },
        {
          name: "Verdade Não Reconhecida (Unacknowledged Truth)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e indique um fato ou ideia específica. Todas as criaturas presentes que você mirar agora são incapazes de pensar sobre ou admitir esse fato, a menos que sua saúde física exija isso. Mesmo assim, elas o admitirão apenas no grau necessário para preservar suas próprias vidas. Inimigos menores são afetados indefinidamente por esta dádiva, enquanto inimigos poderosos recebem um teste de resistência de Espírito no início de cada rodada para se livrar desta dádiva e se tornarem imunes a ela por uma cena. Uma criatura pode ser afetada por apenas uma Verdade Não Reconhecida de cada vez."
        }
      ],
      greater: [
        {
          name: "Delírio Infeccioso (Infectious Delirium)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia e mire em uma criatura visível, indicando uma obsessão particular, crença falsa ou outra insanidade que deva afligi-la. Qualquer criatura que veja o alvo afetado deve fazer um teste de resistência de Espírito ou ser igualmente infectada com a loucura, tornando-se cada vez um novo vetor para a insanidade. Um teste bem-sucedido torna o alvo imune a esta infecção. Você pode indicar que tipo de pessoas devem ser afetadas pela insanidade, seja nomes individuais, classes ou áreas geográficas. No máximo duzentas pessoas podem ser infectadas no primeiro nível, dobrando a cada nível seguinte. A insanidade não pode induzir comportamento suicida, mas pode forçar as vítimas a agir até os limites de seu caráter natural."
        },
        {
          name: "Lógica Insana (Insane Logic)",
          type: "Constante",
          content: "Inimigos menores nunca considerarão suas ações irracionais ou inadequadas enquanto você estiver na presença deles. Eles lutarão para se defender e defender seus entes queridos, e resistirão a tentativas de roubá-los abertamente ou causar-lhes mal, mas em nenhum momento perceberão que suas ações são ilícitas ou irracionais. No mínimo, eles considerarão que você pertence aonde quer que esteja e que tem o direito de fazer o que quer que esteja fazendo. Eles podem perceber o caráter não natural desses pensamentos depois que você não estiver mais presente."
        },
        {
          name: "Olhos da Desrazão (Eyes of Unreason)",
          type: "No Turno",
          content: "Você pode compartilhar os sentidos de qualquer pessoa mentalmente doente, desde que já a tenha visto antes. Você pode se comunicar com eles telepaticamente como desejar, embora inimigos poderosos possam salvar versus Espírito para bloquear sua voz por 24 horas. Como uma Ação Principal, você pode Comprometer Esforço para a cena e aparecer ao lado de qualquer alvo desse tipo, desde que ele esteja a menos de uma milha de você."
        }
      ]
    }
  },
  {
    id: "might",
    name: "Força Primordial (Might)",
    shortDesc: "A Palavra da força primordial, concedendo poder físico bruto incomparável, proeza atlética e capacidade de quebrar ou erguer o impossível.",
    description: "O poder primal da força está encarnado na Palavra de Might. Muitos Godbound marciais são fortes, mas um Godbound de Might supera todos eles em força física bruta e pode realizar milagres de levantar, arremessar ou quebrar coisas com as mãos nuas. Eles também têm o poder de abençoar seus aliados com graças semelhantes de força, embora geralmente para ações ou desafios específicos, em vez de como um bônus permanente em suas habilidades. Um Godbound da Palavra de Might é tremendamente poderoso, obtendo uma pontuação de Força de 19 e um modificador de atributo de +4 para Força. Essa proeza permite que eles levantem ou quebrem qualquer coisa que seja humanamente possível de se manusear, embora feitos de força verdadeiramente sobrenaturais exijam o uso de uma dádiva ou milagre.",
    gifts: {
      lesser: [
        {
          name: "Descida da Montanha (Descent of the Mountain)",
          type: "Ação",
          content: "O Godbound pode arremessar qualquer objeto que consiga levantar para qualquer ponto à vista. Se usado como um ataque, ele deve fazer uma jogada de acerto normal modificada por Força. Objetos muito grandes ou pesados são armas desajeitadas e sofrem uma penalidade de -4 para acertar, mas infligem 1d12 de dano àqueles na área em que aterrissam, modificado por Força."
        },
        {
          name: "Golpe do Meteoro Cadente (Falling Meteor Strike)",
          type: "Ação",
          content: "Com um momento de concentração, o Godbound pode esmagar qualquer objeto único não mágico com menos de três metros (dez pés) de diâmetro. Se o objeto for maior do que isso, um buraco de três metros de altura, largura e profundidade é perfurado nele. Se o objeto for magicamente durável ou resiliente, o Godbound deve Comprometer Esforço para a cena para esmagá-lo. O foco necessário para este golpe o torna inútil contra inimigos móveis, mas se o Godbound atingir um alvo imóvel ou indefeso com esta dádiva, ele sofre quatro pontos de dano para cada nível do Godbound."
        },
        {
          name: "Punhos de Ferro Negro (Fists of Black Iron)",
          type: "Constante",
          content: "Os ataques desarmados e com armas do Godbound são impulsionados por sua força tremenda. Armas de uma mão causam 1d10 de dano em suas mãos, e armas de duas mãos ou ataques desarmados feitos com ambas as mãos livres infligem 1d12. Esses ataques contam como armas mágicas."
        },
        {
          name: "Ombros Tão Largos Quanto o Mundo (Shoulders Wide as the World)",
          type: "No Turno",
          content: "Comprometa Esforço. O Godbound pode pegar qualquer objeto não maior do que um navio de guerra e carregá-lo à sua taxa de movimento normal. A dádiva permite que o objeto permaneça inteiro e que o Godbound evite afundar na terra, mas o objeto é desajeitado demais para ser usado para fins violentos."
        },
        {
          name: "Mais Forte Que Você (Stronger Than You)",
          type: "Constante",
          content: "Sempre que o Godbound estiver em um teste de Força resistido ou disputa contra outra criatura ou o estiver opondo em uma manobra de agarrar ou outro exercício de força, o Godbound sempre vence. Se dois Godbound com esta dádiva lutarem entre si, o teste é resolvido normalmente. Como uma ação, o Godbound pode conferir os benefícios desta dádiva a um aliado para uma disputa ou ação."
        },
        {
          name: "Surto de Força (Surge of Strength)",
          type: "Instante",
          content: "Comprometa Esforço para a cena para maximizar qualquer jogada de dano individual modificada por Força. Tal é a sua aura de poder tremendo que você pode aplicar este benefício a um aliado à vista, se desejar."
        }
      ],
      greater: [
        {
          name: "Saltar a Lua (Leap the Moon)",
          type: "No Turno",
          content: "Comprometa Esforço. O Godbound pode saltar distâncias tremendas, ignorando todo o dano de queda e sendo capaz de saltar para qualquer ponto à vista em vez de sua ação de movimento para a rodada. Eles podem lutar contra inimigos voadores usando sua ação de movimento para saltar antes de atingir seu alvo. No entanto, eles não podem saltar mais do que dez milhas no total de distância por hora."
        },
        {
          name: "Afrouxando os Dentes de Deus (Loosening God's Teeth)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia e faça um único ataque armado ou desarmado. Se o golpe acertar, a rolagem de dano é lida diretamente (sem rolar dados, causando o valor máximo fixo). Esta rolagem de dano não pode ser maximizada por outras dádivas ou habilidades. Mesmo em caso de erro, a concussão do golpe causa ferimentos como um acerto de dano normal."
        },
        {
          name: "Músculos dos Deuses (Thews of the Gods)",
          type: "Constante",
          content: "O Godbound é sempre capaz de pegar qualquer coisa menor do que um edifício grande e perfurar, esmagar ou romper qualquer substância não mágica como parte gratuita de seu movimento ou outras ações. Esse poder é rapidamente empregado, mas não possui controle refinado o suficiente para ajudar em jogadas de dano ou outros ataques."
        }
      ]
    }
  },
  {
    id: "murder",
    name: "Assassinato (Murder)",
    shortDesc: "A Palavra do assassinato, presidindo a morte ilícita, emboscadas, traições e o poder de matar instantaneamente alvos desprevenidos.",
    description: "Há um milhão de maneiras diferentes para os humanos se matarem, e quase tantos contextos nos quais colocar essas mortes. Godbound of Murder não são deuses da guerra para se destacarem em batalha aberta, mas sim presidem sobre o ato do assassinato ilícito em si. As ferramentas dessas divindades são a faca no escuro, o veneno na taça e o beijo do amigo de confiança. Seus poderes são mais fortes em questões de emboscada repentina ou traição surpresa, circunstâncias em que até mesmo a divindade de batalha mais poderosa pode ser derrubada por um ato imprevisto de traição. Assim também esta Palavra governa os ódios fumegantes e as fúrias quentes repentinas que levam os humanos a matar em momentos de raiva ou vingança amarga. Como uma Ação, tais Godbound podem assassinar inevitável e instantaneamente qualquer criatura isolada à vista que tenha menos dados de vida máximos do que metade de seu nível, arredondado para cima, desde que a criatura não esteja esperando perigo. Criaturas mortas por uma divindade ligada a Murder não podem ser revividas magicamente sem o consentimento do Godbound.",
    gifts: {
      lesser: [
        {
          name: "Uma Faca no Escuro (A Knife in the Dark)",
          type: "Constante",
          content: "Tudo é uma arma em suas mãos. Qualquer coisa que você use para ferir outro conta como uma arma mágica de 1d10 com um alcance máximo de 200 pés. Se você atacar um alvo surpreso, o ataque acerta automaticamente causando dano máximo. Qualquer criatura morta por esta dádiva morre em silêncio perfeito, se assim o desejar."
        },
        {
          name: "Um Rosto Confiável (A Trustworthy Face)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e escolha um papel social ou profissional específico ou a identidade de um inimigo menor. Inimigos menores assumem automaticamente que você pertence a esse papel ou é esse inimigo menor, apesar de todas as evidências em contrário. Inimigos poderosos recebem um teste de resistência versus Espírito para ver através da impostura se você chamar a atenção deles. A impostura dura até que você a encerre."
        },
        {
          name: "Raiva Ulcerada (Festering Rage)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e mire em uma criatura visível, imprimindo nela um impulso súbito e avassalador de matar um alvo escolhido a quem ela não ama ou por quem não tem profunda lealdade. Se a vítima não tiver motivo para desejar o alvo morto, essa luxúria por matar dura apenas por uma cena, enquanto alvos com um ódio genuíno da vítima serão afetados indefinidamente. Os alvos aproveitarão a melhor oportunidade disponível para assassinar a vítima enquanto o impulso durar, independentemente de sua própria segurança pessoal ou consequências. Inimigos poderosos recebem um teste de Espírito para resistir a essa compulsão."
        },
        {
          name: "Mão Cheia de Veneno (Hand Full of Venom)",
          type: "Instante",
          content: "Comprometa Esforço para a cena. Na próxima vez nesta cena em que você tocar, atingir ou preparar comida para um alvo, você poderá envenená-lo com uma toxina de sua escolha. Os detalhes dos efeitos podem ser o que você quiser e ser tão lentos ou rápidos quanto você desejar, mas o veneno deve sempre resultar eventualmente na morte do alvo. Inimigos menores não podem resistir a este veneno, enquanto inimigos poderosos podem fazer um teste de Vigor (Hardiness) para evitar o efeito."
        },
        {
          name: "Olhos de Assassino (Murderer's Eyes)",
          type: "Ação",
          content: "Você estuda uma vítima de assassinato, ganhando imediatamente uma compreensão completa e contextual de como, por que e por quem a criatura foi assassinada. Opcionalmente, estude uma criatura visível e saiba se ela esteve ou não pessoalmente envolvida em violência assassina contra um alvo específico que você tem em mente, ganhando uma breve visão de como o evento se desenrolou."
        },
        {
          name: "Nunca Desprevenido (Never Unprepared)",
          type: "Constante",
          content: "Você tem uma defesa invulnerável contra venenos. Sempre que alguém tenta emboscar ou surpreender você, você não apenas não é surpreendido, mas ganha um round de bônus imediato de ação antes que a iniciativa seja rolar."
        }
      ],
      greater: [
        {
          name: "Beijo de Judas (Judas Kiss)",
          type: "Constante",
          content: "Quando você faz um ataque contra alguém que o ama genuinamente ou confia profundamente em você, e que sabe que é você fazendo o ataque em vez de uma impostura que você assume, o ataque é invariavelmente e inescapavelmente fatal, a menos que seja defendido com uma defesa invulnerável que possa proteger contra dano emocional. Se você usar um poder hostil contra tal vítima, o poder não permite nenhum teste de resistência ou Comprometimento de Esforço para resistir, embora uma defesa invulnerável contra o poder ainda possa afastar a perdição. Esta dádiva não pode ser usada como um milagre, e um desses ataques geralmente é suficiente para destruir a confiança, se talvez não o amor. Amor ou confiança criados principalmente por efeitos mágicos não podem tornar uma criatura vulnerável a esta dádiva."
        },
        {
          name: "Nunca Será Doído / Sentido (Never Will Be Missed)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia e mire em uma criatura visível. Matar essa criatura não é mais considerado criminoso ou intrinsecamente inaceitável pela sociedade, independentemente das circunstâncias de sua morte. NPCs com laços emocionais profundos ou um senso leal de dever para com a criatura ainda defenderão sua vida, mas outros não se envolverão, a menos que seja por pagamento ou outros incentivos. Além disso, qualquer criatura com o desejo de matar o alvo é imediatamente e intuitivamente informada de seu estado desprotegido. Inimigos poderosos podem fazer um teste de Espírito para perceber a incongruência dessa temporada de caça aberta repentina, mas inimigos menores acharão perfeitamente lógico e normal. Este estado dura até que você liberte a vítima, embora apenas um inimigo poderoso possa ser afetado por ele de cada vez."
        },
        {
          name: "Álibi Perfeito (Perfect Alibi)",
          type: "Instante",
          content: "Comprometa Esforço pelo dia quando você matar alguém pessoalmente. O ato tem uma defesa invulnerável contra qualquer forma de magia ou dádiva divina que revele o culpado, e você pode de fato controlar o que esses poderes revelam àqueles que os usam para investigar o assunto. Inimigos menores serão completamente incapazes de identificar você como o culpado, mesmo que tenham visto você fazer isso ou o ouçam confessar diretamente. A única exceção a esta defesa invulnerável são as dádivas da Palavra de Assassinato em si, que ainda podem revelar a verdade."
        }
      ]
    }
  },
  {
    id: "music",
    name: "Música (Music)",
    shortDesc: "A Palavra da música, dominando a harmonia, o som e as paixões que ele evoca, com imunidade a silenciamentos e manipulação de carisma.",
    description: "A música é um dos poderes de beleza mais antigos do mundo, formado de maneiras inúmeras por culturas e civilizações incontáveis. Aquele que está ligado à Palavra de Music tem domínio sobre a harmonia, o som e as paixões que o som provoca, embora os efeitos de Music não criem as emoções duradouras da Palavra de Passion. Aqueles agraciados por Music podem definir seu Carisma para 16, ou para 18 se já for 16 ou maior. Eles têm uma imunidade invulnerável contra os sons que geram serem abafados, mesmo por mordaças ou pela excisão física de suas cordas vocais, e podem invocar qualquer instrumento musical que já tenham usado como uma ação Em Turno. Eles podem produzir música à vontade sem interferir em nenhuma de suas outras ações.",
    gifts: {
      lesser: [
        {
          name: "Um Coro Como Trovão (A Chorus Like Thunder)",
          type: "Constante",
          content: "Sua voz e música penetram qualquer barreira não mágica e podem ser feitas audíveis até dez milhas por nível de personagem. Você pode modular esse som para que apenas certos indivíduos ou grupos possam ouvi-lo, e pode ouvir quaisquer respostas que esses ouvintes façam, contanto que sejam cantadas. Esta dádiva não pode aumentar ataques ou poderes ofensivos."
        },
        {
          name: "Olho do Silêncio (Eye of Silence)",
          type: "Constante",
          content: "Você tem imunidade invulnerável a ataques sonoros e efeitos hostis baseados em som. Comprometa Esforço para a cena como uma ação para roubar a audibilidade de até uma Multidão Vasta de inimigos menores ou alvos dispostos, ou um único inimigo poderoso; nada que eles digam ou façam causará qualquer ruído. Inimigos poderosos podem optar por fazer um teste de resistência de Vigor (Hardiness) para encerrar este efeito no final de cada um de seus rounds; inimigos menores ou alvos dispostos permanecem em silêncio até que o poder seja dissipado ou você os liberte."
        },
        {
          name: "Harmonia Invencível (Invincible Harmony)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e escolha uma criatura ou Multidão visível. Você entra em perfeita harmonia com eles e suas ações. Você ganha uma defesa invulnerável contra todos os ataques e poderes deles, e eles ganham o mesmo contra os seus. Isso dura pelo resto da cena ou até que você escolha quebrar o ritmo; a vítima pode dissipar defensivamente o efeito se tiver uma Palavra apropriada, mas não pode salvar para resistir. Esta harmonia pode ser mantida por até um round por nível do Godbound. No round em que você quebra este efeito, você acerta automaticamente o alvo com qualquer jogada de ataque que fizer e pode rolar dados de dano ou efeito duas vezes e pegar a melhor rolagem. Você não pode usar esta dádiva duas vezes no mesmo alvo na mesma cena."
        },
        {
          name: "Crescendo Apaixonado (Passionate Crescendo)",
          type: "Ação",
          content: "Comprometa Esforço. Com sua música, infunda os ouvintes escolhidos com uma emoção poderosa focada em um alvo ou tópico de sua escolha. Até uma Multidão Vasta de inimigos menores ao alcance da voz é afetada enquanto o Esforço permanecer comprometido. Inimigos poderosos podem rolar um teste de Espírito para resistir; em caso de falha, eles se recuperam em no máximo um dia. Pessoas assim influenciadas emocionalmente agirão até o limite de seu caráter natural; combatentes devem fazer um teste de Moral se forem infundidos com medo ou desespero."
        },
        {
          name: "Certitude Poética (Poetic Certitude)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e cante uma frase ou mensagem. Um alvo de sua escolha que ouve você cantar fica completamente convencido da verdade de sua letra, desde que ela não seja completamente intolerável emocionalmente. Esta certeza durará pelo resto da cena, ou mais se evidências racionais não forem apresentadas contra ela. Inimigos poderosos podem fazer um teste de Espírito para resistir ao efeito."
        },
        {
          name: "Berro de Metal Retorcido (Shriek of Twisted Metal)",
          type: "No Turno",
          content: "Comprometa Esforço. Sua voz ou música se torna uma arma causando 1d10 de dano emocional base com um alcance de até 200 pés. Contra objetos inanimados rígidos como vidro, metal, pedra ou cerâmica, sua voz causa dano direto e pode fazer um buraco do tamanho de um humano com um pé de profundidade por nível para cada uso por round. Isso não afeta objetos vestidos ou usados por uma criatura."
        }
      ],
      greater: [
        {
          name: "Moldador do Som (Shaper of the Sound)",
          type: "Constante",
          content: "Você tem controle total sobre todos os sons na área dentro de sua linha de visão. Como uma ação Instantânea, você pode criar ou alterar qualquer som dentro dessa área, incluindo anular ou redirecionar ataques sonoros ou magia baseada em som, ou falsificar vozes ou palavras. Com a concentração de uma ação, você pode ouvir e entender claramente toda a fala dentro da área afetada, independentemente de seu idioma, e se comunicar de forma indetectável com pessoas dentro dela. Você e seus companheiros sempre obtêm sucesso em testes de furtividade ou escuta baseados em som."
        },
        {
          name: "Gritando para Baixo com o Céu (Shouting Down the Sky)",
          type: "Ação (Golpe / Smite)",
          content: "Comprometa Esforço pelo dia. Sua voz ou música torna-se uma onda imparável de destruição sônica. Todas as construções de pedra, vidro, madeira ou metal maiores do que uma armadura são despedaçadas em uma frente de 20 pés de largura e 50 pés de comprimento por nível. Inimigos dentro da zona sofrem um ponto de dano por nível de personagem, ou 1d6 direto por nível para Multidões. Você pode estreitar a área do efeito e poupar objetos individuais se desejar."
        },
        {
          name: "Verso de Glória Imorredoura (Verse of Deathless Glory)",
          type: "Instante",
          content: "Sua música inspira um aliado ao alcance da voz que de outra forma seria derrotado, permitindo-lhe ignorar os piores golpes. Seu aliado ganha uma defesa invulnerável contra qualquer forma de dano até o início de seu próximo turno. Você pode usar este poder para seu próprio benefício e, como um poder Instantâneo, ele pode ser acionado após o dano ou os efeitos serem rolados, mas só pode ser usado uma vez por cena."
        }
      ]
    }
  },
  {
    id: "network",
    name: "Rede (Network)",
    shortDesc: "A Palavra da rede e da tecnologia digital, garantindo controle sobre dispositivos computacionais, conectividade e habilidades de hacking infalíveis.",
    description: "A Palavra de the Network destina-se ao uso em cenários de campanha onde a internet ou seu equivalente é uma característica comum da sociedade. Em Arcem, a República Brilhante pode fornecer um contexto para o uso desta Palavra, mas a maioria dos mundos de fantasia dá pouco o que fazer à Network. Um Godbound of the Network tem controle completo e irrestrito sobre dispositivos de computação de todos os tipos, incluindo qualquer dispositivo executado com um microprocessador. Eles podem controlar esses dispositivos e quaisquer comunicações interconectadas que eles transmitam, juntamente com a criação de tais dispositivos do nada com as dádivas ou milagres apropriados. No entanto, assim como a Palavra de Engineering, o Godbound não pode criar tecnologia de computação antes daquela que geralmente existe no cenário da campanha. Godbound of the Network elevam sua Inteligência para 16, ou para 18 se já for 16 ou superior. Eles estão sempre efetivamente conectados a qualquer dispositivo de computação dentro de um quilômetro, conhecendo sua função e localização, juntamente com quaisquer outros dispositivos que estejam em uma rede conectada aos nós afetados. Eles podem interagir mentalmente com tal hardware como se fossem um dispositivo de computação conectado a esses nós e podem enviar dados para ou dessas máquinas. Eles sempre têm sucesso em quaisquer testes de atributos relacionados a hacking contra segurança não divina.",
    gifts: {
      lesser: [
        {
          name: "Gestalt de Dados (Data Gestalt)",
          type: "Ação",
          content: "O Godbound pode fazer uma pergunta; se a resposta estiver armazenada ou puder ser deduzida dos dados contidos em qualquer dispositivo de computação dentro de um raio de uma milha, ela é imediatamente fornecida ao Godbound. Se os dados estiverem em computadores conectados a mais de uma milha de distância, o Godbound deve Comprometer Esforço pelo dia para obter uma resposta."
        },
        {
          name: "Editar Guerreiro (Edit Warrior)",
          type: "Ação",
          content: "Comprometa Esforço para a cena para reescrever qualquer arquivo de dados contido em uma milha, alterando-o e quaisquer arquivos associados para se conformarem com os dados desejados. Se o arquivo desejado estiver em uma máquina conectada a mais de uma milha de distância, você deve em vez disso Comprometer Esforço pelo dia para fazer as edições."
        },
        {
          name: "Falha de Cabeça (Head Crash)",
          type: "No Turno",
          content: "Comprometa Esforço para a cena e mire em uma máquina ou dispositivo visível que dependa de hardware de computação para operação, um não maior do que um edifício. Todo o hardware de computação nele é imediatamente e totalmente queimado, exceto funções poupadas pelo Godbound. Objetos segurados ou veículos pilotados por um inimigo poderoso são imunes a esta dádiva."
        },
        {
          name: "Internet das Minhas Coisas (Internet of My Things)",
          type: "Ação",
          content: "Comprometa Esforço. O Godbound pode escolher um dispositivo de computação dentro de uma milha e operá-lo como se tivesse controle total sobre toda a sua funcionalidade, dando-lhe uma ordem por rodada como uma ação de No Turno. Eles podem observar os arredores deste dispositivo como se estivessem em pé ao lado dele, independentemente de ele realmente ter sensores físicos. Eles podem mudar o dispositivo em que se focam uma vez por rodada."
        },
        {
          name: "Transmissão Pessoal (Personal Transmission)",
          type: "Ação",
          content: "Comprometa Esforço para a cena para desaparecer e emergir instantaneamente de qualquer dispositivo de computação dentro de uma milha. Esta dádiva pode não mover o usuário mais do que dez milhas no total ao longo do curso de uma hora."
        },
        {
          name: "Reescrever Programação (Rewrite Programming)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia para alterar a programação de um dispositivo específico de qualquer maneira que você desejar. A programação deve ser para algo que o dispositivo seja fisicamente capaz de fazer, mas pode mostrar julgamento e discernimento de nível humano ao realizar o comportamento desejado pelo Godbound. Uma porta eletrônica programada para permanecer trancada para soldados poderia, assim, usar seus sensores de câmera para avaliar se criaturas específicas parecem soldados e usar a razão humana para discernir isso. O dispositivo não pode se tornar geralmente inteligente de forma artificial, mas realizará sua função específica como se possuísse intelecto humano."
        }
      ],
      greater: [
        {
          name: "Buraco Negro (Black Hole)",
          type: "Ação",
          content: "O Godbound indica um tópico específico para colocar na lista negra, seja específico ou geral. Nenhuma rede conectada a qualquer coisa dentro de uma milha do Godbound será capaz de transportar dados relacionados ao tópico, sejam arquivos estáticos, chamadas telefônicas, bate-papo por texto ou imagens. Esta proibição continua mesmo se o Godbound deixar de estar conectado à rede, até que o Godbound a levante, ela seja dissipada por poderes divinos ou a rede seja fisicamente destruída e reconstruída com componentes novos."
        },
        {
          name: "Meme Viral (Viral Meme)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia. O Godbound transmite uma ideia para uma rede conectada. Todo usuário inteligente de dispositivos atualmente conectados a essa mesma rede recebe essa ideia e estará predisposto a considerá-la verdadeira até e a menos que seja contradita por experiência pessoal ou evidência convincente em contrário. Inimigos poderosos podem salvar versus Espírito para resistir ao efeito. O Godbound não pode controlar como as pessoas reagem à sua nova crença; eles só podem transmitir a ideia."
        },
        {
          name: "Tecelão da Teia (Web Weaver)",
          type: "Constante",
          content: "O Godbound faz instintivamente com que uma rede de computação se manifeste ao seu redor, caso uma já não exista. Tecnologia apropriada ao cenário, como satélites, linhas terrestres ou transmissores de wi-fi, simplesmente passam a existir ao seu redor, integradas perfeitamente ao hardware existente e passando despercebidas por inimigos menores na área, que acreditarão que sempre estiveram lá. A rede se expande a uma taxa de uma milha de raio por dia ao redor do Godbound, não requer manutenção ou energia externa e se conecta automaticamente a qualquer rede existente que não esteja especificamente sendo mantida isolada de conectividade externa. Para necessidades mais locais, o Godbound pode evocar até meia tonelada de equipamentos de computação de ponta e materiais de rede por dia com dez minutos de foco. Esta dádiva não pode ser usada como um milagre."
        }
      ]
    }
  },
  {
    id: "night",
    name: "Noite (Night)",
    shortDesc: "A Palavra da noite, sonhos, sono, escuridão e intangibilidade física, permitindo mover-se nas sombras sem ser detectado.",
    description: "Sonhos, sono, escuridão e calma são encontrados sob a bandeira de night. Night passa por muitos lugares ao mesmo tempo e entra até mesmo nos aposentos mais bem guardados. A Palavra de Night pode realizar milagres envolvendo sono, cegueira, passagem rápida para a escuridão e intangibilidade física. Essas dádivas frequentemente exigem uma área com pouca luz para o melhor efeito. Heróis com a Palavra Night podem ver perfeitamente na escuridão. Eles não precisam dormir, e suas ações nunca causarão o despertar involuntário de quaisquer adormecidos ao seu redor.",
    gifts: {
      lesser: [
        {
          name: "Maldito Seja Seus Olhos (Damn Their Eyes)",
          type: "Ação",
          content: "Escolha um alvo à vista. Inimigos menores ficam cegos, enquanto inimigos poderosos podem testar a resistência de Vigor (Hardiness) para resistir e exigem que o herói Comprometa Esforço para a cena para afetá-los. Opcionalmente, você pode cegar o alvo apenas para pessoas ou coisas específicas. Aqueles cegados seletivamente não perceberão sua cegueira até que ela seja apontada ou encontrada fisicamente. A cegueira dura pelo tempo que você desejar em inimigos menores, ou termina após a cena para inimigos poderosos. Inimigos cegados normalmente sofrem uma penalidade de -4 em todas as jogadas de acerto corpo a corpo e não têm chance significativa de acertar com ataques à distância, salvo se possuírem sentidos sobre-humanos de outras formas."
        },
        {
          name: "As Escadas Sombrias (The Darkling Stairs)",
          type: "Constante",
          content: "Você pode voar ou mover-se ao longo de superfícies verticais à sua taxa de movimento normal, desde que esteja cercado por uma escuridão profunda o suficiente para não se conseguir distinguir um fio branco de um preto. O poder persiste por uma rodada após luz forte."
        },
        {
          name: "Facas da Noite (Knives of Night)",
          type: "No Turno",
          content: "Comprometa Esforço. Você agora é capaz de endurecer a escuridão em uma arma com alcance de 60 metros (200 pés). Quando usada para atacar, ela causa 1d10 de dano e é tratada como uma arma mágica. Inimigos reduzidos a zero pontos de vida podem ser mortos, adormecidos ou permanentemente cegados, a seu critério."
        },
        {
          name: "Uma Estrada de Sombras (A Road of Shadows)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Entre em uma sombra e emerja daquela mais próxima do destino desejado, desde que esteja dentro de uma milha. A dádiva pode movê-lo por no máximo dez milhas no total em uma hora."
        },
        {
          name: "O Silêncio Calmo do Sono (The Still Silence of Sleep)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e escolha um ponto à vista. Todos os inimigos menores em um raio de 15 metros (50 pés) desse ponto devem fazer um teste de resistência de Espírito ou adormecer. Você pode ditar os sonhos ou pesadelos de uma pessoa adormecida se puder vê-la, embora inimigos poderosos possam testar a resistência para resistir. Você pode enviar e receber mensagens com seus companheiros de panteão e associados próximos através de sonhos, se eles permitirem."
        },
        {
          name: "Recebendo o Crepúsculo (Welcoming the Dusk)",
          type: "Ação",
          content: "Comprometa Esforço. Crie escuridão ao seu redor em qualquer configuração, até um raio de 9 metros (30 pés). Você pode enxergar através dela, e ela pode segui-lo."
        }
      ],
      greater: [
        {
          name: "Uma Escuridão ao Meio-Dia (A Darkness at Noon)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Você traz ou dissipa a noite em um raio de até uma milha por nível. À noite, a lua está na fase que você desejar, enquanto a noite banhada deixa o sol a pino. Opcionalmente, você pode garantir que nenhum dorminhoco inimigo menor dentro dessa área acorde por nada além de dano físico severo, ou enviar-lhes sonhos específicos."
        },
        {
          name: "Carne de Sombras (Flesh of Shadows)",
          type: "Ação",
          content: "Comprometa Esforço. Torne-se uma sombra quase insubstancial, incapaz de afetar o mundo real ou passar através de objetos sólidos, mas com uma defesa invencível contra ataques de armas não mágicas, embora não contra feitiços."
        },
        {
          name: "Um Orador nos Sonhos (A Speaker in Dreams)",
          type: "Ação",
          content: "Comprometa Esforço. Você pode se comunicar com qualquer pessoa que já tenha visto antes por meio de sonhos compartilhados de que elas se lembram perfeitamente. Você também pode espionar os sonhos delas para ter uma ideia de suas maiores preocupações e aprender sua localização. Inimigos poderosos relutantes podem testar a resistência de Espírito para resistir."
        }
      ]
    }
  },
  {
    id: "passion",
    name: "Paixão (Passion)",
    shortDesc: "A Palavra da paixão e das emoções, permitindo inspirar sentimentos intensos ou banir desejos no coração dos mortais.",
    description: "A Palavra de Passion comanda o coração, preenchendo-o com as emoções desejadas pelo Godbound ou banindo aqueles sentimentos que se mostram problemáticos. Embora essas emoções possam ser esmagadoras, o Godbound não pode ditar o que os sujeitos fazem com elas. Dessa forma, Passion inspira ação pessoal em seus alvos, mas não concede o controle direto garantido pela Palavra de Command. Heróis com a Palavra de Passion são abençoados com graça e uma compreensão do coração. Eles podem definir sua pontuação de atributo de Carisma ou Sabedoria para 16, ou para 18 se a pontuação já estiver tão alta.",
    gifts: {
      lesser: [
        {
          name: "Estandarte da Paixão (Banner of Passion)",
          type: "Ação",
          content: "Comprometa Esforço. Todos os NPCs que são inimigos menores ao alcance da voz ou da vista são tomados por uma emoção poderosa de sua escolha, direcionada ao objeto de sua escolha. Inimigos poderosos recebem um teste de resistência de Espírito a cada rodada para se livrarem dela. Essa emoção os fará agir nos limites de seu caráter e durará pelo menos um dia após o esforço ser recuperado."
        },
        {
          name: "Moldando um Amigo (Fashioning a Friend)",
          type: "Ação",
          content: "Comprometa Esforço para a cena para enfeitiçar uma criatura visível, inspirando nela sentimentos de amizade e cooperação em relação a você. Ela não questionará esses sentimentos, por mais irracionais que sejam, e eles persistirão até que você obviamente a traia ou cause algum dano flagrante a ela. Inimigos menores não têm resistência contra este poder, enquanto inimigos poderosos podem testar a resistência de Espírito para evitar o encantamento."
        },
        {
          name: "Seguir os Fios (Follow the Threads)",
          type: "Ação",
          content: "Você pode estudar um alvo por uma ação para identificar as meia dúzia de pessoas mais emocionalmente significativas para ele, aprendendo sua aparência, o nome pelo qual o alvo as conhece e algumas palavras de descrição do vínculo entre eles. Inimigos menores não podem resistir a isso, enquanto inimigos poderosos podem testar a resistência de Espírito para manter seus segredos."
        },
        {
          name: "Coração de Leão (Heart of the Lion)",
          type: "Constante",
          content: "Você tem uma defesa invencível contra o medo e todos os efeitos indesejados que afetam as emoções. Você pode Comprometer Esforço para a cena como uma ação Instantânea para compartilhar essa imunidade com todos os aliados em um raio de 90 metros (100 jardas)."
        },
        {
          name: "Apagar a Vela do Coração (Snuff the Heart's Candle)",
          type: "Ação",
          content: "Extinga instantaneamente uma emoção em um alvo visível. Você pode extinguir uma emoção específica inteiramente, como medo, lealdade ou amor, ou pode apagá-la seletivamente em relação a pessoas ou atividades específicas. O alvo é incapaz de sentir essa emoção em relação aos sujeitos selecionados até que você o liberte do efeito. Inimigos menores são afetados automaticamente, enquanto inimigos poderosos podem testar a resistência de Espírito para resistir à cessação."
        },
        {
          name: "Aparência Aterradora (Terrifying Mien)",
          type: "Ação",
          content: "Comprometa Esforço até o final da cena. Todos os inimigos NPCs que possam ver ou ouvir você devem fazer instantaneamente um teste de Moral. Inimigos menores rolam isso com uma penalidade de -2. Inimigos que falharem neste teste geralmente fugirão aterrorizados, embora aqueles sem meios de fuga possam se render no local. Esta dádiva pode ser usada contra um inimigo apenas uma vez por cena, e PCs são imunes."
        }
      ],
      greater: [
        {
          name: "Um Coração como Argila (A Heart like Clay)",
          type: "Ação",
          content: "Comprometa Esforço para a cena para controlar completamente as emoções de um sujeito, ditando tudo o que ele sente e suas atitudes emocionais em relação a quaisquer pessoas ou assuntos de sua escolha. Inimigos menores ficam totalmente indefesos contra essa modelagem e podem ser levados a extremos totalmente atípicos por ela. Inimigos poderosos só podem ser moldados dentro dos limites de sua própria faixa emocional habitual e podem testar a resistência de Espírito para resistir à modelagem. As emoções persistem apesar de todas as adversidades até que o Godbound liberte o sujeito."
        },
        {
          name: "Paixão Infecciosa (Infectious Passion)",
          type: "Ação",
          content: "Comprometa Esforço para a cena para plantar a semente de uma atitude emocional específica em relação a uma pessoa ou tópico escolhido em um alvo visível. Se esse alvo for afetado, ele se tornará infeccioso, espalhando essa mesma atitude para seus amigos e associados ao longo de um único contato. A infecção pode se espalhar cinco ou seis graus antes de perder sua potência mágica, geralmente o suficiente para sobrecarregar completamente uma vila, corte ou vizinhança. Inimigos menores não têm direito a teste de resistência, mas inimigos poderosos podem testar a resistência de Espírito para resistir. Dura até que o Godbound liberte as vítimas ou a emoção se torne flagrantemente inapropriada."
        },
        {
          name: "Uma Canção Enterrada Profundamente (A Song Buried Deep)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia e escolha uma frase, passagem musical, imagem ou pessoa em sua presença. Em um momento ou contexto de sua escolha, a visão ou experiência desse assunto liberta os efeitos de um Estandarte da Paixão em todos os presentes. Você pode definir o contexto com a precisão que desejar e escolher os efeitos e o foco do Estandarte de antemão. O alcance máximo desse efeito é de uma milha por nível do Godbound. Note que os efeitos se aplicam a qualquer frase, música ou imagem correspondente; se o Godbound usar este poder na bandeira de batalha de uma nação e ordenar que ela seja acionada para soldados aliados ao enfrentarem combate, toda unidade militar aliada a milhas de distância será afetada, desde que possua uma bandeira de batalha correspondente. Se o Godbound imbuir uma saudação tradicional com o efeito..."
        }
      ]
    }
  },
  {
    id: "protection",
    name: "Proteção (Protection)",
    shortDesc: "A Palavra da proteção e abnegação, focada na guarda de aliados e mortais, oferecendo defesas formidáveis e resguardo contra danos.",
    description: "A Palavra de Protection é uma Palavra altruísta, dedicada à tutela dos outros. Embora um Godbound vinculado a esta Palavra tenha certas habilidades para prolongar sua custódia bem-sucedida, os poderes de Protection não devem ser focados principalmente no portador. Em vez disso, eles são mais fortes na proteção de outros, sejam outros membros do panteão ou peticionários mortais por ajuda. A Palavra de Protection é eminentemente defensiva por natureza, embora possa manejar uma Ira Divina como qualquer outra Palavra. Suas enfermarias podem afastar danos físicos e intangíveis, mas tais defesas invencíveis nunca podem proteger o Godbound pessoalmente; eles sempre estarão pelo menos teoricamente vulneráveis ​​aos ataques de um inimigo. Isso também se aplica a outros Godbound com a Palavra de Protection; dois portadores aliados da Palavra não podem proteger um ao outro com defesas invulneráveis, embora outros poderes protetores ainda possam funcionar. Godbound of Protection têm uma Classe de Armadura natural de 3. Uma vez por cena, eles podem negar um ferimento ou efeito hostil em um aliado como uma ação Instantânea, mas eles não podem usar esse poder em seu próprio benefício. Eles podem usar poderes e milagres de Protection para ajudar peticionários mortais orantes que os contatam por meio das dádivas de Apotheosis como se estivessem presentes ao lado de seu seguidor.",
    gifts: {
      lesser: [
        {
          name: "Amortizar a Presa (Blunt the Fang)",
          type: "Instante",
          content: "Quando visado por um poder sobrenatural hostil, Comprometa Esforço pelo dia e abra mão de qualquer teste de resistência que você normalmente possa ter direito. Pelo resto da cena, esse poder sobrenatural não pode afetar nenhum de seus aliados na mesma vizinhança geral, embora ainda possa afetá-lo normalmente. Ataques normais que envolvem energias sobrenaturais não são um assunto válido para este poder."
        },
        {
          name: "Preparado para o Impacto (Braced for Impact)",
          type: "No Turno",
          content: "Comprometa Esforço para a cena. Atualize a habilidade vinculada à Palavra do Godbound de anular o ferimento ou dano de um aliado de um efeito hostil. Esta dádiva pode ser usada apenas uma vez por round."
        },
        {
          name: "Vigilância Eterna (Eternal Vigilance)",
          type: "Constante",
          content: "O Godbound não come, bebe, dorme ou respira, e não pode ser surpreendido ou emboscado. Se alguém tentar emboscá-lo ou atacá-lo de surpresa, o Godbound imediatamente ganha um round de bônus de ação livre antes que o suposto emboscador possa agir."
        },
        {
          name: "Escudo Santificado (Sanctified Shield)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. O Godbound declara tutela sobre até uma dúzia de aliados na mesma vizinhança geral. Qualquer dano infligido a esses aliados dentro da área pode ser transferido para o Godbound como uma ação Instantânea por parte do Godbound, e quaisquer testes de resistência aliados falhados podem ser rerrolados pelo Godbound. Em caso de sucesso, o alvo original não é afetado, enquanto em caso de falha, o efeito se aplica ao alvo original. Esta tutela dura por uma cena."
        },
        {
          name: "Descartar a Chuva Negra (Shed the Black Rain)",
          type: "Instante",
          content: "Comprometa Esforço para a cena e anule uma dádiva prejudicial ou poder sobrenatural visado na área que o Godbound ocupa, como se o poder fosse dissipado defensivamente. Esta dádiva pode dissipar apenas poderes que causam dano direto às criaturas na zona afetada; ela não pode banir efeitos de área não prejudiciais, nem efeitos visados apenas em vítimas específicas. Dano de pontos de vida sempre conta como dano, assim como outros efeitos negativos e impeditivos em um alvo."
        },
        {
          name: "Proteger as Paredes (Ward the Walls)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia e proíba um ou mais alvos de entrar na estrutura que o Godbound ocupa ou em uma região de até 100 pés de diâmetro por nível de personagem. Indivíduos ou tipos de seres podem ser banidos, mas a dádiva não consegue discernir motivações ou pensamentos. A dádiva pode perfurar ilusões e disfarces mortais para barrar uma criatura, mas não milagres de Enganação. Inimigos menores são fisicamente incapazes de entrar na região protegida e são lançados para fora dela instantaneamente, enquanto inimigos poderosos podem salvar versus Vigor (Hardiness) para forçar sua entrada. Mesmo em caso de sucesso, no entanto, eles devem Comprometer Esforço pelo dia para permanecer por uma cena. Esta proteção dura até que o Godbound a abandone ou deixe a área."
        }
      ],
      greater: [
        {
          name: "Uma Calamidade Evitada (A Calamity Averted)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia e nomeie um evento desastroso específico. Este evento não pode ser a simples perda de uma batalha ou falha em uma tarefa, mas pode ser um risco provável, como o uso de um poder devastador por um inimigo, ou a chance de que aliados venham em seu auxílio, ou o risco de que um motor celestial possa explodir durante um reparo difícil. Este evento não acontecerá se houver qualquer maneira física de ser evitado. Apenas uma calamidade pode ser evitada de cada vez."
        },
        {
          name: "Defensor Invencível (Invincible Defender)",
          type: "Ação (Golpe / Smite) [Nota: descrita como Instante]",
          content: "Comprometa Esforço pelo dia. Até o início do próximo turno do Godbound, nenhum aliado dentro do alcance visual pode ser reduzido abaixo de 1 ponto de vida ou dado de vida (HD), nem ser prejudicado por qualquer efeito que permita um teste de resistência. O Godbound não está protegido por este efeito."
        },
        {
          name: "Proteções Mutáveis (Mutable Wards)",
          type: "No Turno",
          content: "O Godbound nomeia uma energia elemental específica ou perigo ambiental, como fogo, gelo, pressão esmagadora, um campo de lava, um edifício em colapso, vácuo absoluto ou alguma outra classe específica de perigo. Eles e seus companheiros ganham imunidade invulnerável a isso. Ataques normais e poderes sobrenaturais não são escolhas válidas, e apenas um tipo de perigo pode ser escolhido de cada vez."
        }
      ]
    }
  },
  {
    id: "sea",
    name: "Mar (Sea)",
    shortDesc: "A Palavra do mar, dominando a água em todas as formas, criaturas aquáticas, pressões esmagadoras e viagens oceânicas.",
    description: "A Palavra do sea comanda a água em todas as suas formas, mas mais frequentemente a dos rios e oceanos. Todas as criaturas que habitam dentro da água estão sujeitas ao mar, e suas águas podem carregar seus abençoados para longe ou esmagar e erosionar aqueles menos favorecidos. Milagres do mar podem esmagar com pressão esmagadora, conjurar vastas quantidades de água, controlar o fluxo de líquidos ou purificar com o sal purificador dos oceanos. Heróis com a Palavra Sea têm uma defesa invencível contra o frio, podem respirar embaixo d'água, nadar ao dobro de sua taxa de movimento normal e enxergar com clareza perfeita debaixo d'água, independentemente da luz disponível. Eles podem conceder esses benefícios a seus companheiros, exceto a imunidade ao frio.",
    gifts: {
      lesser: [
        {
          name: "Corpo de Água (Body of Water)",
          type: "Constante",
          content: "Sua carne flui ao redor de perigos e encapsula toxinas. Sua classe de armadura natural é 3 e você é imune a venenos. Você pode aplicar um veneno por toque se o tiver engolido anteriormente ou sido atingido por uma dose, ejetando assim a toxina. Esta CA não é melhorada por escudos ou armadura."
        },
        {
          name: "Profundidades Esmagadoras (Crushing Depths)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Destrua qualquer objeto não mágico que você esteja tocando, de até 6 x 6 x 6 metros (20x20x20 pés) de tamanho, à medida que ele erode ou é comprimido em estilhaços. Criaturas vivas exigem uma arma normal ou ataque desarmado para acertar e não são destruídas automaticamente, embora o dado de dano seja tratado como se tivesse rolado o máximo possível."
        },
        {
          name: "Torrente Viva (Living Torrent)",
          type: "No Turno",
          content: "Comprometa Esforço. Jorre uma torrente de água a níveis perigosos de pressão. A água pode ser usada como uma arma à distância de até 30 metros (100 pés), causando 1d10 de dano e contando como uma arma mágica. Ela destruirá um pé de barreiras de terra ou madeira em uma rodada. A água pode ser permitida a permanecer após o uso deste poder, ou a desaparecer conforme a vontade de quem a empunha."
        },
        {
          name: "Senhor das Águas (Lord of the Waters)",
          type: "No Turno",
          content: "Comprometa Esforço. Enquanto estiver em efeito, você pode se transformar em qualquer criatura marinha não mágica maior do que um camarão e menor do que um krakens. Você pode falar e comandar toda a vida marinha natural, sentir cada criatura viva sob ou sobre a água em um raio de uma milha, e convocar essa vida para sua presença conforme necessário. Criaturas inteligentes não precisam obedecer ao seu chamado ou comandos se não o desejar. Navios ou frotas em sua companhia são impermeáveis a tempestades e recifes."
        },
        {
          name: "Segredos das Profundezas (Secrets of the Deep)",
          type: "No Turno",
          content: "Comprometa Esforço. Você sente a posição exata de todos os líquidos em fluxo em um raio de 60 metros (200 pés), incluindo o sangue em veias vivas. Ao tocar em um corpo d'água e buscar uma coisa específica ou tipo de objeto, você se torna ciente de cada lugar onde tal coisa está afundada, flutuando ou banhada por ondas dentro de dez milhas."
        },
        {
          name: "Caminhando com a Maré (Walking With the Tide)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Entre em um corpo d'água grande o suficiente para submergi-lo e emerja de qualquer corpo d'água semelhante dentro de uma milha, saindo na poça adequada mais próxima ao seu destino desejado. Se os corpos d'água estiverem conectados por águas largas o suficiente para admitir uma criatura do seu tamanho, o alcance aumenta para cem milhas."
        }
      ],
      greater: [
        {
          name: "Domador de Rios (River Tamer)",
          type: "Ação",
          content: "Comprometa Esforço. Quantidades de água não maiores do que um pequeno rio podem ser redirecionadas, feitas para fluir para o ar ou se mover de maneira impossível de outra forma. A água pode varrer edifícios ou criaturas, dependendo das quantidades envolvidas, e é suficiente para acelerar um navio no mar a dez vezes o seu ritmo habitual. O fluxo continua enquanto o esforço permanecer comprometido e pode ser controlado a até 1.000 pés de distância do herói como uma ação. O herói e seus aliados nunca são movidos involuntariamente ou prejudicados por esta água."
        },
        {
          name: "Pureza do Spray Salino (Salt-Spray Purity)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Dissipe ou resista automaticamente a qualquer efeito mágico único direcionado a você ou a um aliado. Pela duração da cena, esse efeito ou dádiva não pode afetar o sujeito que você defendeu, mesmo que seja aplicado novamente. Opcionalmente, em vez deste efeito, você pode suprimir qualquer outra dádiva de Godbound por uma rodada, como se por um milagre bem-sucedido."
        },
        {
          name: "Mão do Tsunami (Tsunami Hand)",
          type: "Ação (Golpe / Smite)",
          content: "Comprometa Esforço para a cena. Você desfere um golpe que se torna uma onda que desaba, avançando até 60 metros (200 pés) de largura, 9 metros (30 pés) de altura e 30 metros (100 pés) de comprimento antes de escoar. Pequenos edifícios e estruturas frágeis são destruídos, e as criaturas sofrem o seu nível em pontos de dano, triplicados para Multidões. A onda pode ser lançada em uma área menor, se desejado, não prejudica alvos que você deseja preservar e desaparece após quebrar para não deixar a área inundada."
        }
      ]
    }
  },
  {
    id: "sky",
    name: "Céu (Sky)",
    shortDesc: "A Palavra do céu, dominando o clima, o voo, relâmpagos e ventos, além de conceder imunidade a quedas e eletricidade.",
    description: "O sky governa o clima, o voo, relâmpagos e ventos. Aqueles abençoados por seu poder navegam pelo ar tão facilmente quanto pela terra, manejam relâmpagos como arma ou devastam cidades inteiras com tempestades e ventos. Milagres do céu podem banir clima hostil, atingir um alvo com um raio, conjurar vento para erguer e carregar algo, ou realizar algum outro feito de comando aéreo. Heróis com a Palavra Sky nunca se ferem por quedas, não precisam respirar e têm uma defesa invencível contra eletricidade, frio e sons lesivos.",
    gifts: {
      lesser: [
        {
          name: "As Nuvens Abaixo (The Clouds Below)",
          type: "No Turno",
          content: "Comprometa Esforço. Encha o ar ao seu redor com névoa, em um raio de até 90 metros (300 pés). Você e seus aliados podem enxergar através dela, mas outros com sentidos normais não conseguem enxergar a mais de um metro e meio (cinco pés) ao seu redor. As nuvens podem apagar qualquer fogo mundano e permitir que cada aliado dentro dela ignore os primeiros 5 pontos de dano de fogo que sofrer a cada rodada."
        },
        {
          name: "Olhos Acima (Eyes Above)",
          type: "Ação",
          content: "Obtenha uma vista panorâmica de uma milha ao seu redor, observando com rapidez suficiente para avistar imediatamente indivíduos ou coisas específicas que você possa estar procurando. Você pode se concentrar em locais individuais dentro dessa milha, observando tudo o que está acontecendo, mas incapaz de ouvir conversas comuns. A visão não pode penetrar telhados ou outras coberturas."
        },
        {
          name: "Chuva de Raios (Rain of Lightning)",
          type: "Ação",
          content: "Escolha um ponto à vista; cada alvo desejado em um raio de 30 metros (100 pés) sofre um dado de dano de 1d6 de eletricidade enquanto uma nuvem de relâmpagos os envolve. Os raios são suficientes para matar os fracos, mas não podem destruir objetos."
        },
        {
          name: "Asas de Safira (Sapphire Wings)",
          type: "No Turno",
          content: "Comprometa Esforço. O herói pode voar ao dobro de sua taxa de movimento habitual. Se desdistraído e capaz de voar em linha reta, ele pode atingir velocidades de até 100 milhas por hora."
        },
        {
          name: "Espada da Tempestade (Stormsword)",
          type: "No Turno",
          content: "Comprometa Esforço. Empunhe a eletricidade como uma arma à distância de até 60 metros (200 pés), ou revista sua arma com relâmpagos. O dano causado é de no mínimo 1d10 e conta como uma arma mágica. Ataques contra inimigos molhados ou com armadura de metal sempre causam pelo menos 1 ponto de dano, mesmo em caso de erro."
        },
        {
          name: "Cantor dos Ventos (Windsinger)",
          type: "Ação",
          content: "Comprometa Esforço. Controle o clima em um raio de uma milha, desde o ar calmo até tempestades de chuva fortes o suficiente para derrubar estruturas frágeis e tornar o tiro com arco mundano impossível. As mudanças climáticas ocorrem instantaneamente ao usar esta dádiva e duram enquanto o Esforço permanecer comprometido. Quando liberado, o clima retorna rapidamente à sua condição normal."
        }
      ],
      greater: [
        {
          name: "Espigão Boreal (Boreal Spike)",
          type: "Ação (Golpe / Smite)",
          content: "Comprometa Esforço para a cena. Traga o frio glacial dos céus sobre um ponto à vista. Cada alvo escolhido em um raio de 60 metros (200 pés) é congelado por uma quantidade de pontos de dano igual ao seu nível. Contra Multidões, o espigão causa 1d10 de dano direto para cada dois níveis de personagem do herói, arredondado para cima. Líquidos no alcance são congelados solidamente até 60 metros (200 pés) de profundidade e todos os incêndios normais são extinguidos."
        },
        {
          name: "Fúria dos Céus (Fury of the Heavens)",
          type: "Ação (Golpe / Smite)",
          content: "Comprometa Esforço para a cena. Pelo resto da cena, quando sob o céu aberto, você pode atingir um alvo ou Multidão à vista com um raio que causa dano igual ao seu nível, com um teste de resistência de Vigor (Hardiness) para metade. As rajadas podem destruir estruturas menos robustas do que um edifício de pedra. Invocar esses raios é uma ação de Golpe (Smite) e, como tal, não pode ser feito duas rodadas seguidas."
        },
        {
          name: "Voz dos Ventos (Voice of the Winds)",
          type: "Ação",
          content: "Você pode se concentrar em um ponto específico dentro de dez milhas para ouvir tudo o que está acontecendo lá, a menos que esteja isolado do ar exterior. Você pode falar para esse ponto e ser ouvido lá sozinho. Se você gastar uma ação gritando, inimigos a 30 metros (100 pés) de você sofrem o seu dado de Refrega (Fray), se aplicável."
        }
      ]
    }
  },
  {
    id: "sorcery",
    name: "Feitiçaria (Sorcery)",
    shortDesc: "A Palavra da feitiçaria, representando o domínio sobre as leis fundamentais da criação e o acesso aos poderes da teurgia.",
    description: "Sorcery é uma Palavra incomum, representando um vínculo com as leis fundamentais da criação e os segredos profundos e sutis de sua operação. Sorcery não tem milagres nativos e não pode ser usada por si só para criar efeitos ou imitar suas dádivas. Em vez disso, o domínio de suas dádivas permite que um Godbound maneje os poderes flexíveis e potentes da teurgia. Godbound afiliados à Palavra Sorcery descartam os encantamentos de magos menores. Como uma habilidade Instantânea, o PC pode Comprometer Esforço pela cena para anular instantaneamente qualquer magia menor sendo lançada em sua presença, ou banir e destruir qualquer construto de magia menor ou entidade invocada. Este contra-ataque não funciona contra teurgia ou poderes arcanos que sejam meramente similares a magias menores.",
    gifts: {
      lesser: [
        {
          name: "Adepto do Portão (Adept of the Gate)",
          type: "Constante",
          content: "Você foi iniciado no Portão, o nível mais humilde da teurgia, embora ainda esteja além de todos, exceto dos magos mortais mais poderosos. Você pode escolher quatro invocações do Portão para dominar como parte deste aprendizado e pode aprender mais à medida que as encontrar."
        },
        {
          name: "A Pausa Excelente (The Excellent Pause)",
          type: "Instante",
          content: "Quando você lança uma invocação teúrgica ou feitiço de baixa magia, você pode Comprometer Esforço logo antes de ele ser disparado. O feitiço é então suspenso e pode ser liberado como uma ação a qualquer momento posterior, com o Esforço comprometido retornando ao final daquela cena. Você pode suspender mais de um feitiço se estiver disposto a Comprometer Esforço para cada um, mas liberar um feitiço exige sua ação para o turno."
        },
        {
          name: "Pavês Superior da Regência (Greater Pavis of Rule)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Pela duração, você é imune a todos os feitiços de baixa magia e ganha um bônus de +4 em todos os testes de resistência contra teurgia. Se uma invocação teúrgica normalmente não permitisse um teste de resistência, você pode fazer um sem o bônus para resistir aos seus efeitos."
        },
        {
          name: "Perfeição da Compreensão (Perfection of Understanding)",
          type: "Constante",
          content: "Você é um estudante de magia extremamente rápido. Você pode aprender qualquer caminho de baixa magia em um mês, levando uma semana por nível de iniciação do seu professor, sem exigir um Fato comprometido com isso. Você também pode aprender feitiços de teurgia a uma taxa amplamente acelerada: um dia para uma invocação de qualquer grau. Você entende automaticamente qualquer baixa magia ou teurgia usada contra você ou em sua presença, conhecendo sua função, limites e grau de poder. Você também pode reconhecer o autor de um trabalho mágico se já viu outros exemplos do trabalho dele."
        },
        {
          name: "O Olho Sutil do Conhecimento (The Subtle Eye of Knowing)",
          type: "No Turno",
          content: "Com um momento de concentração, você pode discernir qualquer baixa magia ou teurgia ativa na área, identificando sua função geral. Outras formas de magia presentes são notadas, mas apenas um senso vago de perigo ou prosperidade é transmitido. Este olhar identifica imediatamente quaisquer teurgos ou praticantes de baixa magia à vista."
        },
        {
          name: "A Vontade que Queima (The Will that Burns)",
          type: "Instante",
          content: "Quando atingido enquanto mantém a concentração, como ao lançar uma invocação teúrgica, você pode Comprometer Esforço para a cena para manter sua concentração, evitar a perda do feitiço e infligir um dado de dano direto de 1d8 no inimigo que o atingiu como um revide místico."
        },
        {
          name: "Ira do Mago (Wizard’s Wrath)",
          type: "Instante",
          content: "Comprometa Esforço. Seu dado de Refrega (Fray) pode ferir até mesmo inimigos poderosos, aqueles inimigos com mais dados de vida do que níveis você possui. Este poder também afeta aquelas dádivas que permitem que você aplique seu dado de Refrega como parte de seus efeitos, aumentando a potência de tais poderes."
        }
      ],
      greater: [
        {
          name: "Adepto do Trono (Adept of the Throne)",
          type: "Constante",
          content: "Você foi iniciado no Trono, o grau mais profundo dos segredos da teurgia. Você deve ser um adepto do Caminho para dominar isso. Você domina duas invocações do Trono como parte deste aprendizado e pode aprender mais à medida que as encontrar."
        },
        {
          name: "Adepto do Caminho (Adept of the Way)",
          type: "Constante",
          content: "Você foi iniciado no Caminho, o segundo nível dos mistérios teúrgicos. Você já deve ser um adepto do Portão para dominar isso. Você domina três invocações do Caminho como parte deste aprendizado e pode aprender mais à medida que as encontrar."
        },
        {
          name: "Governante dos Caminhos Menores (Ruler of the Lesser Paths)",
          type: "Constante",
          content: "Comprometa Esforço. Após uma hora de meditação, você pode selecionar uma tradição de baixa magia com a qual tenha passado pelo menos um dia em estudo com um praticante de qualquer nível de maestria. Até que o Esforço seja recuperado, você pode lançar feitiços como um arquimago desse caminho. Enquanto esta dádiva estiver em efeito, você é inteiramente imune aos feitiços daquele caminho, se assim o desejar."
        }
      ]
    }
  },
  {
    id: "sun",
    name: "Sol (Sun)",
    shortDesc: "A Palavra do sol, representando luz, esperança, visão e pureza, capaz de banir trevas e feitiçaria malevolente.",
    description: "Luz, esperança, visão e pureza são os domínios da Palavra do Sun. O sol bane a feitiçaria malevolente e dá coragem com sua radiância. Milagres do sol podem ser usados para quebrar feitiços, revelar verdades, dar esperança ou incinerar os impuros com torrentes de chama celestial. O olho do sol é onividente, e dádivas de visão também caem sob esta esfera. Heróis com a Palavra Sun podem emitir luz do dia à vontade em um raio de até 200 pés, não podem ser cegados ou ter sua visão prejudicada por trevas ou névoas, e possuem uma defesa invencível contra dano de fogo. Sua visão pode perfurar vendas ou resistir até mesmo à remoção física de seus olhos.",
    gifts: {
      lesser: [
        {
          name: "Corpo de Luz Ardente (Body of Burning Light)",
          type: "No Turno",
          content: "Comprometa Esforço. Seu brilho torna você quase impossível de ser alvejado por criaturas que operam por meio da visão. Enquanto você brilha, sua CA natural é 3 contra criaturas com visão. Suas armas ou ataques desarmados contam como uma arma mágica com alcance de 60 metros (200 pés) e causam um mínimo de 1d10 de dano. Sua coroa conta como luz solar natural para criaturas suscetíveis. Armadura e escudos não auxiliam esta CA."
        },
        {
          name: "Apressar-se para a Luz (Hasten to the Light)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Apareça instantaneamente em qualquer lugar iluminado por luz solar natural ou por sua própria radiação, desde que esteja dentro de uma milha. Você aparece na luz válida mais próxima do seu destino desejado. Esta dádiva não pode movê-lo mais do que uma milha de distância total por hora."
        },
        {
          name: "Esperança da Alvorada (Hope of the Dawn)",
          type: "No Turno",
          content: "Comprometa Esforço. Você e seus aliados em sua área geral ganham Moral 12 e uma defesa invencível contra influência emocional mágica. NPCs aliados ganham +1 dado de vida e +1 para acertar. Aqueles à sua vista têm uma consciência instintiva de seus desejos, embora não sejam compelidos a obedecer."
        },
        {
          name: "Iluminar Aquilo que É (Illumine That Which Is)",
          type: "No Turno",
          content: "Comprometa Esforço. Sua radiação delineia efeitos mágicos em pessoas, bane a escuridão mágica, dissipa ilusões mortais e revela itens mágicos. Aqueles com as dádivas da Enganação ou Noite podem fazer um teste de resistência de Espírito para manter suas ilusões ou trevas."
        },
        {
          name: "Pureza da Lei Brilhante (Purity of Brilliant Law)",
          type: "Instante",
          content: "Comprometa Esforço para a cena. Dissipe defensivamente um efeito mágico hostil em você mesmo ou dissipe ofensivamente outra dádiva por uma rodada como se com um milagre. Esta dádiva funciona mais rapidamente do que um milagre convencional de dissipação, e o Esforço não precisa ser comprometido por tanto tempo."
        },
        {
          name: "Visão Iluminada pelo Sol (Sunlit Sight)",
          type: "Ação",
          content: "Comprometa Esforço. Escolha um lugar onde você esteve que esteja atualmente iluminado diretamente pelo sol. Enquanto o Esforço estiver comprometido, veja e ouça tudo naquele lugar como se estivesse presente. Sua voz pode ser ouvida lá por aqueles presentes."
        }
      ],
      greater: [
        {
          name: "Primeira Luz da Criação (Creation’s First Light)",
          type: "No Turno",
          content: "Comprometa Esforço. Sua visão penetra qualquer barreira não mágica, permitindo que você veja tudo e qualquer coisa até o horizonte. Concentrar-se em algo que não está na área imediata requer uma rodada. Esta visão penetra automaticamente ilusões e vê a verdadeira forma de metamorfos. No entanto, ela não pode perfurar as dádivas da Palavra de Enganação."
        },
        {
          name: "Chama Purificadora do Meio-Dia (Purging Noonday Blaze)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Uma luz ardente bane permanentemente toda baixa magia indesejada até o alcance da vista. Se o Esforço for comprometido por um dia, ele suprime todas as dádivas ofensivas ou poderes mágicos de um único alvo por uma rodada, como se por um milagre bem-sucedido aplicado a cada um. Esta dádiva pode ser usada para tal dissipação ofensiva apenas uma vez por cena."
        },
        {
          name: "Golpe Solar (Sunstrike)",
          type: "Ação (Golpe / Smite)",
          content: "Comprometa Esforço para a cena. Se o sol estiver no céu, sua radiação atinge um inimigo visível desejado causando 1d10 de dano de fogo por nível do Godbound. Esta chama penetrará qualquer telhado ou teto que não seja à prova de dádivas divinas para atingir o alvo. Se o sol não estiver no céu, o raio causa 1d6 de dano por nível. Criaturas que não são deste mundo, como entidades convocadas, anjos ou Inriados (Uncreated), sempre tomam 1d10 de dano por nível e rolam o dano duas vezes para considerar o pior resultado."
        }
      ]
    }
  },
  {
    id: "sword",
    name: "Espada (Sword)",
    shortDesc: "A Palavra da espada e do combate corpo a corpo, concedendo golpes infalíveis, proeza marcial inigualável e domínio de armas.",
    description: "A Palavra do Sword é a do combate corpo a corpo, da luta direta entre o Godbound e seus inimigos. Milagres do Sword envolvem golpes infalíveis, pancadas formidáveis ​​ou fugas maravilhosas de danos em batalha. Embora potentes, esses milagres não funcionam à distância. Heróis com a Palavra Sword tratam todos os seus ataques com armas ou desarmados como mágicos, não podem ser desarmados e podem invocar qualquer arma corpo a corpo que já tenham usado imediatamente para a mão como uma ação Instantânea.",
    gifts: {
      lesser: [
        {
          name: "Desprezo da Distância (Contempt of Distance)",
          type: "Constante",
          content: "Sua ação de movimento pode levá-lo a qualquer ponto no alcance de movimento, desde que o caminho esteja desobstruído e haja um alvo para atingir no final do movimento. Um herói pode, portanto, correr direto para um telhado ou varanda sem precisar navegar pela rota física até lá. Inimigos muito distantes para serem alcançados em uma rodada podem ser perseguidos por várias rodadas, mas devem ser atacados assim que alcançados. Essa perseguição pode até se estender para o ar, sustentando o herói até que ele derrote seu inimigo ou decida se desengajar, momento em que ele pousa com segurança em um ponto abaixo."
        },
        {
          name: "Nove Paredes de Ferro (Nine Iron Walls)",
          type: "Instante",
          content: "Comprometa Esforço para a cena. Você tem uma defesa invencível contra todos os ataques físicos até o início da sua próxima rodada. Esta defesa não se aplica a perigos ambientais, feitiços ou outras formas de dano que não sejam ataques. Como em todos os Instantes, isso pode ser usado mesmo após um agressor ter rolado um acerto bem-sucedido."
        },
        {
          name: "Aço Sem Fim (Steel Without End)",
          type: "Constante",
          content: "Todos os seus ataques com armas corpo a corpo são tratados como armas mágicas causando um dado de dano de 1d10+1, incluindo ataques desarmados. Como em todas as dádivas que impulsionam armas, você pode usar qualquer atributo para modificar os ataques feitos desta forma, desde que possa explicar como ele é relevante para o seu estilo."
        },
        {
          name: "Navalha Sedenta (Thirsting Razor)",
          type: "No Turno",
          content: "Comprometa Esforço. Você sempre acerta inimigos menores com seus ataques corpo a corpo. Nenhuma jogada de ataque é necessária, mas este benefício aplica-se apenas a ataques reais com armas corpo a corpo ou desarmados, e não a outros efeitos que envolvam atingir um inimigo para infligir um efeito hostil."
        },
        {
          name: "Através de uma Floresta Vermelha (Through A Red Forest)",
          type: "No Turno",
          content: "Comprometa Esforço. Enquanto o Esforço estiver comprometido, ao lutar contra múltiplos inimigos menores ou uma Multidão deles, você pode optar por sofrer dano como se fosse de um acerto bem-sucedido de um deles à escolha do Mestre. Você então ganha uma defesa invencível contra ataques de armas ou desarmados do resto desses inimigos menores até o início do seu próximo turno."
        },
        {
          name: "Lâmina Indefectível (Unerring Blade)",
          type: "Instante",
          content: "Comprometa Esforço até o final da cena. Seu ataque corpo a corpo atual ou próximo acerta em qualquer coisa, exceto em um resultado natural de 1, e causa o dano máximo. Este golpe pode penetrar qualquer proteção aquém de uma defesa invencível contra a arma que está sendo usada."
        }
      ],
      greater: [
        {
          name: "Cortando a Estrada Carmesim (Cutting the Crimson Road)",
          type: "No Turno",
          content: "Comprometa Esforço. Contra inimigos com metade ou menos dados de vida do que você tem níveis, até um mínimo de 1, suas rolagens de dano corpo a corpo são lidas diretamente e sempre maximizadas. O excesso pode ser aplicado contra quaisquer outros inimigos que atendam às condições e estejam a até 3 metros (10 pés) de distância. Contra Multidões compostas por criaturas aplicáveis, você simplesmente rola seu dado de dano diretamente, sem maximizá-lo. Esta dádiva não afeta dados de Refrega (Fray)."
        },
        {
          name: "O Caminho Através da Guerra (The Path Through War)",
          type: "No Turno",
          content: "Comprometa Esforço. Enquanto você não fizer uma jogada de ataque ou lançar um efeito hostil nessa rodada, você terá uma defesa invencível contra todos os ataques de armas ou desarmados. Você ainda pode usar seu dado de Refrega (Fray) enquanto estiver sob este efeito. Esta defesa não se aplica a danos ambientais, de feitiços ou de efeitos mágicos. Uma vez que esta dádiva é descartada ou encerrada, ela não pode ser reativada durante essa mesma cena."
        },
        {
          name: "Mão Despedaçadora (Shattering Hand)",
          type: "No Turno",
          content: "Comprometa Esforço. Suas rolagens de dano corpo a corpo e dados de Refrega (Fray) são sempre o máximo possível. Você pode destruir barreiras tão espessas quanto 1,5 metro (cinco pés) de alvenaria à sua frente na ação de uma rodada, esmagando-as com um golpe ou como parte de sua ação de movimento. Substâncias mágicas podem resistir a este poder."
        }
      ]
    }
  },
  {
    id: "theft",
    name: "Roubo (Theft)",
    shortDesc: "A Palavra do roubo e da pilhagem tangível, permitindo burlar fechaduras, armadilhas e invasões a locais guardados sem falhas.",
    description: "A Palavra de Theft tem domínio sobre todas as formas de roubo tangível. Não é uma Palavra de vigaristas e mentirosos, mas uma Palavra para aqueles que entram em lugares proibidos e levam embora coisas guardadas. Aqueles ligados à Palavra de Theft podem invariavelmente abrir qualquer fechadura mundana, evitar qualquer armadilha mundana e esgueirar-se ou furtar qualquer inimigo menor sem chance de falha, desde que o façam com um mínimo de discrição. Eles podem superar fechaduras, armadilhas e barreiras mágicas Comprometendo Esforço pela cena.",
    gifts: {
      lesser: [
        {
          name: "Poder Furtivo (A Prowling Power)",
          type: "Constante",
          content: "O Godbound é capaz de escalar superfícies verticais ou saliências como se fossem chão plano. Sua furtividade inata agora funciona contra inimigos poderosos também, embora tais entidades tenham um teste de resistência de Espírito para notar o Godbound se o herói fizer algo que possa chamar a atenção delas."
        },
        {
          name: "Posse Adversa (Adverse Possession)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia. Tudo o que o Godbound está carregando no momento é imediatamente assumido por todos como pertencente a ele por direito, por mais implausível que seja, e mesmo que o Godbound armazene ou coloque o objeto de lado mais tarde. Os proprietários legítimos de bens roubados obtêm um teste de Espírito para resistir a essa crença se forem inimigos poderosos, mas mesmo que tenham sucesso, o sistema de justiça local ainda não considerará os objetos roubados."
        },
        {
          name: "Inspecionar o Local (Casing the Joint)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia. Ao olhar para um local ou estrutura específica, o Godbound obtém uma noção intuitiva da localização de tesouros ou objetos mais relevantes para seus desejos, a maneira mais prática de alcançar esses locais e a consciência dos guardas, armadilhas ou defesas ao longo dessa rota. Qualquer Esforço Comprometido com esta dádiva não pode ser recuperado até que eles façam uma tentativa honesta de roubar um dos objetos interessantes que percebem, caso exista algum."
        },
        {
          name: "Honra Entre Ladrões (Honor Among Thieves)",
          type: "Constante",
          content: "O Godbound não pode ser roubado. Quaisquer posses que o Godbound carregue têm uma defesa invulnerável contra serem tomadas por aqueles que eles não querem que as tenham, e quaisquer objetos pertencentes que não estejam em sua pessoa só podem ser roubados através do uso de poderes divinos. Coisas protegidas podem ser destruídas, mas não podem ser carregadas. Qualquer tentativa de fraudar ou enganar o Godbound para tirar bens físicos deles é imediatamente evidente para eles, a menos que poderes divinos de Enganação estejam envolvidos."
        },
        {
          name: "Passar Sem Ser Visto (Passing Sight Unseen)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Contanto que ninguém esteja olhando para o Godbound, eles podem desaparecer e reaparecer imediatamente em qualquer lugar dentro de 100 pés, desde que ninguém esteja observando o local de destino. Se o destino desejado estiver sendo observado, a habilidade falha e o Esforço é devolvido. Esta habilidade pode passar por todas as defesas e barreiras, exceto as divinas."
        },
        {
          name: "Na Manga (Up Your Sleeve)",
          type: "Instante",
          content: "Como uma ação Instantânea, o Godbound pode ocultar um objeto segurado ou tocado não maior do que uma carroça e junta de animais. Esta dádiva pode ocultar não mais do que um objeto por nível do Godbound. Nenhuma busca pode descobrir esses objetos em sua pessoa, e eles podem ser produzidos novamente como uma Ação. Os objetos aparecem imediatamente se o Godbound morrer ou ficar inconsciente. Objetos escondidos desta forma ficam em estase enquanto ocultos. Criaturas vivas podem ser ocultadas, mas devem ser alvos dispostos ou animais normais."
        }
      ],
      greater: [
        {
          name: "Um Assalto no Inferno (A Heist in Hell)",
          type: "Constante",
          content: "Sempre que o Godbound deseja roubar algo, ele obtém imediatamente uma ideia geral de sua localização e de como chegar à estrutura ou local onde o item está guardado. Esta habilidade alcança até mesmo outros reinos, mas só pode ser usada para encontrar objetos ou pessoas que estejam sendo mantidas ou guardadas; coisas que estão meramente perdidas não podem ser localizadas assim. Se o Godbound quiser roubar um tipo de coisa em vez de um objeto específico, o poder o direciona para o alvo válido mais próximo. Esta dádiva pode teoricamente visar a alma de um mortal aprisionado no Inferno, mas não uma que descansa pacificamente no túmulo. Esta dádiva não pode ser usada como um milagre."
        },
        {
          name: "Uma Coroa Roubada (A Stolen Crown)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e mire em uma criatura visível. O Godbound pode roubar uma dádiva divina ou poder sobrenatural dela, embora não possa roubar Palavras inteiras. Este roubo é automaticamente bem-sucedido, embora uma criatura não possa ser roubada de mais de um poder de cada vez. Se o Godbound não sabe qual poder está roubando, o mestre escolhe aleatoriamente. O alvo não pode usar este poder até que o Godbound o devolva, embora inimigos poderosos possam fazer um teste de Espírito a cada manhã para encerrar o efeito. O Godbound pode usar este poder uma vez, sem custo de Esforço, mas depois ele retorna ao alvo; caso contrário, permanece roubado até que o devolvam. Poderes ou dádivas inatas que duram indefinidamente quando usados duram pelo resto da cena. Esta dádiva pode ser usada em um alvo apenas uma vez por cena. A dissipação defensiva usada para contatar esta dádiva deve confiar em princípios de engano, ilusão ou truque para neutralizá-la, ou então não poderá ser dissipada defensivamente."
        },
        {
          name: "Ferro e Memória Emprestados (Borrowed Iron and Memory)",
          type: "Ação",
          content: "Alveje uma criatura visível, Comprometendo Esforço para a cena se ela for um inimigo poderoso. Você pode roubar uma memória ou um objeto que ela esteja segurando ou vestindo. Se você roubar um objeto, inimigos menores não notarão que ele foi roubado até tentarem usá-lo; até mesmo outros espectadores inimigos menores falharão em reconhecer o roubo, não importa quão flagrante seja. Inimigos poderosos sentirão o roubo se o objeto roubado for óbvio. Se você roubar uma memória, deve especificar a memória particular a ser roubada, uma que não possa durar mais de um dia no total. Inimigos poderosos podem salvar versus Espírito para resistir ao roubo de memória. Você não pode perceber o conteúdo de uma memória roubada, mas ela permanece irrecuperável até que você escolha devolvê-la. Esta dádiva pode ser usada em um alvo apenas uma vez por cena e só pode ser dissipada defensivamente por Palavras relacionadas a roubo, trapaça ou engano."
        }
      ]
    }
  },
  {
    id: "time",
    name: "Tempo (Time)",
    shortDesc: "A Palavra do tempo, permitindo enxergar o futuro, manipular o passado e garantir imunidade a efeitos temporais.",
    description: "Time é uma Palavra complexa, que governa eventos do passado e do futuro. Embora dádivas temporais muitas vezes possam ver o futuro, tais resultados não são fixos. Previsões podem ser superadas por eventos e escolhas, embora algumas dádivas de Time permitam ao usuário fixar a certeza de um futuro, a menos que sua vontade seja superada por um poder mais forte. Milagres de Time podem alterar o passado e reescrever eventos anteriores, mas geralmente é necessário manipular eventos específicos em vez de simplesmente decretar uma ampla faixa da história. A manipulação temporal não pode matar pessoas ou apagar coisas de grande poder oculto, mas pode alterar como os eventos passados se desenrolaram. Heróis com a Palavra Time sempre sabem a hora exata e são imunes a quaisquer usos desta Palavra para afetá-los ou espreitá-los. Eles podem definir sua Sabedoria para 16, ou para 18 se já for 16 ou superior.",
    gifts: {
      lesser: [
        {
          name: "Ecos do Passado (Echoes of the Past)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Escolha um momento específico ou evento conhecido no passado que ocorreu neste local e testemunhe-o como se você estivesse presente."
        },
        {
          name: "Previsão Imediata (Immediate Foresight)",
          type: "Constante",
          content: "Você não pode ser surpreendido. Sua classe de armadura natural é 3, pois você evita instintivamente os golpes previstos. Armadura e escudos não auxiliam esta CA."
        },
        {
          name: "Olhar para Frente (Look Forward)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia. Faça uma pergunta sobre o resultado futuro de uma situação ou sobre as ações futuras de uma pessoa que você já viu antes. O Mestre dá uma resposta de uma frase sobre o resultado mais provável ou as ações que parecem prováveis a ele."
        },
        {
          name: "Insight Profético (Prophetic Insight)",
          type: "No Turno",
          content: "Comprometa Esforço pelo dia. Faça uma profecia sobre um evento específico envolvendo uma pessoa presente. Ela se concretizará se não for completamente improvável. Se envolver diretamente um inimigo poderoso relutante, ele pode fazer um teste de resistência de Espírito para interromper o efeito. Eventos que envolvam imediatamente mais de cem pessoas não podem ser ordenados dessa forma, nem a morte inevitável ou a grande ruína de uma pessoa podem ser preditas, a menos que elas contem como inimigos menores. Mesmo assim, é concedido a elas um teste de resistência de Espírito."
        },
        {
          name: "Reflexo do Arrependimento (Reflex of Regret)",
          type: "No Turno",
          content: "Comprometa Esforço para a cena. Repita sua ação para aquela rodada como se suas ações nunca tivessem ocorrido. Você pode usar esta dádiva apenas uma vez por rodada, e não pode usá-la se estiver morto ou incapacitado."
        },
        {
          name: "Hora Murchante (Withering Hour)",
          type: "No Turno",
          content: "Comprometa Esforço. Sua arma, olhar ou golpes desarmados são tratados como armas mágicas causando 1d10 de dano a um alcance de até 60 metros (200 pés). Aqueles feridos por este efeito envelhecem ou decaem mais, até mesmo imortais se desgastando. Em vez de matar uma vítima com isso, você pode envelhecê-la arbitrariamente."
        }
      ],
      greater: [
        {
          name: "Uma Mão na Balança (A Hand on the Balance)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia, escolha uma única criatura ou objeto visível e defina um resultado ou evento específico envolvendo esse alvo, por mais amplo ou restrito que seja. Se esse resultado ou evento estiver prestes a ocorrer, você se torna instantaneamente ciente dele e pode realizar uma ação como se estivesse em pé ao lado do alvo. Você pode atacar o alvo, manipular um objeto, usar uma dádiva, invocar um milagre ou fazer qualquer outra coisa que possa fazer em uma ação, afetando o alvo e qualquer outra pessoa presente, embora você não esteja realmente lá e não possa ser percebido ou afetado. Este poder pode afetar um determinado alvo apenas uma vez por dia, e você não pode ter várias aplicações da dádiva em um único alvo."
        },
        {
          name: "Momento Partido (Sundered Moment)",
          type: "No Turno",
          content: "Comprometa Esforço para a cena. Execute sua ação para a rodada, depois reinicie o tempo para o seu início e execute a ação de outra rodada. Escolha sua rodada preferida; os resultados dela se tornam reais enquanto a outra deixa de existir, mesmo que você tenha perecido nela. No entanto, você se lembra de ambas as rodadas. Usar esta dádiva mais de uma vez por cena aumenta o custo de Esforço para um Comprometimento de dia inteiro."
        },
        {
          name: "Retecer o Tempo (Reweave Time)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia e escolha um evento na área que tenha ocorrido na última hora. Você pode retecer o passado para produzir um resultado diferente para o evento, desde que o resultado que você ordene seja possível. Tal retecimento não pode matar ou ressuscitar criaturas, não pode restaurar Esforço Comprometido e deve ser restrito a um evento de no máximo 15 minutos de duração. Um inimigo poderoso hostil envolvido nos eventos pode fazer um teste de resistência de Espírito para frustrar o retecimento."
        }
      ]
    }
  },
  {
    id: "underworld",
    name: "Submundo (Underworld)",
    shortDesc: "A Palavra do Submundo, focada em cavernas, escuridão, tesouros ocultos e vida sem visão, concedendo sentidos espaciais e imunidade a perigos subterrâneos.",
    description: "A Palavra de the Underworld é algo mais restrito do que a Palavra de Earth, focada nos conceitos de cavernas, escuridão, tesouros enterrados e vida sem visão. Ela pode moldar e dar forma à pedra bruta tanto quanto a Palavra de Earth, mas carece da força da rocha ou do poder de criar grandes massas de pedra. Em vez disso, ela ganha domínio sobre a escuridão abaixo, as joias ocultas da terra e o terror sufocante de um túmulo sem ar e sem luz. Quando mata, ela mata com vapores mefíticos e calor letal das fendas que se abrem no fundo do mundo. Embora as dádivas aqui não exemplifiquem tais poderes, a Palavra de the Underworld também pode convocar feras habitantes de cavernas para servir ao Godbound que está ligado a ela. Godbound of the Underworld têm um senso intuitivo de seus arredores até o alcance visual, cientes de todos os objetos como se por consciência espacial direta. Esse sentido não pode perceber cores, mas é minucioso o suficiente para sentir padrões de tinta no papel. Eles não exigem ar, comida ou água, e têm uma defesa invulnerável contra danos causados ​​por pedra, terra ou perigos ambientais subterrâneos.",
    gifts: {
      lesser: [
        {
          name: "Bênção do Sem Olhos (Blessing of the Eyeless)",
          type: "Constante",
          content: "Você ganha uma defesa invulnerável contra calor e corrosivos, mesmo aqueles que não fazem parte de um perigo subterrâneo. Como uma ação de No Turno, você pode Comprometer Esforço para estender seus sentidos sem visão e o desrespeito por ar e sustento aos seus companheiros enquanto o Esforço permanecer Comprometido."
        },
        {
          name: "Perfurador Subterrâneo (Borer Beneath)",
          type: "Constante",
          content: "Você pode passar através de terra ou pedra não trabalhada como se fosse espaço vazio. Se desejar, você deixa para trás um túnel autossustentável com um diâmetro ligeiramente maior do que sua altura; como uma ação Instantânea, você pode retirar o suporte de qualquer túnel que tenha feito e deixar o ambiente natural desmoroná-lo."
        },
        {
          name: "Artesão de Cavernas (Cavernwright)",
          type: "Ação",
          content: "Você remodela até um cubo de 20 pés de terra ou pedra não trabalhada por nível de personagem, destruindo-o ou manipulando-o como desejar. A mudança não é rápida o suficiente para servir como uma armadilha para inimigos móveis, mas se feita em uma barreira, ela tem pontos de vida iguais ao dobro do seu nível para cada pé de espessura, e só pode ser danificada por criaturas com ferramentas, habilidades ou força natural adequadas para romper."
        },
        {
          name: "Escuridão Ilimitável (Illimitable Darkness)",
          type: "Ação",
          content: "Comprometa Esforço para a cena para escurecer totalmente todas as luzes não divinas dentro de cem pés por nível de personagem pelo resto da cena, criando uma zona de negritude perfeita. Os fogos ainda queimam, mas não emitem absolutamente nenhuma luz, e nenhuma nova iluminação pode ser criada enquanto esta dádiva perdurar. Este raio de escuridão se move com você. Inimigos poderosos podem salvar versus Espírito para criar luz intencionalmente, mas apenas eles podem ver a luz que criam. Criaturas cegas geralmente são incapazes de usar ataques à distância e rolam ataques corporais duas vezes, pegando a pior jogada de acerto."
        },
        {
          name: "Terror Sufocante (Suffocating Terror)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e mire em uma única criatura visível ou em até uma Multidão Grande de inimigos menores. Os alvos devem salvar versus Espírito ou ficar cegos e tomados por uma sensação aterrorizante de aprisionamento sufocante. Criaturas afetadas são incapazes de realizar quaisquer ações e podem fazer um teste de Espírito no final de cada um de seus rounds para quebrar o efeito. Inimigos menores sofrem automaticamente o seu nível de personagem em pontos de vida de dano emocional, quer salvem ou não; se reduzidos a zero pontos de vida, eles entram em colapso em pânico desamparado pelo resto da cena antes de recuperarem 1 ponto de vida."
        },
        {
          name: "Tesouros da Terra (Treasures of the Earth)",
          type: "No Turno",
          content: "Comprometa Esforço para sentir intuitivamente a localização de quaisquer metais, pedras preciosas, água ou outras substâncias encontradas abaixo da terra dentro de um raio de 100 pés por nível de personagem. Você pode evocar até o seu nível de personagem em pontos de Riqueza (Wealth) dessas coisas a cada dia. Esses pontos de Riqueza não são considerados naturais para fins de abastecimento de tecnotelogia ou outras magias. Água ou outras substâncias não preciosas são limitadas a um cubo de dez pés por nível por dia."
        }
      ],
      greater: [
        {
          name: "Guardião de Tudo Abaixo (Keeper of All Beneath)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia e indique uma pessoa, objeto ou tipo de objeto específico que você seja fisicamente capaz de levantar. Se tal objeto estiver em qualquer lugar abaixo do nível do solo dentro de meia milha por nível de personagem, você o traz para fora da terra, independentemente de quão bem guardado ou escondido possa estar. Por outro lado, você pode em vez disso transportar a si mesmo e a seus companheiros para qualquer local subterrâneo escolhido dentro de meia milha por nível. Esta dádiva não pode mover você ou seus aliados mais de dez milhas no total por hora."
        },
        {
          name: "Vento Estígio (Stygian Wind)",
          type: "Ação (Golpe / Smite)",
          content: "Comprometa Esforço pelo dia. Você exala uma nuvem mortal de vapores subterrâneos superaquecidos, infligindo 1d10 de dano por nível de personagem em cada alvo escolhido em um cone de 30 pés de comprimento por nível e 30 pés de largura por nível na extremidade oposta. Esses vapores contam como dano de fogo, veneno e corrosivo, e destruirão qualquer coisa menos resistente do que um edifício de pedra."
        },
        {
          name: "Engolir a Cidade (Swallow the City)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia e mire em um local visível de até 30 pés de raio por nível de personagem. A terra se abre em um enorme buraco negro (sinkhole) que engole tudo dentro desse diâmetro. O buraco se forma de maneira relativamente lenta, de modo que alvos móveis dentro dele podem escapar se moverem-se pelo menos a 30 pés de distância do centro a cada round, mas estruturas e alvos imóveis despencam para a perdição. Você pode escolher para o buraco se fechar depois, ou permanecer um buraco de cem pés de profundidade. Se usado no mar, o vórtice que se forma arrastará para baixo qualquer navio imóvel acima dele."
        }
      ]
    }
  },
  {
    id: "vengeance",
    name: "Vingança (Vengeance)",
    shortDesc: "A Palavra da vingança, exigindo retribuição por crimes e punindo aqueles que infligem danos ou ofendem o Godbound.",
    description: "A Palavra de Vengeance exige uma prestação de contas por crimes. No entanto, não é justiça, mas sim pura vingança que esta Palavra governa: um ferimento por um ferimento, um pecado por um pecado. Um Godbound de Vengeance inflige dor e punição àqueles que cometeram um crime primeiro. A Palavra não ataca primeiro, mas frequentemente ataca por último. Muitos poderes de Vengeance envolvem ofensas ou crimes por parte de uma criatura. Cabe ao Godbound decidir o que constitui uma ofensa, e até mesmo atos totalmente inofensivos podem ser interpretados como um crime se o Godbound desejar considerá-los como tal. Outros poderes exigem que o Godbound tenha sofrido dano de pontos de vida ou sido alvo de um poder hostil; o Mestre (GM) decide o que conta para este último propósito. Godbound de Vengeance retribuem o que é devido. Seus ataques normais sempre acertam contra um alvo que lhes tenha infligido dano de pontos de vida na rodada passada.",
    gifts: {
      lesser: [
        {
          name: "Sangue por Sangue (Blood for Blood)",
          type: "Ação",
          content: "Uma vez por cena, mire em uma criatura que acabou de infligir dano de pontos de vida a você ou a um aliado no round anterior. Essa criatura sofre automaticamente a mesma quantidade de dano que infligiu à vítima específica no último round. Inimigos poderosos podem fazer um teste de Espírito para reduzir à metade, arredondando para cima."
        },
        {
          name: "Perdão Condicional (Conditional Forgiveness)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia e mire em uma criatura visível, nomeando uma ofensa que ela cometeu. Se ela cometer novamente um ato substancialmente semelhante, ela perecerá imediatamente ou sofrerá alguma maldição menor a seu critério. A ofensa nomeada não deve ser um ato necessário para sua sobrevivência contínua ou saúde física. Inimigos poderosos podem fazer um teste de Espírito para resistir a este castigo divino."
        },
        {
          name: "Contra-ataque Furioso (Furious Counterstrike)",
          type: "No Turno",
          content: "Comprometa Esforço para a cena. Pelo resto da cena, sempre que você for atingido por um ataque normal e sofrer dano, você ganha um ataque normal Instantâneo em retribuição ao culpado que inevitavelmente acerta."
        },
        {
          name: "Manto de Nêmesis (Mantle of Nemesis)",
          type: "Instante",
          content: "Comprometa Esforço para a cena e mire em um oponente que tenha infligido dano de pontos de vida ou dano a você ou a um companheiro durante essa mesma cena. Você anula instantaneamente uma habilidade que o alvo está usando, como se tivesse dissipado com sucesso, defensiva ou ofensivamente, qualquer poder que ele esteja usando. Esta dádiva só pode ser usada uma vez por cena em um dado alvo."
        },
        {
          name: "Medida por Medida (Measure for Measure)",
          type: "Constante",
          content: "Quando você falha ou abre mão de um teste de resistência contra um efeito hostil, o atacante falha automaticamente em seu próximo teste de resistência contra um poder que você usa contra ele. Eles ainda podem Comprometer Esforço para ter sucesso automático se tiverem tal habilidade e Esforço disponível."
        },
        {
          name: "Violência Santificada (Sanctified Violence)",
          type: "Constante",
          content: "Até suas palavras flagelam aqueles que incorrem em sua ira. Seus ataques com armas ou desarmados contam como uma arma mágica de 1d10 com um alcance de até 200 pés. Se você matar um alvo que primeiro iniciou a violência contra você nesta cena, seja com esta dádiva ou outro poder, inimigos menores que o vejam ou saibam disso serão incapazes de considerar a morte como ilegal, injusta ou socialmente inapropriada."
        },
        {
          name: "Mancha do Pecado (Stain of the Sin)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e mire em uma criatura visível, acusando-a de uma ofensa particular. Se a criatura realmente realizou o ato, ela é marcada com uma marca mística incognoscível (ou imperceptível de ser ocultada). Esta marca transmite automaticamente a verdade da acusação a todos os espectadores, fornecendo prova inegável a todos que a contemplam. Inimigos poderosos podem Comprometer Esforço pelo dia para resistir a este poder ou apagar uma marca existente."
        }
      ],
      greater: [
        {
          name: "Vingança Sangrenta (Bloody Vengeance)",
          type: "No Turno",
          content: "Comprometa Esforço para a cena e mire em uma criatura que tenha infligido dano de pontos de vida em você ou usado um poder hostil contra você dentro da mesma cena. Pelo resto da cena, seus ataques normais têm sucesso automático e causam dano máximo, e quaisquer dados de dano causados por poderes são rolados duas vezes e o melhor resultado é considerado."
        },
        {
          name: "Prestação de Contas Final (Final Reckoning)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e mire em uma criatura que você já viu antes, nomeando um ato particular que ela cometeu que você acha ofensivo. Se ela realmente cometeu o ato, a criatura é atingida imediatamente por uma maldição ou infortúnio de sua escolha, incluindo eventos letais. Inimigos menores não podem resistir a isso, enquanto inimigos poderosos podem salvar versus Espírito para escapar da vingança. A maldição pode influenciar o comportamento de inimigos menores ao redor da vítima para cumprir qualquer sentença que você determine sobre eles, mas não pode influenciar inimigos poderosos."
        },
        {
          name: "Perseguição da Fúria (Pursuit of the Fury)",
          type: "No Turno",
          content: "Comprometa Esforço e escolha uma criatura que tenha causado uma ofensa particular contra você ou outra pessoa. Enquanto o Esforço permanecer comprometido, você tem uma consciência constante da localização do alvo e do caminho mais rápido para alcançá-lo. Você pode dissipar quaisquer barreiras mágicas que estejam entre vocês, destruir até dez pés por round de qualquer coisa aquém de materiais divinos que bloqueiem seu caminho, e você pode voar se necessário para alcançar o alvo. O alvo não pode se afastar mais de você e de seus companheiros, a menos que você permita; se eles se afastarem, você poderá segui-los magicamente à mesma distância. Assim, se você estiver ao lado deles quando eles se teleportarem para longe, você e seus aliados podem se teleportar com eles, enquanto fugir a cavalo fará com que você e seus aliados persigam magicamente na velocidade do cavalo."
        }
      ]
    }
  },
  {
    id: "war",
    name: "Guerra (War)",
    shortDesc: "A Palavra da guerra como um choque de multidões, tornando o Godbound imbatível contra exércitos e capaz de comandar legiões de soldados.",
    description: "A Palavra de War não é sobre proeza individual em batalha ou o poder de um comandante heroico. É sobre a Guerra como um conceito abstrato, como um choque de multidões em um campo sangrento e a vida e morte de massas de homens. Godbound of War podem não ser pessoalmente impressionantes em combate singular, mas contra formações de inimigos armados são agentes imparáveis de destruição tática, capazes de extinguir sozinhos exércitos inteiros de inimigos menores. Apenas heróis independentes e combatentes solitários podem esperar derrotar um Deus da Guerra no campo, e os exércitos que eles lideram são invencíveis contra todas as formações de inimigos, exceto as apoiadas divinamente. Godbound de War podem elevar suas pontuações de Inteligência ou Sabedoria para 16, ou para 18 se a pontuação já for 16 ou maior. Eles concedem automaticamente uma pontuação de Moral de 12 a todos os NPCs aliados sob seu comando. Muitas de suas dádivas se aplicam a soldados em seu serviço, status que inclui qualquer criatura armada para serviço militar que se considere sujeita às ordens do Godbound. PCs nunca são incluídos nesta definição, mas ainda podem se qualificar como companheiros.",
    gifts: {
      lesser: [
        {
          name: "Marcha Forçada (Forced March)",
          type: "Constante",
          content: "Você e quaisquer companheiros ou soldados que estiverem sob sua liderança podem marchar por terra a vinte milhas por hora, sem exigir sono ou sustento. Você pode cruzar facilmente qualquer terreno que não seja uma fortificação criada por humanos, independentemente da hostilidade ou perigo ambiental do terreno. Você não pode usar esta dádiva se estiver sozinho e sem companheiros."
        },
        {
          name: "Escolta do General (General's Escort)",
          type: "Ação",
          content: "Comprometa Esforço pelo dia. Você convoca uma ou mais Multidões Pequenas de soldados divinos que são suicidamente leais a você, criando uma Multidão para cada três níveis que você possui, arredondado para cima. Essas Multidões têm as estatísticas de soldados veteranos, um bônus de acerto igual ao seu nível de personagem, armas mágicas para os propósitos de ferir criaturas sobrenaturais e podem realizar qualquer serviço que servos humanos pudessem. Esta dádiva pode ser usada apenas uma vez por dia, e não mais do que o número máximo permitido de Multidões pode existir ao mesmo tempo. Uma Multidão Grande pode ser convocada no lugar de duas Multidões Pequenas, e uma Multidão Vasta no lugar de duas Grandes. Os soldados criados por esta dádiva podem ou não ter identidades individuais, dependendo da preferência do Godbound, mas, se forem mortos, esses indivíduos ainda podem ser re-convocados com o próximo uso desta dádiva."
        },
        {
          name: "Conhecer o Terreno (Know the Terrain)",
          type: "Ação",
          content: "Você se concentra brevemente e obtém um mapa mental perfeito do terreno ao seu redor em um raio de duas milhas por nível de personagem. Este mapa faz com que você perceba qualquer coleção de criaturas do tamanho de uma Multidão de interesse para você e fornece uma consciência perfeita das localizações de qualquer um de seus soldados, independentemente da distância deles em relação a você. A resolução deste mapa mental é fina o suficiente para identificar pontos fracos nas fortificações de uma estrutura, mas não é detalhada o suficiente para servir como um mapa interno de um edifício construído."
        },
        {
          name: "Visão Estratégica (Strategic Insight)",
          type: "Ação",
          content: "Mire em um grupo visível de criaturas armadas. Você se torna imediatamente tão ciente dos objetivos e táticas pretendidas do grupo quanto o líder mais bem informado entre eles. Assim, se você visar um exército contendo um grande marecal inimigo, você poderá obter o esboço estratégico completo do oponente."
        },
        {
          name: "Voz de Comando (Voice of Command)",
          type: "Ação",
          content: "Emita um comando a uma criatura visível que se considere um soldado ou guerreiro, ou a até uma Multidão Pequena de tais inimigos menores. A criatura cumpre o comando até que ele seja concluído ou o Godbound a liberte, mesmo que seja suicida, e o fará da melhor maneira possível dentro de suas habilidades e julgamento. Inimigos menores não recebem resistência a esta ordem, enquanto inimigos poderosos podem salvar versus Espírito para ficarem imunes a esta dádiva por uma cena. O comando é compreendido automaticamente por qualquer ouvinte inteligente."
        },
        {
          name: "Vontade do Trono da Lança (Will of the Spear-Throne)",
          type: "Ação",
          content: "Com um breve momento de foco, você pode fazer contato mental com qualquer soldado individual ou unidade particular em seu serviço, comunicando-se e emitindo comandos como desejar e compartilhando os sentidos deles conforme desejar. Você tem uma consciência constante de baixo nível da condição e das atividades dos soldados em seu comando e pode optar por ser alertado sobre quaisquer eventos particulares. Seus soldados não são magicamente compelidos a cumprir seus comandos, mas o farão em todas as situações normais."
        }
      ],
      greater: [
        {
          name: "Devorador de Legiões (Eater of Legions)",
          type: "Ação (Golpe / Smite)",
          content: "Comprometa Esforço pelo dia para destruir instantaneamente qualquer Multidão visível de inimigos menores que estejam engajados em combate com você ou seus aliados. Os alvos estão mortos ou irremediavelmente desmoralizados, conforme você escolher. Esta dádiva não pode ser usada como um milagre e não tem efeito sobre combatentes que não sejam Multidões."
        },
        {
          name: "Pavês de Sangue e Ferro (Pavis of Blood and Iron)",
          type: "Constante",
          content: "Multidões de soldados em seu serviço têm uma defesa invulnerável contra os ataques de criaturas que são inimigos menores para você enquanto você estiver presente no campo de batalha. Esta imunidade não beneficia soldados individuais, mas apenas formações aliadas do tamanho de Multidão Pequena ou maior. A maioria das forças hostis romperá e fugirá após alguns rounds de luta contra tropas obviamente invencíveis. Esta dádiva não pode ser usada como um milagre."
        },
        {
          name: "Os Escolhidos do Deus da Guerra (The War-God's Chosen)",
          type: "Constante",
          content: "Quando você está aliado a um grupo ou organização, eles ganham automaticamente a Característica \"Os Escolhidos do Deus da Guerra\" e podem aplicá-la a qualquer conflito apropriado envolvendo proeza militar. Esta Característica não pode ser destruída ou sacrificada. Forças militares opostas nunca contam como oposição desigual conforme a página 135 das regras básicas, de modo que nunca recebem um bônus por serem superiores a esta Característica. Esta Característica, no entanto, ainda pode ser superior ao oponente se o mestre julgar assim. Você pode conferir esta Característica a apenas uma facção aliada de cada vez, mas não precisa estar presente com ela para que se beneficie disso."
        }
      ]
    }
  },
  {
    id: "wealth",
    name: "Riqueza (Wealth)",
    shortDesc: "A Palavra da riqueza e da prosperidade, garantindo abundância material, provisões e a criação de objetos e valores.",
    description: "Wealth é a Palavra não apenas do ouro, mas da prosperidade de todos os tipos. Salmos estáveis, despensas cheias, roupas quentes e telhados resistentes são o escopo desta Palavra. Alguns de seus poderes interagem com o sistema de Facções na página 134, concedendo bênçãos ou maldições a cidades ou nações inteiras. Algumas dádivas de Wealth permitem a criação de objetos não mágicos, e um herói pode usar esses poderes para criar grandes somas de ouro ou outros materiais preciosos. Como regra geral, essas dádivas podem ser usadas para criar Wealth suficiente para realizar qualquer objetivo imediato desejado, mas a inflação causada por uma enxurrada tão repentina de joias do tamanho de um punho tornará futuros gastos artificiais de Wealth na área inúteis por algum tempo. Um herói que opera mais devagar, usando as dádivas para criar objetos reais de uso prático, não causa esse tipo de inflação. Tal Wealth criada é inútil para os propósitos de exercer Domínio, e não pode ser gasta para esse fim. Heróis com a Palavra Wealth nunca ficam sem dinheiro e sempre podem pagar qualquer coisa que custe 1 Wealth ou menos. Eles sempre têm comida, bebida e roupas suficientes para si mesmos e seus companheiros, tirando-os do nada, se necessário.",
    gifts: {
      lesser: [
        {
          name: "O Ofício de Fazer (The Craft to Make)",
          type: "Ação",
          content: "Comprometa Esforço. Você pode criar ou duplicar qualquer objeto inanimado mundano que já tenha visto antes em uma rodada, desde que não seja maior que uma carroça. O objeto é permanente se for criado principalmente a partir de materiais pré-existentes úteis. Se você fizer suas partes principais do nada, ele dura apenas enquanto o Esforço estiver comprometido."
        },
        {
          name: "Origem Sempre Suficiente (Ever-Sufficient Provenance)",
          type: "No Turno",
          content: "Comprometa Esforço. Você pode produzir quaisquer objetos mundanos ou animais domesticados de que precisar, desde que o Esforço permaneça comprometido, o suficiente para equipar ou montar cem pessoas por nível. Os objetos e criaturas desaparecem assim que o Esforço é recuperado. Os objetos não devem ser maiores do que um cavalo, e os animais são dóceis e impróprios para a guerra, embora possam ser abatidos ou usados para outros fins normais. Se o Esforço for deixado comprometido por tempo suficiente para que sejam comidos, elesAinda nutrirão seus consumidores após a recuperação do Esforço."
        },
        {
          name: "Reprodução Perfeita (Flawless Reproduction)",
          type: "Ação",
          content: "Comprometa Esforço e toque em um objeto não mágico ou animal doméstico não maior do que uma grande carroça. A cada minuto, um duplicado perfeito da coisa aparece em algum lugar perto do original até que o Esforço seja recuperado. Este duplicado persiste mesmo após o Esforço ser recuperado."
        },
        {
          name: "Abundância da Prosperidade (Prosperity's Abundance)",
          type: "Ação",
          content: "Gaste a Riqueza necessária para comprar um objeto ou serviço geralmente disponível, com um mínimo de 1 ponto, e faça-o aparecer instantaneamente. Os serviços são executados por mãos invisíveis com uma boa qualidade de trabalho, demorando o tempo que levaria para executar o trabalho normalmente. Apenas Riqueza \"real\" pode alimentar esta dádiva, não Riqueza criada por magia ou dádivas."
        },
        {
          name: "Sustentar a Multidão (Sustain the Multitude)",
          type: "No Turno",
          content: "Comprometa Esforço e abençoe uma facção com uma pontuação de Poder não superior a 2, afetando no máximo uma cidade. A facção ganha a Característica \"Nós sempre temos o suficiente para sobreviver\", fornecendo-lhes suprimentos suficientes de comida, roupas e outras necessidades, independentemente da desolação de seus arredores ou perdas recentes. Esta Característica pode ser usada para se defender durante conflitos relevantes, mas não pode ser sacrificada em caso de derrota, e dura enquanto o Godbound mantiver seu Esforço Comprometido."
        },
        {
          name: "Murchar a Bolsa (Wither the Purse)",
          type: "Ação",
          content: "Comprometa Esforço para a cena e mire em uma vítima à vista. Suas finanças sofrem perdas imediatas e drásticas, seja por ladrões, incêndio criminoso, infortúnio ou mau comércio. Eles perdem um ponto de Riqueza em posses por nível do Godbound. Inimigos poderosos podem fazer um teste de resistência de Espírito para resistir. Aqueles que administram o dinheiro de outros ou têm posses distantes perdem apenas seus próprios fundos pessoais ou aqueles na área imediata. Se usado contra alguém que controla diretamente a riqueza ou instalações de uma facção, sua facção perde o benefício de uma Característica relacionada à economia que a vítima supervisiona para o próximo turno da facção."
        }
      ],
      greater: [
        {
          name: "Sempre Suficiente (Forever Sufficient)",
          type: "Constante",
          content: "Você e seus companheiros sempre têm quaisquer objetos mundanos ou montarias de que precisam, desde que não sejam maiores do que um pequeno navio à vela. Sorte, presciência e proveniência estranha conspiram para trazer seus desejos exatamente quando você precisa deles, aparecendo todo objeto necessário em seus bolsos, mochilas ou arredores próximos. Esses objetos tendem a desaparecer ou se perder depois que você para de precisar deles, e eles não podem replicar outros objetos precisos, como chaves ou selos."
        },
        {
          name: "A Mão do Deus Dourado (The Golden God's Hand)",
          type: "Ação",
          content: "Comprometa Esforço e maldeça ou abençoe uma facção ou comunidade com uma pontuação de Poder não maior do que metade do seu nível, arredondado para cima. Você pode conceder a eles uma Característica benéfica relacionada à prosperidade ou riqueza, ou pode suprimir uma Característica existente que eles tenham que dependa de dinheiro ou grandes quantidades de recursos. As Características concedidas podem se defender, mas não podem ser sacrificadas em caso de derrota. As Encostas Empíreas (Empyrean Wards) não impedem este efeito, a menos que toda a área que está sendo amaldiçoada ou abençoada esteja protegida pela ala. A maldição ou bênção se manifesta muito rapidamente no curso de um dia e dura enquanto o Esforço permanecer Comprometido."
        },
        {
          name: "Ruína dos Ladrões (Thieves’ Bane)",
          type: "Constante",
          content: "Inimigos menores são totalmente incapazes de roubar você ou seus companheiros com sucesso por furtividade ou barganha fraudulenta. Sempre que qualquer inimigo poderoso tentar roubar ou fraudar monetariamente você ou seus companheiros, você capta uma visão imediata da tentativa e pode realizar uma única ação contra o ladrão como se estivesse em pé ao lado dele, embora ele não possa fazer nada contra você em retribuição. Se vários ladrões estiverem envolvidos, você ganha uma ação contra cada um. Ladrões que são inimigos poderosos podem fazer um teste de resistência de Espírito para escapar da sua atenção."
        }
      ]
    }
  },
  {
    id: "winter",
    name: "Inverno (Winter)",
    shortDesc: "A Palavra do inverno, comandando gelo, neve, o apodrecimento sazonal, paralisias e condições gélidas e desoladoras.",
    description: "A Palavra de Inverno comanda não apenas o gelo e a neve daquela estação, mas também o declínio, a decadência e a desidratação dos meses congelados. Ela mata plantas, congela a terra e açoita a terra com ventos gelados. Embora não mate criaturas diretamente como a Palavra de Death pode, ela cria as condições gélidas que não lhes deixam outra escolha senão murchar e perecer. Poderes de paralisia e imobilidade também estão entre suas graças, congelando as vítimas tão paradas e silenciosas quanto uma escultura de gelo recém-formado. O declínio que o Winter traz ocorre por meio da agência do frio e da luz esmaecida, em vez do colapso direto da Entropy ou do chamado direto de Death. Winter é inadequado para causar tipos de diminuição que o frio ou a mudança de estação não poderiam produzir. Godbound of Winter têm uma imunidade invulnerável ao frio e ao gelo. Como uma Ação Principal, eles podem congelar objetos e arredores em um raio de 30 pés; criaturas que não são impermeáveis ​​ao frio sofrem 1 ponto de dano, enquanto Mobs sofrem 3. Uma criatura ou Mob só pode sofrer esse dano uma vez por cena. Como uma Ação, eles podem conjurar ferramentas físicas simples e objetos de gelo em um raio de 30 pés, embora tais estruturas não possam servir como barreiras eficazes contra um inimigo determinado.",
    gifts: {
      lesser: [
        {
          name: "Geada Mortal (A Killing Frost)",
          type: "No Turno",
          content: "Comprometa Esforço. O Godbound pode manejar um frio letal como uma arma à distância dentro do campo de visão, infligindo 1d10 de dano e congelando líquidos e objetos atingidos. Contra criaturas vegetais ou aquelas excepcionalmente suscetíveis ao frio, esta habilidade sempre acerta e causa o dobro de dano."
        },
        {
          name: "Correntes de Gelo (Chains of Ice)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Até uma Multidão Pequena de inimigos menores ou um único inimigo poderoso pode ser preso no gelo, com inimigos poderosos recebendo um teste de Vigor (Hardiness) para resistir. Inimigos presos não podem realizar nenhuma ação que exija movimento físico e, a critério do Godbound, podem sofrer 1 ponto de dano por round por nível do Godbound, ou 3 por nível para Multidões. Inimigos reduzidos a zero pontos de vida estão mortos ou dormentes até a desamparo, à escolha do Godbound. Inimigos presos podem fazer um teste de Vigor no final de cada um de seus rounds para se libertarem; se bem-sucedidos, podem agir novamente durante seu próximo turno."
        },
        {
          name: "Escultor de Gelo (Ice Sculptor)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. Como uma ação, o Godbound pode conjurar até um cubo de vinte pés de gelo ou neve em qualquer formato que desejar. Se transformado em uma barreira de pelo menos um pé de espessura, ela absorve três vezes o nível do Godbound em dano antes que um buraco do tamanho de uma criatura seja aberto através dela, e inimigos menores não podem danificá-la a menos que tenham ferramentas específicas ou fontes de calor adequadas para isso. A estrutura durará permanentemente em ambientes abaixo de congelamento, caso contrário, desmoronando em um dia e derretendo inteiramente em dois."
        },
        {
          name: "Mandíbula do Inverno (Maw of Winter)",
          type: "Instante",
          content: "Uma vez por combate, a critério do Godbound, quando o Godbound mata uma criatura viva ou Multidão, ele ganha seus dados de vida (HD) máximos como pontos de vida bônus. Se o novo total do Godbound for maior que seu máximo normal, quaisquer pontos em excesso são perdidos após o combate."
        },
        {
          name: "Corredor da Neve (Snowrunner)",
          type: "No Turno",
          content: "Comprometa Esforço. O Godbound e quaisquer aliados a até dez pés quando a dádiva for usada tornam-se capazes de passar através de gelo ou neve como se fosse intangível, e podem ascender até superfícies congeladas verticais como se fossem planas. Enquanto estiver nevando ou com granizo, eles podem voar ao dobro de sua taxa de movimento normal enquanto o Esforço permanecer Comprometido."
        },
        {
          name: "Gelo Ileso (Unbroken Ice)",
          type: "Constante",
          content: "A carne dura do Godbound tem uma CA natural de 3, e seu frio sem fundo concede imunidade invulnerável ao fogo."
        }
      ],
      greater: [
        {
          name: "Fimbulwinter",
          type: "Ação",
          content: "Comprometa Esforço pelo dia. Um raio de até uma milha por nível do Godbound é mergulhado no pleno inverno, com temperaturas abaixo de congelamento e o acúmulo imediato de vários pés de neve e gelo. Quaisquer plantas na área morrem imediatamente ou entram em suas fases de inverno e quase todos os animais presos ali morrerão dentro de dias, a menos que estejam preparados para o inverno. A viagem por pessoas não equipadas é quase impossível, e pessoas não preparadas e sem abrigo morrerão em horas. Este inverno dura até que o Godbound ceda ou a habilidade seja usada novamente. Opcionalmente, o Godbound pode apenas criar tempestades de neve ou depósitos de neve conforme desejar dentro desse alcance. Esta dádiva não pode ser usada como um milagre."
        },
        {
          name: "Em uma Neve Leve, Três Mil Mundos (In a Light Snow, Three Thousand Worlds)",
          type: "No Turno",
          content: "Comprometa Esforço. O Godbound pode perceber qualquer local no reino onde haja gelo, neve ou temperaturas abaixo de congelamento como se estivesse lá em pé. Sua voz é audível ali em rajadas de frio glacial, e uma vez por dia ele pode Comprometer Esforço pelo dia para usar uma dádiva ou milagre de Inverno como se estivesse presente, comprometendo o Esforço usual para seu uso. Esta dádiva pode até alcançar diferentes mundos, desde que o Godbound tenha estado no local específico que observa antes. Esta dádiva não pode ser usada como um milagre."
        },
        {
          name: "Dentro daquele Mundos, Cai Neve Leve (Within Those Worlds, Light Snow Falls)",
          type: "Ação",
          content: "Comprometa Esforço para a cena. O Godbound se dissocia em uma rajada de neve e gelo, reaparecendo em qualquer lugar dentro de dez milhas por nível onde uma quantidade de neve ou gelo do tamanho de um humano tenha existido nos últimos doze meses. Se houver um cinturão ininterrupto de neve ou gelo existente entre o Godbound e seu local de destino, o alcance é ilimitado."
        }
      ]
    }
  }
];