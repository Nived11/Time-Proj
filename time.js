
function time(max , num , id ){
    str=""
    for(i=num ; i<=max;i++){
        str+=`<option>${i}</option>`
    }
    document.getElementById(id).innerHTML=str
}
time(59,0,"minute")
time(24,0,"hour")
time(30,0,"Date")
time(12,0,"month")
time(6,1,"day")
time(2024,2000,"year")

function clicked(){
    var store = document.getElementById("minute" ,"hour", "Date", "month","day", "year")
    console.log(store.value);
    
}
