/*===SHOW NAV MENU===*/
const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)

	if (toggle && nav) {
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show-menu')
		})
	}
}
showMenu('nav-toggle', 'nav-menu')

/*===REMOVE MENU MOBILE===*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===SCROLL SECTIONS ACTIVE LINK===*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive)

/*===CHANGE BACKGROUND HEADER===*/
function scrollHeader(){
	const header = document.getElementById('header')
	if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*===SHOW SCROLL TOP===*/
function scrollTop(){
	const scrollTop = document.getElementById('scroll-top')
	if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop)

/*===MIXITUP KunkaLabs JS Configuration===*/

const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});

/*===LINK ACTIVE portfolio*/

const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
	if(linkPortfolio){
	linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
	this.classList.add('active-portfolio')
	}
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

/*======GSAP TRANSITION ANIMATION=======*/

gsap.from('.home__img', {opacity: 0, duration: 2, delay:.5, x: 60})
gsap.from('.home__data', {opacity: 0, duration: 2, delay:.8, y: 25})
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', {opacity: 0, duration: 2, delay: 1, y: 25, ease:'expo.out', stagger:.2})

/*=======Animation DEGREE 3D CUBE=========*/
let deg = 0;
setInterval(() => {
	deg = deg - 90;
	document.querySelector(".cube__content").style.transform = 'rotateX(' + deg + 'deg)';
}, 2000)


let deg1 = 0;
setInterval(() => {
	deg1 = deg1 - 90;
	document.querySelector(".cube__content1").style.transform = 'rotateX(' + deg1 + 'deg1)';
}, 2000)