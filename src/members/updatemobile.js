const members = [
  {
    name: "bene",
    person: "/src/assets/bene/bene.png",
    risk: "/src/assets/bene/beneName.png",
  },
  {
    name: "dijalma",
    person: "/src/assets/dijalma/dijalma.png",
    risk: "/src/assets/dijalma/dijalmaName.png",
  },
  {
    name: "kauan",
    person: "/src/assets/kauan/kauan.png",
    risk: "/src/assets/kauan/kauanName.png",
  },
  {
    name: "lucas",
    person: "/src/assets/lucas/lucas.png",
    risk: "/src/assets/lucas/lucasName.png",
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
