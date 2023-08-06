const navbar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const activePage = window.location.pathname;

console.log(activePage);

const navLinks = document.querySelectorAll('#navbar a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        console.log(link.href)
        link.classList.add('active');
    }

})

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

