let logoSelectorNav = document.querySelector("#logo")
let logoSelectorFoot = document.querySelector(".foot")

logoSelectorNav.addEventListener("mouseover", function () {
  logoSelectorNav.setAttribute("style", `cursor: pointer;`)
})
logoSelectorFoot.addEventListener("mouseover", function () {
  logoSelectorFoot.setAttribute("style", `cursor: pointer;`)
})

logoSelectorNav.addEventListener("click", function () {
  document.location.href = "index.html"
})

logoSelectorFoot.addEventListener("click", function () {
  document.location.href = "index.html"
})