var StartBtn = document.getElementById('start')
var InputText = document.getElementById('input')
var ResponseDiv = document.getElementById('ResponseDiv')

StartBtn.addEventListener('click', function() {
    var InputValue = InputText.value
    if (isNaN(InputValue)) {
        alert("Value Can Only Be Numbers")
    } else {
        console.log(`Download Triggered With: ${InputValue}`)
        var xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            if (this.readyState == 4 && this.status == 200) {
                var jsonData = JSON.parse(xhttp.responseText)
                var contentData = jsonData["data"][0]
                console.log(contentData["id"])
                ResponseDiv.appendChild(document.createTextNode(`bundle id: ${contentData["id"]} creator name: ${contentData["creator"]["name"]}`))
                ResponseDiv.setAttribute("style", "")
            } else {
                var invalid = "Invalid assetId"
                if (this.status == 400 && xhttp.responseText.includes(invalid)) {
                    alert(invalid)
                }
            }
        };
        xhttp.open("GET", `https://catalog.roproxy.com/v1/assets/${InputValue}/bundles`, true);
        xhttp.send(null);
    }
});