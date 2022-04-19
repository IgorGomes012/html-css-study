Tabelas HTML
Alguns dados realmente precisam ser exibidos em uma tabela. As tabelas HTML podem ser menos usadas do que botões, links, listas e tudo o mais que você aprendeu até agora, mas há alguns casos em que elas são a ferramenta perfeita . Alguns dos recursos mais avançados podem ser um pouco complicados de configurar corretamente, mas começar com as tabelas é muito fácil. Você cria uma tabela com <table></table>tags e, em seguida, coloca os elementos para linhas, colunas, cabeçalhos ou qualquer outra coisa possível dentro desses elementos da tabela.

---------------------------------------------------------------------------------------------

Permitindo que as células ocupem várias linhas e colunas
Às vezes, queremos que as células ocupem várias linhas ou colunas. Veja o seguinte exemplo simples, que mostra os nomes de animais comuns. Em alguns casos, queremos mostrar os nomes dos machos e fêmeas ao lado do nome do animal. Às vezes não, e nesses casos queremos apenas que o nome do animal ocupe toda a tabela.

A marcação inicial fica assim:

Precisamos de uma maneira de fazer com que "Animals", "Hippopotamus" e "Crocodile" se estendam por duas colunas, e "Horse" e "Chicken" para baixo em duas linhas. Felizmente, os cabeçalhos e células das tabelas têm os atributos colspane rowspan, que nos permitem fazer exatamente essas coisas. Ambos aceitam um valor numérico sem unidade, que é igual ao número de linhas ou colunas que você deseja expandir. Por exemplo, colspan="2"faz com que uma célula se estenda por duas colunas.

-----------------------------------------------------------------------------------------------


Introdução
Tabelas HTML permitem que você crie tabelas bidimensionais feitas de linhas e colunas. Nesta lição, você aprenderá tudo o que precisa saber sobre tabelas HTML.

Resultados de Aprendizagem
Ao final desta lição, você deverá ser capaz de fazer o seguinte:

Crie tabelas HTML avançadas.
Tabelas HTML
Alguns dados realmente precisam ser exibidos em uma tabela. As tabelas HTML podem ser menos usadas do que botões, links, listas e tudo o mais que você aprendeu até agora, mas há alguns casos em que elas são a ferramenta perfeita . Alguns dos recursos mais avançados podem ser um pouco complicados de configurar corretamente, mas começar com as tabelas é muito fácil. Você cria uma tabela com <table></table>tags e, em seguida, coloca os elementos para linhas, colunas, cabeçalhos ou qualquer outra coisa possível dentro desses elementos da tabela.

Por exemplo:


Neste exemplo de codepen, criamos um elemento de tabela, contendo dois elementos de linha de tabela. A primeira linha tem dois títulos enquanto a segunda linha tem 2 células de dados.

Tarefa
Leia estes tutoriais de noções básicas de tabelas e tabelas avançadas da MDN. Eles devem ensinar a você toda a sintaxe por trás das tabelas HTML. É bem direto. Certifique-se de codificar junto!
Faça esta Avaliação de Tabelas do MDN. É bom colocar em prática suas habilidades recém-adquiridas!
Recursos adicionais
Esta seção contém links úteis para outros conteúdos. Não é necessário, portanto, considere-o complementar se você precisar se aprofundar em algo.

Pencil & Paper publicou um ótimo artigo sobre coisas que você pode alcançar com mesas se você ousar passar algum tempo dando a elas um pouco de amor. Eles sugerem alguns bons hábitos sobre como você deve formatar seus dados, o que é bastante simples e faz uma enorme diferença. Esta não é uma lista de itens obrigatórios para uma mesa, mas ideias que valem a pena ter em mente para a próxima vez que uma mesa estiver incomodando você com a aparência.
https://pencilandpaper.io/articles/ux-pattern-analysis-enterprise-data-tables