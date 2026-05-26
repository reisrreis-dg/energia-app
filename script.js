function calcular() {
  const valorConta = parseFloat(document.getElementById("valorConta").value);
  const consumoTotal = parseFloat(document.getElementById("consumoTotal").value);
  const consumoCasa1 = parseFloat(document.getElementById("consumoCasa1").value);

  if (valorConta > 0 && consumoTotal > 0) {
    const precoPorKwh = valorConta / consumoTotal;
    const valorCasa1 = consumoCasa1 * precoPorKwh;
    const valorCasa2 = (consumoTotal - consumoCasa1) * precoPorKwh;

    // Formata em reais com vírgula
    document.getElementById("resultadoCasa1").innerText =
      `Casa 1 deve pagar: R$ ${valorCasa1.toFixed(2).replace('.', ',')}`;
    document.getElementById("resultadoCasa2").innerText =
      `Casa 2 deve pagar: R$ ${valorCasa2.toFixed(2).replace('.', ',')}`;
  } else {
    document.getElementById("resultadoCasa1").innerText = "Dados inválidos";
    document.getElementById("resultadoCasa2").innerText = "";
  }
}

function limpar() {
  document.getElementById("valorConta").value = "";
  document.getElementById("consumoTotal").value = "";
  document.getElementById("consumoCasa1").value = "";
  document.getElementById("resultadoCasa1").innerText = "";
  document.getElementById("resultadoCasa2").innerText = "";
}
