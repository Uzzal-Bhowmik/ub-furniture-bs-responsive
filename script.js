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
let navItem = document.getElementsByClassName("nav-item");

for (let item of navItem) {
  item.addEventListener("click", () => {
    for (let singleItem of navItem) {
      if (singleItem.classList.contains("active")) {
        singleItem.classList.remove("active");
      }
    }
    item.classList.add("active");
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
    totalCartItem += parseInt(localStorage.getItem(key));
  }
  console.log(totalCartItem);
  cartIconField.value = totalCartItem;
};
changeCartIconNum();

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

    // added to cart popup
    let cartMsgCon = document.getElementById("cart-msg-container");
    cartMsgCon.innerHTML += `<div class="cart-msg py-2 mt-2 " id="cart-msg">
                <div><i class="text-success">Successfully Added To Cart!</i></div>
                <div class="row w-100 pt-3 fs-4 mx-auto text-dark">
                    <div class="col-md-8">${
                      e.target.closest("div.product").children[1].innerText
                    }</div>
            <div class="col-md-4">$ <span>${e.target
              .closest("div.product")
              .children[2].innerText.slice(1, 6)}</span></div>
          </div>
        </div>`;

    setTimeout(() => {
      e.target.children[0].classList.remove("bi-check2-circle");
      e.target.children[0].classList.remove("bg-success");

      e.target.children[0].classList.add("bi-cart3");
      e.target.children[0].classList.add("bg-danger");

      if (document.querySelector(".cart-msg")) {
        document.querySelector(".cart-msg").remove();
      }
    }, 4000);
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
