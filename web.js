let body = document.querySelector("body");
let h1 = document.createElement("h1");
let userAgentDataText = document.createTextNode(navigator.userAgentData["platform"]);
h1.appendChild(userAgentDataText)

if (navigator.userAgentData["platform"] === "Windows") {
    body.style.backgroundColor = "black";
    body.appendChild(h1);
} else {
    body.style.backgroundColor = "red";
    body.appendChild(h1);
}
