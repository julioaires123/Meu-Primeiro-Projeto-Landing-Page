// Horário de Brasília
setInterval(function() {
    let rel = document.getElementById('relogio01');
    let data = new Date();
    data.setSeconds(data.getSeconds() + 20);
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
}, 1000);

// Demais horários
function formatTime(data) {
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

    return `${h}:${m}:${s}`;
}

setInterval(function() {
    let rel = document.getElementById('Relogio05');
    let data = new Date();
    rel.innerHTML = formatTime(data);
}, 1000);

setInterval(function() {
    let rel = document.getElementById('date');
    let data = new Date();
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let semanas = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    let diaSem = data.getDay();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    rel.innerHTML = semanas[diaSem] + ", " + dia + " de " + meses[mes] + " de " + ano;
}, 1000);
