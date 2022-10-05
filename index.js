// Load data
async function loadShoes() {
  const res = await fetch('shoes.json');
  const shoes = await res.json();
  return shoes;
}

// State

// User
function setLoginSuccess() {
  sessionStorage.setItem('loginSuccess', JSON.stringify(true));
}
function isLoginSuccess() {
  const loginSuccess = JSON.parse(sessionStorage.getItem('loginSuccess'));
  if (loginSuccess) {
    sessionStorage.removeItem('loginSuccess');
  }
  return loginSuccess;
}
function setUser(username, password) {
  sessionStorage.setItem('user', JSON.stringify({ username, password }));
}
function getUser() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  return user;
}
function logOut() {
  sessionStorage.removeItem('user');
}

// Cart
function getCart() {
  const cart = JSON.parse(sessionStorage.getItem('cart'));
  return cart;
}
function addToCart(id) {
  let cart = getCart();
  if (cart === null) {
    cart = {};
  }
  if (cart[id] == null) {
    cart[id] = 1;
  } else {
    cart[id] = cart[id] + 1;
  }

  sessionStorage.setItem('cart', JSON.stringify(cart));
}
function removeFromCart(id) {
  const cart = getCart();
  if (cart[id] != null) {
    cart[id] = cart[id] - 1;
    if (cart[id] == 0) {
      delete cart[id];
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }
}

// Wishlist
function getWishlist() {
  const wishlist = JSON.parse(sessionStorage.getItem('wishlist'));
  return wishlist;
}
function addToWishlist(id) {
  let wishlist = getWishlist();
  if (wishlist === null) {
    wishlist = {};
  }
  if (wishlist[id] == null) {
    wishlist[id] = true;
  }
  sessionStorage.setItem('wishlist', JSON.stringify(wishlist));
}
function removeFromWishlist(id) {
  const wishlist = getWishlist();
  if (wishlist[id] != null) {
    delete wishlist[id];
    sessionStorage.setItem('wishlist', JSON.stringify(wishlist));
  }
}

// Make nav and check login
document.addEventListener('DOMContentLoaded', function() {
  makeNav();
  loginSuccess();
});

function loginSuccess() {
  if (isLoginSuccess()) {
    alert('Succesfully logged in');
  }
}

function makeNav() {
  const nav = document.getElementById('nav');
  const aboutUs = makeLink('about.html', 'About Us');
  const shoes = makeLink('shoes.html', 'Shoes');
  const contact = makeLink('contact.html', 'Contact');
  const wishlist = makeLink('wishlist.html', 'Wishlist');
  const cart = makeLink('cart.html', 'Cart');
  const centerFiller = document.createElement('div');

  let userAction;
  if (getUser() == null) {
    userAction = makeLink('login.html', 'Login');
  } else {
    userAction = makeLink('index.html', 'Logout');
    userAction.addEventListener('click', function() {
      logOut();
    });
  }

  nav.appendChild(aboutUs);
  nav.appendChild(shoes);
  nav.appendChild(contact);
  nav.appendChild(centerFiller);
  nav.appendChild(userAction);
  nav.appendChild(wishlist);
  nav.appendChild(cart);
}
function makeLink(href, text) {
  const a = document.createElement('a');
  a.href = href;
  a.innerText = text;
  return a;
}
