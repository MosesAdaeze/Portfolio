const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header .container'); 

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_item.forEach(item=>{
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
// Nav bar menu .

// IMAGE SLIDER - RECENT PROJECT SECTION 
const project = document.querySelector(".project_content");

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = project.scrollLeft;
}

// let isDragStart = false;

// const dragStart = () => {
//     isDragStart = true;
// }

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    // project.scrollLeft = e.pageX;
    let positionDiff = e.pageX - prevPageX;
    project.scrollLeft = prevScrollLeft - positionDiff; 
}

const dragStop = () => {
    isDragStart = false;
}

// project.addEventListener("mousemove", isDragStart);
project.addEventListener("mousemove", dragStart);
project.addEventListener("mousemove", dragging);
project.addEventListener("mousemove", dragStop);





/// toggle Light mode and dark mode.

const toggle = document.getElementById('toggle-dark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-moon-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = '#061422';
        body.style.color = '#DDE6ED';
        body.style.transition = '2s';
    }
})


