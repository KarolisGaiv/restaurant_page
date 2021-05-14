import restaurantBanner from "../images/restaurantBanner.jpg"

function loadPage() {
  const pageHeader = document.createElement("header");
  pageHeader.classList.add("page-header")

  document.body.appendChild(pageHeader);

  const banner = document.createElement("img");
  banner.src = restaurantBanner;
  banner.classList.add("page-header-banner")
  pageHeader.appendChild(banner);

  const header = document.createElement("h1");
  header.classList.add("restaurant-header");
  header.innerHTML = "THE BEST Restaurant in Countryside!";
  pageHeader.appendChild(header);

  const pageWrapper = document.createElement("main");
  pageWrapper.classList.add("page-wrapper");
  document.body.appendChild(pageWrapper);

  const introWrapper = document.createElement("article");
  pageWrapper.appendChild(introWrapper);

  const about = document.createElement("p");
  let aboutText = document.createTextNode(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam culpa vel autem deserunt rem nesciunt, laudantium voluptatum labore possimus placeat enim dicta accusamus recusandae veritatis molestiae eum similique explicabo tempora?"
  );
  about.appendChild(aboutText);
  introWrapper.appendChild(about);
}

export default loadPage;
