const feedbackButton = document.querySelector(".feedback-button");

const feedbackPopup = document.querySelector(".modal-feedback");

// const feedbackPopup = document.querySelector(".modal");

const feedbackClose = feedbackPopup.querySelector(".modal-close");

const feedbackForm = feedbackPopup.querySelector(".feedback-form");

const fullNameUser = feedbackPopup.querySelector(".full-name-user");

const userEmail = feedbackPopup.querySelector(".user-email");

const userFeedback = feedbackPopup.querySelector(".user-letter");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";
let storageFeedback = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
  storageFeedback = localStorage.getItem("feedback");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");


  if (storageName) {
    fullNameUser.value = storageName;
    userEmail.value = storageEmail;
    userFeedback.value = storageFeedback;
  }

  fullNameUser.focus();
});



feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!fullNameUser.value || !userEmail.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", fullNameUser.value);
      localStorage.setItem("email", userEmail.value);
      localStorage.setItem("feedback", userFeedback.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});
