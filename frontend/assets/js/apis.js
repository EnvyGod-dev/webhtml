const API_BASE_URL = "http://localhost:8000/api/auth"; // Replace with your backend API URL

async function registerUser(username, password, email) {
    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, email }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Registration failed");
        }

        const data = await response.json();
        console.log("User registered successfully:", data);
        alert("Registration successful! Please log in.");
        window.location.href = "login.html";
    } catch (error) {
        console.error("Error registering user:", error);
        alert(error.message);
    }
}

async function loginUser(username, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Login failed");
        }

        const data = await response.json();
        console.log("Login successful:", data);
        alert("Login successful!");
        window.location.href = "index.html";
    } catch (error) {
        console.error("Error logging in:", error);
        alert(error.message);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            loginUser(username, password);
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const email = document.getElementById("email").value;
            registerUser(username, password, email);
        });
    }
});
