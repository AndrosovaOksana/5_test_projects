const toTopBtn = document.getElementById("toTopBtn");
const body = document.getElementsByTagName("body");

window.onscroll = function() {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled === 400 || scrolled > 400) {
    toTopBtn.style.opacity = '1';
    toTopBtn.removeAttribute('disabled');
  } else {
    toTopBtn.style.opacity = '0';
    toTopBtn.setAttribute('disabled', 'disabled');
  }
}

toTopBtn.onclick = function() {
  body[0].scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
