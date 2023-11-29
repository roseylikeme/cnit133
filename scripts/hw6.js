$(document).ready(function () {
  document
    .getElementById("hw6pt1form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const userNumberInput = parseFloat(
        document.getElementById("userNumber").value
      );

      if (
        isNaN(userNumberInput) ||
        userNumberInput.toFixed(4) !== userNumberInput.toString()
      ) {
        showMessage(
          "Invalid number. Please enter a number with at least 4 decimal places."
        );
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

  // part2
  document
    .getElementById("hw6pt2form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const longContent = document
        .getElementById("longContent")
        .value.toLowerCase(); // Convert to lowercase for case-insensitive search
      const searchChar = document
        .getElementById("searchChar")
        .value.toLowerCase();

      const charCount = countOccurrences(longContent, searchChar);

      if (charCount > 0) {
        showMessage(
          `The character '${searchChar}' appears ${charCount} times in the content.`
        );
      } else {
        showNotFoundWindow(searchChar);
        clearResult();
      }
    });

  document.getElementById("hw6pt2form").addEventListener("reset", function () {
    // Clear user input and hide the message
    clearResult();
  });

  function countOccurrences(content, char) {
    const regex = new RegExp(char, "g");
    const matches = content.match(regex);
    return matches ? matches.length : 0;
  }

  function showNotFoundWindow(searchChar) {
    const newWindow = window.open("", "_blank", "width=300,height=100");
    newWindow.document.write(
      `<p>Search character '${searchChar}' not found in the content you typed.</p>`
    );
    newWindow.document.write('<button onclick="window.close()">Close</button>');
  }

  function showMessage(message) {
    const outputArea = document.getElementById("output-message-pt2");
    outputArea.innerHTML = message;
    outputArea.style.display = "block";
  }

  function clearResult() {
    document.getElementById("output-message-pt2").style.display = "none";
    document.getElementById("searchChar").value = "";
  }

  // pt3
  $("#phoneNumberInput").mask("(999) 999-9999");

  $("#pt3ExtractBtn").on("click", function(){
    extractPhoneNumber();
  })

  $("#pt3ClearBtn").on("click", function(){
    $("#phoneNumberInput").val("");
    $("#areaCodeOutput").val("");
    $("#firstThreeOutput").val("");
    $("#lastFourOutput").val("");
    $("#textAreaPt3").hide().text("");
  })

  $("#textAreaPt3").hide()

  function extractPhoneNumber() {
    $("#areaCodeOutput").val("");
    $("#firstThreeDigitsOutput").val("");
    $("#lastFourDigitsOutput").val("");
    $("#textAreaPt3").text("");
    $("#textAreaPt3").hide()
  
    var phoneNumber = $("#phoneNumberInput").val();
    var pattern = /^\(\d{3}\) \d{3}-\d{4}$/;
  
    if (pattern.test(phoneNumber)) {
      // valid phone number
      var parts = phoneNumber.match(/\d+/g);
      $("#areaCodeOutput").val(parts[0]);
      $("#firstThreeOutput").val(parts[1]);
      $("#lastFourOutput").val(parts[2]);
    } else {
      // non-valid phone number
      $("#textAreaPt3").show().multiline(
        "Please enter the phone number in the format: \n (123) 456-7890."
      );
    }
  }
  
  $.fn.multiline = function(text){
      this.text(text);
      this.html(this.html().replace(/\n/g,'<br/>'));
      return this;
  }
});
