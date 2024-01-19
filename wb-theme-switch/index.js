console.log('hello World')

let count = 0

const increase = () => {
    count += 1
    counterText.innerText = count;
};

const decrease = () => {
    count -= 1
    counterText.innerText = count;
};

const reset = () => {
    count = 0
    counterText.innerHTML = `<mark>${count}</mark>`;
};

const decreaseBtn = document.querySelector('#minus')
const increaseBtn = document.querySelector('#add')
const resetBtn = document.querySelector('#reset')
const counterText = document.querySelector('#counter')

increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);


const selectTheme = (theme) => {
    const bod = document.querySelector('body');
    bod.className = theme

    const main = document.querySelector('main')
    main.className = theme

    const buttons = document.querySelectorAll('button'); // returns a nodeList (array)
    buttons.forEach((button) => {
        button.className = theme;
    })

}


const fbBtn = document.getElementById('facebook')
const dmBtn = document.getElementById('devmountain')
const twtBtn = document.getElementById('twitter')
const dfBtn = document.getElementById('default')

fbBtn.addEventListener('click', () => selectTheme('facebook'));
dmBtn.addEventListener('click', () => selectTheme('devmountain'));
twtBtn.addEventListener('click', () => selectTheme('twitter'));
dfBtn.addEventListener('click', () => selectTheme('default'));

