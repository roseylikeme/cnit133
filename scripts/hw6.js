$(document).ready(function () {
    document.getElementById("hw6pt1form").addEventListener("submit", function (e) {
        e.preventDefault();
    
        const userNumberInput = parseFloat(document.getElementById("userNumber").value);
    
        if (isNaN(userNumberInput) || userNumberInput.toFixed(4) !== userNumberInput.toString()) {
            showMessage("Invalid number. Please enter a number with at least 4 decimal places.");
        } else {
            const roundedInteger = Math.round(userNumberInput);
            const squareRootInteger = Math.round(Math.sqrt(userNumberInput));
            const roundedTenths = Math.round(userNumberInput * 10) / 10;
            const roundedHundredths = Math.round(userNumberInput * 100) / 100;
            const roundedThousandths = Math.round(userNumberInput * 1000) / 1000;
    
            showMessage(`
                <div class="bg-gray-rounded text-center mt-3 p-3">
                    <p>Original Number: ${userNumberInput}</p>
                    <p>Rounded Integer: ${roundedInteger}</p>
                    <p>Square Root (Rounded): ${squareRootInteger}</p>
                    <p>Rounded to Tenths: ${roundedTenths}</p>
                    <p>Rounded to Hundredths: ${roundedHundredths}</p>
                    <p>Rounded to Thousandths: ${roundedThousandths}</p>
                </div>
            `);
        }
    });
    
    document.getElementById("hw6pt1form").addEventListener("reset", function () {
        // Clear user input and hide the message
        document.getElementById("userNumber").value = "";
        hideMessage();
    });
    
    function showMessage(message) {
        const outputArea = document.getElementById("output-message");
        outputArea.innerHTML = message;
        outputArea.style.display = "block";
    }
    
    function hideMessage() {
        document.getElementById("output-message").style.display = "none";
    }
});