Unidades Absolutas


Unidades absolutas são aquelas que são sempre as mesmas em qualquer contexto. pxé uma unidade absoluta porque o tamanho de um pixel não muda em relação a qualquer outra coisa na página. Na verdade, pxé a única unidade absoluta que você deve usar para projetos web. O restante deles faz mais sentido em uma configuração de impressão porque estão relacionados a unidades físicas como in(polegadas) e cm(centímetros).

---------

Unidades Relativas


Unidades relativas são unidades que podem mudar com base em seu contexto. Existem vários deles que você provavelmente encontrará e deseja usar.

em e rem
eme remambos se referem a um tamanho de fonte, embora sejam frequentemente usados ​​para definir outros tamanhos em CSS. Você verá os dois com frequência, então vamos explicar os dois, mas como regra geral, prefira rem.

1emé o font-sizede um elemento (ou o pai do elemento se você o estiver usando para definir font-size). Então, por exemplo, se um elemento font-sizeé 16px, então definir sua largura para 4emfaria sua largura 64px( 16 * 4 == 64).

1remé o font-sizedo elemento raiz (ou :rootou html). A matemática funciona da mesma remforma que com em, mas sem a complexidade adicional de acompanhar o tamanho da fonte do pai. Confiar em empode significar que um determinado tamanho pode mudar se o contexto mudar, o que muito provavelmente não é o comportamento que você deseja.

Recomenda -se o uso de um tamanho relativo rempara definir os tamanhos das fontes em seu site . Muitos navegadores permitem que os usuários alterem o tamanho da fonte base para aumentar a legibilidade. Se possível, é aconselhável respeitar os desejos do usuário em relação ao tamanho da fonte. Você aprenderá mais sobre isso nas tarefas de leitura.

------------------------


Unidades da janela de visualização

As unidades vhe vwestão relacionadas ao tamanho da viewport. Especificamente, 1vhé igual à 1%altura da janela de visualização e 1vwé igual à 1%largura da janela de visualização. Eles podem ser úteis sempre que você quiser que algo seja dimensionado em relação à janela de visualização, exemplos incluindo heróis de altura total, interfaces semelhantes a aplicativos de tela inteira.


-------------------------------------------------------------------------
artigos


Os valores e unidades CSS abrangem todas as unidades disponíveis. https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units

O artigo Unidades de CSS detalha como e quando você pode querer usar em, rem, ou px. https://codyloyd.com/2021/css-units/

Fun with Viewport Units demonstra algumas coisas interessantes que você pode fazer com vhe vw. https://css-tricks.com/fun-viewport-units/