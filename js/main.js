
$(document).ready(function () {
  $.scrollify({
    section: "Scroll",
    sectionName: "ScrollAnimation",
    interstitialSection: "",
    easing: "easeOutExpo",
    scrollSpeed: 100,
    offset: 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true,
    before: function () {},
    after: function () {
      gsap.from(".myHeadline", {
        opacity: 0,
        y: 30,
        duration: 1,
      });
      gsap.from(".myTitle", {
        opacity: 0,
        y: -30,
        duration: 1,
      });
      gsap.from("#rightSection", { duration: 1, y: "30%" });
      gsap.from("#sec2One", { duration: 1, y: "100%" });
      gsap.from("#sec2Two", { duration: 1, y: "-100%" });
      gsap.from("#sec3One", {
        opacity: 0,
        y: -100,
        duration: 1,
      });
      gsap.from("#sec3Two", {
        opacity: 0,
        y: 100,
        duration: 1,
      });
      gsap.from("#FOne", {
        opacity: 0,
        x: -100,
        duration: 1,
      });
      gsap.from("#FTwo", {
        opacity: 0,
        y: -100,
        duration: 1,
      });
      gsap.from("#FThree", {
        opacity: 0,
        y: 100,
        duration: 1,
      });
      gsap.from("#FFour", {
        opacity: 0,
        y: 100,

        duration: 1,
      });
      gsap.from("#FFive", {
        opacity: 0,
        y: 100,
        x: -100,
        duration: 1,
      });
      gsap.from("#SFOne", {
        opacity: 0,
        y: 100,
        duration: 0.5,
      });
      gsap.from("#SFTwo", {
        opacity: 0,
        y: 100,
        duration: 0.5,
      });
      gsap.from("#SFThree", {
        opacity: 0,
        x: -100,
        duration: 0.5,
      });
      gsap.from("#SFFour", {
        opacity: 0,
        y: 100,
        duration: 0.5,
      });
      gsap.from("#SFFive", {
        opacity: 0,
        y: 100,
        duration: 0.5,
      });

      gsap.from("#sec7One", {
        opacity: 0,
        y: 100,
        duration: 1,
      });
      gsap.from("#sec7Two", {
        opacity: 0,
        y: 100,
        duration: 1,
      });
    },
    afterResize: function () {},
    afterRender: function () {},
  });
  $(function () {
    $.scrollify({
      section: ".container",
    });
  });
});
