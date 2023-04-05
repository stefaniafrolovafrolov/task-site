const buttonOpenPopup = document.querySelector(
  ".header__button-create"
)

const buttonMobileOpenPopup = document.querySelector(
  ".header__button-create_mobile"
)


const buttonClosePopup = document.querySelector(".popup__close")

const popup = document.querySelector(".popup")

function openPopup(popup) {
  popup.classList.add("popup_opened")
  document.addEventListener("keydown", closePopupOnEsc)
}

function closePopup(popup) {
  popup.classList.remove("popup_opened")
  document.removeEventListener("keydown", closePopupOnEsc)
}

function closePopupOnEsc(event) {
  if (event.code == "Escape") {
    closePopup(popup)
  }
}

popup.addEventListener("click", (evt) => {
  if (evt.currentTarget === evt.target) {
    closePopup(popup)
  }
})

buttonOpenPopup.addEventListener("click", () => {
  openPopup(popup)
})

buttonMobileOpenPopup.addEventListener("click", () => {
  openPopup(popup)
})

buttonClosePopup.addEventListener("click", () => {
  closePopup(popup)
})

//КНОПКИ
const buttonContentInput2Status = document.querySelector(
  ".content__button-input2_type_status"
)

const buttonContentInput2Verification = document.querySelector(
  ".content__button-input2_type_verification"
)

const buttonContentInput2Task1 = document.querySelector(
  ".content__button-input2_type_task1"
)

const buttonContentInput2Task2 = document.querySelector(
  ".content__button-input2_type_task2"
)

const buttonContentInput2Task3 = document.querySelector(
  ".content__button-input2_type_task3"
)

//ПОПАПЫ
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

//ФУНКЦИИ

function openPopupContent(popup) {
  console.log("функция открытия")
  popup.classList.add("content__form2-popup_opened")

  document.addEventListener("keydown", closePopupContentOnEsc)
}

function closePopupContent(popup) {
  popup.classList.remove("content__form2-popup_opened")
  document.removeEventListener("keydown", closePopupContentOnEsc)
}

function closePopupContentOnEsc(event) {
  const popup = document.querySelector(".content__form2-popup_opened")
  if (event.code == "Escape") {
    closePopupContent(popup)
  }
}

//ЗАКРЫТИЕ ПОПАПОВ ПО КЛИКУ ВНЕ ПОПАПА

document.addEventListener("click", ({ target: element }) => {
  console.log(element)
  if (
    element.classList.contains("content__form2-popup_type_verification") ||
    element.classList.contains("content__button-input2_type_verification")
  )
    return

  let popupOpened = document.querySelector(
    `${".content__form2-popup_type_verification"}.content__form2-popup_opened`
  )

  console.log(popupOpened)

  if (!popupOpened) return

  closePopupContent(popupOpened)
  console.log("функция закрытия по window")
})

document.addEventListener("click", ({ target: element }) => {
  console.log(element)
  if (
    element.classList.contains("content__form2-popup_type_task3") ||
    element.classList.contains("content__button-input2_type_task3")
  )
    return

  let popupOpened = document.querySelector(
    `${".content__form2-popup_type_task3"}.content__form2-popup_opened`
  )

  console.log(popupOpened)

  if (!popupOpened) return

  closePopupContent(popupOpened)
  console.log("функция закрытия по window")
})

document.addEventListener("click", ({ target: element }) => {
  console.log(element)
  if (
    element.classList.contains("content__form2-popup_type_task2") ||
    element.classList.contains("content__button-input2_type_task2")
  )
    return

  let popupOpened = document.querySelector(
    `${".content__form2-popup_type_task2"}.content__form2-popup_opened`
  )

  console.log(popupOpened)

  if (!popupOpened) return

  closePopupContent(popupOpened)
  console.log("функция закрытия по window")
})

document.addEventListener("click", ({ target: element }) => {
  console.log(element)
  if (
    element.classList.contains("content__form2-popup_type_task1") ||
    element.classList.contains("content__button-input2_type_task1")
  )
    return

  let popupOpened = document.querySelector(
    `${".content__form2-popup_type_task1"}.content__form2-popup_opened`
  )

  console.log(popupOpened)

  if (!popupOpened) return

  closePopupContent(popupOpened)
  console.log("функция закрытия по window")
})

document.addEventListener("click", ({ target: element }) => {
  console.log(element)
  if (
    element.classList.contains("content__form2-popup_type_status") ||
    element.classList.contains("content__button-input2_type_status")
  )
    return

  let popupOpened = document.querySelector(
    `${".content__form2-popup_type_status"}.content__form2-popup_opened`
  )

  console.log(popupOpened)

  if (!popupOpened) return

  closePopupContent(popupOpened)
  console.log("функция закрытия по window")
})

//ОБРАБОТЧИКИ НА ОТКРЫТИЕ ПОПАПОВ

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

//ОБРАБОТЧИКИ НА ЗАКРЫТИЕ ПОПАПОВ

popupContentStatus.addEventListener("click", () => {
  closePopupContent(popupContentStatus)
})

popupContentVerification.addEventListener("click", () => {
  closePopupContent(popupContentVerification)
})

popupContentTask1.addEventListener("click", () => {
  closePopupContent(popupContentTask1)
})

popupContentTask2.addEventListener("click", () => {
  closePopupContent(popupContentTask2)
})

popupContentTask3.addEventListener("click", () => {
  closePopupContent(popupContentTask3)
})

console.log()
