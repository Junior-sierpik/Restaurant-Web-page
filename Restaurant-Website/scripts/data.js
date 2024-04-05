let popularProductsHTML = '';

popularProducts.forEach((popularProduct) => {
  popularProductsHTML += `
  <div class="food-box">
  <div class="image-container">
    <img class="food-image" src="${popularProduct.image}">
  </div>
  <div class="food-info">
    <p class="food-name">${popularProduct.name}</p>
    <p class="food-cost">${(popularProduct.priceCents / 100).toFixed(2)}$</p>
  </div>
  <div class="button-container">
    <button onclick="ani()" id="js-order-now-button" class="order-now-button">Order Now</button>
  </div>
</div>`;
});

document.querySelector('.js-foods-container').innerHTML = popularProductsHTML;

let pizzaProductsHTML = '';

pizzaProducts.forEach((pizzaProduct) => {
  pizzaProductsHTML +=`
  <div class="food-box">
  <div class="image-container">
    <img class="food-image" src="${pizzaProduct.image}">
  </div>
  <div class="food-info">
    <p class="food-name">${pizzaProduct.name}</p>
    <p class="food-cost">${(pizzaProduct.priceCents / 100).toFixed(2)}$</p>
  </div>
  <div class="button-container">
    <button onclick="ani()" id="js-order-now-button" class="order-now-button">Order Now</button>
  </div>
</div>`
})

document.querySelector('.js-pizza-container').innerHTML = pizzaProductsHTML;

let regularFoodsHTML = '';

regularFoods.forEach((regularFood) => {
  regularFoodsHTML +=`
  <div class="food-box">
  <div class="image-container">
    <img class="food-image" src="${regularFood.image}">
  </div>
  <div class="food-info">
    <p class="food-name">${regularFood.name}</p>
    <p class="food-cost">${(regularFood.priceCents / 100).toFixed(2)}$</p>
  </div>
  <div class="button-container">
    <button onclick="ani()" id="js-order-now-button" class="order-now-button">Order Now</button>
  </div>
</div>`
});

document.querySelector('.js-another-food-container').innerHTML = regularFoodsHTML;

let drinksHTML = '';

drinks.forEach((drink) => {
  drinksHTML +=`
  <div class="food-box">
  <div class="image-container">
    <img class="food-image" src="${drink.image}">
  </div>
  <div class="food-info">
    <p class="food-name">${drink.name}</p>
    <p class="food-cost">${(drink.priceCents / 100).toFixed(2)}$</p>
  </div>
  <div class="button-container">
    <button onclick="ani()" id="js-order-now-button" class="order-now-button">Order Now</button>
  </div>
</div>`
});

document.querySelector('.js-drinks-container').innerHTML = drinksHTML;


















function ani() {

  const element = document.getElementById("js-order-now-button");

  element.addEventListener("click", function(e) {
    e.preventDefault;
      element.classList.remove("animation");

      void element.offsetWidth;

      element.classList.add("animation");
  }, false);
}

