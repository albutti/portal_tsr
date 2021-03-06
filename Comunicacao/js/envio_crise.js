
/** Declaração de Variaveis **/
/** busca do campo do texto **/
var texto_inicial_crise = document.getElementById('texto_inicial_crise');
var texto_atualizacao_crise = document.getElementById('texto_atualizacao_crise');
var texto_validacao_crise = document.getElementById('texto_validacao_crise');
var texto_encerramento_crise = document.getElementById('texto_encerramento_crise');
var texto_unica_crise = document.getElementById('texto_unica_crise');

/** Botões de rascunho de atualização de Crise **/
var botao_crise_sem_checkpoint = document.getElementById('botao_crise_sem_checkpoint');
var botao_crise_checkpoint = document.getElementById('botao_crise_checkpoint');

/** Campo de guarda atualização atual **/
var texto_atualizacao_previa = '';

/** Campo de guarda ultima atualização **/
var atualizacao_anterior_crise = document.getElementById('atualizacao_anterior_crise');

/** bolas de atualização **/
var crise_1_incial = document.getElementById('crise_1_incial');
var crise_1_atualizacao = document.getElementById('crise_1_atualizacao');
var crise_1_validacao = document.getElementById('crise_1_validacao');
var crise_1_encerramento = document.getElementById('crise_1_encerramento');
var crise_1_unica = document.getElementById('crise_1_unica');

var numero_crise_1 = document.getElementById('numero_crise_1');
var tsr_crise_1 = document.getElementById('tsr_crise_1');

/** Variaveis de inicial **/
var numero_inicial_crise = '';
var cliente_inicial_crise = '';
var acn_inicial_crise = '';
var link_teams_inicial_crise = '';
var telefone_teams_inicial_crise = '';
var id_teams_inicial_crise = '';
var sintoma_inicial_crise = '';
var impacto_inicial_crise = '';
var inicio_impacto_inicial_crise = '';
var inicio_crise = '';
var delay = '';
var identificado_inicial_crise = '';
var rm_inicial_crise = '';
var grupo_rm_inicial_crise = '';
var equipes_atuando_inicial_crise = '';
var responsavel_tsr_inicial_crise = '';


/** Variaveis de atualizaçao **/
var numero_atualizacao_crise = document.getElementById('numero_atualizacao_crise');
var cliente_atualizacao_crise = '';
var acn_atualizacao_crise = '';
var status_atualizacao_crise = '';
var link_atualizacao_crise = '';
var acoes_atualizacao_crise = '';
var previsto_atualizacao_crise = '';
var rm_atualizacao_crise = '';
var grupo_rm_atualizacao_crise = '';
var tsr_atualizacao_crise = '';

/** Variaveis de validacao **/
var numero_validacao_crise = document.getElementById('numero_validacao_crise');
var cliente_validacao_crise = '';
var acn_validacao_crise = '';
var status_validacao_crise = '';
var solucao_validacao_crise = '';
var link_validacao_crise = '';
var tsr_validacao_crise = '';

/** Variaveis de encerramento **/
var numero_encerramento_crise = document.getElementById('numero_encerramento_crise');
var acn_encerramento_crise = '';
var cliente_encerramento_crise = '';
var status_encerramento_crise = '';
var inicio_impacto_encerramento_crise = document.getElementById('inicio_impacto_encerramento_crise');
var fim_impacto_encerramento_crise = '';
var delay_periodo_impacto = '';
var inicio_encerramento_crise = document.getElementById('inicio_encerramento_crise');
var fim_encerramento_crise = '';
var delay_periodo_crise = '';
var delay_periodo_validacao = '';
var rm_encerramento_crise = '';
var grupo_rm_encerramento_crise = '';
var tsr_encerramento_crise = '';

/** abrir e fechar os popup de Crise**/
function abrir_inicial_crise(){
    document.getElementById('popup_inicial_crise').style.display = 'block';
}
function fechar_inicial_crise(){
    document.getElementById('popup_inicial_crise').style.display =  'none';
}

function abrir_atualizacao_crise(){
    document.getElementById('popup_atualizacao_crise').style.display = 'block';
    numero_atualizacao_crise.innerHTML = numero_inicial_crise;
}
function fechar_atualizacao_crise(){
    document.getElementById('popup_atualizacao_crise').style.display =  'none';
}

function abrir_validacao_crise(){
    document.getElementById('popup_validacao_crise').style.display = 'block';
    numero_validacao_crise.innerHTML = numero_inicial_crise;
}
function fechar_validacao_crise(){
    document.getElementById('popup_validacao_crise').style.display =  'none';
}

