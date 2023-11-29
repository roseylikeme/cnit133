function openNav() {
    $("#mySidebar").css("width", "200px");
    $("#main").css("margin-left", "200px");
  }
  
function closeNav() {
  $("#mySidebar").css("width", "0");
  $("#main").css("margin-left", "0");
}

$(document).ready(function () {
  closeNav();
  $('.hwParts').hide();
  $('.overview').show();

  $('.btn-class').click(function () {
      showSection($(this).attr('data-target'));
  });

});

function showSection(targetId) {
  $('.hwParts').hide();
  $('#' + targetId).show();
  $('.btn-class').removeClass('activeSubMenuButton');
  $('[data-target="' + targetId + '"]').addClass('activeSubMenuButton');
}