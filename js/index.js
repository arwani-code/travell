const modal = document.getElementById('simpleModal')
const closeModal = document.querySelector('.closeBtn')
const closePopup = document.querySelector('.close-popup')
const btn = document.querySelector('.btn')
const firstName = document.querySelector('.firstName')
const lastName = document.querySelector('.lastName')
const phone = document.querySelector('.phone')
const email = document.querySelector('.email')

btn.addEventListener('click', () => {
  if (
    firstName.value === '' ||
    lastName.value === '' ||
    phone.value === '' ||
    email.value === ''
  ) {
    document.querySelector('#popup').style.display = 'block'
  } else {
    getDataValue()
  }
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})

closePopup.addEventListener('click', () => {
  document.querySelector('#popup').style.display = 'none'
})

const getDataValue = () => {
  document.querySelector('.first-value').innerHTML = firstName.value
  document.querySelector('.last-value').innerHTML = lastName.value
  document.querySelector('.phone-value').innerHTML = phone.value
  document.querySelector('.email-value').innerHTML = email.value
  modal.style.display = 'block'
}
