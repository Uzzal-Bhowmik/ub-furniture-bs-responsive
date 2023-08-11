// loader
setTimeout(function () {
  document.getElementById("loader").style.display = "none";
}, 4000);

// change nav on scroll
let navbar = document.getElementById("navigation-bar");
let navContainer = document.getElementById("nav-container");
window.onscroll = () => {
  if (scrollY > 50) {
    navbar.style.padding = "0";
    navContainer.style.width = "88%";
  } else {
    navbar.style.removeProperty("padding");
    navContainer.style.removeProperty("width");
  }
};

// navbar link active indicator
let navItem = document.getElementsByClassName("nav-link");

for (let item of navItem) {
  item.addEventListener("click", () => {

    // removing active from previous nav item
    for (let singleItem of navItem) {
      if (singleItem.classList.contains("active")) {
        singleItem.classList.remove("active");
      }
    }

    // adding active to newly clicked item
    if (item.classList.contains("dont-activate")) {
      // do nothing
    }
    else {
      item.classList.add("active");
    }
  });
}

//add to cart
let cartBtn = document.getElementsByClassName("add-to-cart-btn");

let cartItem = document.getElementById("cart-icon");

// changing cart icon value
const changeCartIconNum = () => {
  let cartIconField = document.getElementById("cart-icon-input");
  let totalCartItem = 0;
  let localstorage = { ...localStorage };

  for (let key in localstorage) {
    if (key === "Ramon Tool" || key === "Taknion" || key === "Amora" || key === "Liquid Contract" || key === "Flexform" || key === "Paroda") {
      totalCartItem += parseInt(localStorage.getItem(key));
    }
  }
  cartIconField.value = totalCartItem;
};
changeCartIconNum();

// toastify initialization
var notyf = new Notyf({
  duration: 2500,
  dismissible: true,
  position: {
    x: 'right',
    y: 'top'
  },
});


for (let btn of cartBtn) {
  btn.addEventListener("click", (e) => {
    // local storage functionalities
    let itemName = e.target.closest("div.product").children[1].innerText;
    addToLS(itemName);

    // increase cart number
    changeCartIconNum();

    // change cart icon
    e.target.children[0].classList.remove("bi-cart3");
    e.target.children[0].classList.remove("bg-danger");

    e.target.children[0].classList.add("bi-check2-circle");
    e.target.children[0].classList.add("bg-success");

    // show added to cart toast
    notyf.success(`${itemName} was successfully added to cart!`);

    setTimeout(() => {
      e.target.children[0].classList.remove("bi-check2-circle");
      e.target.children[0].classList.remove("bg-success");

      e.target.children[0].classList.add("bi-cart3");
      e.target.children[0].classList.add("bg-danger");

    }, 2500);
  });
}

// adding item to local storage
const addToLS = (item) => {
  // check if the item already exist else update value
  if (!localStorage.getItem(item)) {
    localStorage.setItem(item, "1");
    return;
  } else {
    let preValue = parseInt(localStorage.getItem(item));
    let newValue = preValue + 1 + "";

    localStorage.setItem(item, newValue);
  }
};


// submitting contact form to formspree
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.user_fname.value;
    const lastName = form.user_lname.value;
    const email = form.user_email.value;

    fetch('https://formspree.io/f/xnqykrqq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email })
    })


    form.submit();
  })
})