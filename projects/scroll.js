const shift_colors = gsap.to("body", {
  backgroundColor: "#7bdcb5",
  "--text-color": "#fcf5f5",
  duration: 3,
  ease: Power3.easeOut,
});

ScrollTrigger.create({
  trigger: "#first-trigger",
  start: "top center",
  end: "top 300px",
  markers: true,
  scrub: true,
  animation: shift_colors,
});