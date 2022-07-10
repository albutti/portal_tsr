var img_sol = document.getElementById('sol');
var img_lua = document.getElementById('lua');
var estamos_controle = document.getElementById('texto_estamos_controle');
var comunicacao = document.getElementById('texto_comunicacao');
var salas_teams = document.getElementById('texto_sala_teams');
var aleatorio1 = document.getElementById('texto_aleatorio1');
var aleatorio2 = document.getElementById('texto_aleatorio2');
var aleatorio3 = document.getElementById('texto_aleatorio3');
var aleatorio4 = document.getElementById('texto_aleatorio4');
var prb = document.getElementById('texto_prb');


function modo_escuro() {
    document.body.style.background = '#303030';
    document.body.style.color = '#94969c';
    img_sol.setAttribute('src', '../img/sol.png')
    img_lua.setAttribute('src', '../img/lua_ativa.png')
    prb.style.color = 'white';
    aleatorio4.style.color = 'white';
    aleatorio3.style.color = 'white';
    aleatorio2.style.color = 'white';
    aleatorio1.style.color = 'white';
    salas_teams.style.color = 'white';
    comunicacao.style.color = 'white';
    estamos_controle.style.color = 'white';
}

function modo_claro() {
    document.body.style.background = '#ffffff';
    document.body.style.color = 'black';
    img_sol.setAttribute('src', '../img/sol_ativo.png')
    img_lua.setAttribute('src', '../img/lua.png')
    prb.style.color = 'black';
    aleatorio4.style.color = 'black';
    aleatorio3.style.color = 'black';
    aleatorio2.style.color = 'black';
    aleatorio1.style.color = 'black';
    salas_teams.style.color = 'black';
    comunicacao.style.color = 'black';
    estamos_controle.style.color = 'black';
}