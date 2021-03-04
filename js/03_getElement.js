function test1(){
    //id로 태그 가져오기
    var li = document.getElementById("myli");
    // var li = document.getElementById("myli122222");
    //존재하지 않는 객체 : null
    //null의 타입은 object
    console.log(li, typeof(li)); //태그객체
    console.dir(li); //dir() : 객체구조로 열람
    
    //스타일 속성 변경
    li.style.color = 'white';
    li.style.backgroundColor = "green";
}
// getElementsByTagName는 복수개의 요소를 가진 배열객체(짜가)를 리턴한다.
function test2(){
    var liArr = document.getElementsByTagName("li");
    // console.log(liArr);
    // console.log(liArr[0]);
    // console.log(liArr[1]);
    // console.log(liArr[2]);
    var b = 50;
    for(var i = 0; i < liArr.length; i++){
        // console.log(liArr[i]);
        liArr[i].style.color = "rgb(130, 220, " + b + ")";
        b += 50;
    }
}

// document.getElementsByClassName("클래스명");
function test3(){
    var groups = document.getElementsByClassName("group");
    console.log(groups);

    for(var i = 0; i < groups.length; i++){
        var li = groups[i];
        li.style.color = "springgreen";
    }

}

function test4(){
    var hobbies = document.getElementsByName("hobby");
    console.log(hobbies);

    for(var i = 0; i < hobbies.length; i++){
        var hobby = hobbies[i];
        //체크박스의 체크 여부 확인
        if(hobby.checked == true){
            console.log(hobby.value); //input태그의 value속성값
        }
    }
}

/*
* #userEmail을 입력하고, 확인을 눌렀을 때 사용자 입력값을 경고창에 출력하세요.
 - 아이디로 접근
 - 태그명으로 접근
 - name값으로 접근
*/
function test5(){
    //아이디로 접근
    // var email = document.getElementById("userEmail");
    // alert(email.value);

    //태그명으로 접근
    // var inputs = document.getElementsByTagName("input");
    // for(var i = 0; i < inputs.length; i++){
    //     if(inputs[i].type == "email"){
    //         alert(inputs[i].value);
    //     }
    // }
    
    //name값으로 접근
    var emails = document.getElementsByName("userEmail");
    // console.log(emails);
    for(var i = 0; i < emails.length; i++){
        var email = emails[i];
        // alert(email.value);
    }

    // 속성은 getter/setter처리 가능
    emails[0].value = ""; //초기화 setter
    alert(emails[0].value);
}

function test6(){
    // var amount = document.getElementById("amount");
    // var result = document.getElementById("result");

    //id속성으로 변수 선언없이 태그객체에 접근 가능(비표준)
    //innerHTML = 시작태그와 종료태그 사이에 내용으로 추가
    result.innerHTML = amount.value;
}

/**
 * [name=subject]를 전체선택/해제
 */
function test7() {
    // var subjects = document.getElementsByName("subject");
    var subjects = document.querySelectorAll("[name=subject]");
    console.log(subjects);
    var checkAll = document.querySelector("#checkAll");
    console.log(checkAll);
    for (var i = 0; i < subjects.length; i++) {
      //setter로써 checked : #checkAll의 chaecked여부(true | false)를 세팅
      subjects[i].checked = checkAll.checked;
      // 부모 td요소 클래스값 제어
      checkAll.checked
        ? subjects[i].parentNode.classList.add("on")
        : subjects[i].parentNode.classList.remove("on");
    }
  }

/**
 * 개별 체크박스를 통해 전체선택 체크박스 제어하기
 */
function test8(chk) {
    //this로 던져진 tag객체
    // console.log(chk);
    // console.dir(chk);
    //부모 td태그의 class값 제어
    var parentTd = chk.parentNode;
    console.log(parentTd);
    //태그객체의 classList속성을 통해서 다음 코드를 개선하라.
    //replace(oldClass, newClass) : oldClass를 newClass로 교체
    // parentTd.classList.toggle("on");
    // if (chk.checked) parentTd.className = "on serious";
    if (chk.checked) parentTd.classList.add("on");
    //기존 class값이 제거되지 않도록 처리
    // else parentTd.className = "serious";
    else parentTd.classList.remove("on");
    //전체 체크박스 제어
    var subjects = document.querySelectorAll("[name=subject]");
    for (var i = 0; i < subjects.length; i++) {
      if (!subjects[i].checked) {
        checkAll.checked = false;
        return; //조기리턴
      }
    }
    checkAll.checked = true;
  }