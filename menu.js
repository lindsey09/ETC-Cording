
    let horizontalUnderLine = document.getElementById("horizontal-underline");
    let horizontalMenus = document.querySelectorAll("nav:first-child a");
    // console.log(horizontalMenus); 변수설정하고 값 제대로 들어왔나 console로 확인하기
    
    horizontalMenus.forEach(menu => menu.addEventListener("click", (e)=>horizontalIndicator(e)))
    //각각의 메뉴에 클릭이벤트가 발생할때마다 horizontalIndicator함수를 실행해라
    
    function horizontalIndicator(e) {
        horizontalUnderLine.style.left = e.currentTarget.offsetLeft + "px";
        horizontalUnderLine.style.width = e.currentTarget.offsetWidth + "px";
        horizontalUnderLine.style.top = 
        e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
    
    }
    


    let verticalUnderline = document.getElementById('vertical-underline');
    let verticalMenu = document.querySelectorAll('nav:nth-child(2) a');

    verticalMenu.forEach(menu => menu.addEventListener("click", (e)=>verticalIndicator(e)))

    function verticalIndicator(e){
        verticalUnderline.style.left = e.currentTarget.offsetLeft + "px";
        verticalUnderline.style.width = e.currentTarget.offsetWidth + "px";
        verticalUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + 
        "px";
    }
