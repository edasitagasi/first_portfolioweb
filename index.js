particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 280,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#A149FA"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#A149FA"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#A149FA",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 300,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

gsap.to(".header-text", {
    text: "Hey! I'm Anna Maksimenko. <br>I am a web developer ;)",
    duration: 5,
    ease: "power1.in",
})

gsap.from(".btn-design", {opacity: 0, delay: 5.5, duration: 2, repeat: -1, yoyo: true})

gsap.from("#bigContainer", {opacity: 0, delay: 7, duration: 3})
gsap.from(".btn1", {x: -300, duration: 2, delay: 7.5})
gsap.from(".btn2", {x: 300, duration: 2, delay: 7.5})
