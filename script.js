// horário de Brasília ////////////////////////////////////////////////////////////////////////
setInterval(function relog() {
    let rel = document.getElementById('relogio01');
    let data = new Date();
    data.setHours(data.getHours());
    data.setSeconds(data.getSeconds() + 19);
    data.setHours(data.getHours() + 3);
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    if (h < 10) { // coloca um zero antes dos números abaixo de dez: ex: 1:1:1 -> 01:01:01
        h = `0${h}`;
    }
    if (m < 10) {
        m = `0${m}`;
    }
    if (s < 10) {
        s = `0${s}`;
    }
    // Mostra a hora, minutos e segundos na página ////////////////////////////////////////////
    rel.innerHTML = `${h}:${m}:${s}`;
});

// horário de Fernando de Noronha ///////////////////////////////////////////////////////////////
setInterval(function relog2() {
    let rel = document.getElementById('relogio2');
    let data = new Date();
    data.setSeconds(data.getSeconds() + 0);
    data.setHours(data.getHours() + 1);
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    if (h < 10) {
        h = `0${h}`;
    }
    if (m < 10) {
        m = `0${m}`;
    }
    if (s < 10) {
        s = `0${s}`;
    }
    rel.innerHTML = `${h}:${m}:${s}`;
});

// horário do Amazonas /////////////////////////////////////////////////////////////////////////
setInterval(function relog3() {
    let rel = document.getElementById('relogio3');
    let data = new Date();
    data.setSeconds(data.getSeconds() + 0);
    data.setHours(data.getHours() - 1);
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    if (h < 10) {
        h = `0${h}`;
    }
    if (m < 10) {
        m = `0${m}`;
    }
    if (s < 10) {
        s = `0${s}`;
    }
    rel.innerHTML = `${h}:${m}:${s}`; // Mostra a hora, minutos e segundos na página
});

// horário do Acre /////////////////////////////////////////////////////////////////////////////
setInterval(function relog4() {
    let rel = document.getElementById('relogio4');
    let data = new Date();
    data.setSeconds(data.getSeconds() + 0);
    data.setHours(data.getHours() - 2);
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    if (h < 10) {
        h = `0${h}`;
    }
    if (m < 10) {
        m = `0${m}`;
    }
    if (s < 10) {
        s = `0${s}`;
    }
    rel.innerHTML = `${h}:${m}:${s}`; // Mostra a hora, minutos e segundos na página
});

// Dia, mês e ano //////////////////////////////////////////////////////////////////////////////

// Função para exibir a data atualizada
function exibirDataAtualizada() {
    let meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    let semanas = [
        "Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira",
        "Quinta-Feira", "Sexta-Feira", "Sábado"
    ];

    let data = new Date();
    let diasem = data.getDay();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();

    document.getElementById("date").innerHTML =
        semanas[diasem] + ", " + dia + " de " + meses[mes] + " de " + ano;
}

// Função para atualizar a data a cada segundo
function atualizarData() {
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    // Verifica se é meia-noite (00:00:00) para trocar o dia exibido
    if (horas === 0 && minutos === 0 && segundos === 0) {
        exibirDataAtualizada();
    }

    setTimeout(atualizarData, 1000); // Chama a função novamente após 1 segundo
}

// Chama a função para exibir a data assim que a página carrega
exibirDataAtualizada();

// Atualiza a data a cada segundo (troca automaticamente à meia-noite)
atualizarData();
