function openNav() {
  $("#mySidebar").css("width", "200px");
  $("#main").css("margin-left", "200px");
}

function closeNav() {
  $("#mySidebar").css("width", "0");
  $("#main").css("margin-left", "0");
}

$(function () {
  // Page loads with sidebar closed
  closeNav();
  // Script for submenu:
  $('.hwParts').hide();
  $('.overview').show();

  function clearInputsAndError() {
    $('#num1').val('');
    $('#num2').val('');
    $('#num3').val('');
    $('#results').hide();
    $('.btn-class').removeClass('activeSubMenuButton');
  }

  $('.btn-class').click(function () {
      // Hide all sections
      $('.hwParts').hide();
      clearInputsAndError()
      
      // Show the selected section
      $('#' + $(this).attr('data-target')).show();
      $(this).addClass('activeSubMenuButton');
  });

  // Begin scripts for pt 2
  // Function that calculates the sum, the average, and the product of the numbers 
  // and finds the largest and smallest number
  $('#results').hide()
  $('#calculateBtn').click(function () {
    // Get the numbers from the input fields
    const num1 = $('#num1').val()
    const num2 = $('#num2').val()
    const num3 = $('#num3').val()

    // Process data -- Calculations
    const sum = parseInt(num1) + parseInt(num2) + parseInt(num3);
    const average = (sum / 3).toFixed(2);
    const product = num1 * num2 * num3;
    const largest = Math.max(num1, num2, num3);
    const smallest = Math.min(num1, num2, num3);

    // If the user entered in all fields then display the results in results container, otherwise display an error message
    if (num1 == '' || num2 == '' || num3 == '') {
      $('#results').html(`
        <p class="error">Please enter in all fields!</p>
      `).fadeTo("slow", 0.7)
    } else {
      $('#results').html(`
        <div class="container d-flex justify-content-between">
          <p>The sum of the numbers is:</p>
          <p>${sum}</p>
        </div>
        <div class="container d-flex justify-content-between">
          <p>The average of the numbers is:</p>
          <p>${average}</p>
        </div>
        <div class="container d-flex justify-content-between">
          <p>The product of the numbers is:</p>
          <p>${product}</p>
        </div>
        <div class="container d-flex justify-content-between">
          <p>The largest of the numbers is:</p>
          <p>${largest}</p>
        </div>
        <div class="container d-flex justify-content-between">
          <p>The smallest of the numbers is:</p>
          <p>${smallest}</p>
        </div>
      `).fadeTo("slow", 0.7);
    }

    $('#results').show();
    // Clear the fields after the clear button is clicked
    $('#clearBtn').click(function clear(){
      $('#num1').val('');
      $('#num2').val('');
      $('#num3').val('');
      $('#results').hide();
    })
  });

  // Begin Script for Pt 3 - Extra Credit
  // Function that calculates the exchange rate given the input in dollars
  // Grab our rates from table
  const euroRate = parseFloat($('#euroRate').text());
  const canadianRate = parseFloat($('#canadianRate').text());
  const hkRate = parseFloat($('#hkRate').text());
  const yenRate = parseFloat($('#yenRate').text());
  const mexicanRate = parseFloat($('#mexicanRate').text());
  
  // After the user clicks the calculate button,
  // display the processed results in their respective table cells under the value column
  $('#calculateExchangeRateBtn').click(function (){
    const dollars = parseFloat($('#usdInput').val());
    if (isNaN(dollars)) {
      $('#extraCreditError').html(`
      <p class="error text-center">Enter a number!!</p>
      `).fadeTo("slow", 0.7).hide(1500)
    } else {
      // Process data -- Calculations
      const euro = (dollars * euroRate).toFixed(2);
      const canadian = (dollars * canadianRate).toFixed(2);
      const hk = (dollars * hkRate).toFixed(2);
      const yen = (dollars * yenRate).toFixed(2);
      const mexican = (dollars * mexicanRate).toFixed(2);
      
      $('#euroValue').text(euro);
      $('#canadianValue').text(canadian);
      $('#hkValue').text(hk);
      $('#yenValue').text(yen);
      $('#mexicanValue').text(mexican);
    }
  })

  // Hide and Show instructions
  $('#pt3ExtraCreditInfoBtn').click(function() {
    $('.pt3ExtraCreditInfo').toggle();
  })
});