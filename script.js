const body = document.body;
const quotes = [
  "O verdadeiro conhecimento é saber a extensão da própria ignorância. - Confúcio",
  "Ver o que é certo e não fazê-lo é falta de coragem. - Confúcio",
  "O homem que move uma montanha começa carregando pequenas pedras. - Confúcio",
  "Respeite a si mesmo e os outros o respeitarão. - Confúcio",
  "O homem superior é modesto em suas palavras, mas excede em suas ações. - Confúcio",
  "Quando vemos homens de caráter contrário, devemos nos voltar para dentro e examinar a nós mesmos. - Confúcio",
  "Never leave a wrong to rippen into evil or Sorrow. - Ventari",
  "All things have a right to grow. - Ventari",
  "Não é o homem que tem pouco, mas o homem que deseja mais, que é pobre. - Sêneca",
  "Sofremos mais frequentemente na imaginação do que na realidade. - Sêneca",
  "Aquele que teme a morte nunca fará nada digno de um homem vivo. - Sêneca",
  "Quanto tempo você vai esperar antes de exigir o melhor para si mesmo? - Epicteto",
  "A felicidade da sua vida depende da qualidade dos seus pensamentos. - Marco Aurélio",
  "Você tem poder sobre sua mente -- não sobre eventos externos. Perceba isso, e você encontrará força. - Marco Aurélio",
];

const dice = document.querySelector(".fa-dice");
const clippy = document.querySelector(".fa-copy");

body.addEventListener("keypress", gerarQuote);
dice.addEventListener("click", gerarQuote);

document.addEventListener("DOMContentLoaded", gerarQuote);
function gerarQuote(e) {
  const pElement = document.querySelector(".quote--box p");
  const author = document.querySelector(".quote--box aside");
  if (e.key === " " || pElement.textContent === "" || e.type === "click") {
    const rando = Math.floor(Math.random() * quotes.length);
    const [quote, quoteAuthor] = quotes[rando].split(" - ");
    console.log(rando);
    pElement.textContent = quote;
    author.textContent = quoteAuthor;
  } else return;
}
