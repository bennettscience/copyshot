import {CodeJar} from 'codejar';
import {withLineNumbers} from 'codejar/linenumbers';
import html2canvas from 'html2canvas';
import {encodeUnicode, decodeUnicode} from './modules/encoding.js';
import hljs from 'highlight.js';

import 'highlight.js/styles/darcula.css';
import './style.css'

const urlParams = new URLSearchParams(window.location.search);
const param = urlParams.get("text");

const button = document.querySelector(`#create`);
button.addEventListener('click', createLink);

const editor = document.querySelector(`.editor`);

const highlight = (editor) => {
    // highlight.js does not trims old tags,
    // let's do it by this hack.
    editor.textContent = editor.textContent;
    hljs.highlightBlock(editor);
};

const jar = CodeJar(editor, withLineNumbers(highlight));

if(param) {
    console.log(param)
    document.querySelector(`.result`).innerHTML = `<pre>${decodeUnicode(param)}</pre>`;
}

// get the text from the textarea and create a base64-encoded string
function createLink() {
    const editor = document.querySelector(`.editor-wrap`);
    const text = document.querySelector(`.editor`).innerText;
    const encoded = encodeUnicode(text);

    html2canvas(editor, {width: 700}).then((canvas) => {
        document.body.querySelector(`.result`).appendChild(canvas);
    });
    document.querySelector(`#text`).innerHTML = `<a href="/?text=${encoded}">Copy link for plaintext</a>`;
}