// Função para obter a hora da internet
function obterHoraInternet(timezone) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://worldtimeapi.org/api/timezone/${timezone}`);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const dateTime = new Date(response.datetime);
        resolve(dateTime);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => {
      reject(xhr.statusText);
    };
    xhr.send();
  });
}

// Função para exibir a hora de uma região específica
function exibirHora(regiao, timezone, elementId) {
  let rel = document.getElementById(elementId);
  obterHoraInternet(timezone).then((dateTime) => {
    let h = dateTime.getHours();
    let m = dateTime.getMinutes();
    let s = dateTime.getSeconds();

    if (h < 10) {
      h = `0${h}`;
    }
    if (m < 10) {
      m = `0${m}`;
    }
    if (s < 10) {
      s = `0${s}`;
    }

    rel.innerHTML = `${regiao}: ${h}:${m}:${s}`;
  }).catch((error) => {
    console.error(error);
  });
}

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

  // Verifica se é meia-noite (00:00:00)
  if (data.getHours() === 0 && data.getMinutes() === 0 && data.getSeconds() === 0) {
    // Incrementa um dia
    data.setDate(data.getDate() + 1);
    dia = data.getDate();
    mes = data.getMonth();
    ano = data.getFullYear();
  }

  // Atualiza o conteúdo do elemento com o ID "date"
  document.getElementById("date").innerHTML = semanas[diasem] + ", " + dia + " de " + meses[mes] + " de " + ano;
}

// Função para atualizar a data à meia-noite
function atualizarData() {
  let data = new Date();
  if (data.getHours() === 0 && data.getMinutes() === 0 && data.getSeconds() === 0) {
    exibirDataAtualizada();
  }
}

// Chama a função para exibir a hora de Brasília
exibirHora("Brasília", "America/Sao_Paulo", "relogio01");

// Chama a função para exibir a data atualizada
exibirDataAtualizada();

// Atualiza a data à meia-noite
setInterval(atualizarData, 1000);
