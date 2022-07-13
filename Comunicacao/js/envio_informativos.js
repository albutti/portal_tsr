/** geracao o popup de informativos**/

var informativo = document.getElementsByName('informativo');
var texto_alarme = document.getElementById('texto_alarme');
var texto_pre_crise = document.getElementById('texto_pre_crise');
var texto_pre_degradacao = document.getElementById('texto_pre_degradacao');

var acn_informativo = '';
var acn_informativo_alarme = '';
var inc_informativo = '';
var cliente_informativo = '';
var impacto_informativo = '';
var teams_informativo = '';
var telefone_informativo = '';
var id_teams_informativo = '';

var acn_crise_1 = document.getElementById('acn_crise_1');

function abrir_informativo(){
    if (informativo[0].checked) {
        acn_informativo_alarme = document.getElementById('acn_informativo').value;
        inc_informativo = document.getElementById('inc_informativo').value;
        cliente_informativo = document.getElementById('cliente_informativo').value;
        teams_informativo = document.getElementById('link_teams_informativo').value;
        telefone_informativo = document.getElementById('telefone_teams_informativo').value;
        id_teams_informativo = document.getElementById('id_teams_informativo').value;
        document.getElementById('popup_informativo_alarme').style.display = 'block';

        texto_alarme.innerHTML = `⚠ Informatico TSR <br>Detectado alerta na monitoração de serviços <br>${inc_informativo}<br><br>Possivel anormalidade no serviço "${acn_informativo_alarme}" do cliente ${cliente_informativo}. <br><br>Equipes operacionais acionadas. <br><br>teams: ${teams_informativo} <br><br>Telefone: ${telefone_informativo}     ID: ${id_teams_informativo}#`;
    } else if (informativo[1].checked){
        acn_informativo = document.getElementById('acn_informativo').value;
        cliente_informativo = document.getElementById('cliente_informativo').value;
        teams_informativo = document.getElementById('link_teams_informativo').value;
        telefone_informativo = document.getElementById('telefone_teams_informativo').value;
        id_teams_informativo = document.getElementById('id_teams_informativo').value;
        document.getElementById('popup_informativo_pre_crise').style.display = 'block';

        texto_pre_crise.innerHTML = `Comunicação Pré-Crise: <br>Cliente: ${cliente_informativo} <br>Status: Serviço ${acn_informativo} indisponivel. Crise em processo de abertura. <br><br>Teams: ${teams_informativo} <br><br>Telefone: ${telefone_informativo}     ID: ${id_teams_informativo}#`;
    } else if (informativo[2].checked) {
        acn_informativo = document.getElementById('acn_informativo').value;
        cliente_informativo = document.getElementById('cliente_informativo').value;
        teams_informativo = document.getElementById('link_teams_informativo').value;
        telefone_informativo = document.getElementById('telefone_teams_informativo').value;
        id_teams_informativo = document.getElementById('id_teams_informativo').value;

        document.getElementById('popup_informativo_pre_degradacao').style.display = 'block';
        texto_pre_degradacao.innerHTML = `Comunicação Pré-Degradação: <br>Cliente: ${cliente_informativo} <br>Status: Serviço ${acn_informativo} degradado. Degradação em processo de abertura. <br><br>Teams: ${teams_informativo} <br><br>Telefone: ${telefone_informativo}     ID: ${id_teams_informativo}#`;
    }
}

function enviar_informativo() {
    if (informativo[0].checked) {
        document.getElementById('popup_informativo_alarme').style.display =  'none';
        gerar_alarme_pendente()
    } else if (informativo[1].checked){
        document.getElementById('popup_informativo_pre_crise').style.display =  'none';
        acn_crise_1.innerHTML = acn_informativo;
    } else if (informativo[2].checked) {
        document.getElementById('popup_informativo_pre_degradacao').style.display =  'none';
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

/** alteração dos campos dos alarmes pendentes **/
function gerar_alarme_pendente() {
    var descricao_alarme_pendente = document.getElementById('descricao_alarme_pendente');
    impacto_informativo = document.getElementById('impacto_informativo').value;
    descricao_alarme_pendente.innerHTML = `${inc_informativo}<br>${acn_informativo_alarme}<br>${impacto_informativo}`
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

var texto_sem_impacto = document.getElementById('alarme_sem_impacto');
var atualizacao_alarme_informativo = '';

function exemplo_sem_impacto(){ 
    atualizacao_alarme_informativo = `⚠ ATUALIZAÇÃO TSR\n\nEm conferencia com os time - XXX e SDM/XXX, foi reportado que não há impacto para o serviço ACN:${acn_informativo_alarme}.`
    texto_sem_impacto.innerHTML = atualizacao_alarme_informativo;
}

function exemplo_mudanca() {
    atualizacao_alarme_informativo = `⚠ ATUALIZAÇÃO TSR\n\nApós avaliação dos times PTS-XXX e GSE-XXX, fois identificado que eo serviço ACN:${acn_informativo_alarme} está em mudança através da CHG2022XXXXXXX.`
    texto_sem_impacto.innerHTML = atualizacao_alarme_informativo;
}