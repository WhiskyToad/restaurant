import { main } from ".";

export function menu(){
    const container = document.createElement('div');
    container.id = 'container';
    main.appendChild(container);

    const title = document.createElement('h2');
    title.id = 'title'
    title.textContent = 'Menu';
    container.appendChild(title);

    const itemOne = document.createElement('h3')
    itemOne.textContent = 'Bulbasaurus veggie feast';
    container.appendChild(itemOne);

    const itemTwo = document.createElement('h3')
    itemTwo.textContent = "Charizard's fiery surprise";
    container.appendChild(itemTwo);

    const itemThree = document.createElement('h3')
    itemThree.textContent = 'I choose you Pikachu!';
    container.appendChild(itemThree);
}