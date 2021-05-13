import displayHomeElement from "./home";

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
  home.innerText = "Home";

  menuList.appendChild(home);
  home.addEventListener("click", displayHomeElement);

  const about = document.createElement("li");
  about.classList.add("menu-item");
  about.innerText = "About";
  menuList.appendChild(about);

  const contact = document.createElement("li");
  contact.classList.add("menu-item");
  contact.innerText = "Contact";
  menuList.appendChild(contact);

  // const itemSection = document.createElement("section")
  // itemSection.classList.add("menu-item-section")
  // pageBody.appendChild(itemSection)

  menuList.style.listStyleType = "none";
  menuList.style.display = "flex";
  menuList.style.justifyContent = "space-around";
  menuList.style.margin = "auto";
}

export default displayMenu;
