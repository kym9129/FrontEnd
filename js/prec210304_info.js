function printValue(){
    var inputs = document.querySelectorAll("[type=text]");

    var userName;
    var pName;
    var price;

    //요소 가져오기
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].id == "pname"){
            pName = inputs[i].value;
        } else if(inputs[i].name == "price"){
            price = inputs[i].value;
        } else{
            userName = inputs[i].value;
        }
    }
    //요소 div에서 출력하기
    document.getElementById("area").innerHTML = "<p>구매자 : "+userName+"님<br>구입상품 : "+pName+"<br>구매가격 : "+price+"만원</p>";
}