function abrir_encerramento_crise(){
    document.getElementById('popup_encerramento_crise').style.display = 'block';
    numero_encerramento_crise.innerHTML = numero_inicial_crise;
    inicio_impacto_encerramento_crise.innerHTML = inicio_impacto_inicial_crise;
    inicio_encerramento_crise.innerHTML = inicio_crise;
}
function fechar_encerramento_crise(){
    document.getElementById('popup_encerramento_crise').style.display =  'none';
}

function abrir_unica_crise(){
    document.getElementById('popup_unica_crise').style.display = 'block';
}
function fechar_unica_crise(){
    document.getElementById('popup_unica_crise').style.display =  'none';
}

/** 2,0,2,2, -, 0,7, -, 0,9, T,  1, 2,  :,  1, 8 **/
/** 0,1,2,3, 4, 5,6, 7, 8,9, 10, 11,12, 13, 14,15 **/
function layout_tempo_crise(tempo) {
    var layout = tempo.split('');
    var layout_f = `${layout[8]}${layout[9]}/${layout[5]}${layout[6]}/${layout[0]}${layout[1]}${layout[2]}${layout[3]} ${layout[11]}${layout[12]}:${layout[14]}${layout[15]}`
    return layout_f
}

/** calcula o tempo de delay do inicio do impacto para o inicio do processo **/
function calcular_tempo_crise(impacto, inicio){
    var a_ii =impacto.split('');
    var a_ic =inicio.split('');
    var delay = '';

    /** calulo de dia**/
    var d_ii = parseInt(a_ii[0] + a_ii[1]);
    var d_ic = parseInt(a_ic[0] + a_ic[1]);
    

    /** calulo de hora**/
    var h_ii = 0;
    var h_ic = 0;

    h_ii = parseInt(a_ii[11] + a_ii[12]);
    h_ic = parseInt(a_ic[11] + a_ic[12]);

    /** calulo de minuto**/
    var m_ii = parseInt(a_ii[14] + a_ii[15]);
    var m_ic = parseInt(a_ic[14] + a_ic[15]);

    var h_delay = 0;
    var m_delay = 0;
    var d_delay = 0;
    
    if (d_ii < d_ic) {
        d_delay = d_ic - d_ii;
        if (h_ii > h_ic) {
            h_delay = (24 - h_ii) + h_ic;
            if (h_delay <= 24) {
                if (h_delay == 24) {
                    d_delay = d_ic - d_ii;
                    if (m_ii > m_ic) {
                        m_delay = 60 - (m_ii - m_ic);
                        h_delay = 23;
                        d_delay--; 
                        delay = `${d_delay}d${h_delay}h${m_delay}m`;
                        return delay
                    } else {
                        m_delay = m_ic - m_ii;
                        delay = `${d_delay}d${h_delay}h${m_delay}m`;
                        return delay
                    }
                }else {
                    d_delay = d_ic - d_ii;
                    if (m_ii > m_ic) {
                        m_delay = 60 - (m_ii - m_ic);
                        h_delay--;
                        if (h_delay == 0) {
                            d_delay = d_ic - d_ii;
                        } 
                        delay = `${d_delay}d${h_delay}h${m_delay}m`;
                        return delay    
                    } else {
                        m_delay = m_ic - m_ii;
                        delay = `${d_delay}d${h_delay}h${m_delay}m`;
                        return delay
                    } 
                }
            } 
        } else {
            h_delay = h_ic - h_ii;
            if (h_delay >= 0) {
                if (h_delay == 0) {
                    if (m_ii > m_ic) {
                        m_delay = 60 - (m_ii - m_ic);
                        h_delay = 23;
                        d_delay--; 
                        delay = `${d_delay}d${h_delay}h${m_delay}m`;
                        return delay
                    } else {
                        m_delay = m_ic - m_ii;
                        delay = `${d_delay}d${h_delay}h${m_delay}m`;
                        return delay
                    }
                }else {
                    if (m_ii > m_ic) {
                        m_delay = 60 - (m_ii - m_ic);
                        h_delay--;
                        if (h_delay == 0) {
                            d_delay--;
                            delay = `${d_delay}d${h_delay}h${m_delay}m`;
                            return delay
                        } else {
                        delay = `${d_delay}d${h_delay}h${m_delay}m`;
                        return delay
                        }
                    } else {
                        m_delay = m_ic - m_ii;
                        delay = `${d_delay}d${h_delay}h${m_delay}m`;
                        return delay
                    } 
                }
            }
        }
    } if (d_ic == d_ii) {
        if (h_ii > h_ic) {
            h_delay = 24 - (h_ii - h_ic);
            if (m_ii > m_ic) {
                m_delay = 60 - (m_ii > m_ic);
                h_delay--; 
                delay = `${d_delay}d${h_delay}h${m_delay}m`;
                return delay
            }
        m_delay = m_ic - m_ii;
        delay = `${d_delay}d${h_delay}h${m_delay}m`;
        return delay
        } else { 
            h_delay = h_ic - h_ii;
            if (m_ii > m_ic) {
                m_delay = 60 - (m_ii - m_ic);
                h_delay--;
                delay = `${d_delay}d${h_delay}h${m_delay}m`;
                return delay
            }
            m_delay = m_ic - m_ii;
            delay = `${d_delay}d${h_delay}h${m_delay}m`;
            return delay
        } 
    }
}

