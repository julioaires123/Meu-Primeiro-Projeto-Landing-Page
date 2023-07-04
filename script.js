setInterval(function relog() {
    let rel = document.getElementById('relogio01');
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
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
    document.getElementById('data01').innerHTML = `${dia}/${mes}/${ano}`;
}, 1000);

setInterval(function relog2() {
    let rel = document.getElementById('relogio2');
    let data = new Date();
    data.setHours(data.getHours() + 1);
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
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
    document.getElementById('data2').innerHTML = `${dia}/${mes}/${ano}`;
}, 1000);

setInterval(function relog3() {
    let rel = document.getElementById('relogio3');
    let data = new Date();
    data.setHours(data.getHours() - 1);
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
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
    document.getElementById('data3').innerHTML = `${dia}/${mes}/${ano}`;
}, 1000);

setInterval(function relog() {
    let rel = document.getElementById('relogio01');
    let data = new Date();
    let diaSemana = obterDiaSemanaPorExtenso(data.getDay());
    let dia = data.getDate();
    let mes = obterNomeMesPorExtenso(data.getMonth());
    let ano = data.getFullYear();
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
    rel.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
    document.getElementById('hora01').innerHTML = `${h}:${m}:${s}`;
}, 1000);

// Função para obter o nome do dia da semana por extenso
function obterDiaSemanaPorExtenso(diaSemana) {
    let diasSemana = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ];
    return diasSemana[diaSemana];
}

// Função para obter o nome do mês por extenso
function obterNomeMesPorExtenso(mes) {
    let meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];
    return meses[mes];
}
