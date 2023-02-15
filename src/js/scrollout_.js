ScrollOut({
  onShown(el) {
    el.classList.add("animate__fadeInLeft");
    // force reflow
    void el.offsetWidth;
    // re-add the animated cl
    el.classList.add("animate__fadeInLeft");
  },
});
