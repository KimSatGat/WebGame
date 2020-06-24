var turn = 'X';
var count = 0;
var winner = document.querySelector("h1");
var cells = document.querySelectorAll("td");
var select = function (event) {    
    for(var i = 0; i< cells.length; ++i){
        if (cells[i] === event.target) {
            if(cells[i].textContent === ''){
                cells[i].textContent = turn;
                ++count;
                if(checkWinner()){
                    initCells();
                    break;
                }
                if(count === 9){
                    initCells();
                    winner.textContent = "무승부!";
                    break;
                }
                if(turn === 'X') turn = 'O';
                else turn = 'X';                
            }
            break;
        }
    }        
};

for (var i = 0; i < cells.length; ++i) {
    cells[i].addEventListener('click', select);
}
function checkWinner(){    
    if(cells[0].textContent === turn && cells[1].textContent === turn && cells[2].textContent === turn){ winner.textContent = turn + " 우승!"; return true;}
    else if(cells[3].textContent === turn && cells[4].textContent === turn && cells[5].textContent === turn){ winner.textContent = turn + " 우승!"; return true;}
    else if(cells[6].textContent === turn && cells[7].textContent === turn && cells[8].textContent === turn){ winner.textContent = turn + " 우승!"; return true;}
    else if(cells[0].textContent === turn && cells[3].textContent === turn && cells[6].textContent === turn){ winner.textContent = turn + " 우승!"; return true;}
    else if(cells[1].textContent === turn && cells[4].textContent === turn && cells[7].textContent === turn){ winner.textContent = turn + " 우승!"; return true;}
    else if(cells[2].textContent === turn && cells[5].textContent === turn && cells[8].textContent === turn){ winner.textContent = turn + " 우승!"; return true;}
    else if(cells[0].textContent === turn && cells[4].textContent === turn && cells[8].textContent === turn){ winner.textContent = turn + " 우승!"; return true;}
    else if(cells[2].textContent === turn && cells[4].textContent === turn && cells[6].textContent === turn){ winner.textContent = turn + " 우승!"; return true;}
    return false;
}

function initCells(){
    for(var i = 0; i < cells.length; ++i){
        cells[i].textContent = '';
    }
    count = 0;
}