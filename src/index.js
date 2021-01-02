import { mainPage } from './mainPage';
import { menu } from './menu';
import { about } from './about';

export const content = document.getElementById('content');

mainPage();

export const main = document.getElementById('main');

function tagLine(){
    const tagLine = document.createElement('h2');
        tagLine.id = 'tagLine';
        tagLine.textContent = "Gotta munch 'em all!"
        main.appendChild(tagLine);
}
const tabs = document.querySelectorAll('#navBar li');
tabs.forEach(tab => tab.addEventListener('click', e => {
    let target = e.target.id;
    main.innerHTML = '';
    switch (target){
        case 'menu':
            menu();
            break;
        case 'about':
            about();
            break;
        case 'home':
            tagLine();
    }
}))