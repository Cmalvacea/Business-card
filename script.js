function PageSwitcher(arg1, arg2, arg3, arg4) {
    arg1.style.display = "block";
    arg2.style.display = "none";
    arg3.style.display = "none";
    arg4.style.display = "none";

}

let Home_Section = document.getElementById('Home')
let Nav_Home = document.getElementById('NavHome')

let About_Section = document.getElementById('About')
let Nav_About = document.getElementById('NavAbout')

let Skills_Section = document.getElementById('Skills')
let Nav_Skills = document.getElementById('NavSkills')

let Portfolio_Section = document.getElementById('Portfolio')
let Nav_Portfolio = document.getElementById('NavPortfolio')

Nav_Home.addEventListener('click', () => {
    PageSwitcher(Home_Section, About_Section, Skills_Section, Portfolio_Section)
} )

Nav_About.addEventListener('click', () => {
    PageSwitcher(About_Section, Skills_Section, Portfolio_Section, Home_Section)
})

Nav_Skills.addEventListener('click', ()=> {
    PageSwitcher(Skills_Section, Home_Section, About_Section, Portfolio_Section)
})

Nav_Portfolio.addEventListener('click', ()=> {
    PageSwitcher(Portfolio_Section, Home_Section, About_Section, Skills_Section)
})