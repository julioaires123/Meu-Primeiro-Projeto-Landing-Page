setInterval(function relog() {
    let rel = document.getElementById('relogio01');
    let data = new Date();
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

setInterval(function relog2() {
    let rel = document.getElementById('relogio2');
    let data = new Date();
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
}, 1000);

setInterval(function relog3() {
    let rel = document.getElementById('relogio3');
    let data = new Date();
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
    rel.innerHTML = `${h}:${m}:${s}`;
}, 1000);

setInterval(function relog4() {
    let rel = document.getElementById('relogio4');
    let data = new Date();
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
    rel.innerHTML = `${h}:${m}:${s}`;
}, 1000);
