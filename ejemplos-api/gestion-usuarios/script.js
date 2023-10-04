const nameInput = document.getElementById("name")
const emailnput = document.getElementById("email")
const userList = document.getElementById("user-list")
const crudForm = document.getElementById("crud-form")
/**const apiKey = "a8cceab687d84c049fd9ac9d5d7963bc"
const apiURL = `https://crudcrud.com/api/${apiKey}/users`*/

function loadUsers(){
    fetch(apiURL)
    .then(response => response.json())
    .then(data=>{
        console.log(data)
    })
}

document.activeElement("DOMContentLoaded", function(){
    loadUsers()
})

