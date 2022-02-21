class MobileNavBar{
    constructor(mobMenu, navList, navLinks){
        this.mobMenu = document.querySelector(mobMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation 
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobMenu){
            this.addClickEvent();
        }
        return this;
    }

}

const mobileNavBar = new MobileNavBar(
    ".menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavBar.init();
