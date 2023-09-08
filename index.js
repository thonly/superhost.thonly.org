import "/components/tl-header/element.mjs";
import "/components/tl-footer/element.mjs";

window.copyText = async event => {
    await navigator.clipboard.writeText(event.target.previousElementSibling.value);
    event.target.textContent = "Copied!";
};

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LZ0S4CE49V');