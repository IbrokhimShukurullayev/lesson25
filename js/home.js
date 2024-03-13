const API__URL = "https://fakestoreapi.com/products/";
const row = document.querySelector(".row");

async function fetchData(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => createCard(res))
    .catch((err) => console.log(err));
}
fetchData(API__URL);

function createCard(data) {
  data.forEach(({ rating, price, description, image, category , id }) => {
    let card = document.createElement("div");
    card.className = "row";
    card.innerHTML = `
    <div class="card">
        <div class="card__img">
        <img class="card__img" src=${image} alt="" />
        </div>
        <p class="card__text">${category}</p>
        <h2 class="card__description">
        ${description}
        </h2>
        <div class="rating">
        <img src="./images/star.png" alt="" />
        <p>(${rating.rate })</p>
        </div>
        <p class="card__list">By <span>NestFood</span></p>
        <div class="card__price">
        <h2>$${price}</h2>
        <p>$32.8</p>
        <button><img src="./images/Icon.png" alt="" />Add</button>
        </div>
    </div>
    `;
    card.addEventListener("click" , ()=> singlePage(id))
    row.appendChild(card);
  });
}

function singlePage(id) {
  window.open(`/pages/product.html?id=${id}` , "_self")
}
