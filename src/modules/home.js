function home() {
  const pageWrapper = document.querySelector(".page-wrapper");

  const homeContent = document.createElement("section");
  homeContent.classList.add("menu-item-content");
  homeContent.innerText = "Best pizza in Your countryside!";
  pageWrapper.appendChild(homeContent);

  const pizzaImage = document.createElement("img");
  pizzaImage.classList.add("menu-item-image")
  pizzaImage.src = "../../assets/pizza.jpg";
  homeContent.appendChild(pizzaImage);
}

export default home;
