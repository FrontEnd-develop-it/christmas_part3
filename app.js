const burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('#header');
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');

const body = document.querySelector('body');

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active-burger');
    if (burgerMenu.classList.contains('active-burger')) {
        if (body.classList.contains('light')) {
            burgerMenu.src = './img/burger-close-dark.png';
        } else {
            burgerMenu.src = './img/burger_close.png';
        }
        header.appendChild(mobileMenu);
        mobileMenu.innerHTML = `
            <ul class="mobile-list">
                <li><a href="index.html" class="active_nav">Home</a></li>
                <li><a href="#celebrate">Celebrate</a></li>
                <li><a href="#gifts">Gifts</a></li>
                <li><a href="#new">New</a></li>
                <img src="./img/burger-secoration.png" alt="decor" class="burger-decor">
            </ul>
        `;

        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', function() {
                burgerMenu.classList.remove('active-burger');
                header.removeChild(mobileMenu);
            })
        })
    } else {
        header.removeChild(mobileMenu);
        if (body.classList.contains('light')) {
            burgerMenu.src = './img/burger-dark.png';
        } else {
            burgerMenu.src = './img/burger_open.png';
        }
    }
})

const themeDesc = document.querySelector('#theme-desc');
const themeMob = document.querySelector('#theme-mob');

const switchTheme = document.querySelectorAll('.switch_theme');
switchTheme.forEach((btn) => {
    btn.addEventListener('click', () => {
        body.classList.toggle('light');
        if (body.classList.contains('light')) {
            themeDesc.src = './img/switch_dark.png';
            themeMob.src = './img/switch_dark.png';
            burgerMenu.src = './img/burger-dark.png';
        } else {
            themeDesc.src = './img/switch_theme.png';
            themeMob.src = './img/switch_theme.png';
            burgerMenu.src = './img/burger_open.png';
        }
    })
})
