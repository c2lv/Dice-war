// 해당 ID 요소에 마우스 올라가면 이미지 변경, 마우스 내리면 원래 이미지로 변경
document.getElementById('normal').onmouseover = function(){
    this.src = 'static/img/normal_2.png'
}
document.getElementById('normal').onmouseout = function(){
    this.src = 'static/img/normal_1.png'
}
document.getElementById('devil').onmouseover = function(){
    this.src = 'static/img/devil_2.png'
}
document.getElementById('devil').onmouseout = function(){
    this.src = 'static/img/devil_1.png'
}
document.getElementById('cat').onmouseover = function(){
    this.src = 'static/img/cat_2.png'
}
document.getElementById('cat').onmouseout = function(){
    this.src = 'static/img/cat_1.png'
}
document.getElementById('alien').onmouseover = function(){
    this.src = 'static/img/alien_2.png'
}
document.getElementById('alien').onmouseout = function(){
    this.src = 'static/img/alien_1.png'
}

// 클릭한 이미지 종족을 myTribe로 설정
document.getElementById('normal').onclick = function(){
    myTribe = 'normal'
    document.getElementById('welcomepage').style.visibility = 'hidden'
    battle();
}
document.getElementById('devil').onclick = function(){
    myTribe = 'devil'
    document.getElementById('welcomepage').style.visibility = 'hidden'
    battle();
}
document.getElementById('cat').onclick = function(){
    myTribe = 'cat'
    document.getElementById('welcomepage').style.visibility = 'hidden'
    battle();
}
document.getElementById('alien').onclick = function(){
    myTribe = 'alien'
    document.getElementById('welcomepage').style.visibility = 'hidden'
    battle();
}