/** gerar copia da inicial**/
function gerar_copia_incial_crise() {
    numero_inicial_crise = document.getElementById('numero_inicial_crise').value;
    cliente_inicial_crise = document.getElementById('cliente_inicial_crise').value;
    acn_inicial_crise = document.getElementById('acn_inicial_crise').value;
    link_teams_inicial_crise = document.getElementById('link_teams_inicial_crise').value;
    telefone_teams_inicial_crise = document.getElementById('telefone_teams_inicial_crise').value;
    id_teams_inicial_crise = document.getElementById('id_teams_inicial_crise').value;
    sintoma_inicial_crise = document.getElementById('sintoma_inicial_crise').value;
    impacto_inicial_crise = document.getElementById('impacto_inicial_crise').value;
    inicio_impacto_inicial_crise = layout_tempo_crise(document.getElementById('inicio_impacto_inicial_crise').value);
    inicio_crise = layout_tempo_crise(document.getElementById('inicio_crise').value);
    delay = calcular_tempo_crise(inicio_impacto_inicial_crise, inicio_crise);
    identificado_inicial_crise = document.getElementById('identificado_inicial_crise').value;
    rm_inicial_crise = document.getElementById('rm_inicial_crise').value;
    grupo_rm_inicial_crise = document.getElementById('grupo_rm_inicial_crise').value;
    equipes_atuando_inicial_crise = document.getElementById('equipes_atuando_inicial_crise').value;
    responsavel_tsr_inicial_crise = document.getElementById('responsavel_tsr_inicial_crise').value;
    texto_atualizacao_previa = `Iniciando Crise: ${numero_inicial_crise} <br>Cliente: ${cliente_inicial_crise} <br>Ambiente: ${acn_inicial_crise} <br>Teams: ${link_teams_inicial_crise} <br>Telefone: ${telefone_teams_inicial_crise}       ID: ${id_teams_inicial_crise}# <br><br>Sintoma: ${sintoma_inicial_crise} <br>Impacto: ${impacto_inicial_crise} <br><br>Inicio do Impacto: ${inicio_impacto_inicial_crise} <br>Inicio da crise: ${inicio_crise} <br>Delay Impacto X Tratativa: ${delay} <br>Identificado por: ${identificado_inicial_crise} <br><br>Resolution Manager: ${rm_inicial_crise}/${grupo_rm_inicial_crise}<br>Equipe atuando: ${equipes_atuando_inicial_crise}<br>Responsável TSR: ${responsavel_tsr_inicial_crise}`;
    texto_inicial_crise.innerHTML = texto_atualizacao_previa;
}


/** Trocar os botoes para chamar o texto sem checkpoint ou com **/
function troca_botao_copia_checkpoint() {
    botao_crise_checkpoint.style.display = 'grid';
    botao_crise_sem_checkpoint.style.display = 'none'; 
}

function troca_botao_copia() {
    botao_crise_checkpoint.style.display = 'none';
    botao_crise_sem_checkpoint.style.display = 'grid'; 
}


/** gerar copia das atualizações (Problema que nao pula linha automatico) **/
function gerar_copia_atualizacao_crise() {
    cliente_atualizacao_crise = document.getElementById('cliente_atualizacao_crise').value;
    acn_atualizacao_crise = document.getElementById('acn_atualizacao_crise').value;
    status_atualizacao_crise = document.getElementById('status_atualizacao_crise').value;
    acoes_atualizacao_crise = document.getElementById('acoes_atualizacao_crise').value;
    previsto_atualizacao_crise = document.getElementById('previsto_atualizacao_crise').value;
    rm_atualizacao_crise = document.getElementById('rm_atualizacao_crise').value;
    grupo_rm_atualizacao_crise = document.getElementById('grupo_rm_atualizacao_crise').value;
    tsr_atualizacao_crise = document.getElementById('tsr_atualizacao_crise').value;
    texto_atualizacao_previa = `Atualização Crise: ${numero_inicial_crise} <br>Cliente: ${cliente_atualizacao_crise} <br>Ambiente: ${acn_atualizacao_crise} <br>Status: ${status_atualizacao_crise} <br><br>Ações Realizadas/Em Andamento <br>${acoes_atualizacao_crise} <br><br>Ações Planejadas/Previstas <br>${previsto_atualizacao_crise} <br><br>Resolution Manager: ${rm_atualizacao_crise}/${grupo_rm_atualizacao_crise} <br> Responsável TSR: ${tsr_atualizacao_crise}`;
    texto_atualizacao_crise.innerHTML = texto_atualizacao_previa;
}

