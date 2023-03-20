window.onload = function(){
    document.getElementById("bar-1").click();
};

function barFunction(id, id2, id3, id4, id5, id6){
    let obj = document.getElementById(id)
    let obj2 = document.getElementById(id2)
    let obj3 = document.getElementById(id3)
    let obj4 = document.getElementById(id4)
    let obj5 = document.getElementById(id5)
    let obj6 = document.getElementById(id6)
    obj.style.opacity = 1
    obj2.style.opacity =1
    obj3.style.opacity =0
    obj4.style.opacity = 0
    obj5.style.backgroundColor = "white"
    obj6.style.backgroundColor = "transparent"
}