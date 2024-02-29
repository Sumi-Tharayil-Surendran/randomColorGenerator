let clickChange =()=>{
    let randomColor = Math.random().toString(16).slice(2,8).padEnd(6,0)
    let color = document.getElementById("color")
    document.body.style.backgroundColor="#"+ randomColor
    color.innerHTML="#"+ randomColor

    // console.log(randomColor)
    
}

btn.addEventListener("click",clickChange)
