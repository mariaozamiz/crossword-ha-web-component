class crosswordHa extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    getTemplate() {
        const html = createTable(parseInt(this.dataset.columns), this.dataset.letters);

        const template = document.createElement('template');
        template.innerHTML = `
        <form class="form" autocomplete="off" method="post" novalidate>
                <div class="timer">
                    <span class="minutes">00</span>:<span class="seconds"
                        >00</span
                    >
                </div>
                <table class="table">
                    ${html}
                </table>
                <div class="clue-box-container wrapper">
                    <p class="clue-box"></p>
                </div>
                <div class="btn-group wrapper">
                    <button class="btn btn-check" type="button">
                        Mostrar errores
                    </button>
                    <button class="btn btn-solve" type="button">
                        Resolver todo
                    </button>
                    <button class="btn btn-clear" type="reset">
                        Borrar todo
                    </button>
                </div>
            </form>
        `;
        return template;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define('crossword-ha', crosswordHa);

function createTable(cols, letters) {
    const html = [];
    const matches = letters.matchAll(/(\.|(\d+)?([A-Z]))/g);
    let index = 1;

    html.push('<tr>');

    for (const match of matches) {
        const [, dot, number, letter] = match;

        if (dot === ".") {
            html.push('<td class="cell cell-black"></td>');
        } else {
            html.push('<td class="cell">');
            if (number) {
                html.push(`<label class="word-number" for="${index}">${number}</label>`)
            }
            html.push(`<input required id="${index}" class="letter" type="text" maxlength="1"pattern="[${letter + letter.toLowerCase()}]" />`)
            html.push('</td>');
        }

        if (!(index % cols)) {
            html.push('</tr>');
            html.push('<tr>');
        }
        ++index;
    }

    html.pop();

    return html.join("\n");
}
