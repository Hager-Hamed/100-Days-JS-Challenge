// let openShopping = document.querySelector(".shopping");
// let closeShopping = document.querySelector(".closeShopping");
// let list = document.querySelector(".list");
// let listCard = document.querySelector(".listCard");
// let body = document.querySelector("body");
// let total = document.querySelector(".total");
// let quantity = document.querySelector(".quantity");

// openShopping.addEventListener("click", () => {
//   body.classList.add("active");
// });
// closeShopping.addEventListener("click", () => {
//   body.classList.remove("active");
// });
// let products = [
//   {
//     id: 1,
//     name: "Philadelphia Roll",
//     image: "../../views/1.png",
//     price: 120000,
//   },
//   {
//     id: 2,
//     name: "Chirashizushi",
//     image: "../../views/2.png",
//     price: 120000,
//   },
//   {
//     id: 3,
//     name: "Iwakunizushi",
//     image: "../../views/3.PNG",
//     price: 220000,
//   },
//   {
//     id: 4,
//     name: "Iwakunizushi",
//     image: "../../views/4.PNG",
//     price: 123000,
//   },
//   {
//     id: 5,
//     name: " Alaska Roll",
//     image: "../../views/5.PNG",
//     price: 320000,
//   },
//   {
//     id: 6,
//     name: "Philadelphia Roll",
//     image: "../../views/6.PNG",
//     price: 120000,
//   },
// ];
// let listCards = [];
// function initApp() {
//   products.forEach((value, key) => {
//     let newDiv = document.createElement("div");
//     newDiv.classList.add("item");
//     newDiv.innerHTML = `
//             <img src="../../views/${value.image}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Card</button>`;
//     list.appendChild(newDiv);
//   });
// }
// initApp();
// function addToCard(key) {
//   if (listCards[key] == null) {
//     // copy product form list to list card
//     listCards[key] = JSON.parse(JSON.stringify(products[key]));
//     listCards[key].quantity = 1;
//   }
//   reloadCard();
// }
// function reloadCard() {
//   listCard.innerHTML = "";
//   let count = 0;
//   let totalPrice = 0;
//   listCards.forEach((value, key) => {
//     totalPrice = totalPrice + value.price;
//     count = count + value.quantity;
//     if (value != null) {
//       let newDiv = document.createElement("li");
//       newDiv.innerHTML = `
//                 <div><img src="../../views/${value.image}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${
//         value.quantity - 1
//       })">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${
//         value.quantity + 1
//       })">+</button>
//                 </div>`;
//       listCard.appendChild(newDiv);
//     }
//   });
//   total.innerText = totalPrice.toLocaleString();
//   quantity.innerText = count;
// }
// function changeQuantity(key, quantity) {
//   if (quantity == 0) {
//     delete listCards[key];
//   } else {
//     listCards[key].quantity = quantity;
//     listCards[key].price = quantity * products[key].price;
//   }
//   reloadCard();
// }

//Go to Chosen Page
let pages = document.querySelectorAll(".navbar-list a");
checker(pages);

pages.forEach((page) => {
  page.addEventListener("click", (e) => {
    if (e.target.dataset.show === "menu") {
      document.querySelectorAll(".activision").forEach((active) => {
        active.classList.add("not-active");
      });

      document.querySelector(".menu").classList.remove("not-active");
    } else if (e.target.dataset.show === "about") {
      document.querySelectorAll(".activision").forEach((active) => {
        active.classList.add("not-active");
      });

      document.querySelector(".about").classList.remove("not-active");
    } else if (e.target.dataset.show === "bookTable") {
      document.querySelectorAll(".activision").forEach((active) => {
        active.classList.add("not-active");
      });

      document.querySelector(".bookTable").classList.remove("not-active");
    } else if (e.target.dataset.show === "home") {
      document.querySelectorAll(".activision").forEach((active) => {
        active.classList.remove("not-active");
      });
    }
  });
});

//filter menu
let filter = document.querySelectorAll(".menu-filter li");
checker(filter);

let foods = document.querySelectorAll(".menu-box");
filter.forEach((li) => {
  li.addEventListener("click", (e) => {
    foods.forEach((food) => {
      food.classList.add("disabled");

      food.classList.remove("chosen");

      setTimeout(() => {
        food.style.display = "none";
      }, 500);
    });

    document.querySelectorAll(e.target.dataset.cat).forEach((el) => {
      el.classList.add("chosen");

      el.classList.remove("disabled");

      setTimeout(() => {
        el.style.display = "block";
      }, 500);
    });
  });
});

//checking if elements has class active and add it
function checker([...params]) {
  params.forEach((param) => {
    param.addEventListener("click", function () {
      params.forEach((param) => {
        param.classList.remove("active");

        this.classList.add("active");
      });
    });
  });
}

//form select how many persons
document.querySelector(".dropdown .value").textContent =
  document.querySelector(".option.active").textContent;

let options = document.querySelectorAll(".form-list .option");
checker(options);

options.forEach((option) => {
  option.addEventListener("click", (_) => {
    document.querySelector(".dropdown").classList.toggle("open");

    document.querySelector(".form-list").classList.remove("select");

    document.querySelector(".dropdown .value").textContent =
      document.querySelector(".option.active").textContent;
  });
});

document.querySelector(".dropdown .value").onclick = (_) => {
  document.querySelector(".form-list").classList.toggle("select");

  document.querySelector(".dropdown").classList.toggle("open");
};

//landing-carousel
$(".owl-carousel.landing-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    800: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

//clintComment-carousel
$(".owl-carousel.clintComment-carousel").owlCarousel({
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    800: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

//scroll to top logic
window.onscroll = (_) => {
  document.querySelector(".scroll-to-top").onclick = (_) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (scrollY >= 600) {
    document
      .querySelector(".scroll-to-top")
      .classList.add("scroll-to-top-show");
  } else {
    document
      .querySelector(".scroll-to-top")
      .classList.remove("scroll-to-top-show");
  }
};
