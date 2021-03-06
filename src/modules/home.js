import pizza from "../images/pizza.jpg"

function home() {
  const pageWrapper = document.querySelector(".page-wrapper");
  const contentWrapper = document.querySelector(".menu-item-content");

  const pizzaImage = document.createElement("img");
  pizzaImage.classList.add("menu-item-image");
  pizzaImage.src = pizza;

  function clear(element) {
    element.innerHTML = "";
  }

  if (contentWrapper.innerText) {
    clear(contentWrapper);
  }
  contentWrapper.style.display = "flex";
  contentWrapper.innerText = "Best pizza in Your countryside!";
  contentWrapper.appendChild(pizzaImage);
}

export default home;
