let aboutservice = document.querySelector(".about-service")
let aboutme = document.querySelector(".about-me")
let aboutphotos = document.querySelector(".about-photos")
let aboutvideos = document.querySelector(".about-videos")
let articlascard = document.querySelector(".articlas-card")
let equipment = document.querySelector(".about-equipment")
let services = document.querySelector(".about-services")
let social = document.querySelector(".social-item")

let worktab = document.getElementById("work-tab")
let allorderstab = document.getElementById("all-orders-tab")
let photostab = document.getElementById("photos-tab")
let videostab = document.getElementById("videos-tab")
let articalstab = document.getElementById("articals-tab")
let socialtab = document.getElementById("social-tab")
let equiptab = document.getElementById("equip-tab")
let servicestab = document.getElementById("services-tab")



aboutservice.style.display = "none"
aboutphotos.style.display = "none"
aboutvideos.style.display = "none"
articlascard.style.display = "none"
equipment.style.display = "none"
services.style.display = "none"
social.style.display ="none"

worktab.onclick = function () {
aboutservice.style.display = "inline-block"
aboutme.style.display ="none"
aboutvideos.style.display = "none"
aboutphotos.style.display ="none"
equipment.style.display = "none"
services.style.display = "none"
social.style.display="none"
}

allorderstab.onclick = function () {
aboutservice.style.display = "none"
aboutme.style.display ="flex"
aboutvideos.style.display = "none"
aboutphotos.style.display ="none"
articlascard.style.display ="none"
equipment.style.display = "none"
services.style.display = "none"
social.style.display="none"
}

photostab.onclick = function (){
    aboutservice.style.display = "none"
    aboutme.style.display ="none"
    aboutvideos.style.display = "none"
    aboutphotos.style.display ="grid"
    articlascard.style.display ="none"
    equipment.style.display = "none"
    services.style.display = "none"
    social.style.display="none"
}

articalstab.onclick = function (){
    aboutservice.style.display = "none"
    aboutme.style.display ="none"
    aboutvideos.style.display = "none"
    aboutphotos.style.display ="none"
    articlascard.style.display ="grid"
    equipment.style.display = "none"
    services.style.display = "none"
    social.style.display="none"
}

videostab.onclick = function (){
    aboutservice.style.display = "none"
    aboutme.style.display ="none"
    aboutphotos.style.display ="none"
    aboutvideos.style.display = "grid"
    articlascard.style.display ="none"
    equipment.style.display = "none"
    services.style.display = "none"
    social.style.display="none"
}

equiptab.onclick = function (){
    aboutservice.style.display = "none"
    aboutme.style.display ="none"
    aboutvideos.style.display = "none"
    aboutphotos.style.display ="none"
    articlascard.style.display ="none"
    services.style.display = "none"
    equipment.style.display = "flex"
    social.style.display="none"
}

servicestab.onclick = function (){
    aboutservice.style.display = "none"
    aboutme.style.display ="none"
    aboutvideos.style.display = "none"
    aboutphotos.style.display ="none"
    articlascard.style.display ="none"
    equipment.style.display = "none"
    services.style.display = "flex"
    social.style.display="none"
}

socialtab.onclick = function () {
    aboutservice.style.display = "none"
    aboutme.style.display ="none"
    aboutvideos.style.display = "none"
    aboutphotos.style.display ="none"
    equipment.style.display = "none"
    articlascard.style.display ="none"
    services.style.display = "none"
    social.style.display="flex"
    }