function openPopupContent(popup) {
  popup.classList.add("content__form2-popup_opened")
  console.log("fffffffffffff")
}

const buttonContentInput2Specific = document.querySelector(
  ".content__button-input2_type_specific"
)

console.log(buttonContentInput2Specific)

const popupContentSpecific = document.querySelector(
  ".content__form2-popup_type_specific"
)

buttonContentInput2Specific.addEventListener("click", () => {
  openPopupContent(popupContentSpecific)
})

console.log()
