// Rolar até uma seção específica
function scrollToSection(section) {
    document.querySelector(section).scrollIntoView({ behavior: "smooth" });
  }
  
  // Formulário de contato
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    form.reset();
  });  