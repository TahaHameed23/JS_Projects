var color1 =document.getElementById('color1')
var color2 =document.getElementById('color2')
document.getElementById('btn').addEventListener("click", ()=>{
    var clr=Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('b1').style.backgroundColor="#"+clr
    color1.innerHTML="#"+clr
    
})
document.getElementById('btn').addEventListener("click", ()=>{
    var clr=Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('b2').style.backgroundColor="#"+clr
    color2.innerHTML="#"+clr
    if(color1.innerHTML===color2.innerHTML){
        document.getElementById('status').innerHTML='Won🎉'
    }
    else{
        document.getElementById('status').innerHTML=' '
    }
    
    
})

