import { content } from './index';

export function mainPage(){

    const logo = document.createElement('img');
    logo.id = 'logo';
    logo.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJXgxhRno2pt0Bh7N7pmLQXGyzU7abQaja-8b-W_yk-Lx2rn0W&usqp=CAU';
    content.appendChild(logo);

    const logoName = document.createElement('h1')
    logoName.id = 'logoName'
    logoName.textContent = 'Doughkemon';
    content.appendChild(logoName);

    const main = document.createElement('div');
    main.id = 'main';
    content.appendChild(main);

    const tagLine = document.createElement('h2');
    tagLine.id = 'tagLine';
    tagLine.textContent = "Gotta munch 'em all!"
    main.appendChild(tagLine);

    const navBar = document.createElement('ul');
    navBar.id = 'navBar';

    const home = document.createElement('li');
    home.id = 'home';
    home.textContent = 'Home';

    const menu = document.createElement('li');
    menu.id = 'menu';
    menu.textContent = 'Menu';

    const about = document.createElement('li');
    about.id = 'about';
    about.textContent = 'About';

    navBar.appendChild(home);
    navBar.appendChild(menu);
    navBar.appendChild(about);

    content.appendChild(navBar)
}