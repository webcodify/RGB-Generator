
function change() {
    var red = document.querySelector("#red").value;
    var green = document.querySelector("#green").value;
    var blue = document.querySelector("#blue").value;
    var alpha = document.querySelector("#alpha").value;
    var output = document.querySelector("#output");
    document.body.style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`
    output.innerHTML = `rgba(${red},${green},${blue},${alpha})`
}
