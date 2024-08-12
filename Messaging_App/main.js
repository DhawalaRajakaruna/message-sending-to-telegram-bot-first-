const form = document.querySelector('#form')
var token="<Add your token here>" 
var chat_id = "<Add your ID here>"
// sending message to telegram when hit send button
form.addEventListener("submit", (e) => {
    e.preventDefault()
    var text = document.querySelector("#text");
    var mytxt=`message ${text.value}`
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${mytxt}`;
    
    let api = new XMLHttpRequest()
    api.open("GET", url, true)
    api.send()

    text.value = "";
})  






