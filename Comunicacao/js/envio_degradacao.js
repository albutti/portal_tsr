
/** geracao o popup de Degradaçao**/

function abrir_inicial_degradacao(){
    document.getElementById('popup_inicial_degradacao').style.display = 'block';
}
function fechar_inicial_degradacao(){
    document.getElementById('popup_inicial_degradacao').style.display =  'none';
}

function abrir_atualizacao_degradacao(){
    document.getElementById('popup_atualizacao_degradacao').style.display = 'block';
}
function fechar_atualizacao_degradacao(){
    document.getElementById('popup_atualizacao_degradacao').style.display =  'none';
}

function abrir_validacao_degradacao(){
    document.getElementById('popup_validacao_degradacao').style.display = 'block';
}
function fechar_validacao_degradacao(){
    document.getElementById('popup_validacao_degradacao').style.display =  'none';
}

function abrir_encerramento_degradacao(){
    document.getElementById('popup_encerramento_degradacao').style.display = 'block';
}
function fechar_encerramento_degradacao(){
    document.getElementById('popup_encerramento_degradacao').style.display =  'none';
}

function abrir_unica_degradacao(){
    document.getElementById('popup_unica_degradacao').style.display = 'block';
}

function fechar_unica_degradacao(){
    document.getElementById('popup_unica_degradacao').style.display =  'none';
}

/** 2,0,2,2, -, 0,7, -, 0,9, T,  1, 2,  :,  1, 8 **/
/** 0,1,2,3, 4, 5,6, 7, 8,9, 10, 11,12, 13, 14,15 **/
function layout_tempo_degradacao(tempo) {
    var layout = tempo.split('');
    var layout_f = `${layout[8]}${layout[9]}/${layout[5]}${layout[6]}/${layout[0]}${layout[1]}${layout[2]}${layout[3]} ${layout[11]}${layout[12]}:${layout[14]}${layout[15]}`
    return layout_f
}

