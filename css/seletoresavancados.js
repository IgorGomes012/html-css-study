// Combinadores de pais e irmãos
// Vamos dar uma olhada em mais algumas maneiras de acessar diferentes elementos sem fazer referência às suas classes. Aqui estão três novos seletores para fazer exatamente isso.

// >- o combinador filho
// +- o combinador irmão adjacente
// ~- o combinador irmão geral



//  This rule will only select divs with a class of child 
// main > div {
//      Our cool CSS 
//   }
  
//    This rule will only select divs with a class of grand-child 

//   main > div > div {
//      More cool CSS 
//   }


// Em outras palavras, o seletor filho selecionará um elemento que está um nível de recuo abaixo. Para selecionar um elemento adjacente ao nosso alvo, ou no mesmo nível de recuo, podemos usar o combinador irmão adjacente +.

//  This rule will only select the div with the class child group2 

// .group1 + div {
//      Our cool CSS 
//   }
  
//    This rule will only select the div with the class child group3 

//   .group1 + div + div {
//      More cool CSS 
//   }


//--------------------------------------------------------------------------------------------

// Finalmente, se quisermos selecionar todos os irmãos de um elemento e não apenas o primeiro, podemos usar o combinador irmão geral ~.

//  This rule will select all of .group1's siblings - in this case the 2nd and 3rd .child divs
// .group1 ~ div {
//      Our cool CSS 
//   }

//--------------------------------------------------------------------------------------------

// Pseudoclasses dinâmicas e de ação do usuário


// Esses tipos de pseudoclasses úteis podem tornar sua página muito mais dinâmica e interativa.

// :focusaplica-se a um elemento que está atualmente selecionado pelo usuário selecionando-o com o cursor ou usando o teclado.

// :hoverafetará qualquer coisa sob o ponteiro do mouse do usuário. Ele pode ser usado para dar uma força extra aos botões e links para destacar que eles são interativos ou para acionar um menu suspenso.

// :activeaplica-se a elementos que estão sendo clicados no momento e é especialmente útil para fornecer feedback ao usuário de que sua ação teve um efeito. Este é um ótimo para dar aos seus botões e outros elementos interativos um feedback mais 'tátil'.

// Você já se perguntou por que os links são azuis, mas ficam roxos quando clicados em HTML sem estilo? É porque os navegadores implementam esse estilo por padrão. Para implementar seu próprio estilo personalizado para links, aproveite as pseudoclasses e :link. :visitedUma versão simplificada do estilo padrão do navegador pode ser algo assim:

//-------------------------------------------------------------------------------------------


// Pseudoclasses estruturais

// As pseudoclasses estruturais são uma maneira poderosa de selecionar elementos com base em sua posição no DOM.

// :rooté uma classe especial que representa o nível mais alto do seu documento - o único elemento que não tem pais. Geralmente, ao trabalhar com a web, isso é equivalente ao htmlelemento, mas existem algumas diferenças sutis .

// :rootgeralmente é o local onde você colocará suas regras CSS 'globais' que você deseja que estejam disponíveis em todos os lugares - como suas propriedades personalizadas e variáveis ​​CSS, ou regras como box-sizing: border-box;.

// :first-childe :last-childcorresponderá aos elementos que são o primeiro ou o último irmão.

// Da mesma forma :empty, corresponderá a elementos que não têm filhos e :only-childa elementos que não tenham irmãos.

//--------------------------------------------------------------------------------------------

// Pseudo-elementos

// Enquanto as pseudoclasses nos dão uma maneira alternativa de interagir com nossos elementos HTML com base em seu estado ou estrutura, os pseudoelementos são mais abstratos. Eles nos permitem afetar partes do nosso HTML que não são elementos. Esses elementos especiais compartilham a mesma especificidade que os elementos regulares (0, 0, 0, 1). Há uma série de pseudo-elementos úteis que podem ser utilizados de várias maneiras criativas.

// ::markerpermite que você personalize o estilo dos <li>marcadores ou números de seus elementos.

// ::first-lettere ::first-linepermitem que você (você adivinhou!) dê um estilo especial à primeira letra ou linha de algum texto.

// ::beforee::after nos permite adicionar elementos extras na página com CSS, em vez de HTML. Usá-lo para decorar texto de várias maneiras é um caso de uso comum.