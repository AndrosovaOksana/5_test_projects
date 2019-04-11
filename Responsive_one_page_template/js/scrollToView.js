const anchors = document.getElementsByClassName('navButtons');

for (const anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        for (const anchor of anchors) {
            anchor.style.background = "#383E4C";
        }

        anchor.style.background = "#49505F";

        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
     
  });  
}