function gerar_copia_atualizacao_checkpoint_crise() {
    cliente_atualizacao_crise = document.getElementById('cliente_atualizacao_crise').value;
    acn_atualizacao_crise = document.getElementById('acn_atualizacao_crise').value;
    status_atualizacao_crise = document.getElementById('status_atualizacao_crise').value;
    link_atualizacao_crise = document.getElementById('link_atualizacao_crise').value;
    acoes_atualizacao_crise = document.getElementById('acoes_atualizacao_crise').value;
    previsto_atualizacao_crise = document.getElementById('previsto_atualizacao_crise').value;
    rm_atualizacao_crise = document.getElementById('rm_atualizacao_crise').value;
    grupo_rm_atualizacao_crise = document.getElementById('grupo_rm_atualizacao_crise').value;
    tsr_atualizacao_crise = document.getElementById('tsr_atualizacao_crise').value;
    texto_atualizacao_previa = `Atualização Crise: ${numero_inicial_crise} <br>Cliente: ${cliente_atualizacao_crise} <br>Ambiente: ${acn_atualizacao_crise} <br>Status: ${status_atualizacao_crise} <br>Teams: ${link_atualizacao_crise}<br><br>Ações Realizadas/Em Andamento <br>${acoes_atualizacao_crise} <br><br>Ações Planejadas/Previstas <br>${previsto_atualizacao_crise} <br><br>Resolution Manager: ${rm_atualizacao_crise}/${grupo_rm_atualizacao_crise} <br> Responsável TSR: ${tsr_atualizacao_crise}`;
    texto_atualizacao_crise.innerHTML = texto_atualizacao_previa;
}

/** gerar copia da validação**/
function gerar_copia_validacao_crise() {
    cliente_validacao_crise = document.getElementById('cliente_validacao_crise').value;
    acn_validacao_crise = document.getElementById('acn_validacao_crise').value;
    status_validacao_crise = document.getElementById('status_validacao_crise').value;
    solucao_validacao_crise = document.getElementById('solucao_validacao_crise').value;
    link_validacao_crise = document.getElementById('link_validacao_crise').value;
    tsr_validacao_crise = document.getElementById('tsr_validacao_crise').value;
    texto_atualizacao_previa = `Validação da Crise: ${numero_inicial_crise} <br>Cliente: ${cliente_validacao_crise} <br>Ambiente: ${acn_validacao_crise} <br></br>Status: ${status_validacao_crise} <br></br>Solução Aplicada: ${solucao_validacao_crise}<br>Link Teams: ${link_validacao_crise} <br>Responsável TSR: ${tsr_validacao_crise}`;
    texto_validacao_crise.innerHTML = texto_atualizacao_previa;
}

/** gerar copia do encerramento**/
function gerar_copia_encerramento_crise() {
    acn_encerramento_crise = document.getElementById('acn_encerramento_crise').value;
    cliente_encerramento_crise = document.getElementById('cliente_encerramento_crise').value;
    status_encerramento_crise = document.getElementById('status_encerramento_crise').value;
    fim_impacto_encerramento_crise = layout_tempo_crise(document.getElementById('fim_impacto_encerramento_crise').value);
    delay_periodo_impacto = calcular_tempo_crise(inicio_impacto_inicial_crise, fim_impacto_encerramento_crise);
    fim_encerramento_crise = layout_tempo_crise(document.getElementById('fim_encerramento_crise').value);
    delay_periodo_crise = calcular_tempo_crise(inicio_crise, fim_encerramento_crise);
    delay_periodo_validacao = calcular_tempo_crise(fim_impacto_encerramento_crise, fim_encerramento_crise);
    rm_encerramento_crise = document.getElementById('rm_encerramento_crise').value;
    grupo_rm_encerramento_crise = document.getElementById('grupo_rm_encerramento_crise').value;
    tsr_encerramento_crise = document.getElementById('tsr_encerramento_crise').value;
    texto_atualizacao_previa = `Encerramento Crise: ${numero_inicial_crise}<br>Cliente: ${cliente_encerramento_crise} <br>Ambiente: ${acn_encerramento_crise} <br><br>Status: ${status_encerramento_crise} <br><br>Periodo da crise: ${inicio_crise} às ${fim_encerramento_crise} (${delay_periodo_crise}) <br>Período do impacto: ${inicio_impacto_inicial_crise} às ${fim_impacto_encerramento_crise} (${delay_periodo_impacto}) <br>periodo em validação: ${fim_impacto_encerramento_crise} às ${fim_encerramento_crise} (${delay_periodo_validacao}) <br><br>Resolution Manager: ${rm_encerramento_crise}/${grupo_rm_encerramento_crise} <br>Responsável TSR: ${tsr_encerramento_crise}`;
    texto_encerramento_crise.innerHTML = texto_atualizacao_previa;
}

