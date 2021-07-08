const sliderControls = document.querySelector(".slider-controls");

const currentClassName = 'current';
const slideCurrentClassName = 'slide-current';
const featuresListClassName = 'features-list';
const sliderControlsButtonsClass = 'slider-controls';

const sliderControlsButtons = document.getElementsByClassName(sliderControlsButtonsClass)[0];

const featuresList = document.getElementsByClassName(featuresListClassName)[0];


sliderControls.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (evt.target.nodeName != 'BUTTON') {
    return
  }

  const newCurentElementClassName = evt.target.className;

  let curentElement = sliderControlsButtons.getElementsByClassName(currentClassName)[0];
  curentElement.classList.remove(currentClassName);

  let newCurentElement = sliderControlsButtons.getElementsByClassName(newCurentElementClassName)[0];
  newCurentElement.classList.add(currentClassName);



  let featuresListCurrentElement = featuresList.getElementsByClassName(newCurentElementClassName)[0];

  featuresList.getElementsByClassName(slideCurrentClassName)[0].classList.remove(slideCurrentClassName);

  featuresListCurrentElement.classList.add(slideCurrentClassName);
});
