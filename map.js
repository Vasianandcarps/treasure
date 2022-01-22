window.onload = function (){
    let treasure = {
        x:getRandomInt(768),
        y:getRandomInt(570)
    }
    


    let map = document.getElementById("map");
    map.onmousemove = showCoords;
    map.onmousemove = getDistance;
    function showCoords(event){
        let coords = document.getElementsByTagName
        let x=event.offsetX;
let y=0;
coords.value = `Coors ${x} , ${y}`;
    }
function getDistance(event) {
    let distanceX = event.offsetX - treasure.x;
let distanceY = event.offsetY - treasure.y;
let distance = Math.floor(Math.sqrt(distanceX^2 + distanceY^2)) 
if(distance<10){
   alert("treasure is here!");
  
   dist.innerHTML= distance 
}else if (distance>10 && distance<30){
    info.innerHTML +="Hot!"
   
    dist.innerHTML= distance 
}
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }