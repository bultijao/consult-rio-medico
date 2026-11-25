
let email = document.getElementById("email")

let names = document.getElementById("name")

let text = document.getElementById("text")

let button = document.getElementById("button")

let result = document.getElementById("result")


button.addEventListener("click", 
    function(){

let card = document.createElement("div")

let title = document.createElement("h3")

let emailPerson = document.createElement("p")

let paragraph = document.createElement("p")

card.classList.add("cards")

card.appendChild(title)

card.appendChild(emailPerson)

card.appendChild(paragraph)

result.appendChild(card)

 title.textContent = names.value

 emailPerson.textContent = email.value
 
 paragraph.textContent = text.value

});



