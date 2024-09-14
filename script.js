setInterval(()=>{
    let a=document.querySelector(".parent");
    let data=a.querySelectorAll("input");
    let clock=new Date();
    let h=String(clock.getHours()).padStart(2,"0");
    let m=String(clock.getMinutes()).padStart(2,"0");
    let s=String(clock.getSeconds()).padStart(2,"0");
    data[0].value=h;
    data[1].value=m;
    data[2].value=s
},1000)