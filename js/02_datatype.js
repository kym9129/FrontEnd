function test1(){
    //변수 선언 시 var키워드 사용. 데이터타입 필요 없이 이름만.
    var i;
    console.log(i, typeof(i)); //console.log는 콤마로 여러개 찍을 수 있음
    //값대입이 일어날 때 (리터럴에 따라서), 변수타입이 결정된다.
    i = 100; //i는 숫자형 변수 number
    i = 3.57; //숫자형은 정수/실수를 다 포함.
    console.log(i, typeof(i)); //console.log는 콤마로 여러개 찍을 수 있음

    i = "ㅋㅋㅋ"; //i는 문자열 변수
    i = '안녕'; //"", '' 감싸서 문자형 표현. char없음. 다 String
    console.log(i, typeof(i)); //string
    
    i = true; //boolean
    console.log(i, typeof(i));
    //객체
    //배열도 하나의 객체
    //List<Object>와 비슷. 크기/타입 제한 X
    i = [1, 2, 3, '안녕']; //object
    console.log(i, typeof(i)); 
    
    //속성명 : 속성값(any)
    i = {
        name : '홍길동', //쉼표! ;아님주의
        age : 30,
        hobby : ['축구', '농구', '야구']
    };
    console.log(i, typeof(i)); //object
    
    //함수도 변수에 담을 수 있음
    //자바스크립트 함수 매개변수 선언부 역시 자료형을 선언하지 않는다.
    //리턴타입 없어도 리턴 가능
    i = function(x, y){
        return x + y;
    };
    console.log(i, typeof(i)); //function
    console.log("i(3, 7) = " + i(3, 7));

    i = new Date();
    console.log(i, typeof(i)); //object;
}