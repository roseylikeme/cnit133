$(function () {
  // Page loads with sidebar closed
  closeNav();
  // Script for submenu:
  $('.hwParts').hide();
  $('.overview').show();

  $('.btn-class').click(function () {
      // Hide all sections
      $('.hwParts').hide();
      clearInputsAndError()
      
      // Show the selected section
      $('#' + $(this).attr('data-target')).show();
      $(this).addClass('activeSubMenuButton');
  });

  // Begin scripts for HW3 PT1
  // Function that calculates grade average
  $('#results').hide()
  $('#calculateBtn').click(function () {

    $('#results').show();
    // If calculate button is clicked show in results section that it was clicked
    // TODO: Modify this to show the grade average
    $('#results').text('Calculate button clicked')
    // Clear the fields after the clear button is clicked
    $('#clearBtn').click(function (){
      clearInputsAndError()
    })
  });
});

function clearInputsAndError() {
  console.log('clearInputsAndError function called')
  $('#hwAverage').val('');
  $('#midtermExam').val('');
  $('#finalExam').val('');
  $('#participation').val('');
  $('#results').hide();
  $('.btn-class').removeClass('activeSubMenuButton');
}