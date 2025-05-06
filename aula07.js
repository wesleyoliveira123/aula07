let nomes = [];

while (true) {
  const opcao = Number(prompt(
    "digite 1 pra adicionar, 2 pra filtrar, 3 pra buscar, 4 pra transformar em maiúsculas,5 pra verificar condições,6 pra ver lista ou 0 pra sair: "
  ));

  if (opcao === 1) {
    nomes.push(prompt("Nome: "));
    console.log(nomes);
  } else if (opcao === 2) {
    const letra = prompt("Começa com: ");
    console.log(nomes.filter(n => n.toLowerCase().startsWith(letra.toLowerCase())));
  } else if (opcao === 3) {
    const busca = prompt("Buscar por: ");
    const achado = nomes.find(n => n.toLowerCase() === busca.toLowerCase());
    console.log(achado || "Não encontrado");
  } else if (opcao === 4) {
    console.log(nomes.map(n => n.toUpperCase()));
  } else if (opcao === 5) {
    console.log(nomes.every(n => n.length > 3));
  } else if (opcao === 6) {
    console.log(nomes);
  } else if (opcao === 0) {
    break;
  } else {
    console.log("Opção inválida");
  }
}
