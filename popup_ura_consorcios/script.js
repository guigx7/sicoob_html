// Função de copiar texto ao clicar no botão "Copiar"
function copyToClipboard(elementId) {
  var copyText = document.getElementById(elementId);
  copyText.select();
  document.execCommand("copy");
  console.log("Copiado pelo botão: " + copyText.value);
}

// Função de copiar texto ao clicar no campo
function copyOnClick(event) {
  var copyText = event.target;
  copyText.select();
  document.execCommand("copy");
  console.log("Copiado com clique: " + copyText.value);
}

const inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach(input => {
  input.addEventListener('click', copyOnClick);
});

// Função de copiar texto ao focar no campo
function copyOnFocus(elementId) {
  var copyText = document.getElementById(elementId);
  copyText.select();
  document.execCommand("copy");
  console.log("Copiado com foco: " + copyText.value);
}

// Função de preencher o dropdown de "Navegação"
function populateDropdown() {
  console.log(document.getElementById('Caminho').value);
  var caminho = document.getElementById('Caminho').value;

  var caminhoArray = caminho.split(',');

  var select = document.getElementById('navegacaoURA');

  select.innerHTML = '';

  var defaultOption = document.createElement('option');
  defaultOption.value = "";
  defaultOption.text = "Navegação:";
  defaultOption.selected = true;
  defaultOption.disabled = true;
  defaultOption.style.color = "#000000"
  select.appendChild(defaultOption);

  caminhoArray.forEach(function (item) {
    var option = document.createElement('option');
    option.value = item.trim();
    option.text = item.trim();
    option.disabled = true;
    option.style.color = "#000000"
    select.appendChild(option);
  });
}

window.onload = function () {
  // preencher dropdown
  populateDropdown();

  // não exibir mesma skill
  const skillValue = document.getElementById('SkillT').value;
  const select = document.getElementById('ListaTransf');
  const options = select.querySelectorAll('option');

  options.forEach(option => {
    if (option.value === skillValue) {
      option.style.display = 'none';
    } else {
      option.style.display = '';
    }
  });

  //exibir skill de entrada
  let skillOrigem = document.getElementById('SkillOrigem').value;
  let skillFormatada = "";

  switch (skillOrigem) {
    case "20868525":
      skillFormatada = "20868525 - Consórcio Adesão";
      break;
    case "20868526":
      skillFormatada = "20868526 - Consórcio Assembléia";
      break;
    case "20868527":
      skillFormatada = "20868527 - Consórcio Assuntos Gerais";
      break;
    case "20868528":
      skillFormatada = "20868528 - Consórcio Baixa DOC";
      break;
    case "20868529":
      skillFormatada = "20868529 - Consórcio Cadastro";
      break;
    case "20868530":
      skillFormatada = "20868530 - Consórcio Contemplação";
      break;
    case "20868531":
      skillFormatada = "20868531 - Consórcio Financeiro";
      break;
    case "20868532":
      skillFormatada = "20868532 - Consórcio Funchal";
      break;
    case "20868533":
      skillFormatada = "20868533 - Consórcio Retenção";
      break;
    case "20868534":
      skillFormatada = "20868534 - Consórcio Sicoob";
      break;
    case "20868535":
      skillFormatada = "20868535 - Consórcio Troca Titularidade";
      break;
  }

  document.getElementById('Origem').value = skillFormatada;
  
};


// Popup Confirmação Transferência
function showPopup() {
  let opTransf = document.getElementById('ListaTransf').value;
  console.log(opTransf);

  if (opTransf != "") {

    let transfSkill = "";

    switch (opTransf) {
      case "20868525":
        transfSkill = "20868525 - Consórcio Adesão";
        break;
      case "20868526":
        transfSkill = "20868526 - Consórcio Assembléia";
        break;
      case "20868527":
        transfSkill = "20868527 - Consórcio Assuntos Gerais";
        break;
      case "20868528":
        transfSkill = "20868528 - Consórcio Baixa DOC";
        break;
      case "20868529":
        transfSkill = "20868529 - Consórcio Cadastro";
        break;
      case "20868530":
        transfSkill = "20868530 - Consórcio Contemplação";
        break;
      case "20868531":
        transfSkill = "20868531 - Consórcio Financeiro";
        break;
      case "20868532":
        transfSkill = "20868532 - Consórcio Funchal";
        break;
      case "20868533":
        transfSkill = "20868533 - Consórcio Retenção";
        break;
      case "20868534":
        transfSkill = "20868534 - Consórcio Sicoob";
        break;
      case "20868535":
        transfSkill = "20868535 - Consórcio Troca Titularidade";
        break;
    }

    const result = confirm("Realmente deseja transferir para " + transfSkill + "?");
    if (result) {
      executarFuncao();
    }
  }
  else {
    alert("Nenhuma opção selecionada.");
  }
}

function executarFuncao() {
  let opTransf = document.getElementById('ListaTransf').value;
  console.log('Função executada!');
  document.getElementById('openConfirmation').value = "transf";
}

document.getElementById('openConfirmation').addEventListener('click', showPopup);

// Botão "Pesquisa"
document.getElementById("btnPesquisa").addEventListener("click", function () {
  this.value = "pesquisa";
});

