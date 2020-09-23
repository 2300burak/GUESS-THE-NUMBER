const y=Math.round(Math.random()*100);
console.log(y);
let counter = 0;
function showimage() {

    let img= document.getElementById("resim");
    img.style.visibility="visible";
    
}

document.getElementById("check").addEventListener("click",function guess() {
    const x= document.getElementById("number").value;
    
    if(x>100){
        document.getElementById("message").innerHTML = "Please enter lower than 100"
    }

    else{
        if (x>y) {
            document.getElementById("message").innerHTML = "I am thinking about lower number"
        }
        else if (x<y) {
            document.getElementById("message").innerHTML = "I am thinking about higher number"
        }
        else{
            document.getElementById("message").innerHTML = "You are the winner :D"
        }
    }
    if( x==y){
        showimage()
    }

    console.log(x)

    counter++;
    document.getElementById("message2").innerHTML = "This is your test number:" + counter;
    

    

})
// document.getElementById("check").addEventListener("")