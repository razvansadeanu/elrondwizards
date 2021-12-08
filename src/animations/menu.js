import gsap from "gsap";

export const socialFade = (node1, node2, node3, node4, node5) => {
  gsap.from([node1, node2, node3, node4, node5], {
    x: 10,
    duration: 0.5,
    delay: 0.4,
    opacity: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
  });
};

export const staggerText = (node1, node2, node3, node4) => {
  gsap.from([node1, node2, node3, node4], {
    duration: 0.5,
    delay: 0.2,
    opacity: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });
};
