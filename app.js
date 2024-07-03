const toggle = document.querySelector('.nav__wrapper__toggle');
const ul = document.querySelector('.nav__wrapper__ul');

// click event 
toggle.addEventListener('click', () => {
    //alert('cache le!');
    ul.classList.toggle('nav__active');
});

// effet sur le nom
const nameElement = document.querySelector('.header__data__contents__heading');
const nameText= "Fatoumata DIEYE"
let start = 0;
//console.log(nameText.charAt(0));
const typeWrite = () => {
    if (start < nameText.length) {
        nameElement.innerHTML += nameText.charAt(start); // appel le mot un à un  
        start++;
        setTimeout(typeWrite, 300);
    }
}
typeWrite();

// open or close modal
const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__wrapper__close');

// open modal
modalBtn.addEventListener('click', () => {
    modal.style.display = "flex";
})

//close modal
modalClose.addEventListener('click', () => {
    modal.style.display = "none";
})
