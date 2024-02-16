var tl = gsap.timeline();
gsap.from("#nav a ", {
    opacity: "0",
    delay: "0.1",
    duration: ".1",
    y: "-10",
    stagger: ".5",
});
gsap.from("#nav2 a ", {
    opacity: "0",
    delay: "0.1",
    duration: ".1",
    x: "10",
    stagger: ".5",
});
gsap.from("#img ", {
    opacity: "0",
    delay: "1",
    duration: "3",
    scal: "-4",
});
gsap.from("#nav2 h1 ", {
    opacity: "0",
    delay: "1",
    duration: "1",
    scal: "1",
});
gsap.from("#page2 h3 ", {
    opacity: "0",
    delay: "1",
    duration: "1",
    scal: "1",
    scrollTrigger: {
        trigger: "#page2 h3",
        scroller: "#main",
        start: "top 80%",
        end: "top -20%",
        scrub: 2,
    }
});
gsap.from("#page2 p ", {
    opacity: "0",
    delay: "1",
    duration: "1",
    scal: "1",
    scrollTrigger: {
        trigger: "#page2 p",
        scroller: "#main",
        start: "top 80%",
        end: "top -20%",
        scrub: 2,
    }
});
gsap.from("#page2 .img3 ", {
    opacity: "0",
    delay: "1",
    duration: "1",
    scal: "0",
    x: "100",
    scrollTrigger: {
        trigger: "#page2 .img3 ",
        scroller: "#main",
        start: "top 80%",
        scrub: 5,
    }
});
gsap.from("#elem2 h1 ", {
    opacity: "0",
    delay: "1",
    duration: "1",
    scale: "1",
    scrollTrigger: {
        trigger: "#elem2 h1 ",
        scroller: "#main",
        start: "top 80%",
        scrub: 5,
    }
});
gsap.from(".asan", {
    delay: "1",
    duration: "1",
    x: "-100",
    scrollTrigger: {
        trigger: ".asan",
        scroller: "#main",
        start: "top 100%",
        scrub: 1,
    }
});
gsap.from(".asan2", {
    delay: "1",
    duration: "1",
    y: "-100",
    scrollTrigger: {
        trigger: ".asan2",
        scroller: "#main",
        start: "top 100%",
        scrub: 1,
    }
});
gsap.from(".asan3", {
    delay: "1",
    duration: "1",
    x: "100",
    scrollTrigger: {
        trigger: ".asan3",
        scroller: "#main",
        start: "top 100%",
        scrub: 1,
    }
});
gsap.from("#boxs", {
    opacity: "0",
    duration: "6",
    scale: "1",
    stagger: "1",
    x: "-100",
    scrollTrigger: {
        trigger: "#boxs",
        scroller: "#main",
        start: "top 60%",
        end: "top 100%",
        scrub: 4,
    }
});
gsap.from("#ake h1", {
    opacity: "0",
    duration: "6",
    y: "100",
    scrollTrigger: {
        trigger: "#ake h1",
        scroller: "#main",
        start: "top 95%",
        end: "top 10%",
        scrub: 1,
    }
});

gsap.from("#red", {
    opacity: "0",
    duration: "6",
    x: "-100",
    scrollTrigger: {
        trigger: "#red",
        scroller: "#main",
        // markers: true,
        start: "top 95%",
        end: "top 60%",
        scrub: 1,
    }
});
gsap.from("#lap ", {
    opacity: "0",
    duration: "6",
    scale: "0",
    scrollTrigger: {
        trigger: "#lap",
        scroller: "#main",
        // markers: true,
        start: "top 95%",
        end: "top 60%",
        scrub: 10,
    }
});