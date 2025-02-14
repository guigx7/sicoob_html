// Funções de cópia
function copyToClipboard(elementId) {
  const copyText = document.getElementById(elementId);
  if (copyText) {
    copyText.select();
    document.execCommand("copy");
    console.log(`Copiado: ${copyText.value}`);
  }
}

function copyOnFocus(elementId) {
  copyToClipboard(elementId);
}

// Função auxiliar para criar opções
function createOption(value, text) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  return option;
}

// Preencher select de Produto
function populateProduto() {
  const select = document.getElementById("Produto");
  select.innerHTML = "";

  select.appendChild(createOption("SelecioneOpcao", "Selecione uma Opção"));
  select.appendChild(createOption("Cartao", "Cartão"));
  select.appendChild(createOption("Consorcio", "Consórcio"));
  select.appendChild(createOption("Coopcerto", "Coopcerto"));
  select.appendChild(createOption("Coopera", "Coopera"));
  select.appendChild(createOption("CreditoImobiliario", "Credito Imobiliário"));
  select.appendChild(createOption("Previdencia", "Previdência"));
  select.appendChild(createOption("Seguros", "Seguros"));
  select.appendChild(createOption("Sipag1", "Sipag 1.0"));
  select.appendChild(createOption("Sipag2", "Sipag 2.0"));
}

// Preencher select de Assunto
function populateAssunto() {
  const select = document.getElementById("Assunto");
  select.innerHTML = "";

  select.appendChild(
    createOption("Selecione uma Opção", "Selecione uma Opção")
  );
}

function processarDadosAPI() {
  const resInput = document.getElementById("Res");
  const erroDiv = document.getElementById("erroConsulta");

  try {
    // Resetar exibição do erro
    erroDiv.style.display = "none";

    if (!resInput || !resInput.value) {
      throw new Error("Campo de resposta vazio ou não encontrado");
    }

    const resultData = JSON.parse(resInput.value);

    if (!resultData?.content?.length) {
      throw new Error("Nenhum conteúdo encontrado na resposta");
    }

    const conta = resultData.content[0].account;

    // Verificar se todos os campos necessários existem
    if (
      !conta?.numeroCoperativa ||
      !conta?.numContaCorrente ||
      !conta?.institution?.name
    ) {
      throw new Error("Dados da conta incompletos");
    }

    // Preencher campos na página
    document.getElementById("cooperativa").value = conta.numeroCoperativa;
    document.getElementById("contaCorrente").value = conta.numContaCorrente;
    document.getElementById("instituicao").value = conta.institution.name;
  } catch (error) {
    console.error("Erro no processamento:", error);
    // Exibir mensagem de erro
    erroDiv.style.display = "flex";
    erroDiv.style.justifyContent = "center"; // Centraliza horizontalmente
    erroDiv.style.alignItems = "center"; // Centraliza verticalmente
    erroDiv.style.width = "100%"; // Garante a largura total

    // Limpar campos em caso de erro (opcional)
    document.getElementById("cooperativa").value = "";
    document.getElementById("contaCorrente").value = "";
    document.getElementById("instituicao").value = "";
  }
}

window.onload = function () {
  populateProduto();
  populateAssunto();
  processarDadosAPI(); // Chama a nova função

  // Configuração da Skill de Origem
  const skillOrigemElement = document.getElementById("SkillOrigem");
  const origemElement = document.getElementById("Origem");

  if (skillOrigemElement && origemElement) {
    const skillMap = {
      20868796: "Adq Cabal Cadastro",
      20868797: "Adq Cabal Atendente",
      20868798: "Adq Cabal Credenciamento",
      20868799: "Adq Cabal Portal",
      20868801: "Adq Cabal Financeiro",
      20868802: "Adq Cabal Retencao",
      20868803: "Adq Cabal Suporte Tecnico",
    };

    const skillFormatada = skillMap[skillOrigemElement.value]
      ? `${skillOrigemElement.value} - ${skillMap[skillOrigemElement.value]}`
      : " ";

    origemElement.value = skillFormatada;
  }

  // Configuração do Botão Finalizar
  document
    .getElementById("btnFinalizar")
    .addEventListener("click", function () {
      this.value = "finalizar";
      console.log("valor:" + this.value);
    });

  // Configuração do Botão Consultar
  document
    .getElementById("btnConsultar")
    .addEventListener("click", function () {
      this.value = "consultar";
      console.log("valor:" + this.value);
    });
};
