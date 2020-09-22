const y=Math.round(Math.random()*100);
console.log(y)
function showimage() {

    let img= document.getElementById("resim");
    img.style.visibility="visible";
    
}

document.getElementById("check").addEventListener("click",function guess() {
    const x= document.getElementById("number").value;
    if(x>100){
        document.getElementById("message").innerHTML = "100den küçük sayı gir"
    }

    else{
        if (x>y) {
            document.getElementById("message").innerHTML = "düşük yaz"
        }
        else if (x<y) {
            document.getElementById("message").innerHTML = "büyük yaz"
        }
        else{
            document.getElementById("message").innerHTML = "tebrikler"
        }
    }
    if( x==y){
        showimage()
    }

    console.log(x)

})
document.getElementById("check").addEventListener("")