A sintaxe para declarar e acessar uma propriedade customizada é realmente simples e não muito diferente de como escrevemos declarações de regras normais:

.error-modal {
    --color-error-text: red;
    --modal-border: 1px solid black;
    --modal-font-size: calc(2rem + 5vw);
  
    color: var(--color-error-text);
    border: var(--modal-border);
    font-size: var(--modal-font-size);
  }


  É isso! Primeiro, declaramos nossa propriedade customizada com um hífen duplo seguido por um nome de propriedade com distinção entre maiúsculas e minúsculas e separado por hífen ( color-error-textnão seria o mesmo que Color-Error-Text). O uso de hífens simples para separar palavras é muito importante aqui porque espaços não são válidos ( --color error textnão funcionaria). Em seguida, podemos armazenar qualquer valor CSS válido em nossa propriedade customizada recém-declarada, seja um valor de cor simples, valores abreviados ou até mesmo uma função mais complexa, apenas para dar alguns exemplos.

Quando queremos acessar uma propriedade personalizada, usamos a var()função como o valor de uma propriedade CSS e, em seguida, colocamos nossa propriedade personalizada dentro dos parênteses (incluindo o hífen duplo no início).














Valores de reserva
A var()função realmente aceita dois parâmetros. O primeiro parâmetro que já examinamos, que é a propriedade personalizada que queremos atribuir. O segundo parâmetro é um valor de fallback opcional. Quando um valor de fallback é fornecido além de uma propriedade personalizada, o valor de fallback será usado se a propriedade personalizada for inválida ou ainda não tiver sido declarada. Podemos até passar outra propriedade personalizada como fallback, que também pode ter seu próprio valor de fallback!

.fallback {
  --color-text: white;

  background-color: var(--undeclared-property, black);
  color: var(--undeclared-again, var(--color-text, yellow));
}
No exemplo acima, nossa background-colorpropriedade teria um valor de blacke nossa colorpropriedade teria um valor de white. Se a --color-textpropriedade personalizada fosse inválida ou não existisse, o substituto para nosso substituto assumiria o controle e a colorpropriedade teria um valor de yellow.












Introdução
Propriedades personalizadas (também conhecidas como variáveis ​​CSS) podem ser uma ferramenta realmente útil e poderosa ao escrever nossos arquivos CSS. Em resumo, eles nos permitem referenciar um valor CSS quantas vezes quisermos em um arquivo. Ao usar propriedades personalizadas, em vez de ter que atualizar cada instância de um valor específico (“Este tom de vermelho é muito claro, vamos alterar o tom em todos os sete desses seletores”), precisamos atualizar apenas uma única instância: o própria propriedade personalizada. Não apenas isso, mas as propriedades personalizadas podem nos ajudar a manter as cores consistentes em todo o projeto, algo que será realmente útil à medida que os projetos forem ficando maiores.

Podemos até redefinir propriedades personalizadas em diferentes contextos, o que é incrivelmente útil para criar temas, como os temas escuros e claros que você vê em muitos sites atualmente.

Resultados de Aprendizagem
Você aprenderá como declarar uma propriedade personalizada
Você aprenderá como acessar uma propriedade personalizada em uma declaração de regra
Usando propriedades personalizadas
A sintaxe para declarar e acessar uma propriedade customizada é realmente simples e não muito diferente de como escrevemos declarações de regras normais:

.error-modal {
  --color-error-text: red;
  --modal-border: 1px solid black;
  --modal-font-size: calc(2rem + 5vw);

  color: var(--color-error-text);
  border: var(--modal-border);
  font-size: var(--modal-font-size);
}
É isso! Primeiro, declaramos nossa propriedade customizada com um hífen duplo seguido por um nome de propriedade com distinção entre maiúsculas e minúsculas e separado por hífen ( color-error-textnão seria o mesmo que Color-Error-Text). O uso de hífens simples para separar palavras é muito importante aqui porque espaços não são válidos ( --color error textnão funcionaria). Em seguida, podemos armazenar qualquer valor CSS válido em nossa propriedade customizada recém-declarada, seja um valor de cor simples, valores abreviados ou até mesmo uma função mais complexa, apenas para dar alguns exemplos.

Quando queremos acessar uma propriedade personalizada, usamos a var()função como o valor de uma propriedade CSS e, em seguida, colocamos nossa propriedade personalizada dentro dos parênteses (incluindo o hífen duplo no início).

Valores de reserva
A var()função realmente aceita dois parâmetros. O primeiro parâmetro que já examinamos, que é a propriedade personalizada que queremos atribuir. O segundo parâmetro é um valor de fallback opcional. Quando um valor de fallback é fornecido além de uma propriedade personalizada, o valor de fallback será usado se a propriedade personalizada for inválida ou ainda não tiver sido declarada. Podemos até passar outra propriedade personalizada como fallback, que também pode ter seu próprio valor de fallback!

.fallback {
  --color-text: white;

  background-color: var(--undeclared-property, black);
  color: var(--undeclared-again, var(--color-text, yellow));
}
No exemplo acima, nossa background-colorpropriedade teria um valor de blacke nossa colorpropriedade teria um valor de white. Se a --color-textpropriedade personalizada fosse inválida ou não existisse, o substituto para nosso substituto assumiria o controle e a colorpropriedade teria um valor de yellow.

Alcance
No primeiro exemplo acima, você deve ter notado que declaramos e acessamos nossas propriedades personalizadas dentro do mesmo bloco de declaração. Isso ocorre porque o escopo de uma propriedade personalizada é determinado pelo seletor. Esse escopo inclui o seletor para o qual a propriedade customizada foi declarada, bem como quaisquer descendentes desse seletor. Se você estiver familiarizado com o funcionamento do escopo em JavaScript, esse tipo de comportamento deve parecer um pouco semelhante.

No exemplo abaixo, apenas o elemento com a cool-paragraphclasse seria estilizado com um plano de fundo vermelho, pois é um descendente do elemento onde nossa propriedade customizada é declarada.

<div class='cool-div'>
  <p class='cool-paragraph'>Check out my cool, red background!</p>
</div>

<p class='boring-paragraph'>I'm not in scope so I'm not cool.</p>
.cool-div {
  --main-bg: red;
}

.cool-paragraph {
  background-color: var(--main-bg);
}

.boring-paragraph {
  background-color: var(--main-bg);
}






















O :rootseletor
Embora possa haver momentos em que você desejará limitar o escopo de uma propriedade personalizada, talvez queira usar outras propriedades personalizadas em muitos seletores não relacionados. Uma solução alternativa seria declarar a mesma propriedade personalizada em vários seletores, mas isso anula um dos propósitos de usar propriedades personalizadas em primeiro lugar (a facilidade de alterar várias instâncias de um valor de uma só vez).

Uma solução melhor é declarar essas propriedades personalizadas no :rootseletor, que é essencialmente a mesma coisa que o htmlseletor, exceto que tem uma especificidade mais alta.


<p class='cool-paragraph'>Lorem ipsum dolor sit amet.</p>

<p class='exciting-paragraph'>Lorem ipsum dolor sit amet.</p>
:root {
  --main-color: red;
}

.cool-paragraph {
  color: var(--main-color);
}

.exciting-paragraph {
  background-color: var(--main-color);
}


Ao declarar nossa propriedade customizada no :rootseletor no exemplo acima, podemos acessá-la em qualquer outro seletor válido dentro do nosso arquivo CSS, pois qualquer outro seletor seria considerado um descendente do :rootseletor.

















