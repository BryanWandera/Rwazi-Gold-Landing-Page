document.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: "#fold-overlay",
    opacity: 1,
    direction: "reverse",
    duration: 1500,
    easing: "easeInOutSine",
  });
});

var scrollToPrice = function () {
  let priceSection = document.querySelector("#pricing-section");
  console.log("Ny stand the fuck up");
  priceSection.scrollIntoView({
    behavior: "smooth",
  });
};
