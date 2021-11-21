function showValue(){
    var value = document.getElementById("rate").value.toString();
    value += "%";
    document.getElementById("rateNo").innerHTML = value;
}
function compute()
{
    p = document.getElementById("principal");
    r = document.getElementById("rate");
    y = document.getElementById("years");
    if (p.value == ""){
        alert("Please Input Amount. (min value 1)");
        p.focus();
        return false;
    }
    if (p.value < 1 || p.value % 1 != 0){
        alert("Please Enter A Positive Integer.");
        p.focus();
        return false;
    }
    pv = p.value;
    rv = r.value;
    yv = y.value;
    res = pv * rv * 0.01 * yv;
    res = res.toFixed(2);
    pv = parseInt(pv);
    var date = new Date;
    yr = parseInt(date.getFullYear());
    yr += parseInt(yv); 
    document.getElementById("result1").innerHTML = "If you deposit ";
    document.getElementById("result3").innerHTML = ",<br/>at an interest rate of ";
    document.getElementById("result5").innerHTML = ".<br/>You will receive an amount of ";
    document.getElementById("result7").innerHTML = ",<br/>in the year ";
    document.getElementById("result2").innerHTML = pv.toString();
    document.getElementById("result4").innerHTML = rv.toString() + "%";
    document.getElementById("result6").innerHTML = res;
    document.getElementById("result8").innerHTML = yr.toString();
    return false;
}
        