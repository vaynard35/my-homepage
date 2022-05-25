class NavComponent{

    constructor(selector){
        this.selector = selector
        this.nav = document.querySelector(selector)
        this.linksList = this.nav.querySelector('ul')
        this.trigger = this.nav.querySelector('.hamburger')
    }

    init(){
        this.nav.classList.add('nav-component')
        if(window.innerWidth<=768) this.linksList.classList.add('hide')

        this.trigger.addEventListener('click', e => {
            this.linksList.classList.toggle('hide')
        });

    }

}