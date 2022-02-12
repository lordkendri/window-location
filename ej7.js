let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b><br>`
html += `Pathname: <b>${pathname}</b><br>`
html += `Hostname: <b>${hostname}</b><br>`
html += `URL: <b>${href}</b><br>`

document.write(html);