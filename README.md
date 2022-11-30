Documentação do Projeto Pokédex

Docentes: Goran Temeljkovitch e Vinicius Fernandes

O presente projeto simula o funcionamento de uma Pokédex, uma enciclopédia virtual portátil contendo o registro de diferentes espécies de criaturas ficcionais chamadas de Pokémons. Após a execução do aplicativo, será exibida uma interface contendo uma lista de 50 Pokémons aleatórios e diversas de suas características como sua aparência, seu número representando a ordem que ele aparece na Pokédex original, altura em pés e polegadas (medida imperial), peso em libras, tipo e status, que. No canto inferior esquerdo temos dois botões de Página anterior e próxima página que podem ser usados para carregar 50 novos Pokémons aleatórios.

O projeto conterá ao todo três telas. A primeira com a lista completa dos 50 pokemóns aleatórios, a segunda que nos permitirá ver o pokemón e os seus atributos ao lado esquerdo e a terceira e última que nos mostrará em tela cheia uma foto em alta qualidade do Pokémon em um fundo diferente, junto de uma tabela contendo todos os seus status.

A aplicação será feita usando as linguagens de programação web HTML/CSS/JavaScript, sendo também utilizado o framework React Native. O banco de dados foi retirado originalmente de uma API Restful de código aberto intitulada PokéAPI. Esta API está ligada a uma extensa database, contendo uma miríade de informações sobre cada pokémon da série. Nós retiramos estes dados no formato JSON e importamos para o nosso próprio banco de dados do MongoDB.

Este trabalho possuirá 4 rotas, sendo ela:
A rota get, onde podemos consultar os dados no banco de dados no mongoDB.
A rota post, usada para adicionar novos Pokémons ao nosso banco de dados.
A rota patch, que pode ser usada para atualizar as informações de nossos Pokémons.
E a rota delete, que removerá o Pokémon do nosso banco de dados.


