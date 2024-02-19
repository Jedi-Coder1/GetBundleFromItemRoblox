var StartBtn = document.getElementById('start')
var input = document.getElementById('input')
var ResponseDiv = document.getElementById('ResponseDiv')

StartBtn.addEventListener('click', function() {
    var value = input.value
    if (isNaN(value)) {
        alert("Value Can Only Be Numbers")
    } else {
        console.log(`Download Triggered With: ${value}`)
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var jsonData = JSON.parse(xhttp.responseText)
                var contentData = jsonData["data"][0]
                console.log(contentData["id"])
                console.log(xhttp.responseText)
            }
        };
        xhttp.open("GET", `https://catalog.roproxy.com/v1/assets/${value}/bundles`, true);
        xhttp.send(null);
    }
});