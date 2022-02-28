particlesJS({
  particles: {
    number: {
      value: 6,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#8c8c8c',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#1b1b1b',
      },
      polygon: {
        nb_sides: 3,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: true,
      },
    },
    size: {
      value: 177.55821936726136,
      random: true,
      anim: {
        enable: true,
        speed: 35.964035964035965,
        size_min: 55.14485514485514,
        sync: true,
      },
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: '#ffffff',
      opacity: 1,
      width: 2,
    },
    move: {
      enable: true,
      speed: 8,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'grab',
      },
      onclick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 191.80819180819182,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 359.64035964035963,
        duration: 2.317682317682318,
        opacity: 0.8311688311688312,
        speed: 3,
      },
      repulse: {
        distance: 263.73626373626377,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
