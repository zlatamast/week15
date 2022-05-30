function changeTheme() {
    document.querySelector("body").classList.remove("light")

    document.querySelector("body").classList.remove("dark")

    document.querySelector("body").classList.remove("red")

    switch (document.querySelector("#background").value) {
        case "light": document.querySelector("body").classList.add("light")
        break;

        case "dark": document.querySelector("body").classList.add("dark")
        break;

        case "red": document.querySelector("body").classList.add("red")
        break;
    
        default: 
            break;
    }


}

document.querySelector("#background").addEventListener("change", changeTheme);