/** gerar copia da unica**/
function gerar_copia_unica_crise() {
    var numero_unica_crise = document.getElementById('numero_unica_crise').value;
    var cliente_unica_crise = document.getElementById('cliente_unica_crise').value;
    var acn_unica_crise = document.getElementById('acn_unica_crise').value;
    var sintoma_unica_crise = document.getElementById('sintoma_unica_crise').value;
    var status_unica_crise = document.getElementById('status_unica_crise').value;
    var identificacao_unica_crise = document.getElementById('identificacao_unica_crise').value;
    var horario_notificacao_unica_crise = layout_tempo_crise(document.getElementById('horario_notificacao_unica_crise').value);
    var inicio_impacto_unica_crise = layout_tempo_crise(document.getElementById('inicio_impacto_unica_crise').value);
    var fim_impacto_unica_crise = layout_tempo_crise(document.getElementById('fim_impacto_unica_crise').value);
    var delay_periodo_crise_unica = calcular_tempo_crise(inicio_impacto_unica_crise, fim_impacto_unica_crise);
    var tsr_unica_crise = document.getElementById('tsr_unica_crise').value;
    texto_atualizacao_previa = `Crise Única: ${numero_unica_crise} <br> Cliente: ${cliente_unica_crise} <br>Ambiente: ${acn_unica_crise} <br><br>Sintoma: ${sintoma_unica_crise} </br>Impacto: ${status_unica_crise} <br><br>Identificado por: ${identificacao_unica_crise} <br>Horário de notificação para o TSR: ${horario_notificacao_unica_crise} <br>Período de Impacto: ${inicio_impacto_unica_crise}  até ${fim_impacto_unica_crise} (${delay_periodo_crise_unica}) <br></br>Responsável TSR: ${tsr_unica_crise}`;
    texto_unica_crise.innerHTML = texto_atualizacao_previa;
}

/** Enviar comunicação de crise  **/
function enviar_inicial_crise() {
    atualizacao_anterior_crise.innerHTML = texto_atualizacao_previa;
    document.getElementById('popup_inicial_crise').style.display =  'none';
    texto_inicial_crise.innerHTML = 'texto';
    crise_1_incial.style.backgroundColor = '#154d15';
    numero_crise_1.innerHTML = numero_inicial_crise;
    tsr_crise_1.innerHTML = responsavel_tsr_inicial_crise;

}

function enviar_atualizacao_crise() {
    atualizacao_anterior_crise.innerHTML = texto_atualizacao_previa;
    texto_atualizacao_crise.innerHTML = 'texto';
    document.getElementById('popup_atualizacao_crise').style.display =  'none';
    crise_1_atualizacao.style.backgroundColor = '#154d15';
    numero_crise_1
}

function enviar_validacao_crise() {
    atualizacao_anterior_crise.innerHTML = texto_atualizacao_previa;
    document.getElementById('popup_validacao_crise').style.display =  'none';
    texto_validacao_crise.innerHTML = 'texto';
    crise_1_validacao.style.backgroundColor = '#154d15';
}

function enviar_encerramento_crise() {
    atualizacao_anterior_crise.innerHTML = texto_atualizacao_previa;
    texto_encerramento_crise.innerHTML = 'texto';
    document.getElementById('popup_encerramento_crise').style.display =  'none';
    crise_1_encerramento.style.backgroundColor = '#154d15';
}

function enviar_unica_crise() {
    atualizacao_anterior_crise.innerHTML = texto_atualizacao_previa;
    texto_unica_crise.innerHTML = 'texto';
    document.getElementById('popup_unica_crise').style.display =  'none';
    crise_1_unica.style.backgroundColor = '#154d15';
}

