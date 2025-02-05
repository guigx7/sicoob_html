// Função de copiar texto ao clicar no botão "Copiar"
function copyToClipboard(elementId) {
  const copyText = document.getElementById(elementId);
  if (copyText) {
    copyText.select();
    document.execCommand("copy");
    console.log("Copiado pelo botão: " + copyText.value);
  }
}

// Função de copiar texto ao focar no campo
function copyOnFocus(elementId) {
  const copyText = document.getElementById(elementId);
  if (copyText) {
    copyText.select();
    document.execCommand("copy");
    console.log("Copiado com foco: " + copyText.value);
  }
}

// Função auxiliar para criar opções
function createOption(value, text) {
  const option = document.createElement('option');
  option.value = value;
  option.textContent = text;
  return option;
}

// Preencher select de Produto 
function populateProduto() {
  const select = document.getElementById('Produto');
  select.innerHTML = ''; 

  select.appendChild(createOption('SelecioneOpcao', 'Selecione uma Opção'));
  select.appendChild(createOption('Cartao', 'Cartão'));
  select.appendChild(createOption('Consorcio', 'Consórcio'));
  select.appendChild(createOption('Coopcerto', 'Coopcerto'));
  select.appendChild(createOption('Coopera', 'Coopera'));
  select.appendChild(createOption('CreditoImobiliario', 'Credito Imobiliário'));
  select.appendChild(createOption('Previdencia', 'Previdência'));
  select.appendChild(createOption('Seguros', 'Seguros'));
  select.appendChild(createOption('Sipag1', 'Sipag 1.0'));
  select.appendChild(createOption('Sipag2', 'Sipag 2.0'));
}

// Preencher select de Assunto
function populateAssunto() {
  const select = document.getElementById('Assunto');
  select.innerHTML = ''; 
  
  select.appendChild(createOption('Selecione uma Opção', 'Selecione uma Opção'));
  select.appendChild(createOption('ContatoResponsavel', 'Contato com o Responsável'));
  select.appendChild(createOption('Engano', 'Engano'));
  select.appendChild(createOption('NaoIncomodar', 'Não Incomodar'));
  select.appendChild(createOption('Terceiro', 'Terceiro'));
}

window.onload = function () {
  populateProduto();
  populateAssunto();

  // Configuração da Skill de Origem
  const skillOrigemElement = document.getElementById('SkillOrigem');
  const origemElement = document.getElementById('Origem');
  
  if (skillOrigemElement && origemElement) {
    const skillMap = {
      "20868796": "Adq Cabal Cadastro",
      "20868797": "Adq Cabal Atendente",
      "20868798": "Adq Cabal Credenciamento",
      "20868799": "Adq Cabal Portal",
      "20868801": "Adq Cabal Financeiro",
      "20868802": "Adq Cabal Retencao",
      "20868803": "Adq Cabal Suporte Tecnico"
    };

    const skillFormatada = skillMap[skillOrigemElement.value] 
      ? `${skillOrigemElement.value} - ${skillMap[skillOrigemElement.value]}`
      : " ";
    
    origemElement.value = skillFormatada;
  }
};

// Configuração do Botão Pesquisa
document.getElementById("btnPesquisa").addEventListener("click", function () {
  this.value = "pesquisa";
});