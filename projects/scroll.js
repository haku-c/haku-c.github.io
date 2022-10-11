var timeline = gsap.timeline();

function shift_color(background_color, text_color) {
  return gsap.to("body", {
    backgroundColor: background_color,
    "--text-color": text_color,
    ease: Power3.easeOut,
  });
}

const shift_colors_teal = shift_color("#7bdcb5", "#fcf5f5");

const shift_colors_purple = shift_color("#dccbfc", "#0c033f");

const shift_colors_red = shift_color("#b71313", "#fffd92");

ScrollTrigger.create({
  trigger: "#teal-trigger",
  start: "top center",
  end: "top 300px",
  markers: true,
  // scrub: true,
  animation: shift_colors_teal,
});

ScrollTrigger.create({
  trigger: "#purple-trigger",
  start: "top center",
  end: "top 300px",
  markers: true,
  // scrub: true,
  animation: shift_colors_purple,
});

ScrollTrigger.create({
  trigger: "#red-trigger",
  start: "top center",
  end: "top 300px",
  markers: true,
  // scrub: true,
  animation: shift_colors_red,
});