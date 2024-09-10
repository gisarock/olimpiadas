function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nome não encontrado. Você precisa digitar o nome de um Atleta ou um Esporte.</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  console.log(campoPesquisa);

  // Inicializa uma string vazia para armazenar os resultados da pesquisa.
  let resultados = "";
  let descricao = "";
  let titulo = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array).
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // se titulo includes campoPesquisa, vai ser executado todo o código.

    // Constrói o HTML para cada item do resultado da pesquisa,
    // incluindo título, descrição e link.
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      resultados += `
<div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
        `;
    }
  }

  if (!resultados) {
resultados = "<p>Nada foi encontrado.</p>"
  }

  // Atribui o HTML gerado à seção, substituindo o conteúdo anterior.
  section.innerHTML = resultados;
}
// console.log(dados);
