let pri,intr,time,calc ;
pri= document.getElementById("principal").value;
// pri= parseInt(pri);

intr=document.getElementById("interest").value;
// intr= parseInt(intr);

time=document.getElementById("time").value;
// time= parseInt(time);

calc=document.getElementById("but");

var cintr= pri * (Math.pow( (intr/100) + 1 ), time ) ;

calc.addEventListener('click',(e)=>{  
    console.log(pri);
    console.log(intr);
    console.log(time);
    console.log(cintr);
    
    location.reload();
})
