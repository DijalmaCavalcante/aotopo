function hide() {
  const member = document.querySelectorAll('.membersdesktop__member')
  member.forEach(member => {
    member.style.display = 'none'
  })
}

function show(memberid) {
  hide()
  document.getElementById(memberid).style.display = 'flex'
}

function deselectbuttons() {
  const buttons = document.querySelectorAll('.membersdesktop__button')
  buttons.forEach(button => {
    button.style.border = ''
    button.style.backgroundColor = ''
    button.style.opacity = '0.8'
  })
}

function selectedbutton(buttonid) {
  buttonid.style.border = '2px solid var(--color-orange)'
  buttonid.style.backgroundColor = 'var(--color-pure-black)'
  buttonid.style.opacity = '1'
}

document.getElementById('dijalmaButton').addEventListener('click', () => {
  deselectbuttons()
  show('dijalma')
  selectedbutton(document.getElementById('dijalmaButton'))
})

document.getElementById('beneButton').addEventListener('click', () => {
  deselectbuttons()
  show('bene')
  selectedbutton(document.getElementById('beneButton'))
})

document.getElementById('lucasButton').addEventListener('click', () => {
  deselectbuttons()
  show('lucas')
  selectedbutton(document.getElementById('lucasButton'))
})

document.getElementById('kauanButton').addEventListener('click', () => {
  deselectbuttons()
  show('kauan')
  selectedbutton(document.getElementById('kauanButton'))
})

show('bene')
selectedbutton(document.getElementById('beneButton'))



