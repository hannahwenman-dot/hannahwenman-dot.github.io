const toggle = document.getElementById("theme-toggle");

// Check localStorage for saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// Update button state
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
