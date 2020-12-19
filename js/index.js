const modal = document.getElementById('simpleModal')
const closeModal = document.querySelector('.closeBtn')
const btn = document.querySelector('.btn')
const firstName = document.querySelector('.firstName')
const lastName = document.querySelector('.lastName')
const phone = document.querySelector('.phone')
const email = document.querySelector('.email')

btn.addEventListener('click', () => {
  getDataValue()
  modal.style.display = 'block'
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})

const getDataValue = () => {
  document.querySelector('.first-value').innerHTML = firstName.value
  document.querySelector('.last-value').innerHTML = lastName.value
  document.querySelector('.phone-value').innerHTML = phone.value
  document.querySelector('.email-value').innerHTML = email.value
}
