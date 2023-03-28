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
    counterf_check()
    countercg_check()
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

let fbutton_1 = document.getElementById('fitur-btn-left')
let fbutton_2 = document.getElementById('fitur-btn-right')
const slide_fitur = document.querySelectorAll('.slide-fitur-grid')
var counter_f =0
const f_opacity = fbutton_2.style.opacity


slide_fitur.forEach(
    (slide, index)=>{
        slide.style.left = `${index*100}%`
    }
)

fbutton_1.addEventListener("click", function(){
    if(counter_f>0){
        counter_f--
        slideImage_fitur()
        counterf_check()
    }    
})

fbutton_2.addEventListener("click", function(){
    if(counter_f<4){
        counter_f++
        slideImage_fitur()
        counterf_check()
    }    
})

const slideImage_fitur = () =>{
    slide_fitur.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter_f*100}%)`
        }
    )
}

function counterf_check(){
    if(counter_f>0 && counter_f<4){
        fbutton_1.style.opacity = f_opacity
        fbutton_2.style.opacity = f_opacity
    }
    if(counter_f==0){
        fbutton_1.style.opacity = 0.1
    }
    if(counter_f==4){
        fbutton_2.style.opacity = 0.1
    }
}


let cgbutton_1 = document.getElementById('cuplikan-btn-left')
let cgbutton_2 = document.getElementById('cuplikan-btn-right')
const slide_cg = document.querySelectorAll('.slide-cuplikan-grid')
var counter_cg =0
const cg_opacity = cgbutton_2.style.opacity

slide_cg.forEach(
    (slide, index)=>{
        slide.style.left = `${index*100}%`
    }
)

cgbutton_1.addEventListener("click", function(){
    if(counter_cg>0){
        counter_cg--
        slideImage_cg()
        countercg_check()
    }    
})

cgbutton_2.addEventListener("click", function(){
    if(counter_cg<3){
        counter_cg++
        slideImage_cg()
        countercg_check()
    }    
})

const slideImage_cg = () =>{
    slide_cg.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter_cg*100}%)`
        }
    )
}

function countercg_check(){
    if(counter_cg>0 && counter_cg<3){
        cgbutton_1.style.opacity = cg_opacity
        cgbutton_2.style.opacity = cg_opacity
    }
    if(counter_cg==0){
        cgbutton_1.style.opacity = 0.1
    }
    if(counter_cg==3){
        cgbutton_2.style.opacity = 0.1
    }
}


let video_g = document.getElementById('video-grid')
let bgvideo_1 = document.getElementById("bgutton-1")
let bgvideo_2 = document.getElementById("bgutton-2")
let bgvideo_3 = document.getElementById("bgutton-3")

bgvideo_1.addEventListener("click", function(){
    bgvideo_1.classList.add('active')
    bgvideo_2.classList.remove('active')
    bgvideo_3.classList.remove('active')

    video_g.setAttribute("src", "https://www.youtube.com/embed/gw_cglJHnFY")
})

bgvideo_2.addEventListener("click", function(){
    bgvideo_1.classList.remove('active')
    bgvideo_2.classList.add('active')
    bgvideo_3.classList.remove('active')

    video_g.setAttribute("src", "https://www.youtube.com/embed/qrH9vMZBwAk")
})

bgvideo_3.addEventListener("click", function(){
    bgvideo_1.classList.remove('active')
    bgvideo_2.classList.remove('active')
    bgvideo_3.classList.add('active')

    video_g.setAttribute("src", "https://www.youtube.com/embed/AcTUi59vw_E")    
})