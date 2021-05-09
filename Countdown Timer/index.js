
const d=document.querySelector("#days");
const h=document.getElementById("hours");
const m=document.getElementById("mins");
const s=document.getElementById("sec");
// console.log(d,h,m,s);
//  d.innerHTML=4

const newYear=new Date("1 Jan 2022")
function time()
{
    
    const current=new Date();
    const diff_sec=(newYear-current)/1000;
    

    var days=Math.floor(diff_sec/3600/24);
    var hours=Math.floor(diff_sec/3600)%24;
    var min=Math.floor(diff_sec/60)%60
    var sec=Math.floor(diff_sec)%60;
    //console.log(d,h,m,s);

    d.innerHTML=check(days);
    h.innerHTML=check(hours);
    m.innerHTML=check(min);
    s.innerHTML=check(sec);
   // console.log(d,h,m,s);

}

time()

setInterval(time,1000);

function check(t)
{
    if(t<10)
    t=`0${t}`;
    return t;
}
