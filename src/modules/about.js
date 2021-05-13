function about() {
  const pageWrapper = document.querySelector(".page-wrapper");
  const contentWrapper = document.querySelector(".menu-item-content");

  const pastaImage = document.createElement("img");
  pastaImage.classList.add("menu-item-image");
  pastaImage.src = "../../assets/pasta.jpg";

  function clear(element) {
    element.innerHTML = "";
  }

  if (contentWrapper.innerText) {
    clear(contentWrapper);
  }
  contentWrapper.style.display = "flex";
  contentWrapper.innerText = "We have arguably THE BEST pasta!";
  contentWrapper.appendChild(pastaImage);
}

export default about;
