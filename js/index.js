const modal = document.getElementById('simpleModal')
const closeModal = document.querySelector('.closeBtn')
const btn = document.querySelector('.btn')
const firstName = document.querySelector('.firstName')
const lastName = document.querySelector('.lastName')
const firstValue = document.querySelector('.first-value')
const lastValue = document.querySelector('.last-value')

btn.addEventListener('click', () => {
  const firstNameValue = firstName.value
  const lastNameValue = lastName.value
  firstValue.innerHTML = firstNameValue
  lastValue.innerHTML = lastNameValue
  modal.style.display = 'block'
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})
