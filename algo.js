function solveTask() {
    var a = document.getElementById("num-a").value;
    var result;
    if (a > 100) {
        result = 0;
    } else if (a < 61) {
        result = a;
    } else {
        result = (Math.sqrt(a) / Math.sqrt(a, 4)).toFixed(2);
    }
    document.getElementById("num-result").value = result;
}