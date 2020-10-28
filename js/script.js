const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event){
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

const buttons = document.querySelectorAll(".art4-cardinf");
const section = document.querySelectorAll(".art4-thumb");
buttons.forEach(item =>{
  item.addEventListener('click', ()=>{
    buttons.forEach(item =>{
      item.className = "art4-cardinf";
    });
    item.className = "art4-cardinf active";
    let values = item.textContent;
    section.forEach(show => {
      show.style.display = "none";
      if(show.getAttribute("data-id") === values || values === "All"){
        show.style.display = "block"
      }
    });
  });
});


const btn = document.querySelector('.burger-btn');
const link = document.querySelectorAll('.burger-link');
const burger = document.querySelector('.burger');
const body = document.body;

link.forEach(item =>{
  item.addEventListener('click', function (e) {
    remc();
  });
});

const remc = () =>{
  burger.classList.remove('burger-active');

  body.classList.remove('disable-scroll');
};

btn.addEventListener('click', function (e) {
  burger.classList.add('burger-active');

  body.classList.add('disable-scroll');
});

burger.addEventListener('click', function(e) {
  if (!e.target.closest('.burger-content')) {
    remc();
  }
});
