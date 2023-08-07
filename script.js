let count =0;

const value =document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
 
btns.forEach(function(btn){
 btn.addEventListener("click", function(event){
    const styles =event.currentTarget.classList;
    if(styles.contains("decrease")){
        count--
    }else if(styles.contains("increase")){
     count++
    }else{
        count = 0;
    }value.textContent=count;
    if(count>0){
        value.style.color ="#a3e635";
    }
    if(count<0){
        value.style.color ="red";
    }
    if(count===0){
        value.style.color ="#f1f1f1"
    }
 })
})