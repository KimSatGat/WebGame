var result = document.querySelector("#result");
result.textContent = "정답을 입력하세요.";
var form = document.querySelector("#form");
var input = document.querySelector("#input");
var numberList;         // 숫자 후보군
var selectedNumbers;    // 선택한 숫자를 담을 배열
var failCount = 0;      // 실패 카운트

function selectNumbers(){   // 랜덤 숫자 뽑기
    numberList = [1,2,3,4,5,6,7,8,9];
    selectedNumbers = [];
    for(var i = 0; i < 4; i++){
        selectNumber = numberList.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        selectedNumbers.push(selectNumber);
    }    
}

selectNumbers();
form.addEventListener('submit', function action(event){
    event.preventDefault();     // 새로고침 막기
    var answer = input.value;    
    if(answer === selectedNumbers.join('')){    // 정답이라면
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
        if(failCount > 3){  // 정답이 아니고 기회를 초과하면
            result.textContent = '3번 넘게 틀려서 실패! 답은 ' + selectedNumbers.join(',') + '입니다.';
            input.value = '';
            input.focus();
            selectNumbers();
            failCount = 0;
        }else{              // 정답이 아니고 기회 이하라면
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