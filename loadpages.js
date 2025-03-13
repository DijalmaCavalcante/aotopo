function loadpages(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      const element = document.getElementById(id);
      element.innerHTML = data;

      element.querySelectorAll("img").forEach(img => {
        const src = img.getAttribute("src");
        if (src) img.setAttribute("src", src);
      });

      element.querySelectorAll("script").forEach(oldScript => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript);
      });
    })
    .catch(error => console.error(`Erro ao carregar ${file}:`, error));
}

document.addEventListener("DOMContentLoaded", function() {
  loadpages("banner", "/banner.html");
  loadpages("infomusic", "/infomusic.html");
  loadpages("members", "/members.html");
  loadpages("pictures", "/pictures.html");
  loadpages("footer", "/footer.html");
});
