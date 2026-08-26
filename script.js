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

function atualizarRelogios() {
    document.getElementById('relogio01').textContent = obterHoraFormatada('America/Sao_Paulo');
    document.getElementById('relogio2').textContent = obterHoraFormatada('America/Noronha');
    document.getElementById('relogio3').textContent = obterHoraFormatada('America/Manaus');
    document.getElementById('relogio4').textContent = obterHoraFormatada('America/Rio_Branco');
}

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
    dataTexto = dataTexto.charAt(0).toUpperCase() + dataTexto.slice(1);
    
    document.getElementById('date').textContent = dataTexto;
}

function iniciar() {
    atualizarData();
    atualizarRelogios();
    
    setInterval(atualizarRelogios, 1000);
    setInterval(atualizarData, 60000);
}

document.addEventListener('DOMContentLoaded', iniciar);
