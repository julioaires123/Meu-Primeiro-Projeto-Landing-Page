setInterval(function relog() {
    let rel = document.getElementById('relogio')
    let data = new Date()
    let h = data.getHours()
    let m = data.getMinutes()
    let s = data.getSeconds()

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
