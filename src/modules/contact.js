import chef from "../images/chef.jpg"

function contact() {
  const pageWrapper = document.querySelector(".page-wrapper");
  const contentWrapper = document.querySelector(".menu-item-content");

  const chefImage = document.createElement("img");
  chefImage.classList.add("menu-item-image");
  chefImage.src = chef;

  function clear(element) {
    element.innerHTML = "";
  }

  if (contentWrapper.innerText) {
    clear(contentWrapper);
  }
  contentWrapper.style.display = "flex";
  contentWrapper.innerText = "Just come to visit us!";
  contentWrapper.appendChild(chefImage);
}

export default contact;
