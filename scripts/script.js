window.addEventListener('load', closeNav);

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
  }
  
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

$(function () {
  // Script for submenu:
  $('.hwParts').hide();
  $('#description').show();
  $('#descriptionBtn').addClass('activeSubMenuButton');

  $('.btn-class').click(function () {
      // Hide all sections
      $('.hwParts').hide();
      $('.btn-class').removeClass('activeSubMenuButton');
      
      // Show the selected section
      $('#' + $(this).attr('data-target')).show();
      $(this).addClass('activeSubMenuButton');
  });
});