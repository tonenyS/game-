let round = prompt("จำนวนที่เล่น")
for(var i =0; i<round;i++){
    var answer = prompt("หัวหรือก้อย")
    random_answer =""
    score = 0
    if(Math.floor(Math.random() * 10) <=4 ){
         //หัว
         random_answer = "หัว"
         
    }else{
         random_answer = "ก้อย"
    }
    if(answer == random_answer){
       alert("คุณท้ายถูก!!!!!")
       score = score +1
    }else{
       alert("คุณท้ายผิด!!!!!") 
    }   
}
document.getElementById("game").innerHTML += "คุณตอบ"+answer+"ผลออกมาเป็น"+random_answer+"<br>"
document.getElementById("score").innerHTML = "คะแนนของคุณ" + score + "คะแนน"
