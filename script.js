var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = true;

function start() {
    timer = true; //Logic - when i press start button it will check condition true or false. If true then it will go to stopwatch function check all condition and stopwatch will start.
    stopwatch();
}

function stop() {
    timer = false; //When we press stop button then stopwatch will stop.


}

function reset() {
    timer = false;

    // Logic behind it -  when i press on reset button all values will be going 00(Hour):00(Min.):00(Sec.):00(Mili Sec)
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";

}

function stopwatch() {
    // Logic - when we press Start button then if condition will check that timer will true and then count start adding 1 by 1.
    if (timer == true) {
        count = count + 1;

        // Logic behind it that when count is equal to 100 then add 1 on second and count value reset to 0
        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }


        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        // to get double digit in timer we will convert digit to string.
        if(hr<10){
            hrString = "0" + hrString;
        }

        if(min<10){
            minString = "0" + minString;
        }

        if(sec<10){
            secString = "0" + secString;
        }

        if(count<10){
            countString = "0" + countString;
        }

        // if we add string as well as digit we'll get string.
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;
        setTimeout("stopwatch()", 10); // Tiner will update count in every 10 mili sec.
    }

}