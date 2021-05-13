function contact() {
    const pageWrapper = document.querySelector(".page-wrapper");
  
    const contactContent = document.createElement("section");
    contactContent.classList.add("menu-item-content");
    contactContent.innerText = "Just come to visit us!";
    pageWrapper.appendChild(contactContent);
  
    const chefImage = document.createElement("img");
    chefImage.classList.add("menu-item-image")
    chefImage.src = "../../assets/chef.jpg";
    contactContent.appendChild(chefImage);
  }
  
  export default contact;
  