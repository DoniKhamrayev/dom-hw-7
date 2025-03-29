let timer = 45; 
let start = timer; 


let interval = setInterval(() => {
    if (timer <= 0) {
        alert("Boom"); 
        timer = start; 
        clearInterval(interval) 
    }
    console.log("До взрыва Осталось: " + timer); 
    --timer; 
    
}, 1000);