// Função para formatar a hora considerando o fuso horário exato
function obterHoraFormatada(timeZone) {
    const agora = new Date();
    const opcoes = {
        timeZone: timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    return new Intl.DateTimeFormat('pt-BR', opcoes).format(agora);
}

// Atualiza todos os relógios na tela
function atualizarRelogios() {
    // Horário de Brasília (Oficial)
    document.getElementById('relogio01').textContent = obterHoraFormatada('America/Sao_Paulo');

    // Fernando de Noronha (UTC-2)
    document.getElementById('relogio2').textContent = obterHoraFormatada('America/Noronha');

    // Amazonas (UTC-4)
    document.getElementById('relogio3').textContent = obterHoraFormatada('America/Manaus');

    // Acre (UTC-5)
    document.getElementById('relogio4').textContent = obterHoraFormatada('America/Rio_Branco');
}

// Exibe a data no formato nativo estendido
function atualizarData() {
    const agora = new Date();
    const opcoes = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'America/Sao_Paulo'
    };
    
    let dataTexto = new Intl.DateTimeFormat('pt-BR', opcoes).format(agora);
    // Capitaliza a primeira letra do dia da semana
    dataTexto = dataTexto.charAt(0).toUpperCase() + dataTexto.slice(1);
    
    document.getElementById('date').textContent = dataTexto;
}

// Inicialização
function iniciar() {
    atualizarData();
    atualizarRelogios();
    
    // Atualiza exatamente a cada 1 segundo (1000ms) para alta performance
    setInterval(atualizarRelogios, 1000);
    
    // Atualiza a data a cada 1 minuto para garantir a virada do dia
    setInterval(atualizarData, 60000);
}

document.addEventListener('DOMContentLoaded', iniciar);
