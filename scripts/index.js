const buttonOpenPopup = document.querySelector(
  ".content__button-tasks_type_tasks"
)
console.log()

const buttonClosePopup = document.querySelector(".popup__close")
console.log()

const popup = document.querySelector(".popup")
console.log()

function openPopup(popup) {
  popup.classList.add("popup_opened")
  console.log("gggggggggggg")
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

const buttonContentInput2Status = document.querySelector(
  ".content__button-input2_type_status"
)

const buttonContentInput2Verification = document.querySelector(
  ".content__button-input2_type_verification"
)
console.log()

const buttonContentInput2Task1 = document.querySelector(
  ".content__button-input2_type_task1"
)

const buttonContentInput2Task2 = document.querySelector(
  ".content__button-input2_type_task2"
)

const buttonContentInput2Task3 = document.querySelector(
  ".content__button-input2_type_task3"
)

const popupContentStatus = document.querySelector(
  ".content__form2-popup_type_status"
)

const popupContentVerification = document.querySelector(
  ".content__form2-popup_type_verification"
)

const popupContentTask1 = document.querySelector(
  ".content__form2-popup_type_task1"
)

const popupContentTask2 = document.querySelector(
  ".content__form2-popup_type_task2"
)

const popupContentTask3 = document.querySelector(
  ".content__form2-popup_type_task3"
)

console.log(buttonContentInput2Task1)

function openPopupContent(popup) {
  popup.classList.add("content__form2-popup_opened")
  console.log("mmmmmmmmmmmmmmmmmmmmmmmmmm")

}

buttonContentInput2Status.addEventListener("click", () => {
  openPopupContent(popupContentStatus)
})

buttonContentInput2Verification.addEventListener("click", () => {
  openPopupContent(popupContentVerification)
})

buttonContentInput2Task1.addEventListener("click", () => {
  openPopupContent(popupContentTask1)
})

buttonContentInput2Task2.addEventListener("click", () => {
  openPopupContent(popupContentTask2)
})

buttonContentInput2Task3.addEventListener("click", () => {
  openPopupContent(popupContentTask3)
})
