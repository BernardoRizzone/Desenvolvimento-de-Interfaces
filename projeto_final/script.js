// ---------- Acessibilidade: tema e tamanho da fonte ----------
const html = document.documentElement;
const btnTema = document.getElementById("btnTema");
let tema = localStorage.getItem("tema") || "light";
let tamanho = Number(localStorage.getItem("tamanho")) || 100;

function aplicar() {
  html.setAttribute("data-bs-theme", tema);
  html.style.fontSize = tamanho + "%";
  btnTema.textContent = tema === "dark" ? "Modo claro" : "Modo escuro";
  btnTema.setAttribute("aria-pressed", tema === "dark");
  localStorage.setItem("tema", tema);
  localStorage.setItem("tamanho", tamanho);
}

btnTema.addEventListener("click", function () {
  tema = tema === "dark" ? "light" : "dark";
  aplicar();
});
document.getElementById("btnMais").addEventListener("click", function () {
  if (tamanho < 150) tamanho += 10;
  aplicar();
});
document.getElementById("btnMenos").addEventListener("click", function () {
  if (tamanho > 80) tamanho -= 10;
  aplicar();
});
aplicar();

// ---------- Carrossel: botão de pausar ----------
const carrossel = document.getElementById("carrossel");
if (carrossel) {
  const car = bootstrap.Carousel.getOrCreateInstance(carrossel);
  const btnPausa = document.getElementById("btnPausa");
  let rodando = true;

  btnPausa.addEventListener("click", function () {
    if (rodando) {
      car.pause();
      btnPausa.textContent = "Reproduzir";
    } else {
      car.cycle();
      btnPausa.textContent = "Pausar";
    }
    rodando = !rodando;
  });
}

// ---------- Pesquisa e filtro dos atrativos ----------
const busca = document.getElementById("busca");
if (busca) {
  const cards = document.querySelectorAll(".atrativo");
  const botoes = document.querySelectorAll(".filtro");
  const aviso = document.getElementById("aviso");
  let categoria = "todos";

  function filtrar() {
    const termo = busca.value.toLowerCase().trim();
    let total = 0;

    cards.forEach(function (card) {
      const conteudo = card.querySelector(".card-body").firstElementChild.textContent + " " + card.querySelector(".card-text").textContent;
      const textoOk = conteudo.toLowerCase().includes(termo);
      const catOk = categoria === "todos" || card.dataset.cat === categoria;
      if (textoOk && catOk) {
        card.classList.remove("d-none");
        total++;
      } else {
        card.classList.add("d-none");
      }
    });

    aviso.textContent = total > 0
      ? total + " atrativo(s) encontrado(s)."
      : "Nenhum atrativo encontrado. Tente outro nome ou categoria.";
  }

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      botoes.forEach(function (b) {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      botao.classList.add("active");
      botao.setAttribute("aria-pressed", "true");
      categoria = botao.dataset.cat;
      filtrar();
    });
  });

  busca.addEventListener("input", filtrar);
  filtrar();
}

// ---------- Validação dos formulários (usa o Bootstrap) ----------
document.querySelectorAll(".needs-validation").forEach(function (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      form.querySelector(":invalid").focus();
      return;
    }
    form.classList.remove("was-validated");
    form.reset();
    form.querySelector(".sucesso").classList.remove("d-none");
  });
});

// ---------- Contato: preenche o formulário quando vem de um atrativo ----------
const params = new URLSearchParams(window.location.search);
const atrativo = params.get("atrativo");
const campoMensagem = document.getElementById("mensagem");
if (atrativo && campoMensagem) {
  campoMensagem.value = "Olá! Tenho interesse em visitar: " + atrativo + ". Gostaria de ajuda para planejar a visita.";
  const interesse = document.getElementById("interesse");
  const nome = atrativo.toLowerCase();
  const arq = ["catedral", "congresso", "alvorada", "ponte"];
  const nat = ["parque", "lago"];
  if (arq.some(function (p) { return nome.includes(p); })) interesse.value = "Roteiro de arquitetura";
  else if (nat.some(function (p) { return nome.includes(p); })) interesse.value = "Natureza e trilhas";
  else interesse.value = "Outro";
  const aviso = document.getElementById("avisoAtrativo");
  if (aviso) {
    aviso.textContent = "Você escolheu: " + atrativo + ". Complete seus dados e envie.";
    aviso.classList.remove("d-none");
  }
}
