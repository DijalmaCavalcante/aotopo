function loadpages(id, file) {
  console.log(`Tentando carregar: ${file}`);

  fetch(file)
    .then(response => {
      console.log(`Resposta recebida para ${file}:`, response);
      return response.text();
    })
    .then(data => {
      console.log(`Conteúdo carregado para ${id}:`, data);
      const element = document.getElementById(id);
      if (element) {
        element.innerHTML = data;
      } else {
        console.error(`Elemento #${id} não encontrado no DOM`);
      }
    })
    .catch(error => console.error(`Erro ao carregar ${file}:`, error));
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM carregado, iniciando loadpages...");
  loadpages("banner", "https://aotopoband.com/src/banner/banner.html");
  loadpages("infomusic", "/src/infomusic/infomusic.html");
  loadpages("members", "/src/members/members.html");
  loadpages("pictures", "/src/pictures/pictures.html");
  loadpages("footer", "/src/footer/footer.html");
});
