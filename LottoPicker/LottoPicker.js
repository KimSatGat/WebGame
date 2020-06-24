var result = document.querySelector('#result');
var numList = new Array(45).fill().map((element, index) =>{
    return index + 1;
});

var shuffle = [];
while(numList.length > 0){
    shuffle.push(numList.splice(Math.floor(Math.random() * numList.length), 1)[0]);    
}
var numbers = shuffle.slice(0, 6).sort((prev, cur) => prev - cur);
var bonus = shuffle[shuffle.length - 1];

function ball(number){
    var temp = document.createElement('div');
    var bgColor;
    temp.textContent = number;
    temp.style.display = 'inline-block';
    temp.style.border = '1px solid black';
    temp.style.borderRadius = '10px';
    temp.style.width = '20px';
    temp.style.height = '20px';
    temp.style.textAlign = 'center';
    temp.style.marginRight = '10px';
    if(number <= 10) bgColor = 'red';
    else if(number <= 20) bgColor = 'orange';
    else if(number <= 30) bgColor = 'yellow';
    else if(number <= 40) bgColor = 'blue';
    else bgColor = 'green';
    temp.style.backgroundColor = bgColor;
    result.appendChild(temp);
}
setTimeout(function() {ball(numbers[0])}, 1000);
setTimeout(function() {ball(numbers[1])}, 2000);
setTimeout(function() {ball(numbers[2])}, 3000);
setTimeout(function() {ball(numbers[3])}, 4000);
setTimeout(function() {ball(numbers[4])}, 5000);
setTimeout(function() {ball(numbers[5])}, 6000);
setTimeout(function () {
    var bonusSpace = document.querySelector('.bonus');
    var bonusTemp = document.createElement('div');
    bonusTemp.textContent = bonus;
    bonusSpace.appendChild(bonusTemp);
}, 7000);
