document.addEventListener('DOMContentLoaded', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js').then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
    }
});

document.getElementById("bgSelector").addEventListener("change", function () {
    var selectedColor = document.getElementById("bgSelector").value;
    var body = document.body;

    // Set background color
    body.style.backgroundColor = selectedColor;

    if (selectedColor === "lightblue") {
        body.style.backgroundImage = "url('lightblue.jpg')";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundPosition = "center center";
        body.style.backgroundSize = "cover";
    } else if (selectedColor === "lightgold") {
        body.style.backgroundImage = "url('lightgold.jpg')";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundPosition = "center center";
        body.style.backgroundSize = "100% 100%";
    }
});


// Extra Credit
var nameInput = document.getElementById("nameInput");
var userNameSpan = document.getElementById("userName");

// Check Local Storage for saved name
var storedName = localStorage.getItem("name");

if (storedName) {
    // If name exists in Local Storage, display it
    userNameSpan.textContent = storedName;
}

// Listen for input changes
nameInput.addEventListener("input", function () {
    // Update the displayed name
    userNameSpan.textContent = nameInput.value;

    // Save the name to Local Storage
    localStorage.setItem("name", nameInput.value);
});
