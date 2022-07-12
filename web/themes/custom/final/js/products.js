
const ele = document.getElementsByClassName("avail_check");
let button = document.getElementById("cartbtn");
let val = ele[0].children;
let ans = val[0].innerHTML
console.log(val[0].innerHTML);

if(ans == "Off")
{
    button.disabled = true;
    button.style.cursor ="not-allowed";
    button.style.backgroundColor = "gray";
}