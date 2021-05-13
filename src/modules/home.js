function home() {
  const pageWrapper = document.querySelector(".page-wrapper");
  const contentWrapper = document.querySelector(".menu-item-content");

  const pizzaImage = document.createElement("img");
  pizzaImage.classList.add("menu-item-image");
  pizzaImage.src = "../../assets/pizza.jpg";

  function clear(element) {
    element.innerHTML = "";
  }

  if (contentWrapper.innerText) {
    clear(contentWrapper);
  }
  contentWrapper.style.visibility = "visible";
  contentWrapper.innerText = "Best pizza in Your countryside!";
  contentWrapper.appendChild(pizzaImage);
}

export default home;
