console.log('hi Burger');

// !Start Burger header 
(function () {
    // Открываю бургер
    const burgerMenu = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__nav');
    const allHideClose = document.querySelector('.burg');
    
    
    burgerMenu.addEventListener('click', () => {
      // Убираем прокрутку страницы под бургером
      document.body.classList.toggle('_lock');
      // background
      menu.classList.toggle('_active');
      // Анимация линий
      burgerMenu.classList.toggle('_active');  
      allHideClose.classList.toggle('_active');  
    })

    // Клик вне бургер меню
    allHideClose.addEventListener('click', () => {
      menu.classList.remove('_active');
      burgerMenu.classList.remove('_active');  
      document.body.classList.remove('_lock');
      allHideClose.classList.toggle('_active'); 
    })

    // По меню закрываю бургер
    const menuLinks = document.querySelectorAll('.header__link');
    for (let i = 0; i < menuLinks.length; i++) {
        // По ссылке закрываю бургер и перехожу
        menuLinks[i].addEventListener('click', () => {  
            for (let i = 0; i < menuLinks.length; i++) {
                menuLinks[i].style.borderBottomWidth = 0 +'px'; 
                menuLinks[i].style.color = '#CDCDCD';
            }
            menuLinks[i].style.borderBottomWidth = 3 +'px'; 
            menuLinks[i].style.color = '#FAFAFA';

            document.body.classList.toggle('_lock')
            menu.classList.toggle('_active');
            burgerMenu.classList.toggle('_active');
            allHideClose.classList.toggle('_active'); 
        });
    }
  }());
// !End Burger header