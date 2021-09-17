'use strict';

let preloader = document.getElementById("preloader_preload");
function fadeOutnojquery(el) {
    el.style.opacity = 1;
    let interpreloader = setInterval(function () {
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <= 0.05) {
            clearInterval(interpreloader);
            preloader.style.display = "none";
        }
    }, 16);
}
window.onload = function () {
    setTimeout(function () {
        fadeOutnojquery(preloader);
    }, 1000);
};
let eventHandlersMethods = {
    hamburgerClick: () => {
        let hamburger = document.querySelector('.hamburger'),
            menu = document.querySelector('.menu');

        if(hamburger.classList.contains('hamburger_active')){
            menu.style.right = '-120%';
            hamburger.classList.toggle('hamburger_active');
        } else {
            menu.style.right = '0%';
            hamburger.classList.toggle('hamburger_active');
        }
    },
};
    
document.addEventListener('DOMContentLoaded', function () {

let modal = document.querySelector('.modal-window'),
    modalBtn = document.querySelector('.footer__button'),
    modalClose = document.querySelector('.close'),
    modalBg = document.querySelector('.modal-background_black'),
    hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', eventHandlersMethods.hamburgerClick);

function modalAnim(){
    setTimeout(()=>{
        modal.classList.toggle("modal-window_anim");
    }, 1);
}
modalBtn.addEventListener('click',() => {
    modalAnim();
    modal.classList.toggle("modal-window_active");
    document.body.style.overflow = "hidden";
    modalBg.style.display='block';
    modalErr.style.display = 'none';
    form.style.display = 'block';
    modalTitle.style.display = 'block';
    modalSuccess.style.display = "none";
});
modalClose.addEventListener('click',() => {
    modalAnim();
    setTimeout(()=>{
        modal.classList.toggle("modal-window_active");
    }, 1000);
    document.body.style.overflow = "auto";
    modalBg.style.display='none';
});
modalBg.addEventListener('click',()=>{
    modalAnim();
    setTimeout(()=>{
        modal.classList.toggle("modal-window_active");
    }, 1000);
    document.body.style.overflow = "auto";
    modalBg.style.display='none';
});
validate();
//modal validate
function validate() {
    let error = 0;
    let a = document.forms.myForm.fullName.value;
  if (a == "") {
    error = 1;
  }
  let b = document.forms.myForm.email.value;
  if (b == "") {
    error = 1;
  }
  let с = document.forms.myForm.message.value;
  if (с == "") {
    error = 1;
  }
  return error;
}

    let form = document.querySelector('.inputs'),
        modalSuccess = document.querySelector('.modal-window_success'),
        modalErr = document.querySelector('.modal-window_error'),
        modalTitle = document.querySelector('.modal-window__h4');

    form.addEventListener('submit', ev => {
        ev.preventDefault();
        let error = validate();
        if (error)  {
            modalErr.style.display = 'block';
        } else {
            fetch('server.php',
            {
                method: "POST",
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                body: `name=${document.forms.myForm.fullName.value}&mail=${document.forms.myForm.email.value}&message=${document.forms.myForm.message.value}`
            }
            )
            .then(response => {
                return response.text();
            })
            .then(res => {
                //Если всё окей (на гитхабе пост запросы не поддерживаются, не смог норм сделать)
            })
            .catch(res => {
                //если ошибка, можно валидацию на бэке прикрутить
            });
            modalErr.style.display = 'none';
            form.style.display = 'none';
            modalTitle.style.display = 'none';
            modalSuccess.style.display = "block";
        }
    });

});
