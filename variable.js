 // npn init > 초기화     /    npm instal 패키지명 > 패키지 설치할때      / npm uninstal 패키지명 > 패키지 삭제할때


/*

//프롬프트를 띄우러면 요기부터
const readline = require('readline');

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
 // 요기까지 고정값
rl.question('점수를 입력하세요 :', function(score){
    if (score >= 60 && score <=100 ){
        if(score >= 90){
            console.log('장학 대상입니다.');
        }else{
            console.log('합격입니다.');
        }
    }
    else { 
        if(score >=0 && score <60) {
            console.log('불합격입니다.');
        }
        else{
            console.log('값이 유효하지 않습니다.')
        }
    }
    rl.close();
}); */
/*
const readline = require('readline');

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('점수를 입력하세요',function(score){
    switch(Math.round(score / 10 - 1))
{ case 10:
    case 9:
        console.log("A학점");
        break
    case 8:
        console.log("B학점");
        break
    case 7:
        console.log("C학점");
        break
    case 6:
        console.log("D학점");
        break
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("F학점");
        break;
        default :
        console.log("범위를 벗어났습니다.");
        break
}
rl.close()
}) */
/* for 문으로 구구단 9단까지
for (var i = 2; i <= 9; i++)
{
    for(var j = 1; j <= 9; j++){
        console.log(i + ' * ' + j + ' = ' + (i*j))
    }
} */

/* while문으로 구구단 9단까지 
var dan = 2;
while(dan < 10)    
{
    var num = 1;
    while(num < 10)
    {
        console.log(dan + "*" + num + "=" + dan*num);
        num++
    }
    dan++
}*/

/* 지역변수 흐름 확인 

function naver()
{
    console.log('naver 함수 진입');
    var saveUser = '이귀엽';
    google();
    console.log('naver 함수 탈출');
}
function google()
{
    console.log('google 함수 진입');
    var saveUser = '이예쁜'
    console.log('google 함수 탈출');
}
naver(); */

/* 함수 리턴값 확인
const readline = require('readline');

const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function checkAge(age) {
    if(age > 19) {
        return true;
    } else {
        return false;
    }
}

rl.question("나이를 입력하세요 :",function (nai) {
    if(checkAge(nai)){
        console.log("입장 가능합니다.");
    }else {
        console.log("입장을 불허합니다.")
    }
     rl.close();
}) */

/* 객체의 프로퍼티 동적 추가 및 삭제 
let dic = {
    boy : "소년",
    girl : "소녀",
    friend : "친구"
};

dic.apple='사과'
dic.ten=10;
console.log(dic.apple);
console.log(dic.ten);
console.log(dic); // 삭제는 delete dic.ooo
*/

/*for in 반복문 

let user={
    id : "5bong",
    pw : "bong9",
    name : "박오봉",
    mobile : "010-0101-0011",
    country : "대한민국"
}

for(let info in user){
    console.log(`${info} : ${user[info]}`) 
} // user 안에 생성한 프로퍼티 값을 모두 읽어온다.

*/

/* .........!!
const arr1 = ['C#','javascript'];
const arr2=['python', 'react','C++']
const arr3=[...arr1,...arr2]

console.log(arr3) */


let user={
    id : "jamsuham",
    pw : '1234',
    name : '잠수함',
    age : 30
}

let {id,...rest} = user

console.log(id)
console.log(rest.pw)
console.log(rest.name)
console.log(rest.age)

console.log(user)