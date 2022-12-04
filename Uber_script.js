
document.addEventListener("DOMContentLoaded",()=>{

// burger
let menuAdder = document.querySelector('.burger');
let menu=document.querySelector('.menu');
let info = document.querySelectorAll('.menu_link');

menuAdder.addEventListener('click',()=>{
    menu.classList.toggle('active');
    setTimeout(()=>{
        menu.classList.remove('active');
    },20000);
    
});

info.forEach((elem)=>{
elem.addEventListener('click',()=>{
    menu.classList.remove('active');
});
});

//modal
let modalTrigger = document.querySelectorAll('.order_call');
let modal = document.querySelector('.modal');
let closeModal = document.querySelectorAll('.modal__close');
let showCities =  document.querySelector('.sities');
let cities = document.querySelector('.cities');



function openModal(){

    modalTrigger.forEach((e)=>{
e.addEventListener('click',()=>{
    modal.style.display ='block';
  });
});
}
openModal();



function removeModal(){
    closeModal.forEach((e)=>{
        e.addEventListener('click',()=>{
            cities.style.display ='none';
            modal.style.display ='none';
        });
    });
}
removeModal();


function showModalByScroll(){
    if(window.pageYOffset + document.documentElement.clientHeight>= document.documentElement.scrollHeight -1){
        modal.style.display ='block';
        window.removeEventListener('scroll',showModalByScroll);
    }
    
    }
    window.addEventListener('scroll',showModalByScroll);


    function citiesShow(){
        showCities.addEventListener('click',()=>{
            cities.style.display ='block';
        });
    }
    citiesShow();



    //timer
    modelTimeID = setTimeout(()=>{
        modal.style.display='block';
    }, 60000);
    




});




