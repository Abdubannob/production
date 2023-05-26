let filterMobile = document.getElementById("filterMobile")
let filterM = document.querySelector(".filter").style;
// let filter = document.querySelector(".adaptive-filter").style;
let can = document.querySelector(".can-item")




filterMobile.onclick =function (){
    filterM.position = "fixed"
    filterM.left = "30px"
    filterM.top = "55px"
    // filterM.zIndex ="99"
}

can.onclick =function (){
    filterM.position = "fixed"
    filterM.left = "-300px"
    filterM.transition ="all .3s linear"
}
