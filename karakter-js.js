let pbutton_left = document.getElementById('btn-kiri')
let pbutton_right = document.getElementById('btn-kanan')
const slides = document.querySelectorAll('.slide-page')
var counter = 0

let albedo = document.getElementById('btn-albedo')
let jean = document.getElementById('btn-jean')
let pc_mondstadt = document.getElementById('pc-mondstadt')

let zhongli = document.getElementById('btn-zhongli')
let ningguang = document.getElementById('btn-ningguang')
let pc_liyue = document.getElementById('pc-liyue')

let yaemiko = document.getElementById('btn-yaemiko')
let kazuha = document.getElementById('btn-kazuha')
let pc_inazuma = document.getElementById('pc-inazuma')

let alhaitam = document.getElementById('btn-alhaitam')
let nilou = document.getElementById('btn-nilou')
let pc_sumeru = document.getElementById('pc-sumeru')


window.onload = function(){
    albedo.click();
    zhongli.click();
    yaemiko.click();
    alhaitam.click();
    counter_check()
};

slides.forEach(
    (slide, index)=>{
        slide.style.left = `${index*100}%`
    }
)

function counter_check(){
    if(counter>0 && counter<3){
        pbutton_left.style.opacity = 1
        pbutton_right.style.opacity = 1
    }
    if(counter==0){
        pbutton_left.style.opacity = 0.1
    }
    if(counter==3){
        pbutton_right.style.opacity = 0.1
    }
}

pbutton_left.addEventListener("click", function(){    
    if(counter>0){
        counter--        
        slideImage()
        counter_check()
    }
})

pbutton_right.addEventListener("click", function(){
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

albedo.addEventListener("click", function(){
    if(albedo.style.opacity != 1){
        jean.style.opacity = 0.6
        albedo.style.opacity = 1

        pc_mondstadt.setAttribute("src", "jenshinFolder/pc-char-mondstadt-albedo.png")
    }
})

jean.addEventListener("click", function(){
    if(jean.style.opacity != 1){
        albedo.style.opacity = 0.6
        jean.style.opacity = 1
        
        pc_mondstadt.setAttribute("src", "jenshinFolder/pc-char-mondstadt-jean.png")
    }
})

zhongli.addEventListener("click", function(){
    if(zhongli.style.opacity != 1){
        ningguang.style.opacity = 0.6
        zhongli.style.opacity = 1

        pc_liyue.setAttribute("src", "jenshinFolder/pc-char-liyue-zhongli.png")
    }
})

ningguang.addEventListener("click", function(){
    if(ningguang.style.opacity != 1){
        zhongli.style.opacity = 0.6
        ningguang.style.opacity = 1

        pc_liyue.setAttribute("src", "jenshinFolder/pc-char-liyue-ningguang.png")
    }
})

yaemiko.addEventListener("click", function(){
    if(yaemiko.style.opacity != 1){
        kazuha.style.opacity = 0.6
        yaemiko.style.opacity = 1

        pc_inazuma.setAttribute("src", "jenshinFolder/pc-char-inazuma-yaemiko.png")
    }
})

kazuha.addEventListener("click", function(){
    if(kazuha.style.opacity != 1){
        yaemiko.style.opacity = 0.6
        kazuha.style.opacity = 1

        pc_inazuma.setAttribute("src", "jenshinFolder/pc-char-inazuma-kazuha.png")
    }
})

alhaitam.addEventListener("click", function(){
    if(alhaitam.style.opacity != 1){
        nilou.style.opacity = 0.6
        alhaitam.style.opacity = 1

        pc_sumeru.setAttribute("src", "jenshinFolder/pc-char-sumeru-alhaitam.png")
    }
})

nilou.addEventListener("click", function(){
    if(nilou.style.opacity != 1){
        alhaitam.style.opacity = 0.6
        nilou.style.opacity = 1
                
        pc_sumeru.setAttribute("src", "jenshinFolder/pc-char-sumeru-nilou.png")
    }
})


