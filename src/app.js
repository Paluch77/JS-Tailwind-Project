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
  headerOptions.classList.add("invisible");
});

const servicesButton = document.querySelector("#services");
const servicesForScroll = document.querySelector("#servicesForScroll");

servicesButton.addEventListener("click", () => {
  servicesForScroll.scrollIntoView({ behavior: "smooth" });
  headerOptions.classList.add("invisible");
});

const portfolioButton = document.querySelector("#portfolio");
const photolist = document.querySelector("#photolist");

portfolioButton.addEventListener("click", () => {
  photolist.scrollIntoView({ behavior: "smooth" });
  headerOptions.classList.add("invisible");
});

const contactButton = document.querySelector("#contact");
const contactForScroll = document.querySelector("#contactForScroll");

contactButton.addEventListener("click", () => {
  contactForScroll.scrollIntoView({ behavior: "smooth" });
  headerOptions.classList.add("invisible");
});

// Header burger

const burger = document.querySelector("#burgerLogo");

burger.addEventListener("click", () => {
  if (headerOptions.classList.contains("invisible")) {
    headerOptions.classList.remove("invisible", "opacity-0", "hidden");
    headerOptions.classList.add("visible", "opacity-100", "flex", "flex");
  } else {
    headerOptions.classList.add("invisible", "hidden", "opacity-0");
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
  const label = elem.querySelector("#label");

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
  label.addEventListener("click", () => {
    formInput.focus();
  });
});

// Buttons

const findOutMore = document.querySelector("#findOutMore");
findOutMore.addEventListener("click", () => {
  servicesForScroll.scrollIntoView({ behavior: "smooth" });
});

const getStarted = document.querySelector("#getStarted");
getStarted.addEventListener("click", () => {
  servicesForScroll.scrollIntoView({ behavior: "smooth" });
});

// Gallery

class Gallery {
  constructor(src) {
    this.src = src;
  }
  get data() {
    this.events();
    return this.src;
  }

  srcAttribute() {
    return this.src;
  }

  buildDiv(attribute) {
    const randomId = "Random" + Math.floor(Math.random() * 1000) + 1;
    // Wrap
    const divWrapper = document.createElement("div");
    const wrapperClassList =
      "fixed z-10 inset-0 w-screen h-screen backdrop-blur-sm flex justify-center items-center".split(
        " "
      );

    divWrapper.setAttribute("id", randomId);
    divWrapper.classList.add(...wrapperClassList);

    // Arrows
    const arrowLeft = document.createElement("div");
    const arrowLeftClassList =
      "fixed top-1/2 lg:mt-[-2rem] mt-[-1.5rem] left-10 z-10 lg:w-16 w-12 lg:h-16 h-12 bg-leftArrow bg-cover cursor-pointer".split(
        " "
      );
    arrowLeft.classList.add(...arrowLeftClassList);

    const arrowRight = document.createElement("div");
    const arrowRightClassList =
      "fixed top-1/2 lg:mt-[-2rem] mt-[-1.5rem] right-10 z-10 lg:w-16 w-12 lg:h-16 h-12 bg-leftArrow bg-cover rotate-180 cursor-pointer".split(
        " "
      );
    arrowRight.classList.add(...arrowRightClassList);

    // Img
    const imgWrapper = document.createElement("div");
    const imgWrapperClassList =
      "outside-click fixed w-1/2 h-1/4 max-w-2xl z-10 rounded-lg bg-black".split(
        " "
      );
    imgWrapper.classList.add(...imgWrapperClassList);
    const img = document.createElement("img");
    const imgClassList = "w-full h-full rounded-lg".split(" ");
    img.classList.add(...imgClassList);
    img.setAttribute("src", attribute);
    imgWrapper.appendChild(img);

    // Delete
    const deleteDiv = document.createElement("div");
    const deleteDivClassList =
      "fixed right-10 top-10 z-10 w-12 lg:w-16 h-12 lg:h-16 bg-off bg-cover cursor-pointer".split(
        " "
      );
    deleteDiv.classList.add(...deleteDivClassList);

    // Append childs
    divWrapper.appendChild(imgWrapper);
    divWrapper.appendChild(deleteDiv);
    divWrapper.appendChild(arrowRight);
    divWrapper.appendChild(arrowLeft);

    //Logic

    divWrapper.addEventListener("click", (e) => {
      if (
        !imgWrapper.contains(e.target) &&
        !arrowLeft.contains(e.target) &&
        !arrowRight.contains(e.target) &&
        !deleteDiv.contains(e.target)
      ) {
        document.querySelector(`#${randomId}`).remove();
      }
    });

    deleteDiv.addEventListener("click", () => {
      const variable = document.querySelector(`#${randomId}`);
      variable.remove();
    });

    arrowRight.addEventListener("click", () => {
      const imgAttribute = img.getAttribute("src");
      let index;
      photosObject.forEach((elem) => {
        if (imgAttribute == elem.src) {
          const nextIndex = photosObject.indexOf(elem) + 1;
          if (nextIndex < 6) {
            index = nextIndex;
          } else {
            index = 0;
          }
        }
      });
      const nextPhoto = photosObject[index].src;
      img.setAttribute("src", nextPhoto);
    });

    arrowLeft.addEventListener("click", () => {
      const imgAttribute = img.getAttribute("src");
      let index;
      photosObject.forEach((elem) => {
        if (imgAttribute == elem.src) {
          const nextIndex = photosObject.indexOf(elem) - 1;
          if (nextIndex < 6 && nextIndex >= 0) {
            index = nextIndex;
          } else {
            index = 5;
          }
        }
      });
      const nextPhoto = photosObject[index].src;
      img.setAttribute("src", nextPhoto);
    });

    return divWrapper;
  }
  events() {
    this.src.forEach((elem) => {
      const srcAttribute = elem.img.getAttribute("src");
      elem.photoCover.addEventListener("click", () => {
        const gallery = document.querySelector("#gallery");
        gallery.appendChild(this.buildDiv(srcAttribute));
      });
    });
  }
}
const photos = document.querySelectorAll("#photoHover");
let photosObject = [];
const allPhotos = document.querySelectorAll("#photo");
allPhotos.forEach((photoDiv) => {
  const img = photoDiv.querySelector("#photoHover");
  const src = img.getAttribute("src");
  const photoCover = photoDiv.querySelector("#photoCoverInfo");
  photosObject.push({ img, photoCover, src });
});
const photoClicker = document.querySelectorAll("#photoCoverInfo");

photos.forEach((photo) => {
  const srcAttribute = photo.getAttribute("src");
  const eachPhoto = new Gallery(srcAttribute);
  photo.addEventListener("click", () => {
    const test = document.querySelector("#testDiv");
    test.appendChild(eachPhoto.data);
  });
});

const galleryNew = new Gallery(photosObject);
galleryNew.data;
