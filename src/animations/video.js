import gsap from "gsap";

export const textScale = (node1) => {
  gsap.from([node1], {
    duration: 0.6,
    delay: 0.2,
    scale: 0,
    ease: "power3.easeInOut",
  });
};

export const videoFade = (node1) => {
  gsap.to([node1], {
    duration: 0.5,
    delay: 0.5,
    opacity: 1,
    ease: "power3.inOut",
  });
};
