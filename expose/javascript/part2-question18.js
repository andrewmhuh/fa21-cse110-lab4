var interval = setInterval(printTime, 1000);
var count = 0;

function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    count += 1;
    if(count == 10) {
        clearInterval(interval);
    }
}