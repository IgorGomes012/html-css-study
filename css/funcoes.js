O que é uma função e como elas são usadas em CSS?

Como em outras linguagens de programação, as funções são pedaços de código reutilizáveis ​​que executam tarefas específicas. As funções são “argumentos” passados ​​entre parênteses, cada um dos quais é usado pela função de uma maneira específica. Alguns exemplos comuns são:


color: rgb(0, 42, 255);
background: linear-gradient(90deg, blue, red);
Aqui, o valor de coloré a função rgb(), que aceita argumentos na forma de números. Ele processa esses números para calcular a cor RGB correspondente aos três valores fornecidos. Da mesma forma, a backgroundpropriedade tem um valor de linear-gradient(90deg, blue, red), que calcula o ângulo, a cor inicial e a cor final de um gradiente.

Ao contrário de outras linguagens de programação que você usará no TOP, o CSS não nos permite criar nossas próprias funções. Em vez disso, a linguagem vem com uma lista de funções predefinidas que ajudarão você a resolver os problemas de estilo mais comuns.

Além de definir as cores, existem várias funções CSS que são úteis na hora de desenhar o layout e o dimensionamento de um site . Isso se torna importante quando se pensa em design responsivo.

Vamos examinar algumas dessas funções: calc(), min(), max(), e clamp().

calcular()
Os casos de uso mais poderosos para calc incluem:

Unidades de mistura
A capacidade de aninharcalc( calc () - calc () )




Dê uma olhada em como calc()está sendo usado aqui:

:root {
    --header: 3rem;
    --footer: 40px;
    --main: calc(100vh - calc(var(--header) + var(--footer)));
    }

 
    --header, --footere --mainsão todos exemplos de variáveis ​​CSS. Você aprenderá sobre isso na próxima lição.
    Configurando main para igualar o resultado de: 100vh - (3rem + 40px). Colocando de outra forma: main = 100vh - (header + footer). calc()está lidando com a matemática para nós, embora estejamos misturando unidades vh, rem e px. Combinado com variáveis ​​CSS, calc()pode nos salvar da dor de cabeça de repetir regras CSS.
    
    Você deve ser capaz de entender como calc()é usado na incorporação do CodePen acima. Nós encorajamos você a brincar com diferentes unidades e tamanhos dos elementos para ver quais resultados você obtém antes de prosseguir.
    
    Observação: o exemplo acima é apenas um exemplo de como calc()pode afetar um layout, mas lembre-se de que calc()provavelmente não é a melhor maneira de fazer isso. Falaremos mais sobre layouts em lições futuras.  
    
    





min()

min()faz um excelente trabalho nos ajudando a criar sites responsivos. Dê uma olhada neste exemplo:

#iconHolder {
    width: min(150px, 100%);
    height: min(150px, 100%);
    box-sizing: border-box;
    border: 6px solid blue;
  }

  Focando nesta linha width: min(150px, 100%);podemos fazer várias observações: Se houver 150pxdisponibilidade para a imagem, ela ocupará todos os arquivos 150px. Se não estiverem 150pxdisponíveis, a imagem mudará para 100%a largura do pai.
Você é capaz de fazer matemática básica dentro de um min ( )=> por exemplo:width: min(80ch, 100vw - 2rem);

max()
Max funciona da mesma forma que min, só que ao contrário. Ele selecionará o maior valor possível entre parênteses.

A função max é mais útil quando a janela de visualização é excepcionalmente grande ou o usuário aumenta o tamanho do conteúdo usando o recurso de zoom do navegador. Especificar o tamanho máximo possível de um determinado elemento, por exemplo, impedirá que esse elemento preencha infinitamente a página à medida que se expande.

Considere a seguinte propriedade de um determinado elemento:

width: max(100px, 1rem, 4em, 50%)
A partir desta lista de tamanhos fornecidos, max selecionará o maior que possivelmente caberá na janela de visualização.

Você pode não encontrar muito uso para max no início, mas é uma boa ferramenta para estar ciente de projetos onde a acessibilidade é importante.










clamp()

clamp()é uma ótima maneira de tornar os elementos fluidos e responsivos. clamp()assume 3 valores:

h1 {
  font-size: clamp(320px, 80vw, 60rem);
}

o menor valor (320px)
o valor ideal (80vw)
o maior valor (60rem)
A clamp()função CSS usa esses valores para definir o menor valor, o valor ideal e o maior valor. No exemplo acima, isso significaria que o menor tamanho de fonte aceitável seria 320px e o maior seria 60rem. O tamanho ideal da fonte seria 80vw.










Tipografia fluida #
Para habilitar a tipografia fluida , Mike Riethmeuller popularizou uma técnica que usa a calc()função para definir um tamanho mínimo de fonte, tamanho máximo de fonte e permitir o dimensionamento do mínimo ao máximo.

Criando tipografia fluida com clamp(). Veja Demo no Codepen.
Com clamp(), você pode escrever isso com mais clareza. Em vez de exigir uma string complexa, o navegador pode fazer o trabalho para você. Defina o tamanho de fonte mínimo aceitável (por exemplo, 1.5rempara um título, tamanho máximo (ou seja, 3rem) e tamanho ideal de 5vw.

Agora, temos uma tipografia que escala com a largura da janela de visualização da página até atingir os valores mínimos e máximos limitantes, em uma linha de código muito mais sucinta:


p {
  font-size: clamp(1.5rem, 5vw, 3rem);
}
Aviso

Limitar o tamanho do texto pode ser max()ou clamp()pode causar uma falha WCAG em 1.4.4 Redimensionar texto (AA) , porque um usuário pode não conseguir dimensionar o texto para 200% de seu tamanho original. Certifique-se de testar os resultados com zoom .









Dê uma olhada na lista completa de todas as funções CSS e como elas são usadas para que você tenha uma ideia do que é possível.https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions


Leia este ótimo artigo para uma visão mais aprofundada min, maxe clampem ação, com exemplos animados.
https://web.dev/min-max-clamp/