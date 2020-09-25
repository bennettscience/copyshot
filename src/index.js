import {CodeJar} from 'codejar';
import {withLineNumbers} from 'codejar/linenumbers'
import html2canvas from 'html2canvas';
import {encodeUnicode, decodeUnicode} from './modules/encoding.js';
import Prism from 'prismjs'

const urlParams = new URLSearchParams(window.location.search);
const param = urlParams.get("text");

const button = document.querySelector(`#create`);
button.addEventListener('click', createLink);

const jar = CodeJar(document.querySelector(`.editor`), withLineNumbers(Prism.highlightElement));

if(param) {
    console.log(param)
    document.querySelector(`.text`).innerHTML = `<pre>${decodeUnicode(param)}</pre>`;
}

// get the text from the textarea and create a base64-encoded string
function createLink() {
    const editor = document.querySelector(`.editor-wrap`);
    const text = document.querySelector(`.editor`).innerText;
    const encoded = encodeUnicode(text);

    html2canvas(editor, {width: 700}).then((canvas) => {
        document.body.querySelector(`main`).appendChild(canvas);
    });
    document.querySelector(`.text`).innerHTML = `<a href="/?text=${encoded}">Copy link for plaintext</a>`;
}