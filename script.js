const toggle = document.getElementById("theme-toggle");

// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀";
} else {
    toggle.textContent = "🌙";
}

// Toggle dark mode
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "☀";
    } else {
        localStorage.setItem("theme", "light");
        toggle.textContent = "🌙";
    }
});
