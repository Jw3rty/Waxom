let position = 0;
const  btnPrev = document.querySelector('.btnprev');
const btnNext = document.querySelector('.btnnext');
const track = document.querySelector('.slider-track');
const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
const dot3 = document.querySelector('.dot3');
const dot4 = document.querySelector('.dot4');
const dot5 = document.querySelector('.dot5');

const changePosition = () =>{
  track.style.transform = `translateX(${position}%)`;
};

btnPrev.addEventListener('click', function () {
  position += 100;
  changePosition();
  if (position > 0) {
    track.style.transform = `translateX(-400%)`;
    if (position = -400) {
      changePosition();
    };
  };

  if (position == -400) {
    dot1.classList.remove('active')
    dot5.classList.add('active')
  }
  if (position == -300) {
    dot5.classList.remove('active')
    dot4.classList.add('active')
  }
  if (position == -200) {
    dot4.classList.remove('active')
    dot3.classList.add('active')
  }
  if (position == -100) {
    dot3.classList.remove('active')
    dot2.classList.add('active')
  }
  if (position == 0) {
    dot2.classList.remove('active')
    dot1.classList.add('active')
  }
});

btnNext.addEventListener('click', function () {
  position -= 100;
  changePosition();
  if (position < -400) {
    track.style.transform = `translateX(0%)`;
    if (position = 0) {
      changePosition();
    };
  };

  if (position == -100) {
    dot1.classList.remove('active')
    dot2.classList.add('active')
  }
  if (position == -200) {
    dot2.classList.remove('active')
    dot3.classList.add('active')
  }
  if (position == -300) {
    dot3.classList.remove('active')
    dot4.classList.add('active')
  }
  if (position == -400) {
    dot4.classList.remove('active')
    dot5.classList.add('active')
  }
  if (position == 0) {
    dot5.classList.remove('active')
    dot1.classList.add('active')
  }
});
