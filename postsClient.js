/**
 * Ínicia a função anônima
 */
$(function() {
    /**
     * Carrega os dados quando a página for carregada
     */
    /*
    window.onload = function(){
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/',
            type: 'get',
            headers: {
                "Authorization": "basic YwxnYxdvcmtz0nMzbmg"
            },
            success:function(response) {                
                desenhaTabela(response);
            },
            statusCode: {
                200: function() {
                  console.log( "Dados retornados com sucesso!" );
                }
              }
        });
    }
    */

    /**
     * Carrega os dados apartir do click do botão
     * Seleciona o elemento js-load-posts, toda vez que tiver um evento do tipo click
     * Executa a função
     */
    $(".js-load-posts").on('click', function() {        
        $.ajax({
                url: 'https://jsonplaceholder.typicode.com/posts/',
                type: 'get',
                headers: {
                    "Authorization": "basic YwxnYxdvcmtz0nMzbmg"
                },
                success:function(response) {
                    //alert(response);
                    desenhaTabela(response);
                },
                statusCode: {
                    200: function() {
                      console.log( "Dados retornados com sucesso!" );
                    }
                }
        });
    })
});

/**
 * Limpa todos o corpo da tabela antes de carregar a tabela
 * Para cada elemento retornado da api, ela vai desenhar uma linha
 * @param {*} dados 
 */
function desenhaTabela(dados) {
    $(".js-posts-table-body tr").remove(); 
    for(var i = 0; i < dados.length; i ++) {
        desenhaLinha(dados[i]);
    }
}

/**
 * Criamos um objeto linha
 * Adicionamos ele no corpo da tabela
 * Criamos as linhas, então para cada elemento retornado criamos uma linha na tabela
 * @param {*} linha 
 */
function desenhaLinha(linha) {
    var linhaTabela = $("<tr/>");
    
    $(".js-posts-table-body").append(linhaTabela);
    
    linhaTabela.append("<td>" + linha.userId + "</td>");
    linhaTabela.append("<td>" + linha.id + "</td>");
    linhaTabela.append("<td>" + linha.title + "</td>");
    linhaTabela.append("<td>" + linha.body + "</td>");
}