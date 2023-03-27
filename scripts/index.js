const buttonOpenPopup = document.querySelector(
  ".content__button-tasks_type_tasks"
)
console.log(buttonOpenPopup)

const buttonClosePopup = document.querySelector(".popup__close")
console.log(buttonClosePopup)

const popup = document.querySelector(".popup")
console.log(popup)

function openPopup(popup) {
  popup.classList.add("popup_opened")
  console.log()
}

function closePopup(popup) {
  popup.classList.remove("popup_opened")
  console.log()
}

buttonOpenPopup.addEventListener("click", () => {
  openPopup(popup)
})

buttonClosePopup.addEventListener("click", () => {
  closePopup(popup)
})
