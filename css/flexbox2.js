Alinhando itens em um contêiner flexível
Uma das razões pelas quais o flexbox rapidamente atraiu o interesse dos desenvolvedores da web é que ele trouxe recursos de alinhamento adequados para a web pela primeira vez. Ele permitiu o alinhamento vertical adequado, para que possamos finalmente centralizar facilmente uma caixa. Neste guia, examinaremos detalhadamente como as propriedades de alinhamento e justificação funcionam no Flexbox.

Para centralizar nossa caixa usamos a align-itemspropriedade para alinhar nosso item no eixo cruzado, que neste caso é o eixo do bloco que corre verticalmente. Usamos justify-contentpara alinhar o item no eixo principal, que neste caso é o eixo embutido na horizontal.


.box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .box div {
    width: 100px;
    height: 100px;
  }
      
  











  Propriedades que controlam o alinhamento
As propriedades que veremos neste guia são as seguintes.

justify-content— controla o alinhamento de todos os itens no eixo principal.
align-items— controla o alinhamento de todos os itens no eixo cruzado.
align-self— controla o alinhamento de um item flexível individual no eixo cruzado.
align-content— descrito na especificação como para "empacotar linhas flexíveis"; controla o espaço entre as linhas flexíveis no eixo transversal.
gap, column-gap, e row-gap— usado para criar lacunas ou medianizes entre itens flexíveis.
Também descobriremos como as margens automáticas podem ser usadas para alinhamento no flexbox.















O Eixo Cruzado
As propriedades align-itemse align-selfcontrolam o alinhamento de nossos itens flexíveis no eixo cruzado, descendo as colunas se flex-directionfor rowe ao longo da linha se flex-directionfor column.

Estamos fazendo uso do alinhamento de eixo cruzado no exemplo flex mais simples. Se adicionarmos display: flexa um contêiner, todos os itens filhos se tornarão itens flexíveis organizados em uma linha. Todos eles se estenderão para serem tão altos quanto o item mais alto, pois esse item está definindo a altura dos itens no eixo cruzado. Se o seu contêiner flexível tiver uma altura definida, os itens serão estendidos até essa altura, independentemente da quantidade de conteúdo no item.


A razão pela qual os itens ficam com a mesma altura é que o valor inicial de align-items, a propriedade que controla o alinhamento no eixo cruzado, é definido como stretch.

Podemos usar outros valores para controlar como os itens se alinham:

align-items: flex-start
align-items: flex-end
align-items: center
align-items: stretch
align-items: baseline

No exemplo ao vivo abaixo, o valor de align-itemsé stretch. Experimente os outros valores e veja como todos os itens se alinham no contêiner flex.

.box {
    display: flex;
    align-items: flex;
  }
















  Alinhando um item comalign-self
A align-itemspropriedade define a align-selfpropriedade em todos os itens flexíveis como um grupo. Isso significa que você pode declarar explicitamente a align-selfpropriedade para direcionar um único item. A align-selfpropriedade aceita todos os mesmos valores align-itemsmais um valor de auto, que irá redefinir o valor para aquele que está definido no contêiner flex.

Neste próximo exemplo ao vivo, o contêiner flex tem align-items: flex-start, o que significa que os itens estão todos alinhados ao início do eixo cruzado. Eu direcionei o primeiro item usando um first-childseletor e configurei esse item para align-self: stretch; outro item foi selecionado usando sua classe de selectede dado align-self: center. Você pode alterar o valor de align-itemsou alterar os valores de align-selfnos itens individuais para ver como isso funciona.

exemplo

.box {
    display: flex;
    align-items: flex-start;
    height: 200px;
  }
  .box>*:first-child {
      align-self: stretch;
  }
  .box .selected {
      align-self: center;
  }
      
  














  Alterando o eixo principal

Até agora vimos o comportamento quando nosso flex-directioné row, e enquanto trabalhamos em uma linguagem escrita de cima para baixo. Isso significa que o eixo principal percorre a linha horizontalmente e nosso alinhamento de eixo cruzado move os itens para cima e para baixo.


Se mudarmos nossa flex-directioncoluna, align-itemse align-selfalinharemos os itens à esquerda e à direita.

Você pode tentar isso no exemplo abaixo, que tem um contêiner flex, flex-direction: columnmas de outra forma é exatamente o mesmo que o exemplo anterior.

