document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);

function validaFormulario() {
  if (
    document.getElementById("nome").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("telefone").value != ""
  ) {
    alert("Prontinho! Os noivos receberão sua mensagem! Agradecemos pelo carinho.");
  } else {
    alert("Por favor, preencha os campos nome, email e telefone.");
  }
}