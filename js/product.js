const API__URL = "https://fakestoreapi.com/products/";

const productImage = document.querySelector(".product__img");

async function fetchSingleUser(api) {
  let params = new URLSearchParams(window.location.search);
  let id = params.get("id");

  let data = await fetch(`${api}/${id}`);
  data
    .json()
    .then((res) => singleUser(res))
    .catch((err) => console.log(err));
}

fetchSingleUser(API__URL);

function singleUser({ image }) {
  productImage.src = image;
}
