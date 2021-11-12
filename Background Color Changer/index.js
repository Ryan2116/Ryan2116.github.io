const change = document.querySelector('#change');
const colorText = document.querySelector('#color-text');
const body = document.body;

change.addEventListener('click', changeBG);

function changeBG() {
    const col1 = getRandomRGB();
    const col2 = getRandomRGB();
    const col3 = getRandomRGB();

    const colorString = `rgb(${col1}, ${col2}, ${col3})`
    
    body.style.background = colorString;
    colorText.innerText = colorString

}

function getRandomRGB() {
    return Math.floor(Math.random() * 256)
}