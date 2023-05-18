const button = document.querySelector("button")

function giveItem(){
    alert("you have been given an item!")
}

function getItem(){
    axios.get("http://54.219.130.239/get-object")
    .then((res) => {alert("You got a " + res.data.name)})
    .catch((err) => {console.log(err)})
}

button.addEventListener("click", getItem)