/** calcula o tempo de delay do inicio do impacto para o inicio do processo **/
function calcular_tempo_degradacao(impacto, inicio){
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
                    window.alert (d_delay);
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

/** geracao da copia de degradação**/
var texto_inicial_degradacao = document.getElementById('texto_inicial_degradacao');
var texto_atualizacao_degradacao = document.getElementById('texto_atualizacao_degradacao');
var texto_validacao_degradacao = document.getElementById('texto_validacao_degradacao');
var texto_encerramento_degradacao = document.getElementById('texto_encerramento_degradacao');
var texto_unica_degradacao = document.getElementById('texto_unica_degradacao');

/** gerar copia da inicial**/
function gerar_copia_incial_degradacao() {
    var texto_inicial_degradacao = document.getElementById('texto_inicial_degradacao');
    var numero_inicial_degradacao = document.getElementById('numero_inicial_degradacao').value;
    var cliente_inicial_degradacao = document.getElementById('cliente_inicial_degradacao').value;
    var acn_inicial_degradacao = document.getElementById('acn_inicial_degradacao').value;
    var link_teams_inicial_degradacao = document.getElementById('link_teams_inicial_degradacao').value;
    var telefone_teams_inicial_degradacao = document.getElementById('telefone_teams_inicial_degradacao').value;
    var id_teams_inicial_degradacao = document.getElementById('id_teams_inicial_degradacao').value;
    var sintoma_inicial_degradacao = document.getElementById('sintoma_inicial_degradacao').value;
    var impacto_inicial_degradacao = document.getElementById('impacto_inicial_degradacao').value;
    var inicio_impacto_inicial_degradacao = layout_tempo_degradacao(document.getElementById('inicio_impacto_inicial_degradacao').value);
    var inicio_degradacao = layout_tempo_degradacao(document.getElementById('inicio_degradacao').value);
    var delay_degradacao = calcular_tempo_degradacao();
    var identificado_inicial_degradacao = document.getElementById('identificado_inicial_degradacao').value;
    var rm_inicial_degradacao = document.getElementById('rm_inicial_degradacao').value;
    var grupo_rm_inicial_degradacao = document.getElementById('grupo_rm_inicial_degradacao').value;
    var equipes_atuando_inicial_degradacao = document.getElementById('equipes_atuando_inicial_degradacao').value;
    var responsavel_tsr_inicial_degradacao = document.getElementById('responsavel_tsr_inicial_degradacao').value;
    texto_inicial_degradacao.innerHTML = `Iniciando Degradação: ${numero_inicial_degradacao} <br>Cliente: ${cliente_inicial_degradacao} <br>Ambiente: ${acn_inicial_degradacao} <br>Teams: ${link_teams_inicial_degradacao} <br>Telefone: ${telefone_teams_inicial_degradacao}        ID: ${id_teams_inicial_degradacao}# <br><br>Sintoma: ${sintoma_inicial_degradacao} <br>Impacto: ${impacto_inicial_degradacao} <br><br>Inicio do Impacto: ${inicio_impacto_inicial_degradacao} <br>Inicio da Degradação: ${inicio_degradacao} <br>Delay Impacto X Tratativa: ${delay_degradacao}<br> Identificado por: ${identificado_inicial_degradacao} <br><br>Resolution Manager: ${rm_inicial_degradacao}/${grupo_rm_inicial_degradacao}<br>Equipe atuando: ${equipes_atuando_inicial_degradacao} <br>Responsável TSR: ${responsavel_tsr_inicial_degradacao}`;
}

/** gerar copia da atualização**/
function gerar_copia_atualizacao_degradacao() {
    var numero_atualizacao_degradacao = document.getElementById('numero_atualizacao_degradacao').value;
    var cliente_atualizacao_degradacao = document.getElementById('cliente_atualizacao_degradacao').value;
    var acn_atualizacao_degradacao = document.getElementById('acn_atualizacao_degradacao').value;
    var status_atualizacao_degradacao = document.getElementById('status_atualizacao_degradacao').value;
    var acoes_atualizacao_degradacao = document.getElementById('acoes_atualizacao_degradacao').value;
    var previsto_atualizacao_degradacao = document.getElementById('previsto_atualizacao_degradacao').value;
    var rm_atualizacao_degradacao = document.getElementById('rm_atualizacao_degradacao').value;
    var grupo_rm_atualizacao_degradacao = document.getElementById('grupo_rm_atualizacao_degradacao').value;
    var tsr_atualizacao_degradacao = document.getElementById('tsr_atualizacao_degradacao').value;

    texto_atualizacao_degradacao.innerHTML = `Atualização Degradação: ${numero_atualizacao_degradacao} <br>Cliente: ${cliente_atualizacao_degradacao} <br>Ambiente: ${acn_atualizacao_degradacao} <br>Status: ${status_atualizacao_degradacao} <br><br>Ações Realizadas/Em Andamento ${acoes_atualizacao_degradacao} <br><br>Ações Planejadas/Previstas <br>${previsto_atualizacao_degradacao} <br><br>Resolution Manager: ${rm_atualizacao_degradacao}/${grupo_rm_atualizacao_degradacao} <br> Responsável TSR: ${tsr_atualizacao_degradacao}`;
}

/** gerar copia da validação**/
function gerar_copia_validacao_degradacao() {
    var numero_validacao_degradacao = document.getElementById('numero_validacao_degradacao').value;
    var cliente_validacao_degradacao = document.getElementById('cliente_validacao_degradacao').value;
    var acn_validacao_degradacao = document.getElementById('acn_validacao_degradacao').value;
    var status_validacao_degradacao = document.getElementById('status_validacao_degradacao').value;
    var solucao_validacao_degradacao = document.getElementById('solucao_validacao_degradacao').value;
    var tsr_validacao_degradacao = document.getElementById('tsr_validacao_degradacao').value;

    texto_validacao_degradacao.innerHTML = `Validação da Degradação: ${numero_validacao_degradacao} <br>Cliente: ${cliente_validacao_degradacao} <br>Ambiente: ${acn_validacao_degradacao} <br></br>Status: ${status_validacao_degradacao} <br></br>Solução Aplicada: ${solucao_validacao_degradacao} <br>Responsável TSR: ${tsr_validacao_degradacao}`;
}

/** gerar copia do encerramento**/
function gerar_copia_encerramento_degradacao() {
    var numero_encerramento_degradacao = document.getElementById('numero_encerramento_degradacao').value;
    var acn_encerramento_degradacao = document.getElementById('acn_encerramento_degradacao').value;
    var cliente_encerramento_degradacao = document.getElementById('cliente_encerramento_degradacao').value;
    var status_encerramento_degradacao = document.getElementById('status_encerramento_degradacao').value;

    var inicio_impacto_encerramento_degradacao = layout_tempo_degradacao(document.getElementById('inicio_impacto_encerramento_degradacao').value);
    var fim_impacto_encerramento_degradacao = layout_tempo_degradacao(document.getElementById('fim_impacto_encerramento_degradacao').value);
    var delay_periodo_impacto_degradacao = calcular_tempo_degradacao(inicio_impacto_encerramento_degradacao, fim_impacto_encerramento_degradacao);

    var inicio_encerramento_degradacao = layout_tempo_degradacao(document.getElementById('inicio_encerramento_degradacao').value);
    var fim_encerramento_degradacao = layout_tempo_degradacao(document.getElementById('fim_encerramento_degradacao').value);
    var delay_periodo_degradacao = calcular_tempo_degradacao(inicio_encerramento_degradacao, fim_encerramento_degradacao);

    var delay_periodo_validacao_degradacao = calcular_tempo_degradacao(fim_impacto_encerramento_degradacao, fim_encerramento_degradacao);

    var rm_encerramento_degradacao = document.getElementById('rm_encerramento_degradacao').value;
    var grupo_rm_encerramento_degradacao = document.getElementById('grupo_rm_encerramento_degradacao').value;
    var tsr_encerramento_degradacao = document.getElementById('tsr_encerramento_degradacao').value;

    texto_encerramento_degradacao.innerHTML = `Encerramento Crise: ${numero_encerramento_degradacao}<br>Cliente: ${acn_encerramento_degradacao} <br>Ambiente: ${cliente_encerramento_degradacao} <br><br>Status: ${status_encerramento_degradacao} <br><br>Periodo da crise: ${inicio_encerramento_degradacao} às ${fim_encerramento_degradacao} (${delay_periodo_degradacao}) <br>Período do impacto: ${inicio_impacto_encerramento_degradacao} às ${fim_impacto_encerramento_degradacao} (${delay_periodo_impacto_degradacao}) <br>periodo em validação: ${fim_impacto_encerramento_degradacao} às ${fim_encerramento_degradacao} (${delay_periodo_validacao_degradacao}) <br><br>Resolution Manager: ${rm_encerramento_degradacao}/${grupo_rm_encerramento_degradacao} <br>Responsável TSR: ${tsr_encerramento_degradacao}`;
}

/** gerar copia da unica**/
function gerar_copia_unica_degradacao() {
    var numero_unica_degradacao = document.getElementById('numero_unica_degradacao').value;
    var cliente_unica_degradacao = document.getElementById('cliente_unica_degradacao').value;
    var acn_unica_degradacao = document.getElementById('acn_unica_degradacao').value;
    var sintoma_unica_degradacao = document.getElementById('sintoma_unica_degradacao').value;
    var status_unica_degradacao = document.getElementById('status_unica_degradacao').value;
    var identificacao_unica__degradacao = document.getElementById('identificacao_unica_degradacao').value;
    var horario_notificacao_unica_degradacao = layout_tempo_degradacao(document.getElementById('horario_notificacao_unica_degradacao').value);
    var inicio_impacto_unica_degradacao = layout_tempo_degradacao(document.getElementById('inicio_impacto_unica_degradacao').value);
    var fim_impacto_unica_degradacao = layout_tempo_degradacao(document.getElementById('fim_impacto_unica_degradacao').value);
    var delay_periodo_crise_degradacao = calcular_tempo_degradacao(inicio_impacto_unica_degradacao, fim_impacto_unica_degradacao);
    var tsr_unica_degradacao = document.getElementById('tsr_unica_degradacao').value;

    texto_unica_degradacao.innerHTML = `Degradação Única: ${numero_unica_degradacao} <br> Cliente: ${cliente_unica_degradacao} <br>Ambiente: ${acn_unica_degradacao} <br><br>Sintoma: ${sintoma_unica_degradacao} </br>Impacto: ${status_unica_degradacao} <br><br>Identificado por: ${identificacao_unica__degradacao} <br>Horário de notificação para o TSR: ${horario_notificacao_unica_degradacao} <br>Período de Impacto: ${inicio_impacto_unica_degradacao}  até ${fim_impacto_unica_degradacao} (${delay_periodo_crise_degradacao}) <br></br>Responsável TSR: ${tsr_unica_degradacao}`;
}