.box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 200px;
  }
  .box>*:first-child {
      align-self: stretch;
  }
  .box .selected {
      align-self: center;
  }
















  Alinhando conteúdo no eixo cruzado — a propriedade align-content
Até agora estamos alinhando os itens, ou um item individual dentro da área definida pelo flex-container. Se você tiver um contêiner flexível de várias linhas encapsulado, também poderá usar a align-contentpropriedade para controlar a distribuição de espaço entre as linhas. Na especificação, isso é descrito como linhas flexíveis de embalagem .

Para align-contenttrabalhar, você precisa de mais altura em seu contêiner flexível do que o necessário para exibir os itens. Em seguida, ele funciona em todos os itens como um conjunto e determina o que acontece com esse espaço livre e o alinhamento de todo o conjunto de itens dentro dele.

A align-contentpropriedade assume os seguintes valores:

align-content: flex-start
align-content: flex-end
align-content: center
align-content: space-between
align-content: space-around
align-content: stretch
align-content: space-evenly(não definido na especificação Flexbox)
No exemplo ao vivo abaixo, o contêiner flex tem uma altura de 400 pixels, o que é mais do que o necessário para exibir nossos itens. O valor de align-contenté space-between, o que significa que o espaço disponível é compartilhado entre as linhas flexíveis, que são colocadas alinhadas com o início e o fim do contêiner no eixo cruzado.

Experimente os outros valores para ver como a align-contentpropriedade funciona.


.box {
    display: flex;
    flex-wrap: wrap;
    height: 400px;
    align-content: space-between;
  }
     















  Alinhando o conteúdo no eixo principal
Agora que vimos como o alinhamento funciona no eixo cruzado, podemos dar uma olhada no eixo principal. Aqui temos apenas uma propriedade disponível para nós — justify-content. Isso ocorre porque estamos lidando apenas com itens como um grupo no eixo principal. Com justify-contentnós controlamos o que acontece com o espaço disponível, caso haja mais espaço do que o necessário para exibir os itens.

Em nosso exemplo inicial com display: flexo contêiner, os itens são exibidos como uma linha e todos se alinham no início do contêiner. Isso se deve ao valor inicial de justify-contentser flex-start. Qualquer espaço disponível é colocado no final dos itens.

Três itens, cada um com 100 pixels de largura em um contêiner de 500 pixels.  O espaço disponível está no final dos itens.
A justify-contentpropriedade aceita os mesmos valores que align-content.

justify-content: flex-start
justify-content: flex-end
justify-content: center
justify-content: space-between
justify-content: space-around
justify-content: space-evenly(não definido na especificação Flexbox)


.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 500px;
  }
















  Usando margens automáticas para alinhamento do eixo principal
  Não temos uma propriedade justify-itemsou justify-selfdisponível para nós no eixo principal, pois nossos itens são tratados como um grupo nesse eixo. No entanto, é possível fazer algum alinhamento individual para separar um item ou um grupo de itens de outros usando margens automáticas junto com o flexbox.
  
  Um padrão comum é uma barra de navegação onde alguns itens-chave são alinhados à direita, com o grupo principal à esquerda. Você pode pensar que este deve ser um caso de uso para uma justify-selfpropriedade, mas considere a imagem abaixo. Tenho três itens de um lado e dois do outro. Se eu pudesse usar justify-selfno item d , também mudaria o alinhamento do item e que segue, o que pode ou não ser minha intenção.

  Em vez disso, podemos segmentar o item 4 e separá-lo dos três primeiros itens, dando-lhe um margin-leftvalor de auto. As margens automáticas ocuparão todo o espaço que puderem em seu eixo - é assim que funciona a centralização de um bloco com margem automática esquerda e direita. Cada lado tenta ocupar o máximo de espaço possível e, assim, o bloco é empurrado para o meio.

Neste exemplo ao vivo, tenho itens flex organizados em uma linha com os valores flex básicos e a classe pushtem margin-left: auto. Você pode tentar remover isso ou adicionar a classe a outro item para ver como funciona.

display: flex;
}
.push {
    margin: auto;
}
    














Criando lacunas entre os itens

Para criar uma lacuna entre itens flexíveis, use as propriedades gap, column-gape row-gap. A column-gappropriedade cria lacunas entre os itens no eixo principal. A row-gappropriedade cria espaços entre as linhas flexíveis, quando você flex-wrapdefine como wrap. A gappropriedade é uma abreviação que define os dois juntos.

.box {
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 2em;
  }
  
  .box > * {
    flex: 1;
  }
  