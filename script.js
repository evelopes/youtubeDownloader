let convertBtn = document.querySelector(".convert-button");
let URLinput = document.querySelector(".URL-input")

convertBtn.addEventListener("click", function () {
    console.log(`URL: ${URLinput.value}`)
    sendURL(URLinput.value)
})
function sendURL(URL) {
    window.location.href = `http://localhost:3000/download?URL=${URL}` 
}
