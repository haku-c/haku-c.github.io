// var timeline = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

function shift_color(old_background_color, old_text_color, background_color, text_color) {
  return gsap.fromTo("body", {
    backgroundColor: old_background_color,
    "--text-color": old_text_color,
    duration: .3,
    ease: Power3.easeOut,
  }, {
    backgroundColor: background_color,
    "--text-color": text_color,
    duration: .3,
    ease: Power3.easeOut,
  });
}

const shift_colors_teal = shift_color("#ffdc7d", "#cf2e2e", "#7bdcb5", "#fcf5f5");

const shift_colors_purple = shift_color("#7bdcb5", "#fcf5f5", "#dccbfc", "#0c033f");

const shift_colors_red = shift_color("#dccbfc", "#0c033f", "#b71313", "#fffd92");

ScrollTrigger.create({
  trigger: "#teal-trigger",
  start: "bottom bottom",
  end: "bottom bottom",
  // markers: true,
  animation: shift_colors_teal,
  toggleActions: "play none reverse none"
});

ScrollTrigger.create({
  trigger: "#purple-trigger",
  start: "top center",
  end: "top center",
  // markers: true,
  animation: shift_colors_purple,
  toggleActions: "play none reverse none"
});

ScrollTrigger.create({
  trigger: "#red-trigger",
  start: "top center",
  end: "top center",
  // markers: true,
  animation: shift_colors_red,
  toggleActions: "play none reverse none"
});

gsap.to("body", {
  backgroundColor: "#ffdc7d",
  "--text-color": "#cf2e2e",
})