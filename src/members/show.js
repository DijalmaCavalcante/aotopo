function show() {
  const mobile = document.querySelector(".membersmobile")
  const desktop = document.querySelector(".membersdesktop")

  function toggle() {
    if (window.innerWidth < 1160) { 
      mobile.style.display = "flex"
      desktop.style.display = "none"
    } else {
      mobile.style.display = "none"
      desktop.style.display = "flex"
    }
  }

  toggle()

  window.addEventListener("resize", toggle)
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", show)
} else {
  show()
}
