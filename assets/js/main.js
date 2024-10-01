const projectDetailsTogglers = document.querySelectorAll(".project__header");
const projects = document.querySelectorAll(".project");

projectDetailsTogglers.forEach((toggler) => {
  toggler.addEventListener("click", () => {
    let currentProject = toggler.closest(".project");

    projects.forEach((project) => {
      if (project !== currentProject && project.classList.contains("active")) {
        project.classList.remove("active");
      }
    });

    currentProject.classList.toggle("active");
  });
});

demo.onclick = (event) => {
  let target = event.target.closest(".item");

  if (target) {
    demo.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    });
  }
};

//import Swiper from "swiper";
//import Swiper from "../../node_modules/swiper";
//import { Navigation } from "../../node_modules/swiper/modules/navigation";
//const swiper = new Swiper(".swiper", {
//modules: [Navigation],
//loop: true,
// navigation: {
//   nextEl: ".swiper-button-next",
//   prevEl: ".swiper-button-prev",
// },
//autoplay: true,
//});

const jobsWrapper = document.querySelector("[data-span=jobs]");
const virtuesWrapper1 = document.querySelector("[data-span=virtues-1]");
const virtuesWrapper2 = document.querySelector("[data-span=virtues-2]");
const placesWrapper = document.querySelector("[data-span=places]");
//const nonsenseWrapper = document.querySelector("[data-span=nonsense]");
//const senseWrapper = document.querySelector("[data-span=sense]");
const jobs = ["Front-End", "Web", "React", "JavaScript"];
//const virtues = ["disciplined", "creative"];
const places = ["web sites", "applications", "web designs"];
const future = ["programming-guru", "triathlonist", "gardener"];

let counter = 0;

window.addEventListener("DOMContentLoaded", () => {
  jobsWrapper.textContent = jobs[counter];
  //virtuesWrapper1.textContent = virtues[counter];
  //virtuesWrapper2.textContent = virtues[counter + 1];
  placesWrapper.textContent = places[counter];
  //nonsenseWrapper.classList.add("display-none");
});

function spanChanger(span, array) {
  span.addEventListener("click", () => {
    counter++;
    if (counter > array.length - 1) {
      counter = 0;
    }
    span.textContent = array[counter];
    // if (span === virtuesWrapper1 || span === virtuesWrapper2) {
    //   if (
    //     (virtuesWrapper1.textContent === array[1] &&
    //       virtuesWrapper2.textContent === array[1]) ||
    //     (virtuesWrapper1.textContent === array[0] &&
    //       virtuesWrapper2.textContent === array[0])
    //   ) {
    //     document
    //       .querySelector("[data-span=nonsense]")
    //       .classList.remove("display-none");
    //     document
    //       .querySelector("[data-span=sense]")
    //       .classList.add("display-none");
    //   } else {
    //     document
    //       .querySelector("[data-span=sense]")
    //       .classList.remove("display-none");
    //     document
    //       .querySelector("[data-span=nonsense]")
    //       .classList.add("display-none");
    //   }
    // }
  });
}

spanChanger(jobsWrapper, jobs);
// spanChanger(virtuesWrapper1, virtues);
// spanChanger(virtuesWrapper2, virtues);
spanChanger(placesWrapper, places);
