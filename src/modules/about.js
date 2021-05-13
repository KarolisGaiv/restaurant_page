function about() {
    const pageWrapper = document.querySelector(".page-wrapper");
  
    const aboutContent = document.createElement("section");
    aboutContent.classList.add("menu-item-content");
    aboutContent.innerText = "We have arguably THE BEST pasta!";
    pageWrapper.appendChild(aboutContent);
  
    const pastaImage = document.createElement("img");
    pastaImage.classList.add("menu-item-image")
    pastaImage.src = "../../assets/pasta.jpg";
    aboutContent.appendChild(pastaImage);
  }
  
  export default about;
  