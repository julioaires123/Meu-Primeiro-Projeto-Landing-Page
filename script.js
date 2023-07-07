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
function exibirHora(timezone, elementId) {
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

    rel.innerHTML = `${h}:${m}:${s}`;
  }).catch((error) => {
    console.error(error);
  });
}

// Função para exibir a data atualizada
function exibirDataAtualizada(dateTime) {
  let meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  let semanas = [
    "Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira",
    "Quinta-Feira", "Sexta-Feira", "Sábado"
  ];

  let diasem = dateTime.getDay();
  let dia = dateTime.getDate();
  let mes = dateTime.getMonth();
  let ano = dateTime.getFullYear();

  // Verifica se é meia-noite (00:00:00)
  if (dateTime.getHours() === 0 && dateTime.getMinutes() === 0 && dateTime.getSeconds() === 0) {
    // Incrementa um dia
    dateTime.setDate(dateTime.getDate() + 1);
    dia = dateTime.getDate();
    mes = dateTime.getMonth();
    ano = dateTime.getFullYear();
  }

  // Atualiza o conteúdo do elemento com o ID "date"
  document.getElementById("date").innerHTML = semanas[diasem] + ", " + dia + " de " + meses[mes] + " de " + ano;
}

// Função para atualizar a data à meia-noite
function atualizarData() {
  obterHoraInternet("America/Sao_Paulo").then((dateTime) => {
    exibirDataAtualizada(dateTime);
  }).catch((error) => {
    console.error(error);
  });
}

// Chama as funções para exibir os horários das diferentes regiões do Brasil
exibirHora("America/Sao_Paulo", "relogio01");
exibirHora("America/Noronha", "relogio2");
exibirHora("America/Manaus", "relogio3");
exibirHora("America/Rio_Branco", "relogio4");

// Atualiza os horários das regiões a cada segundo
setInterval(() => {
  exibirHora("America/Sao_Paulo", "relogio01");
  exibirHora("America/Noronha", "relogio2");
  exibirHora("America/Manaus", "relogio3");
  exibirHora("America/Rio_Branco", "relogio4");
}, 1000);

// Chama a função para atualizar a data à meia-noite
atualizarData();
setInterval(atualizarData, 1000);
