// Parallax Start
$(document).ready(function () {
  $("#pagepiling").pagepiling({
    menu: "#menu",
    anchors: ["home", "about", "portfolio", "contact"],
    navigation: {
      textColor: "#f2f2f2",
      bulletsColor: "#ccc",
      position: "right",
      tooltips: ["Home", "About", "Portfolio", "Contact"],
    },
    sectionsColor: ["#EBEEF1", "#EBEEF1", "#EBEEF1", "#EBEEF1"],
    direction: "vertical",
    verticalCentered: true,
    scrollingSpeed: 700,
    easing: "swing",
    loopBottom: false,
    loopTop: false,
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    animateAnchor: true,
  });
});
// Parallax End

// Filter Portfolio Start
class FilterGallery {
  constructor() {
    this.$menuPortfolio = $(".menu-portfolio li");
    this.$contentPortfolio = $(".content-portfolio");
    this.updateMenu("all");
    this.$menuPortfolio.on("click", $.proxy(this.onClickFilterMenu, this));
  }
  onClickFilterMenu(event) {
    const $target = $(event.target);
    const targetFilter = $target.data("filter");
    this.updateMenu(targetFilter);
    this.updateGallery(targetFilter);
  }
  updateMenu(targetFilter) {
    this.$menuPortfolio.removeClass("active");
    this.$menuPortfolio.each((index, element) => {
      const targetData = $(element).data("filter");
      if (targetData === targetFilter) {
        $(element).addClass("active");
      }
    });
  }
  updateGallery(targetFilter) {
    if (targetFilter === "all") {
      this.$contentPortfolio.fadeOut(300, () => {
        $(".post").show();
        this.$contentPortfolio.fadeIn();
      });
    } else {
      this.$contentPortfolio.find(".post").each((index, element) => {
        this.$contentPortfolio.fadeOut(300, () => {
          if ($(element).hasClass(targetFilter)) {
            $(element).show();
          } else {
            $(element).hide();
          }
          this.$contentPortfolio.fadeIn();
        });
      });
    }
  }
}
const fliterGallery = new FilterGallery();
// Filter Portfolio End

// Portfolio Item Details Popup Start //
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-detail")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  // document.querySelector(".main").classList.toggle("fade-out")
}
document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortfolioPopup);
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopup();
  }
});

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;
  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;
  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML;
}
// Portfolio Item Details Popup End //

// Portfolio Item Details Video Popup Start //
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-detail-video")) {
    togglePortfolioPopupVideo();
    document.querySelector(".portfolio-popup-video").scrollTo(0, 0);
    portfolioItemDetailsVideo(e.target.parentElement);
  }
});

function togglePortfolioPopupVideo() {
  document.querySelector(".portfolio-popup-video").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  // document.querySelector(".main").classList.toggle("fade-out")
}

document
  .querySelector(".pp-close-video")
  .addEventListener("click", togglePortfolioPopupVideo);
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner-video")) {
    togglePortfolioPopupVideo();
  }
});

function portfolioItemDetailsVideo(portfolioItem) {
  document.querySelector(".pp-thumbnail-video video").src =
    portfolioItem.querySelector(".portfolio-item-thumbnail-video source").src;
  document.querySelector(".pp-header-video h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title-video").innerHTML;
  document.querySelector(".pp-body-video").innerHTML =
    portfolioItem.querySelector(".portfolio-item-details-video").innerHTML;
}
// Portfolio Item Details Video Popup End //

// Sweet Alert Start
document.querySelector(".send").addEventListener("click", function (event) {
  event.preventDefault();
  const form = document.getElementById("contactForm");
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const subject = form.elements["subject"].value;
  const message = form.elements["message"].value;
  if (name && email && subject && message) {
    Swal.fire("Thank you", "Your message has been sent!", "success").then(
      () => {
        form.submit();
      }
    );
  } else {
    Swal.fire("Oops...", "Please fill out all fields!", "error");
  }
});
// Sweet Alert End