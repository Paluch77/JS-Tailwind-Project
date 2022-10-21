// Header

const header = document.querySelector("#header");
const headerOptions = document.querySelector("#headerOptions");
document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.remove("lg:text-white", "lg:bg-transparent");
    headerOptions.classList.add("lg:text-black");
    header.classList.add("lg:bg-white", "lg:text-black");
  } else {
    header.classList.add("lg:text-white", "lg:bg-transparent");
    headerOptions.classList.add("lg:text-white");

    header.classList.remove("lg:bg-white", "lg:text-black");
    headerOptions.classList.remove("lg:text-black");
  }
});

// Header scroll

const logoButton = document.querySelector("#mainLogo");
const topForScroll = document.querySelector("#topForScroll");

logoButton.addEventListener("click", () => {
  topForScroll.scrollIntoView({ behavior: "smooth" });
});

const aboutButton = document.querySelector("#about");
const aboutForScroll = document.querySelector("#aboutForScroll");

aboutButton.addEventListener("click", () => {
  aboutForScroll.scrollIntoView({ behavior: "smooth" });
  headerOptions.classList.add("sm:invisible");
});

const servicesButton = document.querySelector("#services");
const servicesForScroll = document.querySelector("#servicesForScroll");

servicesButton.addEventListener("click", () => {
  servicesForScroll.scrollIntoView({ behavior: "smooth" });
  headerOptions.classList.add("sm:invisible");
});

const portfolioButton = document.querySelector("#portfolio");
const photolist = document.querySelector("#photolist");

portfolioButton.addEventListener("click", () => {
  photolist.scrollIntoView({ behavior: "smooth" });
  headerOptions.classList.add("sm:invisible");
});

const contactButton = document.querySelector("#contact");
const contactForScroll = document.querySelector("#contactForScroll");

contactButton.addEventListener("click", () => {
  contactForScroll.scrollIntoView({ behavior: "smooth" });
  headerOptions.classList.add("sm:invisible");
});

// Header burger

const burger = document.querySelector("#burgerLogo");

burger.addEventListener("click", () => {
  if (headerOptions.classList.contains("invisible")) {
    headerOptions.classList.remove("invisible", "opacity-0", "hidden");
    headerOptions.classList.add("visible", "opacity-100", "flex", "flex");
  } else {
    headerOptions.classList.add("invisible", "hidden");
    headerOptions.classList.remove("visible", "opacity-100", "flex");
  }
});
// Photos section

const childs = document.querySelectorAll("#photo");

childs.forEach((elem) => {
  let photoHover = elem.querySelector("#photoHover");
  let photoCoverInfo = elem.querySelector("#photoCoverInfo");
  photoHover.addEventListener("mouseover", () => {
    photoCoverInfo.classList.add("visible", "opacity-100");
    photoCoverInfo.classList.remove("invisible", "opacity-0");
  });
  photoCoverInfo.addEventListener("mouseleave", () => {
    photoCoverInfo.classList.add("invisible", "opacity-0");
    photoCoverInfo.classList.remove("visible", "opacity-100");
  });
});

// Form logic

const nameForm = document.querySelector("#nameForm");
const emailForm = document.querySelector("#emailForm");
const numberForm = document.querySelector("#numberForm");
const textForm = document.querySelector("#textForm");
const notValidEmail = document.querySelector("#notValidEmail");
const submitButton = document.querySelector("#submitButton");

const data = [nameForm, emailForm, numberForm, textForm];
const counter = {
  nameForm: 0,
  emailForm: 0,
  numberForm: 0,
  textForm: 0,
};

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

data.forEach((elem) => {
  const formInput = elem.querySelector("#formInput");
  const wrongForm = elem.querySelector("#wrongForm");

  formInput.addEventListener("keyup", (e) => {
    if (formInput.type === "email") {
      if (validateEmail(e.target.value) === true) {
        counter[elem.id] = 1;
        formInput.classList.remove("ring-4", "ring-red-400");
        wrongForm.classList.add("hidden");
        wrongForm.classList.remove("block");
      } else {
        counter[elem.id] = 0;
        formInput.classList.add("ring-4", "ring-red-400");
        wrongForm.classList.add("block");
        wrongForm.classList.remove("hidden");
      }
    } else {
      if (e.target.value.length == 0) {
        counter[elem.id] = 0;
        formInput.classList.add("ring-4", "ring-red-400");
        wrongForm.classList.add("block");
        wrongForm.classList.remove("hidden");
      } else {
        counter[elem.id] = 1;
        formInput.classList.remove("ring-4", "ring-red-400");
        wrongForm.classList.add("hidden");
        wrongForm.classList.remove("block");
      }
      const sum = Object.values(counter).reduce((sum, a) => sum + a, 0);

      if (sum == 4) {
        submitButton.classList.remove("bg-blue-300");
        submitButton.classList.add("bg-blue-500");
      } else {
        submitButton.classList.remove("bg-blue-500");
        submitButton.classList.add("bg-blue-300");
      }
    }
  });

  formInput.addEventListener("click", (e) => {
    if (e.target.value.length == 0) {
      formInput.classList.add("ring-4", "ring-red-400");
      wrongForm.classList.add("block");
      wrongForm.classList.remove("hidden");
    } else {
      formInput.classList.remove("ring-4", "ring-red-400");
      wrongForm.classList.add("hidden");
      wrongForm.classList.remove("block");
    }
  });
});
