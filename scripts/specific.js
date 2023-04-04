const buttonOpenPopup = document.querySelector(
    ".header__button-create"
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
  
  buttonClosePopup.addEventListener("click", () => {
    closePopup(popup)
  })



function openPopupContent(popup) {
  popup.classList.add("content__form2-popup_opened")
  document.addEventListener("keydown", closePopupContentOnEsc)
}

function closePopupContent(popup) {
  popup.classList.remove("content__form2-popup_opened")
  document.removeEventListener("keydown", closePopupContentOnEsc)
}

function closePopupContentOnEsc(event) {
  if (event.code == "Escape") {
    closePopupContent(popupContentSpecific)
  }
}

document.addEventListener("click", ({ target: element }) => {
  console.log(element)
  if (
    element.classList.contains("content__form2-popup_type_specific") ||
    element.classList.contains("content__button-input2_type_specific")
  )
    return

  let popupOpened = document.querySelector(
    `${".content__form2-popup_type_specific"}.content__form2-popup_opened`
  )

  console.log(popupOpened)

  if (!popupOpened) return

  closePopupContent(popupOpened)
  console.log("функция закрытия по window")
})

const buttonContentInput2Specific = document.querySelector(
  ".content__button-input2_type_specific"
)

const popupContentSpecific = document.querySelector(
  ".content__form2-popup_type_specific"
)

buttonContentInput2Specific.addEventListener("click", () => {
  openPopupContent(popupContentSpecific)
})

popupContentSpecific.addEventListener("click", () => {
  closePopupContent(popupContentSpecific)
})

console.log()
