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

  const home = document.createElement("li");
  home.classList.add("menu-item");
  home.id = "home";
  home.innerText = "Home";
  menuList.appendChild(home);
  home.addEventListener("click", displayHomeElement);

  const about = document.createElement("li");
  about.classList.add("menu-item");
  about.id = "about";
  about.innerText = "About";
  menuList.appendChild(about);
  about.addEventListener("click", displayAboutElement);

  const contact = document.createElement("li");
  contact.classList.add("menu-item");
  contact.id = "contact";
  contact.innerText = "Contact";
  menuList.appendChild(contact);
  contact.addEventListener("click", displayContactElement);

  const contentWrapper = document.createElement("section")
  contentWrapper.classList.add("menu-item-content")
  pageBody.appendChild(contentWrapper)

  menuList.style.listStyleType = "none";
  menuList.style.display = "flex";
  menuList.style.justifyContent = "space-around";
  menuList.style.margin = "auto";
  contentWrapper.style.visibility = "hidden" 
}

export default displayMenu;
