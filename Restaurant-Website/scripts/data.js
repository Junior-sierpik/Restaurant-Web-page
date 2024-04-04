let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
  <div class="food-box">
  <div class="image-container">
    <img class="food-image" src="${product.image}">
  </div>
  <div class="food-info">
    <p class="food-name">${product.name}</p>
    <p class="food-cost">${(product.priceCents / 100).toFixed(2)}$</p>
  </div>
  <div class="button-container">
    <button onclick="ani()" id="js-order-now-button" class="order-now-button">Order Now</button>
  </div>
</div>`;
});

document.querySelector('.js-foods-container').
  innerHTML = productsHTML;

function ani() {

  const element = document.getElementById("js-order-now-button");

  element.addEventListener("click", function(e) {
    e.preventDefault;
      element.classList.remove("animation");

      void element.offsetWidth;

      element.classList.add("animation");
  }, false);
}