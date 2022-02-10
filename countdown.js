function countDown(num) {
    const timer = setInterval(function (){
        console.log(num)
        num--
        if (num === 0){
            console.log("DONE!")
            clearInterval(timer)
        }
        
    }, 1000);
    
}


countDown(5)