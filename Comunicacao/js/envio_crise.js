/** abrir o popup de Crise**/
function abrir_inicial_crise(){
    document.getElementById('popup_inicial_crise').style.display = 'block';
}
function fechar_inicial_crise(){
    document.getElementById('popup_inicial_crise').style.display =  'none';
}

function abrir_atualizacao_crise(){
    document.getElementById('popup_atualizacao_crise').style.display = 'block';
}
function fechar_atualizacao_crise(){
    document.getElementById('popup_atualizacao_crise').style.display =  'none';
}

function abrir_validacao_crise(){
    document.getElementById('popup_validacao_crise').style.display = 'block';
}
function fechar_validacao_crise(){
    document.getElementById('popup_validacao_crise').style.display =  'none';
}

function abrir_encerramento_crise(){
    document.getElementById('popup_encerramento_crise').style.display = 'block';
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

/** busca do campo do texto **/
var texto_atualizacao_crise = document.getElementById('texto_atualizacao_crise');
var texto_validacao_crise = document.getElementById('texto_validacao_crise');
var texto_encerramento_crise = document.getElementById('texto_encerramento_crise');
var texto_unica_crise = document.getElementById('texto_unica_crise');

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
    var d_ii = parseInt(a_ii[8] + a_ii[9]);
    var d_ic = parseInt(a_ic[8] + a_ic[9]);

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
                    d_delay = 0;
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
    var texto_inicial_crise = document.getElementById('texto_inicial_crise');
    var numero_inicial_crise = document.getElementById('numero_inicial_crise').value;
    var cliente_inicial_crise = document.getElementById('cliente_inicial_crise').value;
    var acn_inicial_crise = document.getElementById('acn_inicial_crise').value;
    var link_teams_inicial_crise = document.getElementById('link_teams_inicial_crise').value;
    var telefone_teams_inicial_crise = document.getElementById('telefone_teams_inicial_crise').value;
    var id_teams_inicial_crise = document.getElementById('id_teams_inicial_crise').value;
    var sintoma_inicial_crise = document.getElementById('sintoma_inicial_crise').value;
    var impacto_inicial_crise = document.getElementById('impacto_inicial_crise').value;
    var inicio_impacto_inicial_crise = layout_tempo_crise(document.getElementById('inicio_impacto_inicial_crise').value);
    var inicio_crise = layout_tempo_crise(document.getElementById('inicio_crise').value);
    var delay = calcular_tempo_crise(inicio_impacto_inicial_crise, inicio_crise);
    var identificado_inicial_crise = document.getElementById('identificado_inicial_crise').value;
    var rm_inicial_crise = document.getElementById('rm_inicial_crise').value;
    var grupo_rm_inicial_crise = document.getElementById('grupo_rm_inicial_crise').value;
    var equipes_atuando_inicial_crise = document.getElementById('equipes_atuando_inicial_crise').value;
    var responsavel_tsr_inicial_crise = document.getElementById('responsavel_tsr_inicial_crise').value;
    texto_inicial_crise.innerHTML = `Iniciando Crise: ${numero_inicial_crise} <br>Cliente: ${cliente_inicial_crise} <br>Ambiente: ${acn_inicial_crise} <br>Teams: ${link_teams_inicial_crise} <br>Telefone: ${telefone_teams_inicial_crise}       ID: ${id_teams_inicial_crise}# <br><br>Sintoma: ${sintoma_inicial_crise} <br>Impacto: ${impacto_inicial_crise} <br><br>Inicio do Impacto: ${inicio_impacto_inicial_crise} <br>Inicio da crise: ${inicio_crise} <br>Delay Impacto X Tratativa: ${delay} <br>Identificado por: ${identificado_inicial_crise} <br><br>Resolution Manager: ${rm_inicial_crise}/${grupo_rm_inicial_crise}<br>Equipe atuando: ${equipes_atuando_inicial_crise}<br>Responsável TSR: ${responsavel_tsr_inicial_crise}`;
}
/** gerar copia das atualizações (Problema que nao pula linha automatico) **/
function gerar_copia_atualizacao_crise() {
    var numero_atualizacao_crise = document.getElementById('numero_atualizacao_crise').value;
    var cliente_atualizacao_crise = document.getElementById('cliente_atualizacao_crise').value;
    var acn_atualizacao_crise = document.getElementById('acn_atualizacao_crise').value;
    var status_atualizacao_crise = document.getElementById('status_atualizacao_crise').value;
    var acoes_atualizacao_crise = document.getElementById('acoes_atualizacao_crise').value;
    var previsto_atualizacao_crise = document.getElementById('previsto_atualizacao_crise').value;
    var rm_atualizacao_crise = document.getElementById('rm_atualizacao_crise').value;
    var grupo_rm_atualizacao_crise = document.getElementById('grupo_rm_atualizacao_crise').value;
    var tsr_atualizacao_crise = document.getElementById('tsr_atualizacao_crise').value;
    texto_atualizacao_crise.innerHTML = `Atualização Crise: ${numero_atualizacao_crise} <br>Cliente: ${cliente_atualizacao_crise} <br>Ambiente: ${acn_atualizacao_crise} <br>Status: ${status_atualizacao_crise} <br><br>Ações Realizadas/Em Andamento <br>${acoes_atualizacao_crise} <br><br>Ações Planejadas/Previstas <br>${previsto_atualizacao_crise} <br><br>Resolution Manager: ${rm_atualizacao_crise}/${grupo_rm_atualizacao_crise} <br> Responsável TSR: ${tsr_atualizacao_crise}`;
}

