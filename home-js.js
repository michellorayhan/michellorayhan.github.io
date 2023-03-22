let pc_char = document.getElementById('pc-char')
let tulisan_karakter = document.getElementById('karakter')
let tulisan_senjata = document.getElementById('senjata')

let btn1 = document.getElementById('bar-1')
let btn2 = document.getElementById('bar-2')

window.onload = function(){
    document.getElementById("bar-1").click();
};

btn1.addEventListener("click", function(){
    pc_char.setAttribute("src", "jenshinFolder/pc-news-dehya.png")
    tulisan_karakter.style.opacity = 1
    tulisan_senjata.style.opacity = 0

    btn1.style.backgroundColor = "white"
    btn2.style.backgroundColor = "transparent"
})

btn2.addEventListener("click", function(){
    pc_char.setAttribute("src", "jenshinFolder/pc-news-senjata.png")
    tulisan_karakter.style.opacity = 0
    tulisan_senjata.style.opacity = 1

    btn2.style.backgroundColor = "white"
    btn1.style.backgroundColor = "transparent"
})