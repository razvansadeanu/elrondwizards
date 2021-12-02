import gsap from "gsap";

export const imagesFade = (node1, node2, node3, node4, node5) => {
  gsap.from([node1, node2, node3, node4, node5], {
    duration: 0.5,
    opacity: 0,
    delay: 0.7,
    ease: "power3.inOut",
    stagger: {
      amount: 0.9,
    },
  });
};

export const textFade = (node1, node2) => {
  gsap.from([node1, node2], {
    skewY: 5,
    duration: 0.5,
    delay: 0.2,
    opacity: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });
};

export const buttonFade = (node1) => {
  gsap.to(node1, {
    duration: 0.4,
    delay: 0.7,
    y: 0,
    opacity: 1,
    ease: "power3.inOut",
  });
};
