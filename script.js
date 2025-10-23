// Espera o HTML carregar
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("cadastro");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio real e o recarregamento da página

    // Aqui poderia ir sua lógica de verificação de dados

    // Exibe o alerta
    alert("✅ Dados enviados com sucesso! Obrigado por se cadastrar.");

    // Limpa o formulário
    form.reset();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const conteudo = document.getElementById("conteudo");

  // Função para carregar template
  async function carregarPagina(hash) {
    const pagina = hash.replace("#", "") || "home";
    try {
      const res = await fetch(`assets/pages/${pagina}.html`);
      if (!res.ok) throw new Error("Página não encontrada");
      const html = await res.text();
      conteudo.innerHTML = html;

      // Inicializa scripts da página, se houver
      if (pagina === "cadastro") initCadastro();
    } catch {
      conteudo.innerHTML = "<h2>Página não encontrada 😕</h2>";
    }
  }

  // Detecta mudança de hash
  window.addEventListener("hashchange", () => carregarPagina(location.hash));

  // Carrega página inicial
  carregarPagina(location.hash);

  // Template JS para cadastro
  function initCadastro() {
    const form = document.getElementById("formCadastro");
    const msg = document.getElementById("mensagem");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      msg.style.display = "block";
      form.reset();
      setTimeout(() => msg.style.display = "none", 3000);
    });
  }
});
