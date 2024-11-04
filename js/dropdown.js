let profile = document.getElementById("profile")

let dropdown = document.createElement("div")
let name = document.createElement("p")
let email = document.createElement("p")
let logout = document.createElement("p")
name.innerText = "Homer Simpson"
email.innerHTML = "donuts4life@springmail.com"
logout.innerHTML = "Logout"
dropdown.appendChild(name)
dropdown.appendChild(email)
dropdown.appendChild(logout)


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
dropdown.style.visibility = "hidden"
dropdown.style.position = "fixed"
dropdown.style.right = "5px"
dropdown.style.top = "76px"