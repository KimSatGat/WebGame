var result = document.querySelector("#result");
result.textContent = "정답을 입력하세요.";
var form = document.querySelector("#form");
var input = document.querySelector("#input");
var numberList;
var selectedNumbers;
var failCount = 0;
function selectNumbers(){
    numberList = [1,2,3,4,5,6,7,8,9];
    selectedNumbers = [];
    for(var i = 0; i < 4; i++){
        selectNumber = numberList.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        selectedNumbers.push(selectNumber);
    }    
}

selectNumbers();
console.log(selectedNumbers);
form.addEventListener('submit', function action(event){
    event.preventDefault();
    var answer = input.value;    
    if(answer === selectedNumbers.join('')){
        result.textContent = "홈런!";
        input.value = '';
        input.focus();
        selectNumbers();
        failCount = 0;
    }else{
        var answerArray = answer.split('');
        var strike = 0;
        var ball = 0;
        ++failCount;
        if(failCount > 3){
            result.textContent = '3번 넘게 틀려서 실패! 답은 ' + selectedNumbers.join(',') + '입니다.';
            input.value = '';
            input.focus();
            selectNumbers();
            failCount = 0;
        }else{
            for(var i = 0; i < 4; ++i){
                if(Number(answerArray[i]) === selectedNumbers[i]) ++strike;
                else if(selectedNumbers.indexOf(Number(answerArray[i])) > -1) ++ball;
            }
            result.textContent = strike + '스트라이크 ' + ball + "볼 입니다.";
            input.value = '';
            input.focus();
        }    
    }    
});