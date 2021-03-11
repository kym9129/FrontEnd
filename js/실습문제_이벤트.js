window.onload = function(){
    
    var btn = document.querySelector("#btn-generate");
    btn.onclick = function(){

        //객체 생성자
        function Link(value, url){
            this.value = value;
            this.url = url;
        }

        //객체배열 생성
        var btns = [
            new Link("네이버", "https://www.naver.com"),
            new Link("구글", "https://www.google.com"),
            new Link("KH", "https://www.iei.or.kr"),
            new Link("와삼", "https://www.w3schools.com")
        ];

        var wrapper = document.querySelector(".btn-wrapper");

        //배열을 순회하면서, button태그를 동적으로 생성한다.
        for(var i = 0; i < btns.length; i++){
            //버튼생성
            var btn = document.createElement("button");
            //버튼 속성 부여
            btn.type = "button";
            btn.innerHTML = btns[i].value;
            btn.url = btns[i].url;
            btn.onclick = function(){
                open(this.url, "newWindow");
            };
            //div태그 자식으로 버튼태그 생성
            wrapper.appendChild(btn);
        }
        //1회만 실행되도록 핸들러 삭제
        this.onclick=null;

    };

};