/** gerar copia da validação**/
function gerar_copia_validacao_crise() {
    var numero_validacao_crise = document.getElementById('numero_validacao_crise').value;
    var cliente_validacao_crise = document.getElementById('cliente_validacao_crise').value;
    var acn_validacao_crise = document.getElementById('acn_validacao_crise').value;
    var status_validacao_crise = document.getElementById('status_validacao_crise').value;
    var solucao_validacao_crise = document.getElementById('solucao_validacao_crise').value;
    var tsr_validacao_crise = document.getElementById('tsr_validacao_crise').value;
    texto_validacao_crise.innerHTML = `Validação da Crise: ${numero_validacao_crise} <br>Cliente: ${cliente_validacao_crise} <br>Ambiente: ${acn_validacao_crise} <br></br>Status: ${status_validacao_crise} <br></br>Solução Aplicada: ${solucao_validacao_crise} <br>Responsável TSR: ${tsr_validacao_crise}`;
}

/** gerar copia do encerramento**/
function gerar_copia_encerramento_crise() {
    var numero_encerramento_crise = document.getElementById('numero_encerramento_crise').value;
    var acn_encerramento_crise = document.getElementById('acn_encerramento_crise').value;
    var cliente_encerramento_crise = document.getElementById('cliente_encerramento_crise').value;
    var status_encerramento_crise = document.getElementById('status_encerramento_crise').value;

    var inicio_impacto_encerramento_crise = layout_tempo_crise(document.getElementById('inicio_impacto_encerramento_crise').value);
    var fim_impacto_encerramento_crise = layout_tempo_crise(document.getElementById('fim_impacto_encerramento_crise').value);
    var delay_periodo_impacto = calcular_tempo_crise(inicio_impacto_encerramento_crise, fim_impacto_encerramento_crise);

    var inicio_encerramento_crise = layout_tempo_crise(document.getElementById('inicio_encerramento_crise').value);
    var fim_encerramento_crise = layout_tempo_crise(document.getElementById('fim_encerramento_crise').value);
    var delay_periodo_crise = calcular_tempo_crise(inicio_encerramento_crise, fim_encerramento_crise);

    var delay_periodo_validacao = calcular_tempo_crise(fim_impacto_encerramento_crise, fim_encerramento_crise);

    var rm_encerramento_crise = document.getElementById('rm_encerramento_crise').value;
    var grupo_rm_encerramento_crise = document.getElementById('grupo_rm_encerramento_crise').value;
    var tsr_encerramento_crise = document.getElementById('tsr_encerramento_crise').value;

    texto_encerramento_crise.innerHTML = `Encerramento Crise: ${numero_encerramento_crise}<br>Cliente: ${cliente_encerramento_crise} <br>Ambiente: ${acn_encerramento_crise} <br><br>Status: ${status_encerramento_crise} <br><br>Periodo da crise: ${inicio_encerramento_crise} às ${fim_encerramento_crise} (${delay_periodo_crise}) <br>Período do impacto: ${inicio_impacto_encerramento_crise} às ${fim_impacto_encerramento_crise} (${delay_periodo_impacto}) <br>periodo em validação: ${fim_impacto_encerramento_crise} às ${fim_encerramento_crise} (${delay_periodo_validacao}) <br><br>Resolution Manager: ${rm_encerramento_crise}/${grupo_rm_encerramento_crise} <br>Responsável TSR: ${tsr_encerramento_crise}`;
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
    texto_unica_crise.innerHTML = `Crise Única: ${numero_unica_crise} <br> Cliente: ${cliente_unica_crise} <br>Ambiente: ${acn_unica_crise} <br><br>Sintoma: ${sintoma_unica_crise} </br>Impacto: ${status_unica_crise} <br><br>Identificado por: ${identificacao_unica_crise} <br>Horário de notificação para o TSR: ${horario_notificacao_unica_crise} <br>Período de Impacto: ${inicio_impacto_unica_crise}  até ${fim_impacto_unica_crise} (${delay_periodo_crise_unica}) <br></br>Responsável TSR: ${tsr_unica_crise}`;
}
