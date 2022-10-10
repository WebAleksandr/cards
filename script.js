class SimplCard {
    constructor(num, title, descr, parentSelector) {
        this.num = num;
        this.title = title;
        this.descr = descr;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="section-item">
                <span>${this.num}</span>
                <h3>${this.title}</h3>
                <p>${this.descr}</p>
            </div>
        `;
        this.parent.append(element);
    }
}

new SimplCard(
    '04',
    'card heading',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos corrupti cupiditate ex ducimus.Dicta, aperiam! Molestiae, vel nulla.Pariatur soluta impedit optio tempore quibusdam,recusandae dolorum error molestiae fugiat voluptate.',
    '.section-grid'
).render();

new SimplCard(
    'Error',
    'Error',
    'no robux.',
    '.section-grid'
).render();



