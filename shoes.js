document.addEventListener('DOMContentLoaded', async function() {
  const shoes = await loadShoes();
  makeShoes(shoes);
});

function makeShoes(shoes) {
  const shoesContainer = document.getElementById('shoes-container');
  for (let i = 0; i < shoes.length; i++) {
    const shoe = shoes[i];

    const shoeContainer = document.createElement('div');
    shoeContainer.className = 'shoe-container';
    shoesContainer.appendChild(shoeContainer);

    const shoeImage = document.createElement('img');
    shoeImage.className = 'shoe-image';
    shoeImage.src = shoe.imageUrl;
    shoeContainer.appendChild(shoeImage);

    const shoeName = document.createElement('div');
    shoeName.className = 'shoe-name';
    shoeName.innerText = shoe.name;
    shoeContainer.appendChild(shoeName);

    const shoePrice = document.createElement('div');
    shoePrice.className = 'shoe-price';
    shoePrice.innerText = shoe.price + '$';
    shoeContainer.appendChild(shoePrice);

    const shoeCart = document.createElement('button');
    shoeCart.className = 'shoe-cart';
    shoeCart.innerText = 'Add to Cart';
    shoeContainer.appendChild(shoeCart);
    shoeCart.addEventListener('click', function() {
      addToCart(shoe.id);
      alert('Succesfully added to cart');
    });

    const shoeWishlist = document.createElement('button');
    shoeWishlist.className = 'wishlist';
    shoeWishlist.innerText = 'Wishlist';
    shoeContainer.appendChild(shoeWishlist);
    shoeWishlist.addEventListener('click', function() {
      addToWishlist(shoe.id);
      alert('Succesfully added to wishlist');
    });
  }
}
