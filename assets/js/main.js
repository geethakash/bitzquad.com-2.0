import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { TweenLite } from 'gsap/gsap-core';

gsap.registerPlugin(ScrollTrigger);

var t1 = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

t1.to('body', {
  opacity: 1,
  duration: 0.5,
})
  .from('.navbar-brand', {
    duration: 1,
    x: '40',
    opacity: 0,
  })

  .from(
    '.landing-content h1',
    {
      duration: 1,
      opacity: 0,
      y: '40',
    },
    '-=1'
  )
  .from(
    '.landing-content p',
    {
      duration: 1,
      opacity: 0,
      y: '40',
    },
    '-=0.7'
  )
  .from(
    '.navbar-link',
    {
      opacity: 0,
      duration: 0.5,
      stagger: 0.09,
      x: '20',
    },
    '-=0.5'
  )
  .from(
    '.landing-logo',
    {
      duration: 1,
      opacity: 0,
      y: '40',
    },
    '-=1'
  )
  .from(
    '.menu-button',
    {
      opacity: 0,
      duration: 0.5,
      // x: '100',
    },
    '-=1'
  );

// scroll trigger navbar
// gsap.to('.navbar', {
//   scrollTrigger: {
//     trigger: '.navbar',
//     start: 'center top',
//     scrub: true,
//     toggleActions: 'restart none none none',
//   },
//   paddingTop: '2rem',
//   paddingBottom: '2rem',
//   backgroundColor: '#f3f4f6',
//   // opacity: 1,
//   duration: 1,
// });

gsap.to('.navbar', {
  scrollTrigger: {
    trigger: '.navbar',
    start: 'center top',
    scrub: true,
    toggleActions: 'restart none none none',
  },
  y: '-50vh',
  // opacity: 1,
  duration: 1,
});

// gsap.to('.services-container', {
//   scrollTrigger: {
//     // trigger: '.navbar',
//     start: 'center top',
//     scrub: true,
//     snap: true,
//     toggleActions: 'restart none none none',
//   },

//   // opacity: 1,
//   duration: 1,
// });

// for smooth scroll
var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector('.scroll-container'),
  ease: 0.07, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

var requestId = null;

TweenLite.set(scroller.target, {
  rotation: 0.01,
  force3D: true,
});

window.addEventListener('load', onLoad);

function onLoad() {
  updateScroller();
  window.focus();
  window.addEventListener('resize', onResize);
  document.addEventListener('scroll', onScroll);
}

function updateScroller() {
  var resized = scroller.resizeRequest > 0;

  if (resized) {
    var height = scroller.target.clientHeight;
    body.style.height = height + 'px';
    scroller.resizeRequest = 0;
  }

  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }

  TweenLite.set(scroller.target, {
    y: -scroller.y,
  });

  requestId =
    scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}
