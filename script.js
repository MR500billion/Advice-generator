let changeBtn = document.getElementById("ImgBtn")

function message(msg,Number){
    let advice = document.getElementById("adivce")
    let AdviceNum = document.getElementById("AdviceNum")
advice.innerHTML = msg
AdviceNum.innerHTML = Number

}
changeBtn.addEventListener("click",()=>{

let url = "	https://api.adviceslip.com/advice"
let options = {
    method:"GET"
}

fetch(url,options).then(response=>response.json())
.then(json=>message((json.slip.advice),(json.slip.id)))

})
