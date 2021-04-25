
function printTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
var interval = setInterval(printTime, 500);