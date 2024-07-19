window.addEventListener('DOMContentLoaded', (_event) => { const css = `#tip-browser-compatibility {
    display: none;
    visibility: hidden;
}
`; const style = document.createElement('style'); style.innerHTML = css; document.head.appendChild(style); });