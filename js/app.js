let amigos = [];

function adicionar() {
  const nomeAmigoInput = document.getElementById("nome-amigo");
  const nomeAmigo = nomeAmigoInput.value.trim();

  if (nomeAmigo !== "") {
    amigos.push(nomeAmigo);
    nomeAmigoInput.value = ""; // Limpa o campo de entrada
    atualizarListaAmigos();
  }
}

function sortear() {
  const listaSorteio = document.getElementById("lista-sorteio");
  listaSorteio.innerHTML = ""; // Limpa o conteúdo anterior

  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para o sorteio.");
    return;
  }

  const amigosEmbaralhados = embaralharArray(amigos.slice()); // Clone do array para não modificar o original

  for (let i = 0; i < amigos.length; i++) {
    const amigoAtual = amigos[i];
    const amigoSorteado = obterAmigoSorteado(i, amigosEmbaralhados);
    listaSorteio.innerHTML += `<strong>${amigoAtual}</strong> → ${amigoSorteado}<br>`;
  }
}

function reiniciar() {
  amigos = [];
  atualizarListaAmigos();
  document.getElementById("lista-sorteio").innerHTML = "";
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("lista-amigos");
  listaAmigos.textContent = amigos.join(", ");
}

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de posição
  }
  return array;
}

function obterAmigoSorteado(indice, array) {
  // Obtém um amigo diferente do amigo atual
  const amigoSorteado = array[(indice + 1) % array.length];
  return amigoSorteado === amigos[indice] ? obterAmigoSorteado(indice, array) : amigoSorteado;
}
