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

// IMAGE SLIDER - RECENT PROJECT SECTION 2
class DragScroll {
    constructor(obj) {
        this.el = document.querySelector(obj.el);
        this.wrap = document.querySelector(obl.wrap);
        this.items = document.querySelector(obj.items);
        this.bar = document.querySelector(obj.bar);
        this.init();
    }

    init() {
        this.progress - 0
    }
}






































const project_content = document.querySelector("projectcontent");

// const dragging = (e) => {
//     project.scrollLeft = e.pageX;
// }

// project.addEventListener("mousemove", dragging);

// let isDragStart = false, prevPageX, prevScrollLeft;

// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX;
//     prevScrollLeft = project.scrollLeft;
// }

let isDragStart = false;

const dragStart = () => {
    isDragStart = true;
}

const dragging = (e) => {
    if(!isDragStart) return;
    project_content.scrollLeft = e.pageX;
    // e.preventDefault();

    // let positionDiff = e.pageX - prevPageX;
    // project.scrollLeft = prevScrollLeft - positionDiff; 
}

// const dragStop = () => {
//     isDragStart = false;
// }

// project.addEventListener("mousemove", !isDragStart);
project_content.addEventListener("mousedown", dragStart);
project_content.addEventListener("mousemove", dragging);
// project.addEventListener("mousemove", dragStop);



// window.addEventListener('DOMContentLoaded', () =>{
//     document.body.style.visibility = 'visible';
//   });


// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }

//     });
// });


// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));



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


