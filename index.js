let pri,intr,time,calc ;
pri= document.getElementById("principal").value;
intr=document.getElementById("interest").value;
time=document.getElementById("time").value;

calc=document.getElementById("but");

let cintr= pri* (Math.pow(1+ (intr/100) ) ) ;



calc.addEventListener('click',(e)=>{  
    console.log(pri);
    console.log(intr);
    console.log(time);

    console.log(cintr);

})
