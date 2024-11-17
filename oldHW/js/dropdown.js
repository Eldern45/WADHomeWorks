let profile = document.getElementById("profile")

let dropdown = document.createElement("div")
let name = document.createElement("p")
let email = document.createElement("p")
let logout = document.createElement("p")
name.innerText = "Homer Simpson"
name.id = "dontclose"
email.innerHTML = "donuts4life@springmail.com";
email.id = "dontclose"
logout.innerHTML = "Logout"
logout.id = "dontclose"
dropdown.appendChild(name)
dropdown.appendChild(email)
dropdown.appendChild(logout)

document.onclick = e => {
    console.log(e.target)
    if (e.target.id !== "profile" && e.target.id !== "dontclose") {
        dropdown.style.visibility = "hidden"
    }
}

profile.onclick = e => {
    if (dropdown.style.visibility === "visible") {
        dropdown.style.visibility = "hidden"
    } else if (dropdown.style.visibility === "hidden") {
        dropdown.style.visibility = "visible"
    }
    console.log(dropdown.style.visibility)
}

document.body.appendChild(dropdown)
dropdown.classList.add("dropdown")
dropdown.id = "dontclose"
dropdown.style.visibility = "hidden"
dropdown.style.position = "absolute"
dropdown.style.right = "5px"
dropdown.style.top = "76px"