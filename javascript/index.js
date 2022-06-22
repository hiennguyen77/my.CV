let about_leftEls = document.querySelectorAll(".about_view");

const view_left = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const { target } = entry;
    target.classList.toggle("active_view", entry.isIntersecting);
  });
}, {});

about_leftEls.forEach((about_leftEl) => {
  view_left.observe(about_leftEl);
});

// scroll top
window.onload = () => {
  window.scrollTo(0, 0);
};

const btnEl = document.querySelector(".scroll_top");
btnEl.onclick = () => {
  window.scrollTo(0, 0);
};

window.onscroll = () => {
  //   console.log(window.pageYOffset);
  if (window.pageYOffset > 400) {
    btnEl.classList.add("visible");
  } else {
    btnEl.classList.remove("visible");
  }
};
