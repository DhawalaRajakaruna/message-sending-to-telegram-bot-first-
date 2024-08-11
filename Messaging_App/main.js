const form = document.querySelector('#form')
var token="7457753366:AAHF0FvqjQ_yvsUAoQ3ztmDl6BVHG-aEzvE" 
var chat_id = "1899116831"
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






