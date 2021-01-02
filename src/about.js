export function about(){
    const container = document.createElement('div');
    container.id = 'container';
    main.appendChild(container);

    const about= document.createElement('h2');
    about.id = 'about'
    about.textContent = "It all started as a dream during the coronavirus crisis of '20. A sourdough starter was born that we only know as the 'Doughkemon'. This starter then bred an entire sub species of delicious pizza.";
    container.appendChild(about);

}