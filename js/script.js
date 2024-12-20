// отклик на кнопку для меню бургера
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("brgr-menu").addEventListener("click", function() {
      document.querySelector("header").classList.toggle("open")
  })
})
// скролл 
let scroll = document.querySelector('.container');
let leftButton = document.getElementById('left');
let rightButton = document.getElementById('right');
rightButton.addEventListener('click', ()=> {
  scroll.scrollLeft += 425;
});
leftButton.addEventListener('click', ()=> {
  scroll.scrollLeft -= 425;
});

let scrollM = document.querySelector('.containerM');
let leftButtonM = document.getElementById('leftM');
let rightButtonM = document.getElementById('rightM');

// Добавляем обработчики событий для кнопок
rightButtonM.addEventListener('click', () => {
  // Прокручиваем вправо на ширину одной карточки + небольшой зазор
  scrollM.scrollTo({
    left: scrollM.scrollLeft + 345,
    behavior: 'smooth'
  });
});

leftButtonM.addEventListener('click', () => {
  // Прокручиваем влево на ширину одной карточки + небольшой зазор
  scrollM.scrollTo({
    left: scrollM.scrollLeft - 345,
    behavior: 'smooth'
  });
});