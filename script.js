var modal = document.getElementById('myModal');
var btn = document.getElementById("cadastrarCarro");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

windows.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}