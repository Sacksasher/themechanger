document.getElementById("dark-theme-btn").addEventListener("click", () => {
    document.documentElement.style.setProperty("--background-color", "grey")
})

document.getElementById("light-theme-btn").addEventListener("click", () => {
    document.documentElement.style.setProperty("--background-color", "white")
})

document.getElementById("Default").addEventListener("click", () => {
    document.documentElement.style.setProperty("--background-color", "pink")
})