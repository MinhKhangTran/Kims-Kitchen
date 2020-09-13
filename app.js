const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./img/item-1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./img/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./img/item-3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./img/item-4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./img/item-5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./img/item-6.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./img/item-7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./img/item-8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./img/item-9.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// sidebar
const sidebar = document.querySelector(".sidebar");
const heroToggler = document.querySelector(".hero__toggler");
const sidebarClose = document.querySelector(".sidebar__close");
const sidebarNavLi = document.querySelectorAll(".sidebar__nav li");
heroToggler.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});
sidebarClose.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
sidebarNavLi.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
  });
});

// gallery
const galleryPrev = document.querySelector(".gallery__prev");
const gallerynext = document.querySelector(".gallery__next");
const galleryImage = document.querySelector(".gallery__image--img");

let zaehler = 1;
galleryPrev.addEventListener("click", () => {
  zaehler--;
  if (zaehler === 0) {
    zaehler = menu.length;
  }
  galleryImage.src = `./img/item-${zaehler}.jpg`;
});
gallerynext.addEventListener("click", () => {
  zaehler++;
  if (zaehler > menu.length) {
    zaehler = 1;
  }
  galleryImage.src = `./img/item-${zaehler}.jpg`;
});
// function contentAnimation() {
//   let tl = gsap.timeline();
//   tl.from("menu__items", {
//     duration: 1.5,
//     translateY: 100,
//     opacity: 0,
//   });
// }
// function pageTransition() {
//   let tl = gsap.timeline();
//   tl.to("ul.transition li", {
//     duration: 0.5,
//     scaleY: 1,
//     transformOrigin: "bottom left",
//     stagger: 0.2,
//   });
//   tl.to("ul.transition li", {
//     duration: 0.5,
//     scaleY: 0,
//     transformOrigin: "bottom left",
//     stagger: 0.1,
//     delay: 0.1,
//   });
// }
// function delay(n) {
//   n = n || 2000;
//   return new Promise((done) => {
//     setTimeout(() => {
//       done();
//     }, n);
//   });
// }
// barba.init({
//   views: [
//     {
//       namespace: "home",
//     },
//     {
//       namespace: "menu",
//     },
//   ],

//   transitions: [
//     {
//       leave({ current, next }) {
//         const done = this.async();
//         const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
//         tl.fromTo(current.container, 1, { opacity: 1 }, { opacity: 0 });
//         tl.fromTo(
//           "ul.transition li",
//           0.75,
//           { y: "-100%" },
//           { y: "0%", onComplete: done },
//           "-=0.5"
//         );
//       },
//       enter({ current, next }) {
//         let done = this.async();
//         //Scroll to the top
//         window.scrollTo(0, 0);
//         //An Animation
//         const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
//         tl.fromTo(
//           "ul.transition li",
//           1,
//           { y: "0%" },

//           { y: "100%", stagger: 0.2, onComplete: done }
//         );
//         tl.fromTo(next.container, 1, { opacity: 0 }, { opacity: 1 });
//       },
//     },
//   ],
// });
