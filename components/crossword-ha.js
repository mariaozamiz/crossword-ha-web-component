class crosswordHa extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
        <header class="header wrapper">
            <h1 class="title">Crucigrama</h1>
            <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                debitis mollitia eos in et quasi esse, aspernatur nam, sunt
                laborum beatae quo. Iste maxime non adipisci facere omnis
                possimus odio.
            </p>
        </header>
        <main class="main">
            <dialog class="dialog">
                <button class="dialog-close-btn">
                    <img
                        src="./assets/img/close.svg"
                        class="close-img"
                        alt="cerrar ventana"
                    />
                </button>
                <h1 class="dialog-title">¡Enhorabuena! <br /></h1>
                <p class="dialog-text">
                    <strong>
                        Has completado el crucigrama con nivel
                        <br />
                        <span class="score"
                            >🔑 llavero de la tienda de regalos</span
                        >
                        <br />
                        ¡Comparte tu resultado en Twitter!:</strong
                    >
                </p>
                <button class="btn btn-share" type="button">Comparte</button>
            </dialog>
            <div class="form-panel">
                <div class="timer">
                    <span class="minutes">00</span>:<span class="seconds"
                        >00</span
                    >
                </div>
                <form class="form wrapper" autocomplete="off" method="post">
                    <table class="table">
                        <tr class="row row-1">
                            <td class="cell cell-black" id="1"></td>
                            <td class="cell">
                                <label class="word-number" for="2">1</label>
                                <input
                                    required
                                    id="2"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Mm]"
                                    data-across="1"
                                    data-down="1"
                                />
                            </td>
                            <td class="cell">
                                <label class="word-number" for="3">2</label>
                                <input
                                    required
                                    id="3"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ee]"
                                    data-across="1"
                                    data-down="2"
                                />
                            </td>
                            <td class="cell">
                                <label class="word-number" for="4">3</label>
                                <input
                                    required
                                    id="4"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ss]"
                                    data-across="1"
                                    data-down="3"
                                />
                            </td>
                            <td class="cell cell-black" id="5"></td>
                            <td class="cell">
                                <label class="word-number" for="6">4</label>
                                <input
                                    required
                                    id="6"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ss]"
                                    data-across="4"
                                    data-down="4"
                                />
                            </td>
                            <td class="cell">
                                <label class="word-number" for="7">5</label>
                                <input
                                    required
                                    id="7"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ee]"
                                    data-across="4"
                                    data-down="5"
                                />
                            </td>
                            <td class="cell">
                                <label class="word-number" for="8">6</label>
                                <input
                                    required
                                    id="8"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Vv]"
                                    data-across="4"
                                    data-down="6"
                                />
                            </td>
                            <td class="cell">
                                <label class="word-number" for="9">7</label>
                                <input
                                    required
                                    id="9"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ii]"
                                    data-across="4"
                                    data-down="7"
                                />
                            </td>
                            <td class="cell">
                                <label class="word-number" for="10">8</label>
                                <input
                                    required
                                    id="10"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ll]"
                                    data-across="4"
                                    data-down="8"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="11"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ll]"
                                    data-across="4"
                                />
                            </td>
                            <td class="cell">
                                <label class="word-number" for="12">9</label>
                                <input
                                    required
                                    id="12"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="4"
                                    data-down="9"
                                />
                            </td>
                        </tr>
                        <tr class="row row-2">
                            <td class="cell">
                                <label class="word-number" for="13">10</label>
                                <input
                                    required
                                    id="13"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Dd]"
                                    data-across="10"
                                    data-down="10"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="14"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="10"
                                    data-down="1"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="15"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Dd]"
                                    data-across="10"
                                    data-down="2"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="16"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="10"
                                    data-down="3"
                                />
                            </td>
                            <td class="cell cell-black" id="17"></td>
                            <td class="cell">
                                <label class="word-number" for="18">11</label>
                                <input
                                    required
                                    id="18"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Pp]"
                                    data-across="11"
                                    data-down="4"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="19"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Rr]"
                                    data-across="11"
                                    data-down="5"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="20"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="11"
                                    data-down="6"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="21"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Dd]"
                                    data-across="11"
                                    data-down="7"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="22"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Oo]"
                                    data-across="11"
                                    data-down="8"
                                />
                            </td>
                            <td class="cell cell-black" id="23"></td>
                            <td class="cell">
                                <input
                                    required
                                    id="24"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Zz]"
                                    data-down="9"
                                />
                            </td>
                        </tr>
                        <tr class="row row-3">
                            <td class="cell">
                                <label class="word-number" for="25">12</label>
                                <input
                                    required
                                    id="25"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Oo]"
                                    data-across="12"
                                    data-down="10"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="26"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Nn]"
                                    data-across="12"
                                    data-down="1"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="27"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Oo]"
                                    data-across="12"
                                    data-down="2"
                                />
                            </td>
                            <td class="cell cell-black" id="28"></td>
                            <td class="cell">
                                <label class="word-number" for="29">13</label>
                                <input
                                    required
                                    id="29"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ff]"
                                    data-across="13"
                                    data-down="13"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="30"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ii]"
                                    data-across="13"
                                    data-down="4"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="31"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Rr]"
                                    data-across="13"
                                    data-down="5"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="32"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Mm]"
                                    data-across="13"
                                    data-down="6"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="33"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="13"
                                    data-down="7"
                                />
                            </td>
                            <td class="cell cell-black" id="34"></td>
                            <td class="cell">
                                <label class="word-number" for="35">14</label>
                                <input
                                    required
                                    id="35"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Pp]"
                                    data-across="14"
                                    data-down="14"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="36"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Nn]"
                                    data-across="14"
                                    data-down="9"
                                />
                            </td>
                        </tr>
                        <tr class="row row-4">
                            <td class="cell">
                                <label class="word-number" for="37">15</label>
                                <input
                                    required
                                    id="37"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ss]"
                                    data-across="15"
                                    data-down="10"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="38"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ee]"
                                    data-across="15"
                                    data-down="1"
                                />
                            </td>
                            <td class="cell cell-black" id="39"></td>
                            <td class="cell">
                                <label class="word-number" for="40">16</label>
                                <input
                                    required
                                    id="40"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Mm]"
                                    data-across="16"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="41"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ii]"
                                    data-across="16"
                                    data-down="13"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="42"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Nn]"
                                    data-across="16"
                                    data-down="4"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="43"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ee]"
                                    data-across="16"
                                    data-down="5"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="44"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Oo]"
                                    data-across="16"
                                    data-down="6"
                                />
                            </td>
                            <td class="cell cell-black" id="45"></td>
                            <td class="cell">
                                <label class="word-number" for="46">17</label>
                                <input
                                    required
                                    id="46"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Oo]"
                                    data-across="17"
                                    data-down="17"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="47"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Rr]"
                                    data-across="17"
                                    data-down="14"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="48"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="17"
                                    data-down="9"
                                />
                            </td>
                        </tr>
                        <tr class="row row-5">
                            <td class="cell cell-black" id="49"></td>
                            <td class="cell">
                                <label class="word-number" for="50">18</label>
                                <input
                                    required
                                    id="50"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Tt]"
                                    data-across="18"
                                    data-down="1"
                                />
                            </td>
                            <td class="cell">
                                <label class="word-number" for="51">19</label>
                                <input
                                    required
                                    id="51"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Tt]"
                                    data-across="18"
                                    data-down="19"
                                />
                            </td>
                            <td class="cell cell-black" id="52"></td>
                            <td class="cell">
                                <label class="word-number" for="53">20</label>
                                <input
                                    required
                                    id="53"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Nn]"
                                    data-across="20"
                                    data-down="13"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="54"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Oo]"
                                    data-across="20"
                                    data-down="4"
                                />
                            </td>
                            <td class="cell cell-black" id="55"></td>
                            <td class="cell">
                                <label class="word-number" for="56">21</label>
                                <input
                                    required
                                    id="56"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ss]"
                                    data-across="21"
                                    data-down="6"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="57"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="21"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="58"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Cc]"
                                    data-across="21"
                                    data-down="17"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="59"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Oo]"
                                    data-across="21"
                                    data-down="14"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="60"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ll]"
                                    data-across="21"
                                    data-down="9"
                                />
                            </td>
                        </tr>
                        <tr class="row row-6">
                            <td class="cell cell-black" id="61"></td>
                            <td class="cell cell-black" id="62"></td>
                            <td class="cell">
                                <label class="word-number" for="63">22</label>
                                <input
                                    required
                                    id="63"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ee]"
                                    data-across="22"
                                    data-down="19"
                                />
                            </td>
                            <td class="cell">
                                <label class="word-number" for="64">23</label>
                                <input
                                    required
                                    id="64"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Vv]"
                                    data-across="22"
                                    data-down="23"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="65"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="22"
                                    data-down="13"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="66"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ll]"
                                    data-across="22"
                                    data-down="4"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="67"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ll]"
                                    data-across="22"
                                />
                            </td>
                            <td class="cell cell-black" id="68"></td>
                            <td class="cell cell-black" id="69"></td>
                            <td class="cell">
                                <label class="word-number" for="70">24</label>
                                <input
                                    required
                                    id="70"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Hh]"
                                    data-across="24"
                                    data-down="17"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="71"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="24"
                                    data-down="14"
                                />
                            </td>
                            <td class="cell cell-black" id="72"></td>
                        </tr>
                        <tr class="row row-7">
                            <td class="cell cell-black" id="73"></td>
                            <td class="cell">
                                <label class="word-number" for="74">25</label>
                                <input
                                    required
                                    id="74"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Bb]"
                                    data-across="25"
                                    data-down="25"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="75"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Rr]"
                                    data-across="25"
                                    data-down="19"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="76"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ee]"
                                    data-across="25"
                                    data-down="23"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="77"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Dd]"
                                    data-across="25"
                                    data-down="13"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="78"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="25"
                                    data-down="4"
                                />
                            </td>
                            <td class="cell cell-black" id="79"></td>
                            <td class="cell">
                                <label class="word-number" for="80">26</label>
                                <input
                                    required
                                    id="80"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Oo]"
                                    data-down="26"
                                    data-across="26"
                                />
                            </td>
                            <td class="cell">
                                <label class="word-number" for="81">27</label>
                                <input
                                    required
                                    id="81"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ss]"
                                    data-across="26"
                                    data-down="27"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="82"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ee]"
                                    data-across="26"
                                    data-down="17"
                                />
                            </td>
                            <td class="cell cell-black" id="83"></td>
                            <td class="cell">
                                <label class="word-number" for="84">28</label>
                                <input
                                    required
                                    id="84"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Cc]"
                                    data-down="28"
                                />
                            </td>
                        </tr>
                        <tr class="row row-8">
                            <td class="cell">
                                <label class="word-number" for="85">29</label>
                                <input
                                    required
                                    id="85"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Mm]"
                                    data-across="29"
                                    data-down="29"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="86"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="29"
                                    data-down="25"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="87"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Cc]"
                                    data-down="19"
                                    data-across="29"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="88"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ll]"
                                    data-down="23"
                                    data-across="29"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="89"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-down="13"
                                    data-across="29"
                                />
                            </td>
                            <td class="cell cell-black" id="90"></td>
                            <td class="cell cell-black" id="91"></td>
                            <td class="cell">
                                <label class="word-number" for="92">30</label>
                                <input
                                    required
                                    id="92"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ll]"
                                    data-across="30"
                                    data-down="26"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="93"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ii]"
                                    data-across="30"
                                    data-down="27"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="94"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Nn]"
                                    data-across="30"
                                    data-down="17"
                                />
                            </td>
                            <td class="cell">
                                <label class="word-number" for="95">31</label>
                                <input
                                    required
                                    id="95"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ee]"
                                    data-across="30"
                                    data-down="31"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="96"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="30"
                                    data-down="28"
                                />
                            </td>
                        </tr>
                        <tr class="row row-9">
                            <td class="cell">
                                <label class="word-number" for="97">32</label>
                                <input
                                    required
                                    id="97"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Cc]"
                                    data-across="32"
                                    data-down="29"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="98"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Rr]"
                                    data-across="32"
                                    data-down="25"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="99"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ii]"
                                    data-across="32"
                                    data-down="19"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="100"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="32"
                                    data-down="23"
                                />
                            </td>
                            <td class="cell cell-black" id="101"></td>
                            <td class="cell cell-black" id="102"></td>
                            <td class="cell">
                                <label class="word-number" for="103">33</label>
                                <input
                                    required
                                    id="103"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Dd]"
                                    data-across="33"
                                    data-down="33"
                                />
                            </td>

                            <td class="cell">
                                <input
                                    required
                                    id="104"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ii]"
                                    data-across="33"
                                    data-down="26"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="105"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Nn]"
                                    data-across="33"
                                    data-down="27"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="106"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Tt]"
                                    data-across="33"
                                    data-down="17"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="107"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ee]"
                                    data-across="33"
                                    data-down="31"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="108"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ll]"
                                    data-across="33"
                                    data-down="28"
                                />
                            </td>
                        </tr>
                        <tr class="row row-10">
                            <td class="cell cell-black" id="109"></td>
                            <td class="cell">
                                <label class="word-number" for="110">34</label>
                                <input
                                    required
                                    id="110"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Rr]"
                                    data-across="34"
                                    data-down="25"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="111"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Oo]"
                                    data-across="34"
                                    data-down="19"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="112"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Zz]"
                                    data-across="34"
                                    data-down="23"
                                />
                            </td>
                            <td class="cell">
                                <label class="word-number" for="113">35</label>
                                <input
                                    required
                                    id="113"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="34"
                                    data-down="35"
                                />
                            </td>
                            <td class="cell cell-black" id="114"></td>
                            <td class="cell">
                                <label class="word-number" for="115">36</label>
                                <input
                                    required
                                    id="115"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ii]"
                                    data-across="36"
                                    data-down="33"
                                />
                            </td>

                            <td class="cell">
                                <input
                                    required
                                    id="116"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Vv]"
                                    data-across="36"
                                    data-down="26"
                                />
                            </td>
                            <td class="cell cell-black" id="117"></td>
                            <td class="cell">
                                <label class="word-number" for="118">37</label>
                                <input
                                    required
                                    id="118"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="37"
                                    data-down="17"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="119"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Rr]"
                                    data-across="37"
                                    data-down="31"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="120"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Dd]"
                                    data-across="37"
                                    data-down="28"
                                />
                            </td>
                        </tr>
                        <tr class="row row-11">
                            <td class="cell">
                                <label class="word-number" for="121">38</label>
                                <input
                                    required
                                    id="121"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    data-across="38"
                                    data-down="38"
                                    pattern="[Bb]"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="122"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Oo]"
                                    data-across="38"
                                    data-down="25"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="123"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ss]"
                                    data-across="38"
                                    data-down="19"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="124"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Qq]"
                                    data-across="38"
                                    data-down="23"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="125"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Uu]"
                                    data-across="38"
                                    data-down="35"
                                />
                            </td>

                            <td class="cell">
                                <label class="word-number" for="126">39</label>
                                <input
                                    required
                                    id="126"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ee]"
                                    data-across="38"
                                    data-down="39"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="127"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Jj]"
                                    data-across="38"
                                    data-down="33"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="128"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="38"
                                    data-down="26"
                                />
                            </td>
                            <td class="cell">
                                <label class="word-number" for="129">40</label>
                                <input
                                    required
                                    id="129"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Rr]"
                                    data-across="38"
                                    data-down="40"
                                />
                            </td>
                            <td class="cell cell-black" id="130"></td>
                            <td class="cell">
                                <label class="word-number" for="131">41</label>
                                <input
                                    required
                                    id="131"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Cc]"
                                    data-across="41"
                                    data-down="31"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="132"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ee]"
                                    data-across="41"
                                    data-down="28"
                                />
                            </td>
                        </tr>
                        <tr class="row row-12">
                            <td class="cell">
                                <label class="word-number" for="133">42</label>
                                <input
                                    required
                                    id="133"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="42"
                                    data-down="38"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="134"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Cc]"
                                    data-across="42"
                                    data-down="25"
                                />
                            </td>
                            <td class="cell cell-black" id="135"></td>
                            <td class="cell">
                                <input
                                    required
                                    id="136"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Uu]"
                                    data-down="23"
                                />
                            </td>
                            <td class="cell cell-black" id="137"></td>
                            <td class="cell">
                                <label class="word-number" for="138">43</label>
                                <input
                                    required
                                    id="138"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="43"
                                    data-down="39"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="139"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ee]"
                                    data-across="43"
                                    data-down="33"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="140"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Rr]"
                                    data-across="43"
                                    data-down="26"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="141"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ee]"
                                    data-across="43"
                                    data-down="40"
                                />
                            </td>
                            <td class="cell">
                                <label class="word-number" for="141">44</label>
                                <input
                                    required
                                    id="142"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="43"
                                    data-down="44"
                                />
                            </td>
                            <td class="cell cell-black" id="143"></td>
                            <td class="cell">
                                <input
                                    required
                                    id="144"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Rr]"
                                    data-down="28"
                                />
                            </td>
                        </tr>

                        <tr class="row row-13">
                            <td class="cell">
                                <label class="word-number" for="145">45</label>
                                <input
                                    required
                                    id="145"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Cc]"
                                    data-across="45"
                                    data-down="38"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="146"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Oo]"
                                    data-across="45"
                                    data-down="25"
                                />
                            </td>
                            <td class="cell cell-black" id="147"></td>
                            <td class="cell">
                                <label class="word-number" for="148">46</label>
                                <input
                                    required
                                    id="148"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ee]"
                                    data-across="46"
                                    data-down="23"
                                />
                            </td>
                            <td class="cell">
                                <label class="word-number" for="149">47</label>
                                <input
                                    required
                                    id="149"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="46"
                                    data-down="47"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="150"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Tt]"
                                    data-across="46"
                                    data-down="39"
                                />
                            </td>
                            <td class="cell cell-black" id="151"></td>
                            <td class="cell">
                                <label class="word-number" for="152">48</label>
                                <input
                                    required
                                    id="152"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ee]"
                                    data-across="48"
                                    data-down="26"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="153"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Nn]"
                                    data-across="48"
                                    data-down="40"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="154"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Aa]"
                                    data-across="48"
                                    data-down="44"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="155"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Nn]"
                                    data-across="48"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="156"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Oo]"
                                    data-across="48"
                                    data-down="28"
                                />
                            </td>
                        </tr>
                        <tr class="row row-14">
                            <td class="cell">
                                <input
                                    required
                                    id="157"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Oo]"
                                    data-down="38"
                                />
                            </td>
                            <td class="cell cell-black" id="158"></td>
                            <td class="cell">
                                <label class="word-number" for="159">49</label>
                                <input
                                    required
                                    id="159"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Oo]"
                                    data-across="49"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="160"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Zz]"
                                    data-across="49"
                                    data-down="23"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="161"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Rr]"
                                    data-across="49"
                                    data-down="47"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="162"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Oo]"
                                    data-across="49"
                                    data-down="39"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="163"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Cc]"
                                    data-across="49"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="164"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ss]"
                                    data-across="49"
                                    data-down="26"
                                />
                            </td>
                            <td class="cell">
                                <input
                                    required
                                    id="165"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Ee]"
                                    data-across="49"
                                    data-down="40"
                                />
                            </td>
                            <td class="cell cell-black" id="166"></td>
                            <td class="cell cell-black" id="167"></td>
                            <td class="cell">
                                <input
                                    required
                                    id="168"
                                    class="letter"
                                    type="text"
                                    maxlength="1"
                                    pattern="[Nn]"
                                    data-down="28"
                                />
                            </td>
                        </tr>
                    </table>
                    <div class="btn-group">
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
            </div>

            <p class="clues-p"></p>
            <section class="clues wrapper">
                <ul class="clues-across">
                    <strong>Horizontales</strong>
                    <li class="clue" data-across="1">
                        1. Cada una de las 12 partes de un año.
                    </li>
                    <li class="clue" data-across="4">
                        4. Lugar de nacimiento del autor de este maravilloso
                        cuadro.
                    </li>
                    <li class="clue" data-across="10">
                        10. Movimiento anti-arte, pro-vandalismo, ultra-gamberro
                        nacido a principios del siglo XX.
                    </li>
                    <li class="clue" data-across="11">
                        11. Museo donde está este extraordinario cuadro.
                    </li>
                    <li class="clue" data-across="12">
                        12. Yoko (…), artista conceptual perteneciente a Fluxus.
                    </li>
                    <li class="clue" data-across="13">
                        13. Como no había competencia, lo que no le hace falta
                        poner en el papel a Velázquez en este cuadro (ver
                        esquina inferior derecha).
                    </li>
                    <li class="clue" data-across="14">
                        14. Iniciales del artista y diseñador Pop ochentero que
                        retrató a Joan Collins e hizo portadas para Duran Duran.
                    </li>
                    <li class="clue" data-across="15">15. Sudeste.</li>
                    <li class="clue" data-across="16">
                        16. Relativo a Minias, rey beocio.
                    </li>
                    <li class="clue" data-across="17">17. Reza.</li>
                    <li class="clue" data-across="18">18. Teraesla.</li>
                    <li class="clue" data-across="20">20. Negación.</li>
                    <li class="clue" data-across="21">
                        21. <em>(al revés)</em> Mujeres dementes.
                    </li>
                    <li class="clue" data-across="22">
                        22. <em>(al revés)</em> Objeto simbólico que se entrega
                        en el cuadro, que es el centro de la composición.
                    </li>
                    <li class="clue" data-across="24">
                        24. Nombre de esta web.
                    </li>
                    <li class="clue" data-across="25">
                        25. Ciudad que se rinde en este cuadro.
                    </li>
                    <li class="clue" data-across="26">26. Atreva.</li>
                    <li class="clue" data-across="29">
                        29. Cuerpo mineral formado por dos o más cristales
                        asociados simétricamente.
                    </li>
                    <li class="clue" data-across="30">
                        30. Velázquez no era tanto de esto, era más de mancha.
                    </li>
                    <li class="clue" data-across="32">
                        32. Animal recién nacido.
                    </li>
                    <li class="clue" data-across="33">
                        33. Para los historiadores del arte, lo que se apoya en
                        las jambas.
                    </li>
                    <li class="clue" data-across="34">
                        34. Acaricia ligeramente.
                    </li>
                    <li class="clue" data-across="36">
                        36. Felipe (…), rey de España en la época y protector de
                        Velázquez.
                    </li>
                    <li class="clue" data-across="37">
                        37. Al revés, iniciales de doctora.
                    </li>
                    <li class="clue" data-across="38">
                        38. Esbozar una obra de arte.
                    </li>
                    <li class="clue" data-across="41">41. Tercera letra.</li>
                    <li class="clue" data-across="42">
                        42. Iniciales del principal escultor neoclásico.
                    </li>
                    <li class="clue" data-across="43">
                        43. Tipo de perspectiva del paisaje holandés que veis al
                        fondo.
                    </li>
                    <li class="clue" data-across="45">
                        45. Iniciales de ese escultor Pop que hace réplicas a
                        gran escala de objetos cotidianos.
                    </li>
                    <li class="clue" data-across="46">
                        46. Película de 1963 de Andy Warhol donde se ve a un
                        tipo comiendo.
                    </li>
                    <li class="clue" data-across="48">
                        48. Velazquez pintó a uno: Don Sebastian de Morra.
                    </li>
                    <li class="clue" data-across="49">
                        49. <em>(al revés)</em> Pose en la que está el caballo
                        de la derecha, típico recurso barroco para introducirnos
                        en el cuadro.
                    </li>
                </ul>
                <ul class="clues-down">
                    <strong>Verticales</strong>
                    <li class="clue" data-down="1">
                        1. Este impresionista idolatraba a Velázquez.
                    </li>
                    <li class="clue" data-down="2">
                        2. Periodo japonés en el que florecieron las artes e
                        influyó significativamente en el arte moderno
                        occidental.
                    </li>
                    <li class="clue" data-down="3">
                        3. Iniciales de una de las más excelsas manieristas
                        italianas.
                    </li>
                    <li class="clue" data-down="4">
                        4. General vencedor (y de muy buen ganar) además de
                        amigo del autor.
                    </li>
                    <li class="clue" data-down="5">
                        5. Letra fuerte y capicúa.
                    </li>
                    <li class="clue" data-down="6">
                        6. Nos dirigimos a ver este cuadro.
                    </li>
                    <li class="clue" data-down="7">
                        7. Para tener un billete de vuelta nos hace falta uno de
                        estos.
                    </li>
                    <li class="clue" data-down="8">
                        8. Pronombre de la tercera persona en género masculino.
                    </li>
                    <li class="clue" data-down="9">
                        9. <em>(al revés)</em> Según Ortega y Gasset, cada “uno
                        de los elementos que forman la columna vertebral de todo
                        este cuadro”.
                    </li>
                    <li class="clue" data-down="10">
                        10. Años que duró la ciudad en manos españolas tras
                        pintar Velázquez este cuadro.
                    </li>
                    <li class="clue" data-down="13">13. Persona muerta.</li>
                    <li class="clue" data-down="14">
                        14. Parte delantera de un barco.
                    </li>
                    <li class="clue" data-down="17">
                        17. Años que duró el conflicto entre España y Holanda
                        aquí representado.
                    </li>
                    <li class="clue" data-down="19">
                        19. El ejército español de Flandes que vemos a la
                        derecha.
                    </li>
                    <li class="clue" data-down="23">
                        23. Aunque no estuvo en la batalla, pintor representado
                        en el extremo derecho.
                    </li>
                    <li class="clue" data-down="25">
                        25. Velázquez está en el podio de este movimiento
                        artístico.
                    </li>
                    <li class="clue" data-down="26">
                        26. Famoso Conde-Duque que apoyó a Velázquez en su
                        carrera.
                    </li>

                    <li class="clue" data-down="27">
                        27. Tres simples letras indican falta o carencia de
                        alguna cosa.
                    </li>
                    <li class="clue" data-down="28">
                        28. Dramaturgo que escribió sobre el hecho histórico que
                        vemos en la imagen.
                    </li>
                    <li class="clue" data-down="29">
                        29. Iniciales del más ilustre pintor Bielorruso.
                    </li>
                    <li class="clue" data-down="31">
                        31. <em>(al revés)</em> Tiene convicciones religiosas.
                    </li>
                    <li class="clue" data-down="33">
                        33. Pronuncié unas palabras.
                    </li>
                    <li class="clue" data-down="35">35. Oro.</li>
                    <li class="clue" data-down="38">
                        38. Dios pintado por Velázquez en “Los borrachos”.
                    </li>
                    <li class="clue" data-down="39">
                        39. El hijo de Fidipo y padre del heraclida Tésalo.
                    </li>
                    <li class="clue" data-down="40">
                        40. Nombre de Pila de Magritte.
                    </li>
                    <li class="clue" data-down="44">
                        44. Iniciales de nuestra impresionista danesa preferida.
                    </li>
                    <li class="clue" data-down="47">
                        47. Iniciales del impresionista que nos regaló “El
                        almuerzo de los remeros”, más de Rubens que de
                        Velázquez.
                    </li>
                </ul>
            </section>
        </main>
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