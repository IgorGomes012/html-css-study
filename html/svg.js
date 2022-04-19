O que são SVGs?
Os SVGs são um formato de imagem escalável , o que significa que eles serão facilmente dimensionados para qualquer tamanho e manterão sua qualidade sem aumentar o tamanho do arquivo. Eles também são muito úteis se você precisar criar ou modificar suas imagens programaticamente, pois você pode alterar suas propriedades por meio de CSS e JavaScript.

SVGs são frequentemente usados ​​para:

Ícones
Gráficos/Gráficos
Imagens grandes e simples
Planos de fundo padronizados
Aplicando efeitos a outros elementos por meio de filtros SVG

Ok, mas o que são?
“SVG” significa “Gráfico vetorial escalável”. Gráficos vetoriais são simplesmente imagens definidas por matemática, ao contrário dos tradicionais “gráficos raster”, onde sua imagem é definida por uma grade de pixels. Com gráficos raster, o detalhe é limitado ao tamanho dessa grade de pixels. Se você quiser aumentar o tamanho da imagem ( redimensioná -la), você deve aumentar o tamanho dessa grade. Como você decide como todos esses novos pixels devem ser? Não há solução simples. Além disso, quanto maior a grade, maior o tamanho do arquivo.

Com gráficos vetoriais, por outro lado, não há grade. Em vez disso, você tem fórmulas para diferentes formas e linhas. Como essas são apenas fórmulas, não importa quão grandes ou pequenas você queira que elas apareçam – elas podem ser dimensionadas para qualquer tamanho que você desejar, e isso não afetará a qualidade ou o tamanho do arquivo.

Os SVGs têm outro aspecto interessante: eles são definidos usando XML. XML (também conhecido como “Extensible Markup Language”) é uma sintaxe semelhante a HTML que é usada para muitas coisas, desde APIs , RSS , até planilhas e software de edição de palavras .

O fato de o código-fonte SVG ser XML tem alguns benefícios importantes.

Primeiro, significa que é legível por humanos . Se você abrisse um JPEG em um editor de texto, ficaria parecido com gobbledygook. Se você abrir um SVG, no entanto, seria algo assim:

Desvantagens
Então, claramente SVGs são incríveis! Hora de converter todas as nossas imagens para SVG, certo? Bem, não exatamente. SVGs são ótimos para imagens relativamente simples, mas como cada detalhe da imagem precisa ser escrito como XML, eles são extremamente ineficientes no armazenamento de imagens complexas. Se sua imagem deve ser fotorrealista, ou tem detalhes finos ou textura (“ texturas grunge ” são um ótimo exemplo), então os SVGs são a ferramenta errada para o trabalho.

---------------------------------------------------

Anatomia de um SVG
Normalmente, você não deseja criar SVGs do zero em seu código. Na maioria das vezes, você baixa o arquivo ou copia o código de um site ou de um editor de imagens que pode criá-los (o Adobe Illustrator e o Figma são dois aplicativos populares que podem criar SVGs). No entanto, é muito comum baixar um SVG e querer ajustá-lo um pouco, então saber quais são todos os pedaços e como eles funcionam é muito útil.


xmlns- significa “XML NameSpace”. Isso especifica qual dialeto do XML você está usando – em nosso caso, esse dialeto é a especificação da linguagem SVG. Sem ele, alguns navegadores não renderizarão sua imagem ou a renderizarão incorretamente. Se você estiver interessado em um detalhamento completo do que é esse atributo e por que ele é necessário, confira este excelente artigo do MDN .
viewBox- define os limites do seu SVG. Quando você precisa definir as posições de diferentes pontos dos elementos em seu SVG, é isso que está referenciando. Ele também define a proporção e a origem do seu SVG. Então está rendendo bastante! Certifique-se de brincar com valores diferentes no exemplo acima para ter uma ideia de como isso afeta as formas.
class, id- esses atributos funcionam exatamente como em HTML. Usá-los em SVGs permite que você direcione facilmente um elemento por meio de CSS ou JavaScript ou reutilize um elemento por meio dos useelementos.
Elementos como <circle>, <rect>, <path>e <text>são definidos pelo namespace SVG. Estes são os nossos blocos de construção básicos. Embora você possa criar imagens extremamente complexas com SVG, elas são criadas principalmente com apenas uma dúzia desses elementos básicos. Você pode ver uma lista completa de elementos SVG aqui .
Muitos atributos SVG, como fille stroke, podem ser alterados em seu CSS .


-------------------------------------------------------------------------------

LINKS COMPLEMENTARES PARA APROFUDAMENTO!

Existem muitas ótimas bibliotecas de ícones SVG gratuitas. Alguns que valem a pena conferir: Ícones de material , ícones de penas e The Noun Project . https://fonts.google.com/icons  https://feathericons.com/  https://thenounproject.com/term/free/


Se você quiser se aprofundar nos detalhes dos SVGs e seus elementos, o tutorial do MDN é um ótimo lugar para começar. https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial


Se você quiser começar a fazer seus próprios SVGs, precisará de algum tipo de editor visual.

Este é um ótimo editor SVG para aprender como a marcação SVG funciona. Ele não apenas mostra o XML, mas também permite que você veja os “comandos” que você está usando para gerar o SVG. Este site não é realmente projetado para fazer gráficos complexos, no entanto. https://yqnn.github.io/svg-path-editor

Para isso, uma excelente opção é o Inkscape , que além de gratuito, é de código aberto! https://inkscape.org/

E se você realmente investiu na criação de seus próprios SVGs, talvez queira conferir algumas das poderosas opções pagas disponíveis, como o Affinity Designer .  https://affinity.serif.com/designer/



Se você quiser usar SVGs para gerar imagens programaticamente, há pelo menos duas bibliotecas modernas e importantes para isso: snap.svg e SVG.js . http://snapsvg.io/  https://svgjs.dev/docs/3.0/

Para visualização de dados, o d3 tem sido o padrão por muitos e muitos anos. https://d3js.org/

Se você estiver interessado em algumas das coisas mais avançadas que pode fazer com SVGs, confira este vídeo sobre animação SVG e este artigo sobre Filtros SVG e por que eles são incríveis ! https://www.youtube.com/watch?v=UTHgr6NLeEw  https://www.smashingmagazine.com/2015/05/why-the-svg-filter-is-awesome/