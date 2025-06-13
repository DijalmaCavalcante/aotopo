const members = [
  {
    name: "bene",
    person: "/src/assets/bene/bene.webp",
    risk: "/src/assets/bene/beneName.webp",
  },
  {
    name: "dijalma",
    person: "/src/assets/dijalma/dijalma.webp",
    risk: "/src/assets/dijalma/dijalmaName.webp",
  },
  {
    name: "kauan",
    person: "/src/assets/kauan/kauan.webp",
    risk: "/src/assets/kauan/kauanName.webp",
  },
  {
    name: "lucas",
    person: "/src/assets/lucas/lucas.webp",
    risk: "/src/assets/lucas/lucasName.webp",
  },
]

const avatar = document.querySelector(".membersmobile__member")
const imgname = document.querySelector(".membersmobile__name")
const back = document.getElementById("back")
const next = document.getElementById("next")

let current = 0

function update() {
  avatar.src = members[current].person
  imgname.src = members[current].risk
}

back.addEventListener("click", () => {
  current = (current - 1 + members.length) % members.length
  update()
})

next.addEventListener("click", () => {
  current = (current + 1) % members.length
  update()
})

update()
