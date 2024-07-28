const buyBtn = document.querySelector(".hero-btn");
const orderForm = document.querySelector(".backdrop");
const closeForm = document.querySelector(".close_form");
const sendForm = document.querySelector(".modal-send-btn");
const scroll = document.querySelector(".hero-scroll");
const review = document.querySelector(".loved-btn");

buyBtn.addEventListener("click", (event) => {
  event.preventDefault();
  orderForm.classList.add("is-open");
});

closeForm.addEventListener("click", (event) => {
  event.preventDefault();
  orderForm.classList.remove("is-open");
});

sendForm.addEventListener("click", (event) => {
  event.preventDefault();

  const formFields = document.querySelectorAll(".modal-input");
  const formFieldsArray = [...formFields];
  const findEmptyField = formFieldsArray.filter(
    (field) => field.value.trim() === ""
  );

  if (findEmptyField.length > 0) {
    iziToast.warning({
      title: "Caution",
      position: "center",
      message: "You should fill in all fields!",
    });
  } else {
    orderForm.classList.remove("is-open");
    formFieldsArray.forEach((field) => {
      field.value = "";
    });
    iziToast.success({
      title: "Success!",
      position: "center",
      message: "Thank you! We will call you back within 15min.",
    });
  }
});

scroll.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});

review.addEventListener("click", (event) => {
  event.preventDefault();

  const instance = basicLightbox.create(`
    <form class="feedback-form" autocomplete="off">
    <button type="submit" class="feedback-close-btn">X</button>
    <label>
    Enter your name:
      <input type="text" name="email" class="feedback-name"/>
    </label>
    <label>
      Message:
      <textarea name="message" rows="8" class="feedback-value"></textarea>
    </label>
    <button type="submit" class="feedback-btn">Submit</button>
  </form>
`);

  instance.show();

  const feedbackForm = document.querySelector(".feedback-form");
  const feedbackBtn = document.querySelector(".feedback-btn");

  feedbackBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const feedbackName = document.querySelector(".feedback-name");
    const feedbackValue = document.querySelector(".feedback-value");

    if (feedbackName.value && feedbackValue.value) {
      iziToast.info({
        title: "Thank You!",
        position: "center",
        message: "We will review your feedback and public soon!",
      });
      instance.close();
    } else {
      iziToast.warning({
        title: "Unfortunatelly!",
        position: "center",
        message: "You did not fill in the required fields!",
      });
    }
  });

  const closeFeedbackBtn = document.querySelector(".feedback-close-btn");
  closeFeedbackBtn.addEventListener("click", (event) => {
    event.preventDefault();
    instance.close();
  });
});

const formFooter = document.querySelector(".footer-form");
const emailFooter = document.querySelector(".footer-input");
const subscribeFooter = document.querySelector(".footer-label-btn");

formFooter.addEventListener("submit", (event) => {
  event.preventDefault();

  if (emailFooter.value) {
    iziToast.info({
      title: "Thank You!",
      position: "center",
      message: "",
    });
    emailFooter.value = "";
  } else {
    iziToast.warning({
      title: "Warning!",
      position: "center",
      message: "You should enter your email address!",
    });
  }
});

const menuOpenBtn = document.querySelector(".menu-open-btn");
const mobMenu = document.querySelector(".mob-menu");

menuOpenBtn.addEventListener("click", (event) => {
  event.preventDefault();
  mobMenu.classList.add("is-open");
});

const menuCloseBtn = document.querySelector(".modal-close-btn");
menuCloseBtn.addEventListener("click", (event) => {
  event.preventDefault();
  mobMenu.classList.remove("is-open");
});

const mobilCloseBtn = document.querySelector(".mobil-close-btn");
mobilCloseBtn.addEventListener("click", (event) => {
  event.preventDefault();
  mobMenu.classList.remove("is-open");
});

const menuPoints = document.querySelectorAll(".mob-menu-link");
const menuPointsArray = [...menuPoints];

menuPointsArray.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element) {
      mobMenu.classList.remove("is-open");
    } else {
      console.log("helllo");
    }
  });
});
