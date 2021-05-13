import displayHomeElement from "./home";
import displayAboutElement from "./about";
import displayContactElement from "./contact";

function displayMenu() {
  const pageBody = document.querySelector(".page-wrapper");

  const menuWrapper = document.createElement("nav");
  menuWrapper.classList.add("menu-wrapper");
  pageBody.appendChild(menuWrapper);

  const menuList = document.createElement("ul");
  menuList.classList.add("menu-list");
  menuWrapper.appendChild(menuList);

  const home = document.createElement("a");
  home.classList.add("menu-item");
  home.innerText = "Home";
  menuList.appendChild(home);
  home.addEventListener("click", displayHomeElement);

  const about = document.createElement("a");
  about.classList.add("menu-item");
  about.innerText = "About";
  menuList.appendChild(about);
  about.addEventListener("click", displayAboutElement);

  const contact = document.createElement("a");
  contact.classList.add("menu-item");
  contact.innerText = "Contact";
  menuList.appendChild(contact);
  contact.addEventListener("click", displayContactElement);

  const contentWrapper = document.createElement("section")
  contentWrapper.classList.add("menu-item-content")
  pageBody.appendChild(contentWrapper)

  menuList.style.listStyleType = "none";
  menuList.style.display = "flex";
  menuList.style.margin = "auto";
  menuList.style.padding = 0;
  contentWrapper.style.display = "none" 
}

export default displayMenu;
