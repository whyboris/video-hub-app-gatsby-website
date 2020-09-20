const { mobilecheck } = require("./mobilecheck")

function weareready() {

  const docElem = window.document.documentElement
  let docscroll = 0

  const clickevent = mobilecheck() ? "touchstart" : "click"

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop
  }

  const showMenu = document.getElementById("showMenu")
  const perspectiveWrapper = document.getElementById("perspective")
  const container = perspectiveWrapper.querySelector(".containerNAV")
  const contentWrapper = container.querySelector(".wrapper")

  showMenu.addEventListener(clickevent, function (ev) {
    ev.stopPropagation()
    ev.preventDefault()
    docscroll = scrollY()

    contentWrapper.style.top = docscroll * -1 + "px"

    perspectiveWrapper.classList.add('modalview')

    setTimeout(function () {
      perspectiveWrapper.classList.add('animate')
    }, 25)

    showMenu.classList.add("menu-hidden")
  })

  container.addEventListener(clickevent, function (ev) {

    if (perspectiveWrapper.classList.contains("animate")) {

      if (ev.target.className === "containerNAV" ) {
        setTimeout(() => {
          perspectiveWrapper.classList.remove("modalview")
          contentWrapper.style.top = "0px"
          window.scrollTo(0, docscroll)
        }, 370)
      }

      perspectiveWrapper.classList.remove("animate")

      setTimeout(() => {
        showMenu.classList.remove("menu-hidden")
      }, 450)
    }

  })

}

module.exports = { weareready }
