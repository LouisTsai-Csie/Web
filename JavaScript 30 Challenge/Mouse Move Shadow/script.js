const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;

function shadow(e) {
    const width = hero.offsetWidth, height = hero.offsetHeight;
    let x = e.offsetX, y =e.offsetY;
    if(this!==e.target){
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    const xwalk = Math.round((x/width*walk) - (walk/2));
    const ywalk = Math.round((y/height*walk) - (walk/2));

    //console.log(xwalk, ywalk);

    text.style.textShadow = `
        ${xwalk}px ${ywalk}px 0 rgba(255,0,255,0.7),
        ${-xwalk}px ${ywalk}px 0 rgba(0,255,255,0.7),
        ${xwalk}px ${-ywalk}px 0 rgba(0,255,0,0.7),
        ${-xwalk}px ${-ywalk}px 0 rgba(0,0,255,0.7)
    `;
}

hero.addEventListener('mousemove',shadow);