import gsap from "gsap";

export const titleFade = (node) => {
  gsap.from(node, {
    duration: 0.3,
    opacity: 0,
    delay: 1.8,
    ease: "power3.inOut",
  });
};
