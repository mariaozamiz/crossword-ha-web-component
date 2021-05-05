class crosswordHa extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const template = getTemplate(
            parseInt(this.dataset.columns),
            this.dataset.letters
        );
        const [across, down] = getDefinitions(this);
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('crossword-ha', crosswordHa);

function getTemplate(columns, letters) {
    const html = createTable(columns, letters);
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
    
    input,
    table,
    td,
    tbody,
    tr {
        margin: 0;
        padding: 0;
    }
    
    .wrapper {
        margin: 0 1.5rem;
    }
    
    .dialog {
        background-color: #eef5dc;
        border: 1px solid #063477;
        color: #063477;
        display: flex;
        flex-direction: column;
        text-align: center;
        z-index: 2;
        padding: 0 1.5rem 1.5rem;
        width: 45vh;
    }
    
    .dialog > h1 {
        font-size: 1.4rem;
        margin: 3rem auto 1rem;
    }
    
    .dialog > p {
        margin: 0.2rem 0 2rem;
        font-size: 0.9rem;
    }
    
    .dialog > span:not(.score) {
        font-size: 1rem;
        margin: 0 0 1rem;
    }
    
    .score {
        font-weight: 700;
    }
    
    .btn-share {
        text-decoration: none;
        font-size: 0.8rem;
    }
    
    .dialog-close-btn {
        border: none;
        background-color: transparent;
        cursor: pointer;
        outline: none;
    }
    
    .dialog-close-btn > img {
        width: 1.2rem;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1em;
    }
    
    .btn {
        width: auto;
        margin: auto;
    }
    
    .timer {
        font-size: 1.1rem;
        display: block;
        margin: 0 auto;
    }
    
    .form {
        display: flex;
        flex-direction: column;
        align-content: center;
    }
    
    .table {
        border-spacing: 0;
        border-collapse: collapse;
        margin: 0.5rem auto 0;
    }
    
    .cell {
        border: 1px solid #6580aa;
        background-color: #ffffff;
    }
    
    .cell-black {
        background-color: #6580aa;
    }
    
    .word-number {
        text-align: right;
        font-size: 0.4rem;
        vertical-align: top;
        color: #6580aa;
        position: absolute;
        padding: 0.1rem 0 0 0.1rem;
    }
    
    .letter {
        background: none;
        height: 1.8rem;
        width: 1.8rem;
        border: none;
        box-shadow: none;
        text-align: center;
        text-transform: uppercase;
        font-size: 1.4rem;
        color: #063477;
        outline: none;
    }
    
    .highlight {
        background-color: #c3effc;
    }
    
    .clue-box {
        margin: 1.2rem auto 2rem;
        font-size: 1rem;
        height: 1.5rem;
        line-height: 1.2rem;
        padding: 0 1rem;
        text-align: center;
    }
    
    .btn-group {
        margin-top: 2.2rem;
        margin-bottom: 0.5rem;
        font-size: 0.5rem;
        display: flex;
        justify-content: space-evenly;
    }
    
    .btn {
        background-color: #ffffff;
        color: #063477;
        border: none;
        border-radius: 0.3rem;
        box-shadow: 0.3rem 0.3rem 0 #063477;
        padding: 8px;
        cursor: pointer;
    }
    
    .btn:focus {
        outline: 0;
    }
    
    .btn:active {
        transform: translate(2px, 2px);
    }
    
    .letter:invalid {
        /*By default, --colorerror is blue. Changes to red when "show errors" button is pressed */
        color: #063477;
    }
    
    .clue {
        font-family: Solitas, Cambria, Georgia, serif;
    }
    
    @media all and (min-width: 768px) {
        html {
            font-size: 18px;
        }
    
        .letter {
            height: 2rem;
            width: 2rem;
        }
    
        .wrapper {
            margin: 0 5rem;
        }
    }
    @media all and (min-width: 1200px) {
        html {
            font-size: 16px;
        }
    
        .header,
        .form {
            margin-left: 40%;
        }
    
        .hero {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            margin: 0;
            width: 35%;
            height: 100vh;
        }
    }
    
    </style>
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

function getDefinitions(element) {
    const allClues = [];

    element.querySelectorAll('dl').forEach((dl) => {
        const clues = {};
        let item = dl.firstElementChild;
        while (item) {
            const title = item.textContent;
            item = item.nextElementSibling;
            const description = item.innerHTML;
            clues[title] = description;
            item = item.nextElementSibling;
        }
        allClues.push(clues);
    });

    return allClues;
}

function createTable(cols, letters) {
    const html = [];
    const matches = letters.matchAll(/(\.|(\d+)?([A-Z]))/g);
    let index = 1;

    html.push('<tr>');

    for (const match of matches) {
        const [, dot, number, letter] = match;

        if (dot === '.') {
            html.push('<td class="cell cell-black"></td>');
        } else {
            html.push('<td class="cell">');
            if (number) {
                html.push(
                    `<label class="word-number" for="${index}">${number}</label>`
                );
            }
            html.push(
                `<input required id="${index}" class="letter" type="text" maxlength="1"pattern="[${
                    letter + letter.toLowerCase()
                }]" />`
            );
            html.push('</td>');
        }

        if (!(index % cols)) {
            html.push('</tr>');
            html.push('<tr>');
        }
        ++index;
    }

    html.pop();

    return html.join('\n');
}
