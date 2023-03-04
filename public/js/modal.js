const myModal = document.getElementById('#JobModalCenter')
const myInput = document.getElementById('#JobModalCenter')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})