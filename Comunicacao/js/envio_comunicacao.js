
/** envio**/

function enviar() {
    document.getElementById('popup_informativo_pre_degradacao').style.display =  'none';
    document.getElementById('popup_informativo_pre_crise').style.display =  'none';
    document.getElementById('popup_informativo_alarme').style.display =  'none';

    document.getElementById('popup_encerramento_degradacao').style.display =  'none';
    document.getElementById('popup_validacao_degradacao').style.display =  'none';
    document.getElementById('popup_atualizacao_degradacao').style.display =  'none';
    document.getElementById('popup_inicial_degradacao').style.display =  'none';
    document.getElementById('popup_unica_degradacao').style.display =  'none';
    
    document.getElementById('popup_encerramento_crise').style.display =  'none';
    document.getElementById('popup_validacao_crise').style.display =  'none';
    document.getElementById('popup_atualizacao_crise').style.display =  'none';
    document.getElementById('popup_inicial_crise').style.display =  'none';
    document.getElementById('popup_unica_crise').style.display =  'none';

    document.getElementById('popup_atualizacao_alarme').style.display =  'none';
    
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
