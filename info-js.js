let video = document.getElementById('video')
let bvideo_1 = document.getElementById("button-1")
let bvideo_2 = document.getElementById("button-2")
let bvideo_3 = document.getElementById("button-3")

let cbutton_1 = document.getElementById('c-button-1')
let cbutton_2 = document.getElementById('c-button-2')
const slides = document.querySelectorAll('.slide')
var counter = 0

window.onload = function(){
    counter_check()
};

bvideo_1.addEventListener("click", function(){
    bvideo_1.classList.add('active')
    bvideo_2.classList.remove('active')
    bvideo_3.classList.remove('active')

    video.setAttribute("src", "https://www.youtube.com/embed/gw_cglJHnFY")
})

bvideo_2.addEventListener("click", function(){
    bvideo_1.classList.remove('active')
    bvideo_2.classList.add('active')
    bvideo_3.classList.remove('active')

    video.setAttribute("src", "https://www.youtube.com/embed/qrH9vMZBwAk")
})

bvideo_3.addEventListener("click", function(){
    bvideo_1.classList.remove('active')
    bvideo_2.classList.remove('active')
    bvideo_3.classList.add('active')

    video.setAttribute("src", "https://www.youtube.com/embed/AcTUi59vw_E")    
})

slides.forEach(
    (slide, index)=>{
        slide.style.left = `${index*100}%`
    }
)

cbutton_1.addEventListener("click", function(){
    if(counter>0){
        counter--
        slideImage()
        counter_check()
    }    
})

cbutton_2.addEventListener("click", function(){
    if(counter<3){
        counter++
        slideImage()
        counter_check()
    }    
})

const slideImage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}

function counter_check(){
    if(counter>0 && counter<3){
        cbutton_1.style.opacity = 1
        cbutton_2.style.opacity = 1
    }
    if(counter==0){
        cbutton_1.style.opacity = 0.1
    }
    if(counter==3){
        cbutton_2.style.opacity = 0.1
    }
}






