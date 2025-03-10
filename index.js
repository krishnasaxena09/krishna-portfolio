gsap.to(".mountain", { y: -20, duration: 2, repeat: -1, yoyo: true });


window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty("--scroll", window.scrollY);
  });
  