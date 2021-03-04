function printProduct(){
    var pName = document.getElementById("productName").value;
    var amount = document.getElementById("productAmount").value;
    var message = document.getElementById("message").value;

    var str = "상품명 : " + pName + "<br>"
             + "납품등급 : " + showVal() + "<br>"
             + "납품수량 : " + amount + "<br>"
             + "기타사항 : " + message;

    document.getElementById("result").innerHTML = str;   
}

function showVal(){
    var level = document.getElementById("productLevel").value;
    document.getElementById("pVal").innerHTML = level;
    return level;
}