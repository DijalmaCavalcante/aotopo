const hiddenPages = ["merchandising"]

function loadpages(id, file) {
  return fetch(file)
    .then(response => response.text())
    .then(data => {
      const element = document.getElementById(id)
      element.innerHTML = data

      if (hiddenPages.includes(id)) {
        element.style.display = "none"
      }

      element.querySelectorAll("img").forEach(img => {
        const src = img.getAttribute("src")
        if (src) img.setAttribute("src", src)
      })

      element.querySelectorAll("script").forEach(oldScript => {
        const newScript = document.createElement("script")
        if (oldScript.src) {
          newScript.src = oldScript.src
        } else {
          newScript.textContent = oldScript.textContent
        }
        document.body.appendChild(newScript)
      })
    })
}

function showPage(idToShow) {
  hiddenPages.forEach(id => {
    const el = document.getElementById(id)
    if (el) el.style.display = id === idToShow ? "block" : "none"
  })
}

document.addEventListener("DOMContentLoaded", function () {
  Promise.all([
    loadpages("header", "/src/header/header.html"),
    loadpages("banner", "/src/banner/banner.html"),
    loadpages("infomusic", "/src/infomusic/infomusic.html"),
    loadpages("members", "/src/members/members.html"),
    loadpages("pictures", "/src/pictures/pictures.html"),
    loadpages("footer", "/src/footer/footer.html"),
    // páginas
    loadpages("merchandising", "/src/merchandising/merch.html"),
    loadpages("createAccount", "/src/oauth/createAccount/accountCreate.html"),
  ])
    .then(() => {
      setTimeout(() => {
        document.documentElement.classList.remove("loading")
      }, 100)
    })
})