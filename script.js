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

//////////////// ACTIVE CLASS 
let homeHeader = document.querySelector('header');

window.addEventListener('scroll', () => {
    homeHeader.classList.toggle('shadow', window.scrollY > 0);
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .nav-list ul a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .nav-list ul a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};



// IMAGE SLIDER - RECENT PROJECT SECTION 2
let sidebar = document.getElementsByClassName("sidebar")[0];
let sidebar_content = document.getElementsByClassName("content_wrapper")[0];

window.onscroll = () => {
    let scrollTop = window.scrollY; // current scroll position
    let viewportHeight = window.innerHeight; //viewport height
    let contentHeight = sidebar_content.getBoundingClientRect().height; // current content height
    let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset; //distance from top to sidebar

}
if(scrollTop >= contentHeight - viewportHeight + sidebarTop)
if(scrollTop >= contentHeight - viewportHeight + sidebarTop) {
    sidebar_content.style.transform = `translateY(-${contentHeight - viewportHeight + sidebarTop}px)`;
    sidebar_content.style.position = "fixed";
  }
  else {
    sidebar_content.style.transform = "";
    sidebar_content.style.position = "";
  }











class DragScroll {
    constructor(obj) {
        this.el = document.querySelector(obj.el);
        this.wrap = document.querySelector(obl.wrap);
        this.items = document.querySelector(obj.items);
        this.bar = document.querySelector(obj.bar);
        this.init();
    }

    init() {
        this.progress = 0;
        this.speed = 0;
        this.oldX = 0;
        this.x = 0;
        this.playrate = 0;

        this.binding();
        this.events();
        this.calculate();
        this.raf();
    }

    bindings() {
        [
            "events",
            "calculate",
            "raf",
            "handleWheel",
            "move",
            "handleTouchStart",
            "handleTouchMove",
            "handleTouchEnd",
        ].forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }

    calculate() {
        this.progress = 0;
        this.wrapWidth = this.items[0].clientWidth * this,
        items.length;
        this.wrap.style.width = '${this.wrapWidth}px';
        this.maxScroll = this.wrapWidth - this.el.clientWidth;
    }


    handleWheel(e) {
        this.progress += e.deltaY;
        this.move();
    }

    handleTouchStart(e) {
        e.preventDefault();
        this.dragging = true;
        this.startX = e.clientX || e.touches[0].clientX;
    }

    handleTOuchMove(e) {
        if(!this.dragging) return false;
        const x = e.clientX || .touches[0].clientX;
        this.progress += (this.startX - x) * 2.5;
        this.startX = x;
        this.move();
    }

    handleTOuchEnd() {
        this.dragging = false;
    }

    move() {
        this.progress = clamp(this.progress, 0, this.maxScroll);
    }

    events() {
        window.addEventListener("reset", this.calculate);
        window.addEventListener("wheel",this.handelWheel);

        this.el.addEventListener("touchstart", this.handleTouchStart);
        window.addEventListener("touchmove", this.handleTouchMove);
        window.addEventListener("touchend", this.handleTouchEnd);

        window.addEventListener("mousedown", this.handleTouchStart);
        window.addEventListener("mousemove", this.handleMove);
        window.addEventListener("mouseup", this.handleTouchEnd);
        document.body.addEventListener("mouseleave", this.handleTouchEnd);
    }


    raf() {
        this.x = lerp(this.x, this.progress, 0.1);
        this.playrate = this.x / this.maxScroll;

        this.wrap.style.transform = 'translateX(${-this.x}px)';
        this.bar.style.transform = 'scaleX(${0.18 + this.playrate * 0.82})';
        this.speed = Math.min(100, this.oldX - this.x);
        this.oldX = this.x;

        this.scale = lerp(this.scale, this.speed, 0.1);
        this.items.forEach((item) => {
            item.style.transform = 'scale(${1 - Math.abs(this.speed) * 0.005})';
            item.querySelector("img").style.transform = 'scaleX(${1 + Math.abs(this.speed) * 0.004})';
        });
    }
}

const scroll = new DragScroll({
    el: ".slider",
    wrap: ".slider_wrapper",
    item: ".slider-item",
    bar: ".slider-progress-bar",
});


const animateScroll = () => {
    requestAnimationFrame(animateScroll);
    scroll.raf();
};

animateScroll();







































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


