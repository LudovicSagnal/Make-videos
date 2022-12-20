navLink = document.getElementById('navlink')
quill = document.getElementById('quill')

if (window.matchMedia("(max-width: 1000px)").matches) {
    navLink.classList.add('d-none');
    quill.classList.add('d-show')
  } else {
    
  }