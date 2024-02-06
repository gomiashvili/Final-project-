let ticks = document.getElementsByClassName('tick-img');
let arrows = document.getElementsByClassName('arrow-back');
function onmouseOver(id) {
    ticks[id].src='./images/tick-icon.svg';
    arrows[id].src='./images/icon_arrow_back_white.svg';
}
function onmouseLeave(id) {
    arrows[id].src='./images/icon_arrow_back_blue.svg';
    ticks[id].src='./images/blue-tick.svg';
}
