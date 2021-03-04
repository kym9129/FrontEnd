function checkOne(chk){
    if(chk.checked){
        var others = document.querySelectorAll("[name=product]");
        // console.log(chk.value);

        for(var i = 0; i < others.length; i++){
            if(chk.value != others[i].value){
                others[i].checked = false;
            }
        }
    }



}