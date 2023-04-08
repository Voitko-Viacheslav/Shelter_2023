
// console.log('hi Burger');

// // !Start Burger header 
// (function () {
//     const burgerMenu = document.querySelector('.header__burger');
//     const menu = document.querySelector('.header__nav');
//     // const list = document.querySelector('.header__list');
//     const allHideClose = document.querySelector('.burg');


//     burgerMenu.addEventListener('click', () => {
//         console.log(123)
//         // Убираем прокрутку страницы под бургером
//         document.body.classList.toggle('_lock');
//         // background
//         menu.classList.toggle('_active');
//         // Анимация линий
//         burgerMenu.classList.toggle('_active');   
//         allHideClose.classList.toggle('_active');
//       })



//     // Клик вне бургер меню
//     allHideClose.addEventListener('click', () => {
//         menu.classList.remove('_active');
//         burgerMenu.classList.remove('_active');  
//         document.body.classList.remove('_lock');
//         allHideClose.classList.toggle('_active'); 
//     })

    
//     // По меню закрываю бургер
//     const menuPetsLinks = document.querySelectorAll('.header__pets-link');
//     for (let i = 0; i < menuPetsLinks.length; i++) {
//         // По ссылке закрываю бургер и перехожу
//         menuPetsLinks[i].addEventListener('click', () => {  
//             for (let i = 0; i < menuPetsLinks.length; i++) {
//                 menuPetsLinks[i].style.borderBottomWidth = 0 +'px'; 
//                 menuPetsLinks[i].style.color = '#CDCDCD';
//             }
//             menuPetsLinks[i].style.borderBottomWidth = 3 +'px'; 
//             menuPetsLinks[i].style.color = '#FAFAFA';

//             document.body.classList.toggle('_lock')
//             menu.classList.toggle('_active');
//             burgerMenu.classList.toggle('_active');
//             // list.classList.toggle('_active'); 
//         });
//     }
//   }());
// // !End Burger header