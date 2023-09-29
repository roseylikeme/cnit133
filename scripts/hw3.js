$(function () {
  // Page loads with sidebar closed
  closeNav();
  // Script for submenu:
  $('.hwParts').hide();
  $('.overview').show();

  function clearInputsAndError() {
    $('#hwAverage').val('');
    $('#midtermExam').val('');
    $('#finalExam').val('');
    $('#participation').val('');
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

  // Begin scripts for HW3 PT1
  // Function that calculates grade average
  $('#results').hide()
  $('#calculateBtn').click(function () {

    $('#results').show();
    // Clear the fields after the clear button is clicked
    $('#clearBtn').click(function clear(){
      $('#hwAverage').val('');
      $('#midtermExam').val('');
      $('#finalExam').val('');
      $('#participation').val('');
      $('#results').hide();
    })
  });
});