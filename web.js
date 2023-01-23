let body = document.querySelector("body");

if (navigator.userAgentData["platform"] === "Windows") {
    body.style.backgroundColor = "black"
} else {
    body.style.backgroundColor = "red"
}
