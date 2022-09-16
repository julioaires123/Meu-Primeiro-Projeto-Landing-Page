//horário de Brasília

setInterval(function relog() {
    let rel = document.getElementById('relogio')
    let data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds() + 30;

    if (m > 59) {

        h = h + 1;
    }

    if (s > 59) {

        m = m + 1;
    }
    if (m === 60) {

        m = 00;
    }

    if (s === 60) {

        s = 00;
    }
    if (s === 61) {

        s = 01;
    }
    if (s === 62) {

        s = 02;
    }

    if (s === 63) {

        s = 03;
    }
    if (s === 64) {

        s = 04;
    }
    if (s === 65) {

        s = 05;
    }
    if (s === 66) {

        s = 06;
    }

    if (s === 67) {

        s = 07;
    }
    if (s === 68) {

        s = 08;
    }
    if (s === 69) {

        s = 09;
    }

    if (s === 70) {

        s = 10;
    }
    if (s === 71) {

        s = 11;
    }
    if (s === 72) {

        s = 12;
    }

    if (s === 73) {

        s = 13;
    }
    if (s === 74) {

        s = 14;
    }
    if (s === 75) {

        s = 15;
    }
    if (s === 76) {

        s = 16;
    }

    if (s === 77) {

        s = 17;
    }
    if (s === 78) {

        s = 18;
    }
    if (s === 79) {

        s = 19;
    }
    if (s === 80) {

        s = 20;
    }
    if (s === 81) {

        s = 21;
    }
    if (s === 82) {

        s = 22;
    }

    if (s === 83) {

        s = 23;
    }
    if (s === 84) {

        s = 24;
    }
    if (s === 85) {

        s = 25;
    }
    if (s === 86) {

        s = 26;
    }

    if (s === 87) {

        s = 27;
    }
    if (s === 88) {

        s = 28;
    }
    if (s === 89) {

        s = 29;
    }


    if (h < 10) {
        h = `0${h}`
    }

    if (m < 10) {
        m = `0${m}`
    }

    if (s < 10) {
        s = `0${s}`
    }

    rel.innerHTML = `${h}:${m}:${s}`


}, 1000)

//Dia mês e ano ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let dt = new Date();
let ndt = new Date();
ndt.setDate(dt.getDate() + 0);
let diasem = ndt.getDay();
let dia = ndt.getDate();
let mes = ndt.getMonth();
let ano = ndt.getFullYear();



