var select = 0;
var setInt;
function makeInterval(){    
    setInt = setInterval(() => {
    if(select === 0) document.querySelector("#computer").style.background = 'url(https://is3-ssl.mzstatic.com/image/thumb/Purple71/v4/f7/df/a3/f7dfa3f6-4a06-b5ec-fbae-dea689f9395f/source/256x256bb.jpg)0px 0px';
    else if(select === 1) document.querySelector("#computer").style.background = 'url(https://is3-ssl.mzstatic.com/image/thumb/Purple71/v4/f7/df/a3/f7dfa3f6-4a06-b5ec-fbae-dea689f9395f/source/256x256bb.jpg)128px 0px';
    else if(select === 2) document.querySelector("#computer").style.background = 'url(https://is3-ssl.mzstatic.com/image/thumb/Purple71/v4/f7/df/a3/f7dfa3f6-4a06-b5ec-fbae-dea689f9395f/source/256x256bb.jpg)180px 128px';
    select += 1;
    select %= 3;    
}, 100);
}


var result = document.querySelector("#winner");
function checkWinner(id){    
    switch(id){
        case "rock":
            if(select === 0) result.textContent = "패!"
            else if(select === 1) result.textContent = "무승부!"
            else if(select === 2) result.textContent = "승!"
            break;
        case "scissor":
            if(select === 0) result.textContent = "승!"
            else if(select === 1) result.textContent = "패!"
            else if(select === 2) result.textContent = "무승부!"
            break;
        case "paper":
            if (select === 0) result.textContent = "무승부!"
            else if (select === 1) result.textContent = "승!"
            else if (select === 2) result.textContent = "패!"
            break;
    }
}

makeInterval();
document.querySelectorAll(".btn").forEach(function(btn){
    btn.addEventListener("click", function(){
        checkWinner(this.id);
        clearInterval(setInt);
        console.log(this.id);
        setTimeout(function() {makeInterval()}, 1000);
    })
})