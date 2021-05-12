function home() {
  const pageWrapper = document.querySelector(".page-wrapper");

  const homeContent = document.createElement("section")
  homeContent.innerText = "Best pizza in Your countryside!"
  pageWrapper.appendChild(homeContent)
}

export default home;