let meses = new Array("Dezembro", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Julho", "Agosto", "Setembro", "Outubro", "Novembro")
let semanas = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado")


document.write(semanas[diasem] + ", " + dia + " de " + meses[mes] + " de " + ano);



//horário de Fernando de Noronha////////////////////////////////////////////////////////////////////////////////////////////////////////////////

setInterval(function relog2() {
    let rel = document.getElementById('relogio2')
    let data = new Date();
    let h = data.getHours() + 1;
    let m = data.getMinutes();
    let s = data.getSeconds() + 30;

    if (m > 59) {

        h = h + 1;
    }

    if (s > 59) {

        m = m + 1;
    }

    if (h === 24) {

        h = 00;
    }

    if (h === 25) {

        h = 01;
    }

    if (m === 60) {

        m = 00;
    }


    if (s === 60) {

        s = 00;
    }
    if (s === 61) {

        s = 01;
    }
    if (s === 62) {

        s = 02;
    }

    if (s === 63) {

        s = 03;
    }
    if (s === 64) {

        s = 04;
    }
    if (s === 65) {

        s = 05;
    }
    if (s === 66) {

        s = 06;
    }

    if (s === 67) {

        s = 07;
    }
    if (s === 68) {

        s = 08;
    }
    if (s === 69) {

        s = 09;
    }

    if (s === 70) {

        s = 10;
    }
    if (s === 71) {

        s = 11;
    }
    if (s === 72) {

        s = 12;
    }

    if (s === 73) {

        s = 13;
    }
    if (s === 74) {

        s = 14;
    }
    if (s === 75) {

        s = 15;
    }
    if (s === 76) {

        s = 16;
    }

    if (s === 77) {

        s = 17;
    }
    if (s === 78) {

        s = 18;
    }
    if (s === 79) {

        s = 19;
    }
    if (s === 80) {

        s = 20;
    }
    if (s === 81) {

        s = 21;
    }
    if (s === 82) {

        s = 22;
    }

    if (s === 83) {

        s = 23;
    }
    if (s === 84) {

        s = 24;
    }
    if (s === 85) {

        s = 25;
    }
    if (s === 86) {

        s = 26;
    }

    if (s === 87) {

        s = 27;
    }
    if (s === 88) {

        s = 28;
    }
    if (s === 89) {

        s = 29;
    }


    if (h > 24) {
        h = h - 24;
    }

    if (h < 10) {
        h = `0${h}`
    }

    if (m < 10) {
        m = `0${m}`
    }

    if (s < 10) {
        s = `0${s}`
    }

    rel.innerHTML = `${h}:${m}:${s}`
}, 1000)


//horário de Amazonas////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

setInterval(function relog3() {
    let rel = document.getElementById('relogio3')
    let data = new Date();
    let h = data.getHours() + 23;
    let m = data.getMinutes();
    let s = data.getSeconds() + 30;

    if (m > 59) {

        h = h + 1;
    }

    if (s > 59) {

        m = m + 1;
    }

    if (m === 60) {

        m = 00;
    }

    if (h > 24) {

        h = h - 24;
    }

    if (m === 60) {

        m = 00;
    }

    if (h === 24) {

        h = 00;
    }

    if (h === 25) {

        h = 01;
    }

    if (h === -0) {

        h = 00;
    }

    if (s > 59) {

        m = m + 1;
    }
    if (s === 60) {

        s = 00;
    }
    if (s === 61) {

        s = 01;
    }
    if (s === 62) {

        s = 02;
    }

    if (s === 63) {

        s = 03;
    }
    if (s === 64) {

        s = 04;
    }
    if (s === 65) {

        s = 05;
    }
    if (s === 66) {

        s = 06;
    }

    if (s === 67) {

        s = 07;
    }
    if (s === 68) {

        s = 08;
    }
    if (s === 69) {

        s = 09;
    }

    if (s === 70) {

        s = 10;
    }
    if (s === 71) {

        s = 11;
    }
    if (s === 72) {

        s = 12;
    }

    if (s === 73) {

        s = 13;
    }
    if (s === 74) {

        s = 14;
    }
    if (s === 75) {

        s = 15;
    }
    if (s === 76) {

        s = 16;
    }

    if (s === 77) {

        s = 17;
    }
    if (s === 78) {

        s = 18;
    }
    if (s === 79) {

        s = 19;
    }
    if (s === 80) {

        s = 20;
    }
    if (s === 81) {

        s = 21;
    }
    if (s === 82) {

        s = 22;
    }

    if (s === 83) {

        s = 23;
    }
    if (s === 84) {

        s = 24;
    }
    if (s === 85) {

        s = 25;
    }
    if (s === 86) {

        s = 26;
    }

    if (s === 87) {

        s = 27;
    }
    if (s === 88) {

        s = 28;
    }
    if (s === 89) {

        s = 29;
    }


    if (h < 10) {
        h = `0${h}`
    }

    if (m < 10) {
        m = `0${m}`
    }

    if (s < 10) {
        s = `0${s}`
    }

    rel.innerHTML = `${h}:${m}:${s}`
}, 1000)

//horário de Acre//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

setInterval(function relog4() {
    let rel = document.getElementById('relogio4')
    let data = new Date();
    let h = data.getHours() + 22;
    let m = data.getMinutes();
    let s = data.getSeconds() + 30;

    if (m > 59) {

        h = h + 1;
    }

    if (s > 59) {

        m = m + 1;
    }

    if (m === 60) {

        m = 00;
    }

    if (h > 24) {

        h = h - 24;
    }

    if (h === 24) {

        h = 00;
    }

    if (h === 25) {

        h = 01;
    }


    if (h === -0) {

        h = 00;
    }

    if (h === -1) {

        h = 01;
    }

    if (s === 60) {

        s = 00;
    }
    if (s === 61) {

        s = 01;
    }
    if (s === 62) {

        s = 02;
    }

    if (s === 63) {

        s = 03;
    }
    if (s === 64) {

        s = 04;
    }
    if (s === 65) {

        s = 05;
    }
    if (s === 66) {

        s = 06;
    }

    if (s === 67) {

        s = 07;
    }
    if (s === 68) {

        s = 08;
    }
    if (s === 69) {

        s = 09;
    }

    if (s === 70) {

        s = 10;
    }
    if (s === 71) {

        s = 11;
    }
    if (s === 72) {

        s = 12;
    }

    if (s === 73) {

        s = 13;
    }
    if (s === 74) {

        s = 14;
    }
    if (s === 75) {

        s = 15;
    }
    if (s === 76) {

        s = 16;
    }

    if (s === 77) {

        s = 17;
    }
    if (s === 78) {

        s = 18;
    }
    if (s === 79) {

        s = 19;
    }
    if (s === 80) {

        s = 20;
    }
    if (s === 81) {

        s = 21;
    }
    if (s === 82) {

        s = 22;
    }

    if (s === 83) {

        s = 23;
    }
    if (s === 84) {

        s = 24;
    }
    if (s === 85) {

        s = 25;
    }
    if (s === 86) {

        s = 26;
    }

    if (s === 87) {

        s = 27;
    }
    if (s === 88) {

        s = 28;
    }
    if (s === 89) {

        s = 29;
    }


    if (h < 10) {
        h = `0${h}`
    }

    if (m < 10) {
        m = `0${m}`
    }

    if (s < 10) {
        s = `0${s}`
    }

    rel.innerHTML = `${h}:${m}:${s}`
}, 1000)
