const pressed = [];
const secretCode = 'louis';

function guess(e) {
    console.log(e);
    pressed.splice(-secretCode.length-1,pressed.length - secretCode.length);
    pressed.push(e.key);
    
    if(pressed.join('').includes(secretCode)){
        console.log('Ding Ding');
        cornify_add();
    }
    console.log(pressed);
}

window.addEventListener('keyup',guess);

