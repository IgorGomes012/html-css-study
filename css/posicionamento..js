Posicionamento Estático e Relativo

O modo de posicionamento padrão ao qual você se acostumou é position: static. A diferença entre estático e relativo é bastante simples. Estático é a posição padrão de cada elemento e as propriedades top, right, bottome leftnão afetam a posição do elemento. Relative, por outro lado, é praticamente o mesmo que static, mas as propriedades top, ri....(etc.)deslocam o elemento em relação à sua posição normal no fluxo do documento.







Posicionamento

Até agora você já teve um pouco de prática movendo elementos pela tela usando coisas como margin, padding e flexbox. Todas essas técnicas se basearam no “modo de posicionamento” padrão do CSS. Esse modo de posicionamento padrão é intuitivo e você continuará usando-o para quase todas as suas necessidades de layout. No entanto, existem outros métodos à sua disposição que podem ser muito úteis em algumas situações.






Resultados de Aprendizagem

Você aprenderá a usar o posicionamento absoluto.
Você aprenderá a usar o posicionamento fixo.
Você aprenderá como usar o posicionamento fixo.
Você saberá a diferença entre cada propriedade e como combiná-las.
Posicionamento Estático e Relativo
O modo de posicionamento padrão ao qual você se acostumou é position: static. A diferença entre estático e relativo é bastante simples. Estático é a posição padrão de cada elemento e as propriedades top, right, bottome leftnão afetam a posição do elemento. Relative, por outro lado, é praticamente o mesmo que static, mas as propriedades top, ri....(etc.)deslocam o elemento em relação à sua posição normal no fluxo do documento.







Posicionamento Absoluto

position: absolutepermite que você posicione algo em um ponto exato na tela sem perturbar os outros elementos ao seu redor. Mais especificamente, o uso de posicionamento absoluto em um elemento removerá esse elemento do fluxo normal do documento enquanto é posicionado em relação a um elemento ancestral. Simplificando: elementos que são removidos do fluxo normal do documento não afetam outros elementos e também não são afetados por outros elementos. O uso de posicionamento absoluto permite posicionar elementos em qualquer lugar da tela usando top, right, bottome leftpropriedades. Esta propriedade é muito útil quando você deseja posicionar algo em um ponto exato da tela, sem perturbar nenhum dos outros elementos. Alguns bons casos de uso para posicionamento absoluto são:

modais
imagem com legenda
ícones em cima de outros elementos