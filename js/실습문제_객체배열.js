/**
 * Student생성자함수를 통해 점수데이터를 관리하세요.
 * - java
 * - oracle
 * - html5
 * - css3
 * - javascript
 * - getSum
 * - getAvg : 반올림 소수점 첫째자리
 * - toString
 */

function Student(name, java, oracle, html5, css3, javascript){
    this.name = name;
    this.java = java;
    this.oracle = oracle;
    this.html5 = html5;
    this.css3 = css3;
    this.javascript = javascript;
    this.getSum = function(){
        return Number(this.java + this.oracle + this.html5 + this.css3 + this.javascript);
    };
    this.getAvg = function(){
        // var avg = Math.round(this.getSum() / this.length * 100) / 100;
        var avg = Math.round(this.getSum() / 5 * 100) / 100;
        // console.log("this.length = " + this.length);
        return avg;
    };
    this.toString = function(){
        var str = "";
        for(var key in this){
            if(key !="toString" && key != "getAvg" && key != "getSum"){
                str += key + "=" + this[key] + ", ";
            }
        }
        return str;
    };
}
function test1(){
    var students = [
        new Student('김동현', 90, 56, 56, 44, 34),
        new Student('홍길동', 45, 76, 34, 22, 56),
        new Student('유관순', 76, 34, 54, 56, 22)
    ];
    for(var i = 0; i < students.length; i++){
        console.log("" + students[i] + "총점=" + students[i].getSum() + ", 평점=" + students[i].getAvg());
    }
}
