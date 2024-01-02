let valoresAnteriores = {
  aave: 'Carregando...',
  solana: 'Carregando...',
  ethereum: 'Carregando...',
  bitcoin: 'Carregando...',

};

function obterCotacao(criptomoeda, elementoId) {
  ///Chama a api 
  fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${criptomoeda}&vs_currencies=brl`)
  
    .then(response => response.json())
    .then(data => {
      const preco = data[criptomoeda].brl;
      
      if (preco !== undefined) {
        document.getElementById(elementoId).innerText = `${criptomoeda}: R$${preco}`;
        valoresAnteriores[criptomoeda] = `${criptomoeda}: R$${preco}`;
      } else {
        document.getElementById(elementoId).innerText = valoresAnteriores[criptomoeda];
      }
      
      document.getElementById(elementoId).style.border = (preco < 300) ? "1px solid red" : '';

    })
    
    .catch(error => {
      console.error(`Erro ao obter dados para ${criptomoeda}: ${error}`);
      document.getElementById(elementoId).innerText = valoresAnteriores[criptomoeda];
    });
    
}	

function atualizarValores() {
  obterCotacao('aave', 'aave');
  obterCotacao('solana', 'solana');
  obterCotacao('ethereum', 'ethereum');
  obterCotacao('bitcoin', 'bitcoin');


}

atualizarValores(); // Chama a função uma vez para exibir os valores iniciais

setInterval(atualizarValores, 4500); // Atualiza a cada 5 segundos (ajuste conforme necessário)

// Adiciona evento de clique às divs
document.getElementById('aave').addEventListener('click', () => obterCotacao('aave', 'aave'));
document.getElementById('solana').addEventListener('click', () => obterCotacao('solana', 'solana'));
document.getElementById('ethereum').addEventListener('click', () => obterCotacao('ethereum', 'ethereum'));
document.getElementById('bitcoin').addEventListener('click', () => obterCotacao('bitcoin', 'bitcoin'));

function abrir() {
  var searchOverlay = document.getElementById("search-overlay");
  var searchBar = document.getElementById("search-bar");
  var fechar = document.getElementById("fechar");


  fechar.style.display = "block"
  searchOverlay.style.display = "block";
  searchBar.style.display = "block";
}

// Função para realizar a pesquisa (substitua este exemplo com sua lógica de pesquisa)
function realizarPesquisa() {
  var resultDiv = document.getElementById("aave");
  var inputValue = parseInt(document.querySelector("#search-bar input").value);

  if (!isNaN(inputValue)) {

    // Altera a cor da div com base no valor
    resultDiv.style.border = inputValue >= 500 ? "1px solid red" : "1px solid white";
  } else {
    resultDiv.innerHTML = "Digite um número válido.";
    resultDiv.style.backgroundColor = "white"; // Reset para branco se não for um número válido
  }
}

function fechar() {
  var searchOverlay = document.getElementById("search-overlay");
  var searchBar = document.getElementById("search-bar");
  var fechar = document.getElementById("fechar");


  fechar.style.display = ""
  searchOverlay.style.display = "";
  searchBar.style.display = "";
}