/**
 * Comfirm : 확인/취소 버튼을 통해 논리식처리를 지원
 */
function test1(){
    var bool = confirm("이 파일을 삭제하시겠습니까?");
    console.log(bool);
    if(bool){
        //파일 삭제 로직
        alert("파일을 삭제했습니다.");
    }
}
/**
 * Prompt : 사용자로부터 문자열 입력값을 받아 처리 가능
 */
function test2(){
    var name = prompt("당신의 이름은 무엇입니까?");
    console.log(name);

    //값이 있는 경우 true, 값이 없는 경우(null, undefined) false
    if(name){
    // if(name == null || name == ""){
        //취소했거나, 이름입력없이 확인을 누른 경우
        alert("올바른 이름을 입력하세요.")

    }else{
        //정상 입력
        alert("당신의 이름은 [" + name + "] 입니다.")
    }
}

/**
 * innerHTML : 실제 태그의 content부분. 텍스트, 자식태그 등
 *  - getter : html이 포함된 content를 리턴
 *  - setter : 주어진 문자열을 html로 파싱해서 처리
 */
function test3(){
    var str = prompt(".wrapper태그 내용을 입력하세요.");
    console.log(str); //<h1>안녕</h1>
    var wrapper = document.querySelector(".wrapper");
    wrapper.innerHTML = str; //setter
    // console.log(wrapper.innerHTML); //getter          
    
}/**
 * innerText : 태그안의 content. 텍스트
  - getter : html태그무시, 텍스트만 가져옴.
  - setter : html태그로 parsing처리 없고, 단순 텍스트로 처리
 */
function test4(){
    var str = prompt(".wrapper태그 내용을 입력하세요.");
    console.log(str); //<h1>안녕</h1>
    var wrapper = document.querySelector(".wrapper");
    wrapper.innerText = str; //setter
    console.log(wrapper.innerText); //getter   
}

/**
 * outerHTML : content뿐 아니라 태그 자신도 포함
 */
function test5(){
    // console.log("dd");
    var wrapper = document.querySelector(".wrapper");
    console.log(wrapper.outerHTML); //getter

    wrapper.outerHTML = "<mark>안녕, 나 새로 왔어</mark>"; //setter

}