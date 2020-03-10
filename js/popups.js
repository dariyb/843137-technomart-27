var contactButton = document.querySelector(".contact-us");
var writePopup = document.querySelector(".write-popup");
var closeWriteUs = document.querySelector(".write-us .exit");
var mapButton = document.querySelector(".map-img");
var mapPopup = document.querySelector(".map-popup");
var closeMapPopup = document.querySelector(".map-popup .exit");
var focusName = document.querySelector(".fio");
var formWrite = document.querySelector(".write-us");
var emailBlock = document.querySelector(".e-mail");

var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("fio");
  } catch (err) {
    isStorageSupport = false;
  }

contactButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  writePopup.classList.remove("visually-hidden");
  if (storage) {
      focusName.value = storage;
      emailBlock.focus();
    } else {
      focusName.focus();
    }
})
closeWriteUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  writePopup.classList.add("visually-hidden");
  writePopup.classList.remove("modal-error");
})
mapButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("visually-hidden");
})
closeMapPopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("visually-hidden");
})
formWrite.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if (!focusName.value || !email.value) {
      evt.preventDefault();
      writePopup.classList.remove("modal-error");
      writePopup.offetWidth = writePopup.offsetWidth;
      writePopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("fio", focusName.value);
      }
    }
})
