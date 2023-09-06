window.addEventListener('load', closeNav);

function openNav() {
  $("#mySidebar").css("width", "200px");
  $("#main").css("margin-left", "200px");
}

function closeNav() {
  $("#mySidebar").css("width", "0");
  $("#main").css("margin-left", "0");
}

$(function () {
  // Script for submenu:
  $('.hwParts').hide();
  $('.overview').show();

  $('.btn-class').click(function () {
      // Hide all sections
      $('.hwParts').hide();
      $('.btn-class').removeClass('activeSubMenuButton');
      
      // Show the selected section
      $('#' + $(this).attr('data-target')).show();
      $(this).addClass('activeSubMenuButton');
  });
});

// Function that calculates the sum, the average, and the product of the numbers and finds the largest and smallest number
$(function () {
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
      `);
    } else {
      $('#results').html(`
        <p>The sum of the numbers is: ${sum}</p>
        <p>The average of the numbers is: ${average}</p>
        <p>The product of the numbers is: ${product}</p>
        <p>The largest of the numbers is: ${largest}</p>
        <p>The smallest of the numbers is: ${smallest}</p>
      `);
    }

    $('#results').show();
    // Clear the fields after the clear button is clicked
    $('#clearBtn').click(function (){
      $('#num1').val('');
      $('#num2').val('');
      $('#num3').val('');
      $('#results').hide();
    })


  });
});