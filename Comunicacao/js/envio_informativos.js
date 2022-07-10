/** geracao o popup de informativos**/

var informativo = document.getElementsByName('informativo');
var texto_alarme = document.getElementById('texto_alarme');
var texto_pre_crise = document.getElementById('texto_pre_crise');
var texto_pre_degradacao = document.getElementById('texto_pre_degradacao');

var acn_informativo = document.getElementById('acn_informativo').value;
var cliente_informativo = document.getElementById('cliente_informativo').value;
var teams_informativo = document.getElementById('link_teams_informativo').value;
var telefone_informativo = document.getElementById('telefone_teams_informativo').value;
var id_teams_informativo = document.getElementById('id_teams_informativo').value;

function abrir_informativo(){
    if (informativo[0].checked) {
        var acn_informativo = document.getElementById('acn_informativo').value;
        var inc_informativo = document.getElementById('inc_informativo').value;
        var cliente_informativo = document.getElementById('cliente_informativo').value;
        var teams_informativo = document.getElementById('link_teams_informativo').value;
        var telefone_informativo = document.getElementById('telefone_teams_informativo').value;
        var id_teams_informativo = document.getElementById('id_teams_informativo').value;
        document.getElementById('popup_informativo_alarme').style.display = 'block';
        texto_alarme.innerHTML = `⚠ Informatico TSR <br>Detectado alerta na monitoração de serviços <br>${inc_informativo}<br><br>Possivel anormalidade no serviço "${acn_informativo}" do cliente ${cliente_informativo}. <br><br>Equipes operacionais acionadas. <br><br>teams: ${teams_informativo} <br><br>Telefone: ${telefone_informativo}     ID: ${id_teams_informativo}#`;
    } else if (informativo[1].checked){
        var acn_informativo = document.getElementById('acn_informativo').value;
        var cliente_informativo = document.getElementById('cliente_informativo').value;
        var teams_informativo = document.getElementById('link_teams_informativo').value;
        var telefone_informativo = document.getElementById('telefone_teams_informativo').value;
        var id_teams_informativo = document.getElementById('id_teams_informativo').value;
        document.getElementById('popup_informativo_pre_crise').style.display = 'block';
        texto_pre_crise.innerHTML = `Comunicação Pré-Crise: <br>Cliente: ${cliente_informativo} <br>Status: Serviço ${acn_informativo} indisponivel. Crise em processo de abertura. <br><br>Teams: ${teams_informativo} <br><br>Telefone: ${telefone_informativo}     ID: ${id_teams_informativo}#`;
    } else if (informativo[2].checked) {
        var acn_informativo = document.getElementById('acn_informativo').value;
        var cliente_informativo = document.getElementById('cliente_informativo').value;
        var teams_informativo = document.getElementById('link_teams_informativo').value;
        var telefone_informativo = document.getElementById('telefone_teams_informativo').value;
        var id_teams_informativo = document.getElementById('id_teams_informativo').value;
        document.getElementById('popup_informativo_pre_degradacao').style.display = 'block';
        texto_pre_degradacao.innerHTML = `Comunicação Pré-Degradação: <br>Cliente: ${cliente_informativo} <br>Status: Serviço ${acn_informativo} degradado. Degradação em processo de abertura. <br><br>Teams: ${teams_informativo} <br><br>Telefone: ${telefone_informativo}     ID: ${id_teams_informativo}#`;
    }
}

function fechar_informativo_alarme(){
    document.getElementById('popup_informativo_alarme').style.display =  'none';
}

function fechar_informativo_pre_crise(){
    document.getElementById('popup_informativo_pre_crise').style.display =  'none';
}

function fechar_informativo_pre_degradacao(){
    document.getElementById('popup_informativo_pre_degradacao').style.display =  'none';
}

/** Atualização de alarme **/

function abrir_atualizacao_alarme(){
    document.getElementById('popup_atualizacao_alarme').style.display = 'block';
}
function fechar_atualizacao_alarme(){
    document.getElementById('popup_atualizacao_alarme').style.display =  'none';
}


var texto_sem_impacto = document.getElementById('alarme_sem_impacto');
var texto_mudanca = document.getElementById('alarme_mudanca');

function exemplo_sem_impacto(){ 
    texto_mudanca.style.display = 'none';
    texto_sem_impacto.style.display = 'grid';
}

function exemplo_mudanca() {
    texto_mudanca.style.display = 'grid';
    texto_sem_impacto.style.display = 'none';
}
